import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect } from 'react';

export const TypewriterEffect = ({ words, className, cursorClassName }) => {
  if (!words || words.length === 0) {
    return null; // Return null if words are not provided
  }

  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(' '),
  }));

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
      {wordsArray.map((word, idx) => (
        <motion.span key={`word-${idx}`} variants={{}}>
          {word.text.map((char, index) => (
            <motion.span
              key={`char-${index}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`inline-block ${word.className}`}
            >
              {char}&nbsp;
            </motion.span>
          ))}
          &nbsp;
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
