"use client";

import { motion, useDragControls } from "framer-motion";
import { useState } from "react";

export default function TileNav() {
  const controls = useDragControls();
  const [hover, setHover] = useState(false);

  console.log(hover);

  return (
    <div className="h-full w-full flex justify-center items-center">
      <motion.div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        initial={{
          height: 0,
          width: 0,
        }}
        animate={{
          height: "10rem",
          width: "10rem",
          x: hover ? "" : 5,
          y: hover ? "" : 5,
        }}
        transition={{
          type: "spring",
          duration: 0.5,
          height: { delay: 0.4 },
          width: { delay: 0.4 },
          x: {
            type: "tween",
            ease: "easeInOut",
          },
          y: {
            type: "tween",
            ease: "easeInOut",
          },
        }}
        className="flex aspect-square h-40 bg-white rounded-full"
        onPointerOver={(e) => controls.start(e)}
        dragControls={controls}
        drag={hover}
        dragConstraints={{ top: 5, bottom: 5, left: 5, right: 5 }}
        dragElastic={0.1}
      ></motion.div>
    </div>
  );
}
