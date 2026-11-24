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
    question: 'How does Infidell support candidates throughout the hiring process?',
    answer:
      'We provide personalized career guidance, technical resume optimization, interview briefings, and direct introductions to hiring decision-makers across US and global technology companies.',
    details: [
      {
        label: 'Profile Alignment',
        text: 'Tailoring resumes and portfolios to resonate with technical hiring managers.'
      },
      {
        label: 'Direct Introductions',
        text: 'Connecting directly with engineering and leadership decision-makers.'
      }
    ]
  },
  {
    id: 2,
    num: '02',
    question: 'What is the onboarding process for candidates joining Infidell’s network?',
    answer:
      'Candidates submit their professional background and resume online. Our advisory team reviews credentials, discusses career goals, and connects qualified profiles with relevant corporate openings.',
    details: [
      {
        label: 'Profile Submission',
        text: 'Online submission of technical experience, credentials, and resume.'
      },
      {
        label: 'Advisor Alignment',
        text: 'Structured evaluation of skills and alignment with active client mandates.'
      }
    ]
  },
  {
    id: 3,
    num: '03',
    question: 'How does Infidell curate candidate shortlists for corporate employers?',
    answer:
      'We deliver pre-screened candidate dossiers tailored to each organization’s technical stack, team culture, and delivery goals, providing interview-ready talent with confirmed availability.',
    details: [
      {
        label: 'Targeted Discovery',
        text: 'Sourcing across active and passive engineering and leadership networks.'
      },
      {
        label: 'Verified Readiness',
        text: 'Profiles confirmed for technical proficiency, cultural fit, and compensation expectations.'
      }
    ]
  },
  {
    id: 4,
    num: '04',
    question: 'How are candidate credentials and technical competencies verified?',
    answer:
      'Our technical specialists conduct structured competency reviews, system design evaluations, and professional reference checks before presenting candidates to hiring teams.',
    details: [
      {
        label: 'Technical Evaluation',
        text: 'Thorough review of system design, coding proficiency, and technical problem-solving.'
      },
      {
        label: 'Background Verification',
        text: 'Comprehensive verification of employment history, credentials, and references.'
      }
    ]
  },
  {
    id: 5,
    num: '05',
    question: 'What factors influence candidate placement outcomes?',
    answer:
      'Placement outcomes depend on client hiring requirements, role specifications, and candidate performance during interviews. Infidell ensures direct human representation and clear communication at every stage.',
    details: [
      {
        label: 'Direct Representation',
        text: 'Advocating candidate capabilities directly to hiring authorities without algorithmic filters.'
      },
      {
        label: 'Clear Communication',
        text: 'Timely debriefs and actionable feedback following client interviews.'
      }
    ]
  },
  {
    id: 6,
    num: '06',
    question: 'Which industry sectors and workplace models does Infidell support?',
    answer:
      'We specialize in technical and corporate recruitment across Cloud & DevOps, AI/ML, Full-Stack Engineering, FinTech, HealthTech, and Cybersecurity, supporting onsite, hybrid, and remote roles.',
    details: [
      {
        label: 'Specialized Sectors',
        text: 'Deep talent networks across software engineering, data, and technical management.'
      },
      {
        label: 'Workplace Models',
        text: 'Placement for corporate headquarters, hybrid schedules, and distributed teams.'
      }
    ]
  },
  {
    id: 7,
    num: '07',
    question: 'How does Infidell handle confidential executive searches?',
    answer:
      'Executive search mandates operate under strict non-disclosure agreements, employing discreet outreach and rigorous leadership evaluations for Director, VP, and C-suite roles.',
    details: [
      {
        label: 'Strict Confidentiality',
        text: 'Complete discretion and NDA compliance throughout the executive search.'
      },
      {
        label: 'Leadership Assessment',
        text: 'Evaluating strategic vision, organizational leadership, and executive presence.'
      }
    ]
  },
  {
    id: 8,
    num: '08',
    question: 'What guidance is provided for compensation and offer evaluation?',
    answer:
      'We provide objective market compensation benchmarking and offer structure analysis to help candidates and employers reach equitable, competitive agreements.',
    details: [
      {
        label: 'Market Benchmarking',
        text: 'Data-driven analysis of base compensation, equity packages, and benefits.'
      },
      {
        label: 'Offer Transition',
        text: 'Professional guidance on offer evaluation and transition logistics.'
      }
    ]
  },
  {
    id: 9,
    num: '09',
    question: 'How does Infidell support corporate partners during onboarding?',
    answer:
      'We coordinate closely with candidates and hiring managers through onboarding to facilitate smooth team integration and support lasting organizational retention.',
    details: [
      {
        label: 'Onboarding Alignment',
        text: 'Structured communication to foster early engagement and cultural fit.'
      },
      {
        label: 'Talent Continuity',
        text: 'Responsive partnership to address evolving hiring mandates.'
      }
    ]
  },
  {
    id: 10,
    num: '10',
    question: 'What follow-up occurs after an offer is accepted?',
    answer:
      'Our team assists with transition logistics, resignation planning, and periodic check-ins following the start date to ensure mutual satisfaction and sustained success.',
    details: [
      {
        label: 'Transition Guidance',
        text: 'Support during resignation, notice periods, and onboarding preparation.'
      },
      {
        label: 'Ongoing Touchpoints',
        text: 'Periodic reviews to confirm alignment and long-term satisfaction.'
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
            Direct, transparent guidance on our ethical placement standards, candidate advocacy, and corporate hiring workflows.
          </p>
        </div>

        {/* Single Column Question & Answer Accordion */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
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
                      className={`text-xs font-mono font-bold px-2.5 py-1 rounded-md border shrink-0 transition-colors ${
                        isOpen 
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
                    className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#087FCB] dark:text-[#00D5DF]' : 'text-slate-400 dark:text-neutral-400'
                    }`}
                  />
                </button>

                {/* Answer Content - Smooth CSS Grid Transition */}
                <div
                  id={`faq-panel-${faq.id}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${faq.id}`}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 sm:px-8 pb-6 pt-3 text-xs sm:text-sm md:text-base text-[#334155] dark:text-neutral-300 leading-relaxed border-t border-[#E8EEF5] dark:border-[#203536]/70">
                      <p className="mb-3">{faq.answer}</p>

                      {faq.details && (
                        <div className="mt-4 pt-4 border-t border-[#E8EEF5] dark:border-[#203536]/50 space-y-2.5">
                          {faq.details.map((detail, dIdx) => (
                            <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#475569] dark:text-neutral-400">
                              <span className="text-[#087FCB] dark:text-[#00D5DF] font-bold mt-0.5">•</span>
                              <span>
                                <strong className="text-[#102B50] dark:text-neutral-200 font-semibold">{detail.label}:</strong>{' '}
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
