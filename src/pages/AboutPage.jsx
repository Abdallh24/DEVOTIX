import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import Footer from '../components/Footer';

export default function AboutPage({ onBackToHome, onOpenContact, onOpenPolicy }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const metrics = [
    { number: '150+', label: 'CLIENTS' },
    { number: '300+', label: 'PROJECTS' },
    { number: '45+', label: 'SPECIALISTS' },
    { number: '12+', label: 'MARKETS' },
    { number: '10+', label: 'YEARS' },
  ];

  return (
    <div className="bg-white text-black font-sans selection:bg-brand-red selection:text-white">
      {/* 1. Main Story Section (Full Screen View) */}
      <section id="about-story" className="snap-section min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 bg-white text-black pt-16 pb-6">
        <div className="max-w-6xl mx-auto w-full my-auto py-2">
          {/* Back Button */}
          <div className="mb-3 sm:mb-4">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center space-x-1.5 text-xs font-bold text-neutral-600 hover:text-brand-red transition-colors uppercase group cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Home</span>
            </button>
          </div>

          {/* Massive Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[62px] font-black uppercase tracking-tight text-black font-display leading-[1.02] mb-5 sm:mb-7">
            WE BUILD BRANDS,
            <br />
            CREATE
            <br />
            EXPERIENCES AND
            <br />
            MOVE BUSINESS
            <br />
            FORWARD.
          </h1>

          {/* Two-Column Content: Wider Image on Left + Top-Aligned Narrative Text on Right */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 lg:gap-12 items-start">
            {/* Left Column: Expanded Width Studio Image with exact 4:3 ratio */}
            <div className="md:col-span-7">
              <div className="relative w-full aspect-[4/3] max-h-[260px] sm:max-h-[300px] rounded-xl overflow-hidden border border-neutral-200 shadow-md bg-neutral-100">
                <img
                  src="/assets/about/studio-office.png"
                  alt="Devotix Media Creative Studio & Office"
                  draggable="false"
                  className="w-full h-full object-cover object-center filter grayscale contrast-110"
                />
              </div>
            </div>

            {/* Right Column: 3 Paragraphs */}
            <div className="md:col-span-5 space-y-3 sm:space-y-3.5 text-xs sm:text-sm text-neutral-600 font-medium leading-relaxed pt-1">
              <p>
                Devotix Media is a multidisciplinary creative partner built for the modern landscape. We bridge the gap between high-end editorial design, robust technological infrastructure, and strategic business growth.
              </p>
              <p>
                Our approach is rooted in the belief that aesthetic brilliance must be matched by functional intelligence. We don't just design for screens; we engineer solutions that command attention and drive measurable results.
              </p>
              <p>
                From nascent startups finding their voice to established enterprises seeking reinvention, we assemble bespoke teams of specialists to tackle complex challenges with clarity and purpose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Metrics Banner Section */}
      <section id="about-metrics" className="min-h-screen flex flex-col justify-center px-6 sm:px-10 lg:px-16 bg-white text-black pt-16 pb-12">
        <div className="max-w-6xl mx-auto w-full my-auto py-8">
          <div className="mb-6 text-center sm:text-left">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-red block mb-1">
              OUR GLOBAL IMPACT
            </span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black font-display">
              MEASURABLE EXCELLENCE
            </h2>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 sm:gap-4 text-left p-6 sm:p-8 rounded-xl bg-neutral-50 border border-neutral-200 shadow-sm">
            {metrics.map((m) => (
              <div key={m.label}>
                <span className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-red font-display block leading-none">
                  {m.number}
                </span>
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-neutral-600 block mt-2">
                  {m.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Full-Width Pure White Footer */}
      <Footer onOpenPolicy={onOpenPolicy} />
    </div>
  );
}
