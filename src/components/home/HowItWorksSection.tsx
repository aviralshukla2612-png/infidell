'use client';

import React, { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { UserPlus, FileText, CheckCheck, Award, ArrowRight } from 'lucide-react';

export function HowItWorksSection() {
  const t = useTranslations('HowItWorks');
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (typeof window === 'undefined') return;
      gsap.registerPlugin(ScrollTrigger);

      // Staggered reveal of 4 steps
      gsap.fromTo(
        '.step-card',
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none'
          }
        }
      );

      // Connecting line progress animation
      gsap.fromTo(
        '.step-line-progress',
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.4,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none'
          }
        }
      );
    },
    { scope: sectionRef }
  );

  const steps = [
    {
      num: t('step1Number'),
      title: t('step1Title'),
      desc: t('step1Desc'),
      action: t('step1Action'),
      icon: UserPlus,
      color: '#00E5F0'
    },
    {
      num: t('step2Number'),
      title: t('step2Title'),
      desc: t('step2Desc'),
      action: t('step2Action'),
      icon: FileText,
      color: '#00BFD0'
    },
    {
      num: t('step3Number'),
      title: t('step3Title'),
      desc: t('step3Desc'),
      action: t('step3Action'),
      icon: CheckCheck,
      color: '#00C7B1'
    },
    {
      num: t('step4Number'),
      title: t('step4Title'),
      desc: t('step4Desc'),
      action: t('step4Action'),
      icon: Award,
      color: '#00E5F0'
    }
  ];

  return (
    <section 
      ref={sectionRef} 
      id="how-it-works"
      className="py-20 lg:py-32 bg-[#080B0E] relative border-t border-[#202A30] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
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

        {/* 4 Steps Container */}
        <div className="relative">
          {/* Horizontal connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-[2px] bg-[#202A30] -translate-y-12 z-0">
            <div className="step-line-progress h-full bg-gradient-to-r from-[#00E5F0] via-[#00BFD0] to-[#00C7B1] origin-left shadow-[0_0_10px_#00E5F0]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="step-card glass-panel rounded-2xl p-6 relative flex flex-col justify-between group hover:border-[#00E5F0]/60 transition-all duration-300 hover:-translate-y-2"
                >
                  <div>
                    {/* Top step number and icon */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-3xl font-extrabold text-[#202A30] group-hover:text-[#00E5F0]/50 transition-colors">
                        {step.num}
                      </span>
                      <div 
                        className="w-12 h-12 rounded-xl bg-[#0A0D10] border border-[#202A30] flex items-center justify-center text-[#00E5F0] shadow-md group-hover:border-[#00E5F0] group-hover:shadow-[0_0_15px_rgba(0,229,240,0.3)] transition-all"
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00E5F0] transition-colors">
                      {step.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#AEB8C2] leading-relaxed mb-6">
                      {step.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#202A30] flex items-center justify-between text-xs font-semibold text-[#00E5F0]">
                    <span>{step.action}</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA banner below steps */}
        <div className="mt-16 text-center">
          <Link
            href="/register/candidate"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-black bg-[#00E5F0] hover:bg-[#00BFD0] transition-all shadow-[0_0_25px_rgba(0,229,240,0.35)] hover:shadow-[0_0_35px_rgba(0,229,240,0.5)] transform hover:scale-[1.02]"
          >
            <span>Begin Your Registration Now</span>
            <ArrowRight className="w-4 h-4 text-black" />
          </Link>
        </div>
      </div>
    </section>
  );
}

