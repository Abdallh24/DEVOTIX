import React, { useState, useEffect, useRef } from 'react';
import { X, MessageCircle, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';

export default function FloatingWhatsApp() {
  const { isRtl, t } = useThemeLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const branches = [
    {
      id: 'egypt',
      country: isRtl ? 'فرع مصر' : 'Egypt Studio',
      flag: '🇪🇬',
      location: isRtl ? 'القاهرة / التجمع الخامس' : 'Cairo / New Cairo',
      phoneDisplay: '+20 101 018 5181',
      link: 'https://wa.me/201010185181?text=' + encodeURIComponent(isRtl ? 'مرحباً ديفوتيكس، أود الاستفسار عن خدماتكم الإبداعية في مصر.' : 'Hello Devotix, I would like to inquire about your creative services in Egypt.'),
    },
    {
      id: 'saudi',
      country: isRtl ? 'فرع السعودية' : 'Saudi Arabia Branch',
      flag: '🇸🇦',
      location: isRtl ? 'الرياض / المملكة' : 'Riyadh / KSA',
      phoneDisplay: '+966 50 000 0000',
      link: 'https://wa.me/201010185181?text=' + encodeURIComponent(isRtl ? 'مرحباً ديفوتيكس، أود الاستفسار عن خدماتكم الإبداعية في السعودية.' : 'Hello Devotix, I would like to inquire about your creative services in Saudi Arabia.'),
    },
  ];

  return (
    <div
      ref={dropdownRef}
      className={`fixed bottom-4 sm:bottom-6 ${isRtl ? 'right-3 sm:right-8' : 'left-3 sm:left-8'} z-50 select-none transition-all duration-300`}
    >
      {/* WhatsApp Branches Popup Card */}
      {isOpen && (
        <div className={`absolute bottom-16 ${isRtl ? 'right-0' : 'left-0'} w-80 sm:w-88 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-2xl overflow-hidden animate-scaleUp text-neutral-900 dark:text-white mb-2`}>
          {/* Header */}
          <div className="bg-[#075E54] text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <div className="relative w-10 h-10 rounded-full bg-white/10 flex items-center justify-center p-1.5 border border-white/20">
                <img
                  src="/assets/contact/WhatsApp.png"
                  alt="WhatsApp Logo"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    if (e.target.nextSibling) e.target.nextSibling.style.display = 'block';
                  }}
                />
                <MessageCircle className="w-5 h-5 text-white hidden" />
                <span className={`absolute bottom-0 ${isRtl ? 'left-0' : 'right-0'} w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#075E54]`} />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-black tracking-tight uppercase font-display">
                  {isRtl ? 'تواصل معنا عبر واتساب' : 'Chat via WhatsApp'}
                </h4>
                <p className="text-[10px] text-emerald-200 font-medium">
                  {isRtl ? 'متاحين للرد السريع ⚡' : 'Typically replies in minutes ⚡'}
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full hover:bg-white/20 text-white/80 hover:text-white transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body: Choose Branch */}
          <div className="p-4 space-y-2.5 bg-neutral-50 dark:bg-neutral-900/50">
            <span className="text-[9.5px] font-extrabold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 block mb-1">
              {isRtl ? 'اختر الدولة / الفرع المطلوب:' : 'Select Country / Branch:'}
            </span>

            {branches.map((branch) => (
              <a
                key={branch.id}
                href={branch.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between p-3.5 rounded-xl bg-white dark:bg-neutral-900 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 border border-neutral-200 dark:border-neutral-800 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all duration-200 group cursor-pointer shadow-xs"
              >
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <span className="text-2xl flex-shrink-0" role="img" aria-label={branch.country}>
                    {branch.flag}
                  </span>
                  <div>
                    <h5 className="text-xs sm:text-sm font-black text-neutral-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors font-display">
                      {branch.country}
                    </h5>
                    <p className="text-[10px] text-neutral-500 dark:text-neutral-400 font-medium">
                      {branch.location} • <span className="font-mono text-neutral-400 dark:text-neutral-500">{branch.phoneDisplay}</span>
                    </p>
                  </div>
                </div>

                <div className="w-7 h-7 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white flex items-center justify-center transition-all flex-shrink-0">
                  <ArrowUpRight className="w-3.5 h-3.5 rtl:rotate-[-90deg]" />
                </div>
              </a>
            ))}
          </div>

          {/* Footer note */}
          <div className="px-4 py-2.5 bg-neutral-100 dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800/80 text-center">
            <p className="text-[9px] text-neutral-500 dark:text-neutral-400 font-medium">
              {isRtl ? 'ديفوتيكس ميديا • شريكك الإبداعي في مصر والسعودية' : 'Devotix Media • Egypt & Saudi Arabia'}
            </p>
          </div>
        </div>
      )}

      {/* Floating WhatsApp Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center justify-center w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl shadow-emerald-600/30 hover:shadow-emerald-600/50 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer border-2 border-white/20 touch-manipulation"
        aria-label="Open WhatsApp Chat with Egypt or Saudi Arabia branch"
      >
        {/* Pulsing Outer Ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none" />

        {/* WhatsApp Icon */}
        <div className="relative z-10 w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center">
          <img
            src="/assets/contact/WhatsApp.png"
            alt="WhatsApp"
            className="w-full h-full object-contain filter drop-shadow group-hover:rotate-6 transition-transform"
            onError={(e) => {
              e.target.style.display = 'none';
              if (e.target.nextSibling) e.target.nextSibling.style.display = 'block';
            }}
          />
          <MessageCircle className="w-7 h-7 text-white hidden fill-white" />
        </div>

        {/* Online Green Indicator Dot */}
        <span className={`absolute top-0 ${isRtl ? 'left-0' : 'right-0'} w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-white dark:border-black`} />

        {/* Floating Tooltip Label (Visible when closed) */}
        {!isOpen && (
          <span className={`absolute ${isRtl ? 'right-16' : 'left-16'} whitespace-nowrap px-2.5 py-1 rounded-md bg-neutral-950/90 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider border border-white/15 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md hidden sm:block`}>
            {isRtl ? 'تواصل عبر واتساب (مصر / السعودية)' : 'WhatsApp (Egypt / KSA)'}
          </span>
        )}
      </button>
    </div>
  );
}
