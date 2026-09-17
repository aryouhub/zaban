import { useState, useEffect } from 'react';
import { useLocalStorage } from './useApp';

export type ThemeMode = 'dark' | 'light' | 'warm' | 'system' | 'high-contrast';

export function useTheme() {
  const [themeMode, setThemeMode] = useLocalStorage<ThemeMode>('theme-mode', 'dark');
  const [resolvedTheme, setResolvedTheme] = useState<'dark' | 'light' | 'warm' | 'high-contrast'>('dark');

  useEffect(() => {
    const applyTheme = (mode: ThemeMode) => {
      let actualTheme: 'dark' | 'light' | 'warm' | 'high-contrast';

      if (mode === 'system') {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        actualTheme = prefersDark ? 'dark' : 'light';
      } else {
        actualTheme = mode;
      }

      document.documentElement.setAttribute('data-theme', actualTheme);
      setResolvedTheme(actualTheme);
    };

    applyTheme(themeMode);

    // Listen for system theme changes
    if (themeMode === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handler = () => applyTheme('system');
      mediaQuery.addEventListener('change', handler);
      return () => mediaQuery.removeEventListener('change', handler);
    }
  }, [themeMode]);

  return { themeMode, setThemeMode, resolvedTheme };
}
