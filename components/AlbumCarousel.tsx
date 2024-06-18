"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function AlbumCarousel() {
  const [active, setActive] = useState(false);
  const [color, setColor] = useState("#A4998C");
  const [activeId, setActiveId] = useState<number | null>(null);

  const albumObj = [
    {
      id: 0,
      name: "Section.80",
      year: "2011",
      cover: "/section80.jpg",
      color: "#535B4B",
    },
    {
      id: 1,
      name: "good kid, m.A.A.d city",
      year: "2012",
      cover: "/gkmc.jpg",
      color: "#4280A7",
    },
    {
      id: 2,
      name: "To Pimp a Butterfly",
      year: "2015",
      cover: "/tpab.webp",
      color: "#565656",
    },
    {
      id: 3,
      name: "DAMN.",
      year: "2016",
      cover: "/damn.png",
      color: "#ED0D0D",
    },
    {
      id: 4,
      name: "Mr. Morale & the Big Steppers",
      year: "2022",
      cover: "/mmatbs.webp",
      color: "#89734C",
    },
  ];

  return (
    <>
      <motion.div
        initial={{
          backgroundImage: `linear-gradient(${color}, rgba(255,0,0,0))`,
        }}
        animate={
          active
            ? {
                backgroundImage: `linear-gradient(${color}, rgba(255,0,0,0))`,
              }
            : {
                backgroundImage: `linear-gradient(${color}, rgba(255,0,0,0))`,
              }
        }
        className={`${color} absolute h-full w-full`}
      />
      <motion.button
        animate={
          active
            ? {
                opacity: 1,
              }
            : {
                opacity: 0,
                cursor: "default",
              }
        }
        onClick={() => {
          setActive(false);
          setActiveId(null);
          setColor("#A4998C");
        }}
        className="h-20 w-20 rounded-full bg-black/30 hover:bg-black/60 transition absolute m-10 right-0 z-40 justify-center items-center text-2xl"
      >
        ✖
      </motion.button>

      <motion.div
        animate={
          active
            ? {
                gap: "0.5rem",
              }
            : {
                gap: "1.5rem",
              }
        }
        className="p-6 flex flex-col h-full w-full gap-6 z-20"
      >
        <motion.section
          animate={
            active
              ? {
                  backgroundColor: "rgb(211 204 195 / 0)",
                  height: "6rem",
                  opacity: 0,
                }
              : {
                  backgroundColor: "rgb(211 204 195 / 0.5)",
                  height: "22rem",
                }
          }
          transition={{
            duration: 0.1,
          }}
          className={
            "flex flex-row gap-10 p-8 rounded-3xl bg-[#d3ccc3]/50 items-center"
          }
        >
          <motion.div
            animate={
              active
                ? {
                    height: "10%",
                    zIndex: 100,
                    opacity: 0,
                  }
                : {
                    height: "100%",
                    opacity: 1,
                  }
            }
            transition={{
              type: "tween",
              duration: 0.2,
            }}
            className="h-full bg-black rounded-3xl aspect-square flex relative "
          >
            <Image
              src={"/kdotdisplay.jpeg"}
              alt="kdotdisplay"
              fill
              className="object-cover rounded-3xl"
            />
          </motion.div>
          <motion.h1
            animate={
              active
                ? {
                    fontSize: "1.5rem",
                    lineHeight: 0.5,
                    fontWeight: 400,
                  }
                : {
                    x: 0,
                    y: 0,
                    fontSize: "6rem",
                    lineHeight: 1,
                    fontWeight: 700,
                  }
            }
            transition={{
              type: "tween",
              duration: 0.2,
            }}
            className="h-1/4 text-8xl font-bold  flex items-center z-20 text-white/95"
          >
            Kendrick Lamar
          </motion.h1>
        </motion.section>

        <motion.section
          animate={
            active
              ? {
                  y: 162,
                  flexDirection: "column",
                  gap: "1rem",
                }
              : {
                  y: 0,
                  flexDirection: "row",
                  gap: "3rem",
                }
          }
          transition={{
            type: "tween",
            duration: 0.2,
          }}
          className="rounded-3xl h-3/4 inline-flex flex-row p-10 gap-12 w-full justify-evenly items-center"
        >
          {albumObj.map((album, i) => (
            <motion.article
              initial={{
                height: "24rem",
                width: "18rem",
                flexDirection: "column",
              }}
              animate={
                active && album.id === activeId
                  ? {
                      height: "18.7rem",
                      width: "113rem",
                      position: "absolute",
                      padding: "2rem",
                      margin: "1.5rem",
                      y: -453,
                      borderRadius: "1.5rem",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: "2.5rem",
                      cursor: "default",
                      backgroundColor: "rgb(255 255 255 / 0.2)",
                    }
                  : active && album.id !== activeId
                  ? {
                      height: "8rem",
                      width: "8rem",
                      x: 830,
                    }
                  : {
                      maxHeight: "24rem",
                      width: "18rem",
                    }
              }
              whileHover={
                album.id !== activeId
                  ? {
                      backgroundColor: "rgb(255 255 255 / 0.3)",
                    }
                  : {}
              }
              transition={{
                type: "tween",
                duration: 0.2,
              }}
              onClick={() => {
                setActive(true);
                setColor(album.color);
                setActiveId(album.id);
              }}
              className="rounded-lg relative bg-white/20 p-4 w-72 max-h-96 inline-flex flex-col gap-4 cursor-pointer"
            >
              <motion.div
                animate={
                  active && album.id === activeId
                    ? {
                        height: "16rem",
                        width: "16rem",
                      }
                    : active && album.id !== activeId
                    ? { height: "6.1rem", width: "6.1rem" }
                    : {
                        height: "16rem",
                        width: "16rem",
                      }
                }
                layout="size"
                transition={{
                  type: "tween",
                  duration: 0.2,
                }}
                className="h-64 w-64 bg-black rounded relative overflow-hidden"
              >
                <Image src={album.cover} alt={album.name} fill />
              </motion.div>
              <motion.h2
                animate={
                  active && album.id === activeId
                    ? {
                        fontSize: "6rem",
                        lineHeight: 1.5,
                        fontWeight: 700,
                      }
                    : active && album.id !== activeId
                    ? { display: "none" }
                    : {
                        fontSize: "1.5rem",
                      }
                }
                transition={{
                  duration: 0,
                }}
                className="text-2xl truncate"
              >
                {album.name}
              </motion.h2>
              <motion.p
                animate={
                  active && album.id !== activeId
                    ? { display: "none" }
                    : {
                        display: "block",
                      }
                }
                transition={{
                  duration: 0,
                }}
                className="font-bold text-white/50"
              >
                {album.year}
              </motion.p>
            </motion.article>
          ))}
        </motion.section>
        <motion.section
          animate={
            active
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {
                  opacity: 0,
                  y: 100,
                  display: "none",
                }
          }
          transition={{
            type: "tween",
            duration: 0.2,
          }}
          className="absolute rounded-3xl h-[35.7rem] w-[103rem] bg-white/20 bottom-0 mb-6 overflow-y-auto"
        ></motion.section>
      </motion.div>
    </>
  );
}
