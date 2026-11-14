"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.8)]"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Left: Brand Monogram & Tiny Role Label */}
        <div className="flex items-center gap-4">
          <Link
            href="#"
            className="text-lg md:text-xl font-bold tracking-widest uppercase text-white hover:text-[#ff4d00] transition-colors"
          >
            IMTHIYAZ<span className="text-[#ff4d00]">.</span>
          </Link>
          <div className="hidden sm:flex items-center gap-2 pl-4 border-l border-white/20">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d00] animate-pulse" />
            <span className="text-[11px] tracking-widest uppercase text-white/60 font-medium">
              AI/ML Engineer
            </span>
          </div>
        </div>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-[13px] tracking-widest uppercase text-white/70">
          {PORTFOLIO_DATA.navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hover:text-white transition-colors duration-200 relative group py-1"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#ff4d00] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Right: Quick Action Pill Button */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="#contact"
            className="group inline-flex items-center gap-2 bg-[#fdf3ee] hover:bg-white text-black text-[12px] font-semibold tracking-wider uppercase px-4 py-2 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,77,0,0.4)]"
          >
            <span>Let&apos;s Talk</span>
            <div className="w-5 h-5 rounded-full bg-black text-[#fdf3ee] flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
              <ArrowUpRight className="w-3 h-3" />
            </div>
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-white/80 hover:text-white focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0d0d0d]/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 transition-all">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 pb-3 border-b border-white/10">
              <span className="w-2 h-2 rounded-full bg-[#ff4d00]" />
              <span className="text-[12px] tracking-wider uppercase text-white/60">
                AI/ML Engineer · Web Developer
              </span>
            </div>
            {PORTFOLIO_DATA.navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base uppercase tracking-widest text-white/80 hover:text-[#ff4d00] py-2 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 bg-[#fdf3ee] text-black text-[13px] font-semibold tracking-wider uppercase px-5 py-3 rounded-full"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

