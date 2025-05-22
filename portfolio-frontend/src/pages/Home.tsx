import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import BWPhotoEdit from '../assets/BWPhotoEdit.png';
import Loader from '../components/Loader';
import ParticlesBackground from '../components/ParticlesBackground.tsx';
import HomeTechStack from '../components/HomeTechStack.tsx';

const icons = [
  'github', 'express', 'react', 'js', 'ts', 'nodejs', 'docker',
   'graphql', 'mongo', 'postgres', 'vite', 'jest', 'postman'
];

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <Loader />;

  return (
    <div>
    <section className="font-josefin relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-12 bg-white dark:bg-[#0f172a] overflow-hidden">
      <ParticlesBackground />

      <motion.div
        className="relative z-10 flex flex-col items-center space-y-6 max-w-3xl w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Profile Image Block */}
        <div className="p-2 rounded-xl bg-white/70 dark:bg-[#0f172a]/80 backdrop-blur-md">
          <img
            src={BWPhotoEdit}
            alt="Profile"
            className="w-32 h-32 sm:w-36 sm:h-36 rounded-full border-4 border-teal-600 shadow-xl object-cover"
          />
        </div>

        {/* Name & Role */}
        <div className="px-6 py-4 rounded-xl bg-white/70 dark:bg-[#0f172a]/80 backdrop-blur-md">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-josefin font-light tracking-wide text-gray-900 dark:text-white">
            SAM WILLIAMSON
          </h1>
          <p className="text-lg sm:text-xl text-teal-600 dark:text-teal-400 font-josefin font-light tracking-wide font-medium mt-2">
            FULL STACK DEVELOPER
          </p>
        </div>

        {/* Tech Stack Carousel */}
        <div
          className="w-[336px] sm:w-[384px] overflow-hidden rounded-xl bg-white/70 dark:bg-[#0f172a]/80 backdrop-blur-md px-4 py-2 relative group"
          style={{
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
          }}
        >
          <div className="flex gap-6 animate-scroll-fade group-hover:[animation-play-state:paused]">
            {icons.concat(icons).map((icon, index) => (
              <img
                key={index}
                src={`https://skillicons.dev/icons?i=${icon}`}
                alt={icon}
                className="w-10 h-10 sm:w-12 sm:h-12 opacity-80 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>
        </div>

        {/* What I Do */}
        <div className="px-6 py-6 rounded-xl bg-white/70 dark:bg-[#0f172a]/80 backdrop-blur-md text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-100">
            What I Do
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg mt-2">
            I build web apps that are clean and simple to use.
            I enjoy learning new tools and finding better ways to solve real problems with useful apps.
          </p>
        </div>

        {/* Call to Action Buttons */}
        <motion.div
          className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <a
            href="/projects"
            className="px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg shadow-md transition"
          >
            View My Work
          </a>
          <a
            href="/assets/SamWilliamsonCV.pdf"
            download
            className="px-8 py-3 bg-teal-400 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-white font-semibold rounded-lg shadow-md transition"
          >
            📄 Download CV
          </a>
          <a
            href="https://github.com/samw0907"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-black dark:bg-white hover:bg-gray-900 dark:hover:bg-gray-100 text-white dark:text-black font-semibold rounded-lg shadow-md transition"
          >
             GitHub Profile
          </a>

        </motion.div>
      </motion.div>
    </section>
    <HomeTechStack />
    </div>
  );
};

export default Home;
