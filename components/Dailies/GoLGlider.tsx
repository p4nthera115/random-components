import { useState, useEffect } from "react"

const GoLGlider = () => {
  const [step, setStep] = useState(0)

  const gliderStates = [
    [
      // Step 0
      [0, 1, 0],
      [0, 0, 1],
      [1, 1, 1],
    ],
    [
      // Step 1
      [1, 0, 1],
      [0, 1, 1],
      [0, 1, 0],
    ],
    [
      // Step 2
      [0, 0, 1],
      [1, 0, 1],
      [0, 1, 1],
    ],
    [
      // Step 3
      [1, 0, 0],
      [0, 1, 1],
      [1, 1, 0],
    ],
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prevStep) => (prevStep + 1) % 4)
    }, 500) // Slightly faster animation

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex items-center justify-center border border-black p-1 rounded-lg bg-neutral-100">
      <div className="grid grid-cols-3 gap-0.5">
        {gliderStates[step].map((row, i) =>
          row.map((cell, j) => (
            <div
              key={`${i}-${j}`}
              className={`w-4 h-4 rounded transition-colors duration-150 ${
                cell ? "bg-black" : "bg-transparent"
              }`}
            />
          ))
        )}
      </div>
    </div>
  )
}

export default GoLGlider

export const GoLGlider2 = () => {
  const [step, setStep] = useState(0)

  // Define the positions of the 5 squares for each step
  // Each position is [row, col] in a 5x5 grid
  const squarePositions = [
    [
      // Step 0
      [1, 2], // top middle
      [2, 3], // right middle
      [3, 3], // bottom right
      [3, 2], // bottom middle
      [3, 1], // bottom left
    ],
    [
      // Step 1
      [1, 1], // top left
      [1, 3], // top right
      [2, 3], // right middle
      [2, 2], // middle
      [3, 2], // bottom
    ],
    [
      // Step 2
      [2, 1], // left middle
      [1, 3], // top right
      [2, 3], // right middle
      [3, 3], // bottom right
      [3, 2], // bottom
    ],
    [
      // Step 3
      [1, 1], // top left
      [2, 3], // right middle
      [2, 2], // middle
      [3, 2], // bottom middle
      [3, 1], // bottom left
    ],
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prevStep) => (prevStep + 1) % 4)
    }, 600) // Slowed down to 600ms

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-24 h-24 ">
      {squarePositions[step].map((pos, index) => (
        <div
          key={index}
          className="absolute w-4 h-4 bg-black rounded-sm transition-all duration-500 ease-in-out"
          style={{
            top: `${pos[0] * 20}%`,
            left: `${pos[1] * 20}%`,
            margin: "2px", // Added gap between squares
          }}
        />
      ))}
    </div>
  )
}
