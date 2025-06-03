import { motion } from 'framer-motion'
import HCRD from '../assets/HCRD.png'

const PersonalSection = () => (
  <div className="flex flex-col md:flex-row gap-6 items-start">
    <div className="flex-1 space-y-6">
      <p className="text-2xl text-gray-700 dark:text-gray-300">
        Outside of work, sport has always been a big part of my life.
        I represented my schools in football, field hockey, badminton, and cross-country running.
        These days running has been my main focus, completing two half-marathons and my first full marathon in 2024.
      </p>
      <p className="text-2xl text-gray-700 dark:text-gray-300">
        Recently I've been shifting into triathlon, putting in more time on the bike and in the pool. My next big goal is the Ironman 70.3 Tallinn next year.
      </p>
      <p className="text-2xl text-gray-700 dark:text-gray-300">
        If you're also a runner or triathlete and interested in my times, you can check out my{' '}
        <a
          href="https://www.strava.com/athletes/38491517"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300"
        >
          Strava.
        </a>
      </p>
    </div>
    <motion.div
      className="flex-shrink-0 w-full md:w-60"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <img
        src={HCRD}
        alt="HCRD Site Image"
        className="rounded-lg shadow-lg object-cover w-full h-auto"
      />
      <p className="text-sm text-gray-600 dark:text-gray-400 text-center mt-2">
        Helsinki City Running Day Half-Marathon
      </p>
    </motion.div>
  </div>
)

export default PersonalSection
