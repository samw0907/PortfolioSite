// src/utils/fetchStravaStats.ts
export const fetchStravaStats = async (year?: number) => {
  const isLocal =
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1";

  const baseUrl = isLocal ? "http://localhost:3001" : "https://api.samwilliamson.dev";

  const url = new URL(`${baseUrl}/api/strava/stats`);
  if (year) url.searchParams.set("year", String(year));

  try {
    const response = await fetch(url.toString());
    if (!response.ok) throw new Error("Failed to fetch stats");
    return await response.json();
  } catch (error) {
    console.error("Error fetching Strava stats:", error);
    return null;
  }
};
