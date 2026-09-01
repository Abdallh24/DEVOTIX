import React from 'react';
import TitleAccent from './TitleAccent';

const CLIENTS = [
  { name: 'PORSCHE', category: 'AUTOMOTIVE' },
  { name: 'BALENCIAGA', category: 'LUXURY FASHION' },
  { name: 'SONY MUSIC', category: 'ENTERTAINMENT' },
  { name: 'SPOTIFY', category: 'DIGITAL MEDIA' },
  { name: 'RED BULL', category: 'SPORTS & MEDIA' },
  { name: 'BVLGARI', category: 'HIGH JEWELRY' },
  { name: 'NIKE LAB', category: 'ATHLETIC' },
  { name: 'AUDI SPORT', category: 'MOTORSPORT' },
  { name: 'WARNER BROS', category: 'CINEMA' },
  { name: 'VOGUE', category: 'EDITORIAL' },
];

export default function Clients() {
  return (
    <section id="clients" className="snap-section relative flex flex-col justify-center bg-[#09090b] text-white overflow-hidden border-y border-neutral-900 px-4 sm:px-6 lg:px-8 pt-16 pb-12">
      <div className="max-w-5xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex flex-row items-center justify-between gap-3 mb-6 sm:mb-8">
          <TitleAccent type="clients" />
          <div className="flex items-center space-x-1.5 text-[9px] sm:text-[10px] uppercase tracking-widest text-neutral-400 font-bold bg-neutral-900/80 px-2.5 py-1 rounded-full border border-neutral-800">
            <img src="/favicon.png" alt="Devotix Icon" className="w-3 h-3 object-contain" />
            <span>TRUSTED BY INDUSTRY TITANS</span>
          </div>
        </div>

        {/* Dark Container for Client Marquee */}
        <div className="relative rounded-xl bg-neutral-950/80 border border-neutral-800/80 p-5 sm:p-6 overflow-hidden shadow-lg">
          {/* Gradient edge masks */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-16 bg-gradient-to-r from-neutral-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-16 bg-gradient-to-l from-neutral-950 to-transparent z-10 pointer-events-none" />

          {/* Marquee Row 1 */}
          <div className="flex overflow-hidden py-1.5 select-none marquee-container">
            <div className="animate-marquee flex items-center space-x-8 sm:space-x-12 hover:[animation-play-state:paused]">
              {[...CLIENTS, ...CLIENTS].map((client, idx) => (
                <div
                  key={`${client.name}-${idx}`}
                  className="flex flex-col items-center justify-center min-w-[90px] sm:min-w-[120px] group transition-all duration-300 cursor-pointer"
                >
                  <span className="text-sm sm:text-lg lg:text-xl font-black tracking-widest uppercase text-neutral-400 group-hover:text-white group-hover:scale-105 transition-all font-display">
                    {client.name}
                  </span>
                  <span className="text-[7px] sm:text-[8px] tracking-widest font-semibold text-neutral-600 group-hover:text-brand-red transition-colors uppercase mt-0.5">
                    {client.category}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Marquee Row 2 (Reverse) */}
          <div className="flex overflow-hidden py-1.5 mt-3 select-none border-t border-neutral-900/60 marquee-container">
            <div className="animate-marquee-reverse flex items-center space-x-8 sm:space-x-12 hover:[animation-play-state:paused]">
              {[...CLIENTS.slice().reverse(), ...CLIENTS.slice().reverse()].map((client, idx) => (
                <div
                  key={`${client.name}-rev-${idx}`}
                  className="flex flex-col items-center justify-center min-w-[90px] sm:min-w-[120px] group transition-all duration-300 cursor-pointer"
                >
                  <span className="text-sm sm:text-lg lg:text-xl font-black tracking-widest uppercase text-neutral-500 group-hover:text-white group-hover:scale-105 transition-all font-display">
                    {client.name}
                  </span>
                  <span className="text-[7px] sm:text-[8px] tracking-widest font-semibold text-neutral-600 group-hover:text-brand-red transition-colors uppercase mt-0.5">
                    {client.category}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
