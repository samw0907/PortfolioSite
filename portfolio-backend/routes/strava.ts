import express from 'express'
import axios from 'axios'
import { refreshStravaToken } from '../utils/stravaAuth'

const router = express.Router()

router.get('/stats', async (req, res) => {
  try {
    const { access_token } = await refreshStravaToken()

    const statsRes = await axios.get('https://www.strava.com/api/v3/athletes/me/stats', {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })

    res.json(statsRes.data)
  } catch (err) {
    console.error('Failed to fetch Strava stats:', err)
    res.status(500).json({ error: 'Strava API error' })
  }
})

export default router
