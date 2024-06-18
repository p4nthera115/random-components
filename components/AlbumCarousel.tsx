"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function AlbumCarousel() {
  const [active, setActive] = useState(false);
  const [color, setColor] = useState("#A4998C");

  const albumObj = [
    {
      name: "Section.80",
      year: "2011",
      cover: "/section80.jpg",
      color: "#535B4B",
    },
    {
      name: "good kid, m.A.A.d city",
      year: "2012",
      cover: "/gkmc.jpg",
      color: "#4280A7",
    },
    {
      name: "To Pimp a Butterfly",
      year: "2015",
      cover: "/tpab.webp",
      color: "#565656",
    },
    {
      name: "DAMN.",
      year: "2016",
      cover: "/damn.png",
      color: "#ED0D0D",
    },
    {
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
        animate={{
          backgroundImage: `linear-gradient(${color}, rgba(255,0,0,0))`,
        }}
        className={`${color} absolute h-full w-full`}
      ></motion.div>

      <linearGradient />

      <div className="p-6 flex flex-col h-full w-full gap-6 z-20">
        <section className="h-[40%] flex flex-row gap-10 p-8 rounded-3xl bg-[#d3ccc3]/50 items-center ">
          <div className="h-full bg-black rounded-3xl aspect-square flex relative ">
            <Image
              src={"/kdotdisplay.jpeg"}
              alt="kdotdisplay"
              fill
              className="object-cover rounded-3xl"
            />
          </div>
          <h1 className="h-1/4 text-8xl font-bold flex items-center z-20 text-white/95">
            Kendrick Lamar
          </h1>
        </section>

        <section className=" rounded-3xl h-3/4 inline-flex flex-row p-10 gap-12 w-full justify-evenly items-center">
          {albumObj.map((album, i) => (
            <article
              onClick={() => {
                setActive(true);
                setColor(album.color);
              }}
              className="rounded-lg bg-white/20 p-4 w-72 max-h-96 inline-flex flex-col gap-4"
            >
              <div className="h-64 w-64 bg-black rounded relative">
                <Image src={album.cover} alt={album.name} fill />
              </div>
              <h2 className="text-2xl truncate">{album.name}</h2>
              <p className="font-bold text-white/50">{album.year}</p>
            </article>
          ))}
        </section>
      </div>
    </>
  );
}
