"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./Button";
import { navLinks, siteConfig } from "@/data/portfolio";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy/90 shadow-lg shadow-dark-navy/50 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6 md:px-10">
        <a href="#" className="group relative">
          <Image
            src="/assets/logo1.webp"
            alt="Logo"
            width={56}
            height={56}
            className="rounded-full border-2 border-green transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:shadow-[4px_4px_0_0_#64ffda]"
            priority
          />
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-sm text-lightest-slate transition-colors hover:text-green"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <Button href={siteConfig.resume} external variant="outline" className="px-5 py-2">
              Resume
            </Button>
          </li>
        </ul>

        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="text-lightest-slate transition-colors hover:text-green lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 top-20 z-40 bg-navy/95 backdrop-blur-lg lg:hidden">
          <ul className="flex flex-col items-center gap-8 pt-16">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-mono text-lg text-lightest-slate transition-colors hover:text-green"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <Button
                href={siteConfig.resume}
                external
                variant="outline"
                onClick={() => setIsOpen(false)}
              >
                Resume
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
