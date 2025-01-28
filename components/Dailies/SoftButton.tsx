"use client";

export default function SoftButton() {
  return (
    <button className="absolute h-32 w-44 rounded-lg bg-neutral-200 overflow-hidden justify-center items-center flex shadow-lg shadow-neutral-500 active:scale-95 transition duration-75">
      <div className="absolute w-[96%] h-[96%] bg-[#c1c1c1] rounded-[0.40rem] blur-[1px] z-10 flex"></div>
      <div className="absolute w-full h-2 bottom-0 bg-linear-to-t from-neutral-700"></div>
      <div className="absolute w-2 h-[95%] left-0 bg-linear-to-r from-neutral-400 blur-[1px]"></div>
      <div className="absolute w-2 h-[95%] right-0 bg-linear-to-l from-neutral-200 blur-[1px]"></div>
      <div className="absolute w-full h-2 top-0 bg-linear-to-b from-neutral-50"></div>
      <div className="absolute h-28 w-40 rounded-[2rem] bg-neutral-200 overflow-hidden justify-center items-center flex z-20 blur-[2px] -translate-y-[0.1rem]">
        <div className="absolute w-full h-10 bottom-0 bg-linear-to-t from-neutral-900"></div>
        <div className="absolute w-6 h-[80%] left-0 bg-linear-to-r from-neutral-400 blur-[1px]"></div>
        <div className="absolute w-6 h-[80%] right-0 bg-linear-to-l from-neutral-200 blur-[1px]"></div>
        <div className="absolute w-full h-6 top-0 bg-linear-to-b from-neutral-50"></div>
      </div>
      <div className="absolute w-36 h-24 bg-[#c1c1c1] rounded-3xl blur-[1.5px] z-40 flex shadow-sm "></div>
      <div className="absolute w-[8.5rem] h-24 bg-[#232323] rounded-3xl blur-[1.5px] z-30 flex shadow-sm translate-y-1 border-white"></div>
      <div className="absolute w-[8.97rem] h-24 bg-linear-to-t from-white/80 from-1% to-transparent rounded-[1.7rem] blur-[2px] z-20 flex shadow-sm bottom-3"></div>
      <div className="absolute w-36 h-24 bg-linear-to-bl from-neutral-200 to-neutral-500 translate-y-3 -translate-x-3 rounded-3xl blur-[5px] z-10 flex shadow-sm"></div>
      <div className="absolute w-[9.4rem] scale-[98%] h-24 bg-linear-to-t from-neutral-700 to-transparent translate-y-3 rounded-3xl blur-[2px] z-10 flex shadow-sm"></div>
      <div className="absolute w-[9.4rem] h-24 bg-linear-to-t from-neutral-600 to-transparent translate-y-4 rounded-3xl blur-[5px] z-10 flex shadow-sm"></div>
      <span className="z-50 -translate-y-4 text-lg opacity-70">esc</span>
    </button>
  );
}
