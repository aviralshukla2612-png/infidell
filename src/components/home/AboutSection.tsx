'use client';

import React, { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { 
  Compass, 
  Target, 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  Users2, 
  Briefcase 
} from 'lucide-react';

export function AboutSection() {
  const t = useTranslations('About');
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (typeof window === 'undefined') return;
      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(
        '.about-reveal',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
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
      id="about"
      className="py-20 lg:py-32 bg-[#000000] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Narrative Editorial Layout */}
          <div className="lg:col-span-6 space-y-6">
            <div className="about-reveal inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A0D10] border border-[#00E5F0]/30 text-[11px] font-bold text-[#00E5F0] tracking-widest uppercase">
              {t('badge')}
            </div>

            <h2 className="about-reveal text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {t('title')}
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#AEB8C2] leading-relaxed">
              <p className="about-reveal">
                {t('p1')}
              </p>
              <p className="about-reveal">
                {t('p2')}
              </p>
            </div>

            {/* Mission & Vision Cards */}
            <div className="about-reveal grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-xl bg-[#0A0D10] border border-[#202A30] hover:border-[#00E5F0]/40 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-[#00E5F0]/10 flex items-center justify-center text-[#00E5F0] mb-3">
                  <Target className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1.5">{t('missionTitle')}</h4>
                <p className="text-xs text-[#AEB8C2] leading-relaxed">{t('missionDesc')}</p>
              </div>

              <div className="p-5 rounded-xl bg-[#0A0D10] border border-[#202A30] hover:border-[#00C7B1]/40 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-[#00C7B1]/10 flex items-center justify-center text-[#00C7B1] mb-3">
                  <Compass className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1.5">{t('visionTitle')}</h4>
                <p className="text-xs text-[#AEB8C2] leading-relaxed">{t('visionDesc')}</p>
              </div>
            </div>

            <div className="about-reveal pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#00E5F0] hover:text-[#00BFD0] group transition-colors"
              >
                <span>Read Full Company Profile</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: 4 Core Pillars Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="about-reveal p-6 rounded-2xl glass-panel border border-[#202A30] hover:border-[#00E5F0]/40 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-[#00E5F0]/10 border border-[#00E5F0]/30 flex items-center justify-center text-[#00E5F0] mb-4">
                <Users2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                {t('corePillar1Title')}
              </h3>
              <p className="text-xs text-[#AEB8C2] leading-relaxed">
                {t('corePillar1Desc')}
              </p>
            </div>

            <div className="about-reveal p-6 rounded-2xl glass-panel border border-[#202A30] hover:border-[#00C7B1]/40 transition-all duration-300 sm:translate-y-6">
              <div className="w-10 h-10 rounded-xl bg-[#00C7B1]/10 border border-[#00C7B1]/30 flex items-center justify-center text-[#00C7B1] mb-4">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                {t('corePillar2Title')}
              </h3>
              <p className="text-xs text-[#AEB8C2] leading-relaxed">
                {t('corePillar2Desc')}
              </p>
            </div>

            <div className="about-reveal p-6 rounded-2xl glass-panel border border-[#202A30] hover:border-[#00E5F0]/40 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-[#00E5F0]/10 border border-[#00E5F0]/30 flex items-center justify-center text-[#00E5F0] mb-4">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                {t('corePillar3Title')}
              </h3>
              <p className="text-xs text-[#AEB8C2] leading-relaxed">
                {t('corePillar3Desc')}
              </p>
            </div>

            <div className="about-reveal p-6 rounded-2xl glass-panel border border-[#202A30] hover:border-[#00C7B1]/40 transition-all duration-300 sm:translate-y-6">
              <div className="w-10 h-10 rounded-xl bg-[#00C7B1]/10 border border-[#00C7B1]/30 flex items-center justify-center text-[#00C7B1] mb-4">
                <CheckCircle className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                {t('corePillar4Title')}
              </h3>
              <p className="text-xs text-[#AEB8C2] leading-relaxed">
                {t('corePillar4Desc')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

