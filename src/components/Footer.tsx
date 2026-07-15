import { ArrowUp } from "lucide-react";
import { siteConfig } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="relative px-6 pb-8 pt-4 text-center">
      <a
        href="#"
        aria-label="Back to top"
        className="group fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-green shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:text-white hover:shadow-[0_0_15px_#64ffda] md:right-24 md:h-14 md:w-14"
      >
        <ArrowUp size={22} className="transition-colors duration-300" />
      </a>

      <p className="font-mono text-xs text-green md:text-sm">
        &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </p>
    </footer>
  );
}
