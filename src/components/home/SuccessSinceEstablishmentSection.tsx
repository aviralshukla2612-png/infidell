'use client';

import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const TIMELINE_DATA = [
  { year: '2021', value: '130+', label: 'Candidates', isActive: false },
  { year: '2022', value: '188+', label: 'Candidates', isActive: false },
  { year: '2023', value: '234+', label: 'Candidates', isActive: false },
  { year: '2024', value: '376+', label: 'Candidates', isActive: false },
  { year: '2025', value: '385+', label: 'Candidates', isActive: false },
  { year: '2026', value: '437+', label: 'Candidates', isActive: false },
  { year: '2026', value: '97.8%', label: 'Placement success', isActive: true },
];

const STATS_DATA = [
  { target: 5, suffix: '+', label: 'Year Of experience' },
  { target: 5, suffix: 'K+', label: 'Candidates Placed' },
  { target: 360, suffix: '+', label: 'Partner Companies' },
  { target: 12, suffix: '+', label: 'Countries Covered' },
];

function AnimatedStat({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const [displayValue, setDisplayValue] = useState(0);
  const statRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = statRef.current;
    if (!el) return;

    const countObj = { val: 0 };
    const trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top 88%',
      once: true,
      onEnter: () => {
        gsap.to(countObj, {
          val: target,
          duration: 1.8,
          ease: 'power2.out',
          onUpdate: () => {
            setDisplayValue(Math.floor(countObj.val));
          }
        });
      }
    });

    return () => trigger.kill();
  }, [target]);

  return (
    <div ref={statRef} className="flex flex-col items-center justify-center stat-counter-item">
      <div className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-[#111827] tracking-tight leading-none tabular-nums font-mono">
        {displayValue}{suffix}
      </div>
      <div className="text-xs sm:text-sm md:text-base text-[#707070] font-medium mt-3">
        {label}
      </div>
    </div>
  );
}

export function SuccessSinceEstablishmentSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsTrackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Heading slide & fade in
      gsap.fromTo(
        '.success-heading-reveal',
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 82%'
          }
        }
      );

      // 2. Timeline cards spring stagger pop-in
      if (cardsTrackRef.current) {
        const cards = cardsTrackRef.current.querySelectorAll('.timeline-card');
        gsap.fromTo(
          cards,
          { opacity: 0, y: 40, scale: 0.92 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.65,
            stagger: 0.08,
            ease: 'back.out(1.4)',
            scrollTrigger: {
              trigger: cardsTrackRef.current,
              start: 'top 85%'
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full bg-[#f3f0e9] py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="success-heading-reveal text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#111827] tracking-tight leading-tight">
            Success Since <br />
            Our Establishment
          </h2>
          <p className="success-heading-reveal mt-4 text-sm sm:text-base text-[#6B7280] max-w-2xl mx-auto leading-relaxed">
            Infidell Technologies has facilitated the successful placement of 1750+ candidates, <br className="hidden sm:inline" />
            underscoring our proficiency in generating meaningful employment opportunities for individuals.
          </p>
        </div>

        {/* 7 Timeline Cards */}
        <div className="relative mb-20 md:mb-24">
          {/* Horizontal Connecting Line behind the cards */}
          <div className="hidden lg:block absolute top-[58%] left-8 right-8 h-1 bg-white -translate-y-1/2 z-0 rounded-full" />

          {/* Cards Grid: 2 columns on mobile, 3 on tablet, 7 on desktop (Never cut off) */}
          <div
            ref={cardsTrackRef}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 sm:gap-4 relative z-10"
          >
            {TIMELINE_DATA.map((item, idx) => (
              <div
                key={idx}
                className={`timeline-card w-full rounded-2xl sm:rounded-3xl p-3.5 sm:p-5 flex flex-col justify-between items-center text-center relative transition-all duration-300 hover:-translate-y-1 ${
                  idx === TIMELINE_DATA.length - 1 ? 'col-span-2 sm:col-span-1' : ''
                } ${
                  item.isActive
                    ? 'bg-[#31a72f] text-white shadow-md border-4 border-[#31a72f]'
                    : 'bg-white text-[#111827] shadow-sm border-4 border-black/5 hover:shadow-md'
                }`}
                style={{ minHeight: '175px' }}
              >
                {/* Year Pill Tag */}
                <div
                  className={`-mt-7 sm:-mt-8 mb-5 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold shadow-sm inline-flex items-center justify-center ${
                    item.isActive
                      ? 'bg-white text-[#111827] outline outline-2 outline-white'
                      : 'bg-[#1e3ef0] text-white outline outline-2 outline-white'
                  }`}
                >
                  {item.year}
                </div>

                {/* Metric and Label */}
                <div className="my-auto">
                  <div
                    className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
                      item.isActive ? 'text-white' : 'text-[#111827]'
                    }`}
                  >
                    {item.value}
                  </div>
                  <div
                    className={`text-xs sm:text-sm font-medium mt-1 ${
                      item.isActive ? 'text-white/90' : 'text-[#707070]'
                    }`}
                  >
                    {item.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom 4 Big Stats with Animated Number Counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {STATS_DATA.map((stat, idx) => (
            <AnimatedStat
              key={idx}
              target={stat.target}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
