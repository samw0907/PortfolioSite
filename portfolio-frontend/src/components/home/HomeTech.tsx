// src/components/home/HomeTech.tsx
import "../../styles/homeTech.css";
import {
  siReact,
  siTypescript,
  siJavascript,
  siNodedotjs,
  siPostgresql,
  siDocker,
  siGithubactions,
  siVitest,
} from "simple-icons/icons";

type TechItem = {
  name: string;
  icon: { title: string; hex: string; svg: string };
};

const techItems: TechItem[] = [
  { name: "React", icon: siReact },
  { name: "TypeScript", icon: siTypescript },
  { name: "JavaScript", icon: siJavascript },
  { name: "Node.js", icon: siNodedotjs },
  { name: "PostgreSQL", icon: siPostgresql },
  { name: "Docker", icon: siDocker },
  { name: "GitHub Actions", icon: siGithubactions },
  { name: "Vitest", icon: siVitest },
];

export default function HomeTech() {
  return (
    <section className="section" aria-label="Tech stack">
      <div className="container-max">
        <header className="tech-header">
          <h2 className="tech-heading">Tech</h2>
        </header>

        <div className="tech-grid">
          {techItems.map((tech) => (
            <div key={tech.name} className="tech-item">
              <span
                className="tech-icon"
                aria-hidden
                dangerouslySetInnerHTML={{ __html: tech.icon.svg }}
                style={{ fill: `#${tech.icon.hex}` }}
              />
              <span className="tech-label">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
