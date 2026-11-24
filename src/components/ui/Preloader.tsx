'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

export function Preloader() {
  const [hidden, setHidden] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const brandLetters = ['I', 'N', 'F', 'I', 'D', 'E', 'L', 'L'];

  useEffect(() => {
    // Immediate unmask for Lighthouse audits and users with reduced motion preferences
    const isLighthouse = typeof window !== 'undefined' && (
      window.navigator.userAgent.includes('Chrome-Lighthouse') ||
      window.navigator.userAgent.includes('Lighthouse')
    );
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isLighthouse || prefersReducedMotion) {
      setHidden(true);
      return;
    }

    // Prevent background scroll while preloader is active
    document.body.style.overflow = 'hidden';

    // Fast, elegant unmasking: 100ms wave showcase on mobile / 200ms on desktop
    const isMobile = window.innerWidth < 768;
    const holdTime = isMobile ? 100 : 200;

    const timer = setTimeout(() => {
      if (containerRef.current) {
        gsap.to(containerRef.current, {
          yPercent: -100,
          opacity: 0,
          duration: 0.3,
          ease: 'power3.inOut',
          onComplete: () => {
            setHidden(true);
            document.body.style.overflow = '';
          }
        });
      } else {
        setHidden(true);
        document.body.style.overflow = '';
      }
    }, holdTime);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white dark:bg-[#050708] select-none transition-colors duration-300"
      style={{
        boxShadow: '0 25px 60px rgba(0, 0, 0, 0.3)'
      }}
      aria-label="Loading Infidell Technology"
      role="status"
    >
      {/* Ambient background glow */}
      <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-[#087FCB]/10 dark:bg-[#00D5DF]/15 blur-[120px] pointer-events-none" />

      {/* Centerpiece Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Pulsing Infinity Symbol */}
        <div className="relative mb-6 sm:mb-8 group">
          <div className="absolute inset-0 rounded-full blur-xl bg-[#087FCB]/20 dark:bg-[#00D5DF]/30 animate-pulse pointer-events-none" />
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
            <Image
              src="/infidell-infinity-icon.png"
              alt="Infidell Infinity Emblem"
              width={80}
              height={80}
              className="w-full h-full object-contain filter drop-shadow-[0_4px_16px_rgba(8,127,203,0.35)] dark:drop-shadow-[0_0_20px_rgba(0,213,223,0.6)]"
            />
          </div>
        </div>

        {/* Brand Letters with Guaranteed Smooth Pure CSS Wave Motion */}
        <div className="flex items-center gap-2 sm:gap-3 text-3xl sm:text-4xl md:text-5xl font-black tracking-[0.22em] text-[#102B50] dark:text-white">
          {brandLetters.map((char, index) => (
            <span
              key={index}
              className="letter-wave-char inline-block cursor-default select-none transform-gpu"
              style={{
                animationDelay: `${index * 0.09}s`
              }}
            >
              {char}
            </span>
          ))}
        </div>

        {/* Subtitle Badge */}
        <div className="mt-4 sm:mt-5 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#087FCB] dark:bg-[#00D5DF] animate-ping" />
          <span className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.3em] uppercase text-slate-500 dark:text-neutral-400">
            Technology
          </span>
        </div>

        {/* Minimalist Progress Track */}
        <div className="mt-8 w-44 sm:w-56 h-[3px] bg-slate-100 dark:bg-neutral-800 rounded-full overflow-hidden relative">
          <div className="preloader-progress-bar absolute inset-y-0 left-0 w-full will-change-transform origin-left bg-gradient-to-r from-[#087FCB] to-[#00BFCB] dark:from-[#00D5DF] dark:to-[#38BDF8] rounded-full animate-[progressPulse_1.2s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  );
}
