import { Word } from '../types';

// === احوالپرسی و تعارف ===
export const greetingsWords: Word[] = [
  { id: 1, english: 'Hello', persian: 'سلام', persianPronunciation: 'هِلو', pronunciation: '/həˈloʊ/', example: 'Hello, how are you?', examplePersian: 'سلام، حالت چطوره؟', category: 'greetings', level: 'A1' },
  { id: 2, english: 'Goodbye', persian: 'خداحافظ', persianPronunciation: 'گودبای', pronunciation: '/ɡʊdˈbaɪ/', example: 'Goodbye, see you tomorrow!', examplePersian: 'خداحافظ، فردا می‌بینمت!', category: 'greetings', level: 'A1' },
  { id: 3, english: 'Please', persian: 'لطفاً', persianPronunciation: 'پلیز', pronunciation: '/pliːz/', example: 'Please sit down.', examplePersian: 'لطفاً بنشینید.', category: 'greetings', level: 'A1' },
  { id: 4, english: 'Thank you', persian: 'متشکرم', persianPronunciation: 'تَنکیو', pronunciation: '/θæŋk juː/', example: 'Thank you for your help.', examplePersian: 'ممنون بابت کمکت.', category: 'greetings', level: 'A1' },
  { id: 5, english: 'Sorry', persian: 'متأسفم', persianPronunciation: 'ساری', pronunciation: '/ˈsɒri/', example: 'I am sorry for being late.', examplePersian: 'بابت تأخیرم متأسفم.', category: 'greetings', level: 'A1' },
  { id: 6, english: 'Welcome', persian: 'خوش آمدید', persianPronunciation: 'وِلکام', pronunciation: '/ˈwɛlkəm/', example: 'Welcome to our home!', examplePersian: 'به خانه ما خوش آمدید!', category: 'greetings', level: 'A1' },
  { id: 7, english: 'Excuse me', persian: 'ببخشید', persianPronunciation: 'اِکسکیوز می', pronunciation: '/ɪkˈskjuːz miː/', example: 'Excuse me, where is the station?', examplePersian: 'ببخشید، ایستگاه کجاست؟', category: 'greetings', level: 'A1' },
  { id: 8, english: 'Congratulations', persian: 'تبریک', persianPronunciation: 'کانگِرچولِیشنز', pronunciation: '/kənˌɡrætʃuˈleɪʃənz/', example: 'Congratulations on your success!', examplePersian: 'تبریک بابت موفقیتت!', category: 'greetings', level: 'A2' },
  { id: 9, english: 'Appreciate', persian: 'قدردانی کردن', persianPronunciation: 'اِپریشیِیت', pronunciation: '/əˈpriːʃieɪt/', example: 'I appreciate your kindness.', examplePersian: 'از مهربانی‌تان قدردانی می‌کنم.', category: 'greetings', level: 'B1' },
  { id: 10, english: 'Apologize', persian: 'عذرخواهی کردن', persianPronunciation: 'اِپالاجایز', pronunciation: '/əˈpɒlədʒaɪz/', example: 'I apologize for the mistake.', examplePersian: 'بابت اشتباه عذرخواهی می‌کنم.', category: 'greetings', level: 'B1' },
  { id: 135, english: 'Beautiful', persian: 'زیبا', persianPronunciation: 'بیوتیفُل', pronunciation: '/ˈbjuːtɪfəl/', example: 'What a beautiful day!', examplePersian: 'چه روز زیبایی!', category: 'greetings', level: 'A1' },
  { id: 136, english: 'Important', persian: 'مهم', persianPronunciation: 'ایمپورتِنت', pronunciation: '/ɪmˈpɔːrtənt/', example: 'This is important.', examplePersian: 'این مهم است.', category: 'greetings', level: 'A1' },
  { id: 137, english: 'Remember', persian: 'به یاد آوردن', persianPronunciation: 'رِمِمبر', pronunciation: '/rɪˈmɛmbər/', example: 'I remember that day.', examplePersian: 'آن روز را به یاد می‌آورم.', category: 'greetings', level: 'A2' },
  { id: 138, english: 'Experience', persian: 'تجربه', persianPronunciation: 'اِسپیریِنس', pronunciation: '/ɪkˈspɪəriəns/', example: 'She has experience.', examplePersian: 'او تجربه دارد.', category: 'greetings', level: 'B1' },
  { id: 139, english: 'Opportunity', persian: 'فرصت', persianPronunciation: 'آپِرتیونیتی', pronunciation: '/ˌɒpərˈtjuːnɪti/', example: 'This is a great opportunity.', examplePersian: 'این یک فرصت عالی است.', category: 'greetings', level: 'B1' },
  { id: 140, english: 'Accomplish', persian: 'به انجام رساندن', persianPronunciation: 'اِکامپلیش', pronunciation: '/əˈkɒmplɪʃ/', example: 'We accomplished our goals.', examplePersian: 'ما به اهدافمان رسیدیم.', category: 'greetings', level: 'B2' },
];

// === اعداد و شمارش ===
export const numbersWords: Word[] = [
  { id: 11, english: 'One', persian: 'یک', persianPronunciation: 'وان', pronunciation: '/wʌn/', example: 'I have one brother.', examplePersian: 'من یک برادر دارم.', category: 'numbers', level: 'A1' },
  { id: 12, english: 'Hundred', persian: 'صد', persianPronunciation: 'هِندرِد', pronunciation: '/ˈhʌndrəd/', example: 'There are a hundred students.', examplePersian: 'صد دانش‌آموز وجود دارد.', category: 'numbers', level: 'A1' },
  { id: 13, english: 'Thousand', persian: 'هزار', persianPronunciation: 'تائوزِند', pronunciation: '/ˈθaʊzənd/', example: 'The city has a thousand years of history.', examplePersian: 'این شهر هزار سال تاریخ دارد.', category: 'numbers', level: 'A1' },
  { id: 14, english: 'Million', persian: 'میلیون', persianPronunciation: 'میلیِن', pronunciation: '/ˈmɪljən/', example: 'Millions of people live here.', examplePersian: 'میلیون‌ها نفر اینجا زندگی می‌کنند.', category: 'numbers', level: 'A2' },
  { id: 15, english: 'First', persian: 'اول', persianPronunciation: 'فِIRST', pronunciation: '/fɜːrst/', example: 'This is my first day.', examplePersian: 'این اولین روز من است.', category: 'numbers', level: 'A1' },
  { id: 16, english: 'Double', persian: 'دو برابر', persianPronunciation: 'دابِل', pronunciation: '/ˈdʌbəl/', example: 'The price doubled.', examplePersian: 'قیمت دو برابر شد.', category: 'numbers', level: 'A2' },
  { id: 17, english: 'Fraction', persian: 'کسر', persianPronunciation: 'فرَکشِن', pronunciation: '/ˈfrækʃən/', example: 'A fraction of the students passed.', examplePersian: 'کسری از دانش‌آموزان قبول شدند.', category: 'numbers', level: 'B1' },
  { id: 18, english: 'Calculate', persian: 'محاسبه کردن', persianPronunciation: 'کَلکیولِیت', pronunciation: '/ˈkælkjuleɪt/', example: 'Can you calculate the total?', examplePersian: 'می‌توانی کل را محاسبه کنی؟', category: 'numbers', level: 'B1' },
];

// === رنگ‌ها و اشکال ===
export const colorsWords: Word[] = [
  { id: 19, english: 'Red', persian: 'قرمز', persianPronunciation: 'رِد', pronunciation: '/rɛd/', example: 'The apple is red.', examplePersian: 'سیب قرمز است.', category: 'colors', level: 'A1' },
  { id: 20, english: 'Blue', persian: 'آبی', persianPronunciation: 'بلو', pronunciation: '/bluː/', example: 'The sky is blue.', examplePersian: 'آسمان آبی است.', category: 'colors', level: 'A1' },
  { id: 21, english: 'Golden', persian: 'طلایی', persianPronunciation: 'گولِدِن', pronunciation: '/ˈɡoʊldən/', example: 'She has golden hair.', examplePersian: 'او موهای طلایی دارد.', category: 'colors', level: 'A2' },
  { id: 22, english: 'Circle', persian: 'دایره', persianPronunciation: 'سِرکِل', pronunciation: '/ˈsɜːrkl/', example: 'Draw a circle.', examplePersian: 'یک دایره بکش.', category: 'colors', level: 'A1' },
  { id: 23, english: 'Triangle', persian: 'مثلث', persianPronunciation: 'ترایاَنگِل', pronunciation: '/ˈtraɪæŋɡəl/', example: 'A triangle has three sides.', examplePersian: 'مثلث سه ضلع دارد.', category: 'colors', level: 'A2' },
  { id: 24, english: 'Transparent', persian: 'شفاف', persianPronunciation: 'ترنسپِرِنت', pronunciation: '/trænsˈpærənt/', example: 'The glass is transparent.', examplePersian: 'شیشه شفاف است.', category: 'colors', level: 'B1' },
];

// === زمان و تاریخ ===
export const timeWords: Word[] = [
  { id: 25, english: 'Today', persian: 'امروز', persianPronunciation: 'تودِی', pronunciation: '/təˈdeɪ/', example: 'Today is Monday.', examplePersian: 'امروز دوشنبه است.', category: 'time', level: 'A1' },
  { id: 26, english: 'Tomorrow', persian: 'فردا', persianPronunciation: 'تامورو', pronunciation: '/təˈmɒroʊ/', example: 'See you tomorrow.', examplePersian: 'فردا می‌بینمت.', category: 'time', level: 'A1' },
  { id: 27, english: 'Yesterday', persian: 'دیروز', persianPronunciation: 'یِستِردِی', pronunciation: '/ˈjɛstərdeɪ/', example: 'I went there yesterday.', examplePersian: 'دیروز آنجا رفتم.', category: 'time', level: 'A1' },
  { id: 28, english: 'Morning', persian: 'صبح', persianPronunciation: 'مورنینگ', pronunciation: '/ˈmɔːrnɪŋ/', example: 'Good morning!', examplePersian: 'صبح بخیر!', category: 'time', level: 'A1' },
  { id: 29, english: 'Evening', persian: 'عصر', persianPronunciation: 'ایونینگ', pronunciation: '/ˈiːvnɪŋ/', example: 'Let\'s meet this evening.', examplePersian: 'بیا عصر ملاقات کنیم.', category: 'time', level: 'A1' },
  { id: 30, english: 'Century', persian: 'قرن', persianPronunciation: 'سِنچِری', pronunciation: '/ˈsɛntʃəri/', example: 'We live in the 21st century.', examplePersian: 'ما در قرن ۲۱ زندگی می‌کنیم.', category: 'time', level: 'A2' },
  { id: 31, english: 'Ancient', persian: 'باستانی', persianPronunciation: 'اِنشِنت', pronunciation: '/ˈeɪnʃənt/', example: 'This is an ancient city.', examplePersian: 'این یک شهر باستانی است.', category: 'time', level: 'B1' },
  { id: 32, english: 'Contemporary', persian: 'معاصر', persianPronunciation: 'کانتِمپِرِری', pronunciation: '/kənˈtɛmpərɛri/', example: 'She studies contemporary art.', examplePersian: 'او هنر معاصر مطالعه می‌کند.', category: 'time', level: 'B2' },
];

// === غذا و نوشیدنی ===
export const foodWords: Word[] = [
  { id: 33, english: 'Bread', persian: 'نان', persianPronunciation: 'بِرِد', pronunciation: '/brɛd/', example: 'I eat bread every morning.', examplePersian: 'من هر صبح نان می‌خورم.', category: 'food', level: 'A1' },
  { id: 34, english: 'Water', persian: 'آب', persianPronunciation: 'واتِر', pronunciation: '/ˈwɔːtər/', example: 'Can I have some water?', examplePersian: 'می‌توانم کمی آب داشته باشم؟', category: 'food', level: 'A1' },
  { id: 35, english: 'Delicious', persian: 'خوشمزه', persianPronunciation: 'دِلیشِس', pronunciation: '/dɪˈlɪʃəs/', example: 'This food is delicious!', examplePersian: 'این غذا خوشمزه است!', category: 'food', level: 'A2' },
  { id: 36, english: 'Recipe', persian: 'دستور پخت', persianPronunciation: 'رِسِپی', pronunciation: '/ˈrɛsɪpi/', example: 'Can you share the recipe?', examplePersian: 'می‌توانی دستور پخت را به اشتراک بگذاری؟', category: 'food', level: 'B1' },
  { id: 37, english: 'Appetite', persian: 'اشتها', persianPronunciation: 'اَپِتایت', pronunciation: '/ˈæpɪtaɪt/', example: 'I have a good appetite today.', examplePersian: 'امروز اشتهای خوبی دارم.', category: 'food', level: 'B1' },
  { id: 38, english: 'Ingredient', persian: 'ماده اولیه', persianPronunciation: 'اینگریدیِنت', pronunciation: '/ɪnˈɡriːdiənt/', example: 'We need fresh ingredients.', examplePersian: 'ما به مواد اولیه تازه نیاز داریم.', category: 'food', level: 'B1' },
  { id: 39, english: 'Nutritious', persian: 'مغذی', persianPronunciation: 'نیوتریشِس', pronunciation: '/njuːˈtrɪʃəs/', example: 'Vegetables are nutritious.', examplePersian: 'سبزیجات مغذی هستند.', category: 'food', level: 'B2' },
  { id: 40, english: 'Cuisine', persian: 'آشپزی (سبک)', persianPronunciation: 'کویزین', pronunciation: '/kwɪˈziːn/', example: 'Persian cuisine is famous.', examplePersian: 'آشپزی ایرانی مشهور است.', category: 'food', level: 'B2' },
];

// === خانه و وسایل ===
export const homeWords: Word[] = [
  { id: 41, english: 'House', persian: 'خانه', persianPronunciation: 'هاوس', pronunciation: '/haʊs/', example: 'This is my house.', examplePersian: 'این خانه من است.', category: 'home', level: 'A1' },
  { id: 42, english: 'Kitchen', persian: 'آشپزخانه', persianPronunciation: 'کیچِن', pronunciation: '/ˈkɪtʃɪn/', example: 'Mom is in the kitchen.', examplePersian: 'مامان در آشپزخانه است.', category: 'home', level: 'A1' },
  { id: 43, english: 'Furniture', persian: 'مبلمان', persianPronunciation: 'فِرنیچِر', pronunciation: '/ˈfɜːrnɪtʃər/', example: 'We bought new furniture.', examplePersian: 'ما مبلمان جدید خریدیم.', category: 'home', level: 'A2' },
  { id: 44, english: 'Apartment', persian: 'آپارتمان', persianPronunciation: 'اِپارتمِنت', pronunciation: '/əˈpɑːrtmənt/', example: 'They live in an apartment.', examplePersian: 'آنها در یک آپارتمان زندگی می‌کنند.', category: 'home', level: 'A2' },
  { id: 45, english: 'Ceiling', persian: 'سقف', persianPronunciation: 'سیلیینگ', pronunciation: '/ˈsiːlɪŋ/', example: 'The ceiling is white.', examplePersian: 'سقف سفید است.', category: 'home', level: 'A2' },
  { id: 46, english: 'Renovate', persian: 'بازسازی کردن', persianPronunciation: 'رِنووِیت', pronunciation: '/ˈrɛnəveɪt/', example: 'We will renovate the house.', examplePersian: 'ما خانه را بازسازی خواهیم کرد.', category: 'home', level: 'B2' },
];

// === لباس ===
export const clothingWords: Word[] = [
  { id: 47, english: 'Shirt', persian: 'پیراهن', persianPronunciation: 'شِرت', pronunciation: '/ʃɜːrt/', example: 'He is wearing a white shirt.', examplePersian: 'او یک پیراهن سفید پوشیده.', category: 'clothing', level: 'A1' },
  { id: 48, english: 'Shoes', persian: 'کفش', persianPronunciation: 'شوز', pronunciation: '/ʃuːz/', example: 'These shoes are comfortable.', examplePersian: 'این کفش‌ها راحت هستند.', category: 'clothing', level: 'A1' },
  { id: 49, english: 'Dress', persian: 'لباس (زنانه)', persianPronunciation: 'درِس', pronunciation: '/drɛs/', example: 'She wore a beautiful dress.', examplePersian: 'او یک لباس زیبا پوشید.', category: 'clothing', level: 'A1' },
  { id: 50, english: 'Uniform', persian: 'یونیفرم', persianPronunciation: 'یونیفُرم', pronunciation: '/ˈjuːnɪfɔːrm/', example: 'Students wear a uniform.', examplePersian: 'دانش‌آموزان یونیفرم می‌پوشند.', category: 'clothing', level: 'A2' },
  { id: 51, english: 'Fashion', persian: 'مد', persianPronunciation: 'فَشِن', pronunciation: '/ˈfæʃən/', example: 'She follows fashion trends.', examplePersian: 'او مد را دنبال می‌کند.', category: 'clothing', level: 'B1' },
];

// === خرید ===
export const shoppingWords: Word[] = [
  { id: 52, english: 'Market', persian: 'بازار', persianPronunciation: 'مارکِت', pronunciation: '/ˈmɑːrkɪt/', example: 'Let\'s go to the market.', examplePersian: 'بیایید به بازار برویم.', category: 'shopping', level: 'A1' },
  { id: 53, english: 'Price', persian: 'قیمت', persianPronunciation: 'پرایس', pronunciation: '/praɪs/', example: 'What is the price?', examplePersian: 'قیمت چقدر است؟', category: 'shopping', level: 'A1' },
  { id: 54, english: 'Discount', persian: 'تخفیف', persianPronunciation: 'دیسکائونت', pronunciation: '/ˈdɪskaʊnt/', example: 'There is a 20% discount.', examplePersian: '۲۰ درصد تخفیف وجود دارد.', category: 'shopping', level: 'A2' },
  { id: 55, english: 'Customer', persian: 'مشتری', persianPronunciation: 'کاستومِر', pronunciation: '/ˈkʌstəmər/', example: 'The customer is always right.', examplePersian: 'مشتری همیشه درست می‌گوید.', category: 'shopping', level: 'B1' },
  { id: 56, english: 'Purchase', persian: 'خرید کردن', persianPronunciation: 'پِرچِس', pronunciation: '/ˈpɜːrtʃəs/', example: 'I want to purchase this.', examplePersian: 'می‌خواهم این را بخرم.', category: 'shopping', level: 'B1' },
];

// === حمل و نقل ===
export const transportWords: Word[] = [
  { id: 57, english: 'Car', persian: 'ماشین', persianPronunciation: 'کار', pronunciation: '/kɑːr/', example: 'I drive a car.', examplePersian: 'من ماشین می‌رانم.', category: 'transport', level: 'A1' },
  { id: 58, english: 'Bus', persian: 'اتوبوس', persianPronunciation: 'باس', pronunciation: '/bʌs/', example: 'Take the bus to school.', examplePersian: 'با اتوبوس به مدرسه برو.', category: 'transport', level: 'A1' },
  { id: 59, english: 'Airport', persian: 'فرودگاه', persianPronunciation: 'اِرپورت', pronunciation: '/ˈɛrpɔːrt/', example: 'The airport is far.', examplePersian: 'فرودگاه دور است.', category: 'transport', level: 'A2' },
  { id: 60, english: 'Traffic', persian: 'ترافیک', persianPronunciation: 'ترافیک', pronunciation: '/ˈtræfɪk/', example: 'There is heavy traffic.', examplePersian: 'ترافیک سنگین است.', category: 'transport', level: 'A2' },
  { id: 61, english: 'Commuter', persian: 'رفت و آمد کننده', persianPronunciation: 'کامیوتِر', pronunciation: '/kəˈmjuːtər/', example: 'I am a daily commuter.', examplePersian: 'من یک رفت و آمد کننده روزانه هستم.', category: 'transport', level: 'B2' },
];

// === آب و هوا ===
export const weatherWords: Word[] = [
  { id: 62, english: 'Sunny', persian: 'آفتابی', persianPronunciation: 'سانی', pronunciation: '/ˈsʌni/', example: 'It is a sunny day.', examplePersian: 'یک روز آفتابی است.', category: 'weather', level: 'A1' },
  { id: 63, english: 'Rainy', persian: 'بارانی', persianPronunciation: 'رِینی', pronunciation: '/ˈreɪni/', example: 'It was a rainy afternoon.', examplePersian: 'یک عصر بارانی بود.', category: 'weather', level: 'A1' },
  { id: 64, english: 'Temperature', persian: 'دما', persianPronunciation: 'تِمپِرِچِر', pronunciation: '/ˈtɛmpərətʃər/', example: 'The temperature is high.', examplePersian: 'دما بالاست.', category: 'weather', level: 'A2' },
  { id: 65, english: 'Humidity', persian: 'رطوبت', persianPronunciation: 'هیومیدیتی', pronunciation: '/hjuːˈmɪdɪti/', example: 'The humidity is uncomfortable.', examplePersian: 'رطوبت ناراحت‌کننده است.', category: 'weather', level: 'B1' },
  { id: 66, english: 'Forecast', persian: 'پیش‌بینی', persianPronunciation: 'فورکاست', pronunciation: '/ˈfɔːrkæst/', example: 'The weather forecast says rain.', examplePersian: 'پیش‌بینی هوا باران می‌گوید.', category: 'weather', level: 'B1' },
];

// === خانواده ===
export const familyWords: Word[] = [
  { id: 67, english: 'Mother', persian: 'مادر', persianPronunciation: 'مادِر', pronunciation: '/ˈmʌðər/', example: 'My mother is a teacher.', examplePersian: 'مادر من معلم است.', category: 'family', level: 'A1' },
  { id: 68, english: 'Father', persian: 'پدر', persianPronunciation: 'فادِر', pronunciation: '/ˈfɑːðər/', example: 'My father works hard.', examplePersian: 'پدر من سخت کار می‌کند.', category: 'family', level: 'A1' },
  { id: 69, english: 'Sibling', persian: 'خواهر یا برادر', persianPronunciation: 'سیبلینگ', pronunciation: '/ˈsɪblɪŋ/', example: 'Do you have any siblings?', examplePersian: 'خواهر یا برادری داری؟', category: 'family', level: 'A2' },
  { id: 70, english: 'Relative', persian: 'فامیل', persianPronunciation: 'رِلِتیو', pronunciation: '/ˈrɛlətɪv/', example: 'We visited our relatives.', examplePersian: 'ما فامیل‌هایمان را دیدیم.', category: 'family', level: 'B1' },
  { id: 71, english: 'Ancestor', persian: 'نیاکان', persianPronunciation: 'اَنسِستور', pronunciation: '/ˈænsɛstər/', example: 'Our ancestors were brave.', examplePersian: 'نیاکان ما شجاع بودند.', category: 'family', level: 'B2' },
];

// === بدن ===
export const bodyWords: Word[] = [
  { id: 72, english: 'Head', persian: 'سر', persianPronunciation: 'هِد', pronunciation: '/hɛd/', example: 'My head hurts.', examplePersian: 'سرم درد می‌کند.', category: 'body', level: 'A1' },
  { id: 73, english: 'Heart', persian: 'قلب', persianPronunciation: 'هارت', pronunciation: '/hɑːrt/', example: 'The heart pumps blood.', examplePersian: 'قلب خون را پمپ می‌کند.', category: 'body', level: 'A1' },
  { id: 74, english: 'Muscle', persian: 'عضله', persianPronunciation: 'ماسِل', pronunciation: '/ˈmʌsəl/', example: 'Exercise builds muscle.', examplePersian: 'ورزش عضله می‌سازد.', category: 'body', level: 'A2' },
  { id: 75, english: 'Symptom', persian: 'علامت', persianPronunciation: 'سیمپتِم', pronunciation: '/ˈsɪmptəm/', example: 'What are your symptoms?', examplePersian: 'علائم شما چیست؟', category: 'body', level: 'B1' },
  { id: 76, english: 'Diagnosis', persian: 'تشخیص', persianPronunciation: 'دایاگنوسیس', pronunciation: '/ˌdaɪəɡˈnoʊsɪs/', example: 'Early diagnosis saves lives.', examplePersian: 'تشخیص زودهنگام جان نجات می‌دهد.', category: 'body', level: 'B2' },
  { id: 77, english: 'Immune', persian: 'ایمنی', persianPronunciation: 'ایمیون', pronunciation: '/ɪˈmjuːn/', example: 'A strong immune system helps.', examplePersian: 'سیستم ایمنی قوی کمک می‌کند.', category: 'body', level: 'B2' },
];

// === احساسات ===
export const emotionsWords: Word[] = [
  { id: 78, english: 'Happy', persian: 'خوشحال', persianPronunciation: 'هَپی', pronunciation: '/ˈhæpi/', example: 'I am happy today.', examplePersian: 'امروز خوشحالم.', category: 'emotions', level: 'A1' },
  { id: 79, english: 'Sad', persian: 'غمگین', persianPronunciation: 'سَد', pronunciation: '/sæd/', example: 'She looks sad.', examplePersian: 'او غمگین به نظر می‌رسد.', category: 'emotions', level: 'A1' },
  { id: 80, english: 'Angry', persian: 'عصبانی', persianPronunciation: 'اَنگری', pronunciation: '/ˈæŋɡri/', example: 'Don\'t be angry.', examplePersian: 'عصبانی نباش.', category: 'emotions', level: 'A1' },
  { id: 81, english: 'Excited', persian: 'هیجان‌زده', persianPronunciation: 'اِکسایتِد', pronunciation: '/ɪkˈsaɪtɪd/', example: 'I am excited about the trip.', examplePersian: 'درباره سفر هیجان‌زده‌ام.', category: 'emotions', level: 'A2' },
  { id: 82, english: 'Anxious', persian: 'مضطرب', persianPronunciation: 'اَنکشِس', pronunciation: '/ˈæŋkʃəs/', example: 'She feels anxious before exams.', examplePersian: 'قبل از امتحانات مضطرب می‌شود.', category: 'emotions', level: 'B1' },
  { id: 83, english: 'Frustrated', persian: 'کلافه', persianPronunciation: 'فراسترِیتِد', pronunciation: '/frʌˈstreɪtɪd/', example: 'He felt frustrated.', examplePersian: 'او کلافه شد.', category: 'emotions', level: 'B2' },
  { id: 84, english: 'Compassion', persian: 'دلسوزی', persianPronunciation: 'کَمپَشِن', pronunciation: '/kəmˈpæʃən/', example: 'She showed great compassion.', examplePersian: 'او دلسوزی بزرگی نشان داد.', category: 'emotions', level: 'B2' },
];

// === حیوانات ===
export const animalsWords: Word[] = [
  { id: 85, english: 'Dog', persian: 'سگ', persianPronunciation: 'داگ', pronunciation: '/dɔːɡ/', example: 'The dog is friendly.', examplePersian: 'سگ دوستانه است.', category: 'animals', level: 'A1' },
  { id: 86, english: 'Cat', persian: 'گربه', persianPronunciation: 'کَت', pronunciation: '/kæt/', example: 'The cat sleeps all day.', examplePersian: 'گربه تمام روز می‌خوابد.', category: 'animals', level: 'A1' },
  { id: 87, english: 'Bird', persian: 'پرنده', persianPronunciation: 'بِرد', pronunciation: '/bɜːrd/', example: 'A bird is singing.', examplePersian: 'یک پرنده آواز می‌خواند.', category: 'animals', level: 'A1' },
  { id: 88, english: 'Wildlife', persian: 'حیات وحش', persianPronunciation: 'وایلدلایف', pronunciation: '/ˈwaɪldlaɪf/', example: 'We saw amazing wildlife.', examplePersian: 'ما حیات وحش شگفت‌انگیزی دیدیم.', category: 'animals', level: 'B1' },
  { id: 89, english: 'Endangered', persian: 'در معرض انقراض', persianPronunciation: 'ایندِینجِرد', pronunciation: '/ɪnˈdeɪndʒərd/', example: 'Tigers are endangered.', examplePersian: 'ببرها در معرض انقراض هستند.', category: 'animals', level: 'B2' },
];

// === طبیعت ===
export const natureWords: Word[] = [
  { id: 90, english: 'Mountain', persian: 'کوه', persianPronunciation: 'مائونتِن', pronunciation: '/ˈmaʊntɪn/', example: 'The mountain is high.', examplePersian: 'کوه بلند است.', category: 'nature', level: 'A1' },
  { id: 91, english: 'River', persian: 'رودخانه', persianPronunciation: 'ریوِر', pronunciation: '/ˈrɪvər/', example: 'The river flows fast.', examplePersian: 'رودخانه سریع جریان دارد.', category: 'nature', level: 'A1' },
  { id: 92, english: 'Forest', persian: 'جنگل', persianPronunciation: 'فارِست', pronunciation: '/ˈfɒrɪst/', example: 'The forest is green.', examplePersian: 'جنگل سبز است.', category: 'nature', level: 'A1' },
  { id: 93, english: 'Environment', persian: 'محیط زیست', persianPronunciation: 'اِنوایرِنمِنت', pronunciation: '/ɪnˈvaɪrənmənt/', example: 'Protect the environment.', examplePersian: 'از محیط زیست محافظت کنید.', category: 'nature', level: 'B1' },
  { id: 94, english: 'Ecosystem', persian: 'اکوسیستم', persianPronunciation: 'ایکوسیستِم', pronunciation: '/ˈiːkoʊˌsɪstəm/', example: 'The ecosystem is fragile.', examplePersian: 'اکوسیستم شکننده است.', category: 'nature', level: 'B2' },
];

// === سفر ===
export const travelWords: Word[] = [
  { id: 95, english: 'Journey', persian: 'سفر', persianPronunciation: 'جِرنی', pronunciation: '/ˈdʒɜːrni/', example: 'Have a safe journey!', examplePersian: 'سفر بی‌خطری!', category: 'travel', level: 'A2' },
  { id: 96, english: 'Destination', persian: 'مقصد', persianPronunciation: 'دِستینِیشن', pronunciation: '/ˌdɛstɪˈneɪʃən/', example: 'What is your destination?', examplePersian: 'مقصدتان کجاست؟', category: 'travel', level: 'B1' },
  { id: 97, english: 'Passport', persian: 'گذرنامه', persianPronunciation: 'پاسپورت', pronunciation: '/ˈpæspɔːrt/', example: 'I need my passport.', examplePersian: 'به گذرنامه‌ام نیاز دارم.', category: 'travel', level: 'A2' },
  { id: 98, english: 'Adventure', persian: 'ماجراجویی', persianPronunciation: 'اَدوِنچِر', pronunciation: '/ədˈvɛntʃər/', example: 'Life is an adventure.', examplePersian: 'زندگی یک ماجراجویی است.', category: 'travel', level: 'B1' },
  { id: 99, english: 'Itinerary', persian: 'برنامه سفر', persianPronunciation: 'آی‌تینِرِری', pronunciation: '/aɪˈtɪnərɛri/', example: 'Check the itinerary.', examplePersian: 'برنامه سفر را بررسی کن.', category: 'travel', level: 'C1' },
];

// === اماکن ===
export const placesWords: Word[] = [
  { id: 100, english: 'City', persian: 'شهر', persianPronunciation: 'سیتی', pronunciation: '/ˈsɪti/', example: 'Tehran is a big city.', examplePersian: 'تهران شهر بزرگی است.', category: 'places', level: 'A1' },
  { id: 101, english: 'Country', persian: 'کشور', persianPronunciation: 'کانتِری', pronunciation: '/ˈkʌntri/', example: 'Iran is a beautiful country.', examplePersian: 'ایران کشور زیبایی است.', category: 'places', level: 'A1' },
  { id: 102, english: 'Library', persian: 'کتابخانه', persianPronunciation: 'لایبرِری', pronunciation: '/ˈlaɪbrəri/', example: 'I study at the library.', examplePersian: 'من در کتابخانه مطالعه می‌کنم.', category: 'places', level: 'A2' },
  { id: 103, english: 'Museum', persian: 'موزه', persianPronunciation: 'میوزیوم', pronunciation: '/mjuːˈziːəm/', example: 'We visited the museum.', examplePersian: 'ما از موزه بازدید کردیم.', category: 'places', level: 'A2' },
  { id: 104, english: 'Monument', persian: 'یادمان', persianPronunciation: 'مانیومِنت', pronunciation: '/ˈmɒnjumənt/', example: 'This monument is ancient.', examplePersian: 'این یادمان باستانی است.', category: 'places', level: 'B2' },
];

// === آموزش ===
export const educationWords: Word[] = [
  { id: 105, english: 'School', persian: 'مدرسه', persianPronunciation: 'اسکول', pronunciation: '/skuːl/', example: 'I go to school.', examplePersian: 'من به مدرسه می‌روم.', category: 'education', level: 'A1' },
  { id: 106, english: 'Teacher', persian: 'معلم', persianPronunciation: 'تیچِر', pronunciation: '/ˈtiːtʃər/', example: 'My teacher is kind.', examplePersian: 'معلم من مهربان است.', category: 'education', level: 'A1' },
  { id: 107, english: 'University', persian: 'دانشگاه', persianPronunciation: 'یونیوِرسیتی', pronunciation: '/ˌjuːnɪˈvɜːrsɪti/', example: 'She studies at university.', examplePersian: 'او در دانشگاه تحصیل می‌کند.', category: 'education', level: 'A2' },
  { id: 108, english: 'Knowledge', persian: 'دانش', persianPronunciation: 'نالِج', pronunciation: '/ˈnɒlɪdʒ/', example: 'Knowledge is power.', examplePersian: 'دانش قدرت است.', category: 'education', level: 'B1' },
  { id: 109, english: 'Research', persian: 'تحقیق', persianPronunciation: 'ریسِرچ', pronunciation: '/rɪˈsɜːrtʃ/', example: 'She does medical research.', examplePersian: 'او تحقیقات پزشکی انجام می‌دهد.', category: 'education', level: 'B1' },
  { id: 110, english: 'Thesis', persian: 'پایان‌نامه', persianPronunciation: 'تیزیس', pronunciation: '/ˈθiːsɪs/', example: 'He is writing his thesis.', examplePersian: 'او در حال نوشتن پایان‌نامه‌اش است.', category: 'education', level: 'B2' },
];

// === تجارت ===
export const businessWords: Word[] = [
  { id: 111, english: 'Meeting', persian: 'جلسه', persianPronunciation: 'میتینگ', pronunciation: '/ˈmiːtɪŋ/', example: 'We have a meeting at 3.', examplePersian: 'ساعت ۳ جلسه داریم.', category: 'business', level: 'A2' },
  { id: 112, english: 'Colleague', persian: 'همکار', persianPronunciation: 'کالیگ', pronunciation: '/ˈkɒliːɡ/', example: 'She is my colleague.', examplePersian: 'او همکار من است.', category: 'business', level: 'B1' },
  { id: 113, english: 'Negotiation', persian: 'مذاکره', persianPronunciation: 'نِگوشیِیشن', pronunciation: '/nɪˌɡoʊʃiˈeɪʃən/', example: 'The negotiation was successful.', examplePersian: 'مذاکره موفقیت‌آمیز بود.', category: 'business', level: 'B2' },
  { id: 114, english: 'Entrepreneur', persian: 'کارآفرین', persianPronunciation: 'اِنتِرِپِرِنِر', pronunciation: '/ˌɒntrəprəˈnɜːr/', example: 'He is a successful entrepreneur.', examplePersian: 'او کارآفرین موفقی است.', category: 'business', level: 'C1' },
  { id: 115, english: 'Revenue', persian: 'درآمد', persianPronunciation: 'رِوِنیو', pronunciation: '/ˈrɛvənjuː/', example: 'Revenue increased this year.', examplePersian: 'درآمد امسال افزایش یافت.', category: 'business', level: 'B2' },
];

// === فناوری ===
export const technologyWords: Word[] = [
  { id: 116, english: 'Computer', persian: 'کامپیوتر', persianPronunciation: 'کامپیوتِر', pronunciation: '/kəmˈpjuːtər/', example: 'I use a computer daily.', examplePersian: 'من روزانه از کامپیوتر استفاده می‌کنم.', category: 'technology', level: 'A1' },
  { id: 117, english: 'Internet', persian: 'اینترنت', persianPronunciation: 'اینتِرنِت', pronunciation: '/ˈɪntərˌnɛt/', example: 'The internet is slow.', examplePersian: 'اینترنت کند است.', category: 'technology', level: 'A1' },
  { id: 118, english: 'Software', persian: 'نرم‌افزار', persianPronunciation: 'سافتوِر', pronunciation: '/ˈsɒftwɛr/', example: 'I develop software.', examplePersian: 'من نرم‌افزار توسعه می‌دهم.', category: 'technology', level: 'A2' },
  { id: 119, english: 'Algorithm', persian: 'الگوریتم', persianPronunciation: 'الگوریذِم', pronunciation: '/ˈælɡərɪðəm/', example: 'The algorithm is efficient.', examplePersian: 'الگوریتم کارآمد است.', category: 'technology', level: 'B2' },
  { id: 120, english: 'Artificial', persian: 'مصنوعی', persianPronunciation: 'آرتیفیشِل', pronunciation: '/ˌɑːrtɪˈfɪʃəl/', example: 'Artificial intelligence is growing.', examplePersian: 'هوش مصنوعی در حال رشد است.', category: 'technology', level: 'B1' },
  { id: 121, english: 'Cybersecurity', persian: 'امنیت سایبری', persianPronunciation: 'سایبِرسِکیوریتی', pronunciation: '/ˌsaɪbərsɪˈkjʊrɪti/', example: 'Cybersecurity is crucial.', examplePersian: 'امنیت سایبری حیاتی است.', category: 'technology', level: 'C1' },
];

// === ارتباطات ===
export const communicationWords: Word[] = [
  { id: 122, english: 'Call', persian: 'تماس', persianPronunciation: 'کال', pronunciation: '/kɔːl/', example: 'I will call you.', examplePersian: 'با تو تماس می‌گیرم.', category: 'communication', level: 'A1' },
  { id: 123, english: 'Message', persian: 'پیام', persianPronunciation: 'مِسیج', pronunciation: '/ˈmɛsɪdʒ/', example: 'Send me a message.', examplePersian: 'برایم پیام بفرست.', category: 'communication', level: 'A1' },
  { id: 124, english: 'Conversation', persian: 'مکالمه', persianPronunciation: 'کانوِرسِیشن', pronunciation: '/ˌkɒnvərˈseɪʃən/', example: 'We had a long conversation.', examplePersian: 'ما مکالمه طولانی داشتیم.', category: 'communication', level: 'B1' },
  { id: 125, english: 'Communicate', persian: 'ارتباط برقرار کردن', persianPronunciation: 'کامیونیکِیت', pronunciation: '/kəˈmjuːnɪkeɪt/', example: 'We communicate by email.', examplePersian: 'ما با ایمیل ارتباط برقرار می‌کنیم.', category: 'communication', level: 'B1' },
];

// === هنر ===
export const artsWords: Word[] = [
  { id: 126, english: 'Music', persian: 'موسیقی', persianPronunciation: 'میوزیک', pronunciation: '/ˈmjuːzɪk/', example: 'I love music.', examplePersian: 'من عاشق موسیقی هستم.', category: 'arts', level: 'A1' },
  { id: 127, english: 'Painting', persian: 'نقاشی', persianPronunciation: 'پِینتینگ', pronunciation: '/ˈpeɪntɪŋ/', example: 'She enjoys painting.', examplePersian: 'او از نقاشی لذت می‌برد.', category: 'arts', level: 'A2' },
  { id: 128, english: 'Exhibition', persian: 'نمایشگاه', persianPronunciation: 'اِگزیبیشِن', pronunciation: '/ˌɛksɪˈbɪʃən/', example: 'The art exhibition is open.', examplePersian: 'نمایشگاه هنر باز است.', category: 'arts', level: 'B1' },
  { id: 129, english: 'Masterpiece', persian: 'شاهکار', persianPronunciation: 'مَستِربیِس', pronunciation: '/ˈmæstərpiːs/', example: 'This is a masterpiece.', examplePersian: 'این یک شاهکار است.', category: 'arts', level: 'B2' },
];

// === ورزش ===
export const sportsWords: Word[] = [
  { id: 130, english: 'Football', persian: 'فوتبال', persianPronunciation: 'فوتبال', pronunciation: '/ˈfʊtbɔːl/', example: 'I play football.', examplePersian: 'من فوتبال بازی می‌کنم.', category: 'sports', level: 'A1' },
  { id: 131, english: 'Exercise', persian: 'ورزش', persianPronunciation: 'اِکسِرسایز', pronunciation: '/ˈɛksərsaɪz/', example: 'Daily exercise is important.', examplePersian: 'ورزش روزانه مهم است.', category: 'sports', level: 'A2' },
  { id: 132, english: 'Champion', persian: 'قهرمان', persianPronunciation: 'چَمپیِن', pronunciation: '/ˈtʃæmpiən/', example: 'He is the champion.', examplePersian: 'او قهرمان است.', category: 'sports', level: 'A2' },
  { id: 133, english: 'Competition', persian: 'مسابقه', persianPronunciation: 'کامپِتیشن', pronunciation: '/ˌkɒmpɪˈtɪʃən/', example: 'The competition was tough.', examplePersian: 'مسابقه سخت بود.', category: 'sports', level: 'B1' },
  { id: 134, english: 'Endurance', persian: 'استقامت', persianPronunciation: 'ایندیورِنس', pronunciation: '/ɪnˈdjʊərəns/', example: 'Marathon requires endurance.', examplePersian: 'ماراتن استقامت می‌خواهد.', category: 'sports', level: 'B2' },
];
