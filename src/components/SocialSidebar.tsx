import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
} from "lucide-react";
import { siteConfig } from "@/data/portfolio";

const socialLinks = [
  { href: siteConfig.social.github, icon: Github, label: "GitHub" },
  { href: siteConfig.social.linkedin, icon: Linkedin, label: "LinkedIn" },
  { href: siteConfig.social.instagram, icon: Instagram, label: "Instagram" },
  { href: siteConfig.social.facebook, icon: Facebook, label: "Facebook" },
];

function TikTokIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
    </svg>
  );
}

export function SocialSidebar() {
  return (
    <aside className="fixed bottom-0 left-6 z-40 hidden lg:block">
      <ul className="flex flex-col items-center gap-5 after:mt-4 after:block after:h-24 after:w-px after:bg-slate">
        {socialLinks.map(({ href, icon: Icon, label }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-slate transition-all duration-300 hover:-translate-y-1 hover:text-green"
            >
              <Icon size={20} />
            </a>
          </li>
        ))}
        <li>
          <a
            href={siteConfig.social.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="text-slate transition-all duration-300 hover:-translate-y-1 hover:text-green"
          >
            <TikTokIcon />
          </a>
        </li>
      </ul>
    </aside>
  );
}

export function EmailSidebar() {
  return (
    <aside className="fixed bottom-0 right-6 z-40 hidden lg:block">
      <div className="flex flex-col items-center gap-5">
        <a
          href={`mailto:${siteConfig.email}`}
          className="font-mono text-xs tracking-widest text-slate transition-all duration-300 [writing-mode:vertical-lr] hover:-translate-y-1 hover:text-green"
        >
          {siteConfig.email}
        </a>
        <div className="h-24 w-px bg-slate" />
      </div>
    </aside>
  );
}

export function MobileSocialBar() {
  return (
    <div className="flex justify-center gap-6 py-8 lg:hidden">
      {socialLinks.map(({ href, icon: Icon, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="text-slate transition-colors hover:text-green"
        >
          <Icon size={24} />
        </a>
      ))}
      <a
        href={siteConfig.social.tiktok}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="TikTok"
        className="text-slate transition-colors hover:text-green"
      >
        <TikTokIcon size={24} />
      </a>
    </div>
  );
}
