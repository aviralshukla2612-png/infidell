'use client';

import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface PillarCard {
  id: string;
  title: string;
  description: string;
  keyBenefit: string;
  accentColor: string;
  glowColor: string;
  cardBg: string;
  borderColor: string;
  badgeBg: string;
  curtainBg: string;
  curtainBorder: string;
  hemColor: string;
  icon: React.ReactNode;
}

export function WhatIsInfidellSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const pillars: PillarCard[] = [
    {
      id: 'pillar-1',
      title: 'Careers, Not Just Jobs',
      description: "We don't just place candidates anywhere, we help them land roles that actually build long-term careers with verified growth potential.",
      keyBenefit: 'Career Longevity & High Retention',
      accentColor: '#00E5F0',
      glowColor: 'rgba(0, 229, 240, 0.35)',
      cardBg: 'bg-gradient-to-b from-[#00E5F0]/15 via-[#0A161E] to-[#04090D]',
      borderColor: 'border-[#00E5F0]/30 hover:border-[#00E5F0]',
      badgeBg: 'bg-[#00E5F0]/20 border-[#00E5F0]/50 text-[#00E5F0]',
      curtainBg: 'bg-gradient-to-b from-[#04252E] via-[#061B22] to-[#020D12]',
      curtainBorder: 'border-[#00E5F0]/40',
      hemColor: 'via-[#00E5F0]',
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="m22 2-7.5 7.5" />
          <path d="M14 2h8v8" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
      )
    },
    {
      id: 'pillar-2',
      title: 'Deadlines Means Deadlines',
      description: 'When we commit to a timeline, we mean it. Opportunities and hiring move forward exactly when we say they will without costly delays.',
      keyBenefit: '100% On-Schedule Coordination',
      accentColor: '#818CF8',
      glowColor: 'rgba(129, 140, 248, 0.35)',
      cardBg: 'bg-gradient-to-b from-[#818CF8]/15 via-[#131128] to-[#080614]',
      borderColor: 'border-[#818CF8]/30 hover:border-[#818CF8]',
      badgeBg: 'bg-[#818CF8]/20 border-[#818CF8]/50 text-[#818CF8]',
      curtainBg: 'bg-gradient-to-b from-[#1C1642] via-[#120E2C] to-[#0A071C]',
      curtainBorder: 'border-[#818CF8]/40',
      hemColor: 'via-[#818CF8]',
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="5" r="2.5" />
          <path d="M8 11c0-2 1.8-3.5 4-3.5s4 1.5 4 3.5" />
          <circle cx="6" cy="15" r="2.5" />
          <path d="M2 21c0-2 1.8-3.5 4-3.5s4 1.5 4 3.5" />
          <circle cx="18" cy="15" r="2.5" />
          <path d="M14 21c0-2 1.8-3.5 4-3.5s4 1.5 4 3.5" />
        </svg>
      )
    },
    {
      id: 'pillar-3',
      title: 'Partnership Driven',
      description: "We don't work for one project and disappear infact we build long-term partnerships that grow alongside candidates and client organizations.",
      keyBenefit: 'Dedicated Talent Relationship Support',
      accentColor: '#00C7B1',
      glowColor: 'rgba(0, 199, 177, 0.35)',
      cardBg: 'bg-gradient-to-b from-[#00C7B1]/15 via-[#0A1C18] to-[#040E0C]',
      borderColor: 'border-[#00C7B1]/30 hover:border-[#00C7B1]',
      badgeBg: 'bg-[#00C7B1]/20 border-[#00C7B1]/50 text-[#00C7B1]',
      curtainBg: 'bg-gradient-to-b from-[#042823] via-[#041D1A] to-[#020F0D]',
      curtainBorder: 'border-[#00C7B1]/40',
      hemColor: 'via-[#00C7B1]',
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <circle cx="12" cy="12" r="2.8" />
          <path d="M12 2v4" />
          <path d="M12 18v4" />
          <path d="M2 12h4" />
          <path d="M18 12h4" />
          <path d="m4.93 4.93 2.83 2.83" />
          <path d="m16.24 16.24 2.83 2.83" />
          <path d="m4.93 19.07 2.83-2.83" />
          <path d="m16.24 7.76 2.83-2.83" />
        </svg>
      )
    },
    {
      id: 'pillar-4',
      title: 'Continuous Innovation',
      description: 'The hiring world changes fast, and so do we by constantly evolving our process and screening standards to deliver smarter results.',
      keyBenefit: 'Modern AI & Skill Assessment Systems',
      accentColor: '#38BDF8',
      glowColor: 'rgba(56, 189, 248, 0.35)',
      cardBg: 'bg-gradient-to-b from-[#38BDF8]/15 via-[#0A1828] to-[#040C16]',
      borderColor: 'border-[#38BDF8]/30 hover:border-[#38BDF8]',
      badgeBg: 'bg-[#38BDF8]/20 border-[#38BDF8]/50 text-[#38BDF8]',
      curtainBg: 'bg-gradient-to-b from-[#052640] via-[#061C2E] to-[#020F1A]',
      curtainBorder: 'border-[#38BDF8]/40',
      hemColor: 'via-[#38BDF8]',
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
          <circle cx="12" cy="10" r="2.2" />
          <path d="M8.5 15.5c0-1.8 1.6-2.8 3.5-2.8s3.5 1 3.5 2.8" />
        </svg>
      )
    }
  ];

  useGSAP(
    () => {
      if (typeof window === 'undefined') return;
      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(
        '.whatis-reveal',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
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
      id="what-is-infidell"
      className="py-20 lg:py-28 bg-[#000000] relative overflow-hidden border-b border-[#202A30]"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[350px] bg-[#00E5F0]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Header: Massive bold headline & narrative paragraph */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16">
          <div className="lg:col-span-5">
            <h2 className="whatis-reveal text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.05]">
              So, What Is <br />
              <span className="text-[#00E5F0]">
                Infidell?
              </span>
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-4 pt-2">
            <p className="whatis-reveal text-base sm:text-lg text-[#AEB8C2] leading-relaxed font-normal">
              <strong className="text-white font-semibold">Infidell Technology</strong> is a talent solutions company USA and international job seekers and employers trust, built on a simple idea: talented people shouldn’t struggle to find the right opportunities, and companies shouldn’t struggle to find the right talent.
            </p>
            <p className="whatis-reveal text-sm sm:text-base text-[#AEB8C2]/90 leading-relaxed font-normal">
              Somewhere between endless job applications and overwhelming stacks of resumes, hiring gets messy and that’s exactly where we step in. We work closely with professionals to understand their skills, ambitions, and career goals, while helping businesses hire smarter, faster, and more reliably. From job placement, recruitment and staffing to talent acquisition and workforce solutions, our mission is simple: <span className="text-white font-medium">connect the right people with the right opportunities without the usual hiring chaos.</span>
            </p>
          </div>
        </div>

        {/* 4 Cards Grid: ULTRA CLEAN RESTING CARD, INFORMATION REVEALED ON CURTAIN HOVER */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const isCardActive = activeCard === idx;

            return (
              <div
                key={pillar.id}
                onClick={() => setActiveCard(isCardActive ? null : idx)}
                className={`whatis-reveal group relative h-[360px] rounded-3xl ${pillar.cardBg} border-2 ${pillar.borderColor} transition-all duration-500 overflow-hidden cursor-pointer select-none shadow-lg`}
                style={{
                  boxShadow: `0 10px 30px -10px ${pillar.glowColor}`
                }}
              >
                {/* Ambient glow behind card */}
                <div
                  className="absolute inset-0 opacity-20 pointer-events-none transition-opacity duration-500 group-hover:opacity-40"
                  style={{
                    background: `radial-gradient(circle at 50% 20%, ${pillar.glowColor}, transparent 70%)`
                  }}
                />

                {/* ============================================================ */}
                {/* RESTING (BASE) CARD: ULTRA-CLEAN ICON & TITLE (NO NUMBERS, NO HOVER TEXT) */}
                {/* ============================================================ */}
                <div className="relative h-full p-8 flex flex-col justify-between z-10">
                  {/* Top: Vibrant Squircle Icon */}
                  <div>
                    <div
                      className={`w-16 h-16 rounded-2xl ${pillar.badgeBg} border flex items-center justify-center transition-all duration-500 group-hover:scale-110 shadow-lg`}
                      style={{
                        boxShadow: `0 0 25px ${pillar.glowColor}`
                      }}
                    >
                      {pillar.icon}
                    </div>
                  </div>

                  {/* Bottom: Big Bold Prominent Title */}
                  <div className="mt-auto">
                    <h3
                      className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug group-hover:text-white transition-colors duration-300"
                    >
                      {pillar.title}
                    </h3>
                  </div>
                </div>

                {/* ============================================================ */}
                {/* CURTAIN REVEAL LAYER: SLIDES DOWN BRINGING ALL INFORMATION   */}
                {/* ============================================================ */}
                <div
                  className={`absolute inset-0 z-20 ${pillar.curtainBg} border-b-2 ${pillar.curtainBorder} p-8 flex flex-col justify-between transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-2xl ${isCardActive
                      ? 'translate-y-0 opacity-100 pointer-events-auto'
                      : '-translate-y-[105%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto'
                    }`}
                  style={{
                    boxShadow: `0 20px 40px rgba(0,0,0,0.9), 0 0 30px ${pillar.glowColor}`
                  }}
                >
                  {/* Glowing Neon Hem Edge at the bottom of the curtain */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent ${pillar.hemColor} to-transparent`}
                    style={{
                      boxShadow: `0 0 16px ${pillar.accentColor}`
                    }}
                  />

                  {/* Top of Curtain: Icon */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div
                      className={`w-14 h-14 rounded-2xl ${pillar.badgeBg} border flex items-center justify-center`}
                      style={{
                        boxShadow: `0 0 15px ${pillar.glowColor}`
                      }}
                    >
                      {pillar.icon}
                    </div>
                  </div>

                  {/* Middle of Curtain: Information Text Revealed */}
                  <div className="relative z-10 space-y-3 my-auto">
                    <h4 className="text-xl font-bold text-white tracking-tight leading-tight">
                      {pillar.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#AEB8C2] leading-relaxed font-normal">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Bottom of Curtain: Verified Feature Check & Action Link */}
                  <div className="relative z-10 pt-3 border-t border-white/10 space-y-2">
                    <div
                      className="flex items-center gap-2 text-xs font-semibold"
                      style={{ color: pillar.accentColor }}
                    >
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                      <span className="truncate">{pillar.keyBenefit}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-[#AEB8C2]/80 pt-0.5">
                      <span>Dedicated placement advisory</span>
                      <span
                        className="inline-flex items-center gap-1 font-bold group-hover:translate-x-0.5 transition-transform"
                        style={{ color: pillar.accentColor }}
                      >
                        Explore <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}