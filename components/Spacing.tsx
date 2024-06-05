"use client";

import { useState, useEffect, SetStateAction, useRef } from "react";
import { motion, animate, useIsomorphicLayoutEffect } from "framer-motion";

export default function Spacing() {
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    if (window) {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }
  }, [width, window.innerWidth, window.innerHeight]);

  return (
    <>
      <div className="grid grid-cols-8 grid-rows-8 w-full h-full absolute">
        {Array.from({ length: 64 }).map((_, index) => (
          <div key={index} className="border border-white/20" />
        ))}
      </div>
      <div className="flex absolute w-1/2 self-center left-0 flex-col top-[37.5%] gap-2">
        <span className="flex justify-center text-sm text-white/75 -translate-y-8">
          {width && <AnimatedCounter from={0} to={width / 2} />}px
        </span>
        <motion.div
          initial={{
            width: "0%",
          }}
          animate={{
            width: "100%",
          }}
          transition={{
            delay: 1,
            duration: 1,
            ease: "circOut",
          }}
          className="border border-dashed flex absolute"
        />
      </div>
      <div className="flex absolute h-[37.5%] items-end bottom-0 flex-row gap-2">
        <motion.div
          initial={{
            height: "0%",
          }}
          animate={{
            height: "100%",
          }}
          transition={{
            delay: 1,
            duration: 1,
            ease: "circOut",
          }}
          className="absolute h-full border border-dashed flex"
        />
        <span className="flex absolute p-4 self-center text-sm text-white/75">
          {height && <AnimatedCounter from={0} to={height / 2} />}px
        </span>
      </div>
      <div className="flex justify-center w-1/2 h-1/4 items-center self-center z-10 bg-gradient-radial from-black to-transparent">
        <motion.h1
          whileHover={{
            letterSpacing: "0.1em",
          }}
          className="font-bold text-5xl cursor-default "
        >
          Spacing
        </motion.h1>
      </div>
    </>
  );
}

function AnimatedCounter({ from, to }: { from: number; to: number }) {
  const ref = useRef<HTMLSpanElement>(null);

  useIsomorphicLayoutEffect(() => {
    const element = ref.current;

    if (!element) return;

    element.textContent = from.toString();

    const controls = animate(from, to, {
      delay: 1,
      duration: 1.5,
      ease: "circOut",
      onUpdate(value) {
        element.textContent = Math.round(value).toString();
      },
    });
  }, [ref]);

  return <span ref={ref}></span>;
}
