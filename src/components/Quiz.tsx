import { useState, useMemo, useCallback } from 'react';
import { Word } from '../data/words';
import { useSpeech, useWordProgress } from '../hooks/useApp';

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
    const wrongOptions = otherWords
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);

    let correctAnswer: string;
    let wrongAnswers: string[];

    if (mode === 'en-to-fa') {
      correctAnswer = currentWord.persian;
      wrongAnswers = wrongOptions.map(w => w.persian);
    } else if (mode === 'fa-to-en') {
      correctAnswer = currentWord.english;
      wrongAnswers = wrongOptions.map(w => w.english);
    } else {
      correctAnswer = currentWord.persian;
      wrongAnswers = wrongOptions.map(w => w.persian);
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
      ? answer === currentWord.persian
      : answer === currentWord.english;

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

  // Mode Selection
  if (!mode) {
    return (
      <div className="max-w-lg mx-auto px-4 py-8">
        <button
          onClick={onBack}
          className="glass rounded-xl px-4 py-2 hover:bg-white/10 transition-all text-sm mb-6"
        >
          → بازگشت
        </button>

        <div className="text-center mb-8">
          <div className="text-5xl mb-3">🧠</div>
          <h2 className="text-2xl font-bold mb-2">انتخاب نوع آزمون</h2>
          <p className="text-gray-400 text-sm">حالت مورد نظر خود را انتخاب کنید</p>
        </div>

        <div className="space-y-3">
          <button
            onClick={() => startQuiz('en-to-fa')}
            className="w-full glass-strong rounded-2xl p-5 hover:scale-[1.01] transition-all text-right flex items-center gap-4"
          >
            <div className="w-14 h-14 rounded-xl bg-blue-500/20 flex items-center justify-center text-2xl">
              EN → FA
            </div>
            <div>
              <h3 className="font-bold">انگلیسی به فارسی</h3>
              <p className="text-xs text-gray-400 mt-1">کلمه انگلیسی نمایش داده می‌شود، معنی فارسی را انتخاب کنید</p>
            </div>
          </button>

          <button
            onClick={() => startQuiz('fa-to-en')}
            className="w-full glass-strong rounded-2xl p-5 hover:scale-[1.01] transition-all text-right flex items-center gap-4"
          >
            <div className="w-14 h-14 rounded-xl bg-green-500/20 flex items-center justify-center text-2xl">
              FA → EN
            </div>
            <div>
              <h3 className="font-bold">فارسی به انگلیسی</h3>
              <p className="text-xs text-gray-400 mt-1">معنی فارسی نمایش داده می‌شود، کلمه انگلیسی را انتخاب کنید</p>
            </div>
          </button>

          <button
            onClick={() => startQuiz('listening')}
            className="w-full glass-strong rounded-2xl p-5 hover:scale-[1.01] transition-all text-right flex items-center gap-4"
          >
            <div className="w-14 h-14 rounded-xl bg-purple-500/20 flex items-center justify-center text-2xl">
              🔊
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
    const emoji = percentage >= 80 ? '🏆' : percentage >= 50 ? '👍' : '💪';
    const message = percentage >= 80 ? 'عالی بود!' : percentage >= 50 ? 'خوب بود!' : 'بیشتر تمرین کن!';

    return (
      <div className="max-w-lg mx-auto px-4 py-8 text-center animate-fade-in">
        <div className="glass-strong rounded-3xl p-8">
          <div className="text-6xl mb-4">{emoji}</div>
          <h2 className="text-2xl font-bold mb-2">{message}</h2>
          <p className="text-gray-400 mb-6">نتیجه آزمون شما</p>

          <div className="relative w-32 h-32 mx-auto mb-6">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" />
              <circle
                cx="50" cy="50" r="40" fill="none"
                stroke={percentage >= 80 ? '#10b981' : percentage >= 50 ? '#f59e0b' : '#ef4444'}
                strokeWidth="8"
                strokeDasharray={`${percentage * 2.51} 251`}
                strokeLinecap="round"
                className="transition-all duration-1000"
              />
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
              <div className="text-xl font-bold text-green-400">{score}</div>
              <div className="text-xs text-gray-400">درست</div>
            </div>
            <div className="glass rounded-xl p-3">
              <div className="text-xl font-bold text-red-400">{quizWords.length - score}</div>
              <div className="text-xs text-gray-400">غلط</div>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={restart}
              className="flex-1 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-xl font-medium transition-colors"
            >
              🔄 آزمون مجدد
            </button>
            <button
              onClick={onBack}
              className="flex-1 py-3 glass hover:bg-white/10 rounded-xl font-medium transition-colors"
            >
              🏠 بازگشت
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Quiz Question
  if (!currentWord) return null;

  return (
    <div className="max-w-lg mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={onBack}
          className="glass rounded-xl px-4 py-2 hover:bg-white/10 transition-all text-sm"
        >
          → خروج
        </button>
        <div className="flex items-center gap-2">
          <span className="text-green-400 font-bold">{score}</span>
          <span className="text-gray-500">/</span>
          <span className="text-gray-400">{quizWords.length}</span>
        </div>
      </div>

      {/* Progress */}
      <div className="w-full h-2 bg-white/5 rounded-full mb-6 overflow-hidden">
        <div
          className="h-full bg-gradient-to-l from-indigo-500 to-purple-500 rounded-full transition-all duration-500"
          style={{ width: `${((currentIndex + 1) / quizWords.length) * 100}%` }}
        />
      </div>

      {/* Question */}
      <div className={`glass-strong rounded-3xl p-6 mb-6 text-center ${isCorrect === false ? 'shake' : ''} ${isCorrect === true ? 'bounce-in' : ''}`}>
        {mode === 'listening' ? (
          <div>
            <button
              onClick={() => speak(currentWord.english)}
              className="w-20 h-20 rounded-full bg-indigo-500/20 border-2 border-indigo-400/30 flex items-center justify-center text-4xl mx-auto mb-4 hover:bg-indigo-500/30 transition-all pulse-glow"
            >
              🔊
            </button>
            <p className="text-gray-400 text-sm">کلیک کنید تا تلفظ پخش شود</p>
          </div>
        ) : mode === 'en-to-fa' ? (
          <div>
            <p className="text-xs text-gray-500 mb-2">معنی این کلمه چیست؟</p>
            <div className="text-3xl font-bold mb-2" dir="ltr">{currentWord.english}</div>
            <div className="text-sm text-gray-400" dir="ltr">{currentWord.pronunciation}</div>
          </div>
        ) : (
          <div>
            <p className="text-xs text-gray-500 mb-2">کلمه انگلیسی این معنی چیست؟</p>
            <div className="text-3xl font-bold text-emerald-400">{currentWord.persian}</div>
          </div>
        )}
      </div>

      {/* Options */}
      <div className="space-y-3">
        {options.map((option, index) => {
          const correctAnswer = mode === 'en-to-fa' || mode === 'listening'
            ? currentWord.persian
            : currentWord.english;
          const isThisCorrect = option === correctAnswer;
          const isSelected = selectedAnswer === index;

          let buttonClass = 'glass hover:bg-white/10';
          if (selectedAnswer !== null) {
            if (isThisCorrect) {
              buttonClass = 'bg-green-500/20 border-green-400/50 text-green-300';
            } else if (isSelected && !isThisCorrect) {
              buttonClass = 'bg-red-500/20 border-red-400/50 text-red-300';
            } else {
              buttonClass = 'glass opacity-50';
            }
          }

          return (
            <button
              key={index}
              onClick={() => handleAnswer(option, index)}
              disabled={selectedAnswer !== null}
              className={`w-full p-4 rounded-xl border border-white/10 transition-all text-right ${buttonClass} ${
                selectedAnswer === null ? 'active:scale-95' : ''
              }`}
              dir={mode === 'fa-to-en' ? 'ltr' : 'rtl'}
            >
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

      {/* Question Counter */}
      <div className="text-center mt-6 text-sm text-gray-500">
        سوال {currentIndex + 1} از {quizWords.length}
      </div>
    </div>
  );
}
