"use client";

import { useState, useRef, useEffect } from "react";
import styles from "./BorderRadiusSlider.module.css";

const BorderRadiusSlider = () => {
  const [sliderValue, setSliderValue] = useState(0);
  const sliderRef = useRef<HTMLInputElement>(null);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(Number(e.target.value));
  };

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.setProperty("--thumb-radius", `${sliderValue}%`);
    }
  }, [sliderValue]);

  return (
    <div
      className={`flex self-center justify-self-center items-center justify-center rounded-2xl bg-neutral-200 p-8 w-1/4`}
    >
      <div className="w-full max-w-md mx-auto">
        <input
          ref={sliderRef}
          type="range"
          min="0"
          max="50"
          value={sliderValue}
          onChange={handleSliderChange}
          className={`w-full h-2 bg-white rounded-lg appearance-none cursor-pointer ${styles.slider}`}
        />
      </div>
    </div>
  );
};

export default BorderRadiusSlider;
