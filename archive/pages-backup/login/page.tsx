'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Logo } from '@/components/ui/Logo';
import { LogIn, User, Building2, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function LoginPage() {
  const [role, setRole] = useState<'candidate' | 'employer'>('candidate');
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!identifier || !password) {
      setStatusMessage('Please enter both your registered email/phone and password.');
      return;
    }
    // Simulate secure authenticated session entry
    setStatusMessage('Authenticating... Redirecting to your recruitment dashboard.');
  };

  return (
    <div className="pt-32 pb-24 bg-[#000000] min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md glass-panel rounded-3xl p-8 sm:p-10 border border-[#202A30] shadow-2xl relative">
        <div className="text-center mb-8">
          <Logo size="md" className="justify-center mb-4" />
          <h1 className="text-2xl font-bold text-white">
            {role === 'candidate' ? 'Candidate Portal Login' : 'Employer Portal Login'}
          </h1>
          <p className="text-xs text-[#AEB8C2] mt-1.5">
            Access your recruitment pipeline and active application updates.
          </p>
        </div>

        {/* Role Toggle */}
        <div className="grid grid-cols-2 gap-2 p-1 rounded-xl bg-[#080B0E] border border-[#202A30] mb-6">
          <button
            type="button"
            onClick={() => {
              setRole('candidate');
              setStatusMessage(null);
            }}
            className={`py-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
              role === 'candidate'
                ? 'bg-[#00E5F0] text-black shadow-md'
                : 'text-[#AEB8C2] hover:text-white'
            }`}
          >
            <User className="w-3.5 h-3.5" />
            <span>Job Seeker</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setRole('employer');
              setStatusMessage(null);
            }}
            className={`py-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
              role === 'employer'
                ? 'bg-[#00C7B1] text-black shadow-md'
                : 'text-[#AEB8C2] hover:text-white'
            }`}
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>Employer</span>
          </button>
        </div>

        {statusMessage && (
          <div className="mb-4 p-3 rounded-xl bg-[#00E5F0]/10 border border-[#00E5F0]/30 text-xs text-[#00E5F0] text-center">
            {statusMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-white mb-1.5">
              {role === 'candidate' ? 'Mobile Number or Email' : 'Work Email Address'}
            </label>
            <input
              type="text"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              placeholder={role === 'candidate' ? 'e.g. 9825012345 or user@email.com' : 'hr@company.com'}
              className="w-full px-4 py-2.5 rounded-xl bg-[#080B0E] border border-[#202A30] text-sm text-white focus:outline-none focus:border-[#00E5F0] transition-colors"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-xs font-semibold text-white">
                Password
              </label>
              <a href="#" className="text-[11px] text-[#00E5F0] hover:underline">
                Forgot password?
              </a>
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-2.5 rounded-xl bg-[#080B0E] border border-[#202A30] text-sm text-white focus:outline-none focus:border-[#00E5F0] transition-colors"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-xl text-sm font-bold text-black bg-[#00E5F0] hover:bg-[#00BFD0] transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,229,240,0.3)] mt-2"
          >
            <LogIn className="w-4 h-4 text-black" />
            <span>Sign In to Portal</span>
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-[#202A30] text-center text-xs text-[#AEB8C2]">
          <span>Don&apos;t have an account yet? </span>
          {role === 'candidate' ? (
            <Link href="/register/candidate" className="text-[#00E5F0] font-semibold hover:underline">
              Register as Candidate (Free)
            </Link>
          ) : (
            <Link href="/employers" className="text-[#00C7B1] font-semibold hover:underline">
              Submit Employer Mandate
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
