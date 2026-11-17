'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Logo } from '@/components/ui/Logo';
import { Menu, X, ArrowRight } from 'lucide-react';

const SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'process', label: 'Process' },
  { id: 'mission', label: 'Mission' },
  { id: 'insights', label: 'Insights' }
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Emperor Nexus sliding indicator state
  const navRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<{ [key: string]: HTMLElement | null }>({});
  const [indicator, setIndicator] = useState<{ left: number; width: number; opacity: number }>({
    left: 0,
    width: 0,
    opacity: 0
  });

  const updateIndicatorToEl = (el: HTMLElement | null) => {
    if (!el || !navRef.current) return;
    const navRect = navRef.current.getBoundingClientRect();
    const rect = el.getBoundingClientRect();
    setIndicator({
      left: rect.left - navRect.left,
      width: rect.width,
      opacity: 1
    });
  };

  const resetToActive = () => {
    if (activeSection && itemsRef.current[activeSection]) {
      updateIndicatorToEl(itemsRef.current[activeSection]);
    } else {
      setIndicator((prev) => ({ ...prev, opacity: 0 }));
    }
  };

  // Scroll listener for sticky navbar & active section detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect active section on scroll
      const scrollPos = window.scrollY + 200;
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const sec = SECTIONS[i];
        const el = document.getElementById(sec.id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sec.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sync indicator when activeSection changes
  useEffect(() => {
    const t = setTimeout(resetToActive, 80);
    return () => clearTimeout(t);
  }, [activeSection]);

  const scrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setActiveSection(id);

    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#000000]/85 backdrop-blur-md border-b border-[#202A30] shadow-[0_4px_30px_rgba(0,0,0,0.8)] py-3.5'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo - Emblem only in Navbar as requested */}
          <div
            onClick={(e) => scrollTo(e, 'home')}
            className="flex-shrink-0 cursor-pointer"
          >
            <Logo size="md" showText={false} />
          </div>

          {/* Desktop Navigation: Only Home Page Sections (No extra page clutter) */}
          <nav
            ref={navRef}
            onMouseLeave={resetToActive}
            className="relative hidden md:flex items-center space-x-7 lg:space-x-9 py-2"
          >
            {SECTIONS.map((sec) => (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                ref={(el) => {
                  itemsRef.current[sec.id] = el;
                }}
                onClick={(e) => scrollTo(e, sec.id)}
                onMouseEnter={(e) => updateIndicatorToEl(e.currentTarget)}
                className={`relative text-xs lg:text-sm font-medium transition-colors py-1 cursor-pointer select-none ${
                  activeSection === sec.id
                    ? 'text-white font-semibold'
                    : 'text-[#AEB8C2] hover:text-white'
                }`}
              >
                <span>{sec.label}</span>
              </a>
            ))}

            {/* Emperor Nexus Signature Sliding Glowing Indicator */}
            <span
              className="absolute bottom-0 h-[2.5px] rounded-full bg-gradient-to-r from-[#00E5F0] via-[#55A9FF] to-[#1E3EF0] shadow-[0_0_12px_rgba(0,229,240,0.95)] transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] pointer-events-none"
              style={{
                left: `${indicator.left}px`,
                width: `${indicator.width}px`,
                opacity: indicator.opacity
              }}
            />
            <span
              className="absolute bottom-[-1px] h-[6px] rounded-full bg-[#00E5F0]/35 blur-[3px] transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] pointer-events-none"
              style={{
                left: `${indicator.left}px`,
                width: `${indicator.width}px`,
                opacity: indicator.opacity
              }}
            />
          </nav>

          {/* Right Action: "Let's Talk →" Pill Button (Scrolls smoothly to footer contact) */}
          <div className="hidden md:flex items-center">
            <a
              href="#footer"
              onClick={(e) => scrollTo(e, 'footer')}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs lg:text-sm font-semibold text-white bg-transparent border border-[#00E5F0]/60 hover:border-[#00E5F0] transition-all duration-300 shadow-[0_0_15px_rgba(0,229,240,0.3)] hover:shadow-[0_0_25px_rgba(0,229,240,0.55)] group cursor-pointer"
            >
              <span>Let&apos;s Talk</span>
              <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-full flex items-center justify-center text-[#AEB8C2] hover:text-white bg-white/5 border border-white/10 hover:border-[#00E5F0]/60 transition-all focus:outline-none cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#00E5F0]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#202A30] bg-[#000000]/95 backdrop-blur-2xl transition-all duration-300">
          <div className="px-4 pt-3 pb-6 space-y-2">
            {SECTIONS.map((sec) => (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                onClick={(e) => scrollTo(e, sec.id)}
                className={`block px-3 py-2 text-sm font-medium rounded-lg cursor-pointer ${
                  activeSection === sec.id
                    ? 'text-white bg-white/10 font-semibold'
                    : 'text-[#AEB8C2] hover:bg-white/5 hover:text-white'
                }`}
              >
                {sec.label}
              </a>
            ))}

            <div className="pt-3 border-t border-[#202A30]">
              <a
                href="#footer"
                onClick={(e) => scrollTo(e, 'footer')}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full text-xs font-bold text-black bg-[#00E5F0] cursor-pointer"
              >
                <span>Let&apos;s Talk</span>
                <ArrowRight className="w-3.5 h-3.5 text-black" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
