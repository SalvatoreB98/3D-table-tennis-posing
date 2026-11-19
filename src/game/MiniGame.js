import * as THREE from 'three';
import { getTableTennisPresetAnimation } from '../animation/TableTennisPresets.js';

const STROKES = [
  { key: '1', id: 'anim_top', label: 'Top Dritto', hitFrame: 6, speed: 5.2, arcY: 1.5, spin: 'top' },
  { key: '2', id: 'anim_top_bh', label: 'Top Rovescio', hitFrame: 6, speed: 5.0, arcY: 1.55, spin: 'top' },
  { key: '3', id: 'anim_push', label: 'Push Dritto', hitFrame: 7, speed: 3.1, arcY: 1.9, spin: 'back' },
  { key: '4', id: 'anim_push_bh', label: 'Push Rovescio', hitFrame: 7, speed: 3.1, arcY: 1.9, spin: 'back' },
  { key: '5', id: 'anim_apertura', label: 'Apertura Taglio', hitFrame: 6, speed: 4.8, arcY: 2.1, spin: 'top' },
  { key: '6', id: 'anim_smash_jump', label: 'Smash Salto', hitFrame: 8, speed: 7.4, arcY: 0.7, spin: 'smash' },
  { key: '7', id: 'anim_block_bh', label: 'Block Rovescio', hitFrame: 5, speed: 4.0, arcY: 1.4, spin: 'flat' },
];

const TABLE_Y = 0.76;
const TABLE_Z_MIN = 0.65;
const TABLE_Z_MAX = 3.39;
const TABLE_NET_Z = (TABLE_Z_MIN + TABLE_Z_MAX) * 0.5; // 2.02
const TABLE_HALF_W = 0.7625;
const BALL_R = 0.022;
const GRAVITY = -9.8;

/**
 * 3D Table Tennis Minigame using the character's IK stroke animations.
 */
export class MiniGame {
  constructor(scene, camera, orbit, ikSolver, timeline, callbacks) {
    this.scene = scene;
    this.camera = camera;
    this.orbit = orbit;
    this.ik = ikSolver;
    this.timeline = timeline;
    this.cb = callbacks; // { onExit }

    this.active = false;
    this.group = new THREE.Group();
    this.group.name = 'MiniGameGroup';
    this.group.visible = false;
    this.scene.add(this.group);

    this.score = 0;
    this.streak = 0;
    this.bestStreak = 0;

    // Ball state
    this.ballPos = new THREE.Vector3(0, 1.2, 2.9);
    this.ballVel = new THREE.Vector3(0, 0, 0);
    this.ballPhase = 'waiting'; // 'toPlayer' | 'toOpponent' | 'waiting'
    this.ballType = 'normal'; // 'normal' | 'backspin' | 'lob' | 'short'
    this.playerHasBounced = false;
    this.opponentHasBounced = false;
    this.waitTimer = 0.8;

    // Stroke animation state
    this.playingStroke = null;
    this.strokeAnim = null;
    this.strokeFrame = 0;
    this.hitChecked = false;

    this._buildTableAndBall();
    this._buildHUD();
  }

  _buildTableAndBall() {
    const length = TABLE_Z_MAX - TABLE_Z_MIN;
    const width = TABLE_HALF_W * 2;

    // Table top (ITTF Blue)
    const topGeo = new THREE.BoxGeometry(width, 0.04, length);
    const topMat = new THREE.MeshStandardMaterial({ color: '#1b4d89', roughness: 0.45, metalness: 0.05 });
    const top = new THREE.Mesh(topGeo, topMat);
    top.position.set(0, TABLE_Y - 0.02, TABLE_NET_Z);
    top.receiveShadow = true;
    top.castShadow = true;
    this.group.add(top);

    // White border lines
    const lineMat = new THREE.MeshBasicMaterial({ color: '#ffffff' });
    const addLine = (w, l, x, z) => {
      const m = new THREE.Mesh(new THREE.PlaneGeometry(w, l), lineMat);
      m.rotation.x = -Math.PI / 2;
      m.position.set(x, TABLE_Y + 0.001, z);
      this.group.add(m);
    };
    addLine(width, 0.02, 0, TABLE_Z_MIN + 0.01);
    addLine(width, 0.02, 0, TABLE_Z_MAX - 0.01);
    addLine(0.02, length, -TABLE_HALF_W + 0.01, TABLE_NET_Z);
    addLine(0.02, length, TABLE_HALF_W - 0.01, TABLE_NET_Z);
    addLine(0.008, length, 0, TABLE_NET_Z);

    // Table legs
    const legGeo = new THREE.BoxGeometry(0.05, TABLE_Y - 0.04, 0.05);
    const legMat = new THREE.MeshStandardMaterial({ color: '#1e222b', roughness: 0.7 });
    for (const lx of [-TABLE_HALF_W + 0.12, TABLE_HALF_W - 0.12]) {
      for (const lz of [TABLE_Z_MIN + 0.25, TABLE_Z_MAX - 0.25]) {
        const leg = new THREE.Mesh(legGeo, legMat);
        leg.position.set(lx, (TABLE_Y - 0.04) / 2, lz);
        leg.castShadow = true;
        this.group.add(leg);
      }
    }

    // Net
    const netGeo = new THREE.BoxGeometry(width + 0.16, 0.1525, 0.01);
    const netMat = new THREE.MeshStandardMaterial({
      color: '#e2e8f0',
      transparent: true,
      opacity: 0.55,
      roughness: 0.8,
    });
    const net = new THREE.Mesh(netGeo, netMat);
    net.position.set(0, TABLE_Y + 0.1525 / 2, TABLE_NET_Z);
    this.group.add(net);

    // Net top white tape
    const tape = new THREE.Mesh(
      new THREE.BoxGeometry(width + 0.16, 0.015, 0.014),
      new THREE.MeshBasicMaterial({ color: '#ffffff' })
    );
    tape.position.set(0, TABLE_Y + 0.1525, TABLE_NET_Z);
    this.group.add(tape);

    // Ping Pong Ball
    const ballGeo = new THREE.SphereGeometry(BALL_R, 18, 18);
    const ballMat = new THREE.MeshStandardMaterial({
      color: '#ff9f1c',
      emissive: '#ff6b00',
      emissiveIntensity: 0.25,
      roughness: 0.3,
    });
    this.ballMesh = new THREE.Mesh(ballGeo, ballMat);
    this.ballMesh.castShadow = true;
    this.group.add(this.ballMesh);

    // Opponent paddle visual (simple floating robot paddle at far end)
    const oppGeo = new THREE.CylinderGeometry(0.085, 0.085, 0.014, 24);
    oppGeo.rotateX(Math.PI / 2);
    this.oppPaddle = new THREE.Mesh(
      oppGeo,
      new THREE.MeshStandardMaterial({ color: '#ef4444', roughness: 0.4 })
    );
    this.oppPaddle.position.set(0, TABLE_Y + 0.28, TABLE_Z_MAX + 0.25);
    this.group.add(this.oppPaddle);
  }

  _buildHUD() {
    this.hud = document.createElement('div');
    this.hud.id = 'minigame-hud';
    this.hud.className = 'hidden';
    this.hud.innerHTML = `
      <div class="mg-topbar">
        <div class="mg-stats">
          <span>🏆 Punti: <strong id="mg-score">0</strong></span>
          <span>🔥 Serie: <strong id="mg-streak">0</strong></span>
          <span>⭐ Record: <strong id="mg-best">0</strong></span>
        </div>
        <div id="mg-ball-type" class="mg-pill">In attesa servizio...</div>
        <button id="mg-exit-btn" class="btn btn-danger btn-sm">✕ Esci dal Minigioco</button>
      </div>
      <div id="mg-feedback" class="mg-feedback"></div>
      <div class="mg-controls">
        ${STROKES.map(
          (s) => `<button class="mg-stroke-btn" data-stroke="${s.id}"><kbd>${s.key}</kbd> ${s.label}</button>`
        ).join('')}
      </div>
    `;
    document.getElementById('viewport-container').appendChild(this.hud);

    this.hud.querySelector('#mg-exit-btn').addEventListener('click', () => this.stop());
    this.hud.querySelectorAll('.mg-stroke-btn').forEach((btn) => {
      btn.addEventListener('click', () => this.triggerStroke(btn.dataset.stroke));
    });

    window.addEventListener('keydown', (e) => {
      if (!this.active) return;
      const match = STROKES.find((s) => s.key === e.key);
      if (match) {
        e.preventDefault();
        this.triggerStroke(match.id);
      } else if (e.key === 'Escape') {
        this.stop();
      }
    });
  }

  start() {
    this.active = true;
    this.group.visible = true;
    this.hud.classList.remove('hidden');

    // Save camera & switch to clean game view behind player
    this._savedCamPos = this.camera.position.clone();
    this._savedOrbitTarget = this.orbit.target.clone();
    this.camera.position.set(-1.35, 1.85, -1.15);
    this.orbit.target.set(0, 0.9, 1.8);

    // Load Idle pose
    this._applyIdlePose();

    this.score = 0;
    this.streak = 0;
    this._updateStats();
    this.ballPhase = 'waiting';
    this.waitTimer = 0.7;
    this._showFeedback('PRONTO!', '#60a5fa');
  }

  stop() {
    if (!this.active) return;
    this.active = false;
    this.group.visible = false;
    this.hud.classList.add('hidden');

    if (this._savedCamPos) this.camera.position.copy(this._savedCamPos);
    if (this._savedOrbitTarget) this.orbit.target.copy(this._savedOrbitTarget);

    this.cb.onExit();
  }

  _applyIdlePose() {
    const idleAnim = getTableTennisPresetAnimation('anim_top');
    if (idleAnim) {
      this.timeline.fromJSON(idleAnim);
      const lastF = idleAnim.totalFrames;
      const pose = this.timeline.evaluatePose(lastF);
      this.ik.applyPose(pose);
    }
  }

  triggerStroke(strokeId) {
    if (!this.active) return;
    const meta = STROKES.find((s) => s.id === strokeId);
    const anim = getTableTennisPresetAnimation(strokeId);
    if (!meta || !anim) return;

    this.playingStroke = meta;
    this.strokeAnim = anim;
    this.strokeFrame = 0;
    this.hitChecked = false;
    this.timeline.fromJSON(anim);

    // Highlight button
    this.hud.querySelectorAll('.mg-stroke-btn').forEach((b) => {
      b.classList.toggle('active', b.dataset.stroke === strokeId);
    });
  }

  _serveToPlayer() {
    const types = ['normal', 'backspin', 'lob', 'short'];
    this.ballType = types[Math.floor(Math.random() * types.length)];

    const badge = document.getElementById('mg-ball-type');
    const labels = {
      normal: { text: '⚪ Palla Liscia (Top / Block)', color: '#93c5fd' },
      backspin: { text: '🟣 Palla Tagliata (Apertura / Push)', color: '#c4b5fd' },
      lob: { text: '🟡 Palla Alta! (Smash con Salto!)', color: '#fde047' },
      short: { text: '🟢 Palla Corta (Push / Passo Avanti!)', color: '#86efac' },
    };
    badge.textContent = labels[this.ballType].text;
    badge.style.color = labels[this.ballType].color;

    const targetX = (Math.random() - 0.5) * 0.55;
    this.ballPos.set((Math.random() - 0.5) * 0.3, TABLE_Y + 0.25, TABLE_Z_MAX - 0.1);
    this.oppPaddle.position.set(this.ballPos.x, this.ballPos.y, TABLE_Z_MAX + 0.15);

    if (this.ballType === 'lob') {
      this.ballVel.set((targetX - this.ballPos.x) * 0.85, 3.6, -2.55);
    } else if (this.ballType === 'short') {
      this.ballVel.set((targetX - this.ballPos.x) * 1.1, 2.2, -2.0);
    } else if (this.ballType === 'backspin') {
      this.ballVel.set((targetX - this.ballPos.x) * 0.95, 2.0, -2.5);
    } else {
      this.ballVel.set((targetX - this.ballPos.x) * 1.0, 1.9, -2.9);
    }

    this.ballPhase = 'toPlayer';
    this.playerHasBounced = false;
    this.opponentHasBounced = false;
  }

  _checkHit() {
    if (!this.playingStroke || this.hitChecked) return;
    if (this.ballPhase !== 'toPlayer') return;

    // Check if ball is in hitting zone near the player
    const inZ = this.ballPos.z >= -0.15 && this.ballPos.z <= 1.25;
    const inY = this.ballPos.y >= TABLE_Y - 0.1 && this.ballPos.y <= 1.65;
    if (inZ && inY && this.playerHasBounced) {
      this.hitChecked = true;
      const s = this.playingStroke;

      // Bonus points for smart shot selection
      let pts = 10;
      let msg = 'COLPO!';
      let color = '#4cc38a';
      if (this.ballType === 'lob' && s.id === 'anim_smash_jump') {
        pts = 30;
        msg = 'SMASH PERFETTO! +30';
        color = '#fde047';
      } else if (this.ballType === 'backspin' && (s.id === 'anim_apertura' || s.id.includes('push'))) {
        pts = 20;
        msg = 'OTTIMA LETTURA! +20';
        color = '#a78bfa';
      } else if (this.ballType === 'short' && s.id.includes('push')) {
        pts = 20;
        msg = 'PUSH PRECISO! +20';
        color = '#4cc38a';
      }

      this.score += pts;
      this.streak += 1;
      this.bestStreak = Math.max(this.bestStreak, this.streak);
      this._updateStats();
      this._showFeedback(msg, color);

      // Launch ball back to opponent's side
      const aimX = (Math.random() - 0.5) * 0.7;
      const dz = TABLE_Z_MAX - 0.5 - this.ballPos.z;
      const vz = s.speed;
      const tFlight = dz / vz;
      const vx = (aimX - this.ballPos.x) / Math.max(tFlight, 0.25);

      this.ballVel.set(vx, s.arcY, vz);
      this.ballPhase = 'toOpponent';
      this.opponentHasBounced = false;
    }
  }

  update(dt) {
    if (!this.active) return;

    // 1. Advance stroke animation if playing
    if (this.playingStroke && this.strokeAnim) {
      this.strokeFrame += dt * this.strokeAnim.fps;
      if (!this.hitChecked && this.strokeFrame >= this.playingStroke.hitFrame - 2 && this.strokeFrame <= this.playingStroke.hitFrame + 4) {
        this._checkHit();
      }
      if (this.strokeFrame >= this.strokeAnim.totalFrames) {
        const pose = this.timeline.evaluatePose(this.strokeAnim.totalFrames);
        this.ik.applyPose(pose);
        this.playingStroke = null;
        this.hud.querySelectorAll('.mg-stroke-btn').forEach((b) => b.classList.remove('active'));
      } else {
        const pose = this.timeline.evaluatePose(this.strokeFrame);
        this.ik.applyPose(pose);
      }
    }

    // 2. Ball physics
    if (this.ballPhase === 'waiting') {
      this.waitTimer -= dt;
      if (this.waitTimer <= 0) this._serveToPlayer();
      return;
    }

    // Spin effect on gravity
    let g = GRAVITY;
    if (this.ballPhase === 'toPlayer' && this.ballType === 'backspin') g *= 0.82;
    if (this.ballPhase === 'toOpponent' && this.playingStroke?.spin === 'top') g *= 1.25;

    this.ballVel.y += g * dt;
    this.ballPos.addScaledVector(this.ballVel, dt);

    // Table bounce
    const onTableXZ =
      Math.abs(this.ballPos.x) <= TABLE_HALF_W &&
      this.ballPos.z >= TABLE_Z_MIN &&
      this.ballPos.z <= TABLE_Z_MAX;

    if (onTableXZ && this.ballPos.y <= TABLE_Y + BALL_R && this.ballVel.y < 0) {
      this.ballPos.y = TABLE_Y + BALL_R;
      this.ballVel.y = -this.ballVel.y * 0.82;
      if (this.ballPhase === 'toPlayer' && this.ballPos.z < TABLE_NET_Z) {
        this.playerHasBounced = true;
      } else if (this.ballPhase === 'toOpponent' && this.ballPos.z > TABLE_NET_Z) {
        this.opponentHasBounced = true;
      }
    }

    // Check missed or won point
    if (this.ballPhase === 'toPlayer' && (this.ballPos.z < -0.5 || this.ballPos.y < 0.05)) {
      this.streak = 0;
      this._updateStats();
      this._showFeedback('PERSA!', '#e05a5a');
      this.ballPhase = 'waiting';
      this.waitTimer = 0.9;
    } else if (this.ballPhase === 'toOpponent' && (this.ballPos.z > TABLE_Z_MAX + 0.15 || this.ballPos.y < 0.05)) {
      if (this.opponentHasBounced) {
        // Opponent returns!
        this._serveToPlayer();
      } else {
        this.streak = 0;
        this._updateStats();
        this._showFeedback('FUORI!', '#f5a623');
        this.ballPhase = 'waiting';
        this.waitTimer = 0.9;
      }
    }

    this.ballMesh.position.copy(this.ballPos);
  }

  _updateStats() {
    document.getElementById('mg-score').textContent = String(this.score);
    document.getElementById('mg-streak').textContent = String(this.streak);
    document.getElementById('mg-best').textContent = String(this.bestStreak);
  }

  _showFeedback(text, color) {
    const el = document.getElementById('mg-feedback');
    el.textContent = text;
    el.style.color = color;
    el.classList.remove('pop');
    void el.offsetWidth;
    el.classList.add('pop');
  }
}
