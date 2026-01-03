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
  const [isOpen, setIsOpen] = useState(false);

  const stravaUrl = "https://www.strava.com/athletes/38491517";

  useEffect(() => {
    if (!isOpen) return;

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
  }, [isOpen]);

  const availableTabs: Period[] = useMemo(() => {
    const tabs: Period[] = [];
    if (stats?.ytd) tabs.push("ytd");
    if (stats?.recent) tabs.push("recent");
    if (stats?.all_time) tabs.push("all_time");
    return tabs.length ? tabs : ["ytd", "recent"];
  }, [stats]);

  const header = (
    <div className="strava-head">
      <div>
        <p className="kicker">Strava</p>
        <p className="card-text">A quick breakdown of training volume pulled from my Strava activity history.</p>
      </div>

      <div className="strava-actions">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => setIsOpen((v) => !v)}
          aria-expanded={isOpen}
        >
          {isOpen ? "Hide stats" : "Show stats"}
        </button>

        <a className="btn btn-secondary strava-open" href={stravaUrl} target="_blank" rel="noopener noreferrer">
          Open Strava
        </a>
      </div>
    </div>
  );

  if (!isOpen) {
    return <div className="strava">{header}</div>;
  }

  if (!stats && !error) {
    return (
      <div className="strava">
        {header}
        <p className="card-text">Loading…</p>
      </div>
    );
  }

  if (error || !stats) {
    return (
      <div className="strava">
        {header}
        <p className="card-text">{error ?? "Couldn’t load Strava data right now."}</p>
      </div>
    );
  }

  const data = stats[activeTab];

  const totalKm = round1(sumSport(data, "distance_km"));
  const totalHours = round1(sumSport(data, "moving_time_hr"));
  const totalActivities = sumSport(data, "count");

  return (
    <div className="strava">
      {header}

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
              <th scope="col" style={{ textAlign: "center" }}>
                Metric
              </th>
              <th scope="col">Run</th>
              <th scope="col">Ride</th>
              <th scope="col">Swim</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" style={{ textAlign: "center" }}>
                Activities
              </th>
              <td>{data.run.count}</td>
              <td>{data.ride.count}</td>
              <td>{data.swim.count}</td>
            </tr>
            <tr>
              <th scope="row" style={{ textAlign: "center" }}>
                Distance
              </th>
              <td>{round1(data.run.distance_km)} km</td>
              <td>{round1(data.ride.distance_km)} km</td>
              <td>{round1(data.swim.distance_km)} km</td>
            </tr>
            <tr>
              <th scope="row" style={{ textAlign: "center" }}>
                Time
              </th>
              <td>{round1(data.run.moving_time_hr)} hr</td>
              <td>{round1(data.ride.moving_time_hr)} hr</td>
              <td>{round1(data.swim.moving_time_hr)} hr</td>
            </tr>
            <tr>
              <th scope="row" style={{ textAlign: "center" }}>
                Elevation
              </th>
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
