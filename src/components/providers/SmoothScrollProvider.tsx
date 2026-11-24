'use client';

import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Only execute on browser
    if (typeof window === 'undefined') return;

    // Respect reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    // Optimize ScrollTrigger global configuration to eliminate mobile layout thrashing
    ScrollTrigger.config({
      limitCallbacks: true,
      ignoreMobileResize: true,
      autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load'
    });

    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      // Mobile viewports preserve 100% native 120Hz GPU touch scrolling with zero main-thread RAF overhead
      return;
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      syncTouch: false,
      touchMultiplier: 1.2,
      wheelMultiplier: 1.0
    });
    lenisRef.current = lenis;
    (window as any).lenis = lenis;

    // Sync Lenis scroll with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    const tickerCb = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCb);
    gsap.ticker.lagSmoothing(500, 33);

    return () => {
      gsap.ticker.remove(tickerCb);
      (window as any).lenis = null;
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}

