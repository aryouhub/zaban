export interface Word {
  id: number;
  english: string;
  persian: string;
  persianPronunciation: string; // تلفظ فارسی با اعراب
  pronunciation: string; // IPA
  example: string;
  examplePersian: string;
  examplePersianPronunciation?: string;
  category: string;
  level: CEFRLevel;
  partOfSpeech?: string;
}

export type CEFRLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

export interface Category {
  id: string;
  name: string;
  icon: string; // icon name reference
  color: string;
  description: string;
  group: string; // گروه‌بندی کلان
}

export interface WordDatabase {
  id: string;
  name: string;
  description: string;
  level: CEFRLevel;
  wordCount: number;
  loader: () => Promise<Word[]>;
}

export interface WordProgress {
  wordId: number;
  correctCount: number;
  wrongCount: number;
  lastSeen: number;
  mastered: boolean;
  nextReview: number; // for spaced repetition
  easeFactor: number; // SM-2 algorithm
  interval: number; // days
}
