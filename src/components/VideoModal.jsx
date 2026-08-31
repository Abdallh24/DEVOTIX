import React, { useEffect } from 'react';
import { X, Play, Volume2, VolumeX } from 'lucide-react';

export default function VideoModal({ video, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!video) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/90 backdrop-blur-xl animate-fadeIn">
      {/* Click outside to close backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative z-10 w-full max-w-5xl bg-neutral-950 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800/80 bg-neutral-900/50">
          <div>
            <h3 className="text-lg font-black uppercase tracking-wider text-white font-display">
              {video.title || 'DEVOTIX SHOWREEL'}
            </h3>
            <p className="text-xs text-brand-red font-bold uppercase tracking-widest mt-0.5">
              {video.category || 'COMMERCIAL PRODUCTION'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-neutral-800 hover:bg-brand-red hover:text-white text-neutral-400 flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Display Container */}
        <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
          <img
            src={video.image || '/assets/production/featured-car.png'}
            alt={video.title || 'Video preview'}
            className="w-full h-full object-cover filter brightness-75"
          />

          {/* Simulated HD video player overlay */}
          <div className="absolute inset-0 flex flex-col justify-between p-6 bg-gradient-to-t from-black/80 via-transparent to-black/40">
            <div className="flex items-center justify-between text-xs text-neutral-400">
              <span className="bg-brand-red text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                4K HDR CINEMA
              </span>
              <span className="font-mono">{video.duration || '02:45'}</span>
            </div>

            {/* Play Button Indicator in Modal */}
            <div className="self-center flex flex-col items-center gap-3">
              <div className="w-20 h-20 rounded-full bg-brand-red text-white flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-transform">
                <Play className="w-8 h-8 fill-current translate-x-0.5" />
              </div>
              <p className="text-xs uppercase tracking-widest text-neutral-300 font-semibold">
                Click to Start High-Definition Stream
              </p>
            </div>

            {/* Simulated Player Controls Bar */}
            <div className="w-full bg-neutral-900/80 backdrop-blur-md rounded-lg p-3 flex items-center space-x-4 border border-white/10">
              <Play className="w-4 h-4 text-white fill-white cursor-pointer hover:text-brand-red" />
              <div className="flex-1 h-1.5 bg-neutral-700 rounded-full overflow-hidden">
                <div className="w-1/3 h-full bg-brand-red rounded-full" />
              </div>
              <span className="text-[11px] font-mono text-neutral-300">00:42 / {video.duration || '02:45'}</span>
              <Volume2 className="w-4 h-4 text-neutral-300 cursor-pointer hover:text-white" />
            </div>
          </div>
        </div>

        {/* Modal Footer Info */}
        <div className="p-6 bg-neutral-900/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-neutral-400 font-medium max-w-xl">
            Produced, directed, and edited by the Devotix Media in-house cinema team with Arri Alexa Mini LF & anamorphic primes.
          </p>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-bold uppercase rounded tracking-wider transition-colors"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
}
