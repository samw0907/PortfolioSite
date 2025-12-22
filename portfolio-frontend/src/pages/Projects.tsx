export default function Projects() {
  return (
    <div className="page">
      <section className="section">
        <div className="container-max">
          <p className="kicker">Projects</p>
          <h1 className="page-title">Selected work</h1>

          <div className="grid gap-6">
            <article className="card">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex-1">
                  <h2 className="card-title">TriSwift</h2>
                  <p className="card-text">
                    Activity tracking app built for triathletes. Includes authentication, dashboards, multi-sport sessions,
                    personal records, visualizations, and CI/CD with end-to-end testing.
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

                  <div className="mt-5 flex flex-col sm:flex-row gap-3">
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

                {/* Placeholder visual block for now */}
                <div className="lg:w-[320px]">
                  <div className="aspect-[16/10] rounded-xl border border-black/10 dark:border-white/10 bg-gray-100 dark:bg-white/5" />
                  <p className="mt-2 text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    Screenshots coming back in next pass
                  </p>
                </div>
              </div>
            </article>

            <article className="card">
              <h2 className="card-title">MineSecure</h2>
              <p className="card-text">
                Concept project inspired by my background in geo-environmental consulting: tracking remediation work,
                reducing manual errors, and improving project visibility.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {["Product design", "Data model", "Dashboard", "Mapping (future)"].map((t) => (
                  <span key={t} className="tag">
                    {t}
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
