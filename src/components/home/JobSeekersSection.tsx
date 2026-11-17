'use client';

import React, { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { 
  CheckCircle2, 
  ArrowRight, 
  FileCheck, 
  Sparkles, 
  Clock, 
  HelpCircle, 
  TrendingUp, 
  ShieldCheck 
} from 'lucide-react';

export function JobSeekersSection() {
  const t = useTranslations('JobSeekers');
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (typeof window === 'undefined') return;
      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(
        '.seeker-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
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

  const features = [
    { title: t('feature1Title'), desc: t('feature1Desc'), icon: ShieldCheck },
    { title: t('feature2Title'), desc: t('feature2Desc'), icon: FileCheck },
    { title: t('feature3Title'), desc: t('feature3Desc'), icon: Sparkles },
    { title: t('feature4Title'), desc: t('feature4Desc'), icon: HelpCircle },
    { title: t('feature5Title'), desc: t('feature5Desc'), icon: TrendingUp },
    { title: t('feature6Title'), desc: t('feature6Desc'), icon: Clock }
  ];

  return (
    <section 
      ref={sectionRef} 
      className="py-20 lg:py-28 bg-[#000000] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A0D10] border border-[#00E5F0]/30 text-[11px] font-bold text-[#00E5F0] tracking-widest uppercase mb-3">
              {t('badge')}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              {t('title')}
            </h2>
            <p className="text-sm sm:text-base text-[#AEB8C2] mt-3 leading-relaxed">
              {t('subtitle')}
            </p>
          </div>

          <div>
            <Link
              href="/register/candidate"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold text-black bg-[#00E5F0] hover:bg-[#00BFD0] transition-all shadow-[0_0_20px_rgba(0,229,240,0.3)] hover:shadow-[0_0_30px_rgba(0,229,240,0.5)]"
            >
              <span>{t('cta')}</span>
              <ArrowRight className="w-4 h-4 text-black" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="seeker-card glass-panel rounded-2xl p-6 relative group hover:border-[#00E5F0]/50 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[#00E5F0]/10 border border-[#00E5F0]/20 flex items-center justify-center text-[#00E5F0] mb-4 group-hover:bg-[#00E5F0] group-hover:text-black transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#00E5F0] transition-colors">
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#AEB8C2] leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

