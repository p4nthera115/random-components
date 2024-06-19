"use client";

import { motion, useDragControls } from "framer-motion";
import { useState } from "react";

export default function TileNav() {
  const controls = useDragControls();
  const [mainHover, setMainHover] = useState(false);
  const [projHover, setProjHover] = useState(false);
  const [mainActive, setMainActive] = useState(false);
  const [projActive, setProjActive] = useState(false);

  return (
    <div className="h-full w-full flex justify-center items-center">
      <motion.button
        onClick={() => {
          setMainActive(!mainActive);
          setProjActive(false);
        }}
        initial={{
          height: 0,
          width: 0,
          borderRadius: "5rem",
        }}
        animate={{
          height: mainActive ? "18rem" : "10rem",
          width: mainActive ? "18rem" : "10rem",
          x: mainHover ? "" : 5,
          y: mainHover ? "" : 5,
          borderRadius: mainActive ? "2.5rem" : "5rem",
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
          duration: 0.5,
          x: {
            type: "tween",
            ease: "linear",
            duration: 0.2,
          },
          y: {
            type: "tween",
            ease: "linear",
            duration: 0.2,
          },
        }}
        onMouseEnter={() => setMainHover(true)}
        onMouseLeave={() => setMainHover(false)}
        onPointerOver={(e) => controls.start(e, { snapToCursor: false })}
        dragControls={controls}
        drag={mainHover && mainActive === false}
        dragConstraints={{ top: 5, bottom: 5, left: 5, right: 5 }}
        dragElastic={0.1}
        className="absolute flex aspect-square h-40 bg-white rounded-full"
      ></motion.button>
      <motion.button
        onClick={() => setProjActive(!projActive)}
        initial={{
          height: 0,
          width: 0,
          x: 0,
          y: 0,
          borderRadius: "5rem",
          position: "absolute",
        }}
        animate={
          mainActive
            ? {
                height: projActive ? "18rem" : "10rem",
                width: projActive ? "18rem" : "10rem",
                x: projHover ? "" : 5,
                y: projHover ? "" : 5,
                borderRadius: projActive ? "2.5rem" : "5rem",
                marginLeft: projActive ? 620 : 600,
              }
            : {}
        }
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
          duration: 0.7,
          delay: mainActive && !projHover ? 0.4 : 0,
          x: {
            type: "tween",
            ease: "linear",
            duration: 0.2,
          },
          y: {
            type: "tween",
            ease: "linear",
            duration: 0.2,
          },
        }}
        onMouseEnter={() => setProjHover(true)}
        onMouseLeave={() => setProjHover(false)}
        onPointerOver={(e) => controls.start(e, { snapToCursor: false })}
        dragControls={controls}
        drag={projHover && projActive === false}
        dragConstraints={{ top: 5, bottom: 5, left: 5, right: 5 }}
        dragElastic={0.1}
        className="flex aspect-square h-40 bg-white rounded-full"
      ></motion.button>
    </div>
  );
}
