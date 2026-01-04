// src/components/home/HomeProfile.tsx
import { useMemo } from "react";

type AboutBlock = {
  kicker: string;
  title: string;
  body: string[];
};

export default function HomeProfile() {
  const profileBlock: AboutBlock = useMemo(
    () => ({
      kicker: "",
      title: "Profile",
      body: [
        "I’m a full-stack developer with a background in geo-environmental consulting and practical experience building complete web applications.",
        "I’m comfortable working across frontend and backend, and have practical experience delivering full-stack features end-to-end, from UI through to APIs, data models, testing, and deployment.",
        "I’m certified as an AWS Solutions Architect Associate and Professional Scrum Master, and I’m currently applying that knowledge in practice through new full-stack projects using cloud infrastructure.",
        "From my consulting background, I bring experience coordinating multiple projects with clients and maintaining clear communication.",
      ],
    }),
    []
  );

  return (
    <section className="section" aria-label="Profile">
      <div id="about" className="section-anchor" />

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
      </div>
    </section>
  );
}
