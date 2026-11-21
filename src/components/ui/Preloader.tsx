'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

export function Preloader() {
  const [mounted, setMounted] = useState(false);
  const [hidden, setHidden] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const lettersRef = useRef<(HTMLSpanElement | null)[]>([]);

  const brandLetters = ['I', 'N', 'F', 'I', 'D', 'E', 'L', 'L'];

  useEffect(() => {
    setMounted(true);

    // Prevent background scroll while preloader is active
    document.body.style.overflow = 'hidden';

    // GSAP wave timeline for letters
    const validLetters = lettersRef.current.filter(Boolean);
    const ctx = gsap.context(() => {
      // Fluid letter wave animation
      gsap.fromTo(
        validLetters,
        { y: 12, opacity: 0.3, scale: 0.95 },
        {
          y: -14,
          opacity: 1,
          scale: 1.08,
          duration: 0.65,
          stagger: {
            each: 0.09,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
          }
        }
      );
    }, containerRef);

    // Allow the wave animation to showcase for ~1.3s then smoothly reveal the page
    const timer = setTimeout(() => {
      if (containerRef.current) {
        gsap.to(containerRef.current, {
          yPercent: -100,
          opacity: 0.9,
          duration: 0.85,
          ease: 'power4.inOut',
          onComplete: () => {
            setHidden(true);
            document.body.style.overflow = '';
          }
        });
      } else {
        setHidden(true);
        document.body.style.overflow = '';
      }
    }, 1250);

    return () => {
      clearTimeout(timer);
      ctx.revert();
      document.body.style.overflow = '';
    };
  }, []);

  if (!mounted || hidden) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white dark:bg-[#050708] select-none transition-colors duration-300"
      style={{
        boxShadow: '0 25px 60px rgba(0, 0, 0, 0.3)'
      }}
      aria-label="Loading Infidell Technology LLP"
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
              priority
              className="w-full h-full object-contain filter drop-shadow-[0_4px_16px_rgba(8,127,203,0.35)] dark:drop-shadow-[0_0_20px_rgba(0,213,223,0.6)]"
            />
          </div>
        </div>

        {/* Brand Letters with Wave Motion */}
        <div className="flex items-center gap-2 sm:gap-3 text-3xl sm:text-4xl md:text-5xl font-black tracking-[0.22em] text-[#102B50] dark:text-white">
          {brandLetters.map((char, index) => (
            <span
              key={index}
              ref={(el) => {
                lettersRef.current[index] = el;
              }}
              className="inline-block transition-colors duration-300 transform-gpu cursor-default"
              style={{
                textShadow: '0 4px 18px rgba(8, 127, 203, 0.25)'
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
            Technology LLP
          </span>
        </div>

        {/* Minimalist Progress Track */}
        <div className="mt-8 w-44 sm:w-56 h-[3px] bg-slate-100 dark:bg-neutral-800 rounded-full overflow-hidden relative">
          <div className="preloader-progress-bar absolute inset-y-0 left-0 bg-gradient-to-r from-[#087FCB] to-[#00BFCB] dark:from-[#00D5DF] dark:to-[#38BDF8] rounded-full animate-[progressPulse_1.2s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  );
}
