import { useState } from "react";

export default function MenuButtons() {
  const [active, setActive] = useState<number>();

  const arr = ["Home", "Work", "About", "Contact"];

  return (
    <div className="z-10 flex h-24  border-black flex-row justify-center items-center p-6 gap-1">
      {arr.map((item, i) => (
        <button
          onClick={() => setActive(i)}
          className={`
            ${active === i && "invert pr-3"}
            relative group flex h-8 p-4 bg-neutral-300 hover:pr-3 justify-center items-center rounded-full transition-all
          `}
        >
          <span
            className={`${
              active === i && "scale-100 opacity-100 blur-none"
            } h-4 w-4 rounded-full absolute scale-0 opacity-0 blur-md group-hover:scale-100 group-hover:blur-none group-hover:opacity-100 bg-black/70 transition-all left-2`}
          ></span>
          <p
            className={`${
              active === i && "ml-4"
            } group-hover:ml-4 transition-all`}
          >
            {item}
          </p>
        </button>
      ))}
    </div>
  );
}
