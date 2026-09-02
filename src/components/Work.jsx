import React from 'react';
import TitleAccent from './TitleAccent';
import { ArrowUpRight, ArrowRight, Eye } from 'lucide-react';

export default function Work({ onSelectProject }) {
  const projects = [
    {
      id: 'nexa',
      title: 'NEXA',
      category: 'UI/UX DESIGN & WEB DEVELOPMENT',
      description: 'High-performance interactive web application & digital product architecture for a next-generation tech enterprise.',
      image: '/assets/work/nexa.png',
      tags: ['React', 'WebGL', 'UI/UX']
    },
    {
      id: 'vanta',
      title: 'VANTA',
      category: 'BRAND IDENTITY & ART DIRECTION',
      description: 'Luxury editorial campaign, fashion art direction, and digital brand elevation.',
      image: '/assets/work/vanta.png',
      tags: ['Editorial', 'Branding']
    }
  ];

  return (
    <section id="work" className="snap-section relative flex flex-col justify-center px-4 sm:px-6 lg:px-8 bg-black text-white pt-16 pb-8">
      <div className="max-w-5xl mx-auto w-full">
        {/* Section Header: Title & Description */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-4 sm:pb-6 border-b border-neutral-900">
          <div>
            <TitleAccent type="work" />
          </div>
          <div className="sm:max-w-xs">
            <p className="text-[10px] sm:text-[11px] text-neutral-400 font-medium uppercase tracking-wider leading-relaxed">
              We partner with visionary brands to engineer digital experiences, high-converting campaigns, and visual identities that command global recognition.
            </p>
          </div>
        </div>

        {/* Asymmetrical Portfolio Grid */}
        <div className="mt-6 sm:mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Card 1: NEXA (Laptop Showcase) */}
          <div
            onClick={() => onSelectProject(projects[0])}
            className="lg:col-span-7 group cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-xl bg-neutral-950 border border-neutral-800/80 transition-all duration-300 group-hover:border-neutral-700 group-hover:shadow-2xl">
              <div className="w-full aspect-[16/10] max-h-[260px] sm:max-h-[300px] overflow-hidden bg-neutral-900">
                <img
                  src={projects[0].image}
                  alt="NEXA Project"
                  className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />

              {/* Floating View Button on Container Top/Bottom */}
              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-10">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectProject(projects[0]);
                  }}
                  className="px-3.5 py-1.5 sm:px-4 sm:py-2 bg-brand-red hover:bg-brand-redHover text-white text-[10px] sm:text-xs font-extrabold uppercase tracking-wider rounded-lg shadow-lg shadow-red-600/30 flex items-center space-x-1.5 transition-all transform group-hover:scale-105"
                >
                  <span>VIEW PROJECT</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Metadata under Card */}
            <div className="mt-3 flex items-center justify-between gap-2">
              <div>
                <h3 className="text-base sm:text-lg font-black tracking-tight uppercase group-hover:text-brand-red transition-colors flex items-center gap-1 font-display">
                  {projects[0].title}
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand-red" />
                </h3>
                <p className="text-[10px] sm:text-[11px] text-neutral-400 font-semibold tracking-wider uppercase mt-0.5">
                  {projects[0].category}
                </p>
              </div>

              <div className="flex items-center gap-1.5">
                {projects[0].tags.map((tag) => (
                  <span key={tag} className="text-[8.5px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-neutral-900 text-neutral-400 border border-neutral-800">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: VANTA (Fashion Editorial) */}
          <div
            onClick={() => onSelectProject(projects[1])}
            className="lg:col-span-5 group cursor-pointer lg:mt-4"
          >
            <div className="relative overflow-hidden rounded-xl bg-neutral-950 border border-neutral-800/80 transition-all duration-300 group-hover:border-neutral-700 group-hover:shadow-2xl">
              <div className="w-full aspect-[4/5] max-h-[260px] sm:max-h-[300px] overflow-hidden bg-neutral-900">
                <img
                  src={projects[1].image}
                  alt="VANTA Project"
                  className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />

              {/* Floating View Button on Container Top/Bottom */}
              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-10">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectProject(projects[1]);
                  }}
                  className="px-3.5 py-1.5 sm:px-4 sm:py-2 bg-brand-red hover:bg-brand-redHover text-white text-[10px] sm:text-xs font-extrabold uppercase tracking-wider rounded-lg shadow-lg shadow-red-600/30 flex items-center space-x-1.5 transition-all transform group-hover:scale-105"
                >
                  <span>VIEW PROJECT</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Metadata under Card */}
            <div className="mt-3 flex items-center justify-between gap-2">
              <div>
                <h3 className="text-base sm:text-lg font-black tracking-tight uppercase group-hover:text-brand-red transition-colors flex items-center gap-1 font-display">
                  {projects[1].title}
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand-red" />
                </h3>
                <p className="text-[10px] sm:text-[11px] text-neutral-400 font-semibold tracking-wider uppercase mt-0.5">
                  {projects[1].category}
                </p>
              </div>

              <div className="flex items-center gap-1.5">
                {projects[1].tags.map((tag) => (
                  <span key={tag} className="text-[8.5px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-neutral-900 text-neutral-400 border border-neutral-800">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
