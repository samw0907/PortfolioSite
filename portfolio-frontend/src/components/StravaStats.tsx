// src/components/StravaStats.tsx
import { useEffect, useMemo, useState } from "react";
import { fetchStravaStats } from "../utils/fetchStravaStats";

type Sport = "run" | "ride" | "swim";
type Period = "all_time" | "ytd" | "recent" | "y2025" | "y2024";

interface SportStats {
  count: number;
  distance_km: number;
  moving_time_hr: number;
  elevation_gain_m: number;
}

interface StravaBaseData {
  all_time: Record<Sport, SportStats>;
  ytd: Record<Sport, SportStats>;
  recent: Record<Sport, SportStats>;
}

type YearData = { year: number } & Record<Sport, SportStats>;

const periodLabels: Record<Period, string> = {
  all_time: "All-time",
  ytd: new Date().getFullYear().toString(),
  recent: "Last 4 weeks",
  y2025: "2025",
  y2024: "2024",
};

function round1(value: number) {
  return Math.round(value * 10) / 10;
}

function sumSport(data: Record<Sport, SportStats>, key: keyof SportStats) {
  return data.run[key] + data.ride[key] + data.swim[key];
}

export default function StravaStats() {
  const [base, setBase] = useState<StravaBaseData | null>(null);
  const [year2025, setYear2025] = useState<Record<Sport, SportStats> | null>(null);
  const [year2024, setYear2024] = useState<Record<Sport, SportStats> | null>(null);

  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<Period>("ytd");

  const stravaUrl = "https://www.strava.com/athletes/38491517";

  useEffect(() => {
    let cancelled = false;

    (async () => {
      setError(null);

      const [baseRes, y25Res, y24Res] = await Promise.all([
        fetchStravaStats(),
        fetchStravaStats(2025),
        fetchStravaStats(2024),
      ]);

      if (cancelled) return;

      if (!baseRes) {
        setError("Couldn’t load Strava data right now.");
        setBase(null);
        return;
      }

      setBase(baseRes);

      // Year endpoints return { year, run, ride, swim }
      const toYearBlock = (x: any): Record<Sport, SportStats> | null => {
        if (!x || !x.run || !x.ride || !x.swim) return null;
        return { run: x.run, ride: x.ride, swim: x.swim };
      };

      setYear2025(toYearBlock(y25Res));
      setYear2024(toYearBlock(y24Res));
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  const availableTabs: Period[] = useMemo(() => {
    const tabs: Period[] = [];
    if (year2025) tabs.push("y2025");
    if (year2024) tabs.push("y2024");
    if (base?.ytd) tabs.push("ytd");
    if (base?.recent) tabs.push("recent");
    if (base?.all_time) tabs.push("all_time");
    return tabs.length ? tabs : ["ytd", "recent"];
  }, [base, year2025, year2024]);

  if (!base && !error) {
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

  if (error || !base) {
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

  const blockForTab = (tab: Period): Record<Sport, SportStats> => {
    if (tab === "y2025" && year2025) return year2025;
    if (tab === "y2024" && year2024) return year2024;
    if (tab === "ytd") return base.ytd;
    if (tab === "recent") return base.recent;
    return base.all_time;
  };

  const data = blockForTab(activeTab);

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
            A quick breakdown of recent training volume, pulled from my Strava activity history.
          </p>
        </div>

        <a className="btn btn-secondary strava-open" href={stravaUrl} target="_blank" rel="noopener noreferrer">
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
              <th scope="col">Metric</th>
              <th scope="col">Run</th>
              <th scope="col">Ride</th>
              <th scope="col">Swim</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Activities</th>
              <td>{data.run.count}</td>
              <td>{data.ride.count}</td>
              <td>{data.swim.count}</td>
            </tr>
            <tr>
              <th scope="row">Distance</th>
              <td>{round1(data.run.distance_km)} km</td>
              <td>{round1(data.ride.distance_km)} km</td>
              <td>{round1(data.swim.distance_km)} km</td>
            </tr>
            <tr>
              <th scope="row">Time</th>
              <td>{round1(data.run.moving_time_hr)} hr</td>
              <td>{round1(data.ride.moving_time_hr)} hr</td>
              <td>{round1(data.swim.moving_time_hr)} hr</td>
            </tr>
            <tr>
              <th scope="row">Elevation</th>
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
