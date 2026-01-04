// src/components/home/HomeAbout.tsx
import { useMemo } from "react";
import StravaStats from "../StravaStats";

type AboutBlock = {
  kicker: string;
  title: string;
  body: string[];
  bullets?: string[];
};

export default function HomeAbout() {
  const aboutBlocks: AboutBlock[] = useMemo(
    () => [
      {
        kicker: "Background",
        title: "Earth Science & Geo-Environmental Consulting",
        body: [
          "I hold a BSc (Hons) in Earth Science from the University of Glasgow, with coursework covering structural geology, economic minerals, and digital geoscience. My academic work included understanding how satellite imagery is generated from surface reflectance, how raster datasets are produced, and how spectral bands are used to interpret hyperspectral data for environmental and geological applications.",
          "Professionally, I spent several years working in geo-environmental consulting in Scotland and Finland, contributing to technically detailed site investigations and analysing geological and environmental data to inform remediation and development work. My work included:",
        ],
        bullets: [
          "Geological and environmental analysis & reporting.",
          "Mine stability assessments.",
          "On-site supervision of unstable mine remediation via drilling and high-pressure grouting.",
          "Use of GIS software in geospatial analysis.",
        ],
      },
      {
        kicker: "Personal",
        title: "Sport",
        body: [
          "Outside of work, sport has always been a big part of my life. I represented my schools in football, field hockey, badminton, and cross-country running.",
          "In recent years, running has been my main focus and I ran two half-marathons and my first full marathon in 2024.",
          "Since then, I've been shifting into triathlon, putting in more time on the bike and in the pool. My next big goal is the Ironman 70.3 Tallinn in August 2026.",
          "Training volume and activity breakdown pulled directly from Strava below.",
        ],
      },
      {
        kicker: "Personal",
        title: "Music",
        body: [
          "I’m a big music fan, basically any genre is on the table for me. I love spending time trying to discover new artists and albums and still have a big physical music collection. I love to hear what music people are enjoying and trying to find an artist they may not have heard of to fit their taste.",
          "Below is a small, very mixed genre playlist with a variety of lesser known and more well known artists I've been enjoying recently if you'd like to take a listen.",
        ],
      },
    ],
    []
  );

  return (
    <section className="section" aria-label="About">
      <div id="about" className="section-anchor" />

      <div className="container-max">
        <div className="about-stack about-stack--plain">
          {aboutBlocks.map((block, idx) => {
            const isSport =
              block.kicker === "Personal" && block.title === "Sport";
            const isMusic =
              block.kicker === "Personal" && block.title === "Music";

            return (
              <section key={`${block.title}-${idx}`} className="about-block">
                <p className="kicker">{block.kicker}</p>
                <h3 className="about-title">{block.title}</h3>

                {block.body.length ? (
                  <div className="about-body">
                    {block.body.map((line, i) => (
                      <p key={i} className="about-text">
                        {line}
                      </p>
                    ))}
                  </div>
                ) : null}

                {block.bullets && block.bullets.length > 0 && (
                  <ul className="about-bullets">
                    {block.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                )}

                {isSport ? (
                  <div style={{ marginTop: 26 }}>
                    <div className="card-subtle">
                      <StravaStats />
                    </div>
                  </div>
                ) : null}

                {isMusic ? (
                  <div style={{ marginTop: 26 }}>
                    <iframe
                      style={{ borderRadius: 12, display: "block" }}
                      src="https://open.spotify.com/embed/playlist/6iOuXEPPs5liMYgc2ri3oM?utm_source=generator&theme=0"
                      width="100%"
                      height="352"
                      frameBorder={0}
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      loading="lazy"
                      title="Spotify playlist"
                    />
                  </div>
                ) : null}
              </section>
            );
          })}
        </div>
      </div>
    </section>
  );
}
