"use client";

import React, { useState } from "react";
import { useSpring, animated, config } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import { Mail, Download, Github, Linkedin, MapPin } from "lucide-react";
import { siteConfig } from "@/data/portfolio";

const CARD_W = 140;
const CARD_H = 210;

export const LanyardBadge = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const [{ x, y, rotate }, api] = useSpring(() => ({
    x: 0, y: 0, rotate: 0,
    config: { tension: 180, friction: 22 },
  }));

  const [{ rotateY }, flipApi] = useSpring(() => ({
    rotateY: 0,
    config: config.wobbly,
  }));

  const bind = useDrag(({ offset: [ox, oy], last }) => {
    if (last) {
      api.start({ x: 0, y: 0, rotate: 0, config: { tension: 120, friction: 14 } });
    } else {
      api.start({ x: ox, y: oy, rotate: ox * 0.04, config: { tension: 300, friction: 20 } });
    }
  }, { from: () => [x.get(), y.get()] });

  const handleFlip = () => {
    const next = !isFlipped;
    setIsFlipped(next);
    flipApi.start({ rotateY: next ? 180 : 0 });
  };

  return (
    <div className="fixed right-4 top-0 bottom-0 w-44 pointer-events-none z-50 hidden lg:flex flex-col items-center">

      {/* Rope SVG */}
      <animated.svg
        width={CARD_W}
        height={200}
        className="absolute top-0 pointer-events-none overflow-visible"
        style={{ zIndex: 1 }}
      >
        {/* Main lanyard */}
        <animated.path
          d={x.to(v => `M ${CARD_W / 2},0 C ${CARD_W / 2 + v * 0.2},60 ${CARD_W / 2 + v * 0.5},110 ${CARD_W / 2 + v * 0.8},165`)}
          stroke="url(#lanyardGrad)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        {/* Left strand */}
        <animated.path
          d={x.to(v => `M ${CARD_W / 2 - 4},0 C ${CARD_W / 2 - 4 + v * 0.2},60 ${CARD_W / 2 - 4 + v * 0.5},110 ${CARD_W / 2 - 4 + v * 0.8},165`)}
          stroke="url(#lanyardGrad)"
          strokeWidth="1.5"
          strokeOpacity="0.4"
          fill="none"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="lanyardGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>
        </defs>
      </animated.svg>

      {/* Badge Clip */}
      <animated.div
        style={{ x, y: y.to(v => v + 165), rotate, position: "absolute", zIndex: 5 }}
        className="pointer-events-none"
      >
        <div className="w-8 h-5 bg-slate-600 rounded-sm mx-auto border border-slate-500 shadow flex items-center justify-center">
          <div className="w-3 h-2.5 rounded-sm border-2 border-slate-400/60" />
        </div>
      </animated.div>

      {/* Card */}
      <animated.div
        {...bind()}
        style={{
          x, y: y.to(v => v + 180), rotate,
          position: "absolute",
          width: CARD_W,
          height: CARD_H,
          cursor: "grab",
          perspective: 1200,
          touchAction: "none",
          zIndex: 10,
        }}
        className="pointer-events-auto select-none"
      >
        <animated.div
          onClick={handleFlip}
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
            transformStyle: "preserve-3d",
            rotateY,
          }}
        >

          {/* ═══════════════ FRONT FACE ═══════════════ */}
          <div
            style={{ backfaceVisibility: "hidden" }}
            className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* Card background */}
            <div className="absolute inset-0 bg-[#0d1b2e]" />

            {/* Holographic shimmer layer */}
            <div className="absolute inset-0 opacity-20"
              style={{ background: "linear-gradient(135deg, transparent 30%, rgba(99,102,241,0.4) 50%, transparent 70%)" }}
            />

            {/* Top header band */}
            <div className="absolute top-0 left-0 right-0 h-[72px]"
              style={{ background: "linear-gradient(135deg, #0369a1 0%, #4f46e5 100%)" }}
            />

            {/* Decorative circles */}
            <div className="absolute top-2 right-2 w-12 h-12 rounded-full border border-white/10 opacity-40" />
            <div className="absolute top-5 right-5 w-6 h-6 rounded-full border border-white/10 opacity-40" />

            {/* Company label */}
            <div className="absolute top-3 left-3 flex flex-col">
              <span className="text-[8px] font-black text-white/90 tracking-[0.15em] uppercase">Portfolio</span>
              <span className="text-[7px] text-sky-300/80 font-mono tracking-wider">ID Card</span>
            </div>

            {/* Profile photo */}
            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[58px] h-[58px] rounded-full overflow-hidden border-[3px] border-white shadow-xl z-10">
              <img
                src="/assets/profile.png"
                alt="Muhammad Syifa"
                className="w-full h-full object-cover"
                draggable={false}
              />
            </div>

            {/* Card body */}
            <div className="absolute top-[88px] left-0 right-0 bottom-0 flex flex-col items-center px-3 py-3 gap-1">
              <h3 className="text-[11.5px] font-extrabold text-white text-center leading-tight tracking-tight mt-2">
                M. Syifa Surya S.
              </h3>
              <span className="text-[8.5px] font-semibold text-sky-400 font-mono tracking-wide">
                Frontend Developer
              </span>

              {/* Location */}
              <div className="flex items-center gap-0.5 mt-0.5">
                <MapPin size={7} className="text-slate-500" />
                <span className="text-[7px] text-slate-500 font-mono">Yogyakarta, ID</span>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent my-2" />

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1 justify-center">
                {["Next.js", "React", "TS"].map(t => (
                  <span key={t} className="bg-sky-900/40 border border-sky-700/40 text-sky-400 text-[7px] font-mono px-1.5 py-0.5 rounded-full">
                    {t}
                  </span>
                ))}
              </div>

              {/* Status */}
              <div className="flex items-center gap-1.5 bg-emerald-950/60 border border-emerald-600/30 px-2.5 py-1 rounded-full mt-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                <span className="text-[7.5px] font-bold text-emerald-400 tracking-wider uppercase">Open to Work</span>
              </div>

              {/* Barcode bottom */}
              <div className="mt-auto flex flex-col items-center gap-1 w-full">
                <div className="flex gap-0.5 h-5 items-end">
                  {[3,1,4,2,3,1,2,4,1,3,2,1,3,2,4,1,2,3].map((h, i) => (
                    <div key={i} className="bg-slate-400/60" style={{ width: 1.5, height: `${h * 4}px` }} />
                  ))}
                </div>
                <span className="text-[6px] text-slate-600 font-mono tracking-widest">MSS-001-FE</span>
              </div>
            </div>

            {/* Border glow */}
            <div className="absolute inset-0 rounded-2xl ring-1 ring-sky-500/20 pointer-events-none" />
          </div>

          {/* ═══════════════ BACK FACE ═══════════════ */}
          <div
            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
            className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-[#0d1b2e]" />

            {/* Accent stripe top */}
            <div className="absolute top-0 left-0 right-0 h-2"
              style={{ background: "linear-gradient(90deg, #0369a1, #4f46e5)" }}
            />

            {/* Holographic shimmer */}
            <div className="absolute inset-0 opacity-10"
              style={{ background: "linear-gradient(135deg, transparent 30%, rgba(99,102,241,0.5) 50%, transparent 70%)" }}
            />

            <div className="relative flex flex-col items-center px-4 pt-6 pb-4 h-full gap-3">
              {/* Avatar small */}
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-sky-500/50">
                <img src="/assets/profile.png" alt="" className="w-full h-full object-cover" draggable={false} />
              </div>

              <p className="text-[9px] font-bold text-white text-center leading-tight">Muhammad Syifa Surya S.</p>
              <p className="text-[8px] text-sky-400/80 font-mono -mt-1">Frontend Engineer</p>

              <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent" />

              <div className="flex flex-col gap-2 w-full">
                <a
                  href={siteConfig.resume}
                  download
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center justify-center gap-1.5 bg-white/90 hover:bg-white text-slate-900 py-1.5 rounded-xl text-[9px] font-bold transition-colors"
                >
                  <Download size={11} /> Download CV
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center justify-center gap-1.5 bg-sky-600 hover:bg-sky-500 text-white py-1.5 rounded-xl text-[9px] font-bold transition-colors"
                >
                  <Mail size={11} /> Email Me
                </a>
              </div>

              <div className="flex gap-4 mt-auto">
                <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <Github size={16} />
                </a>
                <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
                  className="text-slate-400 hover:text-sky-400 transition-colors"
                >
                  <Linkedin size={16} />
                </a>
              </div>

              {/* Flip hint */}
              <p className="text-[7px] text-slate-600 font-mono">tap to flip ↩</p>
            </div>

            <div className="absolute inset-0 rounded-2xl ring-1 ring-indigo-500/20 pointer-events-none" />
          </div>
        </animated.div>
      </animated.div>

      {/* Drag hint */}
      <animated.p
        style={{ opacity: x.to(v => Math.max(0, 1 - Math.abs(v) / 30)), position: "absolute", bottom: 60 }}
        className="text-[8px] text-slate-600 font-mono pointer-events-none"
      >
        drag me
      </animated.p>
    </div>
  );
};
