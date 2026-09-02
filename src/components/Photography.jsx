import React, { useState, useRef, useEffect } from 'react';
import TitleAccent from './TitleAccent';
import { ArrowLeft, ArrowRight, Maximize2 } from 'lucide-react';

export default function Photography({ onOpenLightbox }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Touch swipe support
  const touchStartX = useRef(null);

  // 5 Curated Photography Slides using the exact 4-pic layout
  const SLIDES = [
    {
      id: 'slide-1',
      photos: [
        {
          id: 1,
          title: 'NOCTURNE LOUNGE',
          category: 'ARCHITECTURAL & INTERIOR',
          image: '/assets/photography/nocturne-lounge.png',
          location: 'TOKYO, JAPAN',
          layout: 'left-tall',
        },
        {
          id: 2,
          title: 'FINE GASTRONOMY',
          category: 'CULINARY & HOSPITALITY',
          image: '/assets/photography/gastronomy.png',
          location: 'PARIS, FRANCE',
          layout: 'middle-top',
        },
        {
          id: 3,
          title: 'CHRONO MASTER',
          category: 'LUXURY TIMEPIECES',
          image: '/assets/photography/chrono-master.png',
          location: 'GENEVA, SWITZERLAND',
          layout: 'middle-bottom',
        },
        {
          id: 4,
          title: 'AVANT-GARDE',
          category: 'HIGH FASHION & EDITORIAL',
          image: '/assets/photography/avant-garde.png',
          location: 'MILAN, ITALY',
          layout: 'right-tall',
        },
      ],
    },
    {
      id: 'slide-2',
      photos: [
        {
          id: 5,
          title: 'CREATIVE SESSION',
          category: 'DIRECTION & STRATEGY',
          image: '/assets/photography/creative-session.png',
          location: 'BERLIN, GERMANY',
          layout: 'left-tall',
        },
        {
          id: 6,
          title: 'ARCHITECTURAL STUDIO',
          category: 'SPATIAL & WORKSPACE',
          image: '/assets/photography/architectural-studio.png',
          location: 'COPENHAGEN, DENMARK',
          layout: 'middle-top',
        },
        {
          id: 7,
          title: 'FINE GASTRONOMY',
          category: 'CULINARY ARTS',
          image: '/assets/photography/gastronomy.png',
          location: 'PARIS, FRANCE',
          layout: 'middle-bottom',
        },
        {
          id: 8,
          title: 'CHRONO MASTER',
          category: 'SWISS HOROLOGY',
          image: '/assets/photography/chrono-master.png',
          location: 'GENEVA, SWITZERLAND',
          layout: 'right-tall',
        },
      ],
    },
    {
      id: 'slide-3',
      photos: [
        {
          id: 9,
          title: 'AVANT-GARDE',
          category: 'MILAN FASHION WEEK',
          image: '/assets/photography/avant-garde.png',
          location: 'MILAN, ITALY',
          layout: 'left-tall',
        },
        {
          id: 10,
          title: 'NOCTURNE LOUNGE',
          category: 'NIGHTLIFE & HOSPITALITY',
          image: '/assets/photography/nocturne-lounge.png',
          location: 'TOKYO, JAPAN',
          layout: 'middle-top',
        },
        {
          id: 11,
          title: 'CREATIVE SESSION',
          category: 'CONCEPT DEVELOPMENT',
          image: '/assets/photography/creative-session.png',
          location: 'BERLIN, GERMANY',
          layout: 'middle-bottom',
        },
        {
          id: 12,
          title: 'ARCHITECTURAL STUDIO',
          category: 'MODERN ARCHITECTURE',
          image: '/assets/photography/architectural-studio.png',
          location: 'COPENHAGEN, DENMARK',
          layout: 'right-tall',
        },
      ],
    },
    {
      id: 'slide-4',
      photos: [
        {
          id: 13,
          title: 'CHRONO MASTER',
          category: 'PRECISION MECHANICS',
          image: '/assets/photography/chrono-master.png',
          location: 'GENEVA, SWITZERLAND',
          layout: 'left-tall',
        },
        {
          id: 14,
          title: 'CREATIVE SESSION',
          category: 'STUDIO PRODUCTION',
          image: '/assets/photography/creative-session.png',
          location: 'BERLIN, GERMANY',
          layout: 'middle-top',
        },
        {
          id: 15,
          title: 'AVANT-GARDE',
          category: 'HAUTE COUTURE',
          image: '/assets/photography/avant-garde.png',
          location: 'MILAN, ITALY',
          layout: 'middle-bottom',
        },
        {
          id: 16,
          title: 'FINE GASTRONOMY',
          category: 'PLATING & DESIGN',
          image: '/assets/photography/gastronomy.png',
          location: 'PARIS, FRANCE',
          layout: 'right-tall',
        },
      ],
    },
    {
      id: 'slide-5',
      photos: [
        {
          id: 17,
          title: 'ARCHITECTURAL STUDIO',
          category: 'CONTEMPORARY DESIGN',
          image: '/assets/photography/architectural-studio.png',
          location: 'COPENHAGEN, DENMARK',
          layout: 'left-tall',
        },
        {
          id: 18,
          title: 'FINE GASTRONOMY',
          category: 'HAUTE CUISINE',
          image: '/assets/photography/gastronomy.png',
          location: 'PARIS, FRANCE',
          layout: 'middle-top',
        },
        {
          id: 19,
          title: 'NOCTURNE LOUNGE',
          category: 'ATMOSPHERE & LIGHT',
          image: '/assets/photography/nocturne-lounge.png',
          location: 'TOKYO, JAPAN',
          layout: 'middle-bottom',
        },
        {
          id: 20,
          title: 'AVANT-GARDE',
          category: 'EDITORIAL RUNWAY',
          image: '/assets/photography/avant-garde.png',
          location: 'MILAN, ITALY',
          layout: 'right-tall',
        },
      ],
    },
  ];

  const totalSlides = SLIDES.length;

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 300);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 300);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (!touchStartX.current) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) handleNext();
      else handlePrev();
    }
    touchStartX.current = null;
  };

  const activePhotos = SLIDES[currentSlide].photos;
  const leftPhoto = activePhotos[0];
  const middleTopPhoto = activePhotos[1];
  const middleBottomPhoto = activePhotos[2];
  const rightPhoto = activePhotos[3];

  return (
    <section
      id="photography"
      className="snap-section relative flex flex-col justify-center bg-black text-white px-4 sm:px-6 lg:px-8 pt-10 pb-8 select-none"
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Section Header with Centered Title (like Videos) & Navigation Arrows */}
        <div className="relative flex items-center justify-center mb-6 sm:mb-8 pb-3 border-b border-neutral-900/80">
          <div className="text-center max-w-xl mx-auto">
            <TitleAccent type="photography" />
            <p className="mt-1.5 text-[10px] sm:text-[11px] text-neutral-400 font-semibold uppercase tracking-widest leading-relaxed">
              Editorial, commercial, product, and architectural photography.
            </p>
          </div>

          {/* Navigation Arrows at Right */}
          <div className="absolute right-0 bottom-3 flex items-center space-x-2.5">
            <button
              onClick={handlePrev}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-neutral-800 hover:border-brand-red text-neutral-400 hover:text-white bg-neutral-950/80 hover:bg-neutral-900 flex items-center justify-center transition-all duration-200 cursor-pointer group"
              aria-label="Previous Slide"
            >
              <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={handleNext}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-neutral-800 hover:border-brand-red text-neutral-400 hover:text-white bg-neutral-950/80 hover:bg-neutral-900 flex items-center justify-center transition-all duration-200 cursor-pointer group"
              aria-label="Next Slide"
            >
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* 3-Column Photography Mosaic Layout matching the Mockup */}
        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 lg:gap-5 items-stretch transition-opacity duration-300"
        >
          {/* Column 1: Left Tall Vertical Card */}
          <div
            onClick={() => onOpenLightbox && onOpenLightbox(activePhotos, 0)}
            className="md:col-span-4 group relative rounded-lg sm:rounded-xl overflow-hidden bg-neutral-950 border border-neutral-800/80 cursor-pointer transition-all duration-300 hover:border-brand-red/60 hover:shadow-xl flex flex-col h-[340px] sm:h-[400px] md:h-[450px]"
          >
            <img
              src={leftPhoto.image}
              alt={leftPhoto.title}
              className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

            {/* Zoom Icon Top Right */}
            <div className="absolute top-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-all duration-200">
              <div className="w-6 h-6 rounded-full bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-brand-red hover:border-brand-red transition-colors shadow">
                <Maximize2 className="w-3 h-3" />
              </div>
            </div>

            {/* Photo Metadata Bottom */}
            <div className="absolute bottom-2.5 left-3 right-3">
              <span className="text-[7.5px] sm:text-[8px] font-bold uppercase tracking-widest text-brand-red block">
                {leftPhoto.category}
              </span>
              <h4 className="text-[10px] sm:text-[11px] font-black uppercase tracking-tight text-white font-display line-clamp-1">
                {leftPhoto.title}
              </h4>
            </div>
          </div>

          {/* Column 2: Middle Column (Top Wide + Bottom Wide) */}
          <div className="md:col-span-4 flex flex-col gap-3 sm:gap-4 lg:gap-5 justify-between h-[340px] sm:h-[400px] md:h-[450px]">
            {/* Top Horizontal Card */}
            <div
              onClick={() => onOpenLightbox && onOpenLightbox(activePhotos, 1)}
              className="group relative rounded-lg sm:rounded-xl overflow-hidden bg-neutral-950 border border-neutral-800/80 cursor-pointer transition-all duration-300 hover:border-brand-red/60 hover:shadow-lg flex-1 min-h-0"
            >
              <img
                src={middleTopPhoto.image}
                alt={middleTopPhoto.title}
                className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

              {/* Zoom Icon Top Right */}
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-200">
                <div className="w-5 h-5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-brand-red hover:border-brand-red transition-colors shadow">
                  <Maximize2 className="w-2.5 h-2.5" />
                </div>
              </div>

              {/* Photo Metadata Bottom */}
              <div className="absolute bottom-2 left-2.5 right-2.5">
                <span className="text-[7.5px] sm:text-[8px] font-bold uppercase tracking-widest text-brand-red block">
                  {middleTopPhoto.category}
                </span>
                <h4 className="text-[10px] sm:text-[11px] font-black uppercase tracking-tight text-white font-display line-clamp-1">
                  {middleTopPhoto.title}
                </h4>
              </div>
            </div>

            {/* Bottom Horizontal Card */}
            <div
              onClick={() => onOpenLightbox && onOpenLightbox(activePhotos, 2)}
              className="group relative rounded-lg sm:rounded-xl overflow-hidden bg-neutral-950 border border-neutral-800/80 cursor-pointer transition-all duration-300 hover:border-brand-red/60 hover:shadow-lg flex-1 min-h-0"
            >
              <img
                src={middleBottomPhoto.image}
                alt={middleBottomPhoto.title}
                className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

              {/* Zoom Icon Top Right */}
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-200">
                <div className="w-5 h-5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-brand-red hover:border-brand-red transition-colors shadow">
                  <Maximize2 className="w-2.5 h-2.5" />
                </div>
              </div>

              {/* Photo Metadata Bottom */}
              <div className="absolute bottom-2 left-2.5 right-2.5">
                <span className="text-[7.5px] sm:text-[8px] font-bold uppercase tracking-widest text-brand-red block">
                  {middleBottomPhoto.category}
                </span>
                <h4 className="text-[10px] sm:text-[11px] font-black uppercase tracking-tight text-white font-display line-clamp-1">
                  {middleBottomPhoto.title}
                </h4>
              </div>
            </div>
          </div>

          {/* Column 3: Right Tall Vertical Card */}
          <div
            onClick={() => onOpenLightbox && onOpenLightbox(activePhotos, 3)}
            className="md:col-span-4 group relative rounded-lg sm:rounded-xl overflow-hidden bg-neutral-950 border border-neutral-800/80 cursor-pointer transition-all duration-300 hover:border-brand-red/60 hover:shadow-xl flex flex-col h-[340px] sm:h-[400px] md:h-[450px]"
          >
            <img
              src={rightPhoto.image}
              alt={rightPhoto.title}
              className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

            {/* Zoom Icon Top Right */}
            <div className="absolute top-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-all duration-200">
              <div className="w-6 h-6 rounded-full bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-brand-red hover:border-brand-red transition-colors shadow">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Photo Metadata Bottom */}
            <div className="absolute bottom-2.5 left-3 right-3">
              <span className="text-[7.5px] sm:text-[8px] font-bold uppercase tracking-widest text-brand-red block">
                {rightPhoto.category}
              </span>
              <h4 className="text-[10px] sm:text-[11px] font-black uppercase tracking-tight text-white font-display line-clamp-1">
                {rightPhoto.title}
              </h4>
            </div>
          </div>
        </div>

        {/* Interactive Slider Under the Images matching the mockup dashes */}
        <div className="flex flex-col items-center justify-center mt-6 sm:mt-8 space-y-2">
          {/* Segmented Dashes Track */}
          <div className="flex items-center space-x-2">
            {SLIDES.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${
                  currentSlide === index
                    ? 'w-8 sm:w-10 bg-brand-red shadow-[0_0_10px_rgba(255,30,39,0.8)]'
                    : 'w-4 sm:w-6 bg-neutral-800 hover:bg-neutral-600'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Interactive Scrub Slider Range */}
          <div className="relative w-36 sm:w-48 h-3 flex items-center justify-center cursor-pointer">
            <input
              type="range"
              min={0}
              max={totalSlides - 1}
              value={currentSlide}
              onChange={(e) => setCurrentSlide(Number(e.target.value))}
              className="w-full h-1 bg-transparent opacity-0 cursor-pointer"
              aria-label="Photography slider scrub"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
