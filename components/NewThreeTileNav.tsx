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
  useLayoutEffect,
  useMemo,
} from "react";
import { ThreeEvent, useThree } from "@react-three/fiber";
import { MapControls, Grid, Html } from "@react-three/drei";
// import { DragControls, motion, useDragControls } from "framer-motion";
import { motion } from "framer-motion-3d";
import { Vector3 } from "three";
import * as THREE from "three";

type ButtonRefs = {
  main: RefObject<HTMLButtonElement>;
  social: RefObject<HTMLButtonElement>;
  projects: RefObject<HTMLButtonElement>;
};

export default function ThreeTileNav() {
  // const controls = useDragControls();
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

  const handleButtonClick = (buttonName: string) => {
    // Handle camera movement here
    console.log(`${buttonName} button clicked`);
  };

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
      <MainButton
        position={[-2, 0, 0]}
        onClick={() => handleButtonClick("main")}
        isActive={mainActive}
        setIsActive={setMainActive}
        isHover={mainHover}
        setIsHover={setMainHover}
        setOtherButtonsInactive={() => {
          setSocialActive(false);
          setProjectsActive(false);
        }}
      />
      <SocialButton
        position={[0, 0, 0]}
        onClick={() => handleButtonClick("social")}
        isActive={socialActive}
        setIsActive={setSocialActive}
        isHover={socialHover}
        setIsHover={setSocialHover}
        setOtherButtonsInactive={() => {
          setMainActive(false);
          setProjectsActive(false);
        }}
      />
      <ProjectsButton
        position={[2, 0, 0]}
        onClick={() => handleButtonClick("projects")}
        isActive={projectsActive}
        setIsActive={setProjectsActive}
        isHover={projectsHover}
        setIsHover={setProjectsHover}
        setOtherButtonsInactive={() => {
          setMainActive(false);
          setSocialActive(false);
        }}
      />
    </>
  );
}

interface ButtonProps {
  position: [number, number, number];
  onClick: () => void;
  label: string;
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
  isHover: boolean;
  setIsHover: Dispatch<SetStateAction<boolean>>;
  setOtherButtonsInactive: () => void;
}

const Button: React.FC<ButtonProps> = ({
  position,
  onClick,
  label,
  isActive,
  setIsActive,
  isHover,
  setIsHover,
  setOtherButtonsInactive,
}) => {
  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    setIsActive(!isActive);
    setOtherButtonsInactive();
    onClick;
  };

  return (
    <motion.group position={position}>
      <motion.mesh
        onClick={handleClick}
        onPointerOver={() => setIsHover(true)}
        onPointerOut={() => setIsHover(false)}
        animate={{
          scale: isActive ? 2 : isHover ? 1.1 : 1,
          rotateY: isActive ? Math.PI / 4 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
          duration: 0.5,
        }}
      >
        <SquircleGeometry radius={0.2} />
        <meshBasicMaterial color="tomato" />
      </motion.mesh>
    </motion.group>
  );
};

export function SquircleGeometry({
  width = 1,
  height = 1,
  radius = 0.2,
  depth = 0.01,
}) {
  const geometry = useRef<THREE.ExtrudeGeometry>(null);
  const shape = useMemo(() => {
    const s = new THREE.Shape();
    s.moveTo(-width / 2, -height / 2 + radius);
    s.lineTo(-width / 2, height / 2 - radius);
    s.absarc(
      -width / 2 + radius,
      height / 2 - radius,
      radius,
      1 * Math.PI,
      0.5 * Math.PI,
      true
    );
    s.lineTo(width / 2 - radius, height / 2);
    s.absarc(
      width / 2 - radius,
      height / 2 - radius,
      radius,
      0.5 * Math.PI,
      0 * Math.PI,
      true
    );
    s.lineTo(width / 2, -height / 2 + radius);
    s.absarc(
      width / 2 - radius,
      -height / 2 + radius,
      radius,
      2 * Math.PI,
      1.5 * Math.PI,
      true
    );
    s.lineTo(-width / 2 + radius, -height / 2);
    s.absarc(
      -width / 2 + radius,
      -height / 2 + radius,
      radius,
      1.5 * Math.PI,
      1 * Math.PI,
      true
    );
    return new THREE.Shape(s.getPoints(10));
  }, [width, height, radius, depth]);
  const config = useMemo(() => ({ depth, bevelEnabled: false }), [depth]);
  useLayoutEffect(() => {
    if (geometry.current) {
      geometry.current.translate(0, 0, -depth / 2);
      geometry.current.computeVertexNormals();
    }
  }, [shape]);
  return <extrudeGeometry ref={geometry} args={[shape, config]} />;
}

const MainButton: React.FC<Omit<ButtonProps, "label">> = (props) => (
  <Button {...props} label="Main" />
);
const SocialButton: React.FC<Omit<ButtonProps, "label">> = (props) => (
  <Button {...props} label="Social" />
);
const ProjectsButton: React.FC<Omit<ButtonProps, "label">> = (props) => (
  <Button {...props} label="Projects" />
);
