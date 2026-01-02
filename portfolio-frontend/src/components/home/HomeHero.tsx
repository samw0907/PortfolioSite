export default function HomeHero() {
  return (
    <section className="section section--hero">
      <div className="full-bleed">
        <div className="hero-frame">
          <div className="container-max">
            <div className="hero-grid">
              <div className="hero-left">
                <p className="kicker">Full-stack developer</p>

                <h1 className="hero-title-strong">
                  <span className="hero-title-outline">Sam Williamson</span>
                  <span className="hero-title-spot hero-spotlight">Sam</span>
                  <span className="hero-title-spot hero-spotlight">
                    Williamson
                  </span>
                </h1>

                <p className="lead hero-lead">
                  Full-stack developer with a consulting background. AWS &amp;
                  PSM certified. I build clean, practical web apps with a focus
                  on clarity and usability.
                </p>

                <div className="hero-cta">
                  <a href="#projects" className="btn btn-primary">
                    View projects
                  </a>

                  <a
                    href="/assets/SamWilliamsonCV.pdf"
                    download
                    className="btn btn-secondary"
                  >
                    Download CV
                  </a>
                </div>

                <dl className="hero-proof" aria-label="Quick facts">
                  <div className="hero-proof-item">
                    <dt className="hero-proof-label">Certifications</dt>
                    <dd className="hero-proof-value">AWS SAA-C03 · PSM I</dd>
                  </div>

                  <div className="hero-proof-divider" aria-hidden="true" />

                  <div className="hero-proof-item">
                    <dt className="hero-proof-label">Core stack</dt>
                    <dd className="hero-proof-value">
                      React · TypeScript · Node
                    </dd>
                  </div>

                  <div className="hero-proof-divider" aria-hidden="true" />

                  <div className="hero-proof-item">
                    <dt className="hero-proof-label">Based</dt>
                    <dd className="hero-proof-value">Espoo</dd>
                  </div>
                </dl>

                <dl
                  className="hero-proof hero-proof--links"
                  aria-label="Profile links"
                >
                  <div className="hero-proof-item">
                    <dt className="hero-proof-label">GitHub</dt>
                    <dd className="hero-proof-value">
                      <a
                        className="hero-proof-link"
                        href="https://github.com/samw0907"
                        target="_blank"
                        rel="noreferrer"
                      >
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
    </section>
  );
}
