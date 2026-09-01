import React, { useState, useEffect } from 'react';

export default function RightSlideBar({ currentPage = 'home' }) {
  const [activeSection, setActiveSection] = useState('');
  const [scrollPercent, setScrollPercent] = useState(0);

  const pageSections = {
    home: [
      { id: 'home', label: 'Home' },
      { id: 'work', label: 'Our Work' },
      { id: 'clients', label: 'Clients' },
      { id: 'graphic', label: 'Graphic' },
      { id: 'production', label: 'Videos' },
      { id: 'photography', label: 'Photography' },
      { id: 'services', label: 'Services' },
    ],
    'project-view': [
      { id: 'view-title', label: 'Overview' },
      { id: 'view-video', label: 'Video Film' },
      { id: 'view-photo', label: 'Gallery' },
      { id: 'view-backstage', label: 'Backstage' },
      { id: 'view-details', label: 'Details' },
    ],
    about: [
      { id: 'about-story', label: 'Our Story' },
      { id: 'about-metrics', label: 'Impact & Values' },
    ],
    career: [
      { id: 'career-hero', label: 'Join Team' },
      { id: 'career-roles', label: 'Open Roles' },
      { id: 'career-culture', label: 'Culture & Vibe' },
      { id: 'career-perks', label: 'Benefits' },
    ],
    contact: [
      { id: 'contact-form', label: 'Project Form' },
      { id: 'contact-process', label: 'Next Steps' },
      { id: 'contact-direct', label: 'Direct Contact' },
    ],
  };

  const sections = pageSections[currentPage] || [];

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(Math.max((window.scrollY / totalHeight) * 100, 0), 100);
        setScrollPercent(progress);
      }

      if (sections.length > 0) {
        const scrollPosition = window.scrollY + window.innerHeight / 3;
        for (let i = sections.length - 1; i >= 0; i--) {
          const el = document.getElementById(sections[i].id);
          if (el && el.offsetTop <= scrollPosition) {
            setActiveSection(sections[i].id);
            return;
          }
        }
        setActiveSection(sections[0].id);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage, sections]);

  if (sections.length <= 1) return null;

  const scrollToId = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 60;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <aside
      aria-label="Page Slide Navigation"
      className="fixed right-3 sm:right-4 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center select-none"
    >
      {/* Background Track Line */}
      <div className="relative flex flex-col items-center py-2 px-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 shadow-lg">
        {/* Continuous Progress Fill Line */}
        <div className="absolute top-4 bottom-4 w-[2px] bg-white/15 rounded-full" />
        <div
          className="absolute top-4 w-[2px] bg-brand-red rounded-full transition-all duration-150"
          style={{ height: `calc(${scrollPercent}% * 0.85)` }}
        />

        {/* Section Dots */}
        <div className="relative z-10 flex flex-col items-center space-y-4 my-2">
          {sections.map((sec) => {
            const isActive = activeSection === sec.id;
            return (
              <button
                key={sec.id}
                onClick={() => scrollToId(sec.id)}
                className="group relative flex items-center justify-center p-1 focus:outline-none cursor-pointer"
                aria-label={`Slide to ${sec.label}`}
              >
                {/* Outer Indicator Ring */}
                <div
                  className={`w-3.5 h-3.5 rounded-full border transition-all duration-300 flex items-center justify-center ${
                    isActive
                      ? 'border-brand-red bg-brand-red/20 scale-125'
                      : 'border-white/30 hover:border-white/70 bg-transparent'
                  }`}
                >
                  {/* Center Dot */}
                  <div
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                      isActive
                        ? 'bg-brand-red scale-110'
                        : 'bg-white/50 group-hover:bg-white'
                    }`}
                  />
                </div>

                {/* Floating Tooltip on Hover */}
                <div className="absolute right-6 px-2.5 py-1 rounded bg-black/90 text-white border border-white/15 text-[10px] font-bold uppercase tracking-wider whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 group-hover:-translate-x-1 transition-all duration-200 shadow-xl backdrop-blur-sm">
                  {sec.label}
                  <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-black/90 rotate-45 border-r border-t border-white/15" />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
