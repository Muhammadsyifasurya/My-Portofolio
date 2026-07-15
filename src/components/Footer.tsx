import { ArrowUp } from "lucide-react";
import { siteConfig } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="relative px-6 pb-8 pt-4 text-center">
      <a
        href="#"
        aria-label="Back to top"
        className="group fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#0d1117]/80 text-sky-400 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:text-white hover:border-sky-400/50 hover:shadow-[0_0_15px_rgba(56,189,248,0.3)] md:right-12 md:h-14 md:w-14"
      >
        <ArrowUp size={22} className="transition-colors duration-300" />
      </a>

      <p className="font-mono text-xs text-slate-500 md:text-sm">
        &copy; {new Date().getFullYear()} <span className="text-sky-400">{siteConfig.name}</span>. All rights reserved.
      </p>
    </footer>
  );
}
