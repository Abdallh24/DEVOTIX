import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Search, MapPin, Briefcase, Clock, Sparkles, Send } from 'lucide-react';
import Footer from '../components/Footer';
import { useThemeLanguage } from '../context/ThemeLanguageContext';

export default function CareerPage({
  onBackToHome,
  onOpenContact,
  onOpenPolicy,
  onApplyRole,
  onNavigateSendCv
}) {
  const { isRtl, isDark, t } = useThemeLanguage();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDept, setSelectedDept] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [selectedType, setSelectedType] = useState('All');

  const jobRoles = isRtl
    ? [
        {
          id: 'sr-graphic-designer',
          title: 'سينيور جرافيك ديزاينر (Senior Graphic Designer)',
          department: 'فريق الديزاين والإبداع',
          location: 'مصر / هجين',
          type: 'دوام كامل',
          level: 'سينيور (خبرة متقدمة)',
          workplace: 'هجين / بالمقر',
          description: 'بندور على سينيور جرافيك ديزاينر شاطر ينضم لفريقنا ويقود الأفكار البصرية للبراندات والحملات الإعلانية والسوشيال ميديا.'
        },
        {
          id: 'media-buyer',
          title: 'ميديا باير أول (Senior Media Buyer)',
          department: 'الميديا باينج والتسويق',
          location: 'مصر / بالمقر',
          type: 'دوام كامل',
          level: 'متوسط - سينيور',
          workplace: 'بالمقر',
          description: 'إدارة وتوجيه ميزانيات إعلانية كبيرة على ميتا، تيك توك، وجوجل مع تحقيق أعلى عائد ROAS وأفضل نتائج بيع.'
        },
        {
          id: 'video-editor',
          title: 'فيديو إديتور ومونتير محترف',
          department: 'الإنتاج والميديا',
          location: 'عن بُعد / مصر',
          type: 'دوام كامل',
          level: 'خبرة متوسطة',
          workplace: 'عن بُعد (ريموت)',
          description: 'مونتاج إعلانات تجارية سينمائية وريلز سريعة الانتشار باستخدام Premiere و DaVinci و After Effects.'
        },
        {
          id: 'creative-technologist',
          title: 'مطور واجهات وتطبيقات تفاعلية (Frontend Dev)',
          department: 'فريق السوفت وير والويب',
          location: 'مصر / عن بُعد',
          type: 'دوام كامل',
          level: 'سينيور (خبرة متقدمة)',
          workplace: 'هجين / ريموت',
          description: 'بناء مواقع وتطبيقات تفاعلية سريعة وتجارب 3D ثلاثية الأبعاد بـ React و Three.js.'
        }
      ]
    : [
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

    const matchesDept = selectedDept === 'All' || role.department.toUpperCase().includes(selectedDept.toUpperCase());
    const matchesLoc = selectedLocation === 'All' || role.location.toUpperCase().includes(selectedLocation.toUpperCase());
    const matchesType = selectedType === 'All' || role.type.toUpperCase().includes(selectedType.toUpperCase());

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
    <div className="bg-white dark:bg-black text-neutral-900 dark:text-white font-sans selection:bg-brand-red selection:text-white select-none transition-colors duration-200">
      {/* 1. Hero Section */}
      <section id="career-hero" className="min-h-screen flex flex-col justify-center px-6 sm:px-10 lg:px-16 bg-white dark:bg-black text-neutral-900 dark:text-white pt-20 pb-12 transition-colors duration-200">
        <div className="max-w-6xl mx-auto w-full my-auto">
          {/* Back Link */}
          <div className="mb-10">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center space-x-1.5 rtl:space-x-reverse text-sm font-semibold text-neutral-600 dark:text-neutral-400 hover:text-brand-red transition-colors cursor-pointer group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 rtl:group-hover:translate-x-1 transition-transform rtl:rotate-180" />
              <span>{t('nav.backToHome', 'Back to Home')}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left Column: Content */}
            <div className="md:col-span-7">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400 block mb-6">
                DEVOTIX MEDIA / CAREERS
              </span>

              {isRtl ? (
                <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[96px] font-black uppercase tracking-tight text-neutral-950 dark:text-white font-display leading-[0.96] mb-8">
                  اصنع المستقبل
                  <br />
                  معنا اليوم.
                </h1>
              ) : (
                <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[96px] font-black uppercase tracking-tight text-neutral-950 dark:text-white font-display leading-[0.94] mb-8">
                  BUILD WHAT'S
                  <br />
                  NEXT WITH US.
                </h1>
              )}

              {/* Description Block with Red Vertical Line */}
              <div className="border-l-2 rtl:border-l-0 rtl:border-r-2 border-brand-red pl-6 rtl:pl-0 rtl:pr-6 sm:pl-8 rtl:sm:pr-8 py-1 space-y-4 mb-10 max-w-2xl">
                <p className="text-base sm:text-xl md:text-2xl text-neutral-600 dark:text-neutral-300 font-normal leading-relaxed">
                  {isRtl
                    ? 'نجمع بين الاستراتيجيين، المبدعين، المسوقين، المنتجين، المصممين، والمطورين لصناعة أعمال تنقل العلامات التجارية للأمام.'
                    : 'We bring together strategists, creatives, marketers, producers, designers and technologists to build work that moves brands forward.'}
                </p>
                <p className="text-xs sm:text-sm font-black uppercase tracking-[0.2em] text-neutral-950 dark:text-white">
                  {isRtl ? 'عقول مبدعة. تخصصات متنوعة. فريق واحد.' : 'CREATIVE MINDS. DIFFERENT DISCIPLINES. ONE TEAM.'}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                <button
                  onClick={onNavigateSendCv}
                  className="px-8 sm:px-10 py-4 bg-brand-red hover:bg-brand-redHover text-white text-xs sm:text-sm font-extrabold uppercase tracking-widest rounded-md shadow-md flex items-center space-x-2 rtl:space-x-reverse transition-all cursor-pointer"
                >
                  <span>{t('pages.career.sendCv', 'SEND YOUR CV')}</span>
                  <ArrowUpRight className="w-4 h-4 rtl:rotate-[-90deg]" />
                </button>

                <button
                  onClick={scrollToRoles}
                  className="px-8 sm:px-10 py-4 bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 hover:border-brand-red text-neutral-900 dark:text-white text-xs sm:text-sm font-extrabold uppercase tracking-widest rounded-md shadow-sm flex items-center space-x-2 rtl:space-x-reverse transition-all cursor-pointer"
                >
                  <span>{t('pages.career.openRoles', 'VIEW OPEN ROLES')}</span>
                  <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                </button>
              </div>
            </div>

            {/* Right Column: Tall Vertical Portrait Photo */}
            <div className="md:col-span-5 flex justify-center md:justify-end">
              <div className="relative w-full max-w-[360px] aspect-[9/15] max-h-[480px] sm:max-h-[540px] rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-xl bg-neutral-100 dark:bg-neutral-900">
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

      {/* 2. Job Listings Section */}
      <section id="career-roles" className="snap-section min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-white pt-16 pb-6 transition-colors duration-200">
        <div className="max-w-5xl mx-auto w-full my-auto py-4">
          <div className="mb-5 sm:mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-red block mb-1">
                {isRtl ? 'فرص العمل المتاحة' : 'CAREER OPPORTUNITIES'}
              </span>
              <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-neutral-950 dark:text-white font-display">
                {isRtl ? 'ابحث عن دورك القادم.' : 'FIND YOUR NEXT ROLE.'}
              </h2>
            </div>

            <button
              onClick={onNavigateSendCv}
              className="text-xs font-bold text-brand-red hover:underline uppercase tracking-wider flex items-center space-x-1 rtl:space-x-reverse cursor-pointer"
            >
              <span>{isRtl ? 'لم تجد دورك؟ أرسل سيرتك الذاتية' : "Don't see your role? Send CV"}</span>
              <ArrowUpRight className="w-3.5 h-3.5 rtl:rotate-[-90deg]" />
            </button>
          </div>

          {/* Filter Bar */}
          <div className="bg-white dark:bg-neutral-900 p-3 sm:p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 shadow-sm mb-6 flex flex-col md:flex-row md:items-center justify-between gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3 rtl:left-auto rtl:right-3 top-1/2 -translate-y-1/2 text-neutral-400" />
              <input
                type="text"
                placeholder={isRtl ? 'ابحث عن مسمى وظيفي أو مهارة...' : 'Search role, skill, or keyword...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 rtl:pl-3 rtl:pr-9 pr-3 py-1.5 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded text-xs text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:border-brand-red"
              />
            </div>

            {/* Dropdowns */}
            <div className="flex flex-wrap items-center gap-2">
              <select
                value={selectedDept}
                onChange={(e) => setSelectedDept(e.target.value)}
                className="px-2.5 py-1.5 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded text-[11px] font-bold text-neutral-700 dark:text-neutral-200 focus:outline-none cursor-pointer"
              >
                <option value="All">{isRtl ? 'جميع الأقسام' : 'All Departments'}</option>
                <option value="Creative">{isRtl ? 'الإبداع والتصميم' : 'Creative'}</option>
                <option value="Media">{isRtl ? 'التسويق والإعلام' : 'Media'}</option>
                <option value="Production">{isRtl ? 'الإنتاج السينمائي' : 'Production'}</option>
                <option value="Engineering">{isRtl ? 'هندسة البرمجيات' : 'Engineering'}</option>
              </select>

              {(searchQuery || selectedDept !== 'All') && (
                <button
                  onClick={clearFilters}
                  className="text-[10px] font-bold uppercase tracking-wider text-brand-red hover:underline ml-1 rtl:ml-0 rtl:mr-1 cursor-pointer"
                >
                  {isRtl ? 'مسح التصفية' : 'Clear all filters'}
                </button>
              )}
            </div>
          </div>

          {/* Job List */}
          <div className="bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800 shadow-sm divide-y divide-neutral-100 dark:divide-neutral-800/60 overflow-hidden">
            {filteredRoles.length > 0 ? (
              filteredRoles.map((role) => (
                <div
                  key={role.id}
                  onClick={() => onApplyRole && onApplyRole(role)}
                  className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors cursor-pointer group"
                >
                  <div>
                    <h3 className="text-sm sm:text-base font-black uppercase tracking-tight text-neutral-950 dark:text-white font-display group-hover:text-brand-red transition-colors">
                      {role.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-1.5 text-[10px] sm:text-[11px] font-semibold text-neutral-500 dark:text-neutral-400">
                      <span className="flex items-center space-x-1 rtl:space-x-reverse">
                        <Briefcase className="w-3 h-3 text-neutral-400" />
                        <span>{role.department}</span>
                      </span>
                      <span className="flex items-center space-x-1 rtl:space-x-reverse">
                        <MapPin className="w-3 h-3 text-neutral-400" />
                        <span>{role.location}</span>
                      </span>
                      <span className="flex items-center space-x-1 rtl:space-x-reverse">
                        <Clock className="w-3 h-3 text-neutral-400" />
                        <span>{role.type}</span>
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 text-[9px] font-bold">
                        {role.workplace}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onApplyRole && onApplyRole(role);
                    }}
                    className="px-4 py-2 bg-brand-red hover:bg-brand-redHover text-white text-[11px] font-bold uppercase tracking-wider rounded transition-all transform hover:scale-105 flex items-center space-x-1 rtl:space-x-reverse flex-shrink-0 w-fit cursor-pointer shadow-sm"
                  >
                    <span>{t('pages.career.applyNow', 'Apply')}</span>
                    <ArrowRight className="w-3 h-3 rtl:rotate-180" />
                  </button>
                </div>
              ))
            ) : (
              <div className="p-8 text-center text-xs text-neutral-500 dark:text-neutral-400 font-medium">
                {isRtl ? 'لا توجد وظائف تطابق معايير البحث الحالية.' : 'No open positions match your search criteria. Try clearing filters.'}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 3. Culture & Values Section */}
      <section id="career-culture" className="snap-section min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 bg-white dark:bg-black text-neutral-900 dark:text-white pt-16 pb-6 transition-colors duration-200">
        <div className="max-w-6xl mx-auto w-full my-auto py-2">
          <div className="mb-5 sm:mb-6">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-red block mb-1">
              {isRtl ? 'الحياة في ديفوتيكس' : 'LIFE AT DEVOTIX'}
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-neutral-950 dark:text-white font-display leading-tight">
              {isRtl ? (
                <>العمل العظيم يبدأ<br />مع أشخاص عظماء.</>
              ) : (
                <>GOOD WORK STARTS WITH<br />GOOD PEOPLE.</>
              )}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-stretch">
            {/* Left Column: photo */}
            <div className="md:col-span-7">
              <div className="relative w-full aspect-[4/3] max-h-[300px] sm:max-h-[340px] rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-md bg-neutral-100 dark:bg-neutral-900">
                <img
                  src="/assets/career/culture-presentation.png"
                  alt="Devotix Team Presentation"
                  draggable="false"
                  className="w-full h-full object-cover object-center filter grayscale contrast-110"
                />
              </div>
            </div>

            {/* Right Column: Split Stack */}
            <div className="md:col-span-5 flex flex-col justify-between gap-4">
              <div className="relative w-full aspect-[16/9] max-h-[140px] rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow bg-neutral-100 dark:bg-neutral-900">
                <img
                  src="/assets/career/culture-camera.png"
                  alt="Cinema Production Equipment"
                  draggable="false"
                  className="w-full h-full object-cover object-center filter grayscale contrast-110"
                />
              </div>

              <div className="p-5 sm:p-6 rounded-lg bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex flex-col justify-center flex-1">
                <p className="text-sm sm:text-base font-extrabold text-neutral-950 dark:text-white font-display leading-snug">
                  {isRtl ? (
                    <>"حر<span className="text-brand-red">ي</span>ة استكش<span className="text-brand-red">ا</span>ف الأفك<span className="text-brand-red">ا</span>ر حتى نص<span className="text-brand-red">ل</span> للحل العبق<span className="text-brand-red">ر</span>ي."</>
                  ) : (
                    <>"The fr<span className="text-brand-red">ee</span>dom to expl<span className="text-brand-red">o</span>re b<span className="text-brand-red">a</span>d id<span className="text-brand-red">ea</span>s unt<span className="text-brand-red">i</span>l w<span className="text-brand-red">e</span> f<span className="text-brand-red">i</span>nd th<span className="text-brand-red">e</span> br<span className="text-brand-red">illi</span>ant on<span className="text-brand-red">e</span>."</>
                  )}
                </p>
                <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mt-2 block">
                  — DEVOTIX CREATIVE MANIFESTO
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Perks & Benefits Section */}
      <section id="career-perks" className="min-h-screen flex flex-col justify-center px-6 sm:px-10 lg:px-16 bg-neutral-900 dark:bg-[#0c0c0e] text-white pt-16 pb-12 transition-colors duration-200">
        <div className="max-w-6xl mx-auto w-full my-auto py-8">
          <div className="mb-8 text-center sm:text-left rtl:sm:text-right">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-red block mb-1">
              {isRtl ? 'لماذا تنضم إلينا' : 'WHY JOIN DEVOTIX'}
            </span>
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white font-display">
              {isRtl ? 'المزايا والتأثير' : 'PERKS & IMPACT'}
            </h2>
          </div>

          {/* 4-Column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="space-y-2.5 p-4 rounded-lg bg-neutral-800/80 dark:bg-neutral-900/60 border border-neutral-700/60 dark:border-neutral-800 text-left rtl:text-right">
              <img src="/assets/career/icon-freedom.png" alt="Creative Freedom" className="w-6 h-6 object-contain" />
              <h3 className="text-sm font-black uppercase tracking-tight text-white font-display">
                {isRtl ? 'الحرية الإبداعية' : 'Creative Freedom'}
              </h3>
              <p className="text-[11px] text-neutral-300 dark:text-neutral-400 font-medium leading-relaxed">
                {isRtl
                  ? 'استقلالية كاملة لتجاوز المألوف، والتجربة بأفكار جريئة، وبناء مشاريع تفخر بها.'
                  : "Full autonomy to push boundaries, experiment with raw ideas, and build work you're truly proud of."}
              </p>
            </div>

            <div className="space-y-2.5 p-4 rounded-lg bg-neutral-800/80 dark:bg-neutral-900/60 border border-neutral-700/60 dark:border-neutral-800 text-left rtl:text-right">
              <img src="/assets/career/icon-discipline.png" alt="Cross-Discipline" className="w-6 h-6 object-contain" />
              <h3 className="text-sm font-black uppercase tracking-tight text-white font-display">
                {isRtl ? 'تعدد التخصصات' : 'Cross-Discipline'}
              </h3>
              <p className="text-[11px] text-neutral-300 dark:text-neutral-400 font-medium leading-relaxed">
                {isRtl
                  ? 'العمل جنباً إلى جنب مع خبراء في ثلاثي الأبعاد، الهويات البصرية، الإنتاج السينمائي، وهندسة البرمجيات.'
                  : 'Work shoulder-to-shoulder with experts across 3D CGI, branding, cinema film, and software architecture.'}
              </p>
            </div>

            <div className="space-y-2.5 p-4 rounded-lg bg-neutral-800/80 dark:bg-neutral-900/60 border border-neutral-700/60 dark:border-neutral-800 text-left rtl:text-right">
              <img src="/assets/career/icon-projects.png" alt="Real Projects" className="w-6 h-6 object-contain" />
              <h3 className="text-sm font-black uppercase tracking-tight text-white font-display">
                {isRtl ? 'مشاريع حقيقية مؤثرة' : 'Real Projects'}
              </h3>
              <p className="text-[11px] text-neutral-300 dark:text-neutral-400 font-medium leading-relaxed">
                {isRtl
                  ? 'تأثير مباشر على إطلاق علامات كبرى، وحملات سيارات فاخرة، وتطبيقات تكنولوجية متطورة.'
                  : 'Immediate, hands-on impact on global brand launches, luxury automotive campaigns, and tech platforms.'}
              </p>
            </div>

            <div className="space-y-2.5 p-4 rounded-lg bg-neutral-800/80 dark:bg-neutral-900/60 border border-neutral-700/60 dark:border-neutral-800 text-left rtl:text-right">
              <img src="/assets/career/icon-growth.png" alt="Growth" className="w-6 h-6 object-contain" />
              <h3 className="text-sm font-black uppercase tracking-tight text-white font-display">
                {isRtl ? 'نمو مهني متسارع' : 'Growth'}
              </h3>
              <p className="text-[11px] text-neutral-300 dark:text-neutral-400 font-medium leading-relaxed">
                {isRtl
                  ? 'إرشاد وتوجيه مستمر، وميزانيات تعلم وأجهزة، وفرص ترقية سريعة للمتميزين.'
                  : 'Structured mentorship, generous hardware & learning budgets, and rapid trajectory for top performers.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Footer */}
      <Footer onOpenPolicy={onOpenPolicy} />
    </div>
  );
}
