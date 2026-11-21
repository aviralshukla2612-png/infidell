'use client';

import React, { useState, useMemo, useRef } from 'react';
import { verifiedJobs } from '@/data/jobs';
import { Job } from '@/types';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import confetti from 'canvas-confetti';
import {
  Briefcase,
  MapPin,
  Clock,
  IndianRupee,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  X,
  Send,
  Building2,
  Filter,
  ShieldCheck,
  TrendingUp,
  SlidersHorizontal,
  ChevronRight
} from 'lucide-react';

// Department styling themes
const TRACK_ACCENTS: { [key: string]: { accent: string; label: string; bg: string } } = {
  Executive: { accent: '#A78BFA', label: 'Executive Track', bg: 'rgba(167, 139, 250, 0.12)' },
  Engineering: { accent: '#00D5DF', label: 'Engineering Track', bg: 'rgba(0, 213, 223, 0.12)' },
  Infrastructure: { accent: '#38BDF8', label: 'Cloud & Infrastructure', bg: 'rgba(56, 189, 248, 0.12)' },
  Commercial: { accent: '#10B981', label: 'Commercial & Sales', bg: 'rgba(16, 185, 129, 0.12)' },
  Finance: { accent: '#F59E0B', label: 'Finance & Advisory', bg: 'rgba(245, 158, 11, 0.12)' },
  Operations: { accent: '#EC4899', label: 'Operations & Supply Chain', bg: 'rgba(236, 72, 153, 0.12)' },
  'Human Resources': { accent: '#818CF8', label: 'Human Resources', bg: 'rgba(129, 140, 248, 0.12)' }
};

export function CareersSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeJob, setActiveJob] = useState<Job | null>(null);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    linkedIn: '',
    experience: '',
    noticePeriod: '30 Days',
    notes: ''
  });

  const categories = [
    { id: 'all', label: 'All Disciplines', count: verifiedJobs.length },
    { id: 'Engineering', label: 'Engineering & Tech', count: verifiedJobs.filter((j) => j.department === 'Engineering').length },
    { id: 'Infrastructure', label: 'Cloud & DevOps', count: verifiedJobs.filter((j) => j.department === 'Infrastructure').length },
    { id: 'Executive', label: 'Executive Search', count: verifiedJobs.filter((j) => j.department === 'Executive').length },
    { id: 'Commercial', label: 'Commercial & Sales', count: verifiedJobs.filter((j) => j.department === 'Commercial' || j.department === 'Finance').length }
  ];

  const filteredJobs = useMemo(() => {
    if (selectedCategory === 'all') return verifiedJobs;
    if (selectedCategory === 'Commercial') {
      return verifiedJobs.filter((j) => j.department === 'Commercial' || j.department === 'Finance');
    }
    return verifiedJobs.filter((j) => j.department === selectedCategory);
  }, [selectedCategory]);

  // GSAP Scroll Animation
  useGSAP(
    () => {
      if (typeof window === 'undefined') return;
      gsap.registerPlugin(ScrollTrigger);

      // Header entrance
      gsap.fromTo(
        '.careers-header-anim',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 82%',
            toggleActions: 'play none none none'
          }
        }
      );

      // Staggered cards entrance
      gsap.fromTo(
        '.career-card',
        { opacity: 0, y: 35, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.75,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.careers-grid',
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
    },
    { scope: sectionRef, dependencies: [selectedCategory] }
  );

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
    }, 900);
  };

  const closeModal = () => {
    setActiveJob(null);
    setFormSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      linkedIn: '',
      experience: '',
      noticePeriod: '30 Days',
      notes: ''
    });
  };

  return (
    <section
      ref={sectionRef}
      id="careers"
      className="py-20 sm:py-28 md:py-32 bg-[#F8FAFC] dark:bg-[#050708] relative overflow-hidden border-t border-[#DCE5EF] dark:border-[#203536]/80 select-none transition-colors duration-300"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-[#00D5DF]/10 dark:bg-[#00D5DF]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-[#38BDF8]/10 dark:bg-[#38BDF8]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            {/* Live Eyebrow Badge */}
            <div className="careers-header-anim inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white dark:bg-[#0C1517] border border-[#087FCB]/30 dark:border-[#00D5DF]/30 text-xs font-mono font-bold text-[#087FCB] dark:text-[#00D5DF] tracking-wider uppercase mb-3.5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Career Opportunities · Actively Hiring</span>
            </div>

            <h2 className="careers-header-anim text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#102B50] dark:text-white leading-tight mb-3">
              Curated Positions for{' '}
              <span className="font-medium bg-gradient-to-r from-[#102B50] via-[#087FCB] to-[#00BFCB] dark:from-white dark:via-[#7DD3FC] dark:to-[#38BDF8] bg-clip-text text-transparent">
                Ambitious Minds.
              </span>
            </h2>

            <p className="careers-header-anim text-sm sm:text-base text-[#334155] dark:text-neutral-300 leading-relaxed font-normal">
              Direct executive representation, verified compensation benchmarks, and zero candidate fees. Explore active opportunities across India's premier tech hubs.
            </p>
          </div>

          {/* Header Action */}
          <div className="careers-header-anim flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-[#087FCB] dark:text-[#00D5DF] bg-white dark:bg-[#0C1517] border border-[#087FCB]/30 dark:border-[#00D5DF]/30 hover:border-[#087FCB] dark:hover:border-[#00D5DF] shadow-sm hover:shadow transition-all"
            >
              <span>Submit General Candidacy</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Filter Chips Bar */}
        <div className="careers-header-anim flex items-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-8 sm:mb-10 no-scrollbar">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium tracking-tight whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-2 border ${
                  isSelected
                    ? 'bg-[#087FCB] dark:bg-gradient-to-r dark:from-[#00D5DF] dark:to-[#38BDF8] text-white dark:text-black font-semibold border-transparent shadow-[0_4px_16px_rgba(8,127,203,0.3)] dark:shadow-[0_0_20px_rgba(0,213,223,0.4)] scale-105'
                    : 'bg-white dark:bg-[#070D10] text-[#334155] dark:text-neutral-300 border-[#DCE5EF] dark:border-[#203536] hover:border-[#087FCB]/60 dark:hover:border-[#00D5DF]/60 shadow-sm'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[11px] font-mono px-1.5 py-0.2 rounded-full ${
                    isSelected
                      ? 'bg-white/20 dark:bg-black/20 text-white dark:text-black'
                      : 'bg-slate-100 dark:bg-neutral-800 text-slate-600 dark:text-neutral-400'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Cards Grid */}
        <div className="careers-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredJobs.map((job) => {
            const track = TRACK_ACCENTS[job.department] || {
              accent: '#087FCB',
              label: `${job.department} Track`,
              bg: 'rgba(8, 127, 203, 0.12)'
            };

            return (
              <div
                key={job.id}
                className="career-card group relative rounded-3xl p-6 sm:p-7 bg-white dark:bg-[#070D10] border transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1.5"
                style={{
                  borderColor: `${track.accent}55`,
                  boxShadow: `0 8px 30px -4px ${track.accent}15`
                }}
              >
                {/* Top Subtle Light Accent Line */}
                <div
                  className="absolute top-0 inset-x-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${track.accent}, transparent)`
                  }}
                />

                {/* Corner Glow */}
                <div
                  className="absolute -top-16 -right-16 w-36 h-36 rounded-full blur-[60px] opacity-15 group-hover:opacity-35 transition-opacity pointer-events-none"
                  style={{ backgroundColor: track.accent }}
                />

                <div>
                  {/* Card Header Row: Track Badge + Work Type */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span
                      className="text-[11px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full border transition-colors"
                      style={{
                        color: track.accent,
                        borderColor: `${track.accent}55`,
                        backgroundColor: track.bg
                      }}
                    >
                      {track.label}
                    </span>

                    <span className="text-[11px] font-semibold text-slate-500 dark:text-neutral-400 bg-slate-100 dark:bg-neutral-800/80 px-2.5 py-0.5 rounded-full border border-slate-200 dark:border-neutral-700">
                      {job.type}
                    </span>
                  </div>

                  {/* Role Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-[#102B50] dark:text-white mb-2 tracking-tight group-hover:text-[#087FCB] dark:group-hover:text-[#7DD3FC] transition-colors leading-snug">
                    {job.title}
                  </h3>

                  {/* Location & Experience Meta */}
                  <div className="space-y-1.5 mb-4 text-xs text-[#475569] dark:text-neutral-300 font-medium">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{job.experienceYears} · {job.experienceLevel}</span>
                    </div>
                  </div>

                  {/* Compensation Benchmark Box */}
                  <div
                    className="p-3 rounded-2xl border mb-5 transition-colors"
                    style={{
                      borderColor: `${track.accent}30`,
                      backgroundColor: `${track.accent}08`
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-neutral-400">
                        Target CTC Benchmark
                      </span>
                      <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        Verified
                      </span>
                    </div>
                    <div className="text-sm sm:text-base font-extrabold text-[#102B50] dark:text-white mt-0.5">
                      {job.salaryRange}
                    </div>
                  </div>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {job.skills.slice(0, 4).map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[11px] font-medium px-2.5 py-0.5 rounded-lg bg-slate-100 dark:bg-neutral-800/80 text-slate-600 dark:text-neutral-300 border border-slate-200 dark:border-neutral-700/60"
                      >
                        {skill}
                      </span>
                    ))}
                    {job.skills.length > 4 && (
                      <span className="text-[10px] text-slate-400 dark:text-neutral-500 self-center font-mono">
                        +{job.skills.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Bottom CTA */}
                <div className="pt-4 border-t border-slate-100 dark:border-neutral-800 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-400 dark:text-neutral-500">
                    48h Shortlist SLA
                  </span>

                  <button
                    type="button"
                    onClick={() => setActiveJob(job)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold transition-all group-hover:translate-x-1 cursor-pointer"
                    style={{ color: track.accent }}
                  >
                    <span>Quick Apply</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Assurance Strip */}
        <div className="mt-14 sm:mt-18 p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#070D10] border border-[#DCE5EF] dark:border-[#203536] shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#087FCB]/10 dark:bg-[#00D5DF]/10 border border-[#087FCB]/30 dark:border-[#00D5DF]/30 flex items-center justify-center text-[#087FCB] dark:text-[#00D5DF] shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#102B50] dark:text-white leading-tight">
                Don't See Your Exact Role Listed?
              </h4>
              <p className="text-xs sm:text-sm text-[#475569] dark:text-neutral-300 mt-0.5">
                Over 60% of our executive mandates and confidential senior positions are unadvertised to safeguard enterprise strategy.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="w-full md:w-auto text-center shrink-0 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#087FCB] to-[#00BFCB] hover:shadow-[0_0_25px_rgba(8,127,203,0.4)] transition-all hover:scale-105"
          >
            Connect With a Talent Partner →
          </a>
        </div>
      </div>

      {/* ========================================================
          ROLE DOSSIER & QUICK APPLY MODAL
      ======================================================== */}
      {activeJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-[#0B1519] border border-[#DCE5EF] dark:border-[#203536] rounded-3xl p-6 sm:p-8 shadow-2xl">
            {/* Close Button */}
            <button
              type="button"
              onClick={closeModal}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 dark:bg-neutral-800 border border-slate-200 dark:border-neutral-700 flex items-center justify-center text-slate-500 hover:text-slate-800 dark:text-neutral-300 dark:hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {!formSubmitted ? (
              <div>
                {/* Header */}
                <div className="mb-6 pr-8">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#087FCB] dark:text-[#00D5DF] block mb-1">
                    {activeJob.department} Track · Verified Mandate
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#102B50] dark:text-white leading-tight">
                    {activeJob.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-[#475569] dark:text-neutral-300">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {activeJob.location}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {activeJob.experienceYears}
                    </span>
                    <span>•</span>
                    <span className="font-bold text-[#087FCB] dark:text-[#00D5DF]">
                      {activeJob.salaryRange}
                    </span>
                  </div>
                </div>

                {/* Role Description */}
                <div className="mb-6 p-4 rounded-2xl bg-slate-50 dark:bg-[#070D10] border border-slate-200 dark:border-neutral-800 text-xs sm:text-sm text-[#334155] dark:text-neutral-300 leading-relaxed">
                  <p className="mb-3">{activeJob.description}</p>
                  <div className="font-semibold text-[#102B50] dark:text-white mb-2">Key Competencies:</div>
                  <ul className="space-y-1.5">
                    {activeJob.requirements.map((req, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2 text-xs text-[#475569] dark:text-neutral-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#087FCB] dark:text-[#00D5DF] shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quick Application Form */}
                <form onSubmit={handleApplySubmit} className="space-y-4">
                  <div className="text-sm font-bold text-[#102B50] dark:text-white border-b border-slate-200 dark:border-neutral-800 pb-2">
                    Submit Fast-Track Candidacy (100% Free)
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="text-[11px] font-semibold text-[#334155] dark:text-neutral-300 block mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#070D10] border border-slate-200 dark:border-neutral-700 text-xs text-[#102B50] dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#087FCB] dark:focus:border-[#00D5DF]"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-semibold text-[#334155] dark:text-neutral-300 block mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="rahul@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#070D10] border border-slate-200 dark:border-neutral-700 text-xs text-[#102B50] dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#087FCB] dark:focus:border-[#00D5DF]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                    <div>
                      <label className="text-[11px] font-semibold text-[#334155] dark:text-neutral-300 block mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#070D10] border border-slate-200 dark:border-neutral-700 text-xs text-[#102B50] dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#087FCB] dark:focus:border-[#00D5DF]"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-semibold text-[#334155] dark:text-neutral-300 block mb-1">
                        Experience (Years) *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.experience}
                        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                        placeholder="e.g. 6.5 Years"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#070D10] border border-slate-200 dark:border-neutral-700 text-xs text-[#102B50] dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#087FCB] dark:focus:border-[#00D5DF]"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-semibold text-[#334155] dark:text-neutral-300 block mb-1">
                        Notice Period
                      </label>
                      <select
                        value={formData.noticePeriod}
                        onChange={(e) => setFormData({ ...formData, noticePeriod: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#070D10] border border-slate-200 dark:border-neutral-700 text-xs text-[#102B50] dark:text-white focus:outline-none focus:border-[#087FCB] dark:focus:border-[#00D5DF] cursor-pointer"
                      >
                        <option value="Immediate">Immediate / Serving</option>
                        <option value="15 Days">15 Days</option>
                        <option value="30 Days">30 Days</option>
                        <option value="60 Days">60 Days</option>
                        <option value="90 Days">90 Days</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-[#334155] dark:text-neutral-300 block mb-1">
                      LinkedIn / Portfolio URL
                    </label>
                    <input
                      type="url"
                      value={formData.linkedIn}
                      onChange={(e) => setFormData({ ...formData, linkedIn: e.target.value })}
                      placeholder="https://linkedin.com/in/yourname"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#070D10] border border-slate-200 dark:border-neutral-700 text-xs text-[#102B50] dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#087FCB] dark:focus:border-[#00D5DF]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-[#334155] dark:text-neutral-300 block mb-1">
                      Notes or Brief Summary
                    </label>
                    <textarea
                      rows={2}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Mention your current CTC, preferred work location, or any specific expertise..."
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-[#070D10] border border-slate-200 dark:border-neutral-700 text-xs text-[#102B50] dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#087FCB] dark:focus:border-[#00D5DF]"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between gap-4">
                    <span className="text-[10px] text-slate-500 dark:text-neutral-400 font-mono">
                      Strict NDA · Profile never broadcasted without consent
                    </span>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#087FCB] to-[#00BFCB] hover:shadow-[0_0_25px_rgba(8,127,203,0.5)] transition-all cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Submitting Dossier...</span>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Submit Candidacy →</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              /* Success State */
              <div className="py-10 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/15 border-2 border-emerald-500/40 text-emerald-500 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#102B50] dark:text-white">
                  Application Received!
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] dark:text-neutral-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-[#102B50] dark:text-white">{formData.fullName}</strong>. Your profile for <strong className="text-[#087FCB] dark:text-[#00D5DF]">{activeJob.title}</strong> has been prioritized under our 48-hour candidate review SLA. A dedicated talent advisor will contact you shortly.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="px-6 py-2.5 rounded-full text-xs font-bold text-white bg-[#087FCB] hover:bg-[#076EAF] transition-colors cursor-pointer"
                  >
                    Done & Return
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
