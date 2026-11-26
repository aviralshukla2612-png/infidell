'use client';

import React, { useState } from 'react';
import {
  Cpu,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  X,
  ShieldCheck,
  TrendingUp
} from 'lucide-react';

interface ServiceItem {
  id: string;
  tag: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  accentBorder: string;
  highlights: string[];
  deliverables: string[];
  ctaLabel: string;
  ctaHref: string;
}

export function ServicesSection() {
  const [activeModal, setActiveModal] = useState<ServiceItem | null>(null);

  const services: ServiceItem[] = [
    {
      id: 'executive-search',
      tag: 'Leadership & C-Suite',
      title: 'Executive Search & Leadership Hiring',
      shortDesc: 'Discreet, retained executive search dedicated to placing transformational VPs, Directors, and C-level leaders who define strategic technology roadmaps.',
      fullDesc: 'Our Executive Search practice operates under complete confidentiality to identify, evaluate, and secure high-impact technology leaders. We conduct deep executive alignment assessments, cultural fit evaluations, and compensation structuring for VP, SVP, and C-Suite mandates across North America.',
      icon: <ShieldCheck className="w-6 h-6 text-[#087FCB] dark:text-[#00E5F0]" />,
      iconBg: 'bg-[#087FCB]/10 dark:bg-[#00E5F0]/10',
      iconColor: 'text-[#087FCB] dark:text-[#00E5F0]',
      accentBorder: 'hover:border-[#087FCB] dark:hover:border-[#00E5F0]/60',
      highlights: [
        'Confidential Retained Search Mandates',
        'C-Suite, VP & Engineering Director Roles',
        'Executive Leadership & Cultural Alignment',
        'Strict NDA Discretion & Verification'
      ],
      deliverables: [
        'Full executive candidate dossier within 14 business days',
        '360-degree reference checking & background validation',
        'Executive compensation & equity benchmarking',
        '6-month post-placement leadership onboarding support'
      ],
      ctaLabel: 'Schedule Executive Consultation',
      ctaHref: '#contact'
    },
    {
      id: 'technical-staffing',
      tag: 'Engineering & Tech Teams',
      title: 'Technical Recruitment & Strategic Staffing',
      shortDesc: 'Precision technical talent acquisition connecting forward-thinking tech enterprises with pre-vetted senior software engineers, AI/ML specialists, and cloud architects.',
      fullDesc: 'We bridge critical engineering skill gaps with precision-targeted direct hire and specialized contract placement. Every technical candidate is evaluated by subject-matter recruiting specialists across live systems coding, distributed architecture, and team collaboration readiness.',
      icon: <Cpu className="w-6 h-6 text-[#00BFCB] dark:text-[#38BDF8]" />,
      iconBg: 'bg-[#00BFCB]/10 dark:bg-[#38BDF8]/10',
      iconColor: 'text-[#00BFCB] dark:text-[#38BDF8]',
      accentBorder: 'hover:border-[#00BFCB] dark:hover:border-[#38BDF8]/60',
      highlights: [
        'Direct-Hire & High-Velocity Contract Staffing',
        'Senior Full-Stack, Cloud & DevOps Specialists',
        'Generative AI, LLM & Machine Learning Talent',
        'Zero-Spam, Highly Vetted Candidate Shortlists'
      ],
      deliverables: [
        'Pre-screened technical candidate profiles in 48-72 hours',
        'Standardized technical competency & code assessment notes',
        'W-2 / 1099 compliant payroll & contractor onboarding',
        '90-day comprehensive candidate placement guarantee'
      ],
      ctaLabel: 'Request Talent Briefing',
      ctaHref: '#contact'
    },
    {
      id: 'career-advancement',
      tag: 'Candidate Placement',
      title: 'Career Advancement & Talent Placement',
      shortDesc: 'Empowering senior professionals with strategic placement advisory, resume ATS optimization, compensation benchmarking, and direct introductions to hiring managers.',
      fullDesc: 'We treat job seekers as career partners, not line items. Our dedicated candidate advisors provide 1-on-1 portfolio reviews, interview preparation coaching, and direct introductions to vetted engineering leaders across top technology enterprises and innovation hubs.',
      icon: <TrendingUp className="w-6 h-6 text-[#0284C7] dark:text-[#2DD4BF]" />,
      iconBg: 'bg-[#0284C7]/10 dark:bg-[#2DD4BF]/10',
      iconColor: 'text-[#0284C7] dark:text-[#2DD4BF]',
      accentBorder: 'hover:border-[#0284C7] dark:hover:border-[#2DD4BF]/60',
      highlights: [
        '1-on-1 Dedicated Career Placement Advisory',
        'ATS Resume & Portfolio Architecture Reviews',
        'Direct Access to Unlisted Enterprise Roles',
        'Comprehensive Offer & Equity Negotiation'
      ],
      deliverables: [
        'Confidential candidate representation to verified employers',
        'System design & mock interview preparation sessions',
        'Real-time status tracking throughout interview loops',
        'Dedicated executive career advisory for candidates'
      ],
      ctaLabel: 'Explore Career Opportunities',
      ctaHref: '#careers'
    }
  ];

  const handleModalClose = () => {
    setActiveModal(null);
  };

  const handleModalCTA = (href: string) => {
    handleModalClose();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="services"
      className="py-24 sm:py-32 bg-[#F8FAFC] dark:bg-[#050708] relative overflow-hidden border-t border-[#DCE5EF] dark:border-[#203536]/80 scroll-mt-20 transition-colors duration-300"
    >
      {/* Background ambient radial depth glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#087FCB]/5 via-[#00D5DF]/10 to-[#38BDF8]/5 dark:from-[#00E5F0]/10 dark:via-[#087FCB]/10 dark:to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase text-[#087FCB] dark:text-[#00E5F0] bg-[#087FCB]/10 dark:bg-[#00E5F0]/10 border border-[#087FCB]/20 dark:border-[#00E5F0]/30 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Core Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#102B50] dark:text-white leading-tight mb-4">
            Specialized Talent &{' '}
            <span className="font-medium bg-gradient-to-r from-[#087FCB] to-[#00BFCB] dark:from-[#7DD3FC] dark:to-[#00D5DF] bg-clip-text text-transparent">
              Recruitment Services.
            </span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-[#475569] dark:text-[#A5B2B3] leading-relaxed font-normal">
            Tailored workforce solutions bridging world-class engineering talent with high-growth tech enterprises across North America.
          </p>
        </div>

        {/* 3 Attractive Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {services.map((service) => (
            <div
              key={service.id}
              className={`service-card group relative flex flex-col justify-between p-8 sm:p-9 rounded-3xl bg-white/90 dark:bg-[#070D10]/90 backdrop-blur-xl border border-[#DCE5EF] dark:border-[#203536] ${service.accentBorder} transition-all duration-300 shadow-[0_4px_25px_rgba(16,43,80,0.05)] hover:shadow-[0_16px_45px_rgba(8,127,203,0.14)] dark:hover:shadow-[0_16px_45px_rgba(0,213,223,0.18)] transform-gpu hover:-translate-y-1.5`}
            >
              {/* Card Top: Icon & Tag */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-14 h-14 rounded-2xl ${service.iconBg} border border-white/20 dark:border-white/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-sm`}>
                    {service.icon}
                  </div>
                  <span className="text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-[#AEB8C2]">
                    {service.tag}
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-[#102B50] dark:text-white tracking-tight mb-3 group-hover:text-[#087FCB] dark:group-hover:text-[#00D5DF] transition-colors leading-snug">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-[#475569] dark:text-[#A5B2B3] leading-relaxed mb-6 font-normal">
                  {service.shortDesc}
                </p>

                {/* Feature Checklist */}
                <div className="space-y-2.5 mb-8 pt-4 border-t border-slate-100 dark:border-[#203536]/60">
                  {service.highlights.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-neutral-300">
                      <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${service.iconColor}`} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Bottom: Learn More Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setActiveModal(service)}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold text-[#102B50] dark:text-white bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:bg-[#087FCB] hover:text-white dark:hover:bg-[#00D5DF] dark:hover:text-black hover:border-transparent transition-all duration-300 group/btn cursor-pointer shadow-sm transform-gpu"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Service Detail Modal */}
      {activeModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
          onClick={handleModalClose}
        >
          <div
            className="relative w-full max-w-2xl bg-white dark:bg-[#070D10] border border-[#DCE5EF] dark:border-[#203536] rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 text-slate-900 dark:text-white max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={handleModalClose}
              aria-label="Close service details"
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 border border-slate-200 dark:border-white/15 flex items-center justify-center text-slate-700 dark:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-4 mb-5">
              <div className={`w-14 h-14 rounded-2xl ${activeModal.iconBg} border border-white/20 flex items-center justify-center shrink-0`}>
                {activeModal.icon}
              </div>
              <div>
                <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-[#AEB8C2]">
                  {activeModal.tag}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#102B50] dark:text-white mt-1">
                  {activeModal.title}
                </h3>
              </div>
            </div>

            {/* Full Description */}
            <p className="text-sm text-[#475569] dark:text-[#A5B2B3] leading-relaxed mb-6 font-normal">
              {activeModal.fullDesc}
            </p>

            {/* Core Capabilities */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#102B50] dark:text-white mb-3">
                Core Capabilities
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeModal.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-neutral-300">
                    <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${activeModal.iconColor}`} />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Deliverables */}
            <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#102B50] dark:text-white mb-3">
                Service Deliverables & SLA
              </h4>
              <div className="space-y-2">
                {activeModal.deliverables.map((d, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-neutral-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#087FCB] dark:bg-[#00D5DF] mt-1.5 shrink-0" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => handleModalCTA(activeModal.ctaHref)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#087FCB] to-[#00BFCB] hover:shadow-[0_4px_25px_rgba(8,127,203,0.4)] transition-all cursor-pointer"
              >
                <span>{activeModal.ctaLabel}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleModalClose}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
