"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

export default function MorphSignUp() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);

  console.log(step);

  return (
    <div className="flex self-center h-[600px] w-[360px] border-2 border-white/45 rounded-xl p-4">
      <motion.div
        animate={{
          marginBottom: isOpen ? "8rem" : "0",
          height: isOpen ? "75%" : "9%",
          y: isOpen ? "14%" : 0,
        }}
        transition={{
          type: "just",
          duration: "0.2",
        }}
        className={`flex self-end bg-white rounded-2xl w-full justify-evenly items-center gap-2 text-black ${
          isOpen ? "cursor-default p-2" : "cursor-pointer"
        }`}
      >
        {isOpen && (
          <button
            onClick={() => {
              step === 1 && setIsOpen(false);
              step === 1 ? setStep(0) : setStep(step - 1);
            }}
            className="flex self-end mr-auto w-1/2 bg-neutral-200 rounded-md items-center justify-center h-10 z-10 overflow-hidden"
          >
            <motion.span
              animate={{
                x: step > 1 ? -150 : 0,
              }}
              transition={{
                ease: "easeInOut",
                type: "spring",
                duration: 0.4,
              }}
            >
              Cancel
            </motion.span>
          </button>
        )}
        <button
          onClick={() => {
            !isOpen && setIsOpen(true);
            setStep(step + 1);
          }}
          className={`flex  rounded-md items-center justify-center h-10 transition overflow-hidden ${
            isOpen ? "self-end hover:bg-neutral-200 w-1/2" : "w-full"
          }`}
        >
          {step === 0 && <span className="absolute ">Sign Up</span>}
          <motion.span
            animate={{
              opacity: step === 0 ? 0 : 1,
              x: step === 1 || step === 2 ? 0 : step > 2 ? -100 : 200,
            }}
            transition={{
              ease: "easeInOut",
              type: "spring",
              duration: 0.4,
              opacity: {
                duration: 0.001,
              },
            }}
            className="absolute"
          >
            <FaArrowRight className="h-5 w-5" />
          </motion.span>
        </button>
      </motion.div>
    </div>
  );
}
