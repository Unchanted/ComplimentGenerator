import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { compliments } from '../../compliments';

export const TypewriterEffect = ({ className, cursorClassName }) => {
  const [selectedCompliment, setSelectedCompliment] = useState('');
  const ref = useRef(null); 
  const controls = useAnimation();
  const inView = useInView(ref); 

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
      ref={ref} // Attach ref here
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
