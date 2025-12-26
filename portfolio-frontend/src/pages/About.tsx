export default function About() {
  return (
    <div className="page">
      <section className="section">
        <div className="container-max">
          <p className="kicker">About</p>
          <h1 className="page-title">Background & focus</h1>

          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="lead">
                I’m a full-stack developer with several years of professional experience in consulting,
                and a strong interest in building clean, well-structured web applications.
              </p>

              <div className="prose">
                <p>
                  After moving to Finland, I initially focused on continuing my work in geo-environmental consulting.
                  It became clear that progressing in the field would be difficult without fluent professional Finnish,
                  so I committed to a transition into software development.
                </p>
                <p>
                  I completed the Helsinki University Full Stack Open course and have since been building full-stack projects
                  to demonstrate practical skills across frontend, backend, databases, testing, and deployment.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="card">
                <h2 className="card-title">Strengths</h2>
                <ul className="list-clean mt-4">
                  <li>Clear communication and stakeholder management from consulting</li>
                  <li>Strong bias toward clean structure and maintainable code</li>
                  <li>Comfortable across frontend, backend, databases, and deployment</li>
                </ul>
              </div>

              <div className="mt-6 card">
                <h2 className="card-title">Tech snapshot</h2>
                <p className="card-text">
                  React, TypeScript, Node/Express, PostgreSQL, REST/GraphQL, Docker, CI/CD, Playwright/Vitest.
                </p>
              </div>
            </div>
          </div>

          <div className="divider" />

          <div className="card">
            <p className="kicker">Personal</p>
            <h2 className="card-title">Sport</h2>
            <p className="card-text">
              Outside of work, sport has always been a big part of my life. In recent years I’ve focused on running and
              I’m now shifting into triathlon with a longer-term goal of Ironman 70.3 Tallinn (August 2026).
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
