import { useEffect } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimatedParagraphProps {
  children: React.ReactNode;
  delay?: number;
  onLastComplete?: () => void;
}

const AnimatedParagraph: React.FC<AnimatedParagraphProps> = ({ children, delay = 0, onLastComplete }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    let fallback: NodeJS.Timeout;

    if (inView) {
      controls.start('visible').then(() => {
        // Allow animation to visibly finish, then call onLastComplete
        fallback = setTimeout(() => {
          if (onLastComplete) onLastComplete();
        }, 600); // match animation duration
      });
    }

    return () => clearTimeout(fallback);
  }, [controls, inView, onLastComplete]);

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
      ref={ref}
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
