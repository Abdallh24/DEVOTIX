import React from 'react';
import { ArrowUp, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

export default function Footer({ onOpenPolicy }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
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
    <footer id="footer" className="w-full bg-white text-black py-10 sm:py-14 border-t border-neutral-200 scroll-snap-align-end" style={{ scrollSnapAlign: 'end' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
          {/* Left: Agency Logo & Tagline */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center space-x-2 group focus:outline-none"
            >
              <img
                src="/assets/footer/footer-logo.png"
                alt="Devotix Media Logo"
                className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden items-center space-x-2">
                <span className="w-8 h-8 rounded-full bg-brand-red flex items-center justify-center text-white font-black text-base">
                  D
                </span>
                <span className="font-extrabold tracking-wider text-xl text-black font-display">
                  DEVOTIX MEDIA
                </span>
              </div>
            </a>
            <div className="sm:border-l sm:border-neutral-300 sm:pl-4 flex flex-col justify-center">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-900">
                DEVOTIX MEDIA
              </span>
              <span className="text-[11px] text-neutral-500 font-medium mt-0.5">
                © {new Date().getFullYear()} ALL RIGHTS RESERVED • CRAFTED FOR EXCELLENCE
              </span>
            </div>
          </div>

          {/* Center: Legal Links (Privacy Policy, Terms of Service) */}
          <div className="flex items-center space-x-6 sm:space-x-8">
            <button
              onClick={() => onOpenPolicy && onOpenPolicy('privacy')}
              className="text-xs font-semibold tracking-wide text-neutral-700 hover:text-brand-red transition-colors focus:outline-none"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onOpenPolicy && onOpenPolicy('terms')}
              className="text-xs font-semibold tracking-wide text-neutral-700 hover:text-brand-red transition-colors focus:outline-none"
            >
              Terms of Service
            </button>
          </div>

          {/* Right: Social Media Icons & Scroll to Top */}
          <div className="flex items-center space-x-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-brand-red hover:text-white text-neutral-700 flex items-center justify-center transition-all duration-300 shadow-sm"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-brand-red hover:text-white text-neutral-700 flex items-center justify-center transition-all duration-300 shadow-sm"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-brand-red hover:text-white text-neutral-700 flex items-center justify-center transition-all duration-300 shadow-sm"
              aria-label="Twitter / X"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-brand-red hover:text-white text-neutral-700 flex items-center justify-center transition-all duration-300 shadow-sm"
              aria-label="YouTube"
            >
              <Youtube className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-black text-white hover:bg-brand-red flex items-center justify-center transition-all duration-300 shadow ml-2 group"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
