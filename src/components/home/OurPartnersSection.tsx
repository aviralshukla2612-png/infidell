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
    <section className="py-10 sm:py-12 bg-[#000000] border-y border-[#202A30] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00E5F0]/5 to-transparent pointer-events-none" />

      {/* Section Title */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center relative z-10">
        <h3 className="text-xs sm:text-sm font-semibold text-[#AEB8C2] uppercase tracking-[0.25em]">
          Our Partners
        </h3>
      </div>

      {/* Infinite Marquee Container with fade edge masks */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex items-center gap-12 sm:gap-16 whitespace-nowrap animate-marquee py-2">
          {marqueeList.map((partner, idx) => (
            <div
              key={idx}
              className="inline-flex items-center justify-center flex-shrink-0 cursor-default opacity-85 hover:opacity-100 transition-all duration-300 transform hover:scale-110 px-3"
              title={partner.name}
            >
              <img
                src={partner.src}
                alt={partner.name}
                className="partner-logo-img h-8 sm:h-10 w-auto max-w-[140px] sm:max-w-[170px] object-contain select-none transition-all duration-300 filter invert hue-rotate-180 brightness-110 contrast-105"
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
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 28s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
