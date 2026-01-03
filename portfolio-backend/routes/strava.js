// routes/strava.js
import express from "express";
import axios from "axios";
import { refreshStravaToken } from "../utils/stravaAuth.js";

const router = express.Router();

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

function safeInt(value) {
  const n = Number.parseInt(String(value), 10);
  return Number.isFinite(n) ? n : null;
}

function sportKeyFromStrava(activity) {
  const t = activity?.sport_type || activity?.type || "";
  if (t === "Swim") return "swim";
  if (t.includes("Ride")) return "ride";
  if (t.includes("Run")) return "run";
  return null;
}

function makeEmptyYearAgg() {
  return {
    run: { count: 0, distance_m: 0, moving_time_s: 0, elevation_gain_m: 0 },
    ride: { count: 0, distance_m: 0, moving_time_s: 0, elevation_gain_m: 0 },
    swim: { count: 0, distance_m: 0, moving_time_s: 0, elevation_gain_m: 0 },
  };
}

function formatYearAgg(agg) {
  const toStats = (x) => ({
    count: x.count,
    distance_km: +(x.distance_m / 1000).toFixed(1),
    moving_time_hr: +(x.moving_time_s / 3600).toFixed(1),
    elevation_gain_m: Math.round(x.elevation_gain_m),
  });

  return {
    run: toStats(agg.run),
    ride: toStats(agg.ride),
    swim: toStats(agg.swim),
  };
}

async function fetchAthleteId(accessToken) {
  const athleteRes = await axios.get("https://www.strava.com/api/v3/athlete", {
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  return athleteRes.data.id;
}

async function fetchYearTotals(accessToken, year) {
  const after = Math.floor(new Date(`${year}-01-01T00:00:00Z`).getTime() / 1000);
  const before = Math.floor(new Date(`${year + 1}-01-01T00:00:00Z`).getTime() / 1000);

  const agg = makeEmptyYearAgg();

  let page = 1;
  const perPage = 200;

  while (true) {
    const res = await axios.get("https://www.strava.com/api/v3/athlete/activities", {
      headers: { Authorization: `Bearer ${accessToken}` },
      params: {
        after,
        before,
        page,
        per_page: perPage,
      },
    });

    const activities = res.data;
    if (!Array.isArray(activities) || activities.length === 0) break;

    for (const a of activities) {
      const key = sportKeyFromStrava(a);
      if (!key) continue;

      agg[key].count += 1;
      agg[key].distance_m += Number(a.distance || 0);
      agg[key].moving_time_s += Number(a.moving_time || 0);

      if (key !== "swim") {
        agg[key].elevation_gain_m += Number(a.total_elevation_gain || 0);
      }
    }

    if (activities.length < perPage) break;
    page += 1;
  }

  return formatYearAgg(agg);
}

router.get("/stats", async (req, res) => {
  try {
    const accessToken = await refreshStravaToken();

    const yearParam = req.query.year;
    if (yearParam !== undefined) {
      const year = safeInt(yearParam);
      const nowYear = new Date().getUTCFullYear();

      if (!year || year < 2000 || year > nowYear + 1) {
        return res.status(400).json({ error: "Invalid year parameter" });
      }

      const yearTotals = await fetchYearTotals(accessToken, year);
      return res.json({ year, ...yearTotals });
    }

    const athleteId = await fetchAthleteId(accessToken);
    console.log("Fetched athlete ID:", athleteId);

    const statsRes = await axios.get(`https://www.strava.com/api/v3/athletes/${athleteId}/stats`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    const formatted = formatStats(statsRes.data);
    res.json(formatted);
  } catch (error) {
    console.error("Failed to fetch Strava stats:", error.response?.data || error.message);
    res.status(500).json({ error: "Failed to fetch Strava stats" });
  }
});

export default router;
