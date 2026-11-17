'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { ArrowUpRight, Check, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

interface ColorfulCard {
  id: number;
  index: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  colorName: string;
  theme: {
    accent: string;
    border: string;
    bg: string;
    badgeBg: string;
    glowGradient: string;
    checkColor: string;
    btnBgHover: string;
    shadowGlow: string;
  };
  highlights: string[];
  footerTag: string;
  href: string;
  entrance: 'hero' | 'left' | 'right';
}

const COLORFUL_CARDS: ColorfulCard[] = [
  {
    id: 1,
    index: '01 / ADVISORY',
    title: 'Work with the Firm',
    tagline: 'Dedicated 1-on-1 career navigation',
    description: 'Personalized career advocacy from senior advisors guiding you from initial assessment to confirmed enterprise offers.',
    image: '/images/solutions/job-placement.avif',
    colorName: 'Cyan Electric',
    theme: {
      accent: '#00D5DF',
      border: 'border-[#00D5DF]/40 hover:border-[#00D5DF]',
      bg: 'bg-[#061517]',
      badgeBg: 'bg-[#00D5DF]/15 text-[#00D5DF] border-[#00D5DF]/30',
      glowGradient: 'from-[#00D5DF]/25 via-[#00D5DF]/5 to-transparent',
      checkColor: 'text-[#00D5DF]',
      btnBgHover: 'group-hover:bg-[#00D5DF] group-hover:text-black group-hover:border-[#00D5DF]',
      shadowGlow: 'hover:shadow-[0_12px_35px_rgba(0,213,223,0.22)]'
    },
    highlights: [
      'Dedicated placement advisor & coach',
      'Curated interviews with verified employers',
      '100% free candidate representation'
    ],
    footerTag: 'Direct Advisory · ₹0 Fees',
    href: '#candidate',
    entrance: 'hero'
  },
  {
    id: 2,
    index: '02 / ARCHITECTURE',
    title: 'Candidate Career Path',
    tagline: 'ATS optimization & interview readiness',
    description: 'We reconstruct your resume and digital profile to pass automated ATS filters and captivate engineering leadership.',
    image: '/images/solutions/talent-acquisition.avif',
    colorName: 'Electric Violet',
    theme: {
      accent: '#A78BFA',
      border: 'border-[#8B5CF6]/40 hover:border-[#A78BFA]',
      bg: 'bg-[#120B1D]',
      badgeBg: 'bg-[#8B5CF6]/15 text-[#A78BFA] border-[#8B5CF6]/30',
      glowGradient: 'from-[#8B5CF6]/25 via-[#8B5CF6]/5 to-transparent',
      checkColor: 'text-[#A78BFA]',
      btnBgHover: 'group-hover:bg-[#A78BFA] group-hover:text-black group-hover:border-[#A78BFA]',
      shadowGlow: 'hover:shadow-[0_12px_35px_rgba(139,92,246,0.22)]'
    },
    highlights: [
      'ATS-optimized resume & LinkedIn polish',
      'Technical mock interview simulations',
      'Continuous milestone feedback'
    ],
    footerTag: 'ATS & Tech Ready',
    href: '#approach',
    entrance: 'left'
  },
  {
    id: 3,
    index: '03 / ENTERPRISE',
    title: 'Collaborate with Us',
    tagline: 'Precision talent acquisition for teams',
    description: 'Partner with Infidell to close critical engineering, fintech, and management positions with pre-screened talent.',
    image: '/images/solutions/recruitment-staffing.avif',
    colorName: 'Emerald Mint',
    theme: {
      accent: '#34D399',
      border: 'border-[#10B981]/40 hover:border-[#34D399]',
      bg: 'bg-[#071710]',
      badgeBg: 'bg-[#10B981]/15 text-[#34D399] border-[#10B981]/30',
      glowGradient: 'from-[#10B981]/25 via-[#10B981]/5 to-transparent',
      checkColor: 'text-[#34D399]',
      btnBgHover: 'group-hover:bg-[#34D399] group-hover:text-black group-hover:border-[#34D399]',
      shadowGlow: 'hover:shadow-[0_12px_35px_rgba(16,185,129,0.22)]'
    },
    highlights: [
      'Pre-vetted profiles delivered in 48–72h',
      'Rigorous multi-stage vetting',
      'Transparent replacement SLA'
    ],
    footerTag: '48–72h SLA · Verified',
    href: '#employer',
    entrance: 'right'
  },
  {
    id: 4,
    index: '04 / SKILLS',
    title: 'Tech & Domain Upskilling',
    tagline: 'Modern engineering frameworks',
    description: 'Targeted skill architecture aligned with emerging cloud, AI, and fullstack requirements demanded by top tech employers.',
    image: '/images/solutions/it-training.avif',
    colorName: 'Amber Sunset',
    theme: {
      accent: '#FBBF24',
      border: 'border-[#F59E0B]/40 hover:border-[#FBBF24]',
      bg: 'bg-[#171107]',
      badgeBg: 'bg-[#F59E0B]/15 text-[#FBBF24] border-[#F59E0B]/30',
      glowGradient: 'from-[#F59E0B]/25 via-[#F59E0B]/5 to-transparent',
      checkColor: 'text-[#FBBF24]',
      btnBgHover: 'group-hover:bg-[#FBBF24] group-hover:text-black group-hover:border-[#FBBF24]',
      shadowGlow: 'hover:shadow-[0_12px_35px_rgba(245,158,11,0.22)]'
    },
    highlights: [
      'System design & live architecture prep',
      'Peer mock coding assessments',
      'Enterprise-grade tech stacks'
    ],
    footerTag: 'Industry Aligned',
    href: '#approach',
    entrance: 'right'
  },
  {
    id: 5,
    index: '05 / INTEGRITY',
    title: 'Credential Verification',
    tagline: 'Compliant & authentic vetting',
    description: 'Comprehensive background checks, employment history authentication, and degree verification for enterprise compliance.',
    image: '/images/solutions/background-verification.avif',
    colorName: 'Rose Crimson',
    theme: {
      accent: '#FB7185',
      border: 'border-[#F43F5E]/40 hover:border-[#FB7185]',
      bg: 'bg-[#17080B]',
      badgeBg: 'bg-[#F43F5E]/15 text-[#FB7185] border-[#F43F5E]/30',
      glowGradient: 'from-[#F43F5E]/25 via-[#F43F5E]/5 to-transparent',
      checkColor: 'text-[#FB7185]',
      btnBgHover: 'group-hover:bg-[#FB7185] group-hover:text-black group-hover:border-[#FB7185]',
      shadowGlow: 'hover:shadow-[0_12px_35px_rgba(244,63,94,0.22)]'
    },
    highlights: [
      'Verified employment track record',
      'Authentic academic credential audit',
      '100% legal & statutory compliance'
    ],
    footerTag: 'Verified Credentials',
    href: '#solutions',
    entrance: 'left'
  },
  {
    id: 6,
    index: '06 / FINANCE',
    title: 'Finance & Executive Hiring',
    tagline: 'Accounting, tax & corporate roles',
    description: 'Specialized recruitment for certified accountants, tax specialists, finance controllers, and corporate leadership.',
    image: '/images/solutions/accounting-taxes.avif',
    colorName: 'Sky Blue',
    theme: {
      accent: '#38BDF8',
      border: 'border-[#0284C7]/40 hover:border-[#38BDF8]',
      bg: 'bg-[#08121B]',
      badgeBg: 'bg-[#0284C7]/15 text-[#38BDF8] border-[#0284C7]/30',
      glowGradient: 'from-[#0284C7]/25 via-[#0284C7]/5 to-transparent',
      checkColor: 'text-[#38BDF8]',
      btnBgHover: 'group-hover:bg-[#38BDF8] group-hover:text-black group-hover:border-[#38BDF8]',
      shadowGlow: 'hover:shadow-[0_12px_35px_rgba(2,132,199,0.22)]'
    },
    highlights: [
      'CA, CPA & financial analyst mandates',
      'Senior VP & leadership placements',
      'Confidential executive search'
    ],
    footerTag: 'Executive Search',
    href: '#solutions',
    entrance: 'left'
  },
  {
    id: 7,
    index: '07 / GLOBAL',
    title: 'Global Career Mobility',
    tagline: 'Cross-border & overseas hiring',
    description: 'Connecting top-tier talent with multinational enterprises, overseas work authorization guidance, and international relocations.',
    image: '/images/insights/insight-h1b-visa.jpg',
    colorName: 'Fuchsia Violet',
    theme: {
      accent: '#E879F9',
      border: 'border-[#D946EF]/40 hover:border-[#E879F9]',
      bg: 'bg-[#150718]',
      badgeBg: 'bg-[#D946EF]/15 text-[#E879F9] border-[#D946EF]/30',
      glowGradient: 'from-[#D946EF]/25 via-[#D946EF]/5 to-transparent',
      checkColor: 'text-[#E879F9]',
      btnBgHover: 'group-hover:bg-[#E879F9] group-hover:text-black group-hover:border-[#E879F9]',
      shadowGlow: 'hover:shadow-[0_12px_35px_rgba(217,70,239,0.22)]'
    },
    highlights: [
      'Multinational enterprise partners',
      'Visa & work authorization advisory',
      'Cross-border compensation parity'
    ],
    footerTag: 'Cross-Border Reach',
    href: '#insights',
    entrance: 'right'
  },
  {
    id: 8,
    index: '08 / RESEARCH',
    title: 'Read the Journal',
    tagline: 'Hiring benchmarks & salary data',
    description: 'Data-driven salary reports, emerging industry hiring trends, and strategic recruitment playbooks published by our advisory desk.',
    image: '/images/insights/insight-talent-acquisition.jpg',
    colorName: 'Neon Jade',
    theme: {
      accent: '#2DD4BF',
      border: 'border-[#14B8A6]/40 hover:border-[#2DD4BF]',
      bg: 'bg-[#061514]',
      badgeBg: 'bg-[#14B8A6]/15 text-[#2DD4BF] border-[#14B8A6]/30',
      glowGradient: 'from-[#14B8A6]/25 via-[#14B8A6]/5 to-transparent',
      checkColor: 'text-[#2DD4BF]',
      btnBgHover: 'group-hover:bg-[#2DD4BF] group-hover:text-black group-hover:border-[#2DD4BF]',
      shadowGlow: 'hover:shadow-[0_12px_35px_rgba(20,184,166,0.22)]'
    },
    highlights: [
      'Quarterly tech salary surveys',
      'Emerging tech demand analytics',
      'Career transition playbooks'
    ],
    footerTag: 'Quarterly Research',
    href: '#insights',
    entrance: 'right'
  }
];

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

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

      // 2. Responsive Scroll-Triggered Card Orchestration
      const mm = gsap.matchMedia(sectionRef);

      // ==========================================
      // DESKTOP (1024px+): Pinned Scrub Animation
      // Card 1 starts large & centered, then shrinks
      // Other 7 cards slide in from Left & Right
      // ==========================================
      mm.add('(min-width: 1024px)', () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: stageRef.current,
            start: 'top 10%',
            end: '+=180%',
            pin: true,
            scrub: 1,
            anticipatePin: 1
          }
        });

        // Card 1: Starts BIG, centered over stage, with prominent cyan glow
        tl.fromTo(
          '.card-hero-1',
          {
            scale: 1.36,
            xPercent: 150,
            yPercent: 50,
            zIndex: 40,
            boxShadow: '0 30px 80px -10px rgba(0, 213, 223, 0.45)'
          },
          {
            scale: 1,
            xPercent: 0,
            yPercent: 0,
            zIndex: 10,
            boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
            ease: 'power2.inOut',
            duration: 1
          },
          0
        );

        // Left incoming cards (Card 2, Card 5, Card 6): slide in from the left
        tl.fromTo(
          '.card-from-left',
          {
            x: -360,
            opacity: 0,
            scale: 0.86,
            pointerEvents: 'none'
          },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            pointerEvents: 'auto',
            stagger: 0.08,
            ease: 'power2.out',
            duration: 0.95
          },
          0.05
        );

        // Right incoming cards (Card 3, Card 4, Card 7, Card 8): slide in from the right
        tl.fromTo(
          '.card-from-right',
          {
            x: 360,
            opacity: 0,
            scale: 0.86,
            pointerEvents: 'none'
          },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            pointerEvents: 'auto',
            stagger: 0.08,
            ease: 'power2.out',
            duration: 0.95
          },
          0.05
        );
      });

      // ==========================================
      // TABLET (768px - 1023px): Fluid Scroll Flow
      // ==========================================
      mm.add('(min-width: 768px) and (max-width: 1023px)', () => {
        gsap.fromTo(
          '.card-hero-1',
          { scale: 1.18, opacity: 0.9 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.9,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: stageRef.current,
              start: 'top 75%',
              toggleActions: 'play none none none'
            }
          }
        );

        gsap.fromTo(
          '.card-from-left',
          { x: -160, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            stagger: 0.12,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: stageRef.current,
              start: 'top 70%',
              toggleActions: 'play none none none'
            }
          }
        );

        gsap.fromTo(
          '.card-from-right',
          { x: 160, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            stagger: 0.12,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: stageRef.current,
              start: 'top 70%',
              toggleActions: 'play none none none'
            }
          }
        );
      });

      // ==========================================
      // MOBILE (<768px): Touch-Friendly Entrance
      // ==========================================
      mm.add('(max-width: 767px)', () => {
        gsap.fromTo(
          '.card-hero-1',
          { scale: 1.12, opacity: 0.85 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.75,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '.card-hero-1',
              start: 'top 80%',
              toggleActions: 'play none none none'
            }
          }
        );

        gsap.fromTo(
          '.card-from-left',
          { x: -50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.65,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: stageRef.current,
              start: 'top 75%',
              toggleActions: 'play none none none'
            }
          }
        );

        gsap.fromTo(
          '.card-from-right',
          { x: 50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.65,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: stageRef.current,
              start: 'top 75%',
              toggleActions: 'play none none none'
            }
          }
        );
      });

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
        <div className="mb-14 sm:mb-20">
          {/* Giant Clean Title */}
          <h2 
            ref={headlineRef}
            className="luna-header-fade text-6xl sm:text-7xl md:text-8xl lg:text-[6.5rem] font-normal tracking-tight text-white mb-10 sm:mb-14"
          >
            About
          </h2>

          {/* 3-Part Row: Pill + Main Statement + Sub Statement */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
            {/* Left Column: Pill */}
            <div className="md:col-span-2">
              <div className="luna-header-fade inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm font-normal text-white tracking-wide">
                <span>Infidell</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#00D5DF] animate-pulse" />
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
            8 COLORFUL TOPIC CARDS WITH GSAP PINNED SHRINK & SLIDE
        ======================================================== */}
        <div 
          ref={stageRef} 
          className="relative w-full mb-24 sm:mb-36 overflow-visible"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 relative">
            {COLORFUL_CARDS.map((card) => (
              <a
                key={card.id}
                href={card.href}
                className={`group relative rounded-2xl lg:rounded-3xl ${card.theme.bg} border ${card.theme.border} transition-all duration-300 p-5 sm:p-6 flex flex-col justify-between overflow-hidden shadow-lg shadow-black/60 ${card.theme.shadowGlow} ${
                  card.entrance === 'hero'
                    ? 'card-hero-1'
                    : card.entrance === 'left'
                    ? 'card-from-left'
                    : 'card-from-right'
                }`}
              >
                {/* Ambient colorful top radial glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${card.theme.glowGradient} opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl lg:rounded-3xl`}
                />

                {/* Top Row: Pill Tag + Round Arrow Action */}
                <div className="relative z-10 flex items-center justify-between gap-2 mb-3.5">
                  <span
                    className={`text-[10px] sm:text-[11px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-full border ${card.theme.badgeBg}`}
                  >
                    {card.index}
                  </span>
                  <div
                    className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center text-white/80 ${card.theme.btnBgHover} transition-all duration-300 shadow-sm shrink-0`}
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* Respective Topic Image */}
                <div className="relative z-10 w-full h-32 sm:h-36 rounded-xl overflow-hidden mb-3.5 border border-white/10 shrink-0">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />
                </div>

                {/* Content: Title, Tagline, Description */}
                <div className="relative z-10 flex-1 flex flex-col">
                  <h3 className="text-base sm:text-lg font-bold text-white mb-0.5 leading-snug group-hover:text-white transition-colors">
                    {card.title}
                  </h3>
                  <p
                    className="text-[11px] sm:text-xs font-semibold mb-2"
                    style={{ color: card.theme.accent }}
                  >
                    {card.tagline}
                  </p>
                  <p className="text-[11px] sm:text-xs text-[#A5B2B3] line-clamp-2 font-normal leading-relaxed mb-3">
                    {card.description}
                  </p>

                  {/* Key Bullet Highlights */}
                  <div className="space-y-1.5 pt-2.5 border-t border-white/10 mt-auto">
                    {card.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2">
                        <Check
                          className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${card.theme.checkColor}`}
                        />
                        <span className="text-[11px] sm:text-xs text-[#F5F8F8]/90 font-normal leading-tight">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Row */}
                <div className="relative z-10 pt-3.5 mt-3.5 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[10px] sm:text-[11px] font-mono text-[#A5B2B3] tracking-wide">
                    {card.footerTag}
                  </span>
                  <span
                    className="text-xs font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1"
                    style={{ color: card.theme.accent }}
                  >
                    <span>Explore</span>
                    <span>→</span>
                  </span>
                </div>
              </a>
            ))}
          </div>
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
