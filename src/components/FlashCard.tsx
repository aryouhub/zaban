import { useState, useCallback } from 'react';
import { Word } from '../types';
import { useSpeech, useWordProgress } from '../hooks/useApp';
import { useTheme } from '../hooks/useTheme';
import Icon from './Icon';
import ThemeSwitcher from './ThemeSwitcher';

interface FlashCardProps {
  words: Word[];
  onBack: () => void;
}

export default function FlashCard({ words, onBack }: FlashCardProps) {
  const { themeMode, setThemeMode } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showExample, setShowExample] = useState(false);
  const [knownWords, setKnownWords] = useState<number[]>([]);
  const [unknownWords, setUnknownWords] = useState<number[]>([]);
  const { speak } = useSpeech();
  const { updateProgress } = useWordProgress();

  const currentWord = words[currentIndex];
  const progress = ((currentIndex) / words.length) * 100;

  const handleFlip = useCallback(() => {
    setIsFlipped(!isFlipped);
    if (!isFlipped) setShowExample(false);
  }, [isFlipped]);

  const handleKnown = () => {
    if (!knownWords.includes(currentWord.id)) {
      setKnownWords([...knownWords, currentWord.id]);
    }
    updateProgress(currentWord.id, true);
    nextCard();
  };

  const handleUnknown = () => {
    if (!unknownWords.includes(currentWord.id)) {
      setUnknownWords([...unknownWords, currentWord.id]);
    }
    updateProgress(currentWord.id, false);
    nextCard();
  };

  const nextCard = () => {
    setIsFlipped(false);
    setShowExample(false);
    if (currentIndex < words.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevCard = () => {
    if (currentIndex > 0) {
      setIsFlipped(false);
      setShowExample(false);
      setCurrentIndex(currentIndex - 1);
    }
  };

  const restart = () => {
    setCurrentIndex(0);
    setIsFlipped(false);
    setShowExample(false);
    setKnownWords([]);
    setUnknownWords([]);
  };

  const isFinished = currentIndex === words.length - 1 &&
    (knownWords.includes(currentWord?.id) || unknownWords.includes(currentWord?.id));

  if (!currentWord) {
    return (
      <div className="max-w-lg mx-auto px-4 py-8 text-center">
        <p className="text-gray-400">لغت یافت نشد</p>
        <button onClick={onBack} className="mt-4 px-6 py-2 bg-indigo-500 rounded-xl">بازگشت</button>
      </div>
    );
  }

  if (isFinished) {
    return (
      <div className="max-w-lg mx-auto px-4 py-8 text-center animate-fade-in">
        <div className="glass-strong rounded-3xl p-8">
          <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mb-4 shadow-lg shadow-green-500/20">
            <Icon name="trophy" size={40} className="text-white" />
          </div>
          <h2 className="text-2xl font-bold mb-2">آفرین!</h2>
          <p className="text-gray-400 mb-6">این دوره فلش‌کارت تمام شد</p>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="glass rounded-xl p-4">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Icon name="check" size={16} className="text-green-400" />
                <span className="text-2xl font-bold text-green-400">{knownWords.length}</span>
              </div>
              <div className="text-xs text-gray-400">بلد بودم</div>
            </div>
            <div className="glass rounded-xl p-4">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Icon name="x" size={16} className="text-red-400" />
                <span className="text-2xl font-bold text-red-400">{unknownWords.length}</span>
              </div>
              <div className="text-xs text-gray-400">نیاز به مرور</div>
            </div>
          </div>
          <div className="flex gap-3">
            <button
              onClick={restart}
              className="flex-1 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-xl font-medium transition-colors flex items-center justify-center gap-2"
            >
              <Icon name="refresh" size={16} />
              شروع مجدد
            </button>
            <button
              onClick={onBack}
              className="flex-1 py-3 glass hover:bg-white/10 rounded-xl font-medium transition-colors flex items-center justify-center gap-2"
            >
              <Icon name="home" size={16} />
              بازگشت
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={onBack}
          className="glass rounded-xl px-4 py-2 hover:bg-white/10 transition-all text-sm flex items-center gap-1.5"
        >
          <Icon name="chevronRight" size={14} />
          بازگشت
        </button>
        <div className="flex items-center gap-2">
          <ThemeSwitcher themeMode={themeMode} setThemeMode={setThemeMode} />
          <div className="text-sm text-gray-400 flex items-center gap-1.5">
            <Icon name="layers" size={14} />
            {currentIndex + 1} / {words.length}
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-2 bg-white/5 rounded-full mb-6 overflow-hidden">
        <div
          className="h-full bg-gradient-to-l from-indigo-500 to-purple-500 rounded-full transition-all duration-500 progress-fill"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Flash Card */}
      <div
        className={`flip-card w-full h-80 md:h-96 cursor-pointer mb-6 ${isFlipped ? 'flipped' : ''}`}
        onClick={handleFlip}
      >
        <div className="flip-card-inner relative w-full h-full">
          {/* Front */}
          <div className="flip-card-front absolute inset-0 glass-strong rounded-3xl flex flex-col items-center justify-center p-6">
            <div className="text-4xl md:text-5xl font-bold text-white mb-3" dir="ltr">
              {currentWord.english}
            </div>
            <div className="text-gray-400 text-sm mb-2" dir="ltr">
              {currentWord.pronunciation}
            </div>
            <div className="text-indigo-300 text-sm mb-4">
              {currentWord.persianPronunciation}
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                speak(currentWord.english);
              }}
              className="w-12 h-12 rounded-full bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center hover:bg-indigo-500/30 transition-all"
            >
              <Icon name="speaker" size={20} className="text-indigo-400" />
            </button>
            <div className="absolute bottom-4 text-xs text-gray-500 flex items-center gap-1">
              <Icon name="eye" size={12} />
              برای دیدن معنی کلیک کنید
            </div>
          </div>

          {/* Back */}
          <div className="flip-card-back absolute inset-0 glass-strong rounded-3xl flex flex-col items-center justify-center p-6">
            <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">
              {currentWord.persian}
            </div>
            <div className="text-lg text-white/80 mb-1" dir="ltr">
              {currentWord.english}
            </div>
            <div className="text-indigo-300 text-sm mb-4">
              {currentWord.persianPronunciation}
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowExample(!showExample);
              }}
              className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors mb-2 flex items-center gap-1"
            >
              <Icon name="book" size={14} />
              {showExample ? 'بستن مثال' : 'مشاهده مثال'}
            </button>
            {showExample && (
              <div className="mt-2 text-center animate-fade-in">
                <p className="text-sm text-gray-300 mb-1" dir="ltr">"{currentWord.example}"</p>
                <p className="text-xs text-gray-500">{currentWord.examplePersian}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-between gap-3 mb-4">
        <button
          onClick={prevCard}
          disabled={currentIndex === 0}
          className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-all disabled:opacity-30"
        >
          <Icon name="chevronRight" size={18} />
        </button>

        <div className="flex gap-3 flex-1 justify-center">
          <button
            onClick={handleUnknown}
            className="flex-1 max-w-[140px] py-3 rounded-xl bg-red-500/20 border border-red-400/30 text-red-300 hover:bg-red-500/30 transition-all font-medium text-sm flex items-center justify-center gap-2"
          >
            <Icon name="x" size={16} />
            بلد نبودم
          </button>
          <button
            onClick={handleKnown}
            className="flex-1 max-w-[140px] py-3 rounded-xl bg-green-500/20 border border-green-400/30 text-green-300 hover:bg-green-500/30 transition-all font-medium text-sm flex items-center justify-center gap-2"
          >
            <Icon name="check" size={16} />
            بلد بودم
          </button>
        </div>

        <button
          onClick={nextCard}
          disabled={currentIndex === words.length - 1}
          className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-all disabled:opacity-30"
        >
          <Icon name="chevronLeft" size={18} />
        </button>
      </div>

      {/* Level Badge */}
      <div className="text-center">
        <span className={`text-xs px-3 py-1.5 rounded-full inline-flex items-center gap-1 ${
          currentWord.level === 'A1' || currentWord.level === 'A2' ? 'bg-green-500/20 text-green-400' :
          currentWord.level === 'B1' || currentWord.level === 'B2' ? 'bg-yellow-500/20 text-yellow-400' :
          'bg-red-500/20 text-red-400'
        }`}>
          <Icon name="star" size={10} />
          سطح {currentWord.level}
        </span>
      </div>
    </div>
  );
}
