"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function MorphMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const inactive =
    "flex ml-auto w-12 h-12 bg-white rounded-xl flex-col justify-evenly gap-1 p-3 transition";
  const active =
    "flex w-full h-1/2 bg-white rounded-xl flex-col justify-evenly gap-1 p-3 transition";

  console.log(isOpen);

  return (
    <motion.div
      initial={{
        width: "15%",
        height: "3rem",
      }}
      animate={
        isOpen
          ? { width: "100%", height: "50%" }
          : { width: "15%", height: "9%" }
      }
      transition={{
        ease: "easeInOut",
        height: isOpen && {
          delay: 0.27,
        },
      }}
      className={inactive}
      onClick={() => setIsOpen(!isOpen)}
    >
      <motion.div
        animate={isOpen ? { width: "50%", opacity: 0 } : { width: "100%" }}
        transition={{
          ease: "easeInOut",
          width: !isOpen && {
            delay: 0.17,
            type: "spring",
          },
          opacity: isOpen && {
            delay: 0.5,
            duration: 0.2,
          },
        }}
        className="border w-full border-black/50 rounded-lg self-center"
      ></motion.div>
    </motion.div>
  );
}
