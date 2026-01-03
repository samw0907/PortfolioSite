// src/components/StravaStats.tsx
import { useEffect, useMemo, useState } from "react";
import { fetchStravaStats } from "../utils/fetchStravaStats";

type Sport = "run" | "ride" | "swim";
type Period = "all_time" | "ytd" | "recent";

interface SportStats {
  count: number;
  distance_km: number;
  moving_time_hr: number;
  elevation_gain_m: number;
}

interface StravaData {
  all_time: Record<Sport, SportStats>;
  ytd: Record<Sport, SportStats>;
  recent: Record<Sport, SportStats>;
}

const periodLabels: Record<Period, string> = {
  all_time: "All-time",
  ytd: new Date().getFullYear().toString(),
  recent: "Month",
};

function round1(value: number) {
  return Math.round(value * 10) / 10;
}

function sumSport(data: Record<Sport, SportStats>, key: keyof SportStats) {
  return data.run[key] + data.ride[key] + data.swim[key];
}

export default function StravaStats() {
  const [stats, setStats] = useState<StravaData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<Period>("ytd");

  const stravaUrl = "https://www.strava.com/athletes/38491517";

  useEffect(() => {
    let cancelled = false;

    (async () => {
      setError(null);

      const data = await fetchStravaStats();
      if (cancelled) return;

      if (!data) {
        setError("Couldn’t load Strava data right now.");
        setStats(null);
        return;
      }

      setStats(data);
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  const availableTabs: Period[] = useMemo(() => {
    const tabs: Period[] = [];
    if (stats?.ytd) tabs.push("ytd");
    if (stats?.recent) tabs.push("recent");
    if (stats?.all_time) tabs.push("all_time");
    return tabs.length ? tabs : ["ytd", "recent"];
  }, [stats]);

  if (!stats && !error) {
    return (
      <div className="strava">
        <div className="strava-head">
          <div>
            <p className="kicker">Strava</p>
            <h4 className="card-title">Training snapshot</h4>
            <p className="card-text">Loading…</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !stats) {
    return (
      <div className="strava">
        <div className="strava-head">
          <div>
            <p className="kicker">Strava</p>
            <h4 className="card-title">Training snapshot</h4>
            <p className="card-text">
              {error ?? "Couldn’t load Strava data right now."}{" "}
              <a className="link" href={stravaUrl} target="_blank" rel="noopener noreferrer">
                Open Strava
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }

  const data = stats[activeTab];

  const totalKm = round1(sumSport(data, "distance_km"));
  const totalHours = round1(sumSport(data, "moving_time_hr"));
  const totalActivities = sumSport(data, "count");

  return (
    <div className="strava">
      <div className="strava-head">
        <div>
          <p className="kicker">Strava</p>
          <h4 className="card-title">Training snapshot</h4>
          <p className="card-text">
            A quick breakdown of training volume pulled from my Strava activity history.
          </p>
        </div>

        <a
          className="btn btn-secondary strava-open"
          href={stravaUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Open Strava
        </a>
      </div>

      <div className="strava-tabs" role="tablist" aria-label="Strava time period">
        {availableTabs.map((p) => {
          const active = activeTab === p;
          return (
            <button
              key={p}
              type="button"
              onClick={() => setActiveTab(p)}
              className={`strava-tab ${active ? "is-active" : ""}`}
              aria-pressed={active}
            >
              {periodLabels[p]}
            </button>
          );
        })}
      </div>

      <div className="strava-chips" aria-label="Strava quick totals">
        <span className="strava-chip">Total: {totalKm} km</span>
        <span className="strava-chip">Time: {totalHours} hr</span>
        <span className="strava-chip">Activities: {totalActivities}</span>
      </div>

      <div className="strava-table-wrap">
        <table className="strava-table" aria-label="Strava activity breakdown">
          <thead>
            <tr>
              <th scope="col" style={{ textAlign: "center" }}>Metric</th>
              <th scope="col">Run</th>
              <th scope="col">Ride</th>
              <th scope="col">Swim</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" style={{ textAlign: "center" }}>Activities</th>
              <td>{data.run.count}</td>
              <td>{data.ride.count}</td>
              <td>{data.swim.count}</td>
            </tr>
            <tr>
              <th scope="row" style={{ textAlign: "center" }}>Distance</th>
              <td>{round1(data.run.distance_km)} km</td>
              <td>{round1(data.ride.distance_km)} km</td>
              <td>{round1(data.swim.distance_km)} km</td>
            </tr>
            <tr>
              <th scope="row" style={{ textAlign: "center" }}>Time</th>
              <td>{round1(data.run.moving_time_hr)} hr</td>
              <td>{round1(data.ride.moving_time_hr)} hr</td>
              <td>{round1(data.swim.moving_time_hr)} hr</td>
            </tr>
            <tr>
              <th scope="row" style={{ textAlign: "center" }}>Elevation</th>
              <td>{Math.round(data.run.elevation_gain_m)} m</td>
              <td>{Math.round(data.ride.elevation_gain_m)} m</td>
              <td>—</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
