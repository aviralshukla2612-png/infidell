import React from 'react';
import { setRequestLocale } from 'next-intl/server';
import { CandidateRegistrationForm } from '@/components/forms/CandidateRegistrationForm';
import { ShieldCheck, Award, CheckCircle2, Clock } from 'lucide-react';

export default async function CandidateRegisterPage({
  params,
  searchParams
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ job?: string; jobId?: string }>;
}) {
  const { locale } = await params;
  const { job, jobId } = await searchParams;
  setRequestLocale(locale);

  return (
    <div className="pt-32 pb-24 bg-[#000000] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A0D10] border border-[#00E5F0]/30 text-xs font-bold text-[#00E5F0] uppercase tracking-widest mb-4">
            Candidate Placement Portal
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Register as a Candidate.
          </h1>
          <p className="text-base sm:text-lg text-[#AEB8C2] mt-4 leading-relaxed">
            Take the first step toward your next career opportunity with Infidell Technology LLP. There are strictly zero fees charged to candidates at any point during registration, interview, or placement.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Registration Form */}
          <div className="lg:col-span-8">
            <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-[#202A30] shadow-xl">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white">Candidate Details</h2>
                <p className="text-xs sm:text-sm text-[#AEB8C2] mt-1">
                  Complete all required fields accurately. Our recruitment team matches your profile with active employer mandates.
                </p>
              </div>

              <CandidateRegistrationForm initialJobTitle={job} initialJobId={jobId} />
            </div>
          </div>

          {/* Right Column: Candidate Assurance Box */}
          <div className="lg:col-span-4 space-y-6">
            <div className="glass-panel rounded-2xl p-6 border border-[#202A30] space-y-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#00E5F0]" />
                <span>The Infidell Guarantee</span>
              </h3>
              <ul className="space-y-3 text-xs text-[#AEB8C2] leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00C7B1] flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Fees Always:</strong> No application fee, no security deposit, no document fee.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00C7B1] flex-shrink-0 mt-0.5" />
                  <span><strong>Verified Job Openings:</strong> Only real, budgeted corporate openings with payroll security.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00C7B1] flex-shrink-0 mt-0.5" />
                  <span><strong>Interview Coaching:</strong> Receive company briefing and preparation before client rounds.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00C7B1] flex-shrink-0 mt-0.5" />
                  <span><strong>Privacy Confirmed:</strong> Your resume is shared only with your prior consent.</span>
                </li>
              </ul>
            </div>

            <div className="glass-panel rounded-2xl p-6 border border-[#202A30] space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                What Happens Next?
              </h4>
              <div className="space-y-3 text-xs text-[#AEB8C2]">
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#00E5F0]/20 text-[#00E5F0] flex items-center justify-center font-bold text-[10px] flex-shrink-0">1</span>
                  <span>Profile evaluation by industry recruiter within 48 hours.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#00BFD0]/20 text-[#00BFD0] flex items-center justify-center font-bold text-[10px] flex-shrink-0">2</span>
                  <span>WhatsApp/Call briefing for matching company openings.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#00C7B1]/20 text-[#00C7B1] flex items-center justify-center font-bold text-[10px] flex-shrink-0">3</span>
                  <span>Interview scheduling and salary negotiation support.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

