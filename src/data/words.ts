export interface Word {
  id: number;
  english: string;
  persian: string;
  pronunciation: string;
  example: string;
  examplePersian: string;
  category: string;
  level: 'beginner' | 'intermediate' | 'advanced';
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
  description: string;
}

export const categories: Category[] = [
  { id: 'daily', name: 'لغات روزمره', icon: '🏠', color: 'from-blue-400 to-blue-600', description: 'لغات پرکاربرد روزانه' },
  { id: 'food', name: 'غذا و نوشیدنی', icon: '🍕', color: 'from-orange-400 to-red-500', description: 'لغات مربوط به خوراکی‌ها' },
  { id: 'travel', name: 'سفر و گردش', icon: '✈️', color: 'from-green-400 to-emerald-600', description: 'لغات مربوط به سفر' },
  { id: 'business', name: 'تجاری و کاری', icon: '💼', color: 'from-purple-400 to-purple-600', description: 'لغات محیط کار' },
  { id: 'emotions', name: 'احساسات', icon: '❤️', color: 'from-pink-400 to-rose-600', description: 'بیان احساسات' },
  { id: 'nature', name: 'طبیعت', icon: '🌿', color: 'from-teal-400 to-green-600', description: 'لغات طبیعت و محیط زیست' },
  { id: 'technology', name: 'فناوری', icon: '💻', color: 'from-indigo-400 to-blue-600', description: 'لغات تکنولوژی' },
  { id: 'health', name: 'سلامت و بهداشت', icon: '🏥', color: 'from-red-400 to-pink-600', description: 'لغات پزشکی و سلامت' },
];

export const words: Word[] = [
  // Daily Life
  { id: 1, english: 'Breakfast', persian: 'صبحانه', pronunciation: '/ˈbrek.fəst/', example: 'I eat breakfast at 7 AM.', examplePersian: 'من ساعت ۷ صبح صبحانه می‌خورم.', category: 'daily', level: 'beginner' },
  { id: 2, english: 'Beautiful', persian: 'زیبا', pronunciation: '/ˈbjuː.tɪ.fəl/', example: 'What a beautiful day!', examplePersian: 'چه روز زیبایی!', category: 'daily', level: 'beginner' },
  { id: 3, english: 'Important', persian: 'مهم', pronunciation: '/ɪmˈpɔːr.tənt/', example: 'This is very important.', examplePersian: 'این خیلی مهم است.', category: 'daily', level: 'beginner' },
  { id: 4, english: 'Remember', persian: 'به یاد آوردن', pronunciation: '/rɪˈmem.bər/', example: 'I remember that day.', examplePersian: 'من آن روز را به یاد می‌آورم.', category: 'daily', level: 'intermediate' },
  { id: 5, english: 'Decision', persian: 'تصمیم', pronunciation: '/dɪˈsɪʒ.ən/', example: 'It was a difficult decision.', examplePersian: 'تصمیم سختی بود.', category: 'daily', level: 'intermediate' },
  { id: 6, english: 'Experience', persian: 'تجربه', pronunciation: '/ɪkˈspɪə.ri.əns/', example: 'She has a lot of experience.', examplePersian: 'او تجربه زیادی دارد.', category: 'daily', level: 'intermediate' },
  { id: 7, english: 'Accomplish', persian: 'به انجام رساندن', pronunciation: '/əˈkʌm.plɪʃ/', example: 'We accomplished our goals.', examplePersian: 'ما به اهدافمان رسیدیم.', category: 'daily', level: 'advanced' },
  { id: 8, english: 'Opportunity', persian: 'فرصت', pronunciation: '/ˌɒp.əˈtʃuː.nə.ti/', example: 'This is a great opportunity.', examplePersian: 'این یک فرصت عالی است.', category: 'daily', level: 'intermediate' },

  // Food
  { id: 9, english: 'Delicious', persian: 'خوشمزه', pronunciation: '/dɪˈlɪʃ.əs/', example: 'This cake is delicious.', examplePersian: 'این کیک خوشمزه است.', category: 'food', level: 'beginner' },
  { id: 10, english: 'Recipe', persian: 'دستور پخت', pronunciation: '/ˈres.ɪ.pi/', example: 'Can you share the recipe?', examplePersian: 'می‌توانی دستور پخت را به اشتراک بگذاری؟', category: 'food', level: 'intermediate' },
  { id: 11, english: 'Appetite', persian: 'اشتها', pronunciation: '/ˈæp.ɪ.taɪt/', example: 'I have a good appetite today.', examplePersian: 'امروز اشتهای خوبی دارم.', category: 'food', level: 'intermediate' },
  { id: 12, english: 'Ingredient', persian: 'ماده اولیه', pronunciation: '/ɪnˈɡriː.di.ənt/', example: 'We need fresh ingredients.', examplePersian: 'ما به مواد اولیه تازه نیاز داریم.', category: 'food', level: 'intermediate' },
  { id: 13, english: 'Restaurant', persian: 'رستوران', pronunciation: '/ˈres.tər.ɒnt/', example: 'Let\'s go to a restaurant.', examplePersian: 'بیایید به رستوران برویم.', category: 'food', level: 'beginner' },
  { id: 14, english: 'Nutritious', persian: 'مغذی', pronunciation: '/njuːˈtrɪʃ.əs/', example: 'Vegetables are nutritious.', examplePersian: 'سبزیجات مغذی هستند.', category: 'food', level: 'advanced' },
  { id: 15, english: 'Beverage', persian: 'نوشیدنی', pronunciation: '/ˈbev.ər.ɪdʒ/', example: 'Would you like a beverage?', examplePersian: 'نوشیدنی میل دارید؟', category: 'food', level: 'intermediate' },
  { id: 16, english: 'Cuisine', persian: 'آشپزی (سبک)', pronunciation: '/kwɪˈziːn/', example: 'Italian cuisine is popular.', examplePersian: 'آشپزی ایتالیایی محبوب است.', category: 'food', level: 'advanced' },

  // Travel
  { id: 17, english: 'Journey', persian: 'سفر', pronunciation: '/ˈdʒɜː.ni/', example: 'Have a safe journey!', examplePersian: 'سفر بی‌خطری داشته باشی!', category: 'travel', level: 'beginner' },
  { id: 18, english: 'Destination', persian: 'مقصد', pronunciation: '/ˌdes.tɪˈneɪ.ʃən/', example: 'What is your destination?', examplePersian: 'مقصدتان کجاست؟', category: 'travel', level: 'intermediate' },
  { id: 19, english: 'Luggage', persian: 'چمدان', pronunciation: '/ˈlʌɡ.ɪdʒ/', example: 'Don\'t forget your luggage.', examplePersian: 'چمدانت را فراموش نکن.', category: 'travel', level: 'beginner' },
  { id: 20, english: 'Adventure', persian: 'ماجراجویی', pronunciation: '/ədˈven.tʃər/', example: 'Life is an adventure.', examplePersian: 'زندگی یک ماجراجویی است.', category: 'travel', level: 'intermediate' },
  { id: 21, english: 'Passport', persian: 'گذرنامه', pronunciation: '/ˈpɑːs.pɔːt/', example: 'I need to renew my passport.', examplePersian: 'باید گذرنامه‌ام را تمدید کنم.', category: 'travel', level: 'beginner' },
  { id: 22, english: 'Itinerary', persian: 'برنامه سفر', pronunciation: '/aɪˈtɪn.ər.ər.i/', example: 'Let me check the itinerary.', examplePersian: 'اجازه دهید برنامه سفر را بررسی کنم.', category: 'travel', level: 'advanced' },
  { id: 23, english: 'Accommodation', persian: 'اقامتگاه', pronunciation: '/əˌkɒm.əˈdeɪ.ʃən/', example: 'We booked accommodation online.', examplePersian: 'ما اقامتگاه را آنلاین رزرو کردیم.', category: 'travel', level: 'advanced' },
  { id: 24, english: 'Souvenir', persian: 'سوغاتی', pronunciation: '/ˌsuː.vəˈnɪər/', example: 'I bought a souvenir for you.', examplePersian: 'برایت یک سوغاتی خریدم.', category: 'travel', level: 'intermediate' },

  // Business
  { id: 25, english: 'Meeting', persian: 'جلسه', pronunciation: '/ˈmiː.tɪŋ/', example: 'We have a meeting at 3 PM.', examplePersian: 'ساعت ۳ بعدازظهر جلسه داریم.', category: 'business', level: 'beginner' },
  { id: 26, english: 'Negotiation', persian: 'مذاکره', pronunciation: '/nɪˌɡəʊ.ʃiˈeɪ.ʃən/', example: 'The negotiation was successful.', examplePersian: 'مذاکره موفقیت‌آمیز بود.', category: 'business', level: 'advanced' },
  { id: 27, english: 'Deadline', persian: 'مهلت', pronunciation: '/ˈded.laɪn/', example: 'The deadline is tomorrow.', examplePersian: 'مهلت فرداست.', category: 'business', level: 'intermediate' },
  { id: 28, english: 'Colleague', persian: 'همکار', pronunciation: '/ˈkɒl.iːɡ/', example: 'She is my colleague.', examplePersian: 'او همکار من است.', category: 'business', level: 'intermediate' },
  { id: 29, english: 'Strategy', persian: 'استراتژی', pronunciation: '/ˈstræt.ə.dʒi/', example: 'We need a new strategy.', examplePersian: 'ما به یک استراتژی جدید نیاز داریم.', category: 'business', level: 'intermediate' },
  { id: 30, english: 'Entrepreneur', persian: 'کارآفرین', pronunciation: '/ˌɒn.trə.prəˈnɜːr/', example: 'He is a successful entrepreneur.', examplePersian: 'او یک کارآفرین موفق است.', category: 'business', level: 'advanced' },
  { id: 31, english: 'Revenue', persian: 'درآمد', pronunciation: '/ˈrev.ən.juː/', example: 'Revenue increased this quarter.', examplePersian: 'درآمد این فصل افزایش یافت.', category: 'business', level: 'advanced' },
  { id: 32, english: 'Investment', persian: 'سرمایه‌گذاری', pronunciation: '/ɪnˈvest.mənt/', example: 'It\'s a good investment.', examplePersian: 'سرمایه‌گذاری خوبی است.', category: 'business', level: 'intermediate' },

  // Emotions
  { id: 33, english: 'Happiness', persian: 'شادی', pronunciation: '/ˈhæp.i.nəs/', example: 'She smiled with happiness.', examplePersian: 'او با شادی لبخند زد.', category: 'emotions', level: 'beginner' },
  { id: 34, english: 'Anxiety', persian: 'اضطراب', pronunciation: '/æŋˈzaɪ.ə.ti/', example: 'She feels anxiety before exams.', examplePersian: 'او قبل از امتحانات اضطراب دارد.', category: 'emotions', level: 'intermediate' },
  { id: 35, english: 'Grateful', persian: 'سپاسگزار', pronunciation: '/ˈɡreɪt.fəl/', example: 'I am grateful for your help.', examplePersian: 'من بابت کمکت سپاسگزارم.', category: 'emotions', level: 'intermediate' },
  { id: 36, english: 'Frustrated', persian: 'ناامید / کلافه', pronunciation: '/frʌˈstreɪ.tɪd/', example: 'He felt frustrated with the results.', examplePersian: 'او از نتایج کلافه شد.', category: 'emotions', level: 'advanced' },
  { id: 37, english: 'Confident', persian: 'مطمئن به نفس', pronunciation: '/ˈkɒn.fɪ.dənt/', example: 'She is very confident.', examplePersian: 'او خیلی مطمئن به نفس است.', category: 'emotions', level: 'intermediate' },
  { id: 38, english: 'Jealous', persian: 'حسود', pronunciation: '/ˈdʒel.əs/', example: 'Don\'t be jealous of others.', examplePersian: 'از دیگران حسودی نکن.', category: 'emotions', level: 'beginner' },
  { id: 39, english: 'Compassion', persian: 'دلسوزی', pronunciation: '/kəmˈpæʃ.ən/', example: 'She showed great compassion.', examplePersian: 'او دلسوزی بزرگی نشان داد.', category: 'emotions', level: 'advanced' },
  { id: 40, english: 'Enthusiasm', persian: 'اشتیاق', pronunciation: '/ɪnˈθjuː.zi.æz.əm/', example: 'His enthusiasm is contagious.', examplePersian: 'اشتیاق او مسری است.', category: 'emotions', level: 'advanced' },

  // Nature
  { id: 41, english: 'Mountain', persian: 'کوه', pronunciation: '/ˈmaʊn.tɪn/', example: 'The mountain is very high.', examplePersian: 'کوه خیلی بلند است.', category: 'nature', level: 'beginner' },
  { id: 42, english: 'Environment', persian: 'محیط زیست', pronunciation: '/ɪnˈvaɪ.rən.mənt/', example: 'We must protect the environment.', examplePersian: 'ما باید از محیط زیست محافظت کنیم.', category: 'nature', level: 'intermediate' },
  { id: 43, english: 'Drought', persian: 'خشکسالی', pronunciation: '/draʊt/', example: 'The drought affected farmers.', examplePersian: 'خشکسالی بر کشاورزان تأثیر گذاشت.', category: 'nature', level: 'advanced' },
  { id: 44, english: 'Blossom', persian: 'شکوفه دادن', pronunciation: '/ˈblɒs.əm/', example: 'The trees blossom in spring.', examplePersian: 'درختان در بهار شکوفه می‌دهند.', category: 'nature', level: 'intermediate' },
  { id: 45, english: 'Waterfall', persian: 'آبشار', pronunciation: '/ˈwɔː.tə.fɔːl/', example: 'The waterfall is beautiful.', examplePersian: 'آبشار زیباست.', category: 'nature', level: 'beginner' },
  { id: 46, english: 'Ecosystem', persian: 'اکوسیستم', pronunciation: '/ˈiː.kəʊˌsɪs.təm/', example: 'The ecosystem is fragile.', examplePersian: 'اکوسیستم شکننده است.', category: 'nature', level: 'advanced' },
  { id: 47, english: 'Climate', persian: 'آب و هوا', pronunciation: '/ˈklaɪ.mət/', example: 'The climate is changing.', examplePersian: 'آب و هوا در حال تغییر است.', category: 'nature', level: 'intermediate' },
  { id: 48, english: 'Wildlife', persian: 'حیات وحش', pronunciation: '/ˈwaɪld.laɪf/', example: 'We saw amazing wildlife.', examplePersian: 'ما حیات وحش شگفت‌انگیزی دیدیم.', category: 'nature', level: 'intermediate' },

  // Technology
  { id: 49, english: 'Software', persian: 'نرم‌افزار', pronunciation: '/ˈsɒft.weər/', example: 'I develop software.', examplePersian: 'من نرم‌افزار توسعه می‌دهم.', category: 'technology', level: 'beginner' },
  { id: 50, english: 'Innovation', persian: 'نوآوری', pronunciation: '/ˌɪn.əˈveɪ.ʃən/', example: 'Innovation drives progress.', examplePersian: 'نوآوری محرک پیشرفت است.', category: 'technology', level: 'intermediate' },
  { id: 51, english: 'Algorithm', persian: 'الگوریتم', pronunciation: '/ˈæl.ɡə.rɪð.əm/', example: 'The algorithm is efficient.', examplePersian: 'الگوریتم کارآمد است.', category: 'technology', level: 'advanced' },
  { id: 52, english: 'Database', persian: 'پایگاه داده', pronunciation: '/ˈdeɪ.tə.beɪs/', example: 'The data is stored in a database.', examplePersian: 'داده‌ها در پایگاه داده ذخیره شده‌اند.', category: 'technology', level: 'intermediate' },
  { id: 53, english: 'Download', persian: 'دانلود', pronunciation: '/ˈdaʊn.ləʊd/', example: 'Download the app now.', examplePersian: 'همین الان اپلیکیشن را دانلود کنید.', category: 'technology', level: 'beginner' },
  { id: 54, english: 'Artificial', persian: 'مصنوعی', pronunciation: '/ˌɑː.tɪˈfɪʃ.əl/', example: 'Artificial intelligence is growing.', examplePersian: 'هوش مصنوعی در حال رشد است.', category: 'technology', level: 'intermediate' },
  { id: 55, english: 'Cybersecurity', persian: 'امنیت سایبری', pronunciation: '/ˌsaɪ.bə.sɪˈkjʊə.rə.ti/', example: 'Cybersecurity is crucial.', examplePersian: 'امنیت سایبری حیاتی است.', category: 'technology', level: 'advanced' },
  { id: 56, english: 'Bandwidth', persian: 'پهنای باند', pronunciation: '/ˈbænd.wɪdθ/', example: 'We need more bandwidth.', examplePersian: 'ما به پهنای باند بیشتری نیاز داریم.', category: 'technology', level: 'advanced' },

  // Health
  { id: 57, english: 'Exercise', persian: 'ورزش', pronunciation: '/ˈek.sə.saɪz/', example: 'Daily exercise is important.', examplePersian: 'ورزش روزانه مهم است.', category: 'health', level: 'beginner' },
  { id: 58, english: 'Symptom', persian: 'علامت', pronunciation: '/ˈsɪmp.təm/', example: 'What are your symptoms?', examplePersian: 'علائم شما چیست؟', category: 'health', level: 'intermediate' },
  { id: 59, english: 'Prescription', persian: 'نسخه', pronunciation: '/prɪˈskrɪp.ʃən/', example: 'The doctor wrote a prescription.', examplePersian: 'دکتر نسخه نوشت.', category: 'health', level: 'intermediate' },
  { id: 60, english: 'Diagnosis', persian: 'تشخیص', pronunciation: '/ˌdaɪ.əɡˈnəʊ.sɪs/', example: 'Early diagnosis saves lives.', examplePersian: 'تشخیص زودهنگام جان‌ها را نجات می‌دهد.', category: 'health', level: 'advanced' },
  { id: 61, english: 'Nutrition', persian: 'تغذیه', pronunciation: '/njuːˈtrɪʃ.ən/', example: 'Good nutrition is essential.', examplePersian: 'تغذیه خوب ضروری است.', category: 'health', level: 'intermediate' },
  { id: 62, english: 'Immune', persian: 'ایمنی', pronunciation: '/ɪˈmjuːn/', example: 'A strong immune system helps.', examplePersian: 'سیستم ایمنی قوی کمک می‌کند.', category: 'health', level: 'intermediate' },
  { id: 63, english: 'Therapy', persian: 'درمان / تراپی', pronunciation: '/ˈθer.ə.pi/', example: 'She is undergoing therapy.', examplePersian: 'او تحت درمان است.', category: 'health', level: 'intermediate' },
  { id: 64, english: 'Chronic', persian: 'مزمن', pronunciation: '/ˈkrɒn.ɪk/', example: 'He has a chronic illness.', examplePersian: 'او یک بیماری مزمن دارد.', category: 'health', level: 'advanced' },
];
