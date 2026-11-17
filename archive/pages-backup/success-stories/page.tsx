import React from 'react';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { Quote, TrendingUp, Building2, User, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default async function SuccessStoriesPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const stories = [
    {
      name: 'Priyank Sharma',
      role: 'Lead Cloud Architect',
      prev: 'Systems Engineer at Regional IT Firm',
      company: 'Tier-1 Cloud Solutions Group',
      industry: 'Information Technology',
      hike: '+65% Compensation Hike',
      quote: "Infidell's recruitment team didn't just forward my resume; they guided my technical interview prep, gave me feedback on my AWS system design answers, and helped me articulate my cloud migration experience. I secured a 65% salary hike.",
      placedIn: 'Pune / Hybrid'
    },
    {
      name: 'Ami Patel',
      role: 'Financial Risk Analyst',
      prev: 'Junior Accountant seeking Corporate Growth',
      company: 'Multinational Asset Management Firm',
      industry: 'Finance and Accounting',
      hike: 'Senior Leadership Transition',
      quote: 'The transition from transactional accounting to strategic finance seemed impossible until Infidell arranged direct interviews with hiring managers who valued my problem-solving skills.',
      placedIn: 'Mumbai / On-site'
    },
    {
      name: 'Rahul Varma',
      role: 'Senior Automation Engineer',
      prev: 'PLC Maintenance Technician',
      company: 'Global Robotics & Industrial Automation Leader',
      industry: 'Engineering & Manufacturing',
      hike: '+50% Compensation Hike',
      quote: 'Completely transparent process from day one. Zero fees charged to me, consistent mock interviews, and quick feedback. Highly recommend Infidell to any engineer looking for genuine placement assistance.',
      placedIn: 'Vadodara / Plant'
    },
    {
      name: 'Sneha Joshi',
      role: 'Frontend Software Developer',
      prev: 'Computer Science Graduate',
      company: 'Rapid-growth Fintech SaaS Startup',
      industry: 'Information Technology',
      hike: 'Campus to Corporate Onboarding',
      quote: 'As a fresher entering the IT sector, I was overwhelmed. The Infidell counselor reviewed my resume, guided my GitHub portfolio presentation, and secured 3 interviews in two weeks.',
      placedIn: 'Ahmedabad'
    },
    {
      name: 'Hardik Mehta',
      role: 'Supply Chain Operations Manager',
      prev: 'Warehouse Supervisor',
      company: 'National Cold-Chain Logistics Enterprise',
      industry: 'Operations & Logistics',
      hike: '+45% Compensation Hike',
      quote: 'Infidell understands logistics. They matched me with an enterprise that valued my port operations experience and provided clear salary benchmarks before my final interview.',
      placedIn: 'Mundra / Port'
    },
    {
      name: 'Neha Trivedi',
      role: 'Human Resources Business Partner (HRBP)',
      prev: 'Recruitment Associate',
      company: 'Tier-1 Healthcare Technology Group',
      industry: 'Human Resources',
      hike: '+55% Compensation Hike',
      quote: 'The Infidell recruitment consultant treated me as an individual professional with distinct aspirations, not just a resume in a database. Exceptional experience.',
      placedIn: 'Bengaluru / Hybrid'
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-[#000000] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A0D10] border border-[#00E5F0]/30 text-xs font-bold text-[#00E5F0] uppercase tracking-widest mb-4">
            Candidate Testimonials & Journeys
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Real Journeys. Real Careers.
          </h1>
          <p className="text-base sm:text-lg text-[#AEB8C2] mt-4 leading-relaxed">
            Read verified placement stories of candidates who accelerated their careers through Infidell Technology LLP. No candidate fees, personalized screening, and direct corporate access.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-2xl p-6 sm:p-8 border border-[#202A30] hover:border-[#00E5F0]/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00E5F0]/10 border border-[#00E5F0]/30 text-[10px] font-semibold text-[#00E5F0]">
                    <TrendingUp className="w-3 h-3" />
                    <span>{story.hike}</span>
                  </span>
                  <Quote className="w-5 h-5 text-[#202A30] group-hover:text-[#00E5F0]/40 transition-colors" />
                </div>

                <div className="mb-4">
                  <span className="text-[11px] font-medium text-[#AEB8C2] uppercase tracking-wider block">
                    {story.industry}
                  </span>
                  <p className="text-xs text-[#AEB8C2] mt-1">
                    Previous: <span className="text-white/80">{story.prev}</span>
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#AEB8C2] italic leading-relaxed mb-6">
                  &ldquo;{story.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#202A30]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#0A0D10] to-[#202A30] border border-[#00E5F0]/40 flex items-center justify-center text-white font-bold text-sm">
                    {story.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-[#00E5F0] transition-colors">
                      {story.name}
                    </h4>
                    <p className="text-xs font-semibold text-[#00E5F0]">
                      {story.role}
                    </p>
                    <p className="text-[10px] text-[#AEB8C2]">
                      {story.company} • {story.placedIn}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl glass-panel border border-[#00E5F0]/30 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-3">
            Start Your Own Placement Story
          </h2>
          <p className="text-xs sm:text-sm text-[#AEB8C2] mb-6">
            Register your candidate profile in under 2 minutes. Our team will review your credentials and match you with verified opportunities.
          </p>
          <Link
            href="/register/candidate"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-black bg-[#00E5F0] hover:bg-[#00BFD0] transition-all shadow-[0_0_20px_rgba(0,229,240,0.3)]"
          >
            <span>Register as Candidate</span>
            <ArrowRight className="w-4 h-4 text-black" />
          </Link>
        </div>
      </div>
    </div>
  );
}

