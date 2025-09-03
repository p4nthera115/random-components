"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function CircularSlider() {
  const [value, setValue] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const sliderRef = useRef(null)
  const pointerRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (isDragging) {
        const rect = sliderRef.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        let angle = Math.atan2(centerY - event.clientY, event.clientX - centerX)

        angle = (Math.PI / 2 - angle) % (2 * Math.PI)
        if (angle < 0) angle += 2 * Math.PI

        const newValue = Math.round((angle / (2 * Math.PI)) * 100)
        setValue(newValue)
      }
    }

    const handleMouseUp = () => {
      setIsDragging(false)
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseup", handleMouseUp)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
    }
  }, [isDragging])

  const getTickPosition = (index, totalTicks) => {
    const angle = (index / totalTicks) * 2 * Math.PI - Math.PI / 2
    const x = 50 + 39 * Math.cos(angle)
    const y = 50 + 39 * Math.sin(angle)
    return { x, y }
  }

  const getPointerPosition = () => {
    const angle = (value / 100) * 2 * Math.PI - Math.PI / 2
    return {
      x: 50 + 28 * Math.cos(angle),
      y: 50 + 28 * Math.sin(angle),
    }
  }

  const pointerPosition = getPointerPosition()

  const renderDigits = () => {
    const digits = value.toString().padStart(2, "0").split("")
    return digits.map((digit, index) => (
      <AnimatePresence mode="popLayout" key={`${index}-${digit}`}>
        <motion.span
          key={`${index}-${digit}`}
          initial={{ y: 10, opacity: 1, filter: "blur(10px)", scale: 0.5 }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)", scale: 1 }}
          exit={{ y: 0, opacity: 1, filter: "blur(10px)", scale: 0.5 }}
          transition={{
            y: {
              duration: 0.4,
              type: "spring",
              stiffness: 200,
            },
          }}
          className="inline-block"
        >
          {digit}
        </motion.span>
      </AnimatePresence>
    ))
  }

  return (
    <div
      className="relative w-64 h-64 flex justify-center items-center"
      ref={sliderRef}
    >
      <div className="absolute justify-self-center self-center rounded-full h-full w-full shadow-lg pointer-events-none"></div>
      <div className="absolute justify-self-center self-center rounded-full h-36 w-36 shadow-lg shadow-gray-700/10 border border-black/[15%] pointer-events-none bg-white"></div>
      <svg className="w-full h-full" viewBox="0 0 100 100">
        {/* // * Background circle */}
        <circle
          className="fill-gray-100 stroke-[0.3px] stroke-black/10 shadow-lg"
          cx="50"
          cy="50"
          r="50"
        />
        <circle className="fill-gray-200/80" cx="50" cy="50" r="46" />

        {/* // * Tick marks */}
        {[...Array(60)].map((_, index) => {
          const { x, y } = getTickPosition(index, 60)
          return (
            <line
              key={index}
              x1={x}
              y1={y}
              x2={50 + (42.3 * (x - 50)) / 45}
              y2={50 + (42.3 * (y - 50)) / 45}
              stroke={index <= (value / 100) * 60 ? "#00000074" : "#00000016"}
              strokeWidth="0.7"
              strokeLinecap="round"
            />
          )
        })}

        {/* // * Pointer */}
        <circle
          ref={pointerRef}
          className="fill-neutral-500"
          cx={pointerPosition.x}
          cy={pointerPosition.y}
          r="3"
          strokeWidth="2"
          onMouseDown={() => setIsDragging(true)}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-5xl font-bold text-neutral-400 flex flex-row">
          <span className="flex -translate-x-4">{renderDigits()[0]}</span>
          <span className="flex absolute translate-x-[0.9rem]">
            {renderDigits()[1]}
          </span>
        </div>
      </div>
    </div>
  )
}
