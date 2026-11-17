'use client';

import React, { useRef } from 'react';
import { useTranslations } from 'next-intl';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { 
  UserRoundSearch, 
  GraduationCap, 
  BriefcaseBusiness, 
  Target, 
  Network, 
  CalendarCheck, 
  FileUser, 
  ClipboardCheck, 
  Handshake, 
  Building2, 
  ArrowRight,
  CheckCircle2,
  TrendingUp
} from 'lucide-react';

export function CandidateAndEmployerExperienceSection() {
  const tCandidate = useTranslations('CandidateExperience');
  const tEmployer = useTranslations('EmployerExperience');
  const sectionRef = useRef<HTMLElement>(null);
  const candidatePanelRef = useRef<HTMLDivElement>(null);
  const employerPanelRef = useRef<HTMLDivElement>(null);

  const candidateSteps = [
    { num: '01', titleKey: 'step1', descKey: 'step1Desc', icon: UserRoundSearch },
    { num: '02', titleKey: 'step2', descKey: 'step2Desc', icon: GraduationCap },
    { num: '03', titleKey: 'step3', descKey: 'step3Desc', icon: BriefcaseBusiness },
    { num: '04', titleKey: 'step4', descKey: 'step4Desc', icon: Target },
    { num: '05', titleKey: 'step5', descKey: 'step5Desc', icon: Network },
    { num: '06', titleKey: 'step6', descKey: 'step6Desc', icon: CalendarCheck },
    { num: '07', titleKey: 'step7', descKey: 'step7Desc', icon: FileUser }
  ];

  const employerSteps = [
    { num: '01', titleKey: 'step1', descKey: 'step1Desc', icon: Target },
    { num: '02', titleKey: 'step2', descKey: 'step2Desc', icon: Network },
    { num: '03', titleKey: 'step3', descKey: 'step3Desc', icon: ClipboardCheck },
    { num: '04', titleKey: 'step4', descKey: 'step4Desc', icon: UserRoundSearch },
    { num: '05', titleKey: 'step5', descKey: 'step5Desc', icon: CalendarCheck },
    { num: '06', titleKey: 'step6', descKey: 'step6Desc', icon: Handshake }
  ];

  useGSAP(
    () => {
      if (typeof window === 'undefined') return;
      gsap.registerPlugin(ScrollTrigger);

      // Split-panel transition: Candidate enters from left, Employer from right
      if (candidatePanelRef.current) {
        gsap.fromTo(
          candidatePanelRef.current,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: candidatePanelRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none'
            }
          }
        );
      }

      if (employerPanelRef.current) {
        gsap.fromTo(
          employerPanelRef.current,
          { opacity: 0, x: 50 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: employerPanelRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none'
            }
          }
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section 
      ref={sectionRef} 
      className="py-24 sm:py-32 bg-[#050708] relative overflow-hidden border-t border-[#203536]/80"
    >
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#17BEBB]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#00D5DF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24 sm:space-y-32">
        
        {/* ========================================================
            PART 1: CANDIDATE EXPERIENCE
        ======================================================== */}
        <div id="candidate" ref={candidatePanelRef} className="scroll-mt-28">
          {/* Header */}
          <div className="max-w-3xl mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0C1517] border border-[#17BEBB]/40 text-[11px] font-bold text-[#17BEBB] tracking-widest uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#17BEBB]" />
              {tCandidate('badge')}
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F5F8F8] tracking-tight leading-tight mb-4">
              {tCandidate('title')}
            </h2>
            <p className="text-sm sm:text-base text-[#A5B2B3] leading-relaxed">
              {tCandidate('subtitle')}
            </p>
          </div>

          {/* 7-Step Candidate Journey Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-10">
            {candidateSteps.map((step) => {
              const IconComp = step.icon;
              return (
                <div 
                  key={step.num}
                  className="p-6 rounded-2xl bg-[#0C1517] border border-[#203536] hover:border-[#17BEBB]/50 transition-all duration-300 relative group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-bold text-[#17BEBB] bg-[#102426] px-2.5 py-1 rounded-md border border-[#203536]">
                        {step.num}
                      </span>
                      <IconComp className="w-5 h-5 text-[#A5B2B3] group-hover:text-[#00D5DF] transition-colors" strokeWidth={1.75} />
                    </div>
                    <h3 className="text-base font-bold text-[#F5F8F8] mb-2 group-hover:text-[#17BEBB] transition-colors">
                      {tCandidate(step.titleKey)}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#A5B2B3] leading-relaxed">
                      {tCandidate(step.descKey)}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Candidate CTA Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#102426] via-[#0C1517] to-[#0A1113] border border-[#17BEBB]/40 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-[#17BEBB] uppercase tracking-wider block mb-2">
                  Ready to Start?
                </span>
                <h3 className="text-lg font-bold text-[#F5F8F8] mb-2">
                  Accelerate Your Career
                </h3>
                <p className="text-xs text-[#A5B2B3] leading-relaxed mb-6">
                  Zero placement fees. Direct interviews with verified employers.
                </p>
              </div>
              <a
                href="#process"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-black bg-[#17BEBB] hover:bg-[#00D5DF] transition-all shadow-[0_0_20px_rgba(23,190,187,0.3)] hover:shadow-[0_0_25px_rgba(0,213,223,0.45)] text-center"
              >
                <span>{tCandidate('cta')}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* ========================================================
            PART 2: EMPLOYER EXPERIENCE
        ======================================================== */}
        <div id="employer" ref={employerPanelRef} className="scroll-mt-28">
          {/* Header */}
          <div className="max-w-3xl mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0C1517] border border-[#00D5DF]/40 text-[11px] font-bold text-[#00D5DF] tracking-widest uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D5DF]" />
              {tEmployer('badge')}
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F5F8F8] tracking-tight leading-tight mb-4">
              {tEmployer('title')}
            </h2>
            <p className="text-sm sm:text-base text-[#A5B2B3] leading-relaxed">
              {tEmployer('subtitle')}
            </p>
          </div>

          {/* 6-Step Employer Recruitment Delivery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {employerSteps.map((step) => {
              const IconComp = step.icon;
              return (
                <div 
                  key={step.num}
                  className="p-7 rounded-2xl bg-[#0C1517] border border-[#203536] hover:border-[#00D5DF]/50 transition-all duration-300 relative group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-bold text-[#00D5DF] bg-[#102426] px-2.5 py-1 rounded-md border border-[#203536]">
                        {step.num}
                      </span>
                      <IconComp className="w-5 h-5 text-[#A5B2B3] group-hover:text-[#17BEBB] transition-colors" strokeWidth={1.75} />
                    </div>
                    <h3 className="text-base font-bold text-[#F5F8F8] mb-2 group-hover:text-[#00D5DF] transition-colors">
                      {tEmployer(step.titleKey)}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#A5B2B3] leading-relaxed">
                      {tEmployer(step.descKey)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Employer Bottom Banner CTA */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#0C1517] via-[#102426] to-[#0A1113] border border-[#203536] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#F5F8F8] mb-2">
                Need Pre-Screened Candidates Within 48 Hours?
              </h3>
              <p className="text-xs sm:text-sm text-[#A5B2B3] max-w-xl">
                Partner with Infidell to receive verified talent shortlists aligned with your technical requirements, payroll models, and delivery timelines.
              </p>
            </div>
            <a
              href="#footer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-bold text-[#F5F8F8] bg-[#0C1517] hover:bg-[#102426] border border-[#17BEBB]/60 hover:border-[#00D5DF] transition-all shadow-[0_0_20px_rgba(23,190,187,0.2)] flex-shrink-0"
            >
              <Building2 className="w-4 h-4 text-[#17BEBB]" />
              <span>{tEmployer('cta')}</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

