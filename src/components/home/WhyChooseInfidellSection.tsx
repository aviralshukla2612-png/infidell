'use client';

import React, { useRef } from 'react';
import { Link } from '@/i18n/routing';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowRight } from 'lucide-react';

interface FeatureItem {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

export function WhyChooseInfidellSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const jobSeekerFeatures: FeatureItem[] = [
    {
      title: 'Personalized Job Matching',
      desc: 'We connect you with roles that build long-term careers, not just quick jobs.',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="3" />
          <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
          <circle cx="12" cy="14" r="3" strokeWidth="2" />
          <path d="M12 11v1" />
          <path d="M12 16v1" />
          <path d="M9 14h1" />
          <path d="M14 14h1" />
          <circle cx="12" cy="14" r="1" fill="currentColor" />
        </svg>
      )
    },
    {
      title: 'Faster Interview Scheduling',
      desc: "Our recruiters actively secure interviews so you're not stuck waiting.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
          <path d="M9 12H4s.55-3.03 2-4.5c1.62-1.63 5-2.5 5-2.5" />
          <path d="M15 15v5s3.03-.55 4.5-2c1.63-1.62 2.5-5 2.5-5" />
          <circle cx="15.5" cy="8.5" r="1.5" fill="currentColor" />
        </svg>
      )
    },
    {
      title: 'End-to-End Placement Support',
      desc: 'From resume building to offer negotiation, we guide every single step.',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="m16 11 2 2 4-4" strokeWidth="2.5" />
        </svg>
      )
    },
    {
      title: 'Access to Verified Employers',
      desc: 'Work with trusted, vetted companies across multiple industries nationwide.',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="11" height="17" rx="1.5" />
          <path d="M14 10h6a1.5 1.5 0 0 1 1.5 1.5V21H14" />
          <path d="M7 8h3" />
          <path d="M7 12h3" />
          <path d="M7 16h3" />
          <path d="M17 14h1.5" />
          <path d="M17 17h1.5" />
        </svg>
      )
    },
    {
      title: 'Confidence Before Interviews',
      desc: 'Mock interviews and strategic preparation sessions help you walk in completely ready.',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="m8 21 4-4 4 4" />
          <path d="M12 17v4" />
          <path d="m9 10 2 2 4-4" strokeWidth="2.5" />
        </svg>
      )
    }
  ];

  const differentiatorFeatures: FeatureItem[] = [
    {
      title: 'Quality Over Random Applications',
      desc: "We don't spam job portals. Every application is carefully matched to the candidate's exact profile and career ambitions.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
          <path d="m22 2-7.5 7.5" strokeWidth="2.5" />
          <path d="M15 2h7v7" strokeWidth="2" />
        </svg>
      )
    },
    {
      title: 'Transparent Placement Assurance',
      desc: "If expectations aren't met under our service terms, our SLA includes dedicated re-matching and continuous recruitment assistance.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" strokeWidth="2.5" />
        </svg>
      )
    },
    {
      title: 'Full Time Roles Only',
      desc: 'We focus on stable full-time opportunities with real companies, not short-term contract placements.',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2.5" />
          <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
          <path d="m10 13 2-2 2 2" />
          <path d="M12 11v6" />
        </svg>
      )
    },
    {
      title: 'Interview-Ready Candidates',
      desc: 'We prepare professionals with tailored mock interviews, technical screening, and practical coaching.',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 21a8 8 0 0 0-16 0" />
          <circle cx="10" cy="8" r="4" />
          <path d="m17 8 2 2 4-4" strokeWidth="2.5" />
        </svg>
      )
    },
    {
      title: 'Speed Without Chaos',
      desc: 'Our recruiters apply strategically and secure interviews faster without compromising on screening quality.',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" fill="currentColor" fillOpacity="0.25" />
        </svg>
      )
    }
  ];

  const employerFeatures: FeatureItem[] = [
    {
      title: 'Industry-Focused Hiring',
      desc: 'We understand your specific sector and source talent that genuinely fits your tech stack and culture.',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      )
    },
    {
      title: 'Pre-Screened Candidates',
      desc: 'Save critical executive time by meeting pre-screened, verified, and qualified professionals.',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="8" cy="9" r="3" />
          <circle cx="16" cy="9" r="3" />
          <path d="M2 19a6 6 0 0 1 12 0" />
          <path d="M14 19a6 6 0 0 1 8 0" />
        </svg>
      )
    },
    {
      title: 'Faster Hiring Cycles',
      desc: 'Our recruitment pipeline reduces hiring delays significantly because we adhere strictly to deadlines.',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="13" r="8" />
          <path d="M12 9v4l2.5 2.5" strokeWidth="2.2" />
          <path d="M10 2h4" />
          <path d="m19 5-1.5 1.5" />
        </svg>
      )
    },
    {
      title: 'Flexible Workforce Solutions',
      desc: 'From permanent direct hires to dedicated staffing and talent acquisition support, we handle it all.',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <circle cx="5" cy="6" r="2" />
          <circle cx="19" cy="6" r="2" />
          <circle cx="5" cy="18" r="2" />
          <circle cx="19" cy="18" r="2" />
          <path d="M7 7l3.5 3.5" />
          <path d="M17 7l-3.5 3.5" />
          <path d="M7 17l3.5-3.5" />
          <path d="M17 17l-3.5-3.5" />
        </svg>
      )
    },
    {
      title: 'Compliance & Verification Support',
      desc: "Background checks, credential verification, and documentation handled seamlessly as an essential step.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
          <polyline points="14 2 14 8 20 8" />
          <path d="m9 15 2 2 4-4" strokeWidth="2.5" />
        </svg>
      )
    }
  ];

  useGSAP(
    () => {
      if (typeof window === 'undefined') return;
      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(
        '.why-col',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
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
      id="why-choose-infidell"
      className="py-20 lg:py-32 bg-[#000000] relative overflow-hidden border-b border-[#202A30]"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-[#00E5F0]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20 space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
            Why Job Seekers & Employers <br className="hidden sm:inline" />
            <span className="text-[#00E5F0]">Choose Infidell</span>
          </h2>
          <p className="text-base sm:text-lg text-[#AEB8C2] max-w-2xl mx-auto leading-relaxed">
            A trusted recruitment platform built to eliminate hiring chaos, delivering high-retention placements for talent and organizations.
          </p>
        </div>

        {/* 3 Columns Layout (Job Seekers | Featured Differentiator | Employers) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* ============================================================ */}
          {/* COLUMN 1: FOR JOB SEEKERS                                    */}
          {/* ============================================================ */}
          <div className="why-col rounded-3xl bg-[#0A0D10] border border-[#202A30] hover:border-[#00E5F0]/40 transition-all duration-300 p-7 sm:p-9 flex flex-col justify-between shadow-xl">
            <div>
              {/* Header Pill */}
              <div className="mb-8">
                <span className="inline-block px-5 py-2 rounded-full bg-[#12171E] text-white text-xs font-bold tracking-wider uppercase border border-[#202A30]">
                  For Job Seekers
                </span>
              </div>

              {/* 5 Features List */}
              <div className="space-y-7">
                {jobSeekerFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-[#00E5F0]/10 border border-[#00E5F0]/30 text-[#00E5F0] flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 group-hover:bg-[#00E5F0]/20 transition-all shadow-sm">
                      {feat.icon}
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-white tracking-tight group-hover:text-[#00E5F0] transition-colors">
                        {feat.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#AEB8C2] leading-relaxed mt-1">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="pt-8 mt-8 border-t border-[#202A30]">
              <Link
                href="/register/candidate"
                className="inline-flex items-center justify-between w-full text-xs font-bold text-[#00E5F0] hover:text-[#00BFD0] group transition-colors"
              >
                <span>Register as Candidate</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* ============================================================ */}
          {/* COLUMN 2: WHAT MAKES INFIDELL DIFFERENT (FEATURED / HERO)    */}
          {/* ============================================================ */}
          <div className="why-col rounded-3xl bg-gradient-to-b from-[#062A35] via-[#081E29] to-[#041117] border-2 border-[#00E5F0] p-7 sm:p-9 flex flex-col justify-between shadow-[0_0_50px_rgba(0,229,240,0.22)] lg:-translate-y-4 lg:scale-[1.02] relative z-20">
            {/* Top subtle highlight shimmer */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00E5F0] to-transparent shadow-[0_0_15px_#00E5F0]" />

            <div>
              {/* Header Pill */}
              <div className="mb-8">
                <span className="inline-block px-5 py-2 rounded-full bg-[#000000] text-[#00E5F0] text-xs font-extrabold tracking-wider uppercase border border-[#00E5F0] shadow-md">
                  What Makes Infidell Different
                </span>
              </div>

              {/* 5 Features List with High-Contrast Custom Icons */}
              <div className="space-y-7">
                {differentiatorFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-[#00E5F0]/25 border-2 border-[#00E5F0]/80 text-[#00E5F0] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-[0_0_20px_rgba(0,229,240,0.45)] group-hover:scale-110 group-hover:bg-[#00E5F0]/35 transition-all">
                      {feat.icon}
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-extrabold text-white tracking-tight group-hover:text-[#00E5F0] transition-colors">
                        {feat.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#D1F7FA]/90 leading-relaxed mt-1 font-normal">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="pt-8 mt-8 border-t border-[#00E5F0]/30">
              <Link
                href="/about"
                className="inline-flex items-center justify-between w-full text-xs font-extrabold text-white hover:text-[#00E5F0] group transition-colors"
              >
                <span>Explore Placement Standards</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#00E5F0]" />
              </Link>
            </div>
          </div>

          {/* ============================================================ */}
          {/* COLUMN 3: FOR EMPLOYERS                                      */}
          {/* ============================================================ */}
          <div className="why-col rounded-3xl bg-[#0A0D10] border border-[#202A30] hover:border-[#818CF8]/40 transition-all duration-300 p-7 sm:p-9 flex flex-col justify-between shadow-xl">
            <div>
              {/* Header Pill */}
              <div className="mb-8">
                <span className="inline-block px-5 py-2 rounded-full bg-[#12171E] text-white text-xs font-bold tracking-wider uppercase border border-[#202A30]">
                  For Employers
                </span>
              </div>

              {/* 5 Features List */}
              <div className="space-y-7">
                {employerFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-[#818CF8]/15 border border-[#818CF8]/35 text-[#818CF8] flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 group-hover:bg-[#818CF8]/25 transition-all shadow-sm">
                      {feat.icon}
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-white tracking-tight group-hover:text-[#818CF8] transition-colors">
                        {feat.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#AEB8C2] leading-relaxed mt-1">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="pt-8 mt-8 border-t border-[#202A30]">
              <Link
                href="/employers"
                className="inline-flex items-center justify-between w-full text-xs font-bold text-[#818CF8] hover:text-[#A5B4FC] group transition-colors"
              >
                <span>Submit Hiring Requirement</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}