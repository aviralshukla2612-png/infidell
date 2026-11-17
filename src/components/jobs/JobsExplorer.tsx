'use client';

import React, { useState, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Job } from '@/types';
import { 
  Search, 
  MapPin, 
  Briefcase, 
  Building2, 
  IndianRupee, 
  Filter, 
  ArrowRight, 
  X, 
  CheckCircle2, 
  Sparkles,
  Calendar
} from 'lucide-react';

interface JobsExplorerProps {
  initialJobs: Job[];
}

export function JobsExplorer({ initialJobs }: JobsExplorerProps) {
  const t = useTranslations('Jobs');

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedExperience, setSelectedExperience] = useState('all');
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  // Extract unique industries from jobs
  const industries = useMemo(() => {
    const list = Array.from(new Set(initialJobs.map((j) => j.industry)));
    return ['all', ...list];
  }, [initialJobs]);

  const experienceLevels = [
    'all',
    'Fresher (0-1 yrs)',
    'Mid-Level (2-5 yrs)',
    'Senior (6+ yrs)'
  ];

  const filteredJobs = useMemo(() => {
    return initialJobs.filter((job) => {
      const matchesSearch =
        searchTerm === '' ||
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.skills.some((s) => s.toLowerCase().includes(searchTerm.toLowerCase())) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesIndustry =
        selectedIndustry === 'all' || job.industry.toLowerCase() === selectedIndustry.toLowerCase();

      const matchesExperience =
        selectedExperience === 'all' || job.experienceLevel === selectedExperience;

      return matchesSearch && matchesIndustry && matchesExperience;
    });
  }, [initialJobs, searchTerm, selectedIndustry, selectedExperience]);

  return (
    <div className="space-y-8">
      {/* Search & Filter Bar */}
      <div className="glass-panel rounded-2xl p-4 sm:p-6 border border-[#202A30] shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          {/* Keyword Search */}
          <div className="md:col-span-6 relative">
            <Search className="w-4 h-4 text-[#AEB8C2] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={t('searchPlaceholder')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#080B0E] border border-[#202A30] text-sm text-white placeholder-[#AEB8C2]/60 focus:outline-none focus:border-[#00E5F0] transition-colors"
            />
          </div>

          {/* Industry Filter */}
          <div className="md:col-span-3">
            <select
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className="w-full px-3.5 py-3 rounded-xl bg-[#080B0E] border border-[#202A30] text-sm text-white focus:outline-none focus:border-[#00E5F0] transition-colors cursor-pointer"
            >
              <option value="all">{t('allIndustries')}</option>
              {industries.filter((i) => i !== 'all').map((ind) => (
                <option key={ind} value={ind}>
                  {ind}
                </option>
              ))}
            </select>
          </div>

          {/* Experience Filter */}
          <div className="md:col-span-3">
            <select
              value={selectedExperience}
              onChange={(e) => setSelectedExperience(e.target.value)}
              className="w-full px-3.5 py-3 rounded-xl bg-[#080B0E] border border-[#202A30] text-sm text-white focus:outline-none focus:border-[#00E5F0] transition-colors cursor-pointer"
            >
              <option value="all">{t('allExperience')}</option>
              <option value="Fresher (0-1 yrs)">{t('expFresher')}</option>
              <option value="Mid-Level (2-5 yrs)">{t('expMid')}</option>
              <option value="Senior (6+ yrs)">{t('expSenior')}</option>
            </select>
          </div>
        </div>

        {/* Active Results Summary */}
        <div className="mt-4 pt-4 border-t border-[#202A30] flex items-center justify-between text-xs text-[#AEB8C2]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00E5F0]" />
            <span className="font-semibold text-white">{filteredJobs.length}</span>
            <span>{t('openingsCount')}</span>
          </div>

          {(searchTerm || selectedIndustry !== 'all' || selectedExperience !== 'all') && (
            <button
              type="button"
              onClick={() => {
                setSearchTerm('');
                setSelectedIndustry('all');
                setSelectedExperience('all');
              }}
              className="text-[#00E5F0] hover:underline"
            >
              Reset Filters
            </button>
          )}
        </div>
      </div>

      {/* Jobs Grid */}
      {filteredJobs.length === 0 ? (
        <div className="glass-panel rounded-2xl p-12 text-center border border-[#202A30]">
          <Briefcase className="w-12 h-12 text-[#202A30] mx-auto mb-4" />
          <h3 className="text-lg font-bold text-white mb-2">No Matching Opportunities</h3>
          <p className="text-sm text-[#AEB8C2] max-w-md mx-auto mb-6">
            {t('noJobs')}
          </p>
          <Link
            href="/register/candidate"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold text-black bg-[#00E5F0] hover:bg-[#00BFD0] transition-all"
          >
            Register Profile for Future Openings
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="glass-panel rounded-2xl p-6 border border-[#202A30] hover:border-[#00E5F0]/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Header tags */}
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#00E5F0]/10 text-[#00E5F0] border border-[#00E5F0]/30 uppercase">
                    {job.industry}
                  </span>
                  <span className="text-[11px] text-[#AEB8C2]">
                    {job.type}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-[#00E5F0] transition-colors mb-2">
                  {job.title}
                </h3>

                <p className="text-xs text-[#AEB8C2] line-clamp-2 leading-relaxed mb-4">
                  {job.description}
                </p>

                {/* Badges: Location, Experience, Salary */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 py-3 border-y border-[#202A30]/60 text-xs mb-4">
                  <div className="flex items-center gap-1.5 text-[#AEB8C2]">
                    <MapPin className="w-3.5 h-3.5 text-[#00E5F0] flex-shrink-0" />
                    <span className="truncate">{job.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#AEB8C2]">
                    <Briefcase className="w-3.5 h-3.5 text-[#00C7B1] flex-shrink-0" />
                    <span className="truncate">{job.experienceYears}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-white font-medium">
                    <IndianRupee className="w-3.5 h-3.5 text-[#00BFD0] flex-shrink-0" />
                    <span className="truncate">{job.salaryRange}</span>
                  </div>
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {job.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded text-[10px] font-medium bg-[#0A0D10] border border-[#202A30] text-[#AEB8C2]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={() => setSelectedJob(job)}
                  className="text-xs font-semibold text-[#AEB8C2] hover:text-white transition-colors"
                >
                  {t('viewDetails')}
                </button>

                <Link
                  href={`/register/candidate?job=${encodeURIComponent(job.title)}&jobId=${job.id}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-black bg-[#00E5F0] hover:bg-[#00BFD0] transition-colors shadow-[0_0_15px_rgba(0,229,240,0.25)]"
                >
                  <span>{t('apply')}</span>
                  <ArrowRight className="w-3 h-3 text-black" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Quick View Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="glass-panel w-full max-w-2xl rounded-2xl border border-[#00E5F0]/40 p-6 sm:p-8 max-h-[90vh] overflow-y-auto relative shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedJob(null)}
              className="absolute top-5 right-5 p-1.5 rounded-full bg-[#0A0D10] text-[#AEB8C2] hover:text-white border border-[#202A30] hover:border-[#00E5F0] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-4">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#00E5F0]/10 text-[#00E5F0] border border-[#00E5F0]/30 uppercase">
                {selectedJob.industry}
              </span>
              <h2 className="text-2xl font-bold text-white mt-2">
                {selectedJob.title}
              </h2>
              <p className="text-xs text-[#00E5F0] mt-1 font-medium">
                Placement Opportunity via Infidell Technology LLP
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 py-4 border-y border-[#202A30] my-4 text-xs">
              <div>
                <span className="text-[#AEB8C2] block">Location</span>
                <span className="font-semibold text-white">{selectedJob.location}</span>
              </div>
              <div>
                <span className="text-[#AEB8C2] block">Experience</span>
                <span className="font-semibold text-white">{selectedJob.experienceYears}</span>
              </div>
              <div>
                <span className="text-[#AEB8C2] block">Compensation</span>
                <span className="font-semibold text-[#00E5F0]">{selectedJob.salaryRange}</span>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-[#AEB8C2]">
              <div>
                <h4 className="font-bold text-white mb-1.5">Overview</h4>
                <p className="leading-relaxed">{selectedJob.description}</p>
              </div>

              <div>
                <h4 className="font-bold text-white mb-2">Key Requirements & Qualifications</h4>
                <ul className="space-y-2">
                  {selectedJob.requirements.map((req, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#00C7B1] flex-shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-white mb-2">Required Core Skills</h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedJob.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-[#0A0D10] border border-[#00E5F0]/30 text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#202A30] flex items-center justify-between">
              <span className="text-xs text-[#AEB8C2]">
                Zero candidate fees at any stage
              </span>
              <Link
                href={`/register/candidate?job=${encodeURIComponent(selectedJob.title)}&jobId=${selectedJob.id}`}
                className="px-6 py-2.5 rounded-full text-xs font-bold text-black bg-[#00E5F0] hover:bg-[#00BFD0] transition-colors shadow-[0_0_20px_rgba(0,229,240,0.3)]"
              >
                Apply via Infidell
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

