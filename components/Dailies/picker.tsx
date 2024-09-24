"use client";
import { Instrument_Serif } from "next/font/google";
import { IoMdArrowDropdown } from "react-icons/io";

const instrument = Instrument_Serif({ weight: "400", subsets: ["latin"] });

export default function GradientComponent() {
  return (
    <div
      className={`${instrument.className} aspect-[9/19.5] z-10 h-96 w-56 bg-neutral-200 rounded-2xl relative overflow-hidden border border-black/15`}
    >
      <div className="absolute rotate-[24deg] translate-y-24 scale-150 h-96 w-96 bg-gradient-to-br from-yellow-100/50 from-15% via-orange-200/80 to-40% to-neutral-100 blur-md pointer-events-none"></div>
      <svg
        className="absolute opacity-100 mix-blend-color-burn h-96 pointer-events-none"
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
      <div className="absolute z-30 h-full w-full flex flex-col select-none">
        <div className="p-4">
          <h2 className="text-[1.7rem] leading-8 mb-2">
            What is your annual income?
          </h2>
          <p className="text-[0.65rem] leading-3 font-sans text-gray-600">
            This helps us customize your <br /> store setup experience.
          </p>
        </div>
        <div className="absolute flex justify-center items-center h-full w-full">
          <p id="incomeDisplay" className="text-4xl text-black">
            $240,000
          </p>
        </div>
      </div>

      {/* INDICATOR  */}
      <div className="flex flex-col z-50 absolute bottom-0 left-1/2 -translate-x-1/2 mb-8 text-black">
        <IoMdArrowDropdown className="flex absolute -translate-x-[0.4rem] -translate-y-3" />
        <div className={`flex w-[1px] h-6 bg-black`}></div>
      </div>

      <div className="pointer-events-none mb-4 z-50 h-10 w-10 absolute flex bottom-0 right-0 bg-gradient-to-l from-neutral-100 to-transparent"></div>
      <div className="pointer-events-none mb-4 z-50 h-10 w-10 absolute flex bottom-0 left-0 bg-gradient-to-r from-neutral-100 to-transparent"></div>

      {/* SLIDER */}
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
              console.log(income);

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
  );
}
