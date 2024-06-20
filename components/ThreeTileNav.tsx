"use client";

import {
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
  useRef,
  RefObject,
  MutableRefObject,
} from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MapControls, Grid, Html } from "@react-three/drei";
import { DragControls, motion, useDragControls } from "framer-motion";

export default function ThreeTileNav() {
  const controls = useDragControls();
  const [activeButton, setActiveButton] = useState("");
  const [cameraPos, setCameraPos] = useState([0, 0, 5]);
  const [mainHover, setMainHover] = useState(false);
  const [mainActive, setMainActive] = useState(false);
  const [projHover, setProjHover] = useState(false);
  const [projActive, setProjActive] = useState(false);
  const [socialHover, setSocialHover] = useState(false);
  const [socialActive, setSocialActive] = useState(false);

  const mainRef = useRef<HTMLButtonElement>(null);
  const ref = useRef(null);

  // useEffect(() => {
  //   switch (activeButton) {
  //     case "main":
  //       setCameraPos([0, 0, 5]);
  //       break;
  //     case "proj":
  //       setCameraPos([5, 0, 5]);

  //     default:
  //       break;
  //   }
  // }, [activeButton, cameraPos]);

  console.log("OBJECT");
  console.log(ref.current?.object.position);
  console.log("TARGET");
  console.log(ref.current?.target);

  const [active, setActive] = useState<MutableRefObject<null>>();

  console.log(active);

  // const foo = () => {
  //   useFrame((state, delta) => {
  //     console.log(ref.current?.object.position);
  //   });
  // };

  return (
    <Canvas
      className="bg-[#f3f0f7]"
      camera={{
        position: [0, 0, 10],
      }}
    >
      <MapControls
        ref={ref}
        screenSpacePanning
        minDistance={7.5}
        maxDistance={30}
        // target={[0, 0, 0]}
      />
      <Grid
        infiniteGrid
        rotation={[0, Math.PI * -0.5, Math.PI * -0.5]}
        sectionColor="#dfd8ea"
        sectionThickness={1.3}
        sectionSize={1}
        cellColor="#dfd8ea"
        cellThickness={1.3}
      />

      <Html
        transform
        position={[0, 0, 0]}
        className="border border-red-500 h-dvh w-dvw justify-center items-center flex cursor-grab active:cursor-grabbing"
      >
        <MainButton
          controls={controls}
          setActive={setActive}
          setActiveButton={setActiveButton}
          mainActive={mainActive}
          setMainActive={setMainActive}
          mainHover={mainHover}
          setMainHover={setMainHover}
          setProjActive={setProjActive}
          setSocialActive={setSocialActive}
        />
        <SocialButton
          controls={controls}
          setActiveButton={setActiveButton}
          mainActive={mainActive}
          socialActive={socialActive}
          setSocialActive={setSocialActive}
          socialHover={socialHover}
          setSocialHover={setSocialHover}
        />
        <ProjButton
          controls={controls}
          setActiveButton={setActiveButton}
          mainActive={mainActive}
          projActive={projActive}
          setProjActive={setProjActive}
          projHover={projHover}
          setProjHover={setProjHover}
        />
      </Html>
    </Canvas>
  );
}

function MainButton({
  controls,
  setActive,
  setActiveButton,
  mainActive,
  setMainActive,
  mainHover,
  setMainHover,
  setProjActive,
  setSocialActive,
}: {
  controls: DragControls;
  setActive: Dispatch<SetStateAction<MutableRefObject<null> | undefined>>;
  setActiveButton: Dispatch<SetStateAction<string>>;
  mainActive: boolean;
  setMainActive: Dispatch<SetStateAction<boolean>>;
  mainHover: boolean;
  setMainHover: Dispatch<SetStateAction<boolean>>;
  setProjActive: Dispatch<SetStateAction<boolean>>;
  setSocialActive: Dispatch<SetStateAction<boolean>>;
}) {
  const ref = useRef(null);
  // console.log(ref);
  return (
    <motion.button
      ref={ref}
      onClick={() => {
        setMainActive(!mainActive);
        setProjActive(false);
        setSocialActive(false);
        setActiveButton("main");
        setActive(ref);
      }}
      initial={{
        height: 0,
        width: 0,
        borderRadius: "5rem",
      }}
      animate={{
        height: mainActive ? "10rem" : "5rem",
        width: mainActive ? "10rem" : "5rem",
        x: mainHover ? "" : 0,
        y: mainHover ? "" : 0,
        borderRadius: mainActive ? "2rem" : "5rem",
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
      dragConstraints={{ top: 3, bottom: 3, left: 3, right: 3 }}
      dragElastic={0.1}
      className="absolute flex aspect-square h-40 bg-white rounded-full"
    ></motion.button>
  );
}

function ProjButton({
  controls,
  setActiveButton,
  mainActive,
  projActive,
  setProjActive,
  projHover,
  setProjHover,
}: {
  controls: DragControls;
  setActiveButton: Dispatch<SetStateAction<string>>;
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
              height: projActive ? "10rem" : "5rem",
              width: projActive ? "10rem" : "5rem",
              x: projHover ? "" : 0,
              y: projHover ? "" : 0,
              borderRadius: projActive ? "2rem" : "5rem",
              marginLeft: projActive ? 399.9 : 320,
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
      dragConstraints={{ top: 3, bottom: 3, left: 3, right: 3 }}
      dragElastic={0.1}
      className="flex aspect-square h-40 bg-white rounded-full"
    ></motion.button>
  );
}

function SocialButton({
  controls,
  setActiveButton,
  mainActive,
  socialActive,
  setSocialActive,
  socialHover,
  setSocialHover,
}: {
  controls: DragControls;
  setActiveButton: Dispatch<SetStateAction<string>>;
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
              height: socialActive ? "10rem" : "5rem",
              width: socialActive ? "10rem" : "5rem",
              x: socialHover ? "" : 0,
              y: socialHover ? "" : 0,
              borderRadius: socialActive ? "2rem" : "5rem",
              marginLeft: socialActive ? -399.9 : -320,
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
      dragConstraints={{ top: 3, bottom: 3, left: 3, right: 3 }}
      dragElastic={0.1}
      className="flex aspect-square h-40 bg-white rounded-full"
    ></motion.button>
  );
}
