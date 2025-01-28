export default function NewGradients() {
  return (
    <>
      <div className="absolute translate h-20 w-58 rounded-full bg-neutral-200 flex justify-center items-center overflow-hidden blur-sm">
        <div className="size-64 rounded-full bg-conic/decreasing from-violet-700 via-lime-300 to-violet-700 p-[1px] animate-[spin_5s_linear_infinite]"></div>
      </div>


      <div className="relative h-20 w-58 rounded-full bg-neutral-800 flex justify-center items-center overflow-hidden">
        <div className="size-64 rounded-full bg-conic/decreasing from-violet-700 via-lime-300 to-violet-700 animate-[spin_5s_linear_infinite]"></div >
        <div className="absolute h-[99%] w-[99%] rounded-full bg-neutral-900 flex justify-center items-center overflow-hidden"></div>
        <span className="absolute text-lg font-medium tracking-tight z-10 bg-linear-to-r from-transparent from-35% via-white via-50% to-transparent to-65% bg-clip-text text-white/50 animate-shimmer bg-[length:300%_100%]">
          tailwindcss 4.0
          <div className="absolute opacity-70 blur-xl size-64 rounded-full bg-conic/decreasing from-violet-700 via-lime-300 to-violet-700 animate-[spin_5s_linear_infinite]"></div>
        </span>
      </div >
    </>
  )
}

export function BallGradient() {
  return (
    <div className="bg-neutral-200 h-64 w-64 rounded-3xl shadow-neutral-300 shadow-xl border border-neutral-300/20 justify-center items-center flex">
      <div className="absolute translate-y-2 scale-90 size-28 rounded-full bg-neutral-200 flex justify-center items-center overflow-hidden blur-sm">
        <div className="size-64 rounded-full bg-conic/decreasing from-violet-700 via-lime-300 to-violet-700 p-[1px] animate-[spin_5s_linear_infinite]"></div>
      </div>
      <div className="relative size-28 rounded-full bg-neutral-200 flex justify-center items-center overflow-hidden">
        <div className="absolute rounded-full top-1 blur-md size-24 bg-linear-to-t from-black to-transparent overflow-hidden justify-center items-end flex">
          <div className="absolute opacity-70 blur-xl size-64 rounded-full bg-conic/decreasing from-violet-700 via-lime-300 to-violet-700 animate-[spin_5s_linear_infinite]"></div>
        </div>
        <div className="size-6 bg-white rounded-full z-10 -translate-y-7 translate-x-6 blur-sm"></div>
        <div className="size-2 bg-white rounded-full z-10 -translate-y-4 translate-x-[2.35rem] blur-xs absolute"></div>
      </div >
    </div >
  )
}
