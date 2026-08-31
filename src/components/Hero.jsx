import React from 'react';
import { ArrowRight, ArrowUpRight, ChevronDown } from 'lucide-react';

export default function Hero({ onOpenPortfolio, onOpenContact, onScrollToWork }) {
  return (
    <section
      id="home"
      className="snap-section relative flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 bg-black overflow-hidden pt-14 pb-8"
    >
      {/* Studio background image & transparent gradient overlays */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/assets/landing/hero-bg.png"
          alt="Creative Studio Background"
          className="w-full h-full object-cover object-center opacity-60 filter contrast-110"
        />
        {/* Transparent gradient texture overlay from assets */}
        <img
          src="/assets/landing/gradient.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-screen pointer-events-none"
        />
        {/* Soft, transparent gradient for text contrast and seamless bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black pointer-events-none" />
        <div className="absolute inset-0 bg-black/15 pointer-events-none" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center my-auto">
        {/* Small top red category badge with Devotix Logo */}
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/30 mb-4 backdrop-blur-sm">
          <img src="/favicon.png" alt="Devotix Icon" className="w-3.5 h-3.5 object-contain" />
          <span className="text-[10px] font-bold tracking-widest uppercase text-brand-red">
            CREATIVE MEDIA AGENCY
          </span>
        </div>

        {/* Scaled-down Sleek Headline */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight uppercase leading-[1.05] text-white font-display">
          MAKE YOUR BRAND
          <br />
          <span className="bg-[linear-gradient(90deg,#FFFFFF_5%,#E4E4E7_30%,#71717A_65%,#3F3F46_100%)] bg-clip-text text-transparent inline-block drop-shadow-sm">
            IMPOSSIBLE TO
            <br />
            IGNORE.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 max-w-lg text-[11px] sm:text-xs text-neutral-400 font-medium tracking-wide uppercase leading-relaxed text-center px-4">
          WE ARE A FULL-SERVICE CREATIVE MEDIA AGENCY DRIVEN BY DATA, CRAFTED WITH PASSION, AND COMMITTED TO MAKING BRANDS UNFORGETTABLE.
        </p>

        {/* Two Call-to-Action Buttons */}
        <div className="mt-6 sm:mt-8 flex flex-row items-center gap-3 w-auto justify-center">
          <button
            onClick={onOpenPortfolio}
            className="px-5 py-2 bg-brand-red hover:bg-brand-redHover text-white text-[11px] font-bold uppercase tracking-wider rounded-md transition-all duration-300 transform hover:scale-105 shadow-md shadow-red-600/30 flex items-center justify-center space-x-1.5"
          >
            <span>EXPLORE OUR PORTFOLIO</span>
            <ArrowRight className="w-3 h-3" />
          </button>

          <button
            onClick={onOpenContact}
            className="px-5 py-2 bg-transparent hover:bg-white/10 text-white border border-white/40 hover:border-white text-[11px] font-bold uppercase tracking-wider rounded-md transition-all duration-300 backdrop-blur-sm flex items-center justify-center space-x-1.5 group"
          >
            <span>LET'S TALK</span>
            <ArrowUpRight className="w-3 h-3 text-white group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </div>

      {/* Interactive Scroll Down Indicator */}
      <button
        onClick={onScrollToWork}
        className="relative z-20 flex flex-col items-center group cursor-pointer opacity-70 hover:opacity-100 transition-opacity mt-auto mb-2"
        aria-label="Scroll to work"
      >
        <span className="text-[8px] uppercase tracking-widest text-neutral-400 font-bold mb-0.5 group-hover:text-brand-red transition-colors">
          SCROLL
        </span>
        <ChevronDown className="w-3.5 h-3.5 text-brand-red animate-bounce" />
      </button>
    </section>
  );
}
