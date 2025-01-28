import { useState } from "react";

export default function Switch() {
  const [click, setClick] = useState(false);
  return (
    <div className="relative p-4 rounded-3xl flex justify-center items-center flex-row gap-3">
      <button
        onClick={() => setClick(!click)}
        className="group flex justify-center items-center p-[1px] h-12 w-[5.5rem] rounded-full bg-linear-to-b from-white to-neutral-400 border-t border-x border-neutral-200 shadow-lg shadow-black/20"
      >
        <div className="h-full w-full rounded-full bg-linear-to-t from-neutral-50 to-neutral-300 border-[0.5px] border-neutral-200 p-3 flex items-center">
          <SwitchOff click={click} />
          <SwitchOn click={click} />
          {/* <div className="h-1 w-1 rounded-full absolute bg-neutral-400 ml-[0.6rem]"></div> */}
        </div>
      </button>
    </div>
  );
}

function SwitchOff({ click }: { click: boolean }) {
  return (
    <div
      className={`absolute ${
        click ? " translate-x-9" : ""
      } h-6 w-6 z-10 scale-110 rounded-full bg-linear-to-br from-neutral-400 to-neutral-100 flex justify-center items-center transition duration-300 overflow-hidden`}
    >
      <div className="absolute left-[0.4rem] top-[2px] h-1 w-1 rounded-full bg-linear-to-bl from-white to-white/50"></div>
      <div className="absolute left-1/2 top-[1px] h-7 w-7 rounded-full bg-linear-to-r from-transparent via-white/80 to-transparent -translate-x-12 -translate-y-8 group-hover:translate-x-5 group-hover:translate-y-8 blur-[5px] rotate-45 group-hover:scale-150 duration-1000"></div>
      <div className="absolute left-1/2 -translate-x-1/2 top-[1px] h-5 w-5  rounded-full bg-linear-to-b from-white/60 from-10% to-40% to-transparent  blur-[1px] duration-300"></div>
      {/* <div className="absolute left-1/2 -translate-x-1/2 top-[1px] h-5 w-5 rounded-full bg-linear-to-b from-white/40 from-10% to-40% to-transparent  group-hover:rotate-[-200deg] blur-[1px] duration-500"></div> */}
      <div className="h-[1.4rem] w-[1.4rem] rounded-full bg-linear-to-b from-neutral-400 to-neutral-900 border-neutral-400 flex justify-center items-center"></div>
      <div className="absolute top-[1px] h-4 w-4 rounded-full bg-linear-to-b from-white/50 border-neutral-400"></div>
      <div className="absolute left-1/2 -translate-x-1/2 top-0 h-[1.4rem] w-[1.4rem] rounded-full bg-linear-to-b from-transparent to-black/80"></div>
    </div>
  );
}

function SwitchOn({ click }: { click: boolean }) {
  return (
    <div
      className={`absolute ${
        click ? "opacity-100 translate-x-9" : "opacity-0"
      } h-6 w-6 z-10 scale-110 rounded-full bg-linear-to-br from-green-500 to-green-100 flex justify-center items-center transition duration-300`}
    >
      <div className="absolute left-[0.4rem] top-[2px] h-1 w-1 rounded-full bg-linear-to-bl from-white to-white/50"></div>
      <div className="absolute left-1/2 -translate-x-1/2 top-[1px] h-5 w-5 rounded-full bg-linear-to-b from-white/60 from-10%  to-40% to-transparent"></div>
      <div className="h-[1.4rem] w-[1.4rem] rounded-full bg-linear-to-b from-green-300 to-green-600 flex justify-center items-center"></div>
      <div className="absolute top-[1px] h-4 w-4 rounded-full bg-linear-to-b from-white/50"></div>
      <div className="absolute left-1/2 -translate-x-1/2 top-0 h-[1.4rem] w-[1.4rem] rounded-full bg-linear-to-b from-transparent to-green/80"></div>
    </div>
  );
}
