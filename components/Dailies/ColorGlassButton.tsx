import { Instrument_Serif } from "next/font/google";

const instrument = Instrument_Serif({ weight: "400", subsets: ["latin"] });

export default function GlassButton() {
  return (
    <div
      className={`${instrument.className} relative p-4 rounded-3xl flex justify-center items-center`}
    >
      {/* BUTTON */}
      <button className="group z-20 w-32 h-10 rounded-full bg-neutral-200 shadow-md shadow-indigo-200 active:shadow-sm active:shadow-indigo-200 active:translate-y-1 flex justify-center transition">
        <div className="absolute z-10 w-32 h-10 rounded-full bg-gradient-to-b from-violet-400 via-indigo-200 to-cyan-100/50 flex justify-center p-[0.1rem] px-2 transition">
          <div className="w-full h-5 rounded-full bg-gradient-to-b from-white/70 to-transparent flex flex-row justify-start px-2 gap-1">
            {/* HIGHLIGHTS */}
            <div className="flex w-6 h-1 rounded-full bg-gradient-to-b from-white to-transparent group-hover:translate-x-[4.4rem] transition duration-[250ms]"></div>
            <div className="flex w-2 h-1 rounded-full bg-gradient-to-b from-white to-transparent group-hover:translate-x-[1.9rem] transition duration-[250ms]"></div>
            {/* <div className="flex w-6 h-1 rounded-full bg-gradient-to-b from-white to-transparent group-hover:translate-x-[3.7rem] transition duration-[400ms]"></div>
          <div className="flex w-2 h-1 rounded-full bg-gradient-to-b from-white to-transparent group-hover:translate-x-[3.7rem] transition duration-[400ms]"></div> */}
          </div>
          <span className="absolute italic font-bold opacity-70 pointer-events-none self-center group-active:opacity-45 transition font-serif">
            Click Me
          </span>
        </div>
      </button>
    </div>
  );
}
