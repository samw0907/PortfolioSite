import { motion } from 'framer-motion';

const SplineHint = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.4 }}
      className="relative z-10 w-full font-josefin py-6 sm:py-8 bg-gray-100 dark:bg-[#0b1120] text-center text-gray-800 dark:text-gray-100"
    >
      <p className="text-sm sm:text-base">
        🌀 <span className="text-teal-600 dark:text-teal-400 font-semibold">Click and drag</span> to rotate the 3D object
      </p>
    </motion.section>
  );
};

export default SplineHint;
