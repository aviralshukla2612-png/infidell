import React from 'react';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { 
  FileSearch, 
  Target, 
  Users, 
  Award, 
  Building, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck 
} from 'lucide-react';

export default async function ServicesPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const services = [
    {
      title: 'Candidate Screening & Profile Auditing',
      desc: 'Comprehensive evaluation of candidate academic credentials, functional skills, and CV restructuring to pass modern ATS screening and catch hiring manager attention.',
      candidateBenefit: 'CV optimization and honest feedback on market readiness.',
      employerBenefit: 'Only vetted profiles that match 85%+ of requirement criteria.',
      icon: FileSearch
    },
    {
      title: 'Targeted Corporate Job Matching',
      desc: 'Proprietary profile alignment connecting candidate expertise with active mandates from our 350+ corporate hiring partners across 8 industrial sectors.',
      candidateBenefit: 'Access unlisted corporate openings without submitting to flooded portals.',
      employerBenefit: 'Reduced sourcing cycles and faster candidate engagement.',
      icon: Target
    },
    {
      title: 'Interview Coordination & Briefing',
      desc: 'End-to-end interview loop management including company background orientation, technical evaluation frameworks, scheduling logistics, and mock prep.',
      candidateBenefit: 'Interview confidence with company-specific guidance and briefing.',
      employerBenefit: 'Zero interview drop-offs with diligent schedule management.',
      icon: Users
    },
    {
      title: 'Executive Search & Leadership Hiring',
      desc: 'Discreet, bespoke search methodology for senior engineering leads, Vice Presidents, Directors, and C-suite talent across India.',
      candidateBenefit: 'Confidential executive representation with compensation parity.',
      employerBenefit: 'Thoroughly referenced, high-caliber leadership talent.',
      icon: Award
    },
    {
      title: 'Volume & Campus Placement Drives',
      desc: 'Structured high-volume hiring solutions for expanding technology startups, enterprise BPOs, and manufacturing assembly plants.',
      candidateBenefit: 'Mass recruitment opportunities with immediate onboarding offers.',
      employerBenefit: 'Cost-effective bulk hiring with turnkey logistics handling.',
      icon: Building
    },
    {
      title: 'Offer Validation & Onboarding Support',
      desc: 'Impartial market compensation benchmarking, offer letter review, notice period navigation, and joining support through probation completion.',
      candidateBenefit: 'Clear salary breakdown verification and seamless notice period transition.',
      employerBenefit: 'High joining-ratio conversion and early retention tracking.',
      icon: ShieldCheck
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-[#000000] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A0D10] border border-[#00E5F0]/30 text-xs font-bold text-[#00E5F0] uppercase tracking-widest mb-4">
            Our Recruitment Solutions
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Comprehensive Recruitment Services
          </h1>
          <p className="text-base sm:text-lg text-[#AEB8C2] mt-4 leading-relaxed">
            End-to-end recruitment solutions designed to empower job seekers with career advancement while providing corporate partners with reliable, pre-screened talent.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc, idx) => {
            const Icon = svc.icon;
            return (
              <div
                key={idx}
                className="glass-panel rounded-2xl p-6 sm:p-8 border border-[#202A30] hover:border-[#00E5F0]/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#00E5F0]/10 border border-[#00E5F0]/30 flex items-center justify-center text-[#00E5F0] mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#00E5F0] transition-colors">
                    {svc.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#AEB8C2] leading-relaxed mb-6">
                    {svc.desc}
                  </p>

                  <div className="space-y-3 pt-4 border-t border-[#202A30] text-xs">
                    <div>
                      <span className="font-semibold text-white block">For Candidates:</span>
                      <span className="text-[#AEB8C2]">{svc.candidateBenefit}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-[#00E5F0] block">For Employers:</span>
                      <span className="text-[#AEB8C2]">{svc.employerBenefit}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#202A30] flex items-center justify-between text-xs font-semibold text-[#00E5F0]">
                  <span>Professional Recruitment Advisory</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl glass-panel border border-[#00E5F0]/30 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            Ready to Accelerate Your Recruitment Journey?
          </h2>
          <p className="text-sm text-[#AEB8C2] mb-8">
            Whether you want to place qualified talent or find your next executive role, Infidell is here to assist you.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/register/candidate"
              className="px-8 py-3.5 rounded-full text-sm font-bold text-black bg-[#00E5F0] hover:bg-[#00BFD0] transition-all shadow-[0_0_20px_rgba(0,229,240,0.3)]"
            >
              Register as Candidate
            </Link>
            <Link
              href="/employers"
              className="px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-[#0A0D10] border border-[#202A30] hover:border-[#00E5F0]/50 transition-all"
            >
              Hire Talent With Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

