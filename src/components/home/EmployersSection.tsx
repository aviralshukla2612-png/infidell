'use client';

import React, { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { 
  Building2, 
  Target, 
  Clock, 
  ShieldCheck, 
  Users, 
  ArrowRight, 
  AlertCircle 
} from 'lucide-react';

export function EmployersSection() {
  const t = useTranslations('Employers');
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (typeof window === 'undefined') return;
      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(
        '.employer-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
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
    { title: t('feature1Title'), desc: t('feature1Desc'), icon: Target },
    { title: t('feature2Title'), desc: t('feature2Desc'), icon: Clock },
    { title: t('feature3Title'), desc: t('feature3Desc'), icon: Users },
    { title: t('feature4Title'), desc: t('feature4Desc'), icon: ShieldCheck }
  ];

  return (
    <section 
      ref={sectionRef} 
      id="employers"
      className="py-20 lg:py-32 bg-[#080B0E] relative border-t border-[#202A30] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A0D10] border border-[#00C7B1]/40 text-[11px] font-bold text-[#00C7B1] tracking-widest uppercase">
              {t('badge')}
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {t('title')}
            </h2>

            <p className="text-sm sm:text-base text-[#AEB8C2] leading-relaxed">
              {t('subtitle')}
            </p>

            <div className="pt-2">
              <Link
                href="/employers"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#00C7B1] to-[#00BFD0] hover:opacity-90 transition-all shadow-[0_0_25px_rgba(0,199,177,0.3)] transform hover:scale-[1.02]"
              >
                <Building2 className="w-4 h-4 text-black" />
                <span className="text-black font-extrabold">{t('cta')}</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </Link>
            </div>

            {/* Ethical Recruitment Disclaimer */}
            <div className="p-4 rounded-xl bg-[#0A0D10] border border-[#202A30] flex items-start gap-3 text-xs text-[#AEB8C2]">
              <AlertCircle className="w-4 h-4 text-[#00C7B1] flex-shrink-0 mt-0.5" />
              <p>{t('disclaimer')}</p>
            </div>
          </div>

          {/* Right Column: Features Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div
                  key={idx}
                  className="employer-card glass-panel rounded-2xl p-6 group hover:border-[#00C7B1]/50 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#00C7B1]/10 border border-[#00C7B1]/30 flex items-center justify-center text-[#00C7B1] mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#00C7B1] transition-colors">
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
      </div>
    </section>
  );
}

