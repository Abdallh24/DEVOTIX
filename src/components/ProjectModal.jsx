import React, { useEffect } from 'react';
import { X, ArrowUpRight, CheckCircle2, Award } from 'lucide-react';

export default function ProjectModal({ project, onClose, onOpenContact }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/90 backdrop-blur-xl animate-fadeIn">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-10 w-full max-w-4xl bg-neutral-950 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-neutral-900/60">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-red">
              CASE STUDY
            </span>
            <h3 className="text-xl font-black uppercase tracking-tight text-white font-display">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-neutral-800 hover:bg-brand-red hover:text-white text-neutral-400 flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          {/* Main Image */}
          <div className="rounded-xl overflow-hidden border border-neutral-800 bg-black">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-cover max-h-[460px]"
            />
          </div>

          {/* Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-neutral-900">
            <div className="md:col-span-2 space-y-4">
              <h4 className="text-lg font-black uppercase text-white font-display">
                Executive Overview
              </h4>
              <p className="text-sm text-neutral-300 leading-relaxed font-normal">
                {project.description}
              </p>
              <div className="space-y-2 pt-2">
                <div className="flex items-center space-x-2 text-xs text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-brand-red flex-shrink-0" />
                  <span>340% increase in digital engagement within first 60 days</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-brand-red flex-shrink-0" />
                  <span>Bespoke custom UI design and seamless 60fps WebGL animations</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-brand-red flex-shrink-0" />
                  <span>Featured on Awwwards Site of the Day and FWA of the Month</span>
                </div>
              </div>
            </div>

            {/* Project Specs */}
            <div className="space-y-4 bg-neutral-900/50 p-5 rounded-xl border border-neutral-800/80">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 block">
                  CATEGORY
                </span>
                <span className="text-xs font-bold uppercase text-white mt-0.5 block">
                  {project.category}
                </span>
              </div>

              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 block">
                  DELIVERABLES
                </span>
                <div className="flex flex-wrap gap-1.5 mt-1.5">
                  {project.tags?.map((t) => (
                    <span key={t} className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-neutral-800 text-neutral-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    onClose();
                    onOpenContact();
                  }}
                  className="w-full py-2.5 bg-brand-red hover:bg-brand-redHover text-white text-xs font-bold uppercase tracking-wider rounded transition-colors flex items-center justify-center space-x-1.5"
                >
                  <span>REQUEST SIMILAR WORK</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
