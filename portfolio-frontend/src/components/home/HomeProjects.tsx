export default function HomeProjects() {
  return (
    <section aria-label="Projects">
      <p className="kicker">Projects</p>
      <h2 className="page-title">Selected work</h2>

      <div className="mt-10 space-y-6">
        <article className="card">
          <h3 className="card-title">TriSwift</h3>
          <p className="card-text">
            Activity tracking app built for triathletes. Authentication, session
            and activity management, automatic personal records, pace
            calculations, visualisation, and CI/CD with end-to-end testing.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
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

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              className="btn btn-secondary"
              href="https://github.com/samw0907/TriSwift"
              target="_blank"
              rel="noreferrer"
            >
              GitHub repo
            </a>
            <a
              className="btn btn-primary"
              href="https://triswift-frontend.fly.dev"
              target="_blank"
              rel="noreferrer"
            >
              Live demo
            </a>
          </div>
        </article>

        <article className="card-subtle">
          <h3 className="card-title">ToolSharer</h3>
          <p className="card-text">
            Cloud-native tool sharing app focused on production-style AWS
            infrastructure, authentication, clean APIs, and image/location
            handling.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
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
        </article>

        <article className="card-subtle">
          <h3 className="card-title">MineSecure</h3>
          <p className="card-text">
            A concept project inspired by my geo-environmental consulting
            background: improving remediation/stabilisation tracking, reducing
            spreadsheet risk, and increasing project visibility.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {["Workflow modelling", "Dashboard UX", "Domain modelling", "Mapping (planned)"].map(
              (t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              )
            )}
          </div>
        </article>
      </div>
    </section>
  );
}
