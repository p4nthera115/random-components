export default function DesignJoyButton() {
  return (
    <div className="justify-center group items-center flex">
      <button className="cursor-pointer active:scale-[99%] active:translate-x-[-1px] active:translate-y-[0.5px] transition-all z-10 text-white relative h-12 w-32 rounded-[14px] bg-linear-to-b from-neutral-600 to-neutral-800 outline-neutral-800/90 outline-[0.1px] to-40% flex justify-center items-center p-[3px] overflow-hidden">
        <div className="absolute z-50 h-full w-full bg-emerald-950 mix-blend-color-dodge rounded-[14px]"></div>
        <div className="z-40 relative h-full w-full rounded-[11px] bg-neutral-900 overflow-hidden justify-center items-center flex">
          <div className="absolute h-[92%] w-[95%] translate-x-0.5 bg-neutral-700 rounded-lg blur-xs -translate-y-0"></div>
          <div className="z-40 absolute right-[3px] rounded-l-full rounded-tr-full bg-linear-to-t from-neutral-600/90 to-neutral-600/50 h-[32px] w-[4px] blur-[0.9px] -translate-y-[1px]"></div>
          <div className="z-40 absolute rounded-full rounded-tr-none bg-neutral-500/90 w-[107px] h-[10px] top-0.5 blur-[3px]"></div>
          <div className="z-40 absolute bg-neutral-700 h-3 w-1 rounded-full rotate-[24deg] right-[7px] top-[4px] blur-[1.5px]"></div>
          <div className="z-50 flex gap-1.5">
            <p className="font-[300] text-xs flex justify-center items-center">Subscribe</p>
            <svg className="translate-y-[0.7px] " stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="14px" width="14px" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"></path></svg>
          </div>
        </div>
        <div className="z-30 absolute h-[42px] w-[121px] rounded-[11.3px] bg-neutral-700 overflow-hidden translate-y-[0.9px]"></div>
        <div className="z-30 absolute h-[42px] w-[120px] rounded-[11.3px] bg-linear-to-br from-neutral-400/80 to-transparent to-10% overflow-hidden -translate-y-[0.5px] -translate-x-[1.4px]"></div>
        <div className="z-30 absolute h-[42px] w-[120px] rounded-[11.3px] bg-linear-to-b from-neutral-600 to-transparent to-60% overflow-hidden -translate-x-[1.4px]"></div>

        <div className="absolute h-1/2 w-full -top-3 bg-linear-to-l from-neutral-300 to-transparent to-20% blur-[1px]"></div>
        <div className="absolute h-1/2 w-1/2 rounded-full  bg-neutral-800 to-transparent -right-[3px] top-[7px] blur-[1px]"></div>

        <div className="absolute h-full w-16 bg-neutral-300/20 z-30 blur -translate-x-24 group-hover:translate-x-24 transition-all duration-800"></div>
      </button>

      <div className="group-active:translate-x-[-2px] group-active:translate-y-[0.8px] group-active:scale-[99%] transition-all h-12 w-32 rounded-[14px] bg-linear-to-t from-neutral-600/90 to-neutral-600/30 absolute blur-[1px] -translate-x-[3px] translate-y-1 ">
        <div className="absolute z-50 h-full w-full rounded-[14px] bg-emerald-800/30 mix-blend-color-dodge blur-[1px]"></div>
      </div>

    </div>
  )
}
