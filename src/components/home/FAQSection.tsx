'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  id: number;
  num: string;
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    id: 1,
    num: '01',
    question: 'Why choose Infidell Technology?',
    answer:
      'We provide specialized technical expertise, pre-vetted talent shortlists within 48–72 hours, and direct introductions to verified hiring decision-makers with zero automated filters.'
  },
  {
    id: 2,
    num: '02',
    question: 'How does Infidell match talent with hiring companies?',
    answer:
      'We match your verified technical skills, stack preferences, and compensation goals directly with engineering decision-makers, bypassing automated screening filters.'
  },
  {
    id: 3,
    num: '03',
    question: 'How quickly can employers receive candidate shortlists?',
    answer:
      'Employers typically receive pre-vetted, interview-ready candidate dossiers within 48 to 72 hours of finalizing role specifications.'
  },
  {
    id: 4,
    num: '04',
    question: 'How are candidate technical skills and credentials verified?',
    answer:
      'Our recruitment specialists conduct structured technical evaluations, system design assessments, and employment reference checks before introducing any candidate.'
  },
  {
    id: 5,
    num: '05',
    question: 'What roles and workplace models do you support?',
    answer:
      'We place senior engineers, AI/ML specialists, cloud architects, and tech executives across onsite, hybrid, and fully remote positions throughout the United States.'
  },
  {
    id: 6,
    num: '06',
    question: 'How does Infidell handle confidential executive searches?',
    answer:
      'Executive searches operate under strict NDAs with discreet outreach and comprehensive leadership assessments for Director, VP, and C-Suite roles.'
  },
  {
    id: 7,
    num: '07',
    question: 'Do you provide compensation and offer guidance?',
    answer:
      'Yes. We provide objective market benchmarking across base salaries, bonuses, and equity structures to help both sides reach competitive, equitable agreements.'
  },
  {
    id: 8,
    num: '08',
    question: 'What support is provided after an offer is accepted?',
    answer:
      'We support candidates and hiring managers with resignation planning, onboarding logistics, and ongoing check-ins throughout the first 90 days.'
  }
];

export function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="faq"
      className="py-16 sm:py-24 md:py-32 bg-[#050708] relative overflow-hidden border-t border-[#203536]/80"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-1/4 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-[#00D5DF]/10 rounded-full blur-[140px] sm:blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-[#38BDF8]/10 rounded-full blur-[130px] sm:blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

        {/* Master Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-[#102B50] dark:text-white leading-none mb-2 sm:mb-3">
            FAQ
          </h2>
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light tracking-tight text-[#102B50] dark:text-white leading-snug mb-2 sm:mb-2.5">
            Frequently Asked{' '}
            <span className="font-medium bg-gradient-to-r from-[#102B50] via-[#087FCB] to-[#00BFCB] dark:from-white dark:via-[#7DD3FC] dark:to-[#38BDF8] bg-clip-text text-transparent">
              Questions.
            </span>
          </h3>
          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
            Clear, concise answers about our placement services, hiring standards, and process.
          </p>
        </div>

        {/* Single Column Question & Answer Accordion */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen
                    ? 'bg-white dark:bg-[#0E1A1C] border-[#087FCB] dark:border-[#00D5DF]/70 shadow-[0_8px_30px_rgba(8,127,203,0.12)] dark:shadow-[0_0_30px_rgba(0,213,223,0.14)]'
                    : 'bg-white dark:bg-[#0C1517]/85 border-[#DCE5EF] dark:border-[#203536] hover:border-[#087FCB]/50 dark:hover:border-[#00D5DF]/40 hover:bg-[#F8FAFC] dark:hover:bg-[#0E1A1C]/50 shadow-sm'
                  }`}
              >
                {/* Question Trigger */}
                <button
                  type="button"
                  id={`faq-trigger-${faq.id}`}
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full py-4 sm:py-5 px-4 xs:px-5 sm:px-7 md:px-8 text-left flex items-center justify-between gap-3 sm:gap-4 focus:outline-none transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${faq.id}`}
                >
                  <div className="flex items-center gap-3.5 sm:gap-4 pr-2">
                    <span
                      className={`text-xs font-mono font-bold px-2.5 py-1 rounded-md border shrink-0 transition-colors ${isOpen
                          ? 'bg-[#087FCB]/10 dark:bg-[#00D5DF]/15 text-[#0369A1] dark:text-[#00D5DF] border-[#087FCB]/30 dark:border-[#00D5DF]/40'
                          : 'bg-slate-100 dark:bg-neutral-800 text-slate-800 dark:text-neutral-200 border-slate-300 dark:border-neutral-700'
                        }`}
                    >
                      {faq.num}
                    </span>
                    <span className="text-sm sm:text-base md:text-lg font-semibold text-[#102B50] dark:text-white tracking-tight leading-snug">
                      {faq.question}
                    </span>
                  </div>

                  <ChevronDown
                    className={`w-5 h-5 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#087FCB] dark:text-[#00D5DF]' : 'text-slate-400 dark:text-neutral-400'
                      }`}
                  />
                </button>

                {/* Answer Content - Smooth CSS Grid Transition */}
                <div
                  id={`faq-panel-${faq.id}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${faq.id}`}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 sm:px-8 pb-5 pt-3.5 text-xs sm:text-sm md:text-base text-[#334155] dark:text-neutral-300 leading-relaxed border-t border-[#E8EEF5] dark:border-[#203536]/70">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
