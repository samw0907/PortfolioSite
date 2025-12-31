import { useEffect, useRef } from "react";
import HomeAbout from "../components/home/HomeAbout";

export default function Home() {
  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const attachSpotlight = (el: HTMLDivElement | null) => {
      if (!el) return () => {};

      el.style.setProperty("--mx", "40%");
      el.style.setProperty("--my", "34%");

      let rafId: number | null = null;
      let lastX = 0;
      let lastY = 0;

      const applySpot = () => {
        rafId = null;

        const rect = el.getBoundingClientRect();
        if (rect.width === 0 || rect.height === 0) return;

        const x = ((lastX - rect.left) / rect.width) * 100;
        const y = ((lastY - rect.top) / rect.height) * 100;

        const clampedX = Math.max(0, Math.min(100, x));
        const clampedY = Math.max(0, Math.min(100, y));

        el.style.setProperty("--mx", `${clampedX}%`);
        el.style.setProperty("--my", `${clampedY}%`);
      };

      const onPointerMove = (e: PointerEvent) => {
        lastX = e.clientX;
        lastY = e.clientY;
        if (rafId === null) rafId = window.requestAnimationFrame(applySpot);
      };

      el.addEventListener("pointermove", onPointerMove, { passive: true });

      return () => {
        el.removeEventListener("pointermove", onPointerMove);
        if (rafId !== null) cancelAnimationFrame(rafId);
      };
    };

    const detachHero = attachSpotlight(heroRef.current);

    return () => {
      detachHero();
    };
  }, []);

  return (
    <div className="page">
      <div id="home" className="section-anchor" />

      <section className="section section--hero">
        <div className="full-bleed">
          <div ref={heroRef} className="hero-frame">
            <div className="hero-bg" aria-hidden="true">
              <div className="hero-slab" />
              <div className="hero-slab-2" />
              <div className="hero-spot-glow" />
              <div className="hero-noise" />
            </div>

            <div className="container-max">
              <div className="hero-grid">
                <div className="hero-left">
                  <p className="kicker">Full-stack developer</p>

                  <h1 className="hero-title-strong">
                    <span className="hero-title-outline">Sam Williamson</span>
                    <span className="hero-title-spot hero-spotlight">Sam</span>
                    <span className="hero-title-spot hero-spotlight">Williamson</span>
                  </h1>

                  <p className="lead hero-lead">
                    Full-stack developer with a consulting background. AWS &amp; PSM certified. I build clean, practical
                    web apps with a focus on clarity and usability.
                  </p>

                  <div className="hero-cta">
                    <a href="#projects" className="btn btn-primary">
                      View projects
                    </a>
                    <a href="/assets/SamWilliamsonCV.pdf" download className="btn btn-secondary">
                      Download CV
                    </a>
                  </div>

                  <dl className="hero-proof" aria-label="Quick facts">
                    <div className="hero-proof-item">
                      <dt className="hero-proof-label">Certifications</dt>
                      <dd className="hero-proof-value">AWS SAA · PSM I</dd>
                    </div>

                    <div className="hero-proof-divider" aria-hidden="true" />

                    <div className="hero-proof-item">
                      <dt className="hero-proof-label">Core stack</dt>
                      <dd className="hero-proof-value">React · TypeScript · Node</dd>
                    </div>

                    <div className="hero-proof-divider" aria-hidden="true" />

                    <div className="hero-proof-item">
                      <dt className="hero-proof-label">Based</dt>
                      <dd className="hero-proof-value">Espoo</dd>
                    </div>
                  </dl>

                  <dl className="hero-proof hero-proof--links" aria-label="Profile links">
                    <div className="hero-proof-item">
                      <dt className="hero-proof-label">GitHub</dt>
                      <dd className="hero-proof-value">
                        <a className="hero-proof-link" href="https://github.com/samw0907" target="_blank" rel="noreferrer">
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

        <div className="container-max">
          {/* ✅ About section moved out to HomeAbout.tsx */}
          <div className="section">
            <HomeAbout />
          </div>

          <div id="projects" className="section-anchor" />
          <div className="section">
            <div className="card-subtle">
              <p className="kicker">Projects</p>
              <h2 className="card-title">Next pass</h2>
              <p className="card-text">We’ll reintroduce projects once the About section feels right.</p>
            </div>
          </div>

          <div id="contact" className="section-anchor" />
          <div className="section">
            <div className="card-subtle">
              <p className="kicker">Contact</p>
              <h2 className="card-title">Next pass</h2>
              <p className="card-text">We’ll reintroduce contact after projects are locked in.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
