// src/components/home/HomeCerts.tsx
import "../../styles/homeCerts.css";

import AWSBadge from "../../assets/AWSBadge.png";
import ScrumBadge from "../../assets/ScrumBadge.png";

export default function HomeCerts() {
  return (
    <section className="section" aria-label="Certifications">
      <div className="container-max">
        <div className="certs-block">

          <div className="certs-grid">
            <div className="cert-item">
              <img src={AWSBadge} alt="AWS Solutions Architect Associate" />
              <span className="cert-label">AWS Solutions Architect Associate</span>
            </div>

            <div className="cert-item">
              <img src={ScrumBadge} alt="Professional Scrum Master I" />
              <span className="cert-label">Professional Scrum Master I</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
