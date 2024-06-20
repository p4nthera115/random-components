"use client";

import { Canvas } from "@react-three/fiber";
import { MapControls, Grid } from "@react-three/drei";

export default function ThreeTileNav() {
  return (
    <Canvas className="bg-[#f3f0f7]">
      <MapControls screenSpacePanning minDistance={5} maxDistance={30} />
      <Grid
        infiniteGrid
        rotation={[0, Math.PI * -0.5, Math.PI * -0.5]}
        sectionColor="#dfd8ea"
        sectionThickness={1.3}
        sectionSize={1}
        cellColor="#dfd8ea"
        cellThickness={1.3}
      />
    </Canvas>
  );
}
