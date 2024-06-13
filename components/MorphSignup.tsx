"use client";

import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";

export default function MorphSignup() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);

  console.log(step);

  return (
    <div className="flex self-center h-[600px] w-[360px] border-2 border-white/45 rounded-xl p-4">
      <motion.div
        animate={{
          marginBottom: isOpen ? "8rem" : "0",
          height: isOpen && step < 4 ? "75%" : step === 4 ? "40%" : "9%",
          y: isOpen && step < 4 ? "14%" : step === 4 ? "0%" : 0,
        }}
        transition={{
          type: "just",
          duration: "0.2",
        }}
        className={`flex self-end bg-white rounded-2xl w-full justify-evenly items-center gap-2 text-black overflow-hidden ${
          isOpen ? "cursor-default p-2" : "cursor-pointer"
        }`}
      >
        {step === 4 && (
          <span className="absolute flex self-center justify-center items-center text-3xl pb-8 text-neutral-500">
            Thank You!
          </span>
        )}
        {step < 4 && <Form isOpen={isOpen} step={step} />}
        <BottomButtons
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          step={step}
          setStep={setStep}
        />
      </motion.div>
    </div>
  );
}

function Form({ isOpen, step }: { isOpen: boolean; step: number }) {
  const [emailPlaceholder, setEmailPlaceholder] = useState("");
  const [passwordPlaceholder, setPasswordPlaceholder] = useState("");
  const [confirmPasswordPlaceholder, setConfirmPasswordPlaceholder] =
    useState("");

  useEffect(() => {
    if (step === 1) {
      setEmailPlaceholder("email");
      setPasswordPlaceholder("password");
      setConfirmPasswordPlaceholder("confirm password");
    } else if (step === 2) {
      setEmailPlaceholder("");
      setPasswordPlaceholder("");
      setConfirmPasswordPlaceholder("username");
    } else if (step === 3) {
      setPasswordPlaceholder("email");
    }
  }, [step]);
  return (
    <>
      {isOpen && step < 4 && (
        <>
          <motion.input
            animate={{
              borderRadius: step === 1 ? "8px" : "100px",
              width: step === 1 ? "18rem" : step === 2 ? "9rem" : "7rem",
              height: step === 1 ? "3rem" : step === 2 ? "9rem" : "7rem",
              backgroundColor: step === 1 ? "#e5e5e5" : "white",
              borderWidth: step === 1 ? "1px" : step === 3 ? "3px" : "4px",
              y: step === 1 ? -80 : step === 2 ? -70 : -100,
            }}
            transition={{
              type: "just",
              duration: "0.2",
            }}
            type="text"
            placeholder={emailPlaceholder}
            className="w-72 h-12 absolute border border-neutral-300 rounded-lg focus:outline-neutral-200 p-2 bg-neutral-200 focus:bg-neutral-100"
          />
          {step >= 2 && (
            <motion.div
              initial={{ opacity: 0, y: -60 }}
              animate={{
                opacity: 1,
                y: step === 3 ? -90 : -60,
                height: step === 3 ? 60 : 80,
                width: step === 3 ? 60 : 80,
              }}
              transition={{
                type: "just",
                duration: "0.2",
              }}
              className="absolute"
            >
              <Image src={"/face.svg"} alt="face" height={80} width={80} />
            </motion.div>
          )}
          <motion.input
            animate={{
              y: step === 1 ? 20 : step === 3 ? 80 : 60,
              backgroundColor: step === 3 ? "#f5f5f5" : "#e5e5e5",
            }}
            transition={{
              type: "just",
              duration: "0.2",
            }}
            placeholder={passwordPlaceholder}
            className="w-72 h-12 absolute border border-neutral-300 rounded-lg focus:outline-neutral-200 p-2 bg-neutral-200 focus:bg-neutral-100"
          />
          <motion.input
            animate={{
              y: step === 1 ? 80 : step === 2 ? 60 : step === 3 ? 20 : 60,
              backgroundColor: step === 3 ? "#f5f5f5" : "#e5e5e5",
            }}
            transition={{
              type: "just",
              duration: "0.2",
            }}
            placeholder={confirmPasswordPlaceholder}
            className={`w-72 h-12 absolute border border-neutral-300 rounded-lg focus:outline-neutral-200 p-2 bg-neutral-200 focus:bg-neutral-100`}
          />
        </>
      )}
    </>
  );
}

function BottomButtons({
  isOpen,
  setIsOpen,
  step,
  setStep,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
}) {
  return (
    <>
      {isOpen && (
        <motion.button
          animate={{
            width: step === 4 ? "100%" : "50%",
          }}
          transition={{
            duration: 0.1,
          }}
          onClick={() => {
            step === 1 && setIsOpen(false);
            step === 1 ? setStep(0) : setStep(step - 1);
            if (step === 4) {
              setStep(0);
              setIsOpen(false);
            }
          }}
          className="flex self-end mr-auto w-1/2 bg-neutral-200 rounded-md items-center justify-center h-10 z-10 overflow-hidden relative"
        >
          {step < 4 && (
            <>
              <motion.span
                animate={{
                  x: step > 1 ? -200 : 0,
                }}
                transition={{
                  ease: "easeInOut",
                  type: "spring",
                  duration: 0.4,
                }}
                className="absolute"
              >
                Cancel
              </motion.span>
              <motion.span
                initial={{ x: 100 }}
                animate={{
                  x: step > 1 && step < 4 ? 0 : step === 4 ? -200 : 100,
                }}
                transition={{
                  ease: "easeInOut",
                  type: "spring",
                  duration: 0.4,
                }}
              >
                Back
              </motion.span>
            </>
          )}
          {step === 4 && (
            <motion.span
              initial={{ x: 100 }}
              animate={{
                x: 0,
              }}
              transition={{
                ease: "easeInOut",
                type: "spring",
                duration: 0.1,
              }}
              className="flex self-center"
            >
              Close
            </motion.span>
          )}
        </motion.button>
      )}
      {step < 4 && (
        <button
          onClick={() => {
            !isOpen && setIsOpen(true);
            step < 4 && setStep(step + 1);
          }}
          className={`flex relative rounded-md items-center justify-center h-10 transition overflow-hidden ${
            isOpen ? "self-end hover:bg-neutral-200 w-1/2" : "w-full"
          }`}
        >
          {step === 0 && <span className="absolute">Sign Up</span>}
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
          <motion.span
            animate={{
              opacity: step === 0 ? 0 : 1,
              x: step > 2 ? 0 : 200,
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
            Finish?
          </motion.span>
        </button>
      )}
    </>
  );
}
