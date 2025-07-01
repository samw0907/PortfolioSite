import { motion } from 'framer-motion';

const stackItems = [
  { title: 'Languages & Platforms', content: 'JavaScript, TypeScript, Node.js, HTML, CSS, SQL, Java, Tailwind' },
  { title: 'Frameworks & Libraries', content: 'React, Redux, Express, Apollo Client, Apollo Server, Sequelize, Vite' },
  { title: 'Tools & DevOps', content: 'Docker, GitHub Actions, Fly, Postman, ESLint' },
  { title: 'Databases', content: 'PostgreSQL, MongoDB' },
  { title: 'Testing', content: 'Vitest, Jest, Playwright' },
];

const HomeTechStack = () => {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.95, y: 60 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.01 }}
      className="w-full font-josefin py-10 sm:py-14 bg-gray-100 dark:bg-[#0b1120] text-gray-800 dark:text-gray-100"
    >
      {/* Optional animated gradient top divider */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="w-full h-12 bg-gradient-to-b from-transparent to-gray-100 dark:to-[#0b1120]"
      />

      <div className="max-w-4xl mx-auto space-y-12 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-wide text-gray-900 dark:text-white mb-12">
            My Tech Stack
          </h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Here's a breakdown of the languages, frameworks, tools, and platforms I use in my development workflow.
          </p>
        </motion.div>

        <div className="grid gap-y-10 gap-x-6 sm:grid-cols-2 sm:gap-y-12">
          {stackItems.map(({ title, content }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-teal-500">{title}</h3>
              <p className="text-sm sm:text-base">{content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default HomeTechStack;
