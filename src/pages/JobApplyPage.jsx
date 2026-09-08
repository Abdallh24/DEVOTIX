import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowUpRight, UploadCloud, CheckCircle2, ChevronDown, FileText } from 'lucide-react';
import Footer from '../components/Footer';
import { useThemeLanguage } from '../context/ThemeLanguageContext';

export default function JobApplyPage({
  role = null,
  onBackToCareer,
  onOpenPolicy
}) {
  const { isRtl, isDark, t } = useThemeLanguage();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const defaultRole = {
    title: isRtl ? 'سينيور جرافيك ديزاينر (Senior Graphic Designer)' : 'SENIOR GRAPHIC DESIGNER',
    department: isRtl ? 'فريق الديزاين والإبداع' : 'CREATIVE',
    location: isRtl ? 'مصر / هجين' : 'ISMAILIA, EGYPT',
    type: isRtl ? 'دوام كامل' : 'FULL-TIME',
    level: isRtl ? 'سينيور (خبرة متقدمة)' : 'SENIOR LEVEL',
    description: isRtl
      ? 'بندور على سينيور جرافيك ديزاينر شاطر ينضم لفريقنا ويقود الأفكار البصرية للبراندات والحملات الإعلانية والسوشيال ميديا.'
      : 'We are looking for a Senior Graphic Designer to join our creative team and develop strong visual concepts across brands, campaigns, digital platforms and social media.'
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
    <div className="min-h-screen flex flex-col justify-between bg-white dark:bg-black text-neutral-900 dark:text-white font-sans selection:bg-brand-red selection:text-white pt-14 lg:pt-16 select-none transition-colors duration-200">
      <main className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-3 sm:py-5 flex-1 flex flex-col justify-center">
        {/* Back Link */}
        <div className="mb-2 sm:mb-3">
          <button
            onClick={onBackToCareer}
            className="inline-flex items-center space-x-1 rtl:space-x-reverse text-xs font-bold text-neutral-600 dark:text-neutral-400 hover:text-brand-red transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 rtl:group-hover:translate-x-1 transition-transform rtl:rotate-180" />
            <span>{t('nav.back', 'Back')}</span>
          </button>
        </div>

        {/* 2. Job Title & Meta Info */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 sm:pb-5 border-b border-neutral-200 dark:border-neutral-800 mb-4 sm:mb-6">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-neutral-950 dark:text-white font-display leading-[1.02]">
            {currentRole.title}
          </h1>

          <div className="flex flex-wrap items-center gap-2 text-[10px] sm:text-[11px] font-bold tracking-widest text-neutral-500 dark:text-neutral-400 uppercase flex-shrink-0">
            <span>• {currentRole.department || 'CREATIVE'}</span>
            <span>• {currentRole.location || 'ISMAILIA, EGYPT'}</span>
            <span>• {currentRole.type || 'FULL-TIME'}</span>
            <span>• {currentRole.level || 'SENIOR LEVEL'}</span>
          </div>
        </div>

        {isSubmitted ? (
          <div className="py-16 text-center space-y-4 max-w-lg mx-auto my-auto">
            <CheckCircle2 className="w-14 h-14 text-brand-red mx-auto animate-bounce" />
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-neutral-950 dark:text-white font-display">
              {isRtl ? 'تم استلام طلب التقديم بنجاح' : 'APPLICATION RECEIVED'}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 font-medium leading-relaxed">
              {isRtl ? (
                <>شكراً لتقدمك لوظيفة <span className="font-bold text-neutral-950 dark:text-white">{currentRole.title}</span>. سيقوم فريق المواهب لدينا بمراجعة ملفك والتواصل معك قريباً.</>
              ) : (
                <>Thank you for applying for <span className="font-bold text-neutral-950 dark:text-white">{currentRole.title}</span>. Our talent team will review your credentials and reach out soon.</>
              )}
            </p>
            <div className="pt-3">
              <button
                onClick={onBackToCareer}
                className="px-6 py-2 bg-neutral-900 dark:bg-neutral-100 hover:bg-neutral-800 dark:hover:bg-white text-white dark:text-black text-xs font-extrabold uppercase tracking-wider rounded transition-colors cursor-pointer"
              >
                {isRtl ? 'العودة لصفحة الوظائف' : 'Back to Careers'}
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            {/* 3. Application Section: 3-Column Layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10 items-start">
              {/* Left Column: About the Role */}
              <div className="md:col-span-4 space-y-2 text-left rtl:text-right">
                <h3 className="text-[10px] font-extrabold uppercase tracking-widest text-neutral-900 dark:text-white font-display">
                  {isRtl ? 'عن الوظيفة والمسؤوليات' : 'ABOUT THE ROLE'}
                </h3>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 font-medium leading-relaxed">
                  {currentRole.description}
                </p>
              </div>

              {/* Middle Column: Personal Information Form */}
              <div className="md:col-span-4 space-y-4 text-left rtl:text-right">
                {/* Full Name */}
                <div className="space-y-1">
                  <label className="block text-[9.5px] font-extrabold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
                    {isRtl ? 'الاسم بالكامل' : 'FULL NAME'} <span className="text-brand-red">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={isRtl ? 'مصطفى المصلحي' : 'Jane Doe'}
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full pb-1.5 bg-transparent border-0 border-b border-neutral-300 dark:border-neutral-700 focus:border-brand-red dark:focus:border-brand-red text-xs text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none transition-colors"
                  />
                </div>

                {/* Email Address */}
                <div className="space-y-1">
                  <label className="block text-[9.5px] font-extrabold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
                    {isRtl ? 'البريد الإلكتروني' : 'EMAIL ADDRESS'} <span className="text-brand-red">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pb-1.5 bg-transparent border-0 border-b border-neutral-300 dark:border-neutral-700 focus:border-brand-red dark:focus:border-brand-red text-xs text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none transition-colors"
                  />
                </div>

                {/* Phone Number */}
                <div className="space-y-1">
                  <label className="block text-[9.5px] font-extrabold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
                    {isRtl ? 'رقم الهاتف' : 'PHONE NUMBER'}
                  </label>
                  <div className="flex items-center gap-2 pb-1.5 border-b border-neutral-300 dark:border-neutral-700 focus-within:border-brand-red dark:focus-within:border-brand-red transition-colors">
                    <div className="relative flex items-center">
                      <select
                        value={countryCode}
                        onChange={(e) => setCountryCode(e.target.value)}
                        className="appearance-none bg-transparent pr-4 rtl:pr-0 rtl:pl-4 text-xs font-bold text-neutral-800 dark:text-neutral-200 focus:outline-none cursor-pointer"
                      >
                        <option value="+20" className="dark:bg-neutral-900">+20</option>
                        <option value="+971" className="dark:bg-neutral-900">+971</option>
                        <option value="+966" className="dark:bg-neutral-900">+966</option>
                        <option value="+44" className="dark:bg-neutral-900">+44</option>
                        <option value="+1" className="dark:bg-neutral-900">+1</option>
                      </select>
                      <ChevronDown className="w-3 h-3 absolute right-0 rtl:right-auto rtl:left-0 pointer-events-none text-neutral-500" />
                    </div>
                    <input
                      type="tel"
                      placeholder="100 123 4567"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-transparent text-xs text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none"
                    />
                  </div>
                </div>

                {/* WhatsApp Number */}
                <div className="space-y-1">
                  <label className="block text-[9.5px] font-extrabold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
                    {isRtl ? 'رقم الواتساب' : 'WHATSAPP NUMBER'}
                  </label>
                  <input
                    type="text"
                    placeholder="+20 100 000 0000"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    className="w-full pb-1.5 bg-transparent border-0 border-b border-neutral-300 dark:border-neutral-700 focus:border-brand-red dark:focus:border-brand-red text-xs text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none transition-colors"
                  />
                  <p className="text-[9px] text-neutral-400 dark:text-neutral-500 font-medium leading-normal pt-0.5">
                    {isRtl ? 'نستخدم الواتساب فقط للتواصل معك بخصوص طلب التقديم.' : "We'll use WhatsApp only if we need to contact you regarding your application."}
                  </p>
                </div>
              </div>

              {/* Right Column: Experience & CV Upload */}
              <div className="md:col-span-4 space-y-4 text-left rtl:text-right">
                {/* Experience Question */}
                <div className="space-y-1.5">
                  <label className="block text-[9.5px] font-extrabold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
                    {isRtl ? 'هل لديك خبرة سابقة في المجال؟' : 'DO YOU HAVE PREVIOUS WORK EXPERIENCE?'} <span className="text-brand-red">*</span>
                  </label>
                  <div className="flex items-center space-x-6 rtl:space-x-reverse pt-0.5">
                    <label className="inline-flex items-center space-x-2 rtl:space-x-reverse cursor-pointer">
                      <div
                        onClick={() => setHasExperience('YES')}
                        className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center transition-colors ${
                          hasExperience === 'YES' ? 'border-brand-red' : 'border-neutral-400 dark:border-neutral-600'
                        }`}
                      >
                        {hasExperience === 'YES' && (
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                        )}
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-neutral-800 dark:text-neutral-200">
                        {isRtl ? 'نعم' : 'YES'}
                      </span>
                    </label>

                    <label className="inline-flex items-center space-x-2 rtl:space-x-reverse cursor-pointer">
                      <div
                        onClick={() => {
                          setHasExperience('NO');
                          setYearsOfExperience('');
                        }}
                        className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center transition-colors ${
                          hasExperience === 'NO' ? 'border-brand-red' : 'border-neutral-400 dark:border-neutral-600'
                        }`}
                      >
                        {hasExperience === 'NO' && (
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                        )}
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-neutral-800 dark:text-neutral-200">
                        {isRtl ? 'لا' : 'NO'}
                      </span>
                    </label>
                  </div>
                </div>

                {/* Conditional Question: HOW MANY YEARS OF EXPERIENCE? */}
                {hasExperience === 'YES' && (
                  <div className="space-y-1.5 animate-fadeIn">
                    <label className="block text-[9.5px] font-extrabold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
                      {isRtl ? 'كم عدد سنوات الخبرة؟' : 'HOW MANY YEARS OF EXPERIENCE?'} <span className="text-brand-red">*</span>
                    </label>
                    <div className="relative pb-1 border-b border-neutral-300 dark:border-neutral-700 focus-within:border-brand-red dark:focus-within:border-brand-red transition-colors">
                      <select
                        value={yearsOfExperience}
                        onChange={(e) => setYearsOfExperience(e.target.value)}
                        className="w-full appearance-none bg-transparent text-xs text-neutral-900 dark:text-white focus:outline-none cursor-pointer pr-6 rtl:pr-0 rtl:pl-6 font-medium"
                      >
                        <option value="" className="dark:bg-neutral-900">{isRtl ? 'اختر عدد السنوات' : 'Select years of experience'}</option>
                        <option value="less than 1 year" className="dark:bg-neutral-900">{isRtl ? 'أقل من سنة' : 'less than 1 year'}</option>
                        <option value="more than 1 year" className="dark:bg-neutral-900">{isRtl ? 'أكثر من سنة' : 'more than 1 year'}</option>
                        <option value="2-3 years" className="dark:bg-neutral-900">{isRtl ? '2 - 3 سنوات' : '2-3 years'}</option>
                        <option value="4-5 years" className="dark:bg-neutral-900">{isRtl ? '4 - 5 سنوات' : '4-5 years'}</option>
                        <option value="5+ years" className="dark:bg-neutral-900">{isRtl ? '+5 سنوات' : '5+ years'}</option>
                      </select>
                      <ChevronDown className="w-3.5 h-3.5 absolute right-0 rtl:right-auto rtl:left-0 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-500" />
                    </div>
                  </div>
                )}

                {/* Upload Zone */}
                <div className="space-y-1.5">
                  <label className="block text-[9.5px] font-extrabold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
                    {isRtl ? 'السيرة الذاتية (CV)' : 'RESUME / CV'} <span className="text-brand-red">*</span>
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
                    className="border-2 border-dashed border-neutral-200 dark:border-neutral-800 hover:border-brand-red dark:hover:border-brand-red rounded-lg p-3 text-center cursor-pointer transition-colors bg-neutral-50/50 dark:bg-neutral-900/50 flex flex-col items-center justify-center min-h-[95px]"
                  >
                    {uploadedFile ? (
                      <div className="flex flex-col items-center space-y-1">
                        <FileText className="w-5 h-5 text-brand-red" />
                        <span className="text-xs font-bold text-neutral-900 dark:text-white break-all max-w-[200px]">
                          {uploadedFile.name}
                        </span>
                        <span className="text-[9.5px] text-neutral-400 dark:text-neutral-500">
                          {(uploadedFile.size / (1024 * 1024)).toFixed(2)} MB • {isRtl ? 'انقر للتغيير' : 'Click to change'}
                        </span>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center space-y-1">
                        <UploadCloud className="w-5 h-5 text-neutral-400 dark:text-neutral-500" />
                        <span className="text-[11px] font-bold text-neutral-800 dark:text-neutral-200">
                          {isRtl ? 'انقر أو اسحب الملف للرفع' : 'Click or drag file to upload'}
                        </span>
                        <span className="text-[9.5px] text-neutral-400 dark:text-neutral-500">
                          PDF, DOC, DOCX (Max 10MB)
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Submit Section */}
            <div className="pt-1 pb-3 border-b border-neutral-200 dark:border-neutral-800 flex justify-end rtl:justify-start">
              <button
                type="submit"
                className="px-7 py-2.5 bg-brand-red hover:bg-brand-redHover text-white text-[11px] font-extrabold uppercase tracking-wider rounded transition-all duration-200 shadow-md flex items-center space-x-2 rtl:space-x-reverse cursor-pointer"
              >
                <span>{isRtl ? 'إرسال طلب التقديم' : 'SUBMIT APPLICATION'}</span>
                <ArrowUpRight className="w-3 h-3 rtl:rotate-[-90deg]" />
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
