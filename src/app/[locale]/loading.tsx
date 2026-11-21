import React from 'react';
import Image from 'next/image';

export default function Loading() {
  const brandLetters = ['I', 'N', 'F', 'I', 'D', 'E', 'L', 'L'];

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white dark:bg-[#050708] select-none"
      aria-label="Loading..."
      role="status"
    >
      {/* Ambient background glow */}
      <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-[#087FCB]/10 dark:bg-[#00D5DF]/15 blur-[120px] pointer-events-none" />

      {/* Centerpiece Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Pulsing Infinity Emblem */}
        <div className="relative mb-6 sm:mb-8">
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

        {/* Brand Letters with CSS Wave Animation */}
        <div className="flex items-center gap-2 sm:gap-3 text-3xl sm:text-4xl md:text-5xl font-black tracking-[0.22em] text-[#102B50] dark:text-white">
          {brandLetters.map((char, index) => (
            <span
              key={index}
              className="inline-block letter-wave-char"
              style={{
                animationDelay: `${index * 0.1}s`
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

        {/* Progress bar */}
        <div className="mt-8 w-44 sm:w-56 h-[3px] bg-slate-100 dark:bg-neutral-800 rounded-full overflow-hidden relative">
          <div className="preloader-progress-bar absolute inset-y-0 left-0 bg-gradient-to-r from-[#087FCB] to-[#00BFCB] dark:from-[#00D5DF] dark:to-[#38BDF8] rounded-full animate-[progressPulse_1.2s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  );
}
