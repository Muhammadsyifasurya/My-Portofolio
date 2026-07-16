"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/data/portfolio";
import { Home, User, Briefcase, Code, Mail } from "lucide-react";

// Mapping icons based on href (adjust if your hrefs differ)
const iconMap: Record<string, React.ReactNode> = {
  "#about": <User size={18} />,
  "#experience": <Briefcase size={18} />,
  "#work": <Code size={18} />,
  "#contact": <Mail size={18} />,
};

export function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Simple intersection observer logic for active section
      const sections = navLinks.map(link => link.href.substring(1));
      let current = "";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
    >
      <nav
        className={`pointer-events-auto flex items-center gap-1 p-1.5 rounded-full border transition-all duration-500 ${isScrolled
            ? "bg-navy/60 backdrop-blur-xl border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            : "bg-navy/30 backdrop-blur-md border-transparent shadow-none"
          }`}
      >
        <NavItem href="#" icon={<Home size={18} />} label="Home" isActive={activeSection === ""} />

        {navLinks.map((link) => (
          <NavItem
            key={link.href}
            href={link.href}
            icon={iconMap[link.href]}
            label={link.label}
            isActive={activeSection === link.href.substring(1)}
          />
        ))}
      </nav>
    </motion.div>
  );
}

function NavItem({ href, icon, label, isActive }: { href: string; icon: React.ReactNode; label: string; isActive: boolean }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative flex items-center gap-2 px-4 py-2.5 rounded-full transition-colors duration-300 ${isActive ? "text-white" : "text-slate-400 hover:text-white"
        }`}
    >
      {/* Active Background Pill */}
      {isActive && (
        <motion.div
          layoutId="nav-pill"
          className="absolute inset-0 bg-sky-500/20 rounded-full border border-sky-400/30"
          transition={{ type: "spring", stiffness: 350, damping: 30 }}
        />
      )}

      {/* Hover Background Glow */}
      <AnimatePresence>
        {isHovered && !isActive && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute inset-0 bg-white/5 rounded-full"
          />
        )}
      </AnimatePresence>

      <span className="relative z-10 flex items-center gap-2">
        <span className={`${isActive ? "text-sky-400" : ""}`}>{icon}</span>
        <span className="text-[13px] font-semibold hidden md:block">{label}</span>
      </span>
    </a>
  );
}
