"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Github, X } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { SectionHeading } from "./SectionHeading";
import { projects } from "@/data/portfolio";
import { motion, AnimatePresence } from "framer-motion";

export function Projects() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [showArchive, setShowArchive] = useState(false);

  // Find the hovered project to display its image in the background
  const activeHoverProject = projects.find(p => p.id === hoveredId);

  return (
    <>
      <section id="work" className="relative min-h-screen py-24 md:py-32 overflow-hidden flex flex-col justify-center">
        
        {/* ── IMMERSIVE BACKGROUND REVEAL ── */}
        <div className="absolute inset-0 w-full h-full pointer-events-none -z-10 bg-navy">
          <AnimatePresence mode="wait">
            {activeHoverProject ? (
              <motion.div
                key={activeHoverProject.id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  src={activeHoverProject.image}
                  alt="Background preview"
                  fill
                  className="object-cover opacity-30 md:opacity-40"
                  priority
                />
                {/* Gradient overlay so text stays readable */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-navy via-transparent to-transparent" />
              </motion.div>
            ) : (
              <motion.div
                key="empty-bg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-navy"
              />
            )}
          </AnimatePresence>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-12">
          <FadeIn>
            <SectionHeading title="Selected Works" className="mb-16 md:mb-24" />
          </FadeIn>

          {/* ── GIANT TYPOGRAPHY LIST ── */}
          <div className="flex flex-col w-full" onMouseLeave={() => setHoveredId(null)}>
            {projects.slice(0, 5).map((project, idx) => {
              const isHovered = hoveredId === project.id;
              const isAnyHovered = hoveredId !== null;
              
              return (
                <div
                  key={project.id}
                  onMouseEnter={() => setHoveredId(project.id)}
                  onClick={() => setSelectedProject(project)}
                  className="group relative cursor-pointer border-b border-white/10 py-8 md:py-12"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 w-full">
                    
                    {/* Left: Number & Title */}
                    <div className="flex-1 min-w-0 flex items-start md:items-center gap-6 md:gap-8 relative z-10 transition-transform duration-500 ease-out group-hover:translate-x-2 md:group-hover:translate-x-6">
                      <span className={`font-mono text-lg md:text-xl transition-colors duration-500 shrink-0 ${
                        isHovered ? "text-sky-400" : "text-slate-600"
                      }`}>
                        {(idx + 1).toString().padStart(2, "0")}
                      </span>
                      
                      <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight transition-all duration-500 ${
                        isHovered ? "text-white" : isAnyHovered ? "text-white/20" : "text-white/60"
                      }`}>
                        {project.title}
                      </h2>
                    </div>

                    {/* Right: Meta Details (Clean layout, no wrap) */}
                    <div className={`hidden lg:flex items-center gap-8 transition-all duration-500 shrink-0 ${
                      isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                    }`}>
                      <div className="flex flex-col items-end text-right">
                        <span className="text-sky-400 font-mono text-sm whitespace-nowrap">{project.category}</span>
                        <span className="text-slate-400 text-xs whitespace-nowrap mt-1 max-w-[200px] truncate">{project.role}</span>
                      </div>
                    </div>

                  </div>
                  
                  {/* Subtle hover line highlight */}
                  <div className={`absolute bottom-0 left-0 h-[2px] bg-sky-400 transition-all duration-700 ease-out ${
                    isHovered ? "w-full opacity-100" : "w-0 opacity-0"
                  }`} />
                </div>
              );
            })}
          </div>

          {/* View All Button for the '100 projects' scenario */}
          {projects.length > 5 && (
            <div className="mt-16 flex justify-center">
              <FadeIn>
                <button 
                  onClick={() => setShowArchive(true)}
                  className="group flex items-center gap-3 px-8 py-4 rounded-full bg-white/[0.02] border border-white/10 hover:bg-white/[0.05] hover:border-sky-400/50 transition-all"
                >
                  <span className="font-mono text-sm text-slate-300 group-hover:text-white transition-colors">View Full Archive</span>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-sky-500/20 text-slate-400 group-hover:text-sky-400 transition-all">
                    <span className="text-lg leading-none">+</span>
                  </div>
                </button>
              </FadeIn>
            </div>
          )}
        </div>
      </section>

      {/* ── PROJECT DETAIL MODAL (Slide-up Sheet) ── */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-[#090b0f]/90 backdrop-blur-xl z-[100]"
            />

            <motion.div
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "100%" }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              className="fixed inset-x-0 bottom-0 top-12 md:top-24 z-[101] bg-[#0d1117] rounded-t-3xl border-t border-white/10 overflow-hidden shadow-2xl flex flex-col md:flex-row pointer-events-auto"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-20 w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-slate-300 hover:text-white hover:bg-black/70 transition-colors"
              >
                <X size={24} />
              </button>

              {/* Left Side: Massive Image Cover */}
              <div className="w-full md:w-1/2 h-64 md:h-full relative overflow-hidden bg-black">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0d1117] to-transparent" />
              </div>

              {/* Right Side: Content Scroll */}
              <div className="w-full md:w-1/2 h-full overflow-y-auto p-8 md:p-16 scrollbar-hide flex flex-col relative z-10 -mt-10 md:mt-0 bg-[#0d1117] rounded-t-3xl md:rounded-t-none">
                <p className="font-mono text-sm uppercase tracking-widest text-sky-400 mb-4">
                  {selectedProject.role} &bull; {selectedProject.category}
                </p>
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                  {selectedProject.title}
                </h2>

                <div className="flex gap-4 mb-12">
                  {selectedProject.github && (
                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-sm font-bold text-white transition-colors">
                      <Github size={18} /> Source Code
                    </a>
                  )}
                  {selectedProject.live && (
                    <a href={selectedProject.live} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 rounded-full bg-sky-500 hover:bg-sky-400 text-sm font-bold text-[#090b0f] transition-colors">
                      <ExternalLink size={18} /> Live Site
                    </a>
                  )}
                </div>

                <div className="space-y-12">
                  <div>
                    <h4 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4 border-b border-white/10 pb-2">01 / Background</h4>
                    <p className="text-lg text-slate-300 leading-relaxed font-light">{selectedProject.background}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4 border-b border-white/10 pb-2">02 / Method & Tech</h4>
                    <p className="text-lg text-slate-300 leading-relaxed font-light mb-6">{selectedProject.method}</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech) => (
                        <span key={tech} className="px-4 py-2 rounded-lg bg-navy border border-lightest-navy text-sm font-mono text-sky-400">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4 border-b border-white/10 pb-2">03 / Result</h4>
                    <p className="text-lg text-green-400/90 leading-relaxed font-light">{selectedProject.result}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      {/* ── PROJECT ARCHIVE MODAL (Full Screen) ── */}
      <AnimatePresence>
        {showArchive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-navy flex flex-col pointer-events-auto"
          >
            {/* Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between px-6 md:px-12 py-6 bg-navy/80 backdrop-blur-md border-b border-white/10">
              <h2 className="text-2xl md:text-4xl font-bold text-white">All Projects</h2>
              <button
                onClick={() => setShowArchive(false)}
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Table / List */}
            <div className="flex-1 overflow-y-auto px-6 md:px-12 py-12">
              <div className="max-w-6xl mx-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 text-slate-500 font-mono text-xs uppercase tracking-widest hidden md:table-row">
                      <th className="py-4 font-normal">Project</th>
                      <th className="py-4 font-normal">Category</th>
                      <th className="py-4 font-normal">Built With</th>
                      <th className="py-4 font-normal text-right">Links</th>
                    </tr>
                  </thead>
                  <tbody>
                    {projects.map((p) => (
                      <tr key={p.id} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors group flex flex-col md:table-row py-6 md:py-0">
                        <td className="py-2 md:py-6 align-top">
                          <p className="text-lg font-bold text-white group-hover:text-sky-400 transition-colors">{p.title}</p>
                          <p className="text-xs font-mono text-slate-500 md:hidden mt-1">{p.category}</p>
                        </td>
                        <td className="py-1 md:py-6 align-top text-slate-400 text-sm hidden md:table-cell">
                          {p.category}
                        </td>
                        <td className="py-3 md:py-6 align-top">
                          <div className="flex flex-wrap gap-1.5">
                            {p.tech.map((t) => (
                              <span key={t} className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-slate-400">
                                {t}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className="py-2 md:py-6 align-top md:text-right">
                          <div className="flex items-center md:justify-end gap-4">
                            {p.github && (
                              <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors flex items-center gap-1.5 text-sm">
                                <Github size={14} /> <span className="md:hidden">Code</span>
                              </a>
                            )}
                            {p.live && (
                              <a href={p.live} target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-300 transition-colors flex items-center gap-1.5 text-sm">
                                <ExternalLink size={14} /> <span className="md:hidden">Visit</span>
                              </a>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
