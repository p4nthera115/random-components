"use client";

import { Canvas } from "@react-three/fiber";
// import ThreeTileNav from "./ThreeTileNav";
import ThreeTileNav from "./NewThreeTileNav";
import { OrbitControls } from "@react-three/drei";
import Cloth from "./Cloth";

export default function ThreeTileNavCanvas() {
  return (
    <Canvas className="bg-black">
      {/* <ThreeTileNav /> */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Cloth />
      <OrbitControls />
    </Canvas>
  );
}
