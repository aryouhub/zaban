import { useState, useEffect } from 'react';
import { Word } from '../types';
import { useSpeech, useWordProgress } from '../hooks/useApp';
import Icon from './Icon';

interface SplitViewProps {
  words: Word[];
  search: string;
  filterLevel: string;
  onSearchChange: (value: string) => void;
  onFilterChange: (value: string) => void;
}

export default function SplitView({ words, search, filterLevel, onSearchChange, onFilterChange }: SplitViewProps) {
  const [selectedWord, setSelectedWord] = useState<Word | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const { speak } = useSpeech();
  const { getWordStatus } = useWordProgress();

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  const filteredWords = words.filter(w => {
    const matchesSearch = w.english.toLowerCase().includes(search.toLowerCase()) ||
                          w.persian.includes(search) ||
                          w.persianPronunciation.includes(search);
    const matchesLevel = filterLevel === 'all' || w.level === filterLevel;
    return matchesSearch && matchesLevel;
  });

  // Select first word by default on desktop
  useEffect(() => {
    if (isDesktop && filteredWords.length > 0 && !selectedWord) {
      setSelectedWord(filteredWords[0]);
    }
  }, [isDesktop, filteredWords]);

  if (!isDesktop) return null;

  return (
    <div className="flex gap-4 h-[calc(100vh-200px)]">
      {/* List Panel */}
      <div className="w-96 flex-shrink-0 glass rounded-2xl overflow-hidden flex flex-col">
        {/* Search & Filter */}
        <div className="p-4 border-b border-white/5 space-y-3">
          <div className="relative">
            <input
              type="text"
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="جستجو..."
              className="w-full glass rounded-xl px-4 py-2.5 pr-10 text-sm text-white placeholder-gray-500 outline-none focus:border-indigo-400/50 border border-transparent transition-all"
            />
            <Icon name="search" size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
          </div>
          <div className="flex gap-1.5 overflow-x-auto pb-1">
            {['all', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'].map(level => (
              <button
                key={level}
                onClick={() => onFilterChange(level)}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
                  filterLevel === level
                    ? 'bg-indigo-500/30 border border-indigo-400/50 text-indigo-300'
                    : 'glass text-gray-400 hover:text-white'
                }`}
              >
                {level === 'all' ? 'همه' : level}
              </button>
            ))}
          </div>
        </div>

        {/* Word List */}
        <div className="flex-1 overflow-y-auto p-2 space-y-1">
          {filteredWords.map(word => {
            const status = getWordStatus(word.id);
            const isSelected = selectedWord?.id === word.id;
            return (
              <button
                key={word.id}
                onClick={() => setSelectedWord(word)}
                className={`w-full p-3 rounded-xl transition-all text-right ${
                  isSelected
                    ? 'bg-indigo-500/20 border border-indigo-400/30'
                    : 'hover:bg-white/5'
                }`}
              >
                <div className="flex items-center gap-2">
                  <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                    status?.mastered ? 'bg-green-400' : status ? 'bg-yellow-400' : 'bg-gray-600'
                  }`} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-sm truncate" dir="ltr">{word.english}</span>
                      <span className="text-gray-500 text-xs">—</span>
                      <span className="text-emerald-400 text-sm truncate">{word.persian}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-xs text-gray-500">{word.persianPronunciation}</span>
                      <span className={`text-xs px-1.5 py-0.5 rounded ${
                        word.level === 'A1' || word.level === 'A2' ? 'bg-green-500/10 text-green-500' :
                        word.level === 'B1' || word.level === 'B2' ? 'bg-yellow-500/10 text-yellow-500' :
                        'bg-red-500/10 text-red-500'
                      }`}>
                        {word.level}
                      </span>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
          {filteredWords.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              <Icon name="search" size={32} className="mx-auto mb-2 opacity-50" />
              <p className="text-sm">لغتی یافت نشد</p>
            </div>
          )}
        </div>
      </div>

      {/* Detail Panel */}
      <div className="flex-1 glass rounded-2xl overflow-hidden">
        {selectedWord ? (
          <div className="h-full p-8 flex flex-col">
            {/* Header */}
            <div className="flex items-start justify-between mb-8">
              <div>
                <h2 className="text-4xl font-bold mb-2" dir="ltr">{selectedWord.english}</h2>
                <p className="text-xl text-emerald-400">{selectedWord.persian}</p>
              </div>
              <button
                onClick={() => speak(selectedWord.english)}
                className="w-12 h-12 rounded-xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center hover:bg-indigo-500/30 transition-all"
              >
                <Icon name="speaker" size={20} className="text-indigo-400" />
              </button>
            </div>

            {/* Pronunciation */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="glass rounded-xl p-4">
                <p className="text-xs text-gray-500 mb-1">تلفظ IPA</p>
                <p className="text-lg" dir="ltr">{selectedWord.pronunciation}</p>
              </div>
              <div className="glass rounded-xl p-4">
                <p className="text-xs text-gray-500 mb-1">تلفظ فارسی</p>
                <p className="text-lg text-indigo-300">{selectedWord.persianPronunciation}</p>
              </div>
            </div>

            {/* Example */}
            <div className="glass rounded-xl p-6 mb-8 flex-1">
              <p className="text-xs text-gray-500 mb-3 flex items-center gap-1">
                <Icon name="book" size={12} />
                مثال:
              </p>
              <p className="text-lg mb-2" dir="ltr">"{selectedWord.example}"</p>
              <p className="text-sm text-gray-400">{selectedWord.examplePersian}</p>
            </div>

            {/* Meta */}
            <div className="flex items-center gap-4">
              <span className={`text-sm px-3 py-1.5 rounded-lg ${
                selectedWord.level === 'A1' || selectedWord.level === 'A2' ? 'bg-green-500/20 text-green-400' :
                selectedWord.level === 'B1' || selectedWord.level === 'B2' ? 'bg-yellow-500/20 text-yellow-400' :
                'bg-red-500/20 text-red-400'
              }`}>
                سطح {selectedWord.level}
              </span>
              {(() => {
                const status = getWordStatus(selectedWord.id);
                if (!status) return null;
                return (
                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <Icon name="check" size={12} className="text-green-400" />
                      {status.correctCount}
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon name="x" size={12} className="text-red-400" />
                      {status.wrongCount}
                    </span>
                    {status.mastered && (
                      <span className="text-green-400 flex items-center gap-1">
                        <Icon name="trophy" size={12} />
                        تسلط یافته
                      </span>
                    )}
                  </div>
                );
              })()}
            </div>
          </div>
        ) : (
          <div className="h-full flex items-center justify-center text-gray-500">
            <div className="text-center">
              <Icon name="book" size={48} className="mx-auto mb-3 opacity-50" />
              <p>یک لغت را انتخاب کنید</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
