'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

interface InsightArticle {
  id: string;
  date: string;
  author: string;
  title: string;
  excerpt: string;
  category: string;
  imageSrc: string;
}

const INSIGHTS: InsightArticle[] = [
  {
    id: 'talent-acquisition-partner',
    date: 'November 4, 2026',
    author: 'Rudra Patel',
    title: 'Talent Acquisition Recruitment Agency: How to Choose the Right Partner',
    excerpt:
      'Choosing a talent acquisition recruitment agency is one of those pivotal decisions that shapes your engineering and corporate hiring for years to come.',
    category: 'Hiring Strategy',
    imageSrc: '/images/insights/insight-talent-acquisition.jpg'
  },
  {
    id: 'top-roles-international-students',
    date: 'October 30, 2026',
    author: 'Shilp Patel',
    title: 'Top Roles Open to International Students in the US Tech Market',
    excerpt:
      'Which jobs do US employers actually fill with international graduates? Here is our comprehensive breakdown of tech, cloud, and engineering mandates.',
    category: 'Career Growth',
    imageSrc: '/images/insights/insight-tech-roles.jpg'
  },
  {
    id: 'social-media-vetting-f1',
    date: 'October 26, 2026',
    author: 'Nisarg Patel',
    title: 'Social Media Vetting for F-1 Students: What the USCIS Looks For',
    excerpt:
      "Your online presence is now part of your visa file. Here's what the rules say and how to optimize your digital professional footprint.",
    category: 'Compliance',
    imageSrc: '/images/insights/insight-social-vetting.jpg'
  },
  {
    id: 'h1b-visa-jobs-usa',
    date: 'October 22, 2026',
    author: 'Dwijen Barot',
    title: 'H1B Visa Jobs in the USA: What International Candidates Must Know',
    excerpt:
      'The H-1B path is still open, but it looks different from what it did two years ago. Discover verified cap-exempt and enterprise corporate avenues.',
    category: 'Global Careers',
    imageSrc: '/images/insights/insight-h1b-visa.jpg'
  }
];

export function InsightsSection() {
  return (
    <section id="insights" className="relative w-full bg-[#000000] text-white py-20 sm:py-28 lg:py-32 overflow-hidden select-none border-t border-white/[0.06]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Title & "View All Insights" Button */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-xl">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.12]">
              Insights That <br className="hidden sm:inline" />
              Empower Careers &amp; Businesses
            </h2>
          </div>

          <a
            href="#footer"
            className="group inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 rounded-full border border-white/20 bg-white/5 text-xs sm:text-sm font-bold text-white shadow-sm hover:bg-white hover:text-black hover:border-white transition-all duration-300 self-start sm:self-auto cursor-pointer"
          >
            <span>View All Insights</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* 4 Cards Grid with Editorial Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {INSIGHTS.map((article) => (
            <article
              key={article.id}
              className="group flex flex-col justify-between rounded-2xl bg-[#090D14] border border-white/[0.09] p-4 transition-all duration-300 hover:shadow-[0_16px_45px_rgba(0,0,0,0.85)] hover:border-white/25 hover:-translate-y-1.5 cursor-pointer relative overflow-hidden"
            >
              <div>
                {/* Visual Banner with Generated Editorial Illustration */}
                <div className="w-full h-44 sm:h-48 rounded-xl overflow-hidden relative border border-white/[0.08] group-hover:scale-[1.01] transition-transform duration-300 bg-neutral-900">
                  <Image
                    src={article.imageSrc}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  
                  {/* Subtle dark gradient overlay for text readability & depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 pointer-events-none" />

                  {/* Category Pill Floating in Corner */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-block px-3 py-1 rounded-full bg-black/70 border border-white/20 backdrop-blur-md text-[10px] sm:text-xs font-bold text-white shadow-sm">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Date & Author */}
                <div className="text-[11px] sm:text-xs text-neutral-400 font-medium mt-4">
                  {article.date} • {article.author}
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug mt-2 group-hover:text-[#00E5F0] transition-colors duration-200 line-clamp-2">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mt-2 line-clamp-3 font-normal">
                  {article.excerpt}
                </p>
              </div>

              {/* Bottom Read More Action */}
              <div className="mt-5 pt-3.5 border-t border-white/[0.08] flex items-center justify-between text-xs font-bold text-[#00E5F0] group-hover:text-white transition-colors">
                <span>Read Full Article</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
