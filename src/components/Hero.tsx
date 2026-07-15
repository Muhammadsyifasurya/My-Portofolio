"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./Button";
import { siteConfig } from "@/data/portfolio";
import { HeroLanyard } from "./HeroLanyard";
import { Github, Linkedin, Instagram, ChevronDown } from "lucide-react";

const socialLinks = [
  { href: siteConfig.social.github, icon: Github, label: "GitHub" },
  { href: siteConfig.social.linkedin, icon: Linkedin, label: "LinkedIn" },
  { href: siteConfig.social.instagram, icon: Instagram, label: "Instagram" },
];

const roles = [
  "Frontend Developer.",
  "QA Engineer.",
  "IT Governance Spec.",
];

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  // Mouse spotlight effect
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  // Rotating roles
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000); // change every 3s
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center px-6 pt-12 overflow-hidden">
      
      {/* ── Mouse Spotlight ── */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 hidden md:block"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(14,165,233,0.06), transparent 40%)`
        }}
      />

      {/* ── Ambient Glow Background ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-40 top-1/3 w-[500px] h-[500px] rounded-full opacity-20 blur-[120px]"
          style={{ background: "radial-gradient(circle, #0ea5e9 0%, transparent 70%)" }} />
        <div className="absolute -right-20 top-1/4 w-[400px] h-[400px] rounded-full opacity-15 blur-[100px]"
          style={{ background: "radial-gradient(circle, #6366f1 0%, transparent 70%)" }} />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] opacity-10 blur-[80px]"
          style={{ background: "radial-gradient(ellipse, #0ea5e9 0%, transparent 70%)" }} />
      </div>

      {/* ── Subtle Grid Pattern ── */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />

      {/* ── Main Layout ── */}
      <div className="relative mx-auto max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-0 items-center min-h-[calc(100vh-80px)] z-40">

        {/* ─── LEFT: Text Content ─── */}
        <div className="flex flex-col justify-center py-12 lg:py-0">

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[40px] leading-[1.1] md:text-5xl lg:text-[64px] font-extrabold text-white tracking-tight mb-4"
          >
            Muhammad Syifa
            <br />
            <span className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #38bdf8 0%, #818cf8 100%)" }}>
              Surya Saputra.
            </span>
          </motion.h1>

          {/* Rotating Roles */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mb-6 flex items-center gap-2 md:gap-3 h-10"
          >
            <span className="text-slate-400 font-mono text-sm md:text-base">I am a</span>
            <div className="relative flex-1 h-full flex items-center overflow-hidden">
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={currentRoleIndex}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute text-sky-400 font-mono text-sm md:text-base font-bold tracking-wide"
                >
                  {roles[currentRoleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-md text-base leading-relaxed text-slate-400 mb-10"
          >
            I build{" "}
            <span className="text-white font-medium">responsive, highly-optimized</span>
            {" "}web experiences with a strong eye on{" "}
            <span className="text-sky-400 font-medium">quality & clean architecture</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <Button href="#work">View Projects</Button>
            <Button href={siteConfig.resume} external variant="ghost">Download CV</Button>
          </motion.div>


        </div>

        {/* ─── RIGHT: Lanyard ─── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full flex justify-center items-center lg:-mt-24"
        >
          <HeroLanyard />
        </motion.div>
      </div>

      {/* ── Scroll Indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-600 z-40"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
