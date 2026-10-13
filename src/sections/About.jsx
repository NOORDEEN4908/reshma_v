import { useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import TitleHeader from "../components/TitleHeader";
import { aboutMe } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const initials = (name) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const About = () => {
  // if the photo file is missing, fall back to an initials badge
  const [photoFailed, setPhotoFailed] = useState(false);

  useGSAP(() => {
    gsap.fromTo(
      ".about-reveal",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: { trigger: "#about", start: "top 75%" },
      }
    );
  });

  return (
    <section id="about" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader title="About Me" sub="Profile" />

        <div className="grid-12-cols mt-16 items-center">
          {/* PHOTO */}
          <div className="about-reveal xl:col-span-5">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-white-50/20 to-transparent blur-xl" />
              <div className="card-border relative aspect-[4/5] overflow-hidden rounded-3xl">
                {photoFailed ? (
                  <div className="flex-col-center h-full w-full gap-3 bg-black-200">
                    <span className="text-7xl font-semibold text-white-50">
                      {initials(aboutMe.name)}
                    </span>
                    {import.meta.env.DEV && (
                      <span className="px-6 text-center text-sm text-blue-50">
                        Add your photo at public{aboutMe.photo}
                      </span>
                    )}
                  </div>
                ) : (
                  <img
                    src={aboutMe.photo}
                    alt={`${aboutMe.name}, ${aboutMe.role}`}
                    className="h-full w-full object-cover"
                    onError={() => setPhotoFailed(true)}
                  />
                )}
              </div>
            </div>
          </div>

          {/* TEXT */}
          <div className="xl:col-span-7 flex flex-col gap-6">
            <div className="about-reveal">
              <h2 className="text-3xl md:text-4xl font-semibold">
                {aboutMe.name}
              </h2>
              <p className="mt-2 text-lg text-blue-50">
                {aboutMe.role} · {aboutMe.location}
              </p>
            </div>

            <div className="about-reveal flex flex-col gap-4">
              {aboutMe.paragraphs.map((text) => (
                <p key={text} className="text-white-50 md:text-xl">
                  {text}
                </p>
              ))}
            </div>

            <dl className="about-reveal grid grid-cols-1 md:grid-cols-3 gap-4">
              {aboutMe.facts.map(({ label, value }) => (
                <div key={label} className="card-border rounded-xl p-5">
                  <dt className="text-sm uppercase tracking-wide text-blue-50">
                    {label}
                  </dt>
                  <dd className="mt-2 font-semibold">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
