"use client";

import { motion } from "framer-motion";
import { Cpu, Database, Code, Wrench, Globe, UserCheck } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function Skills() {
  const icons = [
    <Cpu key="core" className="w-5 h-5 text-[#ff4d00]" />,
    <Globe key="ai" className="w-5 h-5 text-[#ff4d00]" />,
    <Code key="web" className="w-5 h-5 text-[#ff4d00]" />,
    <Wrench key="tools" className="w-5 h-5 text-[#ff4d00]" />,
    <Database key="lang" className="w-5 h-5 text-[#ff4d00]" />,
    <UserCheck key="soft" className="w-5 h-5 text-[#ff4d00]" />,
  ];

  return (
    <section id="skills-matrix" className="relative bg-black py-28 md:py-36 border-t border-white/20">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] glow-orb-soft rounded-full pointer-events-none opacity-40 z-0" />
      <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] glow-orb-primary rounded-full pointer-events-none opacity-30 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10 text-white/40 font-mono text-xs tracking-widest uppercase">
          <span>[02] TECHNICAL ARSENAL</span>
          <span>SYSTEM ARCHITECTURE</span>
        </div>

        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium uppercase tracking-tight text-white leading-tight">
            ENGINEERED SKILLS & TECHNOLOGIES.
          </h2>
          <p className="text-sm md:text-base text-white/60 font-light mt-4 leading-relaxed">
            A comprehensive spectrum of mathematical machine learning, modern large language model frameworks, and high-throughput web architectures.
          </p>
        </div>

        {/* Grid of Dark Cards with Orange Glow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.skills.map((category, index) => (
            <div
              key={category.title}
              className="bg-[#0d0d0d] border border-white/10 rounded-2xl p-7 flex flex-col justify-between card-hover-glow relative group overflow-hidden transition-all duration-300"
            >
              {/* Internal subtle glow corner */}
              <div className="absolute -top-10 -right-10 w-28 h-28 bg-[#ff4d00]/10 rounded-full blur-2xl group-hover:bg-[#ff4d00]/30 transition-all duration-300 pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-mono tracking-widest uppercase text-white/40">
                    [{String(index + 1).padStart(2, "0")}]
                  </span>
                  <div className="p-2 rounded-xl bg-white/[0.04] border border-white/10 group-hover:border-[#ff4d00]/40 transition-colors">
                    {icons[index % icons.length]}
                  </div>
                </div>

                <h3 className="text-lg md:text-xl font-medium uppercase tracking-wider text-white mb-6 group-hover:text-[#ff4d00] transition-colors">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 hover:border-[#ff4d00]/40 rounded-lg text-xs text-white/80 font-mono tracking-wide transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-white/40">
                <span>Domain Focus</span>
                <span className="text-[#ff4d00] uppercase font-semibold">Production Ready</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
