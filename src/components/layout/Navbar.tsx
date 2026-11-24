'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Logo } from '@/components/ui/Logo';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { Menu, X, ArrowRight } from 'lucide-react';

const SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'process', label: 'How It Works' },
  { id: 'careers', label: 'Careers' },
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
    if (!el) return;
    // Native offsetLeft & offsetWidth relative to <nav> parent ensures 100% exact alignment
    setIndicator({
      left: el.offsetLeft,
      width: el.offsetWidth,
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

  // Passive, throttled scroll listener for sticky navbar & smooth active section tracking
  useEffect(() => {
    let ticking = false;

    const updateScrollState = () => {
      setScrolled(window.scrollY > 20);

      const scrollPos = window.scrollY + 160;
      let matched = 'home';

      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const sec = SECTIONS[i];
        const el = document.getElementById(sec.id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            matched = sec.id;
            break;
          }
        }
      }

      setActiveSection(matched);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollState);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateScrollState();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Sync indicator when activeSection changes or window resizes
  useEffect(() => {
    const t = setTimeout(resetToActive, 50);
    const handleResize = () => resetToActive();
    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(t);
      window.removeEventListener('resize', handleResize);
    };
  }, [activeSection]);

  const scrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setActiveSection(id);

    const lenis = typeof window !== 'undefined' ? (window as any).lenis : null;

    if (id === 'home') {
      if (lenis) {
        lenis.scrollTo(0, {
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
        });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      const el = document.getElementById(id);
      if (el) {
        if (lenis) {
          lenis.scrollTo(el, {
            offset: -85,
            duration: 1.2,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
          });
        } else {
          const y = el.getBoundingClientRect().top + (window.scrollY || window.pageYOffset) - 85;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 py-3.5 sm:py-4 ${scrolled
        ? 'bg-white/95 dark:bg-[#050708]/90 backdrop-blur-md border-b border-slate-200 dark:border-[#203536] shadow-[0_4px_20px_rgba(16,43,80,0.06)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
        : 'bg-transparent border-b border-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Company Name */}
          <div
            onClick={(e) => scrollTo(e, 'home')}
            className="flex-shrink-0 cursor-pointer"
          >
            <Logo size="md" showText={true} showTagline={true} />
          </div>

          {/* Desktop Navigation: Uses CSS flex gap to ensure zero offset shifts on indicator */}
          <nav
            ref={navRef}
            onMouseLeave={resetToActive}
            className="relative hidden md:flex items-center gap-5 lg:gap-8 py-2"
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
                className={`relative text-xs lg:text-sm font-medium transition-colors py-1 cursor-pointer select-none ${activeSection === sec.id
                  ? 'text-[#102B50] dark:text-white font-semibold'
                  : 'text-slate-600 dark:text-[#AEB8C2] hover:text-[#102B50] dark:hover:text-white'
                  }`}
              >
                <span>{sec.label}</span>
              </a>
            ))}

            {/* Emperor Nexus Signature Sliding Glowing Indicator with GPU transform */}
            <span
              className="absolute bottom-0 left-0 h-[2.5px] rounded-full bg-gradient-to-r from-[#087FCB] via-[#00E5F0] to-[#1E3EF0] shadow-[0_0_12px_rgba(0,229,240,0.95)] pointer-events-none will-change-transform m-0"
              style={{
                transform: `translateX(${indicator.left}px)`,
                width: `${indicator.width}px`,
                opacity: indicator.opacity,
                transition: 'transform 360ms cubic-bezier(0.16, 1, 0.3, 1), width 360ms cubic-bezier(0.16, 1, 0.3, 1), opacity 200ms ease'
              }}
            />
            <span
              className="absolute bottom-[-1px] left-0 h-[6px] rounded-full bg-[#00E5F0]/35 blur-[3px] pointer-events-none will-change-transform m-0"
              style={{
                transform: `translateX(${indicator.left}px)`,
                width: `${indicator.width}px`,
                opacity: indicator.opacity,
                transition: 'transform 360ms cubic-bezier(0.16, 1, 0.3, 1), width 360ms cubic-bezier(0.16, 1, 0.3, 1), opacity 200ms ease'
              }}
            />
          </nav>

          {/* Right Action: Theme Toggle + "Let's Talk →" Pill Button */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <a
              href="#contact"
              onClick={(e) => scrollTo(e, 'contact')}
              className="navbar-cta-btn inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs lg:text-sm font-semibold text-white bg-[#087FCB] dark:bg-transparent border border-[#087FCB] dark:border-[#00E5F0]/60 hover:bg-[#0284C7] dark:hover:border-[#00E5F0] transition-all duration-300 shadow-sm dark:shadow-[0_0_15px_rgba(0,229,240,0.3)] hover:shadow-md group cursor-pointer"
            >
              <span>Let&apos;s Talk</span>
              <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Mobile Right Controls: Theme Toggle + Hamburger Button */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-full flex items-center justify-center text-slate-600 dark:text-[#AEB8C2] hover:text-[#102B50] dark:hover:text-white bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-[#087FCB] dark:hover:border-[#00E5F0]/60 transition-all focus:outline-none cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#087FCB] dark:text-[#00E5F0]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-[#202A30] bg-white/95 dark:bg-[#000000]/95 backdrop-blur-2xl transition-all duration-300 max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="px-4 pt-3 pb-6 space-y-2">
            {SECTIONS.map((sec) => (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                onClick={(e) => scrollTo(e, sec.id)}
                className={`block px-3.5 py-2.5 text-sm font-medium rounded-xl cursor-pointer transition-colors ${activeSection === sec.id
                  ? 'text-[#087FCB] dark:text-white bg-blue-50 dark:bg-white/10 font-semibold'
                  : 'text-slate-700 dark:text-[#AEB8C2] hover:bg-slate-100 dark:hover:bg-white/5 hover:text-[#102B50] dark:hover:text-white'
                  }`}
              >
                {sec.label}
              </a>
            ))}

            <div className="pt-3 border-t border-slate-200 dark:border-[#202A30]">
              <a
                href="#contact"
                onClick={(e) => scrollTo(e, 'contact')}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#087FCB] to-[#00D5DF] cursor-pointer shadow-md"
              >
                <span>Let&apos;s Talk</span>
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
