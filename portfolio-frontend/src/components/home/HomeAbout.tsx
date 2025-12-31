import { useEffect, useMemo, useRef } from "react";

type AboutBlock = {
  kicker: string;
  title: string;
  body: string[];
  bullets?: string[];
};

export default function HomeAbout() {
  const aboutFxRef = useRef<HTMLDivElement | null>(null);

  const profileBlock: AboutBlock = useMemo(
    () => ({
      kicker: "",
      title: "Profile",
      body: [
        "I’m a full-stack developer with a background in geo-environmental consulting, focused on building clean, practical web applications.",
        "My main portfolio project is TriSwift: an activity-tracking app built end-to-end, covering authentication, core CRUD flows, and performance-focused features like personal records and pace tools.",
        "I’m comfortable across frontend and backend, and I care about clarity: predictable UI, clean data flows, and maintainable structure.",
        "I’m AWS SAA and PSM I certified, and I’m currently applying that knowledge in a new project using AWS infrastructure with hands-on Python on the backend.",
      ],
    }),
    []
  );

  const aboutBlocks: AboutBlock[] = useMemo(
    () => [
      {
        kicker: "Consulting",
        title: "My background",
        body: [
          "I received my BSc with Honours in Earth Science at the University of Glasgow in 2017, before entering the geo-environmental consulting industry with Mason Evans Partnership.",
          "I worked in a small team of five, conducting site investigations for some of the UK's largest house builders. This involved evaluating geotechnical & environmental constraints and advising clients on remediation measures required to meet local government regulations.",
        ],
        bullets: [
          "Geological analysis & reporting (maps, interpretation, client communication)",
          "Site investigations (Phase II design, trial pitting, sampling)",
          "Environmental & geotechnical testing (analysis + reporting)",
          "Groundwater testing & basic modelling",
          "Mine stability assessments & remediation (drilling + grouting supervision)",
        ],
      },
      {
        kicker: "Personal",
        title: "Sport",
        body: [
          "Outside of work, sport has always been a big part of my life. I represented my schools in football, field hockey, badminton, and cross-country running.",
          "In recent years, running has been my main focus and I ran two half-marathons and my first full marathon in 2024.",
          "Recently I've been shifting into triathlon, putting in more time on the bike and in the pool. My next big goal is Ironman 70.3 Tallinn in August 2026.",
          "Strava stats and the countdown timer will be reintroduced once the About layout is locked in.",
        ],
      },
      {
        kicker: "Personal",
        title: "Music",
        body: [
          "Placeholder: I’m also a big music fan, and I like building routines around long sessions with good albums on.",
          "Placeholder: I’ll add a short overview here later (what I listen to, how I discover music, and a few favourites).",
          "Placeholder: This section may later include a small Spotify-style snapshot or recent listens widget.",
        ],
      },
    ],
    []
  );

  useEffect(() => {
    const el = aboutFxRef.current;
    if (!el) return;

    // same intentional start as hero
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
    <section aria-label="About">
      <div id="about" className="section-anchor" />

      {/* Hero-style FX wrapper (NOT a card) */}
      <div ref={aboutFxRef} className="about-fx-inner">
        {/* replicate hero background layers */}
        <div className="hero-bg" aria-hidden="true">
          <div className="hero-slab" />
          <div className="hero-slab-2" />
          <div className="hero-spot-glow" />
          <div className="hero-noise" />
        </div>

        <div className="about-fx-content">
          <div className="about-stack about-stack--plain">
            <section className="about-block about-block--primary">
              {profileBlock.kicker ? <p className="kicker">{profileBlock.kicker}</p> : null}
              <h3 className="about-title">{profileBlock.title}</h3>

              <div className="about-body">
                {profileBlock.body.map((line, i) => (
                  <p key={i} className="about-text">
                    {line}
                  </p>
                ))}
              </div>
            </section>

            {aboutBlocks.map((block, idx) => (
              <section key={`${block.title}-${idx}`} className="about-block">
                <p className="kicker">{block.kicker}</p>
                <h3 className="about-title">{block.title}</h3>

                <div className="about-body">
                  {block.body.map((line, i) => (
                    <p key={i} className="about-text">
                      {line}
                    </p>
                  ))}
                </div>

                {block.bullets && block.bullets.length > 0 && (
                  <ul className="about-bullets">
                    {block.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
