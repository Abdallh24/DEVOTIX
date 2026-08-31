import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowUpRight, UploadCloud, CheckCircle2, ChevronDown, FileText } from 'lucide-react';
import Footer from '../components/Footer';

export default function JobApplyPage({
  role = null,
  onBackToCareer,
  onOpenPolicy
}) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const defaultRole = {
    title: 'SENIOR GRAPHIC DESIGNER',
    department: 'CREATIVE',
    location: 'ISMAILIA, EGYPT',
    type: 'FULL-TIME',
    level: 'SENIOR LEVEL',
    description:
      'We are looking for a Senior Graphic Designer to join our creative team and develop strong visual concepts across brands, campaigns, digital platforms and social media.'
  };

  const currentRole = role || defaultRole;

  // Form State
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [countryCode, setCountryCode] = useState('+20');
  const [phone, setPhone] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [hasExperience, setHasExperience] = useState('NO');
  const [yearsOfExperience, setYearsOfExperience] = useState('');
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
    <div className="min-h-screen flex flex-col justify-between bg-white text-black font-sans selection:bg-brand-red selection:text-white pt-14 lg:pt-16">
      <main className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-3 sm:py-5 flex-1 flex flex-col justify-center">
        {/* Back Link */}
        <div className="mb-2 sm:mb-3">
          <button
            onClick={onBackToCareer}
            className="inline-flex items-center space-x-1 text-xs font-bold text-neutral-600 hover:text-brand-red transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>Back</span>
          </button>
        </div>

        {/* 2. Job Title & Meta Info */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 sm:pb-5 border-b border-neutral-100 mb-4 sm:mb-6">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-black font-display leading-[1.02]">
            {currentRole.title}
          </h1>

          <div className="flex flex-wrap items-center gap-2 text-[10px] sm:text-[11px] font-bold tracking-widest text-neutral-500 uppercase flex-shrink-0">
            <span>• {currentRole.department || 'CREATIVE'}</span>
            <span>• {currentRole.location || 'ISMAILIA, EGYPT'}</span>
            <span>• {currentRole.type || 'FULL-TIME'}</span>
            <span>• {currentRole.level || 'SENIOR LEVEL'}</span>
          </div>
        </div>

        {isSubmitted ? (
          <div className="py-16 text-center space-y-4 max-w-lg mx-auto my-auto">
            <CheckCircle2 className="w-14 h-14 text-brand-red mx-auto animate-bounce" />
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black font-display">
              APPLICATION RECEIVED
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 font-medium leading-relaxed">
              Thank you for applying for <span className="font-bold text-black">{currentRole.title}</span>. Our talent team will review your credentials and reach out soon.
            </p>
            <div className="pt-3">
              <button
                onClick={onBackToCareer}
                className="px-6 py-2 bg-black hover:bg-neutral-800 text-white text-xs font-extrabold uppercase tracking-wider rounded transition-colors"
              >
                Back to Careers
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            {/* 3. Application Section: 3-Column Layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10 items-start">
              {/* Left Column: About the Role */}
              <div className="md:col-span-4 space-y-2">
                <h3 className="text-[10px] font-extrabold uppercase tracking-widest text-neutral-900 font-display">
                  ABOUT THE ROLE
                </h3>
                <p className="text-xs text-neutral-600 font-medium leading-relaxed">
                  {currentRole.description}
                </p>
              </div>

              {/* Middle Column: Personal Information Form */}
              <div className="md:col-span-4 space-y-4">
                {/* Full Name */}
                <div className="space-y-1">
                  <label className="block text-[9.5px] font-extrabold uppercase tracking-wider text-neutral-700">
                    FULL NAME <span className="text-brand-red">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full pb-1.5 bg-transparent border-0 border-b border-neutral-300 focus:border-black text-xs text-neutral-900 placeholder:text-neutral-400 focus:outline-none transition-colors"
                  />
                </div>

                {/* Email Address */}
                <div className="space-y-1">
                  <label className="block text-[9.5px] font-extrabold uppercase tracking-wider text-neutral-700">
                    EMAIL ADDRESS <span className="text-brand-red">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jane@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pb-1.5 bg-transparent border-0 border-b border-neutral-300 focus:border-black text-xs text-neutral-900 placeholder:text-neutral-400 focus:outline-none transition-colors"
                  />
                </div>

                {/* Phone Number */}
                <div className="space-y-1">
                  <label className="block text-[9.5px] font-extrabold uppercase tracking-wider text-neutral-700">
                    PHONE NUMBER
                  </label>
                  <div className="flex items-center gap-2 pb-1.5 border-b border-neutral-300 focus-within:border-black transition-colors">
                    <div className="relative flex items-center">
                      <select
                        value={countryCode}
                        onChange={(e) => setCountryCode(e.target.value)}
                        className="appearance-none bg-transparent pr-4 text-xs font-bold text-neutral-800 focus:outline-none cursor-pointer"
                      >
                        <option value="+20">+20</option>
                        <option value="+971">+971</option>
                        <option value="+966">+966</option>
                        <option value="+44">+44</option>
                        <option value="+1">+1</option>
                      </select>
                      <ChevronDown className="w-3 h-3 absolute right-0 pointer-events-none text-neutral-500" />
                    </div>
                    <input
                      type="tel"
                      placeholder="100 123 4567"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-transparent text-xs text-neutral-900 placeholder:text-neutral-400 focus:outline-none"
                    />
                  </div>
                </div>

                {/* WhatsApp Number */}
                <div className="space-y-1">
                  <label className="block text-[9.5px] font-extrabold uppercase tracking-wider text-neutral-700">
                    WHATSAPP NUMBER
                  </label>
                  <input
                    type="text"
                    placeholder="Same as phone"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    className="w-full pb-1.5 bg-transparent border-0 border-b border-neutral-300 focus:border-black text-xs text-neutral-900 placeholder:text-neutral-400 focus:outline-none transition-colors"
                  />
                  <p className="text-[9px] text-neutral-400 font-medium leading-normal pt-0.5">
                    We'll use WhatsApp only if we need to contact you regarding your application.
                  </p>
                </div>
              </div>

              {/* Right Column: Experience & CV Upload */}
              <div className="md:col-span-4 space-y-4">
                {/* Experience Question */}
                <div className="space-y-1.5">
                  <label className="block text-[9.5px] font-extrabold uppercase tracking-wider text-neutral-700">
                    DO YOU HAVE PREVIOUS WORK EXPERIENCE? <span className="text-brand-red">*</span>
                  </label>
                  <div className="flex items-center space-x-6 pt-0.5">
                    <label className="inline-flex items-center space-x-2 cursor-pointer">
                      <div
                        onClick={() => setHasExperience('YES')}
                        className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center transition-colors ${
                          hasExperience === 'YES' ? 'border-brand-red' : 'border-neutral-400'
                        }`}
                      >
                        {hasExperience === 'YES' && (
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-red" />
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
                          setYearsOfExperience('');
                        }}
                        className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center transition-colors ${
                          hasExperience === 'NO' ? 'border-brand-red' : 'border-neutral-400'
                        }`}
                      >
                        {hasExperience === 'NO' && (
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                        )}
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-neutral-800">
                        NO
                      </span>
                    </label>
                  </div>
                </div>

                {/* Conditional Question: HOW MANY YEARS OF EXPERIENCE? */}
                {hasExperience === 'YES' && (
                  <div className="space-y-1.5 animate-fadeIn">
                    <label className="block text-[9.5px] font-extrabold uppercase tracking-wider text-neutral-700">
                      HOW MANY YEARS OF EXPERIENCE? <span className="text-brand-red">*</span>
                    </label>
                    <div className="relative pb-1 border-b border-neutral-300 focus-within:border-black transition-colors">
                      <select
                        value={yearsOfExperience}
                        onChange={(e) => setYearsOfExperience(e.target.value)}
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

                {/* Upload Zone */}
                <div className="space-y-1.5">
                  <label className="block text-[9.5px] font-extrabold uppercase tracking-wider text-neutral-700">
                    RESUME / CV <span className="text-brand-red">*</span>
                  </label>
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
                    className="border-2 border-dashed border-neutral-200 hover:border-neutral-400 rounded-lg p-3 text-center cursor-pointer transition-colors bg-neutral-50/50 flex flex-col items-center justify-center min-h-[95px]"
                  >
                    {uploadedFile ? (
                      <div className="flex flex-col items-center space-y-1">
                        <FileText className="w-5 h-5 text-brand-red" />
                        <span className="text-xs font-bold text-neutral-900 break-all max-w-[200px]">
                          {uploadedFile.name}
                        </span>
                        <span className="text-[9.5px] text-neutral-400">
                          {(uploadedFile.size / (1024 * 1024)).toFixed(2)} MB • Click to change
                        </span>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center space-y-1">
                        <UploadCloud className="w-5 h-5 text-neutral-400" />
                        <span className="text-[11px] font-bold text-neutral-800">
                          Click or drag file to upload
                        </span>
                        <span className="text-[9.5px] text-neutral-400">
                          PDF, DOC, DOCX (Max 10MB)
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Submit Section */}
            <div className="pt-1 pb-3 border-b border-neutral-200 flex justify-end">
              <button
                type="submit"
                className="px-7 py-2.5 bg-black hover:bg-neutral-800 text-white text-[11px] font-extrabold uppercase tracking-wider rounded transition-all duration-200 shadow-md flex items-center space-x-2 cursor-pointer"
              >
                <span>SUBMIT APPLICATION</span>
                <ArrowUpRight className="w-3 h-3" />
              </button>
            </div>
          </form>
        )}
      </main>

      {/* 5. Footer */}
      <Footer onOpenPolicy={onOpenPolicy} />
    </div>
  );
}
