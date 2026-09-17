import { Word, WordDatabase, CEFRLevel } from '../types';
import {
  greetingsWords, numbersWords, colorsWords, timeWords,
  foodWords, homeWords, clothingWords, shoppingWords, transportWords, weatherWords,
  familyWords, bodyWords, emotionsWords, animalsWords,
  natureWords, travelWords, placesWords,
  educationWords, businessWords, technologyWords, communicationWords,
  artsWords, sportsWords
} from './words';

// === سیستم دیتابیس ماژولار ===
// هر دیتابیس می‌تواند جداگانه بارگذاری شود
// برای افزودن میلیون‌ها لغت، کافی است فایل‌های جدید اضافه کنید

export const wordDatabases: WordDatabase[] = [
  {
    id: 'a1-essentials',
    name: 'سطح A1 - ضروریات',
    description: 'لغات پایه و ضروری برای شروع',
    level: 'A1',
    wordCount: 500, // می‌تواند میلیون‌ها باشد
    loader: async () => getAllWords().filter(w => w.level === 'A1'),
  },
  {
    id: 'a2-elementary',
    name: 'سطح A2 - مقدماتی',
    description: 'لغات سطح مقدماتی',
    level: 'A2',
    wordCount: 800,
    loader: async () => getAllWords().filter(w => w.level === 'A2'),
  },
  {
    id: 'b1-intermediate',
    name: 'سطح B1 - متوسط',
    description: 'لغات سطح متوسط',
    level: 'B1',
    wordCount: 1200,
    loader: async () => getAllWords().filter(w => w.level === 'B1'),
  },
  {
    id: 'b2-upper',
    name: 'سطح B2 - فراملمتوسط',
    description: 'لغات پیشرفته‌تر',
    level: 'B2',
    wordCount: 2000,
    loader: async () => getAllWords().filter(w => w.level === 'B2'),
  },
  {
    id: 'c1-advanced',
    name: 'سطح C1 - پیشرفته',
    description: 'لغات سطح پیشرفته',
    level: 'C1',
    wordCount: 3000,
    loader: async () => getAllWords().filter(w => w.level === 'C1'),
  },
  {
    id: 'c2-proficient',
    name: 'سطح C2 - مسلط',
    description: 'لغات سطح تخصصی و ادبی',
    level: 'C2',
    wordCount: 5000,
    loader: async () => getAllWords().filter(w => w.level === 'C2'),
  },
];

// بارگذاری همه لغات (در عمل هر بخش جداگانه بارگذاری می‌شود)
let cachedWords: Word[] | null = null;

export function getAllWords(): Word[] {
  if (cachedWords) return cachedWords;
  cachedWords = [
    ...greetingsWords,
    ...numbersWords,
    ...colorsWords,
    ...timeWords,
    ...foodWords,
    ...homeWords,
    ...clothingWords,
    ...shoppingWords,
    ...transportWords,
    ...weatherWords,
    ...familyWords,
    ...bodyWords,
    ...emotionsWords,
    ...animalsWords,
    ...natureWords,
    ...travelWords,
    ...placesWords,
    ...educationWords,
    ...businessWords,
    ...technologyWords,
    ...communicationWords,
    ...artsWords,
    ...sportsWords,
  ];
  return cachedWords;
}

export function getWordsByCategory(categoryId: string): Word[] {
  return getAllWords().filter(w => w.category === categoryId);
}

export function getWordsByLevel(level: CEFRLevel): Word[] {
  return getAllWords().filter(w => w.level === level);
}

export function searchWords(query: string): Word[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return getAllWords().filter(w =>
    w.english.toLowerCase().includes(q) ||
    w.persian.includes(q) ||
    w.persianPronunciation.includes(q)
  );
}

// سیستم بارگذاری تدریجی برای دیتابیس‌های بزرگ
export async function loadDatabase(dbId: string): Promise<Word[]> {
  const db = wordDatabases.find(d => d.id === dbId);
  if (!db) return [];

  // شبیه‌سازی تأخیر شبکه برای دیتابیس‌های بزرگ
  // در عمل اینجا از API یا فایل JSON استفاده می‌شود
  return await db.loader();
}

// الگوریتم Spaced Repetition (SM-2)
export function calculateNextReview(easeFactor: number, interval: number, quality: number): {
  easeFactor: number;
  interval: number;
} {
  // quality: 0-5 (0=کاملاً فراموش، 5=کاملاً به یاد)
  if (quality < 3) {
    return { easeFactor: Math.max(1.3, easeFactor - 0.2), interval: 1 };
  }

  let newInterval: number;
  if (interval === 0) newInterval = 1;
  else if (interval === 1) newInterval = 6;
  else newInterval = Math.round(interval * easeFactor);

  const newEaseFactor = easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));

  return {
    easeFactor: Math.max(1.3, newEaseFactor),
    interval: newInterval,
  };
}

export const CEFR_LEVELS: { id: CEFRLevel; name: string; description: string; color: string }[] = [
  { id: 'A1', name: 'A1 - مبتدی', description: 'لغات پایه و اولیه', color: 'from-green-400 to-emerald-500' },
  { id: 'A2', name: 'A2 - مقدماتی', description: 'مکالمات ساده روزمره', color: 'from-teal-400 to-cyan-500' },
  { id: 'B1', name: 'B1 - متوسط', description: 'درک متون عمومی', color: 'from-blue-400 to-indigo-500' },
  { id: 'B2', name: 'B2 - فراملمتوسط', description: 'مکالمات تخصصی', color: 'from-purple-400 to-violet-500' },
  { id: 'C1', name: 'C1 - پیشرفته', description: 'تسلط بر زبان', color: 'from-orange-400 to-red-500' },
  { id: 'C2', name: 'C2 - مسلط', description: 'سطح_native و تخصصی', color: 'from-rose-400 to-pink-500' },
];
