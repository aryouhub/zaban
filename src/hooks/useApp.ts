import { useState, useCallback } from 'react';
import { WordProgress } from '../types';
import { calculateNextReview } from '../data/loader';

export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T | ((prev: T) => T)) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = (value: T | ((prev: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}

export function useSpeech() {
  const speak = useCallback((text: string, lang: string = 'en-US') => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;
      utterance.rate = 0.85;
      utterance.pitch = 1;
      window.speechSynthesis.speak(utterance);
    }
  }, []);

  return { speak };
}

export function useWordProgress() {
  const [progress, setProgress] = useLocalStorage<WordProgress[]>('word-progress-v2', []);

  const updateProgress = useCallback((wordId: number, correct: boolean) => {
    setProgress((prev: WordProgress[]) => {
      const existing = prev.find(p => p.wordId === wordId);
      if (existing) {
        const quality = correct ? 5 : 1;
        const { easeFactor, interval } = calculateNextReview(
          existing.easeFactor,
          existing.interval,
          quality
        );
        const newCorrectCount = correct ? existing.correctCount + 1 : existing.correctCount;
        const newWrongCount = correct ? existing.wrongCount : existing.wrongCount + 1;

        return prev.map(p =>
          p.wordId === wordId
            ? {
                ...p,
                correctCount: newCorrectCount,
                wrongCount: newWrongCount,
                lastSeen: Date.now(),
                mastered: newCorrectCount >= 3 && newWrongCount <= 1,
                easeFactor,
                interval,
                nextReview: Date.now() + interval * 86400000,
              }
            : p
        );
      }
      const { easeFactor, interval } = calculateNextReview(2.5, 0, correct ? 5 : 1);
      return [...prev, {
        wordId,
        correctCount: correct ? 1 : 0,
        wrongCount: correct ? 0 : 1,
        lastSeen: Date.now(),
        mastered: false,
        easeFactor,
        interval,
        nextReview: Date.now() + interval * 86400000,
      }];
    });
  }, [setProgress]);

  const getWordStatus = useCallback((wordId: number): WordProgress | undefined => {
    return progress.find(p => p.wordId === wordId);
  }, [progress]);

  const getStats = useCallback(() => {
    const total = progress.length;
    const mastered = progress.filter(p => p.mastered).length;
    const learning = progress.filter(p => !p.mastered).length;
    const totalCorrect = progress.reduce((sum, p) => sum + p.correctCount, 0);
    const totalWrong = progress.reduce((sum, p) => sum + p.wrongCount, 0);
    const accuracy = totalCorrect + totalWrong > 0
      ? Math.round((totalCorrect / (totalCorrect + totalWrong)) * 100)
      : 0;

    return { total, mastered, learning, totalCorrect, totalWrong, accuracy };
  }, [progress]);

  const getWordsForReview = useCallback((): number[] => {
    const now = Date.now();
    return progress
      .filter(p => p.nextReview <= now && !p.mastered)
      .sort((a, b) => a.nextReview - b.nextReview)
      .map(p => p.wordId);
  }, [progress]);

  return { progress, updateProgress, getWordStatus, getStats, getWordsForReview };
}
