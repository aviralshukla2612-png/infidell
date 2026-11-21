'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { Camera, Sparkles, RefreshCw, Aperture } from 'lucide-react';

interface IrisApertureLensProps {
  onShutterSnap?: (index: number) => void;
}

const SHUTTER_FOCUSED_MODES = [
  {
    fStop: 'f/1.4',
    title: 'EXECUTIVE RECRUITMENT',
    subtitle: 'Direct 1-on-1 Leadership Representation',
    location: 'Bengaluru · Mumbai · Pan-India',
    apertureSize: 85
  },
  {
    fStop: 'f/2.8',
    title: 'VERIFIED CORPORATE PARTNERS',
    subtitle: '48–72h Technical Shortlist SLA',
    location: 'Hyderabad · Pune · Gurugram',
    apertureSize: 72
  },
  {
    fStop: 'f/4.0',
    title: 'ETHICAL PLACEMENT STANDARDS',
    subtitle: 'Zero Candidate Fees · 100% Confidential',
    location: 'Statutory Compliant · Pan-India',
    apertureSize: 60
  }
];

export function IrisApertureLens({ onShutterSnap }: IrisApertureLensProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lensRingRef = useRef<SVGSVGElement>(null);
  const innerRingRef = useRef<SVGGElement>(null);
  const bladesGroupRef = useRef<SVGGElement>(null);
  const flashOverlayRef = useRef<HTMLDivElement>(null);
  const infinityImageRef = useRef<HTMLDivElement>(null);

  const [activeModeIdx, setActiveModeIdx] = useState(0);
  const [isSnapping, setIsSnapping] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const currentMode = SHUTTER_FOCUSED_MODES[activeModeIdx];

  // 3D Tilt based on mouse position
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = (e.clientX - centerX) / (rect.width / 2);
      const deltaY = (e.clientY - centerY) / (rect.height / 2);

      // Clamp tilt values
      const tiltX = Math.max(-1, Math.min(1, deltaX)) * 7;
      const tiltY = Math.max(-1, Math.min(1, deltaY)) * -7;

      setCursorPos({ x: tiltX, y: tiltY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Shutter Snap Animation (Mechanical Iris closing & opening with counter-zoom & flare)
  const triggerShutter = () => {
    if (isSnapping) return;
    setIsSnapping(true);

    const nextIdx = (activeModeIdx + 1) % SHUTTER_FOCUSED_MODES.length;

    const tl = gsap.timeline({
      onComplete: () => {
        setActiveModeIdx(nextIdx);
        setIsSnapping(false);
        if (onShutterSnap) onShutterSnap(nextIdx);
      }
    });

    // 1. Mechanical Blades rotate and stop down (aperture closes)
    if (bladesGroupRef.current) {
      tl.to(bladesGroupRef.current, {
        rotation: '+=55',
        scale: 0.28,
        transformOrigin: '250px 250px',
        duration: 0.15,
        ease: 'power4.in'
      });
    }

    // 2. Flash overlay triggers
    if (flashOverlayRef.current) {
      tl.to(
        flashOverlayRef.current,
        {
          opacity: 0.85,
          scale: 1.15,
          duration: 0.08,
          ease: 'power2.out'
        },
        '-=0.08'
      );
      tl.to(flashOverlayRef.current, {
        opacity: 0,
        scale: 1,
        duration: 0.25,
        ease: 'power3.out'
      });
    }

    // 3. Counter-zoom on inner metallic infinity symbol
    if (infinityImageRef.current) {
      tl.to(
        infinityImageRef.current,
        {
          scale: 1.14,
          duration: 0.14,
          ease: 'power3.in'
        },
        0
      );
      tl.to(infinityImageRef.current, {
        scale: 1.0,
        duration: 0.65,
        ease: 'elastic.out(1, 0.4)'
      });
    }

    // 4. Blades spring open to the new focal aperture
    if (bladesGroupRef.current) {
      tl.to(
        bladesGroupRef.current,
        {
          rotation: '+=25',
          scale: 1.0,
          transformOrigin: '250px 250px',
          duration: 0.6,
          ease: 'back.out(2)'
        },
        '-=0.2'
      );
    }
  };

  // Generate 72 perimeter tick marks (every 5 degrees)
  const perimeterTicks = Array.from({ length: 72 }).map((_, i) => {
    const angle = i * 5;
    const isMajor = i % 6 === 0;
    const isSemi = i % 3 === 0 && !isMajor;
    const len = isMajor ? 12 : isSemi ? 8 : 4.5;
    const r1 = 236;
    const r2 = r1 - len;
    const rad = (angle * Math.PI) / 180;
    const x1 = 250 + r1 * Math.cos(rad);
    const y1 = 250 + r1 * Math.sin(rad);
    const x2 = 250 + r2 * Math.cos(rad);
    const y2 = 250 + r2 * Math.sin(rad);
    return { x1, y1, x2, y2, angle, isMajor };
  });

  // 8 Mechanical Iris Blades radiating around a 500x500 viewport
  // Each curved blade pivots overlapping its neighbor
  const bladeAngles = [0, 45, 90, 135, 180, 225, 270, 315];

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[340px] xs:max-w-[390px] sm:max-w-[460px] md:max-w-[500px] lg:max-w-[560px] aspect-square mx-auto flex items-center justify-center select-none"
      style={{
        perspective: '1200px'
      }}
    >
      {/* 3D Tilted Lens Assembly */}
      <div
        onClick={triggerShutter}
        role="button"
        tabIndex={0}
        aria-label="Click camera lens to trigger mechanical iris shutter"
        className="relative w-full h-full rounded-full flex items-center justify-center cursor-pointer transition-transform duration-300 ease-out group"
        style={{
          transform: `rotateY(${cursorPos.x}deg) rotateX(${cursorPos.y}deg)`
        }}
      >
        {/* Soft Ambient Cyan Backlight Glow */}
        <div className="absolute inset-0 rounded-full bg-[#00E5F0]/12 blur-[80px] pointer-events-none group-hover:bg-[#00E5F0]/20 transition-all duration-500" />
        <div className="absolute inset-4 rounded-full bg-[#38BDF8]/8 blur-[60px] pointer-events-none" />

        {/* Outer Circular Optical Ring Frame */}
        <div className="absolute inset-0 rounded-full border border-[#203536] shadow-[0_0_60px_rgba(0,0,0,0.9),inset_0_0_40px_rgba(0,229,240,0.08)] bg-gradient-to-b from-[#0B1518]/90 via-[#060B0D]/95 to-[#020506]" />

        {/* The Concentric Calibrated Iris Aperture SVG (Outer & Inner Rings) */}
        <svg
          ref={lensRingRef}
          viewBox="0 0 500 500"
          className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible"
        >
          <defs>
            {/* Blade Metallic Gradient */}
            <linearGradient id="bladeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1C2D32" />
              <stop offset="40%" stopColor="#0E191C" />
              <stop offset="85%" stopColor="#080E10" />
              <stop offset="100%" stopColor="#040708" />
            </linearGradient>

            {/* Cyan Edge Highlight */}
            <linearGradient id="cyanRim" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00E5F0" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#00C7B1" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#168CFF" stopOpacity="0.1" />
            </linearGradient>

            {/* Circular Aperture Viewport Mask */}
            <clipPath id="iris-aperture-clip">
              <circle cx="250" cy="250" r="175" />
            </clipPath>
          </defs>

          {/* 1. Outer Chassis Calibration Ticks (Stationary Ring) */}
          <g opacity="0.65">
            {perimeterTicks.map((tick, i) => (
              <line
                key={i}
                x1={tick.x1}
                y1={tick.y1}
                x2={tick.x2}
                y2={tick.y2}
                stroke={tick.isMajor ? '#00E5F0' : '#2A444A'}
                strokeWidth={tick.isMajor ? 1.75 : 1}
              />
            ))}
          </g>

          {/* 2. Primary Outer Orbital Calibration Ring (Continuous Clockwise Rotation) */}
          <g className="animate-[spin_70s_linear_infinite]" style={{ transformOrigin: '250px 250px' }}>
            <circle
              cx="250"
              cy="250"
              r="222"
              fill="none"
              stroke="#203536"
              strokeWidth="1.2"
              strokeDasharray="4 8"
            />
            {/* Orbiting cyan satellite bead */}
            <circle cx="250" cy="28" r="3" fill="#00E5F0" className="drop-shadow-[0_0_8px_#00E5F0]" />
            <circle cx="250" cy="472" r="2.5" fill="#00C7B1" />
          </g>

          {/* 3. Secondary Inner Orbital Scale with f-Stops (Counter-Clockwise Rotation) */}
          <g
            ref={innerRingRef}
            className="animate-[spin_55s_linear_infinite_reverse]"
            style={{ transformOrigin: '250px 250px' }}
          >
            <circle
              cx="250"
              cy="250"
              r="198"
              fill="none"
              stroke="#00E5F0"
              strokeOpacity="0.25"
              strokeWidth="1"
              strokeDasharray="2 14"
            />
            {/* F-stop text indicators */}
            <text x="250" y="58" textAnchor="middle" fill="#00E5F0" fontSize="8" fontFamily="monospace" letterSpacing="1">
              f/1.4
            </text>
            <text x="442" y="253" textAnchor="middle" fill="#AAB5BC" fontSize="8" fontFamily="monospace" letterSpacing="1">
              f/2.8
            </text>
            <text x="250" y="446" textAnchor="middle" fill="#AAB5BC" fontSize="8" fontFamily="monospace" letterSpacing="1">
              f/4.0
            </text>
            <text x="58" y="253" textAnchor="middle" fill="#AAB5BC" fontSize="8" fontFamily="monospace" letterSpacing="1">
              f/8.0
            </text>
          </g>

          {/* 4. Crosshair Telemetry Marks (HUD Style) */}
          <g opacity="0.45" stroke="#00E5F0" strokeWidth="0.8">
            <line x1="250" y1="18" x2="250" y2="34" />
            <line x1="250" y1="466" x2="250" y2="482" />
            <line x1="18" y1="250" x2="34" y2="250" />
            <line x1="466" y1="250" x2="482" y2="250" />
          </g>

          {/* 5. The 8 Mechanical Iris Aperture Blades */}
          <g ref={bladesGroupRef} style={{ transformOrigin: '250px 250px' }}>
            {bladeAngles.map((angle, i) => (
              <g key={i} transform={`rotate(${angle} 250 250)`}>
                {/* Curved mechanical aperture blade path */}
                <path
                  d="M 250,75 C 330,85 390,140 405,210 C 370,185 310,165 240,160 Z"
                  fill="url(#bladeGrad)"
                  stroke="#264147"
                  strokeWidth="0.85"
                  opacity="0.94"
                  className="transition-colors duration-300"
                />
                {/* Subtle highlight edge on blade rim */}
                <path
                  d="M 240,160 C 310,165 370,185 405,210"
                  fill="none"
                  stroke="#00E5F0"
                  strokeWidth="0.75"
                  strokeOpacity="0.4"
                />
              </g>
            ))}
          </g>

          {/* 6. Precision Aperture Inner Chamfer Ring */}
          <circle
            cx="250"
            cy="250"
            r="176"
            fill="none"
            stroke="#00E5F0"
            strokeWidth="1.5"
            strokeOpacity="0.55"
            className="drop-shadow-[0_0_12px_rgba(0,229,240,0.4)]"
          />
        </svg>

        {/* Aperture Core: Houses the Metallic Infinity Ribbon with Counter-Zoom */}
        <div
          className="relative w-[70%] h-[70%] rounded-full overflow-hidden flex items-center justify-center bg-[#020507]"
          style={{
            boxShadow: 'inset 0 0 45px rgba(0,0,0,0.95), 0 0 35px rgba(0,229,240,0.15)'
          }}
        >
          {/* Internal Metallic Infinity Ribbon */}
          <div
            ref={infinityImageRef}
            className="relative w-[118%] h-[118%] flex items-center justify-center transition-transform duration-700 ease-out pointer-events-none"
          >
            <Image
              src="/images/hero-infinity-cropped.png"
              alt="Infidell Technology LLP Metallic Infinity Ribbon"
              fill
              priority
              className="object-contain filter drop-shadow-[0_15px_35px_rgba(0,0,0,0.9)] brightness-110 contrast-105"
            />

            {/* Ambient Cyan Light Sweep on Ribbon */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#00E5F0]/15 to-transparent mix-blend-screen opacity-70 animate-pulse pointer-events-none" />
          </div>

          {/* Optical Shutter Flash Flare (Triggers on Snap) */}
          <div
            ref={flashOverlayRef}
            className="absolute inset-0 bg-gradient-to-r from-[#00E5F0] via-white to-[#00C7B1] opacity-0 pointer-events-none rounded-full mix-blend-screen z-20"
          />

          {/* Central Telemetry HUD Focus Ring */}
          <div className="absolute inset-0 rounded-full pointer-events-none border border-[#00E5F0]/20 flex items-center justify-center">
            {/* Subtle center crosshairs */}
            <div className="w-6 h-6 border border-[#00E5F0]/30 rounded-full flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-[#00E5F0] rounded-full drop-shadow-[0_0_6px_#00E5F0]" />
            </div>
          </div>
        </div>

        {/* Telemetry Badge (Bottom Edge of the Iris Lens) */}
        <div className="absolute -bottom-4 sm:-bottom-5 left-1/2 -translate-x-1/2 z-20 pointer-events-auto">
          <div className="px-3.5 sm:px-4 py-1.5 rounded-full bg-[#090F12]/95 border border-[#1D3035] shadow-[0_8px_20px_rgba(0,0,0,0.8)] backdrop-blur-md flex items-center gap-2 group-hover:border-[#00E5F0]/60 transition-all duration-300">
            <span className="w-2 h-2 rounded-full bg-[#00E5F0] animate-ping" />
            <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-wider text-[#00E5F0]">
              {currentMode.fStop}
            </span>
            <span className="text-[10px] sm:text-[11px] text-neutral-400 font-medium hidden xs:inline">
              | {currentMode.title}
            </span>
            <RefreshCw
              className={`w-3 h-3 text-[#00E5F0] transition-transform duration-500 ${
                isSnapping ? 'rotate-180' : 'group-hover:rotate-45'
              }`}
            />
          </div>
        </div>

        {/* Click to Shutter Micro-hint */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="px-2.5 py-1 rounded-md bg-[#000000]/90 border border-[#00E5F0]/40 text-[9px] font-mono tracking-widest text-[#00E5F0] uppercase shadow-lg">
            Click to Snap Shutter
          </div>
        </div>
      </div>
    </div>
  );
}
