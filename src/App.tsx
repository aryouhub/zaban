import { useState } from 'react';
import { categories, categoryGroups } from './data/categories';
import { getAllWords, CEFR_LEVELS } from './data/loader';
import { useLocalStorage, useWordProgress } from './hooks/useApp';
import { useTheme } from './hooks/useTheme';
import Icon from './components/Icon';
import ThemeSwitcher from './components/ThemeSwitcher';
import FlashCard from './components/FlashCard';
import Quiz from './components/Quiz';
import WordList from './components/WordList';
import Dashboard from './components/Dashboard';

type Page = 'home' | 'flashcard' | 'quiz' | 'wordlist' | 'dashboard';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [streak, setStreak] = useLocalStorage('daily-streak', 0);
  const [lastVisit, setLastVisit] = useLocalStorage('last-visit', '');
  const { getStats } = useWordProgress();
  const { themeMode, setThemeMode } = useTheme();
  const stats = getStats();

  const today = new Date().toDateString();
  if (lastVisit !== today) {
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    if (lastVisit === yesterday) {
      setStreak((prev: number) => prev + 1);
    } else if (lastVisit !== today) {
      setStreak(1);
    }
    setLastVisit(today);
  }

  const allWords = getAllWords();
  const filteredWords = selectedCategory
    ? allWords.filter(w => w.category === selectedCategory)
    : allWords;

  const levelFilteredWords = selectedLevel === 'all'
    ? filteredWords
    : filteredWords.filter(w => w.level === selectedLevel);

  const navigateTo = (page: Page, category?: string) => {
    if (category) setSelectedCategory(category);
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'flashcard':
        return <FlashCard words={levelFilteredWords} onBack={() => setCurrentPage('home')} />;
      case 'quiz':
        return <Quiz words={levelFilteredWords} onBack={() => setCurrentPage('home')} />;
      case 'wordlist':
        return <WordList words={levelFilteredWords} onBack={() => setCurrentPage('home')} />;
      case 'dashboard':
        return <Dashboard onBack={() => setCurrentPage('home')} />;
      default:
        return (
          <HomePage
            onNavigate={navigateTo}
            streak={streak}
            stats={stats}
            selectedLevel={selectedLevel}
            setSelectedLevel={setSelectedLevel}
            totalWords={allWords.length}
            themeMode={themeMode}
            setThemeMode={setThemeMode}
          />
        );
    }
  };

  return <div className="min-h-screen text-white">{renderPage()}</div>;
}

import { ThemeMode } from './hooks/useTheme';

interface HomePageProps {
  onNavigate: (page: Page, category?: string) => void;
  streak: number;
  stats: { total: number; mastered: number; learning: number; accuracy: number };
  selectedLevel: string;
  setSelectedLevel: (level: string) => void;
  totalWords: number;
  themeMode: ThemeMode;
  setThemeMode: (mode: ThemeMode | ((prev: ThemeMode) => ThemeMode)) => void;
}

function HomePage({ onNavigate, streak, stats, selectedLevel, setSelectedLevel, totalWords, themeMode, setThemeMode }: HomePageProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* Header */}
      <header className="mb-8 animate-slide-up">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => onNavigate('dashboard')}
            className="glass rounded-xl px-4 py-2.5 hover:bg-white/10 transition-all flex items-center gap-2 group"
          >
            <Icon name="chart" size={18} className="text-indigo-400 group-hover:text-indigo-300" />
            <span className="text-sm">آمار من</span>
          </button>
          <div className="flex items-center gap-2">
            <ThemeSwitcher themeMode={themeMode} setThemeMode={setThemeMode} />
            <div className="glass rounded-xl px-4 py-2.5 flex items-center gap-2">
              <Icon name="flame" size={18} className="text-orange-400" />
              <span className="font-bold text-orange-400">{streak}</span>
              <span className="text-xs text-gray-400">روز</span>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 mb-4 shadow-lg shadow-indigo-500/20">
            <Icon name="graduation" size={32} className="text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-l from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            آموزش لغات انگلیسی
          </h1>
          <p className="text-gray-400 text-sm mb-4">
            {totalWords} لغت کاربردی • استاندارد CEFR • تلفظ فارسی
          </p>

          {/* Quick Stats */}
          <div className="flex justify-center gap-3 flex-wrap">
            <div className="glass rounded-lg px-3 py-1.5 text-xs flex items-center gap-1.5">
              <Icon name="check" size={12} className="text-green-400" />
              <span className="text-green-400 font-bold">{stats.mastered}</span>
              <span className="text-gray-400">تسلط</span>
            </div>
            <div className="glass rounded-lg px-3 py-1.5 text-xs flex items-center gap-1.5">
              <Icon name="book" size={12} className="text-yellow-400" />
              <span className="text-yellow-400 font-bold">{stats.learning}</span>
              <span className="text-gray-400">در حال یادگیری</span>
            </div>
            <div className="glass rounded-lg px-3 py-1.5 text-xs flex items-center gap-1.5">
              <Icon name="target" size={12} className="text-blue-400" />
              <span className="text-blue-400 font-bold">{stats.accuracy}%</span>
              <span className="text-gray-400">دقت</span>
            </div>
          </div>
        </div>
      </header>

      {/* Level Filter */}
      <div className="mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
        <h2 className="text-sm font-medium text-gray-400 mb-3 flex items-center gap-2">
          <Icon name="filter" size={14} />
          <span>سطح استاندارد CEFR</span>
        </h2>
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          <button
            onClick={() => setSelectedLevel('all')}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all whitespace-nowrap flex items-center gap-1.5 ${
              selectedLevel === 'all'
                ? 'bg-indigo-500/30 border border-indigo-400/50 text-indigo-300'
                : 'glass hover:bg-white/10 text-gray-300'
            }`}
          >
            <Icon name="layers" size={14} />
            همه سطوح
          </button>
          {CEFR_LEVELS.map(level => (
            <button
              key={level.id}
              onClick={() => setSelectedLevel(level.id)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all whitespace-nowrap ${
                selectedLevel === level.id
                  ? 'bg-indigo-500/30 border border-indigo-400/50 text-indigo-300'
                  : 'glass hover:bg-white/10 text-gray-300'
              }`}
            >
              {level.id}
            </button>
          ))}
        </div>
      </div>

      {/* Main Actions */}
      <div className="grid grid-cols-2 gap-3 mb-8 animate-slide-up" style={{ animationDelay: '0.15s' }}>
        <button
          onClick={() => onNavigate('flashcard')}
          className="glass-strong rounded-2xl p-5 hover:scale-[1.02] transition-all group text-right"
        >
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/20">
            <Icon name="card" size={24} className="text-white" />
          </div>
          <h3 className="font-bold text-base">فلش‌کارت</h3>
          <p className="text-xs text-gray-400 mt-1">مرور لغات با کارت هوشمند</p>
        </button>
        <button
          onClick={() => onNavigate('quiz')}
          className="glass-strong rounded-2xl p-5 hover:scale-[1.02] transition-all group text-right"
        >
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-lg shadow-purple-500/20">
            <Icon name="brain" size={24} className="text-white" />
          </div>
          <h3 className="font-bold text-base">آزمون</h3>
          <p className="text-xs text-gray-400 mt-1">تست دانش خود را بسنجید</p>
        </button>
        <button
          onClick={() => onNavigate('wordlist')}
          className="glass-strong rounded-2xl p-5 hover:scale-[1.02] transition-all group text-right"
        >
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-lg shadow-emerald-500/20">
            <Icon name="bookOpen" size={24} className="text-white" />
          </div>
          <h3 className="font-bold text-base">لیست لغات</h3>
          <p className="text-xs text-gray-400 mt-1">مشاهده و جستجوی لغات</p>
        </button>
        <button
          onClick={() => onNavigate('dashboard')}
          className="glass-strong rounded-2xl p-5 hover:scale-[1.02] transition-all group text-right"
        >
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-lg shadow-orange-500/20">
            <Icon name="trending" size={24} className="text-white" />
          </div>
          <h3 className="font-bold text-base">پیشرفت</h3>
          <p className="text-xs text-gray-400 mt-1">آمار و عملکرد شما</p>
        </button>
      </div>

      {/* Categories by Group */}
      <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
        {categoryGroups.map(group => {
          const groupCategories = categories.filter(c => c.group === group.id);
          if (groupCategories.length === 0) return null;
          return (
            <div key={group.id} className="mb-6">
              <h2 className="text-sm font-medium text-gray-400 mb-3 flex items-center gap-2">
                <Icon name={group.icon as any} size={14} />
                <span>{group.name}</span>
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {groupCategories.map((cat, index) => (
                  <button
                    key={cat.id}
                    onClick={() => onNavigate('flashcard', cat.id)}
                    className="glass rounded-2xl p-4 hover:scale-[1.03] transition-all text-center group"
                  >
                    <div className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center mb-2 group-hover:scale-110 transition-transform shadow-lg`}>
                      <Icon name={cat.icon as any} size={24} className="text-white" />
                    </div>
                    <h3 className="font-medium text-sm">{cat.name}</h3>
                    <p className="text-xs text-gray-500 mt-0.5">
                      {getAllWords().filter(w => w.category === cat.id).length} لغت
                    </p>
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <footer className="text-center mt-10 pb-6">
        <div className="glass rounded-2xl p-4 inline-flex items-center gap-3">
          <Icon name="lightning" size={18} className="text-yellow-400" />
          <p className="text-xs text-gray-400">
            با الگوریتم <span className="text-indigo-400 font-medium">Spaced Repetition</span> هر لغت را در زمان مناسب مرور کنید
          </p>
        </div>
      </footer>
    </div>
  );
}
