'use client';

import React, { useRef } from 'react';
import { useTranslations } from 'next-intl';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { 
  Compass, 
  Target, 
  BriefcaseBusiness, 
  Handshake, 
  ArrowUpRight 
} from 'lucide-react';

interface Principle {
  num: string;
  titleKey: string;
  descKey: string;
  icon: React.ReactNode;
  tag: string;
  accent: string;
}

export function OurApproachSection() {
  const t = useTranslations('Approach');
  const sectionRef = useRef<HTMLElement>(null);

  const principles: Principle[] = [
    {
      num: '01',
      titleKey: 'principle1Title',
      descKey: 'principle1Desc',
      tag: 'Discovery & Listening',
      icon: <Compass className="w-5 h-5 text-[#00D5DF]" strokeWidth={1.75} />,
      accent: '#00D5DF'
    },
    {
      num: '02',
      titleKey: 'principle2Title',
      descKey: 'principle2Desc',
      tag: 'Strategic Alignment',
      icon: <Target className="w-5 h-5 text-[#38BDF8]" strokeWidth={1.75} />,
      accent: '#38BDF8'
    },
    {
      num: '03',
      titleKey: 'principle3Title',
      descKey: 'principle3Desc',
      tag: 'Comprehensive Support',
      icon: <BriefcaseBusiness className="w-5 h-5 text-[#2DD4BF]" strokeWidth={1.75} />,
      accent: '#2DD4BF'
    },
    {
      num: '04',
      titleKey: 'principle4Title',
      descKey: 'principle4Desc',
      tag: 'Long-Term Continuity',
      icon: <Handshake className="w-5 h-5 text-[#818CF8]" strokeWidth={1.75} />,
      accent: '#818CF8'
    }
  ];

  useGSAP(
    () => {
      if (typeof window === 'undefined') return;
      gsap.registerPlugin(ScrollTrigger);

      // Staggered luxury entrance for the 4 bento cards
      gsap.fromTo(
        '.approach-card',
        { opacity: 0, y: 32, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.approach-grid',
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
      id="services"
      className="py-24 sm:py-32 bg-[#050708] relative overflow-hidden border-t border-[#203536]/80 select-none scroll-mt-20"
    >
      {/* Anchor for backward compatibility with #approach */}
      <div id="approach" className="absolute top-0 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header - Clean & Elegant (No Pill Badge) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 sm:mb-18">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight leading-tight">
              A Thoughtful{' '}
              <span className="font-medium bg-gradient-to-r from-white via-[#7DD3FC] to-[#38BDF8] bg-clip-text text-transparent">
                Recruitment Architecture
              </span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-300 max-w-md leading-relaxed font-normal">
            {t('subtitle')}
          </p>
        </div>

        {/* 4 Luxury Bento Cards in 2x2 Grid with Vibrant Color Borders */}
        <div className="approach-grid grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {principles.map((principle) => (
            <div 
              key={principle.num}
              className="approach-card group relative rounded-3xl p-7 sm:p-9 bg-white dark:bg-[#070D10] border transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-2xl hover:-translate-y-1.5"
              style={{
                borderColor: principle.accent,
                borderWidth: '1.5px',
                boxShadow: `0 8px 32px -4px ${principle.accent}25`
              }}
            >
              {/* Ambient Radial Hover Glow */}
              <div 
                className="absolute -top-20 -right-20 w-52 h-52 rounded-full blur-[90px] opacity-0 group-hover:opacity-25 transition-opacity duration-700 pointer-events-none"
                style={{ backgroundColor: principle.accent }}
              />

              {/* Top Accent Light Bar on Hover */}
              <div 
                className="absolute top-0 inset-x-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `linear-gradient(90deg, transparent, ${principle.accent}, transparent)`
                }}
              />

              {/* Card Body */}
              <div>
                {/* Header Row: Icon Anchor on Left, Arrow Action on Right (Clean & Removed Dark Grey Tag) */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-105 border shadow-sm"
                      style={{ 
                        borderColor: `${principle.accent}70`,
                        backgroundColor: `${principle.accent}14`
                      }}
                    >
                      {principle.icon}
                    </div>
                    <span 
                      className="text-xs font-mono font-bold tracking-widest uppercase px-2.5 py-1 rounded-md"
                      style={{ color: principle.accent, backgroundColor: `${principle.accent}12` }}
                    >
                      {principle.num}
                    </span>
                  </div>

                  <a 
                    href="#contact"
                    aria-label={`Inquire about ${t(principle.titleKey)}`}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 flex items-center justify-center text-slate-500 dark:text-neutral-400 group-hover:text-white group-hover:border-[#087FCB] dark:group-hover:border-[#00D5DF]/60 group-hover:bg-[#087FCB] dark:group-hover:bg-[#00D5DF]/20 group-hover:rotate-45 transition-all duration-300"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Principle Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-[#102B50] dark:text-white mb-3 tracking-tight group-hover:text-[#087FCB] dark:group-hover:text-[#7DD3FC] transition-colors duration-300 leading-snug">
                  {t(principle.titleKey)}
                </h3>

                {/* Principle Description */}
                <p className="text-sm sm:text-base text-slate-600 dark:text-neutral-300 font-normal leading-relaxed">
                  {t(principle.descKey)}
                </p>
              </div>

              {/* Bottom Metadata Row */}
              <div className="pt-6 mt-8 border-t border-white/10 flex items-center justify-between text-xs font-mono text-neutral-400">
                <span className="tracking-wide">Executive Principle</span>
                <a 
                  href="#contact"
                  className="font-medium inline-flex items-center gap-1.5 hover:translate-x-1 transition-transform"
                  style={{ color: principle.accent }}
                >
                  <span>Learn more</span>
                  <span>→</span>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
