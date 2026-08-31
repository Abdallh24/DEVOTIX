import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const NAV_LINKS = [
  { name: 'HOME', href: '#home', type: 'anchor' },
  { name: 'SERVICES', href: '#services', type: 'anchor' },
  { name: 'OUR CLIENT', href: '#clients', type: 'anchor' },
  { name: 'PORTFOLIO', href: '#portfolio', type: 'portfolio' },
  { name: 'SOFTWARE ENGINEERING', href: '#software-engineering', type: 'software-engineering' },
  { name: 'CAREER', href: '#career', type: 'career' },
  { name: 'ABOUT US', href: '#about', type: 'about' },
  { name: 'CONTACT US', href: '#contact', type: 'contact' },
];

export default function Header({
  onOpenContact,
  onOpenCareer,
  onOpenAbout,
  onNavigatePortfolio,
  onNavigateSoftwareEngineering,
  onNavigateAbout,
  onNavigateCareer,
  onNavigateContact,
  onNavigateHome,
  currentPage = 'home'
}) {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);

      // Calculate scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(currentProgress);
      }

      if (currentPage === 'home') {
        const sections = ['home', 'clients', 'services', 'work', 'production', 'photography', 'cta'];
        const scrollPosition = window.scrollY + 160;

        for (const sectionId of sections) {
          const el = document.getElementById(sectionId);
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection(sectionId);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  const handleNavClick = (e, link) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (link.type === 'portfolio') {
      if (currentPage === 'portfolio') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        onNavigatePortfolio && onNavigatePortfolio();
      }
      return;
    }

    if (link.type === 'software-engineering') {
      if (currentPage === 'software-engineering') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (onNavigateSoftwareEngineering) {
        onNavigateSoftwareEngineering();
      }
      return;
    }

    if (link.type === 'about') {
      if (currentPage === 'about') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (onNavigateAbout) {
        onNavigateAbout();
      } else {
        onOpenAbout && onOpenAbout();
      }
      return;
    }

    if (link.type === 'career') {
      if (currentPage === 'career') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (onNavigateCareer) {
        onNavigateCareer();
      } else {
        onOpenCareer && onOpenCareer();
      }
      return;
    }

    if (link.type === 'contact') {
      if (currentPage === 'contact') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (onNavigateContact) {
        onNavigateContact();
      } else {
        onOpenContact && onOpenContact();
      }
      return;
    }

    // Anchor link
    const targetId = link.href.replace('#', '');
    if (currentPage !== 'home') {
      onNavigateHome && onNavigateHome(targetId);
      return;
    }

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

  const handleCtaClick = () => {
    if (onNavigateContact) {
      onNavigateContact();
    } else if (onOpenContact) {
      onOpenContact();
    }
  };

  return (
    <>
      {/* Top Scroll Progress Indicator */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-brand-red z-[60] transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white text-black ${
          isScrolled ? 'py-2 shadow-md' : 'py-2.5 sm:py-3'
        }`}
      >
        <div className="w-full max-w-[98%] 2xl:max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 flex items-center justify-between gap-2">
          {/* Left: Agency Logo & Name */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, { href: '#home', type: 'anchor' })}
            className="flex items-center space-x-2 group focus:outline-none flex-shrink-0 cursor-pointer"
          >
            <img
              src="/assets/landing/logo.png"
              alt="Devotix Media Logo"
              className="h-6 sm:h-7 lg:h-7.5 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              onError={(e) => {
                e.target.src = '/favicon.png';
              }}
            />
            <span className="font-extrabold tracking-wider text-xs sm:text-sm text-black font-display uppercase whitespace-nowrap">
              DEVOTIX MEDIA
            </span>
          </a>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-3 xl:space-x-4 2xl:space-x-5 flex-nowrap overflow-hidden">
            {NAV_LINKS.map((link) => {
              const targetSection = link.href.replace('#', '');
              const isActive = (currentPage === 'portfolio' || currentPage === 'project-view')
                ? link.type === 'portfolio'
                : currentPage === 'software-engineering'
                  ? link.type === 'software-engineering'
                  : currentPage === 'about'
                    ? link.type === 'about'
                    : (currentPage === 'career' || currentPage === 'job-apply' || currentPage === 'send-cv')
                      ? link.type === 'career'
                      : currentPage === 'contact'
                        ? link.type === 'contact'
                        : link.type === 'anchor' && activeSection === targetSection;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className={`text-[8.5px] xl:text-[9.5px] 2xl:text-[10px] font-bold tracking-wider transition-colors duration-150 uppercase relative py-1 whitespace-nowrap cursor-pointer ${
                    isActive ? 'text-brand-red' : 'text-neutral-800 hover:text-brand-red'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-red rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right: Red "Start Project" / "LET'S TALK" Link/Button */}
          <div className="hidden sm:flex items-center flex-shrink-0">
            <button
              onClick={handleCtaClick}
              className="bg-brand-red hover:bg-brand-redHover text-white text-[9.5px] xl:text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 lg:px-3.5 lg:py-1.5 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 shadow hover:shadow-red-500/30 flex items-center space-x-1 cursor-pointer"
            >
              <span>START PROJECT</span>
              <ArrowUpRight className="w-2.5 h-2.5" />
            </button>
          </div>

          {/* Mobile / Tablet Menu Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-black p-1.5 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile / Compact Tablet Drawer Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-neutral-200 px-5 pt-3 pb-5 space-y-1.5 animate-fadeIn max-h-[80vh] overflow-y-auto">
            {NAV_LINKS.map((link) => {
              const targetSection = link.href.replace('#', '');
              const isActive = (currentPage === 'portfolio' || currentPage === 'project-view')
                ? link.type === 'portfolio'
                : currentPage === 'software-engineering'
                  ? link.type === 'software-engineering'
                  : currentPage === 'about'
                    ? link.type === 'about'
                    : (currentPage === 'career' || currentPage === 'job-apply' || currentPage === 'send-cv')
                      ? link.type === 'career'
                      : currentPage === 'contact'
                        ? link.type === 'contact'
                        : link.type === 'anchor' && activeSection === targetSection;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className={`block text-xs font-bold uppercase py-1.5 transition-colors ${
                    isActive ? 'text-brand-red' : 'text-neutral-900 hover:text-brand-red'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <div className="pt-2 border-t border-neutral-100">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleCtaClick();
                }}
                className="w-full bg-brand-red hover:bg-brand-redHover text-white font-bold text-xs uppercase py-2.5 rounded-full tracking-wider transition-colors shadow text-center flex items-center justify-center space-x-2"
              >
                <span>START PROJECT</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
