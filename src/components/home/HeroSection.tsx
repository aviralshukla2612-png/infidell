'use client';

import React, { useRef } from 'react';
import { useTranslations } from 'next-intl';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {
  ArrowRight,
  Building2,
  Briefcase,
  BadgeCheck,
  Compass,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { CyanParticleWave } from './hero/CyanParticleWave';
import { IrisApertureLens } from './hero/IrisApertureLens';

export function HeroSection() {
  const t = useTranslations('Hero');

  const containerRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const headlineLine1Ref = useRef<HTMLSpanElement>(null);
  const headlineLine2Ref = useRef<HTMLSpanElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaGroupRef = useRef<HTMLDivElement>(null);
  const irisLensWrapperRef = useRef<HTMLDivElement>(null);
  const featureStripRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (typeof window === 'undefined') return;

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // 1. Eyebrow reveal
      if (eyebrowRef.current) {
        tl.fromTo(
          eyebrowRef.current,
          { opacity: 0, y: -15, filter: 'blur(6px)' },
          { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.7, delay: 0.1 }
        );
      }

      // 2. Headline reveal line-by-line
      if (headlineLine1Ref.current && headlineLine2Ref.current) {
        tl.fromTo(
          headlineLine1Ref.current,
          { opacity: 0, y: 35, skewY: 1.5 },
          { opacity: 1, y: 0, skewY: 0, duration: 0.8 },
          '-=0.4'
        );
        tl.fromTo(
          headlineLine2Ref.current,
          { opacity: 0, y: 40, skewY: 1.5 },
          { opacity: 1, y: 0, skewY: 0, duration: 0.85 },
          '-=0.6'
        );
      }

      // 3. Supporting Description
      if (descRef.current) {
        tl.fromTo(
          descRef.current,
          { opacity: 0, y: 22 },
          { opacity: 1, y: 0, duration: 0.75 },
          '-=0.5'
        );
      }

      // 4. CTAs Staggered Entrance
      if (ctaGroupRef.current) {
        tl.fromTo(
          '.hero-cta-btn',
          { opacity: 0, y: 20, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.14 },
          '-=0.45'
        );
      }

      // 5. Iris Aperture Lens Entrance (Orchestrated counter-zoom reveal)
      if (irisLensWrapperRef.current) {
        tl.fromTo(
          irisLensWrapperRef.current,
          { opacity: 0, scale: 0.86, filter: 'blur(10px)' },
          { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 1.25, ease: 'expo.out' },
          0.3
        );
      }

      // 6. Horizontal Feature Strip Reveal
      if (featureStripRef.current) {
        tl.fromTo(
          featureStripRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
          '-=0.5'
        );
      }
    },
    { scope: containerRef }
  );

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-between bg-[#000000] overflow-hidden pt-24 sm:pt-28 lg:pt-32 pb-8 sm:pb-12 border-b border-[#1D3035]/80 select-none"
    >
      {/* 1. Real-Time Dynamic Cyan Particle Wave Canvas */}
      <CyanParticleWave />

      {/* 2. Cinematic Ambient Lighting Overlays */}
      <div className="absolute top-1/4 right-1/4 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-[#00E5F0]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-[#168CFF]/8 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#000000]/60 via-transparent to-[#000000] pointer-events-none" />

      {/* 3. Main Hero Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto py-6 sm:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column (7 cols): Editorial Master Copy & Conversion CTAs */}
          <div className="lg:col-span-7 xl:col-span-7 space-y-6 sm:space-y-8">

            {/* Eyebrow Badge */}
            <div
              ref={eyebrowRef}
              className="inline-flex items-center gap-2.5 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#0D1519]/90 border border-[#1D3035] text-[11px] sm:text-xs font-mono font-medium tracking-widest text-[#00E5F0] uppercase shadow-[0_0_20px_rgba(0,229,240,0.15)]"
            >
              <span className="w-2 h-2 rounded-full bg-[#00E5F0] animate-pulse" />
              <span>CAREER PLACEMENT &amp; TALENT SOLUTIONS</span>
            </div>

            {/* Main Cinematic Heading: "Find Your Next Opportunity." */}
            <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-[4.5rem] xl:text-[5.1rem] font-extrabold tracking-tight text-white leading-[1.08]">
              <span ref={headlineLine1Ref} className="block text-white">
                Find Your Next
              </span>
              <span
                ref={headlineLine2Ref}
                className="block mt-1 sm:mt-2 bg-gradient-to-r from-[#00E5F0] via-[#00BFD0] to-[#168CFF] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(0,229,240,0.4)]"
              >
                Opportunity.
              </span>
            </h1>

            {/* Supporting Description */}
            <p
              ref={descRef}
              className="text-base sm:text-lg md:text-xl text-[#AAB5BC] max-w-xl leading-relaxed font-normal"
            >
              People-first career placement. Real guidance. Better opportunities. One dedicated placement firm connecting ambitious professionals with verified corporate hiring partners across India.
            </p>

            {/* Conversion CTA Group */}
            <div
              ref={ctaGroupRef}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 pt-2 w-full max-w-md sm:max-w-none"
            >
              <a
                href="#candidate"
                className="hero-cta-btn w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 sm:px-9 py-4 rounded-full text-sm sm:text-base font-bold text-black bg-gradient-to-r from-[#00E5F0] to-[#00BFD0] hover:brightness-110 transition-all duration-300 shadow-[0_0_30px_rgba(0,229,240,0.4)] hover:shadow-[0_0_45px_rgba(0,229,240,0.6)] transform hover:-translate-y-0.5 cursor-pointer text-center"
              >
                <span>Explore Opportunities</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </a>

              <a
                href="#employer"
                className="hero-cta-btn w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 sm:px-9 py-4 rounded-full text-sm sm:text-base font-semibold text-[#FFFFFF] bg-[#090F12]/90 hover:bg-[#0D1519] border border-[#1D3035] hover:border-[#00E5F0]/60 transition-all duration-300 backdrop-blur-md cursor-pointer text-center"
              >
                <Building2 className="w-4 h-4 text-[#00E5F0]" />
                <span>For Employers</span>
              </a>
            </div>

            {/* Subtle live indicator */}
            <div className="pt-2 flex items-center gap-4 text-xs font-mono text-neutral-400">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#00E5F0] animate-ping" />
                <span className="text-[#00E5F0] font-semibold">ZERO CANDIDATE FEES</span>
              </div>
              <span className="text-[#1D3035]">|</span>
              <span>48–72H EMPLOYER SLA</span>
              <span className="hidden sm:inline text-[#1D3035]">|</span>
              <span className="hidden sm:inline">100% STATUTORY COMPLIANT</span>
            </div>

          </div>

          {/* Right Column (5 cols): The Iris Camera Aperture Lens with Metallic Infinity Ribbon */}
          <div
            ref={irisLensWrapperRef}
            className="lg:col-span-5 xl:col-span-5 flex items-center justify-center py-4 lg:py-0"
          >
            <IrisApertureLens />
          </div>

        </div>
      </div>

      {/* 4. Sleek Horizontal Feature Strip with Glowing Icons */}
      <div
        ref={featureStripRef}
        className="relative z-10 w-full border-t border-[#1D3035]/80 pt-6 mt-8 sm:mt-12 bg-gradient-to-t from-[#050809] to-transparent"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:items-center sm:justify-center lg:justify-between gap-4 sm:gap-x-10 text-[#FFFFFF]">

            {/* Item 1: Recruitment & Placement */}
            <div className="flex items-center gap-3 group py-1.5 px-2 rounded-xl transition-all duration-300">
              <div className="w-8 h-8 rounded-lg bg-[#090F12] border border-[#1D3035] flex items-center justify-center text-[#00E5F0] shadow-[0_0_12px_rgba(0,229,240,0.18)] group-hover:border-[#00E5F0] group-hover:shadow-[0_0_20px_rgba(0,229,240,0.4)] group-hover:scale-105 transition-all duration-300 flex-shrink-0">
                <Briefcase className="w-4 h-4 text-[#00E5F0]" strokeWidth={2} />
              </div>
              <span className="text-xs sm:text-sm font-medium tracking-wide text-neutral-200 group-hover:text-white transition-colors">
                {t('pillProduct')}
              </span>
            </div>

            {/* Vertical Divider */}
            <div className="hidden sm:block h-5 w-[1px] bg-[#1D3035]" />

            {/* Item 2: Verified Employers */}
            <div className="flex items-center gap-3 group py-1.5 px-2 rounded-xl transition-all duration-300">
              <div className="w-8 h-8 rounded-lg bg-[#090F12] border border-[#1D3035] flex items-center justify-center text-[#00E5F0] shadow-[0_0_12px_rgba(0,229,240,0.18)] group-hover:border-[#00E5F0] group-hover:shadow-[0_0_20px_rgba(0,229,240,0.4)] group-hover:scale-105 transition-all duration-300 flex-shrink-0">
                <BadgeCheck className="w-4 h-4 text-[#00E5F0]" strokeWidth={2} />
              </div>
              <span className="text-xs sm:text-sm font-medium tracking-wide text-neutral-200 group-hover:text-white transition-colors">
                {t('pillSecure')}
              </span>
            </div>

            {/* Vertical Divider */}
            <div className="hidden sm:block h-5 w-[1px] bg-[#1D3035]" />

            {/* Item 3: Personalized Career Advisory */}
            <div className="flex items-center gap-3 group py-1.5 px-2 rounded-xl transition-all duration-300">
              <div className="w-8 h-8 rounded-lg bg-[#090F12] border border-[#1D3035] flex items-center justify-center text-[#00E5F0] shadow-[0_0_12px_rgba(0,229,240,0.18)] group-hover:border-[#00E5F0] group-hover:shadow-[0_0_20px_rgba(0,229,240,0.4)] group-hover:scale-105 transition-all duration-300 flex-shrink-0">
                <Compass className="w-4 h-4 text-[#00E5F0]" strokeWidth={2} />
              </div>
              <span className="text-xs sm:text-sm font-medium tracking-wide text-neutral-200 group-hover:text-white transition-colors">
                {t('pillAutomation')}
              </span>
            </div>

            {/* Vertical Divider */}
            <div className="hidden sm:block h-5 w-[1px] bg-[#1D3035]" />

            {/* Item 4: End-to-End Support */}
            <div className="flex items-center gap-3 group py-1.5 px-2 rounded-xl transition-all duration-300">
              <div className="w-8 h-8 rounded-lg bg-[#090F12] border border-[#1D3035] flex items-center justify-center text-[#00E5F0] shadow-[0_0_12px_rgba(0,229,240,0.18)] group-hover:border-[#00E5F0] group-hover:shadow-[0_0_20px_rgba(0,229,240,0.4)] group-hover:scale-105 transition-all duration-300 flex-shrink-0">
                <ShieldCheck className="w-4 h-4 text-[#00E5F0]" strokeWidth={2} />
              </div>
              <span className="text-xs sm:text-sm font-medium tracking-wide text-neutral-200 group-hover:text-white transition-colors">
                {t('pillPartnership')}
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
