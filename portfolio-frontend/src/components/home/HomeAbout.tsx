import { useMemo } from "react";

type AboutBlock = {
  kicker: string;
  title: string;
  body: string[];
  bullets?: string[];
};

export default function HomeAbout() {
  const profileBlock: AboutBlock = useMemo(
    () => ({
      kicker: "",
      title: "Profile",
      body: [
        "I’m a full-stack developer with a background in geo-environmental consulting and practical experience building complete web applications.",
        "I’m comfortable working across frontend and backend, and have practical experience delivering full-stack features end-to-end, from UI through to APIs, data models, testing, and deployment.",
        "I’m certified as an AWS Solutions Architect Associate and Professional Scrum Master, and I’m currently applying that knowledge in practice through new full-stack projects using cloud infrastructure.",
        "From my consulting background, I bring experience coordinating multiple projects with clients and maintaining clear communication.",
      ],
    }),
    []
  );

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
        ],
      },
      {
        kicker: "Personal",
        title: "Music",
        body: [
          "Placeholder: I’m also a big music fan, and I like building routines around long sessions with good albums on.",
          "Placeholder: I’ll add a short overview here later (what I listen to, how I discover music, and a few favourites).",
          "Placeholder: This section may later include a small Spotify-style snapshot or recent listens widget.",
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
          <section className="about-block about-block--primary">
            {profileBlock.kicker ? (
              <p className="kicker">{profileBlock.kicker}</p>
            ) : null}
            <h3 className="about-title">{profileBlock.title}</h3>

            <div className="about-body">
              {profileBlock.body.map((line, i) => (
                <p key={i} className="about-text">
                  {line}
                </p>
              ))}
            </div>
          </section>

          {aboutBlocks.map((block, idx) => (
            <section key={`${block.title}-${idx}`} className="about-block">
              <p className="kicker">{block.kicker}</p>
              <h3 className="about-title">{block.title}</h3>

              <div className="about-body">
                {block.body.map((line, i) => (
                  <p key={i} className="about-text">
                    {line}
                  </p>
                ))}
              </div>

              {block.bullets && block.bullets.length > 0 && (
                <ul className="about-bullets">
                  {block.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
