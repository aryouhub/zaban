import Icon from './Icon';

type Page = 'home' | 'flashcard' | 'quiz' | 'wordlist' | 'dashboard';

interface BottomNavProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export default function BottomNav({ currentPage, onNavigate }: BottomNavProps) {
  const navItems = [
    { id: 'home' as Page, label: 'خانه', icon: 'home' as const },
    { id: 'flashcard' as Page, label: 'فلش‌کارت', icon: 'card' as const },
    { id: 'quiz' as Page, label: 'آزمون', icon: 'brain' as const },
    { id: 'wordlist' as Page, label: 'لغات', icon: 'bookOpen' as const },
    { id: 'dashboard' as Page, label: 'پیشرفت', icon: 'trending' as const },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 glass-strong border-t border-white/10 z-30 lg:hidden">
      <div className="flex items-center justify-around px-2 py-2 max-w-lg mx-auto">
        {navItems.map(item => {
          const isActive = currentPage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all ${
                isActive
                  ? 'bg-white/10 scale-105'
                  : 'hover:bg-white/5'
              }`}
            >
              <Icon
                name={item.icon}
                size={20}
                className={`transition-colors ${
                  isActive ? 'text-indigo-400' : 'text-gray-400'
                }`}
              />
              <span
                className={`text-xs transition-colors ${
                  isActive ? 'text-indigo-400 font-medium' : 'text-gray-500'
                }`}
              >
                {item.label}
              </span>
              {isActive && (
                <div className="absolute bottom-1 w-1 h-1 rounded-full bg-indigo-400" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
