// src/components/home/HomeProjects.tsx
import { useState } from "react";
import "../../styles/homeProjects.css";

import TriSwift1 from "../../assets/TriSwift1.png";
import TriSwift2 from "../../assets/TriSwift2.png";
import TriSwift3 from "../../assets/TriSwift3.png";
import TriSwift4 from "../../assets/TriSwift4.png";
import TriSwift5 from "../../assets/TriSwift5.png";

const triswiftImages = [TriSwift1, TriSwift2, TriSwift3, TriSwift4, TriSwift5];

export default function HomeProjects() {
  const [activeImage, setActiveImage] = useState(0);

  function prevImage() {
    setActiveImage((i) => (i === 0 ? triswiftImages.length - 1 : i - 1));
  }

  function nextImage() {
    setActiveImage((i) => (i === triswiftImages.length - 1 ? 0 : i + 1));
  }

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
            </div>

            <div className="project-visual">
              <div className="project-media">
                <img
                  src={triswiftImages[activeImage]}
                  alt={`TriSwift screenshot ${activeImage + 1}`}
                  className="project-screenshot"
                />

                <div className="project-visual-controls">
                  <button
                    type="button"
                    className="project-visual-btn"
                    onClick={prevImage}
                    aria-label="Previous screenshot"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    className="project-visual-btn"
                    onClick={nextImage}
                    aria-label="Next screenshot"
                  >
                    ›
                  </button>
                </div>
              </div>

              <div className="project-visual-actions">
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
          </div>
        </article>

        <p className="kicker">In progress</p>

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
