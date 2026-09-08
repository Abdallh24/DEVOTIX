import React, { useState, useEffect } from 'react';
import TitleAccent from './TitleAccent';
import { Play, X, Film, ArrowUpRight } from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';

// 4 Distinct Video Galleries, matching the 3-column portal design
const PRODUCTION_GALLERIES = [
  {
    id: 'automotive-cinema',
    coverId: 'cover-1',
    title: 'AUTOMOTIVE & CGI FILMS',
    titleAr: 'أفلام وإعلانات السيارات والـ 3D CGI',
    category: 'COMMERCIAL CINEMA • 4K',
    categoryAr: 'إنتاج سينمائي • 4K',
    tag: 'GALLERY 1 • 4 FILMS',
    coverImage: '/assets/production/featured-car.png',
    description: 'Cinema-grade commercial productions, high-speed camera tracking, and photorealistic 3D CGI automotive films.',
    descriptionAr: 'تصوير إعلانات سينمائية للسيارات بكاميرات فائقة السرعة وتتبع حركي ومحاكاة 3D واقعية متطورة.',
    videos: [
      {
        id: 'neon-echoes',
        title: 'NEON ECHOES',
        category: 'AUTOMOTIVE COMMERCIAL • 4K CINEMA',
        duration: '02:45',
        client: 'LAMBORGHINI CONCEPT',
        image: '/assets/production/featured-car.png',
        videoSrc: '/assets/production/video2.mp4',
        description: 'An executive cinematic cut shot with high-speed camera tracking and anamorphic prime lenses.',
      },
      {
        id: 'hyperion-gt',
        title: 'HYPERION GT',
        category: '3D CGI SIMULATION',
        duration: '02:30',
        client: 'DEVOTIX CINEMA',
        image: '/assets/production/featured-car.png',
        videoSrc: '/assets/production/video2.mp4',
        description: 'Photorealistic CGI automotive simulation rendered in Unreal Engine 5 with dynamic ray tracing.',
      },
      {
        id: 'kinetic-drive',
        title: 'KINETIC DRIVE',
        category: 'BRAND COMMERCIAL',
        duration: '01:45',
        client: 'AURA SOUND',
        image: '/assets/production/kinetic.png',
        videoSrc: '/assets/production/video2.mp4',
        description: 'High-energy motion graphics combined with precision engine sound design.',
      },
      {
        id: 'apex-speed',
        title: 'MONOLITH RACING',
        category: 'TRACK FILM',
        duration: '01:55',
        client: 'MONOLITH',
        image: '/assets/production/apex.png',
        videoSrc: '/assets/production/video2.mp4',
        description: 'Night track filming with custom chase car camera rig and neon atmosphere lighting.',
      },
    ],
  },
  {
    id: 'tech-hardware',
    coverId: 'cover-2',
    title: 'TECH & HARDWARE SHOWCASE',
    titleAr: 'أفلام التقنية والأجهزة الذكية',
    category: 'VFX & INTERACTIVE',
    categoryAr: 'إنتاج تقني وتفاعلي',
    tag: 'GALLERY 2 • 4 FILMS',
    coverImage: '/assets/production/spectrum.png',
    description: 'Futuristic product launches, robotic arm macro cinematography, and clean industrial lighting aesthetics.',
    descriptionAr: 'تصوير احترافي لإطلاق المنتجات التقنية، روبوتات التصوير الدقيق، والإضاءات المعمارية الحديثة.',
    videos: [
      {
        id: 'spectrum-core',
        title: 'SPECTRUM CORE',
        category: 'HARDWARE TEASER',
        duration: '01:20',
        client: 'NEXUS HARDWARE',
        image: '/assets/production/spectrum.png',
        videoSrc: '/assets/production/video2.mp4',
        description: 'Macro robotic arm cinematography showcasing internal semiconductor architecture.',
      },
      {
        id: 'lumina-vision',
        title: 'LUMINA VISION',
        category: 'PRODUCT FILM',
        duration: '01:40',
        client: 'LUMINA OPTRONICS',
        image: '/assets/production/kinetic.png',
        videoSrc: '/assets/production/video2.mp4',
        description: 'Optical lens engineering breakdown with transparent holographic overlays.',
      },
      {
        id: 'quantum-link',
        title: 'QUANTUM LINK',
        category: 'COMMERCIAL VFX',
        duration: '02:10',
        client: 'QUANTUM NETWORKS',
        image: '/assets/production/featured-car.png',
        videoSrc: '/assets/production/video2.mp4',
        description: 'Global cloud connectivity visualized through fluid particle physics animations.',
      },
      {
        id: 'titan-rig',
        title: 'TITAN RIG',
        category: 'INDUSTRIAL LAUNCH',
        duration: '01:15',
        client: 'TITAN ROBOTICS',
        image: '/assets/production/apex.png',
        videoSrc: '/assets/production/video2.mp4',
        description: 'Heavy machinery precision engineering rendered in dramatic dark warehouse aesthetics.',
      },
    ],
  },
  {
    id: 'fashion-lifestyle',
    coverId: 'cover-3',
    title: 'FASHION & LIFESTYLE EDITORIALS',
    titleAr: 'أفلام الموضة والأزياء الراقية',
    category: 'EDITORIAL & DIRECTING',
    categoryAr: 'إخراج وأزياء راقية',
    tag: 'GALLERY 3 • 4 FILMS',
    coverImage: '/assets/production/artisan.png',
    description: 'High-end runway visual mood films, monochrome luxury aesthetics, and cinematic fashion commercial direction.',
    descriptionAr: 'أفلام استعراضية لعروض الأزياء الراقية واللايف ستايل بهوية بصرية مميزة وإخراج سينمائي.',
    videos: [
      {
        id: 'vogue-noir',
        title: 'VOGUE NOIR',
        category: 'FASHION EDITORIAL',
        duration: '02:00',
        client: 'HAUTE COUTURE',
        image: '/assets/production/vogue.png',
        videoSrc: '/assets/production/video2.mp4',
        description: 'High-fashion editorial cut shot on Arri Alexa with vintage prime lenses and dynamic strobe lighting.',
      },
      {
        id: 'aura-atelier',
        title: 'AURA ATELIER',
        category: 'RUNWAY FILM',
        duration: '01:30',
        client: 'AURA PARIS',
        image: '/assets/production/artisan.png',
        videoSrc: '/assets/production/video2.mp4',
        description: 'Runway movement study featuring custom choreography and ambient acoustic score.',
      },
      {
        id: 'monochrome-line',
        title: 'MONOCHROME LINE',
        category: 'LIFESTYLE CAMPAIGN',
        duration: '02:15',
        client: 'STUDIO NOIR',
        image: '/assets/production/vogue.png',
        videoSrc: '/assets/production/video2.mp4',
        description: 'Minimalist architectural wardrobe exploration captured in 35mm film grain format.',
      },
      {
        id: 'solstice-silk',
        title: 'SOLSTICE SILK',
        category: 'LUXURY TEASER',
        duration: '01:50',
        client: 'SOLSTICE',
        image: '/assets/production/artisan.png',
        videoSrc: '/assets/production/video2.mp4',
        description: 'Slow-motion silk fabric flow dynamics filmed with Phantom Flex 4K high-speed camera.',
      },
    ],
  },
  {
    id: 'culinary-sensory',
    coverId: 'cover-4',
    title: 'FOOD & BEVERAGE SENSORY FILMS',
    titleAr: 'أفلام الأطعمة والمشروبات الحسية',
    category: 'SENSORY MACRO • 1000 FPS',
    categoryAr: 'تصوير بطيء وفود سينما',
    tag: 'GALLERY 4 • 4 FILMS',
    coverImage: '/assets/production/the-peak.png',
    description: 'High-speed culinary cinematography, liquid collision simulations, sizzling grill textures, and sensory sound design.',
    descriptionAr: 'تصوير احترافي للأطعمة والمشروبات بحركة بطيئة 1000 إطار بالثانية ومؤثرات صوتية حسية تفتح الشهية.',
    videos: [
      {
        id: 'kinetic-fizz',
        title: 'KINETIC FIZZ',
        category: 'BEVERAGE CINEMA',
        duration: '01:10',
        client: 'SPARK BEVERAGES',
        image: '/assets/production/kinetic.png',
        videoSrc: '/assets/production/video2.mp4',
        description: 'Macro carbonation bubbles and ice splash captured at 1000 frames per second.',
      },
      {
        id: 'crust-ember',
        title: 'CRUST & EMBER',
        category: 'CULINARY ART',
        duration: '01:45',
        client: 'MELTIX BURGERS',
        image: '/assets/production/the-peak.png',
        videoSrc: '/assets/production/video2.mp4',
        description: 'Flame-seared wagyu patties with cascading molten cheddar and crisp artisanal brioche.',
      },
      {
        id: 'velvet-roast',
        title: 'VELVET ROAST',
        category: 'ESPRESSO FILM',
        duration: '02:00',
        client: 'NOIR COFFEE',
        image: '/assets/production/the-peak.png',
        videoSrc: '/assets/production/video2.mp4',
        description: 'Artisanal coffee extraction, golden crema texture swirls, and rich aromatic steam reveals.',
      },
      {
        id: 'artisan-dough',
        title: 'ARTISAN SOURDOUGH',
        category: 'BAKERY CINEMA',
        duration: '01:35',
        client: 'LE PAIN ARTISAN',
        image: '/assets/production/apex.png',
        videoSrc: '/assets/production/video2.mp4',
        description: 'Sensory flour dusting, slow dough fermentation, and steaming golden sourdough crust reveals.',
      },
    ],
  },
];

export default function Production({ onPlayVideo }) {
  const { isRtl, t } = useThemeLanguage();
  const [selectedGallery, setSelectedGallery] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedGallery(null);
      }
    };
    if (selectedGallery) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedGallery]);

  const cover1 = PRODUCTION_GALLERIES[0];
  const cover2 = PRODUCTION_GALLERIES[1];
  const cover3 = PRODUCTION_GALLERIES[2];
  const cover4 = PRODUCTION_GALLERIES[3];

  const handleOpenGallery = (gallery) => {
    setSelectedGallery(gallery);
  };

  const handleVideoClick = (video) => {
    if (onPlayVideo) {
      onPlayVideo(video);
    }
  };

  return (
    <section
      id="production"
      className="snap-section relative flex flex-col justify-center section-alt-b px-3.5 sm:px-6 lg:px-8 pt-12 pb-10 sm:pt-16 sm:pb-14 select-none overflow-hidden"
    >
      {/* Ambient cinema backlight glow orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-brand-red/8 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[400px] h-[300px] bg-red-950/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-6 sm:mb-8 pb-3 border-b border-neutral-300/80 dark:border-white/10">
          <TitleAccent type="production" />
          <p className="mt-2 text-[10px] sm:text-[11.5px] text-neutral-600 dark:text-neutral-400 font-semibold uppercase tracking-widest leading-relaxed">
            {t('production.subtitle', 'Cinematic commercial films, corporate brand documentaries, and high-impact visual productions.')}
          </p>
        </div>

        {/* 3-Column Production Covers Layout (2x2 Grid on Mobile | 3-Column on Desktop) */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-2.5 sm:gap-4 lg:gap-5 items-stretch">
          {/* Cover 1: Left Tall Vertical Card on Desktop / Top-Left Card on Mobile (Portal to Gallery 1) */}
          <div
            onClick={() => handleOpenGallery(cover1)}
            className="md:col-span-4 group relative rounded-lg sm:rounded-xl overflow-hidden bg-neutral-950 border border-neutral-200/80 dark:border-white/10 cursor-pointer transition-all duration-300 hover:border-brand-red/60 hover:shadow-xl hover:-translate-y-0.5 flex flex-col h-[180px] sm:h-[220px] md:h-[450px]"
          >
            <img
              src={cover1.coverImage}
              alt={cover1.title}
              className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />

            {/* Gallery Badge Top Right */}
            <div className="absolute top-2 sm:top-3 right-2 sm:right-3 rtl:right-auto rtl:left-2 rtl:sm:left-3 z-10">
              <div className="flex items-center space-x-1 rtl:space-x-reverse px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-white text-[7px] sm:text-[8.5px] font-bold uppercase tracking-wider group-hover:bg-brand-red group-hover:border-brand-red transition-all shadow">
                <Film className="w-2 sm:w-2.5 h-2 sm:h-2.5 text-white" />
                <span className="hidden xs:inline">{t('production.viewGallery', 'GALLERY')}</span>
                <span className="xs:hidden">{isRtl ? 'معرض' : 'VIEW'}</span>
                <ArrowUpRight className="w-2 sm:w-2.5 h-2 sm:h-2.5 text-white rtl:rotate-[-90deg]" />
              </div>
            </div>

            {/* Center Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
              <div className="w-9 h-9 sm:w-11 sm:h-11 md:w-14 md:h-14 rounded-full bg-brand-red text-white flex items-center justify-center shadow-xl shadow-red-600/40 transition-all duration-300 transform group-hover:scale-110">
                <Play className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 fill-white translate-x-0.5 rtl:-translate-x-0.5" />
              </div>
            </div>

            {/* Cover Metadata Bottom */}
            <div className="absolute bottom-2 sm:bottom-3 left-2.5 sm:left-3.5 right-2.5 sm:right-3.5 z-10">
              <span className="text-[6.5px] sm:text-[7.5px] md:text-[8px] font-bold uppercase tracking-widest text-brand-red block mb-0.5">
                {isRtl ? cover1.categoryAr : cover1.category}
              </span>
              <h4 className="text-[10px] sm:text-[11px] md:text-[13px] font-black uppercase tracking-tight text-white font-display line-clamp-1">
                {isRtl ? cover1.titleAr : cover1.title}
              </h4>
              <p className="text-[7.5px] sm:text-[8.5px] md:text-[9px] text-neutral-300 font-medium mt-0.5 flex items-center gap-1 group-hover:text-white transition-colors">
                <span>{cover1.videos.length} {t('production.videoCount', 'VIDEOS')}</span>
                <span className="hidden xs:inline">• {isRtl ? 'انقر للمشاهدة' : 'Click to View'}</span>
              </p>
            </div>
          </div>

          {/* Center Column: 2 Stacked Horizontal Cards on Desktop / Right Top & Left Bottom Cards on Mobile */}
          <div className="contents md:flex md:col-span-4 md:flex-col md:gap-3 sm:md:gap-4 lg:md:gap-5 md:justify-between md:h-[450px]">
            {/* Cover 2: Top-Right Card on Mobile / Top Center Card on Desktop (Portal to Gallery 2) */}
            <div
              onClick={() => handleOpenGallery(cover2)}
              className="group relative rounded-lg sm:rounded-xl overflow-hidden bg-neutral-950 border border-neutral-800/80 cursor-pointer transition-all duration-300 hover:border-brand-red/60 hover:shadow-lg flex flex-col h-[180px] sm:h-[220px] md:h-auto md:flex-1 min-h-0"
            >
              <img
                src={cover2.coverImage}
                alt={cover2.title}
                className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />

              {/* Gallery Badge Top Right */}
              <div className="absolute top-2 sm:top-2.5 right-2 sm:right-2.5 rtl:right-auto rtl:left-2 rtl:sm:left-2.5 z-10">
                <div className="flex items-center space-x-1 rtl:space-x-reverse px-2 py-0.5 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-white text-[7px] sm:text-[7.5px] font-bold uppercase tracking-wider group-hover:bg-brand-red group-hover:border-brand-red transition-all shadow">
                  <Film className="w-2 sm:w-2.5 h-2 sm:h-2.5" />
                  <span className="hidden xs:inline">{t('production.viewGallery', 'GALLERY')}</span>
                  <span className="xs:hidden">{isRtl ? 'معرض' : 'VIEW'}</span>
                  <ArrowUpRight className="w-2 h-2 rtl:rotate-[-90deg]" />
                </div>
              </div>

              {/* Center Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-brand-red text-white flex items-center justify-center shadow-lg shadow-red-600/40 transition-all duration-300 transform group-hover:scale-110">
                  <Play className="w-4 h-4 fill-white translate-x-0.5 rtl:-translate-x-0.5" />
                </div>
              </div>

              {/* Cover Metadata Bottom */}
              <div className="absolute bottom-2 sm:bottom-2.5 left-2.5 sm:left-3 right-2.5 sm:right-3 z-10">
                <span className="text-[6.5px] sm:text-[7.5px] md:text-[8px] font-bold uppercase tracking-widest text-brand-red block mb-0.5">
                  {isRtl ? cover2.categoryAr : cover2.category}
                </span>
                <h4 className="text-[10px] sm:text-[10.5px] md:text-[12px] font-black uppercase tracking-tight text-white font-display line-clamp-1">
                  {isRtl ? cover2.titleAr : cover2.title}
                </h4>
                <p className="text-[7.5px] sm:text-[8.5px] text-neutral-300 font-medium mt-0.5 flex items-center gap-1 group-hover:text-white transition-colors">
                  <span>{cover2.videos.length} {t('production.videoCount', 'VIDEOS')}</span>
                  <span className="hidden xs:inline">• {isRtl ? 'انقر للمشاهدة' : 'Click to View'}</span>
                </p>
              </div>
            </div>

            {/* Cover 3: Bottom-Left Card on Mobile / Bottom Center Card on Desktop (Portal to Gallery 3) */}
            <div
              onClick={() => handleOpenGallery(cover3)}
              className="group relative rounded-lg sm:rounded-xl overflow-hidden bg-neutral-950 border border-neutral-800/80 cursor-pointer transition-all duration-300 hover:border-brand-red/60 hover:shadow-lg flex flex-col h-[180px] sm:h-[220px] md:h-auto md:flex-1 min-h-0"
            >
              <img
                src={cover3.coverImage}
                alt={cover3.title}
                className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />

              {/* Gallery Badge Top Right */}
              <div className="absolute top-2 sm:top-2.5 right-2 sm:right-2.5 rtl:right-auto rtl:left-2 rtl:sm:left-2.5 z-10">
                <div className="flex items-center space-x-1 rtl:space-x-reverse px-2 py-0.5 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-white text-[7px] sm:text-[7.5px] font-bold uppercase tracking-wider group-hover:bg-brand-red group-hover:border-brand-red transition-all shadow">
                  <Film className="w-2 sm:w-2.5 h-2 sm:h-2.5" />
                  <span className="hidden xs:inline">{t('production.viewGallery', 'GALLERY')}</span>
                  <span className="xs:hidden">{isRtl ? 'معرض' : 'VIEW'}</span>
                  <ArrowUpRight className="w-2 h-2 rtl:rotate-[-90deg]" />
                </div>
              </div>

              {/* Center Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-brand-red text-white flex items-center justify-center shadow-lg shadow-red-600/40 transition-all duration-300 transform group-hover:scale-110">
                  <Play className="w-4 h-4 fill-white translate-x-0.5 rtl:-translate-x-0.5" />
                </div>
              </div>

              {/* Cover Metadata Bottom */}
              <div className="absolute bottom-2 sm:bottom-2.5 left-2.5 sm:left-3 right-2.5 sm:right-3 z-10">
                <span className="text-[6.5px] sm:text-[7.5px] md:text-[8px] font-bold uppercase tracking-widest text-brand-red block mb-0.5">
                  {isRtl ? cover3.categoryAr : cover3.category}
                </span>
                <h4 className="text-[10px] sm:text-[10.5px] md:text-[12px] font-black uppercase tracking-tight text-white font-display line-clamp-1">
                  {isRtl ? cover3.titleAr : cover3.title}
                </h4>
                <p className="text-[7.5px] sm:text-[8.5px] text-neutral-300 font-medium mt-0.5 flex items-center gap-1 group-hover:text-white transition-colors">
                  <span>{cover3.videos.length} {t('production.videoCount', 'VIDEOS')}</span>
                  <span className="hidden xs:inline">• {isRtl ? 'انقر للمشاهدة' : 'Click to View'}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Cover 4: Right Tall Vertical Card on Desktop / Bottom-Right Card on Mobile (Portal to Gallery 4) */}
          <div
            onClick={() => handleOpenGallery(cover4)}
            className="md:col-span-4 group relative rounded-lg sm:rounded-xl overflow-hidden bg-neutral-950 border border-neutral-800/80 cursor-pointer transition-all duration-300 hover:border-brand-red/60 hover:shadow-xl flex flex-col h-[180px] sm:h-[220px] md:h-[450px]"
          >
            <img
              src={cover4.coverImage}
              alt={cover4.title}
              className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />

            {/* Gallery Badge Top Right */}
            <div className="absolute top-2 sm:top-3 right-2 sm:right-3 rtl:right-auto rtl:left-2 rtl:sm:left-3 z-10">
              <div className="flex items-center space-x-1 rtl:space-x-reverse px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-white text-[7px] sm:text-[8.5px] font-bold uppercase tracking-wider group-hover:bg-brand-red group-hover:border-brand-red transition-all shadow">
                <Film className="w-2 sm:w-2.5 h-2 sm:h-2.5 text-white" />
                <span className="hidden xs:inline">{t('production.viewGallery', 'GALLERY')}</span>
                <span className="xs:hidden">{isRtl ? 'معرض' : 'VIEW'}</span>
                <ArrowUpRight className="w-2.5 h-2.5 text-white rtl:rotate-[-90deg]" />
              </div>
            </div>

            {/* Center Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
              <div className="w-9 h-9 sm:w-11 sm:h-11 md:w-14 md:h-14 rounded-full bg-brand-red text-white flex items-center justify-center shadow-xl shadow-red-600/40 transition-all duration-300 transform group-hover:scale-110">
                <Play className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 fill-white translate-x-0.5 rtl:-translate-x-0.5" />
              </div>
            </div>

            {/* Cover Metadata Bottom */}
            <div className="absolute bottom-2 sm:bottom-3 left-2.5 sm:left-3.5 right-2.5 sm:right-3.5 z-10">
              <span className="text-[6.5px] sm:text-[7.5px] md:text-[8px] font-bold uppercase tracking-widest text-brand-red block mb-0.5">
                {isRtl ? cover4.categoryAr : cover4.category}
              </span>
              <h4 className="text-[10px] sm:text-[11px] md:text-[13px] font-black uppercase tracking-tight text-white font-display line-clamp-1">
                {isRtl ? cover4.titleAr : cover4.title}
              </h4>
              <p className="text-[7.5px] sm:text-[8.5px] md:text-[9px] text-neutral-300 font-medium mt-0.5 flex items-center gap-1 group-hover:text-white transition-colors">
                <span>{cover4.videos.length} {t('production.videoCount', 'VIDEOS')}</span>
                <span className="hidden xs:inline">• {isRtl ? 'انقر للمشاهدة' : 'Click to View'}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Video Gallery Modal: Opens when any of the 4 covers is clicked */}
      {selectedGallery && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 lg:p-8 bg-black/90 backdrop-blur-xl animate-fadeIn">
          {/* Backdrop click to close */}
          <div
            className="absolute inset-0 cursor-pointer"
            onClick={() => setSelectedGallery(null)}
          />

          {/* Modal Content Window */}
          <div className="relative z-10 w-full max-w-6xl max-h-[90vh] bg-neutral-950 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col text-white">
            {/* Gallery Modal Header */}
            <div className="px-5 sm:px-7 py-4 sm:py-5 border-b border-neutral-800 bg-[#0c0c0e] flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse mb-1">
                  <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
                  <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest text-brand-red font-display">
                    {isRtl ? selectedGallery.categoryAr : selectedGallery.category}
                  </span>
                  <span className="text-neutral-500">•</span>
                  <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                    {selectedGallery.videos.length} {isRtl ? 'أفلام سينمائية' : 'PRODUCTION FILMS'}
                  </span>
                </div>

                <h3 className="text-lg sm:text-2xl font-black uppercase tracking-tight text-white font-display">
                  {isRtl ? selectedGallery.titleAr : selectedGallery.title}
                </h3>
                <p className="text-xs text-neutral-400 font-medium mt-1 max-w-2xl hidden sm:block">
                  {isRtl ? selectedGallery.descriptionAr : selectedGallery.description}
                </p>
              </div>

              {/* Gallery Switcher Tabs & Close Button */}
              <div className="flex items-center space-x-2 sm:space-x-3 rtl:space-x-reverse flex-shrink-0">
                {/* Quick Gallery Pills */}
                <div className="hidden lg:flex items-center space-x-1.5 rtl:space-x-reverse p-1 bg-black/60 rounded-xl border border-neutral-800">
                  {PRODUCTION_GALLERIES.map((gal, idx) => (
                    <button
                      key={gal.id}
                      onClick={() => setSelectedGallery(gal)}
                      className={`px-2.5 py-1 rounded-lg text-[9px] font-bold uppercase tracking-wider transition-all ${
                        selectedGallery.id === gal.id
                          ? 'bg-brand-red text-white shadow-sm'
                          : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
                      }`}
                    >
                      {isRtl ? `معرض ${idx + 1}` : `Gallery ${idx + 1}`}
                    </button>
                  ))}
                </div>

                {/* Close Modal Button */}
                <button
                  onClick={() => setSelectedGallery(null)}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-neutral-900 hover:bg-brand-red text-neutral-400 hover:text-white border border-neutral-800 flex items-center justify-center transition-all cursor-pointer"
                  aria-label="Close Gallery"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Gallery Videos Professional Grid */}
            <div className="p-4 sm:p-6 lg:p-8 overflow-y-auto max-h-[calc(90vh-140px)] bg-neutral-950">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                {selectedGallery.videos.map((video) => (
                  <div
                    key={video.id}
                    onClick={() => handleVideoClick(video)}
                    className="group relative rounded-xl overflow-hidden bg-[#0d0d10] border border-neutral-800/90 hover:border-brand-red/60 transition-all duration-300 cursor-pointer flex flex-col shadow-md hover:shadow-red-950/20"
                  >
                    {/* Video Thumbnail Screen */}
                    <div className="relative aspect-video w-full overflow-hidden bg-neutral-900">
                      <img
                        src={video.image}
                        alt={video.title}
                        className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                      {/* Center Play Button Icon Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-11 h-11 rounded-full bg-brand-red text-white flex items-center justify-center shadow-xl shadow-red-600/40 transition-transform duration-300 transform group-hover:scale-110">
                          <Play className="w-4 h-4 fill-white translate-x-0.5 rtl:-translate-x-0.5" />
                        </div>
                      </div>

                      {/* Top Badges */}
                      <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
                        <span className="px-2 py-0.5 bg-black/80 backdrop-blur-md rounded text-[8px] font-extrabold uppercase tracking-widest text-white border border-white/10">
                          4K CINEMA
                        </span>
                        <span className="px-2 py-0.5 bg-black/80 backdrop-blur-md rounded text-[8px] font-mono font-bold uppercase tracking-wider text-neutral-300 border border-white/10">
                          {video.duration}
                        </span>
                      </div>
                    </div>

                    {/* Video Card Content */}
                    <div className="p-3.5 sm:p-4 flex flex-col justify-between flex-1 bg-[#0e0e12]">
                      <div>
                        <div className="flex items-center justify-between gap-1 mb-1">
                          <span className="text-[8px] font-bold uppercase tracking-widest text-brand-red truncate">
                            {video.client}
                          </span>
                        </div>
                        <h4 className="text-xs sm:text-sm font-black uppercase tracking-tight text-white group-hover:text-brand-red transition-colors font-display line-clamp-1">
                          {video.title}
                        </h4>
                        <p className="text-[10px] text-neutral-400 font-medium mt-1 line-clamp-2 leading-relaxed">
                          {video.description}
                        </p>
                      </div>

                      {/* Watch Video Action Link */}
                      <div className="mt-3 pt-2.5 border-t border-neutral-800/80 flex items-center justify-between text-[9px] font-bold uppercase tracking-wider text-neutral-400 group-hover:text-brand-red transition-colors">
                        <span>{t('production.watchFilm', 'WATCH FILM')}</span>
                        <ArrowUpRight className="w-3 h-3 text-brand-red rtl:rotate-[-90deg]" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery Modal Footer */}
            <div className="px-6 py-3 bg-[#0a0a0c] border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-400">
              <span className="text-[10px] uppercase tracking-wider font-semibold">
                {isRtl ? 'إنتاج وحدة السينما الداخلية في وكالة ديفوتيكس ميديا' : 'Produced by Devotix Media In-House Cinema Unit'}
              </span>
              <button
                onClick={() => setSelectedGallery(null)}
                className="px-4 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white text-[10px] font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                {t('modals.close', 'Close Gallery')}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
