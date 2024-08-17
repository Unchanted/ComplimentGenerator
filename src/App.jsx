import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { TypewriterEffect } from './components/ui/typewriter-effects';
import { BackgroundBeams } from './components/ui/background-beams';

const SpinningWheel = () => {
  const [spinning, setSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const buttonRef = useRef(null);

  const spinWheel = () => {
    setSpinning(true);
    const newRotation = rotation + 1440 + Math.random() * 360;
    setRotation(newRotation);

    setTimeout(() => {
      setSpinning(false);
      setRotation(newRotation % 360);
    }, 3000);
  };

  useEffect(() => {
    if (!spinning) {
      setRotation(rotation % 360);
    }
  }, [spinning, rotation]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-950 p-4 relative">
      <div className="relative w-[32rem] h-[32rem] z-0">
        <div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500"
          style={{
            transform: `rotate(${rotation}deg)`,
            transition: spinning
              ? 'transform 3s cubic-bezier(0.25, 0.1, 0.25, 1)'
              : 'none',
          }}
        ></div>
        <div className="absolute inset-12 bg-neutral-800 rounded-full flex items-center justify-center">
          {!spinning && <TypewriterEffect />}
          {spinning && (
            <p className="text-center text-2xl font-bold text-white">Spinning...</p>
          )}
        </div>
      </div>
      <motion.button
        ref={buttonRef}
        className="mt-16 px-10 py-5 bg-blue-600 text-white text-xl font-semibold rounded-full shadow-lg z-10"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={spinWheel}
        disabled={spinning}
      >
        {spinning ? 'Spinning...' : 'Spin the Wheel'}
      </motion.button>
      <BackgroundBeams />
    </div>
  );
};

export default SpinningWheel;
