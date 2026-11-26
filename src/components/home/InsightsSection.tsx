'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import {
  ArrowUpRight,
  Clock,
  BookOpen
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { FEATURED_ARTICLE, SUPPORTING_ARTICLES } from '@/data/insights';

export function InsightsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const locale = useLocale();

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

          {/* Featured Article (Left 7 Cols) - Navigates to dedicated page */}
          <Link
            href={`/${locale}/insights/${FEATURED_ARTICLE.id}`}
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
          </Link>

          {/* Supporting Articles List with Banners (Right 5 Cols) - Navigates to dedicated pages */}
          <div className="lg:col-span-5 insight-supporting-list flex flex-col justify-between gap-5">
            {SUPPORTING_ARTICLES.map((article) => (
              <Link
                key={article.id}
                href={`/${locale}/insights/${article.id}`}
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
              </Link>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
