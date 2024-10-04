"use client";

import { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function ArrowToTickSlider() {
  const x = useMotionValue(0);
  const width = useTransform(x, [0, 200], [256, 64]);
  const textOpacity = useTransform(x, [0, 100], [1, 0]);
  const svgRotation = useTransform(x, [0, 200], [0, 90]);
  const svgLengthShort = useTransform(x, [0, 100], [1.08, 0.6]);

  return (
    <div className="z-10 h-32 justify-self-center justify-center w-[16.5rem] flex relative">
      <div className="absolute h-40 w-96 rounded-2xl bg-[url('/arrowSliderBg.png')] bg-center bg-no-repeat opacity-90 bg-cover flex self-center shadow-md"></div>
      <div className="flex items-center justify-center w-full">
        <motion.div
          className="absolute bg-white/30 backdrop-blur-md rounded-full h-16 p-1 flex items-center overflow-hidden left-0 shadow-md"
          style={{ width, x: x }}
          drag="x"
          dragConstraints={{ left: 0, right: 200 }}
          dragElastic={0.1}
          dragMomentum={false}
        >
          <motion.svg
            className="w-14 h-14 select-none pointer-events-none drop-shadow-sm"
            xmlns="http://www.w3.org/2000/motion.svg"
            viewBox="0 0 56 56"
            style={{ rotate: svgRotation }}
          >
            <defs>
              <mask id="customMask">
                <rect width="100%" height="100%" fill="white" />
                <g
                  transform="translate(-5, 8) scale(0.35) rotate(90)"
                  transform-origin="center"
                >
                  <motion.path
                    className="-rotate-45"
                    pathLength={svgLengthShort}
                    d="M5.07398 4.82721L4.59441 32.1629"
                    stroke="black"
                    stroke-width="8"
                    stroke-linecap="round"
                  />
                  <path
                    className="rotate-45 translate-x-[0.33rem] -translate-y-[0.36rem]"
                    d="M5.07398 4.82721L4.59441 32.1629"
                    stroke="black"
                    stroke-width="8"
                    stroke-linecap="round"
                  />
                </g>
              </mask>
            </defs>

            <circle
              cx="28"
              cy="28"
              r="28"
              fill="white"
              mask="url(#customMask)"
            />
          </motion.svg>

          <motion.div
            className="absolute left-1/2 -translate-x-1/2 text-white/40 font-semibold whitespace-nowrap"
            style={{ opacity: textOpacity }}
          >
            <span className="bg-gradient-to-r from-transparent from-35% via-white via-50% to-transparent to-65% bg-clip-text text-white/40 animate-shimmer bg-[length:300%_100%]">
              slide to add
            </span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
