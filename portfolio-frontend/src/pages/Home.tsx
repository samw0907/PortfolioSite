import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

export default function Home() {
  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    const setSpot = (clientX: number, clientY: number) => {
      const rect = el.getBoundingClientRect();
      const x = ((clientX - rect.left) / rect.width) * 100;
      const y = ((clientY - rect.top) / rect.height) * 100;

      const clampedX = Math.max(0, Math.min(100, x));
      const clampedY = Math.max(0, Math.min(100, y));

      el.style.setProperty("--mx", `${clampedX}%`);
      el.style.setProperty("--my", `${clampedY}%`);
    };

    const onMouseMove = (e: MouseEvent) => setSpot(e.clientX, e.clientY);
    const onTouchMove = (e: TouchEvent) => {
      if (!e.touches.length) return;
      setSpot(e.touches[0].clientX, e.touches[0].clientY);
    };

    // Default “nice” starting position so it looks good without interaction
    el.style.setProperty("--mx", "34%");
    el.style.setProperty("--my", "42%");

    el.addEventListener("mousemove", onMouseMove);
    el.addEventListener("touchmove", onTouchMove, { passive: true });

    return () => {
      el.removeEventListener("mousemove", onMouseMove);
      el.removeEventListener("touchmove", onTouchMove);
    };
  }, []);

  return (
    <div className="page">
      <section className="section">
        <div className="container-max">
          {/* HERO (no new sections; just stronger hierarchy + shapes) */}
          <div ref={heroRef} className="hero-frame">
            {/* Background shapes */}
            <div className="hero-bg" aria-hidden="true">
              <div className="hero-slab" />
              <div className="hero-slab-2" />
              <div className="hero-noise" />
            </div>

            <div className="hero-grid">
              {/* Left: Typography hero */}
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
                  <a
                    href="/assets/SamWilliamsonCV.pdf"
                    download
                    className="btn btn-secondary"
                  >
                    Download CV
                  </a>
                </div>

                {/* Proof line (no boxes) */}
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

              {/* Right: Editorial sidebar (no cards) */}
              <aside className="hero-right" aria-label="Quick links and focus">
                <div className="hero-side-block">
                  <p className="kicker">Focus</p>
                  <h2 className="hero-side-title">Now</h2>
                  <p className="hero-side-text">
                    Building portfolio-ready projects with modern tooling: TypeScript, testing,
                    CI/CD, and clean UI structure. Optimizing for readability and maintainability.
                  </p>

                  <div className="hero-side-tags">
                    <span className="tag">TypeScript</span>
                    <span className="tag">Testing</span>
                    <span className="tag">CI/CD</span>
                  </div>

                  <div className="hero-side-links">
                    <Link to="/about" className="link">
                      More about me
                    </Link>
                  </div>
                </div>

                <div className="hero-side-block hero-side-block-subtle">
                  <p className="kicker">Links</p>
                  <h2 className="hero-side-title">Profiles</h2>

                  <div className="hero-side-links">
                    <a
                      className="link"
                      href="https://github.com/samw0907"
                      target="_blank"
                      rel="noreferrer"
                    >
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

          <div className="divider" />

          {/* Keep existing content (no new sections) */}
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="card">
              <p className="kicker">Featured</p>
              <h2 className="card-title">TriSwift</h2>
              <p className="card-text">
                Activity-tracking app for triathletes with a full CRUD dashboard,
                personal records, and a CI/CD pipeline.
              </p>
              <div className="mt-5">
                <Link to="/projects" className="link">
                  View details
                </Link>
              </div>
            </div>

            <div className="card">
              <p className="kicker">In progress</p>
              <h2 className="card-title">MineSecure</h2>
              <p className="card-text">
                Concept project for remediation / stabilization tracking based on
                real-world consulting workflows.
              </p>
              <div className="mt-5">
                <Link to="/projects" className="link">
                  View details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
