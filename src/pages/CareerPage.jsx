import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Search, MapPin, Briefcase, Clock, Sparkles, Send } from 'lucide-react';
import Footer from '../components/Footer';

export default function CareerPage({
  onBackToHome,
  onOpenContact,
  onOpenPolicy,
  onApplyRole,
  onNavigateSendCv
}) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDept, setSelectedDept] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [selectedType, setSelectedType] = useState('All');

  const jobRoles = [
    {
      id: 'sr-graphic-designer',
      title: 'SENIOR GRAPHIC DESIGNER',
      department: 'CREATIVE',
      location: 'ISMAILIA, EGYPT',
      type: 'FULL-TIME',
      level: 'SENIOR LEVEL',
      workplace: 'Hybrid/On-site',
      description: 'We are looking for a Senior Graphic Designer to join our creative team and develop strong visual concepts across brands, campaigns, digital platforms and social media.'
    },
    {
      id: 'media-buyer',
      title: 'MEDIA BUYER',
      department: 'MEDIA',
      location: 'ISMAILIA, EGYPT',
      type: 'FULL-TIME',
      level: 'MID-SENIOR LEVEL',
      workplace: 'On-site',
      description: 'Manage 7-figure multi-channel ad spend across Meta, TikTok, Google, and programmatic networks with strict ROAS targets.'
    },
    {
      id: 'video-editor',
      title: 'VIDEO EDITOR',
      department: 'PRODUCTION',
      location: 'REMOTE / EGYPT',
      type: 'FULL-TIME',
      level: 'MID LEVEL',
      workplace: 'Remote',
      description: 'Cut cinema-grade commercial films, dynamic social reels, and high-energy showreels using Premiere, DaVinci, and After Effects.'
    },
    {
      id: 'creative-technologist',
      title: 'CREATIVE TECHNOLOGIST / FRONTEND DEV',
      department: 'ENGINEERING',
      location: 'ISMAILIA / REMOTE',
      type: 'FULL-TIME',
      level: 'SENIOR LEVEL',
      workplace: 'Hybrid',
      description: 'Build interactive WebGL 3D web experiences, smooth single-page applications, and high-converting creative engines.'
    }
  ];

  const filteredRoles = jobRoles.filter(role => {
    const matchesSearch = searchQuery === '' ||
      role.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      role.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      role.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesDept = selectedDept === 'All' || role.department.toUpperCase() === selectedDept.toUpperCase();
    const matchesLoc = selectedLocation === 'All' || role.location.toUpperCase().includes(selectedLocation.toUpperCase());
    const matchesType = selectedType === 'All' || role.type.toUpperCase() === selectedType.toUpperCase();

    return matchesSearch && matchesDept && matchesLoc && matchesType;
  });

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedDept('All');
    setSelectedLocation('All');
    setSelectedType('All');
  };

  const scrollToRoles = () => {
    const el = document.getElementById('career-roles');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white text-black font-sans selection:bg-brand-red selection:text-white">
      {/* 1. Hero Section (White Background) */}
      <section id="career-hero" className="min-h-screen flex flex-col justify-center px-6 sm:px-10 lg:px-16 bg-white text-black pt-20 pb-12">
        <div className="max-w-6xl mx-auto w-full my-auto">
          {/* Back Link */}
          <div className="mb-10">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center space-x-1.5 text-sm font-semibold text-neutral-800 hover:text-brand-red transition-colors cursor-pointer group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left Column: Content */}
            <div className="md:col-span-7">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-neutral-500 block mb-6">
                DEVOITX MEDIA / CAREERS
              </span>

              <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[96px] font-black uppercase tracking-tight text-black font-display leading-[0.94] mb-8">
                BUILD WHAT'S
                <br />
                NEXT WITH US.
              </h1>

              {/* Description Block with Left Red Vertical Line */}
              <div className="border-l-2 border-brand-red pl-6 sm:pl-8 py-1 space-y-4 mb-10 max-w-2xl">
                <p className="text-base sm:text-xl md:text-2xl text-[#4b5563] font-normal leading-relaxed">
                  We bring together strategists, creatives, marketers, producers, designers and technologists to build work that moves brands forward.
                </p>
                <p className="text-xs sm:text-sm font-black uppercase tracking-[0.2em] text-black">
                  CREATIVE MINDS. DIFFERENT DISCIPLINES. ONE TEAM.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                <button
                  onClick={onNavigateSendCv}
                  className="px-8 sm:px-10 py-4 bg-[#111113] hover:bg-neutral-800 text-white text-xs sm:text-sm font-extrabold uppercase tracking-widest rounded-md shadow-md flex items-center space-x-2 transition-all cursor-pointer"
                >
                  <span>SEND YOUR CV</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <button
                  onClick={scrollToRoles}
                  className="px-8 sm:px-10 py-4 bg-white border border-neutral-300 hover:border-black text-black text-xs sm:text-sm font-extrabold uppercase tracking-widest rounded-md shadow-sm flex items-center space-x-2 transition-all cursor-pointer"
                >
                  <span>VIEW OPEN ROLES</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Column: Tall Vertical Portrait Photo */}
            <div className="md:col-span-5 flex justify-center md:justify-end">
              <div className="relative w-full max-w-[360px] aspect-[9/15] max-h-[480px] sm:max-h-[540px] rounded-2xl overflow-hidden border border-neutral-200 shadow-xl bg-neutral-100">
                <img
                  src="/assets/career/career-hero.png"
                  alt="Devotix Media Team Collaboration"
                  draggable="false"
                  className="w-full h-full object-cover object-center filter grayscale contrast-110"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Job Listings Section (Light Grey Background) - Fits Full Screen View */}
      <section id="career-roles" className="snap-section min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 bg-[#f8f8f9] text-black pt-16 pb-6">
        <div className="max-w-5xl mx-auto w-full my-auto py-4">
          <div className="mb-5 sm:mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-red block mb-1">
                CAREER OPPORTUNITIES
              </span>
              <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-black font-display">
                FIND YOUR NEXT ROLE.
              </h2>
            </div>

            <button
              onClick={onNavigateSendCv}
              className="text-xs font-bold text-brand-red hover:underline uppercase tracking-wider flex items-center space-x-1 cursor-pointer"
            >
              <span>Don't see your role? Send CV</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Filter Bar */}
          <div className="bg-white p-3 sm:p-4 rounded-lg border border-neutral-200 shadow-sm mb-6 flex flex-col md:flex-row md:items-center justify-between gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
              <input
                type="text"
                placeholder="Search role, skill, or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 bg-neutral-50 border border-neutral-200 rounded text-xs text-neutral-900 focus:outline-none focus:border-brand-red"
              />
            </div>

            {/* Dropdowns */}
            <div className="flex flex-wrap items-center gap-2">
              <select
                value={selectedDept}
                onChange={(e) => setSelectedDept(e.target.value)}
                className="px-2.5 py-1.5 bg-neutral-50 border border-neutral-200 rounded text-[11px] font-bold text-neutral-700 focus:outline-none cursor-pointer"
              >
                <option value="All">All Departments</option>
                <option value="Creative">Creative</option>
                <option value="Media">Media</option>
                <option value="Production">Production</option>
                <option value="Engineering">Engineering</option>
              </select>

              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="px-2.5 py-1.5 bg-neutral-50 border border-neutral-200 rounded text-[11px] font-bold text-neutral-700 focus:outline-none cursor-pointer"
              >
                <option value="All">All Locations</option>
                <option value="Ismailia">Ismailia, Egypt</option>
                <option value="Remote">Remote</option>
              </select>

              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-2.5 py-1.5 bg-neutral-50 border border-neutral-200 rounded text-[11px] font-bold text-neutral-700 focus:outline-none cursor-pointer"
              >
                <option value="All">All Types</option>
                <option value="Full-time">Full-time</option>
                <option value="Contract">Contract</option>
              </select>

              {(searchQuery || selectedDept !== 'All' || selectedLocation !== 'All' || selectedType !== 'All') && (
                <button
                  onClick={clearFilters}
                  className="text-[10px] font-bold uppercase tracking-wider text-brand-red hover:underline ml-1 cursor-pointer"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </div>

          {/* Job List */}
          <div className="bg-white rounded-lg border border-neutral-200 shadow-sm divide-y divide-neutral-100 overflow-hidden">
            {filteredRoles.length > 0 ? (
              filteredRoles.map((role) => (
                <div
                  key={role.id}
                  onClick={() => onApplyRole && onApplyRole(role)}
                  className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-neutral-50 transition-colors cursor-pointer group"
                >
                  <div>
                    <h3 className="text-sm sm:text-base font-black uppercase tracking-tight text-black font-display group-hover:text-brand-red transition-colors">
                      {role.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-1.5 text-[10px] sm:text-[11px] font-semibold text-neutral-500">
                      <span className="flex items-center space-x-1">
                        <Briefcase className="w-3 h-3 text-neutral-400" />
                        <span>{role.department}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <MapPin className="w-3 h-3 text-neutral-400" />
                        <span>{role.location}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Clock className="w-3 h-3 text-neutral-400" />
                        <span>{role.type}</span>
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-600 text-[9px] font-bold">
                        {role.workplace}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onApplyRole && onApplyRole(role);
                    }}
                    className="px-4 py-2 bg-brand-red hover:bg-brand-redHover text-white text-[11px] font-bold uppercase tracking-wider rounded transition-all transform hover:scale-105 flex items-center space-x-1 flex-shrink-0 w-fit cursor-pointer shadow-sm"
                  >
                    <span>Apply</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              ))
            ) : (
              <div className="p-8 text-center text-xs text-neutral-500 font-medium">
                No open positions match your search criteria. Try clearing filters.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 3. Culture & Values Section (White Background) - Fits Full Screen View */}
      <section id="career-culture" className="snap-section min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 bg-white text-black pt-16 pb-6">
        <div className="max-w-6xl mx-auto w-full my-auto py-2">
          <div className="mb-5 sm:mb-6">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-red block mb-1">
              LIFE AT DEVOTIX
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-black font-display leading-tight">
              GOOD WORK STARTS WITH
              <br />
              GOOD PEOPLE.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-stretch">
            {/* Left Column: Large presentation photo */}
            <div className="md:col-span-7">
              <div className="relative w-full aspect-[4/3] max-h-[300px] sm:max-h-[340px] rounded-xl overflow-hidden border border-neutral-200 shadow-md bg-neutral-100">
                <img
                  src="/assets/career/culture-presentation.png"
                  alt="Devotix Team Presentation"
                  draggable="false"
                  className="w-full h-full object-cover object-center filter grayscale contrast-110"
                />
              </div>
            </div>

            {/* Right Column: Split Stack (Camera Photo + Accented Pull Quote) */}
            <div className="md:col-span-5 flex flex-col justify-between gap-4">
              {/* Top: Landscape Camera Equipment Stills */}
              <div className="relative w-full aspect-[16/9] max-h-[140px] rounded-lg overflow-hidden border border-neutral-200 shadow bg-neutral-100">
                <img
                  src="/assets/career/culture-camera.png"
                  alt="Cinema Production Equipment"
                  draggable="false"
                  className="w-full h-full object-cover object-center filter grayscale contrast-110"
                />
              </div>

              {/* Bottom: Light grey text block with selectively red-accented vowels */}
              <div className="p-5 sm:p-6 rounded-lg bg-neutral-100 border border-neutral-200 flex flex-col justify-center flex-1">
                <p className="text-sm sm:text-base font-extrabold text-black font-display leading-snug">
                  "The fr<span className="text-brand-red">ee</span>dom to expl<span className="text-brand-red">o</span>re b<span className="text-brand-red">a</span>d id<span className="text-brand-red">ea</span>s unt<span className="text-brand-red">i</span>l w<span className="text-brand-red">e</span> f<span className="text-brand-red">i</span>nd th<span className="text-brand-red">e</span> br<span className="text-brand-red">illi</span>ant on<span className="text-brand-red">e</span>."
                </p>
                <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 mt-2 block">
                  — DEVOTIX CREATIVE MANIFESTO
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Perks & Benefits Section (Dark Charcoal Background) */}
      <section id="career-perks" className="min-h-screen flex flex-col justify-center px-6 sm:px-10 lg:px-16 bg-[#0c0c0e] text-white pt-16 pb-12">
        <div className="max-w-6xl mx-auto w-full my-auto py-8">
          <div className="mb-8 text-center sm:text-left">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-red block mb-1">
              WHY JOIN DEVOTIX
            </span>
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white font-display">
              PERKS & IMPACT
            </h2>
          </div>

          {/* 4-Column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Col 1 */}
            <div className="space-y-2.5 p-4 rounded-lg bg-neutral-900/60 border border-neutral-800">
              <img src="/assets/career/icon-freedom.png" alt="Creative Freedom" className="w-6 h-6 object-contain" />
              <h3 className="text-sm font-black uppercase tracking-tight text-white font-display">
                Creative Freedom
              </h3>
              <p className="text-[11px] text-neutral-400 font-medium leading-relaxed">
                Full autonomy to push boundaries, experiment with raw ideas, and build work you're truly proud of.
              </p>
            </div>

            {/* Col 2 */}
            <div className="space-y-2.5 p-4 rounded-lg bg-neutral-900/60 border border-neutral-800">
              <img src="/assets/career/icon-discipline.png" alt="Cross-Discipline" className="w-6 h-6 object-contain" />
              <h3 className="text-sm font-black uppercase tracking-tight text-white font-display">
                Cross-Discipline
              </h3>
              <p className="text-[11px] text-neutral-400 font-medium leading-relaxed">
                Work shoulder-to-shoulder with experts across 3D CGI, branding, cinema film, and software architecture.
              </p>
            </div>

            {/* Col 3 */}
            <div className="space-y-2.5 p-4 rounded-lg bg-neutral-900/60 border border-neutral-800">
              <img src="/assets/career/icon-projects.png" alt="Real Projects" className="w-6 h-6 object-contain" />
              <h3 className="text-sm font-black uppercase tracking-tight text-white font-display">
                Real Projects
              </h3>
              <p className="text-[11px] text-neutral-400 font-medium leading-relaxed">
                Immediate, hands-on impact on global brand launches, luxury automotive campaigns, and tech platforms.
              </p>
            </div>

            {/* Col 4 */}
            <div className="space-y-2.5 p-4 rounded-lg bg-neutral-900/60 border border-neutral-800">
              <img src="/assets/career/icon-growth.png" alt="Growth" className="w-6 h-6 object-contain" />
              <h3 className="text-sm font-black uppercase tracking-tight text-white font-display">
                Growth
              </h3>
              <p className="text-[11px] text-neutral-400 font-medium leading-relaxed">
                Structured mentorship, generous hardware & learning budgets, and rapid trajectory for top performers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Full-Width Pure White Footer */}
      <Footer onOpenPolicy={onOpenPolicy} />
    </div>
  );
}
