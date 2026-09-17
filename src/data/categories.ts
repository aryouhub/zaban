import { Category } from '../types';

export const categoryGroups = [
  { id: 'essentials', name: 'ضروریات', icon: 'star' as const },
  { id: 'daily', name: 'زندگی روزمره', icon: 'house' as const },
  { id: 'people', name: 'انسان و جامعه', icon: 'users' as const },
  { id: 'world', name: 'جهان و طبیعت', icon: 'globe' as const },
  { id: 'work', name: 'کار و تحصیل', icon: 'briefcase' as const },
  { id: 'culture', name: 'فرهنگ و هنر', icon: 'palette' as const },
];

export const categories: Category[] = [
  // === ضروریات ===
  { id: 'greetings', name: 'احوالپرسی و تعارف', icon: 'users', color: 'from-blue-400 to-blue-600', description: 'سلام، خداحافظی، تعارف', group: 'essentials' },
  { id: 'numbers', name: 'اعداد و شمارش', icon: 'layers', color: 'from-indigo-400 to-indigo-600', description: 'اعداد، ترتیب، محاسبات', group: 'essentials' },
  { id: 'colors', name: 'رنگ‌ها و اشکال', icon: 'palette', color: 'from-pink-400 to-pink-600', description: 'رنگ‌ها، اشکال هندسی', group: 'essentials' },
  { id: 'time', name: 'زمان و تاریخ', icon: 'clock', color: 'from-amber-400 to-amber-600', description: 'ساعت، روز، ماه، فصل', group: 'essentials' },

  // === زندگی روزمره ===
  { id: 'food', name: 'غذا و نوشیدنی', icon: 'food', color: 'from-orange-400 to-red-500', description: 'خوراکی‌ها، رستوران، آشپزی', group: 'daily' },
  { id: 'home', name: 'خانه و وسایل', icon: 'house', color: 'from-teal-400 to-teal-600', description: 'اتاق‌ها، مبلمان، لوازم', group: 'daily' },
  { id: 'clothing', name: 'لباس و پوشاک', icon: 'shirt', color: 'from-purple-400 to-purple-600', description: 'لباس‌ها، مد، خرید', group: 'daily' },
  { id: 'shopping', name: 'خرید و بازار', icon: 'money', color: 'from-green-400 to-green-600', description: 'فروشگاه، قیمت، معامله', group: 'daily' },
  { id: 'transport', name: 'حمل و نقل', icon: 'bus', color: 'from-cyan-400 to-cyan-600', description: 'وسایل نقلیه، سفر درون‌شهری', group: 'daily' },
  { id: 'weather', name: 'آب و هوا', icon: 'cloud', color: 'from-sky-400 to-sky-600', description: 'آب و هوا، فصل‌ها، دما', group: 'daily' },

  // === انسان و جامعه ===
  { id: 'family', name: 'خانواده و روابط', icon: 'family', color: 'from-rose-400 to-rose-600', description: 'اعضای خانواده، روابط', group: 'people' },
  { id: 'body', name: 'بدن و سلامت', icon: 'heart', color: 'from-red-400 to-red-600', description: 'اعضای بدن، پزشکی', group: 'people' },
  { id: 'emotions', name: 'احساسات و صفات', icon: 'heart', color: 'from-pink-400 to-rose-600', description: 'احساسات، خلق و خو', group: 'people' },
  { id: 'animals', name: 'حیوانات', icon: 'dog', color: 'from-amber-400 to-orange-600', description: 'حیوانات خانگی و وحشی', group: 'people' },

  // === جهان و طبیعت ===
  { id: 'nature', name: 'طبیعت و محیط', icon: 'leaf', color: 'from-green-400 to-emerald-600', description: 'گیاهان، کوه، دریا', group: 'world' },
  { id: 'travel', name: 'سفر و گردشگری', icon: 'plane', color: 'from-emerald-400 to-teal-600', description: 'سفر، هتل، جاذبه‌ها', group: 'world' },
  { id: 'places', name: 'اماکن و مکان‌ها', icon: 'globe', color: 'from-blue-400 to-indigo-600', description: 'شهر، کشور، ساختمان‌ها', group: 'world' },

  // === کار و تحصیل ===
  { id: 'education', name: 'آموزش و تحصیل', icon: 'graduation', color: 'from-violet-400 to-violet-600', description: 'مدرسه، دانشگاه، درس', group: 'work' },
  { id: 'business', name: 'تجارت و کار', icon: 'briefcase', color: 'from-slate-400 to-slate-600', description: 'محیط کار، شرکت، مشاغل', group: 'work' },
  { id: 'technology', name: 'فناوری و اینترنت', icon: 'computer', color: 'from-indigo-400 to-blue-600', description: 'کامپیوتر، اینترنت، اپ', group: 'work' },
  { id: 'communication', name: 'ارتباطات', icon: 'phone', color: 'from-blue-400 to-cyan-600', description: 'تماس، ایمیل، شبکه اجتماعی', group: 'work' },

  // === فرهنگ و هنر ===
  { id: 'arts', name: 'هنر و موسیقی', icon: 'music', color: 'from-fuchsia-400 to-fuchsia-600', description: 'موسیقی، نقاشی، سینما', group: 'culture' },
  { id: 'sports', name: 'ورزش و تفریح', icon: 'dumbbell', color: 'from-lime-400 to-lime-600', description: 'ورزش‌ها، بازی، سرگرمی', group: 'culture' },
];
