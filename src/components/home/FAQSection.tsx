'use client';

import React, { useState } from 'react';
import { 
  ChevronDown, 
  HelpCircle, 
  MessageSquare, 
  ArrowUpRight, 
  ShieldCheck, 
  Clock, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';

interface FAQItem {
  id: number;
  num: string;
  category: 'candidates' | 'employers' | 'ethics' | 'general';
  categoryLabel: string;
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    id: 1,
    num: '01',
    category: 'candidates',
    categoryLabel: 'For Candidates',
    question: 'How does Infidell support candidates throughout their career journey?',
    answer:
      'Infidell provides high-touch, confidential career representation: ATS profile optimization, strategic interview briefings on corporate culture, compensation benchmarking against verified industry standards, and direct introductions to verified engineering and executive leadership across India.'
  },
  {
    id: 2,
    num: '02',
    category: 'ethics',
    categoryLabel: 'Ethics & Fees',
    question: 'Are there any registration or placement fees charged to candidates?',
    answer:
      'Never. Infidell operates under strict ethical recruitment standards. We never charge job seekers any fees for resume review, candidate registration, interview coaching, or job placement. Our professional advisory fees are solely sponsored by our verified corporate hiring partners.'
  },
  {
    id: 3,
    num: '03',
    category: 'employers',
    categoryLabel: 'For Employers',
    question: 'How quickly can corporate employers receive vetted candidate shortlists?',
    answer:
      'For active technical and leadership requisitions, Infidell curates and delivers multi-tier vetted shortlists within 48 to 72 hours, complete with technical benchmark evaluations, verified notice periods, and transparent compensation expectations.'
  },
  {
    id: 4,
    num: '04',
    category: 'candidates',
    categoryLabel: 'Verification Process',
    question: 'How does the profile matching and credential verification process work?',
    answer:
      'Once your profile is submitted, our talent specialists conduct a multi-dimensional assessment of technical expertise, problem-solving depth, and leadership agility before coordinating direct hiring manager discussions without automated filtering.'
  },
  {
    id: 5,
    num: '05',
    category: 'ethics',
    categoryLabel: 'Placement Transparency',
    question: 'Does registering with Infidell guarantee job placement?',
    answer:
      'Ethical transparency is our core foundation: no recruitment partner can ethically guarantee placement, as final selection rests with hiring managers. However, we ensure verified candidate representation directly to hiring decision-makers with zero automated filtering.'
  },
  {
    id: 6,
    num: '06',
    category: 'general',
    categoryLabel: 'Coverage & Regions',
    question: 'What industries, regions, and work models does Infidell support?',
    answer:
      'We represent professionals nationwide across India in IT, Cloud Infrastructure, Engineering, Fintech, HealthTech, and Corporate Leadership for on-site headquarters, hybrid workflows, and fully remote engagements across Bengaluru, Pune, Hyderabad, Gurugram, Mumbai, and Noida.'
  }
];

type CategoryFilter = 'all' | 'candidates' | 'employers' | 'ethics';

export function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all');

  const toggleFAQ = (id: number) => {
    setOpenIdx(openIdx === id ? null : id);
  };

  const filteredFaqs = selectedCategory === 'all'
    ? FAQS
    : FAQS.filter((faq) => faq.category === selectedCategory || (selectedCategory === 'ethics' && faq.category === 'ethics'));

  return (
    <section 
      id="faq" 
      className="py-16 sm:py-24 md:py-32 bg-[#050708] relative overflow-hidden border-t border-[#203536]/80 select-none"
    >
      {/* Ambient atmospheric glows */}
      <div className="absolute top-1/4 right-1/4 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-[#00D5DF]/10 rounded-full blur-[140px] sm:blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-[#38BDF8]/10 rounded-full blur-[130px] sm:blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Master Section Header - Consistent with About Us & Testimonials */}
        <div className="max-w-3xl mb-10 sm:mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white leading-none mb-2 sm:mb-3">
            FAQ
          </h2>
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light tracking-tight text-white leading-snug mb-3 sm:mb-4">
            Frequently Asked{' '}
            <span className="font-medium bg-gradient-to-r from-white via-[#7DD3FC] to-[#38BDF8] bg-clip-text text-transparent">
              Questions.
            </span>
          </h3>
          <p className="text-xs sm:text-sm md:text-base text-neutral-300 leading-relaxed font-normal">
            Clear, transparent guidance on our ethical placement standards, candidate advocacy, employer shortlisting velocity, and personalized representation.
          </p>
        </div>

        {/* 12-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column (5 cols): Filter Tabs & Advisory Support Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {[
                { key: 'all', label: 'All Questions' },
                { key: 'candidates', label: 'For Candidates' },
                { key: 'employers', label: 'For Employers' },
                { key: 'ethics', label: 'Ethics & Fees' }
              ].map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => {
                    setSelectedCategory(tab.key as CategoryFilter);
                    setOpenIdx(null);
                  }}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 cursor-pointer ${
                    selectedCategory === tab.key
                      ? 'bg-[#00D5DF] text-[#050708] font-bold shadow-[0_0_15px_rgba(0,213,223,0.35)]'
                      : 'bg-[#0C1517] text-neutral-400 border border-[#203536] hover:text-white hover:border-[#00D5DF]/40'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Direct Advisory Contact Card */}
            <div className="rounded-2xl sm:rounded-3xl bg-[#0C1517]/90 border border-[#203536] p-6 sm:p-7 relative overflow-hidden shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#00D5DF]/10 border border-[#00D5DF]/30 flex items-center justify-center text-[#00D5DF]">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-white">Have Specific Questions?</h4>
                  <p className="text-xs text-neutral-400">Speak directly with our senior advisory desk</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-5">
                Whether you are exploring high-growth engineering roles or building specialized talent pipelines, our advisors are here to help.
              </p>

              {/* Quick WhatsApp Action Button */}
              <a
                href="https://wa.me/917985449746?text=Hi%20Infidell,%20I%20have%20a%20question%20regarding%20your%20placement%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white text-xs sm:text-sm font-semibold hover:brightness-110 transition-all duration-300 shadow-lg shadow-black/40 cursor-pointer"
              >
                <span>Chat with an Advisor on WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              {/* Trust Badges */}
              <div className="mt-5 pt-4 border-t border-[#203536]/70 grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-neutral-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00D5DF] shrink-0" />
                  <span>Zero Candidate Fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#00D5DF] shrink-0" />
                  <span>48–72h Employer SLA</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#00D5DF] shrink-0" />
                  <span>100% Confidential</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#00D5DF] shrink-0" />
                  <span>Verified Roles Only</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column (7 cols): The Accordion List */}
          <div className="lg:col-span-7 space-y-3.5">
            {filteredFaqs.map((faq) => {
              const isOpen = openIdx === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'bg-[#0E1A1C] border-[#00D5DF]/60 shadow-[0_0_25px_rgba(0,213,223,0.12)]'
                      : 'bg-[#0C1517]/80 border-[#203536] hover:border-[#00D5DF]/40 hover:bg-[#0E1A1C]/60'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full py-4 sm:py-5 px-5 sm:px-7 md:px-8 text-left flex items-start justify-between gap-4 focus:outline-none transition-colors cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start gap-3.5 pr-2">
                      <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-[#00D5DF]/10 text-[#00D5DF] border border-[#00D5DF]/20 shrink-0 mt-0.5">
                        {faq.num}
                      </span>
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1">
                          {faq.categoryLabel}
                        </div>
                        <h4 className="text-sm sm:text-base font-semibold text-white leading-snug">
                          {faq.question}
                        </h4>
                      </div>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 shrink-0 transition-transform duration-300 mt-1 ${
                        isOpen ? 'rotate-180 text-[#00D5DF]' : 'text-neutral-400'
                      }`}
                    />
                  </button>

                  {/* Smooth CSS Grid Accordion Transition */}
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 sm:px-7 md:px-8 pb-5 pt-1 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-[#203536]/60">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
