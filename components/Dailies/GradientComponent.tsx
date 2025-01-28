"use client";
import { useState } from "react";
import { Instrument_Serif } from "next/font/google";
import { IoMdArrowDropdown } from "react-icons/io";
import { motion } from "framer-motion";

const instrument = Instrument_Serif({ weight: "400", subsets: ["latin"] });

export default function GradientComponent() {
  const [step, setStep] = useState(2);

  const even = step % 2 === 0 ? true : false;

  return (
    <div className="p-4  relative bg-white rounded-3xl shadow-lg flex flex-col gap-4 select-none">
      <div
        className={`${instrument.className} z-10 h-96 w-56 bg-neutral-100 rounded-2xl relative overflow-hidden border border-black/5`}
      >
        <div
          className={`absolute rotate-[24deg] translate-y-24 scale-150 h-96 w-96 bg-linear-to-br 
           ${
             even
               ? "from-yellow-100/50 from-15% via-orange-200/80 opacity-100"
               : "from-yellow-100/50 from-15% via-orange-200/80 opacity-0 -translate-y-32 -rotate-90"
           }
            to-40% to-neutral-100 blur-md pointer-events-none transition-all duration-700`}
        ></div>
        <div
          className={`absolute rotate-[24deg] translate-y-24 scale-150 h-96 w-96 bg-linear-to-br 
           ${
             !even
               ? "from-pink-200 from-15% via-indigo-300/90 opacity-100 "
               : "from-pink-200 from-15% via-indigo-300/90 opacity-0 -translate-x-96 -translate-y-1 -rotate-12"
           }
            to-40% to-neutral-100 blur-md pointer-events-none transition-all duration-700`}
        ></div>
        <svg
          className={`absolute opacity-90 ${
            even ? "mix-blend-color-burn" : "mix-blend-soft-light"
          } h-96 pointer-events-none transition-all duration-700 delay-300`}
          viewBox="0 0 300 300"
          xmlns="http://www.w3.org/2000/svg"
        >
          <filter id="noiseFilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="3"
              stitchTiles="stitch"
            />
          </filter>

          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>

        <First even={even} />
        <Second even={even} />
      </div>

      <button
        onClick={() => setStep(step + 1)}
        className="bg-black/80 rounded-full items-center h-10 text-white font-normal"
      >
        Continue
      </button>
    </div>
  );
}

function First({ even }: { even: boolean }) {
  return (
    <>
      <div>
        <div className="absolute z-30 h-full w-full flex flex-col select-none">
          <div
            className={`p-4 ${
              even ? "opacity-100" : "opacity-0 blur-xs -translate-y-4"
            } transition-all duration-300`}
          >
            <h2 className="text-[1.7rem] leading-8 mb-2">
              What is your annual income?
            </h2>
            <p className="text-[0.65rem] leading-3 font-sans text-gray-600">
              This helps us customize your <br /> store setup experience.
            </p>
          </div>
        </div>

        <div
          className={`flex justify-center items-center h-full w-full absolute ${
            even ? "opacity-100" : "opacity-0 blur-xs -translate-y-4"
          } transition-all duration-300`}
        >
          <p className="text-4xl text-black">$240,000</p>
        </div>
      </div>

      <div
        className={`p-4 absolute bottom-0 w-full ${
          even ? "opacity-100" : "opacity-0 blur-xs -translate-y-4"
        } transition-all duration-300`}
      >
        {/* Indicator */}
        <div className="flex flex-col z-50 absolute bottom-0 left-1/2 -translate-x-1/2 mb-8 text-black">
          <IoMdArrowDropdown className="flex absolute -translate-x-[0.4rem] -translate-y-3" />
          <div className={`flex w-[1px] h-6 bg-black`}></div>
        </div>

        <div className="pointer-events-none mb-4 z-50 h-10 w-10 absolute flex bottom-0 right-0 bg-linear-to-l from-neutral-100 to-transparent"></div>
        <div className="pointer-events-none mb-4 z-50 h-10 w-10 absolute flex bottom-0 left-0 bg-linear-to-r from-neutral-100 to-transparent"></div>

        {/* Slider */}
        <div className="z-40 absolute bottom-0 w-[50rem] h-1/2 flex justify-center items-end p-4 -left-1/2">
          <div className="absolute left-1/2 bottom-16 w-0.5 h-8 bg-black z-50"></div>
          <div
            className="absolute w-full h-16 flex items-end hover:cursor-grab active:cursor-grabbing select-none"
            style={{ touchAction: "none" }}
            onMouseDown={(e) => {
              const slider = e.currentTarget;
              const startX = e.clientX - slider.offsetLeft;
              const currentTransform = new DOMMatrix(
                window.getComputedStyle(slider).transform
              );
              const currentTranslateX = currentTransform.m41;
              const minX = -slider.offsetWidth / 2;
              const maxX = slider.offsetWidth / 7.5;

              const handleMouseMove = (e: MouseEvent) => {
                let x = e.clientX - startX + currentTranslateX;
                x = Math.max(minX, Math.min(maxX, x));
                slider.style.transform = `translateX(${x}px)`;

                const totalRange = maxX - minX;
                const percentage = (x - minX) / totalRange;
                const income =
                  Math.round(((1 - percentage) * 560000) / 1000) * 1000;

                const formattedIncome = new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                  maximumFractionDigits: 0,
                }).format(income);

                const incomeDisplay = document.getElementById("incomeDisplay");
                if (incomeDisplay) {
                  incomeDisplay.textContent = formattedIncome;
                }
              };

              const handleMouseUp = () => {
                document.removeEventListener("mousemove", handleMouseMove);
                document.removeEventListener("mouseup", handleMouseUp);
              };

              document.addEventListener("mousemove", handleMouseMove);
              document.addEventListener("mouseup", handleMouseUp);
            }}
          >
            {[...Array(112)].map((_, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div
                  className={`w-[0.5px] h-4 mb-4 ${
                    index % 10 === 0 ? "bg-black/80" : "bg-black/10"
                  }`}
                ></div>
                {index % 10 === 0 && index !== 0 && (
                  <div className="absolute mt-4 font-sans text-[0.4rem] text-black/50">
                    $ {index * 5},000
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function Second({ even }: { even: boolean }) {
  const arr = [
    {
      height: "0.6rem",
      color: "bg-linear-to-t from-purple-200 to-violet-100",
    },
    { height: "1rem", color: "bg-linear-to-t from-purple-200 to-violet-100" },
    {
      height: "1.8rem",
      color: "bg-linear-to-t from-purple-200 to-violet-100",
    },
    {
      height: "2.8rem",
      color: "bg-linear-to-t from-purple-200 to-violet-100",
    },
    {
      height: "3.7rem",
      color: "bg-linear-to-t from-purple-200 to-violet-100",
    },
    {
      height: "4.7rem",
      color: "bg-linear-to-t from-purple-200 to-violet-100",
    },
    { height: "6rem", color: "bg-linear-to-t from-purple-200 to-violet-100" },
    {
      height: "8.5rem",
      color:
        "bg-linear-to-t from-indigo-400/90  via-purple-400 to-95% to-purple-300",
    },
  ];

  return (
    <div>
      <div
        className={`p-4 absolute ${
          !even ? "opacity-100" : "opacity-0 blur-xs -translate-y-4"
        } transition-all duration-300 select-none`}
      >
        <h2 className="text-[1.7rem] leading-8 mb-2">
          80+ clients made better results.
        </h2>
        <p className="text-[0.65rem] leading-3 font-sans text-gray-600">
          Make up to <span className="font-bold">$38,000 total sales</span>{" "}
          <br /> in 81 orders.
        </p>
      </div>
      <div
        className={` absolute w-full h-full ${
          !even ? "opacity-100" : "opacity-0 blur-xs -translate-y-4"
        } transition-all duration-300 `}
      >
        <div className="absolute z-50 bottom-5 flex flex-col left-2 gap-[0.35rem] font-normal font-sans text-[0.5rem] text-black/30 text-right">
          <p>10k</p>
          <p>8k</p>
          <p>6k</p>
          <p>4k</p>
          <p>2k</p>
          <p>0</p>
        </div>
      </div>

      <div className="absolute bottom-0 p-5 w-full font-normal font-sans text-[0.5rem] text-black/30">
        <div
          className={`absolute z-50  bottom-1 flex flex-row gap-[2.1rem] right-5
              ${
                !even ? "opacity-100" : "opacity-0 blur-xs -translate-y-4"
              } transition-all duration-300
            `}
        >
          <p>2W</p>
          <p>4W</p>
          <p>6W</p>
          <p>8W</p>
        </div>
      </div>
      <div className="absolute bottom-6 z-50 flex flex-row gap-2 justify-end items-end right-5">
        {arr.map((bar, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            animate={!even ? { height: bar.height } : { height: 0, opacity: 0 }}
            transition={{
              delay: !even ? i * 0.08 : 0,
            }}
            style={{ height: bar.height }}
            className={`w-[0.9rem] rounded-[0.25rem] bottom-0 ${bar.color}`}
          ></motion.div>
        ))}
      </div>

      <div
        className={`absolute w-full h-full select-none flex flex-row 
              ${
                !even ? "opacity-100" : "opacity-0 blur-xs -translate-y-4"
              } transition-all duration-300
            `}
      >
        <div className="w-full h-20 z-30 absolute bottom-6 bg-linear-to-t from-neutral-100 to-transparent"></div>
        <div className="absolute bottom-6 flex flex-row gap-[1.37rem] left-[2.4rem]">
          {arr.map((_) => (
            <div className="flex flex-col gap-[1.8px] ">
              {[...Array(38)].map((_, i) => (
                <div
                  key={i}
                  style={
                    i < 8
                      ? {
                          opacity: 0.05 * i,
                        }
                      : { opacity: 0.5 }
                  }
                  className={`flex h-[2.5px] w-[0.49px] bg-black/50`}
                ></div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
