export const fetchStravaStats = async () => {
  const isProd = import.meta.env.PROD

  const baseUrl = isProd
    ? 'https://api.samwilliamson.dev'
    : window.location.hostname === 'localhost'
      ? 'http://localhost:3001'        
      : 'http://192.168.1.42:3001'     

  try {
    const response = await fetch(`${baseUrl}/api/strava/stats`)
    if (!response.ok) throw new Error('Failed to fetch stats')
    return await response.json()
  } catch (error) {
    console.error('Error fetching Strava stats:', error)
    return null
  }
}
