"use client";

import {
  Dispatch,
  SetStateAction,
  useState,
  useRef,
  useEffect,
  forwardRef,
  RefObject,
  createRef,
} from "react";
import { useThree } from "@react-three/fiber";
import { MapControls, Grid, Html } from "@react-three/drei";
import { DragControls, motion, useDragControls } from "framer-motion";
import { Vector3 } from "three";

type ButtonRefs = {
  main: RefObject<HTMLButtonElement>;
  social: RefObject<HTMLButtonElement>;
  projects: RefObject<HTMLButtonElement>;
};

export default function ThreeTileNav() {
  const controls = useDragControls();
  const [activeButton, setActiveButton] = useState("");
  const [cameraPos, setCameraPos] = useState([0, 0, 7.5]);
  const [mainHover, setMainHover] = useState(false);
  const [mainActive, setMainActive] = useState(false);
  const [projectsHover, setProjectsHover] = useState(false);
  const [projectsActive, setProjectsActive] = useState(false);
  const [socialHover, setSocialHover] = useState(false);
  const [socialActive, setSocialActive] = useState(false);

  const mapControlsRef = useRef<any>(null);

  console.log(activeButton);

  const { camera, scene } = useThree();

  const buttonsRef = useRef<ButtonRefs>({
    main: createRef<HTMLButtonElement>(),
    social: createRef<HTMLButtonElement>(),
    projects: createRef<HTMLButtonElement>(),
  });

  return (
    <>
      <MapControls
        ref={mapControlsRef}
        screenSpacePanning
        minDistance={7.5}
        maxDistance={30}
      />
      <Grid
        infiniteGrid
        rotation={[0, Math.PI * -0.5, Math.PI * -0.5]}
        sectionColor="#dfd8ea"
        sectionThickness={1.3}
        sectionSize={1}
        cellColor="#dfd8ea5c"
        cellThickness={1.3}
      />

      <Html
        transform
        position={[0, 0, 0]}
        className="border border-red-500 h-dvh w-dvw justify-center items-center flex cursor-grab active:cursor-grabbing"
      >
        <MainButton
          ref={buttonsRef.current.main}
          controls={controls}
          setActiveButton={setActiveButton}
          mainActive={mainActive}
          setMainActive={setMainActive}
          mainHover={mainHover}
          setMainHover={setMainHover}
          setProjectsActive={setProjectsActive}
          setSocialActive={setSocialActive}
        />
        <SocialButton
          ref={buttonsRef.current.social}
          controls={controls}
          setActiveButton={setActiveButton}
          mainActive={mainActive}
          socialActive={socialActive}
          setSocialActive={setSocialActive}
          socialHover={socialHover}
          setSocialHover={setSocialHover}
        />
        <ProjectsButton
          ref={buttonsRef.current.projects}
          controls={controls}
          setActiveButton={setActiveButton}
          mainActive={mainActive}
          projectsActive={projectsActive}
          setProjectsActive={setProjectsActive}
          projectsHover={projectsHover}
          setProjectsHover={setProjectsHover}
        />
      </Html>
    </>
  );
}

interface MainButtonProps {
  controls: DragControls;
  setActiveButton: React.Dispatch<React.SetStateAction<string>>;
  mainActive: boolean;
  setMainActive: React.Dispatch<React.SetStateAction<boolean>>;
  mainHover: boolean;
  setMainHover: React.Dispatch<React.SetStateAction<boolean>>;
  setProjectsActive: React.Dispatch<React.SetStateAction<boolean>>;
  setSocialActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const MainButton = forwardRef<HTMLButtonElement, MainButtonProps>(
  (
    {
      controls,
      setActiveButton,
      mainActive,
      setMainActive,
      mainHover,
      setMainHover,
      setProjectsActive,
      setSocialActive,
    },
    ref
  ) => {
    return (
      <motion.button
        ref={ref}
        onClick={() => {
          setMainActive(!mainActive);
          setProjectsActive(false);
          setSocialActive(false);
          setActiveButton("main");
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
);

interface ProjectsButtonProps {
  controls: DragControls;
  setActiveButton: Dispatch<SetStateAction<string>>;
  mainActive: boolean;
  projectsActive: boolean;
  setProjectsActive: Dispatch<SetStateAction<boolean>>;
  projectsHover: boolean;
  setProjectsHover: Dispatch<SetStateAction<boolean>>;
}

const ProjectsButton = forwardRef<HTMLButtonElement, ProjectsButtonProps>(
  (
    {
      controls,
      setActiveButton,
      mainActive,
      projectsActive,
      setProjectsActive,
      projectsHover,
      setProjectsHover,
    },
    ref
  ) => {
    return (
      <motion.button
        onClick={() => {
          setProjectsActive(!projectsActive);
          setActiveButton("projects");
        }}
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
                height: projectsActive ? "10rem" : "5rem",
                width: projectsActive ? "10rem" : "5rem",
                x: projectsHover ? "" : 0,
                y: projectsHover ? "" : 0,
                borderRadius: projectsActive ? "2rem" : "5rem",
                marginLeft: projectsActive ? 399.9 : 320,
              }
            : {}
        }
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
          duration: 0.7,
          delay: mainActive && !projectsHover ? 0.4 : 0,
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
        onMouseEnter={() => setProjectsHover(true)}
        onMouseLeave={() => setProjectsHover(false)}
        onPointerOver={(e) => controls.start(e, { snapToCursor: false })}
        dragControls={controls}
        drag={projectsHover && projectsActive === false}
        dragConstraints={{ top: 3, bottom: 3, left: 3, right: 3 }}
        dragElastic={0.1}
        className="flex aspect-square h-40 bg-white rounded-full"
      ></motion.button>
    );
  }
);

interface SocialButtonProps {
  controls: DragControls;
  setActiveButton: Dispatch<SetStateAction<string>>;
  mainActive: boolean;
  socialActive: boolean;
  setSocialActive: Dispatch<SetStateAction<boolean>>;
  socialHover: boolean;
  setSocialHover: Dispatch<SetStateAction<boolean>>;
}

const SocialButton = forwardRef<HTMLButtonElement, SocialButtonProps>(
  (
    {
      controls,
      setActiveButton,
      mainActive,
      socialActive,
      setSocialActive,
      socialHover,
      setSocialHover,
    },
    ref
  ) => {
    return (
      <motion.button
        onClick={() => {
          setSocialActive(!socialActive);
          setActiveButton("social");
        }}
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
);
