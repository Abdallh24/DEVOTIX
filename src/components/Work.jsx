import React from 'react';
import TitleAccent from './TitleAccent';
import { ArrowUpRight, Code, Sparkles } from 'lucide-react';
import { SOFTWARE_PROJECTS } from '../data/projectsData';

export default function Work({ onSelectProject, onRequestSimilarWork }) {
  const handleProjectClick = (project, e) => {
    if (e) e.stopPropagation();
    if (onSelectProject) {
      onSelectProject(project);
    }
  };

  return (
    <section id="work" className="snap-section relative flex flex-col justify-center px-4 sm:px-6 lg:px-8 bg-black text-white pt-16 pb-12">
      <div className="max-w-5xl mx-auto w-full">
        {/* Section Header: Title & Description */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 sm:pb-6 border-b border-neutral-900">
          <div>
            <TitleAccent type="work" />
          </div>
          <div className="sm:max-w-md">
            <p className="text-[10px] sm:text-[11px] text-neutral-400 font-medium uppercase tracking-wider leading-relaxed">
              Custom software engineering, bespoke web platforms, and digital product architecture built for market leaders.
            </p>
          </div>
        </div>

        {/* Portfolio Projects Grid (3 Projects: Car Hub, Egy Color, Meltix Burger) */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Main Featured Project: CAR HUB (Large 7-Col Card) */}
          <div
            onClick={(e) => handleProjectClick(SOFTWARE_PROJECTS[0], e)}
            className="lg:col-span-7 group cursor-pointer flex flex-col"
          >
            <div className="relative overflow-hidden rounded-xl bg-neutral-950 border border-neutral-800/80 transition-all duration-300 group-hover:border-brand-red/50 group-hover:shadow-2xl group-hover:shadow-red-950/20 flex-1 flex flex-col">
              {/* Cover Image */}
              <div className="relative w-full aspect-[16/10] max-h-[280px] sm:max-h-[320px] overflow-hidden bg-neutral-900">
                <img
                  src={SOFTWARE_PROJECTS[0].image}
                  alt={SOFTWARE_PROJECTS[0].title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Top Corner Logo Badge for CAR HUB (White Container) */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 p-2 sm:p-2.5 rounded-xl bg-white shadow-lg border border-white/20 flex items-center gap-2 max-w-[150px]">
                  <img
                    src={SOFTWARE_PROJECTS[0].logo}
                    alt={`${SOFTWARE_PROJECTS[0].title} logo`}
                    className="h-6 sm:h-7 w-auto object-contain"
                  />
                  <span className="text-[9px] font-black uppercase tracking-wider text-black font-display">
                    {SOFTWARE_PROJECTS[0].title}
                  </span>
                </div>

                {/* Floating Request Similar Work Button */}
                <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-10">
                  <button
                    onClick={(e) => handleProjectClick(SOFTWARE_PROJECTS[0], e)}
                    className="px-3.5 py-1.5 sm:px-4 sm:py-2 bg-brand-red hover:bg-brand-redHover text-white text-[10px] sm:text-xs font-extrabold uppercase tracking-wider rounded-lg shadow-lg shadow-red-600/30 flex items-center space-x-1.5 transition-all transform group-hover:scale-105"
                  >
                    <span>REQUEST SIMILAR WORK</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Metadata area */}
              <div className="p-4 sm:p-5 flex flex-col justify-between flex-1 bg-neutral-950">
                <div>
                  <h3 className="text-lg sm:text-xl font-black tracking-tight uppercase group-hover:text-brand-red transition-colors flex items-center gap-1.5 font-display text-white">
                    {SOFTWARE_PROJECTS[0].title}
                    <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand-red" />
                  </h3>
                  <p className="text-[10px] sm:text-[11px] text-neutral-400 font-semibold tracking-wider uppercase mt-1">
                    {SOFTWARE_PROJECTS[0].category}
                  </p>
                  <p className="text-xs text-neutral-400 mt-2 line-clamp-2 leading-relaxed font-medium">
                    {SOFTWARE_PROJECTS[0].description}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 mt-4">
                  {SOFTWARE_PROJECTS[0].tags.map((tag) => (
                    <span key={tag} className="text-[8.5px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-neutral-900 text-neutral-400 border border-neutral-800">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Stacked Cards (EGY COLOR & MELTIX BURGER: 5-Col Grid) */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            {SOFTWARE_PROJECTS.slice(1, 3).map((project) => (
              <div
                key={project.id}
                onClick={(e) => handleProjectClick(project, e)}
                className="group cursor-pointer flex-1"
              >
                <div className="relative overflow-hidden rounded-xl bg-neutral-950 border border-neutral-800/80 transition-all duration-300 group-hover:border-brand-red/50 group-hover:shadow-2xl group-hover:shadow-red-950/20">
                  {/* Cover Image */}
                  <div className="relative w-full aspect-[16/9] max-h-[170px] sm:max-h-[190px] overflow-hidden bg-neutral-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                    {/* Logo badge (White Container) */}
                    <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 z-10 p-1.5 sm:p-2 rounded-xl bg-white shadow-md border border-white/20 flex items-center gap-1.5">
                      <img
                        src={project.logo}
                        alt={`${project.title} logo`}
                        className="h-5 sm:h-6 w-auto object-contain"
                      />
                      <span className="text-[8.5px] font-black uppercase tracking-wider text-black font-display">
                        {project.title}
                      </span>
                    </div>

                    {/* Request Similar Work Button */}
                    <div className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 z-10">
                      <button
                        onClick={(e) => handleProjectClick(project, e)}
                        className="px-3 py-1 sm:px-3.5 sm:py-1.5 bg-brand-red hover:bg-brand-redHover text-white text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider rounded-md shadow-md shadow-red-600/30 flex items-center space-x-1 transition-all transform group-hover:scale-105"
                      >
                        <span>REQUEST SIMILAR WORK</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  {/* Metadata */}
                  <div className="p-3.5 sm:p-4 bg-neutral-950">
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-black tracking-tight uppercase group-hover:text-brand-red transition-colors flex items-center gap-1 font-display text-white">
                        {project.title}
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand-red" />
                      </h3>
                      <div className="flex items-center gap-1">
                        {project.tags.map((tag) => (
                          <span key={tag} className="text-[8px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-neutral-900 text-neutral-400 border border-neutral-800">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-[10px] text-neutral-400 font-semibold tracking-wider uppercase mt-0.5">
                      {project.category}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

