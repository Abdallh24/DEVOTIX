import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, Sparkles, Mail, Phone, MapPin } from 'lucide-react';

export default function ContactModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    services: [],
    budget: '$25k - $50k',
    message: ''
  });

  const availableServices = [
    'Video Production',
    'Content Creation',
    'Brand Identity',
    'Software Engineering',
    'Media Buying',
    'Photography'
  ];

  const budgetOptions = [
    '< $15k',
    '$15k - $30k',
    '$30k - $60k',
    '$60k - $100k+',
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const toggleService = (svc) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(svc)
        ? prev.services.filter((s) => s !== svc)
        : [...prev.services, svc]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Allow user to view confirmation, then close
    }, 2000);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      company: '',
      services: [],
      budget: '$25k - $50k',
      message: ''
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl animate-fadeIn">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-10 w-full max-w-2xl bg-neutral-950 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-neutral-800 bg-neutral-900/40">
          <div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
              <span className="text-[11px] font-bold tracking-widest uppercase text-brand-red">
                START A PROJECT
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white font-display mt-0.5">
              LET'S TALK
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-neutral-900 hover:bg-brand-red hover:text-white text-neutral-400 flex items-center justify-center transition-colors border border-neutral-800"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {submitted ? (
            <div className="py-12 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-brand-red/20 text-brand-red flex items-center justify-center mb-4 border border-brand-red/40">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h4 className="text-2xl font-black uppercase tracking-tight text-white font-display">
                MESSAGE RECEIVED
              </h4>
              <p className="mt-2 text-sm text-neutral-400 max-w-md font-medium">
                Thank you for reaching out to Devotix. Our creative director and production team will review your project and get back to you within 24 hours.
              </p>
              <button
                onClick={handleReset}
                className="mt-8 px-8 py-3 bg-brand-red hover:bg-brand-redHover text-white text-xs font-bold uppercase tracking-wider rounded-md transition-colors"
              >
                Back to Site
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Service tags multi-select */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-3">
                  Services Needed
                </label>
                <div className="flex flex-wrap gap-2">
                  {availableServices.map((service) => {
                    const selected = formData.services.includes(service);
                    return (
                      <button
                        type="button"
                        key={service}
                        onClick={() => toggleService(service)}
                        className={`text-xs font-semibold uppercase px-3.5 py-2 rounded-lg border transition-all ${
                          selected
                            ? 'bg-brand-red text-white border-brand-red shadow-md shadow-red-600/30'
                            : 'bg-neutral-900/80 text-neutral-400 border-neutral-800 hover:border-neutral-700 hover:text-white'
                        }`}
                      >
                        {service}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Name & Email Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-brand-red transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@company.com"
                    className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-brand-red transition-colors"
                  />
                </div>
              </div>

              {/* Company & Budget */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                    Company / Brand
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Acme Studio"
                    className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-brand-red transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                    Estimated Budget
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg text-white text-sm focus:outline-none focus:border-brand-red transition-colors"
                  >
                    {budgetOptions.map((b) => (
                      <option key={b} value={b} className="bg-neutral-950 text-white">
                        {b}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                  Project Details
                </label>
                <textarea
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your brand vision, goals, and expected timeline..."
                  className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-brand-red transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 bg-brand-red hover:bg-brand-redHover text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-lg transition-all transform hover:scale-[1.01] shadow-lg shadow-red-600/30 flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>SUBMIT INQUIRY</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
