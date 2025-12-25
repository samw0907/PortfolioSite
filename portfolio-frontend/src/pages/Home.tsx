import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="page">
      <section className="section">
        <div className="container-max">
          <div className="grid gap-10 lg:grid-cols-12 items-start">
            {/* Hero */}
            <div className="lg:col-span-8">
              <p className="kicker">Full-stack developer</p>

              <h1 className="hero-title">
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

              {/* Proof row */}
              <div className="mt-10 grid gap-3 sm:grid-cols-3 max-w-2xl">
                <div className="stat">
                  <div className="stat-label">Certifications</div>
                  <div className="stat-value">AWS SAA · PSM I</div>
                </div>
                <div className="stat">
                  <div className="stat-label">Core stack</div>
                  <div className="stat-value">React · TypeScript · Node</div>
                </div>
                <div className="stat">
                  <div className="stat-label">Based</div>
                  <div className="stat-value">Helsinki</div>
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className="lg:col-span-4">
              <div className="card">
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
                <h2 className="card-title">Links</h2>
                <p className="card-text">
                  Selected profiles and contact.
                </p>

                <div className="mt-4 flex flex-col gap-2">
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
                  <a
                    className="link"
                    href="mailto:swilliamson_0907@outlook.com"
                  >
                    Email
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="divider" />

          {/* Selected work preview */}
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
