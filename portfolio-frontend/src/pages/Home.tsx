import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BWPhotoEdit from '../assets/BWPhotoEdit.png';
import Loader from '../components/Loader';
import ParticlesBackground from '../components/ParticlesBackground.tsx';
import HomeTechStack from '../components/HomeTechStack.tsx';
import HomeAnimatedHeadings from '../components/HomeAnimatedHeadings';
import Spline3D from '../components/Spline3D';
import SplineHint from '../components/SplineHint';

const icons = [
  'github', 'express', 'react', 'js', 'ts', 'nodejs', 'docker',
  'graphql', 'mongo', 'postgres', 'vite', 'jest', 'postman',
];

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showTitle, setShowTitle] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showIcons, setShowIcons] = useState(false);
  const [showWhatIDo, setShowWhatIDo] = useState(false);
  const [showParagraph, setShowParagraph] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showSubtitle) {
      setTimeout(() => setShowIcons(true), 400);
      setTimeout(() => setShowWhatIDo(true), 800);
      setTimeout(() => setShowParagraph(true), 1200);
      setTimeout(() => setShowButtons(true), 1600);
    }
  }, [showSubtitle]);

  if (isLoading) return <Loader />;

  return (
    <div className="relative flex flex-col min-h-screen w-full z-0 overflow-x-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ParticlesBackground />
      </div>

      <div className="relative z-10 flex flex-col items-center w-full">
        <section className="font-josefin min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 py-10 sm:py-12 max-w-[1000px] mx-auto w-full">
          <div className="relative rounded-full w-32 h-32 sm:w-40 sm:h-40 mb-6">
            <div
              className="absolute inset-0 rounded-full bg-white/30 dark:bg-[#0f172a]/30 blur-lg"
              style={{ filter: 'blur(12px)' }}
            />
            <img
              src={BWPhotoEdit}
              alt="Profile"
              className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full border-4 border-teal-600 shadow-xl object-cover mx-auto"
            />
          </div>

          <div className="px-4 sm:px-6 py-4 rounded-xl bg-white/70 dark:bg-[#0f172a]/70 backdrop-blur-md w-full">
            <HomeAnimatedHeadings
              text="SAM WILLIAMSON"
              wordGap="1.5rem"
              className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-light tracking-wide text-gray-900 dark:text-white"
              onComplete={() => setShowTitle(true)}
            />
            <div style={{ minHeight: '2.5rem', position: 'relative' }}>
              {showTitle && (
                <HomeAnimatedHeadings
                  text="FULL STACK DEVELOPER"
                  className="text-base sm:text-lg md:text-xl text-teal-600 dark:text-teal-400 font-light tracking-wide font-medium mt-2 absolute top-3.5 left-0 w-full"
                  onComplete={() => setShowSubtitle(true)}
                />
              )}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={showIcons ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="w-full"
          >
            <div
              className="w-full sm:w-[384px] mx-auto overflow-hidden rounded-xl bg-white/70 dark:bg-[#0f172a]/70 backdrop-blur-md px-4 py-3 relative group mt-6"
              style={{
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
              }}
            >
              <div className="flex gap-4 animate-scroll-fade">
                {icons.concat(icons).map((icon, index) => (
                  <img
                    key={index}
                    src={`https://skillicons.dev/icons?i=${icon}`}
                    alt={icon}
                    className="w-8 h-8 sm:w-10 sm:h-10 opacity-80 hover:opacity-100 transition-opacity"
                  />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={showWhatIDo ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="px-6 sm:px-8 py-6 rounded-xl bg-white/70 dark:bg-[#0f172a]/70 backdrop-blur-md text-center mt-6"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100 leading-snug">
              What I Do
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={showParagraph ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="max-w-xl mx-auto mt-2 px-4 sm:px-0"
          >
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-200 leading-relaxed">
              I build web apps that are clean and simple to use. I enjoy learning new tools and finding better
              ways to solve real problems with useful apps.
            </p>
          </motion.div>

          <motion.div
            className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={showButtons ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <a
              href="/projects"
              className="w-full sm:w-auto text-center px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg shadow-md transition"
            >
              View My Work
            </a>
            <a
              href="/assets/SamWilliamsonCV.pdf"
              download
              className="w-full sm:w-auto text-center px-6 py-3 bg-teal-400 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-white font-semibold rounded-lg shadow-md transition"
            >
              📄 Download CV
            </a>
            <a
              href="https://github.com/samw0907"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center px-6 py-3 bg-black dark:bg-white hover:bg-gray-900 dark:hover:bg-gray-100 text-white dark:text-black font-semibold rounded-lg shadow-md transition"
            >
              GitHub Profile
            </a>
          </motion.div>
        </section>

        <div className="w-full overflow-x-hidden">
          <HomeTechStack />
          <Spline3D />
          <SplineHint />
        </div>
      </div>
    </div>
  );
};

export default Home;
