"use client";

import DotGrid from "../DotGrid";
import { FiGlobe } from "react-icons/fi";
import { MdVerified } from "react-icons/md";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HoverMenu() {
  const collections = [
    "Rabbit hole",
    "Outdoors",
    "Architecture",
    "Readings",
    "Mood",
    "Films",
  ];
  return (
    <div className="h-full w-full flex bg-[#E9E6DF] justify-center items-center text-black/70 font-semibold text-sm">
      <DotGrid />
      <div className="z-20 relative flex w-96 rounded-3xl bg-white/80 justify-center items-center p-6">
        <div className="z-20 flex relative flex-col h-full w-full rounded-2xl bg-[#e9e6df] gap-1">
          <div className="flex flex-row items-center mb-4 mx-5 mt-5">
            {/* <img
              src="/"
              alt="Profile"
              className="w-14 h-14 rounded-md mr-4 border border-black"
            /> */}
            <div className="w-14 h-14 rounded-lg mr-4 bg-black/70 border-black"></div>
            <div className="flex flex-col gap-1">
              <h2 className="font-bold flex items-center text-base">
                Elsa Nilsson
                <MdVerified className="ml-1 text-black/90" />
              </h2>
              <p className="text-black/50 bg-white rounded-full px-2 self-start">
                @elsa.n
              </p>
            </div>
          </div>

          <p className="flex mb-2 opacity-50 mx-5">
            Product designer at Spotify and design educator based in Stockholm,
            Sweden
          </p>

          <a href="#" className="text-gray-600 flex items-center mb-4 mx-5">
            <FiGlobe className="w-4 h-4 mr-1 bg-black/90 rounded-full text-[#e9e6df] p-[0.1rem]" />
            elsanilsson.com
          </a>

          <div className="flex mb-4 relative mx-5">
            <button className="bg-black/70 text-white px-4 py-2 rounded-lg mr-2 w-full">
              Follow
            </button>
            <button className="text-black/50 border border-black/20 px-4 py-2 rounded-lg w-full">
              Message
            </button>
          </div>

          <h3 className="font-semibold opacity-50 mt-2 text-[0.7rem] mx-5">
            Collections
          </h3>
          <div className="relative mb-2">
            <HoverCard collections={collections} />
          </div>
        </div>
      </div>
    </div>
  );
}

const HoverCard = ({ collections }: { collections: string[] }) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>();
  const [cardPosition, setCardPosition] = useState({ x: 0, y: 0 });
  const [direction, setDirection] = useState<"up" | "down">("down");
  const listRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const lastIndex = useRef<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (listRef.current && cardRef.current) {
        const listRect = listRef.current.getBoundingClientRect();
        const cardRect = cardRef.current.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        let x = e.clientX + window.scrollX + 20; // 20px offset from cursor
        let y = e.clientY + window.scrollY;

        if (e.clientX + cardRect.width + 20 > viewportWidth) {
          x = e.clientX + window.scrollX - cardRect.width - 20;
        }

        if (e.clientY + cardRect.height > viewportHeight) {
          y = e.clientY + window.scrollY - cardRect.height - 10; // 10px padding from bottom
        }

        setCardPosition({ x, y });
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [hoveredItem]);

  const cardContent: any = {
    "Rabbit hole": {
      images: ["damn.png", "damn.png", "damn.png"],
    },
    Outdoors: {
      images: ["damn.png", "damn.png", "damn.png"],
    },
    Architecture: {
      images: ["damn.png", "damn.png", "damn.png"],
    },
    Readings: {
      images: ["damn.png", "damn.png", "damn.png"],
    },
    Mood: { images: ["damn.png", "damn.png", "damn.png"] },
    Films: { images: ["damn.png", "damn.png", "damn.png"] },
  };

  const handleMouseEnter = (collection: string, index: number) => {
    if (lastIndex.current !== null) {
      setDirection(index > lastIndex.current ? "down" : "up");
    }
    lastIndex.current = index;
    setHoveredItem(collection);
  };

  const variants = {
    hidden: (direction: "up" | "down") => ({
      opacity: 0,
      y: direction === "up" ? 10 : -10,
    }),
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.1 },
    },
    exit: (direction: "up" | "down") => ({
      opacity: 0,
      y: direction === "up" ? -10 : 10,
      transition: { duration: 0.1 },
    }),
  };

  return (
    <div className="relative" ref={listRef}>
      <ul>
        {collections.map((collection: string, index: number) => (
          <li
            key={index}
            className="mx-2 flex items-center justify-between py-2 px-3 cursor-pointer hover:bg-[#F3F3EB] rounded-lg"
            onMouseEnter={() => handleMouseEnter(collection, index)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            {collection}
          </li>
        ))}
      </ul>
      <AnimatePresence>
        {hoveredItem && (
          <motion.div
            ref={cardRef}
            className="fixed bg-white/80 backdrop-blur-md rounded-2xl shadow-lg py-3 px-4"
            style={{
              left: cardPosition.x,
              top: cardPosition.y,
              pointerEvents: "none",
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <AnimatePresence mode="wait">
              <motion.h3
                key={hoveredItem}
                custom={direction}
                variants={variants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="font-semibold text-black/70"
              >
                {hoveredItem}
              </motion.h3>
            </AnimatePresence>
            <p className="text-[0.7rem] opacity-50 mb-2">
              {cardContent[hoveredItem].images.length} items
            </p>
            <div className="flex flex-row gap-2 mb-4">
              {cardContent[hoveredItem].images.map(
                (src: string, index: number) => (
                  // <img
                  //   key={index}
                  //   src={src}
                  //   alt={`${hoveredItem} ${index + 1}`}
                  //   className="h-20 rounded-md"
                  // />
                  <div className="h-20 w-20 bg-[#e9e6df] rounded-lg"></div>
                )
              )}
            </div>
            <div className="flex justify-between w-full items-center">
              <div className="flex flex-row">
                <div className="flex h-5 w-5 rounded-full bg-[#e9e6df] border border-white"></div>
                <div className="flex -translate-x-2 h-5 w-5 rounded-full bg-[#e9e6df] border border-white "></div>
              </div>
              <p className="flex text-[0.7rem] opacity-50 ">
                Last updated:
                <span className="bg-[#e9e6df] w-14 rounded-xs h-3 translate-y-1 ml-2"></span>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const AnimatedTitle = ({ title }: { title: string }) => (
  <motion.h3
    key={title}
    className="font-semibold text-black/70"
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 20 }}
    transition={{ duration: 0.2 }}
  >
    {title}
  </motion.h3>
);
