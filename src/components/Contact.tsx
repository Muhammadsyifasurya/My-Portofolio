"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/portfolio";

// ── TYPEWRITER HOOK ──
function useTypewriter(text: string, speed = 40, delay = 0) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed("");
    setDone(false);
    let timeout: NodeJS.Timeout;
    const start = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayed(text.slice(0, i + 1));
        i++;
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(start);
  }, [text, speed, delay]);

  return { displayed, done };
}

// ── TERMINAL LINE ──
function TerminalLine({
  prefix = ">",
  text,
  color = "text-slate-300",
  delay = 0,
  speed = 30,
  showCursor = false,
}: {
  prefix?: string;
  text: string;
  color?: string;
  delay?: number;
  speed?: number;
  showCursor?: boolean;
}) {
  const { displayed, done } = useTypewriter(text, speed, delay);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay - 50 < 0 ? 0 : delay - 50);
    return () => clearTimeout(t);
  }, [delay]);

  if (!visible) return null;

  return (
    <div className="flex items-start gap-3 font-mono text-sm md:text-base leading-relaxed">
      <span className="text-sky-500 shrink-0 mt-0.5">{prefix}</span>
      <span className={color}>
        {displayed}
        {(!done || showCursor) && (
          <span className="inline-block w-[2px] h-[1em] bg-sky-400 ml-0.5 animate-pulse align-middle" />
        )}
      </span>
    </div>
  );
}

export function Contact() {
  const [phase, setPhase] = useState(0); // 0=idle, 1=connecting, 2=connected, 3=executing, 4=done
  const [action, setAction] = useState<"wa" | "email" | null>(null);
  const [isHovered, setIsHovered] = useState<"wa" | "email" | null>(null);
  const [copied, setCopied] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Auto-start animation when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && phase === 0) {
          setPhase(1);
          setTimeout(() => setPhase(2), 2200);
        }
      },
      { threshold: 0.4 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [phase]);

  const handleCommand = (type: "wa" | "email") => {
    if (phase < 2) return;
    setAction(type);
    setPhase(3);
    setTimeout(() => {
      setPhase(4);
      if (type === "wa") {
        window.open(`https://wa.me/6285158611725?text=Hi%20Syifa!%20I'm%20reaching%20out%20from%20your%20portfolio...`, "_blank");
      } else {
        window.open(`mailto:${siteConfig.email}`, "_blank");
      }
    }, 1800);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const now = new Date();
  const timeStr = now.toLocaleTimeString("en-US", { hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" });

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative px-4 md:px-6 py-24 md:py-40 overflow-hidden min-h-screen flex items-center justify-center bg-navy"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-sky-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-3xl mx-auto">

        {/* ── TERMINAL HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Window chrome */}
          <div className="flex items-center gap-2 px-5 py-4 bg-[#161b22] rounded-t-2xl border border-white/[0.06] border-b-0">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            <span className="ml-4 font-mono text-xs text-slate-500">
              ssh syifa@portfolio.dev — bash — 80×24
            </span>
          </div>

          {/* Terminal body */}
          <div className="bg-[#0d1117] border border-white/[0.06] border-t-0 rounded-b-2xl p-6 md:p-10 space-y-4 min-h-[420px] shadow-[0_40px_80px_rgba(0,0,0,0.6)]">

            {/* Static header lines */}
            <div className="font-mono text-xs text-slate-600 mb-6 space-y-1 border-b border-white/5 pb-6">
              <p>Welcome to <span className="text-sky-400">portfolio.dev</span> — Last login: {timeStr} from 192.168.1.1</p>
              <p className="text-slate-700">Type <span className="text-slate-500">&apos;help&apos;</span> for available commands.</p>
            </div>

            {/* Phase 1: Connecting */}
            {phase >= 1 && (
              <div className="space-y-3">
                <TerminalLine
                  prefix="$"
                  text="ssh syifa@portfolio.dev --port 443"
                  color="text-emerald-400"
                  delay={100}
                  speed={40}
                />
                <TerminalLine
                  text="Establishing encrypted connection..."
                  color="text-slate-400"
                  delay={900}
                  speed={25}
                />
                <TerminalLine
                  text="Verifying host identity... OK"
                  color="text-slate-400"
                  delay={1500}
                  speed={25}
                />
              </div>
            )}

            {/* Phase 2+: Connected */}
            {phase >= 2 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-3 py-3 px-4 rounded-lg bg-emerald-500/5 border border-emerald-500/10">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                  <span className="font-mono text-sm text-emerald-400">Connected to syifa@portfolio.dev ✓</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                  {[
                    { key: "Status", value: "OPEN TO WORK", color: "text-sky-400" },
                    { key: "Location", value: "Indonesia 🇮🇩", color: "text-slate-300" },
                    { key: "Response time", value: "< 24 hours", color: "text-slate-300" },
                    { key: "Availability", value: "Full-time / Freelance", color: "text-slate-300" },
                  ].map((item, i) => (
                    <motion.div
                      key={item.key}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.12 }}
                      className="font-mono text-sm flex gap-2"
                    >
                      <span className="text-slate-600 shrink-0">{item.key}:</span>
                      <span className={`font-bold ${item.color}`}>{item.value}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Email line */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="pt-4 border-t border-white/5"
                >
                  <TerminalLine
                    prefix="$"
                    text={`whoami --contact`}
                    color="text-emerald-400"
                    delay={800}
                    speed={40}
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.6 }}
                    className="mt-3 flex flex-wrap items-center gap-3 group cursor-pointer"
                    onClick={handleCopyEmail}
                  >
                    <span className="text-sky-500 shrink-0 font-mono text-sm">&gt;</span>
                    <span className="font-mono text-sm md:text-base text-white font-bold tracking-wide group-hover:text-sky-400 transition-colors break-all">
                      {siteConfig.email}
                    </span>
                    <button
                      className="shrink-0 px-3 py-1 rounded-md bg-white/5 border border-white/10 font-mono text-xs text-slate-500 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
                    >
                      {copied ? "✓ copied!" : "copy"}
                    </button>
                  </motion.div>
                </motion.div>

                {/* The Command CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 }}
                  className="pt-6"
                >
                  {/* Input prompt */}
                  <AnimatePresence mode="wait">
                    {phase === 2 && (
                      <motion.div
                        key="prompt"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col gap-4"
                      >
                        {/* WhatsApp Command */}
                        <div className="flex items-center gap-2 font-mono text-sm">
                          <span className="text-sky-500 shrink-0">$</span>
                          <button
                            onClick={() => handleCommand("wa")}
                            onMouseEnter={() => setIsHovered("wa")}
                            onMouseLeave={() => setIsHovered(null)}
                            className={`group relative flex flex-wrap items-center gap-x-2 gap-y-1 px-4 py-3 rounded-lg border font-mono text-xs md:text-sm font-bold transition-all duration-300 ${isHovered === "wa"
                              ? "bg-sky-500/15 border-sky-400/50 text-sky-300 shadow-[0_0_20px_rgba(56,189,248,0.2)]"
                              : "bg-white/[0.03] border-white/10 text-slate-300 hover:border-white/20"
                              }`}
                          >
                            <span className="text-sky-500">run</span>
                            <span>send-whatsapp</span>
                            <span className="text-slate-500">--to</span>
                            <span className="text-amber-400 break-all">&quot;+62 851-5861-1725&quot;</span>
                            <span className={`w-2 h-4 rounded-sm transition-all ${isHovered === "wa" ? "bg-sky-400" : "bg-slate-600"}`} />
                          </button>
                        </div>

                        {/* Email Command */}
                        <div className="flex items-center gap-2 font-mono text-sm">
                          <span className="text-sky-500 shrink-0">$</span>
                          <button
                            onClick={() => handleCommand("email")}
                            onMouseEnter={() => setIsHovered("email")}
                            onMouseLeave={() => setIsHovered(null)}
                            className={`group relative flex flex-wrap items-center gap-x-2 gap-y-1 px-4 py-3 rounded-lg border font-mono text-xs md:text-sm font-bold transition-all duration-300 ${isHovered === "email"
                              ? "bg-sky-500/15 border-sky-400/50 text-sky-300 shadow-[0_0_20px_rgba(56,189,248,0.2)]"
                              : "bg-white/[0.03] border-white/10 text-slate-300 hover:border-white/20"
                              }`}
                          >
                            <span className="text-sky-500">run</span>
                            <span>send-email</span>
                            <span className="text-slate-500">--to</span>
                            <span className="text-amber-400 break-all">&quot;{siteConfig.email}&quot;</span>
                            <span className={`w-2 h-4 rounded-sm transition-all ${isHovered === "email" ? "bg-sky-400" : "bg-slate-600"}`} />
                          </button>
                        </div>
                      </motion.div>
                    )}

                    {phase === 3 && (
                      <motion.div
                        key="executing"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="space-y-2 font-mono text-sm"
                      >
                        <div className="flex items-start gap-3">
                          <span className="text-sky-500 shrink-0">$</span>
                          <span className="text-emerald-400 break-all">
                            {action === "wa"
                              ? 'run send-whatsapp --to "+62 851-5861-1725"'
                              : `run send-email --to "${siteConfig.email}"`}
                          </span>
                        </div>
                        <div className="flex items-center gap-3 ml-6">
                          <motion.span
                            animate={{ rotate: 360 }}
                            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                            className="text-sky-400 text-lg"
                          >
                            ⟳
                          </motion.span>
                          <span className="text-slate-400">
                            {action === "wa" ? "Connecting to WhatsApp API..." : "Composing message..."}
                          </span>
                        </div>
                        <div className="ml-6">
                          <span className="text-slate-400">
                            {action === "wa" ? "Opening chat" : "Opening mail client"}
                          </span>
                          <span className="inline-block w-[2px] h-[1em] bg-sky-400 ml-0.5 animate-pulse align-middle" />
                        </div>
                      </motion.div>
                    )}

                    {phase === 4 && (
                      <motion.div
                        key="done"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="space-y-1 font-mono text-sm"
                      >
                        <div className="flex items-start gap-3">
                          <span className="text-sky-500 shrink-0">$</span>
                          <span className="text-emerald-400 break-all">
                            {action === "wa"
                              ? 'run send-whatsapp --to "+62 851-5861-1725"'
                              : `run send-email --to "${siteConfig.email}"`}
                          </span>
                        </div>
                        <div className="ml-6 text-emerald-400 font-bold">
                          {action === "wa"
                            ? "✓ WhatsApp opened. Ready to chat!"
                            : "✓ Mail client opened. Waiting for your message..."}
                        </div>
                        <div className="flex items-center gap-3 mt-2">
                          <span className="text-sky-500">$</span>
                          <span className="inline-block w-[2px] h-[1em] bg-sky-400 animate-pulse align-middle" />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            )}

            {/* Phase 1 loading cursor */}
            {phase === 1 && (
              <div className="flex items-center gap-3 font-mono text-sm">
                <span className="text-sky-500">$</span>
                <span className="inline-block w-[2px] h-[1em] bg-sky-400 animate-pulse align-middle" />
              </div>
            )}

          </div>
        </motion.div>
      </div>
    </section>
  );
}
