'use client';

import React, { useEffect, useRef } from 'react';
import { Link } from '@/i18n/routing';
import { Logo } from '@/components/ui/Logo';
import { ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const FOOTER_LETTERS = ['I', 'N', 'F', 'I', 'D', 'E', 'L', 'L'];

const FOOTER_NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'How It Works', href: '#process' },
  { label: 'What We Are Doing', href: '#approach' },
  { label: 'Insights', href: '#insights' }
];

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const lettersRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const letters = lettersRef.current.filter(Boolean) as HTMLSpanElement[];
    if (!letters.length || !footerRef.current) return;

    const ctx = gsap.context(() => {
      // Set initial state
      gsap.set(letters, {
        autoAlpha: 0,
        yPercent: 120,
        transformOrigin: '50% 50%'
      });

      // Scroll entrance matching Emperor Nexus
      ScrollTrigger.create({
        trigger: footerRef.current,
        start: 'top 80%',
        once: true,
        onEnter: () => {
          const shuffled = letters.slice().sort(() => Math.random() - 0.5);
          gsap.fromTo(
            shuffled,
            { autoAlpha: 0, yPercent: 120 },
            {
              autoAlpha: 1,
              yPercent: 0,
              duration: 1.25,
              ease: 'power4.inOut',
              stagger: 0.04,
              delay: 0.1
            }
          );
        }
      });

      // Emperor Nexus signature shrink-and-elastic-pop hover animation on each letter
      letters.forEach((letter) => {
        let isAnimating = false;
        const handleMouseEnter = () => {
          if (!isAnimating) {
            isAnimating = true;
            gsap
              .timeline({
                onComplete: () => {
                  isAnimating = false;
                }
              })
              .to(letter, {
                scale: 0.15,
                duration: 0.35,
                ease: 'power2.inOut'
              })
              .to(letter, {
                scale: 1,
                duration: 1.4,
                ease: 'elastic.out(1, 0.75)'
              });
          }
        };

        letter.addEventListener('mouseenter', handleMouseEnter);
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      id="footer"
      ref={footerRef}
      className="relative bg-[#000000] text-white pt-12 sm:pt-16 pb-8 sm:pb-12 px-6 sm:px-12 lg:px-16 overflow-hidden min-h-[85vh] sm:min-h-screen flex flex-col justify-between selection:bg-[#00E5F0] selection:text-black"
    >
      {/* Top subtle border line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-white/[0.08]" />

      <div className="max-w-[1600px] w-full mx-auto flex flex-col justify-between flex-1">
        
        {/* Top Section: CTA, Contact & Social Links */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 sm:gap-12 pt-2 pb-6 sm:pb-10">
          
          {/* Left Column: Logo, Heading & Call-To-Action Pill Buttons */}
          <div className="max-w-3xl space-y-6 sm:space-y-8">
            {/* Logo with Company Name in Footer */}
            <div className="group relative inline-flex items-center cursor-pointer">
              <Logo size="lg" showText={true} showTagline={true} />
            </div>

            {/* Giant Heading matching Emperor Nexus */}
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.06]">
              Let’s start <br />
              with Infidell.
            </h2>

            {/* Action Buttons matching Emperor Nexus */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <a
                href="mailto:contact@infidelltech.com?subject=Inquiry%20-%20Infidell%20Technology"
                className="group inline-flex items-center gap-4 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full border border-white/30 text-xs sm:text-sm font-semibold uppercase tracking-widest text-white hover:border-[#00E5F0] hover:bg-white hover:text-black transition-all duration-300"
              >
                <span>Get in Touch</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
              <a
                href="mailto:contact@infidelltech.com?subject=Resume%20Submission"
                className="group inline-flex items-center gap-4 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full border border-white/30 text-xs sm:text-sm font-semibold uppercase tracking-widest text-white hover:border-[#00E5F0] hover:bg-white hover:text-black transition-all duration-300"
              >
                <span>Drop us an email</span>
                <span className="font-mono text-base">@</span>
              </a>
            </div>
          </div>

          {/* Right Column: Social Links */}
          <div className="flex flex-col items-start md:items-end space-y-4 pt-2">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl sm:text-3xl font-medium text-white/80 hover:text-white transition-all duration-200 hover:translate-x-1 flex items-center gap-2 group"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-[#00E5F0] transition-colors" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl sm:text-3xl font-medium text-white/80 hover:text-white transition-all duration-200 hover:translate-x-1 flex items-center gap-2 group"
            >
              <span>Twitter / X</span>
              <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-[#00E5F0] transition-colors" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl sm:text-3xl font-medium text-white/80 hover:text-white transition-all duration-200 hover:translate-x-1 flex items-center gap-2 group"
            >
              <span>Instagram</span>
              <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-[#00E5F0] transition-colors" />
            </a>
          </div>
        </div>

        {/* Middle Section: GIGANTIC DISPLAY WORD "INFIDELL" across full screen with Emperor Hover */}
        <div className="w-full my-auto py-6 sm:py-10 lg:py-12 overflow-hidden select-none">
          <div className="w-full flex justify-between items-center tracking-tighter leading-none font-black text-white overflow-hidden">
            {FOOTER_LETTERS.map((char, idx) => (
              <span
                key={idx}
                ref={(el) => {
                  lettersRef.current[idx] = el;
                }}
                className="inline-block text-[10.5vw] xs:text-[11.8vw] sm:text-[14.5vw] md:text-[15.5vw] lg:text-[17vw] font-black uppercase text-white hover:text-[#00E5F0] transition-colors duration-200 cursor-pointer transform-gpu leading-none will-change-transform"
              >
                {char}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Bar: Navigation */}
        <div className="border-t border-white/[0.08] pt-6 sm:pt-8 flex items-center justify-center text-xs sm:text-sm text-neutral-400">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 font-bold tracking-wider text-[11px] sm:text-xs uppercase">
            {FOOTER_NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-neutral-400 hover:text-[#00E5F0] transition-colors duration-200 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
