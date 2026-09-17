import { useState, useEffect } from 'react';
import { categories, wordPacks, cefrLevels } from './data/types';
import type { Word, CEFRLevel } from './data/types';
import { useLocalStorage, useWordProgress } from './hooks/useApp';
import FlashCard from './components/FlashCard';
import Quiz from './components/Quiz';
import WordList from './components/WordList';
import Dashboard from './components/Dashboard';
import PackLoader from './components/PackLoader';
import * as Icons from './components/Icons';

type Page = 'home' | 'flashcard' | 'quiz' | 'wordlist' | 'dashboard' | 'packs';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [loadedWords, setLoadedWords] = useState<Word[]>([]);
  const [selectedLevel, setSelectedLevel] = useState<CEFRLevel | 'all'>('all');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [streak, setStreak] = useLocalStorage('daily-streak', 0);
  const [lastVisit, setLastVisit] = useLocalStorage('last-visit', '');
  const { getStats } = useWordProgress();
  const stats = getStats();

  // Update streak
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

  const filteredWords = loadedWords.filter(w => {
    const matchLevel = selectedLevel === 'all' || w.level === selectedLevel;
    const matchCategory = !selectedCategory || w.category === selectedCategory;
    return matchLevel && matchCategory;
  });

  const handlePackLoaded = (words: Word[]) => {
    setLoadedWords(prev => {
      const existingIds = new Set(prev.map(w => w.id));
      const newWords = words.filter(w => !existingIds.has(w.id));
      return [...prev, ...newWords];
    });
  };

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'flashcard':
        return <FlashCard words={filteredWords} onBack={() => setCurrentPage('home')} />;
      case 'quiz':
        return <Quiz words={filteredWords} onBack={() => setCurrentPage('home')} />;
      case 'wordlist':
        return <WordList words={filteredWords} onBack={() => setCurrentPage('home')} />;
      case 'dashboard':
        return <Dashboard onBack={() => setCurrentPage('home')} />;
      case 'packs':
        return <PackLoader onBack={() => setCurrentPage('home')} onPackLoaded={handlePackLoaded} />;
      default:
        return (
          <HomePage
            onNavigate={navigateTo}
            streak={streak}
            stats={stats}
            selectedLevel={selectedLevel}
            setSelectedLevel={setSelectedLevel}
            totalLoaded={loadedWords.length}
          />
        );
    }
  };

  return (
    <div className="min-h-screen text-white">
      {renderPage()}
    </div>
  );
}

interface HomePageProps {
  onNavigate: (page: Page) => void;
  streak: number;
  stats: { total: number; mastered: number; learning: number; accuracy: number };
  selectedLevel: CEFRLevel | 'all';
  setSelectedLevel: (level: CEFRLevel | 'all') => void;
  totalLoaded: number;
}

function HomePage({ onNavigate, streak, stats, selectedLevel, setSelectedLevel, totalLoaded }: HomePageProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* Header */}
      <header className="text-center mb-8 animate-slide-up">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => onNavigate('dashboard')}
            className="glass rounded-xl px-4 py-2 hover:bg-white/10 transition-all flex items-center gap-2"
          >
            <Icons.ChartIcon size={16} className="text-indigo-400" />
            <span className="text-sm">آمار من</span>
          </button>
          <div className="glass rounded-xl px-4 py-2 flex items-center gap-2">
            <Icons.FireIcon size={16} className="text-orange-400" />
            <span className="font-bold text-orange-400">{streak}</span>
            <span className="text-xs text-gray-400">روز</span>
          </div>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-l from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          آموزش لغات انگلیسی
        </h1>
        <p className="text-gray-400 text-sm">سیستم هوشمند یادگیری لغت با استاندارد CEFR</p>

        {/* Quick Stats */}
        <div className="flex justify-center gap-3 mt-4 flex-wrap">
          <div className="glass rounded-lg px-3 py-1.5 text-xs flex items-center gap-1">
            <Icons.TrophyIcon size={12} className="text-green-400" />
            <span className="text-green-400 font-bold">{stats.mastered}</span>
            <span className="text-gray-400">تسلط</span>
          </div>
          <div className="glass rounded-lg px-3 py-1.5 text-xs flex items-center gap-1">
            <Icons.BookIcon size={12} className="text-yellow-400" />
            <span className="text-yellow-400 font-bold">{stats.learning}</span>
            <span className="text-gray-400">یادگیری</span>
          </div>
          <div className="glass rounded-lg px-3 py-1.5 text-xs flex items-center gap-1">
            <Icons.TargetIcon size={12} className="text-blue-400" />
            <span className="text-blue-400 font-bold">{stats.accuracy}%</span>
            <span className="text-gray-400">دقت</span>
          </div>
          <div className="glass rounded-lg px-3 py-1.5 text-xs flex items-center gap-1">
            <Icons.PackageIcon size={12} className="text-purple-400" />
            <span className="text-purple-400 font-bold">{totalLoaded}</span>
            <span className="text-gray-400">لغت بارگذاری شده</span>
          </div>
        </div>
      </header>

      {/* Level Filter */}
      <div className="mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-medium text-gray-400 flex items-center gap-1">
            <Icons.LayersIcon size={14} />
            سطح CEFR
          </h2>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2">
          <button
            onClick={() => setSelectedLevel('all')}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all whitespace-nowrap ${
              selectedLevel === 'all'
                ? 'bg-indigo-500/30 border border-indigo-400/50 text-indigo-300'
                : 'glass hover:bg-white/10 text-gray-300'
            }`}
          >
            همه
          </button>
          {cefrLevels.map(level => (
            <button
              key={level.level}
              onClick={() => setSelectedLevel(level.level)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all whitespace-nowrap ${
                selectedLevel === level.level
                  ? 'bg-indigo-500/30 border border-indigo-400/50 text-indigo-300'
                  : 'glass hover:bg-white/10 text-gray-300'
              }`}
            >
              {level.level} - {level.name}
            </button>
          ))}
        </div>
      </div>

      {/* Main Actions */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
        <ActionButton
          icon={<Icons.FlashcardIcon size={24} className="text-blue-400" />}
          title="فلش‌کارت"
          subtitle="مرور لغات"
          onClick={() => onNavigate('flashcard')}
        />
        <ActionButton
          icon={<Icons.QuizIcon size={24} className="text-purple-400" />}
          title="آزمون"
          subtitle="تست دانش"
          onClick={() => onNavigate('quiz')}
        />
        <ActionButton
          icon={<Icons.BookIcon size={24} className="text-green-400" />}
          title="لیست لغات"
          subtitle="مشاهده همه"
          onClick={() => onNavigate('wordlist')}
        />
        <ActionButton
          icon={<Icons.ChartIcon size={24} className="text-yellow-400" />}
          title="پیشرفت"
          subtitle="آمار عملکرد"
          onClick={() => onNavigate('dashboard')}
        />
        <ActionButton
          icon={<Icons.PackageIcon size={24} className="text-pink-400" />}
          title="پک‌های لغت"
          subtitle="بارگذاری لغات"
          onClick={() => onNavigate('packs')}
        />
        <ActionButton
          icon={<Icons.StarIcon size={24} className="text-orange-400" />}
          title="مرور هوشمند"
          subtitle="لغات ضعیف"
          onClick={() => onNavigate('flashcard')}
        />
      </div>

      {/* Categories */}
      <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
        <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
          <Icons.LayersIcon size={18} className="text-indigo-400" />
          <span>دسته‌بندی لغات</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {categories.map((cat, index) => {
            const IconComponent = (Icons as any)[cat.icon];
            return (
              <button
                key={cat.id}
                onClick={() => onNavigate('wordlist')}
                className="glass rounded-2xl p-4 hover:scale-[1.03] transition-all text-center group animate-slide-up"
                style={{ animationDelay: `${0.3 + index * 0.03}s` }}
              >
                <div className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center mb-2 group-hover:scale-110 transition-transform`}>
                  {IconComponent && <IconComponent size={22} className="text-white" />}
                </div>
                <h3 className="font-medium text-sm">{cat.name}</h3>
                <p className="text-xs text-gray-500 mt-0.5">{cat.description}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* CEFR Info */}
      <div className="mt-8 glass rounded-2xl p-5 animate-slide-up" style={{ animationDelay: '0.4s' }}>
        <h3 className="font-bold mb-3 flex items-center gap-2">
          <Icons.LightbulbIcon size={16} className="text-yellow-400" />
          استاندارد CEFR چیست؟
        </h3>
        <p className="text-sm text-gray-400 mb-3">
          چارچوب مشترک اروپایی مرجع برای زبان‌ها (CEFR) استاندارد بین‌المللی سطح‌بندی مهارت زبانی است.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {cefrLevels.map(level => (
            <div key={level.level} className="glass rounded-lg p-2 text-center">
              <span className={`text-xs font-bold bg-gradient-to-l ${level.color} bg-clip-text text-transparent`}>
                {level.level}
              </span>
              <span className="text-xs text-gray-500 block">{level.name}</span>
            </div>
          ))}
        </div>
      </div>

      <footer className="text-center mt-8 text-gray-600 text-xs pb-4">
        <p>💡 هر لغت را حداقل ۳ بار درست پاسخ دهید تا تسلط یابید</p>
      </footer>
    </div>
  );
}

function ActionButton({ icon, title, subtitle, onClick }: { icon: React.ReactNode; title: string; subtitle: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="glass-strong rounded-2xl p-4 hover:scale-[1.02] transition-all group text-right"
    >
      <div className="mb-2 group-hover:scale-110 transition-transform inline-block">{icon}</div>
      <h3 className="font-bold text-sm">{title}</h3>
      <p className="text-xs text-gray-400 mt-0.5">{subtitle}</p>
    </button>
  );
}
