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
          "I hold a BSc with Honours in Earth Science from the University of Glasgow, where i worked with topics including strucutral geology, economic minerals and digital geoscience. I have an understanding of how satellites derive raster dats sets from surface refelctnace, and use spectral bands to interpret the hyperspectral imagery produced for environmental and geologicla interpretation.",
          "  I then spent several years working in geo-environmental consulting in both Scotland & Finland. This involved in technically complex site investigations, analysing geological, environmental, and geospatial data to support remediation and development decisions.",
        ],
        bullets: [
          "Geological analysis & reporting (maps, interpretation, client communication)",
          "Site investigations (Phase II design, trial pitting, sampling)",
          "Environmental & geotechnical testing (analysis + reporting)",
          "Groundwater testing & basic modelling",
          "Mine stability assessments & remediation (drilling + grouting supervision)",
        ],
      },
      {
        kicker: "Personal",
        title: "Sport",
        body: [
          "Outside of work, sport has always been a big part of my life. I represented my schools in football, field hockey, badminton, and cross-country running.",
          "In recent years, running has been my main focus and I ran two half-marathons and my first full marathon in 2024.",
          "Recently I've been shifting into triathlon, putting in more time on the bike and in the pool. My next big goal is Ironman 70.3 Tallinn in August 2026.",
          "Strava stats and the countdown timer will be reintroduced once the About layout is locked in.",
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
