"use client";

import DotGrid from "../DotGrid";
import { CiGlobe } from "react-icons/ci";
import { MdVerified } from "react-icons/md";

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
      <div className="z-20 relative flex h-[90%] w-96 rounded-3xl bg-white/80 justify-center items-center p-6">
        <div className="z-20 flex relative flex-col h-full w-full rounded-2xl bg-[#e9e6df] gap-1">
          {/* <div className="flex flex-row gap-3">
            <img className="flex rounded-md h-12 w-12" src="damn.png" alt="" />
            <div className="flex flex-col ">
              <p>Elsa Nilsson</p>
            </div>
          </div> */}
          <div className="flex flex-row items-center mb-4 mx-5 mt-5">
            <img
              src="/"
              alt="Profile"
              className="w-14 h-14 rounded-md mr-4 border border-black"
            />
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
            <CiGlobe className="w-4 h-4 mr-1 bg-black/90 rounded-full text-[#e9e6df] p-[0.1rem]" />
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
          <ul>
            {collections.map((collection, index) => (
              <li
                key={index}
                className="mx-2 flex items-center justify-between py-2 px-3 cursor-pointer hover:bg-white/70 rounded-lg"
              >
                {collection}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
