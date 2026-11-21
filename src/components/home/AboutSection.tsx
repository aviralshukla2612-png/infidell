'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
}

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
    index: 'ADVISORY',
    title: 'Work with the Firm',
    tagline: 'Dedicated 1-on-1 placement advisory',
    description: 'Direct executive representation guiding ambitious professionals from initial credential review to verified offers.',
    image: '/images/practices/practice-advisory.jpg',
    accent: '#00D5DF',
    borderColor: '#00D5DF',
    glowColor: 'rgba(0, 213, 223, 0.5)',
    footerTag: 'Direct Advisory · Executive Track',
    href: '#candidate',
    entrance: 'hero'
  },
  {
    id: 2,
    index: 'ARCHITECTURE',
    title: 'Candidate Career Path',
    tagline: 'Profile architecture & ATS readiness',
    description: 'Rebuilding your resume and digital presence to clear automated ATS filters and captivate engineering leadership.',
    image: '/images/practices/practice-architecture.jpg',
    accent: '#A78BFA',
    borderColor: '#8B5CF6',
    glowColor: 'rgba(139, 92, 246, 0.5)',
    footerTag: 'ATS & Tech Ready',
    href: '#approach',
    entrance: 'left'
  },
  {
    id: 3,
    index: 'ENTERPRISE',
    title: 'Collaborate with Us',
    tagline: 'Curated talent acquisition for teams',
    description: 'Partner with Infidell to close critical engineering, fintech, and management requisitions without resume clutter.',
    image: '/images/practices/practice-enterprise.jpg',
    accent: '#34D399',
    borderColor: '#10B981',
    glowColor: 'rgba(16, 185, 129, 0.5)',
    footerTag: '48–72h SLA · Verified',
    href: '#employer',
    entrance: 'right'
  },
  {
    id: 4,
    index: 'SKILLS',
    title: 'Tech & Domain Upskilling',
    tagline: 'Modern engineering frameworks',
    description: 'Targeted skill architecture aligned with emerging cloud, AI, and fullstack requirements demanded by employers.',
    image: '/images/practices/practice-skills.jpg',
    accent: '#FBBF24',
    borderColor: '#F59E0B',
    glowColor: 'rgba(245, 158, 11, 0.5)',
    footerTag: 'Industry Aligned',
    href: '#approach',
    entrance: 'right'
  },
  {
    id: 5,
    index: 'INTEGRITY',
    title: 'Credential Verification',
    tagline: 'Compliant & authentic vetting',
    description: 'Comprehensive background checks, employment history authentication, and degree verification for enterprise compliance.',
    image: '/images/practices/practice-integrity.jpg',
    accent: '#FB7185',
    borderColor: '#F43F5E',
    glowColor: 'rgba(244, 63, 94, 0.5)',
    footerTag: 'Verified Credentials',
    href: '#solutions',
    entrance: 'left'
  },
  {
    id: 6,
    index: 'FINANCE',
    title: 'Finance & Executive Hiring',
    tagline: 'Accounting, tax & corporate roles',
    description: 'Specialized recruitment for certified accountants, tax specialists, finance controllers, and corporate leadership.',
    image: '/images/practices/practice-finance.jpg',
    accent: '#38BDF8',
    borderColor: '#0284C7',
    glowColor: 'rgba(2, 132, 199, 0.5)',
    footerTag: 'Executive Search',
    href: '#solutions',
    entrance: 'left'
  },
  {
    id: 7,
    index: 'GLOBAL',
    title: 'Global Career Mobility',
    tagline: 'Cross-border & overseas hiring',
    description: 'Connecting top-tier talent with multinational enterprises, overseas work authorization guidance, and relocation.',
    image: '/images/practices/practice-global.jpg',
    accent: '#E879F9',
    borderColor: '#D946EF',
    glowColor: 'rgba(217, 70, 239, 0.5)',
    footerTag: 'Cross-Border Reach',
    href: '#insights',
    entrance: 'right'
  },
  {
    id: 8,
    index: 'RESEARCH',
    title: 'Read the Journal',
    tagline: 'Hiring benchmarks & salary data',
    description: 'Data-driven salary reports, emerging industry hiring trends, and strategic recruitment playbooks published regularly.',
    image: '/images/practices/practice-research.jpg',
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

  useGSAP(
    () => {
      if (typeof window === 'undefined') return;
      gsap.registerPlugin(ScrollTrigger);

      // 1. Entrance of title & editorial paragraphs
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

      // 2. Sideways Horizontal Pinned Carousel Animation (with Centered Hold Plateaus)
      const container = stageRef.current;
      if (container) {
        const slides = gsap.utils.toArray<HTMLElement>('.carousel__item', container);

        if (slides.length > 0) {
          const tl = gsap.timeline({ defaults: { ease: 'power2.inOut' } });

          ScrollTrigger.create({
            animation: tl,
            id: 'practice-horizontal-st',
            trigger: container,
            start: 'top top',
            end: () => `+=${container.clientHeight * (slides.length - 1)}`,
            pin: true,
            scrub: 1,
            snap: {
              snapTo: 'labels',
              duration: { min: 0.25, max: 0.6 },
              ease: 'power1.out'
            },
            anticipatePin: 1
          });

          // Reset all slides: horizontal sideways translation only (xPercent, yPercent is strictly 0)
          gsap.set(slides, {
            xPercent: 115,
            yPercent: 0,
            scale: 0.9,
            opacity: 0,
            zIndex: 1
          });

          // First slide begins active, centered and visible
          gsap.set(slides[0], {
            xPercent: 0,
            yPercent: 0,
            opacity: 1,
            scale: 1,
            zIndex: 20
          });

          // Label for slide 1 during initial centered rest
          tl.add('our-work-1', 0);
          // Initial pause so Slide 1 rests centered before scrolling away
          tl.to({}, { duration: 0.5 });

          // Sequential horizontal sideways transitions with hold plateaus
          for (let i = 1; i < slides.length; i++) {
            // Sideways Slide: Previous slide exits left (-115%), Current slide enters from right (115% -> 0%)
            tl.to(slides[i - 1], {
              xPercent: -115,
              opacity: 0,
              scale: 0.9,
              zIndex: 10,
              duration: 1.0
            })
              .to(
                slides[i],
                {
                  xPercent: 0,
                  opacity: 1,
                  scale: 1,
                  zIndex: 20,
                  duration: 1.0
                },
                '<'
              )
              // Centered Hold Plateau: Holds cleanly in center for reading
              .to({}, { duration: 0.5 })
              // Add label exactly at the centered hold point for accurate snapping
              .add(`our-work-${i + 1}`);
          }
        }
      }

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

      // 4. Staggered Stat numbers with continuous re-count from 0 every time user scrolls into view
      let statTweens: gsap.core.Tween[] = [];

      const animateCounters = () => {
        statTweens.forEach((t) => t.kill());
        statTweens = [];

        const statElements = sectionRef.current?.querySelectorAll<HTMLElement>('.luna-stat-number');
        if (!statElements) return;

        statElements.forEach((el) => {
          const target = parseFloat(el.getAttribute('data-target') || '0');
          const suffix = el.getAttribute('data-suffix') || '';
          const hasComma = el.getAttribute('data-comma') === 'true';

          el.textContent = '0' + suffix;
          const counter = { val: 0 };
          const tween = gsap.to(counter, {
            val: target,
            duration: 1.8,
            ease: 'power2.out',
            onUpdate: () => {
              const rounded = Math.round(counter.val);
              el.textContent = (hasComma ? rounded.toLocaleString('en-US') : rounded.toString()) + suffix;
            }
          });
          statTweens.push(tween);
        });

        gsap.fromTo(
          '.luna-stat-item',
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out', overwrite: 'auto' }
        );
      };

      const resetCounters = () => {
        statTweens.forEach((t) => t.kill());
        statTweens = [];

        const statElements = sectionRef.current?.querySelectorAll<HTMLElement>('.luna-stat-number');
        if (!statElements) return;

        statElements.forEach((el) => {
          const suffix = el.getAttribute('data-suffix') || '';
          el.textContent = '0' + suffix;
        });
        gsap.set('.luna-stat-item', { opacity: 0, y: 25 });
      };

      ScrollTrigger.create({
        trigger: '.luna-stats-row',
        start: 'top 85%',
        onEnter: () => animateCounters(),
        onEnterBack: () => animateCounters(),
        onLeave: () => resetCounters(),
        onLeaveBack: () => resetCounters()
      });
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
            PART 1: MASTER TITLE & EDITORIAL PHILOSOPHY
        ======================================================== */}
        <div className="mb-16 sm:mb-24">
          {/* Top Title Bar: "About Us" and Philosophy Subtitle */}
          <div className="luna-header-fade mb-10 sm:mb-12">
            <h2
              ref={headlineRef}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-[6.5rem] font-light tracking-tight text-white leading-none mb-4 sm:mb-5"
            >
              About Us
            </h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-white leading-snug">
              People First.{' '}
              <span className="font-medium bg-gradient-to-r from-white via-[#7DD3FC] to-[#38BDF8] bg-clip-text text-transparent">
                Possibilities Without Limits.
              </span>
            </h3>
          </div>

          {/* 12-Column Grid: Balanced Text on Left & Full Landscape Artwork on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left Column (6 cols): Balanced Editorial Narrative */}
            <div className="lg:col-span-6 flex flex-col justify-center space-y-5">
              {/* Hero Lead Paragraph */}
              <p className="luna-header-fade text-lg sm:text-xl lg:text-[1.22rem] font-light text-white leading-relaxed">
                One dedicated placement firm, no impersonal algorithms in between. Infidell is{' '}
                <strong className="font-semibold bg-gradient-to-r from-white via-[#7DD3FC] to-[#38BDF8] bg-clip-text text-transparent">
                  career advocacy
                </strong>
                . We connect ambitious talent with verified corporate hiring partners across India through personal guidance, rigorous skill evaluation, and enduring professional relationships.
              </p>

              {/* Supporting Editorial Paragraphs */}
              <p className="luna-header-fade text-sm sm:text-base text-neutral-300 font-normal leading-relaxed">
                INFIDELL TECHNOLOGY LLP is an independent career placement and executive talent consultancy bridging the gap between skilled professionals and verified enterprises across India. We strip away the noise of impersonal job boards and keyword spam to deliver high-touch recruitment grounded in deep domain knowledge, verified career alignment, and statutory compliance.
              </p>

              <p className="luna-header-fade text-sm sm:text-base text-neutral-400 font-normal leading-relaxed">
                Job seekers work one-on-one with specialized domain advisors to optimize resumes for strict ATS filters, conduct mock interviews, and negotiate competitive compensation packages. Simultaneously, fast-scaling startups and corporate enterprises turn to Infidell to close critical requisitions within strict 48–72 hour SLAs backed by replacement guarantees.
              </p>
            </div>

            {/* Right Column (6 cols): Pure Image Showcase (Uncropped Natural 3:2 Proportions) */}
            <div className="lg:col-span-6 flex items-center justify-center">
              <div className="luna-header-fade relative w-full aspect-[3/2] rounded-2xl sm:rounded-3xl overflow-hidden border border-[#203536] hover:border-[#00D5DF]/60 transition-all duration-500 shadow-2xl shadow-black/80 bg-[#060D10] group">
                {/* Dark Mode Office Visual */}
                <div className="dark-only relative w-full h-full">
                  <Image
                    src="/about-bg.png"
                    alt="Infidell Technology LLP Headquarters"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
                {/* Light Mode Office Visual */}
                <div className="light-only relative w-full h-full">
                  <Image
                    src="/about-bg-light.png"
                    alt="Infidell Technology LLP Headquarters - Light Theme"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
                {/* Subtle top edge highlight */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00D5DF]/60 to-transparent pointer-events-none" />
              </div>
            </div>

          </div>
        </div>

        {/* ========================================================
            PART 2: 8 PRACTICE VERTICALS PINNED CAROUSEL WITH GSAP ANIMATION
        ======================================================== */}
        <div
          ref={stageRef}
          className="practice-carousel-stage our-work relative w-full min-h-screen flex items-center py-12 sm:py-20 overflow-hidden"
        >
          {/* Subtle atmospheric ambient glow behind the carousel */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00D5DF]/10 rounded-full blur-[200px] pointer-events-none" />

          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">

            {/* Left Column (5 cols): Sticky Heading & Narrative */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-5">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white leading-tight">
                Strategic Practice Areas &{' '}
                <span className="font-medium bg-gradient-to-r from-white via-[#7DD3FC] to-[#38BDF8] bg-clip-text text-transparent">
                  Executive Solutions
                </span>
              </h3>

              <p className="text-sm sm:text-base text-neutral-300 font-normal leading-relaxed">
                Explore our specialized recruitment practices spanning executive search, technical architecture, credential verification, and global talent acquisition.
              </p>
            </div>

            {/* Right Column (7 cols): Pinned Stacked Card Carousel Slider */}
            <div className="lg:col-span-7 w-full">

              {/* Carousel Slider */}
              <div className="carousel__slider relative w-full h-[460px] sm:h-[490px] md:h-[520px] overflow-hidden rounded-3xl shadow-2xl">
                {COLORFUL_CARDS.map((card, idx) => (
                  <div
                    key={card.id}
                    id={`our-work-${idx + 1}`}
                    className="carousel__item about-carousel-card absolute inset-0 w-full h-full rounded-3xl border border-white/15 overflow-hidden p-6 sm:p-8 md:p-10 flex flex-col justify-between shadow-2xl backdrop-blur-xl bg-[#090E12]"
                    style={{
                      borderColor: `${card.borderColor}60`
                    }}
                  >
                    {/* Full-Bleed Photographic Background with Crisp Clarity & Subtle Bottom Scrim */}
                    <div className="absolute inset-0 z-0 overflow-hidden">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover object-center opacity-100 brightness-105 contrast-105"
                        sizes="(max-width: 1024px) 100vw, 55vw"
                      />
                      {/* Subtle bottom gradient scrim so upper image is 100% visible, vibrant & unblocked while bottom text is crystal clear */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050708] via-[#050708]/80 via-45% to-transparent pointer-events-none" />
                    </div>

                    {/* Top Edge Ambient Highlight in Card Accent Color */}
                    <div
                      className="absolute top-0 inset-x-0 h-[2px] pointer-events-none"
                      style={{
                        background: `linear-gradient(90deg, transparent, ${card.accent}, transparent)`
                      }}
                    />

                    {/* Top Row: Domain Pill Tag + Action Arrow */}
                    <div className="relative z-10 flex items-center justify-between gap-2">
                      <span
                        className="text-[11px] sm:text-xs font-semibold tracking-[0.14em] uppercase px-3.5 py-1.5 rounded-full border bg-black/60 backdrop-blur-md"
                        style={{
                          color: card.accent,
                          borderColor: `${card.accent}60`
                        }}
                      >
                        {card.index}
                      </span>

                      <a
                        href={card.href}
                        aria-label={`Explore ${card.title} Practice`}
                        className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/60 border border-white/20 backdrop-blur-md flex items-center justify-center text-white/90 hover:bg-white hover:text-black hover:border-white transition-all duration-300 shadow-md shrink-0"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>

                    {/* Bottom Content: Title, Tagline, Description & Meta */}
                    <div className="relative z-10 mt-auto pt-4">
                      <h2 className="text-2xl sm:text-3xl md:text-[2rem] font-bold text-white mb-1.5 leading-snug tracking-tight">
                        {card.title}
                      </h2>
                      <p
                        className="text-xs sm:text-sm font-semibold mb-2.5"
                        style={{ color: card.accent }}
                      >
                        {card.tagline}
                      </p>
                      <p className="text-xs sm:text-sm text-neutral-300 font-normal leading-relaxed mb-4 max-w-xl">
                        {card.description}
                      </p>

                      {/* Bottom Footer Row */}
                      <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs sm:text-sm">
                        <span className="text-neutral-400 font-mono tracking-wide">
                          {card.footerTag}
                        </span>
                        <a
                          href={card.href}
                          className="font-medium hover:translate-x-1.5 transition-transform inline-flex items-center gap-1.5"
                          style={{ color: card.accent }}
                        >
                          <span>Explore Practice</span>
                          <span>→</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* ========================================================
            PART 3: FOUNDER'S NOTE & MINIMALIST STAT COUNTERS
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

          {/* Minimalist Big Numbers - Centered & Animated */}
          <div className="luna-stats-row grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 pt-4 max-w-5xl mx-auto">
            {/* Stat 1 */}
            <div className="luna-stat-item flex flex-col items-center text-center">
              <div
                className="luna-stat-number text-5xl sm:text-6xl md:text-7xl font-light text-white tracking-tight leading-none mb-3 tabular-nums"
                data-target="4800"
                data-suffix="+"
                data-comma="true"
              >
                0+
              </div>
              <div className="text-xs sm:text-sm text-neutral-400 font-normal tracking-wide text-center">
                Candidates placed
              </div>
            </div>

            {/* Stat 2 */}
            <div className="luna-stat-item flex flex-col items-center text-center">
              <div
                className="luna-stat-number text-5xl sm:text-6xl md:text-7xl font-light text-white tracking-tight leading-none mb-3 tabular-nums"
                data-target="350"
                data-suffix="+"
                data-comma="false"
              >
                0+
              </div>
              <div className="text-xs sm:text-sm text-neutral-400 font-normal tracking-wide text-center">
                Corporate hiring partners
              </div>
            </div>

            {/* Stat 3 */}
            <div className="luna-stat-item flex flex-col items-center text-center">
              <div
                className="luna-stat-number text-5xl sm:text-6xl md:text-7xl font-light text-white tracking-tight leading-none mb-3 tabular-nums"
                data-target="98"
                data-suffix="%"
                data-comma="false"
              >
                0%
              </div>
              <div className="text-xs sm:text-sm text-neutral-400 font-normal tracking-wide text-center">
                Placement satisfaction rate
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
