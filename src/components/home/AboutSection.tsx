'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

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
      {/* Subtle Starry Night Background Texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `
            radial-gradient(1px 1px at 20px 30px, #ffffff 100%, transparent),
            radial-gradient(1.5px 1.5px at 150px 80px, rgba(0, 213, 223, 0.8) 100%, transparent),
            radial-gradient(1px 1px at 280px 140px, #ffffff 100%, transparent),
            radial-gradient(1px 1px at 420px 60px, rgba(23, 190, 187, 0.8) 100%, transparent),
            radial-gradient(1.5px 1.5px at 600px 180px, #ffffff 100%, transparent),
            radial-gradient(1px 1px at 750px 90px, rgba(0, 213, 223, 0.7) 100%, transparent),
            radial-gradient(1.5px 1.5px at 920px 130px, #ffffff 100%, transparent),
            radial-gradient(1px 1px at 1080px 50px, #ffffff 100%, transparent),
            radial-gradient(1px 1px at 1200px 210px, rgba(0, 213, 223, 0.6) 100%, transparent)
          `,
          backgroundSize: '1300px 300px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ========================================================
            SCREENSHOT 1: GIANT "About" TITLE & ASYMMETRIC 3-PART HEADER
        ======================================================== */}
        <div className="mb-16 sm:mb-24">
          {/* Giant Clean Title matching Luna UI */}
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
            SCREENSHOT 2: 4 TALL VERTICAL CARDS (Luna UI Signature Grid)
        ======================================================== */}
        <div className="luna-cards-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 mb-24 sm:mb-36 relative">
          
          {/* Subtle Comet Swoosh Passing Across Top of Cards */}
          <div className="hidden lg:block absolute -top-10 left-1/3 w-64 h-24 pointer-events-none opacity-50 z-20">
            <svg viewBox="0 0 240 80" fill="none" className="w-full h-full">
              <path d="M 0 70 Q 120 10 230 30" stroke="url(#cardCometGlow)" strokeWidth="1.8" strokeDasharray="3 6" />
              <circle cx="230" cy="30" r="2.5" fill="#FFFFFF" />
              <defs>
                <linearGradient id="cardCometGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="transparent" />
                  <stop offset="60%" stopColor="#00D5DF" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#FFFFFF" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Card 1: Work with the Firm */}
          <a
            href="#candidate"
            className="luna-tall-card group relative h-[440px] sm:h-[480px] lg:h-[520px] rounded-2xl lg:rounded-3xl overflow-hidden bg-[#090E12] border border-white/10 hover:border-white/30 transition-all duration-500 flex flex-col justify-between p-6 sm:p-7"
          >
            {/* Background Photographic Image with Dark Dramatic Gradient */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/solutions/job-placement.avif"
                alt="Infidell Career Advisory Specialist"
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050708] via-[#050708]/50 to-black/30 pointer-events-none" />
            </div>

            {/* Top Right Circular Arrow Action */}
            <div className="relative z-10 self-end">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/60 border border-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300 shadow-sm">
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>

            {/* Bottom Content */}
            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5 leading-snug">
                Work with the firm
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 font-normal leading-relaxed">
                A career path, built with us from first call to final placement
              </p>
            </div>
          </a>

          {/* Card 2: Candidate Career Path (Sensoria / Tech Style Card) */}
          <a
            href="#approach"
            className="luna-tall-card group relative h-[440px] sm:h-[480px] lg:h-[520px] rounded-2xl lg:rounded-3xl overflow-hidden bg-[#090E12] border border-white/10 hover:border-white/30 transition-all duration-500 flex flex-col justify-between p-6 sm:p-7"
          >
            {/* Background Image: Tech Solutions & Analytics */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/solutions/talent-acquisition.avif"
                alt="Intelligent Career Analysis"
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105 opacity-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050708] via-[#050708]/60 to-black/30 pointer-events-none" />
            </div>

            {/* Top Right Circular Arrow Action */}
            <div className="relative z-10 self-end">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/60 border border-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300 shadow-sm">
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>

            {/* Bottom Content */}
            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5 leading-snug">
                Candidate career path
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 font-normal leading-relaxed">
                ATS optimization, interview prep &amp; direct employer access
              </p>
            </div>
          </a>

          {/* Card 3: Collaborate (Dark Minimalist Space with Glowing Star in Center) */}
          <a
            href="#employer"
            className="luna-tall-card group relative h-[440px] sm:h-[480px] lg:h-[520px] rounded-2xl lg:rounded-3xl overflow-hidden bg-[#070B0E] border border-white/10 hover:border-white/30 transition-all duration-500 flex flex-col justify-between p-6 sm:p-7"
          >
            {/* Starry Dust in Card Background */}
            <div 
              className="absolute inset-0 opacity-40 pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(1px 1px at 30px 40px, #ffffff, transparent), radial-gradient(1.5px 1.5px at 120px 200px, rgba(0,213,223,0.8), transparent), radial-gradient(1px 1px at 180px 120px, #ffffff, transparent)',
                backgroundSize: '200px 250px'
              }}
            />

            {/* Glowing 4-Point Star in Exact Center matching Luna UI Screenshot */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
              <div className="relative flex items-center justify-center">
                <div className="w-16 h-16 bg-[#00D5DF]/15 rounded-full blur-xl group-hover:scale-125 transition-transform duration-500" />
                <svg 
                  className="w-7 h-7 text-white/80 group-hover:text-white group-hover:scale-110 transition-all duration-500 drop-shadow-[0_0_12px_rgba(255,255,255,0.7)]" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M12 0L14.4 9.6L24 12L14.4 14.4L12 24L9.6 14.4L0 12L9.6 9.6L12 0Z" />
                </svg>
              </div>
            </div>

            {/* Top Right Circular Arrow Action */}
            <div className="relative z-10 self-end">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/60 border border-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300 shadow-sm">
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>

            {/* Bottom Content */}
            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5 leading-snug">
                Collaborate
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 font-normal leading-relaxed">
                Enterprise partnerships, client mandates, dedicated sourcing
              </p>
            </div>
          </a>

          {/* Card 4: Read the Journal (Deep Blue Glowing Planetary Sphere Curve) */}
          <a
            href="#insights"
            className="luna-tall-card group relative h-[440px] sm:h-[480px] lg:h-[520px] rounded-2xl lg:rounded-3xl overflow-hidden bg-[#05090C] border border-white/10 hover:border-white/30 transition-all duration-500 flex flex-col justify-between p-6 sm:p-7"
          >
            {/* Luna UI Blue Glowing Planet Horizon Dome */}
            <div className="absolute inset-x-[-35%] bottom-[-55%] h-[340px] sm:h-[370px] rounded-[100%] bg-gradient-to-t from-[#003852] via-[#007099] to-[#00D5DF] blur-[1px] opacity-75 shadow-[0_-20px_70px_rgba(0,213,223,0.35)] pointer-events-none group-hover:opacity-90 group-hover:scale-105 transition-all duration-700" />
            <div className="absolute inset-x-[-25%] bottom-[-58%] h-[320px] rounded-[100%] bg-[#061118] pointer-events-none" />

            {/* Top Right Circular Arrow Action */}
            <div className="relative z-10 self-end">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/60 border border-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300 shadow-sm">
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>

            {/* Bottom Content */}
            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5 leading-snug">
                Read the Journal
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 font-normal leading-relaxed">
                How the firm thinks about talent
              </p>
            </div>
          </a>

        </div>

        {/* ========================================================
            SCREENSHOT 3: FOUNDER'S NOTE & MINIMALIST STAT COUNTERS
        ======================================================== */}
        <div className="luna-founder-section relative pt-12 sm:pt-16 pb-6">
          
          {/* Subtle Comet Dust Swoosh from Left towards Founder's text */}
          <div className="hidden md:block absolute top-6 left-1/4 w-80 h-28 pointer-events-none opacity-45">
            <svg viewBox="0 0 320 100" fill="none" className="w-full h-full">
              <path d="M 0 90 Q 160 20 300 45" stroke="url(#founderComet)" strokeWidth="1.8" strokeDasharray="3 7" />
              <circle cx="300" cy="45" r="3" fill="#FFFFFF" />
              <defs>
                <linearGradient id="founderComet" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="transparent" />
                  <stop offset="65%" stopColor="#00D5DF" stopOpacity="0.75" />
                  <stop offset="100%" stopColor="#FFFFFF" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start mb-20 sm:mb-24">
            {/* Left Column: "+ Founder's note" */}
            <div className="md:col-span-3">
              <span className="luna-founder-content inline-flex items-center gap-1.5 text-xs sm:text-sm font-normal text-neutral-400 tracking-wide">
                <span>+</span>
                <span>Founder&apos;s note</span>
              </span>
            </div>

            {/* Right Column: High-Impact Editorial Statement matching Luna UI */}
            <div className="md:col-span-9 space-y-6 max-w-3xl">
              <p className="luna-founder-content text-xl sm:text-2xl lg:text-[2.1rem] font-normal text-neutral-300 leading-snug tracking-tight">
                The hardest part of this work isn&apos;t collecting resumes or running automated keywords. Job portals are cheap now, AI can spam them.{' '}
                <strong className="font-bold text-white">
                  The hard part is the thinking behind it: what to build, why and how it all connects.
                </strong>
              </p>
              
              <p className="luna-founder-content text-sm sm:text-base text-neutral-400 font-normal leading-relaxed pt-2">
                A career that burns as bright as a star in a sky full of identical stars. That&apos;s why I started Infidell.
              </p>
            </div>
          </div>

          {/* Spaced Horizontal Four-Point Stars (✦ ✦ ✦) matching Screenshot 3 */}
          <div className="flex items-center justify-around py-8 sm:py-12 text-white/20 select-none">
            <svg className="w-5 h-5 text-white/20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0L14.4 9.6L24 12L14.4 14.4L12 24L9.6 14.4L0 12L9.6 9.6L12 0Z" />
            </svg>
            <svg className="w-5 h-5 text-white/20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0L14.4 9.6L24 12L14.4 14.4L12 24L9.6 14.4L0 12L9.6 9.6L12 0Z" />
            </svg>
            <svg className="w-5 h-5 text-white/20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0L14.4 9.6L24 12L14.4 14.4L12 24L9.6 14.4L0 12L9.6 9.6L12 0Z" />
            </svg>
          </div>

          {/* Minimalist Big Numbers (matching Screenshot 3: 58 / 12 / 17 style) */}
          <div className="luna-stats-row grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 pt-4">
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
