'use client';

import React, { useRef } from 'react';
import { useTranslations } from 'next-intl';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Users, Award, Building, Sparkles } from 'lucide-react';

export function StatisticsSection() {
  const t = useTranslations('Stats');
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (typeof window === 'undefined') return;
      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(
        '.stat-card',
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
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

  const stats = [
    {
      value: t('stat1Value'),
      label: t('stat1Label'),
      desc: t('stat1Desc'),
      icon: Users,
      glowColor: '#00E5F0'
    },
    {
      value: t('stat2Value'),
      label: t('stat2Label'),
      desc: t('stat2Desc'),
      icon: Award,
      glowColor: '#00C7B1'
    },
    {
      value: t('stat3Value'),
      label: t('stat3Label'),
      desc: t('stat3Desc'),
      icon: Building,
      glowColor: '#00BFD0'
    },
    {
      value: t('stat4Value'),
      label: t('stat4Label'),
      desc: t('stat4Desc'),
      icon: Sparkles,
      glowColor: '#00E5F0'
    }
  ];

  return (
    <section 
      ref={sectionRef} 
      className="py-16 lg:py-24 bg-[#080B0E] relative border-y border-[#202A30] overflow-hidden"
    >
      {/* Background soft grid pattern */}
      <div className="absolute inset-0 hero-mesh-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A0D10] border border-[#00E5F0]/30 text-[11px] font-bold text-[#00E5F0] tracking-widest uppercase mb-3">
            {t('badge')}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            {t('title')}
          </h2>
          <p className="text-sm sm:text-base text-[#AEB8C2] mt-2">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="stat-card glass-panel rounded-2xl p-6 relative group transition-all duration-300 hover:border-[#00E5F0]/50 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-[#00E5F0]/10 border border-[#00E5F0]/30 flex items-center justify-center text-[#00E5F0] mb-4 group-hover:scale-110 group-hover:border-[#00E5F0] transition-all">
                  <Icon className="w-6 h-6" />
                </div>

                <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-1 group-hover:text-[#00E5F0] transition-colors">
                  {stat.value}
                </div>

                <h3 className="text-sm font-semibold text-white mb-2">
                  {stat.label}
                </h3>

                <p className="text-xs text-[#AEB8C2] leading-relaxed">
                  {stat.desc}
                </p>

                {/* Subtle border bottom glow */}
                <div 
                  className="absolute bottom-0 left-6 right-6 h-[1.5px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: stat.glowColor, boxShadow: `0 0 10px ${stat.glowColor}` }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

