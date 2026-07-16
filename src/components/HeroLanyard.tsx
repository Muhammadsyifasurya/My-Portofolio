"use client";

import React, { useState } from "react";
import { useSpring, animated, config } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import { Mail, Download, Github, Linkedin, MapPin } from "lucide-react";
import { siteConfig } from "@/data/portfolio";

const CARD_W = 260;
const CARD_H = 420;
const ROPE_H = 200;
const CLIP_Y = ROPE_H - 16;
const CARD_Y = ROPE_H + 2;

export function HeroLanyard() {
  const [isFlipped, setIsFlipped] = useState(false);

  const [{ x, y, rotate }, api] = useSpring(() => ({
    x: 0, y: 0, rotate: 0,
    config: { tension: 200, friction: 20 },
  }));

  const [{ rotateY }, flipApi] = useSpring(() => ({
    rotateY: 0,
    config: config.wobbly,
  }));

  const bind = useDrag(({ offset: [ox, oy], last }) => {
    if (last) {
      api.start({ x: 0, y: 0, rotate: 0, config: { tension: 130, friction: 18 } });
    } else {
      api.start({ x: ox, y: oy, rotate: ox * 0.04, config: { tension: 350, friction: 25 } });
    }
  }, { from: () => [x.get(), y.get()] });

  const handleFlip = () => {
    const next = !isFlipped;
    setIsFlipped(next);
    flipApi.start({ rotateY: next ? 180 : 0 });
  };

  const MID = (CARD_W + 60) / 2;

  return (
    <div className="relative flex flex-col items-center justify-start h-[640px] w-full select-none">

      {/* ── Lanyard Rope ── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none z-0">
        <animated.svg
          width={CARD_W + 60}
          height={ROPE_H + 20}
          className="overflow-visible"
        >
          <defs>
            <linearGradient id="ropeMain" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0ea5e9" />
              <stop offset="45%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#4f46e5" />
            </linearGradient>
            <linearGradient id="ropeHighlight" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="rgba(255,255,255,0)" />
              <stop offset="50%" stopColor="rgba(255,255,255,0.25)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </linearGradient>
          </defs>

          {/* Shadow/depth strand */}
          <animated.path
            d={x.to(v => `M ${MID + 7},0 C ${MID + 7 + v * 0.1},${ROPE_H * 0.3} ${MID + 7 + v * 0.55},${ROPE_H * 0.65} ${MID + 7 + v * 0.9},${ROPE_H}`)}
            stroke="#1e1b4b"
            strokeWidth="14"
            fill="none"
            strokeLinecap="round"
          />
          {/* Main fabric body */}
          <animated.path
            d={x.to(v => `M ${MID},0 C ${MID + v * 0.1},${ROPE_H * 0.3} ${MID + v * 0.55},${ROPE_H * 0.65} ${MID + v * 0.9},${ROPE_H}`)}
            stroke="url(#ropeMain)"
            strokeWidth="12"
            fill="none"
            strokeLinecap="round"
          />
          {/* Center highlight */}
          <animated.path
            d={x.to(v => `M ${MID},0 C ${MID + v * 0.1},${ROPE_H * 0.3} ${MID + v * 0.55},${ROPE_H * 0.65} ${MID + v * 0.9},${ROPE_H}`)}
            stroke="url(#ropeHighlight)"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
          {/* Edge stitching lines */}
          {[-5, 5].map((offset, i) => (
            <animated.path
              key={i}
              d={x.to(v => `M ${MID + offset},0 C ${MID + offset + v * 0.1},${ROPE_H * 0.3} ${MID + offset + v * 0.55},${ROPE_H * 0.65} ${MID + offset + v * 0.9},${ROPE_H}`)}
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="1"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="6 10"
            />
          ))}
        </animated.svg>
      </div>

      {/* ── Badge Clip / Swivel ── */}
      <animated.div
        style={{ x, y: y.to(v => v + CLIP_Y), position: "absolute" }}
        className="z-10 pointer-events-none flex flex-col items-center"
      >
        {/* Swivel hook body */}
        <div className="w-5 h-7 bg-gradient-to-b from-slate-400 to-slate-600 rounded-full border border-slate-300/30 shadow-lg" />
        {/* Connector bar */}
        <div className="w-10 h-3 bg-gradient-to-b from-slate-500 to-slate-700 rounded border border-slate-400/30 shadow-md -mt-0.5" />
      </animated.div>

      {/* ── ID Card ── */}
      <animated.div
        {...bind()}
        style={{
          x,
          y: y.to(v => v + CARD_Y),
          rotate,
          position: "absolute",
          width: CARD_W,
          height: CARD_H,
          cursor: "grab",
          perspective: 1400,
          touchAction: "none",
          zIndex: 20,
        }}
        className="pointer-events-auto"
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
          {/* ══════════ FRONT FACE ══════════ */}
          <div style={{ backfaceVisibility: "hidden" }}
            className="absolute inset-0 rounded-3xl overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.7)]"
          >
            {/* Card BG */}
            <div className="absolute inset-0 bg-[#0b1628]" />

            {/* Holographic shimmer */}
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: "linear-gradient(145deg, rgba(99,102,241,0.14) 0%, transparent 45%, rgba(14,165,233,0.09) 100%)" }} />

            {/* Header gradient */}
            <div className="absolute top-0 left-0 right-0 h-[130px]"
              style={{ background: "linear-gradient(135deg, #0369a1 0%, #4338ca 100%)" }}>
              {/* Deco circles */}
              <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full border border-white/10" />
              <div className="absolute top-4 right-12 w-16 h-16 rounded-full border border-white/10" />
              <div className="absolute top-8 right-6 w-8 h-8 rounded-full border border-white/10" />
              {/* Label */}
              <div className="absolute top-6 left-5">
                <p className="text-[13px] font-black text-white/95 tracking-[0.25em] uppercase">Portfolio</p>
                <p className="text-[10px] text-sky-300/80 font-mono tracking-wider mt-0.5">ID Card v2026</p>
              </div>
            </div>

            {/* Profile photo */}
            <div className="absolute top-[84px] left-1/2 -translate-x-1/2 w-[108px] h-[108px] rounded-full overflow-hidden border-[4px] border-white shadow-2xl z-10 bg-slate-700">
              <img src="/assets/profile.png" alt="M. Syifa Surya Saputra" className="w-full h-full object-cover" draggable={false} />
            </div>

            {/* Card body */}
            <div className="absolute top-[186px] left-0 right-0 bottom-0 flex flex-col items-center px-6 pb-5">
              <h3 className="text-[19px] font-extrabold text-white text-center leading-tight tracking-tight mt-1">
                M. Syifa Surya Saputra
              </h3>
              <p className="text-[13px] font-semibold text-sky-400 font-mono mt-1.5">Frontend Developer</p>

              <div className="flex items-center gap-1.5 mt-1.5">
                <MapPin size={12} className="text-slate-500" />
                <span className="text-[11px] text-slate-500 font-mono">Yogyakarta, Indonesia</span>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent my-4" />

              {/* Tech chips */}
              <div className="flex flex-wrap gap-2 justify-center">
                {["Next.js", "React", "TypeScript", "Tailwind"].map(t => (
                  <span key={t} className="bg-sky-900/50 border border-sky-700/50 text-sky-300 text-[11px] font-mono px-3 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>

              {/* Open to Work */}
              <div className="flex items-center gap-2 bg-emerald-950/70 border border-emerald-600/40 px-5 py-2 rounded-full mt-4">
                <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                <span className="text-[12px] font-bold text-emerald-400 tracking-widest uppercase">Open to Work</span>
              </div>

              {/* Barcode */}
              <div className="mt-auto flex flex-col items-center gap-2 w-full">
                <div className="flex gap-[2.5px] h-9 items-end">
                  {[3, 1, 4, 2, 3, 1, 2, 4, 1, 3, 2, 4, 1, 3, 2, 1, 4, 2, 3, 1, 2, 3, 1, 4, 2, 1, 3, 2, 4, 1].map((h, i) => (
                    <div key={i} className="bg-slate-400/60" style={{ width: 3, height: `${h * 7}px` }} />
                  ))}
                </div>
                <p className="text-[9px] text-slate-600 font-mono tracking-[0.3em]">MSS · 001 · FE · 2026</p>
              </div>
            </div>

            {/* Glow ring */}
            <div className="absolute inset-0 rounded-3xl ring-1 ring-sky-500/20 pointer-events-none" />
          </div>

          {/* ══════════ BACK FACE ══════════ */}
          <div style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
            className="absolute inset-0 rounded-3xl overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.7)]"
          >
            <div className="absolute inset-0 bg-[#0b1628]" />
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: "linear-gradient(145deg, rgba(99,102,241,0.12) 0%, transparent 50%)" }} />
            {/* Top stripe */}
            <div className="absolute top-0 left-0 right-0 h-2 rounded-t-3xl"
              style={{ background: "linear-gradient(90deg, #0369a1, #4338ca)" }} />

            <div className="relative flex flex-col items-center px-7 pt-8 pb-6 h-full gap-4">
              {/* Photo */}
              <div className="w-24 h-24 rounded-full overflow-hidden border-[3px] border-sky-500/60 bg-slate-700 shadow-xl">
                <img src="/assets/profile.png" alt="" className="w-full h-full object-cover" draggable={false} />
              </div>

              <div className="text-center -mt-1">
                <p className="text-[16px] font-bold text-white leading-tight">Muhammad Syifa Surya S.</p>
                <p className="text-[12px] text-sky-400 font-mono mt-1">Frontend Engineer</p>
              </div>

              <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent" />

              <div className="flex flex-col gap-3 w-full">
                <a href={siteConfig.resume} download onClick={(e) => e.stopPropagation()}
                  className="flex items-center justify-center gap-2 bg-white/90 hover:bg-white text-slate-900 py-3 rounded-2xl text-[13px] font-bold transition-colors shadow-sm">
                  <Download size={16} /> Download CV
                </a>
                <a href={`mailto:${siteConfig.email}`} onClick={(e) => e.stopPropagation()}
                  className="flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-500 text-white py-3 rounded-2xl text-[13px] font-bold transition-colors">
                  <Mail size={16} /> Email Me
                </a>
              </div>

              {/* Socials */}
              <div className="flex gap-8 mt-2">
                <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
                  className="flex flex-col items-center gap-1 text-slate-400 hover:text-white transition-colors">
                  <Github size={24} />
                  <span className="text-[9px] font-mono">GitHub</span>
                </a>
                <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
                  className="flex flex-col items-center gap-1 text-slate-400 hover:text-sky-400 transition-colors">
                  <Linkedin size={24} />
                  <span className="text-[9px] font-mono">LinkedIn</span>
                </a>
              </div>

              <p className="text-[9px] text-slate-600 font-mono mt-auto">tap to flip ↩</p>
            </div>

            <div className="absolute inset-0 rounded-3xl ring-1 ring-indigo-500/20 pointer-events-none" />
          </div>
        </animated.div>
      </animated.div>

      {/* Drag hint */}
      <animated.p
        style={{ opacity: x.to(v => Math.max(0, 1 - Math.abs(v) / 25)), position: "absolute", bottom: 12 }}
        className="text-[10px] text-slate-600 font-mono pointer-events-none"
      >
        drag · tap to flip
      </animated.p>
    </div>
  );
}
