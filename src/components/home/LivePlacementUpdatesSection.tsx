'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';

interface PlacementCard {
  id: string;
  role: string;
  companyText: string;
  location: string;
  salary: string;
  image: string;
  story: string;
}

const PLACEMENT_CARDS: PlacementCard[] = [
  {
    id: 'placement-10',
    role: 'Software Engineer',
    companyText: 'Received offer from DriveWealth',
    location: 'Chicago,',
    salary: '$190k',
    image: '/images/placements/placement-10.png',
    story:
      'A candidate has secured a Software Development Engineer role at DriveWealth, Chicago, in a hybrid setup, with an impressive $190K annual package! A huge payoff for the skills, consistency, and effort that went into the journey. ‍'
  },
  {
    id: 'placement-11',
    role: 'Engineer',
    companyText: 'Received offer letter from Qualcomm',
    location: 'San Diego',
    salary: '$229k',
    image: '/images/placements/placement-11.png',
    story:
      'A candidate has officially joined Qualcomm, San Diego, California as an Engineer, with a total compensation of $229.3K! One incredible offer, a major milestone, and a well-earned opportunity to take the career to the next level. Here’s to the big wins that make the journey worth it! ‍'
  },
  {
    id: 'placement-12',
    role: 'Software Engineer',
    companyText: 'Received offer from Strategic Ins.',
    location: 'Texas',
    salary: '$145k',
    image: '/images/placements/placement-12.png',
    story:
      'A candidate has secured a Software Engineer role at Strategic Insurance, Texas, with an impressive $145K package! Months of learning, sharpening skills, and staying committed have led to this moment. A well-earned opportunity and a strong step toward what comes next. Congratulations! ‍ ‍'
  },
  {
    id: 'placement-13',
    role: 'Product Manager',
    companyText: 'Received offer letter from Fiserv',
    location: 'Milwaukee, WI',
    salary: '$180k',
    image: '/images/placements/placement-13.png',
    story:
      'A candidate has officially secured a Product Manager role at Fiserv, Milwaukee, Wisconsin, with an impressive $180K package! A milestone like this is built on persistence, preparation, and showing up for every opportunity. A huge career win and an exciting chapter starts here! ‍'
  },
  {
    id: 'placement-1',
    role: 'Business Data Analyst',
    companyText: 'Received offer letter from Google',
    location: 'Texas',
    salary: '$140k',
    image: '/images/placements/placement-1.png',
    story:
      'A candidate has landed an exciting opportunity at Google, Austin, Texas, as a Business Data Analyst, with an annual base salary of $143K. The offer also includes a 15% annual bonus target, an $84K equity grant, and a $15K signing bonus. Big dreams, bigger milestones. Here’s to a new chapter filled with growth and exciting possibilities! ‍'
  },
  {
    id: 'placement-2',
    role: 'Web Developer',
    companyText: 'Received offer letter from Reveille',
    location: 'Georgia',
    salary: '$110k',
    image: '/images/placements/placement-2.png',
    story:
      'A candidate has officially secured a placement at Reveille Software as a Web Developer, with an annual salary of $110K. A new role, exciting technical challenges, and the opportunity to build innovative web solutions. The next chapter is looking promising! ‍'
  },
  {
    id: 'placement-3',
    role: 'Software Engineer',
    companyText: 'Received offer letter from Microsoft',
    location: 'Washington',
    salary: '$190k',
    image: '/images/placements/placement-3.png',
    story:
      'A candidate has secured a Senior Research Engineer role at Microsoft, Redmond, with a $190K annual salary, a $44K signing bonus, and $210K in stock awards! Another major career milestone unlocked! ‍'
  },
  {
    id: 'placement-4',
    role: 'Product Manager',
    companyText: 'Received offer letter from Citi',
    location: 'Texas',
    salary: '$130k',
    image: '/images/placements/placement-4.png',
    story:
      'A candidate has officially secured a Product Mgmt Lead Analyst C13, Vice President role at Citibank, Irving, Texas, with an annual base salary of $130K! A senior-level opportunity with a global financial powerhouse and a career milestone that opens the door to bigger things ahead. ‍'
  },
  {
    id: 'placement-5',
    role: 'Architect',
    companyText: 'Received offer letter from Slalom',
    location: 'Seattle',
    salary: '$150k',
    image: '/images/placements/placement-5.png',
    story:
      'A candidate has secured an Architect role at Slalom with an annual salary of $150K. A bigger role. A bigger opportunity. And another career milestone unlocked. The next chapter starts October 26, 2026. ‍'
  },
  {
    id: 'placement-6',
    role: 'Software Developer',
    companyText: 'Received offer letter from Amazon',
    location: 'Washington',
    salary: '$165k',
    image: '/images/placements/placement-6.png',
    story:
      'A candidate has officially received an offer from Amazon, Redmond, Washington as a Software Development Engineer Big Data, AWS Elastic MapReduce (EMR) with an annual base salary of $165K! A massive career milestone, a dream opportunity, and a new chapter in innovation and growth. ‍'
  },
  {
    id: 'placement-7',
    role: 'Senior Consultant',
    companyText: 'Received offer from Deloitte',
    location: 'Georgia',
    salary: '$133k',
    image: '/images/placements/placement-7.png',
    story:
      'A candidate has officially received an offer from Deloitte, Atlanta, Georgia as a Senior Consultant Strategy, Growth & Transformation, with an annual salary of $133K! A big career milestone, a new chapter of growth, and another opportunity to make an impact. ‍'
  },
  {
    id: 'placement-8',
    role: 'Data Scientist',
    companyText: 'Got Offer from American Airlines',
    location: 'Texas',
    salary: '$124k',
    image: '/images/placements/placement-8.png',
    story:
      'A candidate has officially received an offer from American Airlines as a Data Scientist / Senior Data Scientist – Safety, with an annual salary of $124K! A major career milestone and an exciting new chapter with one of the world’s leading airlines. ‍'
  },
  {
    id: 'placement-9',
    role: 'Developer',
    companyText: 'Received offer letter from Neuberger',
    location: 'New York',
    salary: '$140k',
    image: '/images/placements/placement-9.png',
    story:
      'A candidate has officially stepped into a Developer III, Assistant Vice President role at Neuberger Berman, New York, with an impressive $140K annual base salary! A well-earned opportunity that reflects the effort behind the journey and the start of an exciting new chapter ahead. ‍'
  }
];

export function LivePlacementUpdatesSection() {
  const [selectedCard, setSelectedCard] = useState<PlacementCard | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full bg-[#000000] py-20 md:py-28 overflow-hidden text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Title and Prev/Next Navigation */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Live Placement Updates of Our <br className="hidden sm:block" />
              Candidates
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3 self-end md:self-auto">
            <button
              onClick={() => scroll('left')}
              aria-label="Previous placements"
              className="w-12 h-12 rounded-full border border-white/20 bg-white/10 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-200 active:scale-95 cursor-pointer shadow-md"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M20.25 11H4.34978V12.5L20.25 12.5V11Z" fill="currentColor" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.6113 17.7721L5.56353 11.7494L11.6113 5.72758L10.5529 4.66468L3.43773 11.7493L10.5528 18.835L11.6113 17.7721Z"
                  fill="currentColor"
                />
              </svg>
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Next placements"
              className="w-12 h-12 rounded-full border border-white/20 bg-white/10 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-200 active:scale-95 cursor-pointer shadow-md"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="rotate-180"
              >
                <path fillRule="evenodd" clipRule="evenodd" d="M20.25 11H4.34978V12.5L20.25 12.5V11Z" fill="currentColor" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.6113 17.7721L5.56353 11.7494L11.6113 5.72758L10.5529 4.66468L3.43773 11.7493L10.5528 18.835L11.6113 17.7721Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Horizontal Slider Track */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 pt-2 scroll-smooth snap-x snap-mandatory scrollbar-none select-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {PLACEMENT_CARDS.map((card) => (
            <div
              key={card.id}
              onClick={() => setSelectedCard(card)}
              className="group snap-start flex-shrink-0 w-[300px] sm:w-[350px] md:w-[370px] bg-[#f3f0e9] rounded-[2rem] overflow-hidden flex flex-col justify-between cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Card Content Top */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  {/* Top Badges Row */}
                  <div className="flex items-center justify-between gap-2 mb-5">
                    {/* Live Badge */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ff2727] text-white text-xs font-semibold shadow-sm">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                      </span>
                      <span>Live</span>
                    </div>

                    {/* Recently Updated */}
                    <span className="text-xs font-medium text-[#707070]">Recently Updated</span>
                  </div>

                  {/* Job Role Title */}
                  <h3 className="text-[1.75rem] font-bold text-[#111827] tracking-[-0.03em] leading-tight mb-1">
                    {card.role}
                  </h3>

                  {/* Company Text */}
                  <p className="text-sm font-medium text-[#4B5563] mb-6">
                    {card.companyText}
                  </p>
                </div>

                {/* Tags Row */}
                <div className="flex items-center gap-2 flex-wrap">
                  {/* Location Tag */}
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-black/10 text-xs font-semibold text-[#111827] shadow-sm">
                    <svg className="w-3.5 h-3.5 text-black flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.23828 10.3915C4.25269 6.15094 7.70204 2.72494 11.9426 2.7393C16.1832 2.75376 19.6092 6.20311 19.5948 10.4437V10.5307C19.5426 13.2872 18.0035 15.835 16.1165 17.8263C15.0374 18.9469 13.8323 19.939 12.5252 20.7828C12.1757 21.0851 11.6573 21.0851 11.3078 20.7828C9.35935 19.5146 7.64922 17.9133 6.25567 16.0524C5.01363 14.4296 4.30845 12.46 4.23828 10.4176V10.3915Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        opacity="0.4"
                        d="M11.9159 13.0004C13.275 13.0004 14.3768 11.8986 14.3768 10.5395C14.3768 9.18038 13.275 8.07861 11.9159 8.07861C10.5568 8.07861 9.45508 9.18038 9.45508 10.5395C9.45508 11.8986 10.5568 13.0004 11.9159 13.0004Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>{card.location}</span>
                  </div>

                  {/* Salary Tag */}
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-black/10 text-xs font-semibold text-[#111827] shadow-sm">
                    <svg className="w-3.5 h-3.5 text-black flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M7.19087 11.3764C7.8807 10.2283 8.62501 9.09873 9.34695 7.96815L7.37378 4.27576C7.37378 4.27576 7.52459 4.14635 7.90113 3.85446C9.02685 2.98269 10.2586 2.75696 11.5906 3.27458C12.8594 3.76787 14.1466 4.14149 15.5243 4.06365C15.9252 4.0403 17.4634 3.83598 17.4634 3.83598L15.6566 7.96134C16.3786 9.09095 17.1209 10.2283 17.8108 11.3764C18.9452 13.264 20.0301 15.3695 19.1515 17.5606C18.1289 20.1117 15.1458 20.9582 12.5003 21C9.85582 20.9582 6.87272 20.1117 5.85014 17.5606C4.97155 15.3695 6.05639 13.264 7.19087 11.3764Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13.8706 12.332H11.8916C11.3029 12.332 10.8262 12.8088 10.8262 13.3974C10.8262 13.9861 11.3029 14.4638 11.8916 14.4638H13.1097C13.6984 14.4638 14.1751 14.9405 14.1751 15.5292C14.1751 16.1178 13.6984 16.5946 13.1097 16.5946H11.1307"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path d="M12.5 16.5959V17.491M12.5 11.4336V12.3365" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path opacity="0.4" d="M9.3457 7.97656C11.4492 8.46012 13.5518 8.46012 15.6554 7.97656" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>{card.salary}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Artboard / Illustration */}
              <div className="relative w-full aspect-[3/2] overflow-hidden rounded-[2rem] bg-neutral-200">
                <Image
                  src={card.image}
                  alt={card.role}
                  fill
                  sizes="(max-width: 640px) 300px, (max-width: 768px) 350px, 370px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* View More Button at Down Side (Bottom) */}
                <div className="absolute inset-0 p-4 sm:p-5 flex items-end justify-start pointer-events-none">
                  <span className="pointer-events-auto inline-flex items-center gap-2 pl-4 pr-2 py-1.5 sm:py-2 rounded-full bg-white text-[#0F0F0F] text-xs sm:text-sm font-semibold shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200">
                    <span>View More</span>
                    <span className="w-6 h-6 rounded-full bg-[#ECE8E1] flex items-center justify-center text-[#0F0F0F]">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M8.46436 11.5718H15.2787V12.2147H8.46436V11.5718Z" fill="currentColor" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M12.1675 14.474L14.7594 11.8928L12.1675 9.31206L12.6211 8.85653L15.6705 11.8928L12.6211 14.9295L12.1675 14.474Z" fill="currentColor" />
                      </svg>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Candidate Placement Story Modal Dialog */}
      {selectedCard && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedCard(null)}
        >
          <div
            className="relative w-full max-w-lg bg-[#f3f0e9] text-[#111827] rounded-[2rem] p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col justify-between animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedCard(null)}
              aria-label="Close details"
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-black/10 hover:bg-black/20 flex items-center justify-center transition-colors cursor-pointer text-black"
            >
              <svg width="20" height="20" viewBox="0 0 256 256" fill="currentColor">
                <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" />
              </svg>
            </button>

            {/* Modal Body */}
            <div className="overflow-y-auto pr-1">
              {/* Badges */}
              <div className="flex items-center gap-2 mb-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ff2727] text-white text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                  <span>Live Placement</span>
                </div>
                <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white border border-black/10 text-xs font-semibold text-black">
                  <span>{selectedCard.location}</span>
                </div>
                <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white border border-black/10 text-xs font-semibold text-black">
                  <span>{selectedCard.salary}</span>
                </div>
              </div>

              {/* Title & Company */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight mb-1">
                {selectedCard.role}
              </h3>
              <p className="text-sm font-medium text-[#4B5563] mb-5">
                {selectedCard.companyText}
              </p>

              {/* Authentic Story */}
              <div className="p-4 bg-white/70 rounded-2xl border border-black/5 text-[#374151] text-sm sm:text-base leading-relaxed mb-6">
                {selectedCard.story}
              </div>

              {/* Illustration Banner */}
              <div className="relative w-full aspect-[3/2] rounded-2xl overflow-hidden shadow-inner border border-black/10">
                <Image
                  src={selectedCard.image}
                  alt={selectedCard.role}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

