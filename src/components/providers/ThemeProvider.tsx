'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem('infidell-theme') as Theme | null;
      if (savedTheme === 'light' || savedTheme === 'dark') {
        setThemeState(savedTheme);
        if (savedTheme === 'light') {
          document.documentElement.classList.add('light');
          document.documentElement.classList.remove('dark');
        } else {
          document.documentElement.classList.add('dark');
          document.documentElement.classList.remove('light');
        }
      } else {
        // Default to premium light theme
        setThemeState('light');
        document.documentElement.classList.add('light');
        document.documentElement.classList.remove('dark');
      }
    } catch {
      // Fallback to light
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
    setMounted(true);
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    try {
      localStorage.setItem('infidell-theme', newTheme);
      if (newTheme === 'light') {
        document.documentElement.classList.add('light');
        document.documentElement.classList.remove('dark');
      } else {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
      }
    } catch {
      // Ignore
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme: mounted ? theme : 'light', toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
