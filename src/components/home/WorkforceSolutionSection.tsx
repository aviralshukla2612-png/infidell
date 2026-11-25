'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowUpRight } from 'lucide-react';

interface SolutionCard {
  id: string;
  title: string;
  tagline: string;
  description: string;
  href: string;
  bgColorLight: string;
  borderColorLight: string;
  bgColorDark: string;
  borderColorDark: string;
  accent: string;
  pills: string[];
  imageSrc: string;
  imageAlt: string;
}

export function WorkforceSolutionSection() {
  const sectionRef = useRef<HTMLElement>(null);

  // Top row cards (2-column layout: 2fr + 1fr on desktop)
  const topCards: SolutionCard[] = [
    {
      id: 'job-placement',
      title: 'Job Placement & Career Advancement',
      tagline: 'Candidate Career Advocacy',
      description: 'Empowering ambitious engineering and corporate professionals with personalized placement advisory, resume ATS optimization, and direct access to vetted hiring managers across top US hubs.',
      href: '#contact',
      bgColorLight: '#FAF6EF',
      borderColorLight: '#EFE3D3',
      bgColorDark: '#08131C',
      borderColorDark: 'rgba(8, 127, 203, 0.35)',
      accent: '#087FCB',
      pills: ['1-on-1 Career Advisory', 'ATS Resume Optimization', 'Direct Enterprise Access'],
      imageSrc: '/images/solutions/job-placement.avif',
      imageAlt: 'Job Placement Professional looking toward long-term career growth'
    },
    {
      id: 'recruitment-staffing',
      title: 'Recruitment & Strategic Staffing',
      tagline: 'Enterprise Talent Sourcing',
      description: 'Connecting high-growth enterprises and venture-backed tech teams with pre-screened specialists aligned with your technical stack, payroll model, and delivery timelines.',
      href: '#contact',
      bgColorLight: '#FFF8E6',
      borderColorLight: '#F6E6C2',
      bgColorDark: '#12171E',
      borderColorDark: 'rgba(217, 119, 6, 0.35)',
      accent: '#D97706',
      pills: ['Pre-Screened Candidates', 'Full-Time & Contract', 'Zero Resume Spam'],
      imageSrc: '/images/solutions/recruitment-staffing.avif',
      imageAlt: 'Recruitment & Staffing candidate walking on forward path'
    }
  ];

  // Bottom row cards (4-column layout)
  const bottomCards: SolutionCard[] = [
    {
      id: 'talent-acquisition',
      title: 'Executive Search & Leadership',
      tagline: 'C-Suite & VP Mandates',
      description: 'Confidential retained executive search identifying transformational VP, Director, and C-suite technical leaders across North America.',
      href: '#contact',
      bgColorLight: '#F0F9FF',
      borderColorLight: '#BAE6FD',
      bgColorDark: '#091624',
      borderColorDark: 'rgba(2, 132, 199, 0.35)',
      accent: '#0284C7',
      pills: ['Confidential Search', 'Executive Alignment'],
      imageSrc: '/images/solutions/talent-acquisition.avif',
      imageAlt: 'Executive search leader leaping forward'
    },
    {
      id: 'background-verification',
      title: 'Background Verification & Audits',
      tagline: 'Due Diligence & Compliance',
      description: 'Comprehensive technical skill validation, employment history verification, and credential auditing for total hiring assurance.',
      href: '#contact',
      bgColorLight: '#FFF7ED',
      borderColorLight: '#FED7AA',
      bgColorDark: '#17110D',
      borderColorDark: 'rgba(234, 88, 12, 0.35)',
      accent: '#EA580C',
      pills: ['Skill Validation', 'Credential Auditing'],
      imageSrc: '/images/solutions/background-verification.avif',
      imageAlt: 'Background Verification inspection and candidate vetting'
    },
    {
      id: 'it-training',
      title: 'Technical Training & Readiness',
      tagline: 'Performance Briefing',
      description: 'Structured interview briefing, system architecture mock interviews, and technical readiness evaluations to maximize offer conversion.',
      href: '#contact',
      bgColorLight: '#FDF2F8',
      borderColorLight: '#FBCFE8',
      bgColorDark: '#190D18',
      borderColorDark: 'rgba(219, 39, 119, 0.35)',
      accent: '#DB2777',
      pills: ['Interview Briefing', 'System Design Mocks'],
      imageSrc: '/images/solutions/it-training.avif',
      imageAlt: 'Technical training candidate ascending skill growth stairs'
    },
    {
      id: 'accounting-taxes',
      title: 'Payroll, Accounting & Taxes',
      tagline: 'Statutory Payroll Management',
      description: 'Seamless onboarding support, compensation benchmarking, and compliant US payroll administration across W-2, 1099, and C2C engagements.',
      href: '#contact',
      bgColorLight: '#F7FEE7',
      borderColorLight: '#D9F99D',
      bgColorDark: '#11170A',
      borderColorDark: 'rgba(101, 163, 13, 0.35)',
      accent: '#65A30D',
      pills: ['US Payroll Support', 'W-2 / 1099 Compliance'],
      imageSrc: '/images/solutions/accounting-taxes.avif',
      imageAlt: 'Accounting and Taxes payroll success'
    }
  ];

  useGSAP(
    () => {
      if (typeof window === 'undefined') return;
      gsap.registerPlugin(ScrollTrigger);

      gsap.from('.solution-reveal', {
        y: 28,
        duration: 0.7,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          once: true
        }
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-20 lg:py-28 bg-[#FFFFFF] dark:bg-[#050708] border-t border-slate-200 dark:border-[#203536]/80 relative overflow-hidden scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="solution-reveal text-center max-w-4xl mx-auto mb-14 sm:mb-18 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#087FCB]/10 dark:bg-[#00D5DF]/10 border border-[#087FCB]/20 dark:border-[#00D5DF]/30">
            <span className="w-1.5 h-1.5 rounded-full bg-[#087FCB] dark:bg-[#00D5DF]" />
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#087FCB] dark:text-[#00D5DF]">
              OUR WORKFORCE SERVICES
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-light text-[#102B50] dark:text-white tracking-tight leading-[1.18]">
            Comprehensive Workforce Solutions & <br className="hidden sm:inline" />
            <span className="font-medium bg-gradient-to-r from-[#102B50] via-[#087FCB] to-[#00BFCB] dark:from-white dark:via-[#7DD3FC] dark:to-[#38BDF8] bg-clip-text text-transparent">
              Recruitment Services
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-neutral-300 max-w-2xl mx-auto leading-relaxed font-normal">
            From executive search and technical talent placement to compliance and skill verification, Infidell provides end-to-end workforce solutions that turn hires into long-term organizational success.
          </p>
        </div>

        {/* Cards Grid Wrapper */}
        <div className="space-y-6">
          {/* Top Row Grid (2 Columns: 2fr + 1fr on desktop) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {/* Card 1: Job Placement (Spans 2 columns on lg) */}
            <a
              href={topCards[0].href}
              className="solution-reveal solution-card-job-placement lg:col-span-2 group relative rounded-3xl p-7 sm:p-9 flex flex-col justify-between overflow-hidden border transition-all duration-300 transform hover:-translate-y-1 min-h-[420px] sm:min-h-[460px] shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)]"
            >
              {/* Top Light Ambient Bar on Hover */}
              <div 
                className="absolute top-0 inset-x-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `linear-gradient(90deg, transparent, ${topCards[0].accent}, transparent)`
                }}
              />

              {/* Content Top */}
              <div className="relative z-10 max-w-md sm:max-w-xl space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <div className="space-y-1">
                    <span 
                      className="text-xs font-mono font-bold tracking-wider uppercase"
                      style={{ color: topCards[0].accent }}
                    >
                      {topCards[0].tagline}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#102B50] dark:text-white tracking-tight group-hover:text-[#087FCB] dark:group-hover:text-[#7DD3FC] transition-colors duration-300">
                      {topCards[0].title}
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/10 group-hover:bg-[#087FCB] dark:group-hover:bg-[#00D5DF] group-hover:text-white dark:group-hover:text-[#050708] flex items-center justify-center text-[#102B50] dark:text-neutral-200 transition-all duration-300 flex-shrink-0">
                    <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
                <p className="text-sm sm:text-base text-slate-600 dark:text-neutral-300 leading-relaxed font-normal">
                  {topCards[0].description}
                </p>

                {/* Capability Pills */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {topCards[0].pills.map((pill) => (
                    <span
                      key={pill}
                      className="px-2.5 py-1 rounded-full text-xs font-medium bg-black/5 dark:bg-white/10 text-slate-700 dark:text-neutral-200 border border-black/5 dark:border-white/10"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Right Collage Illustration */}
              <div className="absolute right-0 bottom-0 w-[55%] sm:w-[48%] h-[60%] sm:h-[70%] pointer-events-none select-none overflow-hidden">
                <img
                  src={topCards[0].imageSrc}
                  alt={topCards[0].imageAlt}
                  className="w-full h-full object-contain object-bottom sm:object-right-bottom transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </a>

            {/* Card 2: Recruitment & Staffing (Spans 1 column on lg) */}
            <a
              href={topCards[1].href}
              className="solution-reveal solution-card-recruitment-staffing lg:col-span-1 group relative rounded-3xl p-7 sm:p-9 flex flex-col justify-between overflow-hidden border transition-all duration-300 transform hover:-translate-y-1 min-h-[420px] sm:min-h-[460px] shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)]"
            >
              {/* Top Light Ambient Bar on Hover */}
              <div 
                className="absolute top-0 inset-x-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `linear-gradient(90deg, transparent, ${topCards[1].accent}, transparent)`
                }}
              />

              {/* Content Top */}
              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <div className="space-y-1">
                    <span 
                      className="text-xs font-mono font-bold tracking-wider uppercase"
                      style={{ color: topCards[1].accent }}
                    >
                      {topCards[1].tagline}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#102B50] dark:text-white tracking-tight group-hover:text-[#D97706] dark:group-hover:text-[#FBBF24] transition-colors duration-300">
                      {topCards[1].title}
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/10 group-hover:bg-[#D97706] dark:group-hover:bg-[#FBBF24] group-hover:text-white dark:group-hover:text-[#050708] flex items-center justify-center text-[#102B50] dark:text-neutral-200 transition-all duration-300 flex-shrink-0">
                    <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
                <p className="text-sm sm:text-base text-slate-600 dark:text-neutral-300 leading-relaxed font-normal">
                  {topCards[1].description}
                </p>

                {/* Capability Pills */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {topCards[1].pills.map((pill) => (
                    <span
                      key={pill}
                      className="px-2.5 py-1 rounded-full text-xs font-medium bg-black/5 dark:bg-white/10 text-slate-700 dark:text-neutral-200 border border-black/5 dark:border-white/10"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Collage Illustration */}
              <div className="absolute inset-x-0 bottom-0 h-[48%] pointer-events-none select-none overflow-hidden">
                <img
                  src={topCards[1].imageSrc}
                  alt={topCards[1].imageAlt}
                  className="w-full h-full object-contain object-bottom transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </a>
          </div>

          {/* Bottom Row Grid (4 Columns on desktop, 2 on tablet, 1 on mobile) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {bottomCards.map((card) => (
              <a
                key={card.id}
                href={card.href}
                className={`solution-reveal solution-card-${card.id} group relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between overflow-hidden border transition-all duration-300 transform hover:-translate-y-1 min-h-[400px] sm:min-h-[440px] shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)]`}
              >
                {/* Top Light Ambient Bar on Hover */}
                <div 
                  className="absolute top-0 inset-x-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${card.accent}, transparent)`
                  }}
                />

                {/* Content Top */}
                <div className="relative z-10 space-y-3">
                  <div className="flex items-center justify-between gap-3">
                    <span 
                      className="text-xs font-mono font-bold tracking-wider uppercase"
                      style={{ color: card.accent }}
                    >
                      {card.tagline}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-black/5 dark:bg-white/10 group-hover:bg-[#102B50] dark:group-hover:bg-[#00D5DF] group-hover:text-white dark:group-hover:text-[#050708] flex items-center justify-center text-[#102B50] dark:text-neutral-200 transition-all duration-300 flex-shrink-0">
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#102B50] dark:text-white tracking-tight leading-snug">
                    {card.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-neutral-300 leading-relaxed font-normal">
                    {card.description}
                  </p>

                  {/* Capability Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {card.pills.map((pill) => (
                      <span
                        key={pill}
                        className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-black/5 dark:bg-white/10 text-slate-700 dark:text-neutral-200 border border-black/5 dark:border-white/10"
                      >
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Center Illustration */}
                <div className="absolute inset-x-0 bottom-0 h-[45%] pointer-events-none select-none overflow-hidden">
                  <img
                    src={card.imageSrc}
                    alt={card.imageAlt}
                    className="w-full h-full object-contain object-bottom transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
