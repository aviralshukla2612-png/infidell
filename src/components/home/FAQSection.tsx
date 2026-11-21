'use client';

import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  HelpCircle,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';

interface HighlightItem {
  title: string;
  desc: string;
}

interface DetailedSection {
  title: string;
  points: {
    label: string;
    text: string;
  }[];
}

interface FAQItem {
  id: number;
  num: string;
  navTitle: string;
  category: string;
  question: string;
  summary: string;
  sections: DetailedSection[];
  highlightsHeader: string;
  highlights: HighlightItem[];
}

const FAQS: FAQItem[] = [
  {
    id: 1,
    num: '01',
    navTitle: 'Candidate Career Advocacy',
    category: 'Candidate Track',
    question: 'How does Infidell support candidates throughout their career journey?',
    summary:
      'Infidell provides high-touch, confidential career representation designed to advance senior technical and leadership professionals. Here is a detailed breakdown of our candidate advocacy framework:',
    sections: [
      {
        title: '1. Profile Architecture & ATS Optimization',
        points: [
          {
            label: 'Resume & Digital Alignment',
            text: 'Restructuring technical credentials, architectural achievements, and leadership impact to clear strict automated enterprise ATS filters.'
          },
          {
            label: 'Compensation Benchmarking',
            text: 'Data-backed salary, equity (ESOPs), and bonus guidance reflecting current tier-1 Indian tech market standards.'
          }
        ]
      },
      {
        title: '2. Direct Engineering Leadership Access',
        points: [
          {
            label: 'No Algorithmic Black Holes',
            text: 'Submissions are presented directly to CTOs, VPs of Engineering, and verified hiring decision-makers across Bengaluru, Pune, Hyderabad, Gurugram, and Mumbai.'
          },
          {
            label: 'Interview Culture Briefings',
            text: 'Tailored strategic briefings on organizational culture, tech stacks, and leadership expectations before every interview round.'
          }
        ]
      }
    ],
    highlightsHeader: 'Verified Standards & Safeguards',
    highlights: [
      {
        title: 'Zero Candidate Placement Fees',
        desc: '100% free candidate career advisory backed by ethical search guidelines.'
      },
      {
        title: 'Direct Hiring Decision-Makers',
        desc: 'Personal introductions to verified enterprise leaders with zero keyword screening.'
      },
      {
        title: 'Statutory Confidentiality',
        desc: 'Full NDA protection for passive candidates currently employed in active leadership roles.'
      }
    ]
  },
  {
    id: 2,
    num: '02',
    navTitle: 'Zero Placement Fees Guarantee',
    category: 'Ethics & Fees',
    question: 'Are there any registration, assessment, or placement charges for candidates?',
    summary:
      'Ethical transparency is the founding principle of Infidell Technology LLP. Job seekers are never charged any fees under any circumstance:',
    sections: [
      {
        title: '1. Strictly Enterprise-Sponsored Advisory',
        points: [
          {
            label: '100% Free for Job Seekers',
            text: 'We never charge candidates for resume evaluations, portal registration, skill assessments, or job placement.'
          },
          {
            label: 'Corporate Retainer Model',
            text: 'All advisory and search fees are solely compensated by our verified corporate and startup hiring partners upon successful placement.'
          }
        ]
      },
      {
        title: '2. Protection from Fraudulent Recruitment Practices',
        points: [
          {
            label: 'No Hidden Deductions',
            text: 'We never deduct commissions from your offered CTC, signing bonus, or initial salary checks.'
          },
          {
            label: 'Official Communication',
            text: 'All interview schedules and offer letters originate directly from verified corporate hiring channels.'
          }
        ]
      }
    ],
    highlightsHeader: 'Compliance Highlights',
    highlights: [
      {
        title: 'Statutory Compliance',
        desc: 'Registered Indian LLP strictly abiding by ethical executive search codes.'
      },
      {
        title: 'Zero Security Deposits',
        desc: 'We will never request security deposits, training charges, or processing fees.'
      },
      {
        title: 'Transparent CTC Benchmarking',
        desc: 'Full clarity on fixed, variable, and equity compensation structures.'
      }
    ]
  },
  {
    id: 3,
    num: '03',
    navTitle: '48–72h Corporate Hiring SLA',
    category: 'Enterprise Track',
    question: 'How quickly can corporate employers receive vetted candidate shortlists?',
    summary:
      'We eliminate sluggish hiring cycles by deploying pre-screened talent shortlists within strict enterprise timelines. Here is how our delivery pipeline operates:',
    sections: [
      {
        title: '1. Accelerated Shortlisting Timeline',
        points: [
          {
            label: '48 to 72-Hour Delivery',
            text: 'For active engineering, cloud, and executive mandates, multi-tier evaluated candidate shortlists are delivered within 2 to 3 business days.'
          },
          {
            label: 'Verified Notice Periods',
            text: 'Immediate clarity on 15, 30, or 60-day notice periods and buyout feasibility to avoid offer dropouts.'
          }
        ]
      },
      {
        title: '2. Replacement Guarantee & Risk Mitigation',
        points: [
          {
            label: 'Rigorous Technical Screening',
            text: 'Candidates undergo domain evaluations and behavioral alignment checks before appearing on your shortlist.'
          },
          {
            label: 'Placement Continuity',
            text: 'Comprehensive replacement assurance on full-time hires to safeguard corporate recruitment investments.'
          }
        ]
      }
    ],
    highlightsHeader: 'Enterprise Delivery Metrics',
    highlights: [
      {
        title: '72-Hour Verified SLA',
        desc: 'Precision shortlists with technical scorecards and compensation expectations.'
      },
      {
        title: 'Pre-Screened Talent Pipelines',
        desc: 'Active databases of vetted architects, engineering leaders, and data scientists.'
      },
      {
        title: 'Dedicated Account Executive',
        desc: 'Single point of contact coordinating interviews and feedback loops.'
      }
    ]
  },
  {
    id: 4,
    num: '04',
    navTitle: 'Credential & Skill Vetting',
    category: 'Verification Track',
    question: 'How does the profile matching and credential verification process work?',
    summary:
      'Our verification architecture combines domain-specific human evaluation with multi-factor credential checks. Key stages include:',
    sections: [
      {
        title: '1. Deep Domain Evaluation',
        points: [
          {
            label: 'Technical Architecture Review',
            text: 'Assessing code craft, distributed systems complexity, and architectural decision-making depth.'
          },
          {
            label: 'Leadership Resonance',
            text: 'Evaluating cross-functional stakeholder management, product velocity, and mentorship capabilities.'
          }
        ]
      },
      {
        title: '2. Credential & Background Due Diligence',
        points: [
          {
            label: 'Employment Verification',
            text: 'Thorough cross-referencing of tenure, past mandates, and formal employment history.'
          },
          {
            label: 'Statutory Document Clearance',
            text: 'Proper background checks aligning with corporate governance and ISO compliance standards.'
          }
        ]
      }
    ],
    highlightsHeader: 'Verification Safeguards',
    highlights: [
      {
        title: 'Multi-Dimensional Assessment',
        desc: 'Holistic review of technical depth, cultural fit, and career goals.'
      },
      {
        title: 'Zero Algorithm Filtering',
        desc: 'Human recruiters review every qualified submission.'
      },
      {
        title: 'Verified Work History',
        desc: 'Pre-cleared background validation before final executive interviews.'
      }
    ]
  },
  {
    id: 5,
    num: '05',
    navTitle: 'Placement Transparency & Ethics',
    category: 'Ethics & Standards',
    question: 'Does registering with Infidell guarantee job placement?',
    summary:
      'We believe in radical honesty: no recruitment firm can ethically guarantee job offers, as final hiring decisions rest with partner enterprises:',
    sections: [
      {
        title: '1. Ethical Representation Policy',
        points: [
          {
            label: 'No False Promises',
            text: 'We do not make deceptive placement guarantees. Hiring managers make the final hiring determination based on interview performance.'
          },
          {
            label: 'Advocacy Commitment',
            text: 'We guarantee that every qualified candidate profile receives direct executive review without being buried in keyword filters.'
          }
        ]
      },
      {
        title: '2. Maximizing Interview Success Rates',
        points: [
          {
            label: 'Targeted Opportunities',
            text: 'You are only submitted to roles that precisely match your verified compensation, seniority, and tech stack criteria.'
          },
          {
            label: 'Continuous Feedback',
            text: 'Transparent debriefs after each round to help you adapt and succeed in subsequent evaluations.'
          }
        ]
      }
    ],
    highlightsHeader: 'Code of Ethics',
    highlights: [
      {
        title: 'Ethical Advisory Code',
        desc: '100% honesty regarding hiring probabilities and market realities.'
      },
      {
        title: 'Direct Submissions',
        desc: 'Direct visibility to VP of Engineering and HR Leadership.'
      },
      {
        title: 'Structured Debriefs',
        desc: 'Constructive post-interview guidance after every evaluation round.'
      }
    ]
  },
  {
    id: 6,
    num: '06',
    navTitle: 'Pan-India Industry Coverage',
    category: 'Coverage & Regions',
    question: 'What industries, regions, and work models does Infidell support across India?',
    summary:
      'Infidell represents specialized talent and enterprise partners across major Indian commercial ecosystems. Coverage spans:',
    sections: [
      {
        title: '1. Core Industry Verticals',
        points: [
          {
            label: 'Information Technology & Cloud',
            text: 'Cloud Architecture, DevOps, Cybersecurity, and Distributed Systems.'
          },
          {
            label: 'Fintech & Enterprise SaaS',
            text: 'High-frequency trading, banking infrastructure, and B2B SaaS platforms.'
          },
          {
            label: 'AI & Data Science',
            text: 'Generative AI, LLM fine-tuning, and scalable enterprise data engineering.'
          }
        ]
      },
      {
        title: '2. Geographic Hubs & Work Models',
        points: [
          {
            label: 'Major Tech Hubs',
            text: 'Deep hiring networks in Bengaluru, Pune, Hyderabad, Gurugram, Noida, and Mumbai.'
          },
          {
            label: 'Flexible Engagements',
            text: 'Supporting on-site campus headquarters, hybrid models, and full-time remote roles.'
          }
        ]
      }
    ],
    highlightsHeader: 'Geographic & Domain Footprint',
    highlights: [
      {
        title: 'Nationwide Tech Reach',
        desc: 'Established corporate connections in all top-tier Indian tech hubs.'
      },
      {
        title: 'Remote & Hybrid Flexibility',
        desc: 'Matching candidates with verified flexible work arrangements.'
      },
      {
        title: 'Cross-Sector Expertise',
        desc: 'Coverage from early-stage unicorns to Fortune 500 multinationals.'
      }
    ]
  }
];

export function FAQSection() {
  const [activeId, setActiveId] = useState(1);

  const activeFAQ = FAQS.find((faq) => faq.id === activeId) || FAQS[0];

  return (
    <section 
      id="faq" 
      className="py-16 sm:py-24 md:py-32 bg-[#050708] relative overflow-hidden border-t border-[#203536]/80 select-none"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-1/4 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-[#00D5DF]/10 rounded-full blur-[140px] sm:blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-[#38BDF8]/10 rounded-full blur-[130px] sm:blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Master Section Header - Consistent with About Us & Testimonials */}
        <div className="max-w-3xl mb-8 sm:mb-12 md:mb-14">
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
            Direct, transparent analysis of our ethical placement standards, candidate advocacy, and corporate shortlisting models.
          </p>
        </div>

        {/* Master Showcase Grid: Left Question Stack + Right Rich White Card (Image 1 Style) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Left Column (4 cols on lg, 5 on xl): Vertical Question Cards Navigation */}
          <div className="lg:col-span-4 space-y-3">
            
            {/* Horizontal scroll on mobile, vertical stack on desktop */}
            <div className="flex lg:flex-col gap-2.5 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 scrollbar-none">
              {FAQS.map((faq) => {
                const isActive = activeId === faq.id;
                return (
                  <button
                    key={faq.id}
                    type="button"
                    onClick={() => setActiveId(faq.id)}
                    className={`text-left p-3.5 sm:p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between gap-3 shrink-0 lg:w-full min-w-[240px] sm:min-w-[280px] lg:min-w-0 cursor-pointer ${
                      isActive
                        ? 'bg-[#0E1A1C] border-[#00D5DF] shadow-[0_0_20px_rgba(0,213,223,0.18)] text-white'
                        : 'bg-[#0C1517]/80 border-[#203536] text-neutral-400 hover:text-white hover:border-[#00D5DF]/40 hover:bg-[#0E1A1C]/50'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span 
                        className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded border shrink-0 ${
                          isActive
                            ? 'bg-[#00D5DF]/15 text-[#00D5DF] border-[#00D5DF]/30'
                            : 'bg-neutral-800/80 text-neutral-400 border-neutral-700/60'
                        }`}
                      >
                        {faq.num}
                      </span>
                      <div className="truncate">
                        <span className="block text-[10px] font-bold uppercase tracking-wider text-neutral-500 truncate">
                          {faq.category}
                        </span>
                        <span className={`block text-xs sm:text-sm font-semibold truncate ${isActive ? 'text-white' : 'text-neutral-300'}`}>
                          {faq.navTitle}
                        </span>
                      </div>
                    </div>
                    
                    <ChevronRight 
                      className={`w-4 h-4 shrink-0 transition-transform ${
                        isActive ? 'text-[#00D5DF] translate-x-0.5' : 'text-neutral-500'
                      }`} 
                    />
                  </button>
                );
              })}
            </div>

            {/* Quick helper note */}
            <div className="hidden lg:flex items-center justify-between px-3 py-2 text-[11px] text-neutral-500 border-t border-[#203536]/50 mt-4">
              <span>Select any question to view analysis</span>
              <span className="text-[#00D5DF] font-mono">6 Insights</span>
            </div>

          </div>

          {/* Right Column (8 cols on lg, 7 on xl): Pristine White Detailed Card (Image 1 Aesthetic) */}
          <div className="lg:col-span-8 w-full">
            <div 
              key={activeFAQ.id}
              className="bg-white text-neutral-900 rounded-[28px] sm:rounded-[36px] p-6 sm:p-9 md:p-11 shadow-2xl relative overflow-hidden border border-neutral-200/90 transition-all duration-300"
              style={{
                boxShadow: '0 30px 70px -15px rgba(0,0,0,0.8), 0 0 40px rgba(0,213,223,0.1)'
              }}
            >
              {/* Soft Atmospheric Pastel Gradient in Top-Right (matching Image 1) */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-sky-200/40 via-sky-100/20 to-transparent pointer-events-none rounded-tr-[36px]" />

              {/* Top Meta Bar: Category + Explore/Badge */}
              <div className="relative z-10 flex items-center justify-between gap-3 mb-4 sm:mb-5">
                <span className="text-[11px] sm:text-xs font-mono font-bold tracking-widest text-neutral-500 uppercase px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200">
                  {activeFAQ.category} · {activeFAQ.num}
                </span>

                <div className="text-xs font-semibold text-neutral-600 hover:text-neutral-900 inline-flex items-center gap-1.5 cursor-default">
                  <span className="w-2 h-2 rounded-full bg-[#00D5DF]" />
                  <span>Verified Standard</span>
                </div>
              </div>

              {/* Main Headline: Bold & Prominent (exact Image 1 layout) */}
              <h3 className="relative z-10 text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-neutral-900 tracking-tight leading-[1.2] mb-3 sm:mb-4">
                {activeFAQ.question}
              </h3>

              {/* Summary / Lead Paragraph */}
              <p className="relative z-10 text-sm sm:text-base text-neutral-600 leading-relaxed font-normal mb-5 sm:mb-6">
                {activeFAQ.summary}
              </p>

              {/* Subtle Horizontal Divider */}
              <hr className="relative z-10 border-neutral-200 my-5 sm:my-7" />

              {/* Structured Key Breakdown Sections (1. Title / 2. Title format from Image 1) */}
              <div className="relative z-10 space-y-6 sm:space-y-7">
                {activeFAQ.sections.map((sec, sIdx) => (
                  <div key={sIdx} className="space-y-2.5">
                    <h4 className="text-base sm:text-lg font-bold text-neutral-900 tracking-tight">
                      {sec.title}
                    </h4>

                    <div className="space-y-2">
                      {sec.points.map((pt, pIdx) => (
                        <p key={pIdx} className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                          <strong className="text-neutral-950 font-semibold">{pt.label}:</strong>{' '}
                          {pt.text}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom "News about this" / "Verified Standards" Box (Exact match from Image 1) */}
              <div className="relative z-10 mt-8 pt-6 border-t border-neutral-200/90">
                <h5 className="text-xs sm:text-sm font-bold text-neutral-900 mb-3.5 tracking-wide">
                  {activeFAQ.highlightsHeader}
                </h5>

                <div className="space-y-2.5">
                  {activeFAQ.highlights.map((hl, hIdx) => (
                    <div 
                      key={hIdx}
                      className="border-l-2 border-neutral-900 pl-3.5 sm:pl-4 py-1.5 text-xs sm:text-sm text-neutral-700 leading-relaxed bg-neutral-50/90 rounded-r-lg hover:bg-neutral-100/90 transition-colors"
                    >
                      <strong className="text-neutral-950 font-semibold">{hl.title}:</strong>{' '}
                      {hl.desc}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
