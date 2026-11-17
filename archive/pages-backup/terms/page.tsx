import React from 'react';
import { setRequestLocale } from 'next-intl/server';
import { FileText, Shield, AlertCircle } from 'lucide-react';

export default async function TermsPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="pt-32 pb-24 bg-[#000000] min-h-screen text-[#AEB8C2]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A0D10] border border-[#00E5F0]/30 text-xs font-bold text-[#00E5F0] uppercase tracking-widest mb-4">
            Legal Terms of Service
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Terms & Conditions
          </h1>
          <p className="text-xs sm:text-sm text-[#AEB8C2]">
            Last Updated: November 2026 | INFIDELL TECHNOLOGY LLP
          </p>
        </div>

        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-[#202A30] space-y-8 text-sm leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#00E5F0]" />
              <span>1. Agreement & Platform Purpose</span>
            </h2>
            <p>
              By accessing or using the services provided by INFIDELL TECHNOLOGY LLP (&ldquo;Infidell&rdquo;), you agree to be bound by these Terms and Conditions. Infidell operates strictly as a professional recruitment and candidate placement facilitator connecting job seekers with independent corporate employers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">2. Candidate Representation & Accuracy</h2>
            <p>
              Candidates registering on the platform warrant that all details provided—including academic qualifications, previous employment tenure, current compensation, and skill certifications—are authentic and verifiable. Misrepresentation will result in immediate disqualification and removal from our talent database.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">3. No Placement Guarantee Disclaimer</h2>
            <p>
              While Infidell actively promotes candidate profiles and coordinates interview loops with verified employers, registration on our platform does NOT constitute a contractual guarantee of employment. Final hiring selections, compensation offers, and employment conditions remain at the sole discretion of the hiring corporate entity.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">4. Employer Mandate Terms</h2>
            <p>
              Corporate employers submitting hiring requirements agree to provide legitimate, budgeted positions with fair market compensation and compliant employment terms under Indian labor regulations.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">5. Refer & Earn Program Terms</h2>
            <p>
              Referral bonuses are payable solely upon candidate verification, successful client hiring, and completion of the candidate&apos;s initial employment probation period (minimum 30 days) as confirmed by the hiring company. Duplicate referrals or self-referrals are invalid.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">6. Governing Jurisdiction</h2>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the laws of India, with exclusive jurisdiction in the competent courts of Ahmedabad, Gujarat.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

