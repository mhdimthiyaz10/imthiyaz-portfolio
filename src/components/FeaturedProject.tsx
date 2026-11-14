"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

export default function FeaturedProject() {
  const project = PORTFOLIO_DATA.featuredProject;

  return (
    <section id="projects" className="relative bg-black pt-28 md:pt-36 pb-0 border-t border-white/20 overflow-hidden">
      
      {/* Background fiery radial glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[750px] h-[750px] glow-orb-intense rounded-full pointer-events-none opacity-80 z-0" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] glow-orb-primary rounded-full pointer-events-none opacity-40 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Top Corner Metadata */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10 text-white/40 font-mono text-xs tracking-widest uppercase">
          <span>{project.cornerLabel}</span>
          <span>{project.tagline}</span>
        </div>

        {/* Section Heading & Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium uppercase tracking-tight text-white leading-[1.08]">
              {project.heading}
            </h2>

            {/* Tech Chips */}
            <div className="flex flex-wrap gap-2 mt-6">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1 bg-white/[0.05] border border-white/10 rounded-full text-xs text-white/80 font-mono tracking-wider uppercase hover:border-[#ff4d00]/50 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6 lg:pt-2">
            <p className="text-sm md:text-base text-white/70 leading-relaxed font-light">
              {project.description}
            </p>
            <p className="text-xs md:text-sm text-white/50 leading-relaxed font-light">
              Bridging centuries of traditional Indian classical performance art with modern deep learning. The system captures micro-expressions (Navarasas) and hand gestures (Hastas), synthesizing contextual cultural mythology into synthesized natural language in real-time.
            </p>

            {/* CTA Button: View on GitHub */}
            <div>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-[#fdf3ee] hover:bg-white text-black font-semibold text-xs tracking-wider uppercase px-6 py-3 rounded-full transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,77,0,0.4)]"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View on GitHub</span>
                <div className="w-5 h-5 rounded-full bg-black text-[#fdf3ee] flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                  <ArrowUpRight className="w-3 h-3" />
                </div>
              </a>
            </div>
          </div>

        </div>

        {/* Main Visual Arena:
            - Left: 2 Scope / Progress Cards
            - Center/Right: Cinematic Kathakali AI Silhouette
        */}
        <div className="relative min-h-[460px] md:min-h-[540px] flex flex-col justify-end">
          
          {/* Central / Right Dramatic Silhouette Image sitting IN FRONT of "PROJECTS" */}
          <div className="absolute right-4 md:right-16 bottom-0 w-[300px] sm:w-[400px] md:w-[480px] lg:w-[540px] aspect-[4/5] z-20 pointer-events-none">
            <div className="relative w-full h-full">
              <Image
                src="/kathakali-cutout.png"
                alt="Kathakali AI Visual Model"
                fill
                priority
                sizes="(max-width: 768px) 340px, 540px"
                className="object-contain object-bottom drop-shadow-[0_20px_60px_rgba(255,77,0,0.5)]"
              />
              {/* Bottom fade into black */}
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black via-black/80 to-transparent" />
            </div>
          </div>

          {/* Bottom-Left 2 Dark Mini Cards */}
          <div className="relative z-30 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mb-8 md:mb-12">
            
            {/* Card 1: Computer Vision (Striped Progress Bar) */}
            <div className="bg-[#0d0d0d]/90 backdrop-blur-md border border-white/15 rounded-2xl p-5 shadow-2xl hover:border-[#ff4d00]/50 transition-colors">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] font-mono uppercase tracking-widest text-white/50">
                  Vision Engine
                </span>
                <span className="text-xs font-mono text-[#ff4d00] font-semibold">
                  94%
                </span>
              </div>
              <div className="text-base md:text-lg font-medium text-white mb-3">
                Computer Vision
              </div>
              
              <div className="w-full bg-[#1a1a1a] h-2.5 rounded-full overflow-hidden p-0.5 border border-white/10">
                <div
                  className="h-full rounded-full striped-progress"
                  style={{ width: "94%" }}
                />
              </div>
              <span className="text-[10px] text-white/40 block mt-2">
                Real-time gesture & facial landmark classification
              </span>
            </div>

            {/* Card 2: NLP & Conversational AI (Animated Bar Chart) */}
            <div className="bg-[#0d0d0d]/90 backdrop-blur-md border border-white/15 rounded-2xl p-5 shadow-2xl hover:border-[#ff4d00]/50 transition-colors">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] font-mono uppercase tracking-widest text-white/50">
                  Latency Profile
                </span>
                <span className="text-xs font-mono text-[#ff4d00] font-semibold">
                  120ms
                </span>
              </div>
              <div className="text-base md:text-lg font-medium text-white mb-3">
                NLP & Conversational AI
              </div>

              <div className="flex items-end gap-1.5 h-6 pt-1">
                {[40, 65, 85, 50, 95, 75, 90, 60, 100, 80, 70, 85].map((height, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: "20%" }}
                    animate={{ height: `${height}%` }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: i * 0.08,
                    }}
                    className="flex-1 bg-gradient-to-t from-[#ff4d00] to-[#ff7a33] rounded-t-sm"
                  />
                ))}
              </div>
              <span className="text-[10px] text-white/40 block mt-2">
                Transformer narrative generation inference
              </span>
            </div>

          </div>

        </div>

      </div>

      {/* GIANT CROPPED WORD "PROJECTS" ACROSS THE BOTTOM (behind silhouette, layer z-10) */}
      <div className="relative w-full overflow-hidden select-none -mt-12 md:-mt-20 pointer-events-none z-10">
        <div className="w-full text-center">
          <span className="giant-display-text text-[19vw] leading-[0.8] tracking-[-0.03em] text-white/95 block translate-y-[22%]">
            PROJECTS
          </span>
        </div>
      </div>

    </section>
  );
}
