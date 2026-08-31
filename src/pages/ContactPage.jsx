import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowLeft,
  UploadCloud,
  CheckCircle2,
  ChevronDown,
  FileText,
  Phone,
  Clock
} from 'lucide-react';
import Footer from '../components/Footer';

export default function ContactPage({ onBackToHome, onOpenPolicy }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Form State
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [businessDescription, setBusinessDescription] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [uploadedFile, setUploadedFile] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setUploadedFile(e.dataTransfer.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const socialLinks = [
    { name: 'WhatsApp', handle: '@DEVOTIX', icon: '/assets/contact/WhatsApp.png', href: 'https://wa.me/201010185181' },
    { name: 'Telegram', handle: '@DEVOTIX', icon: '/assets/contact/Telegram.png', href: 'https://t.me/devotix' },
    { name: 'Instagram', handle: '@DEVOTIX', icon: '/assets/contact/Instagram.png', href: 'https://instagram.com' },
    { name: 'Facebook', handle: '@DEVOTIX', icon: '/assets/contact/Facebook.png', href: 'https://facebook.com' },
    { name: 'TikTok', handle: '@DEVOTIX', icon: '/assets/contact/TikTok.png', href: 'https://tiktok.com' },
    { name: 'Snapchat', handle: '@DEVOTIX', icon: '/assets/contact/Snapchat.png', href: 'https://snapchat.com' },
    { name: 'LinkedIn', handle: '@DEVOTIX', icon: '/assets/contact/LinkedIn.png', href: 'https://linkedin.com' },
    { name: 'X', handle: '@DEVOTIX', icon: null, href: 'https://x.com' },
  ];

  return (
    <div className="min-h-screen bg-[#f8f8f9] text-black font-sans selection:bg-brand-red selection:text-white pt-14 lg:pt-16 flex flex-col justify-between">
      <main className="max-w-3xl mx-auto w-full px-4 sm:px-6 py-6 sm:py-8 space-y-10 sm:space-y-12 flex-1">
        {/* ========================================================================= */}
        {/* 1. HERO TITLE & PROJECT FORM SECTION (Compact Scale, Exact Format) */}
        {/* ========================================================================= */}
        <div id="contact-form" className="space-y-4">
          {/* Top Bar with Back Link */}
          <div>
            <button
              onClick={onBackToHome}
              className="inline-flex items-center space-x-1 text-[10.5px] font-bold text-neutral-600 hover:text-brand-red transition-colors uppercase cursor-pointer group"
            >
              <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Home</span>
            </button>
          </div>

          {/* Hero Title Row: Eyebrow + Headline on Left, Capabilities List on Right */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-end pb-1">
            {/* Left: Eyebrow + Headline */}
            <div className="md:col-span-8 space-y-1">
              <span className="text-[9px] font-bold uppercase tracking-widest text-neutral-400 block">
                DEVOIX MEDIA / CONTACT
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-[34px] font-black uppercase tracking-tight text-black font-display leading-[1.04]">
                LET'S BUILD
                <br />
                SOMETHING
                <br />
                WORTH TALKING
                <br />
                ABOUT.
              </h1>
            </div>

            {/* Right: Vertical List of Capabilities */}
            <div className="md:col-span-4 flex justify-start md:justify-end pb-1">
              <div className="space-y-0.5 text-left md:text-right text-[10.5px] font-medium text-neutral-500">
                <p>Strategy</p>
                <p>Creative</p>
                <p>Technology</p>
                <p>Production</p>
              </div>
            </div>
          </div>

          {/* Pure White Project Form Card Container */}
          <div className="bg-white rounded-xl p-5 sm:p-6 md:p-7 shadow-sm border border-neutral-200/60">
            {isSubmitted ? (
              <div className="py-8 text-center space-y-3 max-w-md mx-auto">
                <CheckCircle2 className="w-10 h-10 text-brand-red mx-auto animate-bounce" />
                <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black font-display">
                  PROJECT INQUIRY RECEIVED
                </h2>
                <p className="text-xs text-neutral-600 font-medium leading-relaxed">
                  Thank you for reaching out to Devotix Media. Our strategy team is reviewing your project brief and will contact you within 24 hours.
                </p>
                <div className="pt-1">
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-5 py-2 bg-black hover:bg-neutral-800 text-white text-[11px] font-extrabold uppercase tracking-wider rounded-md transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                {/* Row 1 (3 Columns): FULL NAME, PHONE NUMBER, WHATSAPP NAME */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-3.5">
                  <div className="space-y-1">
                    <label className="block text-[8.5px] font-extrabold uppercase tracking-wider text-[#1e293b] font-display">
                      FULL NAME
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-3 py-1.5 sm:py-2 bg-[#edf0f3] rounded text-[11.5px] text-neutral-900 placeholder:text-neutral-400 border-0 focus:outline-none focus:ring-1 focus:ring-brand-red transition-all"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-[8.5px] font-extrabold uppercase tracking-wider text-[#1e293b] font-display">
                      PHONE NUMBER
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3 py-1.5 sm:py-2 bg-[#edf0f3] rounded text-[11.5px] text-neutral-900 placeholder:text-neutral-400 border-0 focus:outline-none focus:ring-1 focus:ring-brand-red transition-all"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-[8.5px] font-extrabold uppercase tracking-wider text-[#1e293b] font-display">
                      WHATSAPP NAME
                    </label>
                    <input
                      type="text"
                      placeholder="+201012158181"
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      className="w-full px-3 py-1.5 sm:py-2 bg-[#edf0f3] rounded text-[11.5px] text-neutral-900 placeholder:text-neutral-400 border-0 focus:outline-none focus:ring-1 focus:ring-brand-red transition-all"
                    />
                  </div>
                </div>

                {/* Row 2 (2 Columns): EMAIL ADDRESS, COUNTRY */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-3.5">
                  <div className="space-y-1">
                    <label className="block text-[8.5px] font-extrabold uppercase tracking-wider text-[#1e293b] font-display">
                      EMAIL ADDRESS
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-1.5 sm:py-2 bg-[#edf0f3] rounded text-[11.5px] text-neutral-900 placeholder:text-neutral-400 border-0 focus:outline-none focus:ring-1 focus:ring-brand-red transition-all"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-[8.5px] font-extrabold uppercase tracking-wider text-[#1e293b] font-display">
                      COUNTRY
                    </label>
                    <div className="relative">
                      <select
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className="w-full appearance-none px-3 py-1.5 sm:py-2 bg-[#edf0f3] rounded text-[11.5px] text-neutral-900 border-0 focus:outline-none focus:ring-1 focus:ring-brand-red cursor-pointer pr-7 transition-all"
                      >
                        <option value="">choose country</option>
                        <option value="Egypt">Egypt (+20)</option>
                        <option value="Saudi Arabia">Saudi Arabia (+966)</option>
                        <option value="UAE">United Arab Emirates (+971)</option>
                        <option value="UK">United Kingdom (+44)</option>
                        <option value="USA">United States (+1)</option>
                        <option value="Other">Other</option>
                      </select>
                      <ChevronDown className="w-3.5 h-3.5 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-500" />
                    </div>
                  </div>

                  {/* Empty 3rd column to match reference layout */}
                  <div className="hidden sm:block" />
                </div>

                {/* Row 3: YOUR BUSINESS DESCRIPTION */}
                <div className="space-y-1">
                  <label className="block text-[8.5px] font-extrabold uppercase tracking-wider text-[#1e293b] font-display">
                    YOUR BUSINESS DESCRIPTION
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Briefly describe your vision, goals, and technical requirements..."
                    value={businessDescription}
                    onChange={(e) => setBusinessDescription(e.target.value)}
                    className="w-full px-3 py-1.5 sm:py-2 bg-[#edf0f3] rounded text-[11.5px] text-neutral-900 placeholder:text-neutral-400 border-0 focus:outline-none focus:ring-1 focus:ring-brand-red transition-all resize-none"
                  />
                </div>

                {/* Row 4: DESCRIPTION WHAT DO YOU WANT ? */}
                <div className="space-y-1">
                  <label className="block text-[8.5px] font-extrabold uppercase tracking-wider text-[#1e293b] font-display">
                    DESCRIPTION WHAT DO YOU WANT ?
                  </label>
                  <textarea
                    rows={2}
                    placeholder=""
                    value={projectDescription}
                    onChange={(e) => setProjectDescription(e.target.value)}
                    className="w-full px-3 py-1.5 sm:py-2 bg-[#edf0f3] rounded text-[11.5px] text-neutral-900 placeholder:text-neutral-400 border-0 focus:outline-none focus:ring-1 focus:ring-brand-red transition-all resize-none"
                  />
                </div>

                {/* Row 5: ATTACHMENTS */}
                <div className="space-y-1">
                  <label className="block text-[8.5px] font-extrabold uppercase tracking-wider text-[#1e293b] font-display">
                    ATTACHMENTS
                  </label>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.docx,.doc,.png,.jpg,.jpeg"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <div
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current && fileInputRef.current.click()}
                    className="border border-dashed border-neutral-300 hover:border-brand-red rounded-lg p-3 text-center cursor-pointer transition-all bg-[#f8f9fa] flex flex-col items-center justify-center space-y-1 min-h-[64px]"
                  >
                    {uploadedFile ? (
                      <div className="flex items-center space-x-2">
                        <FileText className="w-4 h-4 text-brand-red" />
                        <span className="text-[11px] font-bold text-neutral-900 truncate max-w-[240px]">
                          {uploadedFile.name}
                        </span>
                        <span className="text-[9px] text-neutral-500">
                          ({(uploadedFile.size / (1024 * 1024)).toFixed(2)} MB)
                        </span>
                      </div>
                    ) : (
                      <>
                        <UploadCloud className="w-4 h-4 text-brand-red" />
                        <p className="text-[10.5px] font-medium text-neutral-700">
                          Drag & drop your files here or <span className="text-brand-red font-bold underline">click to upload</span>
                        </p>
                        <span className="text-[8.5px] text-neutral-400">
                          Supports PDF, DOCX, and high-res images (Max 25MB)
                        </span>
                      </>
                    )}
                  </div>
                </div>

                {/* Row 6: Submit Button */}
                <div className="pt-1">
                  <button
                    type="submit"
                    className="w-full py-2.5 sm:py-3 bg-brand-red hover:bg-brand-redHover text-white text-[11.5px] sm:text-xs font-bold rounded-md transition-all duration-200 shadow-md shadow-red-500/20 cursor-pointer text-center"
                  >
                    Submit Project
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. PROCESS SECTION ("What happens next?" - Compact Scale) */}
        {/* ========================================================================= */}
        <div id="contact-process" className="space-y-6 text-center pt-2">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight text-black font-display">
              What happens next?
            </h2>
            <div className="w-10 h-0.5 bg-brand-red rounded-full mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
            {/* Step 01 */}
            <div className="bg-white p-4 sm:p-5 rounded-xl border border-neutral-200 shadow-sm space-y-2 relative">
              <span className="inline-block px-2 py-0.5 rounded bg-[#f3f4f6] text-[9px] font-black text-neutral-700 font-display">
                01
              </span>
              <h3 className="text-xs sm:text-sm font-black uppercase tracking-tight text-brand-red font-display">
                Initial Review
              </h3>
              <p className="text-[10.5px] sm:text-[11px] text-neutral-600 font-medium leading-relaxed">
                We review your request to align resources and expertise. Our project strategists assess the complexity and feasibility of your vision.
              </p>
            </div>

            {/* Step 02 */}
            <div className="bg-white p-4 sm:p-5 rounded-xl border border-neutral-200 shadow-sm space-y-2 relative">
              <span className="inline-block px-2 py-0.5 rounded bg-[#f3f4f6] text-[9px] font-black text-neutral-700 font-display">
                02
              </span>
              <h3 className="text-xs sm:text-sm font-black uppercase tracking-tight text-brand-red font-display">
                First Contact
              </h3>
              <p className="text-[10.5px] sm:text-[11px] text-neutral-600 font-medium leading-relaxed">
                A specialized advisor will reach out to you within 24-48 hours to schedule a call and introduce our methodology.
              </p>
            </div>

            {/* Step 03 */}
            <div className="bg-white p-4 sm:p-5 rounded-xl border border-neutral-200 shadow-sm space-y-2 relative">
              <span className="inline-block px-2 py-0.5 rounded bg-[#f3f4f6] text-[9px] font-black text-neutral-700 font-display">
                03
              </span>
              <h3 className="text-xs sm:text-sm font-black uppercase tracking-tight text-brand-red font-display">
                Detailed Briefing
              </h3>
              <p className="text-[10.5px] sm:text-[11px] text-neutral-600 font-medium leading-relaxed">
                We hold a deep-dive session to discuss your project in detail and map out the trajectory, ensuring every pixel aligns with your goals.
              </p>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. DIRECT CONTACT & SOCIALS SECTION (Compact Scale) */}
        {/* ========================================================================= */}
        <div id="contact-direct" className="space-y-6 text-center pt-2">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight text-black font-display">
              Contact Us
            </h2>
            <div className="w-10 h-0.5 bg-brand-red rounded-full mx-auto mt-1.5 mb-1.5" />
            <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">
              We're here to support you anytime.
            </p>
          </div>

          {/* Intro Agency Mission Card */}
          <div className="bg-white rounded-xl p-4 sm:p-5 border border-neutral-200 shadow-sm text-center">
            <p className="text-[11px] sm:text-xs text-neutral-700 font-medium leading-relaxed max-w-xl mx-auto">
              At <span className="font-bold text-black">DEV<span className="text-brand-red">O</span>TIX</span>, we don't just create campaigns — we build brands, experiences, and digital solutions that make businesses more visible, more impactful, and ready to grow. We bring strategy, creativity, media, production, and technology together to transform your ideas into work that gets noticed.
            </p>
          </div>

          {/* 2 Solid Red Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {/* Left Card: Phone */}
            <div className="bg-brand-red text-white p-4 rounded-xl flex items-center justify-center space-x-3 shadow-md">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <Phone className="w-4 h-4 text-white" />
              </div>
              <div className="text-left">
                <span className="text-[8.5px] font-bold uppercase tracking-widest text-white/80 block">
                  CALL US
                </span>
                <span className="text-sm sm:text-base font-black tracking-tight font-display block">
                  +966 5XXXXXXXX
                </span>
              </div>
            </div>

            {/* Right Card: 24/7 Availability */}
            <div className="bg-brand-red text-white p-4 rounded-xl flex items-center justify-center space-x-3 shadow-md">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <Clock className="w-4 h-4 text-white" />
              </div>
              <div className="text-left">
                <span className="text-[8.5px] font-bold uppercase tracking-widest text-white/80 block">
                  AVAILABILITY
                </span>
                <span className="text-sm sm:text-base font-black tracking-tight font-display block">
                  24/7 Support
                </span>
              </div>
            </div>
          </div>

          {/* Connect With Us Card */}
          <div className="bg-white rounded-xl p-4 sm:p-5 border border-neutral-200 shadow-sm space-y-4">
            <div className="text-center">
              <h3 className="text-sm sm:text-base font-black uppercase tracking-tight text-black font-display">
                Connect With Us
              </h3>
              <div className="w-7 h-0.5 bg-brand-red rounded-full mx-auto mt-1" />
            </div>

            {/* 4x2 Social Media Grid with compact refined scale */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2.5 p-2 rounded-lg border border-neutral-100 bg-[#fbfbfb] hover:bg-neutral-100/80 hover:border-brand-red/30 transition-all group text-left"
                >
                  <div className="w-7 h-7 flex-shrink-0 flex items-center justify-center rounded-md bg-white border border-neutral-200/60 shadow-2xs">
                    {s.icon ? (
                      <img src={s.icon} alt={s.name} className="w-4.5 h-4.5 object-contain" />
                    ) : (
                      <span className="text-xs font-black text-black font-display">𝕏</span>
                    )}
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[9px] font-bold text-neutral-400 block leading-tight">
                      {s.name}
                    </span>
                    <span className="text-[10.5px] sm:text-[11px] font-extrabold text-neutral-900 group-hover:text-brand-red transition-colors block leading-tight truncate mt-0.5">
                      {s.handle}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Footer note */}
          <p className="text-[10px] text-neutral-500 font-medium text-center pt-1">
            Feel free to reach out to us anytime. We are here to help you.
          </p>
        </div>
      </main>

      {/* Standalone White Footer */}
      <Footer onOpenPolicy={onOpenPolicy} />
    </div>
  );
}
