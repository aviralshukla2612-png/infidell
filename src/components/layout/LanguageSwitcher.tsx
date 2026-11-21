'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { Locale } from '@/types';

const languages: { code: Locale; label: string; nativeLabel: string }[] = [
  { code: 'en', label: 'English', nativeLabel: 'English' },
  { code: 'hi', label: 'Hindi', nativeLabel: 'हिन्दी' },
  { code: 'gu', label: 'Gujarati', nativeLabel: 'ગુજરાતી' }
];

export function LanguageSwitcher() {
  const currentLocale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedLang = languages.find((lang) => lang.code === currentLocale) || languages[0];

  const handleLanguageChange = (newLocale: Locale) => {
    setIsOpen(false);
    router.replace(pathname, { locale: newLocale });
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Select Language"
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-[#334155] dark:text-[#AEB8C2] hover:text-[#102B50] dark:hover:text-white bg-white dark:bg-[#0A0D10] border border-[#DCE5EF] dark:border-[#202A30] hover:border-[#087FCB] dark:hover:border-[#00E5F0]/50 shadow-sm transition-all duration-200 cursor-pointer"
      >
        <Globe className="w-3.5 h-3.5 text-[#087FCB] dark:text-[#00E5F0]" />
        <span className="font-semibold">{selectedLang.nativeLabel}</span>
        <ChevronDown className={`w-3 h-3 text-[#64748B] dark:text-[#AEB8C2] transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#087FCB] dark:text-[#00E5F0]' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 rounded-xl bg-white dark:bg-[#0A0D10]/95 backdrop-blur-xl border border-[#DCE5EF] dark:border-[#202A30] shadow-[0_12px_35px_rgba(16,43,80,0.12)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-1.5 z-50 animate-in fade-in zoom-in-95 duration-150">
          <div className="px-3 py-1 text-[10px] uppercase tracking-wider text-[#64748B] dark:text-[#AEB8C2] border-b border-[#DCE5EF] dark:border-[#202A30]/60 mb-1 font-semibold">
            Select Language
          </div>
          {languages.map((lang) => {
            const isSelected = lang.code === currentLocale;
            return (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full flex items-center justify-between px-3 py-2 text-xs text-left transition-colors cursor-pointer ${
                  isSelected
                    ? 'text-[#087FCB] dark:text-[#00E5F0] bg-[#EFF6FF] dark:bg-[#00E5F0]/10 font-medium'
                    : 'text-[#334155] dark:text-[#AEB8C2] hover:text-[#102B50] dark:hover:text-white hover:bg-[#F8FAFC] dark:hover:bg-white/5'
                }`}
              >
                <div className="flex flex-col">
                  <span className="font-medium text-[#102B50] dark:text-white">{lang.nativeLabel}</span>
                  <span className="text-[10px] text-[#64748B] dark:text-[#AEB8C2]">{lang.label}</span>
                </div>
                {isSelected && <Check className="w-3.5 h-3.5 text-[#087FCB] dark:text-[#00E5F0]" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

