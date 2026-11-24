'use client';

import React, { useRef, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { 
  ArrowRight, 
  Building2 
} from 'lucide-react';

const Hero3DCanvas = dynamic(
  () => import('./Hero3DCanvas').then((mod) => mod.Hero3DCanvas),
  { ssr: false }
);

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

      // 4. Ethereal kinetic floating for 3D infinity artwork
      gsap.to('.hero-floating-artwork', {
        y: -8,
        duration: 4.5,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true
      });
    },
    { scope: containerRef }
  );

  return (
    <section 
      id="home"
      ref={containerRef}
      className="relative min-h-[90vh] lg:h-screen lg:max-h-screen flex flex-col justify-center bg-white dark:bg-[#000000] overflow-hidden pt-24 sm:pt-28 pb-12 sm:pb-16"
    >
      {/* Dynamic Background: Official Metallic Infinity Visual */}
      <div 
        ref={bgVisualRef}
        className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden"
      >
        {/* Dark Mode Background Visual */}
        <div className="dark-only absolute inset-0">
          <div className="hero-floating-artwork absolute inset-0 w-full h-full will-change-transform">
            <Image
              src="/images/bg.png"
              alt="Infidell Technology Metallic Infinity Ribbon Visual"
              fill
              sizes="(max-width: 768px) 100vw, 1000px"
              className="object-contain sm:object-cover object-center sm:object-right opacity-80 sm:opacity-90 mix-blend-screen scale-105 sm:scale-100"
            />
          </div>
          {/* Ambient Dark Gradient Overlays for optimal typography readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-[#000000]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-[#000000]/60" />
          {/* Multi-layered specular ambient depth glows */}
          <div className="absolute top-1/4 right-1/4 w-[420px] h-[420px] bg-[radial-gradient(circle,rgba(0,229,240,0.18)_0%,rgba(8,127,203,0.1)_45%,transparent_70%)] rounded-full blur-[110px]" />
          <div className="absolute bottom-1/3 right-1/6 w-80 h-80 bg-[#00E5F0]/10 rounded-full blur-[130px]" />
        </div>

        {/* Light Mode Background Visual: Official User Provided Light Background (/lightbg.png) */}
        <div className="light-only absolute inset-0">
          <div className="hero-floating-artwork absolute inset-0 w-full h-full will-change-transform">
            <Image
              src="/lightbg.png"
              alt="Infidell Technology Metallic Infinity Ribbon Visual - Light Theme"
              fill
              priority
              fetchPriority="high"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 1000px"
              className="object-cover object-right-bottom"
            />
          </div>
          {/* Seamless Ambient Light Gradient Overlays: Blends image background perfectly into the page with 0 cutoff lines */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 via-30% to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent pointer-events-none" />
          {/* Subtle azure specular bloom */}
          <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(8,127,203,0.1)_0%,transparent_65%)] rounded-full blur-[90px] pointer-events-none" />
        </div>
      </div>

      {/* Premium 3D Animation Layer: Luminous Particle Wave & Orbital Light Trails */}
      <Hero3DCanvas />

      {/* Main Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-8 xl:col-span-8 space-y-6 sm:space-y-8">
            {/* Headline with Live Typewriter Effect — Guaranteed Exactly 2 Lines */}
            <h1 
              ref={headlineRef}
              className="text-[1.2rem] min-[390px]:text-[1.38rem] xs:text-[1.62rem] sm:text-4xl md:text-[2.75rem] lg:text-[3.25rem] xl:text-[3.85rem] 2xl:text-[4.5rem] font-extrabold tracking-tight text-[#102B50] dark:text-white leading-[1.12]"
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
