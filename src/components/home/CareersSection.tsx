'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import confetti from 'canvas-confetti';
import {
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle2,
  X,
  Send,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ShieldCheck,
  Building2
} from 'lucide-react';

interface CareerRole {
  id: string;
  slug: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experienceYears: string;
  salaryRange: string;
  img: string;
  description: string;
  requirements: string[];
  skills: string[];
}

const CAREER_ROLES: CareerRole[] = [
  {
    id: 'role-1',
    slug: 'full-stack-developer',
    title: 'Full Stack\nDeveloper',
    department: 'Engineering',
    location: 'Ahmedabad / Hybrid',
    type: 'Full-Time',
    experienceYears: '5–8 Years',
    salaryRange: '₹18,00,000 – ₹24,00,000 P.A.',
    img: '/images/practices/practice-architecture.jpg',
    description: 'Build scalable enterprise web architectures and high-concurrency microservices using Next.js, Node.js, and cloud ecosystems.',
    requirements: [
      'Mastery of React, Next.js, Node.js, and strict TypeScript patterns',
      'Production experience with PostgreSQL, Redis caching, and Docker',
      'Demonstrated architectural decision-making and junior engineer mentorship'
    ],
    skills: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Docker', 'TypeScript']
  },
  {
    id: 'role-2',
    slug: 'director-engineering',
    title: 'Director of\nEngineering',
    department: 'Executive',
    location: 'Bengaluru / Hybrid',
    type: 'Full-Time',
    experienceYears: '10–15 Years',
    salaryRange: '₹38,00,000 – ₹52,00,000 P.A. + Equity',
    img: '/images/practices/practice-enterprise.jpg',
    description: 'Spearhead cross-functional engineering organizations across distributed microservices, platform reliability, and executive strategic roadmaps.',
    requirements: [
      'Proven engineering leadership managing 40+ software engineers across multiple squads',
      'Architectural mastery in high-scale distributed systems and multi-region cloud platforms',
      'Direct executive reporting to CTO / CEO and board-level technology alignment'
    ],
    skills: ['Engineering Leadership', 'Distributed Systems', 'Cloud Strategy', 'Executive Management']
  },
  {
    id: 'role-3',
    slug: 'cloud-devops-architect',
    title: 'Cloud DevOps\nArchitect',
    department: 'Infrastructure',
    location: 'Pune / Remote',
    type: 'Full-Time',
    experienceYears: '4–7 Years',
    salaryRange: '₹16,00,000 – ₹24,00,000 P.A.',
    img: '/images/practices/practice-global.jpg',
    description: 'Design robust GitOps CI/CD pipelines, container orchestration, and multi-cloud infrastructure monitoring across AWS and GCP environments.',
    requirements: [
      'Extensive hands-on expertise with AWS, Terraform, and production Kubernetes',
      'Proven experience building GitOps pipelines with GitHub Actions / GitLab CI',
      'Strong Linux system administration and statutory network security grounding'
    ],
    skills: ['AWS', 'Kubernetes', 'Terraform', 'CI/CD', 'GitOps', 'Linux']
  },
  {
    id: 'role-4',
    slug: 'ai-llm-solutions-architect',
    title: 'AI & LLM\nArchitect',
    department: 'Engineering',
    location: 'Hyderabad / Remote',
    type: 'Full-Time',
    experienceYears: '7–12 Years',
    salaryRange: '₹30,00,000 – ₹45,00,000 P.A.',
    img: '/images/practices/practice-skills.jpg',
    description: 'Design and deploy enterprise generative AI pipelines, vector retrieval architectures (RAG), and fine-tuned LLM microservices.',
    requirements: [
      'Deep expertise in Python, PyTorch, LangChain, and vector databases (Pinecone/Milvus)',
      'Production deployment experience with LLM agents, guardrails, and model quantization',
      'Demonstrated experience building enterprise AI applications with verified scalability'
    ],
    skills: ['Generative AI', 'LLMs', 'Vector Databases', 'Python', 'PyTorch', 'RAG']
  },
  {
    id: 'role-5',
    slug: 'chartered-financial-analyst',
    title: 'Chartered\nFinancial Analyst',
    department: 'Finance',
    location: 'Mumbai / On-site',
    type: 'Full-Time',
    experienceYears: '3–6 Years',
    salaryRange: '₹12,00,000 – ₹18,00,000 P.A.',
    img: '/images/practices/practice-finance.jpg',
    description: 'Perform rigorous financial modeling, statutory audit compliance, valuation advisory, and quarterly budgeting for institutional clients.',
    requirements: [
      'Qualified CA or Level 2/3 CFA charterholder',
      'Expertise in advanced financial modeling, discounted cash flow, and valuation metrics',
      'Thorough knowledge of Indian Accounting Standards (Ind AS) and regulatory compliance'
    ],
    skills: ['Financial Modeling', 'Statutory Audit', 'Ind AS', 'Taxation', 'ERP SAP']
  },
  {
    id: 'role-6',
    slug: 'enterprise-b2b-sales-manager',
    title: 'Enterprise B2B\nSales Manager',
    department: 'Commercial',
    location: 'Bengaluru / Hybrid',
    type: 'Full-Time',
    experienceYears: '5–9 Years',
    salaryRange: '₹18,00,000 – ₹26,00,000 P.A. + Incentives',
    img: '/images/practices/practice-advisory.jpg',
    description: 'Drive high-ticket enterprise SaaS acquisition, negotiate master service agreements, and cultivate strategic CXO partnerships.',
    requirements: [
      'Proven track record selling enterprise software or IT consulting solutions',
      'Strong CXO relationship management and consultative enterprise sales methodology',
      'Demonstrated quota achievement of ₹2Cr+ annual recurring revenue'
    ],
    skills: ['B2B Sales', 'Enterprise Accounts', 'SaaS', 'Contract Negotiation']
  },
  {
    id: 'role-7',
    slug: 'robotics-automation-lead',
    title: 'Robotics &\nAutomation Lead',
    department: 'Engineering',
    location: 'Vadodara / Plant On-site',
    type: 'Full-Time',
    experienceYears: '3–6 Years',
    salaryRange: '₹10,00,000 – ₹15,00,000 P.A.',
    img: '/images/insights/insight-tech-roles.jpg',
    description: 'Design and program PLC/SCADA systems, robotic arm integrations, and automated assembly line monitoring for precision manufacturing.',
    requirements: [
      'B.Tech / B.E. in Mechatronics, Electrical, or Instrumentation Engineering',
      'Proven experience with Siemens S7-1200/1500 and Allen-Bradley PLCs',
      'Commissioning experience on manufacturing shop floors and plant automation'
    ],
    skills: ['PLC Programming', 'SCADA', 'Siemens TIA Portal', 'Industrial Robotics']
  },
  {
    id: 'role-8',
    slug: 'talent-acquisition-specialist',
    title: 'Talent Acquisition\nSpecialist',
    department: 'Human Resources',
    location: 'Ahmedabad / On-site',
    type: 'Full-Time',
    experienceYears: '2–5 Years',
    salaryRange: '₹7,00,000 – ₹11,00,000 P.A.',
    img: '/images/solutions/talent-acquisition.avif',
    description: 'Source niche engineering talent, coordinate hiring loops, and manage end-to-end recruitment pipelines for partner enterprise clients.',
    requirements: [
      'Minimum 2 years dedicated IT and executive recruitment experience',
      'Proficiency in LinkedIn Recruiter, GitHub talent sourcing, and modern ATS platforms',
      'Strong verbal communication and candidate career advisory engagement'
    ],
    skills: ['Tech Recruitment', 'Sourcing', 'Candidate Screening', 'ATS Management']
  }
];

export function CareersSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const pinTrackRef = useRef<HTMLDivElement>(null);
  const pinViewportRef = useRef<HTMLDivElement>(null);
  const cardStageRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLElement | null)[]>([]);
  const currentIndexRef = useRef<number>(0);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [activeJob, setActiveJob] = useState<CareerRole | null>(null);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experience: '',
    noticePeriod: '30 Days',
    linkedIn: '',
    notes: ''
  });

  // GSAP Pinned Horizontal Carousel Animation (Exact Zarvion Technologies Architecture)
  useGSAP(
    () => {
      if (typeof window === 'undefined') return;
      gsap.registerPlugin(ScrollTrigger);

      const track = pinTrackRef.current;
      const viewport = pinViewportRef.current;
      const stage = cardStageRef.current;
      const cards = cardsRef.current.filter(Boolean) as HTMLElement[];

      if (!track || !viewport || !stage || cards.length === 0) return;

      const isMobile = window.innerWidth <= 768;

      if (isMobile) {
        // Mobile fallback: clean vertical presentation without pinning
        track.style.height = 'auto';
        stage.style.transform = 'none';
        cards.forEach((c) => {
          c.classList.add('active');
          c.style.opacity = '1';
          c.style.transform = 'none';
        });
        return;
      }

      // Calculate total horizontal scroll distance
      const cardWidth = (cards[0].offsetWidth || 460) + 32; // card width + 32px gap
      const totalCards = CAREER_ROLES.length;
      const totalDistance = cardWidth * (totalCards - 1);

      // Set initial active state on card 0
      cards.forEach((card, idx) => {
        card.classList.toggle('active', idx === 0);
      });

      // Pinned GSAP Timeline with Scrub & Snap
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: track,
          start: 'top top',
          end: `+=${totalDistance}`,
          scrub: 0.8,
          pin: true,
          invalidateOnRefresh: true,
          anticipatePin: 1,
          fastScrollEnd: true,
          snap: {
            snapTo: 1 / (totalCards - 1),
            duration: { min: 0.25, max: 0.6 },
            ease: 'power1.inOut'
          },
          onUpdate: (self) => {
            const rawProgress = self.progress * (totalCards - 1);
            const activeIdx = Math.min(Math.max(Math.round(rawProgress), 0), totalCards - 1);

            if (activeIdx !== currentIndexRef.current) {
              cards[currentIndexRef.current]?.classList.remove('active');
              cards[activeIdx]?.classList.add('active');
              currentIndexRef.current = activeIdx;
              setActiveIndex(activeIdx);
            }
          }
        }
      });

      scrollTriggerRef.current = tl.scrollTrigger || null;

      // Translate stage horizontally as user scrolls
      tl.fromTo(
        stage,
        { x: 0 },
        { x: -totalDistance, ease: 'none', force3D: true },
        0
      );

      ScrollTrigger.refresh();
    },
    { scope: sectionRef }
  );

  // Navigate to specific card index programmatically
  const scrollToCard = (index: number) => {
    const targetIdx = Math.max(0, Math.min(index, CAREER_ROLES.length - 1));
    const cards = cardsRef.current.filter(Boolean) as HTMLElement[];
    const st = scrollTriggerRef.current;

    if (st && cards.length > 0) {
      const targetProgress = targetIdx / (CAREER_ROLES.length - 1);
      const scrollPos = st.start + targetProgress * (st.end - st.start);
      window.scrollTo({
        top: scrollPos,
        behavior: 'smooth'
      });
    }
  };

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      confetti({
        particleCount: 85,
        spread: 65,
        origin: { y: 0.6 }
      });
    }, 900);
  };

  const closeModal = () => {
    setActiveJob(null);
    setFormSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      experience: '',
      noticePeriod: '30 Days',
      linkedIn: '',
      notes: ''
    });
  };

  return (
    <section
      ref={sectionRef}
      id="careers"
      className="roles-section relative overflow-hidden bg-[#F8FAFC] dark:bg-[#050708] border-t border-[#DCE5EF] dark:border-[#203536]/80 select-none transition-colors duration-300"
    >
      {/* Section Header */}
      <div className="pt-20 sm:pt-28 pb-10 sm:pb-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        {/* Zarvion-Style Hot Career Opportunities Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white dark:bg-[#0C1517] border border-[#087FCB]/30 dark:border-[#00D5DF]/30 text-xs font-mono font-bold text-[#087FCB] dark:text-[#00D5DF] tracking-widest uppercase mb-4 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>HOT CAREER OPPORTUNITIES</span>
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-[#102B50] dark:text-white leading-tight mb-4">
          Most Demanded{' '}
          <span className="font-medium bg-gradient-to-r from-[#087FCB] to-[#00BFCB] dark:from-[#7DD3FC] dark:to-[#00D5DF] bg-clip-text text-transparent">
            Career Roles.
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg text-[#334155] dark:text-neutral-300 max-w-2xl mx-auto leading-relaxed font-normal mb-6">
          Explore today's fastest-growing careers across technology and enterprise leadership. Discover direct representation with verified 48h placement SLAs.
        </p>

        {/* Arrow Navigation Indicator */}
        <div className="hidden md:flex items-center justify-center gap-3 mt-2">
          <button
            type="button"
            onClick={() => scrollToCard(activeIndex - 1)}
            disabled={activeIndex === 0}
            aria-label="Previous Career Role"
            className="w-10 h-10 rounded-full bg-white dark:bg-[#0C1517] border border-[#DCE5EF] dark:border-[#203536] flex items-center justify-center text-[#102B50] dark:text-white shadow-sm hover:border-[#087FCB] dark:hover:border-[#00D5DF] disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <span className="text-xs font-mono font-semibold text-slate-500 dark:text-neutral-400 px-3">
            0{activeIndex + 1} / 0{CAREER_ROLES.length}
          </span>

          <button
            type="button"
            onClick={() => scrollToCard(activeIndex + 1)}
            disabled={activeIndex === CAREER_ROLES.length - 1}
            aria-label="Next Career Role"
            className="w-10 h-10 rounded-full bg-white dark:bg-[#0C1517] border border-[#DCE5EF] dark:border-[#203536] flex items-center justify-center text-[#102B50] dark:text-white shadow-sm hover:border-[#087FCB] dark:hover:border-[#00D5DF] disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* ========================================================
          ZARVION-STYLE PINNED HORIZONTAL CARD SCROLL STAGE
      ======================================================== */}
      <div className="pin-track" ref={pinTrackRef}>
        <div className="pin-viewport" ref={pinViewportRef}>
          <div className="card-stage" ref={cardStageRef}>
            {CAREER_ROLES.map((role, idx) => {
              return (
                <article
                  key={role.id}
                  ref={(el) => {
                    cardsRef.current[idx] = el;
                  }}
                  data-index={idx}
                  className="demanded-role-card"
                  onClick={() => scrollToCard(idx)}
                >
                  <div
                    className="card-image"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveJob(role);
                    }}
                    role="link"
                    tabIndex={0}
                    aria-label={`View ${role.title.replace('\n', ' ')} details`}
                  >
                    {/* Background Workplace Image */}
                    <Image
                      src={role.img}
                      alt={role.title.replace('\n', ' ')}
                      fill
                      sizes="(max-width: 768px) 100vw, 500px"
                      priority={idx < 3}
                      className="object-cover"
                    />

                    {/* Gradient Dim Overlay */}
                    <div className="image-overlay" />

                    {/* Ambient Glow */}
                    <div className="image-glow" />

                    {/* Big Bold Role Title (Centered / Bottom aligned) */}
                    <h3 className="image-title whitespace-pre-line">
                      {role.title}
                    </h3>

                    {/* Glassmorphic Pill Button (Zarvion Signature) */}
                    <div className="explore-career-wrapper">
                      <span className="explore-career-btn">
                        <span>Explore Career</span>
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Assistance Banner */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 sm:pb-28 relative z-10 w-full">
        <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#070D10] border border-[#DCE5EF] dark:border-[#203536] shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#087FCB]/10 dark:bg-[#00D5DF]/10 border border-[#087FCB]/30 dark:border-[#00D5DF]/30 flex items-center justify-center text-[#087FCB] dark:text-[#00D5DF] shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#102B50] dark:text-white leading-tight">
                Seeking a Confidential Executive Search?
              </h4>
              <p className="text-xs sm:text-sm text-[#475569] dark:text-neutral-300 mt-0.5">
                Over 60% of our Director, VP, and C-suite mandates operate under strict non-disclosure agreements.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="w-full md:w-auto text-center shrink-0 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#087FCB] to-[#00BFCB] hover:shadow-[0_0_25px_rgba(8,127,203,0.4)] transition-all hover:scale-105"
          >
            Connect With an Executive Advisor →
          </a>
        </div>
      </div>

      {/* ========================================================
          ROLE DOSSIER & QUICK APPLY MODAL
      ======================================================== */}
      {activeJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/65 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-[#0B1519] border border-[#DCE5EF] dark:border-[#203536] rounded-3xl p-6 sm:p-8 shadow-2xl">
            {/* Close Button */}
            <button
              type="button"
              onClick={closeModal}
              aria-label="Close modal"
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 dark:bg-neutral-800 border border-slate-200 dark:border-neutral-700 flex items-center justify-center text-slate-500 hover:text-slate-800 dark:text-neutral-300 dark:hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {!formSubmitted ? (
              <div>
                {/* Header */}
                <div className="mb-6 pr-8">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#087FCB] dark:text-[#00D5DF] block mb-1">
                    {activeJob.department} Track · Verified Mandate
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#102B50] dark:text-white leading-tight whitespace-pre-line">
                    {activeJob.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-[#475569] dark:text-neutral-300">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {activeJob.location}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {activeJob.experienceYears}
                    </span>
                    <span>•</span>
                    <span className="font-bold text-[#087FCB] dark:text-[#00D5DF]">
                      {activeJob.salaryRange}
                    </span>
                  </div>
                </div>

                {/* Role Description */}
                <div className="mb-6 p-4 rounded-2xl bg-slate-50 dark:bg-[#070D10] border border-slate-200 dark:border-neutral-800 text-xs sm:text-sm text-[#334155] dark:text-neutral-300 leading-relaxed">
                  <p className="mb-3">{activeJob.description}</p>
                  <div className="font-semibold text-[#102B50] dark:text-white mb-2">Key Competencies:</div>
                  <ul className="space-y-1.5">
                    {activeJob.requirements.map((req, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2 text-xs text-[#475569] dark:text-neutral-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#087FCB] dark:text-[#00D5DF] shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quick Application Form */}
                <form onSubmit={handleApplySubmit} className="space-y-4">
                  <div className="text-sm font-bold text-[#102B50] dark:text-white border-b border-slate-200 dark:border-neutral-800 pb-2">
                    Submit Fast-Track Candidacy (100% Free Advisory)
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="text-[11px] font-semibold text-[#334155] dark:text-neutral-300 block mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#070D10] border border-slate-200 dark:border-neutral-700 text-xs text-[#102B50] dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#087FCB] dark:focus:border-[#00D5DF]"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-semibold text-[#334155] dark:text-neutral-300 block mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="rahul@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#070D10] border border-slate-200 dark:border-neutral-700 text-xs text-[#102B50] dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#087FCB] dark:focus:border-[#00D5DF]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                    <div>
                      <label className="text-[11px] font-semibold text-[#334155] dark:text-neutral-300 block mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#070D10] border border-slate-200 dark:border-neutral-700 text-xs text-[#102B50] dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#087FCB] dark:focus:border-[#00D5DF]"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-semibold text-[#334155] dark:text-neutral-300 block mb-1">
                        Experience (Years) *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.experience}
                        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                        placeholder="e.g. 6.5 Years"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#070D10] border border-slate-200 dark:border-neutral-700 text-xs text-[#102B50] dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#087FCB] dark:focus:border-[#00D5DF]"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-semibold text-[#334155] dark:text-neutral-300 block mb-1">
                        Notice Period
                      </label>
                      <select
                        value={formData.noticePeriod}
                        onChange={(e) => setFormData({ ...formData, noticePeriod: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#070D10] border border-slate-200 dark:border-neutral-700 text-xs text-[#102B50] dark:text-white focus:outline-none focus:border-[#087FCB] dark:focus:border-[#00D5DF] cursor-pointer"
                      >
                        <option value="Immediate">Immediate / Serving</option>
                        <option value="15 Days">15 Days</option>
                        <option value="30 Days">30 Days</option>
                        <option value="60 Days">60 Days</option>
                        <option value="90 Days">90 Days</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-[#334155] dark:text-neutral-300 block mb-1">
                      LinkedIn / Portfolio URL
                    </label>
                    <input
                      type="url"
                      value={formData.linkedIn}
                      onChange={(e) => setFormData({ ...formData, linkedIn: e.target.value })}
                      placeholder="https://linkedin.com/in/yourname"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#070D10] border border-slate-200 dark:border-neutral-700 text-xs text-[#102B50] dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#087FCB] dark:focus:border-[#00D5DF]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-[#334155] dark:text-neutral-300 block mb-1">
                      Notes or Brief Summary
                    </label>
                    <textarea
                      rows={2}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Current CTC, preferred location, or specific competencies..."
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-[#070D10] border border-slate-200 dark:border-neutral-700 text-xs text-[#102B50] dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#087FCB] dark:focus:border-[#00D5DF]"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between gap-4">
                    <span className="text-[10px] text-slate-500 dark:text-neutral-400 font-mono">
                      Strict NDA · Profile never shared without your permission
                    </span>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#087FCB] to-[#00BFCB] hover:shadow-[0_0_25px_rgba(8,127,203,0.5)] transition-all cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Submitting Dossier...</span>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Submit Candidacy →</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              /* Success State */
              <div className="py-10 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/15 border-2 border-emerald-500/40 text-emerald-500 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#102B50] dark:text-white">
                  Application Received!
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] dark:text-neutral-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-[#102B50] dark:text-white">{formData.fullName}</strong>. Your candidacy for <strong className="text-[#087FCB] dark:text-[#00D5DF]">{activeJob.title.replace('\n', ' ')}</strong> has been received under our 48-hour candidate review SLA. An executive talent advisor will connect with you shortly.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="px-6 py-2.5 rounded-full text-xs font-bold text-white bg-[#087FCB] hover:bg-[#076EAF] transition-colors cursor-pointer"
                  >
                    Done & Return
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
