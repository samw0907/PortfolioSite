import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

export default function Home() {
  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    // Default position (intentional on load)
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
                <div className="card">
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
                    <a className="link" href="#about">
                      More about me
                    </a>
                  </div>
                </div>

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

          <div className="divider" />

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="card">
              <p className="kicker">Featured</p>
              <h2 className="card-title">TriSwift</h2>
              <p className="card-text">
                Activity-tracking app for triathletes with a full CRUD dashboard,
                personal records, and a CI/CD pipeline.
              </p>
              <div className="mt-5">
                <a className="link" href="#projects">
                  View details
                </a>
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
                <a className="link" href="#projects">
                  View details
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
