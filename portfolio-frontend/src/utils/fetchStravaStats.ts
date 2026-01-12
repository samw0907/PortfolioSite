// src/utils/fetchStravaStats.ts
export const fetchStravaStats = async () => {
  const isLocal =
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1";

  const baseUrl = isLocal ? "http://localhost:3001" : "https://api.samwilliamson.dev";

  try {
    const response = await fetch(`${baseUrl}/api/strava/stats`);
    if (!response.ok) throw new Error("Failed to fetch stats");

    const json = await response.json();

    if (json && typeof json === "object" && "data" in json) {
      return (json as { data: unknown }).data;
    }

    return json;
  } catch (error) {
    console.error("Error fetching Strava stats:", error);
    return null;
  }
};
