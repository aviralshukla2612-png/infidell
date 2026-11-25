'use client';

import React from 'react';

interface CompanyLogo {
  name: string;
  svg: React.ReactNode;
}

export function CandidatesPlacedInSection() {
  const logos: CompanyLogo[] = [
    {
      name: 'Freddie Mac',
      svg: (
        <div className="flex items-center font-bold text-lg">
          <span className="text-[#89BA17]">Freddie</span>
          <span className="text-[#007A87] ml-1.5">Mac</span>
        </div>
      )
    },
    {
      name: 'Meta',
      svg: (
        <div className="flex items-center gap-2">
          <svg className="w-6 h-6 text-[#0081FB] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16.945 2.164a7.92 7.92 0 0 0-4.945 1.745 7.92 7.92 0 0 0-4.945-1.745C3.125 2.164 0 5.424 0 9.473c0 4.79 4.385 8.927 10.36 12.364a3.18 3.18 0 0 0 3.28 0c5.975-3.437 10.36-7.574 10.36-12.364 0-4.049-3.125-7.309-7.055-7.309zm-4.945 16.59C6.88 15.65 3.2 12.42 3.2 9.473c0-2.31 1.75-4.11 3.855-4.11 1.48 0 2.91.86 3.655 2.11h2.58c.745-1.25 2.175-2.11 3.655-2.11 2.105 0 3.855 1.8 3.855 4.11 0 2.947-3.68 6.177-8.8 9.281z" />
          </svg>
          <span className="text-lg font-extrabold text-[#102B50] dark:text-white tracking-tight">Meta</span>
        </div>
      )
    },
    {
      name: 'Amazon',
      svg: (
        <div className="flex flex-col items-center justify-center">
          <span className="text-lg font-bold text-[#102B50] dark:text-white tracking-tight lowercase leading-none">amazon</span>
          <svg className="w-14 h-3 -mt-0.5 text-[#FF9900]" viewBox="0 0 55 14" fill="none">
            <path d="M 3 4 Q 28 14 52 3" stroke="#FF9900" strokeWidth="2.8" strokeLinecap="round" />
            <path d="M 46 -1 L 53 3 L 49 8 Z" fill="#FF9900" />
          </svg>
        </div>
      )
    },
    {
      name: 'PayPal',
      svg: (
        <div className="flex items-center gap-1.5">
          <div className="flex -space-x-1 font-black italic text-xl">
            <span className="text-[#0079C1]">P</span>
            <span className="text-[#00457C]">P</span>
          </div>
          <span className="text-lg font-bold text-[#102B50] dark:text-white tracking-tight">
            Pay<span className="text-[#0079C1]">Pal</span>
          </span>
        </div>
      )
    },
    {
      name: 'Microsoft',
      svg: (
        <div className="flex items-center gap-2.5">
          <div className="grid grid-cols-2 gap-1 w-4 h-4">
            <span className="bg-[#F25022] w-1.5 h-1.5" />
            <span className="bg-[#7FBA00] w-1.5 h-1.5" />
            <span className="bg-[#00A4EF] w-1.5 h-1.5" />
            <span className="bg-[#FFB900] w-1.5 h-1.5" />
          </div>
          <span className="text-lg font-semibold text-[#102B50] dark:text-white tracking-tight">Microsoft</span>
        </div>
      )
    },
    {
      name: 'Discover',
      svg: (
        <div className="flex items-center tracking-wider">
          <span className="text-lg font-black text-[#102B50] dark:text-white">DISC</span>
          <span className="w-4 h-4 rounded-full bg-[#FF6000] inline-block mx-0.5 shadow-sm shadow-[#FF6000]/60" />
          <span className="text-lg font-black text-[#102B50] dark:text-white">VER</span>
        </div>
      )
    },
    {
      name: 'Intel',
      svg: (
        <div className="flex items-center">
          <span className="text-2xl font-bold tracking-tighter text-[#0071C5]">
            <span className="relative">
              i
              <span className="absolute -top-1 left-0.5 w-1.5 h-1.5 rounded-xs bg-[#00C7FD]" />
            </span>
            <span>ntel</span>
          </span>
        </div>
      )
    },
    {
      name: 'Google',
      svg: (
        <div className="flex items-center text-xl font-bold tracking-tight">
          <span className="text-[#4285F4]">G</span>
          <span className="text-[#EA4335]">o</span>
          <span className="text-[#FBBC05]">o</span>
          <span className="text-[#4285F4]">g</span>
          <span className="text-[#34A853]">l</span>
          <span className="text-[#EA4335]">e</span>
        </div>
      )
    },
    {
      name: 'Accenture',
      svg: (
        <div className="flex items-center">
          <span className="text-lg font-bold text-[#102B50] dark:text-white tracking-tight lowercase">accenture</span>
          <span className="text-[#A100FF] font-black text-2xl ml-1 leading-none">&gt;</span>
        </div>
      )
    },
    {
      name: 'Capital One',
      svg: (
        <div className="flex items-center gap-1.5">
          <span className="text-base font-extrabold text-[#102B50] dark:text-white tracking-tight italic">Capital</span>
          <span className="text-base font-bold text-[#D03027] italic">One</span>
          <svg className="w-6 h-3.5 text-[#D03027]" viewBox="0 0 24 12" fill="currentColor">
            <path d="M 0 7 C 8 -2 18 0 24 2 C 16 3 8 7 0 7 Z" />
          </svg>
        </div>
      )
    }
  ];

  // Double list for seamless infinite loop marquee
  const marqueeList = [...logos, ...logos];

  return (
    <section className="candidates-placed-section py-10 sm:py-12 bg-[#F8FAFC] dark:bg-[#000000] border-y border-slate-200 dark:border-[#202A30] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00E5F0]/5 to-transparent pointer-events-none" />
      {/* Top and Bottom Hairline Gradient Accents */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#00E5F0]/30 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#00E5F0]/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-7 text-center">
        <h2 className="text-xs sm:text-sm font-semibold text-[#64748B] dark:text-[#AEB8C2] uppercase tracking-[0.25em]">
          Candidates Placed in
        </h2>
      </div>

      {/* Marquee Container with fade edge overlays (100% GPU composited) */}
      <div className="relative w-full overflow-hidden">
        {/* Left Edge Fade */}
        <div className="absolute left-0 inset-y-0 w-16 sm:w-28 bg-gradient-to-r from-[#F8FAFC] dark:from-[#000000] to-transparent z-10 pointer-events-none" />
        {/* Right Edge Fade */}
        <div className="absolute right-0 inset-y-0 w-16 sm:w-28 bg-gradient-to-l from-[#F8FAFC] dark:from-[#000000] to-transparent z-10 pointer-events-none" />
        <div className="flex items-center gap-14 sm:gap-20 whitespace-nowrap animate-marquee py-2 transform-gpu">
          {marqueeList.map((logo, idx) => (
            <div
              key={idx}
              className="inline-flex items-center justify-center opacity-100 transition-transform duration-300 transform-gpu hover:scale-110 px-3 cursor-default"
              title={logo.name}
            >
              {logo.svg}
            </div>
          ))}
        </div>
      </div>

      {/* Global CSS for seamless marquee loop */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          will-change: transform;
          transform: translate3d(0, 0, 0);
          backface-visibility: hidden;
          perspective: 1000px;
          animation: marquee 28s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

