import React, { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import {
  createParticles,
  createConstraints,
  createGeometry,
  index,
} from "../utils/clothUtils";
import { Particle, Constraint } from "../types/clothTypes";

const DAMPING = 0.03;
const DRAG = 1 - DAMPING;
const MASS = 0.1;
const TIMESTEP_SQ = Math.pow(18 / 1000, 2);

interface ClothProps {
  xSegs?: number;
  ySegs?: number;
  restDistance?: number;
}

const Cloth: React.FC<ClothProps> = ({
  xSegs = 10,
  ySegs = 10,
  restDistance = 25,
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const positionsRef = useRef<Float32Array | null>(null);
  const { raycaster, camera, mouse } = useThree();

  const [particles, constraints] = useMemo(() => {
    const particles = createParticles(xSegs, ySegs, restDistance, MASS);
    const constraints = createConstraints(
      particles,
      xSegs,
      ySegs,
      restDistance
    );
    return [particles, constraints];
  }, [xSegs, ySegs, restDistance]);

  const geometry = useMemo(
    () => createGeometry(particles, xSegs, ySegs),
    [particles, xSegs, ySegs]
  );

  useFrame((state) => {
    const { clock } = state;
    simulate(clock.getElapsedTime());
    updateGeometry();
  });

  const simulate = (now: number) => {
    const gravity = new THREE.Vector3(0, -9.81 * 1.4, 0).multiplyScalar(MASS);

    particles.forEach((particle: any) => {
      particle.acceleration.copy(gravity);
      particle.position.add(
        particle.position
          .clone()
          .sub(particle.previous)
          .multiplyScalar(DRAG)
          .add(particle.acceleration.multiplyScalar(TIMESTEP_SQ))
      );
      const temp = particle.previous.clone();
      particle.previous.copy(particle.position);
      particle.position.copy(temp);
    });

    // Satisfy constraints
    for (let i = 0; i < 3; i++) {
      constraints.forEach(([p1, p2, distance]: any) => {
        const diff = p1.position.clone().sub(p2.position);
        const currentDist = diff.length();
        if (currentDist === 0) return;
        const correction = diff.multiplyScalar(1 - distance / currentDist);
        const correctionHalf = correction.multiplyScalar(0.5);
        p1.position.add(correctionHalf);
        p2.position.sub(correctionHalf);
      });
    }

    // Pin the top corners
    particles[0].position.copy(particles[0].original);
    particles[xSegs].position.copy(particles[xSegs].original);
  };

  const updateGeometry = () => {
    if (!positionsRef.current || !meshRef.current) return;
    const positions = positionsRef.current;
    particles.forEach((particle: any, i: number) => {
      const i3 = i * 3;
      positions[i3] = particle.position.x;
      positions[i3 + 1] = particle.position.y;
      positions[i3 + 2] = particle.position.z;
    });
    meshRef.current.geometry.attributes.position.needsUpdate = true;
  };

  const handlePoke = (event: THREE.Event) => {
    raycaster.setFromCamera(mouse, camera);
    if (!meshRef.current) return;
    const intersects = raycaster.intersectObject(meshRef.current);
    if (intersects.length > 0) {
      const { point } = intersects[0];
      const force = new THREE.Vector3(0, 0, -50); // Adjust force as needed
      applyForceToNearbyParticles(point, force, 50); // 50 is the radius of effect
    }
  };

  const applyForceToNearbyParticles = (
    point: THREE.Vector3,
    force: THREE.Vector3,
    radius: number
  ) => {
    particles.forEach((particle: any) => {
      const distance = particle.position.distanceTo(point);
      if (distance < radius) {
        const strength = 1 - distance / radius;
        particle.position.add(force.clone().multiplyScalar(strength));
      }
    });
  };

  console.log(meshRef);

  return (
    <mesh ref={meshRef} onPointerDown={handlePoke}>
      <primitive object={geometry} attach="geometry" />
      <meshPhongMaterial color="#ffffff" side={THREE.DoubleSide} />
    </mesh>
  );
};

export default Cloth;
