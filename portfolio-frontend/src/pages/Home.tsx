import { useEffect, useRef } from "react";
import HomeHero from "../components/home/HomeHero";
import HomeAbout from "../components/home/HomeAbout";

export default function Home() {
  const pageFxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = pageFxRef.current;
    if (!el) return;

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
  }, []);

  return (
    <div ref={pageFxRef} className="page home-fx">
      <div id="home" className="section-anchor" />

      {/* ONE shared background for the entire Home page */}
      <div className="home-fx-bg" aria-hidden="true">
        <div className="hero-bg">
          <div className="hero-slab" />
          <div className="hero-slab-2" />
          <div className="hero-spot-glow" />
          <div className="hero-noise" />
        </div>
      </div>

      <div className="home-fx-content">
        <HomeHero />
        <HomeAbout />

        <div className="container-max">
          <div id="projects" className="section-anchor" />
          <div className="section">
            <div className="card-subtle">
              <p className="kicker">Projects</p>
              <h2 className="card-title">Next pass</h2>
              <p className="card-text">
                We’ll reintroduce projects once the About section feels right.
              </p>
            </div>
          </div>

          <div id="contact" className="section-anchor" />
          <div className="section">
            <div className="card-subtle">
              <p className="kicker">Contact</p>
              <h2 className="card-title">Next pass</h2>
              <p className="card-text">
                We’ll reintroduce contact after projects are locked in.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
