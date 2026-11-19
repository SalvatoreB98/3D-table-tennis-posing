import * as THREE from 'three';

const _v1 = new THREE.Vector3();
const _v2 = new THREE.Vector3();
const _v3 = new THREE.Vector3();
const _q1 = new THREE.Quaternion();
const _q2 = new THREE.Quaternion();
const _q3 = new THREE.Quaternion();
const _euler = new THREE.Euler();

/**
 * Smart Full-Body & 2-Bone Analytical IK Solver.
 * Exposes kinetic handles ONLY for Hands, Feet (Legs), Knees, and Head,
 * while Spine, Chest, Hips, and Elbows follow automatically.
 */
export class IKSolver {
  constructor(rigManager) {
    this.rig = rigManager;
    this.footPinning = true;
    this.smartBodyFollow = true;
    this.targets = {};
    this.restTargets = {};
    this.floorFootY = 0;
  }

  initFromRig() {
    const b = this.rig.bones;
    const wp = this.rig.restWorldPositions;

    this.targets = {};
    this.restTargets = {};

    const addTarget = (id, label, color, pos, group = 'main') => {
      const p = pos ? pos.clone() : new THREE.Vector3();
      this.targets[id] = {
        id,
        label,
        color,
        group,
        position: p.clone(),
        rotation: new THREE.Euler(0, 0, 0, 'XYZ'),
      };
      this.restTargets[id] = {
        position: p.clone(),
        rotation: new THREE.Euler(0, 0, 0, 'XYZ'),
      };
    };

    // Hands, Feet (Legs), Knees, Hips/Pelvis, and Head
    if (b.hips) {
      addTarget('hips', 'Bacino', '#f5a623', wp.hips);
    }

    if (b.head) {
      const headAim = wp.head.clone().add(new THREE.Vector3(0, 0.05, 0.45));
      addTarget('head', 'Testa', '#a78bfa', headAim);
    }

    if (b.footL) {
      this.floorFootY = Math.min(wp.footL.y, wp.footR ? wp.footR.y : wp.footL.y);
      addTarget('footL', 'Piede SX', '#4cc38a', wp.footL);
    }
    if (b.footR) {
      addTarget('footR', 'Piede DX', '#38bdf8', wp.footR);
    }

    if (b.handL) addTarget('handL', 'Mano SX', '#4cc38a', wp.handL);
    if (b.handR) addTarget('handR', 'Mano DX', '#38bdf8', wp.handR);

    if (b.shinL) {
      addTarget('poleKneeL', 'Ginocchio SX', '#2d8a5e', wp.shinL.clone().add(new THREE.Vector3(0, 0, 0.45)), 'pole');
    }
    if (b.shinR) {
      addTarget('poleKneeR', 'Ginocchio DX', '#257aa3', wp.shinR.clone().add(new THREE.Vector3(0, 0, 0.45)), 'pole');
    }
  }

  resetAllTargets() {
    for (const id of Object.keys(this.targets)) {
      const rest = this.restTargets[id];
      if (rest) {
        this.targets[id].position.copy(rest.position);
        this.targets[id].rotation.copy(rest.rotation);
      }
    }
    this.solve();
  }

  resetTarget(id) {
    const t = this.targets[id];
    const r = this.restTargets[id];
    if (t && r) {
      t.position.copy(r.position);
      t.rotation.copy(r.rotation);
      this.solve();
    }
  }

  /**
   * Apply floor constraint & smart kinetics, then solve the full skeleton.
   */
  solve() {
    const b = this.rig.bones;
    if (!b.hips) return;

    // Clamp feet so they don't go below floor level when footPinning is active
    if (this.footPinning) {
      if (this.targets.footL) {
        this.targets.footL.position.y = Math.max(this.targets.footL.position.y, this.floorFootY);
      }
      if (this.targets.footR) {
        this.targets.footR.position.y = Math.max(this.targets.footR.position.y, this.floorFootY);
      }
    }

    // 1. Reset all bones to rest pose for deterministic solving
    this.rig.resetAllBonesToRest();

    // 2. Apply Hips target + Smart Body Follow-Through for Hips, Spine & Chest
    const hipsTarget = this.targets.hips;
    const hipsRest = this.restTargets.hips;
    const hipsWorldDelta = new THREE.Vector3();
    if (hipsTarget && hipsRest) {
      hipsWorldDelta.copy(hipsTarget.position).sub(hipsRest.position);
    }

    if (this.smartBodyFollow) {
      const reach = this._computeSmartReachOffset();
      hipsWorldDelta.add(reach.hipsShift);

      if (b.spine && b.chest) {
        const leanEuler = new THREE.Euler(reach.torsoPitch, reach.torsoYaw, reach.torsoRoll, 'XYZ');
        _q1.setFromEuler(leanEuler);
        const qSpine = new THREE.Quaternion().slerpQuaternions(new THREE.Quaternion(), _q1, 0.45);
        const qChest = new THREE.Quaternion().slerpQuaternions(new THREE.Quaternion(), _q1, 0.55);

        this._applyWorldRotationOffset(b.spine, qSpine);
        b.spine.updateMatrixWorld(true);
        this._applyWorldRotationOffset(b.chest, qChest);
        b.chest.updateMatrixWorld(true);
      }
    }

    if (b.hips.parent && hipsWorldDelta.lengthSq() > 1e-7) {
      const parentWorldQuatInv = b.hips.parent.getWorldQuaternion(_q1).invert();
      const parentScale = b.hips.parent.getWorldScale(_v2);
      const localDelta = hipsWorldDelta.clone().applyQuaternion(parentWorldQuatInv).divide(parentScale);
      b.hips.position.add(localDelta);
    }
    if (hipsTarget) {
      _q1.setFromEuler(hipsTarget.rotation);
      this._applyWorldRotationOffset(b.hips, _q1);
    }
    b.hips.updateMatrixWorld(true);

    // 3. Solve Head Look-At
    if (b.head && this.targets.head) {
      this._solveHeadLookAt(b.neck, b.head, this.targets.head);
    }

    // 4. Solve 2-Bone IK for Legs
    if (b.thighL && b.shinL && b.footL && this.targets.footL && this.targets.poleKneeL) {
      this._solveTwoBoneIK(
        b.thighL,
        b.shinL,
        b.footL,
        this.targets.footL.position,
        this.targets.poleKneeL.position
      );
      this._solveSmartFootOrientation(
        b.footL,
        'footL',
        this.targets.footL,
        this.targets.poleKneeL,
        this.restTargets.poleKneeL,
        this.restTargets.footL
      );
    }

    if (b.thighR && b.shinR && b.footR && this.targets.footR && this.targets.poleKneeR) {
      this._solveTwoBoneIK(
        b.thighR,
        b.shinR,
        b.footR,
        this.targets.footR.position,
        this.targets.poleKneeR.position
      );
      this._solveSmartFootOrientation(
        b.footR,
        'footR',
        this.targets.footR,
        this.targets.poleKneeR,
        this.restTargets.poleKneeR,
        this.restTargets.footR
      );
    }

    // 5. Solve 2-Bone IK for Arms (automatic anatomical elbow pole)
    if (b.upperArmL && b.forearmL && b.handL && this.targets.handL) {
      const autoElbowL = this._computeAutoElbowPole(b.upperArmL, this.targets.handL.position, 1);
      this._solveTwoBoneIK(
        b.upperArmL,
        b.forearmL,
        b.handL,
        this.targets.handL.position,
        autoElbowL
      );
      this._setBoneWorldOrientationFromRest(b.handL, 'handL', this.targets.handL.rotation);
    }

    if (b.upperArmR && b.forearmR && b.handR && this.targets.handR) {
      const autoElbowR = this._computeAutoElbowPole(b.upperArmR, this.targets.handR.position, -1);
      this._solveTwoBoneIK(
        b.upperArmR,
        b.forearmR,
        b.handR,
        this.targets.handR.position,
        autoElbowR
      );
      this._setBoneWorldOrientationFromRest(b.handR, 'handR', this.targets.handR.rotation);
    }

    // 6. Apply table tennis shakehand grip (closed fist + index on rubber)
    this.rig.applyBatGripPose();
  }

  _computeAutoElbowPole(shoulderBone, handTargetPos, sideSign) {
    const shoulderPos = shoulderBone.getWorldPosition(new THREE.Vector3());
    const mid = shoulderPos.clone().lerp(handTargetPos, 0.5);
    // Point elbow behind (-Z), slightly outward (sideSign * X), and slightly down (-Y)
    return mid.add(new THREE.Vector3(sideSign * 0.22, -0.15, -0.45));
  }

  _computeSmartReachOffset() {
    let torsoYaw = 0;
    let torsoPitch = 0;
    let torsoRoll = 0;
    const hipsShift = new THREE.Vector3();

    const checkArm = (handId, shoulderKey, sideSign) => {
      const ht = this.targets[handId];
      const hr = this.restTargets[handId];
      const sr = this.rig.restWorldPositions[shoulderKey];
      if (!ht || !hr || !sr) return;

      const delta = ht.position.clone().sub(hr.position);
      torsoYaw += THREE.MathUtils.clamp(delta.z * 0.45 * sideSign, -0.45, 0.45);
      if (delta.y < -0.15) {
        torsoPitch += THREE.MathUtils.clamp(-delta.y * 0.35, 0, 0.35);
      }
      const distFromShoulder = ht.position.distanceTo(sr);
      if (distFromShoulder > 0.65) {
        const pull = (distFromShoulder - 0.65) * 0.28;
        const dir = ht.position.clone().sub(sr).normalize();
        hipsShift.addScaledVector(dir, Math.min(pull, 0.14));
      }
    };

    checkArm('handL', 'upperArmL', -1);
    checkArm('handR', 'upperArmR', 1);

    // Center-of-mass balance between feet
    const fl = this.targets.footL;
    const fr = this.targets.footR;
    const flr = this.restTargets.footL;
    const frr = this.restTargets.footR;
    if (fl && fr && flr && frr) {
      const avgFootX = 0.5 * ((fl.position.x - flr.position.x) + (fr.position.x - frr.position.x));
      const avgFootZ = 0.5 * ((fl.position.z - flr.position.z) + (fr.position.z - frr.position.z));
      hipsShift.x += avgFootX * 0.45;
      hipsShift.z += avgFootZ * 0.45;
    }

    return { torsoYaw, torsoPitch, torsoRoll, hipsShift };
  }

  _solveHeadLookAt(neckBone, headBone, headTarget) {
    const headPos = headBone.getWorldPosition(_v1);
    const toTarget = _v2.copy(headTarget.position).sub(headPos);
    if (toTarget.lengthSq() < 1e-5) return;
    toTarget.normalize();

    const forward = _v3.set(0, 0, 1);
    const lookQuat = _q1.setFromUnitVectors(forward, toTarget);

    _euler.setFromQuaternion(lookQuat, 'YXZ');
    _euler.y = THREE.MathUtils.clamp(_euler.y, -1.1, 1.1);
    _euler.x = THREE.MathUtils.clamp(_euler.x, -0.75, 0.75);
    _euler.z = THREE.MathUtils.clamp(_euler.z, -0.4, 0.4);
    lookQuat.setFromEuler(_euler);

    _q2.setFromEuler(headTarget.rotation);
    lookQuat.multiply(_q2);

    if (neckBone) {
      const qNeck = new THREE.Quaternion().slerpQuaternions(new THREE.Quaternion(), lookQuat, 0.35);
      this._applyWorldRotationOffset(neckBone, qNeck);
      neckBone.updateMatrixWorld(true);
    }
    const qHead = new THREE.Quaternion().slerpQuaternions(new THREE.Quaternion(), lookQuat, 0.65);
    this._applyWorldRotationOffset(headBone, qHead);
    headBone.updateMatrixWorld(true);
  }

  _solveTwoBoneIK(rootBone, midBone, endBone, targetPos, polePos) {
    rootBone.updateMatrixWorld(true);

    const posA = rootBone.getWorldPosition(new THREE.Vector3());
    const posB = midBone.getWorldPosition(new THREE.Vector3());
    const posC = endBone.getWorldPosition(new THREE.Vector3());

    const len1 = posA.distanceTo(posB);
    const len2 = posB.distanceTo(posC);
    if (len1 < 1e-5 || len2 < 1e-5) return;

    const toTarget = targetPos.clone().sub(posA);
    const maxLen = (len1 + len2) * 0.999;
    const minLen = Math.max(Math.abs(len1 - len2) * 1.01, 0.01);
    const dist = THREE.MathUtils.clamp(toTarget.length(), minLen, maxLen);
    const dirN = toTarget.lengthSq() > 1e-8 ? toTarget.normalize() : new THREE.Vector3(0, -1, 0);

    const cosA = THREE.MathUtils.clamp(
      (len1 * len1 + dist * dist - len2 * len2) / (2 * len1 * dist),
      -1,
      1
    );
    const angleA = Math.acos(cosA);

    const poleVec = polePos.clone().sub(posA);
    const bendDir = poleVec.sub(dirN.clone().multiplyScalar(poleVec.dot(dirN)));
    if (bendDir.lengthSq() < 1e-6) {
      bendDir.set(0, 0, 1);
      bendDir.sub(dirN.clone().multiplyScalar(bendDir.dot(dirN)));
      if (bendDir.lengthSq() < 1e-6) bendDir.set(1, 0, 0);
    }
    bendDir.normalize();

    const posBDesired = posA
      .clone()
      .addScaledVector(dirN, len1 * Math.cos(angleA))
      .addScaledVector(bendDir, len1 * Math.sin(angleA));

    const vCurr1 = posB.clone().sub(posA).normalize();
    const vDest1 = posBDesired.clone().sub(posA).normalize();
    const qDelta1 = new THREE.Quaternion().setFromUnitVectors(vCurr1, vDest1);
    this._applyWorldRotationOffset(rootBone, qDelta1);
    rootBone.updateMatrixWorld(true);

    const posBNew = midBone.getWorldPosition(new THREE.Vector3());
    const posCNew = endBone.getWorldPosition(new THREE.Vector3());
    const vCurr2 = posCNew.clone().sub(posBNew).normalize();
    const vDest2 = targetPos.clone().sub(posBNew).normalize();
    const qDelta2 = new THREE.Quaternion().setFromUnitVectors(vCurr2, vDest2);
    this._applyWorldRotationOffset(midBone, qDelta2);
    midBone.updateMatrixWorld(true);
  }

  _applyWorldRotationOffset(bone, worldDeltaQuat) {
    if (!bone.parent) {
      bone.quaternion.premultiply(worldDeltaQuat);
      return;
    }
    const parentWorldQuatInv = bone.parent.getWorldQuaternion(_q3).invert();
    const boneWorldQuat = bone.getWorldQuaternion(new THREE.Quaternion());
    const newWorldQuat = worldDeltaQuat.clone().multiply(boneWorldQuat);
    bone.quaternion.copy(parentWorldQuatInv.multiply(newWorldQuat));
  }

  _setBoneWorldOrientationFromRest(bone, restKey, userEuler) {
    const restWorldQuat = this.rig.restWorldQuaternions[restKey];
    if (!restWorldQuat || !bone.parent) return;

    const userQuat = _q1.setFromEuler(userEuler);
    const desiredWorldQuat = userQuat.multiply(restWorldQuat);
    const parentWorldQuatInv = bone.parent.getWorldQuaternion(_q2).invert();
    bone.quaternion.copy(parentWorldQuatInv.multiply(desiredWorldQuat));
    bone.updateMatrixWorld(true);
  }

  /**
   * Smart foot orientation: automatically aligns the foot's horizontal (yaw) heading
   * with the knee pole direction, plus any manual rotation on the foot handle.
   */
  _solveSmartFootOrientation(footBone, restKey, footTarget, poleTarget, poleRest, footRest) {
    const restWorldQuat = this.rig.restWorldQuaternions[restKey];
    if (!restWorldQuat || !footBone.parent) return;

    const dx = poleTarget.position.x - footTarget.position.x;
    const dz = poleTarget.position.z - footTarget.position.z;
    const rdx = poleRest ? poleRest.position.x - footRest.position.x : 0;
    const rdz = poleRest ? poleRest.position.z - footRest.position.z : 1;

    let deltaYaw = 0;
    if (dx * dx + dz * dz > 1e-4 && rdx * rdx + rdz * rdz > 1e-4) {
      const currentYaw = Math.atan2(dx, dz);
      const restYaw = Math.atan2(rdx, rdz);
      deltaYaw = currentYaw - restYaw;
      // Normalize to [-PI, PI]
      while (deltaYaw > Math.PI) deltaYaw -= Math.PI * 2;
      while (deltaYaw < -Math.PI) deltaYaw += Math.PI * 2;
    }

    const yawQuat = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), deltaYaw);
    const userQuat = _q1.setFromEuler(footTarget.rotation);
    const desiredWorldQuat = userQuat.multiply(yawQuat).multiply(restWorldQuat);
    const parentWorldQuatInv = footBone.parent.getWorldQuaternion(_q2).invert();
    footBone.quaternion.copy(parentWorldQuatInv.multiply(desiredWorldQuat));
    footBone.updateMatrixWorld(true);
  }

  capturePose() {
    const pose = {};
    for (const [id, t] of Object.entries(this.targets)) {
      pose[id] = {
        px: t.position.x,
        py: t.position.y,
        pz: t.position.z,
        rx: t.rotation.x,
        ry: t.rotation.y,
        rz: t.rotation.z,
      };
    }
    return pose;
  }

  applyPose(pose) {
    for (const [id, vals] of Object.entries(pose)) {
      const t = this.targets[id];
      if (!t || !vals) continue;
      if (vals.px !== undefined) t.position.x = vals.px;
      if (vals.py !== undefined) t.position.y = vals.py;
      if (vals.pz !== undefined) t.position.z = vals.pz;
      if (vals.rx !== undefined) t.rotation.x = vals.rx;
      if (vals.ry !== undefined) t.rotation.y = vals.ry;
      if (vals.rz !== undefined) t.rotation.z = vals.rz;
    }
    this.solve();
  }
}
