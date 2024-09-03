import motion from "framer-motion";

export default function Sign() {
  return (
    <div className="bg-gradient-to-b from-blue-400 to-sky-200 h-full w-full flex items-center justify-center">
      <div className="flex flex-col p-6 bg-white/50 rounded-3xl h-80 w-72">
        <img
          src="file.png"
          alt="file-icon"
          className="h-16 w-10 opacity-75 rotate-[8deg]"
        />
        <div className="text-neutral-950/70 font-semibold h-full w-full pl-2 pr-8">
          <p className="inline">
            Redesign discovery phase for
            <span className="inline-flex mx-2 h-4 w-4 -translate-y-[0.15rem] bg-white/50 items-center justify-center rounded-sm">
              <div className="flex w-[0.6rem] h-[0.35rem] bg-gradient-to-b from-orange-400 from-70% to-orange-200 rounded-[0.05rem]"></div>
            </span>
            Brick inc.
          </p>
        </div>
      </div>
    </div>
  );
}
