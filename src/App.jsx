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
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <motion.div
        style={{
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'conic-gradient(from 0deg, red, yellow, green, blue, purple)',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        animate={{ rotate: spinning ? 360 : 0 }}
        transition={{ duration: 2, ease: 'easeInOut' }}
      >
        <div
          style={{
            width: '80%',
            height: '80%',
            borderRadius: '50%',
            background: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '18px',
            fontWeight: 'bold',
            textAlign: 'center',
            padding: '20px',
          }}
        >
          {compliment || 'Spin for a compliment!'}
        </div>
      </motion.div>
      <motion.button
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
        }}
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
