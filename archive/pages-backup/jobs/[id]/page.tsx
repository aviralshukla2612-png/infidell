import React from 'react';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { verifiedJobs } from '@/data/jobs';
import { 
  Building2, 
  MapPin, 
  Briefcase, 
  IndianRupee, 
  CheckCircle2, 
  Calendar, 
  ArrowLeft, 
  ArrowRight, 
  ShieldCheck 
} from 'lucide-react';

export function generateStaticParams() {
  return verifiedJobs.map((job) => ({ id: job.id }));
}

export default async function JobDetailPage({
  params
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale, id } = await params;
  setRequestLocale(locale);

  const job = verifiedJobs.find((j) => j.id === id);

  if (!job) {
    notFound();
  }

  return (
    <div className="pt-32 pb-24 bg-[#000000] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-6">
          <Link
            href="/jobs"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#AEB8C2] hover:text-[#00E5F0] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Opportunities</span>
          </Link>
        </div>

        {/* Job Card Header */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-[#202A30] mb-8 shadow-xl">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#00E5F0]/10 text-[#00E5F0] border border-[#00E5F0]/30 uppercase">
              {job.industry}
            </span>
            <span className="text-xs text-[#AEB8C2] bg-white/5 px-3 py-1 rounded-full border border-white/10">
              Verified Hiring Partner
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            {job.title}
          </h1>

          <p className="text-xs sm:text-sm text-[#00E5F0] font-medium mb-6">
            Recruitment & Placement Assistance via INFIDELL TECHNOLOGY LLP
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-[#202A30] text-xs">
            <div>
              <span className="text-[#AEB8C2] block mb-0.5">Location</span>
              <span className="font-semibold text-white flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#00E5F0]" />
                {job.location}
              </span>
            </div>
            <div>
              <span className="text-[#AEB8C2] block mb-0.5">Experience</span>
              <span className="font-semibold text-white flex items-center gap-1">
                <Briefcase className="w-3.5 h-3.5 text-[#00C7B1]" />
                {job.experienceYears}
              </span>
            </div>
            <div>
              <span className="text-[#AEB8C2] block mb-0.5">Compensation</span>
              <span className="font-semibold text-[#00E5F0] flex items-center gap-1">
                <IndianRupee className="w-3.5 h-3.5 text-[#00E5F0]" />
                {job.salaryRange}
              </span>
            </div>
            <div>
              <span className="text-[#AEB8C2] block mb-0.5">Employment Type</span>
              <span className="font-semibold text-white">
                {job.type}
              </span>
            </div>
          </div>

          {/* Quick Apply button */}
          <div className="pt-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-[#AEB8C2]">
              <ShieldCheck className="w-4 h-4 text-[#00C7B1]" />
              <span>Zero candidate fees at any stage of placement.</span>
            </div>

            <Link
              href={`/register/candidate?job=${encodeURIComponent(job.title)}&jobId=${job.id}`}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-xs font-bold text-black bg-[#00E5F0] hover:bg-[#00BFD0] transition-colors shadow-[0_0_20px_rgba(0,229,240,0.3)]"
            >
              <span>Apply via Infidell</span>
              <ArrowRight className="w-4 h-4 text-black" />
            </Link>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-[#202A30] space-y-8 text-sm text-[#AEB8C2] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">Role Overview</h2>
            <p>{job.description}</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">Key Responsibilities & Candidate Criteria</h2>
            <ul className="space-y-2.5">
              {job.requirements.map((req, rIdx) => (
                <li key={rIdx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00C7B1] flex-shrink-0 mt-0.5" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">Required Technical & Functional Skills</h2>
            <div className="flex flex-wrap gap-2 pt-1">
              {job.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="px-3 py-1 rounded-lg text-xs font-semibold bg-[#0A0D10] border border-[#00E5F0]/30 text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          <section className="pt-6 border-t border-[#202A30] space-y-3">
            <h3 className="text-base font-bold text-white">Infidell Candidate Support Guarantee</h3>
            <p className="text-xs">
              When you submit your application through Infidell, our specialized recruitment consultants review your profile within 48 hours, optimize your resume for client presentation, and provide interview briefing sessions prior to employer rounds.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

