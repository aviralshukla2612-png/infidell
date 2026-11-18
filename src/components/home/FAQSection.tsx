'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: 'How does Infidell support candidates throughout their career journey?',
    answer:
      'Infidell provides high-touch, confidential career representation: ATS profile optimization, strategic interview briefings on corporate culture, and direct introductions to verified executive leadership across India.'
  },
  {
    question: 'How quickly can corporate employers receive vetted candidate shortlists?',
    answer:
      'For active requisitions, Infidell curates and delivers multi-tier vetted shortlists within 48 to 72 hours, complete with technical benchmark evaluations and verified compensation expectations.'
  },
  {
    question: 'How does the profile matching and credential verification process work?',
    answer:
      'Once your profile is submitted, our talent specialists conduct a multi-dimensional assessment of technical expertise, problem-solving depth, and leadership agility before coordinating direct hiring manager discussions.'
  },
  {
    question: 'Does registering with Infidell guarantee job placement?',
    answer:
      'Ethical transparency is our core foundation: no recruitment partner can ethically guarantee placement, as final selection rests with hiring managers. However, we ensure verified candidate representation directly to hiring decision-makers.'
  },
  {
    question: 'What industries, regions, and work models does Infidell support?',
    answer:
      'We represent professionals nationwide across India in IT, Cloud Infrastructure, Engineering, Fintech, HealthTech, and Corporate Leadership for on-site headquarters, hybrid workflows, and fully remote engagements.'
  }
];

export function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section 
      id="faq" 
      className="py-24 sm:py-32 bg-[#050708] relative overflow-hidden border-t border-[#203536]/80 select-none"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#00D5DF]/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[450px] h-[450px] bg-[#38BDF8]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header - Prominent Headline */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-light tracking-tight text-white leading-tight mb-4">
            Frequently Asked{' '}
            <span className="font-medium bg-gradient-to-r from-white via-[#7DD3FC] to-[#38BDF8] bg-clip-text text-transparent">
              Questions.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
            Clear, transparent guidance on our ethical placement standards, employer shortlisting velocity, and personalized career representation.
          </p>
        </div>

        {/* 5-Item Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#0E1A1C] border-[#00D5DF]/60 shadow-[0_0_25px_rgba(0,213,223,0.12)]'
                    : 'bg-[#0C1517]/80 border-[#203536] hover:border-[#00D5DF]/40'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full py-5 px-6 sm:px-8 text-left flex items-center justify-between gap-4 focus:outline-none transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold text-white pr-2 flex items-center gap-3">
                    <HelpCircle className={`w-4 h-4 shrink-0 transition-colors ${isOpen ? 'text-[#00D5DF]' : 'text-neutral-400'}`} />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#00D5DF]' : 'text-neutral-400'
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-8 pb-6 pt-1 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-[#203536]/60 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
