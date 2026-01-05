// src/pages/Home.tsx
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

      <div className="home-fx-bg" aria-hidden="true">
        <div className="hero-bg">
          <div className="hero-slab" />
          <div className="hero-slab-2" />
          <div className="hero-slab-3" />
          <div className="hero-slab-4" />
          <div className="hero-slab-5" />
          <div className="hero-slab-6" />
          <div className="hero-slab-7" />
          <div className="hero-spot-glow" />
          <div className="hero-noise" />
        </div>
      </div>

      <div className="home-fx-content">
        <HomeHero />
        <HomeCerts />

        <div className="container-max">
          <HomeProfile />
          <HomeTech />
          <HomeProjects />
          <HomeAbout />
          <HomeContact />
        </div>
      </div>
    </div>
  );
}
