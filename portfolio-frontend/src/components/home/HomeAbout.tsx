// src/components/home/HomeAbout.tsx

import { useMemo } from "react";
import StravaStats from "../StravaStats";

type AboutBlock = {
  kicker?: string;
  title: string;
  body: string[];
  bullets?: string[];
};

export default function HomeAbout() {
  const backgroundBlock: AboutBlock = useMemo(
    () => ({
      kicker: "Background",
      title: "Earth Science & Geo-Environmental Consulting",
      body: [
        "I hold a BSc (Hons) in Earth Science from the University of Glasgow, with coursework covering structural geology, economic minerals, climate and digital geoscience. My academic work included understanding how satellite imagery is generated from surface reflectance, how raster datasets are produced, and how spectral bands are used to interpret hyperspectral data for environmental and geological applications.",
        "Professionally, I spent several years working in geo-environmental consulting in Scotland and Finland, contributing to technically detailed site investigations and analysing geological and environmental data to inform remediation and development work. My work included:",
      ],
      bullets: [
        "Geological and environmental analysis & reporting.",
        "Use of GIS software in geospatial analysis.",
        "Mine stability assessments.",
        "On-site supervision of unstable mine remediation via drilling and high-pressure grouting.",
      ],
    }),
    []
  );

  const personalBlocks: AboutBlock[] = useMemo(
    () => [
      {
        title: "Sport",
        body: [
          "Outside of work, sport has always been a big part of my life. I represented my schools in football, field hockey, badminton, and cross-country running.",
          "In recent years, running has been my main focus and I ran two half-marathons and my first full marathon in 2024.",
          "Since then, I've been shifting into triathlon, putting in more time on the bike and in the pool. My next big goal is the Ironman 70.3 Tallinn in August 2026.",
          "Training volume and activity breakdown pulled directly from Strava below.",
        ],
      },
      {
        title: "Music",
        body: [
          "I’m a big music fan, basically any genre is on the table for me. I love spending time trying to discover new artists and albums and still have a very big physical music collection. I love to hear what music people are enjoying and trying to find an artist they may not have heard of to fit their taste.",
          "If your looking for a bit of fun, please feel free to drop me a message listing a few artists your enjoying at the moment and I'll see if I can make a few personal recommedations for you!",
          "Below is a small, very mixed genre playlist with a variety of lesser known and more well known artists I've been enjoying recently if you'd like to take a listen.",
        ],
      },
    ],
    []
  );

  return (
    <section className="section" aria-label="About">
      <div id="about" className="section-anchor" />
      <div id="background" className="section-anchor" />

      <div className="about-stack about-stack--plain">
        <section className="about-block about-block--background">
          {backgroundBlock.kicker ? <p className="kicker">{backgroundBlock.kicker}</p> : null}
          <h3 className="about-heading">{backgroundBlock.title}</h3>

          {backgroundBlock.body.length ? (
            <div className="about-body">
              {backgroundBlock.body.map((line, i) => (
                <p key={i} className="about-text">
                  {line}
                </p>
              ))}
            </div>
          ) : null}

          {backgroundBlock.bullets && backgroundBlock.bullets.length > 0 ? (
            <ul className="about-bullets">
              {backgroundBlock.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          ) : null}
        </section>

        <section className="about-group" aria-label="Personal">
          <p className="kicker">Personal</p>

          {personalBlocks.map((block) => {
            const isSport = block.title === "Sport";
            const isMusic = block.title === "Music";

            return (
              <section
                key={block.title}
                className={`about-subblock${isMusic ? " about-subblock--music" : ""}`}
              >
                <h3 className="about-subheading">{block.title}</h3>

                {block.body.length ? (
                  <div className="about-body">
                    {block.body.map((line, i) => (
                      <p key={i} className="about-text">
                        {line}
                      </p>
                    ))}
                  </div>
                ) : null}

                {isSport ? (
                  <div className="about-embed">
                    <div className="card-subtle">
                      <StravaStats />
                    </div>
                  </div>
                ) : null}

                {isMusic ? (
                  <div className="about-embed">
                    <iframe
                      style={{ borderRadius: 12, display: "block" }}
                      src="https://open.spotify.com/embed/playlist/6iOuXEPPs5liMYgc2ri3oM?utm_source=generator&theme=0"
                      width="100%"
                      height="510"
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
        </section>
      </div>
    </section>
  );
}
