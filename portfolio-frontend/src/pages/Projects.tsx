import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import AnimatedHeading from '../components/AnimatedHeading'
import Triswift1L from '../assets/TriSwift1L.png'
import Triswift1D from '../assets/TriSwift1D.png'

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const Projects = () => {
  const [headingDone, setHeadingDone] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const checkDarkClass = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'))
    }

    checkDarkClass()

    const observer = new MutationObserver(() => {
      checkDarkClass()
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })

    return () => observer.disconnect()
  }, [])

  const triswiftImage = isDarkMode ? Triswift1D : Triswift1L

  return (
    <section className="font-josefin space-y-8 max-w-4xl mx-auto px-4 pt-10 lg:pt-24">
      <AnimatePresence>
        <AnimatedHeading
          activeIndex={0}
          onAnimationComplete={() => setHeadingDone(true)}
          key="projects-heading"
        >
          Projects
        </AnimatedHeading>
      </AnimatePresence>

      {/* Only show content after heading animation completes */}
      <AnimatePresence>
        {headingDone && (
          <motion.div
            key="projects-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="flex flex-col md:flex-row items-center gap-8 rounded-xl bg-teal-100 dark:bg-teal-900 p-8 shadow-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariants}
            >
              <div className="flex-1 space-y-4">
                <h3 className="text-2xl font-semibold text-teal-600 dark:text-teal-400">TriSwift</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  An activity tracking app built specifically for triathletes.
                </p>
                <p>
                  TriSwift allows users to log sessions, either for single sports or multi-sport sessions including transitions.
                </p>

                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200">Tech Stack:</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    React · TypeScript · Node.js · Express · PostgreSQL · GraphQL · REST API · Docker · Fly.io · GitHub Actions (CI/CD)
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200">Features:</h4>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                    <li>Log and edit swim, bike, run sessions</li>
                    <li>Log Multi-sport session support with transition inputs</li>
                    <li>Automaticlly generated top 3 Personal Bests for a range of event distances</li>
                    <li>Pace Calculator feature</li>
                    <li>Total distance tracking, displayed with line graphs</li>
                    <li>CI/CD pipeline with Playwright tests and deployment to Fly.io</li>
                  </ul>
                </div>

                <div className="flex gap-4 mt-4">
                  <a
                    href="https://github.com/samw0907/TriSwift"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-600 hover:underline dark:text-teal-300"
                  >
                    🔗 View GitHub Repo
                  </a>
                  <a
                    href="https://triswift-frontend.fly.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-600 hover:underline dark:text-teal-300"
                  >
                    🚀 Live Demo
                  </a>
                </div>
              </div>

              <div className="flex-shrink-0 max-w-xs w-full rounded-lg overflow-hidden">
                <img
                  src={triswiftImage}
                  alt="TriSwift project preview"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <p className="text-center text-sm text-teal-800 dark:text-gray-400 mt-2">
                  TriSwift Preview
                </p>
              </div>
            </motion.div>

            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Coming Soon...</h3>
            {/* Coming Soon Project */}
            <article className="border rounded shadow p-6 space-y-4 bg-white dark:bg-gray-800">
              <h3 className="text-2xl font-semibold text-teal-600 dark:text-teal-400">MineSecure</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Utilizing my specialist knowledge of stability assessments of abandoned mines and remediation through high-pressure grouting, I have begun framing out a concept to better automate the tracking of such projects, reducing human error and increasing productivity.
              </p>
            </article>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects
