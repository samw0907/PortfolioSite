export default function Projects() {
  return (
    <div className="page">
      <section className="section">
        <div className="container-max">
          {/* Header */}
          <p className="kicker">Projects</p>
          <h1 className="page-title">Selected work</h1>

          {/* ------------------------------------------------------------ */}
          {/* Featured project                                             */}
          {/* ------------------------------------------------------------ */}
          <div className="mt-10 space-y-6">
            <article className="card">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex-1">
                  <h2 className="card-title">TriSwift</h2>

                  <p className="card-text">
                    Activity tracking app built for triathletes. Includes user
                    authentication, session and activity management, automatic
                    personal records, pace calculations, data visualisation, and
                    a full CI/CD pipeline with end-to-end testing.
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
                    ].map((tech) => (
                      <span key={tech} className="tag">
                        {tech}
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

                {/* Placeholder visual */}
                <div className="lg:w-[320px]">
                  <div className="aspect-[16/10] rounded-xl border border-black/10 dark:border-white/10 bg-gray-100 dark:bg-white/5" />
                  <p className="mt-2 text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    Screenshots coming back in next pass
                  </p>
                </div>
              </div>
            </article>
          </div>

          {/* ------------------------------------------------------------ */}
          {/* Upcoming projects                                            */}
          {/* ------------------------------------------------------------ */}
          <div className="divider" />

          <div>
            <p className="kicker">Upcoming projects</p>
            <h2 className="page-title">In progress</h2>
          </div>

          {/* IMPORTANT: vertical stack, not a grid */}
          <div className="mt-8 space-y-8">
            {/* ToolSharer */}
            <article className="card">
              <h3 className="card-title">ToolSharer</h3>

              <p className="card-text">
                A cloud-native tool sharing platform designed around real-world
                ownership and lending workflows. Users can list tools with images
                and locations, authenticate via Google OAuth, and manage borrow
                requests with clear state transitions. The project is focused on
                production-style AWS infrastructure and clean API design.
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
                ].map((tech) => (
                  <span key={tech} className="tag">
                    {tech}
                  </span>
                ))}
              </div>
            </article>

            {/* MineSecure */}
            <article className="card">
              <h3 className="card-title">MineSecure</h3>

              <p className="card-text">
                A concept project inspired by my background in geo-environmental
                consulting. MineSecure explores how remediation and stabilisation
                work could be tracked digitally, reducing reliance on
                spreadsheets while improving visibility across sites,
                contractors, and project teams.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "Product design",
                  "Workflow modelling",
                  "Dashboard UX",
                  "Domain-driven modelling",
                  "Mapping (planned)",
                ].map((tech) => (
                  <span key={tech} className="tag">
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
