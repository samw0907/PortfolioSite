import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import BWPhotoEdit from '../assets/BWPhotoEdit.png'
import Loader from '../components/Loader'
import ParticlesBackground from '../components/ParticlesBackground.tsx'
import HomeTechStack from '../components/HomeTechStack.tsx'
import HomeAnimatedHeadings from '../components/HomeAnimatedHeadings'
import Spline3D from '../components/Spline3D'
import SplineHint from '../components/SplineHint'

const icons = [
  'github', 'express', 'react', 'js', 'ts', 'nodejs', 'docker',
  'graphql', 'mongo', 'postgres', 'vite', 'jest', 'postman',
]

const Home = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [showTitle, setShowTitle] = useState(false)
  const [showContent, setShowContent] = useState(false)  // New state for content animation

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) return <Loader />

  return (
    <div className="relative flex flex-col min-h-full z-0">
      {/* Particle Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ParticlesBackground />
      </div>

      {/* Page Content */}
      <div className="relative z-10 flex flex-col items-center w-full">
        <section className="font-josefin min-h-screen flex flex-col items-center justify-center text-center px-4 py-12 max-w-[1000px] mx-auto ">
          <div className="relative rounded-full w-40 h-40 mb-6">
            {/* Soft, blurred, subtle background glow */}
            <div
              className="absolute inset-0 rounded-full bg-white/30 dark:bg-[#0f172a]/30 blur-lg"
              style={{ filter: 'blur(12px)' }}
            />

            {/* The profile image */}
            <img
              src={BWPhotoEdit}
              alt="Profile"
              className="relative w-36 h-36 rounded-full border-4 border-teal-600 shadow-xl object-cover mx-auto"
            />
          </div>

          <div className="px-6 py-4 rounded-xl bg-white/70 dark:bg-[#0f172a]/70 backdrop-blur-md w-full">
            <HomeAnimatedHeadings
              text="SAM WILLIAMSON"
              className="text-5xl sm:text-6xl md:text-7xl font-light tracking-wide text-gray-900 dark:text-white"
              onComplete={() => setShowTitle(true)}
            />
            <div style={{ minHeight: '2.5rem', position: 'relative' }}>
              {showTitle && (
                <HomeAnimatedHeadings
                  text="FULL STACK DEVELOPER"
                  className="text-lg sm:text-xl text-teal-600 dark:text-teal-400 font-light tracking-wide font-medium mt-2 absolute top-0 left-0 w-full"
                  onComplete={() => setShowContent(true)}  // Trigger showing content after animation
                />
              )}
            </div>
          </div>

          {/* Animate all content below headings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={showContent ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="w-full"
          >
            <div
              className="w-[336px] sm:w-[384px] mx-auto overflow-hidden rounded-xl bg-white/70 dark:bg-[#0f172a]/70 backdrop-blur-md px-5 py-3 relative group mt-6"
              style={{
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
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

            <div className="px-8 py-7 rounded-xl bg-white/70 dark:bg-[#0f172a]/70 backdrop-blur-md text-center mt-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-100 leading-snug">
                What I Do
              </h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mt-3 leading-relaxed">
                I build web apps that are clean and simple to use.
                I enjoy learning new tools and finding better ways to solve real problems with useful apps.
              </p>
            </div>

            <motion.div
              className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-5"
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

        {/* Tech Stack Section */}
        <div className="max-w-[1000px] mx-auto w-full px-4">
          <HomeTechStack />
        </div>
      </div>

      <Spline3D />
      <SplineHint />
    </div>
  )
}

export default Home
