import { useState } from 'react';
import { ThemeMode } from '../hooks/useTheme';
import Icon from './Icon';

interface ThemeSwitcherProps {
  themeMode: ThemeMode;
  setThemeMode: (mode: ThemeMode) => void;
}

export default function ThemeSwitcher({ themeMode, setThemeMode }: ThemeSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);

  const themes: { id: ThemeMode; label: string; icon: string; color: string; description: string }[] = [
    { id: 'dark', label: 'تیره', icon: 'moon', color: 'from-slate-700 to-slate-900', description: 'مناسب شب' },
    { id: 'light', label: 'روشن', icon: 'sun', color: 'from-sky-300 to-blue-400', description: 'مناسب روز' },
    { id: 'warm', label: 'گرم', icon: 'flame', color: 'from-amber-500 to-orange-600', description: 'چشم‌نواز' },
    { id: 'system', label: 'سیستم', icon: 'settings', color: 'from-gray-500 to-gray-700', description: 'خودکار' },
    { id: 'high-contrast', label: 'کنتراست بالا', icon: 'eye', color: 'from-yellow-400 to-yellow-600', description: 'دسترسی‌پذیر' },
  ];

  const currentTheme = themes.find(t => t.id === themeMode) || themes[0];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="glass rounded-xl px-3 py-2.5 hover:bg-white/10 transition-all flex items-center gap-2 group"
        aria-label="تغییر تم"
      >
        <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${currentTheme.color} flex items-center justify-center`}>
          <Icon name={currentTheme.icon as any} size={14} className="text-white" />
        </div>
        <span className="text-xs text-gray-300 hidden sm:inline">{currentTheme.label}</span>
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute left-0 top-full mt-2 z-50 glass-strong rounded-2xl p-2 min-w-[200px] animate-fade-in shadow-2xl">
            <div className="text-xs text-gray-400 px-3 py-2 border-b border-white/5 mb-1">
              انتخاب تم
            </div>
            {themes.map(theme => (
              <button
                key={theme.id}
                onClick={() => {
                  setThemeMode(theme.id);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all text-right hover:bg-white/5 ${
                  themeMode === theme.id ? 'bg-white/10' : ''
                }`}
              >
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${theme.color} flex items-center justify-center flex-shrink-0`}>
                  <Icon name={theme.icon as any} size={16} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium">{theme.label}</div>
                  <div className="text-xs text-gray-500">{theme.description}</div>
                </div>
                {themeMode === theme.id && (
                  <Icon name="check" size={16} className="text-indigo-400" />
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
