import { motion } from 'framer-motion';

const HomeTechStack = () => {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.6, y: 200 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false }}
      className="relative font-josefin px-6 py-24 bg-gray-100 dark:bg-[#0b1120] text-gray-800 dark:text-gray-100 overflow-hidden"
    >
      {/* Animated gradient divider at top */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-transparent to-gray-100 dark:to-[#0b1120] z-0"
      />

      <div className="relative z-10 max-w-4xl mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-4 text-teal-600 dark:text-teal-400">
            My Tech Stack
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            Here's a breakdown of the languages, frameworks, tools, and platforms I use in my development workflow.
          </p>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-teal-500">Languages & Platforms</h3>
            <p>JavaScript, TypeScript, Node.js, HTML, CSS, SQL, Java</p>

            <h3 className="text-2xl font-semibold text-teal-500">Frameworks & Libraries</h3>
            <p>React, Redux, Express, Apollo Client, Apollo Server, Sequelize, Vite</p>

            <h3 className="text-2xl font-semibold text-teal-500">Tools & DevOps</h3>
            <p>Docker, GitHub Actions, Fly, Postman, ESLint</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-teal-500">Databases</h3>
            <p>PostgreSQL, MongoDB</p>

            <h3 className="text-2xl font-semibold text-teal-500">Testing</h3>
            <p>Vitest, Jest, Playwright</p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HomeTechStack;
