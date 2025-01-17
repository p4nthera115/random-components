"use client";

import { DragControls, motion, useDragControls } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";
import { Canvas } from "@react-three/fiber";

export default function TileNav() {
  const controls = useDragControls();
  const [mainHover, setMainHover] = useState(false);
  const [mainActive, setMainActive] = useState(false);
  const [projHover, setProjHover] = useState(false);
  const [projActive, setProjActive] = useState(false);
  const [socialHover, setSocialHover] = useState(false);
  const [socialActive, setSocialActive] = useState(false);

  return (
    <>
      <div className="h-full w-full flex justify-center items-center">
        {/* <Image
        src={"/grid.png"}
        alt="grid"
        height={500}
        width={500}
        className="object-fill pointer-events-none"
      /> */}
        <MainButton
          controls={controls}
          mainActive={mainActive}
          setMainActive={setMainActive}
          mainHover={mainHover}
          setMainHover={setMainHover}
          setProjActive={setProjActive}
          setSocialActive={setSocialActive}
        />
        <SocialButton
          controls={controls}
          mainActive={mainActive}
          socialActive={socialActive}
          setSocialActive={setSocialActive}
          socialHover={socialHover}
          setSocialHover={setSocialHover}
        />
        <ProjButton
          controls={controls}
          mainActive={mainActive}
          projActive={projActive}
          setProjActive={setProjActive}
          projHover={projHover}
          setProjHover={setProjHover}
        />
      </div>
    </>
  );
}

function MainButton({
  controls,
  mainActive,
  setMainActive,
  mainHover,
  setMainHover,
  setProjActive,
  setSocialActive,
}: {
  controls: DragControls;
  mainActive: boolean;
  setMainActive: Dispatch<SetStateAction<boolean>>;
  mainHover: boolean;
  setMainHover: Dispatch<SetStateAction<boolean>>;
  setProjActive: Dispatch<SetStateAction<boolean>>;
  setSocialActive: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <motion.button
      onClick={() => {
        setMainActive(!mainActive);
        setProjActive(false);
        setSocialActive(false);
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
        borderRadius: mainActive ? "3.5rem" : "5rem",
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
      className="absolute flex aspect-square h-40 bg-white rounded-full shadow-lg z-10"
    ></motion.button>
  );
}

function ProjButton({
  controls,
  mainActive,
  projActive,
  setProjActive,
  projHover,
  setProjHover,
}: {
  controls: DragControls;
  mainActive: boolean;
  projActive: boolean;
  setProjActive: Dispatch<SetStateAction<boolean>>;
  projHover: boolean;
  setProjHover: Dispatch<SetStateAction<boolean>>;
}) {
  return (
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
            borderRadius: projActive ? "3.5rem" : "5rem",
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
      className="flex aspect-square h-40 bg-white rounded-full shadow-lg"
    ></motion.button>
  );
}

function SocialButton({
  controls,
  mainActive,
  socialActive,
  setSocialActive,
  socialHover,
  setSocialHover,
}: {
  controls: DragControls;
  mainActive: boolean;
  socialActive: boolean;
  setSocialActive: Dispatch<SetStateAction<boolean>>;
  socialHover: boolean;
  setSocialHover: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <motion.button
      onClick={() => setSocialActive(!socialActive)}
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
            height: socialActive ? "18rem" : "10rem",
            width: socialActive ? "18rem" : "10rem",
            x: socialHover ? "" : 5,
            y: socialHover ? "" : 5,
            borderRadius: socialActive ? "3.5rem" : "5rem",
            marginLeft: socialActive ? -620 : -600,
          }
          : {}
      }
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 20,
        duration: 0.7,
        delay: mainActive && !socialHover ? 0.4 : 0,
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
      onMouseEnter={() => setSocialHover(true)}
      onMouseLeave={() => setSocialHover(false)}
      onPointerOver={(e) => controls.start(e, { snapToCursor: false })}
      dragControls={controls}
      drag={socialHover && socialActive === false}
      dragConstraints={{ top: 5, bottom: 5, left: 5, right: 5 }}
      dragElastic={0.1}
      className="flex aspect-square h-40 bg-white rounded-full shadow-lg"
    ></motion.button>
  );
}
