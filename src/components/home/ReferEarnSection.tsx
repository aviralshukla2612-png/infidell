'use client';

import React, { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Gift, Share2, CheckCircle2, ArrowRight, ShieldCheck, Banknote } from 'lucide-react';

export function ReferEarnSection() {
  const t = useTranslations('ReferEarn');
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (typeof window === 'undefined') return;
      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(
        '.refer-box',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
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

  return (
    <section 
      ref={sectionRef} 
      id="refer-earn"
      className="py-20 lg:py-32 bg-[#000000] relative border-t border-[#202A30] overflow-hidden"
    >
      {/* Background cyan subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-72 bg-[#00E5F0]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="refer-box glass-panel rounded-3xl p-8 sm:p-12 lg:p-16 border border-[#00E5F0]/30 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(0,229,240,0.1)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00E5F0]/10 border border-[#00E5F0]/40 text-xs font-bold text-[#00E5F0] uppercase tracking-wider">
                <Gift className="w-4 h-4 text-[#00E5F0]" />
                <span>{t('badge')}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {t('title')}
              </h2>

              <p className="text-sm sm:text-base text-[#AEB8C2] leading-relaxed">
                {t('subtitle')}
              </p>

              {/* 3 Step Micro Process */}
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-full bg-[#00E5F0]/20 text-[#00E5F0] flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{t('step1')}</h4>
                    <p className="text-xs text-[#AEB8C2] mt-0.5">{t('step1Desc')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-full bg-[#00BFD0]/20 text-[#00BFD0] flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{t('step2')}</h4>
                    <p className="text-xs text-[#AEB8C2] mt-0.5">{t('step2Desc')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-full bg-[#00C7B1]/20 text-[#00C7B1] flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{t('step3')}</h4>
                    <p className="text-xs text-[#AEB8C2] mt-0.5">{t('step3Desc')}</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/refer-earn"
                  className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-bold text-black bg-[#00E5F0] hover:bg-[#00BFD0] transition-all shadow-[0_0_25px_rgba(0,229,240,0.35)]"
                >
                  <Share2 className="w-4 h-4 text-black" />
                  <span>{t('cta')}</span>
                  <ArrowRight className="w-4 h-4 text-black" />
                </Link>
              </div>

              <p className="text-[11px] text-[#AEB8C2]/70 leading-relaxed pt-2">
                {t('termsNotice')}
              </p>
            </div>

            {/* Right Side: Reward Cards */}
            <div className="lg:col-span-5 space-y-5">
              <div className="p-6 rounded-2xl bg-[#080B0E] border border-[#00E5F0]/30 shadow-lg relative overflow-hidden group hover:border-[#00E5F0] transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-[#AEB8C2] uppercase tracking-wider">
                    {t('candidateTier')}
                  </span>
                  <Banknote className="w-5 h-5 text-[#00E5F0]" />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#00E5F0] mb-2">
                  {t('candidateReward')}
                </div>
                <p className="text-xs text-[#AEB8C2]">
                  Per verified placed candidate who completes client probation milestone.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#080B0E] border border-[#00C7B1]/30 shadow-lg relative overflow-hidden group hover:border-[#00C7B1] transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-[#AEB8C2] uppercase tracking-wider">
                    {t('employerTier')}
                  </span>
                  <Gift className="w-5 h-5 text-[#00C7B1]" />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#00C7B1] mb-2">
                  {t('employerReward')}
                </div>
                <p className="text-xs text-[#AEB8C2]">
                  Per qualified corporate hiring contract successfully executed with Infidell.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#0A0D10] border border-[#202A30] flex items-center gap-3 text-xs text-[#AEB8C2]">
                <ShieldCheck className="w-4 h-4 text-[#00C7B1] flex-shrink-0" />
                <span>Direct NEFT/UPI bank disbursement upon verification</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

