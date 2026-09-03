import React, { useState, useEffect, useRef } from 'react';
import TitleAccent from './TitleAccent';
import { ArrowLeft, ArrowRight, Maximize2 } from 'lucide-react';

const GRAPHIC_ITEMS = [
  {
    id: 1,
    title: 'CAR HUB DIGITAL COVER',
    category: 'AUTOMOTIVE BRANDING & UI/UX',
    image: '/assets/graphic/og/carhub-cover.png',
  },
  {
    id: 2,
    title: 'EGY COLOR COVER',
    category: 'COLOR & COATINGS BRANDING',
    image: '/assets/graphic/og/egycolor-cover.jpeg',
  },
  {
    id: 3,
    title: 'MELTIX BURGER COVER',
    category: 'RESTAURANT BRAND IDENTITY',
    image: '/assets/graphic/og/meltix-cover.png',
  },
  {
    id: 4,
    title: 'CAR HUB SHOWCASE',
    category: 'DIGITAL ART DIRECTION',
    image: '/assets/graphic/og/carhub-shot.jpg',
  },
  {
    id: 5,
    title: 'EGY COLOR BRANDING',
    category: 'COLOR & BRAND SYSTEM',
    image: '/assets/graphic/og/egycolor-logo.png',
  },
  {
    id: 6,
    title: 'EGY COLOR INTERFACE',
    category: 'DIGITAL CATALOG GRAPHIC',
    image: '/assets/graphic/og/egycolor-shot.png',
  },
  {
    id: 7,
    title: 'MELTIX BURGER LOGO',
    category: 'VISUAL LOGO DESIGN',
    image: '/assets/graphic/og/meltix-logo.jpg',
  },
  {
    id: 8,
    title: 'MELTIX BURGER INTERFACE',
    category: 'GRAPHIC INTERFACE DESIGN',
    image: '/assets/graphic/og/meltix-shot.png',
  },
];

export default function Graphic({ onOpenLightbox }) {
  // 4 items visible in one row on desktop
  const itemsVisible = 4;
  const maxIndex = Math.max(0, GRAPHIC_ITEMS.length - itemsVisible); // 8 - 4 = 4
  const totalSlides = maxIndex + 1; // 5 positions

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef(null);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  // Auto-move in the same row; stops while hovered
  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3200);

    return () => clearInterval(timer);
  }, [isHovered, maxIndex]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) handleNext();
      else handlePrev();
    }
    touchStartX.current = null;
  };

  return (
    <section
      id="graphic"
      className="snap-section relative flex flex-col justify-center bg-black text-white px-4 sm:px-6 lg:px-8 pt-10 pb-8 select-none overflow-hidden"
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Section Header with Centered Title (like Videos) & Navigation Arrows */}
        <div className="relative flex items-center justify-center mb-6 sm:mb-8 pb-3 border-b border-neutral-900/80">
          <div className="text-center">
            <TitleAccent type="graphic" />
          </div>

          {/* Navigation Arrows at Right */}
          <div className="absolute right-0 flex items-center space-x-2.5">
            <button
              onClick={handlePrev}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-neutral-800 hover:border-brand-red text-neutral-400 hover:text-white bg-neutral-950/80 hover:bg-neutral-900 flex items-center justify-center transition-all duration-200 cursor-pointer group"
              aria-label="Previous Graphic"
            >
              <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={handleNext}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-neutral-800 hover:border-brand-red text-neutral-400 hover:text-white bg-neutral-950/80 hover:bg-neutral-900 flex items-center justify-center transition-all duration-200 cursor-pointer group"
              aria-label="Next Graphic"
            >
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* 4 Pictures in One Row: Height 170px, Width Flexible, 20px Gap Around, Hover Stop */}
        <div
          className="relative overflow-hidden w-full py-1"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex items-center justify-around gap-[20px] transition-transform duration-600 ease-out"
            style={{
              transform: `translateX(calc(-1 * ${currentIndex} * (100% + 20px) / 4))`,
            }}
          >
            {GRAPHIC_ITEMS.map((item, index) => (
              <div
                key={item.id}
                style={{
                  width: 'calc((100% - 60px) / 4)',
                  minWidth: 'calc((100% - 60px) / 4)',
                }}
                className="flex-shrink-0 flex-1"
              >
                <div
                  onClick={() => onOpenLightbox && onOpenLightbox(GRAPHIC_ITEMS, index)}
                  className="group relative h-[250px] sm:h-[270px] w-full rounded-xl overflow-hidden bg-neutral-950 border border-neutral-800/90 hover:border-neutral-700 transition-all duration-300 cursor-pointer shadow-md flex flex-col justify-end"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-[250px] sm:h-[270px] object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                  />

                  {/* Dark subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

                  {/* Zoom Icon Top Right */}
                  <div className="absolute top-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-all duration-200">
                    <div className="w-6 h-6 rounded-full bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-brand-red hover:border-brand-red transition-colors shadow">
                      <Maximize2 className="w-2.5 h-2.5" />
                    </div>
                  </div>

                  {/* Card Metadata at Bottom */}
                  <div className="relative z-10 p-3">
                    <span className="text-[7.5px] sm:text-[8px] font-bold uppercase tracking-widest text-brand-red block mb-0.5">
                      {item.category}
                    </span>
                    <h4 className="text-[10px] sm:text-[11px] font-black uppercase tracking-tight text-white font-display line-clamp-1">
                      {item.title}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Slider Track Under the Images */}
        <div className="flex flex-col items-center justify-center mt-6 sm:mt-8 space-y-2">
          {/* Clickable Segmented Dashes */}
          <div className="flex items-center space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === index
                    ? 'w-8 sm:w-10 bg-brand-red'
                    : 'w-4 sm:w-6 bg-neutral-800 hover:bg-neutral-600'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Interactive Range Slider Scrub */}
          <div className="relative w-36 sm:w-48 h-4 flex items-center justify-center cursor-pointer">
            <input
              type="range"
              min={0}
              max={maxIndex}
              value={currentIndex}
              onChange={(e) => setCurrentIndex(Number(e.target.value))}
              className="w-full h-1 bg-transparent opacity-0 cursor-pointer"
              aria-label="Graphic carousel slider scrub"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
