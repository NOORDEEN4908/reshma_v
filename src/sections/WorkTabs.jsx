import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import TitleHeader from "../components/TitleHeader";
import { workTabs } from "../constants";

const WorkTabs = () => {
  const [activeId, setActiveId] = useState(workTabs[0].id);
  const panelRef = useRef(null);
  const tabRefs = useRef({});

  const active = workTabs.find((tab) => tab.id === activeId);

  // fade the cards in each time the tab changes
  useGSAP(
    () => {
      gsap.fromTo(
        ".work-card",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.12, ease: "power2.out" }
      );
    },
    { dependencies: [activeId], scope: panelRef }
  );

  // left/right arrow keys move between tabs (standard tab pattern)
  const handleKeyDown = (e, index) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const step = e.key === "ArrowRight" ? 1 : -1;
    const next = workTabs[(index + step + workTabs.length) % workTabs.length];
    setActiveId(next.id);
    tabRefs.current[next.id]?.focus();
  };

  return (
    <section id="portfolio" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="My Work, By Category"
          sub="Selected Work"
        />

        {/* TABS */}
        <div
          role="tablist"
          aria-label="Work categories"
          className="mt-14 mx-auto flex w-fit max-w-full overflow-x-auto gap-2 rounded-full bg-black-200 p-1.5"
        >
          {workTabs.map((tab, index) => {
            const selected = tab.id === activeId;
            return (
              <button
                key={tab.id}
                ref={(el) => (tabRefs.current[tab.id] = el)}
                role="tab"
                id={`tab-${tab.id}`}
                aria-selected={selected}
                aria-controls={`panel-${tab.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActiveId(tab.id)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm md:text-lg font-medium transition-colors duration-300 cursor-pointer ${
                  selected
                    ? "bg-white text-black"
                    : "text-white-50 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* PANEL */}
        <div
          ref={panelRef}
          role="tabpanel"
          id={`panel-${active.id}`}
          aria-labelledby={`tab-${active.id}`}
          className="mt-10"
        >
          <p className="text-center text-white-50 md:text-xl">{active.intro}</p>

          <div className="mt-10 mx-auto grid-3-cols xl:max-w-[1400px]">
            {active.items.map((item) => (
              <article
                key={`${active.id}-${item.title}`}
                className="work-card card-border rounded-xl overflow-hidden flex flex-col"
              >
                <div
                  className={`overflow-hidden bg-black-200 ${
                    active.poster ? "aspect-[3/4]" : "aspect-[16/10]"
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col gap-3 p-6">
                  <h3 className="text-xl md:text-2xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-white-50">{item.desc}</p>

                  <div className="mt-auto flex flex-wrap gap-2 pt-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-black-200 px-3 py-1 text-sm text-white-50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="pt-2 font-medium text-white underline underline-offset-4 hover:text-white-50"
                    >
                      View project →
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkTabs;
