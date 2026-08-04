'use client';

import React, { createContext, useContext, useEffect, useSyncExternalStore } from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function subscribeTheme(callback: () => void) {
  window.addEventListener('storage', callback);
  return () => window.removeEventListener('storage', callback);
}

function getClientTheme(): Theme {
  if (typeof window === 'undefined') return 'light';
  const saved = localStorage.getItem('lucarc-theme');
  if (saved === 'light' || saved === 'dark') return saved;
  return 'light';
}

function getServerTheme(): Theme {
  return 'light';
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const currentTheme = useSyncExternalStore(subscribeTheme, getClientTheme, getServerTheme);

  const setTheme = (newTheme: Theme) => {
    localStorage.setItem('lucarc-theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    window.dispatchEvent(new Event('storage'));
  };

  const toggleTheme = () => {
    const next = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(next);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme, setTheme }}>
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
