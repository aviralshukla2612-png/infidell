'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { 
  ArrowRight, 
  Building2, 
  Briefcase, 
  BadgeCheck, 
  Compass, 
  ShieldCheck 
} from 'lucide-react';

const LINE1_PREFIX = "Every Career Has a ";
const LINE1_HIGHLIGHT = "Next";
const LINE1_SUFFIX = " Chapter.";

const LINE2_PREFIX = "Let's Make ";
const LINE2_HIGHLIGHT = "Yours";
const LINE2_SUFFIX = " Count.";

const TOTAL_LINE1 = LINE1_PREFIX.length + LINE1_HIGHLIGHT.length + LINE1_SUFFIX.length; // 32
const TOTAL_LINE2 = LINE2_PREFIX.length + LINE2_HIGHLIGHT.length + LINE2_SUFFIX.length; // 23
const TOTAL_CHARS = TOTAL_LINE1 + TOTAL_LINE2; // 55
const LINE2_CUTOFF = TOTAL_CHARS - LINE2_SUFFIX.length; // 48

// Isolated Typewriter Subcomponent to prevent re-rendering the entire 400-line HeroSection 55 times during page load
function HeroHeadlineTypewriter() {
  const [mounted, setMounted] = useState(false);
  const [charCount, setCharCount] = useState(TOTAL_CHARS);
  const [phase, setPhase] = useState<'typing' | 'pausing' | 'deleting' | 'retyping'>('pausing');

  useEffect(() => {
    setMounted(true);
    setCharCount(0);
    setPhase('typing');
  }, []);

  useEffect(() => {
    if (!mounted) return;

    let timer: NodeJS.Timeout;

    if (phase === 'typing') {
      if (charCount < TOTAL_CHARS) {
        const delay = charCount === TOTAL_LINE1 ? 160 : 36;
        timer = setTimeout(() => {
          setCharCount((prev) => prev + 1);
        }, delay);
      } else {
        timer = setTimeout(() => {
          setPhase('deleting');
        }, 4000);
      }
    } else if (phase === 'deleting') {
      if (charCount > LINE2_CUTOFF) {
        timer = setTimeout(() => {
          setCharCount((prev) => prev - 1);
        }, 48);
      } else {
        timer = setTimeout(() => {
          setPhase('retyping');
        }, 400);
      }
    } else if (phase === 'retyping') {
      if (charCount < TOTAL_CHARS) {
        timer = setTimeout(() => {
          setCharCount((prev) => prev + 1);
        }, 55);
      } else {
        timer = setTimeout(() => {
          setPhase('deleting');
        }, 5500);
      }
    }

    return () => clearTimeout(timer);
  }, [mounted, charCount, phase]);

  const renderLine1 = () => {
    if (!mounted) {
      return (
        <>
          <span>{LINE1_PREFIX}</span>
          <span className="text-[#087FCB] dark:text-[#00D5DF] drop-shadow-[0_0_20px_rgba(0,213,223,0.4)]">
            {LINE1_HIGHLIGHT}
          </span>
          <span>{LINE1_SUFFIX}</span>
        </>
      );
    }

    const c1 = Math.min(charCount, TOTAL_LINE1);
    const p1Length = LINE1_PREFIX.length;
    const h1Length = LINE1_HIGHLIGHT.length;
    const s1Length = LINE1_SUFFIX.length;

    const showPrefix = LINE1_PREFIX.slice(0, Math.min(c1, p1Length));
    const showHighlight = c1 > p1Length ? LINE1_HIGHLIGHT.slice(0, Math.min(c1 - p1Length, h1Length)) : '';
    const showSuffix = c1 > p1Length + h1Length ? LINE1_SUFFIX.slice(0, Math.min(c1 - (p1Length + h1Length), s1Length)) : '';

    return (
      <>
        <span>{showPrefix}</span>
        {showHighlight && (
          <span className="text-[#087FCB] dark:text-[#00D5DF] drop-shadow-[0_0_20px_rgba(0,213,223,0.4)]">
            {showHighlight}
          </span>
        )}
        <span>{showSuffix}</span>
      </>
    );
  };

  const renderLine2 = () => {
    if (!mounted) {
      return (
        <>
          <span>{LINE2_PREFIX}</span>
          <span className="cyan-text-gradient drop-shadow-[0_0_25px_rgba(23,190,187,0.35)]">
            {LINE2_HIGHLIGHT}
          </span>
          <span>{LINE2_SUFFIX}</span>
        </>
      );
    }

    const c2 = Math.max(0, charCount - TOTAL_LINE1);
    const p2Length = LINE2_PREFIX.length;
    const h2Length = LINE2_HIGHLIGHT.length;
    const s2Length = LINE2_SUFFIX.length;

    const showPrefix = LINE2_PREFIX.slice(0, Math.min(c2, p2Length));
    const showHighlight = c2 > p2Length ? LINE2_HIGHLIGHT.slice(0, Math.min(c2 - p2Length, h2Length)) : '';
    const showSuffix = c2 > p2Length + h2Length ? LINE2_SUFFIX.slice(0, Math.min(c2 - (p2Length + h2Length), s2Length)) : '';

    return (
      <>
        <span>{showPrefix}</span>
        {showHighlight && (
          <span className="cyan-text-gradient drop-shadow-[0_0_25px_rgba(23,190,187,0.35)]">
            {showHighlight}
          </span>
        )}
        <span>{showSuffix}</span>
      </>
    );
  };

  return (
    <>
      <span className="block whitespace-nowrap min-h-[1.12em]">
        {renderLine1()}
      </span>
      <span className="block whitespace-nowrap mt-1 sm:mt-2 text-[#102B50] dark:text-white min-h-[1.12em]">
        {renderLine2()}
      </span>
    </>
  );
}

export function HeroSection() {
  const t = useTranslations('Hero');

  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const bgVisualRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (typeof window === 'undefined') return;

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // 1. Headline container fade-in
      if (headlineRef.current) {
        tl.fromTo(
          headlineRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.6, delay: 0.1 }
        );
      }

      // 2. Description fade-in
      tl.fromTo(
        '.hero-desc',
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.4'
      );

      // 3. CTAs
      tl.fromTo(
        '.hero-cta-btn',
        { opacity: 0, y: 20, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.12 },
        '-=0.5'
      );

      // 4. Background infinity visual entrance (Immediate opacity for instant LCP scoring without artificial delays)
      if (bgVisualRef.current) {
        tl.fromTo(
          bgVisualRef.current,
          { opacity: 0.85, scale: 1.04 },
          { opacity: 1, scale: 1, duration: 0.9, ease: 'power2.out' },
          0
        );
      }

      // 5. Horizontal feature strip reveal
      tl.fromTo(
        '.hero-feature-strip',
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
        '-=0.6'
      );
    },
    { scope: containerRef }
  );

  return (
    <section 
      id="home"
      ref={containerRef}
      className="relative min-h-screen lg:h-screen lg:max-h-screen flex flex-col justify-between bg-[#000000] overflow-hidden pt-20 sm:pt-24 lg:pt-24 pb-4 sm:pb-6 lg:pb-5"
    >
      {/* Dynamic Background: Official Metallic Infinity Visual */}
      <div 
        ref={bgVisualRef}
        className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden"
      >
        {/* Dark Mode Background Visual */}
        <div className="dark-only absolute inset-0">
          <Image
            src="/images/bg.png"
            alt="Infidell Technology LLP Metallic Infinity Ribbon Visual"
            fill
            sizes="(max-width: 768px) 100vw, 1000px"
            className="object-contain sm:object-cover object-center sm:object-right opacity-80 sm:opacity-90 mix-blend-screen scale-105 sm:scale-100"
          />
          {/* Ambient Dark Gradient Overlays for optimal typography readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-[#000000]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-[#000000]/60" />
          {/* Subtle cyan glow accent */}
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#00E5F0]/15 rounded-full blur-[130px]" />
        </div>

        {/* Light Mode Background Visual: Official User Provided Light Background (/lightbg.png) */}
        <div className="light-only absolute inset-0">
          <Image
            src="/lightbg.png"
            alt="Infidell Technology LLP Metallic Infinity Ribbon Visual - Light Theme"
            fill
            priority
            fetchPriority="high"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 1000px"
            className="object-contain sm:object-contain object-right opacity-95 scale-85 sm:scale-75 lg:scale-70 origin-right transition-transform"
          />
          {/* Subtle Ambient Light Gradient Overlays for optimal typography readability on the left */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F8FAFC]/90 via-[#F8FAFC]/50 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F8FAFC] via-transparent to-[#F8FAFC]/30 pointer-events-none" />
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-10 xl:col-span-10 space-y-6 sm:space-y-8">
            {/* Headline with Live Typewriter Effect — Guaranteed Exactly 2 Lines */}
            <h1 
              ref={headlineRef}
              className="text-[1.2rem] min-[390px]:text-[1.38rem] xs:text-[1.62rem] sm:text-4xl md:text-[2.75rem] lg:text-[3.25rem] xl:text-[3.85rem] 2xl:text-[4.5rem] font-extrabold tracking-tight text-[#102B50] dark:text-white leading-[1.12]"
            >
              <HeroHeadlineTypewriter />
            </h1>

            {/* Description */}
            <p className="hero-desc text-sm sm:text-base md:text-lg text-[#A5B2B3] max-w-xl leading-relaxed font-normal">
              {t('description')}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2 w-full max-w-md sm:max-w-none">
              <a
                href="#candidate"
                className="hero-cta-btn hero-cta-primary w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm font-bold text-black bg-[#17BEBB] hover:bg-[#00D5DF] transition-all duration-300 shadow-[0_0_25px_rgba(23,190,187,0.35)] hover:shadow-[0_0_35px_rgba(0,213,223,0.5)] transform hover:-translate-y-0.5 cursor-pointer text-center"
              >
                <span>{t('ctaPrimary')}</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </a>

              <a
                href="#employer"
                className="hero-cta-btn hero-cta-secondary w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm font-semibold text-[#F5F8F8] bg-[#0C1517]/90 hover:bg-[#102426] border border-[#203536] hover:border-[#17BEBB]/60 transition-all duration-300 backdrop-blur-md cursor-pointer text-center"
              >
                <Building2 className="w-4 h-4 text-[#17BEBB]" />
                <span>{t('ctaSecondary')}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Left unobstructed so the 3D infinity visual is 100% visible */}
          <div className="hidden lg:block lg:col-span-2 xl:col-span-2" />
        </div>
      </div>

      {/* Three Main Services Highlight Bar (Integrated Directly into the Hero) */}
      <div className="hero-feature-strip relative z-10 w-full border-t border-[#203536]/80 pt-3 sm:pt-4 pb-1 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-2 sm:mb-2.5 flex items-center justify-between">
            <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.2em] text-[#00D5DF] font-bold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D5DF] shadow-[0_0_8px_#00D5DF]" />
              Our Three Main Services
            </span>
            <span className="text-xs text-neutral-400 hidden sm:inline-block">
              Dedicated Placement &amp; Enterprise Staffing Architecture
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-3.5 lg:gap-4">
            {/* Service 1: Career Placement & Advisory */}
            <a
              href="#candidate"
              className="group p-3 sm:p-3.5 lg:p-4 rounded-2xl bg-[#0C1517]/85 hover:bg-[#0E1A1C] border hover:border-[#00D5DF]/80 transition-all duration-300 shadow-lg flex flex-col justify-between cursor-pointer"
              style={{
                borderColor: 'rgba(0, 213, 223, 0.4)',
                boxShadow: '0 4px 25px -3px rgba(0, 213, 223, 0.12)'
              }}
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#00D5DF]/10 border border-[#00D5DF]/30 flex items-center justify-center text-[#087FCB] dark:text-[#00D5DF] shadow-[0_0_12px_rgba(0,213,223,0.2)] group-hover:scale-105 transition-transform shrink-0">
                    <Compass className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-[#087FCB] dark:text-[#00D5DF] uppercase tracking-wider block">
                      01 · Candidate Track
                    </span>
                    <h2 className="text-sm sm:text-base font-bold text-[#102B50] dark:text-white group-hover:text-[#087FCB] dark:group-hover:text-[#00D5DF] transition-colors leading-tight">
                      Career Placement &amp; Advisory
                    </h2>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-[#00D5DF] group-hover:translate-x-1 transition-all shrink-0 mt-1" />
              </div>
              <p className="text-xs text-slate-600 dark:text-neutral-300 leading-relaxed font-normal">
                100% free candidate career advocacy: ATS resume architecture, compensation benchmarking, and direct introductions to engineering leadership.
              </p>
            </a>

            {/* Service 2: Corporate Recruitment & Staffing */}
            <a
              href="#employer"
              className="group p-4 sm:p-5 rounded-2xl bg-[#0C1517]/85 hover:bg-[#0E1A1C] border hover:border-[#38BDF8]/80 transition-all duration-300 shadow-lg flex flex-col justify-between cursor-pointer"
              style={{
                borderColor: 'rgba(56, 189, 248, 0.4)',
                boxShadow: '0 4px 25px -3px rgba(56, 189, 248, 0.12)'
              }}
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#38BDF8]/10 border border-[#38BDF8]/30 flex items-center justify-center text-[#0284C7] dark:text-[#38BDF8] shadow-[0_0_12px_rgba(56,189,248,0.2)] group-hover:scale-105 transition-transform shrink-0">
                    <Building2 className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-[#0284C7] dark:text-[#38BDF8] uppercase tracking-wider block">
                      02 · Enterprise Track
                    </span>
                    <h2 className="text-sm sm:text-base font-bold text-[#102B50] dark:text-white group-hover:text-[#0284C7] dark:group-hover:text-[#38BDF8] transition-colors leading-tight">
                      Corporate Recruitment &amp; Staffing
                    </h2>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-[#38BDF8] group-hover:translate-x-1 transition-all shrink-0 mt-1" />
              </div>
              <p className="text-xs text-slate-600 dark:text-neutral-300 leading-relaxed font-normal">
                Multi-tier vetted technical shortlists delivered in 48 to 72 hours with verified notice periods and replacement guarantees.
              </p>
            </a>

            {/* Service 3: Executive Search & Leadership */}
            <a
              href="mailto:contact@infidelltech.com?subject=Executive%20Search%20Inquiry"
              className="group p-4 sm:p-5 rounded-2xl bg-[#0C1517]/85 hover:bg-[#0E1A1C] border hover:border-[#A78BFA]/80 transition-all duration-300 shadow-lg flex flex-col justify-between cursor-pointer"
              style={{
                borderColor: 'rgba(167, 139, 250, 0.4)',
                boxShadow: '0 4px 25px -3px rgba(167, 139, 250, 0.12)'
              }}
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#A78BFA]/10 border border-[#A78BFA]/30 flex items-center justify-center text-[#7C3AED] dark:text-[#A78BFA] shadow-[0_0_12px_rgba(167,139,250,0.2)] group-hover:scale-105 transition-transform shrink-0">
                    <ShieldCheck className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-[#7C3AED] dark:text-[#A78BFA] uppercase tracking-wider block">
                      03 · Executive Track
                    </span>
                    <h2 className="text-sm sm:text-base font-bold text-[#102B50] dark:text-white group-hover:text-[#7C3AED] dark:group-hover:text-[#A78BFA] transition-colors leading-tight">
                      Executive Search &amp; Leadership
                    </h2>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-[#A78BFA] group-hover:translate-x-1 transition-all shrink-0 mt-1" />
              </div>
              <p className="text-xs text-slate-600 dark:text-neutral-300 leading-relaxed font-normal">
                Confidential headhunting for Director, VP of Engineering, and C-suite leadership with strict NDA background due diligence.
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
