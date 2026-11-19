import * as THREE from 'three';

/**
 * Manages interactive 3D IK handle meshes, pole guide lines, and 3D motion path visualization.
 */
export class IKGizmos {
  constructor(scene, ikSolver) {
    this.scene = scene;
    this.ik = ikSolver;
    this.group = new THREE.Group();
    this.group.name = 'IKGizmosGroup';
    this.scene.add(this.group);

    this.handleMeshes = {}; // id -> Mesh
    this.poleLines = [];
    this.selectedId = null;

    // 3D Motion Path line for selected handle
    const pathGeo = new THREE.BufferGeometry();
    const pathMat = new THREE.LineBasicMaterial({ color: 0x60a5fa, transparent: true, opacity: 0.75 });
    this.motionPathLine = new THREE.Line(pathGeo, pathMat);
    this.motionPathLine.visible = true;
    this.scene.add(this.motionPathLine);
  }

  rebuild() {
    // Clear existing
    while (this.group.children.length > 0) {
      const child = this.group.children[0];
      this.group.remove(child);
    }
    this.handleMeshes = {};
    this.poleLines = [];

    for (const [id, target] of Object.entries(this.ik.targets)) {
      const isPole = target.group === 'pole';
      let geo;
      if (id === 'hips') {
        geo = new THREE.TorusGeometry(0.16, 0.016, 10, 28);
        geo.rotateX(Math.PI / 2);
      } else if (id === 'chest') {
        geo = new THREE.OctahedronGeometry(0.065, 0);
      } else if (id.startsWith('foot')) {
        geo = new THREE.BoxGeometry(0.11, 0.04, 0.18);
      } else if (isPole) {
        geo = new THREE.SphereGeometry(0.032, 12, 12);
      } else {
        geo = new THREE.SphereGeometry(0.048, 16, 16);
      }

      const mat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(target.color),
        transparent: true,
        opacity: isPole ? 0.55 : 0.85,
        depthTest: false,
      });

      const mesh = new THREE.Mesh(geo, mat);
      mesh.renderOrder = 999;
      mesh.userData = { ikId: id, baseColor: target.color, isPole };
      mesh.position.copy(target.position);
      mesh.rotation.copy(target.rotation);

      this.group.add(mesh);
      this.handleMeshes[id] = mesh;
    }

    // Create guide lines from poles to joints
    const pairs = [
      ['poleKneeL', 'shinL'],
      ['poleKneeR', 'shinR'],
      ['poleElbowL', 'forearmL'],
      ['poleElbowR', 'forearmR'],
    ];
    for (const [poleId, boneKey] of pairs) {
      if (this.handleMeshes[poleId] && this.ik.rig.bones[boneKey]) {
        const lineGeo = new THREE.BufferGeometry().setFromPoints([
          new THREE.Vector3(),
          new THREE.Vector3(),
        ]);
        const lineMat = new THREE.LineDashedMaterial({
          color: 0x8892a8,
          dashSize: 0.03,
          gapSize: 0.02,
          transparent: true,
          opacity: 0.5,
          depthTest: false,
        });
        const line = new THREE.Line(lineGeo, lineMat);
        line.renderOrder = 998;
        this.group.add(line);
        this.poleLines.push({ line, poleId, boneKey });
      }
    }
  }

  select(id) {
    this.selectedId = id;
    for (const [key, mesh] of Object.entries(this.handleMeshes)) {
      const isSel = key === id;
      mesh.scale.setScalar(isSel ? 1.25 : 1.0);
      mesh.material.color.set(isSel ? '#ffffff' : mesh.userData.baseColor);
      mesh.material.opacity = isSel ? 1.0 : mesh.userData.isPole ? 0.55 : 0.82;
    }
  }

  syncFromSolver() {
    for (const [id, mesh] of Object.entries(this.handleMeshes)) {
      const target = this.ik.targets[id];
      if (!target) continue;
      mesh.position.copy(target.position);
      mesh.rotation.copy(target.rotation);
    }

    // Update pole guide lines
    for (const item of this.poleLines) {
      const poleTarget = this.ik.targets[item.poleId];
      const bone = this.ik.rig.bones[item.boneKey];
      if (!poleTarget || !bone) continue;
      const bonePos = bone.getWorldPosition(new THREE.Vector3());
      const posAttr = item.line.geometry.attributes.position;
      posAttr.setXYZ(0, poleTarget.position.x, poleTarget.position.y, poleTarget.position.z);
      posAttr.setXYZ(1, bonePos.x, bonePos.y, bonePos.z);
      posAttr.needsUpdate = true;
      item.line.computeLineDistances();
    }
  }

  updateMotionPath(points, visible = true) {
    if (!visible || !points || points.length < 2) {
      this.motionPathLine.visible = false;
      return;
    }
    this.motionPathLine.geometry.setFromPoints(points);
    this.motionPathLine.visible = true;
  }

  getPickableMeshes() {
    return Object.values(this.handleMeshes);
  }
}
