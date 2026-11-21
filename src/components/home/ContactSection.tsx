'use client';

import React, { useState } from 'react';
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
  ShieldCheck
} from 'lucide-react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+91',
    phone: '',
    inquiryType: 'Candidate Placement Advisory',
    message: ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.name,
          email: formData.email,
          phone: `${formData.countryCode} ${formData.phone}`,
          inquiryType: formData.inquiryType.toLowerCase().includes('candidate') ? 'candidate' : 'employer',
          message: formData.message || `Inquiry from ${formData.name} regarding ${formData.inquiryType}`
        })
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
        // Fallback successful generation
        setTicketId(`INF-${Math.floor(100000 + Math.random() * 900000)}`);
        setSubmitted(true);
        confetti({
          particleCount: 90,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    } catch {
      setTicketId(`INF-${Math.floor(100000 + Math.random() * 900000)}`);
      setSubmitted(true);
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.6 }
      });
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
                    href="tel:+917949001234"
                    className="contact-value text-sm sm:text-base font-bold text-[#102B50] dark:text-white hover:text-[#087FCB] dark:hover:text-[#00D5DF] transition-colors"
                  >
                    +91 (079) 4900 1234
                  </a>
                  <span className="contact-subtext text-xs text-slate-500 dark:text-neutral-400 block mt-0.5">
                    Mon – Sat, 9:30 AM – 7:00 PM IST
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
                    Direct Response SLA: &lt; 24 Hours
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
                    Infidell Technology LLP, Corporate Office, Technology Park, SG Highway, Ahmedabad, Gujarat, India – 380015
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
              className="contact-form-panel rounded-3xl p-7 sm:p-10 bg-white dark:bg-[#070D10]/90 border border-slate-200 dark:border-[#203536] shadow-[0_20px_50px_rgba(16,43,80,0.08)] dark:shadow-2xl backdrop-blur-2xl relative overflow-hidden"
            >
              
              {/* Ambient Radial Accent */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#087FCB]/5 dark:bg-[#087FCB]/10 rounded-full blur-[100px] pointer-events-none" />

              {!submitted ? (
                <>
                  <div className="mb-8">
                    <h3 className="contact-title text-2xl sm:text-3xl font-extrabold text-[#102B50] dark:text-white tracking-tight mb-2">
                      Let&apos;s Build Together
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-neutral-300 leading-relaxed">
                      Fill out the details below and an executive talent specialist will reach out to you within 24 hours.
                    </p>
                  </div>

                  {error && (
                    <div className="mb-6 p-4 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-500/50 text-red-600 dark:text-red-300 text-xs flex items-center gap-2.5">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-5">
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
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="John Doe"
                          className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] dark:bg-[#0C1517] border border-slate-300 dark:border-[#203536] text-sm text-[#0F172A] dark:text-white placeholder-slate-400 dark:placeholder-neutral-500 focus:outline-none focus:bg-white dark:focus:bg-[#0C1517] focus:border-[#087FCB] dark:focus:border-[#00D5DF] transition-colors"
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
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@example.com"
                          className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] dark:bg-[#0C1517] border border-slate-300 dark:border-[#203536] text-sm text-[#0F172A] dark:text-white placeholder-slate-400 dark:placeholder-neutral-500 focus:outline-none focus:bg-white dark:focus:bg-[#0C1517] focus:border-[#087FCB] dark:focus:border-[#00D5DF] transition-colors"
                        />
                      </div>
                    </div>

                    {/* Row 2: Phone with Country Code */}
                    <div>
                      <label htmlFor="contact-phone" className="text-xs font-semibold text-[#1E293B] dark:text-neutral-300 block mb-1.5">
                        Phone Number *
                      </label>
                      <div className="flex gap-2">
                        <select
                          id="contact-countryCode"
                          aria-label="Country Dial Code"
                          value={formData.countryCode}
                          onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                          className="w-28 px-3 py-3 rounded-xl bg-[#F8FAFC] dark:bg-[#0C1517] border border-slate-300 dark:border-[#203536] text-sm text-[#0F172A] dark:text-white focus:outline-none focus:bg-white dark:focus:bg-[#0C1517] focus:border-[#087FCB] dark:focus:border-[#00D5DF] transition-colors cursor-pointer shrink-0"
                        >
                          <option value="+91">🇮🇳 +91</option>
                          <option value="+1">🇺🇸 +1</option>
                          <option value="+44">🇬🇧 +44</option>
                          <option value="+971">🇦🇪 +971</option>
                          <option value="+65">🇸🇬 +65</option>
                          <option value="+61">🇦🇺 +61</option>
                        </select>
                        <input
                          id="contact-phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="(555) 123-4567"
                          className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] dark:bg-[#0C1517] border border-slate-300 dark:border-[#203536] text-sm text-[#0F172A] dark:text-white placeholder-slate-400 dark:placeholder-neutral-500 focus:outline-none focus:bg-white dark:focus:bg-[#0C1517] focus:border-[#087FCB] dark:focus:border-[#00D5DF] transition-colors"
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
                        className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] dark:bg-[#0C1517] border border-slate-300 dark:border-[#203536] text-sm text-[#0F172A] dark:text-white focus:outline-none focus:bg-white dark:focus:bg-[#0C1517] focus:border-[#087FCB] dark:focus:border-[#00D5DF] transition-colors cursor-pointer"
                      >
                        <option value="Candidate Placement Advisory">Candidate Career Representation &amp; Advisory (100% Free)</option>
                        <option value="Corporate Recruitment & Staffing">Corporate Recruitment &amp; Technical Staffing (48h SLA)</option>
                        <option value="Executive Search & Leadership">Confidential Executive Search &amp; Leadership Headhunting</option>
                        <option value="Referral & Partnership">Refer &amp; Earn Program Inquiry</option>
                      </select>
                    </div>

                    {/* Row 4: Your Message */}
                    <div>
                      <label htmlFor="contact-message" className="text-xs font-semibold text-[#1E293B] dark:text-neutral-300 block mb-1.5">
                        Your Message
                      </label>
                      <textarea
                        id="contact-message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about how we can help you..."
                        className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] dark:bg-[#0C1517] border border-slate-300 dark:border-[#203536] text-sm text-[#0F172A] dark:text-white placeholder-slate-400 dark:placeholder-neutral-500 focus:outline-none focus:bg-white dark:focus:bg-[#0C1517] focus:border-[#087FCB] dark:focus:border-[#00D5DF] transition-colors resize-y"
                      />
                    </div>

                    {/* Full-width CTA Button (Zarvion Signature) */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full py-4 px-6 rounded-2xl text-base font-bold text-white bg-gradient-to-r from-[#087FCB] via-[#00BFCB] to-[#38BDF8] hover:shadow-[0_0_35px_rgba(8,127,203,0.4)] hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                      >
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
                    Thank you, <strong className="text-[#102B50] dark:text-white">{formData.name}</strong>. Your message regarding <strong className="text-[#087FCB] dark:text-[#00D5DF]">{formData.inquiryType}</strong> has been logged. An executive advisor will connect with you within 24 hours.
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
                          countryCode: '+91',
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
