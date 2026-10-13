import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import BenefitsSection from "./BenefitsSection";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 },
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        },
      );
    });
  }, []);

  return (
    <>
      <div id="work" ref={sectionRef} className="app-showcase">
        <div className="w-full">
          <div className="showcaselayout">
            <div ref={rydeRef} className="first-project-wrapper">
              <div className="image-wrapper">
                <img src="" alt="Campaign highlight" />
              </div>
              <div className="text-content">
                <h2>
                  Growing a Retail Brand's Reach with a Full-Funnel Social &amp;
                  Meta Ads Strategy
                </h2>
                <p className="text-white-50 md:text-xl">
                  Placeholder — swap in a real campaign of yours: the platforms
                  used, what you did, and the result (e.g. reach, CTR, sales).
                </p>
              </div>
            </div>

            <div className="project-list-wrapper overflow-hidden">
              <div className="project" ref={libraryRef}>
                <div className="image-wrapper bg-[#FFEFDB]">
                  <img
                    src=""
                    alt="Library Management Platform"
                  />
                </div>
                <h2>SEO Revamp — 40% Engagement Growth</h2>
              </div>

              <div className="project" ref={ycDirectoryRef}>
                <div className="image-wrapper bg-[#FFE7EB]">
                  <img src="" alt="Seasonal campaign" />
                </div>
                <h2>Seasonal Campaign — Noon &amp; Talabat Storefronts</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BenefitsSection />
    </>
  );
};

export default AppShowcase;
