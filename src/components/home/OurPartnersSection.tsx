'use client';

import React from 'react';

interface PartnerLogo {
  name: string;
  src: string;
}

export function OurPartnersSection() {
  const partners: PartnerLogo[] = [
    { name: 'HMG Benefits', src: '/images/partners/Logo-18.svg' },
    { name: 'Catalist', src: '/images/partners/Logo-14.svg' },
    { name: 'AdsGency AI', src: '/images/partners/Logo-02.svg' },
    { name: 'TrustLab', src: '/images/partners/Logo-07.svg' },
    { name: 'True North Goodwill', src: '/images/partners/Logo-12.svg' },
    { name: 'RxVantage', src: '/images/partners/Logo-03.svg' },
    { name: 'Bascom-Turner Instruments', src: '/images/partners/Logo-16.svg' },
    { name: 'WANRack', src: '/images/partners/Logo-17.svg' },
    { name: 'AtomBeam', src: '/images/partners/Logo-10.svg' },
    { name: 'Bridgeforce Data Solutions', src: '/images/partners/Logo-11.svg' }
  ];

  // Double the list for a seamless, continuous infinite marquee scroll
  const marqueeList = [...partners, ...partners];

  return (
    <section id="partners" className="py-12 sm:py-14 bg-[#F8FAFC] dark:bg-[#000000] border-y border-slate-200 dark:border-[#202A30] relative overflow-hidden select-none">
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00E5F0]/5 to-transparent pointer-events-none" />
      {/* Top and Bottom Hairline Gradient Accents */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#00E5F0]/30 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#00E5F0]/20 to-transparent pointer-events-none" />

      {/* Section Title */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-7 text-center relative z-10">
        <h3 className="text-xs sm:text-sm font-semibold text-[#64748B] dark:text-[#AEB8C2] uppercase tracking-[0.25em]">
          Our Partners
        </h3>
      </div>

      {/* Infinite Marquee Container with fade edge overlays (100% GPU composited) */}
      <div className="relative w-full overflow-hidden">
        {/* Left Edge Fade */}
        <div className="absolute left-0 inset-y-0 w-16 sm:w-28 bg-gradient-to-r from-[#F8FAFC] dark:from-[#000000] to-transparent z-10 pointer-events-none" />
        {/* Right Edge Fade */}
        <div className="absolute right-0 inset-y-0 w-16 sm:w-28 bg-gradient-to-l from-[#F8FAFC] dark:from-[#000000] to-transparent z-10 pointer-events-none" />
        <div className="flex items-center gap-12 sm:gap-16 whitespace-nowrap animate-marquee py-2 transform-gpu">
          {marqueeList.map((partner, idx) => (
            <div
              key={idx}
              className="inline-flex items-center justify-center flex-shrink-0 cursor-default opacity-85 hover:opacity-100 transition-[transform,opacity] duration-300 transform-gpu hover:scale-110 px-3"
              title={partner.name}
            >
              <img
                src={partner.src}
                alt={partner.name}
                width={160}
                height={40}
                className="partner-logo-img h-8 sm:h-10 w-auto max-w-[140px] sm:max-w-[170px] object-contain select-none transition-opacity duration-300 filter invert hue-rotate-180 brightness-110 contrast-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Global CSS for 60fps infinite marquee loop */}
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
