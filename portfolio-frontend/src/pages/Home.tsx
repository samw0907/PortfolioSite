import { motion } from 'framer-motion';
import profileImage from '../assets/profileImage.png';

const Home = () => (
  <section className="flex flex-col items-center justify-center space-y-8 text-center">
    {/* Profile Image + Name */}
    <motion.div
      className="flex flex-col items-center space-y-3"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <img
        src={profileImage}
        alt="Profile Image"
        className="w-28 h-28 rounded-full shadow-lg object-cover"
      />
      <h1 className="text-5xl font-extrabold">Sam Williamson</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300">
        Full Stack Developer
      </p>
    </motion.div>

    {/* Tech Stack Icons */}
    <motion.div
      className="flex flex-wrap justify-center gap-4 mt-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.6 }}
    >
      <img
        src="https://skillicons.dev/icons?i=js,react,nodejs,ts,postgres,docker,graphql"
        alt="Tech stack"
      />
    </motion.div>

    {/* CTA Button */}
    <motion.a
      href="/projects"
      className="inline-block mt-8 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      initial={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
    >
      View My Work
    </motion.a>
  </section>
);

export default Home;
