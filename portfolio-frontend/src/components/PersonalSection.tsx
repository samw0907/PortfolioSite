import { useEffect } from 'react'
import SplitFlapCountdown from '../components/SplitFlapCountdown'
import StravaStats from '../components/StravaStats'

const PersonalSection = () => {
  useEffect(() => {
    const timer = setInterval(() => {
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
            </a>{' '}
            in August 2026.
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
      </div>

      <StravaStats />

      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8 px-2 sm:px-0">
        <div className="panel-background dark:!bg-black border-4 border-orange-500 rounded-xl px-6 py-6 text-center font-splitflap tracking-widest">
          <h4 className="text-xxl font-bold text-black dark:text-white uppercase mb-4">
            IRONMAN 70.3 TALLINN COUNTDOWN
          </h4>
          <SplitFlapCountdown />
        </div>
      </div>
    </div>
  )
}

export default PersonalSection
