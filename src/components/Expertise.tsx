"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import Link from "next/link";
import { PORTFOLIO_DATA, ExpertiseItem } from "@/data/portfolio";

export default function Expertise() {
  // Row [02] (Generative AI) is open by default as requested in prompt & reference
  const [openId, setOpenId] = useState<string>("gen-ai");

  const toggleRow = (id: string) => {
    setOpenId((prev) => (prev === id ? "" : id));
  };

  return (
    <section id="skills" className="relative bg-black py-24 md:py-32 border-t border-white/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16 md:mb-20">
          <div className="lg:col-span-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium uppercase tracking-tight text-white leading-tight">
              {PORTFOLIO_DATA.expertise.heading}
            </h2>
          </div>
          <div className="lg:col-span-4 lg:text-right pt-2">
            <p className="text-xs md:text-sm text-white/60 leading-relaxed font-light max-w-sm lg:ml-auto">
              {PORTFOLIO_DATA.expertise.description}
            </p>
          </div>
        </div>

        {/* Accordion List */}
        <div className="divide-y divide-white/20 border-b border-white/20">
          {PORTFOLIO_DATA.expertise.items.map((item: ExpertiseItem) => {
            const isOpen = openId === item.id;

            return (
              <div key={item.id} className="py-6 md:py-8 transition-colors">
                {/* Header row: clickable */}
                <button
                  onClick={() => toggleRow(item.id)}
                  className="w-full flex items-center justify-between text-left group focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 md:gap-14 flex-1">
                    <span className="text-xs md:text-sm font-mono tracking-widest text-white/50">
                      {item.number}
                    </span>
                    <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium uppercase tracking-wider text-white group-hover:text-[#ff4d00] transition-colors duration-200">
                      {item.title}
                    </span>
                  </div>

                  {/* Circular toggle arrow button */}
                  <div
                    className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 ml-4 shrink-0 ${
                      isOpen
                        ? "bg-white text-black rotate-180"
                        : "bg-[#141414] text-white/70 group-hover:bg-white/10 group-hover:text-white"
                    }`}
                  >
                    <ArrowDown className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300" />
                  </div>
                </button>

                {/* Expanded Content with smooth height animation */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 md:pt-10 pb-4 items-start">
                        
                        {/* Left column: Tiny caption & "Let's Talk" pill button */}
                        <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
                          <div>
                            <span className="text-[11px] font-mono tracking-widest uppercase text-white/40 block mb-1">
                              Strategy & Flow
                            </span>
                            <p className="text-xs text-white/60 font-light whitespace-pre-line leading-relaxed">
                              {item.caption}
                            </p>
                          </div>

                          <div>
                            <Link
                              href="#contact"
                              className="group inline-flex items-center gap-2.5 bg-[#fdf3ee] hover:bg-white text-black font-semibold text-xs tracking-wider uppercase px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,77,0,0.35)]"
                            >
                              <span>{item.ctaLabel}</span>
                              <div className="w-5 h-5 rounded-full bg-black text-[#fdf3ee] flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                                <ArrowUpRight className="w-3 h-3" />
                              </div>
                            </Link>
                          </div>
                        </div>

                        {/* Right column: 3 descriptive paragraphs + tech tags */}
                        <div className="lg:col-span-8 space-y-4">
                          {item.description.map((paragraph, pIdx) => (
                            <p
                              key={pIdx}
                              className="text-xs sm:text-sm text-white/70 leading-relaxed font-light"
                            >
                              {paragraph}
                            </p>
                          ))}

                          {/* Tech chips */}
                          <div className="flex flex-wrap gap-2 pt-3">
                            {item.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-3 py-1 bg-white/[0.04] border border-white/10 rounded-full text-[11px] text-white/60 tracking-wider uppercase font-mono"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

