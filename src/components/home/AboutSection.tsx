'use client';

import React, { useRef } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

const ABOUT_CARDS = [
  {
    index: '01 / ADVISORY',
    title: 'Work with the firm',
    tagline: 'Dedicated 1-on-1 career navigation',
    description:
      'Personalized career advocacy from seasoned recruiters who evaluate your career trajectory, target companies, and compensation expectations.',
    highlights: [
      'Direct representation by a dedicated placement advisor',
      'Curated interviews with verified enterprise employers',
      'Executive compensation benchmarking & guidance',
      '100% free candidate representation with zero hidden fees'
    ],
    footerTag: 'Direct Advisory · Zero Fees',
    ctaText: 'Explore Candidate Path',
    href: '#candidate'
  },
  {
    index: '02 / ARCHITECTURE',
    title: 'Candidate career path',
    tagline: 'Profile optimization & interview readiness',
    description:
      'We reconstruct your resume and professional presence to easily clear automated ATS filters and captivate engineering and leadership hiring teams.',
    highlights: [
      'ATS-optimized resume & LinkedIn portfolio overhaul',
      'Technical & behavioral mock interview simulations',
      'Targeted positioning for high-growth tech & corporate roles',
      'Actionable feedback after every interview milestone'
    ],
    footerTag: 'ATS & Tech Ready',
    ctaText: 'View Approach',
    href: '#approach'
  },
  {
    index: '03 / ENTERPRISE',
    title: 'Collaborate with us',
    tagline: 'Precision talent acquisition for teams',
    description:
      'Partner with Infidell to fill critical engineering, technology, and corporate positions with rigorously pre-screened talent in record time.',
    highlights: [
      'Pre-vetted, interview-ready profiles delivered in 48–72h',
      'Rigorous multi-stage technical & culture alignment vetting',
      'Transparent replacement guarantee & hiring SLA',
      'Full-time direct hires, contract staffing & leadership search'
    ],
    footerTag: 'Verified Mandates · 48–72h SLA',
    ctaText: 'Hire Talent',
    href: '#employer'
  },
  {
    index: '04 / INTELLIGENCE',
    title: 'Read the Journal',
    tagline: 'Market insights & salary benchmarks',
    description:
      'Explore data-driven hiring research, emerging tech skill demands, and strategic career navigation playbooks curated by our advisory desk.',
    highlights: [
      'Quarterly tech compensation & compensation band surveys',
      'Emerging domain insights: AI, Fullstack & Cloud roles',
      'Ethical recruitment benchmarks & legal compliance guidelines',
      'Career transition roadmaps for modern professionals'
    ],
    footerTag: 'Quarterly Research · Insights Desk',
    ctaText: 'Browse Articles',
    href: '#insights'
  }
];

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      if (typeof window === 'undefined') return;
      gsap.registerPlugin(ScrollTrigger);

      // 1. Entrance of title & header row
      gsap.fromTo(
        '.luna-header-fade',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );

      // 2. Entrance of 4 Tall Cards
      gsap.fromTo(
        '.luna-tall-card',
        { opacity: 0, y: 40, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.85,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.luna-cards-grid',
            start: 'top 78%',
            toggleActions: 'play none none none'
          }
        }
      );

      // 3. Founder's Note entrance
      gsap.fromTo(
        '.luna-founder-content',
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.luna-founder-section',
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );

      // 4. Staggered Stat numbers
      gsap.fromTo(
        '.luna-stat-item',
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.luna-stats-row',
            start: 'top 85%',
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
      className="relative w-full bg-[#050708] text-white py-24 sm:py-32 overflow-hidden border-t border-[#203536]/80 select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ========================================================
            GIANT "About" TITLE & ASYMMETRIC 3-PART HEADER
        ======================================================== */}
        <div className="mb-16 sm:mb-24">
          {/* Giant Clean Title */}
          <h2
            ref={headlineRef}
            className="luna-header-fade text-6xl sm:text-7xl md:text-8xl lg:text-[6.5rem] font-normal tracking-tight text-white mb-12 sm:mb-16"
          >
            About
          </h2>

          {/* 3-Part Row: Pill + Main Statement + Sub Statement */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
            {/* Left Column: Pill */}
            <div className="md:col-span-2">
              <div className="luna-header-fade inline-flex items-center px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm font-normal text-white tracking-wide">
                Infidell
              </div>
            </div>

            {/* Center Column: High-Impact Statement */}
            <div className="md:col-span-7">
              <p className="luna-header-fade text-xl sm:text-2xl lg:text-[1.75rem] font-normal text-white leading-relaxed tracking-tight">
                One dedicated placement firm, no automated agency in between. Infidell is{' '}
                <strong className="font-semibold text-white">career advocacy</strong>. Recruitment and talent delivery, the way we actually think they should be done.
              </p>
            </div>

            {/* Right Column: Country / Reach Descriptor */}
            <div className="md:col-span-3 md:text-right">
              <p className="luna-header-fade text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal">
                Connecting ambitious talent with verified corporate hiring partners across India.
              </p>
            </div>
          </div>
        </div>

        {/* ========================================================
            4 CONTENT-RICH CARDS (Clean Dark Editorial Cards - NO IMAGES)
        ======================================================== */}
        <div className="luna-cards-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 mb-24 sm:mb-32">
          {ABOUT_CARDS.map((card, idx) => (
            <a
              key={idx}
              href={card.href}
              className="luna-tall-card group relative min-h-[460px] sm:min-h-[490px] lg:min-h-[520px] rounded-2xl lg:rounded-3xl bg-[#0C1517] border border-[#203536] hover:border-[#17BEBB]/60 transition-all duration-500 p-6 sm:p-7 flex flex-col justify-between shadow-lg shadow-black/40 hover:shadow-[0_12px_32px_rgba(23,190,187,0.08)]"
            >
              {/* Subtle Ambient Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#102426]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl lg:rounded-3xl" />

              {/* Top Row: Index Tag + Arrow Icon */}
              <div className="relative z-10 flex items-center justify-between gap-3 mb-6">
                <span className="text-[11px] font-mono tracking-widest text-[#00D5DF] uppercase px-2.5 py-1 rounded bg-[#102426] border border-[#203536]">
                  {card.index}
                </span>
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center text-white/80 group-hover:bg-[#17BEBB] group-hover:text-black group-hover:border-[#17BEBB] transition-all duration-300 shadow-sm shrink-0">
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              {/* Middle Section: Title, Tagline, Description & Structured Deliverables */}
              <div className="relative z-10 flex-1 flex flex-col">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 leading-snug group-hover:text-[#F5F8F8] transition-colors">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-[13px] font-medium text-[#17BEBB] mb-3">
                  {card.tagline}
                </p>
                <p className="text-xs sm:text-sm text-[#A5B2B3] font-normal leading-relaxed mb-5">
                  {card.description}
                </p>

                {/* Structured Bullet Points */}
                <div className="space-y-2.5 pt-4 border-t border-[#203536]/70 mt-auto">
                  {card.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5">
                      <Check className="w-3.5 h-3.5 text-[#00D5DF] shrink-0 mt-0.5" />
                      <span className="text-xs text-[#F5F8F8]/90 font-normal leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Footer Row */}
              <div className="relative z-10 pt-5 mt-6 border-t border-[#203536]/60 flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#A5B2B3] tracking-wide">
                  {card.footerTag}
                </span>
                <span className="text-xs font-medium text-[#00D5DF] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  <span>Explore</span>
                  <span>→</span>
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* ========================================================
            FOUNDER'S NOTE & MINIMALIST STAT COUNTERS
        ======================================================== */}
        <div className="luna-founder-section relative pt-8 sm:pt-12 pb-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start mb-16 sm:mb-20">
            {/* Left Column: "+ Founder's note" */}
            <div className="md:col-span-3">
              <span className="luna-founder-content inline-flex items-center gap-1.5 text-xs sm:text-sm font-normal text-neutral-400 tracking-wide">
                <span>+</span>
                <span>Founder&apos;s note</span>
              </span>
            </div>

            {/* Right Column: High-Impact Editorial Statement */}
            <div className="md:col-span-9 space-y-6 max-w-3xl">
              <p className="luna-founder-content text-xl sm:text-2xl lg:text-[2.1rem] font-normal text-neutral-300 leading-snug tracking-tight">
                The hardest part of this work isn&apos;t collecting resumes or running automated keywords. Job portals are cheap now, AI can spam them.{' '}
                <strong className="font-bold text-white">
                  The hard part is the thinking behind it: what to build, why and how it all connects.
                </strong>
              </p>

              <p className="luna-founder-content text-sm sm:text-base text-neutral-400 font-normal leading-relaxed pt-2">
                A career that stands out with genuine purpose in a market full of noise. That&apos;s why we built Infidell.
              </p>
            </div>
          </div>

          {/* Minimalist Divider Line (Clean & Elegant, No Stars) */}
          <div className="w-full h-px bg-[#203536]/70 my-12 sm:my-16" />

          {/* Minimalist Big Numbers (matching Luna UI 58 / 12 / 17 style) */}
          <div className="luna-stats-row grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 pt-2">
            {/* Stat 1 */}
            <div className="luna-stat-item">
              <div className="text-5xl sm:text-6xl md:text-7xl font-light text-white tracking-tight leading-none mb-3">
                4,800+
              </div>
              <div className="text-xs sm:text-sm text-neutral-400 font-normal tracking-wide">
                Candidates placed
              </div>
            </div>

            {/* Stat 2 */}
            <div className="luna-stat-item">
              <div className="text-5xl sm:text-6xl md:text-7xl font-light text-white tracking-tight leading-none mb-3">
                350+
              </div>
              <div className="text-xs sm:text-sm text-neutral-400 font-normal tracking-wide">
                Corporate hiring partners
              </div>
            </div>

            {/* Stat 3 */}
            <div className="luna-stat-item">
              <div className="text-5xl sm:text-6xl md:text-7xl font-light text-white tracking-tight leading-none mb-3">
                ₹0
              </div>
              <div className="text-xs sm:text-sm text-neutral-400 font-normal tracking-wide">
                Candidate placement fees
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
