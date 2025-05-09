import { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/profileImage.png';
import Particles from '@tsparticles/react';
import { loadAll } from '@tsparticles/all';
import { tsParticles } from '@tsparticles/engine';

const roles = [
  'Full Stack Developer',
  'React & Node Specialist',
  'GraphQL Enthusiast',
  'UI/UX Focused Engineer',
];

const Home = () => {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    loadAll(tsParticles);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const memoizedParticles = useMemo(() => (
    <Particles
      id="tsparticles"
      engine={tsParticles}
      className="absolute inset-0 z-0"
      options={{
        fullScreen: false,
        background: {
          color: { value: 'transparent' },
        },
        particles: {
          number: {
            value: 80,
            density: { enable: true},
          },
          color: { value: '#ddd' },
          shape: { type: 'circle' },
          opacity: {
            value: 0.65,
            animation: {
              enable: true,
              speed: 0.5,
              min: 0.3,
              sync: false,
            },
          },
          size: {
            value: { min: 1, max: 3 },
            animation: {
              enable: true,
              speed: 2,
              min: 1,
              sync: false,
            },
          },
          move: {
            enable: true,
            speed: 0.6,
            outModes: { default: 'out' },
          },
          links: {
            enable: true,
            color: '#ccc',
            distance: 130,
            opacity: 0.6,
            width: 1,
          },
        },
      }}
    />
  ), []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-12 bg-white dark:bg-black overflow-hidden">
      {memoizedParticles}

      <motion.div
        className="relative z-10 flex flex-col items-center space-y-4"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={profileImage}
          alt="Profile"
          className="w-32 h-32 sm:w-36 sm:h-36 rounded-full border-4 border-blue-600 shadow-xl object-cover"
        />
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Sam Williamson
        </h1>
        <p className="text-lg sm:text-xl text-blue-600 dark:text-blue-400 font-medium transition-all">
          {roles[currentRole]}
        </p>
      </motion.div>

      <motion.div
        className="z-10 mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <img
          src="https://skillicons.dev/icons?i=js,ts,react,nodejs,express,postgres,docker,graphql,git"
          alt="Tech stack"
          className="mx-auto"
        />
      </motion.div>

      <motion.div
        className="z-10 mt-12 max-w-3xl text-center space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.7 }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-100">
          What I Do
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg">
          I build clean, performant web apps using modern technologies and best practices. From backend APIs and databases to frontend components and animations — I love creating tools that are elegant, efficient, and easy to use.
        </p>
      </motion.div>

      <motion.div
        className="z-10 mt-10"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <a
          href="/projects"
          className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition"
        >
          View My Work
        </a>
      </motion.div>
    </section>
  );
};

export default Home;
