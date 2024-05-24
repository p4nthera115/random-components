"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function MorphSignUp() {
  const [isOpen, setIsOpen] = useState(false);

  console.log(isOpen);

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
          duration: "0.05",
          height: {},
        }}
        className={`flex self-end bg-white rounded-2xl w-full justify-evenly items-center gap-2 text-black ${
          isOpen ? "cursor-default p-2" : "cursor-pointer"
        }`}
      >
        {isOpen && (
          <button
            onClick={() => setIsOpen(false)}
            className="flex self-end mr-auto w-1/2 bg-neutral-200 rounded-md items-center justify-center h-10 z-10"
          >
            Cancel
          </button>
        )}
        <button
          onClick={() => !isOpen && setIsOpen(true)}
          className={`flex w-1/2  rounded-md items-center justify-center h-10 transition ${
            isOpen ? "self-end hover:bg-neutral-200" : ""
          }`}
        >
          Sign Up
        </button>
      </motion.div>
    </div>
  );
}
