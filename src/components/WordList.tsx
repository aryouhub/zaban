import { useState } from 'react';
import { Word } from '../data/words';
import { useSpeech, useWordProgress } from '../hooks/useApp';

interface WordListProps {
  words: Word[];
  onBack: () => void;
}

export default function WordList({ words, onBack }: WordListProps) {
  const [search, setSearch] = useState('');
  const [filterLevel, setFilterLevel] = useState<string>('all');
  const [expandedWord, setExpandedWord] = useState<number | null>(null);
  const { speak } = useSpeech();
  const { getWordStatus } = useWordProgress();

  const filteredWords = words.filter(w => {
    const matchesSearch = w.english.toLowerCase().includes(search.toLowerCase()) ||
                          w.persian.includes(search);
    const matchesLevel = filterLevel === 'all' || w.level === filterLevel;
    return matchesSearch && matchesLevel;
  });

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={onBack}
          className="glass rounded-xl px-4 py-2 hover:bg-white/10 transition-all text-sm"
        >
          → بازگشت
        </button>
        <h2 className="text-lg font-bold">📖 لیست لغات</h2>
        <span className="text-sm text-gray-400">{filteredWords.length} لغت</span>
      </div>

      {/* Search */}
      <div className="relative mb-4">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="جستجوی لغت..."
          className="w-full glass rounded-xl px-4 py-3 pr-10 text-white placeholder-gray-500 outline-none focus:border-indigo-400/50 border border-transparent transition-all"
        />
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">🔍</span>
      </div>

      {/* Level Filter */}
      <div className="flex gap-2 mb-6">
        {[
          { id: 'all', label: 'همه' },
          { id: 'beginner', label: 'مبتدی' },
          { id: 'intermediate', label: 'متوسط' },
          { id: 'advanced', label: 'پیشرفته' },
        ].map(level => (
          <button
            key={level.id}
            onClick={() => setFilterLevel(level.id)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              filterLevel === level.id
                ? 'bg-indigo-500/30 border border-indigo-400/50 text-indigo-300'
                : 'glass text-gray-400 hover:text-white'
            }`}
          >
            {level.label}
          </button>
        ))}
      </div>

      {/* Word List */}
      <div className="space-y-2">
        {filteredWords.map((word, index) => {
          const status = getWordStatus(word.id);
          const isExpanded = expandedWord === word.id;

          return (
            <div
              key={word.id}
              className="glass rounded-xl overflow-hidden transition-all animate-slide-up"
              style={{ animationDelay: `${Math.min(index * 0.03, 0.5)}s` }}
            >
              <button
                onClick={() => setExpandedWord(isExpanded ? null : word.id)}
                className="w-full p-4 flex items-center gap-3 hover:bg-white/5 transition-all text-right"
              >
                {/* Status indicator */}
                <div className={`w-2 h-2 rounded-full flex-shrink-0 ${
                  status?.mastered ? 'bg-green-400' :
                  status ? 'bg-yellow-400' : 'bg-gray-600'
                }`} />

                {/* Word info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white" dir="ltr">{word.english}</span>
                    <span className="text-gray-400">—</span>
                    <span className="text-emerald-400">{word.persian}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-gray-500" dir="ltr">{word.pronunciation}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      word.level === 'beginner' ? 'bg-green-500/10 text-green-500' :
                      word.level === 'intermediate' ? 'bg-yellow-500/10 text-yellow-500' :
                      'bg-red-500/10 text-red-500'
                    }`}>
                      {word.level === 'beginner' ? 'مبتدی' : word.level === 'intermediate' ? 'متوسط' : 'پیشرفته'}
                    </span>
                  </div>
                </div>

                {/* Speaker */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    speak(word.english);
                  }}
                  className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center hover:bg-indigo-500/30 transition-all flex-shrink-0"
                >
                  🔊
                </button>

                {/* Expand indicator */}
                <span className={`text-gray-500 transition-transform ${isExpanded ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>

              {/* Expanded content */}
              {isExpanded && (
                <div className="px-4 pb-4 animate-fade-in border-t border-white/5 pt-3">
                  <div className="mb-3">
                    <p className="text-xs text-gray-500 mb-1">مثال:</p>
                    <p className="text-sm text-gray-300" dir="ltr">"{word.example}"</p>
                    <p className="text-xs text-gray-500 mt-1">{word.examplePersian}</p>
                  </div>
                  {status && (
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>✅ درست: {status.correctCount}</span>
                      <span>❌ غلط: {status.wrongCount}</span>
                      {status.mastered && (
                        <span className="text-green-400 font-medium">🏆 تسلط یافته</span>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {filteredWords.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          <div className="text-4xl mb-3">🔍</div>
          <p>لغتی یافت نشد</p>
        </div>
      )}
    </div>
  );
}
