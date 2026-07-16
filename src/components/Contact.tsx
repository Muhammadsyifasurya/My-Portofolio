"use client";

import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { FadeIn } from "./FadeIn";
import { siteConfig } from "@/data/portfolio";
import { Mail, Github, Linkedin, Instagram, Facebook, Check, Copy } from "lucide-react";

// Magnetic Button Component
function MagneticWrapper({ children, className }: { children: React.ReactNode, className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring physics for the magnetic pull
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Calculate distance from center (max pull is 20px)
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    x.set(distanceX * 0.2);
    y.set(distanceY * 0.2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={`relative inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    { name: "GitHub", icon: <Github size={20} />, url: siteConfig.social.github, hoverColor: "hover:text-white hover:border-white/50 hover:bg-white/10" },
    { name: "LinkedIn", icon: <Linkedin size={20} />, url: siteConfig.social.linkedin, hoverColor: "hover:text-[#0a66c2] hover:border-[#0a66c2]/50 hover:bg-[#0a66c2]/10" },
    { name: "Instagram", icon: <Instagram size={20} />, url: siteConfig.social.instagram, hoverColor: "hover:text-[#e1306c] hover:border-[#e1306c]/50 hover:bg-[#e1306c]/10" },
    { name: "Facebook", icon: <Facebook size={20} />, url: siteConfig.social.facebook, hoverColor: "hover:text-[#1877f2] hover:border-[#1877f2]/50 hover:bg-[#1877f2]/10" },
  ];

  return (
    <section id="contact" className="relative px-6 py-32 md:py-48 overflow-hidden min-h-[80vh] flex items-center justify-center">
      
      {/* ── MASSIVE CINEMATIC GLOW ── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none animate-pulse" style={{ animationDuration: '4s' }} />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 font-mono text-sm mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
            </span>
            Open to collaborate
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">
            Let&apos;s build something <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500">
              extraordinary.
            </span>
          </h2>
          
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-16 leading-relaxed">
            Whether you have a specific project in mind, need a frontend expert for your team, or just want to chat about clean architecture, my inbox is always open.
          </p>
        </FadeIn>

        {/* ── MAGNETIC BUTTON & EMAIL ── */}
        <FadeIn delay={0.2} className="flex flex-col items-center gap-8">
          <MagneticWrapper>
            <a 
              href={`mailto:${siteConfig.email}`}
              className="group relative inline-flex items-center justify-center px-12 py-5 text-lg font-bold text-white bg-[#0d1117] border-2 border-white/10 rounded-full overflow-hidden transition-colors hover:border-sky-400/50"
            >
              {/* Button Inner Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-sky-500/0 via-sky-500/10 to-indigo-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <span className="relative z-10 flex items-center gap-2">
                Say Hello <Mail size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </MagneticWrapper>

          {/* Copy to clipboard email */}
          <button 
            onClick={handleCopyEmail}
            className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-white/10 transition-all group"
          >
            <span className="font-mono text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
              {siteConfig.email}
            </span>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
              copied ? "bg-green-500/20 text-green-400" : "bg-white/10 text-slate-400 group-hover:bg-sky-500/20 group-hover:text-sky-400"
            }`}>
              {copied ? <Check size={14} /> : <Copy size={14} />}
            </div>
          </button>
        </FadeIn>

        {/* ── SOCIAL LINKS ── */}
        <FadeIn delay={0.3} className="mt-24 pt-12 border-t border-white/10 flex flex-col items-center">
          <p className="font-mono text-xs text-slate-500 uppercase tracking-widest mb-6">
            Find me on the internet
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 flex items-center justify-center rounded-full bg-white/[0.03] border border-white/5 text-slate-400 transition-all duration-300 hover:-translate-y-1 ${social.hoverColor}`}
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
