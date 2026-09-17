import { useState, useMemo, useCallback } from 'react';
import type { Word } from '../data/types';
import { useSpeech, useWordProgress } from '../hooks/useApp';
import * as Icons from './Icons';

interface QuizProps {
  words: Word[];
  onBack: () => void;
}

type QuizMode = 'en-to-fa' | 'fa-to-en' | 'listening';

export default function Quiz({ words, onBack }: QuizProps) {
  const [mode, setMode] = useState<QuizMode | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [quizWords, setQuizWords] = useState<Word[]>([]);
  const [finished, setFinished] = useState(false);
  const { speak } = useSpeech();
  const { updateProgress } = useWordProgress();

  const totalQuestions = Math.min(10, words.length);

  const startQuiz = (selectedMode: QuizMode) => {
    const shuffled = [...words].sort(() => Math.random() - 0.5).slice(0, totalQuestions);
    setQuizWords(shuffled);
    setMode(selectedMode);
    setCurrentIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setFinished(false);
  };

  const generateOptions = useCallback((currentWord: Word): string[] => {
    const otherWords = words.filter(w => w.id !== currentWord.id);
    const wrongOptions = otherWords.sort(() => Math.random() - 0.5).slice(0, 3);

    let correctAnswer: string;
    let wrongAnswers: string[];

    if (mode === 'en-to-fa' || mode === 'listening') {
      correctAnswer = currentWord.fa;
      wrongAnswers = wrongOptions.map(w => w.fa);
    } else {
      correctAnswer = currentWord.en;
      wrongAnswers = wrongOptions.map(w => w.en);
    }

    return [correctAnswer, ...wrongAnswers].sort(() => Math.random() - 0.5);
  }, [words, mode]);

  const currentWord = quizWords[currentIndex];
  const options = useMemo(() => {
    if (!currentWord) return [];
    return generateOptions(currentWord);
  }, [currentWord, generateOptions]);

  const handleAnswer = (answer: string, index: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(index);
    const correct = mode === 'en-to-fa' || mode === 'listening'
      ? answer === currentWord.fa
      : answer === currentWord.en;
    setIsCorrect(correct);
    if (correct) {
      setScore(score + 1);
      updateProgress(currentWord.id, true);
    } else {
      updateProgress(currentWord.id, false);
    }
    setTimeout(() => {
      if (currentIndex < quizWords.length - 1) {
        setCurrentIndex(currentIndex + 1);
        setSelectedAnswer(null);
        setIsCorrect(null);
      } else {
        setFinished(true);
      }
    }, 1500);
  };

  const restart = () => {
    if (mode) startQuiz(mode);
  };

  if (words.length < 4) {
    return (
      <div className="max-w-lg mx-auto px-4 py-8 text-center">
        <div className="glass-strong rounded-3xl p-8">
          <Icons.QuizIcon size={48} className="text-gray-500 mx-auto mb-4" />
          <h2 className="text-xl font-bold mb-2">لغات کافی نیست</h2>
          <p className="text-gray-400 mb-4 text-sm">حداقل ۴ لغت باید بارگذاری شده باشد</p>
          <button onClick={onBack} className="px-6 py-2 bg-indigo-500 rounded-xl text-sm">بازگشت</button>
        </div>
      </div>
    );
  }

  // Mode Selection
  if (!mode) {
    return (
      <div className="max-w-lg mx-auto px-4 py-8">
        <button onClick={onBack} className="glass rounded-xl px-4 py-2 hover:bg-white/10 transition-all text-sm mb-6 flex items-center gap-1">
          <Icons.ArrowRightIcon size={14} />
          بازگشت
        </button>
        <div className="text-center mb-8">
          <Icons.QuizIcon size={48} className="text-purple-400 mx-auto mb-3" />
          <h2 className="text-2xl font-bold mb-2">انتخاب نوع آزمون</h2>
          <p className="text-gray-400 text-sm">حالت مورد نظر خود را انتخاب کنید</p>
        </div>
        <div className="space-y-3">
          <button onClick={() => startQuiz('en-to-fa')} className="w-full glass-strong rounded-2xl p-5 hover:scale-[1.01] transition-all text-right flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-blue-500/20 flex items-center justify-center">
              <span className="text-sm font-bold text-blue-400">EN→FA</span>
            </div>
            <div>
              <h3 className="font-bold">انگلیسی به فارسی</h3>
              <p className="text-xs text-gray-400 mt-1">کلمه انگلیسی را ببینید، معنی فارسی را انتخاب کنید</p>
            </div>
          </button>
          <button onClick={() => startQuiz('fa-to-en')} className="w-full glass-strong rounded-2xl p-5 hover:scale-[1.01] transition-all text-right flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-green-500/20 flex items-center justify-center">
              <span className="text-sm font-bold text-green-400">FA→EN</span>
            </div>
            <div>
              <h3 className="font-bold">فارسی به انگلیسی</h3>
              <p className="text-xs text-gray-400 mt-1">معنی فارسی را ببینید، کلمه انگلیسی را انتخاب کنید</p>
            </div>
          </button>
          <button onClick={() => startQuiz('listening')} className="w-full glass-strong rounded-2xl p-5 hover:scale-[1.01] transition-all text-right flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-purple-500/20 flex items-center justify-center">
              <Icons.SpeakerIcon size={24} className="text-purple-400" />
            </div>
            <div>
              <h3 className="font-bold">تست شنیداری</h3>
              <p className="text-xs text-gray-400 mt-1">تلفظ پخش می‌شود، معنی درست را انتخاب کنید</p>
            </div>
          </button>
        </div>
      </div>
    );
  }

  // Finished
  if (finished) {
    const percentage = Math.round((score / quizWords.length) * 100);
    const ResultIcon = percentage >= 80 ? Icons.TrophyIcon : percentage >= 50 ? Icons.StarIcon : Icons.TargetIcon;
    const message = percentage >= 80 ? 'عالی بود!' : percentage >= 50 ? 'خوب بود!' : 'بیشتر تمرین کن!';

    return (
      <div className="max-w-lg mx-auto px-4 py-8 text-center animate-fade-in">
        <div className="glass-strong rounded-3xl p-8">
          <ResultIcon size={48} className="text-yellow-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">{message}</h2>
          <p className="text-gray-400 mb-6">نتیجه آزمون شما</p>
          <div className="relative w-32 h-32 mx-auto mb-6">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" />
              <circle cx="50" cy="50" r="40" fill="none"
                stroke={percentage >= 80 ? '#10b981' : percentage >= 50 ? '#f59e0b' : '#ef4444'}
                strokeWidth="8" strokeDasharray={`${percentage * 2.51} 251`} strokeLinecap="round"
                className="transition-all duration-1000" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-3xl font-bold">{percentage}%</span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="glass rounded-xl p-3">
              <div className="text-xl font-bold text-white">{quizWords.length}</div>
              <div className="text-xs text-gray-400">سوال</div>
            </div>
            <div className="glass rounded-xl p-3">
              <div className="text-xl font-bold text-green-400 flex items-center justify-center gap-1">
                <Icons.CheckIcon size={16} />{score}
              </div>
              <div className="text-xs text-gray-400">درست</div>
            </div>
            <div className="glass rounded-xl p-3">
              <div className="text-xl font-bold text-red-400 flex items-center justify-center gap-1">
                <Icons.XIcon size={16} />{quizWords.length - score}
              </div>
              <div className="text-xs text-gray-400">غلط</div>
            </div>
          </div>
          <div className="flex gap-3">
            <button onClick={restart} className="flex-1 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-xl font-medium transition-colors flex items-center justify-center gap-2">
              <Icons.RefreshIcon size={16} />
              آزمون مجدد
            </button>
            <button onClick={onBack} className="flex-1 py-3 glass hover:bg-white/10 rounded-xl font-medium transition-colors flex items-center justify-center gap-2">
              <Icons.HomeIcon size={16} />
              بازگشت
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!currentWord) return null;

  return (
    <div className="max-w-lg mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-4">
        <button onClick={onBack} className="glass rounded-xl px-4 py-2 hover:bg-white/10 transition-all text-sm flex items-center gap-1">
          <Icons.XIcon size={14} />
          خروج
        </button>
        <div className="flex items-center gap-2">
          <Icons.CheckIcon size={14} className="text-green-400" />
          <span className="text-green-400 font-bold">{score}</span>
          <span className="text-gray-500">/</span>
          <span className="text-gray-400">{quizWords.length}</span>
        </div>
      </div>
      <div className="w-full h-2 bg-white/5 rounded-full mb-6 overflow-hidden">
        <div className="h-full bg-gradient-to-l from-indigo-500 to-purple-500 rounded-full transition-all duration-500"
          style={{ width: `${((currentIndex + 1) / quizWords.length) * 100}%` }} />
      </div>
      <div className={`glass-strong rounded-3xl p-6 mb-6 text-center ${isCorrect === false ? 'shake' : ''} ${isCorrect === true ? 'bounce-in' : ''}`}>
        {mode === 'listening' ? (
          <div>
            <button onClick={() => speak(currentWord.en)}
              className="w-20 h-20 rounded-full bg-indigo-500/20 border-2 border-indigo-400/30 flex items-center justify-center mx-auto mb-4 hover:bg-indigo-500/30 transition-all pulse-glow">
              <Icons.SpeakerIcon size={32} className="text-indigo-400" />
            </button>
            <p className="text-gray-400 text-sm">کلیک کنید تا تلفظ پخش شود</p>
          </div>
        ) : mode === 'en-to-fa' ? (
          <div>
            <p className="text-xs text-gray-500 mb-2">معنی این کلمه چیست؟</p>
            <div className="text-3xl font-bold mb-2" dir="ltr">{currentWord.en}</div>
            <div className="text-sm text-gray-400" dir="ltr">{currentWord.enPron}</div>
            <div className="text-sm text-indigo-300 mt-1">{currentWord.faPron}</div>
          </div>
        ) : (
          <div>
            <p className="text-xs text-gray-500 mb-2">کلمه انگلیسی این معنی چیست؟</p>
            <div className="text-3xl font-bold text-emerald-400">{currentWord.fa}</div>
            <div className="text-sm text-indigo-300 mt-2">{currentWord.faPron}</div>
          </div>
        )}
      </div>
      <div className="space-y-3">
        {options.map((option, index) => {
          const correctAnswer = mode === 'en-to-fa' || mode === 'listening' ? currentWord.fa : currentWord.en;
          const isThisCorrect = option === correctAnswer;
          const isSelected = selectedAnswer === index;
          let buttonClass = 'glass hover:bg-white/10';
          if (selectedAnswer !== null) {
            if (isThisCorrect) buttonClass = 'bg-green-500/20 border-green-400/50 text-green-300';
            else if (isSelected && !isThisCorrect) buttonClass = 'bg-red-500/20 border-red-400/50 text-red-300';
            else buttonClass = 'glass opacity-50';
          }
          return (
            <button key={index} onClick={() => handleAnswer(option, index)} disabled={selectedAnswer !== null}
              className={`w-full p-4 rounded-xl border border-white/10 transition-all text-right ${buttonClass} ${selectedAnswer === null ? 'active:scale-95' : ''}`}
              dir={mode === 'fa-to-en' ? 'ltr' : 'rtl'}>
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-sm font-bold">
                  {['الف', 'ب', 'ج', 'د'][index]}
                </span>
                <span className="font-medium">{option}</span>
              </div>
            </button>
          );
        })}
      </div>
      <div className="text-center mt-6 text-sm text-gray-500 flex items-center justify-center gap-1">
        <Icons.ClockIcon size={14} />
        سوال {currentIndex + 1} از {quizWords.length}
      </div>
    </div>
  );
}
