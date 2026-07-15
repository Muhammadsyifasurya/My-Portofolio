"use client";

import { useState } from "react";
import { FadeIn } from "./FadeIn";
import { SectionHeading } from "./SectionHeading";
import { experiences } from "@/data/portfolio";

export function Experience() {
  const [activeId, setActiveId] = useState(experiences[0].id);
  const active = experiences.find((exp) => exp.id === activeId) ?? experiences[0];

  return (
    <section id="experience" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <FadeIn>
          <SectionHeading title="Where I've Worked" />
        </FadeIn>

        <FadeIn delay={0.1} className="mt-12">
          <div className="flex flex-col gap-8 md:flex-row">
            <div className="scrollbar-hide overflow-x-auto md:overflow-visible">
              <div className="flex w-max flex-row md:w-auto md:flex-col">
                {experiences.map((exp) => (
                  <button
                    key={exp.id}
                    type="button"
                    onClick={() => setActiveId(exp.id)}
                    className={`cursor-pointer whitespace-nowrap border-l-2 px-6 py-4 text-left font-mono text-sm transition-all duration-300 md:rounded-r-full ${
                      activeId === exp.id
                        ? "border-green bg-light-navy text-green"
                        : "border-lightest-navy text-slate hover:border-green hover:bg-light-navy hover:text-green"
                    }`}
                  >
                    {exp.company}
                  </button>
                ))}
              </div>
            </div>

            <div className="min-h-[280px] flex-1">
              <h3 className="text-xl font-semibold text-white">{active.title}</h3>
              <p className="mt-1 font-mono text-sm text-slate">{active.period}</p>
              <ul className="mt-6 space-y-3 pl-5 text-slate marker:text-green">
                {active.highlights.map((item) => (
                  <li key={item} className="list-disc leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
