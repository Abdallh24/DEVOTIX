import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function CallToAction({ onOpenContact }) {
  return (
    <section id="cta" className="snap-section relative flex flex-col justify-center items-center bg-black text-white px-4 sm:px-6 lg:px-8 pt-16 pb-12 overflow-hidden">
      <div className="max-w-4xl mx-auto w-full text-center flex flex-col items-center">
        {/* Top Horizontal Divider Line */}
        <div className="w-full h-[1px] bg-neutral-800 mb-8 sm:mb-12" />

        <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight leading-tight max-w-3xl font-display">
          WE DON'T JUST MAKE
          <br />
          BRANDS LOOK GOOD.
          <br />
          WE MAKE THEM
          <br />
          <span className="italic font-serif font-bold text-neutral-300">
            IMPOSSIBLE TO IGNORE.
          </span>
        </h2>

        {/* White "LET'S TALK" CTA button */}
        <div className="mt-8 sm:mt-10">
          <button
            onClick={onOpenContact}
            className="px-8 py-3.5 bg-white hover:bg-neutral-100 text-black text-xs font-extrabold uppercase tracking-widest rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-white/20 active:scale-95 flex items-center space-x-2 group"
          >
            <span>LET'S TALK</span>
            <ArrowUpRight className="w-4 h-4 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Bottom Horizontal Divider Line */}
        <div className="w-full h-[1px] bg-neutral-800 mt-8 sm:mb-12" />
      </div>
    </section>
  );
}
