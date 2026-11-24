'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { 
  ArrowRight, 
  Building2 
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

// Signature Futuristic Typewriter Headline Animation with Pulsing Cursor
function HeroHeadlineTypewriter() {
  const [mounted, setMounted] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const [phase, setPhase] = useState<'typing' | 'pausing' | 'deleting' | 'retyping'>('typing');

  useEffect(() => {
    setMounted(true);
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
      <span className="block sm:whitespace-nowrap min-h-[1.12em] break-words">
        {renderLine1()}
      </span>
      <span className="block sm:whitespace-nowrap mt-1 sm:mt-2 text-[#102B50] dark:text-white min-h-[1.12em] break-words">
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

      // 4. Kinetic Wave Flow in Dark Mode: Continuous seamless movement from Left to Right
      // (The big infinity sculpture remains 100% static and grounded)
      gsap.fromTo(
        '.hero-flowing-wave-track',
        { xPercent: -50 },
        {
          xPercent: 0,
          duration: 20,
          ease: 'none',
          repeat: -1
        }
      );

      // 5. Kinetic traveling wave shimmer: Sweeps left to right across the wave crests
      gsap.fromTo(
        '.hero-wave-stream',
        { xPercent: -120 },
        {
          xPercent: 240,
          duration: 4.8,
          ease: 'power1.inOut',
          repeat: -1,
          repeatDelay: 0.4
        }
      );

      // 6. Light Mode subtle traveling wave shimmer
      gsap.fromTo(
        '.hero-wave-stream-light',
        { xPercent: -120 },
        {
          xPercent: 240,
          duration: 5.2,
          ease: 'power1.inOut',
          repeat: -1,
          repeatDelay: 0.6
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section 
      id="home"
      ref={containerRef}
      className="relative min-h-screen lg:min-h-[100dvh] flex flex-col justify-center bg-white dark:bg-[#000000] overflow-hidden pt-20 sm:pt-24 lg:pt-24 xl:pt-28 pb-10 sm:pb-12 lg:pb-12 xl:pb-16"
    >
      {/* Dynamic Background: Official Metallic Infinity Visual */}
      <div 
        ref={bgVisualRef}
        className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden"
      >
        {/* Dark Mode Background Visual: Official Metallic Infinity Visual (Completely Static & Rock-Solid) */}
        <div className="dark-only absolute inset-0">
          <div className="absolute inset-0 w-full h-full pointer-events-none select-none">
            <Image
              src="/images/bg-infinity-static.png"
              alt="Infidell Technology Metallic Infinity Ribbon Visual"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center sm:object-right opacity-90 sm:opacity-95"
            />
          </div>
          {/* Ambient Dark Gradient Overlays for optimal typography readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-[#000000]/75 via-40% to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent via-30% to-[#000000]/60 pointer-events-none" />

          {/* Continuous Flowing Particle Wave Layer (Moves seamlessly from Left to Right) */}
          <div className="absolute inset-x-0 bottom-0 h-44 sm:h-64 overflow-hidden pointer-events-none select-none z-10">
            <div className="hero-flowing-wave-track flex w-[200%] h-full will-change-transform">
              <div className="relative w-1/2 h-full flex-shrink-0">
                <Image
                  src="/images/hero-wave-seamless.png"
                  alt="Flowing Luminous Particle Wave"
                  fill
                  sizes="100vw"
                  className="object-cover object-bottom mix-blend-screen opacity-95"
                />
              </div>
              <div className="relative w-1/2 h-full flex-shrink-0">
                <Image
                  src="/images/hero-wave-seamless.png"
                  alt="Flowing Luminous Particle Wave"
                  fill
                  sizes="100vw"
                  className="object-cover object-bottom mix-blend-screen opacity-95"
                />
              </div>
            </div>

            {/* Radiant traveling wave beam sweeping over the wave from left to right */}
            <div className="hero-wave-stream absolute inset-y-0 w-3/4 bg-gradient-to-r from-transparent via-[#00D5DF]/35 via-50% via-[#38BDF8]/40 to-transparent blur-2xl will-change-transform mix-blend-screen pointer-events-none" />
          </div>

          {/* Multi-layered specular ambient depth glows */}
          <div className="absolute top-1/4 right-1/4 w-[420px] h-[420px] bg-[radial-gradient(circle,rgba(0,229,240,0.18)_0%,rgba(8,127,203,0.1)_45%,transparent_70%)] rounded-full blur-[110px]" />
          <div className="absolute bottom-1/3 right-1/6 w-80 h-80 bg-[#00E5F0]/10 rounded-full blur-[130px]" />
        </div>

        {/* Light Mode Background Visual: Official User Provided Light Background (/lightbg.png - Completely Static) */}
        <div className="light-only absolute inset-0">
          <div className="absolute inset-0 w-full h-full pointer-events-none select-none">
            <Image
              src="/lightbg.png"
              alt="Infidell Technology Metallic Infinity Ribbon Visual - Light Theme"
              fill
              priority
              fetchPriority="high"
              sizes="100vw"
              className="object-cover object-center sm:object-right-bottom"
            />
          </div>
          {/* Seamless Ambient Light Gradient Overlays: Blends image background perfectly into the page with 0 cutoff lines */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 via-40% to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent via-25% to-white/40 pointer-events-none" />
          {/* Luminous subtle traveling wave shimmer from left to right */}
          <div className="absolute inset-x-0 bottom-0 h-40 sm:h-52 overflow-hidden pointer-events-none opacity-45">
            <div className="hero-wave-stream-light absolute inset-y-0 w-3/4 bg-gradient-to-r from-transparent via-[#087FCB]/20 via-50% via-[#00BFCB]/25 to-transparent blur-2xl will-change-transform" />
          </div>
          {/* Subtle azure specular bloom */}
          <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(8,127,203,0.1)_0%,transparent_65%)] rounded-full blur-[90px] pointer-events-none" />
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-8 xl:col-span-8 space-y-6 sm:space-y-8">
            {/* Headline with Live Typewriter Effect — Fully Responsive Across All Devices */}
            <h1 
              ref={headlineRef}
              className="text-[1.12rem] min-[360px]:text-[1.25rem] min-[390px]:text-[1.38rem] xs:text-[1.62rem] sm:text-4xl md:text-[2.75rem] lg:text-[3.25rem] xl:text-[3.85rem] 2xl:text-[4.5rem] font-extrabold tracking-tight text-[#102B50] dark:text-white leading-[1.14] break-words"
            >
              <HeroHeadlineTypewriter />
            </h1>

            {/* Description */}
            <p className="hero-desc text-sm sm:text-base md:text-lg text-[#475569] dark:text-[#A5B2B3] max-w-xl leading-relaxed font-normal">
              {t('description')}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 pt-2 w-full max-w-md sm:max-w-none">
              <a
                href="#candidate"
                className="hero-cta-btn hero-cta-primary relative w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-bold text-black bg-[#17BEBB] hover:bg-[#00D5DF] transition-all duration-300 shadow-[0_4px_25px_rgba(23,190,187,0.35)] hover:shadow-[0_8px_35px_rgba(0,213,223,0.55)] transform hover:-translate-y-0.5 cursor-pointer text-center overflow-hidden group"
              >
                <span className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" />
                <span className="relative z-10">{t('ctaPrimary')}</span>
                <ArrowRight className="w-4 h-4 text-black relative z-10 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href="#employer"
                className="hero-cta-btn hero-cta-secondary relative w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-semibold text-[#102B50] dark:text-[#F5F8F8] bg-white dark:bg-[#0C1517]/90 hover:bg-slate-50 dark:hover:bg-[#102426] border border-slate-200 dark:border-[#203536] hover:border-[#17BEBB]/60 transition-all duration-300 shadow-sm hover:shadow-md backdrop-blur-md cursor-pointer text-center group transform hover:-translate-y-0.5"
              >
                <Building2 className="w-4 h-4 text-[#087FCB] dark:text-[#17BEBB] group-hover:scale-110 transition-transform" />
                <span>{t('ctaSecondary')}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Left unobstructed so the 3D infinity visual is 100% visible */}
          <div className="hidden lg:block lg:col-span-4 xl:col-span-4" />
        </div>
      </div>
    </section>
  );
}
