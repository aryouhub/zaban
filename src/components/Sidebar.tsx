import { useState, useEffect } from 'react';
import Icon from './Icon';

type Page = 'home' | 'flashcard' | 'quiz' | 'wordlist' | 'dashboard';

interface SidebarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ currentPage, onNavigate, isOpen, onClose }: SidebarProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const navItems = [
    { id: 'home' as Page, label: 'خانه', icon: 'home' as const, color: 'text-blue-400' },
    { id: 'flashcard' as Page, label: 'فلش‌کارت', icon: 'card' as const, color: 'text-indigo-400' },
    { id: 'quiz' as Page, label: 'آزمون', icon: 'brain' as const, color: 'text-purple-400' },
    { id: 'wordlist' as Page, label: 'لیست لغات', icon: 'bookOpen' as const, color: 'text-emerald-400' },
    { id: 'dashboard' as Page, label: 'پیشرفت', icon: 'trending' as const, color: 'text-orange-400' },
  ];

  const handleNavigate = (page: Page) => {
    onNavigate(page);
    if (isMobile) onClose();
  };

  // Mobile: Drawer overlay
  if (isMobile) {
    return (
      <>
        {/* Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 animate-fade-in"
            onClick={onClose}
          />
        )}

        {/* Drawer */}
        <div
          className={`fixed top-0 right-0 h-full w-72 z-50 glass-strong transform transition-transform duration-300 ease-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="p-5 border-b border-white/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                    <Icon name="graduation" size={20} className="text-white" />
                  </div>
                  <div>
                    <h2 className="font-bold text-sm">آموزش لغات</h2>
                    <p className="text-xs text-gray-500">استاندارد CEFR</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="w-8 h-8 rounded-lg glass flex items-center justify-center hover:bg-white/10"
                >
                  <Icon name="x" size={16} />
                </button>
              </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4 space-y-1">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-right ${
                    currentPage === item.id
                      ? 'bg-white/10 border border-white/10'
                      : 'hover:bg-white/5'
                  }`}
                >
                  <Icon name={item.icon} size={20} className={item.color} />
                  <span className="font-medium text-sm">{item.label}</span>
                  {currentPage === item.id && (
                    <div className="mr-auto w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  )}
                </button>
              ))}
            </nav>

            {/* Footer */}
            <div className="p-4 border-t border-white/10">
              <div className="glass rounded-xl p-3 text-center">
                <p className="text-xs text-gray-400">نسخه ۲.۰</p>
                <p className="text-xs text-gray-500 mt-1">طراحی ریسپانسیو</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  // Desktop: Fixed sidebar
  return (
    <aside className="fixed top-0 right-0 h-full w-64 glass-strong border-l border-white/10 z-30">
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="p-5 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <Icon name="graduation" size={20} className="text-white" />
            </div>
            <div>
              <h2 className="font-bold text-sm">آموزش لغات</h2>
              <p className="text-xs text-gray-500">استاندارد CEFR</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => handleNavigate(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-right group ${
                currentPage === item.id
                  ? 'bg-white/10 border border-white/10'
                  : 'hover:bg-white/5'
              }`}
            >
              <Icon name={item.icon} size={20} className={item.color} />
              <span className="font-medium text-sm">{item.label}</span>
              {currentPage === item.id && (
                <div className="mr-auto w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
              )}
            </button>
          ))}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-white/10">
          <div className="glass rounded-xl p-3">
            <div className="flex items-center gap-2 mb-2">
              <Icon name="lightning" size={14} className="text-yellow-400" />
              <span className="text-xs font-medium">نکته روز</span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              روزانه ۱۵ دقیقه تمرین کافی است
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
