'use client';

import React, { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Quote, TrendingUp, Building2, User, ArrowRight } from 'lucide-react';

export function SuccessStoriesSection() {
  const t = useTranslations('SuccessStories');
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (typeof window === 'undefined') return;
      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(
        '.story-card',
        { opacity: 0, y: 35 },
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

  const stories = [
    {
      name: t('story1Name'),
      role: t('story1Role'),
      prev: t('story1Prev'),
      company: t('story1Company'),
      quote: t('story1Quote'),
      hike: '+65% Compensation Hike',
      industry: 'Information Technology'
    },
    {
      name: t('story2Name'),
      role: t('story2Role'),
      prev: t('story2Prev'),
      company: t('story2Company'),
      quote: t('story2Quote'),
      hike: 'Senior Leadership Transition',
      industry: 'Finance & Asset Management'
    },
    {
      name: t('story3Name'),
      role: t('story3Role'),
      prev: t('story3Prev'),
      company: t('story3Company'),
      quote: t('story3Quote'),
      hike: 'MNC Automation Role',
      industry: 'Robotics & Manufacturing'
    }
  ];

  return (
    <section 
      ref={sectionRef} 
      className="py-20 lg:py-32 bg-[#080B0E] relative border-t border-[#202A30] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
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

          <Link
            href="/success-stories"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#00E5F0] hover:text-[#00BFD0] group transition-colors"
          >
            <span>View All Stories</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, idx) => (
            <div
              key={idx}
              className="story-card glass-panel rounded-2xl p-6 sm:p-8 flex flex-col justify-between group hover:border-[#00E5F0]/50 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00E5F0]/10 border border-[#00E5F0]/30 text-[10px] font-semibold text-[#00E5F0]">
                    <TrendingUp className="w-3 h-3" />
                    <span>{story.hike}</span>
                  </span>
                  <Quote className="w-6 h-6 text-[#202A30] group-hover:text-[#00E5F0]/40 transition-colors" />
                </div>

                <p className="text-xs sm:text-sm text-[#AEB8C2] italic leading-relaxed mb-6">
                  &ldquo;{story.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#202A30]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#0A0D10] to-[#202A30] border border-[#00E5F0]/40 flex items-center justify-center text-white font-bold text-sm">
                    {story.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-[#00E5F0] transition-colors">
                      {story.name}
                    </h4>
                    <p className="text-xs font-semibold text-[#00E5F0]">
                      {story.role}
                    </p>
                    <p className="text-[10px] text-[#AEB8C2]">
                      {story.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

