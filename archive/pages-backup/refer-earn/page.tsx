import React from 'react';
import { setRequestLocale } from 'next-intl/server';
import { ReferralHub } from '@/components/referral/ReferralHub';
import { Gift, ShieldCheck, Banknote } from 'lucide-react';

export default async function ReferEarnPage({
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A0D10] border border-[#00E5F0]/30 text-xs font-bold text-[#00E5F0] uppercase tracking-widest mb-4">
            <Gift className="w-3.5 h-3.5 text-[#00E5F0]" />
            <span>Community Referral Program</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Good Opportunities Are Better When Shared.
          </h1>
          <p className="text-base sm:text-lg text-[#AEB8C2] mt-4 leading-relaxed">
            Know qualified job seekers or employers looking for top talent? Refer them to Infidell Technology LLP and earn verified cash rewards credited directly to your bank account upon successful candidate joining.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ReferralHub />
      </div>
    </div>
  );
}

