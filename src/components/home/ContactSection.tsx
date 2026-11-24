'use client';

import React, { useState, useRef, useEffect } from 'react';
import confetti from 'canvas-confetti';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ArrowUpRight,
  Clock,
  ShieldCheck,
  Lock,
  ChevronDown
} from 'lucide-react';
import {
  containsMaliciousPayload,
  sanitizePhoneInput,
  validatePhoneNumber,
  sanitizeText
} from '@/lib/security';

interface CountryDialOption {
  code: string;
  name: string;
  flagSvg: React.ReactNode;
}

const COUNTRY_DIAL_OPTIONS: CountryDialOption[] = [
  {
    code: '+1',
    name: 'United States',
    flagSvg: (
      <svg className="w-5 h-3.5 rounded-[2px] shrink-0 shadow-xs" viewBox="0 0 640 480">
        <path fill="#bd3d44" d="M0 0h640v480H0z"/>
        <path stroke="#fff" strokeWidth="37" d="M0 55.4h640M0 129.2h640M0 203h640M0 277h640M0 350.8h640M0 424.6h640"/>
        <path fill="#192f5d" d="M0 0h284.8v258.5H0z"/>
      </svg>
    )
  },
  {
    code: '+44',
    name: 'United Kingdom',
    flagSvg: (
      <svg className="w-5 h-3.5 rounded-[2px] shrink-0 shadow-xs" viewBox="0 0 640 480">
        <path fill="#012169" d="M0 0h640v480H0z"/>
        <path fill="#FFF" d="m75 0 245 180L565 0h75v60L440 240l200 150v90h-75L320 300 75 480H0v-60l200-150L0 60V0h75z"/>
        <path fill="#C8102E" d="m424 282 216 162v36l-264-198h48zm-208-84L0 36V0l264 198h-48zM0 444l192-144h48L24 480H0v-36zm640-408L448 180h-48L616 0h24v36z"/>
        <path fill="#FFF" d="M240 0h160v480H240zM0 160h640v160H0z"/>
        <path fill="#C8102E" d="M267 0h106v480H267zM0 187h640v106H0z"/>
      </svg>
    )
  },
  {
    code: '+61',
    name: 'Australia',
    flagSvg: (
      <svg className="w-5 h-3.5 rounded-[2px] shrink-0 shadow-xs" viewBox="0 0 640 480">
        <path fill="#00008b" d="M0 0h640v480H0z"/>
        <path fill="#fff" d="m0 0 320 240m0-240L0 240" stroke="#fff" strokeWidth="40"/>
        <path fill="#cc0000" d="m0 0 320 240m0-240L0 240" stroke="#cc0000" strokeWidth="20"/>
        <path stroke="#fff" strokeWidth="60" d="M160 0v240M0 120h320"/>
        <path stroke="#cc0000" strokeWidth="36" d="M160 0v240M0 120h320"/>
      </svg>
    )
  },
  {
    code: '+49',
    name: 'Germany',
    flagSvg: (
      <svg className="w-5 h-3.5 rounded-[2px] shrink-0 shadow-xs" viewBox="0 0 640 480">
        <path fill="#ffce00" d="M0 320h640v160H0z"/>
        <path d="M0 0h640v160H0z"/>
        <path fill="#d00" d="M0 160h640v160H0z"/>
      </svg>
    )
  },
  {
    code: '+65',
    name: 'Singapore',
    flagSvg: (
      <svg className="w-5 h-3.5 rounded-[2px] shrink-0 shadow-xs" viewBox="0 0 640 480">
        <path fill="#ed2939" d="M0 0h640v240H0z"/>
        <path fill="#fff" d="M0 240h640v240H0z"/>
        <circle cx="120" cy="120" r="70" fill="#fff"/>
        <circle cx="140" cy="120" r="70" fill="#ed2939"/>
      </svg>
    )
  },
  {
    code: '+971',
    name: 'United Arab Emirates',
    flagSvg: (
      <svg className="w-5 h-3.5 rounded-[2px] shrink-0 shadow-xs" viewBox="0 0 640 480">
        <path fill="#00732f" d="M0 0h640v160H0z"/>
        <path fill="#fff" d="M0 160h640v160H0z"/>
        <path d="M0 320h640v160H0z"/>
        <path fill="red" d="M0 0h160v480H0z"/>
      </svg>
    )
  },
  {
    code: '+91',
    name: 'India',
    flagSvg: (
      <svg className="w-5 h-3.5 rounded-[2px] shrink-0 shadow-xs" viewBox="0 0 640 480">
        <path fill="#f93" d="M0 0h640v160H0z"/>
        <path fill="#fff" d="M0 160h640v160H0z"/>
        <path fill="#128807" d="M0 320h640v160H0z"/>
        <circle cx="320" cy="240" r="45" fill="none" stroke="#008" strokeWidth="6"/>
      </svg>
    )
  }
];

export function ContactSection() {
  const countryDropdownRef = useRef<HTMLDivElement>(null);
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+1',
    phone: '',
    inquiryType: 'Candidate Placement Advisory',
    message: ''
  });

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (countryDropdownRef.current && !countryDropdownRef.current.contains(event.target as Node)) {
        setCountryDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedCountry = COUNTRY_DIAL_OPTIONS.find((c) => c.code === formData.countryCode) || COUNTRY_DIAL_OPTIONS[0];

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const trimmedName = formData.name.trim();
    const trimmedPhone = formData.phone.trim();
    const trimmedMessage = formData.message.trim();

    // 1. Name validation
    if (!trimmedName || trimmedName.length < 2) {
      setError('Please provide your full name (at least 2 characters).');
      return;
    }
    if (trimmedName.length > 70) {
      setError('Name cannot exceed 70 characters.');
      return;
    }

    // 2. Anti-injection and anti-script validation
    if (
      containsMaliciousPayload(trimmedName) ||
      containsMaliciousPayload(trimmedMessage) ||
      containsMaliciousPayload(formData.email)
    ) {
      setError('Security Alert: HTML tags, scripts, and executable code are strictly prohibited.');
      return;
    }

    // 3. Phone validation
    const phoneValidation = validatePhoneNumber(trimmedPhone);
    if (!phoneValidation.valid) {
      setError(phoneValidation.error || 'Please enter a valid phone number (between 7 and 15 digits).');
      return;
    }

    // 4. Message length validation
    if (trimmedMessage.length < 5) {
      setError('Please enter a message with at least 5 characters.');
      return;
    }
    if (trimmedMessage.length > 1000) {
      setError('Message exceeds the maximum limit of 1,000 characters.');
      return;
    }

    setSubmitting(true);

    try {
      const sanitizedPayload = {
        fullName: sanitizeText(trimmedName, 70),
        email: formData.email.trim().toLowerCase(),
        phone: `${formData.countryCode} ${sanitizePhoneInput(trimmedPhone)}`,
        inquiryType: formData.inquiryType.toLowerCase().includes('candidate') ? 'candidate' : 'employer',
        message: sanitizeText(trimmedMessage, 1000)
      };

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(sanitizedPayload)
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setTicketId(data.ticketId || `INF-${Math.floor(100000 + Math.random() * 900000)}`);
        setSubmitted(true);
        confetti({
          particleCount: 90,
          spread: 70,
          origin: { y: 0.6 }
        });
      } else {
        const errorMsg = data.errors?.[0]?.message || data.message || 'Submission failed. Please check your inputs.';
        setError(errorMsg);
      }
    } catch {
      setError('A network error occurred while submitting. Please check your connection and try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="scroll-mt-28 pt-28 sm:pt-36 lg:pt-40 pb-20 sm:pb-28 md:pb-32 bg-[#F8FAFC] dark:bg-[#050708] text-[#102B50] dark:text-white relative overflow-hidden border-t border-slate-200 dark:border-[#203536]/80 select-none transition-colors duration-300"
      style={{
        scrollMarginTop: '110px'
      }}
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-[#087FCB]/5 dark:bg-[#00D5DF]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-[#00D5DF]/5 dark:bg-[#38BDF8]/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04] pointer-events-none [background-image:linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] dark:[background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:48px_48px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* ========================================================
              LEFT COLUMN: CONTACT INFO & BRAND VALUE
          ======================================================== */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-10">
            <div>
              {/* Eyebrow Badge */}
              <div
                className="contact-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] dark:bg-[#0C1517] border border-[#B7DDF5] dark:border-[#00D5DF]/40 text-xs font-mono font-bold text-[#0369A1] dark:text-[#00F0FF] tracking-widest uppercase mb-6 shadow-[0_2px_10px_rgba(8,127,203,0.1)] dark:shadow-[0_0_15px_rgba(0,213,223,0.15)]"
              >
                <span className="text-amber-500 dark:text-amber-400">★</span>
                <span>GET IN TOUCH</span>
              </div>

              {/* Headline */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#102B50] dark:text-white leading-tight uppercase mb-4">
                LET'S BUILD THE{' '}
                <span className="bg-gradient-to-r from-[#087FCB] via-[#00BFCB] to-[#38BDF8] dark:from-white dark:via-[#7DD3FC] dark:to-[#00D5DF] bg-clip-text text-transparent">
                  FUTURE TOGETHER
                </span>
              </h2>

              {/* Subtitle */}
              <p className="text-sm sm:text-base text-slate-600 dark:text-neutral-300 leading-relaxed font-normal max-w-md">
                Let&apos;s connect today and discuss your futuristic career trajectory or strategic corporate talent acquisition requirements.
              </p>
            </div>

            {/* Contact Details Cards */}
            <div className="space-y-4">
              {/* Phone */}
              <div
                className="contact-card flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#070D10] border border-slate-200 dark:border-[#203536] shadow-[0_4px_20px_rgba(16,43,80,0.05)] dark:shadow-none hover:border-[#087FCB]/40 dark:hover:border-[#00D5DF]/50 transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-xl bg-[#087FCB]/10 dark:bg-[#00D5DF]/10 border border-[#087FCB]/20 dark:border-[#00D5DF]/30 flex items-center justify-center text-[#087FCB] dark:text-[#00D5DF] shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="contact-subtext text-xs font-mono text-slate-500 dark:text-neutral-400 font-semibold uppercase tracking-wider mb-0.5">
                    Phone
                  </div>
                  <a
                    href="tel:+18005184902"
                    className="contact-value text-sm sm:text-base font-bold text-[#102B50] dark:text-white hover:text-[#087FCB] dark:hover:text-[#00D5DF] transition-colors"
                  >
                    +1 (800) 518-4902
                  </a>
                  <span className="contact-subtext text-xs text-slate-500 dark:text-neutral-400 block mt-0.5">
                    Mon – Fri, 9:00 AM – 6:00 PM EST
                  </span>
                </div>
              </div>

              {/* Email */}
              <div
                className="contact-card flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#070D10] border border-slate-200 dark:border-[#203536] shadow-[0_4px_20px_rgba(16,43,80,0.05)] dark:shadow-none hover:border-[#38BDF8]/50 transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-xl bg-[#0284C7]/10 dark:bg-[#38BDF8]/10 border border-[#0284C7]/20 dark:border-[#38BDF8]/30 flex items-center justify-center text-[#0284C7] dark:text-[#38BDF8] shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="contact-subtext text-xs font-mono text-slate-500 dark:text-neutral-400 font-semibold uppercase tracking-wider mb-0.5">
                    Email
                  </div>
                  <a
                    href="mailto:contact@infidelltech.com"
                    className="contact-value text-sm sm:text-base font-bold text-[#102B50] dark:text-white hover:text-[#0284C7] dark:hover:text-[#38BDF8] transition-colors"
                  >
                    contact@infidelltech.com
                  </a>
                  <span className="contact-subtext text-xs text-slate-500 dark:text-neutral-400 block mt-0.5">
                    Executive talent &amp; client inquiries
                  </span>
                </div>
              </div>

              {/* Office */}
              <div
                className="contact-card flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#070D10] border border-slate-200 dark:border-[#203536] shadow-[0_4px_20px_rgba(16,43,80,0.05)] dark:shadow-none hover:border-[#7C3AED]/40 dark:hover:border-[#A78BFA]/50 transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-xl bg-[#7C3AED]/10 dark:bg-[#A78BFA]/10 border border-[#7C3AED]/20 dark:border-[#A78BFA]/30 flex items-center justify-center text-[#7C3AED] dark:text-[#A78BFA] shrink-0 group-hover:scale-105 transition-transform">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="contact-subtext text-xs font-mono text-slate-500 dark:text-neutral-400 font-semibold uppercase tracking-wider mb-0.5">
                    Corporate Office
                  </div>
                  <div className="contact-value text-xs sm:text-sm font-medium text-[#102B50] dark:text-white leading-relaxed">
                    Infidell Technology, US Headquarters: 100 Montgomery St, Suite 1800, San Francisco, CA 94104, USA
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Assurance */}
            <div className="pt-2 flex items-center gap-3 text-xs text-slate-500 dark:text-neutral-400">
              <ShieldCheck className="w-4 h-4 text-[#087FCB] dark:text-[#00D5DF]" />
              <span>100% Confidential · Ethical Placement Standards</span>
            </div>
          </div>

          {/* ========================================================
              RIGHT COLUMN: INTERACTIVE FORM CARD
          ======================================================== */}
          <div className="lg:col-span-7">
            <div
              className="contact-form-panel rounded-3xl p-5 xs:p-6 sm:p-8 md:p-10 bg-white dark:bg-[#070D10]/90 border border-slate-200 dark:border-[#203536] shadow-[0_20px_50px_rgba(16,43,80,0.08)] dark:shadow-2xl backdrop-blur-2xl relative overflow-hidden"
            >

              {/* Ambient Radial Accent */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#087FCB]/5 dark:bg-[#087FCB]/10 rounded-full blur-[100px] pointer-events-none" />

              {!submitted ? (
                <>
                  <div className="mb-6 sm:mb-8">
                    <h3 className="contact-title text-xl xs:text-2xl sm:text-3xl font-extrabold text-[#102B50] dark:text-white tracking-tight mb-2">
                      Let&apos;s Build Together
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-neutral-300 leading-relaxed">
                      Fill out the details below and an executive talent specialist will reach out to you promptly.
                    </p>
                  </div>

                  {error && (
                    <div className="mb-6 p-4 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-500/50 text-red-600 dark:text-red-300 text-xs flex items-center gap-2.5">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                    {/* Row 1: Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contact-fullName" className="text-xs font-semibold text-[#1E293B] dark:text-neutral-300 block mb-1.5">
                          Your Name *
                        </label>
                        <input
                          id="contact-fullName"
                          type="text"
                          required
                          maxLength={70}
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value.slice(0, 70) })}
                          placeholder="John Doe"
                          className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] dark:bg-[#0C1517] border border-slate-300 dark:border-[#203536] text-sm text-[#0F172A] dark:text-white placeholder-slate-400 dark:placeholder-neutral-500 focus:outline-none focus:bg-white dark:focus:bg-[#0C1517] focus:border-[#087FCB] dark:focus:border-[#00D5DF] focus:ring-2 focus:ring-[#087FCB]/20 dark:focus:ring-[#00D5DF]/25 transition-all shadow-sm"
                        />
                      </div>

                      <div>
                        <label htmlFor="contact-email" className="text-xs font-semibold text-[#1E293B] dark:text-neutral-300 block mb-1.5">
                          Your Email *
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          maxLength={100}
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value.slice(0, 100) })}
                          placeholder="john@example.com"
                          className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] dark:bg-[#0C1517] border border-slate-300 dark:border-[#203536] text-sm text-[#0F172A] dark:text-white placeholder-slate-400 dark:placeholder-neutral-500 focus:outline-none focus:bg-white dark:focus:bg-[#0C1517] focus:border-[#087FCB] dark:focus:border-[#00D5DF] focus:ring-2 focus:ring-[#087FCB]/20 dark:focus:ring-[#00D5DF]/25 transition-all shadow-sm"
                        />
                      </div>
                    </div>

                    {/* Row 2: Phone with Country Code */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label htmlFor="contact-phone" className="text-xs font-semibold text-[#1E293B] dark:text-neutral-300">
                          Phone Number *
                        </label>
                        <span className="text-[11px] font-mono text-slate-400 dark:text-neutral-500">
                          7–15 digits
                        </span>
                      </div>
                      <div className="flex gap-2">
                        {/* Custom Nation Flag & Dial Code Dropdown */}
                        <div ref={countryDropdownRef} className="relative">
                          <button
                            type="button"
                            onClick={() => setCountryDropdownOpen(!countryDropdownOpen)}
                            aria-label="Select Country Code"
                            className="h-[46px] sm:h-[48px] px-2.5 sm:px-3 rounded-xl bg-[#F8FAFC] dark:bg-[#0C1517] border border-slate-300 dark:border-[#203536] text-xs sm:text-sm font-medium text-[#0F172A] dark:text-white flex items-center gap-1.5 focus:outline-none focus:border-[#087FCB] dark:focus:border-[#00D5DF] focus:ring-2 focus:ring-[#087FCB]/20 dark:focus:ring-[#00D5DF]/25 transition-all shadow-sm cursor-pointer shrink-0"
                          >
                            {selectedCountry.flagSvg}
                            <span className="font-semibold text-xs sm:text-sm">{selectedCountry.code}</span>
                            <ChevronDown className={`w-3.5 h-3.5 text-slate-400 dark:text-neutral-400 transition-transform ${countryDropdownOpen ? 'rotate-180' : ''}`} />
                          </button>

                          {countryDropdownOpen && (
                            <div className="absolute top-full left-0 mt-1.5 w-52 py-1.5 rounded-xl bg-white dark:bg-[#0C1517] border border-slate-200 dark:border-[#203536] shadow-xl z-30 max-h-60 overflow-y-auto">
                              {COUNTRY_DIAL_OPTIONS.map((item) => (
                                <button
                                  key={item.code}
                                  type="button"
                                  onClick={() => {
                                    setFormData({ ...formData, countryCode: item.code });
                                    setCountryDropdownOpen(false);
                                  }}
                                  className={`w-full px-3 py-2 text-left flex items-center justify-between text-xs sm:text-sm transition-colors cursor-pointer ${
                                    formData.countryCode === item.code
                                      ? 'bg-blue-50 dark:bg-white/10 text-[#087FCB] dark:text-[#00D5DF] font-semibold'
                                      : 'text-slate-700 dark:text-neutral-200 hover:bg-slate-100 dark:hover:bg-white/5'
                                  }`}
                                >
                                  <div className="flex items-center gap-2.5">
                                    {item.flagSvg}
                                    <span className="truncate">{item.name}</span>
                                  </div>
                                  <span className="font-mono text-xs text-slate-500 dark:text-neutral-400 shrink-0 ml-2">
                                    {item.code}
                                  </span>
                                </button>
                              ))}
                            </div>
                          )}
                        </div>

                        <input
                          id="contact-phone"
                          type="tel"
                          required
                          maxLength={16}
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: sanitizePhoneInput(e.target.value) })}
                          placeholder="(555) 123-4567"
                          className="flex-1 min-w-0 px-3 sm:px-4 py-3 rounded-xl bg-[#F8FAFC] dark:bg-[#0C1517] border border-slate-300 dark:border-[#203536] text-sm text-[#0F172A] dark:text-white placeholder-slate-400 dark:placeholder-neutral-500 focus:outline-none focus:bg-white dark:focus:bg-[#0C1517] focus:border-[#087FCB] dark:focus:border-[#00D5DF] focus:ring-2 focus:ring-[#087FCB]/20 dark:focus:ring-[#00D5DF]/25 transition-all shadow-sm"
                        />
                      </div>
                    </div>

                    {/* Row 3: Inquiry Type */}
                    <div>
                      <label htmlFor="contact-inquiryType" className="text-xs font-semibold text-[#1E293B] dark:text-neutral-300 block mb-1.5">
                        Inquiry Nature
                      </label>
                      <select
                        id="contact-inquiryType"
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] dark:bg-[#0C1517] border border-slate-300 dark:border-[#203536] text-sm text-[#0F172A] dark:text-white focus:outline-none focus:bg-white dark:focus:bg-[#0C1517] focus:border-[#087FCB] dark:focus:border-[#00D5DF] focus:ring-2 focus:ring-[#087FCB]/20 dark:focus:ring-[#00D5DF]/25 transition-all shadow-sm cursor-pointer"
                      >
                        <option value="Candidate Placement Advisory">Candidate Career Representation &amp; Advisory</option>
                        <option value="Corporate Recruitment & Staffing">Corporate Recruitment &amp; Technical Staffing</option>
                        <option value="Executive Search & Leadership">Confidential Executive Search &amp; Leadership Headhunting</option>
                        <option value="Referral & Partnership">Refer &amp; Earn Program Inquiry</option>
                      </select>
                    </div>

                    {/* Row 4: Your Message */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label htmlFor="contact-message" className="text-xs font-semibold text-[#1E293B] dark:text-neutral-300">
                          Your Message *
                        </label>
                        <span className="text-[11px] font-mono text-slate-400 dark:text-neutral-500">
                          {formData.message.length}/1000
                        </span>
                      </div>
                      <textarea
                        id="contact-message"
                        rows={4}
                        required
                        maxLength={1000}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value.slice(0, 1000) })}
                        placeholder="Tell us about how we can help you..."
                        className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] dark:bg-[#0C1517] border border-slate-300 dark:border-[#203536] text-sm text-[#0F172A] dark:text-white placeholder-slate-400 dark:placeholder-neutral-500 focus:outline-none focus:bg-white dark:focus:bg-[#0C1517] focus:border-[#087FCB] dark:focus:border-[#00D5DF] focus:ring-2 focus:ring-[#087FCB]/20 dark:focus:ring-[#00D5DF]/25 transition-all shadow-sm resize-y"
                      />
                    </div>

                    {/* Full-width CTA Button (Zarvion Signature) */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="relative w-full py-4 px-6 rounded-2xl text-base font-bold text-white bg-gradient-to-r from-[#087FCB] via-[#00BFCB] to-[#38BDF8] hover:shadow-[0_4px_35px_rgba(8,127,203,0.45)] hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 overflow-hidden group shadow-lg"
                      >
                        <span className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" />
                        {submitting ? (
                          <span>Connecting Your Request...</span>
                        ) : (
                          <>
                            <span>Let&apos;s Build Together</span>
                            <ArrowUpRight className="w-5 h-5" />
                          </>
                        )}
                      </button>
                    </div>

                    <div className="text-center">
                      <span className="text-[11px] text-slate-500 dark:text-neutral-400 font-mono">
                        Protected by enterprise NDA · Strict data privacy compliance
                      </span>
                    </div>
                  </form>
                </>
              ) : (
                /* Success State */
                <div className="py-12 text-center space-y-5 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/15 border-2 border-emerald-500/40 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h3 className="contact-title text-2xl sm:text-3xl font-extrabold text-[#102B50] dark:text-white">
                    Inquiry Received!
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-neutral-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#102B50] dark:text-white">{formData.name}</strong>. Your message regarding <strong className="text-[#087FCB] dark:text-[#00D5DF]">{formData.inquiryType}</strong> has been logged. An executive advisor will connect with you promptly.
                  </p>

                  <div className="inline-block px-4 py-2 rounded-xl bg-[#EFF6FF] dark:bg-[#0C1517] border border-[#B7DDF5] dark:border-[#00D5DF]/40 text-xs font-mono text-[#087FCB] dark:text-[#00D5DF]">
                    Ticket Reference: {ticketId}
                  </div>

                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          countryCode: '+1',
                          phone: '',
                          inquiryType: 'Candidate Placement Advisory',
                          message: ''
                        });
                      }}
                      className="px-6 py-2.5 rounded-full text-xs font-bold text-white dark:text-black bg-[#087FCB] dark:bg-[#00D5DF] hover:bg-[#0284C7] dark:hover:bg-[#38BDF8] transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
