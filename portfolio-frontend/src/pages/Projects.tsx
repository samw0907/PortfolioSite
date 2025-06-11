import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import AnimatedHeading from '../components/AnimatedHeading'
import Triswift1L from '../assets/TriSwift1L.png'
import Triswift1D from '../assets/TriSwift1D.png'

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

const Projects = () => {
  const [headingDone, setHeadingDone] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Sync with system or user-selected theme
useEffect(() => {
  const checkDarkClass = () => {
    setIsDarkMode(document.documentElement.classList.contains('dark'))
  }

  checkDarkClass() // initial check

  const observer = new MutationObserver(() => {
    checkDarkClass()
  })

  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class'],
  })

  return () => observer.disconnect()
}, [])

  return (
    <section className="font-josefin space-y-12 max-w-5xl mx-auto px-4 pt-10 lg:pt-24">
      <AnimatePresence>
        <AnimatedHeading
          activeIndex={0}
          onAnimationComplete={() => setHeadingDone(true)}
          key="projects-heading"
        >
          Projects
        </AnimatedHeading>
      </AnimatePresence>

      <AnimatePresence>
        {headingDone && (
          <motion.div
            key="projects-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            {/* TriSwift Banner */}
            <motion.div
              className="flex flex-col md:flex-row items-center gap-8 rounded-xl bg-teal-100 dark:bg-teal-900 p-8 shadow-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariants}
            >
              <ul
                className="flex-1 list-disc list-inside space-y-3 text-lg text-teal-900 dark:text-gray-300"
                style={{ paddingLeft: 0 }}
              >
                <li><strong>TriSwift</strong> is an activity tracking app built for triathletes.</li>
                <li>Supports both single-sport and multi-sport sessions with transitions.</li>
                <li>Automatically generates top 3 personal bests for key distances.</li>
                <li>Includes pace calculator and distance tracking with graphs.</li>
                <li>Built with full-stack technologies and deployed via CI/CD to Fly.io.</li>
                <li>
                  <a
                    href="https://github.com/samw0907/TriSwift"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-600 dark:text-teal-300 underline"
                  >
                    🔗 View GitHub Repo
                  </a>
                  {' · '}
                  <a
                    href="https://triswift-frontend.fly.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-600 dark:text-teal-300 underline"
                  >
                    🚀 Live Demo
                  </a>
                </li>
              </ul>

              <div className="flex-shrink-0 max-w-xs w-full rounded-lg overflow-hidden">
                <img
                  src={isDarkMode ? Triswift1D : Triswift1L}
                  alt="TriSwift project preview"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <p className="text-center text-sm text-teal-800 dark:text-gray-400 mt-2">
                  TriSwift Preview
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects
