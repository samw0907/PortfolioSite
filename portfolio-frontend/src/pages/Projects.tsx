const Projects = () => (
 <section className="font-josefin space-y-8 max-w-4xl mx-auto px-4 pt-10 lg:pt-24">
    <h2 className="text-3xl font-bold">Projects</h2>

    <article className="border rounded shadow p-6 space-y-4 bg-white dark:bg-gray-800">
      <h3 className="text-2xl font-semibold text-teal-600 dark:text-teal-400">TriSwift</h3>
      <p className="text-gray-700 dark:text-gray-300">
        A fitness tracking app built specifically for triathletes. TriSwift allows users to log sessions, either for single sports or multi-sport sessions including transitions.
      </p>

      <div>
        <h4 className="font-semibold text-gray-800 dark:text-gray-200">Tech Stack:</h4>
        <p className="text-gray-700 dark:text-gray-300">
          React · TypeScript · Node.js · Express · PostgreSQL · GraphQL · REST API · Docker · Fly.io · GitHub Actions (CI/CD)
        </p>
      </div>

      <div>
        <h4 className="font-semibold text-gray-800 dark:text-gray-200">Features:</h4>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
          <li>Log and edit swim, bike, run sessions</li>
          <li>Multi-sport session support with transitions</li>
          <li>Personal records and performance graphs</li>
          <li>CI/CD pipeline with Playwright tests and deployment to Fly.io</li>
        </ul>
      </div>

      <div className="flex gap-4 mt-4">
        <a
          href="https://github.com/samw0907/TriSwift"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-600 hover:underline"
        >
          🔗 View GitHub Repo
        </a>
        <a
          href="https://triswift-frontend.fly.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-600 hover:underline"
        >
          🚀 Live Demo
        </a>
      </div>
    </article>

    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Coming Soon...</h3>
    {/* Coming Soon Project */}
    <article className="border rounded shadow p-6 space-y-4 bg-white dark:bg-gray-800">
      <h3 className="text-2xl font-semibold text-teal-600 dark:text-teal-400">MineSecure</h3>
      <p className="text-gray-700 dark:text-gray-300">
        Utilizing my specialist knowledge of stability assessments of abandoned mines and remediation through high-pressure grouting, I have begun framing out a concept to better automate the tracking of such projects, reducing human error and increasing productivity.
      </p>
    </article>
  </section>
);

export default Projects;
