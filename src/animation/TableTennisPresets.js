/**
 * Built-in Table Tennis stroke animations (world-space IK targets matching the Mixamo rig).
 * Each animation includes: Stroke -> Cushioned Slow Recovery -> Split Step -> Ready Idle.
 */

const IDLE_POSE = {
  hips: [-0.001872, 0.677254, -0.028365, 0.369888, 0, 0],
  head: [-0.062912, 1.220587, 0.597739, 0, 0, 0],
  footL: [0.16882, 0.067857, 0.038724, 0.255147, 0, 0],
  footR: [-0.450478, 0.06672, -0.09666, -0.009755, 0, 0],
  handL: [0.251387, 0.80412, -0.016458, 0, 0.408902, 0],
  handR: [-0.504796, 0.756381, 0.394926, -0.994999, 0.020933, 0],
  poleKneeL: [0.32011, 0.474629, 0.348878, 0, 0, 0],
  poleKneeR: [-0.325568, 0.548968, 0.494418, 0, 0, 0],
};

const CHANNELS = ['px', 'py', 'pz', 'rx', 'ry', 'rz'];

function makeKey(frame, value, interp = 'bezier') {
  return {
    frame,
    value,
    interp,
    handleIn: { df: -2.5, dv: 0 },
    handleOut: { df: 2.5, dv: 0 },
  };
}

function createEmptyTracks() {
  const tracks = {};
  for (const id of Object.keys(IDLE_POSE)) {
    tracks[id] = {};
    for (const ch of CHANNELS) tracks[id][ch] = [];
  }
  return tracks;
}

function pushPoseFrame(tracks, frame, poseMap, interp = 'bezier') {
  for (const [id, arr] of Object.entries(poseMap)) {
    if (!tracks[id]) continue;
    CHANNELS.forEach((ch, idx) => {
      tracks[id][ch].push(makeKey(frame, arr[idx], interp));
    });
  }
}

/**
 * Appends a cushioned slow recovery from the stroke end into the user's Ready Idle,
 * followed by a crisp Split Step (mini-hop + cushioned landing -> Idle).
 */
function appendRecoveryAndSplitStep(tracks, strokeEndFrame, stepBackFootR = false) {
  const fRecoverMid = strokeEndFrame + 6;
  const fRecoverEnd = strokeEndFrame + 13;
  const fHop = strokeEndFrame + 16;
  const fLand = strokeEndFrame + 20;
  const fSettle = strokeEndFrame + 25;

  // Optional mid-recovery step-back for footR (used after forward push)
  if (stepBackFootR) {
    const curR = tracks.footR;
    const lastR = CHANNELS.map((ch) => curR[ch][curR[ch].length - 1].value);
    const midFootR = [
      0.5 * (lastR[0] + IDLE_POSE.footR[0]),
      0.21,
      0.5 * (lastR[2] + IDLE_POSE.footR[2]),
      0.5 * (lastR[3] + IDLE_POSE.footR[3]),
      0.5 * (lastR[4] + IDLE_POSE.footR[4]),
      0.5 * (lastR[5] + IDLE_POSE.footR[5]),
    ];
    CHANNELS.forEach((ch, idx) => {
      tracks.footR[ch].push(makeKey(fRecoverMid, midFootR[idx]));
    });
  }

  // 1. Cushioned slow arrival at Ready Idle (slightly upright before split-step)
  const preSplit = structuredClone(IDLE_POSE);
  preSplit.hips[1] += 0.025;
  pushPoseFrame(tracks, fRecoverEnd, preSplit, 'easeOut');

  // 2. Split Step: quick unweight / mini-hop
  const hopPose = structuredClone(IDLE_POSE);
  hopPose.hips[1] += 0.065;
  hopPose.footL[1] += 0.045;
  hopPose.footR[1] += 0.045;
  hopPose.handL[1] += 0.04;
  hopPose.handR[1] += 0.04;
  pushPoseFrame(tracks, fHop, hopPose, 'bezier');

  // 3. Cushioned landing (knees absorb impact)
  const landPose = structuredClone(IDLE_POSE);
  landPose.hips[1] -= 0.045;
  landPose.poleKneeL[2] += 0.06;
  landPose.poleKneeR[2] += 0.06;
  landPose.handL[1] -= 0.03;
  landPose.handR[1] -= 0.03;
  pushPoseFrame(tracks, fLand, landPose, 'bezier');

  // 4. Final settle into exact Ready Idle
  pushPoseFrame(tracks, fSettle, IDLE_POSE, 'easeOut');

  return fSettle;
}

export function getTableTennisPresetAnimation(type) {
  const tracks = createEmptyTracks();

  const readyBase = {
    head: [0.45745, 1.56, 1.02301, 0, 0, 0],
    footL: [0.16882, 0.06786, 0.03872, 0, 0, 0],
    footR: [-0.5472, 0.11536, -0.1277, 0.06759, -0.55554, 0.13547],
    handL: [0.21534, 0.99529, 0.23245, -1.61382, 0.02304, -0.00312],
    poleKneeL: [0.12335, 0.47468, 0.51534, 0, 0, 0],
    poleKneeR: [-0.90122, 0.61472, 0.09146, 0, 0, 0],
    hips: [-0.00504, 0.73808, -0.08417, 0.49433, -0.32614, 0.17099],
    handR: [-0.59441, 0.90595, 0.28175, -1.73611, 0.78622, -0.50773],
  };

  if (type === 'anim_top') {
    pushPoseFrame(tracks, 0, readyBase);
    pushPoseFrame(tracks, 2, {
      ...readyBase,
      hips: [-0.00504, 0.73808, -0.08417, 0.67418, -0.76707, 0.50636],
      handR: [-0.81296, 0.95251, 0.19166, -0.8076, 0.26771, -2.04024],
    });
    pushPoseFrame(tracks, 8, {
      ...readyBase,
      hips: [-0.00504, 0.73808, -0.08417, 0.47469, 0.18303, -0.09326],
      handR: [-0.13746, 1.20865, 0.45227, -1.91508, 0.21219, 0.58854],
    });
    const totalFrames = appendRecoveryAndSplitStep(tracks, 8, false);
    return { fps: 30, totalFrames, tracks };
  }

  if (type === 'anim_taglio') {
    pushPoseFrame(tracks, 0, readyBase);
    pushPoseFrame(tracks, 4, {
      ...readyBase,
      hips: [-0.03, 0.75, -0.09, 0.42, -0.56, 0.25],
      handL: [0.21534, 1.04, 0.23245, -1.61382, 0.02304, -0.00312],
      handR: [-0.66, 1.34, 0.08, -1.05, 0.52, -0.95],
    });
    pushPoseFrame(tracks, 10, {
      ...readyBase,
      hips: [0.02, 0.68, -0.03, 0.56, 0.08, 0.04],
      handL: [0.24, 0.96, 0.18, -1.61382, 0.02304, -0.00312],
      handR: [-0.14, 0.78, 0.54, -0.82, 0.35, -0.35],
    });
    const totalFrames = appendRecoveryAndSplitStep(tracks, 10, false);
    return { fps: 30, totalFrames, tracks };
  }

  if (type === 'anim_apertura') {
    pushPoseFrame(tracks, 0, readyBase);
    pushPoseFrame(tracks, 3, {
      ...readyBase,
      hips: [-0.09, 0.635, -0.12, 0.66, -0.88, 0.46],
      handL: [0.24, 0.88, 0.26, -1.61382, 0.02304, -0.00312],
      handR: [-0.78, 0.66, 0.14, -0.95, 0.35, -1.65],
    });
    pushPoseFrame(tracks, 9, {
      ...readyBase,
      hips: [0.04, 0.79, -0.02, 0.41, 0.28, -0.14],
      handL: [0.16, 1.06, 0.16, -1.61382, 0.02304, -0.00312],
      handR: [-0.10, 1.44, 0.46, -2.05, 0.18, 0.72],
    });
    const totalFrames = appendRecoveryAndSplitStep(tracks, 9, false);
    return { fps: 30, totalFrames, tracks };
  }

  if (type === 'anim_push') {
    pushPoseFrame(tracks, 0, readyBase);
    pushPoseFrame(tracks, 4, {
      head: [0.30, 1.42, 1.02, 0, 0, 0],
      footL: readyBase.footL,
      footR: [-0.36, 0.22, 0.20, 1.5, -0.82, 1.6],
      poleKneeL: [0.32, 0.51, 0.60, 0, 0, 0],
      poleKneeR: [-0.48, 0.56, 0.28, 0, 0, 0],
      handL: [0.42, 0.94, 0.28, -1.44, 0.01, 0],
      hips: [0.11, 0.77, -0.04, 0.44, -0.16, 0.08],
      handR: [-0.28, 1.02, 0.32, -0.90, -0.25, 0.15],
    });
    pushPoseFrame(tracks, 10, {
      head: [0.13616, 1.26034, 1.01375, 0, 0, 0],
      footL: readyBase.footL,
      footR: [-0.18512, 0.12916, 0.53736, 3.14159, -1.06519, 3.14159],
      poleKneeL: [0.52911, 0.54118, 0.68186, 0, 0, 0],
      poleKneeR: [-0.09494, 0.47402, 0.43109, 0, 0, 0],
      handL: [0.63944, 0.86254, 0.327, -1.26911, 0, 0],
      hips: [0.22317, 0.80138, -0.00322, 0.39144, 0, 0],
      handR: [0.07357, 0.74842, 0.63956, 0, -1.19407, 0.7609],
    });
    const totalFrames = appendRecoveryAndSplitStep(tracks, 10, true);
    return { fps: 30, totalFrames, tracks };
  }

  if (type === 'anim_push_bh') {
    // Backhand Push: Ready -> Tuck in front of stomach -> Forward slice under ball -> Recovery + Split Step
    pushPoseFrame(tracks, 0, IDLE_POSE);
    pushPoseFrame(tracks, 4, {
      ...IDLE_POSE,
      hips: [0.04, 0.69, 0.04, 0.42, 0.15, 0],
      footR: [-0.36, 0.14, 0.14, -0.01, -0.25, 0],
      poleKneeR: [-0.25, 0.52, 0.55, 0, 0, 0],
      handR: [0.06, 0.88, 0.26, -0.65, 0.25, 0.45],
      handL: [0.34, 0.82, 0.06, 0, 0.45, 0],
    });
    pushPoseFrame(tracks, 9, {
      ...IDLE_POSE,
      head: [0.04, 1.18, 0.72, 0, 0, 0],
      hips: [0.08, 0.65, 0.12, 0.50, -0.08, 0],
      footR: [-0.28, 0.07, 0.34, -0.01, -0.45, 0],
      poleKneeR: [-0.18, 0.48, 0.62, 0, 0, 0],
      handR: [0.12, 0.74, 0.62, -0.35, -0.45, 0.65],
      handL: [0.40, 0.80, 0.12, -0.4, 0.3, 0],
    });
    const totalFrames = appendRecoveryAndSplitStep(tracks, 9, true);
    return { fps: 30, totalFrames, tracks };
  }

  if (type === 'anim_top_bh') {
    // Backhand Topspin: Ready -> Deep crouch & wrist cock in front of waist -> Explosive forward-up whip
    pushPoseFrame(tracks, 0, IDLE_POSE);
    pushPoseFrame(tracks, 3, {
      ...IDLE_POSE,
      hips: [0.04, 0.60, -0.04, 0.52, 0.24, -0.10],
      poleKneeL: [0.34, 0.45, 0.45, 0, 0, 0],
      poleKneeR: [-0.30, 0.50, 0.56, 0, 0, 0],
      handR: [0.12, 0.68, 0.26, -0.85, 0.65, 0.85],
      handL: [0.35, 0.78, 0.05, 0, 0.5, 0],
    });
    pushPoseFrame(tracks, 8, {
      ...IDLE_POSE,
      hips: [-0.04, 0.76, 0.02, 0.32, -0.18, 0.08],
      handR: [-0.24, 1.18, 0.56, -1.75, -0.35, -0.45],
      handL: [0.28, 0.86, -0.05, 0, 0.35, 0],
    });
    const totalFrames = appendRecoveryAndSplitStep(tracks, 8, false);
    return { fps: 30, totalFrames, tracks };
  }

  if (type === 'anim_smash_jump') {
    // Jumping Forehand Smash: Deep load -> Airborne high smash -> Cushioned landing -> Split Step
    pushPoseFrame(tracks, 0, IDLE_POSE);
    pushPoseFrame(tracks, 4, {
      ...readyBase,
      hips: [-0.08, 0.56, -0.12, 0.62, -0.95, 0.42],
      poleKneeL: [0.20, 0.44, 0.58, 0, 0, 0],
      poleKneeR: [-0.85, 0.52, 0.25, 0, 0, 0],
      handL: [0.28, 0.92, 0.32, -1.4, 0.1, 0],
      handR: [-0.82, 1.28, -0.16, -0.95, 0.45, -1.75],
    });
    pushPoseFrame(tracks, 9, {
      ...readyBase,
      head: [0.12, 1.56, 0.85, 0, 0, 0],
      hips: [0.02, 0.94, 0.08, 0.38, 0.36, -0.18],
      footL: [0.18, 0.28, 0.05, 0.35, 0, 0],
      footR: [-0.46, 0.32, -0.04, 0.25, -0.4, 0],
      poleKneeL: [0.28, 0.68, 0.48, 0, 0, 0],
      poleKneeR: [-0.62, 0.72, 0.28, 0, 0, 0],
      handL: [0.36, 1.05, 0.02, -0.8, 0.3, 0],
      handR: [-0.06, 1.12, 0.64, -2.15, 0.15, 0.75],
    });
    pushPoseFrame(tracks, 13, {
      ...IDLE_POSE,
      hips: [0.0, 0.59, 0.02, 0.46, 0.12, 0],
      poleKneeL: [0.32, 0.44, 0.48, 0, 0, 0],
      poleKneeR: [-0.34, 0.48, 0.56, 0, 0, 0],
      handR: [-0.28, 0.82, 0.48, -1.45, 0.1, 0.25],
    });
    const totalFrames = appendRecoveryAndSplitStep(tracks, 13, false);
    return { fps: 30, totalFrames, tracks };
  }

  if (type === 'anim_block_bh') {
    // Backhand Block: Compact ready -> Absorb in front of chest -> Short forward punch
    pushPoseFrame(tracks, 0, IDLE_POSE);
    pushPoseFrame(tracks, 3, {
      ...IDLE_POSE,
      hips: [0.0, 0.66, 0.0, 0.42, 0.08, 0],
      handR: [0.04, 0.94, 0.42, -1.35, 0.15, 0.25],
    });
    pushPoseFrame(tracks, 7, {
      ...IDLE_POSE,
      hips: [0.0, 0.67, 0.02, 0.44, -0.05, 0],
      handR: [-0.04, 0.96, 0.56, -1.55, 0.05, 0.05],
    });
    const totalFrames = appendRecoveryAndSplitStep(tracks, 7, false);
    return { fps: 30, totalFrames, tracks };
  }

  return null;
}
