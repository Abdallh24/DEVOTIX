import React from 'react';
import TitleAccent from './TitleAccent';
import { Maximize2 } from 'lucide-react';

export default function Photography({ onOpenLightbox }) {
  const photos = [
    {
      id: 1,
      title: 'FINE GASTRONOMY',
      category: 'CULINARY & HOSPITALITY',
      image: '/assets/photography/photo-1.png',
      location: 'PARIS, FRANCE',
    },
    {
      id: 2,
      title: 'NOCTURNE LOUNGE',
      category: 'ARCHITECTURAL & INTERIOR',
      image: '/assets/photography/photo-2.png',
      location: 'TOKYO, JAPAN',
    },
    {
      id: 3,
      title: 'AVANT-GARDE',
      category: 'HIGH FASHION & EDITORIAL',
      image: '/assets/photography/photo-3.png',
      location: 'MILAN, ITALY',
    },
    {
      id: 4,
      title: 'CHRONO MASTER',
      category: 'LUXURY TIMEPIECES',
      image: '/assets/photography/photo-4.png',
      location: 'GENEVA, SWITZERLAND',
    },
  ];

  return (
    <section id="photography" className="snap-section relative flex flex-col justify-center bg-black text-white px-4 sm:px-6 lg:px-8 pt-16 pb-6">
      <div className="max-w-5xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-5 sm:mb-6">
          <TitleAccent type="photography" />
          <p className="mt-1 text-[10px] sm:text-[11px] text-neutral-400 font-semibold uppercase tracking-widest leading-relaxed">
            Editorial, commercial, product, and architectural photography.
          </p>
        </div>

        {/* 4-Column Square Image Gallery */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => onOpenLightbox(photos, index)}
              className="group relative aspect-square max-h-[170px] sm:max-h-[220px] rounded-lg overflow-hidden bg-neutral-950 border border-neutral-800/80 cursor-pointer transition-all duration-300 hover:border-brand-red/60 hover:shadow-lg"
            >
              {/* Photo Image */}
              <img
                src={photo.image}
                alt={photo.title}
                className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
              />

              {/* Dark Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-between p-3" />

              {/* Zoom Icon Top Right */}
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-200">
                <div className="w-5 h-5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-brand-red hover:border-brand-red transition-colors">
                  <Maximize2 className="w-2.5 h-2.5" />
                </div>
              </div>

              {/* Photo Metadata Bottom Left */}
              <div className="absolute bottom-2 left-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-all duration-200">
                <span className="text-[8px] font-bold uppercase tracking-widest text-brand-red block">
                  {photo.category}
                </span>
                <h4 className="text-[11px] font-black uppercase tracking-tight text-white font-display line-clamp-1">
                  {photo.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
