import { Link } from "react-router-dom";

export default function HomeHero() {
  return (
    <section className="section">
      <div className="container-max">
        <div
          className="pb-10 sm:pb-14 hero-divider"
        >
          <div className="grid gap-10 lg:grid-cols-12 items-start">
            <div className="lg:col-span-8">
              <p className="kicker">Full-stack developer</p>

              <h1 className="hero-title hero-title--impact">
                Sam
                <br />
                Williamson
              </h1>

              <p className="lead max-w-2xl">
                Full-stack developer with a consulting background. AWS &amp; PSM
                certified. I build clean, practical web apps with a focus on
                clarity and usability.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link to="/#projects" className="btn btn-primary">
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

              <div className="mt-10 max-w-2xl">
                <div className="rule-row">
                  <div className="rule-item">
                    <div className="rule-label">Certifications</div>
                    <div className="rule-value">AWS SAA · PSM I</div>
                  </div>

                  <div className="rule-divider" aria-hidden="true" />

                  <div className="rule-item">
                    <div className="rule-label">Core stack</div>
                    <div className="rule-value">React · TypeScript · Node</div>
                  </div>

                  <div className="rule-divider" aria-hidden="true" />

                  <div className="rule-item">
                    <div className="rule-label">Based</div>
                    <div className="rule-value">Helsinki</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column: strong visual card */}
            <div className="lg:col-span-4">
              <div className="hero-panel">
                <p className="kicker">Focus</p>
                <h2 className="card-title">Now</h2>
                <p className="card-text">
                  Building portfolio-ready projects with modern tooling:
                  TypeScript, testing, CI/CD, and clean UI structure.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="tag">TypeScript</span>
                  <span className="tag">Testing</span>
                  <span className="tag">CI/CD</span>
                </div>

                <div className="mt-7 hero-accent-row" aria-hidden="true">
                  <div className="hero-accent-bar" />
                  <div className="hero-accent-slash" />
                </div>

                <div className="mt-7">
                  <Link to="/#about" className="link">
                    More about me
                  </Link>
                </div>
              </div>

              {/* Profiles using the same rule-row style */}
              <div className="mt-6 card-subtle">
                <p className="kicker">Profiles</p>

                <div className="mt-4 rule-row rule-row--links">
                  <a
                    className="rule-link"
                    href="https://github.com/samw0907"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>

                  <div className="rule-divider" aria-hidden="true" />

                  <a
                    className="rule-link"
                    href="https://www.linkedin.com/in/sam-williamson-739530146/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>

                  <div className="rule-divider" aria-hidden="true" />

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

          {/* Decorative diagonals (pure CSS) */}
          <div className="hero-diagonal hero-diagonal--a" aria-hidden="true" />
          <div className="hero-diagonal hero-diagonal--b" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
