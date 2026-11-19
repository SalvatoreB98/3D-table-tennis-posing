/**
 * Interactive Dope Sheet & Time Ruler UI.
 */
export class TimelineUI {
  constructor(timeline, ikSolver, callbacks) {
    this.timeline = timeline;
    this.ik = ikSolver;
    this.cb = callbacks; // { onFrameChange, onSelectTarget, onKeyframeEdited }

    this.rulerCanvas = document.getElementById('ds-ruler-canvas');
    this.keysCanvas = document.getElementById('ds-keys-canvas');
    this.tracksList = document.getElementById('ds-tracks-list');

    this.selectedTargetId = null;
    this.selectedKey = null; // { targetId, frame }
    this.draggingScrub = false;
    this.draggingKey = null; // { targetId, origFrame, currentFrame }

    this.trackOrder = [];
    this.rowHeight = 24;

    this._bindEvents();
  }

  setSelectedTarget(id) {
    this.selectedTargetId = id;
    this.rebuildTrackList();
    this.render();
  }

  rebuildTrackList() {
    this.trackOrder = Object.keys(this.ik.targets);
    this.tracksList.innerHTML = '';

    for (const id of this.trackOrder) {
      const t = this.ik.targets[id];
      const row = document.createElement('div');
      row.className = `ds-track-row${id === this.selectedTargetId ? ' active' : ''}`;
      row.innerHTML = `<span class="handle-dot" style="background:${t.color}"></span><span>${t.label}</span>`;
      row.addEventListener('click', () => {
        this.cb.onSelectTarget(id);
      });
      this.tracksList.appendChild(row);
    }

    // Resize keysCanvas height to match track rows
    const totalH = Math.max(this.trackOrder.length * this.rowHeight, 120);
    this.keysCanvas.style.height = `${totalH}px`;
    this.render();
  }

  _frameToX(frame, width) {
    const pad = 12;
    const usable = Math.max(width - pad * 2, 10);
    return pad + (frame / Math.max(this.timeline.totalFrames, 1)) * usable;
  }

  _xToFrame(x, width) {
    const pad = 12;
    const usable = Math.max(width - pad * 2, 10);
    const f = ((x - pad) / usable) * this.timeline.totalFrames;
    return Math.max(0, Math.min(this.timeline.totalFrames, Math.round(f)));
  }

  _bindEvents() {
    const handleRulerPointer = (e) => {
      const rect = this.rulerCanvas.getBoundingClientRect();
      const frame = this._xToFrame(e.clientX - rect.left, rect.width);
      this.cb.onFrameChange(frame);
    };

    this.rulerCanvas.addEventListener('pointerdown', (e) => {
      this.draggingScrub = true;
      this.rulerCanvas.setPointerCapture(e.pointerId);
      handleRulerPointer(e);
    });
    this.rulerCanvas.addEventListener('pointermove', (e) => {
      if (this.draggingScrub) handleRulerPointer(e);
    });
    this.rulerCanvas.addEventListener('pointerup', (e) => {
      this.draggingScrub = false;
      try { this.rulerCanvas.releasePointerCapture(e.pointerId); } catch {}
    });

    this.keysCanvas.addEventListener('pointerdown', (e) => {
      const rect = this.keysCanvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rowIdx = Math.floor(y / this.rowHeight);
      const targetId = this.trackOrder[rowIdx];

      if (targetId) {
        const frames = this.timeline.getTrackKeyframeFrames(targetId);
        let hitFrame = null;
        for (const f of frames) {
          const kx = this._frameToX(f, rect.width);
          if (Math.abs(kx - x) <= 7) {
            hitFrame = f;
            break;
          }
        }
        if (hitFrame !== null) {
          this.selectedKey = { targetId, frame: hitFrame };
          this.draggingKey = { targetId, origFrame: hitFrame, currentFrame: hitFrame };
          this.keysCanvas.setPointerCapture(e.pointerId);
          this.cb.onSelectTarget(targetId);
          this.cb.onFrameChange(hitFrame);
          this.render();
          return;
        }
      }

      // Otherwise scrub
      this.selectedKey = null;
      this.draggingScrub = true;
      this.keysCanvas.setPointerCapture(e.pointerId);
      const frame = this._xToFrame(x, rect.width);
      this.cb.onFrameChange(frame);
    });

    this.keysCanvas.addEventListener('pointermove', (e) => {
      const rect = this.keysCanvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      if (this.draggingKey) {
        const newFrame = this._xToFrame(x, rect.width);
        if (newFrame !== this.draggingKey.currentFrame) {
          const moved = this.timeline.moveTargetKeyframe(
            this.draggingKey.targetId,
            this.draggingKey.currentFrame,
            newFrame
          );
          this.draggingKey.currentFrame = moved;
          this.selectedKey = { targetId: this.draggingKey.targetId, frame: moved };
          this.cb.onFrameChange(moved);
          this.cb.onKeyframeEdited();
        }
      } else if (this.draggingScrub) {
        const frame = this._xToFrame(x, rect.width);
        this.cb.onFrameChange(frame);
      }
    });

    this.keysCanvas.addEventListener('pointerup', (e) => {
      this.draggingKey = null;
      this.draggingScrub = false;
      try { this.keysCanvas.releasePointerCapture(e.pointerId); } catch {}
    });

    window.addEventListener('resize', () => this.render());
  }

  render() {
    this._renderRuler();
    this._renderKeys();
  }

  _syncCanvasSize(canvas) {
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    const w = Math.max(1, Math.floor(rect.width * dpr));
    const h = Math.max(1, Math.floor(rect.height * dpr));
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
    }
    const ctx = canvas.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    return { ctx, width: rect.width, height: rect.height };
  }

  _renderRuler() {
    const { ctx, width, height } = this._syncCanvasSize(this.rulerCanvas);
    ctx.clearRect(0, 0, width, height);

    const total = this.timeline.totalFrames;
    const step = total <= 60 ? 5 : total <= 150 ? 10 : 20;

    ctx.strokeStyle = 'rgba(255,255,255,0.12)';
    ctx.fillStyle = '#9098ab';
    ctx.font = '10px JetBrains Mono, monospace';
    ctx.textAlign = 'center';

    for (let f = 0; f <= total; f += step) {
      const x = this._frameToX(f, width);
      ctx.beginPath();
      ctx.moveTo(x, height - 8);
      ctx.lineTo(x, height);
      ctx.stroke();
      ctx.fillText(String(f), x, 11);
    }

    // Playhead badge
    const px = this._frameToX(this.timeline.currentFrame, width);
    ctx.fillStyle = '#4c8bf5';
    ctx.beginPath();
    ctx.moveTo(px - 6, 0);
    ctx.lineTo(px + 6, 0);
    ctx.lineTo(px + 6, 12);
    ctx.lineTo(px, 20);
    ctx.lineTo(px - 6, 12);
    ctx.closePath();
    ctx.fill();
  }

  _renderKeys() {
    const { ctx, width, height } = this._syncCanvasSize(this.keysCanvas);
    ctx.clearRect(0, 0, width, height);

    const total = this.timeline.totalFrames;
    const step = total <= 60 ? 5 : total <= 150 ? 10 : 20;

    // Vertical grid lines
    ctx.strokeStyle = 'rgba(255,255,255,0.05)';
    ctx.lineWidth = 1;
    for (let f = 0; f <= total; f += step) {
      const x = this._frameToX(f, width);
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }

    // Rows & keyframe diamonds
    this.trackOrder.forEach((id, idx) => {
      const y = idx * this.rowHeight;
      const cy = y + this.rowHeight / 2;

      if (id === this.selectedTargetId) {
        ctx.fillStyle = 'rgba(76, 139, 245, 0.08)';
        ctx.fillRect(0, y, width, this.rowHeight);
      }

      ctx.strokeStyle = 'rgba(255,255,255,0.04)';
      ctx.beginPath();
      ctx.moveTo(0, y + this.rowHeight);
      ctx.lineTo(width, y + this.rowHeight);
      ctx.stroke();

      const frames = this.timeline.getTrackKeyframeFrames(id);
      for (const f of frames) {
        const x = this._frameToX(f, width);
        const isSel =
          this.selectedKey &&
          this.selectedKey.targetId === id &&
          this.selectedKey.frame === f;

        ctx.save();
        ctx.translate(x, cy);
        ctx.rotate(Math.PI / 4);
        ctx.fillStyle = isSel ? '#ffffff' : '#f5a623';
        ctx.strokeStyle = '#14161a';
        ctx.lineWidth = 1.5;
        const r = isSel ? 5 : 4;
        ctx.fillRect(-r, -r, r * 2, r * 2);
        ctx.strokeRect(-r, -r, r * 2, r * 2);
        ctx.restore();
      }
    });

    // Playhead line
    const px = this._frameToX(this.timeline.currentFrame, width);
    ctx.strokeStyle = '#4c8bf5';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(px, 0);
    ctx.lineTo(px, height);
    ctx.stroke();
  }
}
