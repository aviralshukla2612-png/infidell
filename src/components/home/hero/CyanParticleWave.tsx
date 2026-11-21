'use client';

import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  baseY: number;
  speed: number;
  amplitude: number;
  phase: number;
  radius: number;
  color: string;
  alpha: number;
}

export function CyanParticleWave() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
      initParticles();
    };

    window.addEventListener('resize', handleResize);

    // Color palette for wave particles: Electric Cyan, Soft Teal, Sky Blue
    const colors = [
      'rgba(0, 229, 240, ',   // #00E5F0 Primary electric cyan
      'rgba(0, 213, 223, ',   // #00D5DF Cyan
      'rgba(0, 199, 177, ',   // #00C7B1 Teal
      'rgba(56, 189, 248, '   // #38BDF8 Sky Blue
    ];

    let particles: Particle[] = [];
    const count = Math.min(140, Math.floor(width / 10));

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < count; i++) {
        const x = (width / count) * i + (Math.random() * 20 - 10);
        // Distribute along bottom third with gradual wave layers
        const layerRatio = Math.random();
        const baseY = height * (0.62 + layerRatio * 0.35);
        particles.push({
          x,
          y: baseY,
          baseY,
          speed: 0.008 + Math.random() * 0.012,
          amplitude: 18 + layerRatio * 32,
          phase: Math.random() * Math.PI * 2,
          radius: 0.8 + Math.random() * 1.8,
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: 0.2 + Math.random() * 0.65
        });
      }
    };

    initParticles();

    let time = 0;

    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      // Render connected wave streams
      const lines = 3;
      for (let l = 0; l < lines; l++) {
        ctx.beginPath();
        const lineY = height * (0.74 + l * 0.09);
        const lineAmp = 22 + l * 12;
        const lineFreq = 0.003 - l * 0.0006;
        const linePhase = time * (0.8 + l * 0.3);

        ctx.moveTo(0, lineY + Math.sin(linePhase) * lineAmp);

        for (let x = 0; x <= width; x += 24) {
          const y = lineY + Math.sin(x * lineFreq + linePhase) * lineAmp;
          ctx.lineTo(x, y);
        }

        ctx.strokeStyle = `rgba(0, 229, 240, ${0.04 + l * 0.025})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }

      // Render animated glowing particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.phase += p.speed;
        p.y = p.baseY + Math.sin(p.phase + time) * p.amplitude;

        // Subtle horizontal drift
        const currentX = p.x + Math.cos(p.phase * 0.5) * 12;

        ctx.beginPath();
        ctx.arc(currentX, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.fill();

        // Soft halo on larger particles
        if (p.radius > 1.4) {
          ctx.beginPath();
          ctx.arc(currentX, p.y, p.radius * 2.8, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${p.alpha * 0.22})`;
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none select-none z-0 w-full h-full opacity-85"
    />
  );
}
