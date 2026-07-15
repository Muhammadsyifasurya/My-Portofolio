import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { SectionHeading } from "./SectionHeading";
import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <section id="work" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <SectionHeading title="Some Things I've Built" className="justify-center md:justify-start" />
        </FadeIn>

        <div className="mt-16 space-y-24">
          {projects.map((project, index) => (
            <FadeIn key={project.title} delay={index * 0.1}>
              <article
                className={`group flex flex-col items-center gap-8 md:gap-12 ${
                  project.reverse ? "md:flex-row-reverse" : "md:flex-row"
                }`}
              >
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block w-full shrink-0 overflow-hidden rounded-lg md:w-[55%]"
                >
                  <div className="relative aspect-video">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-all duration-500 grayscale group-hover:grayscale-0"
                      sizes="(max-width: 768px) 100vw, 55vw"
                    />
                    <div className="absolute inset-0 bg-green/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                </a>

                <div
                  className={`flex flex-col items-center md:w-[45%] ${
                    project.reverse ? "md:items-start" : "md:items-end"
                  }`}
                >
                  <p className="mb-2 font-mono text-sm text-green">Featured Project</p>
                  <h3 className="mb-4 text-2xl font-bold text-lightest-slate">
                    {project.title}
                  </h3>
                  <p
                    className={`rounded-lg bg-light-navy p-6 text-sm leading-relaxed text-light-slate shadow-xl ${
                      project.reverse ? "md:text-left" : "md:text-right"
                    }`}
                  >
                    {project.description}
                  </p>
                  <ul
                    className={`mt-4 flex flex-wrap gap-3 font-mono text-xs text-light-slate ${
                      project.reverse ? "md:justify-start" : "md:justify-end"
                    }`}
                  >
                    {project.tech.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                  <div className="mt-5 flex gap-5">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} GitHub`}
                      className="text-light-slate transition-colors hover:text-green"
                    >
                      <Github size={22} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} live demo`}
                      className="text-light-slate transition-colors hover:text-green"
                    >
                      <ExternalLink size={22} />
                    </a>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
