'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import {
  ArrowUpRight,
  Clock,
  BookOpen,
  X,
  CheckCircle2,
  Calendar,
  User
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

export interface InsightArticle {
  id: string;
  date: string;
  author: string;
  title: string;
  excerpt: string;
  subtitle: string;
  category: string;
  imageSrc: string;
  readTime: string;
  sections: {
    heading: string;
    paragraphs: string[];
  }[];
  takeaways: string[];
}

const FEATURED_ARTICLE: InsightArticle = {
  id: 'architecture-of-high-retention-hiring',
  date: 'November 2026',
  author: 'Infidell Research Desk',
  title: 'The Architecture of High-Retention Hiring: Why Ethical Alignment Outperforms Volume Sourcing',
  subtitle:
    'Modern talent acquisition demands more than automated algorithmic matching. High-performing engineering organizations are pivoting from transactional resume blasting to ethical alignment frameworks that deliver 94%+ first-year retention.',
  excerpt:
    'Modern talent acquisition demands more than automated algorithmic matching. Discover how cultural resonance, transparent skill vetting, and candidate-centric advocacy build enduring engineering and corporate teams that stay and scale.',
  category: 'Talent Strategy',
  imageSrc: '/images/insights/insight-talent-acquisition.jpg',
  readTime: '6 min read',
  sections: [
    {
      heading: 'The Hidden Breakdown of Transactional Sourcing',
      paragraphs: [
        'In high-velocity technology environments, rapid resume flooding frequently masks severe systemic attrition. When traditional staffing vendors flood applicant tracking systems with hundreds of keyword-matched profiles, the immediate interview conversion rate drops below 4%, and first-year turnover spikes dramatically.',
        'The underlying issue is a fundamental misalignment between candidate career trajectory and company engineering reality. An algorithm can verify that a candidate knows distributed databases; it cannot ascertain whether their operating philosophy aligns with your release frequency, on-call culture, or architectural decision-making.'
      ]
    },
    {
      heading: 'The Three Pillars of Ethical Talent Alignment',
      paragraphs: [
        'Ethical alignment is not merely an idealistic posture—it is a rigorous, data-backed operational model designed to maximize engineering continuity and productivity. It rests on three essential pillars:',
        '1. Architecture-First Technical Vetting: Evaluating real-world system design depth, distributed failure mitigation, and codebase maintainability rather than rote algorithmic puzzles.',
        '2. Candidate-Centric Career Resonance: Ensuring that every prospective mandate genuinely advances the candidate’s technical trajectory, leadership scope, and compensation parity benchmarks.',
        '3. Unvarnished Operational Transparency: Facilitating candid discussions regarding technical debt, deployment autonomy, and sprint pacing prior to formal offer extension.'
      ]
    },
    {
      heading: 'The Measurable ROI of Long-Term Retention',
      paragraphs: [
        'Data compiled across top-tier enterprise engineering departments reveals that candidates placed through specialized alignment frameworks achieve a 2.3x higher internal promotion rate within their first 24 months. Furthermore, team velocity stabilizes, onboarding ramp-time decreases by 40%, and cross-functional team cohesion reaches institutional consistency.',
        'When search partners prioritize authentic mutual resonance over speed-to-submission, employers secure enduring technical pillars who anchor system architecture for years to come.'
      ]
    }
  ],
  takeaways: [
    'Prioritize mutual technical philosophy over sheer speed-to-submission.',
    'Measure staffing performance by 12-month retention and team velocity, not top-of-funnel resume volume.',
    'Require transparent vetting methodologies and verified candidate consent before submission.'
  ]
};

const SUPPORTING_ARTICLES: InsightArticle[] = [
  {
    id: 'navigating-career-inflection-points',
    date: 'October 2026',
    author: 'Career Advisory Board',
    title: 'Navigating Career Inflection Points: How Senior Specialists Transition into Strategic Leadership',
    subtitle:
      'Proven frameworks for Staff Engineers, Tech Leads, and Principal Architects seeking to transcend technical execution into organizational influence, engineering management, and executive leadership.',
    excerpt:
      'Proven frameworks for professionals seeking to advance beyond technical execution into organizational influence, compensated fairly under market benchmarks.',
    category: 'Career Trajectory',
    imageSrc: '/images/insights/insight-tech-roles.jpg',
    readTime: '4 min read',
    sections: [
      {
        heading: 'The Senior Specialist Dilemma',
        paragraphs: [
          'For senior engineers and technical specialists, reaching Staff or Principal levels brings a critical realization: further career progression is no longer driven solely by technical problem-solving. Advancing to Director, VP of Engineering, or CTO mandates demands organizational leverage, talent cultivation, and cross-functional diplomacy.',
          'Specialists who thrive at this inflection point consciously transition from being the smartest builder in the room to creating the operational environment in which an entire engineering organization operates at peak effectiveness.'
        ]
      },
      {
        heading: 'The Core Levers of Organizational Influence',
        paragraphs: [
          'Translating Architecture into Commercial Value: Top technical executives articulate architectural resilience and technical debt in terms of enterprise velocity, customer trust, and risk mitigation.',
          'Engineering Squad Mentorship & Delegation: Moving from hands-on code writing to designing team topologies, mentoring emerging leads, and defining scalable engineering standards.',
          'Executive Presence & Cross-Functional Trust: Building alignment with Product, Sales, and Finance leaders through predictable delivery schedules and transparent communication.'
        ]
      },
      {
        heading: 'Executive Compensation & Mandate Discovery',
        paragraphs: [
          'Strategic leadership mandates are rarely advertised on public job boards. Confidential executive representation allows senior leaders to benchmark total compensation packages—including equity structures, vesting schedules, and advisory allowances—while maintaining absolute professional discretion.'
        ]
      }
    ],
    takeaways: [
      'Scale your impact through organizational leverage rather than individual code contributions.',
      'Bridge technical strategy with commercial objectives and enterprise risk management.',
      'Engage specialized career advisors to navigate unadvertised executive mandates.'
    ]
  },
  {
    id: 'evaluating-unverified-placement',
    date: 'October 2026',
    author: 'Governance & Ethics',
    title: 'Evaluating Unverified Placement Guarantees in Tech Staffing',
    subtitle:
      'Why reputable technology enterprises and top-tier candidates are moving away from aggressive volume brokers in favor of ethical search firms with transparent engagement models.',
    excerpt:
      'Why reputable enterprises are turning away from aggressive volume brokers in favor of ethical search firms with transparent engagement models.',
    category: 'Recruitment Ethics',
    imageSrc: '/images/insights/insight-social-vetting.jpg',
    readTime: '5 min read',
    sections: [
      {
        heading: 'The Illusion of Guaranteed Placements',
        paragraphs: [
          'In an era of rapid talent market shifts, transactional staffing vendors frequently rely on aggressive marketing claims—such as guaranteed turnaround within 48 hours or unconditional placement assurances. In practice, these models frequently rely on mass resume scraping, unverified credential forwarding, and transactional pressure.',
          'The fallout is severe for both parties: employers waste vital engineering bandwidth interviewing poorly matched applicants, while high-performing candidates find their resumes circulated to organizations without their prior knowledge or consent.'
        ]
      },
      {
        heading: 'Crucial Warning Signs in Commercial Staffing',
        paragraphs: [
          'Candidate Submission Without Prior Consent: Ethical search mandates require explicit candidate authorization and complete role transparency before any resume is shared with a prospective employer.',
          'Lack of Technical Evaluation: Agencies that cannot conduct rigorous, role-specific screening inevitably burden hiring managers with initial qualification filtering.',
          'Absence of Post-Placement Engagement: Transactional vendors disengage immediately following invoice clearance, leaving both candidate and manager without transition support.'
        ]
      },
      {
        heading: 'The Institutional Search Standard',
        paragraphs: [
          'Ethical recruitment partners operate under strict confidentiality covenants, verified data protection protocols, and mutual vetting benchmarks. By conducting structured assessments and maintaining active post-onboarding check-ins, ethical firms foster enduring partnerships built on institutional integrity.'
        ]
      }
    ],
    takeaways: [
      'Never permit recruitment intermediaries to submit your credentials without explicit authorization.',
      'Demand verified technical vetting and clear compensation parity benchmarking.',
      'Choose talent advisory partners committed to institutional confidentiality and long-term retention.'
    ]
  },
  {
    id: 'emerging-compensation-skill-demands',
    date: 'October 2026',
    author: 'Talent Analytics Team',
    title: 'Emerging Compensation & Skill Demands Across Enterprise Engineering Teams in 2026',
    subtitle:
      'A data-driven appraisal of cloud infrastructure, distributed AI systems, cybersecurity, and full-stack engineering proficiencies commanding premium retention packages in 2026.',
    excerpt:
      'A data-driven appraisal of cloud infrastructure, enterprise security, and full-stack proficiencies commanding premium retention packages this year.',
    category: 'Market Intelligence',
    imageSrc: '/images/insights/insight-h1b-visa.jpg',
    readTime: '5 min read',
    sections: [
      {
        heading: 'Specialization Replaces Generalization in 2026',
        paragraphs: [
          'Enterprise hiring across North America has entered an era of deep technical discipline. While generalist full-stack roles face increased automation, specialized engineers who command distributed systems scalability, low-latency microservices, and applied AI infrastructure command unprecedented market demand.',
          'Enterprises are actively consolidating squads around senior architects who can streamline cloud expenditure while scaling system throughput and resilience.'
        ]
      },
      {
        heading: 'Highest-Demand Technical Disciplines',
        paragraphs: [
          'Cloud Platform Engineering: Multi-cloud orchestration across AWS, GCP, and Azure; production Kubernetes clustering; infrastructure-as-code with Terraform; and end-to-end observability architectures.',
          'High-Throughput Distributed Data: Scalable event streaming using Kafka and Apache Flink, combined with low-level systems programming in Go and Rust for high-throughput enterprise pipelines.',
          'Applied Machine Learning & GenAI: Model optimization, production LLM orchestration, vector search indexing, and agentic workflows embedded within enterprise SaaS platforms.',
          'Enterprise Security & Zero-Trust: Cloud security posture management, IAM governance, container security, and automated regulatory compliance frameworks.'
        ]
      },
      {
        heading: 'Strategic Career Positioning',
        paragraphs: [
          'Candidates who demonstrate verifiable enterprise impact—such as reducing 99th-percentile API latency by 60% or leading successful multi-cloud migrations—consistently secure top-of-market compensation packages with substantial performance equity.'
        ]
      }
    ],
    takeaways: [
      'Focus professional development on high-leverage domains: cloud orchestration, distributed data, and applied AI.',
      'Quantify your impact using measurable performance, latency, and business metrics.',
      'Rely on verified market compensation benchmarks rather than speculative online averages.'
    ]
  }
];

export function InsightsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedArticle, setSelectedArticle] = useState<InsightArticle | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedArticle(null);
      }
    };
    if (selectedArticle) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedArticle]);

  useGSAP(
    () => {
      if (typeof window === 'undefined') return;
      gsap.registerPlugin(ScrollTrigger);

      // Featured card reveal
      gsap.fromTo(
        '.insight-featured-card',
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.insight-featured-card',
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );

      // Staggered supporting rows
      gsap.fromTo(
        '.insight-supporting-row',
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.insight-supporting-list',
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="insights"
      className="relative w-full bg-[#F8FAFC] dark:bg-[#050708] text-[#102B50] dark:text-white py-24 sm:py-32 overflow-hidden border-t border-[#DCE5EF] dark:border-[#203536]/80 transition-colors duration-300"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#087FCB]/5 dark:bg-[#17BEBB]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#00BFCB]/5 dark:bg-[#00D5DF]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#102B50] dark:text-white leading-tight mb-4">
              Insights That Shape <br />
              <span className="font-medium bg-gradient-to-r from-[#087FCB] to-[#00BFCB] dark:from-[#7DD3FC] dark:to-[#00D5DF] bg-clip-text text-transparent">
                Careers &amp; Enterprise Growth
              </span>
            </h2>
            <p className="text-sm sm:text-base text-[#475569] dark:text-[#A5B2B3] leading-relaxed">
              In-depth research, leadership perspectives, and talent analytics from the Infidell advisory desk.
            </p>
          </div>

          <a
            href="#footer"
            className="group inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-full border border-slate-200 dark:border-[#203536] bg-white dark:bg-[#0C1517] text-xs sm:text-sm font-bold text-[#102B50] dark:text-[#F5F8F8] hover:border-[#087FCB] dark:hover:border-[#17BEBB] hover:bg-slate-50 dark:hover:bg-[#102426] shadow-sm hover:shadow-md transition-all duration-300 self-start sm:self-auto cursor-pointer"
          >
            <span>View All Publications</span>
            <ArrowUpRight className="w-4 h-4 text-[#087FCB] dark:text-[#17BEBB] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Asymmetric Editorial Layout: 1 Large Featured + 3 Supporting Rows with Banners */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

          {/* Featured Article (Left 7 Cols) */}
          <article
            onClick={() => setSelectedArticle(FEATURED_ARTICLE)}
            className="lg:col-span-7 insight-featured-card rounded-3xl bg-white dark:bg-[#0C1517] border border-[#DCE5EF] dark:border-[#203536] p-6 sm:p-8 flex flex-col justify-between hover:border-[#087FCB]/60 dark:hover:border-[#17BEBB]/60 transition-all duration-300 shadow-[0_4px_25px_rgba(16,43,80,0.06)] hover:shadow-[0_16px_45px_rgba(8,127,203,0.12)] group relative overflow-hidden cursor-pointer"
          >
            <div>
              {/* Banner Image with smooth zoom */}
              <div className="w-full h-64 sm:h-80 rounded-2xl overflow-hidden relative mb-6 bg-slate-100 dark:bg-[#102426]">
                <Image
                  src={FEATURED_ARTICLE.imageSrc}
                  alt={FEATURED_ARTICLE.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Category & Read Time Tags */}
                <div className="absolute top-4 left-4 flex items-center gap-2 z-10">
                  <span className="px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-[#0C1517]/90 border border-slate-200 dark:border-[#203536] backdrop-blur-md text-xs font-bold text-[#087FCB] dark:text-[#00D5DF] shadow-sm">
                    {FEATURED_ARTICLE.category}
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-white/80 dark:bg-[#050708]/80 backdrop-blur-md text-[11px] font-medium text-slate-700 dark:text-[#A5B2B3] flex items-center gap-1.5 shadow-sm">
                    <Clock className="w-3 h-3 text-[#087FCB] dark:text-[#17BEBB]" />
                    {FEATURED_ARTICLE.readTime}
                  </span>
                </div>
              </div>

              {/* Meta */}
              <div className="text-xs text-[#64748B] dark:text-[#A5B2B3] font-medium mb-3">
                {FEATURED_ARTICLE.date} • {FEATURED_ARTICLE.author}
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#102B50] dark:text-[#F5F8F8] tracking-tight leading-snug mb-3 group-hover:text-[#087FCB] dark:group-hover:text-[#00D5DF] transition-colors">
                {FEATURED_ARTICLE.title}
              </h3>

              {/* Excerpt */}
              <p className="text-xs sm:text-sm text-[#475569] dark:text-[#A5B2B3] leading-relaxed mb-6 font-normal">
                {FEATURED_ARTICLE.excerpt}
              </p>
            </div>

            {/* Read Action */}
            <div className="pt-4 border-t border-slate-100 dark:border-[#203536] flex items-center justify-between text-xs font-bold text-[#087FCB] dark:text-[#17BEBB] group-hover:text-[#0094A8] dark:group-hover:text-[#F5F8F8] transition-colors">
              <span className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#087FCB] dark:text-[#00D5DF]" />
                Read Strategic Briefing
              </span>
              <span className="text-base transition-transform duration-300 group-hover:translate-x-1.5">→</span>
            </div>
          </article>

          {/* Supporting Articles List with Banners (Right 5 Cols) */}
          <div className="lg:col-span-5 insight-supporting-list flex flex-col justify-between gap-5">
            {SUPPORTING_ARTICLES.map((article) => (
              <article
                key={article.id}
                onClick={() => setSelectedArticle(article)}
                className="insight-supporting-row p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#0C1517] border border-[#DCE5EF] dark:border-[#203536] hover:border-[#087FCB]/60 dark:hover:border-[#00D5DF]/60 transition-all duration-300 shadow-[0_4px_20px_rgba(16,43,80,0.05)] hover:shadow-[0_12px_35px_rgba(8,127,203,0.10)] group flex flex-col sm:flex-row gap-4 items-stretch cursor-pointer"
              >
                {/* Banner Thumbnail (Displays existing banner) */}
                <div className="w-full sm:w-36 h-36 sm:h-auto rounded-xl overflow-hidden relative shrink-0 bg-slate-100 dark:bg-[#102426]">
                  <Image
                    src={article.imageSrc}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 150px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-2 left-2 sm:hidden z-10">
                    <span className="px-2.5 py-0.5 rounded-full bg-white/90 dark:bg-[#102426]/90 text-[10px] font-semibold text-[#087FCB] dark:text-[#00D5DF]">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Article Info */}
                <div className="flex flex-col justify-between flex-1 min-w-0">
                  <div>
                    <div className="hidden sm:flex items-center justify-between text-[11px] text-[#64748B] dark:text-[#A5B2B3] mb-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#087FCB]/10 dark:bg-[#102426] border border-[#087FCB]/20 dark:border-[#203536] text-[#087FCB] dark:text-[#00D5DF] font-semibold text-[10px]">
                        {article.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#087FCB] dark:text-[#17BEBB]" />
                        {article.readTime}
                      </span>
                    </div>

                    <h4 className="text-sm sm:text-base font-bold text-[#102B50] dark:text-[#F5F8F8] leading-snug mb-1.5 group-hover:text-[#087FCB] dark:group-hover:text-[#17BEBB] transition-colors line-clamp-2">
                      {article.title}
                    </h4>

                    <p className="text-xs text-[#475569] dark:text-[#A5B2B3] leading-relaxed line-clamp-2 font-normal">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-[#203536]/80 flex items-center justify-between text-[11px] font-semibold text-[#64748B] dark:text-[#A5B2B3]">
                    <span>{article.date}</span>
                    <div className="flex items-center gap-1 text-[#087FCB] dark:text-[#17BEBB] font-bold group-hover:translate-x-0.5 transition-transform">
                      <span>Read Article</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>

      </div>

      {/* ========================================================
          FULL BLOG POST READER MODAL
      ======================================================== */}
      {selectedArticle && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-article-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/70 backdrop-blur-md animate-in fade-in duration-200"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedArticle(null);
          }}
        >
          <div className="relative w-full max-w-3xl my-8 bg-white dark:bg-[#070D10] border border-slate-200 dark:border-[#203536] rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">

            {/* Sticky Header with Title and Close */}
            <div className="relative w-full h-56 sm:h-72 overflow-hidden shrink-0 bg-slate-100 dark:bg-[#102426]">
              <Image
                src={selectedArticle.imageSrc}
                alt={selectedArticle.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 800px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                aria-label="Close article modal"
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/85 backdrop-blur-md text-white flex items-center justify-center transition-all cursor-pointer shadow-lg hover:scale-105 active:scale-95"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Floating Meta Pills on Banner */}
              <div className="absolute bottom-4 left-6 right-6 z-10 flex flex-wrap items-center gap-2.5">
                <span className="px-3.5 py-1 rounded-full bg-[#087FCB] text-white font-bold text-xs shadow-md">
                  {selectedArticle.category}
                </span>
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-medium flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {selectedArticle.readTime}
                </span>
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-medium flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {selectedArticle.date}
                </span>
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-medium flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5" />
                  {selectedArticle.author}
                </span>
              </div>
            </div>

            {/* Scrollable Article Body */}
            <div className="p-6 sm:p-8 md:p-10 overflow-y-auto space-y-8 flex-1">

              {/* Main Headline */}
              <div>
                <h1
                  id="modal-article-title"
                  className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#102B50] dark:text-white tracking-tight leading-tight mb-4"
                >
                  {selectedArticle.title}
                </h1>
                <p className="text-base sm:text-lg text-[#334155] dark:text-[#CAD3DC] leading-relaxed font-medium border-l-4 border-[#087FCB] dark:border-[#00D5DF] pl-4 italic">
                  {selectedArticle.subtitle}
                </p>
              </div>

              {/* Article Content Sections */}
              <div className="space-y-6 text-sm sm:text-base text-[#475569] dark:text-[#A5B2B3] leading-relaxed">
                {selectedArticle.sections.map((sec, idx) => (
                  <div key={idx} className="space-y-3">
                    <h2 className="text-lg sm:text-xl font-bold text-[#102B50] dark:text-white tracking-tight">
                      {sec.heading}
                    </h2>
                    {sec.paragraphs.map((p, pIdx) => (
                      <p key={pIdx} className="leading-relaxed">
                        {p}
                      </p>
                    ))}
                  </div>
                ))}
              </div>

              {/* Strategic Takeaways Box */}
              <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-[#0C1517] border border-slate-200 dark:border-[#203536] space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#087FCB] dark:text-[#00D5DF]">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Strategic Executive Takeaways</span>
                </div>
                <ul className="space-y-2">
                  {selectedArticle.takeaways.map((item, tIdx) => (
                    <li key={tIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#334155] dark:text-slate-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#087FCB] dark:bg-[#00D5DF] mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Modal Footer CTA */}
              <div className="pt-6 border-t border-slate-200 dark:border-[#203536] flex flex-col sm:flex-row items-center justify-between gap-4">
                <a
                  href="#contact"
                  onClick={() => setSelectedArticle(null)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#087FCB] to-[#0094A8] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg hover:opacity-95 transition-all"
                >
                  <span>Discuss With Our Advisory Desk</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={() => setSelectedArticle(null)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-300 dark:border-[#203536] text-xs sm:text-sm font-semibold text-slate-700 dark:text-neutral-300 hover:bg-slate-100 dark:hover:bg-white/5 transition-all cursor-pointer"
                >
                  Close Article
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
}
