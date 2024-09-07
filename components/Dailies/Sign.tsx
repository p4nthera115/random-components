"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Sign() {
  const [click, setClick] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  const handleClick = () => {
    setClick(true);
  };

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
    setTimeout(() => setClick(false), 550);
  };

  console.log(animationComplete);

  return (
    <div className="bg-gradient-to-b from-blue-400 to-sky-200 h-full w-full flex items-center justify-center">
      <motion.div className="flex relative flex-col bg-white/50 border border-white/30 rounded-3xl h-[19rem] w-72 text-neutral-950/70 text-sm font-semibold">
        <motion.div
          animate={
            animationComplete
              ? {
                  y: 0,
                  opacity: 1,
                }
              : {
                  y: 10,
                  opacity: 0,
                }
          }
          transition={{
            delay: animationComplete ? 0.6 : 0,
            duration: 0.4,
            ease: "easeOut",
          }}
          className="rounded-3xl absolute h-full w-full flex flex-col gap-4 items-center justify-center"
        >
          <div className="flex relative">
            <img
              src="file.png"
              alt="file-icon"
              className="h-[3.25rem] w-10 scale-150 opacity-75 rotate-[8deg]"
            />
            <img
              src="check.png"
              alt="check-mark-icon"
              className="absolute h-4 right-0 bottom-0"
            />
          </div>
          <p className="flex text-center text-base">
            Agreement ND327 is <br />
            successfully signed
          </p>
          <div className="z-50 flex flex-row justify-center items-center gap-4 text-[0.6rem]">
            <button
              onClick={() => {
                setAnimationComplete(false);
                setClick(false);
              }}
              className="text-neutral-950/40"
            >
              Undo
            </button>
            <button
              onClick={() => {
                setAnimationComplete(false);
                setClick(false);
              }}
              className="bg-white/60 rounded-full px-4 py-1"
            >
              Back to Docs
            </button>
          </div>
        </motion.div>
        <motion.div
          animate={
            animationComplete
              ? {
                  filter: "blur(40px)",
                  opacity: 0,
                }
              : {
                  filter: "blur(0)",
                  opacity: 1,
                }
          }
          transition={{
            filter: {
              delay: animationComplete ? 1.0 : 0,
              duration: 0.5,
            },
            delay: animationComplete ? 0.5 : 0,
            duration: 0.2,
          }}
          className="p-6 h-full flex flex-col"
        >
          <img
            src="file.png"
            alt="file-icon"
            className="flex h-[3.25rem] w-10 opacity-75 rotate-[8deg]"
          />

          <div className="flex w-full pl-2 pr-10">
            <p className="inline">
              Redesign discovery phase for
              <span className="inline-flex mx-2 h-4 w-4 -translate-y-[0.15rem] bg-white/50 items-center justify-center rounded-sm">
                <span className="flex w-[0.6rem] h-[0.35rem] rounded-[0.05rem] bg-gradient-to-b from-orange-400 from-70% to-orange-200"></span>
              </span>
              Brick inc.
              <span className="text-neutral-950/40"> Agreement ND327</span>
              <svg
                className="rotate-180 inline -translate-y-[0.1rem] opacity-70 mx-1"
                height={13}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 540 540"
              >
                !Font Awesome Free 6.6.0 by @fontawesome -
                https://fontawesome.com License -
                https://fontawesome.com/license/free Copyright 2024 Fonticons,
                Inc.
                <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM151.2 217.4c-4.6 4.2-7.2 10.1-7.2 16.4c0 12.3 10 22.3 22.3 22.3l41.7 0 0 96c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-96 41.7 0c12.3 0 22.3-10 22.3-22.3c0-6.2-2.6-12.1-7.2-16.4l-91-84c-3.8-3.5-8.7-5.4-13.9-5.4s-10.1 1.9-13.9 5.4l-91 84z" />
              </svg>
            </p>
          </div>

          <div className="pl-2">
            <p className="flex text-neutral-950/40 text-[0.6rem] mt-6">
              Contact
            </p>
            <p>Phil Norman</p>
          </div>

          <div className="mt-auto flex flex-row gap-2 justify-between">
            <div className="pl-2">
              <p className="text-neutral-950/40 text-[0.6rem] mt-6">
                Project APR
              </p>
              <p>$ 12 000.00</p>
            </div>

            <p
              className={`flex mt-auto ml-auto mb-1 text-[0.42rem] text-neutral-950/40 ${
                click ? "opacity-100" : "opacity-0"
              } transition`}
            >
              Signing...
            </p>

            <button
              onClick={handleClick}
              disabled={animationComplete && true}
              className="mt-auto relative h-7 w-16 rounded-full bg-white/60 hover:scale-105 transition"
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

              <Signature
                click={click}
                animationComplete={handleAnimationComplete}
              />
            </button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

const Signature = ({
  click,
  animationComplete,
}: {
  click: boolean;
  animationComplete: () => void;
}) => {
  return (
    <>
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
          onAnimationComplete={animationComplete}
          d="M3.5 3H72.5"
          stroke="black"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </>
  );
};
