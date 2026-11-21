'use client';

import React from 'react';
import Image from 'next/image';
import { ShieldCheck, Eye, TrendingUp, Handshake } from 'lucide-react';

const VALUES_BADGES = [
  {
    id: 'partnerships',
    title: 'Meaningful Partnerships',
    position: 'top-[16%] left-[4%] sm:left-[6%]',
    icon: <Handshake className="w-4 h-4 text-[#17BEBB]" strokeWidth={1.75} />
  },
  {
    id: 'ethical',
    title: 'Responsible Recruitment',
    position: 'top-[36%] right-[4%] sm:right-[6%]',
    icon: <ShieldCheck className="w-4 h-4 text-[#00D5DF]" strokeWidth={1.75} />
  },
  {
    id: 'transparency',
    title: 'Trust & Transparency',
    position: 'bottom-[34%] left-[6%] sm:left-[8%]',
    icon: <Eye className="w-4 h-4 text-[#A6E7DF]" strokeWidth={1.75} />
  },
  {
    id: 'growth',
    title: 'Individual Growth',
    position: 'bottom-[12%] right-[8%] sm:right-[12%]',
    icon: <TrendingUp className="w-4 h-4 text-[#17BEBB]" strokeWidth={1.75} />
  }
];

export function OurMissionValuesSection() {
  return (
    <section id="mission" className="relative w-full bg-[#050708] text-white py-24 sm:py-32 overflow-hidden select-none border-t border-[#203536]/80">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#102426]/25 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Typography-Driven Mission & Values */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#F5F8F8] tracking-tight leading-[1.08] mb-6 sm:mb-8">
              Trust. Transparency. <br />
              <span className="cyan-text-gradient">Meaningful Impact.</span>
            </h2>

            {/* Original INFIDELL Recruitment Narrative */}
            <p className="text-base sm:text-lg text-[#A5B2B3] leading-relaxed max-w-xl font-normal mb-8">
              At Infidell, we believe responsible recruitment is founded on mutual trust and transparent expectations. We empower job seekers with honest guidance and verified opportunities, while enabling client organizations to build resilient teams through ethical placement.
            </p>

            {/* Core Values Key Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg">
              <div className="p-4 rounded-xl bg-[#0C1517] border border-[#203536]">
                <h3 className="text-sm font-bold text-[#F5F8F8] mb-1">Quality & Integrity</h3>
                <p className="text-xs text-[#A5B2B3] leading-relaxed">
                  We partner exclusively with verified employers and deliver genuine career advancement opportunities.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[#0C1517] border border-[#203536]">
                <h3 className="text-sm font-bold text-[#F5F8F8] mb-1">Enduring Trust</h3>
                <p className="text-xs text-[#A5B2B3] leading-relaxed">
                  Long-term career alignment prioritizing candidate welfare and employer stability.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Refined Dark Circle with Character Inside & Snugly Contained Badges */}
          <div className="lg:col-span-6 flex items-center justify-center relative">
            <div className="relative w-[300px] h-[300px] xs:w-[340px] xs:h-[340px] sm:w-[420px] sm:h-[420px] md:w-[460px] md:h-[460px] lg:w-[480px] lg:h-[480px] flex items-center justify-center">

              {/* The Circle Container (100% contained, overflow: hidden so character does not bleed outside) */}
              <div className="mission-circle-container relative w-full h-full rounded-full bg-gradient-to-b from-[#102426] via-[#0C1517] to-[#050708] shadow-[0_0_60px_rgba(23,190,187,0.18)] border border-[#203536] overflow-hidden flex items-end justify-center">
                {/* Subtle Radial Sheen */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none z-10" />

                {/* Professional Executive 3D Character (Contained inside the circle with headroom & padding) */}
                <div className="relative w-[84%] h-[84%] translate-y-2 z-0">
                  <Image
                    src="/images/mission-values-character-transparent.png"
                    alt="Infidell Talent Advisory Specialist"
                    fill
                    className="object-contain drop-shadow-[0_15px_35px_rgba(0,0,0,0.6)]"
                  />
                </div>

                {/* Soft bottom inner fade */}
                <div className="mission-circle-fade absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#050708] via-[#050708]/80 to-transparent pointer-events-none z-10" />
              </div>

              {/* 4 Frosted Glass Badges (Floating snugly within circle footprint) */}
              {VALUES_BADGES.map((badge) => (
                <div
                  key={badge.id}
                  className={`mission-badge absolute ${badge.position} z-20 inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2.5 rounded-full border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.6)] text-[10px] xs:text-xs sm:text-sm font-semibold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)] transition-all duration-300 hover:scale-105 hover:bg-white/20 cursor-default select-none`}
                  style={{
                    backgroundColor: 'rgba(12, 21, 23, 0.75)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)'
                  }}
                >
                  <span className="flex items-center justify-center">
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
