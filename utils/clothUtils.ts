import * as THREE from "three";
import { Particle, Constraint } from "../types/clothTypes";

export function createParticles(
  xSegs: number,
  ySegs: number,
  restDistance: number,
  MASS: number
): Particle[] {
  const particles: Particle[] = [];
  for (let v = 0; v <= ySegs; v++) {
    for (let u = 0; u <= xSegs; u++) {
      particles.push({
        position: new THREE.Vector3(
          (u / xSegs - 0.5) * restDistance * xSegs,
          (v / ySegs - 0.5) * restDistance * ySegs,
          0
        ),
        previous: new THREE.Vector3(
          (u / xSegs - 0.5) * restDistance * xSegs,
          (v / ySegs - 0.5) * restDistance * ySegs,
          0
        ),
        original: new THREE.Vector3(
          (u / xSegs - 0.5) * restDistance * xSegs,
          (v / ySegs - 0.5) * restDistance * ySegs,
          0
        ),
        acceleration: new THREE.Vector3(0, 0, 0),
        mass: MASS,
        invMass: 1 / MASS,
      });
    }
  }
  return particles;
}

export function createConstraints(
  particles: Particle[],
  xSegs: number,
  ySegs: number,
  restDistance: number
): Constraint[] {
  const constraints: Constraint[] = [];
  for (let v = 0; v < ySegs; v++) {
    for (let u = 0; u < xSegs; u++) {
      constraints.push([
        particles[index(u, v, xSegs)],
        particles[index(u, v + 1, xSegs)],
        restDistance,
      ]);
      constraints.push([
        particles[index(u, v, xSegs)],
        particles[index(u + 1, v, xSegs)],
        restDistance,
      ]);
    }
  }
  return constraints;
}

export function createGeometry(
  particles: Particle[],
  xSegs: number,
  ySegs: number
): THREE.BufferGeometry {
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particles.length * 3);
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setIndex(createIndices(xSegs, ySegs));
  return geometry;
}

export function index(u: number, v: number, w: number): number {
  return u + v * (w + 1);
}

function createIndices(w: number, h: number): number[] {
  const indices: number[] = [];
  for (let v = 0; v < h; v++) {
    for (let u = 0; u < w; u++) {
      indices.push(index(u, v, w));
      indices.push(index(u + 1, v, w));
      indices.push(index(u, v + 1, w));
      indices.push(index(u + 1, v, w));
      indices.push(index(u + 1, v + 1, w));
      indices.push(index(u, v + 1, w));
    }
  }
  return indices;
}
