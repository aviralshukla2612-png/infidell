'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useTranslations } from 'next-intl';
import { Building2, CheckCircle2, AlertCircle, Send, Sparkles } from 'lucide-react';

const employerSchema = z.object({
  companyName: z.string().min(2, 'Company name is required'),
  contactPerson: z.string().min(2, 'Contact person name is required'),
  workEmail: z.string().email('Please enter a valid official email'),
  phone: z.string().min(10, 'Contact number must be at least 10 digits'),
  industry: z.string().min(2, 'Please select or enter an industry sector'),
  hiringRole: z.string().min(2, 'Target hiring role is required'),
  openPositions: z.coerce.number().min(1, 'Minimum 1 position required'),
  jobLocation: z.string().min(2, 'Location is required'),
  jobDescription: z.string().min(10, 'Job description must be at least 10 characters')
});

type EmployerFormValues = z.infer<typeof employerSchema>;

export function EmployerRegistrationForm() {
  const t = useTranslations('EmployerForm');
  const [submitting, setSubmitting] = useState(false);
  const [successData, setSuccessData] = useState<{ mandateId: string; message: string } | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<EmployerFormValues>({
    resolver: zodResolver(employerSchema) as any,
    defaultValues: {
      openPositions: 1
    }
  });

  const onSubmit = async (data: EmployerFormValues) => {
    setSubmitting(true);
    setServerError(null);

    try {
      const res = await fetch('/api/employer/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      const result = await res.json();

      if (res.ok && result.success) {
        setSuccessData({
          mandateId: result.mandateId,
          message: result.message
        });
        reset();
      } else {
        setServerError(result.errors?.[0]?.message || result.message || 'Submission failed');
      }
    } catch (err) {
      setServerError('Network error. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (successData) {
    return (
      <div className="glass-panel rounded-2xl p-8 sm:p-12 border border-[#00C7B1]/40 text-center space-y-4 animate-in fade-in duration-300">
        <div className="w-14 h-14 rounded-full bg-[#00C7B1]/20 border border-[#00C7B1] text-[#00C7B1] flex items-center justify-center mx-auto mb-2">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <h3 className="text-2xl font-bold text-white">Hiring Mandate Registered</h3>
        <p className="text-sm text-[#AEB8C2] max-w-lg mx-auto">
          {successData.message}
        </p>
        <div className="inline-block p-3 rounded-lg bg-[#0A0D10] border border-[#202A30] text-xs font-mono text-[#00C7B1]">
          Mandate Reference: {successData.mandateId}
        </div>
        <div className="pt-4">
          <button
            type="button"
            onClick={() => setSuccessData(null)}
            className="px-6 py-2.5 rounded-full text-xs font-bold text-black bg-[#00C7B1] hover:bg-[#00BFD0] transition-colors"
          >
            Submit Another Requirement
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {serverError && (
        <div className="p-4 rounded-xl bg-red-950/40 border border-red-500/50 text-red-300 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>{serverError}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Company Name */}
        <div>
          <label htmlFor="emp-companyName" className="block text-xs font-semibold text-white mb-2">
            {t('companyName')} *
          </label>
          <input
            id="emp-companyName"
            {...register('companyName')}
            type="text"
            placeholder="e.g. Acme Technologies Pvt Ltd"
            className="w-full px-4 py-3 rounded-xl bg-[#080B0E] border border-[#202A30] text-sm text-white focus:outline-none focus:border-[#00C7B1] transition-colors"
          />
          {errors.companyName && (
            <p className="text-red-400 text-[11px] mt-1">{errors.companyName.message}</p>
          )}
        </div>

        {/* Contact Person */}
        <div>
          <label htmlFor="emp-contactPerson" className="block text-xs font-semibold text-white mb-2">
            {t('contactPerson')} *
          </label>
          <input
            id="emp-contactPerson"
            {...register('contactPerson')}
            type="text"
            placeholder="e.g. Ramesh Shah, VP - Talent Acquisition"
            className="w-full px-4 py-3 rounded-xl bg-[#080B0E] border border-[#202A30] text-sm text-white focus:outline-none focus:border-[#00C7B1] transition-colors"
          />
          {errors.contactPerson && (
            <p className="text-red-400 text-[11px] mt-1">{errors.contactPerson.message}</p>
          )}
        </div>

        {/* Work Email */}
        <div>
          <label htmlFor="emp-workEmail" className="block text-xs font-semibold text-white mb-2">
            {t('workEmail')} *
          </label>
          <input
            id="emp-workEmail"
            {...register('workEmail')}
            type="email"
            placeholder="hr@yourcompany.com"
            className="w-full px-4 py-3 rounded-xl bg-[#080B0E] border border-[#202A30] text-sm text-white focus:outline-none focus:border-[#00C7B1] transition-colors"
          />
          {errors.workEmail && (
            <p className="text-red-400 text-[11px] mt-1">{errors.workEmail.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="emp-phone" className="block text-xs font-semibold text-white mb-2">
            {t('phone')} *
          </label>
          <input
            id="emp-phone"
            {...register('phone')}
            type="tel"
            placeholder="+91 98250 XXXXX"
            className="w-full px-4 py-3 rounded-xl bg-[#080B0E] border border-[#202A30] text-sm text-white focus:outline-none focus:border-[#00C7B1] transition-colors"
          />
          {errors.phone && (
            <p className="text-red-400 text-[11px] mt-1">{errors.phone.message}</p>
          )}
        </div>

        {/* Industry */}
        <div>
          <label htmlFor="emp-industry" className="block text-xs font-semibold text-white mb-2">
            {t('industry')} *
          </label>
          <select
            id="emp-industry"
            {...register('industry')}
            className="w-full px-4 py-3 rounded-xl bg-[#080B0E] border border-[#202A30] text-sm text-white focus:outline-none focus:border-[#00C7B1] transition-colors cursor-pointer"
          >
            <option value="">Select Industry</option>
            <option value="Information Technology">Information Technology</option>
            <option value="Engineering & Manufacturing">Engineering & Manufacturing</option>
            <option value="Finance and Accounting">Finance and Accounting</option>
            <option value="Sales and Marketing">Sales and Marketing</option>
            <option value="Human Resources">Human Resources</option>
            <option value="Corporate Administration">Corporate Administration</option>
            <option value="Customer Support">Customer Support</option>
            <option value="Operations & Logistics">Operations & Logistics</option>
          </select>
          {errors.industry && (
            <p className="text-red-400 text-[11px] mt-1">{errors.industry.message}</p>
          )}
        </div>

        {/* Role & Open Positions */}
        <div>
          <label htmlFor="emp-hiringRole" className="block text-xs font-semibold text-white mb-2">
            {t('hiringRole')} *
          </label>
          <input
            id="emp-hiringRole"
            {...register('hiringRole')}
            type="text"
            placeholder="e.g. Senior Frontend Engineer"
            className="w-full px-4 py-3 rounded-xl bg-[#080B0E] border border-[#202A30] text-sm text-white focus:outline-none focus:border-[#00C7B1] transition-colors"
          />
          {errors.hiringRole && (
            <p className="text-red-400 text-[11px] mt-1">{errors.hiringRole.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="emp-openPositions" className="block text-xs font-semibold text-white mb-2">
            {t('openPositions')} *
          </label>
          <input
            id="emp-openPositions"
            {...register('openPositions')}
            type="number"
            min="1"
            className="w-full px-4 py-3 rounded-xl bg-[#080B0E] border border-[#202A30] text-sm text-white focus:outline-none focus:border-[#00C7B1] transition-colors"
          />
          {errors.openPositions && (
            <p className="text-red-400 text-[11px] mt-1">{errors.openPositions.message}</p>
          )}
        </div>

        {/* Job Location */}
        <div>
          <label htmlFor="emp-jobLocation" className="block text-xs font-semibold text-white mb-2">
            {t('jobLocation')} *
          </label>
          <input
            id="emp-jobLocation"
            {...register('jobLocation')}
            type="text"
            placeholder="e.g. Ahmedabad / Remote / Pune"
            className="w-full px-4 py-3 rounded-xl bg-[#080B0E] border border-[#202A30] text-sm text-white focus:outline-none focus:border-[#00C7B1] transition-colors"
          />
          {errors.jobLocation && (
            <p className="text-red-400 text-[11px] mt-1">{errors.jobLocation.message}</p>
          )}
        </div>
      </div>

      {/* Job Description */}
      <div>
        <label htmlFor="emp-jobDescription" className="block text-xs font-semibold text-white mb-2">
          {t('jobDescription')} *
        </label>
        <textarea
          id="emp-jobDescription"
          {...register('jobDescription')}
          rows={4}
          placeholder="Briefly describe the role, required experience in years, key technical/functional skills, and proposed CTC budget range..."
          className="w-full px-4 py-3 rounded-xl bg-[#080B0E] border border-[#202A30] text-sm text-white focus:outline-none focus:border-[#00C7B1] transition-colors resize-none"
        />
        {errors.jobDescription && (
          <p className="text-red-400 text-[11px] mt-1">{errors.jobDescription.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full py-4 rounded-xl text-sm font-bold text-black bg-gradient-to-r from-[#00C7B1] to-[#00BFD0] hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,199,177,0.3)] disabled:opacity-50"
      >
        <Send className="w-4 h-4 text-black" />
        <span>{submitting ? 'Registering Mandate...' : t('btnSubmit')}</span>
      </button>
    </form>
  );
}

