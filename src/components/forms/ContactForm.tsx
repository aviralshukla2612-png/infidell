'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useTranslations } from 'next-intl';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

const contactSchema = z.object({
  fullName: z.string().min(2, 'Name is required'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Contact phone number must be at least 10 digits'),
  inquiryType: z.enum(['candidate', 'employer', 'referral', 'general']),
  message: z.string().min(10, 'Message must be at least 10 characters')
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const t = useTranslations('Contact');
  const [submitting, setSubmitting] = useState(false);
  const [successData, setSuccessData] = useState<{ ticketId: string; message: string } | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema) as any,
    defaultValues: {
      inquiryType: 'candidate'
    }
  });

  const onSubmit = async (data: ContactFormValues) => {
    setSubmitting(true);
    setServerError(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      const result = await res.json();

      if (res.ok && result.success) {
        setSuccessData({
          ticketId: result.ticketId,
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
      <div className="p-8 rounded-2xl bg-[#080B0E] border border-[#00E5F0] text-center space-y-4 animate-in fade-in duration-300">
        <div className="w-12 h-12 rounded-full bg-[#00E5F0]/20 text-[#00E5F0] flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h4 className="text-xl font-bold text-white">Message Received!</h4>
        <p className="text-xs sm:text-sm text-[#AEB8C2]">
          {successData.message}
        </p>
        <div className="inline-block px-3 py-1.5 rounded-lg bg-[#0A0D10] border border-[#202A30] text-xs font-mono text-[#00E5F0]">
          Inquiry Ticket: {successData.ticketId}
        </div>
        <div className="pt-2">
          <button
            type="button"
            onClick={() => setSuccessData(null)}
            className="px-6 py-2 rounded-full text-xs font-bold text-black bg-[#00E5F0] hover:bg-[#00BFD0]"
          >
            Send Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {serverError && (
        <div className="p-3.5 rounded-xl bg-red-950/40 border border-red-500/50 text-red-300 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>{serverError}</span>
        </div>
      )}

      <div>
        <label className="block text-xs font-semibold text-white mb-1.5">
          {t('fullName')} *
        </label>
        <input
          {...register('fullName')}
          type="text"
          placeholder="Your full name"
          className="w-full px-4 py-2.5 rounded-xl bg-[#080B0E] border border-[#202A30] text-sm text-white focus:outline-none focus:border-[#00E5F0] transition-colors"
        />
        {errors.fullName && (
          <p className="text-red-400 text-[11px] mt-1">{errors.fullName.message}</p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-white mb-1.5">
            {t('email')} *
          </label>
          <input
            {...register('email')}
            type="email"
            placeholder="your.email@example.com"
            className="w-full px-4 py-2.5 rounded-xl bg-[#080B0E] border border-[#202A30] text-sm text-white focus:outline-none focus:border-[#00E5F0] transition-colors"
          />
          {errors.email && (
            <p className="text-red-400 text-[11px] mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-xs font-semibold text-white mb-1.5">
            {t('phone')} *
          </label>
          <input
            {...register('phone')}
            type="tel"
            placeholder="10-digit mobile number"
            className="w-full px-4 py-2.5 rounded-xl bg-[#080B0E] border border-[#202A30] text-sm text-white focus:outline-none focus:border-[#00E5F0] transition-colors"
          />
          {errors.phone && (
            <p className="text-red-400 text-[11px] mt-1">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-white mb-1.5">
          {t('inquiryType')} *
        </label>
        <select
          {...register('inquiryType')}
          className="w-full px-4 py-2.5 rounded-xl bg-[#080B0E] border border-[#202A30] text-sm text-white focus:outline-none focus:border-[#00E5F0] transition-colors cursor-pointer"
        >
          <option value="candidate">{t('typeCandidate')}</option>
          <option value="employer">{t('typeEmployer')}</option>
          <option value="referral">{t('typeReferral')}</option>
          <option value="general">{t('typeGeneral')}</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-semibold text-white mb-1.5">
          {t('message')} *
        </label>
        <textarea
          {...register('message')}
          rows={4}
          placeholder="Please share details about your inquiry, job interest, or hiring requirement..."
          className="w-full px-4 py-2.5 rounded-xl bg-[#080B0E] border border-[#202A30] text-sm text-white focus:outline-none focus:border-[#00E5F0] transition-colors resize-none"
        />
        {errors.message && (
          <p className="text-red-400 text-[11px] mt-1">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full py-3.5 rounded-xl text-sm font-bold text-black bg-[#00E5F0] hover:bg-[#00BFD0] transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,229,240,0.3)] disabled:opacity-50"
      >
        <Send className="w-4 h-4 text-black" />
        <span>{submitting ? 'Sending...' : t('btnSend')}</span>
      </button>
    </form>
  );
}

