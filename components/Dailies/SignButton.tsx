"use client ";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa6";

export default function SignButton() {
  const [click, setClick] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  const handleClick = () => {
    setClick(!click);
    if (click) {
      setAnimationComplete(false);
    }
  };

  const handleAnimationComplete = () => {
    click && setTimeout(() => setAnimationComplete(true), 600);
  };

  return (
    <div className="relative p-16 rounded-3xl bg-neutral-200 flex justify-center items-center shadow-lg">
      <button
        onClick={handleClick}
        className="scale-150 relative h-7 w-16 rounded-full bg-white/60 hover:scale-[160%] transition backdrop-blur-md active:scale-[140%] mx-10 flex "
      >
        <motion.div
          animate={
            click
              ? {
                  scale: 0,
                  opacity: 0,
                  display: "none",
                }
              : {}
          }
          className="h-full w-full flex flex-row items-center justify-center gap-[0.35rem] text-sm"
        >
          <svg
            className="w-3 h-3"
            viewBox="0 0 139 92"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M120.276 14.8022L66.8699 68.328L62.4375 77L71.1076 72.5676L124.635 19.1613L120.276 14.8022ZM131.176 3.90239L126.817 8.26154L131.176 12.6226L135.535 8.26154C136.113 7.68335 136.438 6.89938 136.438 6.08196C136.438 5.26455 136.113 4.48058 135.535 3.90239C134.957 3.32458 134.173 3 133.356 3C132.538 3 131.754 3.32458 131.176 3.90239Z"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.93749 31.5C10.6042 26.5 41.5807 11.7876 44.4375 27.5C45.4375 33 38.4375 40.5001 24.9375 48.0001C6.93752 58.0001 -2.06251 71.5 5.9375 81.5C7.5375 83.5 16.4375 94 47.9375 84"
              stroke="currentColor"
              strokeWidth="6"
              strokeLinecap="round"
            />
          </svg>
          <span className="text-[0.6rem]">Sign</span>
        </motion.div>

        {/* SIGNATURE ANIMATION */}
        <motion.div
          className={`absolute inset-0 overflow-hidden ${
            animationComplete ? "scale-0 opacity-0" : ""
          } transition duration-300`}
        >
          <svg
            className="absolute self-center justify-self-center bottom-[0.63rem] left-[1.17rem] text-black"
            width="0.3rem"
            height="0.3rem"
            viewBox="0 0 33 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              animate={
                click
                  ? {
                      pathLength: 1,
                    }
                  : {
                      pathLength: 0,
                      opacity: 0,
                      stroke: "transparent",
                    }
              }
              transition={{
                delay: 0.3,
                duration: 0.2,
              }}
              d="M3 3L30 31"
              stroke="black"
              strokeWidth="6"
              strokeLinecap="round"
            />
          </svg>
          <svg
            className="absolute self-center justify-self-center bottom-[0.63rem] left-[1.17rem] text-black"
            width="0.3rem"
            height="0.3rem"
            viewBox="0 0 33 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              animate={
                click
                  ? {
                      pathLength: 1,
                    }
                  : {
                      pathLength: 0,
                      opacity: 0,
                      stroke: "transparent",
                    }
              }
              transition={{
                delay: 0.1,
                duration: 0.2,
              }}
              d="M30 3L3 31"
              stroke="black"
              strokeWidth="6"
              strokeLinecap="round"
            />
          </svg>

          <svg
            className="absolute self-center justify-self-center top-[47%] -translate-y-1/2 left-1/2 -translate-x-[38%] text-black"
            stroke="currentColor"
            fill="none"
            strokeWidth="1.3"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            height="1.3rem"
            width="1.3rem"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              animate={
                click
                  ? {
                      pathLength: 1,
                    }
                  : {
                      pathLength: 0,
                      opacity: 0,
                      stroke: "transparent",
                    }
              }
              transition={{
                delay: 0.42,
                duration: 0.5,
              }}
              d="M3 17c3.333 -3.333 5 -6 5 -8c0 -3 -1 -3 -2 -3s-2.032 1.085 -2 3c.034 2.048 1.658 4.877 2.5 6c1.5 2 2.5 2.5 3.5 1l2 -3c.333 2.667 1.333 4 3 4c.53 0 2.639 -2 3 -2c.517 0 1.517 .667 3 2"
            ></motion.path>
          </svg>

          <svg
            className="absolute self-center justify-self-center bottom-1 left-1/2 -translate-x-1/2 text-black"
            width="30"
            height="6"
            viewBox="0 0 76 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              animate={
                click
                  ? {
                      pathLength: 1,
                    }
                  : {
                      pathLength: 0,
                      opacity: 0,
                      stroke: "transparent",
                    }
              }
              transition={{
                delay: 0.92,
                duration: 0.2,
              }}
              onAnimationComplete={handleAnimationComplete}
              d="M3.5 3H72.5"
              stroke="black"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>

        <motion.div
          className={`flex absolute self-center justify-self-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
            animationComplete
              ? "opacity-100 -translate-y-1/2"
              : "opacity-0 -translate-y-[40%]"
          } transition duration-300`}
        >
          <FaCheck />
        </motion.div>
      </button>
    </div>
  );
}
