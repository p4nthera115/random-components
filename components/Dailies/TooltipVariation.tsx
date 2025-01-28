"use client";

import { useState } from "react";
import { FaRegCircleCheck, FaCircleHalfStroke } from "react-icons/fa6";

export default function TooltipVariation() {
  const [active, setActive] = useState(false);

  return (
    <div className="flex translate-x-[0.1rem] flex-col gap-4 justify-center items-center cursor-default select-none">
      <div className="h-5 w-5 bg-neutral-400/90 rounded-full justify-center items-center flex text-white">
        ?
      </div>
      <div
        onClick={() => setActive(!active)}
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        className={`relative z-10 ${
          active ? "h-[19.5rem] " : "h-[9.5rem]"
        } w-[19rem] p-[1px] rounded-[1.3rem] bg-neutral-300 flex justify-center items-center shadow-lg transition-all duration-300`}
      >
        <svg
          className="absolute h-4 w-4 z-20 top-0 -translate-y-[0.73rem]"
          id="eV3sZuxzqny1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 642 388"
          shape-rendering="geometricPrecision"
          text-rendering="geometricPrecision"
          project-id="8e4a1f267ddc46cca4671c8c98151741"
          export-id="b9a6dfddd412451f88148d8e4d507d95"
        >
          <path
            d="M392.0686,209.03696c.52167.59845,1.04334,1.19689,1.58081,1.81348c1.54629,1.75898,3.10482,3.50611,4.66919,5.24902c1.22397,1.37092,1.22397,1.37092,2.47266,2.76953c6.19333,6.56555,13.15546,11.43844,20.79199,16.15674c1.469.90893,2.92067,1.84577,4.36816,2.78857c9.21915,5.58781,20.0301,8.45497,30.36719,11.28516.72816.20174,1.45632.40348,2.20654.61133c2.66418.63319,5.37284,1.1201,8.11181,1.49222v36.06176c-29.89951.05561-59.79902.11021-89.69853.16305-.87564.00155-1.75129.0031-2.65346.00469-19.03189.03363-38.06378.06704-57.09568.1002-9.33377.01627-18.66753.03258-28.0013.04893-.9288.00163-1.85761.00325-2.81455.00493-30.08383.05268-60.16765.1087-90.25146.16647-30.92518.05937-61.85037.11534-92.77557.16707-4.37191.00731-8.74382.01467-13.11574.02204-1.29063.00218-1.29063.00218-2.60734.0044-13.82845.02341-27.65689.05038-41.48533.0787-13.91554.02842-27.83108.05305-41.74664.07388-1.46378.00221-2.92757.00451-4.39135.00691v-38.23674c3.72366-.69008,7.4638-1.59966,11.31861-2.76984.89061-.2638,1.78122-.52761,2.69882-.79941c23.63504-7.22125,44.53258-24.57247,60.30118-43.20059.43441-.50757.86883-1.01514,1.31641-1.53809c5.68221-6.72112,10.00461-13.57096,13.78589-21.51514c43.28291-69.05322,89.55583-153.58144,93.89771-158.94678.57822-.72486,1.15645-1.44971,1.7522-2.19653c7.87263-9.73024,18.7975-16.07709,31.13452-18.33081c3.59776-.37466,7.17239-.44377,10.78516-.55469c2.78217-.04422,5.54688-.00088,8.32813.08203c1.05445.02836,2.10891.05672,3.19531.08594c7.57715.37617,13.88887,1.80036,20.80469,4.91406.76957.33773,1.53914.67547,2.33203,1.02344c14.19194,7.00898,21.65018,21.05505,29.66797,33.97656c4.85502,8.12267,94.51227,161.80094,100.75,168.9375l-.00003.00001Z"
            transform="matrix(1.375802 0 0 1.346727-.000025-.000096)"
            fill="#d4d4d4"
          />
        </svg>

        <div className="relative z-30 h-full w-full p-[1px] rounded-[1.25rem] bg-linear-to-b from-white to-[#eaeaea]">
          <div className="relative z-40 h-full w-full rounded-[1.2rem] bg-[#eaeaea] p-4 flex flex-col">
            <div
              className={`${
                active && "opacity-100 mb-4"
              } h-full bg-neutral-300 rounded-xl opacity-0 transition-all duration-200 overflow-hidden flex justify-center items-center relative`}
            >
              {/* GRADIENT */}
              <div className="h-full z-50 w-full absolute bg-linear-to-b from-transparent from-60% to-neutral-300"></div>
              {/* SQUARE  */}
              <div className="absolute z-10 bg-slate-900 rounded-[0.65rem] border-2 border-[#b2b8c0] h-10 w-10 top-4 left-[2.75rem] flex justify-center items-center">
                <FaCircleHalfStroke className="fill-white rotate-180 scale-125" />
              </div>
              {/* CURSOR */}
              <img
                className="absolute z-50 -rotate-[20deg] top-4 left-[55%] h-5 w-5"
                width="96"
                height="96"
                src="https://img.icons8.com/material-rounded/96/blue-pointer.png"
                alt="blue-pointer"
              />
              <div className="absolute z-50 h-6 px-2 bg-slate-900 rounded-full left-[61%] text-white text-center text-[0.7rem] items-center flex font-normal top-8">
                Rebecca
              </div>
              {/* FORM */}
              <div className="bg-white h-28 w-full m-8 mt-10 mb-0 rounded-t-[0.6rem] relative p-[1px]">
                <div className="bg-[#eaeaea] h-full rounded-t-[0.55rem] flex flex-col gap-5 p-4 pt-10">
                  <div className="flex flex-row gap-3 items-center">
                    <FaRegCircleCheck className="fill-neutral-300 h-4 w-4" />
                    <div className="h-3 w-[80%] bg-neutral-300 rounded-full"></div>
                  </div>
                  <div className="flex flex-row gap-3 items-center">
                    <FaRegCircleCheck className="fill-neutral-300 h-4 w-4" />
                    <div className="h-3 w-[80%] bg-neutral-300 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="self-end mt-auto flex flex-col gap-2">
              <h2 className="text-black">Optimize Your Workflow</h2>
              <p className="font-normal text-neutral-500">
                Click here to streamline your tasks.
                <br />
                Automate repetitive processes and focus on your priorities.
              </p>

              <button className="text-black underline underline-offset-2 text-left w-20">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
