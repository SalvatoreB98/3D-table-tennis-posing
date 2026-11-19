import * as THREE from 'three';

const CHANNELS = ['px', 'py', 'pz', 'rx', 'ry', 'rz'];

/**
 * Evaluates a 1D cubic Bezier F-Curve segment between k0 and k1 at `frame`.
 */
function evaluateBezierSegment(k0, k1, frame) {
  const dt = k1.frame - k0.frame;
  if (dt <= 0) return k0.value;

  const p0x = k0.frame;
  const p0y = k0.value;
  const p3x = k1.frame;
  const p3y = k1.value;

  let p1x = p0x + (k0.handleOut ? k0.handleOut.df : dt * 0.35);
  let p1y = p0y + (k0.handleOut ? k0.handleOut.dv : 0);
  let p2x = p3x + (k1.handleIn ? k1.handleIn.df : -dt * 0.35);
  let p2y = p3y + (k1.handleIn ? k1.handleIn.dv : 0);

  // Clamp handle X to prevent curve from looping backwards in time
  p1x = Math.min(Math.max(p1x, p0x), p3x);
  p2x = Math.max(Math.min(p2x, p3x), p0x);

  // Binary search t in [0, 1] such that Bx(t) == frame
  let lo = 0;
  let hi = 1;
  let t = (frame - p0x) / dt;
  for (let i = 0; i < 16; i++) {
    const u = 1 - t;
    const bx = u * u * u * p0x + 3 * u * u * t * p1x + 3 * u * t * t * p2x + t * t * t * p3x;
    if (Math.abs(bx - frame) < 1e-4) break;
    if (bx < frame) lo = t;
    else hi = t;
    t = 0.5 * (lo + hi);
  }

  const u = 1 - t;
  return u * u * u * p0y + 3 * u * u * t * p1y + 3 * u * t * t * p2y + t * t * t * p3y;
}

export class Timeline {
  constructor() {
    this.fps = 30;
    this.totalFrames = 90;
    this.currentFrame = 0;
    this.isPlaying = false;
    this.loop = true;
    this.autoKey = false;

    // tracks[targetId][channel] = Array<Keyframe>
    this.tracks = {};
  }

  clear() {
    this.tracks = {};
  }

  _ensureChannel(targetId, channel) {
    if (!this.tracks[targetId]) this.tracks[targetId] = {};
    if (!this.tracks[targetId][channel]) this.tracks[targetId][channel] = [];
    return this.tracks[targetId][channel];
  }

  /**
   * Keyframe all channels of a single IK target at `frame`.
   */
  setTargetKeyframe(targetId, targetData, frame = this.currentFrame, interp = 'bezier') {
    const f = Math.round(frame);
    const values = {
      px: targetData.position.x,
      py: targetData.position.y,
      pz: targetData.position.z,
      rx: targetData.rotation.x,
      ry: targetData.rotation.y,
      rz: targetData.rotation.z,
    };

    for (const ch of CHANNELS) {
      this.setChannelKeyframe(targetId, ch, f, values[ch], interp);
    }
  }

  /**
   * Keyframe all IK targets at `frame`.
   */
  setFullPoseKeyframe(targets, frame = this.currentFrame, interp = 'bezier') {
    for (const [id, t] of Object.entries(targets)) {
      this.setTargetKeyframe(id, t, frame, interp);
    }
  }

  setChannelKeyframe(targetId, channel, frame, value, interp = 'bezier') {
    const list = this._ensureChannel(targetId, channel);
    const existing = list.find((k) => k.frame === frame);
    if (existing) {
      existing.value = value;
      if (interp) existing.interp = interp;
    } else {
      const kf = {
        frame,
        value,
        interp,
        handleIn: { df: -6, dv: 0 },
        handleOut: { df: 6, dv: 0 },
      };
      list.push(kf);
      list.sort((a, b) => a.frame - b.frame);
    }
    this._recomputeAutoHandles(list);
  }

  /**
   * Automatically adjusts Bezier handles for smooth transitions unless user customized them.
   */
  _recomputeAutoHandles(list) {
    for (let i = 0; i < list.length; i++) {
      const k = list[i];
      if (k.customHandles) continue;

      const prev = list[i - 1];
      const next = list[i + 1];

      if (k.interp === 'easeIn') {
        const dtOut = next ? (next.frame - k.frame) * 0.45 : 6;
        k.handleOut = { df: dtOut, dv: 0 };
        k.handleIn = { df: prev ? -(k.frame - prev.frame) * 0.15 : -4, dv: 0 };
      } else if (k.interp === 'easeOut') {
        const dtIn = prev ? (k.frame - prev.frame) * 0.45 : 6;
        k.handleIn = { df: -dtIn, dv: 0 };
        k.handleOut = { df: next ? (next.frame - k.frame) * 0.15 : 4, dv: 0 };
      } else {
        const dtIn = prev ? (k.frame - prev.frame) * 0.35 : 6;
        const dtOut = next ? (next.frame - k.frame) * 0.35 : 6;
        k.handleIn = { df: -dtIn, dv: 0 };
        k.handleOut = { df: dtOut, dv: 0 };
      }
    }
  }

  deleteTargetKeyframe(targetId, frame) {
    const f = Math.round(frame);
    const track = this.tracks[targetId];
    if (!track) return;
    for (const ch of CHANNELS) {
      if (track[ch]) {
        track[ch] = track[ch].filter((k) => k.frame !== f);
      }
    }
  }

  deleteFullPoseKeyframe(frame) {
    const f = Math.round(frame);
    for (const targetId of Object.keys(this.tracks)) {
      this.deleteTargetKeyframe(targetId, f);
    }
  }

  moveTargetKeyframe(targetId, fromFrame, toFrame) {
    const fFrom = Math.round(fromFrame);
    const fTo = Math.max(0, Math.min(this.totalFrames, Math.round(toFrame)));
    if (fFrom === fTo) return fFrom;

    const track = this.tracks[targetId];
    if (!track) return fFrom;

    for (const ch of CHANNELS) {
      const list = track[ch];
      if (!list) continue;
      // Remove any colliding keyframe at destination
      const filtered = list.filter((k) => k.frame !== fTo || k.frame === fFrom);
      const kf = filtered.find((k) => k.frame === fFrom);
      if (kf) kf.frame = fTo;
      filtered.sort((a, b) => a.frame - b.frame);
      track[ch] = filtered;
      this._recomputeAutoHandles(track[ch]);
    }
    return fTo;
  }

  getTrackKeyframeFrames(targetId) {
    const track = this.tracks[targetId];
    if (!track) return [];
    const set = new Set();
    for (const ch of CHANNELS) {
      if (track[ch]) {
        for (const k of track[ch]) set.add(k.frame);
      }
    }
    return Array.from(set).sort((a, b) => a - b);
  }

  getAllKeyframeFrames() {
    const set = new Set();
    for (const id of Object.keys(this.tracks)) {
      for (const f of this.getTrackKeyframeFrames(id)) set.add(f);
    }
    return Array.from(set).sort((a, b) => a - b);
  }

  evaluateChannel(targetId, channel, frame) {
    const track = this.tracks[targetId];
    if (!track || !track[channel] || track[channel].length === 0) return null;
    const list = track[channel];

    if (frame <= list[0].frame) return list[0].value;
    if (frame >= list[list.length - 1].frame) return list[list.length - 1].value;

    for (let i = 0; i < list.length - 1; i++) {
      const k0 = list[i];
      const k1 = list[i + 1];
      if (frame >= k0.frame && frame <= k1.frame) {
        if (k0.interp === 'step') return k0.value;
        if (k0.interp === 'linear') {
          const t = (frame - k0.frame) / (k1.frame - k0.frame);
          return k0.value + (k1.value - k0.value) * t;
        }
        return evaluateBezierSegment(k0, k1, frame);
      }
    }
    return list[list.length - 1].value;
  }

  evaluatePose(frame = this.currentFrame) {
    const pose = {};
    for (const targetId of Object.keys(this.tracks)) {
      const vals = {};
      let hasAny = false;
      for (const ch of CHANNELS) {
        const v = this.evaluateChannel(targetId, ch, frame);
        if (v !== null) {
          vals[ch] = v;
          hasAny = true;
        }
      }
      if (hasAny) pose[targetId] = vals;
    }
    return pose;
  }

  sampleMotionPath(targetId, steps = 60) {
    const frames = this.getTrackKeyframeFrames(targetId);
    if (frames.length < 2) return [];
    const start = frames[0];
    const end = frames[frames.length - 1];
    const points = [];
    for (let i = 0; i <= steps; i++) {
      const f = start + ((end - start) * i) / steps;
      const px = this.evaluateChannel(targetId, 'px', f);
      const py = this.evaluateChannel(targetId, 'py', f);
      const pz = this.evaluateChannel(targetId, 'pz', f);
      if (px !== null && py !== null && pz !== null) {
        points.push(new THREE.Vector3(px, py, pz));
      }
    }
    return points;
  }

  toJSON() {
    return {
      fps: this.fps,
      totalFrames: this.totalFrames,
      tracks: this.tracks,
    };
  }

  fromJSON(data) {
    if (!data || !data.tracks) return;
    this.fps = data.fps || 30;
    this.totalFrames = data.totalFrames || 90;
    this.tracks = data.tracks;
  }
}
