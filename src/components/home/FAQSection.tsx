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
    question: 'How does Infidell support candidates throughout their career journey and executive placement?',
    answer:
      'Infidell functions as a personal executive career advisory partner rather than a transactional resume clearinghouse. From day one, candidates are paired with experienced recruitment advisors who thoroughly analyze career trajectories, deconstruct past architectural achievements, and rebuild technical resumes to clear strict applicant tracking systems (ATS). We conduct in-depth mock technical rounds, guide negotiation strategies, benchmark market compensation across premier US technology hubs (Silicon Valley, New York, Austin, Seattle, Boston), and arrange high-trust introductions directly with CTOs, Engineering Directors, and VP-level hiring authorities.',
    details: [
      {
        label: 'Strategic Profile Architecture',
        text: 'Rebuilding technical resumes and code portfolios to pass algorithmic filters and resonate with hiring managers.'
      },
      {
        label: 'Direct Executive Access',
        text: 'Bypassing generic HR portals to pitch your capabilities directly to senior technology and business leaders across Silicon Valley, New York City, Austin, Seattle, Boston, and nationwide remote networks.'
      }
    ]
  },
  {
    id: 2,
    num: '02',
    question: 'Are there any registration, assessment, interview, or placement charges for candidates?',
    answer:
      'Absolutely not. Infidell operates under uncompromising ethical recruitment principles: 100% of our candidate advisory, resume evaluation, technical screening, and placement services are completely free of charge to job seekers. We will never ask for registration fees, interview security deposits, training costs, or commission cuts from your hard-earned salary. Our operations and advisory engagements are fully retained and funded by our vetted corporate employer partners who value our precision talent acquisition standards.',
    details: [
      {
        label: 'Zero Candidate Fees',
        text: 'No upfront costs, hidden deductions, or recurring fees at any stage of the advisory lifecycle.'
      },
      {
        label: 'Protected Compensation',
        text: '100% of your offered CTC, joining bonuses, and equity grants remain strictly yours without agency salary deductions.'
      }
    ]
  },
  {
    id: 3,
    num: '03',
    question: 'How does Infidell deliver vetted candidate shortlists for corporate employers?',
    answer:
      'For active engineering, technical architecture, and leadership requisitions, Infidell curates and delivers multi-tier pre-screened candidate dossiers tailored to each organizational culture. Because we maintain an active, relationship-driven pipeline of passive senior talent and pre-screened specialists, our clients receive interview-ready profiles complete with deep technical evaluation scorecards, confirmed availability, location preferences, and pre-aligned compensation expectations.',
    details: [
      {
        label: 'Rigorous Candidate Curation',
        text: 'Immediate candidate curation for critical hiring demands without sacrificing technical screening rigor.'
      },
      {
        label: 'Pre-Aligned Readiness',
        text: 'Every submitted candidate has confirmed availability, verified notice timeline (immediate, standard 2-week US transition, or custom executive start dates), and pre-negotiated compensation expectations.'
      }
    ]
  },
  {
    id: 4,
    num: '04',
    question: 'What is Infidell’s technical screening and profile credential verification methodology?',
    answer:
      'We do not rely on keyword matching or automated scrapers. Every candidate submitted to an enterprise client undergoes a comprehensive multi-stage vetting process conducted by senior technical specialists. This includes architectural design discussions, hands-on coding and problem-solving evaluations, leadership competency appraisals, and strict past performance verifications. Before an offer is extended, we conduct rigorous background checks conforming to statutory ISO and enterprise governance compliance protocols.',
    details: [
      {
        label: 'Multi-Tier Technical Assessment',
        text: 'Comprehensive evaluation of system design, code quality, scalability paradigms, and technical leadership.'
      },
      {
        label: 'Statutory Due Diligence',
        text: 'Exhaustive verification of employment history, educational credentials, payroll records, and references.'
      }
    ]
  },
  {
    id: 5,
    num: '05',
    question: 'Does registering or interviewing through Infidell guarantee a job placement?',
    answer:
      'Ethical transparency and intellectual honesty are fundamental to our brand ethos. No professional recruitment agency can legitimately guarantee job placement, as hiring decisions ultimately rest with client interview panels and organizational requirements. What we do guarantee is uncompromising advocacy: your profile will be personally championed before decision-makers without automated algorithmic gatekeeping, and you will receive comprehensive debriefs, honest market feedback, and persistent representation across high-growth opportunities.',
    details: [
      {
        label: 'Uncompromising Advocacy',
        text: 'Direct human representation to hiring authorities with full transparency regarding role requirements and hiring probabilities.'
      },
      {
        label: 'Constructive Feedback Loops',
        text: 'Continuous interview debriefs and actionable feedback to continuously hone your interview performance and market readiness.'
      }
    ]
  },
  {
    id: 6,
    num: '06',
    question: 'What tech domains, industry sectors, and workplace arrangements does Infidell cover across North America and global markets?',
    answer:
      'Infidell delivers talent advisory and recruitment across high-impact tech and corporate sectors, including Cloud Infrastructure & DevOps, Artificial Intelligence & Machine Learning, Full-Stack Enterprise Engineering, FinTech & Capital Markets, HealthTech, Cyber Security, and Executive Management. We support on-campus corporate headquarters, flexible hybrid arrangements, and fully distributed remote engineering teams across major US technology centers, including Silicon Valley, New York City, Austin, Seattle, Boston, Chicago, and nationwide remote.',
    details: [
      {
        label: 'Comprehensive Tech Coverage',
        text: 'Deep domain talent pools spanning Cloud, AI/ML, Microservices, Data Engineering, and Product Leadership.'
      },
      {
        label: 'Flexible Workplace Models',
        text: 'Expert matching for onsite headquarters, distributed remote workforces, and hybrid operational schedules.'
      }
    ]
  },
  {
    id: 7,
    num: '07',
    question: 'How does Infidell handle confidential executive searches and leadership mandates?',
    answer:
      'When organizations require critical executive leadership—such as Chief Technology Officers, Vice Presidents of Engineering, Heads of Product, or Chief Information Security Officers—discretion is paramount. Our Executive Search practice operates under strict non-disclosure agreements (NDAs) to protect sensitive organizational changes and proprietary business strategies. We conduct discreet passive candidate headhunting, high-touch executive cultural alignment interviews, and thorough leadership reference evaluations.',
    details: [
      {
        label: 'Strict NDA Governance',
        text: 'Complete organizational and candidate confidentiality maintained throughout the executive search lifecycle.'
      },
      {
        label: 'Bespoke Executive Assessment',
        text: 'Evaluating strategic vision, team mentorship capacity, governance experience, and board-level communication skills.'
      }
    ]
  },
  {
    id: 8,
    num: '08',
    question: 'What candidate support is provided for executive compensation negotiations, equity structures, and career transitions?',
    answer:
      'Navigating executive career transitions, competitive equity packages (RSUs, ISOs, double-trigger vesting), signing bonuses, and non-compete agreements in the US tech market requires specialized advisory. Infidell provides strategic counsel to ensure your total compensation package reflects your true market value. Our advisors work closely with candidates to model offer trade-offs, evaluate startup equity risk profiles, and align compensation with Fortune 500 and VC-backed benchmark standards.',
    details: [
      {
        label: 'Equity & Compensation Structuring',
        text: 'Comprehensive evaluation of base salary, performance equity (RSUs/options), executive signing bonuses, and 401(k) match structures.'
      },
      {
        label: 'Executive Transition Roadmaps',
        text: 'Data-driven negotiation guidance, managing counter-offers, non-compete compliance, and seamless executive onboarding.'
      }
    ]
  },
  {
    id: 9,
    num: '09',
    question: 'What ongoing support and hiring safeguards do you provide to corporate employers?',
    answer:
      'To support lasting team stability and protect hiring momentum, Infidell works closely with enterprise partners throughout the initial onboarding period. If a placement requires realignment or an unexpected departure occurs during early tenure, our dedicated search team prioritizes re-engaging our talent network to source qualified replacement candidates and maintain team delivery schedules.',
    details: [
      {
        label: 'Proactive Onboarding Support',
        text: 'Structured check-ins with candidates and hiring managers to promote long-term retention and cultural alignment.'
      },
      {
        label: 'Dedicated Search Continuity',
        text: 'Prioritized talent re-sourcing support to maintain organizational momentum for critical projects.'
      }
    ]
  },
  {
    id: 10,
    num: '10',
    question: 'How does Infidell support placed candidates and hiring teams after offer acceptance?',
    answer:
      'At Infidell, the placement process does not terminate upon offer letter signing. We stay actively engaged through the critical pre-onboarding resignation phase, countering counter-offers and mitigating candidate drop-off risks. Following joining day, our team conducts structured 30-day, 60-day, and 90-day post-placement touchpoints with both the candidate and the hiring manager to ensure seamless cultural integration, team harmony, and sustained mutual career satisfaction.',
    details: [
      {
        label: 'Pre-Onboarding Continuity',
        text: 'Proactive candidate engagement to prevent counter-offer attrition and ensure clear transition alignment.'
      },
      {
        label: 'Structured Milestone Check-Ins',
        text: 'Ongoing 30/60/90-day post-joining alignment reviews to ensure long-term retention and professional growth.'
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
                  className="w-full py-5 px-6 sm:px-8 text-left flex items-center justify-between gap-4 focus:outline-none transition-colors cursor-pointer"
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
