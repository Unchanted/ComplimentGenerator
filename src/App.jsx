import React, { useState } from 'react';
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

  const spinWheel = () => {
    setSpinning(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * compliments.length);
      setCompliment(compliments[randomIndex]);
      setSpinning(false);
    }, 2000);
  };

  return (
    <div className="text-center p-8">
      <motion.div
        className="w-72 h-72 rounded-full bg-conic-gradient m-auto flex justify-center items-center"
        style={{
          backgroundImage: 'conic-gradient(from 0deg, red, yellow, green, blue, purple)',
        }}
        animate={{ rotate: spinning ? 360 : 0 }}
        transition={{ duration: 2, ease: 'easeInOut' }}
      >
        <div
          className="w-4/5 h-4/5 rounded-full bg-white flex justify-center items-center text-lg font-bold text-center p-8"
        >
          {compliment || 'Spin for a compliment!'}
        </div>
      </motion.div>
      <motion.button
        className="mt-4 px-4 py-2 text-lg cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={spinWheel}
        disabled={spinning}
      >
        {spinning ? 'Spinning...' : 'Spin the Wheel'}
      </motion.button>
    </div>
  );
};

export default SpinningWheel;
