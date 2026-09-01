import React from 'react';
import { ArrowRight, ArrowUpRight, ChevronDown, Play } from 'lucide-react';

export default function Hero({ onOpenPortfolio, onOpenContact, onScrollToWork, onPlayVideo }) {
  const handlePlayShowreel = () => {
    if (onPlayVideo) {
      onPlayVideo({
        id: 'devotix-hero-showreel',
        title: 'DEVOTIX SHOWREEL 2026',
        category: 'COMMERCIAL PRODUCTION • 3D CGI',
        duration: '02:45',
        image: '/assets/production/featured-car.png',
        description: 'Experience our 2026 director showreel featuring cinematic commercial productions and 3D VFX simulations.'
      });
    }
  };

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
        <p className="mt-3 max-w-lg text-[11px] sm:text-xs text-neutral-400 font-medium tracking-wide uppercase leading-relaxed text-center px-4">
          WE ARE A FULL-SERVICE CREATIVE MEDIA AGENCY DRIVEN BY DATA, CRAFTED WITH PASSION, AND COMMITTED TO MAKING BRANDS UNFORGETTABLE.
        </p>

        {/* Two Call-to-Action Buttons */}
        <div className="mt-5 sm:mt-6 flex flex-row items-center gap-3 w-auto justify-center">
          <button
            onClick={onScrollToWork}
            className="px-5 py-2 bg-brand-red hover:bg-brand-redHover text-white text-[11px] font-bold uppercase tracking-wider rounded-md transition-all duration-300 transform hover:scale-105 shadow-md shadow-red-600/30 flex items-center justify-center space-x-1.5 cursor-pointer"
          >
            <span>EXPLORE OUR PORTFOLIO</span>
            <ArrowRight className="w-3 h-3" />
          </button>

          <button
            onClick={onOpenContact}
            className="px-5 py-2 bg-transparent hover:bg-white/10 text-white border border-white/40 hover:border-white text-[11px] font-bold uppercase tracking-wider rounded-md transition-all duration-300 backdrop-blur-sm flex items-center justify-center space-x-1.5 group cursor-pointer"
          >
            <span>LET'S TALK</span>
            <ArrowUpRight className="w-3 h-3 text-white group-hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* Small Video after EXPLORE OUR PORTFOLIO button */}
        <div
          onClick={handlePlayShowreel}
          className="mt-5 relative w-full max-w-[240px] sm:max-w-[280px] aspect-[16/9] rounded-xl overflow-hidden border border-neutral-800 hover:border-brand-red/80 shadow-[0_10px_30px_rgba(0,0,0,0.8)] cursor-pointer group transition-all duration-300 transform hover:scale-105"
        >
          <img
            src="/assets/production/featured-car.png"
            alt="Devotix Showreel Preview"
            className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

          {/* Central Pulsing Play Button */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-brand-red text-white flex items-center justify-center shadow-lg shadow-red-600/50 group-hover:scale-110 transition-transform">
              <Play className="w-4 h-4 fill-white translate-x-0.5" />
            </div>
          </div>

          {/* Top/Bottom Badges */}
          <div className="absolute top-2 left-2 pointer-events-none">
            <span className="px-2 py-0.5 bg-black/70 backdrop-blur-md rounded-full text-[8px] font-extrabold uppercase tracking-widest text-white border border-white/10">
              4K REEL
            </span>
          </div>
          <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
            <span className="text-[9px] font-extrabold uppercase tracking-wider text-white">
              WATCH SHOWREEL
            </span>
            <span className="text-[8.5px] font-mono text-neutral-300">
              02:45
            </span>
          </div>
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
