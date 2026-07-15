"use client";

import Image from "next/image";
import { FadeIn } from "./FadeIn";
import { SectionHeading } from "./SectionHeading";
import { aboutParagraphs, skills } from "@/data/portfolio";
import { motion } from "framer-motion";
import { MapPin, Terminal, Github as GithubIcon, Linkedin, Mail, Music, Play, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";

export function About() {
  const [time, setTime] = useState<string>("");
  const [typingText, setTypingText] = useState("");
  const fullText = `const developer = {
  name: 'M. Syifa Surya',
  role: 'Frontend & QA Engineer',
  passion: 'Clean Architecture',
  status: 'Ready to collaborate',
  coffee: true
};`;

  // Typing effect for Terminal
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypingText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 40);
    return () => clearInterval(typingInterval);
  }, []);

  // Real-time clock (Jakarta/WIB)
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString("en-US", { 
        timeZone: "Asia/Jakarta", 
        hour: '2-digit', 
        minute: '2-digit',
        second: '2-digit',
        hour12: true 
      }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeading title="About Me" />
        </FadeIn>

        {/* BENTO BOX GRID */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-5 auto-rows-[auto]">
          
          {/* ── BENTO 1: THE BIO (2x2) ── */}
          <FadeIn delay={0.1} className="md:col-span-2 md:row-span-2 group">
            <div className="h-full flex flex-col justify-between bg-white/[0.02] hover:bg-white/[0.04] border border-white/10 rounded-3xl p-6 md:p-8 transition-colors duration-500 overflow-hidden relative">
              {/* Decorative gradient orb */}
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl group-hover:bg-sky-500/20 transition-all duration-700" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 bg-sky-500/20 text-sky-400 rounded-xl">
                    <Terminal size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-wide">Sys.Info</h3>
                </div>
                
                <div className="space-y-4 text-[15px] leading-relaxed text-slate-400 text-justify">
                  {aboutParagraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* ── BENTO 2: TERMINAL MOCKUP (2x2) ── */}
          <FadeIn delay={0.2} className="md:col-span-2 md:row-span-2">
            <div className="h-full min-h-[250px] w-full bg-[#0d1117] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col group relative">
              {/* Mac window header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="mx-auto flex items-center gap-2 text-xs text-slate-500 font-mono">
                  developer.ts
                </div>
              </div>
              
              {/* Terminal body */}
              <div className="p-5 flex-1 relative bg-[#0d1117] font-mono text-[13px] sm:text-[15px] leading-loose">
                {/* Line numbers */}
                <div className="absolute left-0 top-0 bottom-0 w-10 bg-white/[0.02] border-r border-white/5 flex flex-col items-center pt-5 text-slate-600 select-none">
                  {[1, 2, 3, 4, 5, 6, 7].map(n => <span key={n}>{n}</span>)}
                </div>
                
                <div className="pl-8 text-sky-200 whitespace-pre-wrap">
                  {typingText}
                  <span className="inline-block w-2 h-4 bg-sky-400 ml-1 animate-pulse" />
                </div>
              </div>
            </div>
          </FadeIn>

          {/* ── BENTO 3: TECH STACK MARQUEE (4x1) ── */}
          <FadeIn delay={0.3} className="md:col-span-4 md:row-span-1 h-[140px]">
            <div className="h-full w-full bg-white/[0.02] border border-white/10 rounded-3xl p-5 flex flex-col justify-center overflow-hidden relative group">
              <h3 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4 px-4 z-10 flex items-center gap-2">
                Tech Arsenal
              </h3>
              
              {/* Fade edges */}
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-navy to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-navy to-transparent z-10 pointer-events-none" />
              
              <div className="flex w-full overflow-hidden">
                <motion.div
                  className="flex gap-5 min-w-max items-center px-4"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
                >
                  {[...skills, ...skills, ...skills, ...skills].map((skill, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/[0.03] border border-white/5 min-w-[140px] transition-all hover:bg-white/10 hover:border-white/20 hover:scale-105"
                    >
                      <div className="relative w-7 h-7 grayscale group-hover:grayscale-0 transition-all duration-300">
                        <Image src={skill.icon} alt={skill.name} fill className="object-contain" />
                      </div>
                      <span className="text-[13px] font-medium text-slate-300">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </FadeIn>

          {/* ── BENTO 4: REAL MAP LOCATION (1x1) ── */}
          <FadeIn delay={0.4} className="md:col-span-1 md:row-span-1 h-[160px]">
            <div className="h-full border border-white/10 rounded-3xl overflow-hidden relative group">
              {/* Real OpenStreetMap embed — Yogyakarta coordinates */}
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=110.316%2C-7.967%2C110.329%2C-7.957&layer=mapnik&marker=-7.962301%2C110.322469"
                className="absolute inset-0 w-full h-full"
                style={{ filter: "invert(90%) hue-rotate(180deg) brightness(0.85) contrast(1.1)" }}
                loading="lazy"
                title="Yogyakarta Location"
              />
              {/* Dark overlay gradient so info stays readable */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f]/95 via-[#0a192f]/30 to-transparent pointer-events-none" />

              {/* Info overlay */}
              <div className="absolute bottom-0 left-0 right-0 px-4 pb-4 z-10 flex items-end justify-between">
                <div>
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-[11px] font-mono text-green-400">Open to remote</span>
                  </div>
                  <p className="text-[13px] font-semibold text-white leading-tight">Yogyakarta, ID</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-slate-500 font-mono">WIB / GMT+7</p>
                  <p className="text-[13px] font-mono font-bold text-sky-400">{time || "..."}</p>
                </div>
              </div>
            </div>
          </FadeIn>


          {/* ── BENTO 5: SPOTIFY MOCKUP (2x1) ── */}
          <FadeIn delay={0.5} className="md:col-span-2 md:row-span-1 h-[160px]">
            <div className="h-full bg-white/[0.02] border border-white/10 rounded-3xl p-5 flex items-center gap-5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-green-500/5 rounded-full blur-2xl group-hover:bg-green-500/10 transition-all duration-700" />
              
              <div className="w-24 h-24 rounded-xl shrink-0 bg-gradient-to-br from-green-400 to-sky-500 relative overflow-hidden shadow-lg">
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play size={28} fill="white" className="text-white" />
                </div>
                {/* Optional: Add a real image here if you have one, otherwise gradient looks cool */}
                <div className="w-full h-full flex flex-col items-center justify-center p-2 text-center text-white/90">
                  <Music size={24} className="mb-1 opacity-75" />
                  <span className="text-[9px] font-bold uppercase tracking-widest leading-tight">Coding<br/>Vibes</span>
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-0.5 rounded border border-green-500/30 text-[9px] font-mono text-green-400 uppercase">Now Playing</span>
                </div>
                <h4 className="text-base font-bold text-white truncate">Lofi Beats to Code To</h4>
                <p className="text-xs text-slate-400 truncate mt-0.5">Focus • Flow State</p>
                
                {/* Fake Audio Visualizer */}
                <div className="flex items-end gap-1 h-6 mt-3">
                  {[1,2,3,4,5,6,7,8].map((i) => (
                    <motion.div
                      key={i}
                      className="w-1.5 bg-green-400/80 rounded-t-sm"
                      animate={{ height: ["20%", "100%", "30%", "80%", "20%"] }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 1.5 + (Math.random() * 0.5), 
                        delay: i * 0.1,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* ── BENTO 6: CONNECT (1x1) ── */}
          <FadeIn delay={0.6} className="md:col-span-1 md:row-span-1 h-[160px]">
            <div className="h-full bg-white/[0.02] border border-white/10 rounded-3xl p-2 flex flex-col gap-2">
              <a href="#" className="flex-1 bg-white/[0.03] hover:bg-white/[0.08] rounded-2xl flex items-center justify-center gap-2 transition-colors border border-transparent hover:border-white/10 group">
                <GithubIcon size={18} className="text-slate-400 group-hover:text-white transition-colors" />
                <span className="text-xs font-mono text-slate-400 group-hover:text-white transition-colors">GitHub</span>
              </a>
              <a href="#" className="flex-1 bg-sky-500/10 hover:bg-sky-500/20 rounded-2xl flex items-center justify-center gap-2 transition-colors border border-transparent hover:border-sky-500/30 group">
                <Linkedin size={18} className="text-sky-400 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-mono text-sky-400">LinkedIn</span>
              </a>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
