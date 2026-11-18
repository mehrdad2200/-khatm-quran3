/* زبان برنامه: انگلیسی و عربی (ترجمهٔ رابط کاربری؛ متن قرآن/حدیث/دعا همان می‌ماند) */
const LG=(function(){
const L=cfg.lang;if(L!=="en"&&L!=="ar")return{on:false};
const E=L==="en",I=E?1:2;
/* عبارت‌ها: فارسی | انگلیسی | عربی  (# = عدد) */
const P=`امروز|Today|اليوم
برنامه|Plan|البرنامج
تقویم|Calendar|التقويم
بیشتر|More|المزيد
تنظیمات|Settings|الإعدادات
برنامهٔ من|My plan|برنامجي
همه|All|الكل
نخوانده|Unread|غير مقروء
خوانده‌شده|Read|مقروء
بخش خوانده‌شده|Portion read|الجزء المقروء
بخش امروز شما|Your portion today|وردك اليوم
بخش آن روز شما|Your portion for that day|وردك لذلك اليوم
روز پیاپی|Day streak|أيام متتالية
روز تا پایان ختم|Days until the end|يوم حتى نهاية الختم
روزهای پیش رو|Coming days|الأيام القادمة
السلام علیکم|Peace be upon you|السلام عليكم
امروز چه بخوانیم؟|What should we read today?|ماذا نقرأ اليوم؟
حدیث روز · امام حسین|Hadith of the day|حديث اليوم
دعای توسل|Dua al-Tawassul|دعاء التوسل
یادآور روزانه|Daily reminder|تذكير يومي
فعال کن|Enable|فعّل
بعداً|Later|لاحقاً
شروع خواندن|Start reading|ابدأ القراءة
خواندم|I have read it|قرأت
بستن|Close|إغلاق
بعدی|Next|التالي
قبلی|Previous|السابق
ذخیره|Save|حفظ
حذف|Delete|حذف
افزودن|Add|إضافة
ثبت|Register|تسجيل
کپی|Copy|نسخ
تغییر|Change|تغيير
انصراف|Cancel|إلغاء
بله|Yes|نعم
خیر|No|لا
فعال|Active|مفعّل
خاموش|Off|إيقاف
خودکار|Auto|تلقائي
عادی|Normal|عادي
بزرگ|Large|كبير
خیلی بزرگ|Very large|كبير جداً
ترجمه|Translation|الترجمة
گوش دادن|Listen|استماع
گوش دادن به تلاوت|Listen to recitation|الاستماع إلى التلاوة
شنیدن|Listening|الاستماع
تکرار|Repeat|تكرار
ماه|Month|الشهر
سال|Year|السنة
روز|Day|اليوم
تاریخ|Date|التاريخ
ساعت|Time|الساعة
مکان|Place|المكان
نام|Name|الاسم
سن|Age|العمر
نوع|Type|النوع
هفته|Week|أسبوع
امسال|This year|هذه السنة
این ماه|This month|هذا الشهر
ماه قبل|Previous month|الشهر السابق
ماه بعد|Next month|الشهر التالي
جزءها|Juz|الأجزاء
سوره‌ها|Surahs|السور
قرآن کامل|Full Quran|القرآن الكامل
قرآن کامل (سوره‌ها و جزءها)|Full Quran (surahs and juz)|القرآن الكامل (السور والأجزاء)
احادیث|Hadiths|الأحاديث
دعاها|Duas|الأدعية
دعاها و زیارات|Duas and ziyarat|الأدعية والزيارات
زیارات|Ziyarat|الزيارات
آموزش|Tutorial|التعليم
راهنما و نکات ختم|Guide and khatm tips|الدليل ونصائح الختم
تسبیح‌شمار|Tasbih counter|عدّاد التسبيح
همهٔ ردیف‌ها|All rows|جميع الصفوف
دربارهٔ ما|About us|من نحن
اشتراک‌گذاری پیشرفت (استوری)|Share progress (story)|مشاركة التقدم (ستوري)
ارتباط با ما|Contact us|اتصل بنا
بازگشت|Back|رجوع
‹ بازگشت|‹ Back|‹ رجوع
ختم قرآن|Khatm of the Quran|ختم القرآن
ختم قرآن؛ هر روز یک بخش|Khatm Quran – one portion every day|ختم القرآن – كل يوم جزء
راهنما، آموزش، دعا، حدیث و تسبیح|Guide, tutorials, duas, hadith and tasbih|الدليل والتعليم والأدعية والأحاديث والتسبيح
جست‌وجو در قرآن|Search the Quran|البحث في القرآن
در متن عربی و ترجمهٔ فارسی؛ با یا بدون اعراب|In Arabic text and translation; with or without diacritics|في النص العربي والترجمة، بتشكيل أو بدونه
عربی و ترجمه|Arabic & translation|العربية والترجمة
فقط عربی|Arabic only|العربية فقط
فقط ترجمه|Translation only|الترجمة فقط
کلمه یا عبارت، مثلاً: صبر یا الصابرین|Word or phrase, e.g. patience|كلمة أو عبارة، مثل: الصابرين
حفظ و مرور|Memorize & review|الحفظ والمراجعة
حالت حفظ|Memorization mode|وضع الحفظ
آزمون حفظ|Memorization quiz|اختبار الحفظ
شروع آزمون|Start quiz|ابدأ الاختبار
آیات سجده|Verses of prostration|آيات السجدة
سجدهٔ واجب|Obligatory prostration|سجدة واجبة
سجدهٔ مستحب|Recommended prostration|سجدة مستحبة
اوقات شرعی|Prayer times|أوقات الصلاة
اوقات شرعی و قبله|Prayer times & Qibla|أوقات الصلاة والقبلة
جهت قبله|Qibla direction|اتجاه القبلة
اذان صبح|Fajr|أذان الفجر
طلوع آفتاب|Sunrise|شروق الشمس
اذان ظهر|Dhuhr|أذان الظهر
عصر|Asr|العصر
غروب آفتاب|Sunset|غروب الشمس
اذان مغرب|Maghrib|أذان المغرب
عشا|Isha|العشاء
نیمه‌شب شرعی|Islamic midnight|منتصف الليل الشرعي
تشخیص با GPS|Detect with GPS|تحديد بالـGPS
روزه‌های مستحب|Recommended fasts|الصيام المستحب
روزه‌های مستحب و ممنوع|Recommended & forbidden fasts|الصيام المستحب والممنوع
قضای نماز و روزه|Missed prayers & fasts|قضاء الصلاة والصيام
نماز صبح|Fajr prayer|صلاة الفجر
نماز ظهر|Dhuhr prayer|صلاة الظهر
نماز عصر|Asr prayer|صلاة العصر
نماز مغرب|Maghrib prayer|صلاة المغرب
نماز عشا|Isha prayer|صلاة العشاء
روزه (روز)|Fasts (days)|الصيام (أيام)
مقدار اولیه|Initial value|القيمة الأولية
جلسات ختم|Khatm gatherings|مجالس الختم
جلسهٔ جدید|New gathering|مجلس جديد
ثبت جلسه|Save gathering|حفظ المجلس
جلسه‌های پیش‌رو|Upcoming gatherings|المجالس القادمة
گذشته|Past|السابقة
کارت‌ساز|Card maker|صانع البطاقات
کارت‌ساز (تبریک، تسلیت، دعوت)|Card maker (greetings, condolences, invitations)|صانع البطاقات (تهنئة، تعزية، دعوة)
ساخت کارت|Create card|إنشاء البطاقة
تبریک مناسبت|Occasion greeting|تهنئة بمناسبة
تسلیت|Condolence|تعزية
یادبود|Memorial|ذكرى
دعوت جلسه|Gathering invitation|دعوة إلى مجلس
متن دلخواه|Custom text|نص مخصص
یادآور مناسبت‌ها|Occasion reminders|تذكير بالمناسبات
چاپ ردیف‌ها (PDF)|Print rows (PDF)|طباعة الصفوف (PDF)
چاپ ردیف‌ها|Print rows|طباعة الصفوف
چاپ / ذخیره PDF|Print / Save PDF|طباعة / حفظ PDF
فهرست ردیف‌ها|Row list|قائمة الصفوف
متن ردیف‌ها (جزوه)|Rows text (booklet)|نص الصفوف (كتيّب)
پس‌زمینه، زبان و ظاهر|Background, language & appearance|الخلفية واللغة والمظهر
ظاهر و زبان|Appearance & language|المظهر واللغة
زبان برنامه|App language|لغة التطبيق
فارسی|فارسی|فارسی
تصویر پس‌زمینهٔ برنامه|App background image|صورة خلفية التطبيق
انتخاب عکس|Choose photo|اختيار صورة
رنگ‌بندی|Colour themes|الألوان
انتقال به گوشی دیگر (QR)|Transfer to another phone (QR)|نقل إلى هاتف آخر (QR)
انتقال به گوشی دیگر|Transfer to another phone|نقل إلى هاتف آخر
ساخت QR از اطلاعات من|Create QR from my data|إنشاء QR من بياناتي
اسکن QR (روی گوشی مقصد)|Scan QR (on the new phone)|مسح QR (على الهاتف الجديد)
پشتیبان خودکار|Automatic backup|نسخ احتياطي تلقائي
همین حالا یک نسخه بگیر|Back up now|خذ نسخة الآن
دریافت فایل|Download file|تنزيل الملف
بازگردانی|Restore|استعادة
ظاهر و تم|Appearance & theme|المظهر والسمة
تم|Theme|السمة
حالت|Mode|الوضع
قلم‌ها|Fonts|الخطوط
حرم|Haram|الحرم
فیروزه|Turquoise|الفيروزي
عاشورا|Ashura|عاشوراء
فاطمیه|Fatemiyya|الفاطمية
شب قدر|Night of Qadr|ليلة القدر
نور|Light|النور
لاجورد|Lapis|اللازورد
گل‌سرخ|Rose|الورد
زیتون|Olive|الزيتون
عنبر|Amber|العنبر
مه|Mist|الضباب
ارغوانی|Purple|الأرجواني
کاربران این دستگاه|Users on this device|مستخدمو هذا الجهاز
افزودن کاربر|Add user|إضافة مستخدم
تغییر کاربر|Switch user|تبديل المستخدم
پشتیبان این کاربر|Back up this user|نسخ احتياطي لهذا المستخدم
پشتیبان همهٔ کاربران|Back up all users|نسخ احتياطي لجميع المستخدمين
بازیابی از فایل|Restore from file|استعادة من ملف
ساخت فایل پشتیبان|Create backup file|إنشاء ملف نسخ احتياطي
پاک کردن پیشرفت|Clear progress|مسح التقدم
پاک کردن آمار تسبیح|Clear tasbih stats|مسح إحصاءات التسبيح
بازنشانی کامل و حذف همهٔ داده‌ها|Full reset and delete all data|إعادة ضبط كاملة وحذف كل البيانات
ریست تنظیمات و بازنشانی|Reset & restore|إعادة الضبط
فعال‌سازی اعلان|Enable notifications|تفعيل الإشعارات
ساعت یادآوری|Reminder time|وقت التذكير
تاریخ شروع ختم گروهی (سال · ماه · روز)|Group khatm start date (year · month · day)|تاريخ بدء الختم الجماعي
شمارهٔ ردیف شما چند است؟ (# تا #)|What is your row number? (# to #)|ما رقم صفّك؟ (# إلى #)
مشخصات و شروع ختم|Details & start of khatm|بيانات وبدء الختم
نام هیئت، گروه یا خانواده|Name of group or family|اسم المجموعة أو العائلة
قاری قرآن|Quran reciter|قارئ القرآن
مترجم (متن فارسی)|Translator (Persian text)|المترجم
سرعت پخش|Playback speed|سرعة التشغيل
اندازهٔ متن قرآن|Quran text size|حجم نص القرآن
اندازهٔ نوشته‌های برنامه|App text size|حجم نصوص التطبيق
قلم عربی قرآن|Quran Arabic font|خط القرآن العربي
قلم فارسی (متن برنامه و ترجمه‌ها)|Persian font (app text & translations)|الخط الفارسي
تمام‌صفحه|Fullscreen|ملء الشاشة
روشن ماندن صفحه|Keep screen on|إبقاء الشاشة مضاءة
همیشه روشن|Always on|دائماً
مرتبهٔ معنوی: تازه‌وارد|Level: Beginner|المستوى: مبتدئ
مجموع ذکرهای شما:|Your total dhikrs:|مجموع أذكارك:
آمار ذکرها|Dhikr stats|إحصاءات الأذكار
ذکر دلخواه|Custom dhikr|ذكر مخصص
هدف شمارش|Count target|هدف العدّ
لرزش هنگام شمارش|Vibrate on count|اهتزاز عند العدّ
صدای کلیک|Click sound|صوت النقر
صلوات|Salawat|الصلوات
استغفار|Istighfar|الاستغفار
فرج|Faraj|الفرج
تسبیحات حضرت زهرا (س)|Tasbih of Lady Fatima (s)|تسبيح الزهراء (ع)
سبحان الله و بحمده|Subhan Allah wa bihamdih|سبحان الله وبحمده
لا اله الا الله|La ilaha illa Allah|لا إله إلا الله
عید نوروز|Nowruz|عيد النوروز
تولد|Birthday|عيد ميلاد
درگذشت|Passing|الوفاة
سالگرد ازدواج|Wedding anniversary|ذكرى الزواج
مناسبت|Occasion|مناسبة
رویدادهای شخصی|Personal events|أحداث شخصية
رویداد شخصی|Personal event|حدث شخصي
مناسبت‌ها|Occasions|المناسبات
ماه‌ها و مناسبت‌ها|Months & occasions|الأشهر والمناسبات
در «تقویم» مناسبت‌ها، احکام روز و رویدادهای شخصی را ببینید.|See occasions, rulings and personal events in “Calendar”.|شاهد المناسبات والأحكام والأحداث الشخصية في «التقويم».
اعلان هنگام باز کردن برنامه|Notify when the app opens|إشعار عند فتح التطبيق
دریافت فایل تقویم|Get calendar file|تنزيل ملف التقويم
۱۴ روز آینده|Next 14 days|الأيام الـ١٤ القادمة
کارکرد برنامه|How the app works|طريقة عمل التطبيق
نکات مهم|Important notes|ملاحظات مهمة
کار با برنامه|Using the app|استخدام التطبيق
آداب تلاوت|Etiquette of recitation|آداب التلاوة
جستجوی سوره (نام یا شماره)|Search surah (name or number)|ابحث عن سورة (اسم أو رقم)
جستجو در احادیث|Search hadiths|البحث في الأحاديث
جستجوی دعا یا زیارت|Search dua or ziyarat|ابحث عن دعاء أو زيارة
علاقه‌مندی‌ها|Favourites|المفضلة
علاقه‌مندی|Favourite|المفضلة
متن‌های من|My texts|نصوصي
افزودن حدیث دلخواه|Add custom hadith|إضافة حديث مخصص
دریافت حدیث تازه|Get new hadith|الحصول على حديث جديد
دانلود آفلاین|Offline download|تنزيل للاستخدام دون اتصال
مدیریت دانلود آفلاین|Manage offline downloads|إدارة التنزيلات
ذخیرهٔ صوت برای آفلاین|Save audio for offline|حفظ الصوت دون اتصال
نصب برنامه|Install app|تثبيت التطبيق
خروج|Exit|خروج
نیکی|Good|جيد
جزء #|Juz #|الجزء #
ردیف #|Row #|الصف #
ردیف # · امروز|Row # · Today|الصف # · اليوم
آیه|Verse|آية
آیهٔ بعدی|Next verse|الآية التالية
نام سوره|Surah name|اسم السورة
ترکیبی|Mixed|مختلط
بخش امروز|Today's portion|ورد اليوم
جزء ۳۰|Juz 30|الجزء ٣٠
کل قرآن|Entire Quran|القرآن كله
محدودهٔ آیه‌ها|Range of verses|نطاق الآيات
نوع پرسش|Question type|نوع السؤال
پایان آزمون|Quiz finished|انتهى الاختبار
آزمون جدید|New quiz|اختبار جديد
پنهان‌سازی|Hide text|إخفاء النص
پنهان‌کردن عربی|Hide Arabic|إخفاء العربية
عربی و ترجمه|Arabic & translation|العربية والترجمة
بدون تکرار|No repeat|بدون تكرار
تکرار آیه|Repeat verse|تكرار الآية
تکرار کل بخش|Repeat whole portion|تكرار الجزء كله
حالت حفظ و تکرار|Memorization & repeat|الحفظ والتكرار
تعداد تکرار هر آیه|Repeats per verse|عدد تكرار كل آية
چگونه حفظ کنیم؟|How to memorize?|كيف نحفظ؟
باز کردن بخشی برای حفظ|Open a portion to memorize|فتح جزء للحفظ
رفتن به آزمون حفظ|Go to the memorization quiz|الانتقال إلى اختبار الحفظ
یکی اضافه|Add one|أضف واحداً
یکی کم|Subtract one|اطرح واحداً
مکهٔ مکرمه|Mecca|مكة المكرمة
مدینهٔ منوره|Medina|المدينة المنورة
تهران|Tehran|طهران
مشهد|Mashhad|مشهد
اصفهان|Isfahan|أصفهان
شیراز|Shiraz|شيراز
تبریز|Tabriz|تبريز
قم|Qom|قم
کربلا|Karbala|كربلاء
نجف|Najaf|النجف
بغداد|Baghdad|بغداد
موقعیت من / مختصات دلخواه|My location / custom coordinates|موقعي / إحداثيات مخصصة
مثلاً منزل آقای احمدی|e.g. Mr. Ahmadi's house|مثلاً منزل السيد أحمدي
منزل|Home|المنزل
مسجد|Mosque|المسجد
حسینیه|Husayniyya|الحسينية
هیئت|Hayat|الهيئة
توضیح (اختیاری)|Note (optional)|ملاحظة (اختياري)
عنوان|Title|العنوان
متن|Text|النص
حرم|Haram|الحرم
✦ شب قدر|✦ Night of Qadr|✦ ليلة القدر
✦ آغاز سال قمری|✦ Islamic New Year|✦ بداية السنة الهجرية
✦ عاشورای حسینی|✦ Ashura|✦ عاشوراء الحسيني
✦ تاسوعای حسینی|✦ Tasua|✦ تاسوعاء
✦ اربعین حسینی|✦ Arbaeen|✦ الأربعين الحسيني
✦ عید سعید فطر|✦ Eid al-Fitr|✦ عيد الفطر
✦ عید سعید قربان|✦ Eid al-Adha|✦ عيد الأضحى
✦ عید سعید غدیر خم|✦ Eid al-Ghadir|✦ عيد الغدير
✦ عید مبعث|✦ Eid al-Mab'ath|✦ عيد المبعث
✦ روز عرفه|✦ Day of Arafah|✦ يوم عرفة
✦ آغاز ماه مبارک رمضان|✦ Start of Ramadan|✦ بداية شهر رمضان
✦ ولادت امام زمان (عج)|✦ Birth of Imam al-Mahdi (aj)|✦ ولادة الإمام المهدي (عج)
✦ ولادت امام حسین (ع)|✦ Birth of Imam Husayn (a)|✦ ولادة الإمام الحسين (ع)
✦ ولادت امیرالمؤمنین علی (ع)|✦ Birth of Imam Ali (a)|✦ ولادة أمير المؤمنين علي (ع)
✦ شهادت حضرت زهرا (س)|✦ Martyrdom of Lady Fatima (s)|✦ شهادة السيدة الزهراء (ع)
✦ ولادت حضرت زهرا (س)|✦ Birth of Lady Fatima (s)|✦ ولادة السيدة الزهراء (ع)
✦ ضربت خوردن امام علی (ع) · شب قدر|✦ Imam Ali (a) struck · Night of Qadr|✦ ضربة الإمام علي (ع) · ليلة القدر
✦ شهادت امام علی (ع) · شب قدر|✦ Martyrdom of Imam Ali (a) · Night of Qadr|✦ شهادة الإمام علي (ع) · ليلة القدر
آغاز سال قمری|Islamic New Year|بداية السنة الهجرية
تاسوعای حسینی|Tasua|تاسوعاء
عاشورای حسینی|Ashura|عاشوراء الحسيني
اربعین حسینی|Arbaeen|الأربعين الحسيني
عید سعید فطر|Eid al-Fitr|عيد الفطر
عید سعید قربان|Eid al-Adha|عيد الأضحى
عید سعید غدیر خم|Eid al-Ghadir|عيد الغدير
روز عرفه|Day of Arafah|يوم عرفة
شب چهارشنبه|Wednesday night|ليلة الأربعاء
ولادت امام زمان (عج)|Birth of Imam al-Mahdi (aj)|ولادة الإمام المهدي (عج)
ولادت امام حسین (ع)|Birth of Imam Husayn (a)|ولادة الإمام الحسين (ع)
شهادت حضرت زهرا (س)|Martyrdom of Lady Fatima (s)|شهادة السيدة الزهراء (ع)
ولادت حضرت زهرا (س)|Birth of Lady Fatima (s)|ولادة السيدة الزهراء (ع)
ولادت امیرالمؤمنین علی (ع)|Birth of Imam Ali (a)|ولادة أمير المؤمنين علي (ع)
ولادت پیامبر اکرم (ص) و امام صادق (ع)|Birth of the Prophet (s) and Imam Sadiq (a)|ولادة النبي الأكرم (ص) والإمام الصادق (ع)
شب قدر|Night of Qadr|ليلة القدر
زیارت عاشورا|Ziyarat Ashura|زيارة عاشوراء
دعای کمیل|Dua Kumayl|دعاء كميل
دعای ندبه|Dua Nudba|دعاء الندبة
دعای توسل|Dua Tawassul|دعاء التوسل
دعای فرج|Dua al-Faraj|دعاء الفرج
یا حسین|Ya Husayn|يا حسين
یا صاحب الزمان|Ya Sahib al-Zaman|يا صاحب الزمان
اللهم عجل لولیک الفرج|O Allah, hasten the reappearance of Your guardian|اللهم عجل لوليك الفرج
شروع|Start|ابدأ
پایان|End|النهاية
کپی لینک من|Copy my link|نسخ رابطي
انتشار|Share|مشاركة
اشتراک در استوری|Share to story|مشاركة في الستوري
ذخیره تصویر|Save image|حفظ الصورة
طرح|Design|التصميم
متن عربی|Arabic text|النص العربي
ترجمهٔ فارسی|Persian translation|الترجمة الفارسية
نمایش نام|Show name|إظهار الاسم
تصویر پس‌زمینه|Background image|صورة الخلفية
حذف عکس|Remove photo|حذف الصورة
تیرگی روی عکس|Darkness over photo|تعتيم الصورة
افزودن به‌عنوان کاربر جدید|Add as new user|إضافة كمستخدم جديد
جایگزین کاربر فعلی|Replace current user|استبدال المستخدم الحالي
دریافت اطلاعات|Receive data|استلام البيانات
در حال بارگیری ترجمه…|Loading translation…|جارٍ تحميل الترجمة…
موردی پیدا نشد|No results|لا توجد نتائج
# آیه یافت شد|# verses found|تم العثور على # آية
# روز دیگر|# days left|بعد # يوم
# ساعت و # دقیقه|# h # min|# ساعة و # دقيقة
# روز تا سالگرد بعدی|# days to next anniversary|# يوم حتى الذكرى القادمة
# روز تا پایان ختم|# days until the end|# يوم حتى نهاية الختم
# روز آینده|# days ahead|# يوم قادم
مناسبت‌های # روز آینده|Occasions in the next # days|مناسبات الأيام الـ# القادمة
فهرست # روز آینده|List of the next # days|قائمة الأيام الـ# القادمة
هفت روز اخیر · # روز ذکر ثبت شده|Last 7 days · # days recorded|آخر ٧ أيام · # يوم مسجل
ردیف # · # جمادی‌الثانی|Row #|الصف #
جزء #|Juz #|الجزء #
فردا|Tomorrow|غداً
دیروز|Yesterday|أمس`;
const D={};P.split("\n").forEach(l=>{const a=l.split("|");if(a.length>=3)D[a[0]]=[a[1],a[2]]});
/* کلمه‌ها (برای عبارت‌های پویا) */
const W={"سورهٔ":["Surah","سورة"],"الی":["to","إلى"],"آیهٔ":["verse","آية"],"آیه":["verse","آية"],"ردیف":["Row","الصف"],"جزء":["Juz","الجزء"],"روز":["day","يوم"],"دیگر":["left","بعد"],"قمری":["AH","هجري"],"ساعت":["h","ساعة"],"دقیقه":["min","دقيقة"],"و":["and","و"],"تا":["to","حتى"],"از":["from","من"],"امروز":["Today","اليوم"],"فردا":["Tomorrow","غداً"],"مورد":["items","مورد"],"مستحب":["Recommended","مستحب"],"واجب":["Obligatory","واجب"],"حرام":["Forbidden","حرام"],"آینده":["ahead","قادم"],"بعد":["after","بعد"],"قبل":["before","قبل"],"سال":["year","سنة"],"ماه":["month","شهر"],"هفته":["week","أسبوع"],"·":["·","·"],"–":["–","–"],"—":["—","—"],"×":["×","×"],"٪":["%","٪"],"(":["(","("],")":[")",")"],":":[":",":"],"/":["/","/"],"-":["-","-"],"+":["+","+"],"−":["−","−"],"✦":["✦","✦"],"۩":["۩","۩"],"،":[",","،"]};
const ENS="Al-Fatiha,Al-Baqarah,Al-Imran,An-Nisa,Al-Ma'idah,Al-An'am,Al-A'raf,Al-Anfal,At-Tawbah,Yunus,Hud,Yusuf,Ar-Ra'd,Ibrahim,Al-Hijr,An-Nahl,Al-Isra,Al-Kahf,Maryam,Ta-Ha,Al-Anbiya,Al-Hajj,Al-Mu'minun,An-Nur,Al-Furqan,Ash-Shu'ara,An-Naml,Al-Qasas,Al-Ankabut,Ar-Rum,Luqman,As-Sajdah,Al-Ahzab,Saba,Fatir,Ya-Sin,As-Saffat,Sad,Az-Zumar,Ghafir,Fussilat,Ash-Shura,Az-Zukhruf,Ad-Dukhan,Al-Jathiyah,Al-Ahqaf,Muhammad,Al-Fath,Al-Hujurat,Qaf,Adh-Dhariyat,At-Tur,An-Najm,Al-Qamar,Ar-Rahman,Al-Waqi'ah,Al-Hadid,Al-Mujadila,Al-Hashr,Al-Mumtahanah,As-Saff,Al-Jumu'ah,Al-Munafiqun,At-Taghabun,At-Talaq,At-Tahrim,Al-Mulk,Al-Qalam,Al-Haqqah,Al-Ma'arij,Nuh,Al-Jinn,Al-Muzzammil,Al-Muddaththir,Al-Qiyamah,Al-Insan,Al-Mursalat,An-Naba,An-Nazi'at,Abasa,At-Takwir,Al-Infitar,Al-Mutaffifin,Al-Inshiqaq,Al-Buruj,At-Tariq,Al-A'la,Al-Ghashiyah,Al-Fajr,Al-Balad,Ash-Shams,Al-Layl,Ad-Duha,Ash-Sharh,At-Tin,Al-Alaq,Al-Qadr,Al-Bayyinah,Az-Zalzalah,Al-Adiyat,Al-Qari'ah,At-Takathur,Al-Asr,Al-Humazah,Al-Fil,Quraysh,Al-Ma'un,Al-Kawthar,Al-Kafirun,An-Nasr,Al-Masad,Al-Ikhlas,Al-Falaq,An-Nas".split(",");
const ENM=["Farvardin","Ordibehesht","Khordad","Tir","Mordad","Shahrivar","Mehr","Aban","Azar","Dey","Bahman","Esfand"],ARM=["فروردين","أرديبهشت","خرداد","تير","مرداد","شهريور","مهر","آبان","آذر","دي","بهمن","إسفند"];
const ENH=["Muharram","Safar","Rabi' al-Awwal","Rabi' al-Thani","Jumada al-Awwal","Jumada al-Thani","Rajab","Sha'ban","Ramadan","Shawwal","Dhu al-Qa'dah","Dhu al-Hijjah"],ARH=["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الآخرة","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة"];
const tokMap={};
try{SURA_FA.forEach((n,i)=>{if(n)tokMap[n]=E?ENS[i]:n.replace(/ی/g,"ي").replace(/ک/g,"ك")});MON.forEach((n,i)=>tokMap[n]=E?ENM[i]:ARM[i]);HM.forEach((n,i)=>{tokMap[n]=E?ENH[i]:ARH[i]})}catch(e){}
HM.forEach((n,i)=>{});
const DIG=E?"0123456789":"٠١٢٣٤٥٦٧٨٩";
const dg=s=>s.replace(/[۰-۹]/g,c=>DIG[c.charCodeAt(0)-1776]);
const hasFa=s=>/[؀-ۿ]/.test(s);
function trWords(s){const parts=s.split(/(\s+|[·\-–—()،:\/+−×٪✦۩])/);let ok=true;const out=parts.map(p=>{if(!p||/^\s+$/.test(p))return p;const q=dg(p);if(!hasFa(q))return q;const k=tokMap[p]||(W[p]&&W[p][I-1]);if(k)return k;
  if(/^\d/.test(p.replace(/[۰-۹]/g,"0"))&&0)return p;ok=false;return p});return ok?out.join(""):null}
const memo=new Map();
function tr(s){if(!s||!hasFa(s)&&!/[۰-۹]/.test(s))return s;if(memo.has(s))return memo.get(s);let r=s;const t=s.trim();
 let gm;if(D[t]){r=s.replace(t,D[t][I-1])}
 else if(gm=/^(.+) عزیز$/.exec(t)){r=s.replace(t,(E?"Dear ":"عزيزي ")+gm[1])}
 else{const nums=[];const pat=t.replace(/[۰-۹]+/g,m=>{nums.push(m);return"#"});
  if(D[pat]){let k=0;r=s.replace(t,D[pat][I-1].replace(/#/g,()=>dg(nums[k++]||"")))}
  else{const w=trWords(t);if(w!=null)r=s.replace(t,w);else r=dg(s)}}
 if(memo.size>4000)memo.clear();memo.set(s,r);return r}
const SKIP="script,style,textarea,input,select,.ar,.v .ar,.hd,.bsm,.rb .fa,.dua,.dtxt,[data-nolang]";
function skip(n){const e=n.nodeType===3?n.parentElement:n;return !e||e.closest(SKIP)||e.closest("#reader .rb")}
function doNode(n){if(n.nodeType===3){if(skip(n))return;const v=n.nodeValue,r=tr(v);if(r!==v)n.nodeValue=r}else if(n.nodeType===1){if(n.closest&&n.closest(SKIP))return;["placeholder","aria-label","title"].forEach(a=>{const v=n.getAttribute&&n.getAttribute(a);if(v){const r=tr(v);if(r!==v)n.setAttribute(a,r)}});if(n.tagName==="OPTION"&&!n.closest(".ar")){const v=n.textContent,r=tr(v);if(r!==v)n.textContent=r}
  for(const c of n.childNodes)doNode(c)}}
let busy=false;
const obs=new MutationObserver(ms=>{if(busy)return;busy=true;requestAnimationFrame(()=>{ms.forEach(m=>{if(m.type==="characterData")doNode(m.target);else m.addedNodes.forEach(doNode)});busy=false})});
function start(){document.documentElement.lang=E?"en":"ar";document.documentElement.setAttribute("data-lang",L);doNode(document.body);obs.observe(document.body,{childList:true,subtree:true,characterData:true});document.title=E?"Khatm Quran":"ختم القرآن"}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",start);else start();
return{on:true,tr}})();
ACT["lg-set"]=t=>{cfg.lang=t.dataset.v;save();location.reload()};
