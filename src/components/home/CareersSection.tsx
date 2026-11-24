'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import {
  ArrowRight,
  X,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

export interface CareerRole {
  id: string;
  slug: string;
  title: string;
  category: string;
  department: string;
  location: string;
  type: string;
  experienceYears: string;
  salaryRange: string;
  demand: string;
  img: string;
  description: string;
  skills: string[];
}

export const CAREER_ROLES: CareerRole[] = [
  {
    id: 'role-1',
    slug: 'full-stack-developer',
    title: 'Full Stack\nDeveloper',
    category: 'SOFTWARE DEVELOPMENT',
    department: 'Engineering',
    location: 'New York, NY / Hybrid',
    type: 'Full-Time',
    experienceYears: '3–6 Years',
    salaryRange: '$140k – $195k / yr',
    demand: 'Very High',
    img: '/images/careers/career-fullstack.jpg',
    description: 'Build scalable web applications using React, Node.js, Express, MongoDB, and cloud technologies. Full Stack Developers remain one of the highest-demand careers worldwide.',
    skills: ['React', 'Node.js', 'Express', 'MongoDB', 'TypeScript', 'Next.js']
  },
  {
    id: 'role-2',
    slug: 'ai-machine-learning-architect',
    title: 'AI & Machine\nLearning Architect',
    category: 'ARTIFICIAL INTELLIGENCE',
    department: 'AI & Data Intelligence',
    location: 'San Francisco, CA / Hybrid',
    type: 'Full-Time',
    experienceYears: '4–8 Years',
    salaryRange: '$210k – $320k / yr',
    demand: 'Critical',
    img: '/images/careers/career-ai-ml.jpg',
    description: 'Design generative AI agent frameworks, retrieval-augmented generation (RAG) architectures, and fine-tune large language models for enterprise deployments.',
    skills: ['Python', 'PyTorch', 'LLMs', 'LangChain', 'Vector DB', 'RAG']
  },
  {
    id: 'role-3',
    slug: 'cloud-devops-architect',
    title: 'Cloud & DevOps\nArchitect',
    category: 'CLOUD INFRASTRUCTURE',
    department: 'Platform Engineering',
    location: 'Austin, TX / Remote',
    type: 'Full-Time',
    experienceYears: '4–7 Years',
    salaryRange: '$160k – $225k / yr',
    demand: 'Very High',
    img: '/images/careers/career-cloud-devops.jpg',
    description: 'Orchestrate resilient Kubernetes platforms, automated GitOps CI/CD delivery pipelines, and multi-region cloud infrastructures across AWS and Google Cloud Platform.',
    skills: ['AWS', 'Kubernetes', 'Terraform', 'Docker', 'CI/CD', 'GitOps']
  },
  {
    id: 'role-4',
    slug: 'director-of-engineering',
    title: 'Director of\nEngineering',
    category: 'EXECUTIVE LEADERSHIP',
    department: 'Executive Leadership',
    location: 'San Francisco, CA / Hybrid',
    type: 'Full-Time',
    experienceYears: '10–15 Years',
    salaryRange: '$260k – $380k / yr + Equity',
    demand: 'High',
    img: '/images/careers/career-director-engineering.jpg',
    description: 'Spearhead cross-functional engineering organizations across distributed microservices, platform reliability, and executive strategic technology roadmaps.',
    skills: ['Engineering Leadership', 'Distributed Systems', 'Cloud Strategy', 'CXO Reporting']
  },
  {
    id: 'role-5',
    slug: 'cybersecurity-operations-specialist',
    title: 'Cybersecurity\nSpecialist',
    category: 'SECURITY & COMPLIANCE',
    department: 'Information Security',
    location: 'Washington, DC / Hybrid',
    type: 'Full-Time',
    experienceYears: '3–6 Years',
    salaryRange: '$155k – $220k / yr',
    demand: 'Very High',
    img: '/images/careers/career-cybersecurity.jpg',
    description: 'Safeguard mission-critical systems through proactive penetration testing, SOC telemetry monitoring, zero-trust network architectures, and statutory compliance.',
    skills: ['Ethical Hacking', 'SIEM', 'SOC', 'Zero Trust', 'Cloud Security']
  },
  {
    id: 'role-6',
    slug: 'data-science-analytics-lead',
    title: 'Data Science &\nAnalytics Lead',
    category: 'DATA INTELLIGENCE',
    department: 'Business Analytics',
    location: 'Chicago, IL / Hybrid',
    type: 'Full-Time',
    experienceYears: '4–7 Years',
    salaryRange: '$150k – $210k / yr',
    demand: 'High',
    img: '/images/careers/career-data-science.jpg',
    description: 'Extract business-critical insights, build predictive algorithms, and deploy self-service data pipelines powering enterprise executive decisions.',
    skills: ['Python', 'SQL', 'Predictive Modeling', 'Tableau', 'BigQuery']
  },
  {
    id: 'role-7',
    slug: 'mobile-applications-architect',
    title: 'Mobile App\nArchitect',
    category: 'MOBILE ENGINEERING',
    department: 'Product Engineering',
    location: 'Austin, TX / Remote',
    type: 'Full-Time',
    experienceYears: '3–6 Years',
    salaryRange: '$145k – $200k / yr',
    demand: 'Very High',
    img: '/images/careers/career-mobile-architect.jpg',
    description: 'Engineer fluid, native-grade mobile experiences across iOS and Android utilizing cross-platform frameworks, performance profiling, and offline synchronization.',
    skills: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Mobile Security']
  },
  {
    id: 'role-8',
    slug: 'chartered-financial-analyst',
    title: 'Senior Financial\nAnalyst (CFA/CPA)',
    category: 'FINANCE & ADVISORY',
    department: 'Corporate Finance',
    location: 'New York, NY / Hybrid',
    type: 'Full-Time',
    experienceYears: '3–6 Years',
    salaryRange: '$130k – $180k / yr',
    demand: 'High',
    img: '/images/careers/career-finance-analyst.jpg',
    description: 'Spearhead advanced DCF valuations, statutory audits under US GAAP, M&A due diligence, and capital structuring for high-growth tech enterprises.',
    skills: ['Financial Modeling', 'US GAAP', 'Valuation', 'M&A Due Diligence', 'SAP ERP']
  },
  {
    id: 'role-9',
    slug: 'ui-ux-design-systems-lead',
    title: 'UI/UX Product\nDesigner',
    category: 'PRODUCT DESIGN',
    department: 'Design & Experience',
    location: 'San Francisco, CA / Remote',
    type: 'Full-Time',
    experienceYears: '3–6 Years',
    salaryRange: '$140k – $195k / yr',
    demand: 'Very High',
    img: '/images/careers/career-uiux-designer.jpg',
    description: 'Craft intuitive human-centered design systems, interactive Figma component architectures, user journey prototypes, and usability testing protocols.',
    skills: ['Figma', 'Design Systems', 'UX Research', 'Prototyping', 'Design Tokens']
  },
  {
    id: 'role-10',
    slug: 'enterprise-b2b-sales-director',
    title: 'Enterprise B2B\nSales Director',
    category: 'COMMERCIAL STRATEGY',
    department: 'Enterprise Sales',
    location: 'Boston, MA / Hybrid',
    type: 'Full-Time',
    experienceYears: '6–12 Years',
    salaryRange: '$190k – $310k / yr + OTE',
    demand: 'High',
    img: '/images/careers/career-b2b-sales.jpg',
    description: 'Drive multi-million enterprise SaaS contracts, spearhead CXO consultative sales cycles, and expand market presence across global enterprise accounts.',
    skills: ['Enterprise SaaS', 'Key Accounts', 'CXO Negotiation', 'Revenue Strategy']
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
      const gap = isMobile ? 18 : 32;
      const baseCardWidth = isMobile
        ? Math.min(window.innerWidth * 0.8, 360)
        : Math.min(window.innerWidth * 0.38, 500);
      const cardWidth = baseCardWidth + gap;
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
          end: () => `+=${totalDistance * (isMobile ? 1.0 : 1.4)}`,
          pin: viewport,
          pinSpacing: true,
          scrub: 0.8,
          anticipatePin: 1,
          fastScrollEnd: true,
          preventOverlaps: true,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const rawProgress = self.progress;
            const floatIndex = rawProgress * (totalCards - 1);
            const nearestIndex = Math.min(Math.round(floatIndex), totalCards - 1);

            if (nearestIndex !== currentIndexRef.current) {
              currentIndexRef.current = nearestIndex;
              setActiveIndex(nearestIndex);

              cards.forEach((card, idx) => {
                const isActive = idx === nearestIndex;
                card.classList.toggle('active', isActive);
              });
            }
          }
        }
      });

      scrollTriggerRef.current = tl.scrollTrigger as ScrollTrigger;

      tl.to(stage, {
        x: -totalDistance,
        ease: 'none'
      });

      return () => {
        tl.kill();
      };
    },
    { scope: sectionRef }
  );

  const scrollToCard = (targetIndex: number) => {
    if (targetIndex < 0 || targetIndex >= CAREER_ROLES.length) return;

    const st = scrollTriggerRef.current;
    if (st) {
      const targetProgress = targetIndex / (CAREER_ROLES.length - 1);
      const scrollPos = st.start + targetProgress * (st.end - st.start);
      window.scrollTo({
        top: scrollPos,
        behavior: 'smooth'
      });
    }
  };

  const closeModal = () => {
    setActiveJob(null);
  };

  const handleContactUs = () => {
    closeModal();
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="careers"
      className="roles-section relative overflow-hidden bg-[#F8FAFC] dark:bg-[#050708] border-t border-[#DCE5EF] dark:border-[#203536]/80 select-none transition-colors duration-300"
    >
      {/* Section Header (Clean without HOT CAREER OPPORTUNITIES badge) */}
      <div className="pt-20 sm:pt-28 pb-6 sm:pb-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-[#102B50] dark:text-white leading-tight mb-4">
          Most Demanded{' '}
          <span className="font-medium bg-gradient-to-r from-[#087FCB] to-[#00BFCB] dark:from-[#7DD3FC] dark:to-[#00D5DF] bg-clip-text text-transparent">
            Career Roles.
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg text-[#334155] dark:text-neutral-300 max-w-2xl mx-auto leading-relaxed font-normal">
          Explore today&apos;s fastest-growing careers across technology and enterprise leadership. Discover professional career guidance and personalized support.
        </p>
      </div>

      {/* ========================================================
          ZARVION-STYLE PINNED HORIZONTAL CARD SCROLL STAGE (10 CARDS)
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
                  >
                    {/* Background Workplace Image */}
                    <Image
                      src={role.img}
                      alt={role.title.replace('\n', ' ')}
                      fill
                      sizes="(max-width: 768px) 100vw, 500px"
                      className="object-cover"
                    />

                    {/* Gradient Dim Overlay */}
                    <div className="image-overlay" />

                    {/* Ambient Glow */}
                    <div className="image-glow" />

                    {/* Big Bold Role Title */}
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
              <h3 className="text-base font-bold text-[#102B50] dark:text-white leading-tight">
                Seeking a Confidential Executive Search?
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] dark:text-neutral-300 mt-0.5">
                Director, VP, and C-suite leadership mandates operate under strict non-disclosure agreements with complete discretion.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="btn-primary-blue w-full md:w-auto text-center shrink-0 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#087FCB] to-[#00BFCB] hover:shadow-[0_0_25px_rgba(8,127,203,0.4)] transition-all hover:scale-105"
          >
            Connect With an Executive Advisor →
          </a>
        </div>
      </div>

      {/* ========================================================
          EXACT ZARVION MODAL VIEW (Image 3: 2-Column with Contact Us Button)
      ======================================================== */}
      {activeJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#070D10] border border-[#203536] rounded-3xl shadow-2xl overflow-hidden p-6 sm:p-8 md:p-10 text-white">
            {/* Close Button */}
            <button
              type="button"
              onClick={closeModal}
              aria-label="Close modal"
              className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* 2-Column Content Layout (Matching Zarvion Image 3 Exactly) */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Left Column: Big Workplace / Tech Image */}
              <div className="md:col-span-5 relative w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden border border-[#203536]">
                <Image
                  src={activeJob.img}
                  alt={activeJob.title.replace('\n', ' ')}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070D10]/80 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Right Column: Role Details, Tech Tags, 3 Stats, Contact Us Button */}
              <div className="md:col-span-7 flex flex-col justify-between h-full space-y-5">
                <div>
                  {/* Category Pill Tag */}
                  <div className="text-xs font-mono font-bold tracking-widest uppercase text-[#38BDF8] mb-2">
                    {activeJob.category}
                  </div>

                  {/* Role Title */}
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3">
                    {activeJob.title.replace('\n', ' ')}
                  </h3>

                  {/* Paragraph Description */}
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal mb-5">
                    {activeJob.description}
                  </p>

                  {/* Skills Pill Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {activeJob.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3.5 py-1.5 rounded-full text-xs font-medium text-neutral-200 bg-[#0C1517] border border-[#203536]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Horizontal Divider */}
                <div className="border-t border-[#203536]/80 pt-5">
                  {/* 3-Column Stats Summary (SALARY, DEMAND, EXPERIENCE) */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div>
                      <div className="text-[10px] font-mono text-neutral-400 font-bold uppercase tracking-wider mb-1">
                        SALARY
                      </div>
                      <div className="text-xs sm:text-sm md:text-base font-bold text-white">
                        {activeJob.salaryRange}
                      </div>
                    </div>

                    <div>
                      <div className="text-[10px] font-mono text-neutral-400 font-bold uppercase tracking-wider mb-1">
                        DEMAND
                      </div>
                      <div className="text-xs sm:text-sm md:text-base font-bold text-[#38BDF8]">
                        {activeJob.demand}
                      </div>
                    </div>

                    <div>
                      <div className="text-[10px] font-mono text-neutral-400 font-bold uppercase tracking-wider mb-1">
                        EXPERIENCE
                      </div>
                      <div className="text-xs sm:text-sm md:text-base font-bold text-white">
                        {activeJob.experienceYears}
                      </div>
                    </div>
                  </div>

                  {/* Action Button: Contact Us -> smooth scroll to #contact */}
                  <button
                    type="button"
                    onClick={handleContactUs}
                    className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full text-sm font-bold text-white bg-[#087FCB] hover:bg-[#076EAF] transition-all duration-300 shadow-[0_0_25px_rgba(8,127,203,0.4)] hover:shadow-[0_0_35px_rgba(8,127,203,0.65)] hover:scale-105 cursor-pointer group"
                  >
                    <span>Contact Us</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
