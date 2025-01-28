export default function ColorMetalButton() {
  return (
    <div className="group h-10 w-36 rounded-full bg-linear-to-r from-teal-500 via-purple-600 to-yellow-400 border border-white p-[0.1px] cursor-pointer active:scale-[98%] transition">
      <div className="h-10 w-36 rounded-full bg-neutral-300 absolute flex justify-center items-center overflow-hidden group-active:shadow-xs group-active:shadow-neutral-400 shadow-md shadow-neutral-400 transition">
        <div className="absolute h-3 w-16 rounded-full bg-linear-to-r from-transparent via-white to-transparent z-50 blur-xs top-1 -translate-x-12 group-hover:translate-x-12 transition duration-1000 ease-in-out  "></div>
        <div className="absolute h-full w-full rounded-full bg-linear-to-r from-teal-500 via-purple-600 to-yellow-400 border border-white"></div>
        <div className="absolute h-3 w-[85%] rounded-full bg-linear-to-b from-neutral-100 from-70% z-30 blur-[3px] bottom-[0.4rem] opacity-70"></div>
        <div className="absolute h-7 w-[92%] rounded-full bg-linear-to-b from-white from-40% to-30% z-40 blur-[2.5px] top-1"></div>
        <div className="absolute h-3 w-[80%] rounded-full bg-linear-to-b from-neutral-100 from-70% z-30 blur-xs top-1"></div>
        <div className="absolute h-3 w-[85%] rounded-full bg-linear-to-b from-neutral-100 from-70% z-30 blur-xs top-1"></div>
        <div className="absolute h-3 w-[90%] rounded-full bg-neutral-200 z-30 blur-[6px] top-1"></div>
        <div className="absolute h-7 w-[95%] rounded-full bg-neutral-200 z-10 blur-xs bottom-1"></div>
        <div className="absolute h-[1.65rem] w-[93%] rounded-full bg-black z-20 blur-[3px] top-1"></div>
        <div className="absolute h-6 w-[95%] rounded-full bg-black z-20 blur-xs top-1"></div>
        <div className="absolute h-full w-full rounded-full z-50 opacity-[15%] bg-linear-to-r from-teal-500 via-purple-600 to-yellow-400"></div>
        <div className="absolute h-full w-full rounded-full bg-gray-900 blur-xs opacity-90 "></div>
        <div className="absolute h-full w-full rounded-full bg-gray-700 blur-md opacity-90 "></div>
        <div className="absolute h-full w-full rounded-full bg-gray-400 blur-lg opacity-90 "></div>
        <div className="absolute h-full w-full rounded-full bg-gray-300 blur-md opacity-50 "></div>
        <div className="absolute h-full w-full rounded-full bg-gray-200 blur-md opacity-90 "></div>
        <p className="z-60 font-bold text-black/60 text-[0.7rem] select-none absolute">
          Made in Tailwind
        </p>
        <p className="z-50 font-bold text-[0.7rem] select-none absolute text-white/20 translate-y-[0.3px]">
          Made in Tailwind
        </p>
      </div>
    </div>
  );
}
