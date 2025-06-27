import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()

export const refreshStravaToken = async () => {
  try {
    const response = await axios.post('https://www.strava.com/api/v3/oauth/token', null, {
      params: {
        client_id: process.env.STRAVA_CLIENT_ID,
        client_secret: process.env.STRAVA_CLIENT_SECRET,
        grant_type: 'refresh_token',
        refresh_token: process.env.STRAVA_REFRESH_TOKEN,
      },
    })

    const { access_token, expires_at } = response.data

    // Optionally: Save the new token + expiry somewhere secure or log it
    console.log('Refreshed Strava Access Token:', access_token)

    return { access_token, expires_at }
  } catch (error) {
    console.error('Error refreshing Strava token:', error)
    throw error
  }
}
