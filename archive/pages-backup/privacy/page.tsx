import React from 'react';
import { setRequestLocale } from 'next-intl/server';
import { ShieldCheck, Lock, FileText, CheckCircle2 } from 'lucide-react';

export default async function PrivacyPolicyPage({
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
            Compliance & Data Security
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-[#AEB8C2]">
            Effective Date: November 2026 | INFIDELL TECHNOLOGY LLP
          </p>
        </div>

        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-[#202A30] space-y-8 text-sm leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#00E5F0]" />
              <span>1. Overview & Commitment to Candidate Privacy</span>
            </h2>
            <p>
              INFIDELL TECHNOLOGY LLP (&ldquo;Infidell&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) operates an executive recruitment, candidate screening, and job placement platform. We treat the confidentiality of candidate resumes, academic records, and employer requirements with strict institutional integrity.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">2. Information We Collect</h2>
            <p>When you register as a job seeker or submit an employer mandate, we collect:</p>
            <ul className="list-disc list-inside space-y-1.5 pl-2">
              <li>Candidate contact details: Full name, verified mobile number, email, and city of residence.</li>
              <li>Professional profile: Educational credentials, technical skills, years of experience, and resume files (PDF/DOCX).</li>
              <li>Employer details: Corporate legal entity name, official email, phone, and specific hiring specifications.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">3. How Your Information is Used</h2>
            <p>
              Candidate information is solely utilized to evaluate profile suitability against verified corporate hiring mandates, schedule interview loops, and provide recruitment assistance.
            </p>
            <div className="p-4 rounded-xl bg-[#080B0E] border border-[#00E5F0]/30 text-white font-medium text-xs">
              Candidate resumes and personally identifiable information (PII) are NEVER sold to third-party marketing brokers or shared with employers without candidate orientation.
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">4. Zero Candidate Fee Transparency</h2>
            <p>
              Infidell does NOT charge candidates any placement fees, registration costs, or deposit charges. Any communication demanding monetary deposits in exchange for interview scheduling under the name of Infidell is fraudulent and must be reported to careers@infidelltech.com immediately.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">5. Data Retention & Erasure</h2>
            <p>
              Candidates may request deletion or updating of their stored resume and contact data at any time by sending a written notice to our Data Protection Officer at privacy@infidelltech.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

