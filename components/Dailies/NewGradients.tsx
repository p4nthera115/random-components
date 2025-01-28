export default function NewGradients() {
  return (
    <>
      <div className="absolute translate-y-2 scale-90 h-20 w-58 rounded-full bg-neutral-200 flex justify-center items-center overflow-hidden blur-sm">
        <div className="size-64 rounded-full bg-conic/decreasing from-violet-700 via-lime-300 to-violet-700 p-[1px] animate-[spin_5s_linear_infinite]"></div>
      </div>
      <div className="relative h-20 w-58 rounded-full bg-neutral-300 flex justify-center items-center overflow-hidden">
        {/* <p className="bg-clip-text ">tailwind 4.0</p> */}
        <div className="absolute rounded-full top-1 blur h-20 w-full bg-linear-to-t from-black to-transparent overflow-hidden justify-center items-end flex">
          <div className="absolute opacity-70 blur-xl size-64 rounded-full bg-conic/decreasing from-violet-700 via-lime-300 to-violet-700 animate-[spin_5s_linear_infinite]"></div>
        </div>
      </div >
    </>
  )
}
