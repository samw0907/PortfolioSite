// src/components/home/HomeProjects.tsx
export default function HomeProjects() {
  return (
    <section className="section" aria-label="Projects">
      <div id="projects" className="section-anchor" />

      <p className="kicker">Projects</p>
      <h2 className="page-title">Selected work</h2>

      <div className="mt-10 space-y-6">
        <article className="card">
          <div className="flex flex-col lg:flex-row lg:items-start gap-6">
            <div className="flex-1">
              <h3 className="card-title">TriSwift</h3>

              <p className="card-text">
                Activity tracking app built for triathletes. Authentication, session and activity
                management, automatic personal records, pace calculations, visualisation, and CI/CD
                with end-to-end testing.
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
            </div>

            <div className="lg:w-[320px]">
              <div className="aspect-[16/10] rounded-xl border border-black/10 dark:border-white/10 bg-gray-100 dark:bg-white/5" />
              <p className="mt-2 text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Screenshots coming back in next pass
              </p>
            </div>
          </div>
        </article>

        <div className="divider" />

        <div>
          <p className="kicker">Upcoming projects</p>
          <h3 className="page-title">In progress</h3>
        </div>

        <div className="mt-8 space-y-8">
          <article className="card-subtle">
            <h4 className="card-title">ToolSharer</h4>

            <p className="card-text">
              A cloud-native tool sharing app focused on production-style AWS infrastructure,
              authentication, clean APIs, and image/location handling.
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
            <h4 className="card-title">MineSecure</h4>

            <p className="card-text">
              A concept project inspired by my geo-environmental consulting background: improving
              remediation/stabilisation tracking, reducing spreadsheet risk, and increasing project
              visibility.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {["Workflow modelling", "Dashboard UX", "Domain modelling", "Mapping (planned)"].map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
