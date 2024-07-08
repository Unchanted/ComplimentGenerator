import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const compliments = [
  "You're amazing!",
  "You light up the room!",
  "Your smile is contagious!",
  "You're incredibly talented!",
  "You make a difference!",
  "You're a true inspiration!",
  "You're one of a kind!",
  "You're a ray of sunshine!",
  "You bring out the best in others!",
  "Your positivity is refreshing!",
];

const SpinningWheel = () => {
  const [spinning, setSpinning] = useState(false);
  const [compliment, setCompliment] = useState('');
  const [rotation, setRotation] = useState(0);

  const spinWheel = () => {
    setSpinning(true);
    const newRotation = rotation + 1440 + Math.random() * 360;
    setRotation(newRotation);

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * compliments.length);
      setCompliment(compliments[randomIndex]);
      setSpinning(false);
    }, 3000);
  };

  useEffect(() => {
    if (!spinning) {
      setRotation(rotation % 360);
    }
  }, [spinning, rotation]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="relative w-[32rem] h-[32rem]">
        <div 
          className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500"
          style={{
            transform: `rotate(${rotation}deg)`,
            transition: spinning ? 'transform 3s cubic-bezier(0.25, 0.1, 0.25, 1)' : 'none'
          }}
        ></div>
        <div className="absolute inset-12 bg-white rounded-full flex items-center justify-center">
          <p className="text-center text-2xl font-bold p-8 max-w-[80%]">
            {compliment || 'Spin for a compliment!'}
          </p>
        </div>
      </div>
      <motion.button
        className="mt-16 px-10 py-5 bg-blue-600 text-white text-xl font-semibold rounded-full shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={spinWheel}
        disabled={spinning}
      >
        {spinning ? 'Spinning...' : 'Spin the Wheel'}
      </motion.button>
    </div>
  );
};

export default SpinningWheel;
