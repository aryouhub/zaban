import { useState } from 'react';
import { wordPacks, cefrLevels } from '../data/types';
import type { Word, CEFRLevel } from '../data/types';
import * as Icons from './Icons';

interface PackLoaderProps {
  onBack: () => void;
  onPackLoaded: (words: Word[]) => void;
}

export default function PackLoader({ onBack, onPackLoaded }: PackLoaderProps) {
  const [loading, setLoading] = useState<string | null>(null);
  const [loaded, setLoaded] = useState<Set<string>>(new Set());
  const [selectedLevelFilter, setSelectedLevelFilter] = useState<CEFRLevel | 'all'>('all');

  const handleLoadPack = async (packId: string) => {
    const pack = wordPacks.find(p => p.id === packId);
    if (!pack || loaded.has(packId)) return;

    setLoading(packId);
    try {
      const words = await pack.loader();
      onPackLoaded(words);
      setLoaded(prev => new Set([...prev, packId]));
    } catch (err) {
      console.error('Error loading pack:', err);
    }
    setLoading(null);
  };

  const handleLoadAll = async () => {
    const unloadedPacks = wordPacks.filter(p => !loaded.has(p.id));
    for (const pack of unloadedPacks) {
      await handleLoadPack(pack.id);
    }
  };

  const filteredPacks = selectedLevelFilter === 'all'
    ? wordPacks
    : wordPacks.filter(p => p.level === selectedLevelFilter);

  const loadedCount = loaded.size;
  const totalCount = wordPacks.length;
  const progress = totalCount > 0 ? (loadedCount / totalCount) * 100 : 0;

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={onBack}
          className="glass rounded-xl px-4 py-2 hover:bg-white/10 transition-all text-sm flex items-center gap-1"
        >
          <Icons.ArrowRightIcon size={14} />
          بازگشت
        </button>
        <h2 className="text-lg font-bold flex items-center gap-2">
          <Icons.PackageIcon size={18} className="text-indigo-400" />
          پک‌های لغت
        </h2>
        <button
          onClick={handleLoadAll}
          disabled={loadedCount === totalCount}
          className="glass rounded-xl px-4 py-2 hover:bg-white/10 transition-all text-sm flex items-center gap-1 disabled:opacity-30"
        >
          <Icons.DownloadIcon size={14} />
          بارگذاری همه
        </button>
      </div>

      {/* Progress */}
      <div className="glass-strong rounded-2xl p-5 mb-6 animate-slide-up">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-gray-400">پک‌های بارگذاری شده</span>
          <span className="text-sm font-bold text-indigo-400">{loadedCount} / {totalCount}</span>
        </div>
        <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-l from-indigo-500 to-purple-500 rounded-full transition-all duration-700"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-xs text-gray-500 mt-2">
          {loadedCount * 50} لغت از {(totalCount) * 50} لغت موجود بارگذاری شده
        </p>
      </div>

      {/* Level Filter */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        <button
          onClick={() => setSelectedLevelFilter('all')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
            selectedLevelFilter === 'all'
              ? 'bg-indigo-500/30 border border-indigo-400/50 text-indigo-300'
              : 'glass text-gray-400 hover:text-white'
          }`}
        >
          همه سطوح
        </button>
        {cefrLevels.map(level => (
          <button
            key={level.level}
            onClick={() => setSelectedLevelFilter(level.level)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
              selectedLevelFilter === level.level
                ? 'bg-indigo-500/30 border border-indigo-400/50 text-indigo-300'
                : 'glass text-gray-400 hover:text-white'
            }`}
          >
            {level.level}
          </button>
        ))}
      </div>

      {/* Packs Grid */}
      <div className="space-y-3">
        {filteredPacks.map((pack, index) => {
          const isLoaded = loaded.has(pack.id);
          const isLoading = loading === pack.id;
          const IconComponent = (Icons as any)[pack.icon];

          return (
            <div
              key={pack.id}
              className="glass rounded-2xl p-4 animate-slide-up flex items-center gap-4"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${pack.color} flex items-center justify-center flex-shrink-0`}>
                {IconComponent && <IconComponent size={24} className="text-white" />}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-sm truncate">{pack.title}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    pack.level === 'A1' ? 'bg-green-500/20 text-green-400' :
                    pack.level === 'A2' ? 'bg-blue-500/20 text-blue-400' :
                    pack.level === 'B1' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    {pack.level}
                  </span>
                </div>
                <p className="text-xs text-gray-400">{pack.description}</p>
                <p className="text-xs text-gray-500 mt-1">{pack.wordCount} لغت</p>
              </div>

              <button
                onClick={() => handleLoadPack(pack.id)}
                disabled={isLoaded || isLoading}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all flex items-center gap-1 flex-shrink-0 ${
                  isLoaded
                    ? 'bg-green-500/20 text-green-400 border border-green-400/30'
                    : isLoading
                    ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-400/30'
                    : 'bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 hover:bg-indigo-500/30'
                }`}
              >
                {isLoaded ? (
                  <>
                    <Icons.CheckIcon size={14} />
                    <span>بارگذاری شد</span>
                  </>
                ) : isLoading ? (
                  <>
                    <div className="w-3 h-3 border-2 border-indigo-400 border-t-transparent rounded-full animate-spin" />
                    <span>در حال بارگذاری</span>
                  </>
                ) : (
                  <>
                    <Icons.DownloadIcon size={14} />
                    <span>بارگذاری</span>
                  </>
                )}
              </button>
            </div>
          );
        })}
      </div>

      {/* Info */}
      <div className="mt-6 glass rounded-2xl p-4 animate-slide-up" style={{ animationDelay: '0.5s' }}>
        <div className="flex items-start gap-3">
          <Icons.LightbulbIcon size={18} className="text-yellow-400 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-medium text-sm mb-1">سیستم پک‌بندی هوشمند</h4>
            <p className="text-xs text-gray-400">
              هر پک شامل ۵۰ لغت است و به صورت جداگانه بارگذاری می‌شود. این سیستم قابلیت پشتیبانی از میلیون‌ها لغت را دارد.
              برای شروع، پک‌های مورد نظر خود را بارگذاری کنید.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
