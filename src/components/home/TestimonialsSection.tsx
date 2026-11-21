'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Quote } from 'lucide-react';

interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  outcome: string;
  companyBadge: string;
  accent: string;
  image: string;
  rating: number;
  quote: string;
}

const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'ananya-sharma',
    name: 'Ananya Sharma',
    role: 'LEAD FULL STACK ARCHITECT',
    outcome: 'Tier-1 Fintech Platform · Bengaluru',
    companyBadge: 'Bengaluru Tech Hub',
    accent: '#A33B26', // Terracotta
    image: '/images/testimonials/indian-avatar-1.jpg',
    rating: 5,
    quote:
      'Finding an executive recruitment partner in India that truly understands notice period dynamics and compensation transparency is rare. Infidell facilitated direct conversations with engineering leadership in Bengaluru, leading to an offer aligned with my leadership trajectory.'
  },
  {
    id: 'rohan-patel',
    name: 'Rohan Patel',
    role: 'SR. CLOUD & DEVOPS ARCHITECT',
    outcome: 'Enterprise Cloud Platform · Pune / Hybrid',
    companyBadge: 'Cloud Infrastructure',
    accent: '#0284C7', // Sky Blue
    image: '/images/testimonials/indian-avatar-2.jpg',
    rating: 5,
    quote:
      'No algorithmic black holes or candidate fees. My Infidell advisor helped benchmark compensation for Kubernetes and multi-cloud architecture mandates, coordinating interview rounds with surgical precision from day one.'
  },
  {
    id: 'priya-sundaram',
    name: 'Priya Sundaram',
    role: 'DIRECTOR OF PRODUCT MANAGEMENT',
    outcome: 'Global SaaS Enterprise · Hyderabad',
    companyBadge: 'SaaS Leadership',
    accent: '#059669', // Emerald
    image: '/images/testimonials/indian-avatar-3.jpg',
    rating: 5,
    quote:
      'Infidell treats career transition like an executive advisory service rather than a resume broadcast. They mapped out three strategic conversations with verified enterprise leaders in Hyderabad, completely aligned with my product roadmap vision.'
  },
  {
    id: 'vikram-malhotra',
    name: 'Vikram Malhotra',
    role: 'VP OF SOFTWARE ENGINEERING',
    outcome: 'High-Growth Tech Unicorn · Gurugram',
    companyBadge: 'Executive Search',
    accent: '#D97706', // Amber
    image: '/images/testimonials/indian-avatar-4.jpg',
    rating: 5,
    quote:
      'From compensation benchmarking and ESOP negotiation to confidential interview scheduling with the CTO in Gurugram, Infidell provided world-class representation throughout my career move. Exceptional professionalism.'
  },
  {
    id: 'sneha-kulkarni',
    name: 'Sneha Kulkarni',
    role: 'PRINCIPAL DATA SCIENTIST',
    outcome: 'Enterprise AI Lab · Mumbai / Remote',
    companyBadge: 'AI & Machine Learning',
    accent: '#7C3AED', // Violet
    image: '/images/testimonials/indian-avatar-5.jpg',
    rating: 5,
    quote:
      'The personalized attention from Infidell was remarkable. They understood my specialized background in generative AI and LLM pipelines, matching me directly with enterprise AI labs in Mumbai that offered both remote flexibility and tier-1 compensation.'
  }
];

export function TestimonialsSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  // Fast auto-advance every 1.8 seconds so it changes quickly and briskly
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const active = TESTIMONIALS[activeIdx];

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  return (
    <section
      id="testimonials"
      className="min-h-screen lg:h-screen lg:max-h-screen flex flex-col justify-center py-6 sm:py-8 lg:py-6 bg-[#050708] relative overflow-hidden border-t border-[#203536]/80 select-none"
    >
      {/* Dynamic Background Atmosphere */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        {/* Dark Mode Background Visual */}
        <div className="dark-only absolute inset-0">
          <Image
            src="/testimonialbg.png"
            alt="Testimonials Atmosphere Background"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050708] via-transparent to-[#050708] opacity-65 pointer-events-none" />
        </div>

        {/* Light Mode Background Visual: Official User Provided Background (/testimonialbg-light.png) */}
        <div className="light-only absolute inset-0">
          <Image
            src="/testimonialbg-light.png"
            alt="Testimonials Atmosphere Background - Light Theme"
            fill
            priority
            className="object-cover object-center opacity-100"
          />
          {/* Subtle edge blend with neighbor sections */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC]/40 via-transparent to-[#F8FAFC]/40 pointer-events-none" />
        </div>
      </div>

      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] bg-[#00D5DF]/10 rounded-full blur-[140px] sm:blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[320px] sm:w-[500px] h-[320px] sm:h-[500px] bg-[#38BDF8]/10 rounded-full blur-[130px] sm:blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

        {/* Header - Compact Elegant Single-Screen Proportions */}
        <div className="max-w-3xl mb-3 sm:mb-4 lg:mb-5">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-[#102B50] dark:text-white leading-tight mb-0.5 sm:mb-1">
            Testimonials
          </h2>
          <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-light tracking-tight text-[#102B50] dark:text-white leading-snug mb-1">
            Voices of{' '}
            <span className="font-medium bg-gradient-to-r from-[#102B50] via-[#087FCB] to-[#00BFCB] dark:from-white dark:via-[#7DD3FC] dark:to-[#38BDF8] bg-clip-text text-transparent">
              Verified Success.
            </span>
          </h3>
          <p className="text-xs sm:text-[13px] text-slate-600 dark:text-neutral-300 leading-relaxed font-normal max-w-2xl">
            Direct experiences from candidates placed in career-defining roles and enterprise partners who rely on Infidell for precision talent shortlists.
          </p>
        </div>

        {/* Featured Testimonial Card - Perfectly Proportioned to fit on 1 screen */}
        <div className="max-w-4xl mx-auto pt-2 sm:pt-4 w-full">
          <div
            key={active.id}
            onClick={handleNext}
            role="button"
            tabIndex={0}
            aria-label="Click to view next testimonial"
            className="testimonial-card relative bg-[#FFFFFF] text-neutral-900 rounded-[20px] sm:rounded-[28px] md:rounded-[32px] pt-4 sm:pt-5 md:pt-6 pb-4 sm:pb-5 px-5 sm:px-7 md:px-10 shadow-2xl transition-all duration-300 animate-fadeIn cursor-pointer border border-[#203536]/30"
            style={{
              boxShadow: '0 30px 70px -15px rgba(0,0,0,0.8), 0 0 40px rgba(0,213,223,0.12)'
            }}
          >
            {/* Scalloped Flower Avatar overlapping top-left corner */}
            <div className="absolute -top-6 sm:-top-8 md:-top-9 -left-2 sm:-left-3 z-20">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 filter drop-shadow-[0_10px_22px_rgba(0,0,0,0.25)]">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100">
                  <defs>
                    <clipPath id={`scallop-${active.id}`}>
                      {/* 8-lobed organic flower scallop */}
                      <circle cx="50" cy="50" r="37.5" />
                      <circle cx="86" cy="50" r="13.5" />
                      <circle cx="75.46" cy="75.46" r="13.5" />
                      <circle cx="50" cy="86" r="13.5" />
                      <circle cx="24.54" cy="75.46" r="13.5" />
                      <circle cx="14" cy="50" r="13.5" />
                      <circle cx="24.54" cy="24.54" r="13.5" />
                      <circle cx="50" cy="14" r="13.5" />
                      <circle cx="75.46" cy="24.54" r="13.5" />
                    </clipPath>
                  </defs>

                  {/* Pure White Seamless Underlay Frame */}
                  <g fill="#FFFFFF">
                    <circle cx="50" cy="50" r="41" />
                    <circle cx="86" cy="50" r="16.5" />
                    <circle cx="75.46" cy="75.46" r="16.5" />
                    <circle cx="50" cy="86" r="16.5" />
                    <circle cx="24.54" cy="75.46" r="16.5" />
                    <circle cx="14" cy="50" r="16.5" />
                    <circle cx="24.54" cy="24.54" r="16.5" />
                    <circle cx="50" cy="14" r="16.5" />
                    <circle cx="75.46" cy="24.54" r="16.5" />
                  </g>

                  {/* Image clipped to organic scallop */}
                  <image
                    href={active.image}
                    width="100"
                    height="100"
                    preserveAspectRatio="xMidYMid slice"
                    clipPath={`url(#scallop-${active.id})`}
                  />
                </svg>
              </div>
            </div>

            {/* Top-Right Ambient Quote Watermark */}
            <Quote className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 md:top-6 md:right-6 w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 text-neutral-300/40 pointer-events-none" />

            {/* Author Meta Section (Responsive offset from the overlapping scallop avatar) */}
            <div className="pl-16 sm:pl-20 md:pl-24 mb-2 sm:mb-2.5 min-h-[36px] sm:min-h-[42px] flex flex-col justify-center">
              {/* Person Name in distinguished font / accent */}
              <h3
                className="text-lg sm:text-xl md:text-2xl font-serif font-bold tracking-tight mb-0.5"
                style={{ color: active.accent }}
              >
                {active.name}
              </h3>

              {/* Title / Role in clean uppercase */}
              <p className="text-[10px] sm:text-xs font-bold tracking-widest text-neutral-600 uppercase">
                {active.role}
              </p>
            </div>

            {/* Testimonial Quote Body - Responsive Typography */}
            <div className="relative z-10 pt-0.5 pb-0.5">
              <p className="text-xs sm:text-sm md:text-base lg:text-[17px] font-normal text-neutral-900 leading-relaxed italic">
                &ldquo;{active.quote}&rdquo;
              </p>
            </div>
          </div>

          {/* Minimal, Sleek Pagination Indicators */}
          <div className="flex items-center justify-center gap-2 mt-3 sm:mt-4">
            {TESTIMONIALS.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveIdx(idx)}
                className={`h-1.5 transition-all duration-300 rounded-full ${idx === activeIdx
                    ? 'w-8 bg-[#00D5DF] shadow-[0_0_10px_rgba(0,213,223,0.5)]'
                    : 'w-2.5 bg-neutral-700/80 hover:bg-neutral-500'
                  }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
