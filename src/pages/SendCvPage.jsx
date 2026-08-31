import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowUpRight, UploadCloud, CheckCircle2, ChevronDown, FileText } from 'lucide-react';
import Footer from '../components/Footer';

export default function SendCvPage({
  onBackToCareer,
  onOpenPolicy
}) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Form State
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [discipline, setDiscipline] = useState('');
  const [hasExperience, setHasExperience] = useState('NO');
  const [yearsExperience, setYearsExperience] = useState('');
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

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-brand-red selection:text-white pt-16 flex flex-col justify-between">
      <main className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-10 flex-1">
        {/* Back Link */}
        <div className="mb-6 sm:mb-8">
          <button
            onClick={onBackToCareer}
            className="inline-flex items-center space-x-1 text-xs font-bold text-neutral-600 hover:text-brand-red transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>Back</span>
          </button>
        </div>

        {/* 2. Page Header & Intro */}
        <div className="space-y-3 pb-8">
          <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 block">
            DEVOITX MEDIA / CAREERS
          </span>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-black font-display leading-[1.02]">
            SEND YOUR CV.
          </h1>

          <p className="text-xs sm:text-sm text-neutral-600 font-medium leading-relaxed max-w-xl">
            Don't see the right opportunity? Send us your CV and tell us where your skills could make an impact at DEVOITX.
          </p>

          <span className="text-[10.5px] sm:text-xs font-extrabold uppercase tracking-wider text-brand-red block pt-1">
            WE'RE ALWAYS LOOKING FOR GREAT PEOPLE.
          </span>
        </div>

        {isSubmitted ? (
          <div className="py-20 text-center space-y-4 max-w-lg mx-auto">
            <CheckCircle2 className="w-16 h-16 text-brand-red mx-auto animate-bounce" />
            <h2 className="text-3xl font-black uppercase tracking-tight text-black font-display">
              CV RECEIVED
            </h2>
            <p className="text-sm text-neutral-600 font-medium leading-relaxed">
              Thank you for sharing your resume with us. If a fitting role opens up, our leadership will connect with you.
            </p>
            <div className="pt-4">
              <button
                onClick={onBackToCareer}
                className="px-6 py-2.5 bg-black hover:bg-neutral-800 text-white text-xs font-extrabold uppercase tracking-wider rounded transition-colors"
              >
                Back to Careers
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="pt-4 sm:pt-6 space-y-10">
            {/* 3. Form Section (2-Column Layout) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
              {/* Left Column */}
              <div className="space-y-6">
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="block text-[10px] font-extrabold uppercase tracking-wider text-neutral-700">
                    FULL NAME
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full pb-2 bg-transparent border-0 border-b border-neutral-300 focus:border-black text-xs text-neutral-900 focus:outline-none transition-colors"
                  />
                </div>

                {/* Email Address */}
                <div className="space-y-1.5">
                  <label className="block text-[10px] font-extrabold uppercase tracking-wider text-neutral-700">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pb-2 bg-transparent border-0 border-b border-neutral-300 focus:border-black text-xs text-neutral-900 focus:outline-none transition-colors"
                  />
                </div>

                {/* Phone Number */}
                <div className="space-y-1.5">
                  <label className="block text-[10px] font-extrabold uppercase tracking-wider text-neutral-700">
                    PHONE NUMBER
                  </label>
                  <input
                    type="tel"
                    placeholder="+XX XXXXXXXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full pb-2 bg-transparent border-0 border-b border-neutral-300 focus:border-black text-xs text-neutral-900 placeholder:text-neutral-400 focus:outline-none transition-colors"
                  />
                </div>

                {/* WhatsApp Number */}
                <div className="space-y-1.5">
                  <label className="block text-[10px] font-extrabold uppercase tracking-wider text-neutral-700">
                    WHATSAPP NUMBER
                  </label>
                  <input
                    type="tel"
                    placeholder="+XX XXXXXXXXX"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    className="w-full pb-2 bg-transparent border-0 border-b border-neutral-300 focus:border-black text-xs text-neutral-900 placeholder:text-neutral-400 focus:outline-none transition-colors"
                  />
                  <p className="text-[9.5px] text-neutral-400 font-medium leading-normal pt-0.5">
                    We'll use WhatsApp only if we need to contact you regarding opportunities at DEVOITX.
                  </p>
                </div>

                {/* City / Location */}
                <div className="space-y-1.5">
                  <label className="block text-[10px] font-extrabold uppercase tracking-wider text-neutral-700">
                    CITY / LOCATION
                  </label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full pb-2 bg-transparent border-0 border-b border-neutral-300 focus:border-black text-xs text-neutral-900 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* What Do You Do? */}
                <div className="space-y-1.5">
                  <label className="block text-[10px] font-extrabold uppercase tracking-wider text-neutral-700">
                    WHAT DO YOU DO?
                  </label>
                  <div className="relative pb-2 border-b border-neutral-300 focus-within:border-black transition-colors">
                    <select
                      value={discipline}
                      onChange={(e) => setDiscipline(e.target.value)}
                      className="w-full appearance-none bg-transparent text-xs text-neutral-900 focus:outline-none cursor-pointer pr-6"
                    >
                      <option value="">Select an option</option>
                      <option value="Graphic Design & Branding">Graphic Design & Branding</option>
                      <option value="Motion Graphics & 3D CGI">Motion Graphics & 3D CGI</option>
                      <option value="Video Editing & Color Grading">Video Editing & Color Grading</option>
                      <option value="Media Buying & Performance Marketing">Media Buying & Performance Marketing</option>
                      <option value="Software Engineering & Web">Software Engineering & Web</option>
                      <option value="Photography & Cinematography">Photography & Cinematography</option>
                      <option value="Creative Direction & Strategy">Creative Direction & Strategy</option>
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-500" />
                  </div>
                </div>

                {/* Experience Question */}
                <div className="space-y-2.5 pt-2">
                  <label className="block text-[10px] font-extrabold uppercase tracking-wider text-neutral-700">
                    DO YOU HAVE PREVIOUS WORK EXPERIENCE?
                  </label>
                  <div className="flex items-center space-x-6 pt-1">
                    <label className="inline-flex items-center space-x-2 cursor-pointer">
                      <div
                        onClick={() => setHasExperience('YES')}
                        className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${
                          hasExperience === 'YES' ? 'border-brand-red' : 'border-neutral-400'
                        }`}
                      >
                        {hasExperience === 'YES' && (
                          <div className="w-2 h-2 rounded-full bg-brand-red" />
                        )}
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-neutral-800">
                        YES
                      </span>
                    </label>

                    <label className="inline-flex items-center space-x-2 cursor-pointer">
                      <div
                        onClick={() => {
                          setHasExperience('NO');
                          setYearsExperience('');
                        }}
                        className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${
                          hasExperience === 'NO' ? 'border-brand-red' : 'border-neutral-400'
                        }`}
                      >
                        {hasExperience === 'NO' && (
                          <div className="w-2 h-2 rounded-full bg-brand-red" />
                        )}
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-neutral-800">
                        NO
                      </span>
                    </label>
                  </div>
                </div>

                {/* How Many Years? (Conditional on YES) */}
                {hasExperience === 'YES' && (
                  <div className="space-y-1.5 pt-2 animate-fadeIn">
                    <label className="block text-[10px] font-extrabold uppercase tracking-wider text-neutral-700">
                      HOW MANY YEARS OF EXPERIENCE?
                    </label>
                    <div className="relative pb-2 border-b border-neutral-300 focus-within:border-black transition-colors">
                      <select
                        value={yearsExperience}
                        onChange={(e) => setYearsExperience(e.target.value)}
                        className="w-full appearance-none bg-transparent text-xs text-neutral-900 focus:outline-none cursor-pointer pr-6 font-medium"
                      >
                        <option value="">Select years of experience</option>
                        <option value="less than 1 year">less than 1 year</option>
                        <option value="more than 1 year">more than 1 year</option>
                        <option value="2-3 years">2-3 years</option>
                        <option value="4-5 years">4-5 years</option>
                        <option value="5+ years">5+ years</option>
                      </select>
                      <ChevronDown className="w-3.5 h-3.5 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-500" />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* 4. Upload Zone (Full Width) */}
            <div className="space-y-2 pt-4">
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="hidden"
              />
              <div
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current && fileInputRef.current.click()}
                className="border-2 border-dashed border-neutral-200 hover:border-neutral-400 rounded-lg p-8 text-center cursor-pointer transition-colors bg-neutral-50/50 flex flex-col items-center justify-center min-h-[140px]"
              >
                {uploadedFile ? (
                  <div className="flex flex-col items-center space-y-1">
                    <FileText className="w-8 h-8 text-brand-red" />
                    <span className="text-xs font-bold text-neutral-900 break-all max-w-sm">
                      {uploadedFile.name}
                    </span>
                    <span className="text-[10px] text-neutral-400">
                      {(uploadedFile.size / (1024 * 1024)).toFixed(2)} MB • Click to change
                    </span>
                  </div>
                ) : (
                  <div className="flex flex-col items-center space-y-2">
                    <UploadCloud className="w-8 h-8 text-neutral-400" />
                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-800">
                      ↑ DROP YOUR CV HERE OR CLICK TO UPLOAD
                    </span>
                    <span className="text-[10px] text-neutral-400">
                      Supports PDF, DOC, DOCX (Max 10MB)
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* 5. Submit Section */}
            <div className="pt-2 pb-5 border-b border-neutral-200 flex justify-center">
              <button
                type="submit"
                className="px-10 py-3.5 bg-black hover:bg-neutral-800 text-white text-xs font-extrabold uppercase tracking-wider rounded transition-all duration-200 shadow-md flex items-center space-x-2 cursor-pointer"
              >
                <span>SUBMIT APPLICATION</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}
      </main>

      {/* 6. Footer */}
      <Footer onOpenPolicy={onOpenPolicy} />
    </div>
  );
}
