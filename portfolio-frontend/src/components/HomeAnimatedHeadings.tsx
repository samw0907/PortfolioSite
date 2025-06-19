import { useEffect, useState } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';

interface HomeAnimatedHeadingsProps {
  text: string;
  onComplete?: () => void;
  className?: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, when: 'beforeChildren' },
  },
};

const letterVariants: Variants = {
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
}) => {
  const controls = useAnimation();
  const [animateClass, setAnimateClass] = useState(false);

  useEffect(() => {
    setAnimateClass(true);
    controls.start('visible').then(() => {
      if (onComplete) onComplete();
    });
  }, [controls, onComplete]);

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
        lineHeight: 0.65,
        letterSpacing: 'normal',
      }}
    >
      {text.split('').map((char, idx) => (
        <motion.span
          key={idx}
          variants={letterVariants}
          style={{
            whiteSpace: 'pre', // preserves spaces
            display: 'inline-block',
          }}
          aria-hidden={char === ' ' ? true : undefined}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default HomeAnimatedHeadings;
