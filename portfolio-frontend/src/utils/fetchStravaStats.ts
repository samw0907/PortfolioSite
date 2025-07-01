export const fetchStravaStats = async () => {
  const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'

  const baseUrl = isLocal
    ? 'http://192.168.38.109:3001'
    : 'https://api.samwilliamson.dev'

  try {
    const response = await fetch(`${baseUrl}/api/strava/stats`)
    if (!response.ok) throw new Error('Failed to fetch stats')
    return await response.json()
  } catch (error) {
    console.error('Error fetching Strava stats:', error)
    return null
  }
}
