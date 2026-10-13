import { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaLinkedinIn } from "react-icons/fa6";
import {
  SiGoogle,
  SiMeta,
  SiHubspot,
  SiSemrush,
  SiCoursera,
  SiUdemy,
} from "react-icons/si";
import { FiAward, FiCalendar, FiExternalLink, FiX, FiZoomIn } from "react-icons/fi";

import TitleHeader from "../components/TitleHeader";
import { certifications } from "../constants";

gsap.registerPlugin(ScrollTrigger);

// issuer key -> logo + brand colour (anything else falls back to the award icon)
const issuers = {
  google: { icon: SiGoogle, color: "#4285F4" },
  meta: { icon: SiMeta, color: "#0A84FF" },
  hubspot: { icon: SiHubspot, color: "#FF7A59" },
  semrush: { icon: SiSemrush, color: "#FF642D" },
  coursera: { icon: SiCoursera, color: "#2A73CC" },
  udemy: { icon: SiUdemy, color: "#A435F0" },
  linkedin: { icon: FaLinkedinIn, color: "#0A66C2" },
};

const Certifications = () => {
  const [preview, setPreview] = useState(null);

  useGSAP(() => {
    gsap.fromTo(
      ".cert-card",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: { trigger: "#certifications", start: "top 70%" },
      }
    );
  });

  // close the full-size preview with Escape
  useEffect(() => {
    if (!preview) return;
    const onKey = (e) => e.key === "Escape" && setPreview(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [preview]);

  return (
    <section id="certifications" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Licenses & Certifications"
          sub="Professional Credentials"
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {certifications.map((cert) => {
            const issuer = issuers[cert.issuer];
            const Icon = issuer?.icon ?? FiAward;
            return (
              <article
                key={cert.title}
                className="cert-card card-border group flex flex-col overflow-hidden rounded-2xl transition-colors duration-300 hover:border-white-50/30"
              >
                {cert.image && (
                  <button
                    type="button"
                    onClick={() => setPreview(cert)}
                    className="relative block aspect-[4/3] w-full overflow-hidden bg-black-50"
                    aria-label={`View ${cert.title} certificate`}
                  >
                    <img
                      src={cert.image}
                      alt={`${cert.title} certificate`}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute right-3 top-3 flex size-9 flex-center rounded-full bg-black/70 text-white-50">
                      <FiZoomIn aria-hidden="true" />
                    </span>
                  </button>
                )}

                <div className="flex flex-1 flex-col gap-5 p-7">
                  <div className="flex items-start gap-4">
                    <div
                      className="size-12 flex-none flex-center rounded-xl bg-black-200"
                      style={{ color: issuer?.color ?? "#d9ecff" }}
                    >
                      <Icon size={22} aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold leading-snug">
                        {cert.title}
                      </h3>
                      <p className="mt-1 text-blue-50">{cert.issuerName}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white-50">
                    <span className="flex items-center gap-2">
                      <FiCalendar aria-hidden="true" />
                      Issued {cert.date}
                    </span>
                    {cert.credentialId && (
                      <span className="text-blue-50">ID: {cert.credentialId}</span>
                    )}
                  </div>

                  {cert.skills?.length > 0 && (
                    <ul className="flex flex-wrap gap-2">
                      {cert.skills.map((s) => (
                        <li
                          key={s}
                          className="rounded-full bg-black-200 px-3 py-1 text-xs text-white-50"
                        >
                          {s}
                        </li>
                      ))}
                    </ul>
                  )}

                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex w-fit items-center gap-2 rounded-lg border border-black-200 px-4 py-2 text-sm font-medium text-white-50 transition-colors duration-300 hover:border-white-50/40 hover:text-white"
                    >
                      View credential
                      <FiExternalLink aria-hidden="true" />
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {preview && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${preview.title} certificate`}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/85 p-5"
          onClick={() => setPreview(null)}
        >
          <button
            type="button"
            className="absolute right-5 top-5 flex size-11 flex-center rounded-full bg-black-200 text-white"
            onClick={() => setPreview(null)}
            aria-label="Close preview"
          >
            <FiX size={20} />
          </button>
          <img
            src={preview.image}
            alt={`${preview.title} certificate`}
            className="max-h-full max-w-full rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Certifications;
