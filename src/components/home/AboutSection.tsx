'use client';

import React, { useRef } from 'react';
import { useTranslations } from 'next-intl';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { 
  UserRoundSearch, 
  Building2, 
  Handshake, 
  Target, 
  ArrowUpRight,
  TrendingUp,
  ShieldCheck
} from 'lucide-react';

export function AboutSection() {
  const t = useTranslations('About');
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      if (typeof window === 'undefined') return;
      gsap.registerPlugin(ScrollTrigger);

      // 1. Headline split-word reveal
      if (headlineRef.current) {
        const words = headlineRef.current.querySelectorAll('.about-title-word');
        gsap.fromTo(
          words,
          { opacity: 0, y: 35, filter: 'blur(6px)' },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 0.8,
            stagger: 0.06,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headlineRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none'
            }
          }
        );
      }

      // 2. Editorial narrative blocks staggered entrance
      gsap.fromTo(
        '.about-editorial-block',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.16,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.about-editorial-container',
            start: 'top 75%',
            toggleActions: 'play none none none'
          }
        }
      );

      // 3. Interactive editorial pillars entrance
      gsap.fromTo(
        '.about-pillar-card',
        { opacity: 0, y: 40, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.14,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: '.about-pillars-grid',
            start: 'top 75%',
            toggleActions: 'play none none none'
          }
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section 
      ref={sectionRef} 
      id="about"
      className="py-24 sm:py-32 bg-[#050708] relative overflow-hidden border-t border-[#203536]/80"
    >
      {/* Subtle Ambient Radial Glow */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#17BEBB]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[450px] h-[450px] bg-[#102426]/30 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: Distinctive Editorial Layout */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0C1517] border border-[#17BEBB]/40 text-[11px] font-bold text-[#17BEBB] tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D5DF] animate-pulse" />
            {t('badge')}
          </div>

          <h2 
            ref={headlineRef}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#F5F8F8] tracking-tight leading-[1.12]"
          >
            <span className="about-title-word inline-block mr-2.5">People</span>
            <span className="about-title-word inline-block mr-2.5">First.</span>
            <span className="block mt-1 sm:mt-2">
              <span className="about-title-word inline-block mr-2.5 text-[#00D5DF]">Possibilities</span>
              <span className="about-title-word inline-block mr-2.5">Without</span>
              <span className="about-title-word inline-block cyan-text-gradient">Limits.</span>
            </span>
          </h2>
        </div>

        {/* Asymmetrical Editorial Narrative Grid */}
        <div className="about-editorial-container grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-20">
          {/* Main Statement (Left 7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="about-editorial-block text-lg sm:text-xl text-[#F5F8F8] font-medium leading-relaxed border-l-2 border-[#17BEBB] pl-6 py-1">
              {t('p1')}
            </div>
            <div className="about-editorial-block text-sm sm:text-base text-[#A5B2B3] leading-relaxed pl-6">
              {t('p2')}
            </div>
            <div className="about-editorial-block text-sm sm:text-base text-[#A5B2B3] leading-relaxed pl-6">
              {t('philosophy')}
            </div>
          </div>

          {/* Core Truth Statement / Pull-Quote (Right 5 Cols) */}
          <div className="lg:col-span-5 about-editorial-block p-8 rounded-3xl bg-[#0C1517] border border-[#203536] relative overflow-hidden group hover:border-[#17BEBB]/50 transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#17BEBB]/10 rounded-full blur-[50px] group-hover:bg-[#00D5DF]/15 transition-all duration-300 pointer-events-none" />
            <div className="w-12 h-12 rounded-2xl bg-[#102426] border border-[#203536] flex items-center justify-center text-[#00D5DF] mb-6">
              <Handshake className="w-6 h-6" strokeWidth={1.75} />
            </div>
            <h3 className="text-xl font-bold text-[#F5F8F8] mb-3 leading-snug">
              Why Professional Relationships Matter
            </h3>
            <p className="text-sm text-[#A5B2B3] leading-relaxed mb-6">
              {t('relationshipsMatter')} High-retention teams and accelerated careers aren&apos;t built through automated algorithms alone. They are forged through mutual accountability, verified skills, and dedicated human guidance.
            </p>
            <div className="flex items-center gap-3 text-xs font-semibold text-[#17BEBB] tracking-wide uppercase">
              <span className="w-8 h-[1px] bg-[#17BEBB]" />
              <span>Infidell Placement Creed</span>
            </div>
          </div>
        </div>

        {/* 3 Pillar Editorial Cards (Candidates, Employers, Trust) */}
        <div className="about-pillars-grid grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Candidate Guidance */}
          <div className="about-pillar-card p-8 rounded-2xl bg-[#0C1517] border border-[#203536] hover:border-[#17BEBB]/60 transition-all duration-300 relative group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#102426] border border-[#203536] flex items-center justify-center text-[#17BEBB] mb-6 group-hover:scale-110 transition-transform duration-300">
                <UserRoundSearch className="w-6 h-6" strokeWidth={1.75} />
              </div>
              <h4 className="text-lg font-bold text-[#F5F8F8] mb-2.5">
                Candidate Career Elevation
              </h4>
              <p className="text-xs sm:text-sm text-[#A5B2B3] leading-relaxed mb-6">
                {t('candidateGuidance')} Every professional receives structured feedback, resume alignment, and active interview briefings from domain recruiters.
              </p>
            </div>
            <a 
              href="#candidate" 
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00D5DF] hover:text-[#A6E7DF] transition-colors"
            >
              <span>Explore Candidate Path</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 2: Corporate Recruitment */}
          <div className="about-pillar-card p-8 rounded-2xl bg-[#0C1517] border border-[#203536] hover:border-[#00D5DF]/60 transition-all duration-300 relative group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#102426] border border-[#203536] flex items-center justify-center text-[#00D5DF] mb-6 group-hover:scale-110 transition-transform duration-300">
                <Building2 className="w-6 h-6" strokeWidth={1.75} />
              </div>
              <h4 className="text-lg font-bold text-[#F5F8F8] mb-2.5">
                Employer Talent Delivery
              </h4>
              <p className="text-xs sm:text-sm text-[#A5B2B3] leading-relaxed mb-6">
                {t('employerSupport')} We pre-screen candidates for technical excellence, tenure stability, and organizational synergy to guarantee seamless hiring.
              </p>
            </div>
            <a 
              href="#employer" 
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00D5DF] hover:text-[#A6E7DF] transition-colors"
            >
              <span>Explore Hiring Portal</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 3: Ethical Alignment */}
          <div className="about-pillar-card p-8 rounded-2xl bg-[#0C1517] border border-[#203536] hover:border-[#17BEBB]/60 transition-all duration-300 relative group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#102426] border border-[#203536] flex items-center justify-center text-[#17BEBB] mb-6 group-hover:scale-110 transition-transform duration-300">
                <ShieldCheck className="w-6 h-6" strokeWidth={1.75} />
              </div>
              <h4 className="text-lg font-bold text-[#F5F8F8] mb-2.5">
                Responsible Placement
              </h4>
              <p className="text-xs sm:text-sm text-[#A5B2B3] leading-relaxed mb-6">
                Zero candidate fees, verified corporate mandates, and end-to-end transparency. We operate with strict compliance and verified client payrolls.
              </p>
            </div>
            <a 
              href="#process" 
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00D5DF] hover:text-[#A6E7DF] transition-colors"
            >
              <span>View Transparent Process</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
