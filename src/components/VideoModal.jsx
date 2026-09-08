import React, { useEffect } from 'react';
import { X, Play, Volume2, VolumeX } from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';

export default function VideoModal({ video, onClose }) {
  const { t, isRtl } = useThemeLanguage();

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
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/90 backdrop-blur-xl animate-fadeIn">
      {/* Click outside to close backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative z-10 w-full max-w-5xl bg-neutral-950 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl">
        {/* Floating Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 rtl:right-auto rtl:left-4 z-30 w-10 h-10 rounded-full bg-black/70 hover:bg-brand-red text-white/80 hover:text-white border border-white/20 flex items-center justify-center transition-all cursor-pointer shadow-lg backdrop-blur-md"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video Player Display Container */}
        <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
          {video.videoSrc || video.videoUrl ? (
            <video
              key={video.videoSrc || video.videoUrl}
              controls
              autoPlay
              playsInline
              preload="auto"
              ref={(el) => {
                if (el) {
                  el.play().catch(() => {});
                }
              }}
              className="video-modal-player w-full h-full object-cover"
            >
              <source
                src={video.videoSrc || video.videoUrl}
                type={(video.videoSrc || video.videoUrl).endsWith('.mov') ? 'video/quicktime' : 'video/mp4'}
              />
              {(video.videoSrc || video.videoUrl).endsWith('.mov') && (
                <source src="/assets/production/video1.mp4" type="video/mp4" />
              )}
            </video>
          ) : (
            <>
              <img
                src={video.image || '/assets/production/featured-car.png'}
                alt={video.title || 'Video preview'}
                className="video-modal-player filter brightness-75"
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
                    <Play className="w-8 h-8 fill-current translate-x-0.5 rtl:-translate-x-0.5" />
                  </div>
                  <p className="text-xs uppercase tracking-widest text-neutral-300 font-semibold">
                    {isRtl ? 'انقر لبدء البث عالي الدقة' : 'Click to Start High-Definition Stream'}
                  </p>
                </div>

                {/* Simulated Player Controls Bar */}
                <div className="w-full bg-neutral-900/80 backdrop-blur-md rounded-lg p-3 flex items-center space-x-4 rtl:space-x-reverse border border-white/10">
                  <Play className="w-4 h-4 text-white fill-white cursor-pointer hover:text-brand-red" />
                  <div className="flex-1 h-1.5 bg-neutral-700 rounded-full overflow-hidden">
                    <div className="w-1/3 h-full bg-brand-red rounded-full" />
                  </div>
                  <span className="text-[11px] font-mono text-neutral-300">00:42 / {video.duration || '02:45'}</span>
                  <Volume2 className="w-4 h-4 text-neutral-300 cursor-pointer hover:text-white" />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
