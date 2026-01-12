/* backend/routes/strava.js */
import express from "express";
import axios from "axios";
import { getStravaAccessToken, clearStravaTokenCache } from "../utils/stravaAuth.js";

const router = express.Router();

let cachedAthleteId = null;
let lastGoodStats = null;
let lastGoodStatsAtMs = 0;

function formatStats(stats) {
  const format = (obj) => ({
    count: obj.count,
    distance_km: +(obj.distance / 1000).toFixed(1),
    moving_time_hr: +(obj.moving_time / 3600).toFixed(1),
    elevation_gain_m: obj.elevation_gain,
  });

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
    },
  };
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function withRetry(fn, { attempts = 3, baseDelayMs = 250 } = {}) {
  let lastErr = null;

  for (let i = 0; i < attempts; i++) {
    try {
      return await fn();
    } catch (err) {
      lastErr = err;

      const status = err?.response?.status;
      const shouldRetry =
        !status ||
        status === 408 ||
        status === 429 ||
        (status >= 500 && status <= 599);

      if (!shouldRetry || i === attempts - 1) {
        throw err;
      }

      const backoff = baseDelayMs * Math.pow(2, i);
      await sleep(backoff);
    }
  }

  throw lastErr;
}

async function fetchAthleteId(accessToken) {
  const res = await axios.get("https://www.strava.com/api/v3/athlete", {
    headers: { Authorization: `Bearer ${accessToken}` },
    timeout: 10000,
  });

  return res.data.id;
}

async function getAthleteId(accessToken) {
  if (cachedAthleteId) return cachedAthleteId;

  if (process.env.STRAVA_ATHLETE_ID) {
    cachedAthleteId = Number(process.env.STRAVA_ATHLETE_ID);
    return cachedAthleteId;
  }

  cachedAthleteId = await withRetry(() => fetchAthleteId(accessToken), {
    attempts: 3,
    baseDelayMs: 250,
  });

  return cachedAthleteId;
}

router.get("/stats", async (req, res) => {
  try {
    const accessToken = await getStravaAccessToken();
    const athleteId = await getAthleteId(accessToken);

    const statsRes = await withRetry(
      () =>
        axios.get(`https://www.strava.com/api/v3/athletes/${athleteId}/stats`, {
          headers: { Authorization: `Bearer ${accessToken}` },
          timeout: 12000,
        }),
      { attempts: 3, baseDelayMs: 300 }
    );

    const formatted = formatStats(statsRes.data);

    lastGoodStats = formatted;
    lastGoodStatsAtMs = Date.now();

    res.json({ ok: true, source: "live", data: formatted });
  } catch (error) {
    const status = error?.response?.status;

    if (status === 401) {
      clearStravaTokenCache();
      cachedAthleteId = null;
    }

    if (lastGoodStats) {
      res.status(200).json({
        ok: true,
        source: "cache",
        cached_at: new Date(lastGoodStatsAtMs).toISOString(),
        data: lastGoodStats,
      });
      return;
    }

    res.status(502).json({
      ok: false,
      error: "Failed to fetch Strava stats",
      details: status ? `Upstream status ${status}` : "Upstream request failed",
    });
  }
});

export default router;
