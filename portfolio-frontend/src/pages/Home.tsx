import { useEffect, useMemo, useRef } from "react";

type AboutBlock = {
  kicker: string;
  title: string;
  body: string[];
  bullets?: string[];
};

export default function Home() {
  const heroRef = useRef<HTMLDivElement | null>(null);

  const profileBlock: AboutBlock = useMemo(
    () => ({
      kicker: "",
      title: "Profile",
      body: [
        "My most recent project, TriSwift, is an activity-tracking app for triathletes. It includes user sign-in, a dashboard with standard CRUD operations, automatically updated personal records and a built-in pace calculator tool.",
        "I also implemented data-visualization features to present training volume over time and location-based progress using a custom Mapbox component.",
        "The backend is built with JavaScript and PostgreSQL, exposing REST (Express) and GraphQL (Apollo) APIs with JWT authentication. The frontend uses React + TypeScript with GraphQL for data handling.",
        "The app includes unit tests (Vitest) and end-to-end tests (Playwright), is containerized with Docker, and deployed via Fly.io using GitHub Actions for CI/CD.",
        "I recently obtained AWS Solutions Architect Associate certification and I’m applying that knowledge through a new full-stack project using AWS infrastructure (with hands-on Python on the backend).",
      ],
      bullets: [
        "React · TypeScript · Node/Express",
        "PostgreSQL · REST/GraphQL · JWT",
        "Docker · Fly.io · GitHub Actions",
        "Vitest · Playwright",
        "AWS SAA · PSM I",
      ],
    }),
    []
  );

  const aboutBlocks: AboutBlock[] = useMemo(
    () => [
      {
        kicker: "Consulting",
        title: "My background",
        body: [
          "I received my BSc with Honours in Earth Science at the University of Glasgow in 2017, before entering the geo-environmental consulting industry with Mason Evans Partnership.",
          "I worked in a small team of five, conducting site investigations for some of the UK's largest house builders. This involved evaluating geotechnical & environmental constraints and advising clients on remediation measures required to meet local government regulations.",
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

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    el.style.setProperty("--mx", "40%");
    el.style.setProperty("--my", "34%");

    let rafId: number | null = null;
    let lastX = 0;
    let lastY = 0;

    const applySpot = () => {
      rafId = null;

      const rect = el.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;

      const x = ((lastX - rect.left) / rect.width) * 100;
      const y = ((lastY - rect.top) / rect.height) * 100;

      const clampedX = Math.max(0, Math.min(100, x));
      const clampedY = Math.max(0, Math.min(100, y));

      el.style.setProperty("--mx", `${clampedX}%`);
      el.style.setProperty("--my", `${clampedY}%`);
    };

    const onPointerMove = (e: PointerEvent) => {
      lastX = e.clientX;
      lastY = e.clientY;

      if (rafId === null) rafId = window.requestAnimationFrame(applySpot);
    };

    el.addEventListener("pointermove", onPointerMove, { passive: true });

    return () => {
      el.removeEventListener("pointermove", onPointerMove);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="page">
      <div id="home" className="section-anchor" />

      <section className="section section--hero">
        <div className="full-bleed">
          <div ref={heroRef} className="hero-frame">
            <div className="hero-bg" aria-hidden="true">
              <div className="hero-slab" />
              <div className="hero-slab-2" />
              <div className="hero-spot-glow" />
              <div className="hero-noise" />
            </div>

            <div className="container-max">
              <div className="hero-grid">
                <div className="hero-left">
                  <p className="kicker">Full-stack developer</p>

                  <h1 className="hero-title-strong">
                    <span className="hero-title-outline">Sam Williamson</span>
                    <span className="hero-title-spot hero-spotlight">Sam</span>
                    <span className="hero-title-spot hero-spotlight">Williamson</span>
                  </h1>

                  <p className="lead hero-lead">
                    Full-stack developer with a consulting background. AWS &amp; PSM certified. I build clean, practical
                    web apps with a focus on clarity and usability.
                  </p>

                  <div className="hero-cta">
                    <a href="#projects" className="btn btn-primary">
                      View projects
                    </a>
                    <a href="/assets/SamWilliamsonCV.pdf" download className="btn btn-secondary">
                      Download CV
                    </a>
                  </div>

                  <dl className="hero-proof" aria-label="Quick facts">
                    <div className="hero-proof-item">
                      <dt className="hero-proof-label">Certifications</dt>
                      <dd className="hero-proof-value">AWS SAA · PSM I</dd>
                    </div>

                    <div className="hero-proof-divider" aria-hidden="true" />

                    <div className="hero-proof-item">
                      <dt className="hero-proof-label">Core stack</dt>
                      <dd className="hero-proof-value">React · TypeScript · Node</dd>
                    </div>

                    <div className="hero-proof-divider" aria-hidden="true" />

                    <div className="hero-proof-item">
                      <dt className="hero-proof-label">Based</dt>
                      <dd className="hero-proof-value">Espoo</dd>
                    </div>
                  </dl>

                  <dl className="hero-proof hero-proof--links" aria-label="Profile links">
                    <div className="hero-proof-item">
                      <dt className="hero-proof-label">GitHub</dt>
                      <dd className="hero-proof-value">
                        <a className="hero-proof-link" href="https://github.com/samw0907" target="_blank" rel="noreferrer">
                          samw0907
                        </a>
                      </dd>
                    </div>

                    <div className="hero-proof-divider" aria-hidden="true" />

                    <div className="hero-proof-item">
                      <dt className="hero-proof-label">LinkedIn</dt>
                      <dd className="hero-proof-value">
                        <a
                          className="hero-proof-link"
                          href="https://www.linkedin.com/in/sam-williamson-739530146/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          sam-williamson
                        </a>
                      </dd>
                    </div>
                  </dl>
                </div>

                <div className="hero-right" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>

        <div className="container-max">
          <div id="about" className="section-anchor" />
          <div className="section">
  <div className="about-stack about-stack--plain">
    <section className="about-block about-block--primary">
      {profileBlock.kicker ? <p className="kicker">{profileBlock.kicker}</p> : null}
      <h3 className="about-title">{profileBlock.title}</h3>

      <div className="about-body">
        {profileBlock.body.map((line, i) => (
          <p key={i} className="about-text">
            {line}
          </p>
        ))}
      </div>

      {profileBlock.bullets && profileBlock.bullets.length > 0 && (
        <ul className="about-bullets">
          {profileBlock.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      )}
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


          <div id="projects" className="section-anchor" />
          <div className="section">
            <div className="card-subtle">
              <p className="kicker">Projects</p>
              <h2 className="card-title">Next pass</h2>
              <p className="card-text">We’ll reintroduce projects once the About section feels right.</p>
            </div>
          </div>

          <div id="contact" className="section-anchor" />
          <div className="section">
            <div className="card-subtle">
              <p className="kicker">Contact</p>
              <h2 className="card-title">Next pass</h2>
              <p className="card-text">We’ll reintroduce contact after projects are locked in.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
