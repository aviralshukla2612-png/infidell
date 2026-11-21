'use client';

import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/components/providers/ThemeProvider';

export function ThemeToggle({ className = '' }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div 
        className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#203536] bg-[#0C1517]/80 ${className}`} 
        aria-hidden="true"
      />
    );
  }

  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`relative w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border transition-all duration-300 shadow-md cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D5DF] ${
        isDark
          ? 'bg-[#0C1517]/85 border-[#203536] hover:border-[#00D5DF]/70 hover:bg-[#0E1A1C] text-[#FACC15] shadow-black/40'
          : 'bg-white border-slate-200 hover:border-[#00D5DF] hover:bg-slate-50 text-[#00D5DF] shadow-slate-200/80'
      } ${className}`}
    >
      {/* Icon with smooth rotation animation */}
      <div className="relative w-4 h-4 sm:w-4.5 sm:h-4.5 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#FACC15] transition-transform duration-500 group-hover:rotate-90 group-hover:scale-110" />
        ) : (
          <Moon className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#00D5DF] transition-transform duration-500 group-hover:-rotate-45 group-hover:scale-110" />
        )}
      </div>

      {/* Subtle indicator ring glow */}
      <span 
        className={`absolute inset-0 rounded-full pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100 ${
          isDark 
            ? 'shadow-[0_0_15px_rgba(250,204,21,0.3)]' 
            : 'shadow-[0_0_15px_rgba(0,213,223,0.35)]'
        }`}
      />
    </button>
  );
}
