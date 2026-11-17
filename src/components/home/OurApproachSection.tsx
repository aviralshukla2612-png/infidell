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
      icon: <Compass className="w-5 h-5 text-[#17BEBB]" strokeWidth={1.75} />
    },
    {
      num: '02',
      titleKey: 'principle2Title',
      descKey: 'principle2Desc',
      tag: 'Strategic Alignment',
      icon: <Target className="w-5 h-5 text-[#00D5DF]" strokeWidth={1.75} />
    },
    {
      num: '03',
      titleKey: 'principle3Title',
      descKey: 'principle3Desc',
      tag: 'Comprehensive Support',
      icon: <BriefcaseBusiness className="w-5 h-5 text-[#17BEBB]" strokeWidth={1.75} />
    },
    {
      num: '04',
      titleKey: 'principle4Title',
      descKey: 'principle4Desc',
      tag: 'Long-Term Continuity',
      icon: <Handshake className="w-5 h-5 text-[#00D5DF]" strokeWidth={1.75} />
    }
  ];

  useGSAP(
    () => {
      if (typeof window === 'undefined') return;
      gsap.registerPlugin(ScrollTrigger);

      // Sequential entrance for each editorial row
      const rows = sectionRef.current?.querySelectorAll('.approach-row');
      if (rows) {
        rows.forEach((row, idx) => {
          gsap.fromTo(
            row,
            { opacity: 0, y: 35 },
            {
              opacity: 1,
              y: 0,
              duration: 0.75,
              delay: idx * 0.08,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: row,
                start: 'top 85%',
                toggleActions: 'play none none none'
              }
            }
          );
        });
      }
    },
    { scope: sectionRef }
  );

  return (
    <section 
      ref={sectionRef} 
      id="approach"
      className="py-24 sm:py-32 bg-[#050708] relative overflow-hidden border-t border-[#203536]/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0C1517] border border-[#17BEBB]/40 text-[11px] font-bold text-[#17BEBB] tracking-widest uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D5DF]" />
              {t('badge')}
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F5F8F8] tracking-tight leading-tight">
              {t('title')}
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#A5B2B3] max-w-md leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        {/* Horizontal Editorial Principle Rows */}
        <div className="space-y-4">
          {principles.map((principle, index) => (
            <div 
              key={principle.num}
              className="approach-row p-6 sm:p-8 rounded-2xl bg-[#0C1517] border border-[#203536] hover:border-[#17BEBB]/50 transition-all duration-300 relative group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                
                {/* Index Number & Icon (Left 3 cols) */}
                <div className="lg:col-span-3 flex items-center gap-4">
                  <span className="text-2xl sm:text-3xl font-black text-[#102426] group-hover:text-[#17BEBB] transition-colors duration-300 font-mono">
                    {principle.num}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#102426] border border-[#203536] flex items-center justify-center flex-shrink-0">
                    {principle.icon}
                  </div>
                  <span className="text-xs font-semibold text-[#17BEBB] tracking-wider uppercase">
                    {principle.tag}
                  </span>
                </div>

                {/* Principle Title (Middle 4 cols) */}
                <div className="lg:col-span-4">
                  <h3 className="text-lg sm:text-xl font-bold text-[#F5F8F8] group-hover:text-[#00D5DF] transition-colors duration-300">
                    {t(principle.titleKey)}
                  </h3>
                </div>

                {/* Principle Description (Right 5 cols) */}
                <div className="lg:col-span-5 flex items-center justify-between gap-4">
                  <p className="text-xs sm:text-sm text-[#A5B2B3] leading-relaxed">
                    {t(principle.descKey)}
                  </p>
                  <div className="hidden sm:flex w-8 h-8 rounded-full border border-[#203536] items-center justify-center text-[#A5B2B3] group-hover:text-[#F5F8F8] group-hover:border-[#17BEBB] transition-all flex-shrink-0">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

              </div>

              {/* Thin Bottom Progress Highlight */}
              <div className="absolute inset-x-8 bottom-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#17BEBB]/0 to-transparent group-hover:via-[#17BEBB]/70 transition-all duration-500" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

