import { Link } from "react-router-dom";
import { useEffect, useMemo, useRef, useState } from "react";

type RailPanel = {
  kicker: string;
  title: string;
  body: string[];
  bullets?: string[];
};

export default function Home() {
  const heroRef = useRef<HTMLDivElement | null>(null);

  // About Rail refs
  const railWrapRef = useRef<HTMLDivElement | null>(null);
  const railStickyRef = useRef<HTMLDivElement | null>(null);
  const railScrollerRef = useRef<HTMLDivElement | null>(null);

  const [activePanel, setActivePanel] = useState(0);

  const aboutPanels: RailPanel[] = useMemo(
    () => [
      {
        kicker: "About",
        title: "Full Stack Pathway",
        body: [
          "After moving to Finland a few years ago, I focused on learning the language while looking for work in my field of geo-environmental consulting. I landed a six-month contract in the industry, but the role was well below my level of experience. It quickly became clear that without fluent, professional Finnish, progressing in that field would be tough.",
          "I’ve always been someone who wants to take pride in their work. If I can’t do something well, it’s hard to stay motivated. Since I wasn’t able to work to my full potential, I decided it was time to commit to a shift into web development.",
          "I started with online coding courses and eventually completed the Helsinki University Full Stack Open in Spring 2025.",
          "Self-learning has definitely had its challenges, but the deeper I've got into it, the more I've enjoyed it. There’s something really satisfying about building a site from scratch and watching it come to life.",
        ],
      },
      {
        kicker: "Developer",
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
      },
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
          "(Strava stats + countdown will be reintroduced later.)",
        ],
      },
    ],
    []
  );

  // HERO spotlight tracking
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

      if (rafId === null) {
        rafId = window.requestAnimationFrame(applySpot);
      }
    };

    el.addEventListener("pointermove", onPointerMove, { passive: true });

    return () => {
      el.removeEventListener("pointermove", onPointerMove);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    const wrap = railWrapRef.current;
    const sticky = railStickyRef.current;
    const scroller = railScrollerRef.current;
    if (!wrap || !sticky || !scroller) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const narrow = window.matchMedia("(max-width: 767px)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;

    if (prefersReduced || narrow || coarse) return;

    const NAV_OFFSET = 92;

    const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v));

    const updateActivePanel = () => {
      const { scrollLeft, clientWidth } = scroller;
      if (clientWidth <= 0) return;
      const idx = Math.round(scrollLeft / clientWidth);
      setActivePanel(clamp(idx, 0, aboutPanels.length - 1));
    };

    const isStickyInControl = () => {
      const rect = sticky.getBoundingClientRect();
      return rect.top <= NAV_OFFSET + 6 && rect.bottom >= NAV_OFFSET + 220;
    };

    const onWheel = (e: WheelEvent) => {
      if (!isStickyInControl()) return;

      if (e.altKey) return;

      const maxLeft = scroller.scrollWidth - scroller.clientWidth;
      if (maxLeft <= 0) return;

      const atStart = scroller.scrollLeft <= 0;
      const atEnd = scroller.scrollLeft >= maxLeft - 1;

      const dominant = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;

      if ((atStart && dominant < 0) || (atEnd && dominant > 0)) return;

      e.preventDefault();
      scroller.scrollLeft += dominant;
      updateActivePanel();
    };

    const onScroll = () => updateActivePanel();

    window.addEventListener("wheel", onWheel, { passive: false });
    scroller.addEventListener("scroll", onScroll, { passive: true });

    updateActivePanel();

    return () => {
      window.removeEventListener("wheel", onWheel as unknown as EventListener);
      scroller.removeEventListener("scroll", onScroll as unknown as EventListener);
    };
  }, [aboutPanels.length]);

  const scrollToPanel = (index: number) => {
    const scroller = railScrollerRef.current;
    if (!scroller) return;

    const left = scroller.clientWidth * index;
    scroller.scrollTo({ left, behavior: "smooth" });
    setActivePanel(index);
  };

  return (
    <div className="page">
      <section className="section">
        <div className="container-max">
          <div ref={heroRef} className="hero-frame">
            <div className="hero-bg" aria-hidden="true">
              <div className="hero-slab" />
              <div className="hero-slab-2" />
              <div className="hero-spot-glow" />
              <div className="hero-noise" />
            </div>

            <div className="hero-grid">
              <div className="hero-left">
                <p className="kicker">Full-stack developer</p>

                <h1 className="hero-title-strong">
                  <span className="hero-title-outline">Sam Williamson</span>
                  <span className="hero-title-spot hero-spotlight">Sam</span>
                  <span className="hero-title-spot hero-spotlight">Williamson</span>
                </h1>

                <p className="lead hero-lead">
                  Full-stack developer with a consulting background. AWS &amp; PSM certified.
                  I build clean, practical web apps with a focus on clarity and usability.
                </p>

                <div className="hero-cta">
                  <Link to="/projects" className="btn btn-primary">
                    View projects
                  </Link>
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
                    <dd className="hero-proof-value">Helsinki</dd>
                  </div>
                </dl>
              </div>

              <aside className="hero-right" aria-label="Quick links and focus">
                <div className="card-subtle">
                  <p className="kicker">Links</p>
                  <h2 className="hero-side-title">Profiles</h2>

                  <div className="hero-side-links">
                    <a className="link" href="https://github.com/samw0907" target="_blank" rel="noreferrer">
                      GitHub
                    </a>
                    <a
                      className="link"
                      href="https://www.linkedin.com/in/sam-williamson-739530146/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      LinkedIn
                    </a>
                    <a className="link" href="mailto:swilliamson_0907@outlook.com">
                      Email
                    </a>
                  </div>
                </div>
              </aside>
            </div>
          </div>

          {/* ------------------------------------------------------------ */}
          {/* ABOUT RAIL                                                  */}
          {/* ------------------------------------------------------------ */}

          <div id="about" className="scroll-anchor" />

          <div ref={railWrapRef} className="about-rail-wrap">
            <div ref={railStickyRef} className="about-rail-sticky">
              <div className="about-rail-header">
                <div>
                  <p className="kicker">About</p>
                  <h2 className="about-rail-title">Background in four parts</h2>
                </div>

                <div className="about-rail-dots" aria-label="About sections">
                  {aboutPanels.map((p, idx) => (
                    <button
                      key={`${p.title}-${idx}`}
                      type="button"
                      onClick={() => scrollToPanel(idx)}
                      className={idx === activePanel ? "about-dot about-dot--active" : "about-dot"}
                      aria-label={`Go to ${p.title}`}
                      aria-current={idx === activePanel ? "true" : undefined}
                    />
                  ))}
                </div>
              </div>

              <div ref={railScrollerRef} className="about-rail-scroller" aria-label="About horizontal rail">
                {aboutPanels.map((panel, idx) => (
                  <section key={`${panel.title}-${idx}`} className="about-panel">
                    <div className="about-panel-inner">
                      <p className="kicker">{panel.kicker}</p>
                      <h3 className="about-panel-title">{panel.title}</h3>

                      <div className="about-panel-body">
                        {panel.body.map((line, i) => (
                          <p key={i} className="about-panel-text">
                            {line}
                          </p>
                        ))}
                      </div>

                      {panel.bullets && panel.bullets.length > 0 && (
                        <ul className="about-panel-bullets">
                          {panel.bullets.map((b, i) => (
                            <li key={i}>{b}</li>
                          ))}
                        </ul>
                      )}

                      <div className="about-panel-footer">
                        {idx < aboutPanels.length - 1 ? (
                          <button type="button" className="btn btn-secondary" onClick={() => scrollToPanel(idx + 1)}>
                            Next
                          </button>
                        ) : (
                          <a className="btn btn-secondary" href="#projects">
                            Continue
                          </a>
                        )}
                      </div>
                    </div>
                  </section>
                ))}
              </div>

              <p className="about-rail-hint">Desktop: scroll = sideways • Alt = normal scroll • Mobile: swipe</p>
            </div>
          </div>

          {/* ------------------------------------------------------------ */}
          {/* PLACEHOLDERS (next passes)                                  */}
          {/* ------------------------------------------------------------ */}

          <div id="projects" className="scroll-anchor" />
          <div className="section">
            <div className="card-subtle">
              <p className="kicker">Projects</p>
              <h2 className="card-title">Next pass</h2>
              <p className="card-text">We’ll reintroduce projects once the About rail feels right.</p>
            </div>
          </div>

          <div id="contact" className="scroll-anchor" />
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
