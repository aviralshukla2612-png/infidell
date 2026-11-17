'use client';

import React from 'react';
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
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12'
  };

  const titleSizes = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  const subSizes = {
    sm: 'text-[9px]',
    md: 'text-[10px]',
    lg: 'text-[11px]'
  };

  return (
    <Link href="/" className={`inline-flex items-center gap-3 group transition-opacity hover:opacity-95 ${className}`}>
      {/* Official Infinity Vector Emblem */}
      <div className={`relative ${iconSizes[size]} rounded-full bg-gradient-to-br from-[#08151e] to-[#0d222e] border border-[#00E5F0]/40 flex items-center justify-center p-1.5 shadow-[0_0_15px_rgba(0,229,240,0.25)] group-hover:border-[#00E5F0] transition-colors overflow-hidden`}>
        <svg 
          viewBox="0 0 100 60" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-[#00E5F0] transform group-hover:scale-105 transition-transform"
        >
          <path
            d="M 30,15 C 42,15 50,30 50,30 C 50,30 58,45 70,45 C 82,45 88,38 88,30 C 88,22 82,15 70,15 C 58,15 50,30 50,30 C 50,30 42,45 30,45 C 18,45 12,38 12,30 C 12,22 18,15 30,15 Z"
            stroke="url(#infGlow)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient id="infGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00E5F0" />
              <stop offset="50%" stopColor="#00BFD0" />
              <stop offset="100%" stopColor="#00C7B1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Typography */}
      {showText && (
        <div className="flex flex-col leading-none">
          <span className={`font-extrabold tracking-[0.14em] text-white ${titleSizes[size]} uppercase`}>
            INFIDELL
          </span>
          {showTagline && (
            <span className={`font-semibold tracking-[0.25em] text-[#AEB8C2] group-hover:text-[#00E5F0] transition-colors uppercase ${subSizes[size]} mt-0.5`}>
              TECHNOLOGY LLP
            </span>
          )}
        </div>
      )}
    </Link>
  );
}
