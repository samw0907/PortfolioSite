import { useEffect } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';

interface AnimatedParagraphProps {
  children: React.ReactNode;
  delay?: number;
  onLastComplete?: () => void;
}

const AnimatedParagraph: React.FC<AnimatedParagraphProps> = ({
  children,
  delay = 0,
  onLastComplete,
}) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start('visible').then(() => {
      if (onLastComplete) {
        setTimeout(onLastComplete, 600); // match animation duration
      }
    });
  }, [controls, onLastComplete]);

  const variants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay,
      },
    },
  };

  return (
    <motion.p
      initial="hidden"
      animate={controls}
      variants={variants}
      className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300"
    >
      {children}
    </motion.p>
  );
};

export default AnimatedParagraph;
