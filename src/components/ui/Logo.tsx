'use client';

import React from 'react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  showTagline?: boolean;
}

export function Logo({
  className = '',
  size = 'md',
  showText = true,
  showTagline = true
}: LogoProps) {
  const iconDimensions = {
    sm: { size: 32, className: 'w-7 h-7 sm:w-8 sm:h-8' },
    md: { size: 40, className: 'w-9 h-9 sm:w-10 sm:h-10' },
    lg: { size: 56, className: 'w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14' }
  };

  const titleSizes = {
    sm: 'text-sm sm:text-base',
    md: 'text-base sm:text-lg lg:text-xl',
    lg: 'text-xl sm:text-2xl'
  };

  const subSizes = {
    sm: 'text-[8px] sm:text-[9px]',
    md: 'text-[9px] sm:text-[10px]',
    lg: 'text-[10px] sm:text-[11px]'
  };

  const currentIcon = iconDimensions[size];

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 sm:gap-3 group transition-opacity hover:opacity-95 cursor-pointer select-none bg-transparent ${className}`}
    >
      {/* Official Infidell Infinity Icon */}
      <div className="relative flex items-center justify-center shrink-0 rounded-full overflow-hidden shadow-[0_0_15px_rgba(0,213,223,0.25)] border border-[#00D5DF]/30">
        <Image
          src="/infidell-infinity-icon.png"
          alt="INFIDELL Logo"
          width={currentIcon.size}
          height={currentIcon.size}
          className={`${currentIcon.className} object-cover transform group-hover:scale-105 transition-transform duration-300`}
          priority
        />
      </div>

      {/* Company Name Typography */}
      {showText && (
        <div className="flex flex-col leading-tight select-none">
          <span className={`font-extrabold tracking-[0.14em] text-[#102B50] dark:text-white ${titleSizes[size]} uppercase group-hover:text-[#00D5DF] transition-colors`}>
            INFIDELL
          </span>
          {showTagline && (
            <span className={`font-semibold tracking-[0.22em] text-[#64748B] dark:text-[#A5B2B3] group-hover:text-[#102B50] dark:group-hover:text-white transition-colors uppercase ${subSizes[size]} mt-0.5`}>
              TECHNOLOGY
            </span>
          )}
        </div>
      )}
    </Link>
  );
}
