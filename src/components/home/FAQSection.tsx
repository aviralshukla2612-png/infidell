'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  id: number;
  num: string;
  question: string;
  answer: string;
  details?: {
    label: string;
    text: string;
  }[];
}

const FAQS: FAQItem[] = [
  {
    id: 1,
    num: '01',
    question: 'How does Infidell support candidates throughout their career journey?',
    answer:
      'Infidell provides high-touch, confidential career representation: ATS profile optimization, strategic interview briefings on corporate culture, compensation benchmarking against verified industry standards, and direct introductions to verified engineering and executive leadership across India.',
    details: [
      {
        label: 'Profile Architecture',
        text: 'Rebuilding technical resumes to clear strict automated enterprise ATS filters.'
      },
      {
        label: 'Direct Leadership Access',
        text: 'Submissions are delivered directly to CTOs and hiring managers across Bengaluru, Pune, Hyderabad, Gurugram, and Mumbai.'
      }
    ]
  },
  {
    id: 2,
    num: '02',
    question: 'Are there any registration, assessment, or placement charges for candidates?',
    answer:
      'Never. Infidell operates under strict ethical recruitment standards. We never charge job seekers any fees for resume evaluations, portal registration, skill assessments, or job placement. Our professional advisory fees are solely sponsored by our verified corporate hiring partners.',
    details: [
      {
        label: '100% Free for Candidates',
        text: 'Zero candidate fees for profile reviews, interviews, or offer placement.'
      },
      {
        label: 'No Salary Deductions',
        text: 'We never take commissions from your offered CTC, signing bonus, or salary.'
      }
    ]
  },
  {
    id: 3,
    num: '03',
    question: 'How quickly can corporate employers receive vetted candidate shortlists?',
    answer:
      'For active technical and leadership requisitions, Infidell curates and delivers multi-tier vetted shortlists within 48 to 72 hours, complete with technical benchmark evaluations, verified notice periods (15/30/60 days), and transparent compensation expectations.',
    details: [
      {
        label: '48–72h Turnaround',
        text: 'Rapid delivery of technical scorecards and candidate dossiers for active mandates.'
      },
      {
        label: 'Replacement Assurance',
        text: 'Full placement continuity guarantees to safeguard corporate hiring investments.'
      }
    ]
  },
  {
    id: 4,
    num: '04',
    question: 'How does the profile matching and credential verification process work?',
    answer:
      'Once your profile is submitted, our talent specialists conduct a multi-dimensional assessment of technical expertise, problem-solving depth, and leadership agility before coordinating direct hiring manager discussions without automated filtering.',
    details: [
      {
        label: 'Technical Review',
        text: 'In-depth assessment of architectural decision-making, system complexity, and domain depth.'
      },
      {
        label: 'Background Verification',
        text: 'Pre-cleared credential verification adhering to enterprise governance and statutory compliance.'
      }
    ]
  },
  {
    id: 5,
    num: '05',
    question: 'Does registering with Infidell guarantee job placement?',
    answer:
      'Ethical transparency is our core foundation: no recruitment partner can ethically guarantee placement, as final selection rests with hiring managers. However, we ensure verified candidate representation directly to hiring decision-makers with zero automated filtering.',
    details: [
      {
        label: 'Ethical Advisory Code',
        text: 'Radical honesty regarding hiring probabilities, market compensation, and role fit.'
      },
      {
        label: 'Interview Debriefs',
        text: 'Constructive post-interview feedback to maximize your chances across evaluation rounds.'
      }
    ]
  },
  {
    id: 6,
    num: '06',
    question: 'What industries, regions, and work models does Infidell support across India?',
    answer:
      'We represent professionals nationwide across India in IT, Cloud Infrastructure, Engineering, Fintech, HealthTech, and Corporate Leadership for on-site headquarters, hybrid workflows, and fully remote engagements across Bengaluru, Pune, Hyderabad, Gurugram, Mumbai, and Noida.',
    details: [
      {
        label: 'Key Tech Hubs',
        text: 'Established corporate hiring networks spanning Bengaluru, Pune, Hyderabad, Delhi NCR, and Mumbai.'
      },
      {
        label: 'Workplace Models',
        text: 'Full support for hybrid, on-site campus, and fully distributed remote positions.'
      }
    ]
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
      className="py-16 sm:py-24 md:py-32 bg-[#050708] relative overflow-hidden border-t border-[#203536]/80 select-none"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-1/4 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-[#00D5DF]/10 rounded-full blur-[140px] sm:blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-[#38BDF8]/10 rounded-full blur-[130px] sm:blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Master Section Header - Consistent with About Us & Testimonials */}
        <div className="max-w-3xl mb-10 sm:mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white leading-none mb-2 sm:mb-3">
            FAQ
          </h2>
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light tracking-tight text-white leading-snug mb-2 sm:mb-2.5">
            Frequently Asked{' '}
            <span className="font-medium bg-gradient-to-r from-white via-[#7DD3FC] to-[#38BDF8] bg-clip-text text-transparent">
              Questions.
            </span>
          </h3>
          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
            Direct, transparent guidance on our ethical placement standards, candidate advocacy, and corporate hiring workflows.
          </p>
        </div>

        {/* Single Column Question & Answer Accordion in Dark Theme */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#0E1A1C] border-[#00D5DF]/70 shadow-[0_0_30px_rgba(0,213,223,0.14)]'
                    : 'bg-[#0C1517]/85 border-[#203536] hover:border-[#00D5DF]/40 hover:bg-[#0E1A1C]/50'
                }`}
              >
                {/* Question Trigger */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full py-5 px-6 sm:px-8 text-left flex items-center justify-between gap-4 focus:outline-none transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5 sm:gap-4 pr-2">
                    <span 
                      className={`text-xs font-mono font-bold px-2.5 py-1 rounded-md border shrink-0 transition-colors ${
                        isOpen 
                          ? 'bg-[#00D5DF]/15 text-[#00D5DF] border-[#00D5DF]/40' 
                          : 'bg-neutral-800/80 text-neutral-400 border-neutral-700/60'
                      }`}
                    >
                      {faq.num}
                    </span>
                    <span className="text-sm sm:text-base md:text-lg font-medium text-white tracking-tight leading-snug">
                      {faq.question}
                    </span>
                  </div>

                  <ChevronDown
                    className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#00D5DF]' : 'text-neutral-400'
                    }`}
                  />
                </button>

                {/* Answer Content - Smooth CSS Grid Transition */}
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 sm:px-8 pb-6 pt-3 text-xs sm:text-sm md:text-base text-neutral-300 leading-relaxed border-t border-[#203536]/70">
                      <p className="mb-3">{faq.answer}</p>

                      {faq.details && (
                        <div className="mt-4 pt-4 border-t border-[#203536]/50 space-y-2">
                          {faq.details.map((detail, dIdx) => (
                            <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-400">
                              <span className="text-[#00D5DF] font-bold mt-0.5">•</span>
                              <span>
                                <strong className="text-neutral-200 font-semibold">{detail.label}:</strong>{' '}
                                {detail.text}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
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
