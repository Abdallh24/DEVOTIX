import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import Footer from '../components/Footer';

export default function SoftwareCaseStudyPage({
  onBack,
  onBackToHome,
  onBackToPortfolio,
  onOpenContact,
  onOpenPolicy,
  initialStatus = 'COMPLETED'
}) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Dynamic status state ('COMPLETED' | 'processing')
  const [status, setStatus] = useState(initialStatus);

  const toggleStatus = () => {
    setStatus((prev) => (prev === 'COMPLETED' ? 'processing' : 'COMPLETED'));
  };

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else if (onBackToHome) {
      onBackToHome('work');
    } else if (onBackToPortfolio) {
      onBackToPortfolio();
    } else {
      window.location.hash = '#work';
    }
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-brand-red selection:text-white pt-16 flex flex-col justify-between">
      <main className="max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-12 sm:space-y-16 flex-1">
        {/* Top: Back Link */}
        <div>
          <button
            onClick={handleBack}
            className="inline-flex items-center space-x-1.5 text-xs font-bold text-neutral-600 hover:text-brand-red transition-colors uppercase cursor-pointer group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>Back</span>
          </button>
        </div>

        {/* ========================================================================= */}
        {/* 1. PROJECT TITLE SECTION */}
        {/* ========================================================================= */}
        <div className="border-l-4 border-brand-red pl-5 sm:pl-7 py-1 space-y-3">
          {/* Top Row: STATUS Label + Interactive Badge (COMPLETED / processing) */}
          <div className="flex items-center space-x-2.5">
            <span className="text-[11px] font-black uppercase tracking-widest text-neutral-500">
              STATUS
            </span>
            <button
              onClick={toggleStatus}
              title="Click to toggle status (COMPLETED / processing)"
              className={`px-3 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider transition-all shadow-xs cursor-pointer ${
                status === 'COMPLETED'
                  ? 'bg-[#10B981] text-white hover:bg-emerald-600'
                  : 'bg-amber-500 text-white hover:bg-amber-600'
              }`}
            >
              {status === 'COMPLETED' ? 'COMPLETED' : 'PROCESSING'}
            </button>
          </div>

          {/* Headline: Lumina Core: Next-Gen Analytics with selective red accents */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-black font-display leading-[1.03]">
            Lum<span className="text-brand-red">ina</span> C<span className="text-brand-red">o</span>re: Next-Gen Analytics
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-neutral-600 font-medium max-w-2xl leading-relaxed">
            A smart analytics system designed to optimize logistics operations using predictive intelligence, real-time data streaming, and scalable enterprise architecture.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 2. IMAGE GALLERY SECTION (No video overlays) */}
        {/* ========================================================================= */}
        <div className="space-y-4 sm:space-y-6">
          {/* Layout Row 1: 2-Column Grid (Two wide landscape images side-by-side) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="rounded-xl overflow-hidden bg-neutral-100 border border-neutral-200/80 shadow-sm aspect-[16/10]">
              <img
                src="/assets/case-study/case-img-1.png"
                alt="Lumina Analytics Dashboard Chart"
                className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                onError={(e) => {
                  e.target.src = '/assets/project-view/video-chart.png';
                }}
              />
            </div>

            <div className="rounded-xl overflow-hidden bg-neutral-100 border border-neutral-200/80 shadow-sm aspect-[16/10]">
              <img
                src="/assets/case-study/case-img-2.png"
                alt="Freight Logistics Shipping Yard"
                className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                onError={(e) => {
                  e.target.src = '/assets/project-view/video-containers.png';
                }}
              />
            </div>
          </div>

          {/* Layout Row 2: Full-Width Landscape Image (Server Room / Architecture) */}
          <div className="w-full rounded-xl overflow-hidden bg-neutral-100 border border-neutral-200/80 shadow-sm aspect-[16/8] sm:aspect-[21/9]">
            <img
              src="/assets/case-study/case-img-3.png"
              alt="Cloud Server Infrastructure Infrastructure"
              className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
              onError={(e) => {
                e.target.src = '/assets/portfolio/aero-dynamics.png';
              }}
            />
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. PROJECT DETAILS & TEXT SECTION */}
        {/* ========================================================================= */}
        <div className="border-t border-neutral-200 pt-8 sm:pt-12 space-y-8 sm:space-y-10">
          {/* Row 1: DETAILS */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-8 items-start">
            <div className="sm:col-span-3">
              <span className="text-[11px] font-black uppercase tracking-widest text-neutral-800 font-display block">
                DETAILS
              </span>
            </div>
            <div className="sm:col-span-9">
              <p className="text-xs sm:text-sm text-neutral-600 font-medium leading-relaxed">
                A custom high-throughput platform engineered to unify telemetry, supply chain logistics, and live financial metrics across 14 international fulfillment hubs. Built with distributed microservices, low-latency WebSockets, and a WebGL-accelerated visualization frontend.
              </p>
            </div>
          </div>

          {/* Row 2: PROBLEM */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-8 items-start">
            <div className="sm:col-span-3">
              <span className="text-[11px] font-black uppercase tracking-widest text-neutral-800 font-display block">
                PROBLEM
              </span>
            </div>
            <div className="sm:col-span-9">
              <p className="text-xs sm:text-sm text-neutral-600 font-medium leading-relaxed">
                Legacy monolithic ERP systems suffered from 45-minute synchronization delays, inaccurate predictive forecasting, and frequent operational bottlenecks during peak freight shipment cycles.
              </p>
            </div>
          </div>

          {/* Row 3: OUR SOLUTION */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-8 items-start">
            <div className="sm:col-span-3">
              <span className="text-[11px] font-black uppercase tracking-widest text-neutral-800 font-display block">
                OUR SOLUTION
              </span>
            </div>
            <div className="sm:col-span-9">
              <p className="text-xs sm:text-sm text-neutral-600 font-medium leading-relaxed">
                We designed and deployed an event-driven architecture powered by Kafka and Rust microservices, cutting data ingestion latency to under 12 milliseconds while training custom neural routing algorithms that reduced overall operational costs by 42%.
              </p>
            </div>
          </div>

          {/* Row 4: LINK */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-8 items-center">
            <div className="sm:col-span-3">
              <span className="text-[11px] font-black uppercase tracking-widest text-neutral-800 font-display block">
                LINK
              </span>
            </div>
            <div className="sm:col-span-9">
              <a
                href="https://luminacore.analytics.devotix.io"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-black hover:bg-neutral-800 text-white text-xs font-extrabold uppercase tracking-wider rounded transition-all duration-200 shadow-md group"
              >
                <span>Visit Project</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Standalone White Footer */}
      <Footer onOpenPolicy={onOpenPolicy} />
    </div>
  );
}
