import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGraduationCap } from "react-icons/fa6";
import { FiCalendar, FiMapPin } from "react-icons/fi";

import TitleHeader from "../components/TitleHeader";
import { education } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  useGSAP(() => {
    gsap.utils.toArray(".edu-card").forEach((card) => {
      gsap.fromTo(
        card,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: { trigger: card, start: "top 85%" },
        }
      );
    });
  });

  return (
    <section id="education" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader title="Education" sub="Academic Background" />

        <div className="relative mx-auto mt-16 max-w-5xl">
          {/* vertical timeline rail */}
          <div className="gradient-line absolute left-6 top-2 bottom-2 hidden md:block" />

          <ol className="flex flex-col gap-8">
            {education.map((item) => (
              <li
                key={`${item.degree}-${item.institution}`}
                className="edu-card relative md:pl-20"
              >
                <div className="absolute left-0 top-6 hidden size-12 flex-none flex-center rounded-full border border-black-50 bg-black-100 text-white-50 md:flex">
                  <FaGraduationCap size={20} aria-hidden="true" />
                </div>

                <div className="card-border rounded-2xl p-7 md:p-9">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold">{item.degree}</h3>
                      <p className="mt-1 text-lg text-white-50">
                        {item.institution}
                      </p>
                    </div>
                    <span className="flex w-fit items-center gap-2 whitespace-nowrap rounded-full bg-black-200 px-4 py-2 text-sm text-white-50">
                      <FiCalendar aria-hidden="true" />
                      {item.period}
                    </span>
                  </div>

                  <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-blue-50">
                    {item.location && (
                      <span className="flex items-center gap-2">
                        <FiMapPin aria-hidden="true" />
                        {item.location}
                      </span>
                    )}
                    {item.grade && (
                      <span className="rounded-md border border-black-200 px-2.5 py-0.5 text-sm">
                        {item.grade}
                      </span>
                    )}
                  </div>

                  {item.summary && (
                    <p className="mt-5 text-white-50 text-lg">{item.summary}</p>
                  )}

                  {item.highlights?.length > 0 && (
                    <ul className="mt-5 flex list-disc flex-col gap-2 ms-5 text-white-50">
                      {item.highlights.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Education;
