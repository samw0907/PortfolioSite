import { useState, useEffect, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import AnimatedHeading from '../components/AnimatedHeading'
import Triswift1L from '../assets/Triswift1L.png'
import Triswift1D from '../assets/Triswift1D.png'
import Triswift1 from '../assets/Triswift1.png'
import Triswift2 from '../assets/Triswift2.png'
import Triswift3 from '../assets/Triswift3.png'
import Triswift4 from '../assets/Triswift4.png'

const triswiftGalleryImages = [Triswift1, Triswift2, Triswift3, Triswift4]

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const Projects = () => {
  const [headingDone, setHeadingDone] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [galleryOpen, setGalleryOpen] = useState(false)
  const [galleryIndex, setGalleryIndex] = useState(0)

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

useEffect(() => {
  const navbar = document.getElementById('main-navbar')
  if (navbar) {
    navbar.style.display = galleryOpen ? 'none' : ''
  }

  document.body.style.overflow = galleryOpen ? 'hidden' : ''

  return () => {
    if (navbar) navbar.style.display = ''
    document.body.style.overflow = ''
  }
}, [galleryOpen])


  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!galleryOpen) return
      if (e.key === 'ArrowRight') {
        setGalleryIndex((prev) => (prev + 1) % triswiftGalleryImages.length)
      } else if (e.key === 'ArrowLeft') {
        setGalleryIndex((prev) => (prev - 1 + triswiftGalleryImages.length) % triswiftGalleryImages.length)
      } else if (e.key === 'Escape') {
        setGalleryOpen(false)
      }
    },
    [galleryOpen]
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  const triswiftThumb = isDarkMode ? Triswift1D : Triswift1L

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

      <AnimatePresence>
        {headingDone && (
          <motion.div
            key="projects-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            {/* TriSwift Banner */}
            <motion.div
              className="flex flex-col md:flex-row items-center gap-8 rounded-xl bg-teal-100 dark:bg-teal-900 p-8 shadow-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariants}
            >
              <div className="flex-1 space-y-4">
                <h3 className="text-2xl font-semibold text-teal-600 dark:text-teal-400">TriSwift</h3>
                <p className="text-gray-700 dark:text-gray-200">
                  An activity tracking app built specifically for triathletes.
                </p>
                <p>
                  TriSwift allows users to log sessions, either for single sports or multi-sport sessions including transitions.
                </p>

                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200">Tech Stack:</h4>
                  <p className="text-gray-700 dark:text-gray-200">
                    React · TypeScript · Node.js · Express · PostgreSQL · GraphQL · REST API · Docker · Fly.io · GitHub Actions (CI/CD)
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200">Features:</h4>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 space-y-1">
                    <li>Log and edit swim, bike, run sessions.</li>
                    <li>Log Multi-sport session support with transition inputs.</li>
                    <li>Automatically generated top 3 Personal Bests for a range of event distances.</li>
                    <li>Pace Calculator feature.</li>
                    <li>Total distance tracking, displayed with line graphs.</li>
                    <li>CI/CD pipeline with Playwright tests and deployment to Fly.io.</li>
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-4">
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
                  src={triswiftThumb}
                  alt="TriSwift project preview"
                  className="w-full h-48 object-cover rounded-lg cursor-pointer"
                  onClick={() => {
                    setGalleryOpen(true)
                    setGalleryIndex(0)
                  }}
                />
                <p className="text-center text-sm text-teal-800 dark:text-gray-400 mt-2">
                  TriSwift Preview
                </p>
              </div>
            </motion.div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mt-12 mb-4">
                Coming Soon...
              </h3>
            </div>

            {/* MineSecure Banner */}
            <motion.div
              className="flex flex-col md:flex-row items-center gap-8 rounded-xl bg-teal-100 dark:bg-teal-900 p-8 shadow-lg mt-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariants}
            >
              <div className="flex-1 space-y-4">
                <h3 className="text-2xl font-semibold text-teal-600 dark:text-teal-400">MineSecure</h3>
                <p className="text-gray-700 dark:text-gray-200">
                  A project management tool designed to track progress of mine stabilisation projects.
                </p>
                <p>
                  Built on my professional background in geo-environmental consulting, MineSecure is aimed at 
                  improving tracking accuracy, minimizing human error, and increasing operational efficiency
                  across remediation projects.
                </p>

                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200">Planned Features:</h4>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 space-y-1">
                    <li>Inputs drill log & grout volume data.</li>
                    <li>Overlay grout grids & site plan layers.</li>
                    <li>Generate cross-sections along any grid line.</li>
                    <li>Automatically calculate stability at each point.</li>
                    <li>Automatically genreate colour-coded dot plots for seam condition & grout volumes.</li>
                    <li>Admin dashboard with separate project files.</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* GALLERY MODAL */}
      {galleryOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
          <div className="relative max-w-[90vw] max-h-[90vh]">
            {/* CLOSE BUTTON */}
            <button
              className="absolute top-3 right-3 text-white text-3xl bg-black/70 hover:bg-black/90 rounded-full w-10 h-10 flex items-center justify-center z-50"
              onClick={() => setGalleryOpen(false)}
              aria-label="Close"
            >
              ×
            </button>

            {/* IMAGE & NAVIGATION */}
            <div className="relative flex items-center justify-center">
              {/* LEFT CHEVRON */}
              <button
                className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-4xl font-bold bg-black/40 hover:bg-black/60 w-10 h-10 rounded-full z-40"
                onClick={() =>
                  setGalleryIndex((galleryIndex - 1 + triswiftGalleryImages.length) % triswiftGalleryImages.length)
                }
              >
                ‹
              </button>

              <img
                src={triswiftGalleryImages[galleryIndex]}
                alt={`TriSwift gallery ${galleryIndex + 1}`}
                className="max-h-[90vh] max-w-full object-contain rounded-lg shadow-lg"
              />

              {/* RIGHT CHEVRON */}
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-4xl font-bold bg-black/40 hover:bg-black/60 w-10 h-10 rounded-full z-40"
                onClick={() =>
                  setGalleryIndex((galleryIndex + 1) % triswiftGalleryImages.length)
                }
              >
                ›
              </button>

              {/* DOTS */}
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-40">
                {triswiftGalleryImages.map((_, idx) => (
                  <span
                    key={idx}
                    className={`w-3 h-3 rounded-full ${
                      idx === galleryIndex ? 'bg-gray-700' : 'bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects
