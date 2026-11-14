"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function About() {
  const [activeIndex, setActiveIndex] = useState(0);
  const cards = PORTFOLIO_DATA.about.cards;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="about" className="relative bg-black py-28 md:py-36 border-t border-white/20 overflow-hidden">
      
      {/* Huge Fiery Radial Glow on the Right Edge */}
      <div className="absolute top-1/2 -translate-y-1/2 -right-32 w-[650px] md:w-[850px] h-[650px] md:h-[850px] glow-orb-intense rounded-full pointer-events-none opacity-85 z-0" />
      <div className="absolute top-10 left-10 w-[350px] h-[350px] glow-orb-soft rounded-full pointer-events-none opacity-30 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Top Corner Metadata */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10 text-white/40 font-mono text-xs tracking-widest uppercase">
          <span>{PORTFOLIO_DATA.about.cornerLabel}</span>
          <span>{PORTFOLIO_DATA.about.subCornerLabel}</span>
        </div>

        {/* Big Editorial Heading */}
        <div className="max-w-5xl mb-8">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[68px] font-medium uppercase tracking-tight text-white leading-[1.05]">
            {PORTFOLIO_DATA.about.heading}
          </h2>
        </div>

        {/* Subtext */}
        <div className="max-w-2xl mb-16 md:mb-20">
          <p className="text-sm md:text-base text-white/60 leading-relaxed font-light">
            {PORTFOLIO_DATA.about.text}
          </p>
        </div>

        {/* Market Presence Label */}
        <div className="mb-6 flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white/40">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d00]" />
          <span>Core Benchmarks</span>
        </div>

        {/* Three Cards: Gradient Blob Card, Off-White Card, Photo Card (Matching Reference Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          
          {/* Card 1: Liquid Gradient-Blob Card */}
          <div
            className={`relative overflow-hidden rounded-2xl md:rounded-3xl p-8 min-h-[380px] flex flex-col justify-between border border-white/10 bg-[#0d0d0d] transition-all duration-300 card-hover-glow ${
              activeIndex === 0 ? "ring-2 ring-[#ff4d00]/50" : ""
            }`}
          >
            {/* Fiery Gradient Liquid Blob on right */}
            <div className="absolute -top-10 -right-10 w-64 h-64 rounded-full bg-gradient-to-br from-[#ff5500] via-[#e10600] to-[#590505] blur-2xl opacity-90 pointer-events-none" />
            <div className="absolute top-1/2 right-2 -translate-y-1/2 w-44 h-44 rounded-full bg-[#ff4d00]/30 blur-xl pointer-events-none" />

            <div className="relative z-10">
              <span className="text-5xl lg:text-6xl font-semibold text-white tracking-tight block mb-2">
                {cards[0].metric}
              </span>
            </div>

            <div className="relative z-10 pt-16">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-2">
                {cards[0].title}
              </h3>
              <p className="text-xs text-white/60 font-light leading-relaxed">
                {cards[0].description}
              </p>
            </div>
          </div>

          {/* Card 2: Off-White Card with Dark Text (High Contrast) */}
          <div
            className={`relative overflow-hidden rounded-2xl md:rounded-3xl p-8 min-h-[380px] flex flex-col justify-between bg-[#fdf3ee] text-black transition-all duration-300 hover:scale-[1.02] shadow-[0_10px_35px_rgba(0,0,0,0.5)] ${
              activeIndex === 1 ? "ring-2 ring-white" : ""
            }`}
          >
            <div className="relative z-10">
              <span className="text-5xl lg:text-6xl font-semibold text-black tracking-tight block mb-2">
                {cards[1].metric}
              </span>
            </div>

            <div className="relative z-10 pt-16">
              <h3 className="text-sm font-bold uppercase tracking-wider text-black mb-2">
                {cards[1].title}
              </h3>
              <p className="text-xs text-black/70 font-normal leading-relaxed">
                {cards[1].description}
              </p>
            </div>
          </div>

          {/* Card 3: Photo / Silhouette Card with Orange Rim Lighting (Right-aligned photo cutout) */}
          <div
            className={`relative overflow-hidden rounded-2xl md:rounded-3xl p-8 min-h-[380px] flex flex-col justify-between border border-white/10 bg-[#0d0d0d] transition-all duration-300 card-hover-glow ${
              activeIndex === 2 ? "ring-2 ring-[#ff4d00]/50" : ""
            }`}
          >
            {/* Subtle orange rim background glow */}
            <div className="absolute top-1/2 right-4 -translate-y-1/2 w-48 h-48 rounded-full bg-[#ff4d00]/25 blur-2xl pointer-events-none" />

            {/* Cutout photo of Mohammed with orange rim light on the right */}
            <div className="absolute right-0 bottom-0 w-44 md:w-48 h-60 pointer-events-none z-0">
              <Image
                src="/imthiyaz-hero-cutout.png"
                alt="Credentials preview portrait"
                fill
                className="object-contain object-bottom drop-shadow-[0_10px_30px_rgba(255,77,0,0.4)]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent" />
            </div>

            <div className="relative z-10">
              <span className="text-5xl lg:text-6xl font-semibold text-white tracking-tight block mb-2">
                {cards[2].metric}
              </span>
            </div>

            <div className="relative z-10 pt-16 max-w-[65%]">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-2">
                {cards[2].title}
              </h3>
              <p className="text-xs text-white/60 font-light leading-relaxed">
                {cards[2].description}
              </p>
            </div>
          </div>

        </div>

        {/* Circular Prev / Next Carousel Navigation Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-200 shadow-md"
            aria-label="Previous card"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full bg-[#ff4d00] text-white flex items-center justify-center hover:bg-[#ff5d1a] hover:scale-105 active:scale-95 transition-all duration-200 shadow-[0_0_20px_rgba(255,77,0,0.4)]"
            aria-label="Next card"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
