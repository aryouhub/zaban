// ============================================================
// ساختار داده‌ها - مقیاس‌پذیر برای میلیون‌ها لغت
// سیستم پک‌بندی بر اساس استاندارد CEFR
// هر پک ۵۰ لغت - قابل بارگذاری lazy
// ============================================================

export type CEFRLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

export interface Word {
  id: number;
  en: string;           // کلمه انگلیسی
  fa: string;           // معنی فارسی
  faPron: string;       // تلفظ فارسی (ترانویسی)
  enPron: string;       // تلفظ IPA انگلیسی
  example: string;      // مثال انگلیسی
  exampleFa: string;    // ترجمه مثال
  category: string;     // شناسه دسته
  level: CEFRLevel;     // سطح CEFR
  packId: string;       // شناسه پک
}

export interface Category {
  id: string;
  name: string;
  icon: string;         // نام آیکون SVG
  color: string;        // gradient classes
  description: string;
}

export interface WordPack {
  id: string;
  title: string;
  description: string;
  level: CEFRLevel;
  category: string;
  wordCount: number;
  icon: string;
  color: string;
  // تابع بارگذاری پک (lazy loading)
  loader: () => Promise<Word[]>;
}

export const categories: Category[] = [
  { id: 'daily', name: 'لغات روزمره', icon: 'DailyIcon', color: 'from-blue-400 to-blue-600', description: 'لغات پرکاربرد روزانه' },
  { id: 'food', name: 'غذا و نوشیدنی', icon: 'FoodIcon', color: 'from-orange-400 to-red-500', description: 'لغات مربوط به خوراکی‌ها' },
  { id: 'travel', name: 'سفر و گردش', icon: 'TravelIcon', color: 'from-green-400 to-emerald-600', description: 'لغات مربوط به سفر' },
  { id: 'business', name: 'تجاری و کاری', icon: 'BusinessIcon', color: 'from-purple-400 to-purple-600', description: 'لغات محیط کار' },
  { id: 'emotions', name: 'احساسات و عواطف', icon: 'HeartIcon', color: 'from-pink-400 to-rose-600', description: 'بیان احساسات' },
  { id: 'nature', name: 'طبیعت و محیط', icon: 'NatureIcon', color: 'from-teal-400 to-green-600', description: 'لغات طبیعت' },
  { id: 'technology', name: 'فناوری', icon: 'TechIcon', color: 'from-indigo-400 to-blue-600', description: 'لغات تکنولوژی' },
  { id: 'health', name: 'سلامت و پزشکی', icon: 'HealthIcon', color: 'from-red-400 to-pink-600', description: 'لغات پزشکی' },
  { id: 'education', name: 'آموزش و تحصیل', icon: 'EducationIcon', color: 'from-cyan-400 to-blue-500', description: 'لغات آموزشی' },
  { id: 'clothing', name: 'پوشاک و مد', icon: 'ClothingIcon', color: 'from-violet-400 to-purple-600', description: 'لغات لباس' },
  { id: 'family', name: 'خانواده و روابط', icon: 'FamilyIcon', color: 'from-amber-400 to-orange-500', description: 'لغات خانوادگی' },
  { id: 'weather', name: 'آب و هوا', icon: 'WeatherIcon', color: 'from-sky-400 to-cyan-600', description: 'لغات جوی' },
  { id: 'time', name: 'زمان و تقویم', icon: 'TimeIcon', color: 'from-slate-400 to-gray-600', description: 'لغات زمانی' },
  { id: 'colors', name: 'رنگ‌ها و اشکال', icon: 'ColorIcon', color: 'from-fuchsia-400 to-pink-600', description: 'لغات بصری' },
  { id: 'numbers', name: 'اعداد و حساب', icon: 'NumberIcon', color: 'from-emerald-400 to-teal-600', description: 'لغات عددی' },
  { id: 'body', name: 'بدن انسان', icon: 'BodyIcon', color: 'from-rose-400 to-red-600', description: 'لغات آناتومی' },
  { id: 'animals', name: 'حیوانات', icon: 'AnimalIcon', color: 'from-lime-400 to-green-600', description: 'لغات حیوانات' },
  { id: 'house', name: 'خانه و وسایل', icon: 'HouseIcon', color: 'from-yellow-400 to-amber-600', description: 'لغات خانه' },
  { id: 'city', name: 'شهر و مکان‌ها', icon: 'CityIcon', color: 'from-gray-400 to-slate-600', description: 'لغات شهری' },
];

// پک‌های لغت - هر پک ۵۰ لغت
export const wordPacks: WordPack[] = [
  {
    id: 'daily-a1',
    title: 'لغات روزمره - پایه',
    description: 'لغات ضروری برای مکالمات روزانه',
    level: 'A1',
    category: 'daily',
    wordCount: 50,
    icon: 'DailyIcon',
    color: 'from-blue-400 to-blue-600',
    loader: () => import('./packs/daily-a1').then(m => m.words),
  },
  {
    id: 'food-a1',
    title: 'غذا و نوشیدنی - پایه',
    description: 'لغات خوراکی‌ها و رستوران',
    level: 'A1',
    category: 'food',
    wordCount: 50,
    icon: 'FoodIcon',
    color: 'from-orange-400 to-red-500',
    loader: () => import('./packs/food-a1').then(m => m.words),
  },
  {
    id: 'travel-a2',
    title: 'سفر و گردش',
    description: 'لغات فرودگاه، هتل و حمل‌ونقل',
    level: 'A2',
    category: 'travel',
    wordCount: 50,
    icon: 'TravelIcon',
    color: 'from-green-400 to-emerald-600',
    loader: () => import('./packs/travel-a2').then(m => m.words),
  },
  {
    id: 'business-b1',
    title: 'تجاری و کاری',
    description: 'لغات محیط کار و جلسات',
    level: 'B1',
    category: 'business',
    wordCount: 50,
    icon: 'BusinessIcon',
    color: 'from-purple-400 to-purple-600',
    loader: () => import('./packs/business-b1').then(m => m.words),
  },
  {
    id: 'emotions-b1',
    title: 'احساسات و عواطف',
    description: 'بیان دقیق احساسات',
    level: 'B1',
    category: 'emotions',
    wordCount: 50,
    icon: 'HeartIcon',
    color: 'from-pink-400 to-rose-600',
    loader: () => import('./packs/emotions-b1').then(m => m.words),
  },
  {
    id: 'education-a2',
    title: 'آموزش و تحصیل',
    description: 'لغات مدرسه و دانشگاه',
    level: 'A2',
    category: 'education',
    wordCount: 50,
    icon: 'EducationIcon',
    color: 'from-cyan-400 to-blue-500',
    loader: () => import('./packs/education-a2').then(m => m.words),
  },
  {
    id: 'health-a2',
    title: 'سلامت و پزشکی',
    description: 'لغات دکتر و داروخانه',
    level: 'A2',
    category: 'health',
    wordCount: 50,
    icon: 'HealthIcon',
    color: 'from-red-400 to-pink-600',
    loader: () => import('./packs/health-a2').then(m => m.words),
  },
  {
    id: 'technology-b2',
    title: 'فناوری و کامپیوتر',
    description: 'لغات تخصصی تکنولوژی',
    level: 'B2',
    category: 'technology',
    wordCount: 50,
    icon: 'TechIcon',
    color: 'from-indigo-400 to-blue-600',
    loader: () => import('./packs/technology-b2').then(m => m.words),
  },
];

// اطلاعات سطوح CEFR
export const cefrLevels: { level: CEFRLevel; name: string; description: string; color: string; icon: string }[] = [
  { level: 'A1', name: 'مقدماتی', description: 'شروع یادگیری - لغات پایه', color: 'from-green-400 to-emerald-500', icon: '🌱' },
  { level: 'A2', name: 'پایه', description: 'مکالمات ساده روزمره', color: 'from-blue-400 to-cyan-500', icon: '📘' },
  { level: 'B1', name: 'متوسط', description: 'مکالمات مستقل', color: 'from-yellow-400 to-orange-500', icon: '📙' },
  { level: 'B2', name: 'فرامتوسط', description: 'درک متون پیچیده', color: 'from-orange-400 to-red-500', icon: '📕' },
  { level: 'C1', name: 'پیشرفته', description: 'تسلط حرفه‌ای', color: 'from-purple-400 to-violet-600', icon: '🎓' },
  { level: 'C2', name: 'تسلط کامل', description: 'در حد زبان‌آموز بومی', color: 'from-red-400 to-pink-600', icon: '🏆' },
];
