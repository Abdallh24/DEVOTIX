import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, Download } from 'lucide-react';

export default function LightboxModal({ photos, initialIndex = 0, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [currentIndex, photos, onClose]);

  if (!photos || photos.length === 0) return null;

  const currentPhoto = photos[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/95 backdrop-blur-2xl animate-fadeIn select-none">
      {/* Backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Top Action Bar */}
      <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-auto">
        <div className="flex items-center space-x-3">
          <span className="text-xs font-mono font-bold uppercase tracking-widest px-3 py-1 rounded bg-neutral-900 border border-neutral-700 text-neutral-300">
            {currentIndex + 1} / {photos.length}
          </span>
          <span className="text-xs uppercase tracking-wider font-bold text-neutral-400 hidden sm:inline-block">
            {currentPhoto.title}
          </span>
        </div>

        <button
          onClick={onClose}
          className="w-10 h-10 rounded-full bg-neutral-900/80 hover:bg-brand-red text-white flex items-center justify-center transition-colors border border-neutral-700"
          aria-label="Close Lightbox"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Left Prev Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handlePrev();
        }}
        className="absolute left-4 z-20 w-12 h-12 rounded-full bg-neutral-900/80 hover:bg-brand-red text-white flex items-center justify-center transition-all duration-300 border border-neutral-700 hover:scale-110"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Right Next Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleNext();
        }}
        className="absolute right-4 z-20 w-12 h-12 rounded-full bg-neutral-900/80 hover:bg-brand-red text-white flex items-center justify-center transition-all duration-300 border border-neutral-700 hover:scale-110"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image Display */}
      <div className="relative z-10 max-w-5xl max-h-[80vh] flex flex-col items-center justify-center">
        <img
          src={currentPhoto.image}
          alt={currentPhoto.title}
          className="max-h-[75vh] w-auto max-w-full object-contain rounded-lg shadow-2xl border border-neutral-800"
        />

        {/* Caption */}
        <div className="mt-4 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-red block">
            {currentPhoto.category}
          </span>
          <h3 className="text-base sm:text-lg font-black uppercase tracking-wide text-white mt-0.5">
            {currentPhoto.title} — <span className="text-neutral-400 font-medium text-sm">{currentPhoto.location}</span>
          </h3>
        </div>
      </div>
    </div>
  );
}
