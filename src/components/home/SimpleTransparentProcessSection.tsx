'use client';

import React, { useState, useRef, useEffect, useMemo } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface StepCard {
  step: string;
  title: string;
  description: string;
  bg: string;
  textColor: string;
  descColor: string;
  icon: React.ReactNode;
  showSnowflakes?: boolean;
}

// 5 Steps for Job Seekers (Authentic Colors from User's Reference Screenshot)
const JOB_SEEKER_STEPS: StepCard[] = [
  {
    step: 'Step 1',
    title: 'Free Consultation',
    description:
      'A quick consultation to understand your background, skills, career goals, and visa status so we can design the right job search strategy for you.',
    bg: '#FFFFFF',
    textColor: '#111827',
    descColor: '#374151',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    )
  },
  {
    step: 'Step 2',
    title: 'Profile Enhancement',
    description:
      'We build your ATS-optimized resume, LinkedIn profile, and project portfolio to match industry expectations and increase recruiter visibility.',
    bg: '#F9F871',
    textColor: '#111827',
    descColor: '#2d3748',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    )
  },
  {
    step: 'Step 3',
    title: 'Interview Process',
    description:
      'Mock interviews, communication coaching, and technical guidance to help you perform confidently in technical, behavioral, and HR interviews.',
    bg: '#E8A86C',
    textColor: '#111827',
    descColor: '#2d3748',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <circle cx="9" cy="10" r="1" fill="currentColor" />
        <circle cx="15" cy="10" r="1" fill="currentColor" />
        <path d="M9.5 13a3.5 3.5 0 0 0 5 0" />
      </svg>
    )
  },
  {
    step: 'Step 4',
    title: 'Job Matching & Applications',
    description:
      'Our recruiters submit targeted applications daily, focusing on roles that match your skills, experience, and career direction.',
    bg: '#D8C7F8',
    textColor: '#111827',
    descColor: '#2d3748',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="16 12 12 8 8 12" />
        <line x1="12" y1="16" x2="12" y2="8" />
      </svg>
    )
  },
  {
    step: 'Step 5',
    title: 'Successful Placement',
    description:
      'From interview follow-ups to offer negotiation and onboarding guidance, we support you until you successfully start your new role.',
    bg: '#8CEFEA',
    textColor: '#111827',
    descColor: '#2d3748',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    )
  }
];

// 5 Steps for Employers (Exact Colors from User's Reference Screenshot 2)
const EMPLOYER_STEPS: StepCard[] = [
  {
    step: 'Step 1',
    title: 'Requirement Analysis',
    description:
      'Tell us about your hiring needs, tech stack, team culture, and timeline. We\'ll create a tailored recruitment strategy.',
    bg: '#54CF5B',
    textColor: '#111827',
    descColor: '#1F2937',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
        <line x1="12" y1="2" x2="12" y2="6" />
        <line x1="12" y1="18" x2="12" y2="22" />
        <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
        <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
        <line x1="2" y1="12" x2="6" y2="12" />
        <line x1="18" y1="12" x2="22" y2="12" />
        <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
        <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
      </svg>
    )
  },
  {
    step: 'Step 2',
    title: 'Talent Sourcing',
    description:
      'Our recruiters tap into our extensive network and use advanced sourcing techniques to find the best candidates.',
    bg: '#4D82F3',
    textColor: '#111827',
    descColor: '#1F2937',
    showSnowflakes: true,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    )
  },
  {
    step: 'Step 3',
    title: 'Screening & Vetting',
    description:
      'Candidates undergo technical assessments, soft skill evaluations, and background checks before reaching you.',
    bg: '#FFFFFF',
    textColor: '#111827',
    descColor: '#374151',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <circle cx="9" cy="10" r="1" fill="currentColor" />
        <circle cx="15" cy="10" r="1" fill="currentColor" />
        <path d="M9.5 13a3.5 3.5 0 0 0 5 0" />
      </svg>
    )
  },
  {
    step: 'Step 4',
    title: 'Client Interviews',
    description:
      'We coordinate interviews, gather feedback, and manage the entire process to ensure a smooth experience.',
    bg: '#FAEE38',
    textColor: '#111827',
    descColor: '#1F2937',
    showSnowflakes: true,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    )
  },
  {
    step: 'Step 5',
    title: 'Onboarding Support',
    description:
      'We assist with offer negotiations, onboarding preparation, and follow up to ensure successful integration.',
    bg: '#DF6347',
    textColor: '#111827',
    descColor: '#1F2937',
    showSnowflakes: true,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    )
  }
];

// Exact Emperor Nexus 3D scatter math
function calculateNexusScatter(words: string[], isTop: boolean) {
  let count = 0;
  const items: { char: string; wIdx: number; overallIdx: number }[] = [];
  words.forEach((word, wIdx) => {
    word.split('').forEach((char) => {
      items.push({ char, wIdx, overallIdx: count++ });
    });
  });
  const n = (items.length - 1) / 2;
  return items.map(({ char, overallIdx }, s) => {
    const o = (s - n) / (n || 1);
    const a = ((17 * s + (isTop ? 23 : 41)) % 13) / 13;
    const l = ((29 * s + (isTop ? 11 : 37)) % 11) / 11;
    const c = o >= 0 ? 1 : -1;
    const u = Math.round(c * (440 + 520 * Math.abs(o)) + (a - 0.5) * 220);
    const h = Math.round(isTop ? -320 - 250 * Math.abs(o) - 280 * a : -180 + (a > 0.5 ? -220 : 200) - 220 * l);
    const d = Math.round((l - 0.5) * 600);
    const p = Math.round(c * (100 + 180 * a));
    const f = Math.round((a - 0.5) * 260);
    const m = Math.round((l - 0.5) * 260);
    return {
      char,
      i: s,
      x: u,
      y: h,
      z: d,
      rotateZ: p,
      rotateX: f,
      rotateY: m,
      scale: Number((0.15 + 0.35 * a).toFixed(2)),
      delay: Number((0.04 * Math.abs(o) + 0.025 * a).toFixed(3))
    };
  });
}

const LINE1_WORDS = ['A', 'SIMPLE,', 'TRANSPARENT'];
const LINE2_WORDS = ['PROCESS', 'FOR', 'EVERYONE'];

// Proportional fan angles and y-offsets for Emperor Nexus 3D card deck
const CARD_ANGLES = [-6, -3, 0, 3, 6];
const CARD_TRANSLATES = [12, 3, 0, 3, 12];

// Dedicated entrance time slots for the 1-by-1 card scroll reveal
const CARD_SLOTS = [0.36, 0.48, 0.60, 0.72, 0.84];
const CARD_DURATION = 0.10;

export function SimpleTransparentProcessSection() {
  const [activeTab, setActiveTab] = useState<'jobSeekers' | 'employers'>('jobSeekers');
  const [activeStepIdx, setActiveStepIdx] = useState(0);
  const isInitialMount = useRef(true);
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinContainerRef = useRef<HTMLDivElement>(null);
  const headlineWrapperRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const cardsTrackRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const line1LettersRef = useRef<(HTMLSpanElement | null)[]>([]);
  const line2LettersRef = useRef<(HTMLSpanElement | null)[]>([]);

  const line1Scatter = useMemo(() => calculateNexusScatter(LINE1_WORDS, true), []);
  const line2Scatter = useMemo(() => calculateNexusScatter(LINE2_WORDS, false), []);

  const currentSteps = activeTab === 'jobSeekers' ? JOB_SEEKER_STEPS : EMPLOYER_STEPS;

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: '(min-width: 1024px)',
          isTablet: '(min-width: 641px) and (max-width: 1023px)',
          isMobile: '(max-width: 640px)'
        },
        (context) => {
          const { isDesktop, isTablet, isMobile } = context.conditions as {
            isDesktop: boolean;
            isTablet: boolean;
            isMobile: boolean;
          };

          const m = isMobile ? 0.45 : isTablet ? 0.75 : 1;
          const pinDistance = isDesktop ? '+=3400' : isTablet ? '+=2600' : '+=1900';

          // Initial setup: Headline is visible; Cards container is completely hidden
          if (headlineWrapperRef.current) {
            gsap.set(headlineWrapperRef.current, { autoAlpha: 1, display: 'flex' });
          }

          line1LettersRef.current.forEach((el) => {
            if (el) gsap.set(el, { opacity: 1, x: 0, y: 0, z: 0, rotationX: 0, rotationY: 0, rotationZ: 0, scale: 1, filter: 'blur(0px)' });
          });
          line2LettersRef.current.forEach((el) => {
            if (el) gsap.set(el, { opacity: 1, x: 0, y: 0, z: 0, rotationX: 0, rotationY: 0, rotationZ: 0, scale: 1, filter: 'blur(0px)' });
          });

          // Cards container starts HIDDEN so it NEVER overlaps with the headline
          if (cardsContainerRef.current) {
            gsap.set(cardsContainerRef.current, { autoAlpha: 0, display: 'none', pointerEvents: 'none' });
          }

          if (toggleRef.current) {
            gsap.set(toggleRef.current, { opacity: 0, y: -20 });
          }

          cardsRef.current.forEach((card) => {
            if (card) {
              gsap.set(card, {
                opacity: 0,
                y: isMobile ? 100 : 140,
                rotateZ: 0,
                scale: 0.88,
                transformOrigin: '50% 100%'
              });
            }
          });

          // Master Timeline pinned with GSAP ScrollTrigger scrub (Desktop, Tablet & Mobile)
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top top',
              end: pinDistance,
              pin: pinContainerRef.current,
              pinSpacing: true,
              scrub: 1.1,
              anticipatePin: 1,
              invalidateOnRefresh: true,
              onUpdate: (self) => {
                const p = self.progress;
                // Strict visibility toggle ensuring ZERO overlap:
                // Headline is strictly visible ONLY during scatter phase (p <= 0.33)
                // Cards are strictly visible ONLY during cards phase (p >= 0.33)
                if (headlineWrapperRef.current) {
                  headlineWrapperRef.current.style.display = p > 0.33 ? 'none' : 'flex';
                }
                if (cardsContainerRef.current) {
                  cardsContainerRef.current.style.display = p < 0.33 ? 'none' : 'flex';
                }

                // Update active step for mobile progress dots
                if (p >= 0.84) setActiveStepIdx(4);
                else if (p >= 0.72) setActiveStepIdx(3);
                else if (p >= 0.60) setActiveStepIdx(2);
                else if (p >= 0.48) setActiveStepIdx(1);
                else setActiveStepIdx(0);
              }
            }
          });

          // Phase 1: Hold headline briefly at top of scroll (0.00 -> 0.10)
          tl.to({}, { duration: 0.10 });

          // Phase 2: Letters Scatter into 3D space with blur and rotation (0.10 -> 0.32)
          line1Scatter.forEach((item) => {
            const el = line1LettersRef.current[item.i];
            if (el) {
              tl.to(
                el,
                {
                  x: item.x * m,
                  y: item.y * m,
                  z: item.z * m,
                  rotationX: item.rotateX,
                  rotationY: item.rotateY,
                  rotationZ: item.rotateZ,
                  scale: item.scale,
                  opacity: 0,
                  filter: 'blur(14px)',
                  duration: 0.18,
                  ease: 'power2.in'
                },
                0.10 + item.delay
              );
            }
          });

          line2Scatter.forEach((item) => {
            const el = line2LettersRef.current[item.i];
            if (el) {
              tl.to(
                el,
                {
                  x: item.x * m,
                  y: item.y * m,
                  z: item.z * m,
                  rotationX: item.rotateX,
                  rotationY: item.rotateY,
                  rotationZ: item.rotateZ,
                  scale: item.scale,
                  opacity: 0,
                  filter: 'blur(14px)',
                  duration: 0.18,
                  ease: 'power2.in'
                },
                0.12 + item.delay
              );
            }
          });

          // Fade out headline container cleanly (0.30 -> 0.33)
          if (headlineWrapperRef.current) {
            tl.to(headlineWrapperRef.current, { autoAlpha: 0, duration: 0.03, ease: 'power1.out' }, 0.30);
          }

          // Phase 3: Reveal Cards container and Toggle button (0.33 -> 0.36)
          if (cardsContainerRef.current) {
            tl.to(cardsContainerRef.current, { autoAlpha: 1, pointerEvents: 'auto', duration: 0.04, ease: 'power2.out' }, 0.33);
          }

          if (toggleRef.current) {
            tl.to(toggleRef.current, { opacity: 1, y: 0, duration: 0.05, ease: 'power2.out' }, 0.34);
          }

          // Phase 4: CARDS COME IN 1 BY 1 AS YOU SCROLL! (Across all devices)
          cardsRef.current.forEach((card, idx) => {
            if (card) {
              tl.fromTo(
                card,
                {
                  opacity: 0,
                  y: isMobile ? 80 : 160,
                  rotateZ: isMobile ? 0 : 0,
                  scale: 0.85
                },
                {
                  opacity: 1,
                  y: isMobile ? 0 : CARD_TRANSLATES[idx],
                  rotateZ: isMobile ? 0 : CARD_ANGLES[idx],
                  scale: 1,
                  duration: CARD_DURATION,
                  ease: 'power2.out'
                },
                CARD_SLOTS[idx]
              );
            }
          });

          // On mobile: shift cards track horizontally as each card enters so each card slides into the center
          if (isMobile && cardsTrackRef.current) {
            cardsRef.current.forEach((_, idx) => {
              if (idx > 0) {
                tl.to(
                  cardsTrackRef.current,
                  {
                    x: () => {
                      const firstCard = cardsRef.current[0];
                      const stepDistance = firstCard ? firstCard.offsetWidth + 12 : window.innerWidth * 0.78 + 12;
                      return -idx * stepDistance;
                    },
                    duration: CARD_DURATION,
                    ease: 'power2.out'
                  },
                  CARD_SLOTS[idx]
                );
              }
            });
          }

          // Hold phase (0.94 -> 1.00) so the entire deck is settled and interactive
          tl.to({}, { duration: 0.06 }, 0.94);
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [line1Scatter, line2Scatter]);

  // Smooth cross-fade transition ONLY when toggling between Job Seekers and Employers AFTER mount
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    if (cardsRef.current && cardsRef.current.length > 0) {
      cardsRef.current.forEach((card, idx) => {
        if (card) {
          gsap.fromTo(
            card,
            { opacity: 0.35, y: 15 },
            {
              opacity: 1,
              y: CARD_TRANSLATES[idx],
              duration: 0.35,
              delay: idx * 0.05,
              ease: 'power2.out'
            }
          );
        }
      });
    }
  }, [activeTab]);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative w-full bg-[#000000] text-white overflow-hidden"
    >
      {/* Pinned Fullscreen Viewport Container */}
      <div
        ref={pinContainerRef}
        className="relative w-full min-h-screen lg:h-screen flex flex-col justify-center items-center py-12 lg:py-0 px-4 sm:px-6 lg:px-8 select-none overflow-hidden"
      >
        {/* 3D Scatter Headline (Centered in Viewport, Exact Nexus 3D Explosion) */}
        <div
          ref={headlineWrapperRef}
          className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none px-4 text-center will-change-transform"
          style={{ perspective: '1200px' }}
        >
          {/* Line 1 */}
          <h2 className="font-sans font-black tracking-tight text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[5rem] leading-[1.05] uppercase flex items-center justify-center gap-2 xs:gap-2.5 sm:gap-4 flex-wrap text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.95)]">
            {LINE1_WORDS.map((word, wIdx) => {
              const startIdx = wIdx === 0 ? 0 : LINE1_WORDS.slice(0, wIdx).join('').length;
              return (
                <span key={wIdx} className="inline-flex whitespace-nowrap">
                  {word.split('').map((char, cIdx) => {
                    const overallIdx = startIdx + cIdx;
                    return (
                      <span
                        key={cIdx}
                        ref={(el) => {
                          line1LettersRef.current[overallIdx] = el;
                        }}
                        className="inline-block will-change-transform transform-gpu text-white"
                        style={{ transformStyle: 'preserve-3d' }}
                      >
                        {char}
                      </span>
                    );
                  })}
                </span>
              );
            })}
          </h2>

          {/* Line 2 */}
          <h2 className="font-sans font-black tracking-tight text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[5rem] leading-[1.05] uppercase mt-2 sm:mt-3 flex items-center justify-center gap-2 xs:gap-2.5 sm:gap-4 flex-wrap text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.95)]">
            {LINE2_WORDS.map((word, wIdx) => {
              const startIdx = wIdx === 0 ? 0 : LINE2_WORDS.slice(0, wIdx).join('').length;
              return (
                <span key={wIdx} className="inline-flex whitespace-nowrap">
                  {word.split('').map((char, cIdx) => {
                    const overallIdx = startIdx + cIdx;
                    return (
                      <span
                        key={cIdx}
                        ref={(el) => {
                          line2LettersRef.current[overallIdx] = el;
                        }}
                        className="inline-block will-change-transform transform-gpu text-white"
                        style={{ transformStyle: 'preserve-3d' }}
                      >
                        {char}
                      </span>
                    );
                  })}
                </span>
              );
            })}
          </h2>
        </div>

        {/* Content Container: Toggle & 5 Cards Deck (Only shown after text scatters away) */}
        <div
          ref={cardsContainerRef}
          className="relative z-30 w-full max-w-7xl mx-auto flex flex-col items-center justify-center will-change-transform"
        >
          {/* Dual Audience Toggle ("For Job Seekers" | "For Employers") */}
          <div
            ref={toggleRef}
            className="inline-flex items-center p-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md shadow-lg mb-6 sm:mb-8 lg:mb-10 select-none pointer-events-auto"
          >
            <button
              onClick={() => setActiveTab('jobSeekers')}
              className={`px-6 sm:px-7 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                activeTab === 'jobSeekers'
                  ? 'bg-[#1e3ef0] text-white shadow-md'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              For Job Seekers
            </button>
            <button
              onClick={() => setActiveTab('employers')}
              className={`px-6 sm:px-7 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                activeTab === 'employers'
                  ? 'bg-[#1e3ef0] text-white shadow-md'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              For Employers
            </button>
          </div>

          {/* Mobile Step Progress Dots Indicator */}
          <div className="flex lg:hidden items-center justify-center gap-2 mb-4 select-none">
            {currentSteps.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeStepIdx === i ? 'w-6 bg-[#00E5F0]' : 'w-1.5 bg-white/30'
                }`}
              />
            ))}
          </div>

          {/* 5 Process Cards Fanned Deck (1-by-1 Scroll Reveal Deck) */}
          <div
            ref={cardsTrackRef}
            className="w-full max-w-[1400px] mx-auto flex justify-start lg:justify-center items-end gap-3 sm:gap-3 lg:gap-2.5 xl:gap-3.5 2xl:gap-4 overflow-x-visible lg:overflow-visible pb-8 lg:pb-0 px-[11vw] sm:px-6 lg:px-4 scrollbar-none snap-x snap-mandatory pointer-events-auto will-change-transform"
            style={{ perspective: '1200px' }}
          >
            {currentSteps.map((card, idx) => (
              <div
                key={idx}
                ref={(el) => {
                  cardsRef.current[idx] = el;
                }}
                className="group snap-center flex-shrink-0 w-[78vw] max-w-[260px] sm:w-[225px] md:w-[235px] lg:w-[185px] xl:w-[215px] 2xl:w-[235px] rounded-[1.75rem] sm:rounded-[2rem] lg:rounded-[1.75rem] xl:rounded-[2.25rem] p-4.5 sm:p-5 lg:p-4 xl:p-5 flex flex-col justify-between shadow-2xl transition-all duration-300 hover:scale-[1.06] hover:!rotate-0 hover:!-translate-y-4 hover:z-50 relative cursor-pointer overflow-hidden"
                style={{
                  backgroundColor: card.bg,
                  minHeight: '370px',
                  maxHeight: '425px',
                  transformOrigin: '50% 100%',
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Snow Cap Decoration on Top Edge (Authentic Netbounce Style) */}
                <div className="absolute top-0 left-0 right-0 h-6 pointer-events-none overflow-hidden rounded-t-[2.25rem] z-10 opacity-90">
                  <svg
                    viewBox="0 0 240 24"
                    fill="none"
                    className="w-full h-full"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 0 H240 V9 C215 15, 200 6, 175 11 C150 16, 135 7, 115 12 C90 17, 75 7, 50 12 C30 16, 15 8, 0 10 Z"
                      fill="white"
                      fillOpacity={card.bg === '#FFFFFF' ? 0.35 : 0.95}
                    />
                  </svg>
                </div>

                {/* Decorative subtle snowflake sparkles for employer cards */}
                {card.showSnowflakes && (
                  <div className="absolute top-4 right-4 pointer-events-none text-white/50 text-xs font-serif select-none">
                    ❄
                  </div>
                )}
                {card.showSnowflakes && (
                  <div className="absolute bottom-4 right-4 pointer-events-none text-white/40 text-[10px] font-serif select-none">
                    ❄
                  </div>
                )}

                {/* Card Content */}
                <div className="relative z-20">
                  {/* Step Pill */}
                  <div className="inline-block px-3.5 py-1 rounded-full bg-black text-white text-xs font-bold mb-4 shadow-sm">
                    {card.step}
                  </div>

                  {/* Icon Container with subtle background tile */}
                  <div className="w-10 h-10 rounded-2xl flex items-center justify-center mb-4 bg-black/5 text-[#111827]">
                    {card.icon}
                  </div>

                  {/* Title */}
                  <h3
                    className="text-lg sm:text-xl lg:text-xl font-black tracking-tight leading-snug mb-2"
                    style={{ color: card.textColor }}
                  >
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-xs sm:text-[13px] leading-relaxed font-medium"
                    style={{ color: card.descColor }}
                  >
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
