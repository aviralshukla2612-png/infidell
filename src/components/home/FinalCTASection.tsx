'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { ArrowRight, PhoneCall, Sparkles } from 'lucide-react';

export function FinalCTASection() {
  const t = useTranslations('FinalCTA');

  return (
    <section className="py-20 lg:py-28 bg-[#050709] relative border-t border-[#202A30] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[300px] bg-gradient-to-r from-[#00E5F0]/10 via-[#00BFD0]/10 to-[#00C7B1]/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A0D10] border border-[#00E5F0]/30 text-xs font-bold text-[#00E5F0] uppercase tracking-widest mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#00E5F0]" />
          <span>{t('badge')}</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto">
          {t('title')}
        </h2>

        <p className="text-base sm:text-lg text-[#AEB8C2] max-w-2xl mx-auto mt-4 mb-10 leading-relaxed">
          {t('subtitle')}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/register/candidate"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold text-black bg-[#00E5F0] hover:bg-[#00BFD0] transition-all shadow-[0_0_25px_rgba(0,229,240,0.4)] hover:shadow-[0_0_35px_rgba(0,229,240,0.6)] transform hover:scale-[1.02]"
          >
            <span>{t('ctaRegister')}</span>
            <ArrowRight className="w-4 h-4 text-black" />
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold text-white bg-[#0A0D10] hover:bg-[#151B21] border border-[#202A30] hover:border-[#00E5F0]/50 transition-all shadow-md"
          >
            <PhoneCall className="w-4 h-4 text-[#00E5F0]" />
            <span>{t('ctaContact')}</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

