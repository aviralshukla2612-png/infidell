'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useTranslations } from 'next-intl';
import confetti from 'canvas-confetti';
import { 
  UserCheck, 
  Upload, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck, 
  FileText,
  Sparkles
} from 'lucide-react';

const candidateSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid 10-digit mobile number'),
  education: z.string().min(2, 'Highest education qualification is required'),
  experience: z.string().min(1, 'Please select your total work experience'),
  skills: z.string().min(2, 'Please list at least one primary skill (e.g. React, Java, Accounting)'),
  preferredIndustry: z.string().min(2, 'Preferred industry vertical is required'),
  preferredLocation: z.string().min(2, 'Preferred work location is required'),
  termsAccepted: z.boolean().refine((v) => v === true, 'You must agree to the terms and privacy policy')
});

type CandidateFormValues = z.infer<typeof candidateSchema>;

interface CandidateRegistrationFormProps {
  initialJobTitle?: string;
  initialJobId?: string;
}

export function CandidateRegistrationForm({
  initialJobTitle,
  initialJobId
}: CandidateRegistrationFormProps) {
  const t = useTranslations('CandidateForm');
  const [submitting, setSubmitting] = useState(false);
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);
  const [successData, setSuccessData] = useState<{ candidateId: string; message: string } | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<CandidateFormValues>({
    resolver: zodResolver(candidateSchema) as any,
    defaultValues: {
      termsAccepted: false
    }
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('File size exceeds 5MB limit. Please select a smaller PDF or Word file.');
        return;
      }
      setSelectedFileName(file.name);
    }
  };

  const onSubmit = async (data: CandidateFormValues) => {
    setSubmitting(true);
    setServerError(null);

    try {
      const payload = {
        ...data,
        resumeFileName: selectedFileName || 'resume_uploaded.pdf',
        appliedJobTitle: initialJobTitle || undefined,
        appliedJobId: initialJobId || undefined
      };

      const res = await fetch('/api/candidate/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const result = await res.json();

      if (res.ok && result.success) {
        setSuccessData({
          candidateId: result.candidateId,
          message: result.message
        });
        reset();
        setSelectedFileName(null);
        try {
          confetti({
            particleCount: 90,
            spread: 75,
            origin: { y: 0.6 }
          });
        } catch (e) {
          // ignore
        }
      } else {
        setServerError(result.errors?.[0]?.message || result.message || 'Registration failed');
      }
    } catch (err) {
      setServerError('Network error. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (successData) {
    return (
      <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-[#00E5F0]/40 text-center space-y-4 animate-in fade-in duration-300">
        <div className="w-16 h-16 rounded-full bg-[#00E5F0]/20 border border-[#00E5F0] text-[#00E5F0] flex items-center justify-center mx-auto mb-2">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-white">Registration Complete!</h3>
        <p className="text-sm text-[#AEB8C2] max-w-lg mx-auto">
          {successData.message}
        </p>
        <div className="inline-block p-3 rounded-lg bg-[#0A0D10] border border-[#202A30] text-xs font-mono text-[#00E5F0]">
          Candidate Registration ID: {successData.candidateId}
        </div>
        <p className="text-xs text-[#AEB8C2]">
          Our talent specialist will review your credentials and contact you via phone/WhatsApp when matching opportunities open.
        </p>
        <div className="pt-4">
          <button
            type="button"
            onClick={() => setSuccessData(null)}
            className="px-6 py-2.5 rounded-full text-xs font-bold text-black bg-[#00E5F0] hover:bg-[#00BFD0]"
          >
            Register Another Profile
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {initialJobTitle && (
        <div className="p-3.5 rounded-xl bg-[#00E5F0]/10 border border-[#00E5F0]/40 text-xs text-[#00E5F0] flex items-center justify-between">
          <span>Applying for opportunity: <strong>{initialJobTitle}</strong></span>
          <span className="text-[10px] bg-[#00E5F0]/20 px-2 py-0.5 rounded">Pre-Selected</span>
        </div>
      )}

      {serverError && (
        <div className="p-3.5 rounded-xl bg-red-950/40 border border-red-500/50 text-red-300 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>{serverError}</span>
        </div>
      )}

      {/* Basic Contact Info */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-semibold text-white mb-1.5">
            {t('fullName')} *
          </label>
          <input
            {...register('fullName')}
            type="text"
            placeholder="e.g. Priyank Sharma"
            className="w-full px-4 py-2.5 rounded-xl bg-[#080B0E] border border-[#202A30] text-sm text-white focus:outline-none focus:border-[#00E5F0] transition-colors"
          />
          {errors.fullName && (
            <p className="text-red-400 text-[11px] mt-1">{errors.fullName.message}</p>
          )}
        </div>

        <div>
          <label className="block text-xs font-semibold text-white mb-1.5">
            {t('email')} *
          </label>
          <input
            {...register('email')}
            type="email"
            placeholder="priyank@example.com"
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

      {/* Qualification & Experience */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-white mb-1.5">
            {t('education')} *
          </label>
          <select
            {...register('education')}
            className="w-full px-4 py-2.5 rounded-xl bg-[#080B0E] border border-[#202A30] text-sm text-white focus:outline-none focus:border-[#00E5F0] transition-colors cursor-pointer"
          >
            <option value="">Select Qualification</option>
            <option value="B.Tech / B.E. / BCA / MCA">B.Tech / B.E. / BCA / MCA</option>
            <option value="B.Com / M.Com / MBA (Finance)">B.Com / M.Com / MBA (Finance)</option>
            <option value="Chartered Accountant (CA) / CFA">Chartered Accountant (CA) / CFA</option>
            <option value="MBA / PGDM (HR / Marketing / Operations)">MBA / PGDM</option>
            <option value="Diploma / ITI Technical Certification">Diploma / ITI Technical</option>
            <option value="Other Graduate / Post Graduate">Other Graduate / Post Graduate</option>
          </select>
          {errors.education && (
            <p className="text-red-400 text-[11px] mt-1">{errors.education.message}</p>
          )}
        </div>

        <div>
          <label className="block text-xs font-semibold text-white mb-1.5">
            {t('experience')} *
          </label>
          <select
            {...register('experience')}
            className="w-full px-4 py-2.5 rounded-xl bg-[#080B0E] border border-[#202A30] text-sm text-white focus:outline-none focus:border-[#00E5F0] transition-colors cursor-pointer"
          >
            <option value="">Select Experience Level</option>
            <option value="Fresher (0 - 1 Year)">Fresher (0 - 1 Year)</option>
            <option value="1 - 3 Years (Junior Specialist)">1 - 3 Years (Junior Specialist)</option>
            <option value="3 - 6 Years (Mid-Level Professional)">3 - 6 Years (Mid-Level Professional)</option>
            <option value="6 - 10 Years (Senior / Lead)">6 - 10 Years (Senior / Lead)</option>
            <option value="10+ Years (Executive / Management)">10+ Years (Executive / Management)</option>
          </select>
          {errors.experience && (
            <p className="text-red-400 text-[11px] mt-1">{errors.experience.message}</p>
          )}
        </div>
      </div>

      {/* Skills */}
      <div>
        <label className="block text-xs font-semibold text-white mb-1.5">
          {t('skills')} *
        </label>
        <input
          {...register('skills')}
          type="text"
          placeholder="e.g. Next.js, React, Node.js, Financial Modeling, B2B Sales, PLC Automation"
          className="w-full px-4 py-2.5 rounded-xl bg-[#080B0E] border border-[#202A30] text-sm text-white focus:outline-none focus:border-[#00E5F0] transition-colors"
        />
        {errors.skills && (
          <p className="text-red-400 text-[11px] mt-1">{errors.skills.message}</p>
        )}
      </div>

      {/* Preferred Industry & Location */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-white mb-1.5">
            {t('preferredIndustry')} *
          </label>
          <select
            {...register('preferredIndustry')}
            className="w-full px-4 py-2.5 rounded-xl bg-[#080B0E] border border-[#202A30] text-sm text-white focus:outline-none focus:border-[#00E5F0] transition-colors cursor-pointer"
          >
            <option value="">Select Preferred Sector</option>
            <option value="Information Technology">Information Technology</option>
            <option value="Core Engineering & Manufacturing">Core Engineering & Manufacturing</option>
            <option value="Finance & Accounting">Finance & Accounting</option>
            <option value="Sales & Business Development">Sales & Business Development</option>
            <option value="Human Resources">Human Resources</option>
            <option value="Corporate Administration">Corporate Administration</option>
            <option value="Customer Support">Customer Support</option>
            <option value="Supply Chain & Operations">Supply Chain & Operations</option>
          </select>
          {errors.preferredIndustry && (
            <p className="text-red-400 text-[11px] mt-1">{errors.preferredIndustry.message}</p>
          )}
        </div>

        <div>
          <label className="block text-xs font-semibold text-white mb-1.5">
            {t('preferredLocation')} *
          </label>
          <input
            {...register('preferredLocation')}
            type="text"
            placeholder="e.g. Ahmedabad, Pune, Bengaluru, or Remote"
            className="w-full px-4 py-2.5 rounded-xl bg-[#080B0E] border border-[#202A30] text-sm text-white focus:outline-none focus:border-[#00E5F0] transition-colors"
          />
          {errors.preferredLocation && (
            <p className="text-red-400 text-[11px] mt-1">{errors.preferredLocation.message}</p>
          )}
        </div>
      </div>

      {/* Resume Upload File Box */}
      <div>
        <label className="block text-xs font-semibold text-white mb-1.5">
          {t('resume')}
        </label>
        <div className="p-4 rounded-xl border border-dashed border-[#202A30] bg-[#080B0E] hover:border-[#00E5F0]/50 transition-colors flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#00E5F0]/10 border border-[#00E5F0]/30 flex items-center justify-center text-[#00E5F0]">
              <Upload className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-semibold text-white block">
                {selectedFileName ? selectedFileName : 'Choose PDF, DOCX (Max 5MB)'}
              </span>
              <span className="text-[10px] text-[#AEB8C2]">
                {selectedFileName ? 'Ready to upload' : 'Will be sent directly to recruitment reviewer'}
              </span>
            </div>
          </div>

          <label className="px-3.5 py-1.5 rounded-lg bg-[#0A0D10] border border-[#202A30] hover:border-[#00E5F0] text-xs font-semibold text-white cursor-pointer transition-colors">
            <span>Browse</span>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="sr-only"
            />
          </label>
        </div>
      </div>

      {/* Terms and Privacy Checkbox */}
      <div className="pt-2">
        <label className="flex items-start gap-2.5 cursor-pointer">
          <input
            {...register('termsAccepted')}
            type="checkbox"
            className="w-4 h-4 mt-0.5 rounded border-[#202A30] bg-[#080B0E] text-[#00E5F0] focus:ring-[#00E5F0]"
          />
          <span className="text-xs text-[#AEB8C2] leading-relaxed">
            {t('termsAgree')}
          </span>
        </label>
        {errors.termsAccepted && (
          <p className="text-red-400 text-[11px] mt-1">{errors.termsAccepted.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full py-4 rounded-xl text-sm font-bold text-black bg-[#00E5F0] hover:bg-[#00BFD0] transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,229,240,0.35)] disabled:opacity-50"
      >
        <UserCheck className="w-4 h-4 text-black" />
        <span>{submitting ? 'Registering Your Profile...' : t('btnRegister')}</span>
      </button>

      <div className="flex items-center justify-center gap-2 text-xs text-[#AEB8C2] pt-2">
        <ShieldCheck className="w-4 h-4 text-[#00C7B1]" />
        <span>100% Free Service: We never solicit payments from candidates.</span>
      </div>
    </form>
  );
}

