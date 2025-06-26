import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import HCRD from '../assets/HCRD.png'
import SplitFlapCountdown from '../components/SplitFlapCountdown'

const calculateCountdown = (targetDate: string) => {
  const total = new Date(targetDate).getTime() - new Date().getTime()
  const seconds = Math.floor((total / 1000) % 60)
  const minutes = Math.floor((total / 1000 / 60) % 60)
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24)
  const days = Math.floor(total / (1000 * 60 * 60 * 24))
  return { total, days, hours, minutes, seconds }
}

const PersonalSection = () => {
  const [countdown, setCountdown] = useState(calculateCountdown('2026-08-22T07:00:00'))

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(calculateCountdown('2026-08-22T07:00:00'))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <div className="flex-1 space-y-6">
          <p className="text-lg leading-[1.8] text-gray-700 dark:text-gray-200">
            Outside of work, sport has always been a big part of my life. I represented my schools in football, field hockey, badminton, and cross-country running. In recent years, running has been my main focus and I ran two half-marathons and my first full marathon in 2024.
          </p>
          <p className="text-lg leading-[1.8] text-gray-700 dark:text-gray-300">
            Recently I've been shifting into triathlon, putting in more time on the bike and in the pool. My next big goal is the{' '}
            <a
              href="https://www.ironman.com/races/im703-tallinn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 dark:text-orange-400 underline hover:text-orange-800 dark:hover:text-orange-300"
            >
              Ironman 70.3 Tallinn
            </a>{' '}in August 2026.
          </p>
          <p className="text-lg leading-[1.8] text-gray-700 dark:text-gray-300">
            If you're also a runner or triathlete and interested in my times, you can check out my{' '}
            <a
              href="https://www.strava.com/athletes/38491517"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 dark:text-orange-400 underline hover:text-orange-800 dark:hover:text-orange-300"
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
            Helsinki City Running Day
          </p>
        </motion.div>
      </div>

      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="panel-background dark:!bg-black border-4 border-orange-500 rounded-xl px-6 py-6 text-center font-splitflap tracking-widest">
          <h4 className="text-xl font-bold text-white uppercase mb-4">
            IRONMAN 70.3 TALLINN COUNTDOWN
          </h4>
          <SplitFlapCountdown />
        </div>
      </div>
    </div>
  )
}

export default PersonalSection
