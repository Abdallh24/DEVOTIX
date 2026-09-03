import React from 'react';
import TitleAccent from './TitleAccent';
import { Sparkles, Layers, Video, Code2, BarChart3, TrendingUp, ArrowUpRight } from 'lucide-react';

export default function Services({ onSelectService }) {
  const services = [
    {
      id: 'content-creation',
      title: 'Content Creation',
      icon: Sparkles,
      image: '/assets/services/content-creation.png',
      description: 'Short-form & long-form viral digital storytelling.',
      tag: 'VIRAL & SOCIAL',
      gridClass: 'lg:col-span-4 lg:row-span-2 min-h-[220px] lg:min-h-[280px]',
    },
    {
      id: 'media-buying',
      title: 'Media Buying',
      icon: TrendingUp,
      image: '/assets/services/media-buying.png',
      description: 'Data-driven paid media campaigns across Meta, Google & TikTok.',
      tag: 'PAID ADS',
      gridClass: 'lg:col-span-4 lg:row-span-1 min-h-[135px]',
    },
    {
      id: 'video-photography',
      title: 'Video Production & Photography',
      icon: Video,
      image: '/assets/services/video-photography.png',
      description: 'Cinema-grade commercial production & studio photography.',
      tag: 'CINEMA 4K',
      gridClass: 'lg:col-span-4 lg:row-span-2 min-h-[220px] lg:min-h-[280px]',
    },
    {
      id: 'branding',
      title: 'Branding',
      icon: Layers,
      image: '/assets/services/branding.png',
      description: 'Brand identity systems, typography & art direction.',
      tag: 'IDENTITY',
      gridClass: 'lg:col-span-4 lg:row-span-1 min-h-[135px]',
    },
    {
      id: 'software-engineering',
      title: 'Software Engineering',
      icon: Code2,
      image: '/assets/services/software-engineering.png',
      description: 'Bespoke web applications, 3D interactive & digital platforms.',
      tag: 'FULL STACK',
      gridClass: 'lg:col-span-6 lg:row-span-1 min-h-[135px]',
    },
    {
      id: 'accounting-management',
      title: 'Accounting Management',
      icon: BarChart3,
      image: '/assets/services/accounting-management.png',
      description: 'Financial forecasting, media spend audits & growth strategy.',
      tag: 'FINANCIAL OPS',
      gridClass: 'lg:col-span-6 lg:row-span-1 min-h-[135px]',
    },
  ];

  return (
    <section id="services" className="snap-section relative flex flex-col justify-center bg-black text-white px-4 sm:px-6 lg:px-8 pt-10 pb-8">
      <div className="max-w-5xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-5 sm:mb-6">
          <TitleAccent type="services" />
          <p className="mt-1.5 text-[10px] sm:text-[11px] text-neutral-400 font-semibold uppercase tracking-widest leading-relaxed">
            Strategy, production, and data to scale modern brands.
          </p>
        </div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-3 sm:gap-3.5 items-stretch">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                onClick={() => onSelectService && onSelectService(service)}
                className={`relative group rounded-lg overflow-hidden bg-neutral-950 border border-neutral-800/80 transition-all duration-300 hover:border-brand-red/50 hover:shadow-lg cursor-pointer flex flex-col justify-end p-3.5 sm:p-4 ${service.gridClass}`}
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-center filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out opacity-60 group-hover:opacity-75"
                  />
                  {/* Dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30 group-hover:via-black/50 transition-colors duration-300" />
                </div>

                {/* Top Badge & Icon */}
                <div className="relative z-10 mb-auto flex items-center justify-between w-full">
                  <span className="text-[8px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded bg-black/60 border border-white/10 backdrop-blur-md text-neutral-300 group-hover:border-white/30 group-hover:text-white transition-colors">
                    {service.tag}
                  </span>
                  <div className="w-5 h-5 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white/80 group-hover:text-white group-hover:border-white/30 transition-all">
                    <ArrowUpRight className="w-2.5 h-2.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

                {/* Bottom Content */}
                <div className="relative z-10 mt-2">
                  <h3 className="text-xs sm:text-sm font-black uppercase tracking-tight text-white transition-colors font-display line-clamp-1 mb-0.5">
                    {service.title}
                  </h3>
                  <p className="text-[9px] sm:text-[10px] text-neutral-400 font-medium leading-tight max-w-xs group-hover:text-neutral-300 transition-colors line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
