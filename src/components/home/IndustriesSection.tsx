'use client';

import React, { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { 
  Laptop, 
  Wrench, 
  BadgePercent, 
  TrendingUp, 
  Users, 
  Building, 
  Headphones, 
  Truck,
  ArrowRight
} from 'lucide-react';

export function IndustriesSection() {
  const t = useTranslations('Industries');
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (typeof window === 'undefined') return;
      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(
        '.industry-card',
        { opacity: 0, scale: 0.92, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none'
          }
        }
      );
    },
    { scope: sectionRef }
  );

  const industries = [
    { key: 'it', title: t('it'), desc: t('itDesc'), icon: Laptop },
    { key: 'engineering', title: t('engineering'), desc: t('engineeringDesc'), icon: Wrench },
    { key: 'finance', title: t('finance'), desc: t('financeDesc'), icon: BadgePercent },
    { key: 'sales', title: t('sales'), desc: t('salesDesc'), icon: TrendingUp },
    { key: 'hr', title: t('hr'), desc: t('hrDesc'), icon: Users },
    { key: 'admin', title: t('admin'), desc: t('adminDesc'), icon: Building },
    { key: 'support', title: t('support'), desc: t('supportDesc'), icon: Headphones },
    { key: 'operations', title: t('operations'), desc: t('operationsDesc'), icon: Truck }
  ];

  return (
    <section 
      ref={sectionRef} 
      className="py-20 lg:py-32 bg-[#000000] relative border-t border-[#202A30] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A0D10] border border-[#00E5F0]/30 text-[11px] font-bold text-[#00E5F0] tracking-widest uppercase mb-3">
            {t('badge')}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t('title')}
          </h2>
          <p className="text-sm sm:text-base text-[#AEB8C2] mt-3">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <Link
                key={ind.key}
                href={`/jobs?industry=${encodeURIComponent(ind.title)}`}
                className="industry-card glass-panel rounded-2xl p-6 group hover:border-[#00E5F0]/60 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#0A0D10] border border-[#202A30] flex items-center justify-center text-[#00E5F0] mb-5 group-hover:scale-110 group-hover:border-[#00E5F0] group-hover:shadow-[0_0_15px_rgba(0,229,240,0.3)] transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#00E5F0] transition-colors">
                    {ind.title}
                  </h3>
                  <p className="text-xs text-[#AEB8C2] leading-relaxed">
                    {ind.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#202A30] flex items-center justify-between text-[11px] font-semibold text-[#00E5F0]">
                  <span>Explore Openings</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

