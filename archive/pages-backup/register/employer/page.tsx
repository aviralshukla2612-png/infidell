import React from 'react';
import { setRequestLocale } from 'next-intl/server';
import { EmployerRegistrationForm } from '@/components/forms/EmployerRegistrationForm';
import { Building2, ShieldCheck, Target, Clock } from 'lucide-react';

export default async function EmployerRegisterPage({
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
            <Building2 className="w-3.5 h-3.5 text-[#00C7B1]" />
            <span>Corporate Account Onboarding</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Register Your Hiring Requirements.
          </h1>
          <p className="text-base sm:text-lg text-[#AEB8C2] mt-4 leading-relaxed">
            Partner with Infidell Technology LLP to access pre-screened, culturally aligned, job-ready candidates across India.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-[#202A30] shadow-xl">
          <EmployerRegistrationForm />
        </div>
      </div>
    </div>
  );
}

