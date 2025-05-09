import { useState } from 'react';
import { motion } from 'framer-motion';
import HCRD from '../assets/HCRD.png';
import Soil from '../assets/Soil.png';
import Drilling from '../assets/Drilling.png';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const geoImages = [
  {
    src: Drilling,
    alt: 'Drilling Image',
    caption: 'Drilling & Grouting',
  },
  {
    src: Soil,
    alt: 'Soil Image',
    caption: 'Environmental Testing & Remediation',
  },
];

const About = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % geoImages.length);
  };

  const prevImage = () => {
    setCurrentImage((currentImage - 1 + geoImages.length) % geoImages.length);
  };

  const openFullscreen = () => setFullscreen(true);
  const closeFullscreen = () => setFullscreen(false);

  return (
    <section className="font-josefin space-y-6">
      <h2 className="text-3xl font-bold">Full Stack Experience</h2>

      <p className="text-gray-700 dark:text-gray-300">
        I'm a self-taught full-stack developer, eager to continue expanding my skills!
      </p>

      <p className="text-gray-700 dark:text-gray-300">
        I completed the{' '}
        <a
          href="https://fullstackopen.com/en/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300"
        >
          Helsinki Full Stack Open
        </a>{' '}
        program and enjoy solving real-world problems with clean, maintainable code.
      </p>

      <h2 className="text-3xl font-bold">Geo-Environmental Consulting</h2>

      <p className="text-gray-700 dark:text-gray-300">
        My background is in geo-environmental consulting, where I developed a strong foundation in problem-solving, communication, and attention to detail — all of which transfer well to software development.
      </p>

      <motion.div
        className="flex flex-col items-center space-y-3"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div
          className="relative w-60 h-40 sm:h-48 md:h-52 rounded-lg overflow-hidden shadow-lg cursor-pointer"
          onClick={openFullscreen}
        >
          <img
            src={geoImages[currentImage].src}
            alt={geoImages[currentImage].alt}
            className="w-full h-full object-cover transition-all duration-300"
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute top-1/2 left-2 -translate-y-1/2 bg-white dark:bg-gray-800 bg-opacity-60 rounded-full p-1 hover:bg-opacity-90 transition"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-white dark:bg-gray-800 bg-opacity-60 rounded-full p-1 hover:bg-opacity-90 transition"
          >
            <ChevronRight size={20} />
          </button>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 max-w-md text-center">
          {geoImages[currentImage].caption}
        </p>
      </motion.div>

      {/* Fullscreen Modal */}
      {fullscreen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
          <button
            onClick={closeFullscreen}
            className="absolute top-4 right-4 text-white hover:text-gray-300"
          >
            <X size={30} />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300"
          >
            <ChevronLeft size={40} />
          </button>

          <img
            src={geoImages[currentImage].src}
            alt={geoImages[currentImage].alt}
            className="max-w-full max-h-[80vh] rounded-lg shadow-lg"
          />

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300"
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}

      <p className="text-gray-700 dark:text-gray-300">
        I first discovered my interest in problem-solving and automation during a mine stability project in my consulting career. At the time, our team was using a manual system to track drilling and treatment data — color-coded stickers on printed sheets for hundreds or even thousands of data points. It was time-consuming, error-prone, and inefficient.
        <br /><br />
        I decided to build an Excel spreadsheet that automated the process: by entering raw data from drilling contractors, the sheet would perform the necessary stability and treatment calculations automatically and create several useful colour-coded tables relating to the drilling grid on-site. This drastically reduced the time spent on manual input and improved both data reliability and quality control.
        <br /><br />
        While it wasn’t “real coding” in the traditional sense, the experience sparked a genuine interest in automation, logic, and building tools to solve real problems — and planted the seed for my transition into software development.
      </p>

      <h2 className="text-3xl font-bold">Personal</h2>

      <p className="text-gray-700 dark:text-gray-300">
        Outside of work, sport has always been a big part of my life. I represented my school in football, field hockey, badminton, and cross-country running. More recently, I’ve focused on endurance events — in 2024, I completed two half-marathons and my first full marathon.
      </p>

      <motion.div
        className="flex flex-col items-center space-y-3"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src={HCRD}
          alt="HCRD Site Image"
          className="w-60 h-auto rounded-lg shadow-lg object-cover"
        />
        <p className="text-sm text-gray-600 dark:text-gray-400 max-w-md text-center">
          Helsinki City Running Day Half-Marathon
        </p>
      </motion.div>

      <p className="text-gray-700 dark:text-gray-300">
        This year, I’m shifting focus to triathlon and currently training to improve my swimming and cycling, with the goal of completing my first Ironman 70.3 next year.
      </p>
    </section>
  );
};

export default About;
