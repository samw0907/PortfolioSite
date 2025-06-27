// routes/strava.js
import express from 'express'
import axios from 'axios'
import { refreshStravaToken } from '../utils/stravaAuth.js'

const router = express.Router()

function formatStats(stats) {
  const format = (obj) => ({
    count: obj.count,
    distance_km: +(obj.distance / 1000).toFixed(1),
    moving_time_hr: +(obj.moving_time / 3600).toFixed(1),
    elevation_gain_m: obj.elevation_gain
  })

  return {
    all_time: {
      run: format(stats.all_run_totals),
      ride: format(stats.all_ride_totals),
      swim: format(stats.all_swim_totals),
    },
    ytd: {
      run: format(stats.ytd_run_totals),
      ride: format(stats.ytd_ride_totals),
      swim: format(stats.ytd_swim_totals),
    },
    recent: {
      run: format(stats.recent_run_totals),
      ride: format(stats.recent_ride_totals),
      swim: format(stats.recent_swim_totals),
    }
  }
}

router.get('/stats', async (req, res) => {
  try {
    const accessToken = await refreshStravaToken()

    // Get athlete ID
    const athleteRes = await axios.get('https://www.strava.com/api/v3/athlete', {
      headers: { Authorization: `Bearer ${accessToken}` }
    })

    const athleteId = athleteRes.data.id
    console.log('Fetched athlete ID:', athleteId)

    // Get raw stats
    const statsRes = await axios.get(`https://www.strava.com/api/v3/athletes/${athleteId}/stats`, {
      headers: { Authorization: `Bearer ${accessToken}` }
    })

    const formatted = formatStats(statsRes.data)
    res.json(formatted)
  } catch (error) {
    console.error('Failed to fetch Strava stats:', error.response?.data || error.message)
    res.status(500).json({ error: 'Failed to fetch Strava stats' })
  }
})

export default router
