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
    id: 'linda-p',
    name: 'Linda P.',
    role: 'MARKETING DIRECTOR',
    outcome: 'Placed at High-Growth Fintech',
    companyBadge: 'Fintech Leadership',
    accent: '#A33B26', // Terracotta from user screenshot
    image: '/images/testimonials/avatar-1.jpg',
    rating: 5,
    quote:
      'Infidell completely redefined what working with a recruitment partner looks like. Within two weeks, I had direct conversations with executive leadership that aligned with my compensation goals and leadership aspirations.'
  },
  {
    id: 'marcus-c',
    name: 'Marcus C.',
    role: 'VP OF ENGINEERING',
    outcome: 'Enterprise Cloud Infrastructure',
    companyBadge: 'Qualcomm Ecosystem',
    accent: '#0284C7', // Sky Blue
    image: '/images/testimonials/avatar-2.jpg',
    rating: 5,
    quote:
      'The pre-screening caliber at Infidell is unlike any staffing firm we’ve engaged. Every single candidate shortlisted had the exact architectural depth and cultural agility our engineering teams demanded.'
  },
  {
    id: 'sarah-j',
    name: 'Sarah J.',
    role: 'HEAD OF TALENT ACQUISITION',
    outcome: 'Global HealthTech Partner',
    companyBadge: 'HealthTech Enterprise',
    accent: '#059669', // Emerald
    image: '/images/testimonials/avatar-3.jpg',
    rating: 5,
    quote:
      'In a hyper-competitive tech market, Infidell delivered vetted engineering shortlists in under 48 hours. Their transparent placement model has made them our primary executive search advisory.'
  },
  {
    id: 'david-k',
    name: 'David K.',
    role: 'LEAD CLOUD ARCHITECT',
    outcome: 'Placed at Fortune 100 Financial',
    companyBadge: 'Capital Markets Group',
    accent: '#D97706', // Amber
    image: '/images/testimonials/avatar-4.jpg',
    rating: 5,
    quote:
      'No algorithmic black holes or ghosting. My Infidell advisor mapped out interview strategy, compensation benchmarks, and contract negotiation with surgical precision from day one.'
  },
  {
    id: 'elena-r',
    name: 'Elena R.',
    role: 'CHIEF PEOPLE OFFICER',
    outcome: 'Scaling Enterprise SaaS',
    companyBadge: 'Global SaaS Group',
    accent: '#7C3AED', // Violet
    image: '/images/testimonials/avatar-5.jpg',
    rating: 5,
    quote:
      'What sets Infidell apart is ethical alignment and speed. They don’t flood our inbox with generic resumes; they present verified leaders who deliver immediate team impact and high retention.'
  }
];

export function TestimonialsSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  // Fast auto-advance every 1.8 seconds so it changes quickly and briskly
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 1800);
    return () => clearInterval(timer);
  }, []);

  const active = TESTIMONIALS[activeIdx];

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  return (
    <section 
      id="testimonials"
      className="min-h-screen flex flex-col justify-center py-10 sm:py-14 bg-[#050708] relative overflow-hidden border-t border-[#203536]/80 select-none"
    >
      {/* Dynamic Background: /testimonialbg.png */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        <Image
          src="/testimonialbg.png"
          alt="Testimonials Atmosphere Background"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Soft edge blending with neighbor sections while keeping the palm shadow aesthetic visible */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050708] via-transparent to-[#050708] opacity-65 pointer-events-none" />
      </div>

      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 w-[550px] h-[550px] bg-[#00D5DF]/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#38BDF8]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Header - Matching About Us Structure */}
        <div className="max-w-3xl mb-8 sm:mb-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-white leading-none mb-2.5 sm:mb-3">
            Testimonials
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-light tracking-tight text-white leading-snug mb-2 sm:mb-2.5">
            Voices of{' '}
            <span className="font-medium bg-gradient-to-r from-white via-[#7DD3FC] to-[#38BDF8] bg-clip-text text-transparent">
              Verified Success.
            </span>
          </h3>
          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
            Direct experiences from candidates placed in career-defining roles and enterprise partners who rely on Infidell for precision talent shortlists.
          </p>
        </div>

        {/* Featured Testimonial Card - Sized to fit comfortably on 1 screen */}
        <div className="max-w-4xl mx-auto pt-6 sm:pt-8 w-full">
          <div 
            key={active.id}
            onClick={handleNext}
            role="button"
            tabIndex={0}
            aria-label="Click to view next testimonial"
            className="relative bg-[#F4F5F7] text-neutral-900 rounded-[28px] sm:rounded-[36px] pt-8 sm:pt-10 pb-6 sm:pb-8 px-6 sm:px-10 md:px-12 shadow-2xl transition-all duration-300 animate-fadeIn cursor-pointer"
            style={{
              boxShadow: '0 30px 70px -15px rgba(0,0,0,0.8), 0 0 40px rgba(0,213,223,0.12)'
            }}
          >
            {/* Scalloped Flower Avatar overlapping top-left corner */}
            <div className="absolute -top-10 -left-3 sm:-top-14 sm:-left-5 md:-top-16 md:-left-6 z-20">
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 filter drop-shadow-[0_14px_30px_rgba(0,0,0,0.32)]">
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
            <Quote className="absolute top-6 right-6 sm:top-8 sm:right-8 w-10 h-10 sm:w-12 sm:h-12 text-neutral-300/40 pointer-events-none" />

            {/* Author Meta Section (Offset from the enlarged overlapping scallop avatar) */}
            <div className="pl-24 sm:pl-32 md:pl-36 mb-4 sm:mb-5 min-h-[44px] sm:min-h-[55px] flex flex-col justify-center">
              {/* Person Name in distinguished font / accent */}
              <h3 
                className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold tracking-tight mb-1"
                style={{ color: active.accent }}
              >
                {active.name}
              </h3>

              {/* Title / Role in clean uppercase */}
              <p className="text-xs sm:text-sm font-bold tracking-widest text-neutral-600 uppercase">
                {active.role}
              </p>
            </div>

            {/* Testimonial Quote Body - Ultra Clean & Minimal */}
            <div className="relative z-10 pt-1 pb-1">
              <p className="text-base sm:text-xl md:text-2xl font-normal text-neutral-900 leading-relaxed italic">
                &ldquo;{active.quote}&rdquo;
              </p>
            </div>
          </div>

          {/* Minimal, Sleek Pagination Indicators */}
          <div className="flex items-center justify-center gap-2 mt-5 sm:mt-6">
            {TESTIMONIALS.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveIdx(idx)}
                className={`h-1.5 transition-all duration-300 rounded-full ${
                  idx === activeIdx 
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
