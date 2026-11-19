import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

/**
 * Loads a rigged GLB/GLTF character, normalizes its scale/floor placement,
 * auto-detects humanoid bones, and stores rest-pose transforms for deterministic IK.
 */
export class RigManager {
  constructor(scene) {
    this.scene = scene;
    this.loader = new GLTFLoader();
    this.modelRoot = null;
    this.skeletonHelper = null;
    this.bones = {}; // Semantic map: { hips, spine, chest, neck, head, thighL, shinL, footL, ... }
    this.allBones = [];
    this.restTransforms = new Map(); // bone.uuid -> { position, quaternion }
    this.restWorldPositions = {}; // semanticKey -> Vector3
    this.restWorldQuaternions = {}; // semanticKey -> Quaternion
    this.floorY = 0;

    this.batRoot = null;
    this.batPivot = null;
    this.batSide = 'right';
    this.batDefaultTransform = {
      px: 0.01,
      py: 0.132,
      pz: 0.055,
      rx: 5,
      ry: -88,
      rz: 67,
    };
    this.batTransform = { ...this.batDefaultTransform };
  }

  async loadFromUrl(url) {
    const gltf = await this.loader.loadAsync(url);
    return this._setupModel(gltf);
  }

  async loadFromFile(file) {
    const url = URL.createObjectURL(file);
    try {
      const gltf = await this.loader.loadAsync(url);
      return this._setupModel(gltf);
    } finally {
      URL.revokeObjectURL(url);
    }
  }

  _setupModel(gltf) {
    // Cleanup previous model
    if (this.modelRoot) {
      this.scene.remove(this.modelRoot);
    }
    if (this.skeletonHelper) {
      this.scene.remove(this.skeletonHelper);
      this.skeletonHelper = null;
    }

    const root = gltf.scene;
    root.updateMatrixWorld(true);

    // Enable shadows
    root.traverse((obj) => {
      if (obj.isMesh) {
        obj.castShadow = true;
        obj.receiveShadow = true;
        if (obj.material) {
          obj.material.side = THREE.FrontSide;
        }
      }
    });

    // Compute bounding box to normalize height to ~1.75m and place feet on y = 0
    const box = new THREE.Box3().setFromObject(root);
    const size = new THREE.Vector3();
    box.getSize(size);
    const currentHeight = Math.max(size.y, 0.001);
    const targetHeight = 1.75;
    const scaleFactor = targetHeight / currentHeight;

    const wrapper = new THREE.Group();
    wrapper.name = 'CharacterWrapper';
    root.scale.multiplyScalar(scaleFactor);
    wrapper.add(root);
    wrapper.updateMatrixWorld(true);

    const scaledBox = new THREE.Box3().setFromObject(wrapper);
    const center = new THREE.Vector3();
    scaledBox.getCenter(center);
    root.position.x -= center.x;
    root.position.z -= center.z;
    root.position.y -= scaledBox.min.y;

    this.scene.add(wrapper);
    this.modelRoot = wrapper;
    wrapper.updateMatrixWorld(true);

    // Collect all bones
    this.allBones = [];
    const boneSet = new Set();
    wrapper.traverse((obj) => {
      if (obj.isBone && !boneSet.has(obj)) {
        boneSet.add(obj);
        this.allBones.push(obj);
      }
    });

    // Store rest pose transforms for every bone
    this.restTransforms.clear();
    for (const bone of this.allBones) {
      this.restTransforms.set(bone.uuid, {
        position: bone.position.clone(),
        quaternion: bone.quaternion.clone(),
      });
    }

    // Auto-detect semantic humanoid bones
    this.bones = this._detectHumanoidBones(this.allBones);

    // Store rest world positions & quaternions for detected bones
    this.restWorldPositions = {};
    this.restWorldQuaternions = {};
    for (const [key, bone] of Object.entries(this.bones)) {
      if (bone) {
        this.restWorldPositions[key] = bone.getWorldPosition(new THREE.Vector3());
        this.restWorldQuaternions[key] = bone.getWorldQuaternion(new THREE.Quaternion());
      }
    }

    // Create SkeletonHelper (hidden by default)
    this.skeletonHelper = new THREE.SkeletonHelper(wrapper);
    this.skeletonHelper.visible = false;
    this.skeletonHelper.material.linewidth = 2;
    this.scene.add(this.skeletonHelper);

    return {
      boneCount: this.allBones.length,
      detected: Object.keys(this.bones).filter((k) => Boolean(this.bones[k])),
    };
  }

  _detectHumanoidBones(bones) {
    const find = (patterns) => {
      for (const p of patterns) {
        const rx = typeof p === 'string' ? new RegExp(`^${p}$`, 'i') : p;
        const match = bones.find((b) => rx.test(b.name));
        if (match) return match;
      }
      return null;
    };

    return {
      hips: find([/^Root(_\d+)?$/i, /mixamorig:?Hips(_\d+)?$/i, /hips/i, /pelvis/i]),
      spine: find([/^spine(_\d+)?$/i, /mixamorig:?Spine(_\d+)?$/i, /spine0?1/i]),
      chest: find([/^spine\.001(_\d+)?$/i, /mixamorig:?Spine2(_\d+)?$/i, /mixamorig:?Spine1(_\d+)?$/i, /chest/i, /spine0?2/i, /upper.?chest/i]),
      neck: find([/upper.?neck/i, /mixamorig:?Neck(_\d+)?$/i, /neck/i]),
      head: find([/^Head(_\d+)?$/i, /mixamorig:?Head(_\d+)?$/i, /\bhead\b/i]),

      // Left Leg
      thighL: find([/^thigh\.L/i, /mixamorig:?LeftUpLeg(_\d+)?$/i, /left.?up.?leg/i, /thigh_l/i]),
      shinL: find([/^shin\.L/i, /mixamorig:?LeftLeg(_\d+)?$/i, /left.?leg(_\d+)?$/i, /calf_l/i, /shin_l/i]),
      footL: find([/^foot\.L/i, /mixamorig:?LeftFoot(_\d+)?$/i, /left.?foot/i, /foot_l/i]),
      toeL: find([/^toe\.L/i, /mixamorig:?LeftToeBase(_\d+)?$/i, /left.?toe/i, /toe_l/i]),

      // Right Leg
      thighR: find([/^thigh\.R/i, /mixamorig:?RightUpLeg(_\d+)?$/i, /right.?up.?leg/i, /thigh_r/i]),
      shinR: find([/^shin\.R/i, /mixamorig:?RightLeg(_\d+)?$/i, /right.?leg(_\d+)?$/i, /calf_r/i, /shin_r/i]),
      footR: find([/^foot\.R/i, /mixamorig:?RightFoot(_\d+)?$/i, /right.?foot/i, /foot_r/i]),
      toeR: find([/^toe\.R/i, /mixamorig:?RightToeBase(_\d+)?$/i, /right.?toe/i, /toe_r/i]),

      // Left Arm
      upperArmL: find([/^upper_arm\.L/i, /mixamorig:?LeftArm(_\d+)?$/i, /left.?arm(_\d+)?$/i, /upperarm_l/i]),
      forearmL: find([/^forearm\.L/i, /mixamorig:?LeftForeArm(_\d+)?$/i, /left.?fore.?arm/i, /lowerarm_l/i]),
      handL: find([/^hand\.L/i, /mixamorig:?LeftHand(_\d+)?$/i, /left.?hand(_\d+)?$/i, /hand_l/i]),

      // Right Arm
      upperArmR: find([/^upper_arm\.R/i, /mixamorig:?RightArm(_\d+)?$/i, /right.?arm(_\d+)?$/i, /upperarm_r/i]),
      forearmR: find([/^forearm\.R/i, /mixamorig:?RightForeArm(_\d+)?$/i, /right.?fore.?arm/i, /lowerarm_r/i]),
      handR: find([/^hand\.R/i, /mixamorig:?RightHand(_\d+)?$/i, /right.?hand(_\d+)?$/i, /hand_r/i]),
    };
  }

  resetAllBonesToRest() {
    for (const bone of this.allBones) {
      const rest = this.restTransforms.get(bone.uuid);
      if (rest) {
        bone.position.copy(rest.position);
        bone.quaternion.copy(rest.quaternion);
      }
    }
    if (this.modelRoot) {
      this.modelRoot.updateMatrixWorld(true);
    }
  }

  setSkeletonVisible(visible) {
    if (this.skeletonHelper) {
      this.skeletonHelper.visible = visible;
    }
  }

  async loadAndAttachBat(url = '/table_tennis_bat.glb', side = 'right') {
    const gltf = await this.loader.loadAsync(url);
    const batModel = gltf.scene;
    batModel.traverse((obj) => {
      if (obj.isMesh) {
        obj.castShadow = true;
        obj.receiveShadow = true;
      }
    });

    // Normalize bat size to ~0.26m length regardless of internal GLB units
    batModel.updateMatrixWorld(true);
    const box = new THREE.Box3().setFromObject(batModel);
    const size = new THREE.Vector3();
    box.getSize(size);
    const maxDim = Math.max(size.x, size.y, size.z, 0.001);
    const targetLength = 0.26;
    const batScale = targetLength / maxDim;

    // Center the grip on the handle (+Z end of the bat)
    const center = new THREE.Vector3();
    box.getCenter(center);
    const handleGripLocal = new THREE.Vector3(
      center.x,
      center.y,
      box.min.z + size.z * 0.78
    );

    const batNormalized = new THREE.Group();
    batNormalized.name = 'TableTennisBatNormalized';
    batModel.scale.setScalar(batScale);
    batModel.position.copy(handleGripLocal).multiplyScalar(-batScale);
    batNormalized.add(batModel);

    this.batRoot = batNormalized;
    this.batPivot = new THREE.Group();
    this.batPivot.name = 'TableTennisBatPivot';
    this.batPivot.add(this.batRoot);

    this.attachBatToHand(side);
  }

  attachBatToHand(side = 'right') {
    this.batSide = side;
    if (!this.batPivot) return;

    if (this.batPivot.parent) {
      this.batPivot.parent.remove(this.batPivot);
    }

    if (side === 'none') {
      this.batPivot.visible = false;
      return;
    }

    const handBone = side === 'left' ? this.bones.handL : this.bones.handR;
    if (!handBone) return;

    // Compensate for the hand bone's world scale so the bat keeps real-world 26cm size
    handBone.updateMatrixWorld(true);
    const handWorldScale = handBone.getWorldScale(new THREE.Vector3());
    this.batPivot.scale.set(
      1 / Math.max(handWorldScale.x, 1e-4),
      1 / Math.max(handWorldScale.y, 1e-4),
      1 / Math.max(handWorldScale.z, 1e-4)
    );

    this.applyBatTransform();
    this.batPivot.visible = true;
    handBone.add(this.batPivot);
  }

  applyBatTransform() {
    if (!this.batPivot || this.batSide === 'none') return;
    const sign = this.batSide === 'left' ? -1 : 1;
    const t = this.batTransform;
    this.batPivot.position.set(
      t.px * sign * this.batPivot.scale.x,
      t.py * this.batPivot.scale.y,
      t.pz * this.batPivot.scale.z
    );
    this.batPivot.rotation.set(
      THREE.MathUtils.degToRad(t.rx),
      THREE.MathUtils.degToRad(t.ry * sign),
      THREE.MathUtils.degToRad(t.rz * sign)
    );
  }

  setBatTransform(partial) {
    Object.assign(this.batTransform, partial);
    this.applyBatTransform();
  }

  resetBatTransform() {
    this.batTransform = { ...this.batDefaultTransform };
    this.applyBatTransform();
    return this.batTransform;
  }

  /**
   * Poses the hand holding the bat in a table tennis shakehand grip:
   * Middle, Ring, Pinky curled tightly around the handle;
   * Thumb resting on the blade/handle; Index finger extended on the rubber.
   */
  applyBatGripPose() {
    if (this.batSide === 'none') return;

    const prefix = this.batSide === 'left' ? 'LeftHand' : 'RightHand';
    const sign = this.batSide === 'left' ? -1 : 1;

    const rotateFinger = (suffix, rxDeg, ryDeg = 0, rzDeg = 0) => {
      const bone = this.allBones.find(
        (b) => b.name.includes(prefix + suffix)
      );
      if (!bone) return;
      const q = new THREE.Quaternion().setFromEuler(
        new THREE.Euler(
          THREE.MathUtils.degToRad(rxDeg),
          THREE.MathUtils.degToRad(ryDeg * sign),
          THREE.MathUtils.degToRad(rzDeg * sign),
          'XYZ'
        )
      );
      bone.quaternion.multiply(q);
    };

    // Curl Middle, Ring, Pinky tightly around the handle (+X curls toward palm +Z)
    for (const finger of ['Middle', 'Ring', 'Pinky']) {
      rotateFinger(`${finger}1`, 72);
      rotateFinger(`${finger}2`, 88);
      rotateFinger(`${finger}3`, 68);
    }

    // Index finger extended along the bottom edge of the rubber
    rotateFinger('Index1', 14, 0, -10);
    rotateFinger('Index2', 12);
    rotateFinger('Index3', 8);

    // Thumb resting on the opposite face/side of the blade
    rotateFinger('Thumb1', 18, 22, -18);
    rotateFinger('Thumb2', 12, 10, -10);
    rotateFinger('Thumb3', 10);
  }
}
