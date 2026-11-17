'use client';

import React, { useRef } from 'react';
import { useTranslations } from 'next-intl';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { 
  ArrowUpRight, 
  Sparkles, 
  ShieldCheck, 
  Target, 
  Compass, 
  BriefcaseBusiness,
  CheckCircle2,
  Quote
} from 'lucide-react';

export function AboutSection() {
  const t = useTranslations('About');
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  // Luna UI inspired 4-card gateway ecosystem
  const gateways = [
    {
      id: 'gw-candidate',
      label: 'For Candidates',
      title: 'Guided Career Navigation',
      desc: 'Personalized evaluation, resume elevation, and direct interview briefings with decision-makers.',
      href: '#candidate',
      tag: 'Zero Candidate Fees'
    },
    {
      id: 'gw-employer',
      label: 'For Employers',
      title: 'Curated Talent Delivery',
      desc: 'Pre-screened professionals matched for technical rigor, culture fit, and long-term retention.',
      href: '#employer',
      tag: '48-72h Shortlists'
    },
    {
      id: 'gw-process',
      label: 'Our Architecture',
      title: 'Simple & Transparent Process',
      desc: 'A structured 5-step placement pipeline ensuring total clarity at every hiring milestone.',
      href: '#process',
      tag: 'Full Transparency'
    },
    {
      id: 'gw-insights',
      label: 'Knowledge Hub',
      title: 'Strategic Career Briefings',
      desc: 'Industry intelligence, compensation benchmarks, and career transition frameworks.',
      href: '#insights',
      tag: 'Market Research'
    }
  ];

  // Luna UI inspired "The Path" milestones (001, 002, 003, 004)
  const milestones = [
    {
      index: '001.',
      phase: 'Foundations · Ethical Stance',
      title: 'A Different Lens on Recruitment',
      desc: 'We started Infidell with a refusal to treat talent as transactional leads. We assess careers the way great institutions evaluate partners — deeply, patiently, and with genuine accountability.'
    },
    {
      index: '002.',
      phase: 'Direct Access · Vetted Mandates',
      title: 'Bypassing the Algorithmic Black Hole',
      desc: 'No automated queues or unmonitored job board spam. We established direct corporate channels connecting ambitious professionals with verified hiring decision-makers.'
    },
    {
      index: '003.',
      phase: 'The Ecosystem · Holistic Advisory',
      title: 'Infidell Becomes a Career Navigation System',
      desc: 'Beyond simple matching, we built tailored interview briefings, ATS resume optimization, project portfolio reviews, and compensation benchmarking.'
    },
    {
      index: '004.',
      phase: 'The Standard · Nationwide Growth',
      title: 'A Trusted Placement Bridge',
      desc: 'Today, Infidell bridges thousands of professionals with verified corporate partners across IT, Engineering, Finance, and Enterprise verticals with 100% free candidate access.'
    }
  ];

  // Luna UI minimalist metrics counters
  const metrics = [
    { value: '4,800+', label: 'Verified Placements', sub: 'Across Tier-1 IT & Corporate Partners' },
    { value: '350+', label: 'Hiring Partners', sub: 'Startups, Mid-Market & Enterprises' },
    { value: '15,000+', label: 'Profiles Evaluated', sub: 'In-Depth Technical & Cultural Reviews' },
    { value: '₹0', label: 'Candidate Fees', sub: 'Zero Placement or Registration Charges' }
  ];

  useGSAP(
    () => {
      if (typeof window === 'undefined') return;
      gsap.registerPlugin(ScrollTrigger);

      // 1. Headline words reveal
      if (headlineRef.current) {
        const words = headlineRef.current.querySelectorAll('.about-word');
        gsap.fromTo(
          words,
          { opacity: 0, y: 30, filter: 'blur(6px)' },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 0.8,
            stagger: 0.05,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headlineRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none'
            }
          }
        );
      }

      // 2. Gateway Cards Stagger
      gsap.fromTo(
        '.about-gw-card',
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.about-gw-grid',
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );

      // 3. Founder's Note Reveal
      gsap.fromTo(
        '.about-creed-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about-creed-card',
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );

      // 4. Milestone Timeline Cards Stagger
      gsap.fromTo(
        '.about-path-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.14,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.about-path-grid',
            start: 'top 80%',
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
      id="about"
      className="py-24 sm:py-32 bg-[#050708] relative overflow-hidden border-t border-[#203536]/80 text-[#F5F8F8]"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-[#17BEBB]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/3 -right-40 w-[550px] h-[550px] bg-[#102426]/35 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ========================================================
            PART 1: LUNA UI INSPIRED INTRO & HEADLINE
        ======================================================== */}
        <div className="max-w-4xl mb-16 sm:mb-20">
          {/* Monospace Badge with Pulse */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0C1517] border border-[#203536] text-xs font-mono text-[#17BEBB] mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D5DF] animate-pulse" />
            <span>ABOUT · INFIDELL TECHNOLOGY LLP</span>
          </div>

          <h2 
            ref={headlineRef}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-extrabold tracking-tight text-[#F5F8F8] leading-[1.08] mb-8"
          >
            <span className="about-word inline-block mr-2.5">People</span>
            <span className="about-word inline-block mr-2.5">First.</span>
            <span className="block mt-1 sm:mt-2">
              <span className="about-word inline-block mr-2.5 text-[#00D5DF]">Possibilities</span>
              <span className="about-word inline-block mr-2.5">Without</span>
              <span className="about-word inline-block cyan-text-gradient">Limits.</span>
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-[#A5B2B3] max-w-2xl leading-relaxed font-normal">
            One dedicated placement firm, zero bureaucratic noise. Built on the conviction that recruitment shouldn&apos;t be an automated queue, but an intentional partnership between human ambition and verified opportunity.
          </p>
        </div>

        {/* ========================================================
            PART 2: LUNA UI 4-GATEWAY ECOSYSTEM CARDS
        ======================================================== */}
        <div className="about-gw-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-24 sm:mb-32">
          {gateways.map((gw) => (
            <a
              key={gw.id}
              href={gw.href}
              className="about-gw-card p-6 sm:p-7 rounded-2xl bg-[#0C1517] border border-[#203536] hover:border-[#17BEBB]/60 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#17BEBB]">
                    {gw.label}
                  </span>
                  <div className="w-7 h-7 rounded-full border border-[#203536] flex items-center justify-center text-[#A5B2B3] group-hover:text-white group-hover:border-[#17BEBB] transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#F5F8F8] mb-2.5 group-hover:text-[#00D5DF] transition-colors">
                  {gw.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#A5B2B3] leading-relaxed mb-6 font-normal">
                  {gw.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-[#203536]/80 flex items-center justify-between text-[11px] font-semibold text-[#17BEBB]">
                <span>{gw.tag}</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </a>
          ))}
        </div>

        {/* ========================================================
            PART 3: FOUNDER'S NOTE / LEADERSHIP CREED
        ======================================================== */}
        <div className="about-creed-card p-8 sm:p-12 lg:p-16 rounded-3xl bg-gradient-to-br from-[#102426] via-[#0C1517] to-[#0A1113] border border-[#203536] relative overflow-hidden mb-24 sm:mb-32">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#17BEBB]/15 rounded-full blur-[90px] pointer-events-none" />

          <div className="max-w-4xl relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-[#0C1517] border border-[#203536] flex items-center justify-center text-[#00D5DF]">
                <Quote className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono font-bold text-[#17BEBB] uppercase tracking-widest">
                LEADERSHIP CREED
              </span>
            </div>

            <blockquote className="space-y-6 text-lg sm:text-2xl md:text-3xl font-extrabold text-[#F5F8F8] tracking-tight leading-snug">
              <p>
                &ldquo;The hardest part of modern recruitment isn&apos;t gathering resumes or sending bulk applications. Automated algorithms are cheap now; AI bots can spam them by the thousand.
              </p>
              <p className="text-[#00D5DF]">
                The hard part is the human thinking behind it: understanding what makes someone thrive, assessing authentic technical depth, and connecting people to teams where they stay and grow.
              </p>
              <p className="text-base sm:text-xl text-[#A5B2B3] font-normal leading-relaxed">
                A career that burns as bright as a star in a market full of noise. That&apos;s why we built Infidell.&rdquo;
              </p>
            </blockquote>

            <div className="mt-10 pt-8 border-t border-[#203536] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h4 className="text-base font-bold text-[#F5F8F8]">Talent Advisory Board</h4>
                <p className="text-xs font-mono text-[#A5B2B3]">INFIDELL TECHNOLOGY LLP · Gujarat &amp; India</p>
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-[#17BEBB]">
                <ShieldCheck className="w-4 h-4 text-[#00D5DF]" />
                <span>Verified Ethical Recruitment Charter</span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            PART 4: LUNA UI MONOSPACE STATS BAR
        ======================================================== */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-24 sm:mb-32">
          {metrics.map((m, idx) => (
            <div 
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-[#0C1517] border border-[#203536] relative overflow-hidden group hover:border-[#17BEBB]/40 transition-colors"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-mono font-black text-[#F5F8F8] tracking-tight mb-2 group-hover:text-[#00D5DF] transition-colors">
                {m.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#F5F8F8] mb-1">
                {m.label}
              </div>
              <div className="text-[11px] sm:text-xs text-[#A5B2B3] leading-snug">
                {m.sub}
              </div>
            </div>
          ))}
        </div>

        {/* ========================================================
            PART 5: "THE PATH" · MILESTONES (001, 002, 003, 004)
        ======================================================== */}
        <div className="mb-24 sm:mb-32">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <div className="text-xs font-mono font-bold text-[#17BEBB] tracking-widest uppercase mb-3">
              THE PATH
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-[#F5F8F8] tracking-tight">
              How Infidell Evolved Into a Complete System
            </h3>
          </div>

          <div className="about-path-grid grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {milestones.map((m) => (
              <div
                key={m.index}
                className="about-path-card p-8 rounded-2xl bg-[#0C1517] border border-[#203536] hover:border-[#17BEBB]/50 transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl sm:text-3xl font-mono font-black text-[#102426] group-hover:text-[#17BEBB] transition-colors">
                      {m.index}
                    </span>
                    <span className="text-xs font-mono text-[#00D5DF] bg-[#102426] px-3 py-1 rounded-full border border-[#203536]">
                      {m.phase}
                    </span>
                  </div>

                  <h4 className="text-lg sm:text-xl font-bold text-[#F5F8F8] mb-3 group-hover:text-[#00D5DF] transition-colors">
                    {m.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-[#A5B2B3] leading-relaxed font-normal">
                    {m.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#203536]/80 flex items-center justify-between text-xs text-[#17BEBB] font-mono">
                  <span>Standard of Practice</span>
                  <CheckCircle2 className="w-4 h-4 text-[#17BEBB]" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================
            PART 6: "THE THINKING BEHIND IT" LARGE EDITORIAL STATEMENT
        ======================================================== */}
        <div className="p-8 sm:p-14 lg:p-16 rounded-3xl bg-[#0A1113] border border-[#203536] relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="max-w-3xl">
            <div className="text-xs font-mono font-bold text-[#17BEBB] uppercase tracking-widest mb-4">
              THE PHILOSOPHY
            </div>
            <p className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-[#F5F8F8] tracking-tight leading-snug mb-4">
              &ldquo;Placement comes last for us. First, we need to understand how you think, where your skills create the highest leverage, and what kind of team brings out your best work.&rdquo;
            </p>
            <p className="text-xs sm:text-sm text-[#A5B2B3]">
              That is why candidate retention on Infidell placements consistently exceeds industry averages.
            </p>
          </div>

          <a
            href="#candidate"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-xs sm:text-sm font-bold text-black bg-[#17BEBB] hover:bg-[#00D5DF] transition-all shadow-[0_0_25px_rgba(23,190,187,0.35)] hover:shadow-[0_0_35px_rgba(0,213,223,0.5)] flex-shrink-0 text-center"
          >
            <span>Explore Your Path</span>
            <ArrowUpRight className="w-4 h-4 text-black" />
          </a>
        </div>

      </div>
    </section>
  );
}
