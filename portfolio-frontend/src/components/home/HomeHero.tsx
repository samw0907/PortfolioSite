// src/components/home/HomeHero.tsx
import { useEffect, useRef } from "react";

export default function HomeHero() {
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;

    el.style.setProperty("--hx", "40%");
    el.style.setProperty("--hy", "34%");

    let rafId: number | null = null;
    let lastX = 0;
    let lastY = 0;

    const apply = () => {
      rafId = null;

      const rect = el.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;

      const x = ((lastX - rect.left) / rect.width) * 100;
      const y = ((lastY - rect.top) / rect.height) * 100;

      const clampedX = Math.max(0, Math.min(100, x));
      const clampedY = Math.max(0, Math.min(100, y));

      el.style.setProperty("--hx", `${clampedX}%`);
      el.style.setProperty("--hy", `${clampedY}%`);
    };

    const onPointerMove = (e: PointerEvent) => {
      lastX = e.clientX;
      lastY = e.clientY;
      if (rafId === null) rafId = window.requestAnimationFrame(apply);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section className="section section--hero">
      <div className="full-bleed">
        <div className="hero-frame">
          <div className="container-max">
            <div className="hero-grid">
              <div className="hero-left">
                <p className="kicker">Full-stack developer</p>

                <h1 ref={titleRef} className="hero-title-strong">
                  <span className="hero-title-outline">Sam Williamson</span>

                  <span className="hero-spotlight hero-title-fill">
                    <span className="hero-title-spot">Sam</span>
                    <span className="hero-title-spot">Williamson</span>
                  </span>
                </h1>

                <p className="lead hero-lead">
                  Full-stack developer with a consulting background. AWS &amp;
                  PSM certified. I build clean, practical web apps with a focus
                  on clarity and usability.
                </p>

                <div className="hero-cta">
                  <a href="#projects" className="btn btn-primary">
                    View projects
                  </a>

                  <a
                    href="/assets/SamWilliamsonCV.pdf"
                    download
                    className="btn btn-secondary"
                  >
                    Download CV
                  </a>
                </div>

                <dl
                  className="hero-proof hero-proof--current"
                  aria-label="Current focus"
                  style={
                    {
                      "--proof-x": "455px",
                      "--proof-y": "0px",
                      "--proof-rule-w": "400px",
                    } as React.CSSProperties
                  }
                >
                  <div className="hero-proof-item">
                    <dt className="hero-proof-label">Current Project</dt>
                    <dd className="hero-proof-value">
                      ToolSharer · AWS serverless architecture
                    </dd>
                  </div>
                </dl>

                <dl
                  className="hero-proof hero-proof--links"
                  aria-label="Location and profile links"
                  style={
                    {
                      "--proof-x": "365px",
                      "--proof-y": "0px",
                      "--proof-rule-w": "490px",
                    } as React.CSSProperties
                  }
                >
                  <div className="hero-proof-item">
                    <dt className="hero-proof-label">Based</dt>
                    <dd className="hero-proof-value">Espoo</dd>
                  </div>

                  <div className="hero-proof-divider" aria-hidden="true" />

                  <div className="hero-proof-item">
                    <dt className="hero-proof-label">GitHub</dt>
                    <dd className="hero-proof-value">
                      <a
                        className="hero-proof-link"
                        href="https://github.com/samw0907"
                        target="_blank"
                        rel="noreferrer"
                      >
                        samw0907
                      </a>
                    </dd>
                  </div>

                  <div className="hero-proof-divider" aria-hidden="true" />

                  <div className="hero-proof-item">
                    <dt className="hero-proof-label">LinkedIn</dt>
                    <dd className="hero-proof-value">
                      <a
                        className="hero-proof-link"
                        href="https://www.linkedin.com/in/sam-williamson-739530146/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        sam-williamson
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="hero-right" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
