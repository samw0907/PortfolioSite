/* src/pages/Home.tsx */
import { useEffect, useRef } from "react";
import HomeHero from "../components/home/HomeHero";
import HomeCerts from "../components/home/HomeCerts";
import HomeProfile from "../components/home/HomeProfile";
import HomeTech from "../components/home/HomeTech";
import HomeProjects from "../components/home/HomeProjects";
import HomeAbout from "../components/home/HomeAbout";
import HomeContact from "../components/home/HomeContact";

export default function Home() {
  const pageFxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = pageFxRef.current;
    if (!root) return;

    const supportsHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    const target =
      (root.querySelector(".home-fx-bg") as HTMLDivElement | null) ??
      (root.querySelector(".home-fx-content") as HTMLDivElement | null) ??
      root;

    root.style.setProperty("--mx", "40%");
    root.style.setProperty("--my", "34%");

    if (!supportsHover) return;

    let rafId: number | null = null;
    let lastX = 0;
    let lastY = 0;

    const applySpot = () => {
      rafId = null;

      const rect = target.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;

      const x = ((lastX - rect.left) / rect.width) * 100;
      const y = ((lastY - rect.top) / rect.height) * 100;

      const clampedX = Math.max(0, Math.min(100, x));
      const clampedY = Math.max(0, Math.min(100, y));

      root.style.setProperty("--mx", `${clampedX}%`);
      root.style.setProperty("--my", `${clampedY}%`);
    };

    const onPointerMove = (e: PointerEvent) => {
      lastX = e.clientX;
      lastY = e.clientY;
      if (rafId === null) rafId = window.requestAnimationFrame(applySpot);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div ref={pageFxRef} className="page home-fx">
      <div id="home" className="section-anchor" />

      <div className="home-fx-bg" aria-hidden="true">
        <div className="hero-bg">
          <div className="hero-slab" />
          <div className="hero-slab-2" />
          <div className="hero-slab-3" />
          <div className="hero-slab-4" />
          <div className="hero-slab-5" />
          <div className="hero-slab-6" />
          <div className="hero-slab-7" />
          <div className="hero-slab-8" />
          <div className="hero-slab-9" />
          <div className="hero-slab-10" />
          <div className="hero-slab-11" />
          <div className="hero-slab-12" />
          <div className="hero-spot-glow" />
          <div className="hero-noise" />
        </div>
      </div>

      <div className="home-fx-content">
        <div className="fx-band fx-band--a" data-band="hero">
          <div className="fx-band-bg" aria-hidden="true">
            <div className="hero-bg">
              <div className="hero-slab" />
              <div className="hero-slab-2" />
              <div className="hero-slab-3" />
              <div className="hero-noise" />
            </div>
          </div>

          <div className="fx-band-content">
            <HomeHero />
            <HomeCerts />
          </div>
        </div>

        <div className="container-max">
          <div className="fx-band fx-band--b" data-band="profile-tech">
            <div className="fx-band-bg" aria-hidden="true">
              <div className="hero-bg">
                <div className="hero-slab-4" />
                <div className="hero-slab-5" />
                <div className="hero-noise" />
              </div>
            </div>

            <div className="fx-band-content">
              <HomeProfile />
              <HomeTech />
            </div>
          </div>

          <div className="fx-band fx-band--c" data-band="projects">
            <div className="fx-band-bg" aria-hidden="true">
              <div className="hero-bg">
                <div className="hero-slab-6" />
                <div className="hero-slab-7" />
                <div className="hero-noise" />
              </div>
            </div>

            <div className="fx-band-content">
              <HomeProjects />
            </div>
          </div>

          <div className="fx-band fx-band--d" data-band="about-contact">
            <div className="fx-band-bg" aria-hidden="true">
              <div className="hero-bg">
                <div className="hero-slab-8" />
                <div className="hero-slab-9" />
                <div className="hero-slab-10" />
                <div className="hero-slab-11" />
                <div className="hero-slab-12" />
                <div className="hero-noise" />
              </div>
            </div>

            <div className="fx-band-content">
              <HomeAbout />
              <HomeContact />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
