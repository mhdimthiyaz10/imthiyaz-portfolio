"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, ArrowUpRight } from "lucide-react";
import confetti from "canvas-confetti";
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

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.22c-.93 0-1.68.75-1.68 1.68s.75 1.68 1.68 1.68c.93 0 1.69-.75 1.69-1.68s-.76-1.68-1.69-1.68z" />
    </svg>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
        colors: ["#ff4d00", "#e10600", "#ffffff"],
      });
    }, 800);
  };

  return (
    <footer id="contact" className="relative bg-black pt-28 md:pt-36 pb-0 border-t border-white/20 overflow-hidden">
      
      {/* Background fiery radial glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[750px] glow-orb-intense rounded-full pointer-events-none opacity-80 z-0" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] glow-orb-soft rounded-full pointer-events-none opacity-40 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Top Corner Metadata */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10 text-white/40 font-mono text-xs tracking-widest uppercase">
          <span>[05] COLLABORATION & INQUIRY</span>
          <span>AVAILABLE FOR NEW PROJECTS</span>
        </div>

        {/* Section Heading */}
        <div className="max-w-4xl mb-16 md:mb-20">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-medium uppercase tracking-tight text-white leading-[1.05]">
            LET&apos;S BUILD SOMETHING INTELLIGENT.
          </h2>
          <p className="text-sm md:text-base text-white/60 font-light mt-6 max-w-xl leading-relaxed">
            Have a machine learning problem, a generative AI workflow, or an enterprise web application you need engineered? Reach out and let&apos;s build solutions that scale.
          </p>
        </div>

        {/* Contact Form and Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
          
          {/* Left Column: Direct Info & Social Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card */}
            <a
              href={`mailto:${PORTFOLIO_DATA.personal.email}`}
              className="bg-[#0d0d0d] border border-white/10 rounded-2xl p-6 flex items-center gap-4 card-hover-glow group"
            >
              <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#ff4d00] group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex-1 overflow-hidden">
                <span className="text-[11px] font-mono uppercase tracking-widest text-white/40 block">
                  Direct Email
                </span>
                <span className="text-sm md:text-base font-medium text-white group-hover:text-[#ff4d00] transition-colors truncate block">
                  {PORTFOLIO_DATA.personal.email}
                </span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" />
            </a>

            {/* Phone Card */}
            <a
              href={`tel:${PORTFOLIO_DATA.personal.phone}`}
              className="bg-[#0d0d0d] border border-white/10 rounded-2xl p-6 flex items-center gap-4 card-hover-glow group"
            >
              <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#ff4d00] group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <span className="text-[11px] font-mono uppercase tracking-widest text-white/40 block">
                  Phone / WhatsApp
                </span>
                <span className="text-sm md:text-base font-medium text-white group-hover:text-[#ff4d00] transition-colors">
                  +91 {PORTFOLIO_DATA.personal.phone}
                </span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" />
            </a>

            {/* Location Card */}
            <div className="bg-[#0d0d0d] border border-white/10 rounded-2xl p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#ff4d00]">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-white/40 block">
                  Location
                </span>
                <span className="text-sm md:text-base font-medium text-white">
                  {PORTFOLIO_DATA.personal.location}
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4 flex items-center gap-4">
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#0d0d0d] border border-white/10 hover:border-[#ff4d00]/50 rounded-2xl p-4 flex items-center justify-center gap-2.5 text-xs uppercase tracking-wider font-semibold text-white/80 hover:text-white transition-all card-hover-glow"
              >
                <LinkedinIcon className="w-4 h-4 text-[#ff4d00]" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-white/40" />
              </a>

              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#0d0d0d] border border-white/10 hover:border-[#ff4d00]/50 rounded-2xl p-4 flex items-center justify-center gap-2.5 text-xs uppercase tracking-wider font-semibold text-white/80 hover:text-white transition-all card-hover-glow"
              >
                <GithubIcon className="w-4 h-4 text-[#ff4d00]" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-white/40" />
              </a>
            </div>

          </div>

          {/* Right Column: Working Contact Form with Pill Inputs */}
          <div className="lg:col-span-7 bg-[#0d0d0d] border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl relative">
            
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-[#ff4d00]/15 border border-[#ff4d00] flex items-center justify-center mx-auto text-[#ff4d00]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-medium uppercase tracking-wider text-white">
                  Message Sent Successfully!
                </h3>
                <p className="text-sm text-white/60 font-light max-w-md mx-auto">
                  Thank you for reaching out, Mohammed will review your inquiry and get back to you shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", message: "" });
                  }}
                  className="mt-4 px-6 py-2.5 bg-white/[0.06] hover:bg-white/10 border border-white/20 rounded-full text-xs font-mono uppercase tracking-wider text-white transition-colors"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium uppercase tracking-wider text-white mb-2">
                    Send a Message
                  </h3>
                  <p className="text-xs text-white/50 font-light">
                    Direct communication for consulting, projects, or collaborations.
                  </p>
                </div>

                {/* Name Pill Input */}
                <div>
                  <label htmlFor="name" className="block text-[11px] font-mono uppercase tracking-widest text-white/50 mb-2">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Enter your full name"
                    className="w-full bg-black/60 border border-white/15 focus:border-[#ff4d00] focus:ring-1 focus:ring-[#ff4d00] rounded-full px-6 py-3.5 text-sm text-white placeholder-white/30 outline-none transition-all duration-200"
                  />
                </div>

                {/* Email Pill Input */}
                <div>
                  <label htmlFor="email" className="block text-[11px] font-mono uppercase tracking-widest text-white/50 mb-2">
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="name@organization.com"
                    className="w-full bg-black/60 border border-white/15 focus:border-[#ff4d00] focus:ring-1 focus:ring-[#ff4d00] rounded-full px-6 py-3.5 text-sm text-white placeholder-white/30 outline-none transition-all duration-200"
                  />
                </div>

                {/* Message Pill Input (rounded-3xl) */}
                <div>
                  <label htmlFor="message" className="block text-[11px] font-mono uppercase tracking-widest text-white/50 mb-2">
                    Project Brief / Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Describe your project, objectives, or timeline..."
                    className="w-full bg-black/60 border border-white/15 focus:border-[#ff4d00] focus:ring-1 focus:ring-[#ff4d00] rounded-3xl px-6 py-4 text-sm text-white placeholder-white/30 outline-none resize-none transition-all duration-200"
                  />
                </div>

                {/* Orange Pill Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group inline-flex items-center justify-center gap-3 bg-[#ff4d00] hover:bg-[#ff5d1a] disabled:opacity-50 text-white font-semibold text-xs tracking-wider uppercase py-4 rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,77,0,0.5)] active:scale-[0.99]"
                >
                  <span>{isSubmitting ? "Sending..." : "Submit Inquiry"}</span>
                  <div className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                    <Send className="w-3 h-3 text-[#ff4d00]" />
                  </div>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>

      {/* GIANT CROPPED WORD "IMTHIYAZ" ACROSS BOTTOM FOOTER */}
      <div className="relative w-full overflow-hidden select-none pointer-events-none mt-12">
        <div className="w-full text-center">
          <span className="giant-display-text text-[18vw] md:text-[19vw] lg:text-[20vw] leading-[0.8] tracking-[-0.04em] text-white/95 block translate-y-[22%]">
            IMTHIYAZ
          </span>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="relative z-20 border-t border-white/15 bg-black py-6">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/50 tracking-wider">
          <div>
            © 2026 MOHAMMED IMTHIYAZ · ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-6">
            <span>AI & ML ENGINEER</span>
            <span className="w-1 h-1 rounded-full bg-[#ff4d00]" />
            <span>KERALA, INDIA</span>
          </div>
        </div>
      </div>

    </footer>
  );
}
