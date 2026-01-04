// src/components/home/HomeProjects.tsx
import "../../styles/homeProjects.css";

export default function HomeProjects() {
  return (
    <section className="section projects" aria-label="Projects">
      <div id="projects" className="section-anchor" />

      <p className="kicker">Projects</p>
      <h2 className="page-title projects-title">Projects</h2>

      <div className="projects-stack">
        <article className="project project--featured" aria-label="TriSwift project">
          <div className="project-rail" aria-hidden="true" />

          <div className="project-grid">
            <div className="project-main">
              <h3 className="project-name">TriSwift</h3>
              <p className="project-desc">
                Activity tracking built for triathletes — authentication, sessions & activities, automatic personal
                records, pace tools, visualisation, and CI/CD with end-to-end testing.
              </p>

              <div className="project-tags" aria-label="TriSwift tech stack">
                {[
                  "React",
                  "TypeScript",
                  "Node",
                  "Express",
                  "PostgreSQL",
                  "GraphQL",
                  "Docker",
                  "Fly.io",
                  "GitHub Actions",
                  "Playwright",
                ].map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>

              <div className="project-actions">
                <a
                  className="btn btn-secondary"
                  href="https://github.com/samw0907/TriSwift"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  className="btn btn-primary"
                  href="https://triswift-frontend.fly.dev"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live
                </a>
              </div>
            </div>

            <div className="project-visual" aria-hidden="true">
              <div className="project-visual-inner">
                <div className="project-visual-chip">Screenshots next pass</div>
              </div>
            </div>
          </div>
        </article>

        <article className="project project--secondary" aria-label="ToolSharer project">
          <div className="project-rail" aria-hidden="true" />

          <div className="project-secondary">
            <div className="project-secondary-head">
              <h3 className="project-name">ToolSharer</h3>
              <p className="project-desc">
                Cloud-native tool sharing app focused on production-style AWS infrastructure, authentication, clean APIs,
                and image/location handling.
              </p>
            </div>

            <div className="project-tags" aria-label="ToolSharer tech stack">
              {[
                "React",
                "TypeScript",
                "FastAPI",
                "PostgreSQL (RDS)",
                "ECS Fargate",
                "S3",
                "CloudFront",
                "Lambda",
                "AWS CDK",
                "Google OAuth2",
              ].map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
