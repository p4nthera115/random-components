"use client";

import { Canvas } from "@react-three/fiber";
// import ThreeTileNav from "./ThreeTileNav";
import ThreeTileNav from "./NewThreeTileNav";

export default function ThreeTileNavCanvas() {
  return (
    <Canvas className="bg-[#f3f0f7]">
      <ThreeTileNav />
    </Canvas>
  );
}
