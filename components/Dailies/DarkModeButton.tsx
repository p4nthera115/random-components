"use client";
import { useEffect, useState } from "react";
import { TbSunFilled } from "react-icons/tb";
import { IoMoon } from "react-icons/io5";

type Theme = "light" | "dark";

export default function DarkModeButton() {
  const [theme, setTheme] = useState<Theme>("light");
  const [buttonTheme, setButtonTheme] = useState<Theme>("light");

  useEffect(() => {
    if (theme === "light") {
      setTimeout(() => setButtonTheme("light"), 600);
    } else {
      setButtonTheme("dark");
    }
  }, [theme]);

  return (
    <div className="z-10 flex justify-center items-center">
      <div
        className={`
          ${theme === "dark" && "h-[88rem] w-[88rem] aspect-square"}
          absolute aspect-square h-1 w-1  bg-neutral-900 rounded-full transition-all duration-[900ms] ease-in-out overflow-hidden`}
      >
        <div className="w-screen h-screen z-20">
          <div className="fixed inset-0">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `radial-gradient(#c8c8c824 1px, transparent 1px)`,
                backgroundSize: "20px 20px",
              }}
            ></div>
          </div>
        </div>
      </div>

      <button
        onClick={() =>
          theme === "light" ? setTheme("dark") : setTheme("light")
        }
        className={`
          ${
            buttonTheme === "dark"
              ? "bg-neutral-800 border-neutral-700 hover:border-neutral-500 duration-500 active:duration-100"
              : "bg-white border-neutral-200 hover:border-neutral-300 duration-300"
          }
          group z-10 h-24 relative w-24 active:scale-95 rounded-full border-2 transition-all  justify-center items-center flex overflow-hidden shadow-md`}
      >
        <div
          className={`h-full w-full bg-gradient-to-b from-transparent to-neutral-200 transition-all duration-300 ${
            buttonTheme === "dark" ? "opacity-0" : "opacity-100"
          } `}
        ></div>
        <div
          className={`h-full w-full absolute bg-gradient-to-b from-transparent to-neutral-900 transition-all duration-100 ${
            buttonTheme === "dark" ? "opacity-100" : "opacity-0"
          }`}
        ></div>
        <TbSunFilled
          className={`${
            buttonTheme === "dark" && "scale-0 -rotate-180 opacity-0"
          } absolute text-black/50 group-hover:text-black h-12 w-12 transition-all ease-in-out duration-500`}
        />
        <IoMoon
          className={`${
            buttonTheme !== "dark" && "scale-0 rotate-180 opacity-0"
          } absolute text-white/50 group-hover:text-white h-10 w-10 transition-all ease-in-out duration-500`}
        />
      </button>
    </div>
  );
}

export function DarkModeButtonVariant() {
  const [theme, setTheme] = useState<Theme>("light");
  return (
    <div className="z-10 flex justify-center items-center">
      <div
        className={`
          ${theme === "dark" && "h-[88rem] w-[88rem] aspect-square"}
          absolute aspect-square h-1 w-1  bg-neutral-900 rounded-full transition-all duration-[900ms] ease-in-out overflow-hidden`}
      >
        <div className=" w-screen h-screen z-20">
          <div className="fixed inset-0">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `radial-gradient(#c8c8c824 1px, transparent 1px)`,
                backgroundSize: "20px 20px",
              }}
            ></div>
          </div>
        </div>
      </div>

      <div
        className={`
      ${
        theme === "dark"
          ? "bg-neutral-950 border-neutral-700 hover:border-neutral-500 duration-500 active:duration-100"
          : "bg-neutral-200 border-neutral-200 hover:border-neutral-300 duration-100"
      }
      z-10 scale-[105%] h-24 w-24 absolute rounded-full  transition-all  justify-center items-center flex overflow-hidden shadow-md`}
      >
        <div
          className={`h-full w-full bg-gradient-to-b from-transparent transition-all duration-00 ${
            theme === "dark" ? "to-neutral-900" : "to-neutral-100"
          }`}
        ></div>
      </div>
      <button
        onClick={() =>
          theme === "light" ? setTheme("dark") : setTheme("light")
        }
        className={`
          ${
            theme === "dark"
              ? "bg-neutral-800 border-neutral-700 hover:border-neutral-500 duration-500 active:duration-100"
              : "bg-white border-neutral-200 hover:border-neutral-300 duration-100"
          }
          z-10 h-24 w-24 active:scale-95 active:shadow-none rounded-full  transition-all  justify-center items-center flex overflow-hidden shadow-md`}
      >
        <div
          className={`h-full w-full bg-gradient-to-b from-transparent transition-all duration-100 ${
            theme === "dark" ? "to-neutral-950" : "to-neutral-200"
          }`}
        ></div>
        <TbSunFilled
          className={`${
            theme === "dark" && "scale-0 -rotate-180 opacity-0"
          } absolute text-black h-12 w-12 transition-all ease-in-out duration-500`}
        />
        <IoMoon
          className={`${
            theme !== "dark" && "scale-0 rotate-180 opacity-0"
          } absolute text-white h-10 w-10 transition-all ease-in-out duration-500`}
        />
      </button>
    </div>
  );
}
