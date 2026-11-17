'use client';

import React from 'react';
import Image from 'next/image';

const BADGES = [
  {
    id: 'partnerships',
    title: 'Long-term Partnerships',
    position: 'top-[16%] sm:top-[20%] -left-1 sm:-left-8 lg:-left-6',
    icon: (
      <svg width="18" height="18" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  },
  {
    id: 'ethical',
    title: 'Ethical & Compliant Hiring',
    position: 'top-[44%] sm:top-[46%] -right-1 sm:-right-8 lg:-right-6',
    icon: (
      <svg width="18" height="18" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    )
  },
  {
    id: 'integrity',
    title: 'Integrity & Transparency',
    position: 'bottom-[20%] sm:bottom-[22%] -left-1 sm:-left-6 lg:-left-4',
    icon: (
      <svg width="18" height="18" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="2" x2="12" y2="22" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    )
  },
  {
    id: 'candidate',
    title: 'Candidate-first Approach',
    position: 'bottom-[6%] sm:bottom-[8%] right-0 sm:right-2 lg:right-4',
    icon: (
      <svg width="18" height="18" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    )
  }
];

export function OurMissionValuesSection() {
  return (
    <section id="mission" className="relative w-full bg-[#000000] text-white py-20 sm:py-28 lg:py-32 overflow-hidden select-none border-t border-white/[0.06]">
      {/* Subtle Decorative Hanging Strings */}
      <div className="absolute top-0 left-8 sm:left-16 lg:left-24 pointer-events-none flex gap-6 sm:gap-10 opacity-70">
        <div className="flex flex-col items-center">
          <div className="w-[1.5px] h-12 sm:h-16 bg-white/20" />
          <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#E5B558] shadow-sm -mt-0.5" />
        </div>
        <div className="flex flex-col items-center">
          <div className="w-[1.5px] h-20 sm:h-28 bg-white/20" />
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#2C5B42] shadow-sm -mt-0.5" />
        </div>
        <div className="flex flex-col items-center">
          <div className="w-[1.5px] h-32 sm:h-40 bg-white/20" />
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#A32328] shadow-sm -mt-0.5" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading & Mission Text */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Mission & Values Heading */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-black text-white tracking-tight leading-[1.08] mb-6 sm:mb-8">
              Our Mission &amp; <br />
              Values
            </h2>

            {/* Description matching exact Netbounce content */}
            <p className="text-base sm:text-lg lg:text-[1.125rem] text-neutral-400 leading-relaxed max-w-xl font-normal">
              Our mission is to create meaningful employment while helping job seekers &amp;
              businesses grow with the right talent and opportunities. We believe in building lasting
              relationships through trust, transparency, and exceptional service.
            </p>
          </div>

          {/* Right Column: Sleek Black/Dark Circle Container with Character Inside + Frosted White Glass Badges */}
          <div className="lg:col-span-6 flex items-center justify-center relative">
            <div className="relative w-[280px] h-[280px] xs:w-[320px] xs:h-[320px] sm:w-[400px] sm:h-[400px] md:w-[460px] md:h-[460px] lg:w-[480px] lg:h-[480px] flex items-center justify-center">
              
              {/* The Circle Container (100% contained, overflow: hidden so NOTHING comes outside the circle) */}
              <div className="relative w-full h-full rounded-full bg-gradient-to-b from-[#131B2A] to-[#080C14] shadow-[0_0_60px_rgba(0,229,240,0.15)] border border-white/20 overflow-hidden flex items-end justify-center">
                {/* Subtle Radial Sheen */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/[0.08] to-transparent pointer-events-none z-10" />
                
                {/* Subtle Snowflakes / Sparkles inside the Circle */}
                <div className="absolute top-8 sm:top-10 left-8 sm:left-12 text-white/40 text-[10px] sm:text-xs select-none z-10">❄</div>
                <div className="absolute top-20 sm:top-24 right-10 sm:right-14 text-white/30 text-[9px] sm:text-[10px] select-none z-10">•</div>
                <div className="absolute bottom-12 sm:bottom-16 left-10 sm:left-14 text-white/40 text-xs sm:text-sm select-none z-10">❄</div>
                <div className="absolute bottom-20 sm:bottom-24 right-12 sm:right-16 text-white/30 text-[10px] sm:text-[11px] select-none z-10">❄</div>
                <div className="absolute top-1/2 right-6 sm:right-8 text-white/35 text-[8px] sm:text-[9px] select-none z-10">•</div>

                {/* Professional Executive 3D Character (Contained 100% inside the circle with headroom & padding) */}
                <div className="relative w-[86%] h-[86%] translate-y-2 z-0">
                  <Image
                    src="/images/mission-values-character-transparent.png"
                    alt="Infidell Professional Talent Specialist"
                    fill
                    className="object-contain drop-shadow-[0_15px_35px_rgba(0,0,0,0.6)]"
                    priority
                  />
                </div>

                {/* Soft bottom inner fade to ensure the bottom cut of the torso smoothly blends into the circle */}
                <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#080C14] via-[#080C14]/60 to-transparent pointer-events-none z-10" />
              </div>

              {/* 4 Frosted Glass Badges (Floating on top around the circle) */}
              {BADGES.map((badge) => (
                <div
                  key={badge.id}
                  className={`absolute ${badge.position} z-20 inline-flex items-center gap-1.5 xs:gap-2 sm:gap-2.5 px-2.5 xs:px-3 sm:px-5 py-1.5 xs:py-2 sm:py-3 rounded-full border border-white/30 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] text-[10px] xs:text-xs sm:text-sm font-semibold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)] transition-all duration-300 hover:scale-105 hover:bg-white/20 cursor-default select-none`}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.12)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)'
                  }}
                >
                  <span className="flex items-center justify-center text-white">
                    {badge.icon}
                  </span>
                  <span className="whitespace-nowrap">{badge.title}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
