import React from 'react';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { 
  Building2, 
  Target, 
  Compass, 
  ShieldCheck, 
  Users, 
  CheckCircle2, 
  ArrowRight,
  TrendingUp,
  Award
} from 'lucide-react';

export default async function AboutPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="pt-32 pb-24 bg-[#000000] min-h-screen">
      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A0D10] border border-[#00E5F0]/30 text-xs font-bold text-[#00E5F0] uppercase tracking-widest mb-4">
            About Infidell
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Connecting Talent With Opportunity.
          </h1>
          <p className="text-base sm:text-lg text-[#AEB8C2] mt-4 leading-relaxed">
            INFIDELL TECHNOLOGY LLP is an executive recruitment, candidate screening, and job placement firm. We bridge the critical gap between qualified job seekers and ambitious organizations seeking top-tier talent.
          </p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Section 1: Who We Are & Business Model */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              A Specialized Recruitment Partner, Not a Generic Agency
            </h2>
            <p className="text-sm sm:text-base text-[#AEB8C2] leading-relaxed">
              Infidell was founded with a singular purpose: to replace chaotic job board applications with personalized, transparent, and professional career placement assistance.
            </p>
            <p className="text-sm sm:text-base text-[#AEB8C2] leading-relaxed">
              Candidates register on our platform, submit their educational credentials, verified skills, and updated resume. Our recruitment specialists personally evaluate each profile, identify matching openings from our verified corporate partners, arrange interviews, and provide end-to-end guidance through onboarding.
            </p>

            <div className="p-4 rounded-xl bg-[#0A0D10] border border-[#00E5F0]/30 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[#00E5F0] flex-shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-white">
                Zero Fees for Candidates: We never charge job seekers any registration or placement fees.
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="glass-panel p-6 rounded-2xl border border-[#202A30] text-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#00E5F0] mb-1">15,000+</div>
              <div className="text-xs text-[#AEB8C2] font-medium">Registered Professionals</div>
            </div>
            <div className="glass-panel p-6 rounded-2xl border border-[#202A30] text-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#00C7B1] mb-1">4,800+</div>
              <div className="text-xs text-[#AEB8C2] font-medium">Successful Placements</div>
            </div>
            <div className="glass-panel p-6 rounded-2xl border border-[#202A30] text-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#00BFD0] mb-1">350+</div>
              <div className="text-xs text-[#AEB8C2] font-medium">Hiring Organizations</div>
            </div>
            <div className="glass-panel p-6 rounded-2xl border border-[#202A30] text-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1">8</div>
              <div className="text-xs text-[#AEB8C2] font-medium">Specialized Verticals</div>
            </div>
          </div>
        </div>

        {/* Section 2: Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-panel rounded-2xl p-8 border border-[#202A30] space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#00E5F0]/10 border border-[#00E5F0]/30 flex items-center justify-center text-[#00E5F0]">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Our Mission</h3>
            <p className="text-sm text-[#AEB8C2] leading-relaxed">
              To empower every candidate with authentic career access, personalized recruitment support, and transparent job opportunities without hidden charges, while delivering pre-screened talent to growing employers.
            </p>
          </div>

          <div className="glass-panel rounded-2xl p-8 border border-[#202A30] space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#00C7B1]/10 border border-[#00C7B1]/30 flex items-center justify-center text-[#00C7B1]">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Our Vision</h3>
            <p className="text-sm text-[#AEB8C2] leading-relaxed">
              To become India&apos;s most trusted recruitment bridge, recognized for ethical placement practices, candidate-first advocacy, and measurable employer satisfaction across all major industrial sectors.
            </p>
          </div>
        </div>

        {/* Section 3: Ethical Recruitment Standards */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-[#202A30]">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-6">
            Our Ethical Recruitment Principles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm font-bold text-[#00E5F0]">
                <CheckCircle2 className="w-4 h-4" />
                <span>100% Free for Candidates</span>
              </div>
              <p className="text-xs text-[#AEB8C2] leading-relaxed">
                We never charge registration fees, interview security deposits, or documentation charges.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm font-bold text-[#00E5F0]">
                <CheckCircle2 className="w-4 h-4" />
                <span>Verified Corporate Employers</span>
              </div>
              <p className="text-xs text-[#AEB8C2] leading-relaxed">
                Every hiring partner is audited for payroll stability, workplace culture, and genuine active mandates.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm font-bold text-[#00E5F0]">
                <CheckCircle2 className="w-4 h-4" />
                <span>Strict Privacy Protection</span>
              </div>
              <p className="text-xs text-[#AEB8C2] leading-relaxed">
                Candidate contact details and resumes are shared only with explicit candidate authorization for matching roles.
              </p>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="text-center pt-8">
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
              Hire Talent
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

