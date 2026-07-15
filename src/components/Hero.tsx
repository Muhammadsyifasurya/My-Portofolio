import { Button } from "./Button";
import { FadeIn } from "./FadeIn";
import { siteConfig } from "@/data/portfolio";

export function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center px-6 pt-20">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <p className="mb-4 font-mono text-green md:mb-6">Hi, my name is</p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="mb-3 text-4xl font-bold text-white md:text-6xl lg:text-7xl">
            {siteConfig.name}.
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h2 className="mb-8 text-3xl font-bold text-green md:text-5xl lg:text-6xl">
            {siteConfig.role}
          </h2>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="mb-5 max-w-xl text-base leading-relaxed text-light-slate md:text-lg">
            I am a{" "}
            <span className="font-semibold text-green">Frontend Web Developer</span> who
            focuses on user-centered design and building accessible web experiences. I turn
            ideas into responsive and performant applications using HTML, CSS, and
            JavaScript.
          </p>
        </FadeIn>

        <FadeIn delay={0.35}>
          <p className="mb-10 max-w-xl text-base leading-relaxed text-light-slate md:text-lg">
            Currently, I&apos;m deepening my skills in React, Next.js, and TypeScript to
            craft business-driven, user-focused solutions.
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <Button href="#work">Check out my Project!</Button>
        </FadeIn>
      </div>
    </section>
  );
}
