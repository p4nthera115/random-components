"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function MorphMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [blur, setBlur] = useState("");

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setBlur("blur"), 300);
    } else {
      setBlur("");
    }
  }, [isOpen]);

  const arr = [1, 2, 3];

  return (
    <motion.div
      initial={{
        width: "15%",
        height: "9%",
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
      className="flex ml-auto w-12 h-12 bg-white rounded-xl flex-col justify-evenly gap-1 p-3 transition relative"
      onClick={() => setIsOpen(!isOpen)}
    >
      <motion.div className="text-black absolute flex justify-center self-center cursor-default flex-col gap-12">
        {arr.map((item, i) => (
          <motion.h2
            animate={{ opacity: isOpen ? 1 : 0 }}
            transition={{ opacity: { delay: isOpen ? 0.5 + i * 0.1 : 0 } }}
          >
            Hello
          </motion.h2>
        ))}
      </motion.div>
      {arr.map((item, i) => (
        <>
          <motion.div
            animate={
              isOpen
                ? {
                    width: "50%",
                    opacity: 0,
                    display: "none",
                    alignItems: "center",
                  }
                : {
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                  }
            }
            transition={{
              ease: "easeInOut",
              width: !isOpen && {
                delay: 0.17 + i * 0.1,
                type: "spring",
              },
              opacity: isOpen && {
                delay: 0.5 + i * 0.15,
                duration: 0.2,
              },
              display: isOpen && { delay: 0.6 },
            }}
            className={`w-full h-8 bg-white rounded-lg self-center items-center flex justify-center  ${blur} transition`}
          >
            <div className="w-full flex border rounded-lg border-black"></div>
          </motion.div>
        </>
      ))}
    </motion.div>
  );
}
