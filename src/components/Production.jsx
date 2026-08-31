import React from 'react';
import TitleAccent from './TitleAccent';
import { Play } from 'lucide-react';

export default function Production({ onPlayVideo }) {
  const featuredVideo = {
    id: 'neon-echoes',
    title: 'NEON ECHOES',
    category: 'AUTOMOTIVE COMMERCIAL • 4K CINEMA',
    duration: '02:45',
    client: 'LAMBORGHINI CONCEPT',
    image: '/assets/production/featured-car.png',
  };

  const gridVideos = [
    {
      id: 'spectrum',
      title: 'SPECTRUM',
      category: 'TECH & HARDWARE',
      duration: '01:30',
      client: 'VR VISION',
      image: '/assets/production/spectrum.png',
    },
    {
      id: 'the-peak',
      title: 'THE PEAK',
      category: 'EXPEDITION',
      duration: '03:15',
      client: 'ALPINE PEAK',
      image: '/assets/production/the-peak.png',
    },
    {
      id: 'artisan',
      title: 'ARTISAN',
      category: 'CRAFT & HERITAGE',
      duration: '02:00',
      client: 'CLAY STUDIO',
      image: '/assets/production/artisan.png',
    },
    {
      id: 'kinetic',
      title: 'KINETIC',
      category: 'CGI & 3D MOTION',
      duration: '01:45',
      client: 'AURA SOUND',
      image: '/assets/production/kinetic.png',
    },
    {
      id: 'vogue',
      title: 'VOGUE',
      category: 'HIGH FASHION',
      duration: '02:10',
      client: 'HAUTE COUTURE',
      image: '/assets/production/vogue.png',
    },
    {
      id: 'apex',
      title: 'APEX',
      category: 'SPACES & DESIGN',
      duration: '01:55',
      client: 'MONOLITH',
      image: '/assets/production/apex.png',
    },
  ];

  return (
    <section id="production" className="snap-section relative flex flex-col justify-center bg-black text-white px-4 sm:px-6 lg:px-8 pt-16 pb-6">
      <div className="max-w-5xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-4 sm:mb-5">
          <TitleAccent type="production" />
          <p className="mt-1 text-[10px] sm:text-[11px] text-neutral-400 font-semibold uppercase tracking-widest leading-relaxed">
            High-end commercials, brand films, and cinema-grade productions.
          </p>
        </div>

        {/* Featured Video Card (Full Width Showcase) */}
        <div
          onClick={() => onPlayVideo(featuredVideo)}
          className="relative group rounded-lg overflow-hidden bg-neutral-950 border border-neutral-800 transition-all duration-300 hover:border-neutral-700 hover:shadow-lg cursor-pointer mb-4 sm:mb-5"
        >
          {/* Main Car Thumbnail */}
          <div className="w-full aspect-[21/9] max-h-[160px] sm:max-h-[190px] overflow-hidden bg-neutral-900 relative">
            <img
              src={featuredVideo.image}
              alt={featuredVideo.title}
              className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
            />
            {/* Cinematic Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

            {/* Glowing Center Play Button */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-black flex items-center justify-center shadow-lg transition-all duration-300 transform group-hover:scale-110 group-hover:bg-brand-red group-hover:text-white play-pulse">
                <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-current translate-x-0.5" />
              </div>
            </div>

            {/* Bottom Overlay Info */}
            <div className="absolute bottom-2.5 left-3.5 right-3.5 sm:bottom-3.5 sm:left-5 sm:right-5 flex items-end justify-between gap-2">
              <div>
                <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-widest text-brand-red block">
                  FEATURED
                </span>
                <h3 className="text-sm sm:text-base font-black uppercase tracking-tight text-white font-display">
                  {featuredVideo.title}
                </h3>
              </div>

              <span className="text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-black/70 border border-white/20 text-white backdrop-blur-md">
                {featuredVideo.duration}
              </span>
            </div>
          </div>
        </div>

        {/* 6 Video Thumbnails in 3-Column Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3">
          {gridVideos.map((video) => (
            <div
              key={video.id}
              onClick={() => onPlayVideo(video)}
              className="group cursor-pointer flex flex-col"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-[16/9] max-h-[85px] sm:max-h-[95px] rounded-md overflow-hidden bg-neutral-950 border border-neutral-800 transition-all duration-300 group-hover:border-brand-red/50 group-hover:shadow-md">
                <img
                  src={video.image}
                  alt={video.title}
                  className="w-full h-full object-cover object-center transition-transform duration-300 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />

                {/* Center Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-white/90 text-black flex items-center justify-center shadow transition-all duration-300 transform group-hover:scale-110 group-hover:bg-brand-red group-hover:text-white">
                    <Play className="w-2.5 h-2.5 fill-current translate-x-0.5" />
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-1 right-1">
                  <span className="text-[7px] font-mono font-semibold px-1 py-0.2 rounded bg-black/80 text-neutral-300 backdrop-blur-sm">
                    {video.duration}
                  </span>
                </div>
              </div>

              {/* Video Info under Thumbnail */}
              <div className="mt-1.5 flex items-start justify-between">
                <div>
                  <h4 className="text-[11px] font-black uppercase tracking-tight text-white group-hover:text-brand-red transition-colors font-display line-clamp-1">
                    {video.title}
                  </h4>
                  <p className="text-[8px] text-neutral-400 font-semibold uppercase tracking-wider line-clamp-1">
                    {video.category}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
