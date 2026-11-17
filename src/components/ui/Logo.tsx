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
  const imageDimensions = {
    sm: { width: 56, height: 28, className: 'h-6 sm:h-7 w-auto' },
    md: { width: 74, height: 38, className: 'h-8 sm:h-9 md:h-10 w-auto' },
    lg: { width: 96, height: 49, className: 'h-11 sm:h-12 w-auto' }
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

  const currentSize = imageDimensions[size];

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 sm:gap-3 group transition-opacity hover:opacity-95 cursor-pointer select-none bg-transparent ${className}`}
    >
      {/* Official Transparent Infinity Logo (NO black background) */}
      <div className="relative flex items-center justify-center shrink-0 bg-transparent">
        <Image
          src="/logo-transparent.png"
          alt="INFIDELL Logo"
          width={currentSize.width}
          height={currentSize.height}
          className={`${currentSize.className} object-contain bg-transparent transform group-hover:scale-105 transition-transform duration-300`}
          priority
        />
      </div>

      {/* Company Name Typography */}
      {showText && (
        <div className="flex flex-col leading-tight select-none">
          <span className={`font-extrabold tracking-[0.14em] text-white ${titleSizes[size]} uppercase group-hover:text-[#00D5DF] transition-colors`}>
            INFIDELL
          </span>
          {showTagline && (
            <span className={`font-semibold tracking-[0.22em] text-[#A5B2B3] group-hover:text-white transition-colors uppercase ${subSizes[size]} mt-0.5`}>
              TECHNOLOGY LLP
            </span>
          )}
        </div>
      )}
    </Link>
  );
}
