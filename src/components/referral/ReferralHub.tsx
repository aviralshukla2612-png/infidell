'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useTranslations } from 'next-intl';
import confetti from 'canvas-confetti';
import { 
  Gift, 
  Share2, 
  CheckCircle2, 
  AlertCircle, 
  Banknote, 
  Calculator, 
  ShieldCheck, 
  HelpCircle,
  ChevronDown
} from 'lucide-react';
import { containsMaliciousPayload, validatePhoneNumber } from '@/lib/security';

const referralSchema = z.object({
  referrerName: z
    .string()
    .min(2, 'Your name is required')
    .max(70, 'Name cannot exceed 70 characters')
    .refine((val) => !containsMaliciousPayload(val), 'Invalid characters in name'),
  referrerPhone: z
    .string()
    .min(7, 'Your phone must have at least 7 digits')
    .max(25, 'Phone cannot exceed 25 characters')
    .refine((val) => validatePhoneNumber(val).valid, 'Invalid phone number format'),
  referralType: z.enum(['candidate', 'employer']),
  refereeName: z
    .string()
    .min(2, 'Referee name is required')
    .max(70, 'Referee name cannot exceed 70 characters')
    .refine((val) => !containsMaliciousPayload(val), 'Invalid characters in referee name'),
  refereePhone: z
    .string()
    .min(7, 'Referee phone must have at least 7 digits')
    .max(25, 'Referee phone cannot exceed 25 characters')
    .refine((val) => validatePhoneNumber(val).valid, 'Invalid referee phone number format'),
  refereeEmail: z.string().email('Please enter a valid referee email address').max(100),
  notes: z
    .string()
    .max(500, 'Notes cannot exceed 500 characters')
    .optional()
    .refine((val) => !val || !containsMaliciousPayload(val), 'Executable scripts or markup are prohibited')
});

type ReferralFormValues = z.infer<typeof referralSchema>;

export function ReferralHub() {
  const t = useTranslations('ReferralPage');
  const tFAQ = useTranslations('FAQ');

  // Interactive Calculator State
  const [candidatesCount, setCandidatesCount] = useState(2);
  const [employersCount, setEmployersCount] = useState(1);

  // Form State
  const [submitting, setSubmitting] = useState(false);
  const [successData, setSuccessData] = useState<{ code: string; message: string } | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  // FAQ open toggle
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const estimatedReward = candidatesCount * 1000 + employersCount * 3000;

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors }
  } = useForm<ReferralFormValues>({
    resolver: zodResolver(referralSchema) as any,
    defaultValues: {
      referralType: 'candidate'
    }
  });

  const selectedType = watch('referralType');

  const onSubmit = async (data: ReferralFormValues) => {
    setSubmitting(true);
    setServerError(null);

    try {
      const res = await fetch('/api/referral', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      const result = await res.json();

      if (res.ok && result.success) {
        setSuccessData({
          code: result.referralCode,
          message: result.message
        });
        reset();
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 }
          });
        } catch (e) {
          // ignore if canvas not supported
        }
      } else {
        setServerError(result.errors?.[0]?.message || result.message || 'Submission failed');
      }
    } catch (err) {
      setServerError('Network error. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const referralFaqs = [
    {
      q: 'Who is eligible to participate in the Refer & Earn program?',
      a: 'Any registered professional, technology specialist, or corporate employee in the US or globally can participate. There are no prerequisites or mandatory membership requirements.'
    },
    {
      q: 'When is the referral reward disbursed?',
      a: 'Referral rewards are processed and transferred directly to your bank account after the referred candidate completes the mandatory 30-to-60 day probation period verified by the hiring employer.'
    },
    {
      q: 'Can I refer multiple candidates?',
      a: 'Yes! There is no upper limit on the number of candidates or employers you can introduce to Infidell.'
    },
    {
      q: 'What happens if the candidate is already registered in Infidell database?',
      a: 'If a candidate has been actively screened by Infidell in the preceding 90 days, the referral will be marked as existing, and you will be informed promptly.'
    }
  ];

  return (
    <div className="space-y-16">
      {/* Interactive Calculator & Tiers Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Calculator Widget */}
        <div className="lg:col-span-6 glass-panel rounded-3xl p-6 sm:p-8 border border-[#00E5F0]/30 shadow-xl space-y-6">
          <div className="flex items-center gap-2.5 text-xs font-bold text-[#00E5F0] uppercase tracking-wider">
            <Calculator className="w-4 h-4 text-[#00E5F0]" />
            <span>{t('calculatorTitle')}</span>
          </div>

          <h3 className="text-xl font-bold text-white">
            Simulate Your Potential Referral Earnings
          </h3>

          <div className="space-y-5">
            {/* Candidate Slider */}
            <div>
              <div className="flex items-center justify-between text-xs font-semibold text-white mb-2">
                <span>{t('calculatorCandidate')} (Up to $1,000 each)</span>
                <span className="text-[#00E5F0] font-bold text-sm">{candidatesCount}</span>
              </div>
              <input
                type="range"
                min="0"
                max="10"
                value={candidatesCount}
                onChange={(e) => setCandidatesCount(parseInt(e.target.value) || 0)}
                className="w-full accent-[#00E5F0] bg-[#202A30] h-2 rounded-lg cursor-pointer"
              />
            </div>

            {/* Employer Slider */}
            <div>
              <div className="flex items-center justify-between text-xs font-semibold text-white mb-2">
                <span>{t('calculatorEmployer')} (Up to $3,000 each)</span>
                <span className="text-[#00C7B1] font-bold text-sm">{employersCount}</span>
              </div>
              <input
                type="range"
                min="0"
                max="5"
                value={employersCount}
                onChange={(e) => setEmployersCount(parseInt(e.target.value) || 0)}
                className="w-full accent-[#00C7B1] bg-[#202A30] h-2 rounded-lg cursor-pointer"
              />
            </div>
          </div>

          {/* Result Box */}
          <div className="p-5 rounded-2xl bg-[#080B0E] border border-[#00E5F0]/40 flex items-center justify-between">
            <div>
              <span className="text-xs text-[#AEB8C2] block">{t('potentialEarnings')}</span>
              <span className="text-2xl sm:text-3xl font-extrabold text-[#00E5F0]">
                ${estimatedReward.toLocaleString('en-US')}
              </span>
            </div>
            <span className="text-[10px] text-[#AEB8C2] max-w-[140px] text-right">
              Subject to verified placement and client probation milestone.
            </span>
          </div>
        </div>

        {/* Tiers Breakdown */}
        <div className="lg:col-span-6 space-y-4">
          <div className="glass-panel rounded-2xl p-6 border border-[#202A30] space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold text-white">Tier 1: Candidate Placement Referral</h4>
              <span className="text-xs font-bold text-[#00E5F0]">Up to $1,000</span>
            </div>
            <p className="text-xs text-[#AEB8C2] leading-relaxed">
              Awarded when a candidate referred by you is shortlisted, passes interviews, joins our corporate partner, and completes the 30-day verification milestone.
            </p>
          </div>

          <div className="glass-panel rounded-2xl p-6 border border-[#202A30] space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold text-white">Tier 2: Corporate Hiring Mandate Referral</h4>
              <span className="text-xs font-bold text-[#00C7B1]">Up to $3,000</span>
            </div>
            <p className="text-xs text-[#AEB8C2] leading-relaxed">
              Awarded when you introduce a hiring company or HR decision-maker who signs an official recruitment engagement contract with Infidell and completes the first placement.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#0A0D10] border border-[#202A30] flex items-center gap-3 text-xs text-[#AEB8C2]">
            <ShieldCheck className="w-5 h-5 text-[#00C7B1] flex-shrink-0" />
            <span>
              100% Transparent Tracking: Receive SMS and email status updates as your referral progresses through interview loops.
            </span>
          </div>
        </div>
      </div>

      {/* Referral Submission Form */}
      <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-[#202A30] max-w-3xl mx-auto shadow-2xl">
        <div className="mb-8 text-center max-w-xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-2">
            {t('submitReferral')}
          </h3>
          <p className="text-xs sm:text-sm text-[#AEB8C2]">
            Submit your referral information below. We will handle the screening and interview scheduling with complete professionalism.
          </p>
        </div>

        {successData ? (
          <div className="p-8 rounded-2xl bg-[#080B0E] border border-[#00E5F0] text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#00E5F0]/20 text-[#00E5F0] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-white">Referral Submitted Successfully!</h4>
            <p className="text-xs sm:text-sm text-[#AEB8C2]">
              {successData.message}
            </p>
            <div className="inline-block px-3 py-1.5 rounded-lg bg-[#0A0D10] border border-[#202A30] text-xs font-mono text-[#00E5F0]">
              Tracking Code: {successData.code}
            </div>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setSuccessData(null)}
                className="px-6 py-2 rounded-full text-xs font-bold text-black bg-[#00E5F0] hover:bg-[#00BFD0]"
              >
                Submit Another Referral
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {serverError && (
              <div className="p-3.5 rounded-xl bg-red-950/40 border border-red-500/50 text-red-300 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{serverError}</span>
              </div>
            )}

            {/* Your Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-white mb-1.5">
                  {t('fullName')} *
                </label>
                <input
                  {...register('referrerName')}
                  type="text"
                  placeholder="Your full name"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#080B0E] border border-[#202A30] text-sm text-white focus:outline-none focus:border-[#00E5F0] transition-colors"
                />
                {errors.referrerName && (
                  <p className="text-red-400 text-[11px] mt-1">{errors.referrerName.message}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-white mb-1.5">
                  {t('yourPhone')} *
                </label>
                <input
                  {...register('referrerPhone')}
                  type="tel"
                  placeholder="Your 10-digit mobile number"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#080B0E] border border-[#202A30] text-sm text-white focus:outline-none focus:border-[#00E5F0] transition-colors"
                />
                {errors.referrerPhone && (
                  <p className="text-red-400 text-[11px] mt-1">{errors.referrerPhone.message}</p>
                )}
              </div>
            </div>

            {/* Referral Type Selector */}
            <div>
              <label className="block text-xs font-semibold text-white mb-1.5">
                {t('referralType')} *
              </label>
              <div className="grid grid-cols-2 gap-3">
                <label
                  className={`flex items-center justify-center p-3 rounded-xl border text-xs font-semibold cursor-pointer transition-all ${
                    selectedType === 'candidate'
                      ? 'border-[#00E5F0] bg-[#00E5F0]/10 text-white'
                      : 'border-[#202A30] bg-[#080B0E] text-[#AEB8C2]'
                  }`}
                >
                  <input
                    type="radio"
                    value="candidate"
                    {...register('referralType')}
                    className="sr-only"
                  />
                  <span>{t('candidateRef')}</span>
                </label>

                <label
                  className={`flex items-center justify-center p-3 rounded-xl border text-xs font-semibold cursor-pointer transition-all ${
                    selectedType === 'employer'
                      ? 'border-[#00C7B1] bg-[#00C7B1]/10 text-white'
                      : 'border-[#202A30] bg-[#080B0E] text-[#AEB8C2]'
                  }`}
                >
                  <input
                    type="radio"
                    value="employer"
                    {...register('referralType')}
                    className="sr-only"
                  />
                  <span>{t('employerRef')}</span>
                </label>
              </div>
            </div>

            {/* Referee Info */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-white mb-1.5">
                  {t('refereeName')} *
                </label>
                <input
                  {...register('refereeName')}
                  type="text"
                  placeholder="Candidate or Company name"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#080B0E] border border-[#202A30] text-sm text-white focus:outline-none focus:border-[#00E5F0] transition-colors"
                />
                {errors.refereeName && (
                  <p className="text-red-400 text-[11px] mt-1">{errors.refereeName.message}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-white mb-1.5">
                  {t('refereePhone')} *
                </label>
                <input
                  {...register('refereePhone')}
                  type="tel"
                  placeholder="Referee phone number"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#080B0E] border border-[#202A30] text-sm text-white focus:outline-none focus:border-[#00E5F0] transition-colors"
                />
                {errors.refereePhone && (
                  <p className="text-red-400 text-[11px] mt-1">{errors.refereePhone.message}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-white mb-1.5">
                  {t('refereeEmail')} *
                </label>
                <input
                  {...register('refereeEmail')}
                  type="email"
                  placeholder="Referee email address"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#080B0E] border border-[#202A30] text-sm text-white focus:outline-none focus:border-[#00E5F0] transition-colors"
                />
                {errors.refereeEmail && (
                  <p className="text-red-400 text-[11px] mt-1">{errors.refereeEmail.message}</p>
                )}
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-xs font-semibold text-white mb-1.5">
                {t('notes')}
              </label>
              <textarea
                {...register('notes')}
                rows={2}
                placeholder="Mention relevant skills, experience years, current employer, or specific hiring requirement..."
                className="w-full px-4 py-2.5 rounded-xl bg-[#080B0E] border border-[#202A30] text-sm text-white focus:outline-none focus:border-[#00E5F0] transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-3.5 rounded-xl text-sm font-bold text-black bg-[#00E5F0] hover:bg-[#00BFD0] transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,229,240,0.3)] disabled:opacity-50"
            >
              <Share2 className="w-4 h-4 text-black" />
              <span>{submitting ? 'Submitting Referral...' : t('btnSubmit')}</span>
            </button>
          </form>
        )}
      </div>

      {/* Program FAQs */}
      <div className="max-w-3xl mx-auto space-y-4">
        <h3 className="text-xl font-bold text-white text-center mb-6">
          Refer & Earn Program Policy & Terms
        </h3>
        {referralFaqs.map((faq, idx) => {
          const isOpen = openFaq === idx;
          return (
            <div
              key={idx}
              className="glass-panel rounded-xl border border-[#202A30] overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setOpenFaq(isOpen ? null : idx)}
                className="w-full py-4 px-5 text-left flex items-center justify-between text-xs sm:text-sm font-bold text-white focus:outline-none"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 text-[#AEB8C2] transition-transform ${
                    isOpen ? 'rotate-180 text-[#00E5F0]' : ''
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-5 pb-4 text-xs text-[#AEB8C2] leading-relaxed border-t border-[#202A30]/50 pt-2">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

