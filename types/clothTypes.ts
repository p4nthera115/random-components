import * as THREE from "three";

export interface Particle {
  position: THREE.Vector3;
  previous: THREE.Vector3;
  original: THREE.Vector3;
  acceleration: THREE.Vector3;
  mass: number;
  invMass: number;
}

export type Constraint = [Particle, Particle, number];
