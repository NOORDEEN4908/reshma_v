import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import TitleHeader from "../components/TitleHeader";
import { skillGroups } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".skill-group",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: { trigger: "#skills", start: "top 70%" },
      }
    );
  });

  return (
    <section id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Skills & Expertise"
          sub="Core Competencies"
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {skillGroups.map(({ title, desc, icon, skills }) => {
            const GroupIcon = icon;
            return (
            <div
              key={title}
              className="skill-group card-border rounded-2xl p-8 flex flex-col gap-7"
            >
              <div className="flex items-start gap-4">
                <div className="size-12 flex-none flex-center rounded-xl bg-black-200 text-white-50">
                  <GroupIcon size={22} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold">{title}</h3>
                  <p className="mt-1 text-blue-50">{desc}</p>
                </div>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {skills.map(({ name, icon, color }) => {
                  const Icon = icon;
                  return (
                  <li
                    key={name}
                    className="skill-chip group flex items-center gap-3 rounded-xl border border-black-200 bg-black-50 px-4 py-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-white-50/30"
                  >
                    <span
                      className="size-10 flex-none flex-center rounded-lg bg-black-100 transition-transform duration-300 group-hover:scale-110"
                      style={{ color }}
                    >
                      <Icon size={20} aria-hidden="true" />
                    </span>
                    <span className="font-medium text-white-50">{name}</span>
                  </li>
                  );
                })}
              </ul>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
