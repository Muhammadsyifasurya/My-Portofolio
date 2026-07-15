import Image from "next/image";
import { FadeIn } from "./FadeIn";
import { SectionHeading } from "./SectionHeading";
import { aboutParagraphs, skills } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <SectionHeading title="About Me" />
        </FadeIn>

        <div className="mt-14 flex flex-col-reverse items-center gap-12 md:flex-row md:items-start md:gap-16">
          <FadeIn className="flex-1" delay={0.1}>
            <div className="space-y-5 text-justify leading-relaxed text-light-slate md:text-left">
              {aboutParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="group relative h-64 w-64 shrink-0 rounded-lg border-2 border-green md:h-72 md:w-72">
              <Image
                src="/assets/profil.webp"
                alt="Muhammad Syifa Surya Saputra"
                fill
                className="rounded-lg object-cover transition-all duration-300 group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:grayscale-0 grayscale"
                sizes="(max-width: 768px) 256px, 288px"
              />
            </div>
          </FadeIn>
        </div>

        <FadeIn className="mt-24" delay={0.15}>
          <h3 className="mb-10 text-center text-2xl font-bold text-lightest-slate md:text-3xl">
            What Can I Do?
          </h3>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:gap-4">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className={`group flex items-center justify-center gap-3 rounded-xl bg-white p-5 transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#64ffda] grayscale hover:grayscale-0 ${
                  skill.featured ? "col-span-2" : ""
                }`}
              >
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={skill.featured ? 64 : 48}
                  height={skill.featured ? 64 : 48}
                  className="object-contain"
                />
                {skill.featured && (
                  <span className="text-xl font-bold text-navy md:text-2xl">
                    {skill.name.toUpperCase()}
                  </span>
                )}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
