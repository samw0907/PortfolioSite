export const fetchStravaStats = async () => {
  try {
    const response = await fetch('http://localhost:3001/api/strava/stats')
    if (!response.ok) throw new Error('Failed to fetch stats')
    return await response.json()
  } catch (error) {
    console.error('Error fetching Strava stats:', error)
    return null
  }
}
