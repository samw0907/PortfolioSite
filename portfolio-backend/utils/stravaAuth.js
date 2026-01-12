/* backend/utils/stravaAuth.js */
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

let cachedAccessToken = null;
let cachedExpiresAt = 0;

function nowSec() {
  return Math.floor(Date.now() / 1000);
}

export const getStravaAccessToken = async () => {
  const safetyWindowSec = 120;

  if (cachedAccessToken && cachedExpiresAt > nowSec() + safetyWindowSec) {
    return cachedAccessToken;
  }

  const response = await axios.post("https://www.strava.com/api/v3/oauth/token", null, {
    params: {
      client_id: process.env.STRAVA_CLIENT_ID,
      client_secret: process.env.STRAVA_CLIENT_SECRET,
      grant_type: "refresh_token",
      refresh_token: process.env.STRAVA_REFRESH_TOKEN,
    },
    timeout: 10000,
  });

  const { access_token, expires_at } = response.data;

  cachedAccessToken = access_token;
  cachedExpiresAt = expires_at;

  return cachedAccessToken;
};

export const clearStravaTokenCache = () => {
  cachedAccessToken = null;
  cachedExpiresAt = 0;
};
