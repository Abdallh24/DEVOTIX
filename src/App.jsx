import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HomeVideoSection from './components/HomeVideoSection';
import Work from './components/Work';
import Clients from './components/Clients';
import Services from './components/Services';
import Production from './components/Production';
import Photography from './components/Photography';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import RightSlideBar from './components/RightSlideBar';

// Pages
import PortfolioPage from './pages/PortfolioPage';
import ProjectViewPage from './pages/ProjectViewPage';
import SoftwareCaseStudyPage from './pages/SoftwareCaseStudyPage';
import AboutPage from './pages/AboutPage';
import CareerPage from './pages/CareerPage';
import JobApplyPage from './pages/JobApplyPage';
import SendCvPage from './pages/SendCvPage';
import ContactPage from './pages/ContactPage';

// Modals
import VideoModal from './components/VideoModal';
import ContactModal from './components/ContactModal';
import LightboxModal from './components/LightboxModal';
import ProjectModal from './components/ProjectModal';
import PolicyModal from './components/PolicyModal';
import CareerModal from './components/CareerModal';
import AboutModal from './components/AboutModal';

export default function App() {
  // Page routing state ('home' | 'portfolio' | 'project-view' | 'software-engineering' | 'about' | 'career' | 'job-apply' | 'send-cv' | 'contact')
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProjectDetail, setSelectedProjectDetail] = useState(null);
  const [selectedJobRole, setSelectedJobRole] = useState(null);

  // Modal states
  const [activeVideo, setActiveVideo] = useState(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isCareerOpen, setIsCareerOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [lightboxData, setLightboxData] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [policyType, setPolicyType] = useState(null);

  // Listen to hash changes for single-page routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#portfolio') {
        setCurrentPage('portfolio');
      } else if (hash === '#software-engineering' || hash === '#case-study') {
        setCurrentPage('software-engineering');
      } else if (hash === '#project-view') {
        setCurrentPage('project-view');
      } else if (hash === '#about') {
        setCurrentPage('about');
      } else if (hash === '#career') {
        setCurrentPage('career');
      } else if (hash === '#job-apply') {
        setCurrentPage('job-apply');
      } else if (hash === '#send-cv') {
        setCurrentPage('send-cv');
      } else if (hash === '#contact' || hash === '#talk') {
        setCurrentPage('contact');
      } else {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToPortfolio = () => {
    window.location.hash = '#portfolio';
    setCurrentPage('portfolio');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToSoftwareEngineering = () => {
    window.location.hash = '#software-engineering';
    setCurrentPage('software-engineering');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToAbout = () => {
    window.location.hash = '#about';
    setCurrentPage('about');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToCareer = () => {
    window.location.hash = '#career';
    setCurrentPage('career');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToContact = () => {
    window.location.hash = '#contact';
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToJobApply = (role) => {
    setSelectedJobRole(role);
    window.location.hash = '#job-apply';
    setCurrentPage('job-apply');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const navigateToSendCv = () => {
    window.location.hash = '#send-cv';
    setCurrentPage('send-cv');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const navigateToProjectView = (project) => {
    setSelectedProjectDetail(project);
    window.location.hash = '#project-view';
    setCurrentPage('project-view');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const navigateToHome = (targetSection = 'home') => {
    window.location.hash = `#${targetSection}`;
    setCurrentPage('home');
    setTimeout(() => {
      const element = document.getElementById(targetSection);
      if (element) {
        const headerOffset = targetSection === 'home' ? 0 : 60;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 50);
  };

  const scrollToWork = () => {
    const element = document.getElementById('work');
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
    <div className="min-h-screen bg-black text-white selection:bg-brand-red selection:text-white font-sans overflow-x-hidden">
      {/* 1. FIXED Header (Across ALL pages) */}
      <Header
        currentPage={currentPage}
        onOpenContact={navigateToContact}
        onNavigateContact={navigateToContact}
        onOpenCareer={navigateToCareer}
        onNavigateCareer={navigateToCareer}
        onOpenAbout={navigateToAbout}
        onNavigateAbout={navigateToAbout}
        onNavigatePortfolio={navigateToPortfolio}
        onNavigateSoftwareEngineering={navigateToSoftwareEngineering}
        onNavigateHome={navigateToHome}
      />

      {/* 2. Interactive Right Slide Bar (Section Progress & Quick Slide) */}
      <RightSlideBar currentPage={currentPage} />

      {/* Page Content Rendering (Normal Natural Scrolling) */}
      {currentPage === 'contact' ? (
        <ContactPage
          onBackToHome={() => navigateToHome('home')}
          onOpenPolicy={(type) => setPolicyType(type)}
        />
      ) : currentPage === 'job-apply' ? (
        <JobApplyPage
          role={selectedJobRole}
          onBackToCareer={navigateToCareer}
          onOpenPolicy={(type) => setPolicyType(type)}
        />
      ) : currentPage === 'send-cv' ? (
        <SendCvPage
          onBackToCareer={navigateToCareer}
          onOpenPolicy={(type) => setPolicyType(type)}
        />
      ) : currentPage === 'career' ? (
        <CareerPage
          onBackToHome={() => navigateToHome('home')}
          onOpenContact={navigateToContact}
          onApplyRole={(role) => navigateToJobApply(role)}
          onNavigateSendCv={navigateToSendCv}
          onOpenPolicy={(type) => setPolicyType(type)}
        />
      ) : currentPage === 'about' ? (
        <AboutPage
          onBackToHome={() => navigateToHome('home')}
          onOpenContact={navigateToContact}
          onOpenPolicy={(type) => setPolicyType(type)}
        />
      ) : currentPage === 'software-engineering' ? (
        <SoftwareCaseStudyPage
          onBackToPortfolio={navigateToPortfolio}
          onOpenContact={navigateToContact}
          onOpenPolicy={(type) => setPolicyType(type)}
        />
      ) : currentPage === 'project-view' ? (
        <ProjectViewPage
          project={selectedProjectDetail}
          onBackToPortfolio={navigateToPortfolio}
          onPlayVideo={(video) => setActiveVideo(video)}
          onOpenLightbox={(photos, index) => setLightboxData({ photos, index })}
          onOpenPolicy={(type) => setPolicyType(type)}
        />
      ) : currentPage === 'portfolio' ? (
        <PortfolioPage
          onBackToHome={() => navigateToHome('home')}
          onOpenContact={navigateToContact}
          onSelectProject={(project) => setSelectedProject(project)}
          onViewProjectDetail={navigateToProjectView}
          onNavigateSoftwareEngineering={navigateToSoftwareEngineering}
          onOpenPolicy={(type) => setPolicyType(type)}
        />
      ) : (
        <>
          <main>
            {/* 2. Hero Section (id="home") */}
            <Hero
              onOpenPortfolio={navigateToPortfolio}
              onOpenContact={navigateToContact}
              onScrollToWork={scrollToWork}
            />

            {/* 2.5 Featured Agency Showreel Video Section (id="showreel") */}
            <HomeVideoSection onPlayVideo={(video) => setActiveVideo(video)} />

            {/* 3. Our Work Section (id="work") */}
            <Work onSelectProject={(project) => setSelectedProject(project)} />

            {/* 4. Clients Section (id="clients") */}
            <Clients />

            {/* 5. Services Section (id="services") */}
            <Services onSelectService={navigateToContact} />

            {/* 6. Production Section (id="production") */}
            <Production onPlayVideo={(video) => setActiveVideo(video)} />

            {/* 7. Photography Section (id="photography") */}
            <Photography onOpenLightbox={(photos, index) => setLightboxData({ photos, index })} />

            {/* 8. Bottom Call to Action */}
            <CallToAction onOpenContact={navigateToContact} />
          </main>

          {/* 9. Standalone Footer (White Background) */}
          <Footer onOpenPolicy={(type) => setPolicyType(type)} />
        </>
      )}

      {/* Interactive Modals (Shared across all pages) */}
      <VideoModal
        video={activeVideo}
        onClose={() => setActiveVideo(null)}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      {lightboxData && (
        <LightboxModal
          photos={lightboxData.photos}
          initialIndex={lightboxData.index}
          onClose={() => setLightboxData(null)}
        />
      )}

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenContact={navigateToContact}
      />

      <PolicyModal
        type={policyType}
        onClose={() => setPolicyType(null)}
      />

      <CareerModal
        isOpen={isCareerOpen}
        onClose={() => setIsCareerOpen(false)}
      />

      <AboutModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
        onOpenContact={navigateToContact}
      />
    </div>
  );
}
