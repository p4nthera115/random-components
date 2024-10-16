"use client";

import { useState } from "react";

export default function VerificationCode() {
  const [code, setCode] = useState(["", "", "", ""]);

  const handleInputChange = (i: number, value: string) => {
    const newCode = [...code];
    newCode[i] = value;
    setCode(newCode);

    if (value && i < 3) {
      document.getElementById(`code-${i + 1}`)?.focus();
    }
  };

  return (
    <div className="z-10">
      {/* <div className="z-10 flex justify-center items-center h-full w-full bg-black  "> */}
      <div className="flex flex-row gap-4 items-center scale-75">
        {[0, 1, 2, 3].map((i) => (
          <div className="flex justify-center items-center">
            <input
              key={i}
              id={`code-${i}`}
              type="text"
              inputMode="numeric"
              maxLength={1}
              pattern="\d"
              required
              value={code[i]}
              onChange={(e) => handleInputChange(i, e.target.value)}
              className="group absolute z-30 w-16 h-16 text-center text-7xl bg-transparent outline-none flex text-white"
            />
            <div className="absolute">
              <InactiveInput />
            </div>
            <div
              className={`${
                code[i] ? "opacity-100" : "opacity-0"
              } z-10 transition duration-300`}
            >
              <ActiveInput />
            </div>
            <div
              className={`${
                code.every(Boolean) ? "opacity-100 delay-500" : "opacity-0"
              } absolute z-20 transition duration-300 select-none`}
            >
              <CompleteInput />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function InactiveInput() {
  return (
    <div className="aspect-square w-32 h-32 rounded-[1.8rem] bg-gray-950 border-2 border-gray-950/10 flex items-center justify-center overflow-hidden">
      <div className="aspect-square w-full h-full rounded-[1.65rem] border-2 border-black/5 flex items-center justify-center overflow-hidden">
        {/* INPUT BORDER */}
        <div className="aspect-square w-full h-full rounded-3xl bg-gray-700/50 outline-none flex items-center justify-center overflow-hidden p-px">
          {/* INPUT */}
          <div className="aspect-square w-full h-full rounded-[1.45rem] bg-gray-900 flex items-center justify-center overflow-hidden">
            <div className="bg-neutral-700 h-3/4 w-3/4 rotate-45 blur-lg opacity-30 "></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ActiveInput() {
  return (
    <div className="aspect-square w-32 h-32 rounded-[1.8rem] bg-gray-950 border-2 border-gray-950/10 outline-none flex items-center justify-center overflow-hidden">
      <div className="aspect-square w-full h-full rounded-[1.65rem] border-2 border-black/5 flex items-center justify-center overflow-hidden">
        {/* INPUT BORDER */}
        <div className="aspect-square w-full h-full rounded-3xl bg-gradient-to-br from-sky-300 from-10% to-sky-300/5 flex items-center justify-center overflow-hidden p-px">
          {/* INPUT */}
          <div className="aspect-square relative w-full h-full rounded-[1.45rem] bg-gray-900 flex items-center justify-center overflow-hidden">
            <div className="absolute w-full h-full bg-gradient-to-tl rotate-12 from-emerald-300 from-25% via-blue-500 via-10% to-transparent to-40% scale-110 blur-lg mix-blend-color-dodge"></div>
            <div className="absolute w-full h-full bg-gradient-to-tl rotate-12 from-emerald-300 from-10% via-blue-500 via-20% to-transparent to-40% scale-110 blur-md"></div>
            <div className="absolute w-full h-full bg-gradient-to-tl from-emerald-300 from-15% to-transparent to-10% scale-110 blur-md"></div>
            <div className="absolute w-full h-full bg-gradient-to-tl from-[#31ECFB] from-10% to-transparent to-20% scale-110 rotate-12 blur-sm"></div>
            <div className="absolute w-full h-full bg-gradient-to-tl right-10 bottom-3 from-[#31ECFB] from-10% to-transparent to-20% scale-150 rotate-6 blur-md mix-blend-plus-lighter"></div>
            <div className="absolute z-30 bg-gray-900 rounded-full h-full w-full -left-6 -top-6 scale-[160%] border-[3px] border-blue-500 blur-md opacity-100"></div>
            <div className="absolute z-40 bg-neutral-700 h-3/4 w-3/4 rotate-45 blur-md opacity-30"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CompleteInput() {
  return (
    <div className="aspect-square w-32 h-32 rounded-[1.8rem] bg-gray-950 border-2 border-gray-950/10 flex items-center justify-center overflow-hidden">
      <div className="aspect-square w-full h-full rounded-[1.65rem] border-2 border-black/5 flex items-center justify-center overflow-hidden">
        {/* INPUT BORDER */}
        <div className="aspect-square w-full h-full rounded-3xl bg-gradient-to-br from-emerald-300 from-10% to-emerald-300/5 flex items-center justify-center overflow-hidden p-px">
          {/* INPUT */}
          <div className="aspect-square relative w-full h-full rounded-[1.45rem] bg-gray-900 flex items-center justify-center overflow-hidden">
            <div className="absolute w-full h-full bg-gradient-to-tl rotate-12 from-emerald-300 from-25% via-emerald-500 via-10% to-transparent to-40% scale-110 blur-lg mix-blend-color-dodge"></div>
            <div className="absolute w-full h-full bg-gradient-to-tl rotate-12 from-emerald-300 from-10% via-emerald-500 via-20% to-transparent to-40% scale-110 blur-md"></div>
            <div className="absolute w-full h-full bg-gradient-to-tl from-emerald-300 from-15% to-transparent to-10% scale-110 blur-md"></div>
            <div className="absolute w-full h-full bg-gradient-to-tl from-[#31fba3] from-10% to-transparent to-20% scale-110 rotate-12 blur-sm"></div>
            <div className="absolute w-full h-full bg-gradient-to-tl right-10 bottom-3 from-[#31fba3] from-10% to-transparent to-20% scale-150 rotate-6 blur-md mix-blend-plus-lighter"></div>
            <div className="absolute z-30 bg-gray-900 rounded-full h-full w-full -left-6 -top-6 scale-[160%] border-[3px] border-emerald-500 blur-md opacity-100"></div>
            <div className="absolute z-40 bg-neutral-700 h-3/4 w-3/4 rotate-45 blur-md opacity-30"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
