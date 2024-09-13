"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function CircularSlider() {
  const [value, setValue] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef(null);
  const pointerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (isDragging) {
        const rect = sliderRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        let angle = Math.atan2(
          event.clientY - centerY,
          event.clientX - centerX
        );

        // Adjust angle to start from top (π/2) and go clockwise
        angle = (Math.PI / 2 - angle) % (2 * Math.PI);
        if (angle < 0) angle += 2 * Math.PI;

        const newValue = Math.round((angle / (2 * Math.PI)) * 100);
        setValue(newValue);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  const getTickPosition = (index, totalTicks) => {
    const angle = (index / totalTicks) * 2 * Math.PI - Math.PI / 2;
    const x = 50 + 45 * Math.cos(angle);
    const y = 50 + 45 * Math.sin(angle);
    return { x, y };
  };

  const getPointerPosition = () => {
    const angle = (value / 100) * 2 * Math.PI - Math.PI / 2;
    return {
      x: 50 + 45 * Math.cos(angle),
      y: 50 + 45 * Math.sin(angle),
    };
  };

  const pointerPosition = getPointerPosition();

  return (
    <div className="relative w-64 h-64" ref={sliderRef}>
      <svg className="w-full h-full" viewBox="0 0 100 100">
        {/* Background circle */}
        <circle className="fill-gray-100" cx="50" cy="50" r="48" />

        {/* Tick marks */}
        {[...Array(60)].map((_, index) => {
          const { x, y } = getTickPosition(index, 60);
          const isLongTick = index % 5 === 0;
          return (
            <line
              key={index}
              x1={x}
              y1={y}
              x2={
                isLongTick
                  ? 50 + (42 * (x - 50)) / 45
                  : 50 + (44 * (x - 50)) / 45
              }
              y2={
                isLongTick
                  ? 50 + (42 * (y - 50)) / 45
                  : 50 + (44 * (y - 50)) / 45
              }
              stroke={index <= (value / 100) * 60 ? "#3B82F6" : "#E5E7EB"}
              strokeWidth={isLongTick ? "1" : "0.5"}
            />
          );
        })}

        {/* Pointer */}
        <circle
          ref={pointerRef}
          className="fill-white stroke-blue-500 cursor-pointer"
          cx={pointerPosition.x}
          cy={pointerPosition.y}
          r="3"
          strokeWidth="2"
          onMouseDown={() => setIsDragging(true)}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          key={value}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="text-4xl font-bold text-gray-800"
        >
          {value}
        </motion.div>
      </div>
    </div>
  );
}
