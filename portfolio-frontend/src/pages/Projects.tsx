const Projects = () => (
    <section className="space-y-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold">Projects</h2>
  
      <article className="border rounded shadow p-6 space-y-4 bg-white dark:bg-gray-800">
        <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400">TriSwift</h3>
        <p className="text-gray-700 dark:text-gray-300">
          A full-featured fitness tracking app built specifically for triathletes. TriSwift allows users to log workouts, track performance over time, and manage multi-sport sessions including transitions.
        </p>
  
        <div>
          <h4 className="font-semibold text-gray-800 dark:text-gray-200">Tech Stack:</h4>
          <p className="text-gray-700 dark:text-gray-300">
            React · TypeScript · Node.js · Express · PostgreSQL · GraphQL · Docker · Fly.io · GitHub Actions (CI/CD)
          </p>
        </div>
  
        <div>
          <h4 className="font-semibold text-gray-800 dark:text-gray-200">Features:</h4>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
            <li>Log and edit swim, bike, run sessions</li>
            <li>Multi-sport session support with transitions</li>
            <li>Personal records and performance graphs</li>
            <li>Responsive design with dark mode support</li>
            <li>Mobile app via React Native</li>
            <li>CI/CD pipeline with Playwright tests and deployment to Fly.io</li>
          </ul>
        </div>
  
        <div className="flex gap-4 mt-4">
          <a
            href="https://github.com/samw0907/TriSwift"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            🔗 View GitHub Repo
          </a>
          <a
            href="https://triswift-frontend.fly.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            🚀 Live Demo
          </a>
        </div>
      </article>
    </section>
  );
  
  export default Projects;
  