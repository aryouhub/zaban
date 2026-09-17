import { useState, useEffect, useCallback } from 'react';

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

export interface WordProgress {
  wordId: number;
  correctCount: number;
  wrongCount: number;
  lastSeen: number;
  mastered: boolean;
}

export function useWordProgress() {
  const [progress, setProgress] = useLocalStorage<WordProgress[]>('word-progress', []);

  const updateProgress = useCallback((wordId: number, correct: boolean) => {
    setProgress((prev: WordProgress[]) => {
      const existing = prev.find(p => p.wordId === wordId);
      if (existing) {
        return prev.map(p =>
          p.wordId === wordId
            ? {
                ...p,
                correctCount: correct ? p.correctCount + 1 : p.correctCount,
                wrongCount: correct ? p.wrongCount : p.wrongCount + 1,
                lastSeen: Date.now(),
                mastered: (correct ? p.correctCount + 1 : p.correctCount) >= 3 &&
                          (correct ? p.wrongCount : p.wrongCount + 1) <= 1,
              }
            : p
        );
      }
      return [...prev, {
        wordId,
        correctCount: correct ? 1 : 0,
        wrongCount: correct ? 0 : 1,
        lastSeen: Date.now(),
        mastered: false,
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

  return { progress, updateProgress, getWordStatus, getStats };
}
