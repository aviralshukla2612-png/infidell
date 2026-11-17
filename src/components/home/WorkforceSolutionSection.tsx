'use client';

import React, { useRef } from 'react';
import { Link } from '@/i18n/routing';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowUpRight } from 'lucide-react';

interface SolutionCard {
  id: string;
  title: string;
  description: string;
  href: string;
  bgColor: string;
  imageSrc: string;
  imageAlt: string;
}

export function WorkforceSolutionSection() {
  const sectionRef = useRef<HTMLElement>(null);

  // Top row cards (2-column layout: 2fr + 1fr on desktop)
  const topCards: SolutionCard[] = [
    {
      id: 'job-placement',
      title: 'Job Placement',
      description: 'Helping professionals land meaningful full-time roles with end to end services that turn jobs into long-term careers.',
      href: '#process',
      bgColor: '#FAF6EF',
      imageSrc: '/images/solutions/job-placement.avif',
      imageAlt: 'Job Placement Professional looking toward long-term career growth'
    },
    {
      id: 'recruitment-staffing',
      title: 'Recruitment & Staffing',
      description: 'Connecting businesses with skilled professionals who actually fit the role and the team.',
      href: '#process',
      bgColor: '#FFF0BA',
      imageSrc: '/images/solutions/recruitment-staffing.avif',
      imageAlt: 'Recruitment & Staffing candidate walking on forward path'
    }
  ];

  // Bottom row cards (4-column layout)
  const bottomCards: SolutionCard[] = [
    {
      id: 'talent-acquisition',
      title: 'Talent Acquisition',
      description: 'Strategic hiring support to build long-term, high-performing teams.',
      href: '#process',
      bgColor: '#A8D7F7',
      imageSrc: '/images/solutions/talent-acquisition.avif',
      imageAlt: 'Talent Acquisition executive leaping forward'
    },
    {
      id: 'background-verification',
      title: 'Background Verification',
      description: 'Comprehensive checks to ensure trust, compliance, and reliability.',
      href: '#process',
      bgColor: '#FFE5CA',
      imageSrc: '/images/solutions/background-verification.avif',
      imageAlt: 'Background Verification inspection and candidate vetting'
    },
    {
      id: 'it-training',
      title: 'IT Training',
      description: 'Training that prepares candidates for real-world tech careers.',
      href: '#process',
      bgColor: '#FFEBF7',
      imageSrc: '/images/solutions/it-training.avif',
      imageAlt: 'IT Training candidate ascending skill growth stairs'
    },
    {
      id: 'accounting-taxes',
      title: 'Accounting & Taxes',
      description: 'Seamless payroll processing with full tax and regulatory compliance.',
      href: '#process',
      bgColor: '#E5DD85',
      imageSrc: '/images/solutions/accounting-taxes.avif',
      imageAlt: 'Accounting and Taxes payroll success'
    }
  ];

  useGSAP(
    () => {
      if (typeof window === 'undefined') return;
      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(
        '.solution-reveal',
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
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

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-20 lg:py-28 bg-[#FFFFFF] border-y border-[#E2E8F0] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="solution-reveal text-center max-w-4xl mx-auto mb-14 sm:mb-18 space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-extrabold text-[#0F172A] tracking-tight leading-[1.18]">
            Workforce Solution for <br className="hidden sm:inline" />
            Businesses and Job seekers
          </h2>
          <p className="text-base sm:text-lg text-[#475569] max-w-2xl mx-auto leading-relaxed">
            From hiring to get hired, Infidell Technologies is the workforce solutions company that supports businesses and job seekers with end-to-end services.
          </p>
        </div>

        {/* Cards Grid Wrapper */}
        <div className="space-y-6">
          {/* Top Row Grid (2 Columns: 2fr + 1fr on desktop) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {/* Card 1: Job Placement (Spans 2 columns on lg) */}
            <Link
              href={topCards[0].href}
              className="solution-reveal lg:col-span-2 group relative rounded-3xl p-7 sm:p-9 flex flex-col justify-between overflow-hidden border border-black/5 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] transition-all duration-300 transform hover:-translate-y-1 min-h-[400px] sm:min-h-[440px]"
              style={{ backgroundColor: topCards[0].bgColor }}
            >
              {/* Content Top */}
              <div className="relative z-10 max-w-md sm:max-w-lg space-y-3">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
                    {topCards[0].title}
                  </h3>
                  <div className="w-10 h-10 rounded-full bg-black/5 group-hover:bg-[#0F172A] group-hover:text-white flex items-center justify-center text-[#0F172A] transition-all duration-300 flex-shrink-0">
                    <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
                <p className="text-sm sm:text-base text-[#334155] leading-relaxed font-normal">
                  {topCards[0].description}
                </p>
              </div>

              {/* Bottom Right Collage Illustration */}
              <div className="absolute right-0 bottom-0 w-[60%] sm:w-[50%] h-[65%] sm:h-[75%] pointer-events-none select-none overflow-hidden">
                <img
                  src={topCards[0].imageSrc}
                  alt={topCards[0].imageAlt}
                  className="w-full h-full object-contain object-bottom sm:object-right-bottom transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </Link>

            {/* Card 2: Recruitment & Staffing (Spans 1 column on lg) */}
            <Link
              href={topCards[1].href}
              className="solution-reveal lg:col-span-1 group relative rounded-3xl p-7 sm:p-9 flex flex-col justify-between overflow-hidden border border-black/5 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] transition-all duration-300 transform hover:-translate-y-1 min-h-[400px] sm:min-h-[440px]"
              style={{ backgroundColor: topCards[1].bgColor }}
            >
              {/* Content Top */}
              <div className="relative z-10 space-y-3">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
                    {topCards[1].title}
                  </h3>
                  <div className="w-10 h-10 rounded-full bg-black/5 group-hover:bg-[#0F172A] group-hover:text-white flex items-center justify-center text-[#0F172A] transition-all duration-300 flex-shrink-0">
                    <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
                <p className="text-sm sm:text-base text-[#334155] leading-relaxed font-normal">
                  {topCards[1].description}
                </p>
              </div>

              {/* Bottom Collage Illustration */}
              <div className="absolute inset-x-0 bottom-0 h-[55%] pointer-events-none select-none overflow-hidden">
                <img
                  src={topCards[1].imageSrc}
                  alt={topCards[1].imageAlt}
                  className="w-full h-full object-contain object-bottom transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </Link>
          </div>

          {/* Bottom Row Grid (4 Columns on desktop, 2 on tablet, 1 on mobile) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {bottomCards.map((card) => (
              <Link
                key={card.id}
                href={card.href}
                className="solution-reveal group relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between overflow-hidden border border-black/5 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] transition-all duration-300 transform hover:-translate-y-1 min-h-[380px] sm:min-h-[420px]"
                style={{ backgroundColor: card.bgColor }}
              >
                {/* Content Top */}
                <div className="relative z-10 space-y-2.5">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] tracking-tight leading-snug">
                      {card.title}
                    </h3>
                    <div className="w-8 h-8 rounded-full bg-black/5 group-hover:bg-[#0F172A] group-hover:text-white flex items-center justify-center text-[#0F172A] transition-all duration-300 flex-shrink-0">
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-[#334155] leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>

                {/* Bottom Center Illustration */}
                <div className="absolute inset-x-0 bottom-0 h-[52%] pointer-events-none select-none overflow-hidden">
                  <img
                    src={card.imageSrc}
                    alt={card.imageAlt}
                    className="w-full h-full object-contain object-bottom transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
