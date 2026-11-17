'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { 
  ArrowRight, 
  Building2, 
  Code2, 
  Layers, 
  Zap, 
  ShieldCheck 
} from 'lucide-react';

export function HeroSection() {
  const t = useTranslations('Hero');

  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const bgVisualRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (typeof window === 'undefined') return;

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // 1. Headline words reveal
      if (headlineRef.current) {
        const words = headlineRef.current.querySelectorAll('.hero-word');
        tl.fromTo(
          words,
          { opacity: 0, y: 40, filter: 'blur(8px)' },
          { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.7, stagger: 0.08, delay: 0.15 }
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

      // 4. Background infinity visual entrance
      if (bgVisualRef.current) {
        tl.fromTo(
          bgVisualRef.current,
          { opacity: 0, scale: 1.12, filter: 'blur(10px)' },
          { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 1.4, ease: 'expo.out' },
          0.1
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
      className="relative min-h-screen flex flex-col justify-between bg-[#000000] overflow-hidden pt-20 sm:pt-28 pb-6 sm:pb-10 lg:pt-36 lg:pb-12"
    >
      {/* Dynamic Background: Official Metallic Infinity Visual (bg.png) */}
      <div 
        ref={bgVisualRef}
        className="absolute inset-0 z-0 pointer-events-none select-none opacity-95 overflow-hidden"
      >
        <Image
          src="/images/bg.png"
          alt="Infidell Technology LLP Metallic Infinity Ribbon Visual"
          fill
          priority
          className="object-contain sm:object-cover object-center sm:object-right opacity-80 sm:opacity-90 mix-blend-screen scale-105 sm:scale-100"
        />

        {/* Ambient Dark Gradient Overlays for optimal typography readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-[#000000]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-[#000000]/60" />

        {/* Subtle cyan glow accent */}
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#00E5F0]/15 rounded-full blur-[130px]" />
      </div>

      {/* Main Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-8 space-y-6 sm:space-y-8">
            {/* Headline with word-by-word reveal */}
            <h1 
              ref={headlineRef}
              className="text-[1.62rem] xs:text-[1.95rem] sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.14]"
            >
              <span className="block">
                <span className="hero-word inline-block mr-1.5 xs:mr-2">Find</span>
                <span className="hero-word inline-block mr-1.5 xs:mr-2">the</span>
                <span className="hero-word inline-block mr-1.5 xs:mr-2 text-[#00E5F0] drop-shadow-[0_0_20px_rgba(0,229,240,0.4)]">Right</span>
                <span className="hero-word inline-block">Opportunity.</span>
              </span>
              <span className="block mt-1 sm:mt-2 text-white">
                <span className="hero-word inline-block mr-1.5 xs:mr-2">Build</span>
                <span className="hero-word inline-block mr-1.5 xs:mr-2">Your</span>
                <span className="hero-word inline-block cyan-text-gradient drop-shadow-[0_0_25px_rgba(0,229,240,0.3)]">Future.</span>
              </span>
            </h1>

            {/* Description */}
            <p className="hero-desc text-sm sm:text-base md:text-lg text-[#AEB8C2] max-w-xl leading-relaxed font-normal">
              {t('description')}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2 w-full max-w-md sm:max-w-none">
              <a
                href="#process"
                className="hero-cta-btn w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm font-bold text-black bg-[#00E5F0] hover:bg-[#00BFD0] transition-all duration-300 shadow-[0_0_25px_rgba(0,229,240,0.4)] hover:shadow-[0_0_35px_rgba(0,229,240,0.6)] transform hover:-translate-y-0.5 cursor-pointer text-center"
              >
                <span>{t('ctaPrimary')}</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </a>

              <a
                href="#services"
                className="hero-cta-btn w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm font-semibold text-white bg-[#0A0D10]/90 hover:bg-[#141A20] border border-[#202A30] hover:border-[#00E5F0]/50 transition-all duration-300 backdrop-blur-md cursor-pointer text-center"
              >
                <Building2 className="w-4 h-4 text-[#00E5F0]" />
                <span>{t('ctaSecondary')}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Left unobstructed so the 3D infinity visual is 100% visible */}
          <div className="hidden lg:block lg:col-span-4" />
        </div>
      </div>

      {/* Sleek Horizontal Feature Strip with Vertical Dividers (as requested in reference screenshot) */}
      <div className="hero-feature-strip relative z-10 w-full border-t border-[#202A30]/80 pt-6 mt-12 sm:mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:items-center sm:justify-center lg:justify-between gap-4 sm:gap-x-10 text-white">
            {/* Item 1 */}
            <div className="flex items-center gap-2.5 group">
              <Code2 className="w-4 h-4 text-[#00E5F0] flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium tracking-wide">
                {t('pillProduct')}
              </span>
            </div>

            {/* Vertical Divider */}
            <div className="hidden sm:block h-4 w-[1px] bg-[#202A30]" />

            {/* Item 2 */}
            <div className="flex items-center gap-2.5 group">
              <Layers className="w-4 h-4 text-[#00E5F0] flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium tracking-wide">
                {t('pillSecure')}
              </span>
            </div>

            {/* Vertical Divider */}
            <div className="hidden sm:block h-4 w-[1px] bg-[#202A30]" />

            {/* Item 3 */}
            <div className="flex items-center gap-2.5 group">
              <Zap className="w-4 h-4 text-[#00E5F0] flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium tracking-wide">
                {t('pillAutomation')}
              </span>
            </div>

            {/* Vertical Divider */}
            <div className="hidden sm:block h-4 w-[1px] bg-[#202A30]" />

            {/* Item 4 */}
            <div className="flex items-center gap-2.5 group">
              <ShieldCheck className="w-4 h-4 text-[#00E5F0] flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium tracking-wide">
                {t('pillPartnership')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
