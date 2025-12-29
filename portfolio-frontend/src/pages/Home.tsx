import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="page">
      <section className="section">
        <div className="container-max">
          {/* HERO BLOCK */}
          <div className="hero-divider pb-10 sm:pb-14">
            <div className="grid gap-10 lg:grid-cols-12 items-start">
              {/* Left: hero copy */}
              <div className="lg:col-span-8">
                <div className="hero-panel">
                  {/* Decorative diagonals */}
                  <div className="hero-diagonal hero-diagonal--a" />
                  <div className="hero-diagonal hero-diagonal--b" />

                  <p className="kicker">Full-stack developer</p>

                  {/* Accent row */}
                  <div className="mt-4 hero-accent-row">
                    <span className="hero-accent-bar" />
                    <span className="hero-accent-slash" />
                    <span
                      className="kicker"
                      style={{ margin: 0, color: "rgb(var(--muted))" }}
                    >
                      AWS SAA · PSM I
                    </span>
                  </div>

                  {/* Name */}
                  <h1
                    className="mt-6 font-display font-semibold uppercase hero-title--impact"
                    style={{
                      color: "rgb(var(--text))",
                      letterSpacing: "-0.03em",
                      lineHeight: 0.9,
                      fontSize: "clamp(3.4rem, 6.4vw, 6.2rem)",
                    }}
                  >
                    Sam
                    <br />
                    Williamson
                  </h1>

                  {/* Lead */}
                  <p className="lead max-w-2xl">
                    Full-stack developer with a consulting background. AWS &amp;
                    PSM certified. I build clean, practical web apps with a focus
                    on clarity and usability.
                  </p>

                  {/* CTAs */}
                  <div className="mt-8 flex flex-col sm:flex-row gap-3">
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

                  {/* Proof row (same style you liked) */}
                  <div className="mt-10 rule-row">
                    <div className="rule-item">
                      <div className="rule-label">Certifications</div>
                      <div className="rule-value">AWS SAA · PSM I</div>
                    </div>

                    <div className="rule-divider" />

                    <div className="rule-item">
                      <div className="rule-label">Core stack</div>
                      <div className="rule-value">React · TypeScript · Node</div>
                    </div>

                    <div className="rule-divider" />

                    <div className="rule-item">
                      <div className="rule-label">Based</div>
                      <div className="rule-value">Helsinki</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: keep your current cards, but consistent spacing */}
              <div className="lg:col-span-4">
                <div className="card">
                  <p className="kicker">Focus</p>
                  <h2 className="card-title">Now</h2>
                  <p className="card-text">
                    Building portfolio-ready projects with modern tooling:
                    TypeScript, testing, CI/CD, and clean UI structure. Always
                    optimizing for readability and maintainability.
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="tag">TypeScript</span>
                    <span className="tag">Testing</span>
                    <span className="tag">CI/CD</span>
                  </div>

                  <div className="mt-6">
                    <Link to="/about" className="link">
                      More about me
                    </Link>
                  </div>
                </div>

                <div className="mt-6 card-subtle">
                  <p className="kicker">Links</p>
                  <h2 className="card-title">Profiles</h2>
                  <p className="card-text">Selected profiles and contact.</p>

                  {/* Reuse the “rule row” look you liked */}
                  <div className="mt-6 rule-row rule-row--links">
                    <a
                      className="rule-link"
                      href="https://github.com/samw0907"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>

                    <div className="rule-divider" />

                    <a
                      className="rule-link"
                      href="https://www.linkedin.com/in/sam-williamson-739530146/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      LinkedIn
                    </a>

                    <div className="rule-divider" />

                    <a
                      className="rule-link"
                      href="mailto:swilliamson_0907@outlook.com"
                    >
                      Email
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* The rest of Home stays as-is */}
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
