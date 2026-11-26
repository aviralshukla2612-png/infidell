'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { ArrowUpRight, Clock, BookOpen } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

interface InsightArticle {
  id: string;
  date: string;
  author: string;
  title: string;
  excerpt: string;
  category: string;
  imageSrc: string;
  readTime: string;
}

const FEATURED_ARTICLE: InsightArticle = {
  id: 'architecture-of-high-retention-hiring',
  date: 'November 2026',
  author: 'Infidell Research Desk',
  title: 'The Architecture of High-Retention Hiring: Why Ethical Alignment Outperforms Volume Sourcing',
  excerpt:
    'Modern talent acquisition demands more than automated algorithmic matching. Discover how cultural resonance, transparent skill vetting, and candidate-centric advocacy build enduring engineering and corporate teams that stay and scale.',
  category: 'Talent Strategy',
  imageSrc: '/images/insights/insight-talent-acquisition.jpg',
  readTime: '6 min read'
};

const SUPPORTING_ARTICLES: InsightArticle[] = [
  {
    id: 'navigating-career-inflection-points',
    date: 'October 2026',
    author: 'Career Advisory Board',
    title: 'Navigating Career Inflection Points: How Senior Specialists Transition into Strategic Leadership',
    excerpt:
      'Proven frameworks for professionals seeking to advance beyond technical execution into organizational influence, compensated fairly under market benchmarks.',
    category: 'Career Trajectory',
    imageSrc: '/images/insights/insight-tech-roles.jpg',
    readTime: '4 min read'
  },
  {
    id: 'evaluating-unverified-placement',
    date: 'October 2026',
    author: 'Governance & Ethics',
    title: 'Evaluating Unverified Placement Guarantees in Tech Staffing',
    excerpt:
      'Why reputable enterprises are turning away from aggressive volume brokers in favor of ethical search firms with transparent engagement models.',
    category: 'Recruitment Ethics',
    imageSrc: '/images/insights/insight-social-vetting.jpg',
    readTime: '5 min read'
  },
  {
    id: 'emerging-compensation-skill-demands',
    date: 'October 2026',
    author: 'Talent Analytics Team',
    title: 'Emerging Compensation & Skill Demands Across Enterprise Engineering Teams in 2026',
    excerpt:
      'A data-driven appraisal of cloud infrastructure, enterprise security, and full-stack proficiencies commanding premium retention packages this year.',
    category: 'Market Intelligence',
    imageSrc: '/images/insights/insight-h1b-visa.jpg',
    readTime: '5 min read'
  }
];

export function InsightsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (typeof window === 'undefined') return;
      gsap.registerPlugin(ScrollTrigger);

      // Featured card reveal
      gsap.fromTo(
        '.insight-featured-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.insight-featured-card',
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );

      // Staggered supporting rows
      gsap.fromTo(
        '.insight-supporting-row',
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.75,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.insight-supporting-list',
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
      id="insights" 
      className="relative w-full bg-[#050708] text-white py-24 sm:py-32 overflow-hidden border-t border-[#203536]/80"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#17BEBB]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F5F8F8] tracking-tight leading-[1.12]">
              Insights That Shape <br />
              <span className="cyan-text-gradient">Careers &amp; Enterprise Growth</span>
            </h2>
          </div>

          <a
            href="#footer"
            className="group inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-full border border-[#203536] bg-[#0C1517] text-xs sm:text-sm font-bold text-[#F5F8F8] hover:border-[#17BEBB] hover:bg-[#102426] transition-all duration-300 self-start sm:self-auto cursor-pointer"
          >
            <span>View All Publications</span>
            <ArrowUpRight className="w-4 h-4 text-[#17BEBB] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Asymmetric Editorial Layout: 1 Large Featured + 3 Supporting Rows */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Featured Article (Left 7 Cols) */}
          <article className="lg:col-span-7 insight-featured-card rounded-3xl bg-[#0C1517] border border-[#203536] p-6 sm:p-8 flex flex-col justify-between hover:border-[#17BEBB]/60 transition-all duration-300 group relative overflow-hidden">
            <div>
              {/* Image Container with smooth reveal */}
              <div className="w-full h-64 sm:h-80 rounded-2xl overflow-hidden relative mb-6 bg-[#102426]">
                <Image
                  src={FEATURED_ARTICLE.imageSrc}
                  alt={FEATURED_ARTICLE.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C1517] via-transparent to-transparent pointer-events-none" />
                
                {/* Category & Read Time Tags */}
                <div className="absolute top-4 left-4 flex items-center gap-2 z-10">
                  <span className="px-3.5 py-1.5 rounded-full bg-[#0C1517]/85 border border-[#203536] backdrop-blur-md text-xs font-bold text-[#00D5DF]">
                    {FEATURED_ARTICLE.category}
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-[#050708]/75 backdrop-blur-md text-[11px] font-medium text-[#A5B2B3] flex items-center gap-1.5">
                    <Clock className="w-3 h-3 text-[#17BEBB]" />
                    {FEATURED_ARTICLE.readTime}
                  </span>
                </div>
              </div>

              {/* Meta */}
              <div className="text-xs text-[#A5B2B3] font-medium mb-3">
                {FEATURED_ARTICLE.date} • {FEATURED_ARTICLE.author}
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#F5F8F8] tracking-tight leading-snug mb-3 group-hover:text-[#00D5DF] transition-colors">
                {FEATURED_ARTICLE.title}
              </h3>

              {/* Excerpt */}
              <p className="text-xs sm:text-sm text-[#A5B2B3] leading-relaxed mb-6 font-normal">
                {FEATURED_ARTICLE.excerpt}
              </p>
            </div>

            {/* Read Action */}
            <div className="pt-4 border-t border-[#203536] flex items-center justify-between text-xs font-bold text-[#17BEBB] group-hover:text-[#F5F8F8] transition-colors">
              <span className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#00D5DF]" />
                Read Strategic Briefing
              </span>
              <span className="text-base transition-transform duration-300 group-hover:translate-x-1.5">→</span>
            </div>
          </article>

          {/* Supporting Articles List (Right 5 Cols) */}
          <div className="lg:col-span-5 insight-supporting-list flex flex-col justify-between gap-5">
            {SUPPORTING_ARTICLES.map((article) => (
              <article
                key={article.id}
                className="insight-supporting-row p-5 sm:p-6 rounded-2xl bg-[#0C1517] border border-[#203536] hover:border-[#00D5DF]/60 transition-all duration-300 group flex flex-col justify-between flex-1"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] text-[#A5B2B3] mb-2.5">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#102426] border border-[#203536] text-[#00D5DF] font-semibold text-[10px]">
                      {article.category}
                    </span>
                    <span>{article.readTime}</span>
                  </div>

                  <h4 className="text-base font-bold text-[#F5F8F8] leading-snug mb-2 group-hover:text-[#17BEBB] transition-colors line-clamp-2">
                    {article.title}
                  </h4>

                  <p className="text-xs text-[#A5B2B3] leading-relaxed line-clamp-2">
                    {article.excerpt}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#203536]/80 flex items-center justify-between text-[11px] font-bold text-[#A5B2B3] group-hover:text-[#00D5DF] transition-colors">
                  <span>{article.date}</span>
                  <div className="flex items-center gap-1 text-[#17BEBB]">
                    <span>Read Article</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
