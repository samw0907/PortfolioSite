import { useEffect, useState } from 'react'
import { fetchStravaStats } from '../utils/fetchStravaStats'

type Sport = 'run' | 'ride' | 'swim'
type Period = 'ytd' | 'recent'

interface SportStats {
  count: number
  distance_km: number
  moving_time_hr: number
  elevation_gain_m: number
}

interface StravaData {
  ytd: Record<Sport, SportStats>
  recent: Record<Sport, SportStats>
}

const periodLabels: Record<Period, string> = {
  ytd: '2025',
  recent: 'Last 4 Weeks',
}

export default function StravaStats() {
  const [stats, setStats] = useState<StravaData | null>(null)
  const [activeTab, setActiveTab] = useState<Period>('ytd')

  useEffect(() => {
    fetchStravaStats().then(data => setStats(data))
  }, [])

  if (!stats) {
    return (
      <p className="text-center text-gray-500 dark:text-gray-400 font-medium tracking-wide font-josefin">
        Loading Strava stats...
      </p>
    )
  }

  const data = stats[activeTab]

  return (
    <div className="relative w-full max-w-4xl mx-auto px-6 py-8 rounded-2xl bg-gray-100 dark:bg-[#0b1120] shadow-xl border-2 border-orange-500 font-josefin">
      <h2 className="text-2xl sm:text-4xl font-light text-center mb-6 text-gray-800 dark:text-white tracking-wide uppercase">
        Strava Stats
      </h2>

      {/* Smaller Strava button */}
      <a
        href="https://www.strava.com/athletes/38491517"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-6 right-6 px-3 py-1.5 rounded-full bg-orange-600 text-white text-xs sm:text-sm font-medium tracking-wide shadow-sm hover:bg-orange-700 dark:hover:bg-orange-500 transition-colors"
      >
        My Strava
      </a>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-6 flex-wrap">
        {(['ytd', 'recent'] as Period[]).map((p) => (
          <button
            key={p}
            onClick={() => setActiveTab(p)}
            className={`px-4 py-2 rounded-md text-sm sm:text-base font-medium tracking-wide transition-all duration-200
              ${
                activeTab === p
                  ? 'bg-orange-600 text-white shadow-md'
                  : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
          >
            {periodLabels[p]}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900">
        <table className="w-full text-base text-center border-collapse table-fixed">
          <thead className="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-200">
            <tr>
              <th className="py-3 px-4 text-left font-semibold">Metric</th>
              <th className="font-semibold min-w-[5ch]">Run</th>
              <th className="font-semibold min-w-[5ch]">Cycle</th>
              <th className="font-semibold min-w-[5ch]">Swim</th>
            </tr>
          </thead>
          <tbody className="text-gray-800 dark:text-gray-100 font-josefin">
            <tr className="even:bg-gray-50 dark:even:bg-gray-800">
              <td className="py-3 px-4 text-left font-medium">Activities</td>
              <td className="min-w-[5ch]">{data.run.count}</td>
              <td className="min-w-[5ch]">{data.ride.count}</td>
              <td className="min-w-[5ch]">{data.swim.count}</td>
            </tr>
            <tr className="even:bg-gray-50 dark:even:bg-gray-800">
              <td className="py-3 px-4 text-left font-medium">Distance</td>
              <td className="min-w-[5ch]">{data.run.distance_km} km</td>
              <td className="min-w-[5ch]">{data.ride.distance_km} km</td>
              <td className="min-w-[5ch]">{data.swim.distance_km} km</td>
            </tr>
            <tr className="even:bg-gray-50 dark:even:bg-gray-800">
              <td className="py-3 px-4 text-left font-medium">Time</td>
              <td className="min-w-[5ch]">{data.run.moving_time_hr} hr</td>
              <td className="min-w-[5ch]">{data.ride.moving_time_hr} hr</td>
              <td className="min-w-[5ch]">{data.swim.moving_time_hr} hr</td>
            </tr>
            <tr className="even:bg-gray-50 dark:even:bg-gray-800">
              <td className="py-3 px-4 text-left font-medium">Elevation Gain</td>
              <td className="min-w-[5ch]">{data.run.elevation_gain_m} m</td>
              <td className="min-w-[5ch]">{data.ride.elevation_gain_m} m</td>
              <td className="min-w-[5ch]">—</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
