import React from 'react';
import { setRequestLocale } from 'next-intl/server';
import { verifiedJobs } from '@/data/jobs';
import { JobsExplorer } from '@/components/jobs/JobsExplorer';

export default async function JobsPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="pt-32 pb-24 bg-[#000000] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A0D10] border border-[#00E5F0]/30 text-xs font-bold text-[#00E5F0] uppercase tracking-widest mb-4">
            Active Openings
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Explore Career Opportunities
          </h1>
          <p className="text-base sm:text-lg text-[#AEB8C2] mt-3 leading-relaxed">
            Browse verified job openings across India. Register your profile to get pre-screened and introduced directly to client hiring managers.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <JobsExplorer initialJobs={verifiedJobs} />
      </div>
    </div>
  );
}

