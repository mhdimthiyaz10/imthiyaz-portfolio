"use client";

import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function Experience() {
  const exp = PORTFOLIO_DATA.experience;

  return (
    <section id="experience" className="relative bg-black py-28 md:py-36 border-t border-white/20">
      
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-[550px] h-[550px] glow-orb-soft rounded-full pointer-events-none opacity-40 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10 text-white/40 font-mono text-xs tracking-widest uppercase">
          <span>[03] INDUSTRY TRACK RECORD</span>
          <span>{exp.duration.toUpperCase()} ENGAGEMENT</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16 md:mb-20">
          <div className="lg:col-span-8">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium uppercase tracking-tight text-white leading-tight">
              {exp.role.toUpperCase()}
            </h2>
            <div className="inline-flex items-center gap-2 mt-4 px-3 py-1 bg-white/[0.04] border border-[#ff4d00]/30 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d00]" />
              <span className="text-xs font-mono uppercase tracking-widest text-white/80">
                Independent Engineering Practice · 6 Months
              </span>
            </div>
          </div>
          <div className="lg:col-span-4 lg:text-right pt-2">
            <p className="text-xs md:text-sm text-white/60 font-light leading-relaxed max-w-sm lg:ml-auto">
              {exp.summary}
            </p>
          </div>
        </div>

        {/* Numbered Rows [01]-[04] Layout */}
        <div className="divide-y divide-white/20 border-b border-white/20">
          {exp.items.map((item) => (
            <div
              key={item.number}
              className="py-8 md:py-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center group hover:bg-white/[0.02] px-4 -mx-4 rounded-xl transition-colors duration-200"
            >
              <div className="md:col-span-2">
                <span className="text-sm md:text-base font-mono tracking-widest text-[#ff4d00]">
                  {item.number}
                </span>
              </div>

              <div className="md:col-span-5">
                <h3 className="text-xl md:text-2xl font-medium uppercase tracking-wider text-white group-hover:text-[#ff4d00] transition-colors">
                  {item.title}
                </h3>
              </div>

              <div className="md:col-span-5">
                <p className="text-xs md:text-sm text-white/60 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
