'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
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
  accent: string;
  borderColor: string;
  glowColor: string;
  footerTag: string;
  href: string;
  entrance: 'hero' | 'left' | 'right';
}

const COLORFUL_CARDS: ColorfulCard[] = [
  {
    id: 1,
    index: '01 / ADVISORY',
    title: 'Work with the Firm',
    tagline: 'Dedicated 1-on-1 placement advisory',
    description: 'Direct executive representation guiding ambitious professionals from initial credential review to verified offers.',
    image: '/images/solutions/job-placement.avif',
    accent: '#00D5DF',
    borderColor: '#00D5DF',
    glowColor: 'rgba(0, 213, 223, 0.5)',
    footerTag: 'Direct Advisory · ₹0 Fees',
    href: '#candidate',
    entrance: 'hero'
  },
  {
    id: 2,
    index: '02 / ARCHITECTURE',
    title: 'Candidate Career Path',
    tagline: 'Profile architecture & ATS readiness',
    description: 'Rebuilding your resume and digital presence to clear automated ATS filters and captivate engineering leadership.',
    image: '/images/solutions/talent-acquisition.avif',
    accent: '#A78BFA',
    borderColor: '#8B5CF6',
    glowColor: 'rgba(139, 92, 246, 0.5)',
    footerTag: 'ATS & Tech Ready',
    href: '#approach',
    entrance: 'left'
  },
  {
    index: '03 / ENTERPRISE',
    id: 3,
    title: 'Collaborate with Us',
    tagline: 'Curated talent acquisition for teams',
    description: 'Partner with Infidell to close critical engineering, fintech, and management requisitions without resume clutter.',
    image: '/images/solutions/recruitment-staffing.avif',
    accent: '#34D399',
    borderColor: '#10B981',
    glowColor: 'rgba(16, 185, 129, 0.5)',
    footerTag: '48–72h SLA · Verified',
    href: '#employer',
    entrance: 'right'
  },
  {
    id: 4,
    index: '04 / SKILLS',
    title: 'Tech & Domain Upskilling',
    tagline: 'Modern engineering frameworks',
    description: 'Targeted skill architecture aligned with emerging cloud, AI, and fullstack requirements demanded by employers.',
    image: '/images/solutions/it-training.avif',
    accent: '#FBBF24',
    borderColor: '#F59E0B',
    glowColor: 'rgba(245, 158, 11, 0.5)',
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
    accent: '#FB7185',
    borderColor: '#F43F5E',
    glowColor: 'rgba(244, 63, 94, 0.5)',
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
    accent: '#38BDF8',
    borderColor: '#0284C7',
    glowColor: 'rgba(2, 132, 199, 0.5)',
    footerTag: 'Executive Search',
    href: '#solutions',
    entrance: 'left'
  },
  {
    id: 7,
    index: '07 / GLOBAL',
    title: 'Global Career Mobility',
    tagline: 'Cross-border & overseas hiring',
    description: 'Connecting top-tier talent with multinational enterprises, overseas work authorization guidance, and relocation.',
    image: '/images/insights/insight-h1b-visa.jpg',
    accent: '#E879F9',
    borderColor: '#D946EF',
    glowColor: 'rgba(217, 70, 239, 0.5)',
    footerTag: 'Cross-Border Reach',
    href: '#insights',
    entrance: 'right'
  },
  {
    id: 8,
    index: '08 / RESEARCH',
    title: 'Read the Journal',
    tagline: 'Hiring benchmarks & salary data',
    description: 'Data-driven salary reports, emerging industry hiring trends, and strategic recruitment playbooks published regularly.',
    image: '/images/insights/insight-talent-acquisition.jpg',
    accent: '#2DD4BF',
    borderColor: '#14B8A6',
    glowColor: 'rgba(20, 184, 166, 0.5)',
    footerTag: 'Quarterly Research',
    href: '#insights',
    entrance: 'right'
  }
];

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLAnchorElement>(null);

  useGSAP(
    () => {
      if (typeof window === 'undefined') return;
      gsap.registerPlugin(ScrollTrigger);

      // 1. Entrance of title, narrative pillars & philosophy
      gsap.fromTo(
        '.luna-header-fade',
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
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
        const gridEl = gridRef.current;
        const card1El = card1Ref.current;

        if (!gridEl || !card1El) return;

        // Calculate dynamic delta from Card 1's position to Stage center
        const gridRect = gridEl.getBoundingClientRect();
        const card1Rect = card1El.getBoundingClientRect();

        const deltaX =
          gridRect.left + gridRect.width / 2 - (card1Rect.left + card1Rect.width / 2);
        const deltaY =
          gridRect.top + gridRect.height / 2 - (card1Rect.top + card1Rect.height / 2);

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: stageRef.current,
            start: 'center center',
            end: '+=160%',
            pin: true,
            scrub: 1,
            anticipatePin: 1
          }
        });

        // Card 1: Starts prominently in the center, enlarged with radiant cyan glow
        tl.fromTo(
          card1El,
          {
            x: deltaX,
            y: deltaY,
            scale: 1.34,
            zIndex: 40,
            boxShadow: '0 30px 80px -10px rgba(0, 213, 223, 0.55), 0 0 35px rgba(0, 213, 223, 0.25)'
          },
          {
            x: 0,
            y: 0,
            scale: 1,
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
            x: -280,
            opacity: 0,
            scale: 0.88,
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
          0.06
        );

        // Right incoming cards (Card 3, Card 4, Card 7, Card 8): slide in from the right
        tl.fromTo(
          '.card-from-right',
          {
            x: 280,
            opacity: 0,
            scale: 0.88,
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
          0.06
        );
      });

      // ==========================================
      // TABLET (768px - 1023px): Smooth Scroll Flow
      // ==========================================
      mm.add('(min-width: 768px) and (max-width: 1023px)', () => {
        gsap.fromTo(
          '.card-hero-1',
          { scale: 1.15, opacity: 0.9 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.85,
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
          { x: -140, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.75,
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
          { x: 140, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.75,
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
          { scale: 1.08, opacity: 0.9 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.7,
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
          { x: -40, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            stagger: 0.08,
            duration: 0.6,
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
          { x: 40, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            stagger: 0.08,
            duration: 0.6,
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
      className="relative w-full bg-[#050708] text-white py-20 sm:py-28 overflow-hidden border-t border-[#203536]/80 select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ========================================================
            PART 1: MASTER TITLE & EDITORIAL PHILOSOPHY (Section 6.B)
        ======================================================== */}
        <div className="mb-14 sm:mb-20">
          {/* Giant Clean Title */}
          <h2 
            ref={headlineRef}
            className="luna-header-fade text-6xl sm:text-7xl md:text-8xl lg:text-[6.5rem] font-normal tracking-tight text-white mb-6 sm:mb-8"
          >
            About
          </h2>

          {/* Master Headline matching Master Prompt Section 6.B */}
          <div className="luna-header-fade max-w-4xl mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm font-mono text-[#00D5DF] tracking-wide mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D5DF] animate-pulse" />
              <span>INFIDELL TECHNOLOGY LLP</span>
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight mb-5">
              People First. Possibilities Without Limits.
            </h3>
            <p className="text-base sm:text-lg lg:text-xl text-neutral-300 font-normal leading-relaxed">
              One dedicated placement firm, no automated agency in between. Infidell is{' '}
              <strong className="font-semibold text-white">career advocacy</strong>. We connect ambitious talent with verified corporate hiring partners across India through personal guidance, rigorous skill evaluation, and enduring professional relationships.
            </p>
          </div>

          {/* ========================================================
              PART 2: 3-PILLAR STORYTELLING NARRATIVE (What We Do / Candidate / Employer)
          ======================================================== */}
          <div className="luna-header-fade grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 pt-6 border-t border-[#203536]/80">
            {/* Pillar 1: Who We Are & What We Do */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#090E12] border border-[#203536] flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#00D5DF] px-2.5 py-0.5 rounded bg-[#102426] border border-[#203536] mb-4 inline-block">
                  01 / THE FIRM
                </span>
                <h4 className="text-xl font-bold text-white mb-2 leading-snug">
                  What INFIDELL Does
                </h4>
                <p className="text-xs sm:text-sm text-[#A5B2B3] font-normal leading-relaxed mb-5">
                  INFIDELL TECHNOLOGY LLP is an independent career placement and executive talent consultancy. We bridge the gap between skilled professionals and verified enterprises across India, stripping away the noise of impersonal portals to deliver high-touch recruitment.
                </p>
              </div>
              <div className="pt-4 border-t border-[#203536]/60 space-y-2">
                <div className="flex items-center gap-2 text-xs text-neutral-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00D5DF]" />
                  <span>Ethical &amp; compliant recruitment standard</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00D5DF]" />
                  <span>Nationwide corporate employer network</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00D5DF]" />
                  <span>100% verified job vacancies only</span>
                </div>
              </div>
            </div>

            {/* Pillar 2: Candidate Career Advocacy */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#090E12] border border-[#203536] flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#A78BFA] px-2.5 py-0.5 rounded bg-[#181126] border border-[#3B2554] mb-4 inline-block">
                  02 / CANDIDATE ADVOCACY
                </span>
                <h4 className="text-xl font-bold text-white mb-2 leading-snug">
                  How Candidates Receive Support
                </h4>
                <p className="text-xs sm:text-sm text-[#A5B2B3] font-normal leading-relaxed mb-5">
                  Every career has a next chapter that deserves dedicated advocacy. Job seekers work 1-on-1 with specialized domain advisors who restructure resumes to beat ATS filters, coordinate technical mock interviews, and negotiate market-rate compensation packages.
                </p>
              </div>
              <div className="pt-4 border-t border-[#203536]/60 space-y-2">
                <div className="flex items-center gap-2 text-xs text-neutral-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA]" />
                  <span>₹0 candidate fees · Zero hidden charges</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA]" />
                  <span>ATS resume &amp; LinkedIn portfolio overhaul</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA]" />
                  <span>Direct hiring manager introductions</span>
                </div>
              </div>
            </div>

            {/* Pillar 3: Employer Solutions */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#090E12] border border-[#203536] flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#34D399] px-2.5 py-0.5 rounded bg-[#0E1E16] border border-[#1A422D] mb-4 inline-block">
                  03 / EMPLOYER MANDATES
                </span>
                <h4 className="text-xl font-bold text-white mb-2 leading-snug">
                  How Employers Build Teams
                </h4>
                <p className="text-xs sm:text-sm text-[#A5B2B3] font-normal leading-relaxed mb-5">
                  Fast-scaling startups and established enterprises turn to Infidell to close critical requisitions without resume clutter. We pre-screen candidates across technical depth, culture alignment, and credential verification within strict 48–72 hour SLAs.
                </p>
              </div>
              <div className="pt-4 border-t border-[#203536]/60 space-y-2">
                <div className="flex items-center gap-2 text-xs text-neutral-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#34D399]" />
                  <span>Pre-screened shortlists in 48–72 hours</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#34D399]" />
                  <span>Replacement guarantee &amp; transparent SLA</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#34D399]" />
                  <span>Full-time, contract &amp; leadership search</span>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================
              PART 3: RECRUITMENT PHILOSOPHY CALLOUT BANNER
          ======================================================== */}
          <div className="luna-header-fade mt-8 sm:mt-12 p-6 sm:p-8 rounded-2xl lg:rounded-3xl bg-[#081014] border border-[#203536] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#00D5DF]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="max-w-3xl">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#00D5DF] mb-2 block">
                  OUR RECRUITMENT PHILOSOPHY
                </span>
                <h4 className="text-lg sm:text-xl md:text-2xl font-medium text-white leading-snug">
                  &ldquo;Algorithms can scan keywords, but they cannot evaluate ambition, integrity, or culture-fit. At Infidell, we put people first because lasting careers are built on human trust, not automated transactions.&rdquo;
                </h4>
              </div>
              <div className="shrink-0 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#102426] border border-[#203536] flex items-center justify-center text-[#00D5DF] font-bold text-sm">
                  ∞
                </div>
                <div className="text-left">
                  <div className="text-xs font-semibold text-white">The Infidell Creed</div>
                  <div className="text-[11px] text-neutral-400">Long-term Career Advocacy</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            PART 4: 8 COLORFUL TOPIC CARDS WITH GSAP PINNED ORCHESTRATION
        ======================================================== */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#00D5DF] block mb-1">
              SPECIALIZED PRACTICE AREAS
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Explore Our 8 Practice Verticals
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-md">
            Each vertical delivers dedicated placement advisory, verified employer mandates, and domain-specific talent architecture.
          </p>
        </div>

        <div 
          ref={stageRef} 
          className="relative w-full mb-20 sm:mb-28 overflow-visible"
        >
          <div 
            ref={gridRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 relative"
          >
            {COLORFUL_CARDS.map((card) => {
              const isHero = card.entrance === 'hero';
              const isLeft = card.entrance === 'left';

              return (
                <a
                  key={card.id}
                  ref={isHero ? card1Ref : undefined}
                  href={card.href}
                  className={`group relative h-[310px] sm:h-[330px] lg:h-[350px] rounded-2xl lg:rounded-3xl overflow-hidden border transition-all duration-300 p-5 sm:p-6 flex flex-col justify-between shadow-xl shadow-black/70 ${
                    isHero
                      ? 'card-hero-1'
                      : isLeft
                      ? 'card-from-left'
                      : 'card-from-right'
                  }`}
                  style={{
                    borderColor: `${card.borderColor}40`,
                    backgroundColor: '#090E12'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = card.borderColor;
                    e.currentTarget.style.boxShadow = `0 12px 35px -8px ${card.glowColor}`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = `${card.borderColor}40`;
                    e.currentTarget.style.boxShadow = '';
                  }}
                >
                  {/* Full-Bleed Editorial Photographic Background with Gradient Overlay */}
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105 opacity-80"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060A0D] via-[#060A0D]/75 to-black/35 pointer-events-none" />
                    <div 
                      className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at 50% 0%, ${card.accent}, transparent 70%)`
                      }}
                    />
                  </div>

                  {/* Top Row: Category Pill Tag + Round Arrow Action */}
                  <div className="relative z-10 flex items-center justify-between gap-2">
                    <span 
                      className="text-[10px] sm:text-[11px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-full border bg-black/60 backdrop-blur-md"
                      style={{
                        color: card.accent,
                        borderColor: `${card.accent}55`
                      }}
                    >
                      {card.index}
                    </span>
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/60 border border-white/20 backdrop-blur-md flex items-center justify-center text-white/90 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300 shadow-sm shrink-0">
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>

                  {/* Bottom Content: Title, Tagline, Description & Meta */}
                  <div className="relative z-10 mt-auto pt-4">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-0.5 leading-snug group-hover:text-white transition-colors">
                      {card.title}
                    </h3>
                    <p 
                      className="text-[11px] sm:text-xs font-semibold mb-1.5"
                      style={{ color: card.accent }}
                    >
                      {card.tagline}
                    </p>
                    <p className="text-xs text-[#A5B2B3] line-clamp-2 font-normal leading-relaxed mb-3">
                      {card.description}
                    </p>

                    {/* Bottom Footer Row */}
                    <div className="pt-2.5 border-t border-white/10 flex items-center justify-between text-[11px] font-mono">
                      <span className="text-[#A5B2B3] tracking-wide">
                        {card.footerTag}
                      </span>
                      <span 
                        className="font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1"
                        style={{ color: card.accent }}
                      >
                        <span>Explore</span>
                        <span>→</span>
                      </span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* ========================================================
            PART 5: FOUNDER'S NOTE & MINIMALIST STAT COUNTERS
        ======================================================== */}
        <div className="luna-founder-section relative pt-6 sm:pt-10 pb-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start mb-14 sm:mb-18">
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
          <div className="w-full h-px bg-[#203536]/70 my-10 sm:my-14" />

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
