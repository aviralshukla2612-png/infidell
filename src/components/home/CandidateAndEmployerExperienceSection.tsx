'use client';

import React, { useRef } from 'react';
import { useTranslations } from 'next-intl';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { 
  Compass, 
  GraduationCap, 
  BriefcaseBusiness, 
  SlidersHorizontal, 
  Sparkles, 
  CalendarCheck, 
  Handshake, 
  TrendingUp,
  Target, 
  Network, 
  ClipboardCheck, 
  UserRoundSearch, 
  Building2, 
  ArrowRight,
  Users,
  ShieldCheck,
  CheckCircle2,
  Clock
} from 'lucide-react';

export function CandidateAndEmployerExperienceSection() {
  const tCandidate = useTranslations('CandidateExperience');
  const tEmployer = useTranslations('EmployerExperience');
  const sectionRef = useRef<HTMLElement>(null);
  const candidatePanelRef = useRef<HTMLDivElement>(null);
  const employerPanelRef = useRef<HTMLDivElement>(null);

  // 8 Colorful Candidate Steps for the Central Rope Timeline (No redundant tags/numbers)
  const candidateSteps = [
    {
      titleKey: 'step1',
      descKey: 'step1Desc',
      icon: Compass,
      accent: '#00D5DF',
      borderColor: '#00D5DF'
    },
    {
      titleKey: 'step2',
      descKey: 'step2Desc',
      icon: GraduationCap,
      accent: '#A78BFA',
      borderColor: '#8B5CF6'
    },
    {
      titleKey: 'step3',
      descKey: 'step3Desc',
      icon: BriefcaseBusiness,
      accent: '#10B981',
      borderColor: '#10B981'
    },
    {
      titleKey: 'step4',
      descKey: 'step4Desc',
      icon: SlidersHorizontal,
      accent: '#F59E0B',
      borderColor: '#F59E0B'
    },
    {
      titleKey: 'step5',
      descKey: 'step5Desc',
      icon: Sparkles,
      accent: '#F43F5E',
      borderColor: '#F43F5E'
    },
    {
      titleKey: 'step6',
      descKey: 'step6Desc',
      icon: CalendarCheck,
      accent: '#0284C7',
      borderColor: '#0284C7'
    },
    {
      titleKey: 'step7',
      descKey: 'step7Desc',
      icon: Handshake,
      accent: '#D946EF',
      borderColor: '#D946EF'
    },
    {
      titleKey: 'step8',
      descKey: 'step8Desc',
      icon: TrendingUp,
      accent: '#14B8A6',
      borderColor: '#14B8A6'
    }
  ];

  const employerSteps = [
    { 
      num: '01', 
      titleKey: 'step1', 
      descKey: 'step1Desc', 
      icon: Target,
      accent: '#00D5DF',
      tag: 'Requirement Mapping'
    },
    { 
      num: '02', 
      titleKey: 'step2', 
      descKey: 'step2Desc', 
      icon: Users,
      accent: '#38BDF8',
      tag: 'Targeted Discovery'
    },
    { 
      num: '03', 
      titleKey: 'step3', 
      descKey: 'step3Desc', 
      icon: ShieldCheck,
      accent: '#10B981',
      tag: 'Technical Screening'
    },
    { 
      num: '04', 
      titleKey: 'step4', 
      descKey: 'step4Desc', 
      icon: CheckCircle2,
      accent: '#F59E0B',
      tag: 'Curated Delivery'
    },
    { 
      num: '05', 
      titleKey: 'step5', 
      descKey: 'step5Desc', 
      icon: CalendarCheck,
      accent: '#A78BFA',
      tag: 'Interview Facilitation'
    },
    { 
      num: '06', 
      titleKey: 'step6', 
      descKey: 'step6Desc', 
      icon: Handshake,
      accent: '#F43F5E',
      tag: 'Offer & Placement'
    }
  ];

  useGSAP(
    () => {
      if (typeof window === 'undefined') return;
      gsap.registerPlugin(ScrollTrigger);

      // 1. Dynamic precision organic S-curve rope calculation (tilts left and right through knots)
      const updateRope = () => {
        const parentContainer = sectionRef.current?.querySelector<HTMLElement>('.timeline-wrapper');
        if (!parentContainer) return;

        // Desktop S-curve rope path calculation
        const knotsDesktop = parentContainer.querySelectorAll<HTMLElement>('.rope-knot-desktop');
        const desktopSvg = parentContainer.querySelector<SVGElement>('.central-rope-svg-desktop');
        if (knotsDesktop && knotsDesktop.length >= 2 && desktopSvg) {
          const parentRect = parentContainer.getBoundingClientRect();
          const points: { x: number; y: number }[] = [];

          knotsDesktop.forEach((knot) => {
            const r = knot.getBoundingClientRect();
            points.push({
              x: (r.left + r.width / 2) - parentRect.left,
              y: (r.top + r.height / 2) - parentRect.top
            });
          });

          if (points.length >= 2) {
            // Build smooth cubic Bézier S-curve through knots
            const p0 = points[0];
            // Gentle top hanging curl
            let d = `M ${p0.x - 6} ${p0.y - 36} C ${p0.x - 4} ${p0.y - 18}, ${p0.x} ${p0.y - 8}, ${p0.x} ${p0.y}`;

            for (let i = 0; i < points.length - 1; i++) {
              const curr = points[i];
              const next = points[i + 1];
              const dy = next.y - curr.y;
              // S-curve control points creating organic left & right sway
              const cp1x = curr.x;
              const cp1y = curr.y + dy * 0.45;
              const cp2x = next.x;
              const cp2y = next.y - dy * 0.45;
              d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${next.x} ${next.y}`;
            }

            // Gentle bottom curl at final knot
            const pLast = points[points.length - 1];
            d += ` C ${pLast.x} ${pLast.y + 16}, ${pLast.x + 8} ${pLast.y + 28}, ${pLast.x + 12} ${pLast.y + 36}`;

            const paths = desktopSvg.querySelectorAll<SVGPathElement>('.rope-path');
            paths.forEach((p) => p.setAttribute('d', d));
          }
        }

        // Mobile organic rope path calculation
        const knotsMobile = parentContainer.querySelectorAll<HTMLElement>('.rope-knot-mobile');
        const mobileSvg = parentContainer.querySelector<SVGElement>('.central-rope-svg-mobile');
        if (knotsMobile && knotsMobile.length >= 2 && mobileSvg) {
          const parentRect = parentContainer.getBoundingClientRect();
          const points: { x: number; y: number }[] = [];

          knotsMobile.forEach((knot) => {
            const r = knot.getBoundingClientRect();
            points.push({
              x: (r.left + r.width / 2) - parentRect.left,
              y: (r.top + r.height / 2) - parentRect.top
            });
          });

          if (points.length >= 2) {
            const p0 = points[0];
            let d = `M ${p0.x} ${p0.y - 24} L ${p0.x} ${p0.y}`;

            for (let i = 0; i < points.length - 1; i++) {
              const curr = points[i];
              const next = points[i + 1];
              const dy = next.y - curr.y;
              const cp1x = curr.x;
              const cp1y = curr.y + dy * 0.45;
              const cp2x = next.x;
              const cp2y = next.y - dy * 0.45;
              d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${next.x} ${next.y}`;
            }

            const pLast = points[points.length - 1];
            d += ` L ${pLast.x} ${pLast.y + 24}`;

            const paths = mobileSvg.querySelectorAll<SVGPathElement>('.rope-path');
            paths.forEach((p) => p.setAttribute('d', d));
          }
        }
      };

      setTimeout(updateRope, 80);
      window.addEventListener('resize', updateRope);

      // 2. Central Rope Timeline: 8 Isolated Stage Rows with smooth bidirectional scrub
      const rows = sectionRef.current?.querySelectorAll<HTMLElement>('.journey-row');
      if (rows && rows.length > 0) {
        rows.forEach((row) => {
          const card = row.querySelector<HTMLElement>('.journey-card');
          const knots = row.querySelectorAll<HTMLElement>('.rope-knot');
          const isLeft = card?.classList.contains('journey-card-left');
          const isMobile = window.innerWidth < 768;
          const offsetX = isMobile ? 80 : isLeft ? -150 : 150;

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: row,
              start: 'top 78%',
              end: 'bottom 22%',
              scrub: 0.6,
            }
          });

          if (card) {
            // Phase 1: Enter from side and dock onto rope (progress 0 -> 0.25)
            tl.fromTo(
              card,
              {
                x: offsetX,
                opacity: 0,
                scale: 0.88,
              },
              {
                x: 0,
                opacity: 1,
                scale: 1,
                duration: 0.25,
                ease: 'power2.out',
              },
              0
            );

            // Phase 2: Stay firmly docked on the rope in the primary viewing zone (progress 0.25 -> 0.75)
            tl.to(card, { x: 0, opacity: 1, scale: 1, duration: 0.50 }, 0.25);

            // Phase 3: Un-dock from rope and glide away as card exits (progress 0.75 -> 1.0)
            tl.to(
              card,
              {
                x: offsetX,
                opacity: 0,
                scale: 0.88,
                duration: 0.25,
                ease: 'power2.in',
              },
              0.75
            );
          }

          if (knots && knots.length > 0) {
            knots.forEach((knot) => {
              // Knot expands and glows as card docks (progress 0 -> 0.25)
              tl.fromTo(
                knot,
                {
                  scale: 0,
                  opacity: 0,
                },
                {
                  scale: 1,
                  opacity: 1,
                  duration: 0.25,
                  ease: 'back.out(1.7)',
                },
                0
              );

              // Knot holds position while viewing (progress 0.25 -> 0.75)
              tl.to(knot, { scale: 1, opacity: 1, duration: 0.50 }, 0.25);

              // Knot shrinks as card un-docks (progress 0.75 -> 1.0)
              tl.to(
                knot,
                {
                  scale: 0,
                  opacity: 0,
                  duration: 0.25,
                  ease: 'power2.in',
                },
                0.75
              );
            });
          }
        });
      }

      // 3. Employer section entrance
      if (employerPanelRef.current) {
        gsap.fromTo(
          employerPanelRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: employerPanelRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }

      return () => {
        window.removeEventListener('resize', updateRope);
      };
    },
    { scope: sectionRef }
  );

  return (
    <section 
      ref={sectionRef} 
      className="py-24 sm:py-32 bg-[#050708] relative overflow-hidden border-t border-[#203536]/80 select-none"
    >
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#00D5DF]/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#38BDF8]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24 sm:space-y-32">
        
        {/* ========================================================
            PART 1: CANDIDATE EXPERIENCE - 8 CARDS ON CENTRAL ROPE
        ======================================================== */}
        <div id="candidate" ref={candidatePanelRef} className="scroll-mt-28">
          
          {/* Centered Header (No Pill Badge) */}
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight leading-tight mb-4">
              Your Career Deserves More Than{' '}
              <span className="font-medium bg-gradient-to-r from-white via-[#7DD3FC] to-[#38BDF8] bg-clip-text text-transparent">
                Another Application.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal max-w-2xl mx-auto">
              {tCandidate('subtitle')}
            </p>
          </div>

          {/* Central Rope Timeline Container */}
          <div className="timeline-wrapper relative w-full max-w-5xl mx-auto py-2">
            
            {/* The Organic Braided S-Curve Rope (Desktop - tilts left and right organically) */}
            <svg 
              className="central-rope-svg-desktop hidden md:block absolute inset-0 w-full h-full pointer-events-none z-10"
              style={{ overflow: 'visible' }}
            >
              <defs>
                {/* Natural Hemp Rope Body Gradient */}
                <linearGradient id="ropeHempGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#6E411B" />
                  <stop offset="20%" stopColor="#A97339" />
                  <stop offset="45%" stopColor="#DFB074" />
                  <stop offset="55%" stopColor="#F7D397" />
                  <stop offset="80%" stopColor="#A97339" />
                  <stop offset="100%" stopColor="#5A3212" />
                </linearGradient>

                {/* Twisted Strand Shadow Crevices */}
                <linearGradient id="ropeTwistCrevice" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#2A1405" stopOpacity="0.95" />
                  <stop offset="50%" stopColor="#120601" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#2A1405" stopOpacity="0.95" />
                </linearGradient>

                {/* Dynamic Brand Spectrum Glow */}
                <linearGradient id="ropeNeonSpectrum" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#00D5DF" />
                  <stop offset="15%" stopColor="#A78BFA" />
                  <stop offset="30%" stopColor="#10B981" />
                  <stop offset="45%" stopColor="#F59E0B" />
                  <stop offset="60%" stopColor="#F43F5E" />
                  <stop offset="75%" stopColor="#0284C7" />
                  <stop offset="90%" stopColor="#D946EF" />
                  <stop offset="100%" stopColor="#14B8A6" />
                </linearGradient>

                {/* Soft Rope Ambient Filter */}
                <filter id="ropeAura" x="-40%" y="-40%" width="180%" height="180%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* 1. Deep Shadow */}
              <path
                className="rope-path"
                fill="none"
                stroke="#000000"
                strokeWidth="11"
                strokeLinecap="round"
                opacity="0.8"
                filter="url(#ropeAura)"
              />

              {/* 2. Soft Ambient Brand Energy Glow */}
              <path
                className="rope-path"
                fill="none"
                stroke="url(#ropeNeonSpectrum)"
                strokeWidth="8"
                strokeLinecap="round"
                opacity="0.38"
                filter="url(#ropeAura)"
              />

              {/* 3. Textured Hemp Rope Body */}
              <path
                className="rope-path"
                fill="none"
                stroke="url(#ropeHempGrad)"
                strokeWidth="6"
                strokeLinecap="round"
              />

              {/* 4. Helical Braided Twists (creates the realistic rope spiral coils) */}
              <path
                className="rope-path"
                fill="none"
                stroke="url(#ropeTwistCrevice)"
                strokeWidth="6"
                strokeDasharray="7 5"
                strokeLinecap="round"
                opacity="0.9"
              />

              {/* 5. Highlight Fiber Ridges (sunlit coil crests) */}
              <path
                className="rope-path"
                fill="none"
                stroke="#FDE6BE"
                strokeWidth="2.5"
                strokeDasharray="4 8"
                strokeDashoffset="2"
                strokeLinecap="round"
                opacity="0.85"
              />

              {/* 6. Subtle illuminated fiber core */}
              <path
                className="rope-path"
                fill="none"
                stroke="url(#ropeNeonSpectrum)"
                strokeWidth="1.5"
                strokeLinecap="round"
                opacity="0.7"
              />
            </svg>

            {/* The Organic Braided S-Curve Rope (Mobile) */}
            <svg 
              className="central-rope-svg-mobile md:hidden absolute inset-0 w-full h-full pointer-events-none z-10"
              style={{ overflow: 'visible' }}
            >
              <path
                className="rope-path"
                fill="none"
                stroke="#000000"
                strokeWidth="8"
                strokeLinecap="round"
                opacity="0.8"
              />
              <path
                className="rope-path"
                fill="none"
                stroke="url(#ropeNeonSpectrum)"
                strokeWidth="6"
                strokeLinecap="round"
                opacity="0.35"
              />
              <path
                className="rope-path"
                fill="none"
                stroke="url(#ropeHempGrad)"
                strokeWidth="4.5"
                strokeLinecap="round"
              />
              <path
                className="rope-path"
                fill="none"
                stroke="url(#ropeTwistCrevice)"
                strokeWidth="4.5"
                strokeDasharray="5 4"
                strokeLinecap="round"
                opacity="0.9"
              />
              <path
                className="rope-path"
                fill="none"
                stroke="url(#ropeNeonSpectrum)"
                strokeWidth="1.25"
                strokeLinecap="round"
                opacity="0.75"
              />
            </svg>

            {/* 8 Compact Isolated Rows - Tilts Left & Right with comfortable vertical spacing */}
            <div className="journey-rows-container relative">
              {candidateSteps.map((step, idx) => {
                const IconComp = step.icon;
                const isLeft = idx % 2 === 0; // Steps 1, 3, 5, 7 on Left; Steps 2, 4, 6, 8 on Right

                return (
                  <div 
                    key={step.titleKey}
                    className="journey-row relative min-h-[44vh] md:min-h-[50vh] grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-0"
                  >
                    {/* Anchor Knot on the Tilting Rope (Desktop: alternates left/right by 28px) */}
                    <div 
                      className={`hidden md:flex absolute top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 ${
                        isLeft ? 'left-[calc(50%-28px)]' : 'left-[calc(50%+28px)]'
                      }`}
                    >
                      <div 
                        className="rope-knot rope-knot-desktop w-7 h-7 rounded-full bg-[#050708] border-2 flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-125"
                        style={{
                          borderColor: step.accent,
                          boxShadow: `0 0 14px ${step.accent}`
                        }}
                      >
                        <div 
                          className="w-2.5 h-2.5 rounded-full" 
                          style={{ backgroundColor: step.accent }}
                        />
                      </div>
                    </div>

                    {/* Anchor Knot on Mobile Rope (Alternates left-6 and left-8) */}
                    <div 
                      className={`rope-knot rope-knot-mobile md:hidden absolute top-1/2 -translate-y-1/2 z-30 ${
                        isLeft ? 'left-6' : 'left-8'
                      }`}
                    >
                      <div 
                        className="w-5 h-5 rounded-full bg-[#050708] border-2 flex items-center justify-center"
                        style={{
                          borderColor: step.accent,
                          boxShadow: `0 0 10px ${step.accent}`
                        }}
                      >
                        <div 
                          className="w-2 h-2 rounded-full" 
                          style={{ backgroundColor: step.accent }}
                        />
                      </div>
                    </div>

                    {/* LEFT SLOT */}
                    {isLeft ? (
                      <div className="md:pr-8 lg:pr-10 md:flex md:justify-end">
                        <div 
                          className="journey-card journey-card-left relative w-full md:max-w-[430px] p-6 sm:p-7 rounded-3xl border transition-[box-shadow,border-color] duration-300 shadow-2xl hover:-translate-y-1 group overflow-hidden pl-14 md:pl-7"
                          style={{
                            borderColor: `${step.borderColor}60`
                          }}
                        >
                          {/* Horizontal Connector to Left-Tilted Knot */}
                          <div 
                            className="hidden md:block absolute -right-8 lg:-right-10 top-1/2 -translate-y-1/2 w-8 lg:w-10 h-[2px] pointer-events-none"
                            style={{
                              background: `linear-gradient(90deg, ${step.accent}, ${step.accent}80)`
                            }}
                          />

                          {/* Top Accent Gradient Border */}
                          <div 
                            className="absolute top-0 inset-x-0 h-[2px] pointer-events-none"
                            style={{ background: `linear-gradient(90deg, transparent, ${step.accent}, transparent)` }}
                          />

                          {/* Ambient Glow */}
                          <div 
                            className="absolute -top-16 -right-16 w-36 h-36 rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none"
                            style={{ backgroundColor: step.accent }}
                          />

                          {/* High-End Luminescent Icon Anchor */}
                          <div className="mb-4 relative z-10">
                            <div className="relative inline-flex items-center justify-center">
                              {/* Ambient radial glow */}
                              <div 
                                className="absolute inset-0 rounded-2xl blur-lg opacity-40 group-hover:opacity-75 transition-opacity"
                                style={{ backgroundColor: step.accent }}
                              />
                              
                              {/* Glass Icon Badge */}
                              <div 
                                className="relative w-13 h-13 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center border backdrop-blur-md shadow-xl transition-all duration-300 group-hover:scale-110"
                                style={{
                                  backgroundColor: `${step.accent}15`,
                                  borderColor: `${step.borderColor}60`,
                                  boxShadow: `0 0 20px -3px ${step.accent}30`
                                }}
                              >
                                <IconComp 
                                  className="w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-300 group-hover:rotate-6" 
                                  strokeWidth={2}
                                  style={{ 
                                    color: step.accent,
                                    filter: `drop-shadow(0 0 6px ${step.accent}90)`
                                  }} 
                                />
                              </div>
                            </div>
                          </div>

                          {/* Title */}
                          <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug tracking-tight relative z-10">
                            {tCandidate(step.titleKey)}
                          </h3>

                          {/* Description */}
                          <p className="text-xs sm:text-sm text-neutral-300 font-normal leading-relaxed relative z-10">
                            {tCandidate(step.descKey)}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="hidden md:block" />
                    )}

                    {/* RIGHT SLOT */}
                    {!isLeft ? (
                      <div className="md:pl-8 lg:pl-10 md:flex md:justify-start">
                        <div 
                          className="journey-card journey-card-right relative w-full md:max-w-[430px] p-6 sm:p-7 rounded-3xl border transition-[box-shadow,border-color] duration-300 shadow-2xl hover:-translate-y-1 group overflow-hidden pl-14 md:pl-7"
                          style={{
                            borderColor: `${step.borderColor}60`
                          }}
                        >
                          {/* Horizontal Connector to Right-Tilted Knot */}
                          <div 
                            className="hidden md:block absolute -left-8 lg:-left-10 top-1/2 -translate-y-1/2 w-8 lg:w-10 h-[2px] pointer-events-none"
                            style={{
                              background: `linear-gradient(90deg, ${step.accent}80, ${step.accent})`
                            }}
                          />

                          {/* Top Accent Gradient Border */}
                          <div 
                            className="absolute top-0 inset-x-0 h-[2px] pointer-events-none"
                            style={{ background: `linear-gradient(90deg, transparent, ${step.accent}, transparent)` }}
                          />

                          {/* Ambient Glow */}
                          <div 
                            className="absolute -top-16 -right-16 w-36 h-36 rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none"
                            style={{ backgroundColor: step.accent }}
                          />

                          {/* High-End Luminescent Icon Anchor */}
                          <div className="mb-4 relative z-10">
                            <div className="relative inline-flex items-center justify-center">
                              {/* Ambient radial glow */}
                              <div 
                                className="absolute inset-0 rounded-2xl blur-lg opacity-40 group-hover:opacity-75 transition-opacity"
                                style={{ backgroundColor: step.accent }}
                              />
                              
                              {/* Glass Icon Badge */}
                              <div 
                                className="relative w-13 h-13 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center border backdrop-blur-md shadow-xl transition-all duration-300 group-hover:scale-110"
                                style={{
                                  backgroundColor: `${step.accent}15`,
                                  borderColor: `${step.borderColor}60`,
                                  boxShadow: `0 0 20px -3px ${step.accent}30`
                                }}
                              >
                                <IconComp 
                                  className="w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-300 group-hover:rotate-6" 
                                  strokeWidth={2}
                                  style={{ 
                                    color: step.accent,
                                    filter: `drop-shadow(0 0 6px ${step.accent}90)`
                                  }} 
                                />
                              </div>
                            </div>
                          </div>

                          {/* Title */}
                          <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug tracking-tight relative z-10">
                            {tCandidate(step.titleKey)}
                          </h3>

                          {/* Description */}
                          <p className="text-xs sm:text-sm text-neutral-300 font-normal leading-relaxed relative z-10">
                            {tCandidate(step.descKey)}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="hidden md:block" />
                    )}

                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Centered CTA - Completely outside of rope timeline */}
          <div className="text-center pt-10 sm:pt-14 relative z-20">
            <a
              href="#process"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold text-black bg-gradient-to-r from-[#00D5DF] to-[#38BDF8] hover:shadow-[0_0_30px_rgba(0,213,223,0.5)] transition-all hover:scale-105"
            >
              <span>{tCandidate('cta')}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* ========================================================
            PART 2: EMPLOYER EXPERIENCE
        ======================================================== */}
        <div id="employer" ref={employerPanelRef} className="scroll-mt-28">
          {/* Header */}
          <div className="max-w-3xl mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight leading-tight mb-4">
              Build Your Team With the{' '}
              <span className="font-medium bg-gradient-to-r from-white via-[#7DD3FC] via-[#00D5DF] to-[#38BDF8] bg-clip-text text-transparent">
                Right People.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
              {tEmployer('subtitle')}
            </p>
          </div>

          {/* 6-Step Employer Recruitment Delivery Grid - Clean Luxury Bento Architecture */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mb-14">
            {employerSteps.map((step) => {
              const IconComp = step.icon;
              return (
                <div 
                  key={step.titleKey}
                  className="employer-step-card p-7 sm:p-8 rounded-3xl border transition-all duration-300 relative group flex flex-col justify-between overflow-hidden shadow-2xl hover:-translate-y-1.5"
                  style={{
                    borderColor: `${step.accent}35`
                  }}
                >
                  {/* Top Ambient Gradient Border */}
                  <div 
                    className="absolute top-0 inset-x-0 h-[2px] pointer-events-none"
                    style={{ background: `linear-gradient(90deg, transparent, ${step.accent}, transparent)` }}
                  />

                  {/* Corner Accent Glow */}
                  <div 
                    className="absolute -top-14 -right-14 w-32 h-32 rounded-full blur-[50px] opacity-25 group-hover:opacity-55 transition-opacity pointer-events-none"
                    style={{ backgroundColor: step.accent }}
                  />

                  <div className="relative z-10">
                    {/* Header: Glowing Icon Badge */}
                    <div className="mb-6">
                      <div className="relative inline-flex items-center justify-center">
                        <div 
                          className="absolute inset-0 rounded-2xl blur-md opacity-40 group-hover:opacity-75 transition-opacity"
                          style={{ backgroundColor: step.accent }}
                        />
                        <div 
                          className="relative w-12 h-12 sm:w-13 sm:h-13 rounded-2xl flex items-center justify-center border backdrop-blur-md shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                          style={{
                            backgroundColor: `${step.accent}15`,
                            borderColor: `${step.accent}55`
                          }}
                        >
                          <IconComp 
                            className="w-6 h-6 sm:w-7 sm:h-7" 
                            strokeWidth={2}
                            style={{ 
                              color: step.accent,
                              filter: `drop-shadow(0 0 6px ${step.accent}90)`
                            }} 
                          />
                        </div>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-white mb-2.5 tracking-tight group-hover:text-white transition-colors">
                      {tEmployer(step.titleKey)}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-neutral-300 font-normal leading-relaxed">
                      {tEmployer(step.descKey)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Employer Bottom Banner CTA - Visually High-Power Glassmorphic Card */}
          <div 
            className="experience-cta-card p-8 sm:p-12 rounded-3xl border relative overflow-hidden shadow-2xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8"
            style={{
              borderColor: 'rgba(0,213,223,0.35)'
            }}
          >
            {/* Ambient Lighting */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#00D5DF]/15 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#38BDF8]/15 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00D5DF]/15 border border-[#00D5DF]/40 text-xs font-bold text-[#00D5DF] tracking-wide uppercase mb-3 shadow-[0_0_15px_rgba(0,213,223,0.2)]">
                <Clock className="w-3.5 h-3.5 text-[#00D5DF]" />
                <span>Rapid Hiring Guarantee</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 tracking-tight">
                Need Pre-Screened Candidates Within 48 Hours?
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 font-normal leading-relaxed">
                Partner with Infidell to receive verified talent shortlists aligned with your technical requirements, payroll models, and delivery timelines.
              </p>
            </div>

            <div className="relative z-10 flex-shrink-0">
              <a
                href="#footer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-bold text-black bg-gradient-to-r from-[#00D5DF] to-[#38BDF8] hover:shadow-[0_0_35px_rgba(0,213,223,0.6)] hover:scale-105 transition-all"
              >
                <Building2 className="w-4 h-4 text-black" />
                <span>{tEmployer('cta')}</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
