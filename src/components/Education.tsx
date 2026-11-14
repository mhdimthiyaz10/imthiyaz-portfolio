"use client";

import { GraduationCap, Award, CheckCircle2 } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function Education() {
  return (
    <section className="relative bg-black py-28 md:py-36 border-t border-white/20">
      
      {/* Background glow */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] glow-orb-soft rounded-full pointer-events-none opacity-30 z-0" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] glow-orb-primary rounded-full pointer-events-none opacity-25 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10 text-white/40 font-mono text-xs tracking-widest uppercase">
          <span>[04] ACADEMIC & ACCREDITATION</span>
          <span>VERIFIED CREDENTIALS</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Education Timeline */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#ff4d00]">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-medium uppercase tracking-wider text-white">
                  Education Timeline
                </h3>
                <span className="text-xs font-mono text-white/40">
                  Engineering Foundations
                </span>
              </div>
            </div>

            {/* Timeline Vertical Track */}
            <div className="relative pl-8 space-y-10 border-l border-white/15 ml-3">
              {PORTFOLIO_DATA.education.map((item) => (
                <div
                  key={item.degree}
                  className="relative group"
                >
                  {/* Glowing Node Dot */}
                  <span className="absolute -left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-black border-2 border-[#ff4d00] group-hover:scale-125 transition-transform duration-200" />
                  
                  <div className="flex items-center justify-between gap-4 mb-1">
                    <span className="text-xs font-mono text-[#ff4d00] tracking-wider uppercase font-semibold">
                      {item.year}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-white/[0.05] border border-white/15 text-[11px] font-mono text-white/80">
                      {item.score}
                    </span>
                  </div>

                  <h4 className="text-base md:text-lg font-medium uppercase tracking-wide text-white group-hover:text-[#ff4d00] transition-colors">
                    {item.degree}
                  </h4>
                  <p className="text-xs md:text-sm text-white/60 font-light mt-1">
                    {item.institution}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Certifications Grid */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#ff4d00]">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-medium uppercase tracking-wider text-white">
                  Certifications
                </h3>
                <span className="text-xs font-mono text-white/40">
                  Accredited by IIT Bombay, Microsoft & IBM
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PORTFOLIO_DATA.certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="bg-[#0d0d0d] border border-white/10 rounded-2xl p-5 card-hover-glow relative group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/10 text-[10px] font-mono uppercase tracking-wider text-white/50">
                        {cert.tag}
                      </span>
                      <span className="text-[11px] font-mono text-[#ff4d00]">
                        {cert.year}
                      </span>
                    </div>

                    <h4 className="text-sm font-medium uppercase tracking-wider text-white group-hover:text-[#ff4d00] transition-colors mb-2 leading-snug">
                      {cert.title}
                    </h4>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center gap-2 text-xs text-white/60 font-light">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#ff4d00] shrink-0" />
                    <span>{cert.issuer}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
