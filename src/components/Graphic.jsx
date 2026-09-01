import React from 'react';
import TitleAccent from './TitleAccent';
import { Maximize2 } from 'lucide-react';

export default function Graphic({ onOpenLightbox }) {
  const graphics = [
    {
      id: 1,
      title: 'SUNSET CORAL',
      category: 'BRAND IDENTITY & ART DIRECTION',
      image: '/assets/graphic/graphic-1.png',
      location: 'STUDIO DEVOTIX',
    },
    {
      id: 2,
      title: 'FOOD SESSION',
      category: 'ABSTRACT TEXTURE & COLOR',
      image: '/assets/graphic/graphic-large.png',
      location: 'CREATIVE LAB',
    },
    {
      id: 3,
      title: 'PRODUCT SESSION',
      category: 'EGY COLOR | ART OF COLOR',
      image: '/assets/graphic/graphic-2.png',
      location: 'MINIMALIST SCULPTURE',
    },
  ];

  return (
    <section
      id="graphic"
      className="snap-section relative flex flex-col justify-center bg-black text-white px-4 sm:px-6 lg:px-8 pt-16 pb-12"
    >
      <div className="max-w-4xl lg:max-w-5xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-4 sm:mb-6">
          <TitleAccent type="graphic" />
          <p className="mt-1.5 text-[10px] sm:text-[11px] text-neutral-400 font-semibold uppercase tracking-widest leading-relaxed">
            We don't just take pictures. We create visual assets that help brands communicate, connect and sell.
          </p>
        </div>

        {/* Thin Horizontal Divider Line */}
        <div className="w-full h-[1px] bg-neutral-800/90 my-5 sm:my-6" />

        {/* Scaled Asymmetric Gallery matching exact mockup */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5 lg:gap-6 items-stretch w-full">
          {/* Left Column: 1 Featured Large Graphic Card (Approx 64% width) */}
          <div
            onClick={() => onOpenLightbox && onOpenLightbox(graphics, 0)}
            className="md:col-span-7 lg:col-span-8 group relative rounded-xl sm:rounded-2xl overflow-hidden bg-neutral-950 border border-glow-active transition-all duration-300 cursor-pointer flex flex-col h-[320px] sm:h-[400px] md:h-[460px] lg:h-[480px]"
          >
            <img
              src={graphics[0].image}
              alt={graphics[0].title}
              className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
            />
            {/* Subtle Gradient & Bottom Label */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

            {/* Zoom Icon Top Right */}
            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-200">
              <div className="w-7 h-7 rounded-full bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-neutral-800 transition-colors shadow">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Card Label Bottom */}
            <div className="absolute bottom-3 sm:bottom-4 left-3.5 sm:left-4 right-3.5 sm:right-4 flex items-center justify-between">
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-neutral-300 group-hover:text-white transition-colors font-display">
                {graphics[0].title}
              </span>
              <span className="text-[8px] sm:text-[9px] uppercase tracking-wider text-neutral-400 font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                VIEW ARTWORK ↗
              </span>
            </div>
          </div>

          {/* Right Column: 2 Stacked Cards (Approx 36% width) */}
          <div className="md:col-span-5 lg:col-span-4 flex flex-col gap-4 sm:gap-5 lg:gap-6 justify-between h-[320px] sm:h-[400px] md:h-[460px] lg:h-[480px]">
            {/* Top Right Card */}
            <div
              onClick={() => onOpenLightbox && onOpenLightbox(graphics, 1)}
              className="group relative rounded-xl sm:rounded-2xl overflow-hidden bg-neutral-950 border border-glow-active transition-all duration-300 cursor-pointer flex-1 min-h-0"
            >
              <img
                src={graphics[1].image}
                alt={graphics[1].title}
                className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

              {/* Zoom Icon */}
              <div className="absolute top-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-all duration-200">
                <div className="w-6 h-6 rounded-full bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-neutral-800 transition-colors shadow">
                  <Maximize2 className="w-3 h-3" />
                </div>
              </div>

              {/* Card Label Bottom */}
              <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between">
                <span className="text-[9px] sm:text-[10.5px] font-black uppercase tracking-widest text-neutral-300 group-hover:text-white transition-colors font-display">
                  {graphics[1].title}
                </span>
                <span className="text-[8px] uppercase tracking-wider text-neutral-400 font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  VIEW ↗
                </span>
              </div>
            </div>

            {/* Bottom Right Card */}
            <div
              onClick={() => onOpenLightbox && onOpenLightbox(graphics, 2)}
              className="group relative rounded-xl sm:rounded-2xl overflow-hidden bg-neutral-950 border border-glow-active transition-all duration-300 cursor-pointer flex-1 min-h-0"
            >
              <img
                src={graphics[2].image}
                alt={graphics[2].title}
                className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

              {/* Zoom Icon */}
              <div className="absolute top-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-all duration-200">
                <div className="w-6 h-6 rounded-full bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-neutral-800 transition-colors shadow">
                  <Maximize2 className="w-3 h-3" />
                </div>
              </div>

              {/* Card Label Bottom */}
              <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between">
                <span className="text-[9px] sm:text-[10.5px] font-black uppercase tracking-widest text-neutral-300 group-hover:text-white transition-colors font-display">
                  {graphics[2].title}
                </span>
                <span className="text-[8px] uppercase tracking-wider text-neutral-400 font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  VIEW ↗
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
