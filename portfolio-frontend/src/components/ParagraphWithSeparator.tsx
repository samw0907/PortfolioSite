import { useEffect } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';

interface ParagraphWithSeparatorProps {
  children: React.ReactNode;
  isLast?: boolean;
  delay?: number;
  onLastComplete?: () => void;
}

const lineVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (customDelay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: customDelay },
  }),
};

const ParagraphWithSeparator: React.FC<ParagraphWithSeparatorProps> = ({
  children,
  isLast = false,
  delay = 0,
  onLastComplete,
}) => {
  const controls = useAnimation();

  useEffect(() => {
    const totalDelay = delay + 0.6; // match paragraph + animation duration
    controls.start('visible').then(() => {
      if (onLastComplete) {
        setTimeout(() => onLastComplete(), totalDelay * 1000);
      }
    });
  }, [controls, onLastComplete, delay]);

  return (
    <div className="flex flex-col items-center w-full px-2 sm:px-4">
      {/* Paragraph */}
      <div className="w-full mb-6 sm:mb-8">{children}</div>

      {/* Separator */}
      {!isLast && (
        <motion.div
          custom={delay + 0.6}
          initial="hidden"
          animate={controls}
          variants={lineVariants}
          className="w-1/2 sm:w-1/3 h-[2px] mb-6 sm:mb-8"
          style={{
            backgroundImage: 'linear-gradient(to right, transparent, #14b8a6, transparent)',
          }}
        />
      )}
    </div>
  );
};

export default ParagraphWithSeparator;
