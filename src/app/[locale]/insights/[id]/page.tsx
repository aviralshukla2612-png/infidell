import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import {
  ArrowLeft,
  ArrowUpRight,
  Clock,
  Calendar,
  User,
  CheckCircle2,
  BookOpen,
  Share2
} from 'lucide-react';
import { INSIGHTS_DATA, getInsightById } from '@/data/insights';

export async function generateStaticParams() {
  const locales = ['en'];
  const params: { locale: string; id: string }[] = [];

  for (const locale of locales) {
    for (const article of INSIGHTS_DATA) {
      params.push({
        locale,
        id: article.id
      });
    }
  }

  return params;
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { id } = await params;
  const article = getInsightById(id);

  if (!article) {
    return {
      title: 'Publication Not Found | INFIDELL TECHNOLOGY'
    };
  }

  return {
    title: `${article.title} | Infidell Insights`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [
        {
          url: article.imageSrc,
          width: 1200,
          height: 630,
          alt: article.title
        }
      ]
    }
  };
}

export default async function InsightDetailPage({
  params
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale, id } = await params;
  setRequestLocale(locale);

  const article = getInsightById(id);

  if (!article) {
    notFound();
  }

  const relatedArticles = INSIGHTS_DATA.filter((item) => item.id !== article.id).slice(0, 3);

  return (
    <article className="min-h-screen bg-[#F8FAFC] dark:bg-[#050708] text-[#102B50] dark:text-white pt-28 sm:pt-36 pb-24 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Back Link with High Contrast in Both Modes */}
        <div className="mb-8">
          <Link
            href={`/${locale}#insights`}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-slate-300 dark:border-[#203536] bg-white dark:bg-[#0C1517] text-xs sm:text-sm font-bold text-[#102B50] dark:text-white hover:border-[#087FCB] dark:hover:border-[#00D5DF] hover:text-[#087FCB] dark:hover:text-[#00D5DF] shadow-sm transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Insights</span>
          </Link>
        </div>

        {/* Header Tags & Metadata */}
        <div className="flex flex-wrap items-center gap-2.5 mb-6">
          <span className="px-3.5 py-1.5 rounded-full bg-[#087FCB]/10 dark:bg-[#00D5DF]/10 border border-[#087FCB]/20 dark:border-[#00D5DF]/30 text-xs font-bold text-[#087FCB] dark:text-[#00D5DF]">
            {article.category}
          </span>
          <span className="px-3 py-1.5 rounded-full bg-white dark:bg-[#0C1517] border border-slate-200 dark:border-[#203536] text-xs font-medium text-[#64748B] dark:text-[#A5B2B3] flex items-center gap-1.5 shadow-xs">
            <Clock className="w-3.5 h-3.5 text-[#087FCB] dark:text-[#00D5DF]" />
            {article.readTime}
          </span>
          <span className="px-3 py-1.5 rounded-full bg-white dark:bg-[#0C1517] border border-slate-200 dark:border-[#203536] text-xs font-medium text-[#64748B] dark:text-[#A5B2B3] flex items-center gap-1.5 shadow-xs">
            <Calendar className="w-3.5 h-3.5 text-[#087FCB] dark:text-[#00D5DF]" />
            {article.date}
          </span>
          <span className="px-3 py-1.5 rounded-full bg-white dark:bg-[#0C1517] border border-slate-200 dark:border-[#203536] text-xs font-medium text-[#64748B] dark:text-[#A5B2B3] flex items-center gap-1.5 shadow-xs">
            <User className="w-3.5 h-3.5 text-[#087FCB] dark:text-[#00D5DF]" />
            {article.author}
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#102B50] dark:text-white tracking-tight leading-[1.15] mb-6">
          {article.title}
        </h1>

        {/* Executive Subtitle / Deck */}
        <p className="text-base sm:text-lg md:text-xl text-[#334155] dark:text-[#CAD3DC] leading-relaxed font-medium border-l-4 border-[#087FCB] dark:border-[#00D5DF] pl-5 mb-10 italic">
          {article.subtitle}
        </p>

        {/* Hero Banner Artwork */}
        <div className="relative w-full h-72 sm:h-96 md:h-[460px] rounded-3xl overflow-hidden shadow-xl mb-12 bg-slate-100 dark:bg-[#0C1517] border border-slate-200 dark:border-[#203536]">
          <Image
            src={article.imageSrc}
            alt={article.title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 900px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Article Body Content */}
        <div className="prose prose-slate dark:prose-invert max-w-none space-y-10 text-base sm:text-lg text-[#334155] dark:text-[#A5B2B3] leading-relaxed">
          {article.sections.map((section, idx) => (
            <section key={idx} className="space-y-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#102B50] dark:text-white tracking-tight">
                {section.heading}
              </h2>
              {section.paragraphs.map((para, pIdx) => (
                <p key={pIdx} className="leading-relaxed">
                  {para}
                </p>
              ))}
            </section>
          ))}
        </div>

        {/* Strategic Takeaways Box */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0C1517] border border-[#DCE5EF] dark:border-[#203536] shadow-sm">
          <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold tracking-wider uppercase text-[#087FCB] dark:text-[#00D5DF] mb-4">
            <CheckCircle2 className="w-5 h-5" />
            <span>Key Executive Takeaways</span>
          </div>
          <ul className="space-y-3">
            {article.takeaways.map((item, tIdx) => (
              <li key={tIdx} className="flex items-start gap-3 text-sm sm:text-base text-[#1E293B] dark:text-slate-200 leading-snug">
                <span className="w-2 h-2 rounded-full bg-[#087FCB] dark:bg-[#00D5DF] mt-2 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Banner: Advisory Contact */}
        <div className="mt-12 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#102B50] to-[#0A1A32] text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 border border-white/10">
          <div className="max-w-xl text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold mb-2">
              Accelerate Your Career or Engineering Team
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Connect with the Infidell advisory team for confidential executive placement or technical search mandates.
            </p>
          </div>
          <Link
            href={`/${locale}#contact`}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#087FCB] to-[#00BFCB] text-white text-xs sm:text-sm font-bold shadow-md hover:opacity-95 transition-all shrink-0 cursor-pointer"
          >
            <span>Let&apos;s Connect</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Related Publications Grid */}
        <div className="mt-16 pt-12 border-t border-slate-200 dark:border-[#203536]">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-[#102B50] dark:text-white tracking-tight">
              More Insights &amp; Publications
            </h3>
            <Link
              href={`/${locale}#insights`}
              className="text-xs sm:text-sm font-bold text-[#087FCB] dark:text-[#00D5DF] hover:underline flex items-center gap-1"
            >
              <span>View All</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedArticles.map((rel) => (
              <Link
                key={rel.id}
                href={`/${locale}/insights/${rel.id}`}
                className="group flex flex-col justify-between p-5 rounded-2xl bg-white dark:bg-[#0C1517] border border-[#DCE5EF] dark:border-[#203536] hover:border-[#087FCB] dark:hover:border-[#00D5DF] shadow-sm hover:shadow-md transition-all"
              >
                <div>
                  <div className="relative w-full h-32 rounded-xl overflow-hidden mb-4 bg-slate-100 dark:bg-[#102426]">
                    <Image
                      src={rel.imageSrc}
                      alt={rel.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, 300px"
                    />
                  </div>
                  <span className="text-[10px] font-semibold text-[#087FCB] dark:text-[#00D5DF] uppercase tracking-wider block mb-1">
                    {rel.category}
                  </span>
                  <h4 className="text-sm font-bold text-[#102B50] dark:text-white leading-snug line-clamp-2 group-hover:text-[#087FCB] dark:group-hover:text-[#00D5DF] transition-colors mb-2">
                    {rel.title}
                  </h4>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-[#203536]/80 flex items-center justify-between text-[11px] font-semibold text-[#64748B] dark:text-[#A5B2B3]">
                  <span>{rel.readTime}</span>
                  <span className="text-[#087FCB] dark:text-[#00D5DF] group-hover:translate-x-0.5 transition-transform">Read ↗</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </article>
  );
}
