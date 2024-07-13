import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useState } from 'react';
import { compliments } from '../../compliments'; // Adjust the path as needed

export const TypewriterEffect = ({ className, cursorClassName }) => {
  const [selectedCompliment, setSelectedCompliment] = useState('');

  useEffect(() => {
    try {
      const randomIndex = Math.floor(Math.random() * compliments.length);
      setSelectedCompliment(compliments[randomIndex]);
    } catch (error) {
      console.error('Error selecting compliment:', error);
      setSelectedCompliment('You are awesome!');
    }
  }, []);

  const wordsArray = selectedCompliment.split(' ');

  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        transition: { duration: 0.3, delayChildren: 0.3, staggerChildren: 0.1 },
      });
    } else {
      controls.start({ opacity: 0 });
    }
  }, [inView, controls]);

  return (
    <div
      ref={ref}
      className={`text-white font-bold text-center ${className}`}
      style={{ display: 'inline-block' }}
    >
      {wordsArray.map((char, index) => (
        <motion.span
          key={`char-${index}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className={`inline-block ${className}`}
        >
          {char}&nbsp;
        </motion.span>
      ))}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
        className={`inline-block rounded-sm w-4 h-4 bg-blue-500 ${cursorClassName}`}
      ></motion.span>
    </div>
  );
};
