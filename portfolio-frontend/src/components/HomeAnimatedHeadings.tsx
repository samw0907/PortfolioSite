import { useEffect, useState } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';

interface HomeAnimatedHeadingsProps {
  text: string;
  onComplete?: () => void;
  className?: string;
  wordGap?: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, when: 'beforeChildren' },
  },
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ease: 'easeOut', duration: 0.5 },
  },
};

const HomeAnimatedHeadings: React.FC<HomeAnimatedHeadingsProps> = ({
  text,
  onComplete,
  className,
  wordGap = '0.5rem',
}) => {
  const controls = useAnimation();
  const [animateClass, setAnimateClass] = useState(false);

  useEffect(() => {
    setAnimateClass(true);
    controls.start('visible').then(() => {
      if (onComplete) onComplete();
    });
  }, [controls, onComplete]);

  const words = text.split(' ');

  return (
    <motion.div
      className={`${className} invisibleUntilAnimate ${animateClass ? 'animate' : ''}`}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: wordGap,
        lineHeight: 0.65, // ✅ this now directly affects the heading container
      }}
    >
      {words.map((word, wordIdx) => (
        <motion.span
          key={wordIdx}
          variants={wordVariants}
          style={{
            whiteSpace: 'nowrap',
            display: 'inline-block',
          }}
        >
          {word.split('').map((char, charIdx) => (
            <span
              key={charIdx}
              style={{ display: 'inline-block' }}
              aria-hidden={char === ' ' ? true : undefined}
            >
              {char}
            </span>
          ))}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default HomeAnimatedHeadings;
