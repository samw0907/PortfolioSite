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
  ytd: 'Year to Date',
  recent: 'Last 4 Weeks',
}

export default function StravaStats() {
  const [stats, setStats] = useState<StravaData | null>(null)
  const [activeTab, setActiveTab] = useState<Period>('ytd')

  useEffect(() => {
    fetchStravaStats().then(data => setStats(data))
  }, [])

  if (!stats) return <p className="text-center text-gray-500 dark:text-gray-400">Loading Strava stats...</p>

  const data = stats[activeTab]

  return (
    <div className="w-full max-w-3xl mx-auto p-6 rounded-lg ring-1 ring-gray-300 dark:ring-gray-700 bg-gray-50 dark:bg-gray-950 shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-6 text-black dark:text-white">
        Strava Stats ({periodLabels[activeTab]})
      </h2>

      {/* Tab buttons */}
      <div className="flex justify-center gap-4 mb-6">
        {(['ytd', 'recent'] as Period[]).map((p) => (
          <button
            key={p}
            onClick={() => setActiveTab(p)}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors duration-200
              ${
                activeTab === p
                  ? 'bg-blue-600 text-white shadow'
                  : 'bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700'
              }`}
          >
            {periodLabels[p]}
          </button>
        ))}
      </div>

      {/* Stats panel */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-center border-collapse">
          <thead className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
            <tr>
              <th className="py-2 px-4 text-left">Metric</th>
              <th>🏃 Run</th>
              <th>🚴 Ride</th>
              <th>🏊 Swim</th>
            </tr>
          </thead>
          <tbody className="text-gray-800 dark:text-gray-100">
            <tr className="even:bg-gray-50 dark:even:bg-gray-900">
              <td className="py-2 px-4 text-left font-medium">Activities</td>
              <td>{data.run.count}</td>
              <td>{data.ride.count}</td>
              <td>{data.swim.count}</td>
            </tr>
            <tr className="even:bg-gray-50 dark:even:bg-gray-900">
              <td className="py-2 px-4 text-left font-medium">Distance</td>
              <td>{data.run.distance_km} km</td>
              <td>{data.ride.distance_km} km</td>
              <td>{data.swim.distance_km} km</td>
            </tr>
            <tr className="even:bg-gray-50 dark:even:bg-gray-900">
              <td className="py-2 px-4 text-left font-medium">Time</td>
              <td>{data.run.moving_time_hr} hr</td>
              <td>{data.ride.moving_time_hr} hr</td>
              <td>{data.swim.moving_time_hr} hr</td>
            </tr>
            <tr className="even:bg-gray-50 dark:even:bg-gray-900">
              <td className="py-2 px-4 text-left font-medium">Elevation Gain</td>
              <td>{data.run.elevation_gain_m} m</td>
              <td>{data.ride.elevation_gain_m} m</td>
              <td>—</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
