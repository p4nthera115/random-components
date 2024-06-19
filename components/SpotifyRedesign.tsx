"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function AlbumCarousel() {
  const [active, setActive] = useState(false);
  const [color, setColor] = useState("#A4998C");
  const [activeId, setActiveId] = useState<number | null>(null);

  const albumArr = [
    {
      id: 0,
      name: "Section.80",
      year: "2011",
      cover: "/section80.jpg",
      color: "#535B4B",
      tracklist: [
        {
          name: "F*ck Your Ethnicity",
        },
        {
          name: "Hol' Up",
        },
        {
          name: "A.D.H.D",
        },
        {
          name: "No Make-Up (Her Vice) (Ft. Colin Munroe)",
        },
        {
          name: "Tammy's Song (Her Evils)",
        },
        {
          name: "Chapter Six",
        },
        {
          name: "Ronald Reagan Era (His Evils) (Ft. RZA)",
        },
        {
          name: "Poe Mans Dreams (His Vice) (Ft. GLC)",
        },
        {
          name: "The Spiteful Chant (Ft. ScHoolboy Q)",
        },
        {
          name: "Chapter Ten",
        },
        {
          name: "Keisha's Song (Her Pain) (Ft. Ash Riser)",
        },
        {
          name: "Rigamortus",
        },
        {
          name: "Kush & Corinthians (His Pain) (Ft. BJ the Chicago Kid)",
        },
        {
          name: "Blow My High (Members Only)",
        },
        {
          name: "Ab-Soul's Outro (Ft. Ab-Soul)",
        },
        {
          name: "HiiiPoWeR",
        },
      ],
    },
    {
      id: 1,
      name: "good kid, m.A.A.d city",
      year: "2012",
      cover: "/gkmc.jpg",
      color: "#4280A7",
      tracklist: [
        {
          name: "Sherane a.k.a Master Splinter's Daughter",
        },
        {
          name: "Bitch, Don't Kill My Vibe",
        },
        {
          name: "Backseat Freestyle",
        },
        {
          name: "The Art of Peer Pressure",
        },
        {
          name: "Money Trees (Ft. Jay Rock)",
        },
        {
          name: "Poetic Justice (Ft. Drake)",
        },
        {
          name: "good kid",
        },
        {
          name: "m.A.A.d city (Ft. MC Eiht)",
        },
        {
          name: "Swimming Pools (Drank)",
        },
        {
          name: "Sing About Me, I'm Dying of Thirst",
        },
        {
          name: "Real (Ft. Anna Wise)",
        },
        {
          name: "Compton (Ft. Dr. Dre)",
        },
        {
          name: "The Recipe (Ft. Dr. Dre)",
        },
        {
          name: "Black Boy Fly",
        },
        {
          name: "Now or Never (Ft. Mary J. Blige)",
        },
        {
          name: "Collect Calls (Ft. Kent Jamz)",
        },
        {
          name: "Bitch, Don't Kill My Vibe (Remix) (Ft. JAY-Z)",
        },
        {
          name: "Bitch, Don't Kill My Vibe (International Remix) (Ft. Emeli Sandé)",
        },
      ],
    },
    {
      id: 2,
      name: "To Pimp a Butterfly",
      year: "2015",
      cover: "/tpab.webp",
      color: "#565656",
      tracklist: [
        {
          name: "Wesley's Theory (Ft. George Clinton & Thundercat)",
        },
        {
          name: "For Free? (Interlude)",
        },
        {
          name: "King Kunta",
        },
        {
          name: "Institutionalized (Ft. Anna Wise, Bilal & Snoop Dogg)",
        },
        {
          name: "These Walls (Ft. Anna Wise, Bilal & Thundercat)",
        },
        {
          name: "u",
        },
        {
          name: "Alright",
        },
        {
          name: "For Sale? (Interlude)",
        },
        {
          name: "Momma",
        },
        {
          name: "Hood Politics",
        },
        {
          name: "How Much a Dollar Cost (Ft. James Fauntleroy & Ronald Isley)",
        },
        {
          name: "Complexion (A Zulu Love) (Ft. Rapsody)",
        },
        {
          name: "The Blacker the Berry",
        },
        {
          name: "You Ain't Gotta Lie (Momma Said)",
        },
        {
          name: "i (Album Version)",
        },
        {
          name: "Mortal Man",
        },
      ],
    },
    {
      id: 3,
      name: "DAMN.",
      year: "2016",
      cover: "/damn.png",
      color: "#ED0D0D",
      tracklist: [
        {
          name: "BLOOD.",
        },
        {
          name: "DNA.",
        },
        {
          name: "YAH.",
        },
        {
          name: "ELEMENT.",
        },
        {
          name: "FEEL.",
        },
        {
          name: "LOYALTY. (Ft. Rihanna)",
        },
        {
          name: "PRIDE.",
        },
        {
          name: "HUMBLE.",
        },
        {
          name: "LUST.",
        },
        {
          name: "LOVE. (Ft. Zacari",
        },
        {
          name: "XXX. (Ft. U2)",
        },
        {
          name: "FEAR.",
        },
        {
          name: "GOD.",
        },
        {
          name: "DUCKWORTH.",
        },
      ],
    },
    {
      id: 4,
      name: "Mr. Morale & the Big Steppers",
      year: "2022",
      cover: "/mmatbs.webp",
      color: "#89734C",
      tracklist: [
        {
          name: "United in Grief",
        },
        {
          name: "N95",
        },
        {
          name: "Worldwide Steppers",
        },
        {
          name: "Die Hard by Kendrick Lamar, Blxst & Amanda Reifer",
        },
        {
          name: "Father Time (Ft. Sampha)",
        },
        {
          name: "Rich (Interlude)",
        },
        {
          name: "Rich Spirit",
        },
        {
          name: "We Cry Together by Kendrick Lamar & Taylour Paige",
        },
        {
          name: "Purple Hearts by Kendrick Lamar, Summer Walker & Ghostface Killah",
        },
        {
          name: "Count Me Out",
        },
        {
          name: "Crown",
        },
        {
          name: "Silent Hill by Kendrick Lamar & Kodak Black",
        },
        {
          name: "Savior (Interlude)",
        },
        {
          name: "Savior by Kendrick Lamar, Baby Keem & Sam Dew",
        },
        {
          name: "Auntie Diaries",
        },
        {
          name: "Mr. Morale by Kendrick Lamar & Tanna Leone",
        },
        {
          name: "Mother I Sober (Ft. Beth Gibbons)",
        },
        {
          name: "Mirror",
        },
        {
          name: "The Heart Part 5",
        },
      ],
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
                backgroundColor: "rgb(0 0 0 / 0.3)",
              }
            : {
                opacity: 0,
                cursor: "default",
              }
        }
        whileHover={
          active
            ? {
                backgroundColor: "rgb(0 0 0 / 0.6)",
              }
            : {}
        }
        transition={{
          duration: 0.2,
        }}
        onClick={() => {
          setActive(false);
          setActiveId(null);
          setColor("#A4998C");
        }}
        className="h-20 w-20 rounded-full z-50 bg-black/30 hover:bg-black/60  absolute m-10 right-0 justify-center items-center text-2xl"
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
            "flex flex-row gap-10 p-8 m-12 rounded-3xl bg-[#d3ccc3]/50 items-center"
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
                  y: 67,
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
          {albumArr.map((album, i) => (
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
                      width: "120rem",
                      position: "absolute",
                      padding: "2rem",
                      // y: -453,
                      y: -503,
                      borderRadius: "1.5rem",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: "2.5rem",
                      cursor: "default",
                      backgroundColor: "rgb(255 255 255 / 0.2)",
                    }
                  : active && album.id !== activeId
                  ? {
                      y: 30,
                      height: "10rem",
                      width: "10rem",
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
              className="rounded-lg relative bg-white/20 p-4 w-72 max-w-full max-h-96 inline-flex flex-col gap-4 cursor-pointer"
            >
              <motion.div
                animate={
                  active && album.id === activeId
                    ? {
                        height: "16rem",
                        width: "16rem",
                      }
                    : active && album.id !== activeId
                    ? { height: "8rem", width: "8rem" }
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
        {albumArr.map((album, i) => (
          <motion.section
            animate={
              active && activeId === album.id
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
            className="absolute rounded-3xl h-[43.5rem] w-[103rem] bg-white/20 bottom-0 mb-6 overflow-y-auto flex flex-col gap-2 p-6 text-2xl"
          >
            {album.tracklist.map((track, i) => (
              <motion.div
                animate={
                  active && activeId === album.id
                    ? {
                        opacity: 1,
                      }
                    : {
                        opacity: 0,
                        display: "none",
                      }
                }
                transition={{
                  type: "tween",
                  duration: 0.2,
                  opacity: {
                    duration: 0,
                  },
                }}
                className="flex flex-row gap-12 p-4 items-center rounded-2xl hover:bg-white/20 transition w-full"
              >
                <span className="ml-8">{i + 1}</span>
                <div className="flex flex-col gap-1">
                  <p className="font-bold">{track.name}</p>
                  <p className="text-lg opacity-80">Kendrick Lamar</p>
                </div>
              </motion.div>
            ))}
          </motion.section>
        ))}
      </motion.div>
    </>
  );
}
