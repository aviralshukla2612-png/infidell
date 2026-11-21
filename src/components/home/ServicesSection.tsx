'use client';

import React from 'react';
import { 
  Compass, 
  Building2, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  Clock,
  Briefcase
} from 'lucide-react';

interface ServiceCard {
  id: string;
  num: string;
  category: string;
  title: string;
  tagline: string;
  description: string;
  accent: string;
  glow: string;
  icon: React.ReactNode;
  highlights: string[];
  ctaLabel: string;
  ctaHref: string;
}

const MAIN_SERVICES: ServiceCard[] = [
  {
    id: 'candidate-placement',
    num: '01',
    category: 'Candidate Track',
    title: 'Career Placement & Advisory',
    tagline: '100% Free Career Representation for Job Seekers',
    description:
      'We represent ambitious software architects, engineering managers, and corporate specialists from initial credential elevation to verified offers without automated algorithmic filters.',
    accent: '#00D5DF',
    glow: 'rgba(0, 213, 223, 0.25)',
    icon: <Compass className="w-6 h-6 text-[#00D5DF]" strokeWidth={2} />,
    highlights: [
      'ATS profile architecture & code portfolio enhancement',
      'Direct introductions to CTOs & VPs across Bengaluru, Pune, Hyderabad & NCR',
      'Compensation benchmarking & notice period buyout negotiation',
      'Zero candidate fees: ethical search with zero salary deductions'
    ],
    ctaLabel: 'Explore Candidate Track',
    ctaHref: '#candidate'
  },
  {
    id: 'corporate-staffing',
    num: '02',
    category: 'Enterprise Track',
    title: 'Corporate Recruitment & Staffing',
    tagline: 'Pre-Screened Technical Talent Delivered in 48–72h',
    description:
      'Accelerate hiring velocity with precision-matched, interview-ready candidate shortlists. We vet technical proficiencies, notice periods, and cultural alignment for scaling startups and enterprises.',
    accent: '#38BDF8',
    glow: 'rgba(56, 189, 248, 0.25)',
    icon: <Building2 className="w-6 h-6 text-[#38BDF8]" strokeWidth={2} />,
    highlights: [
      '48 to 72-hour vetted candidate shortlisting SLA',
      'Multi-tier technical evaluations & verified 15/30/60-day notice periods',
      'Flexible engagement: permanent placement, contract-to-hire & volume mandates',
      'Full placement continuity & replacement assurance'
    ],
    ctaLabel: 'Hire Enterprise Talent',
    ctaHref: '#employer'
  },
  {
    id: 'executive-search',
    num: '03',
    category: 'Executive Track',
    title: 'Executive Search & Leadership',
    tagline: 'Confidential Headhunting for Mission-Critical Roles',
    description:
      'Discreet, high-touch recruitment for Director, VP of Engineering, and C-suite leadership. Rigorous due diligence, background clearance, and leadership resonance assessments.',
    accent: '#A78BFA',
    glow: 'rgba(167, 139, 250, 0.25)',
    icon: <ShieldCheck className="w-6 h-6 text-[#A78BFA]" strokeWidth={2} />,
    highlights: [
      'Confidential headhunting with strict NDA governance',
      'Cross-functional leadership & organizational resonance vetting',
      'Statutory credential & background due diligence (ISO compliance)',
      'Executive equity (ESOP) & total rewards benchmarking'
    ],
    ctaLabel: 'Inquire Executive Search',
    ctaHref: 'mailto:contact@infidelltech.com?subject=Executive%20Search%20Inquiry'
  }
];

export function ServicesSection() {
  return (
    <section 
      id="services" 
      className="py-16 sm:py-24 md:py-32 bg-[#050708] relative overflow-hidden border-t border-[#203536]/80 select-none"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-[#00D5DF]/10 rounded-full blur-[150px] sm:blur-[200px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-[#38BDF8]/10 rounded-full blur-[140px] sm:blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white leading-none mb-2 sm:mb-3">
            Our Services
          </h2>
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light tracking-tight text-white leading-snug mb-3 sm:mb-4">
            Three Core Recruitment{' '}
            <span className="font-medium bg-gradient-to-r from-white via-[#7DD3FC] to-[#38BDF8] bg-clip-text text-transparent">
              Pillars.
            </span>
          </h3>
          <p className="text-xs sm:text-sm md:text-base text-neutral-300 leading-relaxed font-normal">
            Whether you are advancing your executive career, scaling high-performance engineering squads in 48 hours, or discreetly filling C-suite mandates across India.
          </p>
        </div>

        {/* 3 Prominent Service Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {MAIN_SERVICES.map((service) => (
            <div
              key={service.id}
              className="group relative rounded-3xl bg-[#0C1517]/90 border border-[#203536] p-7 sm:p-8 flex flex-col justify-between hover:border-[#00D5DF]/60 transition-all duration-300 shadow-xl"
              style={{
                boxShadow: '0 20px 50px -10px rgba(0,0,0,0.7)'
              }}
            >
              {/* Top Accent Gradient Line */}
              <div 
                className="absolute top-0 inset-x-0 h-[2px] transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `linear-gradient(90deg, transparent, ${service.accent}, transparent)`
                }}
              />

              {/* Ambient Hover Glow behind card */}
              <div 
                className="absolute -top-12 -right-12 w-36 h-36 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: service.glow }}
              />

              <div className="relative z-10">
                {/* Header Row: Number + Icon */}
                <div className="flex items-center justify-between gap-3 mb-6">
                  <span 
                    className="text-xs font-mono font-bold px-3 py-1 rounded-full border"
                    style={{
                      color: service.accent,
                      borderColor: `${service.accent}40`,
                      backgroundColor: `${service.accent}12`
                    }}
                  >
                    SERVICE {service.num}
                  </span>

                  <div 
                    className="w-12 h-12 rounded-2xl border flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-lg"
                    style={{
                      backgroundColor: '#0E1A1C',
                      borderColor: `${service.accent}35`
                    }}
                  >
                    {service.icon}
                  </div>
                </div>

                {/* Service Category */}
                <span className="block text-[11px] font-bold uppercase tracking-widest text-neutral-400 mb-1">
                  {service.category}
                </span>

                {/* Service Title */}
                <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-tight mb-2 group-hover:text-white transition-colors">
                  {service.title}
                </h4>

                {/* Tagline Badge */}
                <p 
                  className="text-xs sm:text-sm font-semibold mb-4 leading-snug"
                  style={{ color: service.accent }}
                >
                  {service.tagline}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal mb-6">
                  {service.description}
                </p>

                {/* Key Checklist Features */}
                <div className="pt-4 border-t border-[#203536]/70 space-y-2.5 mb-8">
                  {service.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300 leading-relaxed">
                      <CheckCircle2 
                        className="w-4 h-4 shrink-0 mt-0.5" 
                        style={{ color: service.accent }}
                      />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action CTA Button */}
              <div className="relative z-10 pt-4 border-t border-[#203536]/50">
                <a
                  href={service.ctaHref}
                  className="w-full inline-flex items-center justify-between px-5 py-3.5 rounded-xl border border-[#203536] bg-[#0E1A1C] text-xs sm:text-sm font-semibold text-white hover:text-white transition-all duration-300 group/btn shadow-md cursor-pointer"
                  style={{
                    borderColor: `${service.accent}40`
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = `${service.accent}20`;
                    e.currentTarget.style.borderColor = service.accent;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#0E1A1C';
                    e.currentTarget.style.borderColor = `${service.accent}40`;
                  }}
                >
                  <span>{service.ctaLabel}</span>
                  <ArrowRight 
                    className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" 
                    style={{ color: service.accent }}
                  />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
