import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { TransformControls } from 'three/examples/jsm/controls/TransformControls.js';

import { RigManager } from './rig/RigManager.js';
import { IKSolver } from './ik/IKSolver.js';
import { IKGizmos } from './ik/IKGizmos.js';
import { Timeline } from './animation/Timeline.js';
import { getTableTennisPresetAnimation } from './animation/TableTennisPresets.js';
import { TimelineUI } from './ui/TimelineUI.js';
import { GraphEditor } from './ui/GraphEditor.js';

// --- Scene & Renderer Setup ---
const canvas = document.getElementById('three-canvas');
const container = document.getElementById('viewport-container');

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.1;

const scene = new THREE.Scene();
scene.background = new THREE.Color('#181b22');
scene.fog = new THREE.Fog('#181b22', 8, 22);

const camera = new THREE.PerspectiveCamera(45, 1, 0.05, 50);
camera.position.set(1.8, 1.45, 2.6);

const orbit = new OrbitControls(camera, renderer.domElement);
orbit.enableDamping = true;
orbit.dampingFactor = 0.08;
orbit.target.set(0, 0.9, 0);

// Studio Lighting
const hemiLight = new THREE.HemisphereLight(0xdbeafe, 0x2a2f3d, 0.9);
scene.add(hemiLight);

const keyLight = new THREE.DirectionalLight(0xffffff, 2.1);
keyLight.position.set(3, 5, 4);
keyLight.castShadow = true;
keyLight.shadow.mapSize.set(2048, 2048);
keyLight.shadow.camera.near = 0.5;
keyLight.shadow.camera.far = 15;
const d = 2.5;
keyLight.shadow.camera.left = -d;
keyLight.shadow.camera.right = d;
keyLight.shadow.camera.top = d;
keyLight.shadow.camera.bottom = -d;
keyLight.shadow.bias = -0.0005;
scene.add(keyLight);

const rimLight = new THREE.DirectionalLight(0x60a5fa, 0.9);
rimLight.position.set(-3, 3, -3);
scene.add(rimLight);

// Floor & Grid
const floorGeo = new THREE.PlaneGeometry(30, 30);
const floorMat = new THREE.MeshStandardMaterial({
  color: '#1b1f27',
  roughness: 0.85,
  metalness: 0.1,
});
const floor = new THREE.Mesh(floorGeo, floorMat);
floor.rotation.x = -Math.PI / 2;
floor.receiveShadow = true;
scene.add(floor);

const grid = new THREE.GridHelper(12, 24, 0x3b4254, 0x262b36);
grid.position.y = 0.001;
scene.add(grid);

// --- Core Systems ---
const rig = new RigManager(scene);
const ik = new IKSolver(rig);
const gizmos = new IKGizmos(scene, ik);
const timeline = new Timeline();

let selectedHandleId = null;
let showMotionPath = true;
let prevHipsPos = new THREE.Vector3();

// TransformControls
const transformControls = new TransformControls(camera, renderer.domElement);
transformControls.setSize(0.75);
scene.add(transformControls.getHelper ? transformControls.getHelper() : transformControls);

// --- UI Modules ---
const timelineUI = new TimelineUI(timeline, ik, {
  onFrameChange: (frame) => goToFrame(frame),
  onSelectTarget: (id) => selectHandle(id),
  onKeyframeEdited: () => {
    goToFrame(timeline.currentFrame);
    updateMotionPath();
    graphEditor.render();
  },
});

const graphEditor = new GraphEditor(timeline, ik, {
  onFrameChange: (frame) => goToFrame(frame),
  onCurveEdited: () => {
    applyTimelineAtFrame(timeline.currentFrame);
    updateMotionPath();
    timelineUI.render();
  },
});

// --- TransformControls Events ---
transformControls.addEventListener('dragging-changed', (event) => {
  orbit.enabled = !event.value;
  if (event.value && ik.targets.hips) {
    prevHipsPos.copy(ik.targets.hips.position);
  }
  if (!event.value && timeline.autoKey && selectedHandleId) {
    timeline.setTargetKeyframe(selectedHandleId, ik.targets[selectedHandleId], timeline.currentFrame);
    timelineUI.render();
    graphEditor.fitView();
    graphEditor.render();
    updateMotionPath();
  }
});

transformControls.addEventListener('objectChange', () => {
  if (!selectedHandleId) return;
  const mesh = gizmos.handleMeshes[selectedHandleId];
  const target = ik.targets[selectedHandleId];
  if (!mesh || !target) return;

  // If footPinning is OFF and user moves hips, move feet & knee poles with hips
  if (selectedHandleId === 'hips' && !ik.footPinning) {
    const delta = mesh.position.clone().sub(prevHipsPos);
    for (const id of ['footL', 'footR', 'poleKneeL', 'poleKneeR']) {
      if (ik.targets[id]) ik.targets[id].position.add(delta);
    }
    prevHipsPos.copy(mesh.position);
  }

  target.position.copy(mesh.position);
  target.rotation.copy(mesh.rotation);

  ik.solve();
  gizmos.syncFromSolver();
  updateInspectorFields();
});

// --- Picking 3D IK Handles ---
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
let pointerDownPos = { x: 0, y: 0 };

renderer.domElement.addEventListener('pointerdown', (e) => {
  pointerDownPos = { x: e.clientX, y: e.clientY };
});

renderer.domElement.addEventListener('pointerup', (e) => {
  const dist = Math.hypot(e.clientX - pointerDownPos.x, e.clientY - pointerDownPos.y);
  if (dist > 5 || transformControls.dragging) return;

  const rect = renderer.domElement.getBoundingClientRect();
  pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
  pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

  raycaster.setFromCamera(pointer, camera);
  const hits = raycaster.intersectObjects(gizmos.getPickableMeshes(), false);
  if (hits.length > 0) {
    const ikId = hits[0].object.userData.ikId;
    if (ikId) selectHandle(ikId);
  }
});

function selectHandle(id) {
  selectedHandleId = id;
  gizmos.select(id);

  const mesh = gizmos.handleMeshes[id];
  if (mesh) {
    transformControls.attach(mesh);
  } else {
    transformControls.detach();
  }

  // Highlight in inspector
  document.querySelectorAll('.handle-pill').forEach((el) => {
    el.classList.toggle('active', el.dataset.id === id);
  });

  const target = ik.targets[id];
  document.getElementById('selected-name').textContent = target ? target.label : 'Nessuno';
  updateInspectorFields();
  timelineUI.setSelectedTarget(id);
  graphEditor.setSelectedTarget(id);
  updateMotionPath();
}

function updateInspectorFields() {
  const t = selectedHandleId ? ik.targets[selectedHandleId] : null;
  const ids = ['px', 'py', 'pz', 'rx', 'ry', 'rz'];
  if (!t) {
    ids.forEach((k) => (document.getElementById(`inp-${k}`).value = ''));
    return;
  }
  document.getElementById('inp-px').value = t.position.x.toFixed(3);
  document.getElementById('inp-py').value = t.position.y.toFixed(3);
  document.getElementById('inp-pz').value = t.position.z.toFixed(3);
  document.getElementById('inp-rx').value = THREE.MathUtils.radToDeg(t.rotation.x).toFixed(1);
  document.getElementById('inp-ry').value = THREE.MathUtils.radToDeg(t.rotation.y).toFixed(1);
  document.getElementById('inp-rz').value = THREE.MathUtils.radToDeg(t.rotation.z).toFixed(1);
}

function bindInspectorInputs() {
  const map = [
    ['px', (t, v) => (t.position.x = v)],
    ['py', (t, v) => (t.position.y = v)],
    ['pz', (t, v) => (t.position.z = v)],
    ['rx', (t, v) => (t.rotation.x = THREE.MathUtils.degToRad(v))],
    ['ry', (t, v) => (t.rotation.y = THREE.MathUtils.degToRad(v))],
    ['rz', (t, v) => (t.rotation.z = THREE.MathUtils.degToRad(v))],
  ];
  for (const [key, setter] of map) {
    document.getElementById(`inp-${key}`).addEventListener('change', (e) => {
      if (!selectedHandleId || !ik.targets[selectedHandleId]) return;
      const val = parseFloat(e.target.value);
      if (!Number.isFinite(val)) return;
      setter(ik.targets[selectedHandleId], val);
      ik.solve();
      gizmos.syncFromSolver();
      if (timeline.autoKey) {
        timeline.setTargetKeyframe(selectedHandleId, ik.targets[selectedHandleId], timeline.currentFrame);
        timelineUI.render();
        graphEditor.render();
      }
    });
  }
}

function buildInspectorHandleList() {
  const list = document.getElementById('handle-list');
  list.innerHTML = '';
  for (const [id, t] of Object.entries(ik.targets)) {
    const btn = document.createElement('button');
    btn.className = 'handle-pill';
    btn.dataset.id = id;
    btn.innerHTML = `<span class="handle-dot" style="background:${t.color}"></span><span>${t.label}</span>`;
    btn.addEventListener('click', () => selectHandle(id));
    list.appendChild(btn);
  }
}

// --- Timeline & Playback ---
function goToFrame(frame) {
  timeline.currentFrame = Math.max(0, Math.min(timeline.totalFrames, frame));
  document.getElementById('inp-frame').value = Math.round(timeline.currentFrame);
  applyTimelineAtFrame(timeline.currentFrame);
  timelineUI.render();
  graphEditor.render();
}

function applyTimelineAtFrame(frame) {
  const pose = timeline.evaluatePose(frame);
  if (Object.keys(pose).length > 0) {
    ik.applyPose(pose);
    gizmos.syncFromSolver();
    updateInspectorFields();
  }
}

function updateMotionPath() {
  if (!showMotionPath || !selectedHandleId) {
    gizmos.updateMotionPath([], false);
    return;
  }
  const pts = timeline.sampleMotionPath(selectedHandleId, 70);
  gizmos.updateMotionPath(pts, pts.length >= 2);
}

function togglePlay() {
  timeline.isPlaying = !timeline.isPlaying;
  const btn = document.getElementById('btn-play');
  btn.textContent = timeline.isPlaying ? '⏸' : '▶';
  btn.classList.toggle('playing', timeline.isPlaying);
}

// --- Presets & Demo Animation ---
function applyPreset(name) {
  if (!name) return;

  const animData = getTableTennisPresetAnimation(name);
  if (animData) {
    timeline.fromJSON(animData);
    document.getElementById('inp-total-frames').value = timeline.totalFrames;
    document.getElementById('sel-fps').value = String(timeline.fps);
    goToFrame(0);
    updateMotionPath();
    graphEditor.fitView();
    graphEditor.render();
    timelineUI.render();
    return;
  }

  ik.resetAllTargets();
  const r = ik.restTargets;
  const setRel = (id, dx, dy, dz, rx = 0, ry = 0, rz = 0) => {
    if (!ik.targets[id] || !r[id]) return;
    ik.targets[id].position.set(r[id].position.x + dx, r[id].position.y + dy, r[id].position.z + dz);
    ik.targets[id].rotation.set(rx, ry, rz);
  };

  if (name === 'idle') {
    setRel('handL', 0.04, -0.04, 0.08);
    setRel('handR', -0.04, -0.04, 0.08);
  } else if (name === 'ready') {
    // Table tennis athletic ready stance
    setRel('footL', 0.14, 0.05, 0.05);
    setRel('footR', -0.14, 0.05, -0.05);
    setRel('poleKneeL', 0.12, -0.05, 0.15);
    setRel('poleKneeR', -0.12, -0.05, 0.15);
    setRel('handL', 0.05, 0.06, 0.28);
    setRel('handR', -0.06, 0.08, 0.30);
    setRel('head', 0, -0.08, 0.2);
  } else if (name === 'forehand') {
    setRel('footL', 0.16, 0, 0.12);
    setRel('footR', -0.16, 0, -0.12);
    setRel('handR', 0.22, 0.24, 0.44);
    setRel('handL', 0.12, 0.05, 0.20);
  } else if (name === 'squat') {
    setRel('footL', 0.1, 0.18, 0);
    setRel('footR', -0.1, 0.18, 0);
    setRel('poleKneeL', 0.15, -0.08, 0.25);
    setRel('poleKneeR', -0.15, -0.08, 0.25);
    setRel('handL', 0.02, -0.1, 0.35);
    setRel('handR', -0.02, -0.1, 0.35);
  } else if (name === 'demo_anim') {
    timeline.clear();
    timeline.totalFrames = 90;
    document.getElementById('inp-total-frames').value = 90;

    // Frame 0: Ready Stance
    applyPreset('ready');
    timeline.setFullPoseKeyframe(ik.targets, 0, 'bezier');

    // Frame 25: Backswing
    ik.resetAllTargets();
    setRel('footL', 0.15, 0, 0.08);
    setRel('footR', -0.16, 0, -0.10);
    setRel('handR', -0.28, -0.02, -0.14);
    setRel('handL', 0.08, 0.08, 0.28);
    ik.solve();
    timeline.setFullPoseKeyframe(ik.targets, 25, 'bezier');

    // Frame 48: Forehand Strike
    applyPreset('forehand');
    timeline.setFullPoseKeyframe(ik.targets, 48, 'bezier');

    // Frame 90: Return to Ready Stance (smooth loop)
    applyPreset('ready');
    timeline.setFullPoseKeyframe(ik.targets, 90, 'bezier');

    goToFrame(0);
    updateMotionPath();
    graphEditor.fitView();
    graphEditor.render();
    timelineUI.render();
    return;
  }

  ik.solve();
  gizmos.syncFromSolver();
  updateInspectorFields();
}

// --- Toolbar & Keyboard Wiring ---
function wireUI() {
  bindInspectorInputs();

  document.getElementById('btn-reset-pose').addEventListener('click', () => {
    ik.resetAllTargets();
    gizmos.syncFromSolver();
    updateInspectorFields();
  });

  document.getElementById('btn-reset-handle').addEventListener('click', () => {
    if (!selectedHandleId) return;
    ik.resetTarget(selectedHandleId);
    gizmos.syncFromSolver();
    updateInspectorFields();
  });

  const btnTrans = document.getElementById('btn-mode-translate');
  const btnRot = document.getElementById('btn-mode-rotate');
  const setMode = (mode) => {
    transformControls.setMode(mode);
    btnTrans.classList.toggle('active', mode === 'translate');
    btnRot.classList.toggle('active', mode === 'rotate');
  };
  btnTrans.addEventListener('click', () => setMode('translate'));
  btnRot.addEventListener('click', () => setMode('rotate'));

  const btnSpace = document.getElementById('btn-space-toggle');
  btnSpace.addEventListener('click', () => {
    const next = transformControls.space === 'world' ? 'local' : 'world';
    transformControls.setSpace(next);
    btnSpace.textContent = next === 'world' ? '🌐 Globale' : '📍 Locale';
  });

  const bindToggle = (id, onChange) => {
    const chk = document.getElementById(id);
    const label = chk.closest('.toggle-chip');
    chk.addEventListener('change', () => {
      if (label) label.classList.toggle('active', chk.checked);
      onChange(chk.checked);
    });
  };

  bindToggle('chk-foot-pin', (v) => {
    ik.footPinning = v;
  });
  bindToggle('chk-body-follow', (v) => {
    ik.smartBodyFollow = v;
    ik.solve();
    gizmos.syncFromSolver();
  });
  bindToggle('chk-skeleton', (v) => {
    rig.setSkeletonVisible(v);
  });
  bindToggle('chk-motion-path', (v) => {
    showMotionPath = v;
    updateMotionPath();
  });
  bindToggle('chk-loop', (v) => {
    timeline.loop = v;
  });
  bindToggle('chk-autokey', (v) => {
    timeline.autoKey = v;
  });

  // Playback controls
  document.getElementById('btn-play').addEventListener('click', togglePlay);
  document.getElementById('btn-stop').addEventListener('click', () => {
    if (timeline.isPlaying) togglePlay();
    goToFrame(0);
  });
  document.getElementById('btn-prev-key').addEventListener('click', () => {
    const all = timeline.getAllKeyframeFrames();
    const prev = [...all].reverse().find((f) => f < timeline.currentFrame);
    if (prev !== undefined) goToFrame(prev);
  });
  document.getElementById('btn-next-key').addEventListener('click', () => {
    const all = timeline.getAllKeyframeFrames();
    const next = all.find((f) => f > timeline.currentFrame);
    if (next !== undefined) goToFrame(next);
  });

  document.getElementById('inp-frame').addEventListener('change', (e) => {
    goToFrame(parseInt(e.target.value, 10) || 0);
  });
  document.getElementById('inp-total-frames').addEventListener('change', (e) => {
    timeline.totalFrames = Math.max(10, parseInt(e.target.value, 10) || 90);
    timelineUI.render();
    graphEditor.render();
  });
  document.getElementById('sel-fps').addEventListener('change', (e) => {
    timeline.fps = parseInt(e.target.value, 10) || 30;
  });

  // Keyframing buttons
  const addKeyAtCurrent = () => {
    timeline.setFullPoseKeyframe(ik.targets, timeline.currentFrame);
    timelineUI.render();
    graphEditor.fitView();
    graphEditor.render();
    updateMotionPath();
  };
  document.getElementById('btn-add-key').addEventListener('click', addKeyAtCurrent);

  const deleteKeyAtCurrent = () => {
    if (timelineUI.selectedKey) {
      timeline.deleteTargetKeyframe(timelineUI.selectedKey.targetId, timelineUI.selectedKey.frame);
      timelineUI.selectedKey = null;
    } else if (selectedHandleId) {
      timeline.deleteTargetKeyframe(selectedHandleId, timeline.currentFrame);
    }
    timelineUI.render();
    graphEditor.render();
    updateMotionPath();
  };
  document.getElementById('btn-del-key').addEventListener('click', deleteKeyAtCurrent);

  // View tabs (Split / Dope Sheet / Graph)
  document.querySelectorAll('.tab-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const views = document.getElementById('animation-views');
      views.className = `view-${btn.dataset.view}`;
      timelineUI.render();
      graphEditor.render();
    });
  });

  // Dock resizer
  const dock = document.getElementById('bottom-dock');
  const resizer = document.getElementById('dock-resizer');
  let resizing = false;
  resizer.addEventListener('pointerdown', (e) => {
    resizing = true;
    resizer.setPointerCapture(e.pointerId);
  });
  resizer.addEventListener('pointermove', (e) => {
    if (!resizing) return;
    const h = window.innerHeight - e.clientY;
    dock.style.height = `${Math.max(150, Math.min(window.innerHeight * 0.65, h))}px`;
    handleResize();
  });
  resizer.addEventListener('pointerup', () => {
    resizing = false;
  });

  // Presets
  document.getElementById('preset-select').addEventListener('change', (e) => {
    applyPreset(e.target.value);
    e.target.value = '';
  });

  // Table Tennis Bat hand attachment & GUI
  const batKeys = ['px', 'py', 'pz', 'rx', 'ry', 'rz'];
  const syncBatUI = () => {
    for (const k of batKeys) {
      const val = rig.batTransform[k];
      document.getElementById(`bat-${k}-rng`).value = val;
      document.getElementById(`bat-${k}-num`).value = val;
    }
  };
  syncBatUI();

  for (const k of batKeys) {
    const rng = document.getElementById(`bat-${k}-rng`);
    const num = document.getElementById(`bat-${k}-num`);
    rng.addEventListener('input', () => {
      const v = parseFloat(rng.value);
      num.value = v;
      rig.setBatTransform({ [k]: v });
    });
    num.addEventListener('input', () => {
      const v = parseFloat(num.value);
      if (!Number.isFinite(v)) return;
      rng.value = v;
      rig.setBatTransform({ [k]: v });
    });
  }

  document.getElementById('btn-reset-bat').addEventListener('click', () => {
    rig.resetBatTransform();
    syncBatUI();
  });

  document.getElementById('btn-copy-bat').addEventListener('click', () => {
    const text = JSON.stringify(rig.batTransform);
    navigator.clipboard?.writeText(text);
    const btn = document.getElementById('btn-copy-bat');
    btn.textContent = '✓';
    setTimeout(() => (btn.textContent = '📋'), 900);
  });

  // Rotate from View (camera view axis) for the racket
  const batViewRng = document.getElementById('bat-view-rng');
  const batViewNum = document.getElementById('bat-view-num');
  let batViewStartQuat = null;
  let batViewAxisLocal = null;

  const beginBatViewRotate = () => {
    if (!rig.batPivot || !rig.batPivot.parent) return;
    batViewStartQuat = rig.batPivot.quaternion.clone();
    const camDirWorld = camera.getWorldDirection(new THREE.Vector3()).negate();
    const parentWorldQuatInv = rig.batPivot.parent.getWorldQuaternion(new THREE.Quaternion()).invert();
    batViewAxisLocal = camDirWorld.applyQuaternion(parentWorldQuatInv).normalize();
  };

  batViewRng.addEventListener('pointerdown', beginBatViewRotate);
  batViewRng.addEventListener('input', () => {
    if (!batViewStartQuat || !batViewAxisLocal) beginBatViewRotate();
    if (!batViewStartQuat || !batViewAxisLocal) return;
    const deg = parseFloat(batViewRng.value) || 0;
    batViewNum.value = deg;
    const qView = new THREE.Quaternion().setFromAxisAngle(batViewAxisLocal, THREE.MathUtils.degToRad(deg));
    const newQuat = qView.multiply(batViewStartQuat);
    const euler = new THREE.Euler().setFromQuaternion(newQuat, 'XYZ');
    const sign = rig.batSide === 'left' ? -1 : 1;
    rig.setBatTransform({
      rx: Math.round(THREE.MathUtils.radToDeg(euler.x)),
      ry: Math.round(THREE.MathUtils.radToDeg(euler.y) * sign),
      rz: Math.round(THREE.MathUtils.radToDeg(euler.z) * sign),
    });
    syncBatUI();
  });
  const endBatViewRotate = () => {
    batViewStartQuat = null;
    batViewAxisLocal = null;
    batViewRng.value = 0;
    batViewNum.value = 0;
  };
  batViewRng.addEventListener('pointerup', endBatViewRotate);
  batViewRng.addEventListener('change', endBatViewRotate);

  document.getElementById('bat-select').addEventListener('change', (e) => {
    rig.attachBatToHand(e.target.value);
    ik.solve();
  });

  // Import GLB
  document.getElementById('file-input').addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (file) await loadCharacterFile(file);
  });

  // Drag & drop GLB
  const dropOverlay = document.getElementById('drop-overlay');
  window.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropOverlay.classList.remove('hidden');
  });
  window.addEventListener('dragleave', (e) => {
    if (e.relatedTarget === null) dropOverlay.classList.add('hidden');
  });
  window.addEventListener('drop', async (e) => {
    e.preventDefault();
    dropOverlay.classList.add('hidden');
    const file = e.dataTransfer.files[0];
    if (file && /\.(glb|gltf)$/i.test(file.name)) {
      await loadCharacterFile(file);
    }
  });

  // Export / Import JSON
  document.getElementById('btn-export-json').addEventListener('click', () => {
    const blob = new Blob([JSON.stringify(timeline.toJSON(), null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'kinetic_animation.json';
    a.click();
  });
  document.getElementById('json-input').addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const text = await file.text();
    timeline.fromJSON(JSON.parse(text));
    document.getElementById('inp-total-frames').value = timeline.totalFrames;
    document.getElementById('sel-fps').value = String(timeline.fps);
    goToFrame(0);
    graphEditor.fitView();
    graphEditor.render();
    updateMotionPath();
  });

  // Keyboard shortcuts
  window.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;
    if (e.code === 'Space') {
      e.preventDefault();
      togglePlay();
    } else if (e.key === 'g' || e.key === 'G') {
      setMode('translate');
    } else if (e.key === 'r' || e.key === 'R') {
      setMode('rotate');
    } else if (e.key === 'i' || e.key === 'I') {
      addKeyAtCurrent();
    } else if (e.key === 'Delete' || e.key === 'Backspace') {
      deleteKeyAtCurrent();
    } else if (e.key === 'Escape') {
      transformControls.detach();
      selectedHandleId = null;
      gizmos.select(null);
    }
  });
}

// --- Character Loading ---
async function initCharacter(loadFn, label) {
  const badge = document.getElementById('status-badge');
  badge.textContent = `Caricamento ${label}...`;
  badge.style.color = '#f5a623';

  try {
    const info = await loadFn();
    ik.initFromRig();
    ik.solve();
    gizmos.rebuild();
    buildInspectorHandleList();
    timelineUI.rebuildTrackList();

    // Select Hips or Right Hand by default
    const defaultId = ik.targets.handR ? 'handR' : Object.keys(ik.targets)[0];
    if (defaultId) selectHandle(defaultId);

    const batSide = document.getElementById('bat-select').value;
    if (!rig.batPivot) {
      rig.loadAndAttachBat('/table_tennis_bat.glb', batSide).catch((e) =>
        console.warn('Bat non caricata:', e)
      );
    } else {
      rig.attachBatToHand(batSide);
    }

    badge.textContent = `✓ ${label} (${info.boneCount} ossa · ${info.detected.length} IK mappate)`;
    badge.style.color = '#4cc38a';
  } catch (err) {
    console.error(err);
    badge.textContent = `Errore caricamento: ${err.message}`;
    badge.style.color = '#e05a5a';
  }
}

async function loadCharacterFile(file) {
  timeline.clear();
  await initCharacter(() => rig.loadFromFile(file), file.name);
}

// --- Resize & Render Loop ---
function handleResize() {
  const w = container.clientWidth;
  const h = container.clientHeight;
  camera.aspect = w / Math.max(h, 1);
  camera.updateProjectionMatrix();
  renderer.setSize(w, h);
  timelineUI.render();
  graphEditor.render();
}

window.addEventListener('resize', handleResize);

let lastTime = performance.now();
function animate(now) {
  requestAnimationFrame(animate);
  const dt = Math.min((now - lastTime) / 1000, 0.1);
  lastTime = now;

  if (timeline.isPlaying) {
    let nextFrame = timeline.currentFrame + dt * timeline.fps;
    if (nextFrame > timeline.totalFrames) {
      if (timeline.loop) {
        nextFrame = 0;
      } else {
        nextFrame = timeline.totalFrames;
        togglePlay();
      }
    }
    timeline.currentFrame = nextFrame;
    document.getElementById('inp-frame').value = Math.round(nextFrame);
    applyTimelineAtFrame(nextFrame);
    timelineUI.render();
    graphEditor.render();
  }

  orbit.update();
  renderer.render(scene, camera);
}

// --- Bootstrap ---
wireUI();
handleResize();
initCharacter(() => rig.loadFromUrl('/rigged_character.glb'), 'rigged_character.glb');
requestAnimationFrame(animate);
