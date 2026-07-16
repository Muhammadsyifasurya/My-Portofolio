"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "./FadeIn";
import { SectionHeading } from "./SectionHeading";
import { experiences } from "@/data/portfolio";
import { Circle } from "lucide-react";

const expTech: Record<string, string[]> = {
  "habs":                 ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
  "lppan-qa":             ["Next.js", "TypeScript", "COBIT 2019", "QA Testing"],
  "lppan-digital-talent": ["Next.js", "Tailwind CSS", "REST API"],
  "kai":                  ["SAP HANA", "JavaScript", "Web Dev"],
  "neura":                ["Android", "Java", "REST API"],
};

export function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const touchStartY = useRef<number | null>(null);

  // Handle scroll to rotate the arc (only triggers when hovering the left panel)
  const handleWheel = (e: React.WheelEvent) => {
    // Prevent default scroll behavior while interacting with the wheel
    e.preventDefault(); 
    
    if (isScrolling) return;

    if (e.deltaY > 20 && activeIndex < experiences.length - 1) {
      setIsScrolling(true);
      setActiveIndex(prev => prev + 1);
    } else if (e.deltaY < -20 && activeIndex > 0) {
      setIsScrolling(true);
      setActiveIndex(prev => prev - 1);
    }

    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => {
      setIsScrolling(false);
    }, 400); // Debounce time to prevent wild spinning
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartY.current === null || isScrolling) return;
    
    const currentY = e.touches[0].clientY;
    const diff = touchStartY.current - currentY;

    if (diff > 40 && activeIndex < experiences.length - 1) {
      setIsScrolling(true);
      setActiveIndex(prev => prev + 1);
      touchStartY.current = currentY;
    } else if (diff < -40 && activeIndex > 0) {
      setIsScrolling(true);
      setActiveIndex(prev => prev - 1);
      touchStartY.current = currentY;
    }

    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => {
      setIsScrolling(false);
    }, 300);
  };

  const active = experiences[activeIndex];
  const isPresent = active.period.includes("Present");

  return (
    <section id="experience" className="px-6 py-24 md:py-32 overflow-hidden bg-navy">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeading title="Experience" />
        </FadeIn>

        <FadeIn delay={0.1} className="mt-16 md:mt-24">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

            {/* ── LEFT: The Interactive Rolodex Arc ── */}
            {/* Added onWheel & onTouch to capture scroll/swipe for rotation */}
            <div 
              className="relative flex flex-col justify-center items-end lg:w-72 w-full h-[300px] lg:h-[400px] shrink-0 z-10 touch-none"
              onWheel={handleWheel}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              style={{ overscrollBehavior: 'contain' }}
            >
              
              {/* Decorative vertical arc curve (Fixed to curve rightwards along the dots) */}
              <svg
                className="absolute -right-6 top-0 h-full w-24 hidden lg:block pointer-events-none opacity-40 z-0"
                viewBox="0 0 100 400"
                preserveAspectRatio="none"
              >
                <path
                  d="M 10 0 Q 100 200 10 400"
                  stroke="rgba(56,189,248,0.3)"
                  strokeWidth="1.5"
                  fill="none"
                />
              </svg>

              <div className="relative w-full h-full flex items-center justify-end">
                {experiences.map((exp, i) => {
                  const offset = i - activeIndex; // Distance from center active item
                  const isActive = offset === 0;
                  
                  // Mathematical arc positioning
                  const y = offset * 85; // Vertical spread
                  const x = Math.abs(offset) * -18; // Pull left as it gets further from center
                  const scale = 1 - Math.abs(offset) * 0.12; // Shrink outer items
                  const blur = Math.abs(offset) * 2; // Blur outer items
                  const opacity = Math.max(1 - Math.abs(offset) * 0.4, 0); // Fade outer items

                  return (
                    <motion.button
                      key={exp.id}
                      onClick={() => setActiveIndex(i)}
                      animate={{
                        y,
                        x: isActive ? 0 : x,
                        scale,
                        opacity,
                        filter: `blur(${blur}px)`
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      className="absolute right-4 lg:right-0 flex items-center gap-5 text-right group cursor-pointer py-2 pr-1"
                      style={{ pointerEvents: opacity === 0 ? 'none' : 'auto', zIndex: isActive ? 20 : 10 }}
                    >
                      <div className="min-w-0 text-right pr-2">
                        <p className={`text-sm md:text-base font-bold leading-tight transition-colors ${
                          isActive ? "text-white" : "text-slate-400"
                        }`}>
                          {exp.title}
                        </p>
                        <p className={`text-[10px] md:text-xs font-mono mt-1 transition-colors ${
                          isActive ? "text-sky-400" : "text-slate-600"
                        }`}>
                          {exp.company}
                        </p>
                      </div>

                      {/* Connection Dot */}
                      <div className="relative shrink-0">
                        <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          isActive ? "bg-sky-400 shadow-[0_0_20px_rgba(56,189,248,1)]" : "bg-slate-700"
                        }`} />
                        {isActive && exp.period.includes("Present") && (
                          <span className="absolute inset-0 rounded-full bg-sky-400 animate-ping opacity-60" />
                        )}
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* ── RIGHT: Borderless Premium Detail Panel ── */}
            <div className="flex-1 min-w-0 relative z-20 min-h-[400px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 20, filter: "blur(8px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, x: -20, filter: "blur(8px)" }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="h-full flex flex-col relative"
                >
                  
                  {/* Glowing Ambient Backdrop (No Box) */}
                  <div className={`absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none opacity-[0.15] -z-10 ${
                    isPresent ? "bg-sky-400" : "bg-indigo-500"
                  }`} />
                  
                  {/* Minimalist Header */}
                  <div className="mb-10 flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <span className={`flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-widest uppercase border ${
                        isPresent
                          ? "bg-sky-500/10 border-sky-500/30 text-sky-400"
                          : "bg-white/5 border-white/10 text-slate-400"
                      }`}>
                        <Circle size={6} fill={isPresent ? "#38bdf8" : "#64748b"} className={isPresent ? "animate-pulse" : ""} />
                        {isPresent ? "Active Role" : "Completed"}
                      </span>
                      <span className="text-slate-500 font-mono text-sm">{active.period}</span>
                    </div>

                    <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mt-2">
                      {active.title}
                    </h3>
                    
                    <p className="text-sky-400 font-mono text-lg mt-1">
                      {active.company}
                    </p>
                  </div>

                  {/* Highlights without bounding box */}
                  <div className="relative z-10 flex-1 pl-1 border-l-2 border-white/5">
                    <ul className="space-y-8 mb-12 pl-6">
                      {active.highlights.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 + i * 0.1 }}
                          className="relative group"
                        >
                          {/* Floating indicator */}
                          <div className="absolute -left-[31px] top-2 w-2 h-2 rounded-full bg-slate-700 group-hover:bg-sky-400 transition-colors shadow-[0_0_10px_rgba(56,189,248,0)] group-hover:shadow-[0_0_10px_rgba(56,189,248,0.6)]" />
                          
                          <p className="text-lg text-slate-300 leading-relaxed font-light">
                            {item}
                          </p>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Clean Tech Stack */}
                  {expTech[active.id] && (
                    <div className="relative z-10 mt-auto pt-6 border-t border-white/5">
                      <div className="flex flex-wrap gap-3">
                        {expTech[active.id].map((tech, i) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 + i * 0.05 }}
                            className="text-sm font-mono text-slate-400 px-2 py-1 rounded hover:text-sky-400 hover:bg-sky-400/10 transition-colors cursor-default"
                          >
                            <span className="text-slate-600 mr-2">#</span>{tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  )}

                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
