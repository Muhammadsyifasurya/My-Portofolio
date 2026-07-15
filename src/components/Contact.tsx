import { Button } from "./Button";
import { FadeIn } from "./FadeIn";
import { siteConfig } from "@/data/portfolio";

export function Contact() {
  return (
    <section id="contact" className="px-6 py-24 md:py-32">
      <FadeIn className="mx-auto max-w-2xl text-center">
        <p className="mb-4 font-mono text-green">What&apos;s Next?</p>
        <h2 className="mb-6 text-3xl font-bold text-lightest-slate md:text-5xl">
          Get In Touch
        </h2>
        <p className="mb-10 leading-relaxed text-slate">
          Although I&apos;m not currently looking for any new opportunities, my inbox is
          always open. Whether you have a question or just want to say hi, I&apos;ll try my
          best to get back to you!
        </p>
        <Button href={`mailto:${siteConfig.email}`}>Say Hello</Button>
      </FadeIn>
    </section>
  );
}
