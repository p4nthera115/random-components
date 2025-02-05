import React, { useState, useEffect } from 'react';

const GoLGlider = () => {
  const [step, setStep] = useState(0);

  // Create a larger grid (5x5) with the glider pattern
  // The pattern will appear to move while staying within bounds
  const gliderStates = [
    [ // Step 0
      [0, 1, 0],
      [0, 0, 1],
      [1, 1, 1],
    ],
    [ // Step 1
      [1, 0, 1],
      [0, 1, 1],
      [0, 1, 0],
    ],
    [ // Step 2
      [0, 0, 1],
      [1, 0, 1],
      [0, 1, 1],
    ],
    [ // Step 3
      [1, 0, 0],
      [0, 1, 1],
      [1, 1, 0],
    ]
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prevStep) => (prevStep + 1) % 4);
    }, 500); // Slightly faster animation

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center border border-black p-1 rounded-lg bg-neutral-100">
      <div className="grid grid-cols-3 gap-0.5">
        {gliderStates[step].map((row, i) => (
          row.map((cell, j) => (
            <div
              key={`${i}-${j}`}
              className={`w-4 h-4 rounded transition-colors duration-150 ${cell ? 'bg-black' : 'bg-transparent'
                }`}
            />
          ))
        ))}
      </div>
    </div>
  );
};

export default GoLGlider;