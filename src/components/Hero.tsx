"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Subtle parallax
  const textParallax = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const portraitParallax = useTransform(scrollYProgress, [0, 1], ["0%", "-4%"]);
  const glowParallax = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[960px] lg:min-h-[1020px] bg-black pt-28 md:pt-36 pb-0 overflow-hidden flex flex-col justify-between"
    >
      {/* Fiery radial glow bleeding from behind */}
      <motion.div
        style={{ y: glowParallax }}
        className="absolute top-10 left-1/2 -translate-x-1/2 w-[750px] md:w-[1100px] h-[600px] md:h-[750px] glow-orb-intense rounded-full pointer-events-none opacity-90 z-0"
      />
      <div className="absolute top-0 right-0 w-[550px] h-[550px] glow-orb-primary rounded-full pointer-events-none opacity-45 z-0" />
      <div className="absolute -top-24 -left-24 w-[450px] h-[450px] glow-orb-soft rounded-full pointer-events-none opacity-50 z-0" />

      {/* Main Content Grid */}
      <div className="relative z-30 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Eyebrow, 3-line Headline, Subtext, Buttons */}
          <div className="lg:col-span-7 flex flex-col items-start pt-2 md:pt-4">
            
            {/* Small Eyebrow Label */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#ff4d00]" />
              <span className="text-[12px] md:text-[13px] tracking-[0.2em] uppercase text-white/70 font-medium">
                {PORTFOLIO_DATA.hero.eyebrow}
              </span>
            </motion.div>

            {/* Large 3-line Headline with exact 3-line rhythm */}
            <div className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-medium uppercase tracking-tight text-white leading-[1.04] mb-6">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="whitespace-nowrap"
              >
                Intelligence first.
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="whitespace-nowrap"
              >
                Then the
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="whitespace-nowrap text-white/95"
              >
                system.
              </motion.div>
            </div>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
              className="text-sm md:text-base text-white/60 max-w-xl font-light leading-relaxed mb-8 md:mb-10"
            >
              {PORTFOLIO_DATA.hero.subtext}
            </motion.p>

            {/* Action Buttons: Off-white primary pill + dark bordered secondary pill */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                href="#projects"
                className="group inline-flex items-center gap-3 bg-[#fdf3ee] hover:bg-white text-black font-semibold text-[13px] tracking-wider uppercase px-6 py-3.5 rounded-full transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,77,0,0.45)] hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>{PORTFOLIO_DATA.hero.primaryCta}</span>
                <span className="w-6 h-6 rounded-full bg-black text-[#fdf3ee] flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </Link>

              <a
                href={PORTFOLIO_DATA.personal.resumeUrl}
                download="Mohammed_Imthiyaz_Resume.pdf"
                className="group inline-flex items-center gap-3 bg-black/60 hover:bg-white/10 text-white font-medium text-[13px] tracking-wider uppercase px-6 py-3.5 rounded-full border border-white/20 hover:border-white/40 transition-all duration-300 backdrop-blur-sm hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>{PORTFOLIO_DATA.hero.secondaryCta}</span>
                <span className="w-6 h-6 rounded-full bg-white/10 text-white flex items-center justify-center group-hover:translate-y-0.5 transition-transform duration-300">
                  <ArrowDown className="w-3.5 h-3.5" />
                </span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Top-right mini card + Stats */}
          <div className="lg:col-span-5 flex flex-col gap-8 lg:items-end pt-2 md:pt-4">
            
            {/* Top-Right Mini Card (reference's Recognition card) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              className="w-full max-w-sm bg-[#0d0d0d]/90 backdrop-blur-md border border-white/10 rounded-2xl p-5 shadow-2xl relative overflow-hidden group hover:border-[#ff4d00]/40 transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-28 h-28 bg-[#ff4d00]/15 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="relative w-11 h-11 rounded-lg overflow-hidden border border-white/15 bg-black">
                    <Image
                      src="/imthiyaz-hero-cutout.png"
                      alt="Mohammed Imthiyaz portrait thumbnail"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#ff4d00] font-semibold block">
                      {PORTFOLIO_DATA.hero.currentlyCard.label}
                    </span>
                    <span className="text-[11px] text-white/50 tracking-wider">
                      {PORTFOLIO_DATA.hero.currentlyCard.meta}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 pt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d00]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                </div>
              </div>

              <p className="text-xs text-white/80 leading-relaxed font-light">
                {PORTFOLIO_DATA.hero.currentlyCard.text}
              </p>
            </motion.div>

            {/* Top-Right Big Stats Columns (15+ and 6) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55, ease: "easeOut" }}
              className="w-full max-w-sm grid grid-cols-2 gap-6 pt-2"
            >
              {/* Stat 1: 15+ */}
              <div className="flex flex-col">
                <div className="text-4xl md:text-5xl font-semibold text-white tracking-tight flex items-baseline">
                  <span>15</span>
                  <span className="text-[#ff4d00] font-light">+</span>
                </div>
                <div className="text-xs font-medium uppercase tracking-wider text-white/80 mt-1">
                  Client projects
                </div>
                <div className="text-[11px] text-white/50 leading-snug mt-0.5">
                  Delivered production LMS & web portals.
                </div>
              </div>

              {/* Stat 2: 6 */}
              <div className="flex flex-col">
                <div className="text-4xl md:text-5xl font-semibold text-white tracking-tight flex items-baseline">
                  <span>6</span>
                </div>
                <div className="text-xs font-medium uppercase tracking-wider text-white/80 mt-1">
                  Certifications
                </div>
                <div className="text-[11px] text-white/50 leading-snug mt-0.5">
                  IIT Bombay, Microsoft & IBM accredited.
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Central Majestic Transparent Silhouette Cutout Portrait
          Positioned directly in the section so its head rises high into the fiery aura
          and its shoulders overlap the white letters "IMTHIYAZ" */}
      {/* TODO: Replace with Mohammed's personal photo (/public/me.jpg) if desired */}
      <motion.div
        style={{ y: portraitParallax }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 w-[380px] sm:w-[500px] md:w-[600px] lg:w-[720px] h-[520px] sm:h-[620px] md:h-[700px] lg:h-[750px] pointer-events-none"
      >
        <div className="relative w-full h-full">
          <Image
            src="/imthiyaz-hero-cutout.png"
            alt="Mohammed Imthiyaz — AI & ML Engineer"
            fill
            priority
            sizes="(max-width: 768px) 420px, 620px"
            className="object-contain object-bottom drop-shadow-[0_20px_60px_rgba(255,77,0,0.5)]"
          />
          {/* Subtle bottom fade to blend with section bottom divider */}
          <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black via-black/60 to-transparent" />
        </div>
      </motion.div>

      {/* Hero Bottom Composition:
          GIANT WHITE LETTERS "IMTHIYAZ" behind portrait silhouette (layer z-10) */}
      <div className="relative w-full overflow-hidden select-none pointer-events-none z-10 mt-auto">
        <motion.div
          style={{ y: textParallax }}
          className="w-full text-center"
        >
          <span className="giant-display-text text-[18vw] md:text-[19.5vw] lg:text-[20.5vw] leading-[0.8] tracking-[-0.04em] text-white block opacity-95">
            IMTHIYAZ
          </span>
        </motion.div>

        {/* Section bottom divider line */}
        <div className="w-full h-px bg-white/20" />
      </div>
    </section>
  );
}
