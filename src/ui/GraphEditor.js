/**
 * Intuitive Blender-style F-Curve Graph Editor.
 * Supports X/Y/Z channels, draggable keyframe nodes, draggable Bezier handles, and one-click easing presets.
 */
const CH_META = [
  { key: 'px', label: 'X', color: '#ef5350' },
  { key: 'py', label: 'Y', color: '#66bb6a' },
  { key: 'pz', label: 'Z', color: '#42a5f5' },
];

export class GraphEditor {
  constructor(timeline, ikSolver, callbacks) {
    this.timeline = timeline;
    this.ik = ikSolver;
    this.cb = callbacks; // { onFrameChange, onCurveEdited }

    this.canvas = document.getElementById('graph-canvas');
    this.targetLabel = document.getElementById('graph-target-label');
    this.selectedTargetId = null;

    this.visibleChannels = { px: true, py: true, pz: true };
    this.minVal = -1.0;
    this.maxVal = 2.0;

    // Selected keyframe in graph: { channel, index }
    this.selectedNode = null;
    // Drag state: { type: 'key'|'handleIn'|'handleOut'|'pan', channel, index, startY, startVal }
    this.drag = null;

    this._bindEvents();
  }

  setSelectedTarget(id) {
    this.selectedTargetId = id;
    this.selectedNode = null;
    const t = this.ik.targets[id];
    this.targetLabel.textContent = t ? `(${t.label})` : '(Seleziona un controller)';
    this.fitView();
    this.render();
  }

  fitView() {
    if (!this.selectedTargetId) return;
    const track = this.timeline.tracks[this.selectedTargetId];
    let min = Infinity;
    let max = -Infinity;

    if (track) {
      for (const ch of CH_META) {
        if (!this.visibleChannels[ch.key]) continue;
        const list = track[ch.key];
        if (!list) continue;
        for (const k of list) {
          min = Math.min(min, k.value);
          max = Math.max(max, k.value);
        }
      }
    }

    if (!Number.isFinite(min) || !Number.isFinite(max)) {
      const t = this.ik.targets[this.selectedTargetId];
      if (t) {
        min = Math.min(t.position.x, t.position.y, t.position.z) - 0.5;
        max = Math.max(t.position.x, t.position.y, t.position.z) + 0.5;
      } else {
        min = -1;
        max = 2;
      }
    }

    const span = Math.max(max - min, 0.4);
    this.minVal = min - span * 0.25;
    this.maxVal = max + span * 0.25;
  }

  applyEasingPreset(interp) {
    if (!this.selectedTargetId) return;
    const track = this.timeline.tracks[this.selectedTargetId];
    if (!track) return;

    if (this.selectedNode) {
      const list = track[this.selectedNode.channel];
      const kf = list && list[this.selectedNode.index];
      if (kf) {
        kf.interp = interp;
        kf.customHandles = false;
        this.timeline._recomputeAutoHandles(list);
      }
    } else {
      // Apply to all visible channels on this target
      for (const ch of CH_META) {
        if (!this.visibleChannels[ch.key]) continue;
        const list = track[ch.key];
        if (!list) continue;
        for (const kf of list) {
          kf.interp = interp;
          kf.customHandles = false;
        }
        this.timeline._recomputeAutoHandles(list);
      }
    }

    this._syncEaseButtons(interp);
    this.cb.onCurveEdited();
    this.render();
  }

  _syncEaseButtons(interp) {
    document.querySelectorAll('.ease-btn').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.ease === interp);
    });
  }

  _frameToX(frame, width) {
    const pad = 26;
    const usable = Math.max(width - pad * 2, 10);
    return pad + (frame / Math.max(this.timeline.totalFrames, 1)) * usable;
  }

  _xToFrame(x, width) {
    const pad = 26;
    const usable = Math.max(width - pad * 2, 10);
    return Math.max(0, Math.min(this.timeline.totalFrames, Math.round(((x - pad) / usable) * this.timeline.totalFrames)));
  }

  _valToY(val, height) {
    const pad = 18;
    const usable = Math.max(height - pad * 2, 10);
    const norm = (val - this.minVal) / Math.max(this.maxVal - this.minVal, 1e-4);
    return height - pad - norm * usable;
  }

  _yToVal(y, height) {
    const pad = 18;
    const usable = Math.max(height - pad * 2, 10);
    const norm = (height - pad - y) / usable;
    return this.minVal + norm * (this.maxVal - this.minVal);
  }

  _bindEvents() {
    document.getElementById('chk-ch-x').addEventListener('change', (e) => {
      this.visibleChannels.px = e.target.checked;
      this.render();
    });
    document.getElementById('chk-ch-y').addEventListener('change', (e) => {
      this.visibleChannels.py = e.target.checked;
      this.render();
    });
    document.getElementById('chk-ch-z').addEventListener('change', (e) => {
      this.visibleChannels.pz = e.target.checked;
      this.render();
    });
    document.getElementById('btn-graph-fit').addEventListener('click', () => {
      this.fitView();
      this.render();
    });
    document.querySelectorAll('.ease-btn').forEach((btn) => {
      btn.addEventListener('click', () => this.applyEasingPreset(btn.dataset.ease));
    });

    this.canvas.addEventListener('pointerdown', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (!this.selectedTargetId) return;
      const track = this.timeline.tracks[this.selectedTargetId];
      if (!track) return;

      // 1. Check Bezier handles of currently selected node first
      if (this.selectedNode) {
        const list = track[this.selectedNode.channel];
        const kf = list && list[this.selectedNode.index];
        if (kf && kf.interp !== 'linear' && kf.interp !== 'step') {
          const hInX = this._frameToX(kf.frame + (kf.handleIn?.df ?? -6), rect.width);
          const hInY = this._valToY(kf.value + (kf.handleIn?.dv ?? 0), rect.height);
          if (Math.hypot(x - hInX, y - hInY) <= 8) {
            this.drag = { type: 'handleIn', ...this.selectedNode };
            this.canvas.setPointerCapture(e.pointerId);
            return;
          }
          const hOutX = this._frameToX(kf.frame + (kf.handleOut?.df ?? 6), rect.width);
          const hOutY = this._valToY(kf.value + (kf.handleOut?.dv ?? 0), rect.height);
          if (Math.hypot(x - hOutX, y - hOutY) <= 8) {
            this.drag = { type: 'handleOut', ...this.selectedNode };
            this.canvas.setPointerCapture(e.pointerId);
            return;
          }
        }
      }

      // 2. Check keyframe dots across visible channels
      for (const ch of CH_META) {
        if (!this.visibleChannels[ch.key]) continue;
        const list = track[ch.key];
        if (!list) continue;
        for (let i = 0; i < list.length; i++) {
          const k = list[i];
          const kx = this._frameToX(k.frame, rect.width);
          const ky = this._valToY(k.value, rect.height);
          if (Math.hypot(x - kx, y - ky) <= 8) {
            this.selectedNode = { channel: ch.key, index: i };
            this._syncEaseButtons(k.interp || 'bezier');
            this.drag = { type: 'key', channel: ch.key, index: i };
            this.canvas.setPointerCapture(e.pointerId);
            this.cb.onFrameChange(k.frame);
            this.render();
            return;
          }
        }
      }

      // 3. Otherwise scrub playhead
      this.selectedNode = null;
      this.drag = { type: 'scrub' };
      this.canvas.setPointerCapture(e.pointerId);
      this.cb.onFrameChange(this._xToFrame(x, rect.width));
      this.render();
    });

    this.canvas.addEventListener('pointermove', (e) => {
      if (!this.drag) return;
      const rect = this.canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (this.drag.type === 'scrub') {
        this.cb.onFrameChange(this._xToFrame(x, rect.width));
        return;
      }

      const track = this.timeline.tracks[this.selectedTargetId];
      const list = track && track[this.drag.channel];
      const kf = list && list[this.drag.index];
      if (!kf) return;

      if (this.drag.type === 'key') {
        kf.value = this._yToVal(y, rect.height);
        const newFrame = this._xToFrame(x, rect.width);
        // Keep within neighbor frames for clean graph editing
        const prevFrame = this.drag.index > 0 ? list[this.drag.index - 1].frame + 1 : 0;
        const nextFrame = this.drag.index < list.length - 1 ? list[this.drag.index + 1].frame - 1 : this.timeline.totalFrames;
        kf.frame = Math.max(prevFrame, Math.min(nextFrame, newFrame));
        this.timeline._recomputeAutoHandles(list);
        this.cb.onFrameChange(kf.frame);
        this.cb.onCurveEdited();
      } else if (this.drag.type === 'handleIn') {
        const f = this._xToFrame(x, rect.width);
        const v = this._yToVal(y, rect.height);
        kf.customHandles = true;
        kf.interp = 'bezier';
        kf.handleIn = { df: Math.min(-0.5, f - kf.frame), dv: v - kf.value };
        this.cb.onCurveEdited();
      } else if (this.drag.type === 'handleOut') {
        const f = this._xToFrame(x, rect.width);
        const v = this._yToVal(y, rect.height);
        kf.customHandles = true;
        kf.interp = 'bezier';
        kf.handleOut = { df: Math.max(0.5, f - kf.frame), dv: v - kf.value };
        this.cb.onCurveEdited();
      }

      this.render();
    });

    this.canvas.addEventListener('pointerup', (e) => {
      this.drag = null;
      try { this.canvas.releasePointerCapture(e.pointerId); } catch {}
    });

    // Mouse wheel vertical zoom
    this.canvas.addEventListener('wheel', (e) => {
      e.preventDefault();
      const center = 0.5 * (this.minVal + this.maxVal);
      const half = 0.5 * (this.maxVal - this.minVal);
      const factor = e.deltaY > 0 ? 1.12 : 0.89;
      const newHalf = Math.max(0.05, Math.min(20, half * factor));
      this.minVal = center - newHalf;
      this.maxVal = center + newHalf;
      this.render();
    }, { passive: false });

    window.addEventListener('resize', () => this.render());
  }

  render() {
    const rect = this.canvas.getBoundingClientRect();
    if (rect.width <= 0 || rect.height <= 0) return;

    const dpr = window.devicePixelRatio || 1;
    const w = Math.floor(rect.width * dpr);
    const h = Math.floor(rect.height * dpr);
    if (this.canvas.width !== w || this.canvas.height !== h) {
      this.canvas.width = w;
      this.canvas.height = h;
    }

    const ctx = this.canvas.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const width = rect.width;
    const height = rect.height;

    ctx.clearRect(0, 0, width, height);

    // Background grid (horizontal value lines)
    ctx.font = '10px JetBrains Mono, monospace';
    ctx.fillStyle = '#6f778a';
    const gridSteps = 4;
    for (let i = 0; i <= gridSteps; i++) {
      const val = this.minVal + ((this.maxVal - this.minVal) * i) / gridSteps;
      const y = this._valToY(val, height);
      ctx.strokeStyle = Math.abs(val) < 0.01 ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.05)';
      ctx.beginPath();
      ctx.moveTo(26, y);
      ctx.lineTo(width - 10, y);
      ctx.stroke();
      ctx.fillText(val.toFixed(1), 2, y + 3);
    }

    // Vertical frame grid
    const total = this.timeline.totalFrames;
    const fStep = total <= 60 ? 10 : 15;
    for (let f = 0; f <= total; f += fStep) {
      const x = this._frameToX(f, width);
      ctx.strokeStyle = 'rgba(255,255,255,0.05)';
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }

    // Playhead
    const px = this._frameToX(this.timeline.currentFrame, width);
    ctx.strokeStyle = 'rgba(76, 139, 245, 0.8)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(px, 0);
    ctx.lineTo(px, height);
    ctx.stroke();

    if (!this.selectedTargetId) return;
    const track = this.timeline.tracks[this.selectedTargetId];
    if (!track) {
      ctx.fillStyle = '#6f778a';
      ctx.font = '12px Inter, sans-serif';
      ctx.fillText('Premi I o "+ Keyframe" per creare curve di animazione', 44, height / 2);
      return;
    }

    // Draw F-Curves
    for (const ch of CH_META) {
      if (!this.visibleChannels[ch.key]) continue;
      const list = track[ch.key];
      if (!list || list.length === 0) continue;

      ctx.strokeStyle = ch.color;
      ctx.lineWidth = 2;
      ctx.beginPath();

      const startF = list[0].frame;
      const endF = list[list.length - 1].frame;

      if (list.length === 1) {
        const y = this._valToY(list[0].value, height);
        ctx.moveTo(this._frameToX(0, width), y);
        ctx.lineTo(this._frameToX(total, width), y);
      } else {
        // Flat extension before first keyframe
        const y0 = this._valToY(list[0].value, height);
        ctx.moveTo(this._frameToX(0, width), y0);
        ctx.lineTo(this._frameToX(startF, width), y0);

        const samples = Math.max(60, (endF - startF) * 2);
        for (let s = 0; s <= samples; s++) {
          const f = startF + ((endF - startF) * s) / samples;
          const v = this.timeline.evaluateChannel(this.selectedTargetId, ch.key, f);
          ctx.lineTo(this._frameToX(f, width), this._valToY(v, height));
        }

        // Flat extension after last keyframe
        const yEnd = this._valToY(list[list.length - 1].value, height);
        ctx.lineTo(this._frameToX(total, width), yEnd);
      }
      ctx.stroke();

      // Draw keyframe dots
      for (let i = 0; i < list.length; i++) {
        const k = list[i];
        const kx = this._frameToX(k.frame, width);
        const ky = this._valToY(k.value, height);
        const isSel =
          this.selectedNode &&
          this.selectedNode.channel === ch.key &&
          this.selectedNode.index === i;

        // Draw Bezier handles if selected
        if (isSel && k.interp !== 'linear' && k.interp !== 'step') {
          const hInX = this._frameToX(k.frame + (k.handleIn?.df ?? -6), width);
          const hInY = this._valToY(k.value + (k.handleIn?.dv ?? 0), height);
          const hOutX = this._frameToX(k.frame + (k.handleOut?.df ?? 6), width);
          const hOutY = this._valToY(k.value + (k.handleOut?.dv ?? 0), height);

          ctx.strokeStyle = 'rgba(255,255,255,0.6)';
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.moveTo(hInX, hInY);
          ctx.lineTo(kx, ky);
          ctx.lineTo(hOutX, hOutY);
          ctx.stroke();

          for (const [hx, hy] of [[hInX, hInY], [hOutX, hOutY]]) {
            ctx.fillStyle = '#ffd166';
            ctx.beginPath();
            ctx.arc(hx, hy, 4, 0, Math.PI * 2);
            ctx.fill();
          }
        }

        ctx.fillStyle = isSel ? '#ffffff' : ch.color;
        ctx.strokeStyle = '#14161a';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(kx, ky, isSel ? 5.5 : 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      }
    }
  }
}
