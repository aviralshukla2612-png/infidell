import React from 'react';
import { setRequestLocale } from 'next-intl/server';
import { EmployerRegistrationForm } from '@/components/forms/EmployerRegistrationForm';
import { 
  Building2, 
  Target, 
  Clock, 
  ShieldCheck, 
  Users, 
  CheckCircle2, 
  Award,
  AlertCircle 
} from 'lucide-react';

export default async function EmployersPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="pt-32 pb-24 bg-[#000000] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A0D10] border border-[#00C7B1]/40 text-xs font-bold text-[#00C7B1] uppercase tracking-widest mb-4">
            Corporate Hiring Portal
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Find the Talent Your Business Needs.
          </h1>
          <p className="text-base sm:text-lg text-[#AEB8C2] mt-4 leading-relaxed">
            Eliminate recruiting bottlenecks. Partner with Infidell Technology LLP to access pre-screened, culturally aligned, job-ready professionals across 8 core industry verticals.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-[#202A30]">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white">
                  Submit a Hiring Mandate
                </h2>
                <p className="text-xs sm:text-sm text-[#AEB8C2] mt-1">
                  Fill in your hiring specifications. A dedicated Infidell talent consultant will contact you within 24 hours.
                </p>
              </div>

              <EmployerRegistrationForm />
            </div>
          </div>

          {/* Right Column: Value Props & Process */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel rounded-2xl p-6 border border-[#202A30] space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Target className="w-5 h-5 text-[#00C7B1]" />
                <span>Why Corporate Partners Choose Infidell</span>
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-[#AEB8C2]">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00C7B1] flex-shrink-0 mt-0.5" />
                  <span><strong>72-Hour Candidate Presentation:</strong> Receive pre-screened, interview-ready profiles within 3 days.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00C7B1] flex-shrink-0 mt-0.5" />
                  <span><strong>Multi-Stage Screening:</strong> Technical evaluation, background verification, and soft-skill assessment.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00C7B1] flex-shrink-0 mt-0.5" />
                  <span><strong>Dedicated Account Manager:</strong> Direct single point of contact coordinating all interview loops.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00C7B1] flex-shrink-0 mt-0.5" />
                  <span><strong>Replacement Assurance:</strong> Clear probation milestone guarantees for permanent placements.</span>
                </li>
              </ul>
            </div>

            <div className="glass-panel rounded-2xl p-6 border border-[#202A30] space-y-3">
              <h4 className="text-sm font-bold text-white">
                Engagement Models Supported
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs text-[#AEB8C2]">
                <div className="p-3 rounded-lg bg-[#080B0E] border border-[#202A30]">
                  <span className="font-semibold text-white block">Permanent Placement</span>
                  Full-time corporate hiring
                </div>
                <div className="p-3 rounded-lg bg-[#080B0E] border border-[#202A30]">
                  <span className="font-semibold text-white block">Executive Search</span>
                  C-Suite & Director roles
                </div>
                <div className="p-3 rounded-lg bg-[#080B0E] border border-[#202A30]">
                  <span className="font-semibold text-white block">Volume Staffing</span>
                  Rapid batch onboarding
                </div>
                <div className="p-3 rounded-lg bg-[#080B0E] border border-[#202A30]">
                  <span className="font-semibold text-white block">Contract-to-Hire</span>
                  Flexible evaluation trials
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#0A0D10] border border-[#202A30] flex items-start gap-3 text-xs text-[#AEB8C2]">
              <AlertCircle className="w-5 h-5 text-[#00C7B1] flex-shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                Notice: Infidell provides specialized talent acquisition advisory. We do not make artificial guarantees or misrepresent candidate experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

