'use client';

import React, { useState, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

export function TestimonialsSection() {
  const t = useTranslations('Testimonials');
  const [currentIdx, setCurrentIdx] = useState(0);

  const testimonials = [
    {
      text: t('t1Text'),
      author: t('t1Author'),
      title: t('t1Title'),
      type: 'Employer Partner'
    },
    {
      text: t('t2Text'),
      author: t('t2Author'),
      title: t('t2Title'),
      type: 'Placed Candidate'
    },
    {
      text: t('t3Text'),
      author: t('t3Author'),
      title: t('t3Title'),
      type: 'Corporate HR Head'
    }
  ];

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIdx];

  return (
    <section className="py-20 lg:py-28 bg-[#080B0E] relative border-t border-[#202A30] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A0D10] border border-[#00E5F0]/30 text-[11px] font-bold text-[#00E5F0] tracking-widest uppercase mb-3">
            {t('badge')}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t('title')}
          </h2>
          <p className="text-sm sm:text-base text-[#AEB8C2] mt-2">
            {t('subtitle')}
          </p>
        </div>

        {/* Carousel Card */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-[#202A30] relative shadow-2xl">
            <Quote className="w-12 h-12 text-[#00E5F0]/20 absolute top-8 right-8 pointer-events-none" />

            {/* Stars */}
            <div className="flex items-center space-x-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#00E5F0] text-[#00E5F0]" />
              ))}
            </div>

            <p className="text-base sm:text-xl text-white font-medium italic leading-relaxed min-h-[90px] mb-8">
              &ldquo;{current.text}&rdquo;
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-6 border-t border-[#202A30] gap-4">
              <div>
                <h4 className="text-base font-bold text-white">
                  {current.author}
                </h4>
                <p className="text-xs text-[#00E5F0] font-medium">
                  {current.title}
                </p>
                <span className="text-[10px] text-[#AEB8C2] mt-0.5 block">
                  {current.type}
                </span>
              </div>

              {/* Navigation buttons */}
              <div className="flex items-center space-x-3">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full bg-[#0A0D10] border border-[#202A30] flex items-center justify-center text-[#AEB8C2] hover:text-white hover:border-[#00E5F0] transition-colors"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-xs font-semibold text-[#AEB8C2]">
                  {currentIdx + 1} / {testimonials.length}
                </span>
                <button
                  type="button"
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full bg-[#0A0D10] border border-[#202A30] flex items-center justify-center text-[#AEB8C2] hover:text-white hover:border-[#00E5F0] transition-colors"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

