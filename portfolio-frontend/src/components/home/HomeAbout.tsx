export default function HomeAbout() {
  return (
    <section aria-label="About">
      <p className="kicker">About</p>
      <h2 className="page-title">Background &amp; focus</h2>

      <div className="grid gap-10 lg:grid-cols-12 mt-10">
        <div className="lg:col-span-7">
          <p className="lead">
            I’m a full-stack developer with several years of professional
            experience in consulting, and a strong interest in building clean,
            well-structured web applications.
          </p>

          <div className="prose">
            <p>
              After moving to Finland, I initially focused on continuing my work
              in geo-environmental consulting. It became clear that progressing
              in the field would be difficult without fluent professional
              Finnish, so I committed to a transition into software development.
            </p>
            <p>
              I completed the Helsinki University Full Stack Open course and
              have since been building full-stack projects to demonstrate
              practical skills across frontend, backend, databases, testing, and
              deployment.
            </p>
          </div>
        </div>

        <div className="lg:col-span-5 space-y-6">
          <div className="card">
            <h3 className="card-title">Strengths</h3>
            <ul className="list-clean mt-4">
              <li>Clear communication and stakeholder management from consulting</li>
              <li>Strong bias toward clean structure and maintainable code</li>
              <li>Comfortable across frontend, backend, databases, and deployment</li>
            </ul>
          </div>

          <div className="card-subtle">
            <h3 className="card-title">Tech snapshot</h3>
            <p className="card-text">
              React, TypeScript, Node/Express, PostgreSQL, REST/GraphQL, Docker,
              CI/CD, Playwright/Vitest.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
