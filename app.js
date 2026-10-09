        // --- 1. قائمة اللغات الشاملة الموزعة عالمياً ---
        const ALL_LANGUAGES = [
            { code: 'ar', name: 'العربية (Arabic)' },
            { code: 'en', name: 'English (English)' },
            { code: 'es', name: 'Español (Spanish)' },
            { code: 'fr', name: 'Français (French)' },
            { code: 'de', name: 'Deutsch (German)' },
            { code: 'it', name: 'Italiano (Italian)' },
            { code: 'pt', name: 'Português (Portuguese)' },
            { code: 'ru', name: 'Русский (Russian)' },
            { code: 'zh', name: '中文 (Chinese)' },
            { code: 'ja', name: '日本語 (Japanese)' },
            { code: 'ko', name: '한국어 (Korean)' },
            { code: 'tr', name: 'Türkçe (Turkish)' },
            { code: 'fa', name: 'فارسی (Persian)' },
            { code: 'ur', name: 'اردو (Urdu)' },
            { code: 'hi', name: 'हिन्दी (Hindi)' },
            { code: 'bn', name: 'বাংলা (Bengali)' },
            { code: 'id', name: 'Bahasa Indonesia' },
            { code: 'ms', name: 'Bahasa Melayu' },
            { code: 'nl', name: 'Nederlands (Dutch)' },
            { code: 'pl', name: 'Polski (Polish)' },
            { code: 'sv', name: 'Svenska (Swedish)' },
            { code: 'uk', name: 'Українська (Ukrainian)' },
            { code: 'el', name: 'Ελληνικά (Greek)' },
            { code: 'he', name: 'עברית (Hebrew)' },
            { code: 'ro', name: 'Română (Romanian)' },
            { code: 'hu', name: 'Magyar (Hungarian)' },
            { code: 'cs', name: 'Čeština (Czech)' },
            { code: 'th', name: 'ไทย (Thai)' },
            { code: 'vi', name: 'Tiếng Việt (Vietnamese)' },
            { code: 'sw', name: 'Kiswahili (Swahili)' },
            { code: 'am', name: 'አማርኛ (Amharic)' },
            { code: 'ha', name: 'Hausa' },
            { code: 'yo', name: 'Yorùbá (Yoruba)' },
            { code: 'ig', name: 'Igbo' },
            { code: 'so', name: 'Soomaali (Somali)' },
            { code: 'zu', name: 'isiZulu (Zulu)' },
            { code: 'xh', name: 'isiXhosa (Xhosa)' },
            { code: 'af', name: 'Afrikaans' },
            { code: 'pa', name: 'ਪੰਜਾਬੀ (Punjabi)' },
            { code: 'ta', name: 'தமிழ் (Tamil)' },
            { code: 'te', name: 'తెలుగు (Telugu)' },
            { code: 'mr', name: 'मराठी (Marathi)' },
            { code: 'gu', name: 'ગુજરાતી (Gujarati)' },
            { code: 'kn', name: 'ಕನ್ನಡ (Kannada)' },
            { code: 'ml', name: 'മലയാളം (Malayalam)' },
            { code: 'ne', name: 'नेपाली (Nepali)' },
            { code: 'si', name: 'සිංහල (Sinhala)' },
            { code: 'km', name: 'ភាសាខ្មែរ (Khmer)' },
            { code: 'lo', name: 'ລາວ (Lao)' },
            { code: 'my', name: 'မြန်မာ (Burmese)' },
            { code: 'mn', name: 'Монгол (Mongolian)' },
            { code: 'kk', name: 'Қазақша (Kazakh)' },
            { code: 'uz', name: 'Oʻzbekcha (Uzbek)' },
            { code: 'az', name: 'Azərbaycanca (Azerbaijani)' },
            { code: 'ka', name: 'ქართული (Georgian)' },
            { code: 'hy', name: 'Հայերեն (Armenian)' },
            { code: 'sq', name: 'Shqip (Albanian)' },
            { code: 'sr', name: 'Српски (Serbian)' },
            { code: 'hr', name: 'Hrvatski (Croatian)' },
            { code: 'bg', name: 'Български (Bulgarian)' },
            { code: 'sk', name: 'Slovenčina (Slovak)' },
            { code: 'sl', name: 'Slovenščina (Slovenian)' },
            { code: 'lt', name: 'Lietuvių (Lithuanian)' },
            { code: 'lv', name: 'Latviešu (Latvian)' },
            { code: 'et', name: 'Eesti (Estonian)' },
            { code: 'fi', name: 'Suomi (Finnish)' },
            { code: 'da', name: 'Dansk (Danish)' },
            { code: 'no', name: 'Norsk (Norwegian)' },
            { code: 'is', name: 'Íslenska (Icelandic)' },
            { code: 'ga', name: 'Gaeilge (Irish)' },
            { code: 'cy', name: 'Cymraeg (Welsh)' },
            { code: 'ca', name: 'Català (Catalan)' },
            { code: 'eu', name: 'Euskara (Basque)' },
            { code: 'ps', name: 'پښتو (Pashto)' },
            { code: 'ku', name: 'Kurdî (Kurdish)' }
        ];

        // ============================================================
        // 💱 قائمة عملات عالمية شاملة (أهم عملات كل قارة) عشان أي تاجر - عربي أو
        // أجنبي - يلاقي عملة بلده جاهزة، من غير ما نحمّل الكود بقائمة الـ 180 عملة
        // كلها اللي غالبيتها مش هيستخدمها حد فعليًا (والمتجر يفضل خفيف وسريع).
        // العملة دي بتتطبق على المتجر كله مرة واحدة (مش لكل منتج لوحده)، عشان تفضل
        // كل أسعارك وفواتيرك متسقة بعملة واحدة زي أي متجر إلكتروني احترافي.
        // ============================================================
        // 🔒 نص سياسة خصوصية عام افتراضي (بديل معقول لو الأدمن لسه ما كتبش نص مخصص بنفسه؛
        // ينصح دائمًا يستبدله بنص مراجَع قانونيًا يناسب بلد ونشاط المنصة الفعلي).
        // 🛒 نص افتراضي معقول يشرح للمشتري خطوة بخطوة إزاي يشتري ويتابع طلبه، لو التاجر لسه
        // ماكتبش نص مخصص بنفسه. التاجر يقدر يستبدله بأي وقت بنص يناسب متجره تحديدًا.
        const DEFAULT_HOW_TO_SHOP_AR = `📦 اختار المنتج اللي عايزه من الأقسام أو من البحث، وحدد الكمية اللي تحتاجها.

🛍️ اضغط "أضف للسلة"، وممكن تكمل تتسوق وتضيف منتجات تانية قبل ما تخلص طلبك.

📝 لما تخلص، روح لصفحة "السلة"، اختار طريقة الاستلام (توصيل لباب البيت أو استلام من المتجر مباشرة) وطريقة الدفع المناسبة ليك، واكتب بياناتك (العنوان ورقم موبايلك).

✅ بعد ما تأكد الطلب، هيوصلك رقم طلب فريد - احتفظ بيه كويس.

📞 هيتواصل معاك صاحب المتجر بنفسه في أقرب وقت لتأكيد الطلب وتحديد ميعاد التسليم.

🚚 عايز تعرف حالة طلبك في أي وقت؟ ادخل على المتجر واضغط أيقونة الشاحنة 🚚 اللي فوق الصفحة، واكتب رقم طلبك ورقم موبايلك اللي طلبت بيه، هتشوف حالته فورًا.

💬 لو عندك أي استفسار عن طلبك، تقدر تتواصل مع صاحب المتجر مباشرة من نفس رسالة الطلب اللي وصلته.`;

        const DEFAULT_PRIVACY_POLICY_AR = `نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية.

📋 البيانات اللي بنجمعها: بنجمع بس البيانات اللازمة لإتمام طلبك (زي الاسم، رقم الهاتف، والعنوان عند الشحن)، والبيانات دي بتتحفظ في متصفحك/جهازك ومش بتتبعت لأي سيرفر خارجي إلا وقت إرسال الطلب فعليًا لصاحب المتجر عن طريق واتساب أو وسيلة التواصل المختارة.

🔐 استخدام البيانات: بنستخدم بياناتك بس عشان نوصّل طلبك لصاحب المتجر، ومبنبيعش ولا بنشارك بياناتك مع أي طرف تالت لأغراض تسويقية من غير إذنك.

🍪 ملفات تعريف الارتباط (Cookies): المنصة بتستخدم مساحة تخزين محلية في متصفحك (Local Storage) عشان تحفظ سلة مشترياتك وتفضيلاتك، ومش بتستخدم كوكيز تتبع خارجية.

📞 التواصل: لو عندك أي استفسار عن خصوصيتك، تواصل مع صاحب المتجر أو إدارة المنصة مباشرة.

آخر تحديث: ${new Date().getFullYear()}`;

        const WORLD_CURRENCIES = [
            { code: 'EGP', symbol: 'ج.م', name: 'جنيه مصري' },
            { code: 'SAR', symbol: 'ر.س', name: 'ريال سعودي' },
            { code: 'AED', symbol: 'د.إ', name: 'درهم إماراتي' },
            { code: 'KWD', symbol: 'د.ك', name: 'دينار كويتي' },
            { code: 'QAR', symbol: 'ر.ق', name: 'ريال قطري' },
            { code: 'BHD', symbol: 'د.ب', name: 'دينار بحريني' },
            { code: 'OMR', symbol: 'ر.ع', name: 'ريال عماني' },
            { code: 'JOD', symbol: 'د.أ', name: 'دينار أردني' },
            { code: 'IQD', symbol: 'د.ع', name: 'دينار عراقي' },
            { code: 'LBP', symbol: 'ل.ل', name: 'ليرة لبنانية' },
            { code: 'SYP', symbol: 'ل.س', name: 'ليرة سورية' },
            { code: 'YER', symbol: 'ر.ي', name: 'ريال يمني' },
            { code: 'LYD', symbol: 'د.ل', name: 'دينار ليبي' },
            { code: 'DZD', symbol: 'د.ج', name: 'دينار جزائري' },
            { code: 'TND', symbol: 'د.ت', name: 'دينار تونسي' },
            { code: 'MAD', symbol: 'د.م', name: 'درهم مغربي' },
            { code: 'SDG', symbol: 'ج.س', name: 'جنيه سوداني' },
            { code: 'USD', symbol: '$', name: 'دولار أمريكي' },
            { code: 'EUR', symbol: '€', name: 'يورو' },
            { code: 'GBP', symbol: '£', name: 'جنيه إسترليني' },
            { code: 'TRY', symbol: '₺', name: 'ليرة تركية' },
            { code: 'CHF', symbol: 'Fr', name: 'فرنك سويسري' },
            { code: 'SEK', symbol: 'kr', name: 'كرونة سويدية' },
            { code: 'NOK', symbol: 'kr', name: 'كرونة نرويجية' },
            { code: 'DKK', symbol: 'kr', name: 'كرونة دنماركية' },
            { code: 'PLN', symbol: 'zł', name: 'زلوتي بولندي' },
            { code: 'RUB', symbol: '₽', name: 'روبل روسي' },
            { code: 'UAH', symbol: '₴', name: 'هريفنيا أوكرانية' },
            { code: 'CNY', symbol: '¥', name: 'يوان صيني' },
            { code: 'JPY', symbol: '¥', name: 'ين ياباني' },
            { code: 'KRW', symbol: '₩', name: 'وون كوري جنوبي' },
            { code: 'INR', symbol: '₹', name: 'روبية هندية' },
            { code: 'PKR', symbol: '₨', name: 'روبية باكستانية' },
            { code: 'BDT', symbol: '৳', name: 'تاكا بنجلاديشية' },
            { code: 'IDR', symbol: 'Rp', name: 'روبية إندونيسية' },
            { code: 'MYR', symbol: 'RM', name: 'رينغيت ماليزي' },
            { code: 'THB', symbol: '฿', name: 'بات تايلندي' },
            { code: 'PHP', symbol: '₱', name: 'بيزو فلبيني' },
            { code: 'VND', symbol: '₫', name: 'دونغ فيتنامي' },
            { code: 'SGD', symbol: 'S$', name: 'دولار سنغافوري' },
            { code: 'HKD', symbol: 'HK$', name: 'دولار هونج كونج' },
            { code: 'CAD', symbol: 'C$', name: 'دولار كندي' },
            { code: 'AUD', symbol: 'A$', name: 'دولار أسترالي' },
            { code: 'NZD', symbol: 'NZ$', name: 'دولار نيوزيلندي' },
            { code: 'ZAR', symbol: 'R', name: 'راند جنوب أفريقي' },
            { code: 'NGN', symbol: '₦', name: 'نايرا نيجيرية' },
            { code: 'KES', symbol: 'KSh', name: 'شلن كيني' },
            { code: 'GHS', symbol: 'GH₵', name: 'سيدي غاني' },
            { code: 'ETB', symbol: 'Br', name: 'بير إثيوبي' },
            { code: 'BRL', symbol: 'R$', name: 'ريال برازيلي' },
            { code: 'MXN', symbol: 'MX$', name: 'بيزو مكسيكي' },
            { code: 'ARS', symbol: 'AR$', name: 'بيزو أرجنتيني' },
            { code: 'ILS', symbol: '₪', name: 'شيكل إسرائيلي' },
        ];

        // يملأ أي select بقائمة العملات، ويحدد القيمة الحالية للمتجر (أو يضيفها كخيار
        // مخصص لو كانت قيمة قديمة نصية مش موجودة أصلاً في القائمة، عشان بيانات
        // المتاجر القديمة تفضل شغالة صح من غير ما تتغير من تحتها).
        // 🌍 اسم العملة بلغة الواجهة الحالية: بنستخدم Intl.DisplayNames المدمجة في المتصفح عشان نجيب
        // اسم العملة بأي لغة من غير ما نحتاج نكتب ونترجم قائمة كل عملة بكل لغة يدويًا (٦٠+ عملة × ١٠ لغات).
        // لو المتصفح أو اللغة مش مدعومة، بنرجع تلقائيًا للاسم العربي الأصلي كاحتياطي آمن.
        function localizedCurrencyName(currency) {
            try {
                let dn = new Intl.DisplayNames([currentAppLanguage], { type: 'currency' });
                let name = dn.of(currency.code);
                if(name && name !== currency.code) return name;
            } catch(e) {}
            return currency.name;
        }

        function populateCurrencyDropdown(selectId, currentValue) {
            let sel = document.getElementById(selectId);
            if(!sel) return;
            let value = currentValue || 'ج.م';
            let matched = WORLD_CURRENCIES.find(c => c.symbol === value || c.code === value);
            sel.innerHTML = WORLD_CURRENCIES.map(c => `<option value="${c.symbol}">${c.symbol} — ${localizedCurrencyName(c)}</option>`).join('');
            if(!matched) {
                sel.innerHTML += `<option value="${value}" selected>${value} (${t('custom_currency_label', 'عملة مخصّصة')})</option>`;
            } else {
                sel.value = matched.symbol;
            }
        }

        // 🔀 تبديل بين اختيار العملة من قائمة جاهزة (بأسماء مترجمة تلقائيًا) وكتابتها يدويًا،
        // عشان لو الترجمة التلقائية طلعت غلط أو ناقصة، أو لو عملة التاجر مش موجودة أصلاً في
        // القائمة (عملات جديدة أو نادرة)، يقدر يكتبها بنفسه بدل ما يكون مقيّد بالقائمة بس.
        function toggleCurrencyInputMode(selectId, manualInputId, evt) {
            if(evt) evt.preventDefault();
            let sel = document.getElementById(selectId);
            let manual = document.getElementById(manualInputId);
            if(!sel || !manual) return;
            let switchingToManual = !manual.classList.contains('hidden') ? false : true;
            if(switchingToManual) {
                manual.value = sel.value;
                sel.classList.add('hidden');
                manual.classList.remove('hidden');
                manual.focus();
            } else {
                sel.classList.remove('hidden');
                manual.classList.add('hidden');
            }
        }

        // تغيير سريع لعملة المتجر من نفس شاشة إضافة المنتج (بدل ما يضطر يروح لإعدادات المتجر بعيد)
        function quickChangeStoreCurrency(value) {
            let merchant = localStorage.getItem('currentActiveMerchant');
            if(!merchant) return;
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            if(!stores[merchant]) return;
            stores[merchant].currency = value;
            if(!saveAllStores(stores)) return;
            syncCurrencyDropdowns(value);
            showToast('✅ اتغيّرت عملة متجرك لـ ' + value);
        }

        // يخلي كل قوائم العملة المفتوحة في اللوحة (الإعدادات + فورم المنتج) متزامنة مع بعض دايمًا
        function syncCurrencyDropdowns(value) {
            ['storeCurrencyInput', 'prodCurrencyQuickSelect'].forEach(id => {
                let el = document.getElementById(id);
                if(el && el.value !== value) el.value = value;
            });
        }

        // --- أكواد الدول لرقم الواتساب (لحل مشكلة الأرقام الخاطئة) ---
        // --- تسجيل الدخول بجوجل للمراجعات ---
        // مهم: يجب استبدال القيمة التالية بـ Client ID خاص بك من Google Cloud Console (OAuth consent + Credentials)،
        // وإضافة نطاق موقعك فعلياً ضمن "Authorized JavaScript origins". بدون ذلك، سيبقى تسجيل الدخول العادي بالاسم فعّالاً كبديل تلقائي.
        const GOOGLE_CLIENT_ID = '246895081561-6g550qgpo7v54gihpui3cvjntvjau6lr.apps.googleusercontent.com';
        const GOOGLE_SIGNIN_ENABLED = !GOOGLE_CLIENT_ID.includes('YOUR_GOOGLE_CLIENT_ID');
        let currentReviewerGoogleUser = null;

        function parseJwt(token) {
            try {
                let base64 = token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/');
                return JSON.parse(decodeURIComponent(atob(base64).split('').map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join('')));
            } catch(e) { return null; }
        }

        function handleGoogleReviewCredential(response) {
            let payload = parseJwt(response.credential);
            if(!payload) return;
            currentReviewerGoogleUser = { name: payload.name, email: payload.email, picture: payload.picture };
            let signedBox = document.getElementById('googleSignedInBox');
            let signInBox = document.getElementById('googleSignInBox');
            if(signedBox && signInBox) {
                signInBox.classList.add('hidden');
                signedBox.classList.remove('hidden');
                signedBox.innerHTML = `<img src="${payload.picture}" style="width:26px; height:26px; border-radius:50%; vertical-align:middle;"> تسجيل الدخول باسم: <strong>${payload.name}</strong>`;
            }
        }

        // تسجيل متجر جديد بحساب جوجل: بيملى اسم المتجر المقترح والبريد تلقائيًا من حساب جوجل،
        // والتاجر بعدها لسه بيحدد كلمة سر خاصة بيه عشان يدخل بيها على لوحة تحكم متجره
        // (الدخول للوحة التحكم شغال باسم مستخدم/كلمة سر محلي، مفيش سيرفر حقيقي يتحقق من جلسة جوجل)
        function handleGoogleMerchantCredential(response) {
            let payload = parseJwt(response.credential);
            if(!payload) return;
            let signInBox = document.getElementById('merchantGoogleSignInBox');
            let signedBox = document.getElementById('merchantGoogleSignedInBox');
            if(document.getElementById('regStoreDisplayName').value.trim() === '') {
                document.getElementById('regStoreDisplayName').value = payload.name || '';
            }
            document.getElementById('regStoreEmail').value = payload.email || '';
            if(signInBox && signedBox) {
                signInBox.classList.add('hidden');
                signedBox.classList.remove('hidden');
                signedBox.innerHTML = `<img src="${payload.picture}" style="width:24px; height:24px; border-radius:50%;"> تم تأكيد بريدك عن طريق جوجل: <strong>${payload.email}</strong> — كمّل باقي البيانات وحدد كلمة سر لمتجرك`;
            }
        }

        function initMerchantGoogleSignIn() {
            if(!GOOGLE_SIGNIN_ENABLED || !window.google || !google.accounts || !google.accounts.id) return;
            try {
                google.accounts.id.initialize({ client_id: GOOGLE_CLIENT_ID, callback: handleGoogleMerchantCredential });
                google.accounts.id.renderButton(document.getElementById('merchantGoogleSignInBtn'), { theme: 'outline', size: 'medium', text: 'signup_with' });
            } catch(e) { /* لو حدث خطأ في الإعداد، تجاهله بأمان دون كسر الصفحة */ }
        }

        // 🌐 أسماء الدول بتتترجم فعليًا حسب لغة الزائر عن طريق مفاتيح country_XX (شوف
        // TRANSLATIONS)، والقيمة هنا هي الاحتياطي (عربي) بس لو المفتاح مش موجود.
        function getCountryCodes() { return [
            { code: '20', name: t('country_20', 'مصر (20)') }, { code: '966', name: t('country_966', 'السعودية (966)') },
            { code: '971', name: t('country_971', 'الإمارات (971)') }, { code: '965', name: t('country_965', 'الكويت (965)') },
            { code: '974', name: t('country_974', 'قطر (974)') }, { code: '973', name: t('country_973', 'البحرين (973)') },
            { code: '968', name: t('country_968', 'عُمان (968)') }, { code: '962', name: t('country_962', 'الأردن (962)') },
            { code: '961', name: t('country_961', 'لبنان (961)') }, { code: '963', name: t('country_963', 'سوريا (963)') },
            { code: '964', name: t('country_964', 'العراق (964)') }, { code: '218', name: t('country_218', 'ليبيا (218)') },
            { code: '216', name: t('country_216', 'تونس (216)') }, { code: '213', name: t('country_213', 'الجزائر (213)') },
            { code: '212', name: t('country_212', 'المغرب (212)') }, { code: '249', name: t('country_249', 'السودان (249)') },
            { code: '970', name: t('country_970', 'فلسطين (970)') }, { code: '967', name: t('country_967', 'اليمن (967)') },
            { code: '1', name: 'USA/Canada (1)' }, { code: '44', name: 'UK (44)' },
            { code: '49', name: 'Germany (49)' }, { code: '33', name: 'France (33)' },
            { code: '39', name: 'Italy (39)' }, { code: '34', name: 'Spain (34)' },
            { code: '90', name: 'Turkey (90)' }, { code: '91', name: 'India (91)' },
            { code: '92', name: 'Pakistan (92)' }, { code: '86', name: 'China (86)' },
            { code: '81', name: 'Japan (81)' }, { code: '82', name: 'South Korea (82)' },
            { code: '61', name: 'Australia (61)' }, { code: '55', name: 'Brazil (55)' },
            { code: '7', name: 'Russia (7)' }, { code: '234', name: 'Nigeria (234)' },
            { code: '27', name: 'South Africa (27)' }, { code: '60', name: 'Malaysia (60)' },
            { code: '62', name: 'Indonesia (62)' }, { code: '63', name: 'Philippines (63)' }
        ]; }

        // --- ترجمات أساسية لواجهة التطبيق (يمكن التوسع فيها بسهولة) ---
        // --- ترجمات أساسية لواجهة التطبيق (يمكن التوسع فيها بسهولة) ---
        // 🚀 تحسين أداء: كل لغة بتتحمّل من كتلة JSON مدمجة في نفس الصفحة (بدون أي طلب
        // شبكة، وبدون فقدان أي لغة) بس أول ما المستخدم يحتاجها فعليًا، عشان محرك الجافاسكريبت
        // مايضطرش يحلّل كل اللغات (كانت ~430 كيلوبايت) مرة واحدة لكل زائر وهو غالبًا هيستخدم
        // لغة واحدة بس. النصوص نفسها (كل اللغات العشرة) موجودة كاملة زي ما هي في الصفحة، بس
        // متخزنة كـ JSON عادي (type="application/json") مش كـ كود جافاسكريبت، فمحرك المتصفح
        // ميحاولش يفهمها كأوامر إلا لما فعليًا نطلبها بدالة ensureLanguageLoaded().
        const SUPPORTED_LANG_CODES = ["ar", "en", "zh", "ru", "fr", "es", "de", "it", "pt", "tr"];
        const TRANSLATIONS = {};
        function ensureLanguageLoaded(code) {
            if(TRANSLATIONS[code]) return TRANSLATIONS[code];
            let block = document.getElementById('lang-data-' + code);
            if(block) { try { TRANSLATIONS[code] = JSON.parse(block.textContent); } catch(e) { TRANSLATIONS[code] = {}; } }
            return TRANSLATIONS[code] || null;
        }
        function ensureAllLanguagesLoaded() { SUPPORTED_LANG_CODES.forEach(c => ensureLanguageLoaded(c)); }
        // ✅ كل الـ 10 لغات المطلوبة (عربي/إنجليزي/فرنساوي/إسباني/ألماني/إيطالي/برتغالي/روسي/تركي/صيني) مُغطاة بالكامل الآن.
        // إلى أن تتم إضافة نصوص ترجمة مخصصة لكل لغة داخل هذا الكائن.

        // --- 2. البيانات الأساسية وإعدادات النظام ---
        if(!localStorage.getItem('adminAccounts')) {
            let legacyPass = localStorage.getItem('adminPassword') || 'admin2026';
            localStorage.setItem('adminAccounts', JSON.stringify([
                { username: 'admin', password: legacyPass, role: 'super' }
            ]));
        }

        if(!localStorage.getItem('supportTeam')) {
            let defaultTeam = [
                { name: "دعم 1", phone: "201000000001" },
                { name: "دعم 2", phone: "201000000002" }
            ];
            localStorage.setItem('supportTeam', JSON.stringify(defaultTeam));
        }

        if(!localStorage.getItem('supportLogs')) {
            localStorage.setItem('supportLogs', JSON.stringify([]));
        }

        if(!localStorage.getItem('allStores')) {
            let defaultStores = {
                "كافيه أوريجين": {
                    pass: "123",
                    status: "active",
                    logo: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=100",
                    currency: "ر.س",
                    whatsapp: "201000000000",
                    whatsappCountryCode: "20",
                    messenger: "",
                    telegram: "",
                    vodafoneCash: "01012345678",
                    productsLabel: "منتج",
                    registeredAt: Date.now(),
                    subscriptionExpiresAt: Date.now() + (parseInt(localStorage.getItem('trialDays')) || 15) * 86400000,
                    subscriptionActivatedOnce: false,
                    storageQuotaMB: 20,
                    planId: 'free',
                    socialLinks: { facebook: "", instagram: "", youtube: "", tiktok: "" },
                    shortcuts: [],
                    banners: [],
                    categories: [
                        { name: 'قهوة داكنة', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400' },
                        { name: 'مخبوزات', image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400' }
                    ],
                    products: [
                        { 
                            category: 'قهوة داكنة', 
                            name: 'لاتيه فانيلا', 
                            price: '22', 
                            image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=400', 
                            desc: 'حليب مبخر مع اسبريسو فاخر ونكهة الفانيلا', 
                            reviews: [{ rating: 5, author: 'أحمد', date: '2026-08-01', comment: 'طعم ممتاز جداً' }] 
                        },
                        { 
                            category: 'مخبوزات', 
                            name: 'كرواسون لوز', 
                            price: '18', 
                            image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400', 
                            desc: 'مخبوز يدوي طازج يومياً', 
                            reviews: [{ rating: 4, author: 'محمود', date: '2026-08-02', comment: 'هش ولذيذ' }] 
                        }
                    ]
                }
            };
            saveAllStores(defaultStores);
        }

        // --- حفظ آمن لبيانات المتاجر: يمنع انهيار التطبيق بالكامل لو امتلأت مساحة التخزين ---
        // (السبب الأساسي في توقف إضافة المنتجات/الأقسام/الطلبات: كانت الصور تُخزَّن بحجمها الكامل داخل
        // localStorage بدون أي try/catch، فبمجرد امتلاء المساحة (عادة بعد صورتين أو ثلاثة) كان أي حفظ
        // يفشل بصمت ويوقف تنفيذ الكود في نفس اللحظة، بما في ذلك عملية migrateStoresData التي تعمل
        // عند كل فتح للصفحة، فيظهر الأمر وكأن المتجر بالكامل "بيقفل" أو "يرجّع لتسجيل الدخول").
        function saveAllStores(stores) {
            try {
                localStorage.setItem('allStores', JSON.stringify(stores));
                try { queuePendingImageRetries(stores); } catch(e) { console.error('queuePendingImageRetries error:', e); }
                return true;
            } catch (e) {
                // المساحة ممتلئة - نحاول تنظيف سجلات الزيارات والطلبات القديمة تلقائياً وإعادة المحاولة
                try {
                    for(let s in stores) {
                        if(stores[s].visitLog && stores[s].visitLog.length > 5)
                            stores[s].visitLog = stores[s].visitLog.slice(-5);
                        if(stores[s].orderHistory && stores[s].orderHistory.length > 20)
                            stores[s].orderHistory = stores[s].orderHistory.slice(0, 20);
                    }
                    localStorage.setItem('allStores', JSON.stringify(stores));
                    return true;
                } catch(e2) {
                    console.error('فشل حفظ بيانات المتجر:', e2);
                    alert('⚠️ مساحة التخزين في المتصفح ممتلئة ولم يتم الحفظ.\n\nالحل السريع: افتح الكود وسجّل دخول بحساب الأدمن ثم اضغط "تصدير نسخة احتياطية"، ثم امسح بيانات الموقع من إعدادات المتصفح وارجع استورد البيانات.\n\nأو اضغط "تنظيف طارئ" في صفحة تسجيل الدخول.');
                    return false;
                }
            }
        }

        // ============================================================
        // 🔁 طابور إعادة محاولة رفع الصور: لو رفع صورة لـ ImgBB فشل (نت ضعيف/واقع) واتحفظت
        // النسخة المحلية (base64) كحل احتياطي مؤقت، الكود هنا بيكتشف أي صورة "عالقة" بالشكل
        // ده تلقائيًا بمجرد أي حفظ، وبمجرد ما النت يرجع، بيرفعها في الخلفية من غير ما التاجر
        // يحتاج يفتح المنتج أو يحفظه تاني، وبيحدّث المكان بالرابط الجديد (وده بدوره بيتزامن
        // لـ Firestore تلقائيًا زي أي حفظ عادي بفضل طبقة المزامنة في firebase-config.js).
        // ============================================================
        function findBase64ImagePaths(obj, path, results) {
            if(obj === null || typeof obj !== 'object') return;
            if(Array.isArray(obj)) {
                obj.forEach((v, i) => findBase64ImagePaths(v, path + '.' + i, results));
                return;
            }
            for(let key in obj) {
                let val = obj[key];
                let childPath = path + '.' + key;
                if(typeof val === 'string' && val.indexOf('data:image') === 0) {
                    results.push(childPath);
                } else if(val !== null && typeof val === 'object') {
                    findBase64ImagePaths(val, childPath, results);
                }
            }
        }
        function getValueAtPath(obj, path) {
            let parts = path.split('.').filter(Boolean);
            let cur = obj;
            for(let p of parts) { if(cur == null) return undefined; cur = cur[p]; }
            return cur;
        }
        function setValueAtPath(obj, path, value) {
            let parts = path.split('.').filter(Boolean);
            let cur = obj;
            for(let i = 0; i < parts.length - 1; i++) { if(cur == null) return; cur = cur[parts[i]]; }
            if(cur != null) cur[parts[parts.length - 1]] = value;
        }
        function queuePendingImageRetries(stores) {
            let queue = JSON.parse(localStorage.getItem('pendingImageRetryQueue')) || [];
            let existingKeys = new Set(queue.map(q => q.storeKey + '|' + q.path));
            let added = false;
            for(let storeKey in stores) {
                let paths = [];
                findBase64ImagePaths(stores[storeKey], '', paths);
                paths.forEach(p => {
                    let k = storeKey + '|' + p;
                    if(!existingKeys.has(k)) { queue.push({ storeKey, path: p }); existingKeys.add(k); added = true; }
                });
            }
            if(added) localStorage.setItem('pendingImageRetryQueue', JSON.stringify(queue));
            if(queue.length > 0 && navigator.onLine) scheduleImageRetry();
        }
        let __imageRetryInProgress = false;
        function scheduleImageRetry() {
            if(__imageRetryInProgress) return;
            __imageRetryInProgress = true;
            setTimeout(retryPendingImageUploads, 300);
        }
        function retryPendingImageUploads() {
            let queue = JSON.parse(localStorage.getItem('pendingImageRetryQueue')) || [];
            if(queue.length === 0) { __imageRetryInProgress = false; return; }
            let entry = queue[0];
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            let store = stores[entry.storeKey];
            if(!store) {
                queue.shift();
                localStorage.setItem('pendingImageRetryQueue', JSON.stringify(queue));
                retryPendingImageUploads();
                return;
            }
            let currentVal = getValueAtPath(store, entry.path);
            if(typeof currentVal !== 'string' || currentVal.indexOf('data:image') !== 0) {
                // اتظبطت خلاص (مثلاً التاجر حفظ المنتج تاني عاديًا) - نشيلها من الطابور ونكمل اللي بعدها
                queue.shift();
                localStorage.setItem('pendingImageRetryQueue', JSON.stringify(queue));
                retryPendingImageUploads();
                return;
            }
            uploadToImgBB(currentVal, function(result) {
                if(result.indexOf('data:image') === 0) {
                    // لسه فاشل (النت لسه ضعيف) - نوقف المحاولات دلوقتي، هتتحاول تاني تلقائيًا
                    // لما حدث 'online' يتفعل تاني أو في الفحص الدوري كل دقيقة
                    __imageRetryInProgress = false;
                    return;
                }
                let stores2 = JSON.parse(localStorage.getItem('allStores')) || {};
                let store2 = stores2[entry.storeKey];
                if(store2) {
                    setValueAtPath(store2, entry.path, result);
                    saveAllStores(stores2);
                    // لو التاجر فاتح متجره أو لوحته دلوقتي بالظبط، نحدّث العرض فورًا من غير ما يحتاج يعمل Refresh
                    try { if(localStorage.getItem('currentActiveMerchant') === entry.storeKey) loadDashboard(); } catch(e) {}
                }
                queue.shift();
                localStorage.setItem('pendingImageRetryQueue', JSON.stringify(queue));
                retryPendingImageUploads();
            });
        }
        window.addEventListener('online', function() {
            console.log('🌐 الاتصال بالإنترنت رجع - جاري محاولة رفع أي صور معلّقة في الخلفية...');
            scheduleImageRetry();
        });
        // شبكة أمان إضافية: بعض الشبكات (واي فاي ضعيف مثلاً) ما بتطلقش حدث 'online' بدقة،
        // فبنعمل فحص دوري خفيف كل دقيقة كاحتياط إضافي، وهو عمليًا مجاني (لا يعمل شيء) لو الطابور فاضي.
        setInterval(function() {
            if(navigator.onLine) scheduleImageRetry();
        }, 60000);

        let cart = JSON.parse(localStorage.getItem('appCart')) || [];
        // اختيار المتجر النشط: يفضّل آخر متجر تم تصفحه، وإلا يقع تلقائياً على أول متجر مسجل بالمنصة (لا يبقى أبداً بدون متجر فعلي)
        let allStoresAtLoad = JSON.parse(localStorage.getItem('allStores')) || {};
        let savedActiveStore = localStorage.getItem('currentActiveStore');
        let activeStore = (savedActiveStore && allStoresAtLoad[savedActiveStore]) ? savedActiveStore : Object.keys(allStoresAtLoad)[0];
        let currentViewingCategory = null; // القسم اللي العميل/التاجر شايفه دلوقتي (بيتستخدم في زرار "إضافة منتج" السريع)
        if(activeStore) localStorage.setItem('currentActiveStore', activeStore);
        let selectedPayment = 'COD';
        let selectedDeliveryMode = 'pickup';
        let tempSelectedRating = 5;
        let lastSupportIndex = 0;
        const ADMIN_USER_NAME = "admin"; // احتياطي فقط - النظام الفعلي يعتمد الآن على adminAccounts (يدعم أكثر من حساب)

        // === إعدادات EmailJS (لإرسال أكواد تفعيل البريد الحقيقية) ===
        const EMAILJS_SERVICE_ID = 'service_8cbr178';
        const EMAILJS_TEMPLATE_ID = 'template_pwif37g';
        const EMAILJS_PUBLIC_KEY = 'Reay3eBWlOgzmXk3P';

        window.onload = function() {
            try { if(window.emailjs && EMAILJS_PUBLIC_KEY) emailjs.init(EMAILJS_PUBLIC_KEY); } catch(e) { console.error('emailjs.init error:', e); }
            try { migrateStoresData(); } catch(e) { console.error('migrateStoresData error:', e); }
            try { seedDefaultUsageGuide(); } catch(e) { console.error('seedDefaultUsageGuide error:', e); }
            try { injectCustomCode(); } catch(e) { console.error('injectCustomCode error:', e); }
            try { populateLangCornerDropdown(); } catch(e) { console.error('populateLangCornerDropdown error:', e); }
            try { populateCountryCodes(); } catch(e) { console.error('populateCountryCodes error:', e); }
            try { autoDetectLanguage(); } catch(e) { console.error('autoDetectLanguage error:', e); }
            try { setupExclusiveAccordions(); } catch(e) { console.error('setupExclusiveAccordions error:', e); }
            try { registerServiceWorker(); } catch(e) { console.error('registerServiceWorker error:', e); }
            try { if(navigator.onLine) scheduleImageRetry(); } catch(e) { console.error('scheduleImageRetry error:', e); }
            try { setupInstallPrompt(); } catch(e) { console.error('setupInstallPrompt error:', e); }
            try { initPlatformChatConfigWatch(); } catch(e) { console.error('initPlatformChatConfigWatch error:', e); }
            initApp();
        };

        // ============================================================
        // 📱 PWA: تسجيل الـ Service Worker (لو الملف sw.js موجود جنب هذا الملف بعد
        // الاستضافة) عشان يفتح المتجر بسرعة من الكاش في الزيارة التالية. لو الملف
        // غير موجود (مثلاً وقت التجربة محليًا قبل الاستضافة) بيفشل بهدوء من غير أي
        // تأثير على باقي المتجر - مش شرط لتشغيل المنصة، ده تحسين إضافي فقط.
        // ============================================================
        function registerServiceWorker() {
            if(!('serviceWorker' in navigator)) return;
            if(location.protocol === 'file:') return; // الـ SW ميشتغلش من ملف محلي، لازم استضافة حقيقية (http/https)
            navigator.serviceWorker.register('sw.js').catch(() => {
                // طبيعي جدًا لو الملف لسه مش موجود على السيرفر - المتجر يفضل شغال عادي زي أي متصفح تقليدي
            });
        }

        // 📱 زر "ثبّت المتجر على شاشتك" - بيظهر بس لما المتصفح فعليًا يدعم التثبيت
        let deferredInstallPrompt = null;
        function setupInstallPrompt() {
            window.addEventListener('beforeinstallprompt', function(e) {
                e.preventDefault();
                deferredInstallPrompt = e;
                let btn = document.getElementById('installAppBtn');
                if(btn) btn.classList.remove('hidden');
            });
        }
        function triggerInstallPrompt() {
            if(!deferredInstallPrompt) { showToast('📱 التثبيت متاح بالفعل أو غير مدعوم على هذا المتصفح'); return; }
            deferredInstallPrompt.prompt();
            deferredInstallPrompt.userChoice.finally(() => {
                deferredInstallPrompt = null;
                let btn = document.getElementById('installAppBtn');
                if(btn) btn.classList.add('hidden');
            });
        }

        // دعم زر رجوع/تقدم المتصفح: لو الزائر رجع بره متجر معين أو دخل تاني، الرابط هو اللي بيحكم اللي بيظهر
        window.addEventListener('popstate', function() {
            routeFromUrl();
        });

        // --- ضمان توافق المتاجر القديمة مع الحقول الجديدة بدون فقد أي بيانات ---
        function migrateStoresData() {
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            let changed = false;
            for(let name in stores) {
                let s = stores[name];
                if(s.displayName === undefined || s.displayName === '') { s.displayName = name; changed = true; }
                if(s.categoriesIconImage === undefined) { s.categoriesIconImage = ''; changed = true; }
                if(s.loginNameChangedAt === undefined) { s.loginNameChangedAt = s.registeredAt || Date.now(); changed = true; }
                if(s.registeredAt === undefined) { s.registeredAt = Date.now(); changed = true; }
                if(s.subscriptionExpiresAt === undefined) {
                    // توافقية: المتاجر القديمة اللي لسه ملهاش تاريخ انتهاء اشتراك محدد، بنحسبلها
                    // نقطة بداية معقولة (نهاية فترتها التجريبية) بناءً على إعدادات المنصة الحالية
                    let trialDaysForMigration = parseInt(localStorage.getItem('trialDays')) || 15;
                    s.subscriptionExpiresAt = (s.registeredAt || Date.now()) + trialDaysForMigration * 86400000;
                    changed = true;
                }
                if(s.subscriptionActivatedOnce === undefined) { s.subscriptionActivatedOnce = false; changed = true; }
                if(s.customCodeSnippets === undefined) {
                    // تهجير تلقائي: أي متجر كان مستخدم النظام القديم (كود CSS واحد + كود HTML/JS
                    // واحد بس) بنحوّل كوده لعنصر/عنصرين في النظام الجديد عشان مايضيعش حاجة.
                    let migrated = [];
                    if(s.customCSS && s.customCSS.trim()) migrated.push({ id: generateSnippetId(), name: 'كود CSS (من النظام القديم)', type: 'css', content: s.customCSS, enabled: true });
                    if(s.customHeadCode && s.customHeadCode.trim()) migrated.push({ id: generateSnippetId(), name: 'كود HTML/JS (من النظام القديم)', type: 'code', content: s.customHeadCode, enabled: true });
                    s.customCodeSnippets = migrated;
                    changed = true;
                }
                if(s.whatsappCountryCode === undefined) { s.whatsappCountryCode = '20'; changed = true; }
                if(s.messenger === undefined) { s.messenger = ''; changed = true; }
                if(s.telegram === undefined) { s.telegram = ''; changed = true; }
                if(s.orderMessageTemplate === undefined) { s.orderMessageTemplate = ''; changed = true; }
                if(s.directOrderHours === undefined) { s.directOrderHours = null; changed = true; }
                if(s.directOrderMessage === undefined) { s.directOrderMessage = ''; changed = true; }
                if(s.productsLabel === undefined) { s.productsLabel = 'منتج'; changed = true; }
                if(s.storageQuotaMB === undefined) { s.storageQuotaMB = 20; changed = true; }
                if(s.planId === undefined) { s.planId = 'free'; changed = true; }
                if(!s.socialLinks) { s.socialLinks = { facebook:'', instagram:'', youtube:'', tiktok:'', twitter:'', callPhone:'' }; changed = true; }
                if(s.socialLinks && s.socialLinks.twitter === undefined) { s.socialLinks.twitter = ''; s.socialLinks.callPhone = ''; changed = true; }
                if(s.aboutUs === undefined) { s.aboutUs = ''; changed = true; }
                if(!s.aboutUsStyle) { s.aboutUsStyle = { color: '#5a5248', fontSize: '15px', bold: false, underline: false }; changed = true; }
                if(s.returnPolicy === undefined) { s.returnPolicy = ''; changed = true; }
                if(s.paymentLink === undefined) { s.paymentLink = ''; changed = true; }
                if(s.pushNotificationsEnabled === undefined) { s.pushNotificationsEnabled = true; changed = true; }
                if(s.authorizedUids === undefined) { recomputeAuthorizedUids(s); changed = true; }
                if(s.showOnHomepage === undefined) { s.showOnHomepage = true; changed = true; }
                if(s.aboutImage === undefined) { s.aboutImage = ''; changed = true; }
                if(s.deliveryFee === undefined) { s.deliveryFee = null; changed = true; }
                if(s.themeColor === undefined) { s.themeColor = null; changed = true; }
                if(s.freeDeliveryThreshold === undefined) { s.freeDeliveryThreshold = null; changed = true; }
                if(!s.orderHistory) { s.orderHistory = []; changed = true; }
                if(!s.coupons) { s.coupons = []; changed = true; }
                if(!s.blockedReviewers) { s.blockedReviewers = []; changed = true; }
                if(s.visitCount === undefined) { s.visitCount = 0; changed = true; }
                if(!s.visitLog) { s.visitLog = []; changed = true; }
                (s.products || []).forEach(p => {
                    if(p.stock === undefined) { p.stock = null; changed = true; }
                    if(p.stockUnitLabel === undefined) { p.stockUnitLabel = ''; changed = true; }
                    if(p.showStockToCustomer === undefined) { p.showStockToCustomer = false; changed = true; }
                    if(!p.variants) { p.variants = null; changed = true; }
                    if(!p.gallery) { p.gallery = []; changed = true; }
                    if(!p.descStyle) { p.descStyle = { color: '#5a5248', fontSize: '14px', bold: false }; changed = true; }
                });
                if(!s.adminMessages) { s.adminMessages = []; changed = true; }
                if(!s.shortcuts) { s.shortcuts = []; changed = true; }
                if(!s.banners) { s.banners = []; changed = true; }
                if(!s.products) { s.products = []; changed = true; }
                if(!s.categories) { s.categories = []; changed = true; }
            }
            if(changed) saveAllStores(stores);
        }

        function populateCountryCodes() {
            let sel = document.getElementById('storeWhatsappCountryCode');
            if(!sel) return;
            sel.innerHTML = '';
            getCountryCodes().forEach(c => {
                sel.innerHTML += `<option value="${c.code}">${c.name}</option>`;
            });
        }

        // --- بناء رقم الواتساب الدولي الصحيح مع حماية من تكرار كود الدولة (سبب شائع لخطأ 404 على واتساب) ---
        function buildFinalWhatsappNumber() {
            let code = document.getElementById('storeWhatsappCountryCode').value;
            let raw = document.getElementById('storeWhatsappInput').value.trim().replace(/\D/g, '');
            if(!raw) return '';
            // إزالة صفر البداية المحلي (مثال: 01012345678 -> 1012345678)
            raw = raw.replace(/^0+/, '');
            // لو المستخدم كتب الرقم كاملاً بكود الدولة بالغلط (مرتين)، نشيل التكرار
            if(raw.startsWith(code + code)) raw = raw.slice(code.length);
            else if(raw.startsWith(code) && raw.length > code.length + 6) raw = raw.slice(code.length);
            return code + raw;
        }

        function updateWhatsappPreview() {
            let box = document.getElementById('whatsappPreviewBox');
            if(!box) return;
            let raw = document.getElementById('storeWhatsappInput').value.trim();
            if(!raw) { box.innerText = ''; return; }
            let final = buildFinalWhatsappNumber();
            let valid = final.length >= 9 && final.length <= 15;
            box.innerHTML = valid
                ? `✅ ${t('wa_number_active_tpl', 'الرقم الذي سيستخدم فعليًا: wa.me/{n}').replace('{n}', final)}`
                : `⚠️ الرقم يبدو غير صحيح (${final}) - راجع الكود والرقم قبل الحفظ.`;
            box.style.color = valid ? '#10b981' : '#ef4444';
        }

        // --- أيقونة اللغة الصغيرة في الزاوية ---
        let currentAppLanguage = localStorage.getItem('appLanguage') || 'ar';

        // ✅ اتصلح هنا: القائمة كانت بتعرض أكتر من 60 لغة، لكن الترجمة الفعلية الكاملة
        // كانت موجودة بس للعربي والإنجليزي — باقي اللغات كانت بتتغير شكليًا بس من غير
        // أي ترجمة حقيقية، وده كان بيدي انطباع إن الميزة "معطلة" أو مش شغالة صح.
        // الحل الصحيح والاحترافي: نعرض في القائمة بس اللغات المترجمة فعليًا وبالكامل
        // (يعني الموجودة في كائن TRANSLATIONS)، وأي لغة جديدة تتضاف هناك تظهر هنا تلقائيًا.
        function populateLangCornerDropdown() {
            let dd = document.getElementById('langCornerDropdown');
            dd.innerHTML = '';
            let supportedCodes = SUPPORTED_LANG_CODES;
            ALL_LANGUAGES.filter(l => supportedCodes.includes(l.code)).forEach(lang => {
                dd.innerHTML += `<div onclick="changeLanguage('${lang.code}')">${lang.name}</div>`;
            });
        }

        function toggleLangDropdown() {
            document.getElementById('langCornerDropdown').classList.toggle('show');
        }

        document.addEventListener('click', function(e) {
            let wrap = document.querySelector('.lang-corner-wrap');
            let dd = document.getElementById('langCornerDropdown');
            if(wrap && dd && !wrap.contains(e.target)) dd.classList.remove('show');
        });

        // 🌍 الكشف التلقائي للغة الزائر بيعتمد على لغة جهازه/متصفحه (navigator.language)،
        // مش على موقعه الجغرافي (IP). ده الأسلوب المعياري المتبع في أغلب المواقع العالمية،
        // وميحتاجش أي طلب شبكة خارجي (يفضل المتجر سريع وخفيف)، وأدق من تخمين الدولة لأن
        // ممكن حد عربي يزور من أمريكا أو العكس، والمهم فعليًا هي لغة جهازه هو مش موقعه.
        function populatePlatformLanguageSettings() {
            let sel = document.getElementById('platformDefaultLangSelect');
            if(!sel) return;
            let supportedCodes = SUPPORTED_LANG_CODES;
            sel.innerHTML = ALL_LANGUAGES.filter(l => supportedCodes.includes(l.code)).map(l => `<option value="${l.code}">${l.name}</option>`).join('');
            sel.value = localStorage.getItem('platformDefaultLang') || 'ar';
            document.getElementById('platformAutoDetectLangCheckbox').checked = localStorage.getItem('platformAutoDetectLang') !== 'false';
        }
        function savePlatformLanguageSettings() {
            localStorage.setItem('platformDefaultLang', document.getElementById('platformDefaultLangSelect').value);
            localStorage.setItem('platformAutoDetectLang', document.getElementById('platformAutoDetectLangCheckbox').checked ? 'true' : 'false');
            showToast('✅ اتحفظت إعدادات اللغة');
        }

        // 🌍 اسم المنصة بلغة مختلفة لكل لغة (اختياري) - بتملأ خانة نص صغيرة لكل لغة مدعومة،
        // أي لغة سايبها فاضية بتستخدم الاسم العام تلقائيًا (شوف getPlatformDisplayName).
        function populatePlatformNameByLang() {
            let box = document.getElementById('platformNameByLangInputs');
            if(!box) return;
            let byLang = {};
            try { byLang = JSON.parse(localStorage.getItem('platformNameByLang')) || {}; } catch(e) {}
            box.innerHTML = ALL_LANGUAGES.filter(l => SUPPORTED_LANG_CODES.includes(l.code)).map(function(l){
                return `<div style="display:flex; align-items:center; gap:6px;">
                    <span style="font-size:11px; width:70px; flex-shrink:0; color:var(--text-muted);">${l.name}</span>
                    <input type="text" data-platform-name-lang="${l.code}" value="${(byLang[l.code] || '').replace(/"/g,'&quot;')}" style="margin:0;" placeholder="${t('platform_name_per_lang_ph', 'اسم المنصة بهذه اللغة')}">
                </div>`;
            }).join('');
        }
        function savePlatformNameByLang() {
            let byLang = {};
            document.querySelectorAll('[data-platform-name-lang]').forEach(function(input){
                let code = input.getAttribute('data-platform-name-lang');
                let val = input.value.trim();
                if(val) byLang[code] = val;
            });
            localStorage.setItem('platformNameByLang', JSON.stringify(byLang));
            showToast('✅ ' + t('platform_name_per_lang_saved', 'اتحفظت أسماء المنصة لكل لغة'));
        }

        function saveShowGuideInAboutStore() {
            localStorage.setItem('showGuideInAboutStore', document.getElementById('showGuideInAboutStoreCheckbox').checked ? 'true' : 'false');
            showToast('✅ اتحفظ الإعداد');
        }

        function populateFooterCopyrightSettings() {
            document.getElementById('footerCopyrightEnabledCheckbox').checked = localStorage.getItem('footerCopyrightEnabled') !== 'false';
            document.getElementById('footerCopyrightTextInput').value = localStorage.getItem('footerCopyrightCustomText') || '';
            let sel = document.getElementById('footerCopyrightScopeSelect');
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            sel.innerHTML = '<option value="all">كل المتاجر + المنصة</option>' +
                Object.keys(stores).map(k => `<option value="${k}">متجر واحد فقط: ${getStoreDisplayName(k, stores[k])}</option>`).join('');
            sel.value = localStorage.getItem('footerCopyrightScope') || 'all';
        }
        function saveFooterCopyrightSettings() {
            localStorage.setItem('footerCopyrightEnabled', document.getElementById('footerCopyrightEnabledCheckbox').checked ? 'true' : 'false');
            localStorage.setItem('footerCopyrightCustomText', document.getElementById('footerCopyrightTextInput').value.trim());
            localStorage.setItem('footerCopyrightScope', document.getElementById('footerCopyrightScopeSelect').value);
            showToast('✅ اتحفظت إعدادات سطر الحقوق');
        }
        // 🌍 سياسة الخصوصية بقت منفصلة لكل لغة - كل لغة ليها نصها الخاص جوه
        // privacyPolicyTextByLang (object بمفتاح كود اللغة)، عشان الزائر يشوف السياسة
        // بنفس لغة الواجهة بتاعته تلقائيًا بدل نص واحد ثابت بغض النظر عن اللغة.
        let __currentPrivacyPolicyEditLang = 'ar';
        function getPrivacyPolicyByLang() {
            try { return JSON.parse(localStorage.getItem('privacyPolicyTextByLang')) || {}; } catch(e) { return {}; }
        }
        function populatePrivacyPolicyEditorTabs() {
            let sel = document.getElementById('privacyPolicyLangSelect');
            if(!sel) return;
            sel.innerHTML = ALL_LANGUAGES.filter(l => SUPPORTED_LANG_CODES.includes(l.code)).map(function(l){
                return `<option value="${l.code}">${l.name}</option>`;
            }).join('');
            __currentPrivacyPolicyEditLang = currentAppLanguage || 'ar';
            sel.value = __currentPrivacyPolicyEditLang;
            loadPrivacyPolicyEditorContent(__currentPrivacyPolicyEditLang);
        }
        function loadPrivacyPolicyEditorContent(langCode) {
            let byLang = getPrivacyPolicyByLang();
            let editor = document.getElementById('privacyPolicyTextInput');
            if(!editor) return;
            // توافق مع نص قديم (قبل تعدد اللغات) كان محفوظ في مفتاح واحد - بيتحمّل كنص
            // اللغة العربية الافتراضي لو لسه مفيش نص عربي منفصل في النظام الجديد
            let legacy = localStorage.getItem('privacyPolicyText') || '';
            let content = byLang[langCode] !== undefined ? byLang[langCode] : (langCode === 'ar' ? legacy : '');
            editor.innerHTML = content;
        }
        function switchPrivacyPolicyEditorLang(langCode) {
            __currentPrivacyPolicyEditLang = langCode;
            loadPrivacyPolicyEditorContent(langCode);
        }
        function savePrivacyPolicyText() {
            let html = sanitizeRichHtml(document.getElementById('privacyPolicyTextInput').innerHTML);
            // لو المحرر فاضي فعليًا (مفيش نص، بس وسوم فاضية)، نحفظ فاضي عشان يرجع للنص الافتراضي
            let plain = stripHtmlTags(html).trim();
            let byLang = getPrivacyPolicyByLang();
            byLang[__currentPrivacyPolicyEditLang] = plain ? html : '';
            localStorage.setItem('privacyPolicyTextByLang', JSON.stringify(byLang));
            // نحدّث المفتاح القديم كمان لو إحنا بنحفظ نص العربي، عشان أي كود قديم لسه
            // بيقرا منه (توافق خلفي) يفضل شغال صح.
            if(__currentPrivacyPolicyEditLang === 'ar') localStorage.setItem('privacyPolicyText', plain ? html : '');
            showToast('✅ ' + t('privacy_policy_saved_toast', 'اتحفظت سياسة الخصوصية'));
        }

        function autoDetectLanguage() {
            // 🌍 لو الأدمن عطّل الكشف التلقائي من إعدادات المنصة، بنستخدم لغة المنصة الافتراضية
            // اللي هو حددها بس (مش لغة جهاز الزائر)، عشان يضمن كل زائر جديد يشوف نفس اللغة
            // أول ما يفتح المتجر، بدل ما تختلف من جهاز لجهاز.
            let platformDefaultLang = localStorage.getItem('platformDefaultLang') || 'ar';
            let autoDetectEnabled = localStorage.getItem('platformAutoDetectLang') !== 'false';
            if(!localStorage.getItem('appLanguage')) {
                if(autoDetectEnabled) {
                    let userLang = navigator.language || navigator.userLanguage;
                    let code = userLang.split('-')[0];
                    let found = ALL_LANGUAGES.find(l => l.code === code) && SUPPORTED_LANG_CODES.includes(code);
                    currentAppLanguage = found ? code : platformDefaultLang;
                } else {
                    currentAppLanguage = platformDefaultLang;
                }
            }
            applyTranslations(currentAppLanguage);
        }

        function changeLanguage(langCode) {
            currentAppLanguage = langCode;
            localStorage.setItem('appLanguage', langCode);
            document.getElementById('langCornerDropdown').classList.remove('show');
            applyTranslations(langCode);
            refreshDynamicContentForLanguage();
        }

        // 🌍 لما اللغة تتغيّر، النصوص الثابتة في الـ HTML بتتغيّر فورًا عن طريق data-i18n،
        // لكن أي محتوى اتبنى ديناميكيًا بالجافاسكريبت (زي سجل الطلبات) محتاج نعيد رسمه
        // عشان يستخدم دالة t() بلغته الجديدة بدل ما يفضل زي ما كان وقت أول رسم.
        function refreshDynamicContentForLanguage() {
            // 🐛 كان فيه رجوع فوري (return) هنا لو مفيش تاجر مسجّل دخوله، يعني أي نص
            // ديناميكي في صفحة العميل العادي (زي سطر حقوق النشر) كان يفضل بلغته القديمة
            // بعد تغيير اللغة لحد ما يعمل رفرش يدوي للصفحة. دلوقتي بنعيد رسم فوتر المتجر/المنصة
            // دايمًا بغض النظر عن وجود جلسة تاجر من عدمه.
            try {
                if(activeStore) {
                    let allStoresNow = JSON.parse(localStorage.getItem('allStores')) || {};
                    if(allStoresNow[activeStore]) renderFooterSocial(allStoresNow[activeStore]);
                } else {
                    renderPlatformFooterSocial();
                }
            } catch(e) {}

            try {
                let ppModal = document.getElementById('privacyPolicyModal');
                if(ppModal && !ppModal.classList.contains('hidden')) openPrivacyPolicyModal();
            } catch(e) {}

            let merchant = localStorage.getItem('currentActiveMerchant');
            if(!merchant) return;
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            let store = stores[merchant];
            if(!store) return;
            if(document.getElementById('merchantOrderHistoryList')) renderOrderHistory(store);
            try { initNewOrdersBell(); } catch(e) {}
            try { refreshMerchantUndoImportBtn(); } catch(e) {}
            // 🌍 قوائم العملات بتتبني بأسماء العملات المترجمة، فلازم تتبني تاني لما اللغة تتغيّر
            // عشان الأسماء تفضل متسقة مع اللغة الجديدة من غير ما يحتاج المستخدم يعمل رفرش للصفحة.
            if(document.getElementById('storeCurrencyInput')) populateCurrencyDropdown('storeCurrencyInput', store.currency);
            if(document.getElementById('prodCurrencyQuickSelect')) populateCurrencyDropdown('prodCurrencyQuickSelect', store.currency);
            try { mountRichToolbars(); } catch(e) {}
        }

        // تطبيق الترجمة على نصوص الواجهة الأساسية (تُستخدم العربية أو الإنجليزية حالياً، 
        // وباقي اللغات تعرض بالإنجليزية مؤقتاً لحين إضافة نصوصها بالكامل)
        // ملحوظة: كان فيه خطأ حقيقي هنا - الكود القديم كان بيعتمد على ترتيب الأزرار (index) في الشريط السفلي،
        // لكن الشريط فيه 5 أزرار مش 4 (فيه زرار "من نحن" منفصل للمتجر وزرار "من نحن" تاني منفصل للمنصة،
        // الاتنين موجودين في الصفحة في نفس الوقت ومتخفي واحد منهم بس بـ CSS)، فكان بيكتب نص زرار "دخول التجار"
        // فوق زرار "من نحن" بتاع المنصة بالغلط. الحل الصحيح والنهائي: نستهدف كل زرار بمعرّفه (id) مباشرة
        // بدل الاعتماد على ترتيبه، عشان أي زرار يتضاف أو يتشال بعد كده منأثرش على باقي الترجمة خالص.
        // ============================================================
        // 🌍 محرك ترجمة عام قابل للتوسع: بيدور على أي عنصر عليه data-i18n
        // (نص العنصر)، data-i18n-ph (placeholder)، أو data-i18n-html (نص بجوار
        // أيقونة fa، بيسيب الأيقونة ويغيّر النص بس) ويطبّق الترجمة المناسبة له
        // من TRANSLATIONS. ده بيخلي إضافة أي نص جديد للترجمة مجرد ما تحط عليه
        // data-i18n="اسم_المفتاح" في الـ HTML وتضيف المفتاح ده في TRANSLATIONS.
        // ============================================================
        // 🌍 دالة ترجمة عامة للنصوص اللي بتتبني ديناميكيًا بالجافاسكريبت (مش نصوص HTML
        // ثابتة). بترجع النص المترجم لو موجود، وإلا بترجع النص الأصلي زي ما هو (احتياطي آمن).
        function t(key, fallback) {
            let dict = ensureLanguageLoaded(currentAppLanguage) || ensureLanguageLoaded('ar');
            if(dict[key] !== undefined) return dict[key];
            let arDict = ensureLanguageLoaded('ar');
            if(arDict[key] !== undefined) return arDict[key];
            return fallback !== undefined ? fallback : key;
        }
        // 🌍 اسم المنصة بلغة مختلفة لكل لغة (لو الأدمن حدده)، وإلا بيرجع للاسم العام الواحد
        // (الحقل القديم)، وإلا نص افتراضي مترجم. بيُستخدم في كل مكان بيظهر فيه اسم المنصة
        // (الهيدر، سطر الحقوق، صفحة "عن المنصة") عشان يتغيّر مع اللغة بدل ما يفضل ثابت.
        function getPlatformDisplayName() {
            let byLang = {};
            try { byLang = JSON.parse(localStorage.getItem('platformNameByLang')) || {}; } catch(e) {}
            let lang = (typeof currentAppLanguage !== 'undefined' && currentAppLanguage) || localStorage.getItem('appLanguage') || 'ar';
            if(byLang[lang] && byLang[lang].trim()) return byLang[lang].trim();
            let base = localStorage.getItem('platformName');
            if(base && base.trim()) return base.trim();
            return t('platform_default_name', 'منصتنا');
        }

        function applyDataI18n(langCode) {
            let dict = ensureLanguageLoaded(langCode) || ensureLanguageLoaded('ar');
            document.querySelectorAll('[data-i18n]').forEach(el => {
                let key = el.getAttribute('data-i18n');
                if(dict[key] !== undefined) el.textContent = dict[key];
            });
            document.querySelectorAll('[data-i18n-ph]').forEach(el => {
                let key = el.getAttribute('data-i18n-ph');
                if(dict[key] !== undefined) el.placeholder = dict[key];
            });
            document.querySelectorAll('[data-i18n-html]').forEach(el => {
                let key = el.getAttribute('data-i18n-html');
                if(dict[key] === undefined) return;
                let icon = el.querySelector('i');
                el.innerHTML = (icon ? icon.outerHTML + ' ' : '') + dict[key];
            });
            // 🏷️ data-i18n-title: لعناصر محتاجة tooltip (attribute title) مترجم، بدون ما يأثر على محتواها الظاهر
            document.querySelectorAll('[data-i18n-title]').forEach(el => {
                let key = el.getAttribute('data-i18n-title');
                if(dict[key] !== undefined) el.title = dict[key];
            });
            // 🔤 لغات RTL (عربي وفارسي وأردو وعبري) بتاخد اتجاه يمين-لشمال، وأي لغة تانية شمال-ليمين
            let rtlLangs = ['ar', 'fa', 'ur', 'he'];
            document.documentElement.setAttribute('dir', rtlLangs.includes(langCode) ? 'rtl' : 'ltr');
            document.documentElement.setAttribute('lang', langCode);
        }

        function applyTranslations(langCode) {
            applyDataI18n(langCode);
            let dict = ensureLanguageLoaded(langCode) || ensureLanguageLoaded('en');

            function setLabel(id, text) {
                let el = document.getElementById(id);
                if(el) el.textContent = text;
            }
            function setIconLabel(id, text) {
                // للأزرار اللي شكلها <button><i></i>النص</button> من غير span منفصل للنص
                let el = document.getElementById(id);
                if(el && el.childNodes.length) el.childNodes[el.childNodes.length - 1].textContent = text;
            }

            setIconLabel('homeNavBtn', dict.nav_home);
            setLabel('cartNavLabel', dict.nav_cart);
            setIconLabel('storeAboutNavBtn', dict.nav_about_store);
            setIconLabel('platformAboutNavBtn', dict.nav_about_platform);
            setIconLabel('authNavBtn', dict.nav_auth);
            setIconLabel('cartTitleHeading', dict.cart_title);
            setIconLabel('checkoutMainBtn', dict.checkout_btn);
            setIconLabel('backHomeBtn', dict.back_btn);
            try { populateCountryCodes(); } catch(e) {}

            let searchInput = document.getElementById('searchInput');
            if(searchInput) searchInput.placeholder = dict.search_ph;
            let mainTitle = document.getElementById('mainTitle');
            try {
                let __st = (JSON.parse(localStorage.getItem('allStores')) || {})[activeStore];
                if(mainTitle && __st) renderCategoriesTitle(__st);
                else if(mainTitle && mainTitle.innerText.includes('التصنيفات')) mainTitle.innerText = dict.categories_title;
            } catch(e) {}

            // 🧺 لو السلة فاضية دلوقتي فعلاً، نترجم رسالة "السلة فارغة" الافتراضية معاها.
            // لو فيها منتجات، بنسيبها زي ما هي (أسماء المنتجات دي بلغة التاجر اللي كتبها بيها،
            // مش حاجة المنصة تترجمها تلقائيًا).
            let cartList = document.getElementById('cartItemsList');
            if(cartList && (cartList.innerText.trim() === 'السلة فارغة.' || cartList.innerText.trim() === 'Your cart is empty.')) {
                cartList.innerText = dict.cart_empty;
            }
        }

        function initApp() {
            updateHeaderBrand();
            updateCartBadge();
            routeFromUrl();
        }

        // =====================================================================
        // نظام الروابط: كل متجر مسجل عندنا بقى ليه رابط خاص فعلي ومنفصل
        // (مثال: https://your-domain.com/?store=اسم_المتجر) يقدر التاجر يشاركه
        // لوحده بدون أي ظهور لهوية المنصة نفسها (لا زر "كل المتاجر"، ولا دخول
        // تجار، ولا أي حاجة تدل إن ده جزء من منصة أكبر) — تمامًا زي متجر مستقل قائم بذاته.
        // رابط المنصة الرئيسي (من غير ?store=) هو فقط دليل المتاجر + تسجيل/دخول التجار.
        // =====================================================================
        function getStoreParamFromUrl() {
            try { return new URLSearchParams(window.location.search).get('store'); }
            catch(e) { return null; }
        }

        function pushStoreUrl(name) {
            try {
                let url = new URL(window.location.href);
                url.search = '';
                url.searchParams.set('store', name);
                window.history.pushState({ store: name }, '', url.toString());
            } catch(e) {}
        }

        function pushPlatformUrl() {
            try {
                let url = new URL(window.location.href);
                url.search = '';
                window.history.pushState({}, '', url.toString());
            } catch(e) {}
        }

        // يقرر إيه اللي المفروض يظهر (متجر معين وله رابطه الخاص، أو الصفحة الرئيسية للمنصة)
        // بناءً على رابط الصفحة الحالي فعليًا، مش بس بناءً على آخر حالة متخزنة عشوائيًا
        function routeFromUrl() {
            let storeParam = getStoreParamFromUrl();
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            if(storeParam && stores[storeParam] && stores[storeParam].status !== 'stopped') {
                activeStore = storeParam;
                localStorage.setItem('currentActiveStore', storeParam);
                localStorage.setItem('viewMode', 'store');
            } else {
                // مفيش رابط متجر محدد في العنوان — لو التاجر مسجل دخول بالفعل بجلسته،
                // المفروض يشوف متجره هو تلقائي بدل ما يتفاجئ بدليل كل متاجر المنصة
                // (كان ده هو الخطأ: أي إعادة تحميل للصفحة كانت بترجّعه لدليل المتاجر رغم إنه مسجل دخول).
                let loggedMerchant = localStorage.getItem('currentActiveMerchant');
                if(loggedMerchant && stores[loggedMerchant] && stores[loggedMerchant].status !== 'stopped') {
                    activeStore = loggedMerchant;
                    localStorage.setItem('currentActiveStore', loggedMerchant);
                    localStorage.setItem('viewMode', 'store');
                } else {
                    localStorage.setItem('viewMode', 'platform');
                    if(storeParam) {
                        // رابط متجر غير موجود أو موقوف حاليًا: ننظف الرابط ونرجع لصفحة المنصة الرئيسية
                        try {
                            let url = new URL(window.location.href);
                            url.search = '';
                            window.history.replaceState({}, '', url.toString());
                        } catch(e) {}
                        setTimeout(() => showToast('⚠️ هذا المتجر غير متاح حاليًا.'), 200);
                    }
                }
            }
            switchTab('home');

            // 📱 دعم رابط QR لمنتج معيّن (?store=...&product=اسم_المنتج): لو موجود، نفتح
            // تفاصيل المنتج ده تلقائيًا بعد ما الصفحة تخلص رسم نفسها بلحظة بسيطة.
            try {
                let productParam = new URLSearchParams(window.location.search).get('product');
                if(productParam && activeStore) {
                    setTimeout(function() { openProductDetails(productParam); }, 400);
                }
            } catch(e) {}

            // 🔗 دعم رابط تتبع طلب مباشر (?store=...&track=كود_التتبع): لو موجود، نفتح
            // نافذة التتبع تلقائيًا ونبحث بالكود على طول - العميل مايحتاجش يكتب أي حاجة،
            // بس يفتح الرابط اللي حفظه بعد ما أكّد طلبه.
            try {
                let trackParam = new URLSearchParams(window.location.search).get('track');
                if(trackParam && activeStore) {
                    setTimeout(function() {
                        openTrackOrderModal();
                        document.getElementById('trackOrderCodeInput').value = trackParam;
                        searchOrderStatus();
                    }, 400);
                }
            } catch(e) {}
        }

        // ============================================================
        // 🚀 تحميل "لوحة التحكم" (dashboard.html) بشكل مؤجّل (lazy load):
        // ملف منفصل فيه كل مودالات وأقسام لوحة الأدمن ولوحة التاجر، مش موجود
        // في index.html من البداية. أول مرة أدمن أو تاجر يسجّل دخول فعليًا،
        // بنجيبه بطلب واحد ونحطه مكان placeholder فاضي (dashboardFragmentMount)،
        // وبعد كده بيفضل محفوظ في الصفحة عادي (مش بيتكرر تحميله كل مرة).
        // ============================================================
        let __dashboardFragmentLoaded = false;
        function ensureDashboardFragmentLoaded(callback) {
            if(__dashboardFragmentLoaded) { callback(); return; }
            let mount = document.getElementById('dashboardFragmentMount');
            if(!mount) { __dashboardFragmentLoaded = true; callback(); return; }
            fetch('dashboard.html').then(function(r) {
                if(!r.ok) throw new Error('HTTP ' + r.status);
                return r.text();
            }).then(function(html) {
                mount.outerHTML = html;
                __dashboardFragmentLoaded = true;
                callback();
            }).catch(function(err) {
                console.error('فشل تحميل ملف لوحة التحكم (dashboard.html):', err);
                alert('⚠️ حصل خطأ في تحميل لوحة التحكم. تأكد إن ملف dashboard.html موجود في نفس مجلد الاستضافة بجانب index.html، وحاول تحدّث الصفحة.');
            });
        }

        function switchTab(tab, btn) {
            const sectionIds = ['platformHomeSection', 'homeSection', 'authSection', 'dashboardSection', 'adminSection', 'cartSection', 'productModal', 'deliveryModal', 'aboutUsModal', 'orderConfirmModal', 'directOrderSuccessModal', 'returnPolicyModal', 'storeCustomCodeModal', 'usageGuideModal', 'storeColorsModal', 'editAdminPermsModal', 'productsModal', 'categoriesModal'];
            sectionIds.forEach(id => {
                let el = document.getElementById(id);
                if(el) el.classList.add('hidden');
            });

            document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
            if(btn) btn.classList.add('active');
            try { syncBuyerAccountIcon(); } catch(e) {}

            if(tab === 'home') {
                let stores = JSON.parse(localStorage.getItem('allStores')) || {};
                let viewMode = localStorage.getItem('viewMode');
                let savedStore = localStorage.getItem('currentActiveStore');
                // فيه جلسة دخول شغالة فعلاً (أدمن أو تاجر) ولا زائر عادي؟
                // ده بيفرق معانا لأن التاجر/الأدمن ممكن يعاين متجر وهو لسه عاوز رجعة سهلة للوحته،
                // لكن الزائر العادي اللي داخل برابط متجر معين ماله دعوة بمنصة أكبر خالص
                let isLoggedInSession = (localStorage.getItem('isAdminLoggedIn') === 'true') || !!localStorage.getItem('currentActiveMerchant');
                if(viewMode === 'store' && savedStore && stores[savedStore]) {
                    activeStore = savedStore;
                    document.getElementById('homeSection').classList.remove('hidden');
                    document.getElementById('cartNavBtn').classList.remove('hidden');
                    document.getElementById('storeAboutNavBtn').classList.remove('hidden');
                    document.getElementById('platformAboutNavBtn').classList.add('hidden');
                    document.getElementById('authNavBtn').classList.toggle('hidden', !isLoggedInSession);
                    backToCategories();
                } else {
                    document.getElementById('platformHomeSection').classList.remove('hidden');
                    document.getElementById('cartNavBtn').classList.add('hidden');
                    document.getElementById('storeAboutNavBtn').classList.add('hidden');
                    document.getElementById('platformAboutNavBtn').classList.remove('hidden');
                    document.getElementById('authNavBtn').classList.remove('hidden');
                    updateHeaderBrand();
                    renderPlatformHome();
                }
            } else if(tab === 'cart') {
                if(localStorage.getItem('viewMode') !== 'store') { switchTab('home'); return; }
                document.getElementById('cartSection').classList.remove('hidden');
                renderCart();
            } else if(tab === 'auth') {
                let loggedMerchant = localStorage.getItem('currentActiveMerchant');
                let loggedAdmin = localStorage.getItem('isAdminLoggedIn');

                if(loggedAdmin === 'true' || loggedMerchant) {
                    // 🚀 تحسين أداء: لوحة الأدمن/التاجر (وكل مودالاتها) بقت في ملف منفصل
                    // (dashboard.html) بدل ما تكون جوه index.html من البداية، عشان أي زائر
                    // عادي بيتصفح متجر مش يضطر يحمّل كود لوحة إدارة كاملة هو مش هيلمسها أبدًا.
                    // الملف ده بيتحمّل مرة واحدة بس أول ما فعليًا حد يسجّل دخول كأدمن أو تاجر.
                    ensureDashboardFragmentLoaded(function() {
                        if(loggedAdmin === 'true') {
                            // لوحة الأدمن لازم تفضل بشكلها المحايد الثابت دايمًا، ومش بتاخد لون/هوية
                            // أي متجر تمت معاينته قبل كده عن طريق "زيارة المتجر" — عشان كده بنرجّعها
                            // لوضع المنصة الافتراضي (اللون + الهيدر) في كل مرة تُفتح فيها
                            applyStoreTheme(null);
                            localStorage.setItem('viewMode', 'platform');
                            updateHeaderBrand();
                            document.getElementById('adminSection').classList.remove('hidden');
                            renderAdminPanel();
                        } else if(loggedMerchant) {
                            document.getElementById('dashboardSection').classList.remove('hidden');
                            loadDashboard();
                        }
                    });
                } else {
                    // شاشة تسجيل الدخول العامة برضه محايدة دايمًا، مش بلون آخر متجر تمت معاينته كزائر
                    applyStoreTheme(null);
                    document.getElementById('authSection').classList.remove('hidden');
                    // 🏪 "تقديم طلب انضمام كتاجر" يظهر بس في الصفحة الرئيسية للمنصة (مفيش متجر متصفح حاليًا)،
                    // مش وانت جوه متجر تاجر تاني وداخل بس تسجل دخولك أو تتابع طلبك.
                    try { document.getElementById('merchantRegisterCtaBox').classList.toggle('hidden', !!activeStore); } catch(e) {}
                    // 🔗 رابط "عميل؟ ادخل من هنا" يظهر بس وانت جوه متجر معيّن (عشان بوابة الدخول
                    // الموحّدة وفرت المكان المظبوط للعميل، وده الرابط الاحتياطي لو وصل هنا غلط).
                    try { document.getElementById('authSwitchToBuyerLinkBox').classList.toggle('hidden', !activeStore); } catch(e) {}
                    setTimeout(checkStorageAndWarn, 100);
                }
            }
        }

        // الهيدر بيعرض هوية مختلفة حسب المكان: لوجو واسم المنصة نفسها وانت في الصفحة الرئيسية للمنصة،
        // أو لوجو واسم المتجر بالذات وانت جوه متجر تاجر معين - عشان محدش يحس إن المنصة نفسها "متجر تاني"
        // اسم الدخول (المفتاح الفريد في allStores) مختلف عن "الاسم الظاهر للعملاء" اللي ممكن
        // يتكرر مع متاجر تانية. أي مكان بيعرض اسم المتجر للعميل لازم يستخدم الدالة دي بدل ما
        // يعرض المفتاح مباشرة، عشان العميل يشوف الاسم اللي التاجر اختاره فعلاً لمتجره.
        function getStoreDisplayName(key, store) {
            return (store && store.displayName && store.displayName.trim()) ? store.displayName.trim() : key;
        }

        function updateHeaderBrand() {
            let viewMode = localStorage.getItem('viewMode');
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            let store = stores[activeStore];

            let logoImg = document.getElementById('headerStoreLogo');
            let pEl = document.getElementById('headerPlatformName');

            if(viewMode === 'store' && store) {
                if(store.logo) {
                    logoImg.src = store.logo;
                    logoImg.style.display = 'block';
                    logoImg.title = getStoreDisplayName(activeStore, store);
                    logoImg.alt = getStoreDisplayName(activeStore, store);
                } else {
                    logoImg.style.display = 'none';
                }
                if(pEl) {
                    pEl.textContent = getStoreDisplayName(activeStore, store);
                    pEl.style.color = store.themeColor || 'var(--primary-color)';
                }
                injectStoreCustomCode(store);
                try { injectCustomCode(activeStore); } catch(e) {}
            } else {
                let platformLogo = localStorage.getItem('platformLogo');
                let platformName = getPlatformDisplayName();
                let platformNameColor = localStorage.getItem('platformNameColor') || 'var(--primary-color)';
                if(platformLogo) {
                    logoImg.src = platformLogo;
                    logoImg.style.display = 'block';
                    logoImg.title = platformName;
                    logoImg.alt = platformName;
                } else {
                    logoImg.style.display = 'none';
                }
                if(pEl) {
                    pEl.textContent = platformName;
                    pEl.style.color = platformNameColor;
                }
                clearStoreCustomCode();
                try { injectCustomCode(null); } catch(e) {}
            }
        }

        // --- المعاينة المباشرة للصور مع ضغط وتصغير الحجم قبل التخزين ---
        // (صور الموبايل الحديثة تكون غالباً 2-8 ميجابايت، وتخزين 3-4 صور بحجمها الأصلي كان كافياً
        // لملء مساحة localStorage بالكامل ويوقف كل شيء بعده. الحل: تصغير أي صورة لعرض أقصى 900px
        // وضغطها كـ JPEG بجودة 0.75 قبل حفظها، فيقل حجمها عادة لأقل من 150-250 كيلوبايت).
        // --- منطق ضغط/تصغير الصورة المشترك (نفس الخطوات بالظبط لأي صورة، سواء صورة رئيسية
        // واحدة أو صور معرض متعددة)، مستقل تمامًا عن أي عنصر <input> عشان نقدر نستخدمه
        // مع أكتر من ملف في نفس الوقت (اختيار متعدد للصور) من غير ما نكرر الكود. ---
        // ============================================================
        // ☁️ رفع الصور لـ ImgBB بدل تخزينها base64: بيحل مشكلة حد الـ 1 ميجابايت
        // في Firestore نهائيًا (الرابط النصي صغير جدًا مهما كانت الصورة)، وبيقلل
        // حجم بيانات المتجر في localStorage نفسه كمان (أسرع حفظ وتحميل للصفحة).
        // لو الرفع فشل لأي سبب (النت واقع، ImgBB بطيء...)، بنستخدم نسخة base64
        // المحلية كحل احتياطي عشان المنتج يتحفظ برضه ومايضيعش شغل التاجر.
        // ============================================================
        const IMGBB_API_KEY = '558ac086e9ebb188cbabf938f11250ed';
        let __pendingImageUploads = 0;
        function uploadToImgBB(base64DataUrl, callback) {
            __pendingImageUploads++;
            let base64Only = base64DataUrl.split(',')[1] || base64DataUrl;
            let form = new FormData();
            form.append('image', base64Only);
            fetch('https://api.imgbb.com/1/upload?key=' + IMGBB_API_KEY, {
                method: 'POST',
                body: form
            }).then(r => r.json()).then(data => {
                __pendingImageUploads--;
                if(data && data.success && data.data && data.data.url) {
                    callback(data.data.url);
                } else {
                    console.warn('⚠️ فشل رفع الصورة لـ ImgBB، هنستخدم النسخة المحلية بدلاً منها:', data);
                    callback(base64DataUrl);
                }
            }).catch(err => {
                __pendingImageUploads--;
                console.warn('⚠️ تعذر الاتصال بـ ImgBB، هنستخدم النسخة المحلية بدلاً منها:', err.message);
                callback(base64DataUrl);
            });
        }

        function compressImageDataUrl(rawDataUrl, callback) {
            let img = new Image();
            img.onload = function() {
                // 📏 حجم أكبر شوية (1200 بدل 900) وجودة أعلى (0.85 بدل 0.75) - قريب من المعايير
                // اللي منصات زي أمازون وعلي إكسبريس بتستخدمها لصور المنتجات، عشان العميل يقدر
                // يكبّر الصورة ويشوف تفاصيلها كويس من غير ما تكون تقيلة زي الصورة الأصلية.
                let maxDim = 1200;
                let w = img.width, h = img.height;
                if (w > maxDim || h > maxDim) {
                    if (w >= h) { h = Math.round(h * (maxDim / w)); w = maxDim; }
                    else { w = Math.round(w * (maxDim / h)); h = maxDim; }
                }
                let canvas = document.createElement('canvas');
                canvas.width = w; canvas.height = h;
                let ctx = canvas.getContext('2d');
                // مهم: نملأ الخلفية بالأبيض أولاً قبل رسم الصورة، لأن تحويل صور PNG الشفافة إلى JPEG
                // (الذي لا يدعم الشفافية) كان يجعل أي منطقة شفافة تظهر باللون الأسود بدل الأبيض - وهذا سبب المشكلة بالضبط.
                ctx.fillStyle = '#ffffff';
                ctx.fillRect(0, 0, w, h);
                ctx.drawImage(img, 0, 0, w, h);
                let compressed;
                try {
                    compressed = canvas.toDataURL('image/jpeg', 0.85);
                } catch(err) {
                    compressed = rawDataUrl; // فشل الضغط (مثلاً صورة SVG) - استخدم الأصلية
                }
                callback(compressed);
            };
            img.onerror = function() {
                callback(rawDataUrl); // لو تعذّرت المعالجة، استخدم الصورة الأصلية زي ما هي
            };
            img.src = rawDataUrl;
        }

        function previewImage(input, previewImgId, onDone) {
            let previewEl = document.getElementById(previewImgId);
            if (!(input.files && input.files[0])) return;
            let file = input.files[0];
            let reader = new FileReader();
            reader.onload = function(e) {
                // ✅ أول حاجة بنعملها: نعرض الصورة الأصلية فورًا زي ما هي، من غير ما ننتظر أي
                // ضغط أو تحويل. ده بيضمن إن المعاينة تظهر فورًا ومضمونة 100% مهما كان الجهاز،
                // بدل ما تفضل معلّقة على تحميل/فك تشفير الصورة (Image.onload) اللي كان بيسبب
                // ظهور مربع أبيض فاضي في بعض الأجهزة (خصوصًا لو الصورة كبيرة أو الجهاز بطيء)
                // لحد ما المستخدم يعيد اختيار الصورة تاني بالغلط ظنًا منه إنها متأخذتش.
                if(previewEl) {
                    // احتياط إضافي: نفرض حدود العرض بالـ inline style كمان (مش بس كلاس CSS)،
                    // عشان الصورة الأصلية الكبيرة (قبل الضغط) متبوظش شكل الصفحة لحظة ظهورها الأول.
                    previewEl.style.maxHeight = '140px';
                    previewEl.style.width = '100%';
                    previewEl.style.objectFit = 'contain';
                    previewEl.onerror = function() {
                        previewEl.style.display = 'none';
                        showToast('⚠️ تعذر عرض هذه الصورة، جرب صورة تانية.');
                    };
                    previewEl.src = e.target.result;
                    previewEl.style.display = 'block';
                }
                input.setAttribute('data-base64', e.target.result); // نسخة احتياطية فورية لحد ما الضغط يخلص

                compressImageDataUrl(e.target.result, function(compressed) {
                    // نعرض النسخة المضغوطة فورًا في المعاينة (شكل سريع وواضح للتاجر)، وبالتوازي
                    // نرفعها لـ ImgBB في الخلفية. لحد ما الرفع يخلص، data-base64 فيها النسخة
                    // المحلية المضغوطة كقيمة مؤقتة (لو التاجر ضغط "حفظ" بسرعة قبل ما الرفع يخلص)،
                    // وبعد ما الرفع ينجح بتتحدث لرابط ImgBB الصغير بدل الصورة الكاملة.
                    input.setAttribute('data-base64', compressed);
                    if(previewEl) { previewEl.src = compressed; previewEl.style.display = 'block'; }
                    input.setAttribute('data-upload-pending', '1');
                    uploadToImgBB(compressed, function(finalUrl) {
                        input.setAttribute('data-base64', finalUrl);
                        input.removeAttribute('data-upload-pending');
                        if(onDone) onDone(finalUrl);
                    });
                });

                // ⚠️ بنصفّر قيمة الـ input هنا (جوه onload، بعد ما القراءة خلصت تمامًا) مش قبلها،
                // عشان لو صفّرناها فورًا بعد استدعاء readAsDataURL() وهي لسه شغالة في الخلفية،
                // بعض المتصفحات/الأجهزة (خصوصًا شاشات أندرويد الأقدم) كانت بتلغي القراءة نفسها
                // في نص الطريق، فتظهر صورة فاضية بيضا أو سودا أو ناقصة - وده بالظبط سبب المشكلة
                // اللي كانت بتحصل. تصفيرها هنا بيضمن إن القراءة خلصت تمامًا الأول.
                input.value = '';
            };
            reader.onerror = function() {
                showToast('⚠️ تعذر قراءة الصورة، جرب تختارها تاني أو جرب صورة تانية.');
                input.value = '';
            };
            reader.readAsDataURL(file);
        }

        // --- دخول وتأكيد البيانات السريع ---
        // --- حماية دخول: قفل مؤقت للحساب بعد عدد محاولات دخول فاشلة (حماية جزئية فقط - راجع الشرح) ---
        const MAX_LOGIN_ATTEMPTS = 5;
        const DEFAULT_LOGIN_LOCK_MINUTES = 10;

        // ⏱️ مدة قفل الدخول بعد محاولات فاشلة متكررة: قابلة للتخصيص على مستويين -
        // (1) الأدمن بيحدد مدة افتراضية للمنصة كلها (10 دقايق افتراضيًا)،
        // (2) أي تاجر يقدر يحدد مدة مختلفة لحسابه هو ومساعديه بالذات جوه متجره،
        // وبتاخد أولوية على إعداد الأدمن العام لو موجودة.
        function getLockoutMinutesForName(name) {
            let platformDefault = parseInt(localStorage.getItem('platformLoginLockoutMinutes')) || DEFAULT_LOGIN_LOCK_MINUTES;
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            let lname = (name || '').trim().toLowerCase();
            if(stores[name] !== undefined) {
                return stores[name].loginLockoutMinutes || platformDefault;
            }
            for(let key in stores) {
                let staffList = stores[key].staff || [];
                if(staffList.some(s => s.username.toLowerCase() === lname)) {
                    return stores[key].loginLockoutMinutes || platformDefault;
                }
            }
            return platformDefault;
        }

        function loginLockKey(name) {
            return 'loginLock_' + name.trim().toLowerCase();
        }

        // بيرجع عدد الدقائق المتبقية للقفل لو الحساب مقفول دلوقتي، أو null لو مش مقفول
        function checkLoginLock(name) {
            let key = loginLockKey(name);
            let info = JSON.parse(localStorage.getItem(key) || 'null');
            if(!info || !info.lockedUntil) return null;
            if(Date.now() < info.lockedUntil) {
                return Math.ceil((info.lockedUntil - Date.now()) / 60000);
            }
            localStorage.removeItem(key); // انتهت مدة القفل
            return null;
        }

        // بتسجل محاولة فاشلة، وبترجع true لو الحساب اتقفل بسبب المحاولة دي بالذات
        function registerFailedLogin(name) {
            let key = loginLockKey(name);
            let info = JSON.parse(localStorage.getItem(key) || 'null') || { count: 0 };
            info.count = (info.count || 0) + 1;
            let justLocked = false;
            if(info.count >= MAX_LOGIN_ATTEMPTS) {
                let minutes = getLockoutMinutesForName(name);
                info.lockedUntil = Date.now() + minutes * 60000;
                info.count = 0;
                justLocked = true;
            }
            localStorage.setItem(key, JSON.stringify(info));
            return justLocked;
        }

        function clearLoginAttempts(name) {
            localStorage.removeItem(loginLockKey(name));
        }

        function unifiedLoginSubmit() {
            let name = document.getElementById('loginStoreUserName').value.trim();
            let pass = document.getElementById('loginStorePass').value.trim();
            if(!name) { alert('برجاء إدخال اسم المستخدم!'); return; }

            let lockedMins = checkLoginLock(name);
            if(lockedMins) {
                showAppModal(
                    t('lockout_title', 'الدخول موقوف مؤقتًا'),
                    '⛔',
                    `${t('lockout_body', 'تم إيقاف تسجيل الدخول لهذا الحساب مؤقتًا بسبب محاولات دخول فاشلة متكررة.')}<br><strong>${t('lockout_wait', 'حاول تاني بعد')} ${lockedMins} ${t('unit_minute', 'دقيقة')}.</strong><br><span style="font-size:11.5px; color:var(--text-muted);">${t('lockout_device_note', 'ملحوظة: القفل ده مرتبط بهذا الجهاز/المتصفح بس، وده إجراء أمان ضد محاولات التخمين المتكررة.')}</span>`
                );
                return;
            }

            let adminAccounts = JSON.parse(localStorage.getItem('adminAccounts')) || [];
            // 🔒 لو الأدمن حدد طريقة دخول واحدة بس (اسم فقط أو بريد فقط)، بنحترم اختياره هنا كمان
            let matchedAdmin = adminAccounts.find(a =>
                a.password === pass && (
                    (a.username.toLowerCase() === name.toLowerCase() && (a.loginMethod || 'both') !== 'email') ||
                    (a.email && a.emailVerified && a.email.toLowerCase() === name.toLowerCase() && (a.loginMethod || 'both') !== 'username')
                )
            );

            if(matchedAdmin) {
                clearLoginAttempts(name);
                localStorage.setItem('isAdminLoggedIn', 'true');
                localStorage.setItem('loggedAdminUsername', matchedAdmin.username);
                localStorage.setItem('loggedAdminRole', matchedAdmin.role);
                try { syncTopHeaderChatIcon(); } catch(e) {}
                switchTab('auth');
                return;
            }

            let stores = JSON.parse(localStorage.getItem('allStores')) || {};

            // ============================================================
            // 👥 تسجيل دخول مساعدي المتجر: كل مساعد ليه اسم دخول وكلمة مرور خاصة بيه
            // (مختلفة عن بيانات صاحب المتجر نفسه)، وبيانات المساعد دي محفوظة جوه
            // بيانات المتجر بس (مش حساب مستقل على مستوى المنصة زي حسابات الأدمن).
            // المساعد بيدخل من نفس الفورم ده بالظبط (نفس صفحة "تسجيل دخول التجار")،
            // ومش عنده أي متجر خاص بيه - بيدخل على نفس لوحة المتجر اللي هو مساعد فيه،
            // لكن بصلاحيات محدودة حسب ما صاحب المتجر حدده له وقت إضافته.
            // ============================================================
            let staffMatch = null, staffStoreKey = null;
            for(let key in stores) {
                let staffList = stores[key].staff || [];
                let found = staffList.find(s => s.username.toLowerCase() === name.toLowerCase() && s.password === pass);
                if(found) { staffMatch = found; staffStoreKey = key; break; }
            }
            if(staffMatch) {
                // 🔒 المساعد لازم يدخل من رابط متجره الخاص بس (?store=اسم_المتجر)،
                // مش من رابط المنصة العام. ده مهم جدًا خصوصًا بعد ما ينقل التاجر متجره
                // لاستضافة مستقلة: رابط المتجر ده (ومساعديه اللي جواه) بيبقى منفصل
                // تمامًا عن رابط المنصة الرئيسي. صاحب المتجر نفسه (مش المساعد) هو
                // الوحيد اللي يقدر يدخل من الاتنين (رابط المنصة أو رابط متجره).
                let urlStoreParam = getStoreParamFromUrl();
                if(urlStoreParam !== staffStoreKey) {
                    showAppModal(t('staff_wrong_link_title', 'الدخول من هنا مش متاح لحسابك'), '⛔', t('staff_wrong_link_body', 'لازم تدخل من رابط متجرك الخاص اللي بعتهولك صاحب المتجر، مش من رابط المنصة العام.'));
                    return;
                }
                clearLoginAttempts(name);
                if(stores[staffStoreKey].status === 'stopped') {
                    showAppModal(t('login_error_title', 'تعذّر تسجيل الدخول'), '🚫', t('store_stopped_msg', 'هذا المتجر موقوف حالياً.'));
                    return;
                }
                localStorage.setItem('currentActiveMerchant', staffStoreKey);
                localStorage.setItem('currentStaffUsername', staffMatch.username);
                stores[staffStoreKey].lastActivityAt = Date.now();
                saveAllStores(stores);
                activeStore = staffStoreKey;
                localStorage.setItem('currentActiveStore', staffStoreKey);
                localStorage.setItem('viewMode', 'store');
                updateHeaderBrand();
                switchTab('auth');
                return;
            }

            // ============================================================
            // 🤝 الشركاء: أدمن المنصة (مش صاحب المتجر) هو بس اللي يقدر يضيف "تاجر شريك"
            // لمتجر معين، ببيانات دخول مستقلة تمامًا عن صاحب المتجر الأصلي. الشريك ده
            // بيدير نفس المتجر بنفس صلاحيات المالك الكاملة (مش محدود زي المساعد)،
            // مفيد لو المتجر مملوك لأكتر من شخص/شركة وطلبوا من الإدارة كده. الشريك
            // بيدخل من رابط المنصة العام أو رابط المتجر، زيه زي المالك بالظبط.
            // ============================================================
            let coOwnerMatch = null, coOwnerStoreKey = null;
            for(let key in stores) {
                let coOwners = stores[key].coOwners || [];
                let found = coOwners.find(c => c.username.toLowerCase() === name.toLowerCase() && c.password === pass);
                if(found) { coOwnerMatch = found; coOwnerStoreKey = key; break; }
            }
            if(coOwnerMatch) {
                clearLoginAttempts(name);
                if(stores[coOwnerStoreKey].status === 'stopped') {
                    alert('هذا المتجر موقوف حالياً.');
                    return;
                }
                localStorage.removeItem('currentStaffUsername');
                localStorage.setItem('currentActiveMerchant', coOwnerStoreKey);
                stores[coOwnerStoreKey].lastActivityAt = Date.now();
                saveAllStores(stores);
                activeStore = coOwnerStoreKey;
                localStorage.setItem('currentActiveStore', coOwnerStoreKey);
                localStorage.setItem('viewMode', 'store');
                updateHeaderBrand();
                switchTab('auth');
                return;
            }

            // ⚡ فحص محلي فوري لصاحب المتجر نفسه (نفس منطق tryLegacyMerchantLogin) قبل أي
            // اتصال بالإنترنت - ده اللي كان بيسبب البطء الملحوظ في الدخول: كل تسجيل دخول
            // لصاحب متجر عادي كان يعدي أولاً على محاولتين Firebase (مساعد/شريك) بالتوازي،
            // ثم محاولة Firebase تالتة (صاحب المتجر) قبل ما يوصل للفحص المحلي اللي كان
            // ناجح من البداية. دلوقتي: لو البيانات مطابقة محليًا، الدخول فوري من غير أي
            // انتظار على الشبكة خالص. الشبكة (Firebase) بقت تُستخدم فقط كخط رجوع لو الفحص
            // المحلي فشل (مثلاً: تسجيل دخول بالبريد من جهاز/متصفح جديد لسه مالوش نسخة محلية).
            let quickOwnerKey = null;
            if(stores[name] && stores[name].pass === pass && (stores[name].loginMethod || 'both') !== 'email') {
                quickOwnerKey = name;
            } else {
                let byEmail = Object.keys(stores).find(k =>
                    stores[k].email && stores[k].emailVerified &&
                    (stores[k].loginMethod || 'both') !== 'username' &&
                    stores[k].email.toLowerCase() === name.toLowerCase() &&
                    stores[k].pass === pass
                );
                if(byEmail) quickOwnerKey = byEmail;
            }
            if(quickOwnerKey) {
                completeMerchantLogin(quickOwnerKey, stores, name);
                // 🔄 الدخول اكتمل فورًا محليًا، لكن نفتح جلسة Firebase الحقيقية في الخلفية
                // (من غير ما ننتظرها أو نوقف أي حاجة عليها) عشان مميزات محتاجة حساب موثّق
                // فعليًا (زي مراقبة الطلبات الجديدة لحظيًا) تفضل شغالة، من غير ما تأخّر الدخول.
                try {
                    if(window.firebaseAuth) {
                        let em = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(name) ? name : buildSyntheticEmail(name);
                        window.firebaseAuth.signInWithEmailAndPassword(em, pass).catch(() => {});
                    }
                } catch(e) {}
                return;
            }

            // 🔐 الفحص المحلي المباشر فشل (أو الحساب على جهاز جديد لسه مالوش نسخة محلية
            // من كلمة سره - كلمات سر المساعدين/الشركاء لا تُرفع للسحابة أبدًا لأسباب أمان،
            // فبيانات الدخول الوحيدة اللي بتتزامن هي حساب Firebase الحقيقي بتاعه). نجرب
            // الدخول كمساعد أو شريك عبر Firebase Authentication (بريد داخلي مبني على اسمه)
            // قبل ما نعتبرها محاولة دخول لصاحب متجر عادي.
            attemptStaffOrPartnerFirebaseLogin(name, pass);
        }

        function attemptStaffOrPartnerFirebaseLogin(name, pass) {
            if(!window.firebaseAuth || !window.signInAuxAccount) { attemptMerchantLogin(name, pass); return; }
            // ⚡ المحاولتين (مساعد/شريك) بقوا بالتوازي مش واحدة ورا التانية - يقلل وقت
            // الانتظار كتير قبل ما نرجع للمحاولة كصاحب متجر عادي.
            let staffEmail = window.buildSyntheticStaffEmail(name);
            let partnerEmail = window.buildSyntheticPartnerEmail(name);
            let staffAttempt = window.signInAuxAccount(staffEmail, pass).then(uid => ({ ok: true, uid, kind: 'staff' })).catch(() => ({ ok: false }));
            let partnerAttempt = window.signInAuxAccount(partnerEmail, pass).then(uid => ({ ok: true, uid, kind: 'coOwner' })).catch(() => ({ ok: false }));
            Promise.all([staffAttempt, partnerAttempt]).then(function(results) {
                let success = results.find(r => r.ok);
                if(success) resolveStaffOrPartnerAfterAuth(success.uid, success.kind, name, pass);
                else attemptMerchantLogin(name, pass);
            });
        }

        function resolveStaffOrPartnerAfterAuth(uid, kind, name, pass) {
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            let listKey = kind === 'staff' ? 'staff' : 'coOwners';
            for(let key in stores) {
                let list = stores[key][listKey] || [];
                let found = list.find(x => x.authUid === uid);
                if(found) {
                    if(kind === 'staff') {
                        let urlStoreParam = getStoreParamFromUrl();
                        if(urlStoreParam !== key) {
                            showAppModal(t('staff_wrong_link_title', 'الدخول من هنا مش متاح لحسابك'), '⛔', t('staff_wrong_link_body', 'لازم تدخل من رابط متجرك الخاص اللي بعتهولك صاحب المتجر، مش من رابط المنصة العام.'));
                            return;
                        }
                        localStorage.setItem('currentStaffUsername', found.username);
                    } else {
                        localStorage.removeItem('currentStaffUsername');
                    }
                    clearLoginAttempts(name);
                    if(stores[key].status === 'stopped') {
                        showAppModal(t('login_error_title', 'تعذّر تسجيل الدخول'), '🚫', t('store_stopped_msg', 'هذا المتجر موقوف حالياً.'));
                        return;
                    }
                    localStorage.setItem('currentActiveMerchant', key);
                    stores[key].lastActivityAt = Date.now();
                    saveAllStores(stores);
                    activeStore = key;
                    localStorage.setItem('currentActiveStore', key);
                    localStorage.setItem('viewMode', 'store');
                    updateHeaderBrand();
                    switchTab('auth');
                    return;
                }
            }
            // متوثّق على Firebase بس البيانات المحلية لسه بتتزامن - نستنى لحظة ونجرب تاني
            setTimeout(function() {
                let stores2 = JSON.parse(localStorage.getItem('allStores')) || {};
                for(let key in stores2) {
                    let list = stores2[key][listKey] || [];
                    if(list.find(x => x.authUid === uid)) { resolveStaffOrPartnerAfterAuth(uid, kind, name, pass); return; }
                }
                showAppModal(t('login_error_title', 'تعذّر تسجيل الدخول'), '⏳', 'تم التحقق من حسابك بنجاح، لكن بيانات المتجر لسه بتتزامن. حدّث الصفحة وجرب تاني بعد لحظات.');
            }, 1500);
        }

        // ============================================================
        // 🔐 تسجيل دخول صاحب المتجر: أول محاولة دايمًا عن طريق Firebase Authentication
        // الحقيقي (لو الحقل المكتوب شكله بريد إلكتروني)، وده بيشتغل من أي جهاز/متصفح
        // من غير أي عوائق (نفس الإيميل وكلمة السر يشتغلوا في أي مكان، بدون حاجة لـ
        // "نسيت كلمة السر"). لو فشلت المحاولة دي (حساب قديم من قبل التحديث، أو الحقل
        // المكتوب مش بريد أصلاً)، بنرجع للمسار القديم كحل احتياطي بس.
        // ============================================================
        function attemptMerchantLogin(name, pass) {
            let looksLikeEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(name);
            if(!window.firebaseAuth) { tryLegacyMerchantLogin(name, pass); return; }

            // ============================================================
            // 🔐 محاولة واحدة بس على Firebase (مش اتنين متتاليين زي قبل كده - كان ده اللي
            // بيسبب بطء ملحوظ في الدخول، خصوصًا لو محاولة الأولى بتاخد وقت تفشل). لو
            // الحقل المكتوب شكله اسم دخول عادي، بنجربه كبريد داخلي. لو فشلت، نرجع فورًا
            // للنظام المحلي القديم كاحتياط (سريع جدًا لأنه من غير أي اتصال بالنت).
            // ============================================================
            let candidateEmail = looksLikeEmail ? name : buildSyntheticEmail(name);
            window.firebaseAuth.signInWithEmailAndPassword(candidateEmail, pass).then(function(cred) {
                resolveMerchantAfterAuth(cred.user.uid, name);
            }).catch(function(err) {
                tryLegacyMerchantLogin(name, pass);
            });
        }

        function resolveMerchantAfterAuth(uid, attemptedName) {
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            let matchedKey = Object.keys(stores).find(k => stores[k].authUid === uid);
            if(!matchedKey) {
                // متوثّق على Firebase بس البيانات المحلية لسه ما وصلتش/اتزامنتش -
                // نستنى لحظة وبعدين نجرب تاني بدل ما نفشل الدخول بالغلط
                setTimeout(function() {
                    let stores2 = JSON.parse(localStorage.getItem('allStores')) || {};
                    let retryKey = Object.keys(stores2).find(k => stores2[k].authUid === uid);
                    if(retryKey) { completeMerchantLogin(retryKey, stores2, attemptedName); }
                    else { showAppModal(t('login_error_title', 'تعذّر تسجيل الدخول'), '⏳', 'تم التحقق من حسابك بنجاح، لكن بيانات متجرك لسه بتتزامن. حدّث الصفحة وجرب تاني بعد لحظات.'); }
                }, 1500);
                return;
            }
            completeMerchantLogin(matchedKey, stores, attemptedName);
        }

        function tryLegacyMerchantLogin(name, pass) {
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            let matchedKey = null;
            if(stores[name] && stores[name].pass === pass && (stores[name].loginMethod || 'both') !== 'email') {
                matchedKey = name;
            } else {
                let byEmail = Object.keys(stores).find(k =>
                    stores[k].email && stores[k].emailVerified &&
                    (stores[k].loginMethod || 'both') !== 'username' &&
                    stores[k].email.toLowerCase() === name.toLowerCase() &&
                    stores[k].pass === pass
                );
                if(byEmail) matchedKey = byEmail;
            }

            if(matchedKey) {
                completeMerchantLogin(matchedKey, stores, name);
            } else {
                let justLocked = registerFailedLogin(name);
                if(justLocked) {
                    showAppModal(
                        t('lockout_title', 'الدخول موقوف مؤقتًا'),
                        '⛔',
                        `${t('lockout_body', 'تم إيقاف تسجيل الدخول لهذا الحساب مؤقتًا بسبب محاولات دخول فاشلة متكررة.')}<br><strong>${t('lockout_wait', 'حاول تاني بعد')} ${getLockoutMinutesForName(name)} ${t('unit_minute', 'دقيقة')}.</strong><br><span style="font-size:11.5px; color:var(--text-muted);">${t('lockout_device_note', 'ملحوظة: القفل ده مرتبط بهذا الجهاز/المتصفح بس، وده إجراء أمان ضد محاولات التخمين المتكررة.')}</span>`
                    );
                } else {
                    showAppModal(t('login_error_title', 'تعذّر تسجيل الدخول'), '❌', t('login_error_body', 'خطأ في اسم المستخدم أو كلمة المرور!'));
                }
            }
        }

        function completeMerchantLogin(matchedKey, stores, attemptedName) {
            clearLoginAttempts(attemptedName);
            if(stores[matchedKey].status === 'stopped') {
                alert('هذا المتجر موقوف حالياً.');
                return;
            }
            localStorage.removeItem('currentStaffUsername');
            localStorage.setItem('currentActiveMerchant', matchedKey);
            stores[matchedKey].lastActivityAt = Date.now();
            saveAllStores(stores);
            activeStore = matchedKey;
            localStorage.setItem('currentActiveStore', matchedKey);
            localStorage.setItem('viewMode', 'store');
            updateHeaderBrand();
            switchTab('auth');
        }

        function showRegisterStore() {
            let form = document.getElementById('merchantRegisterForm');
            form.classList.toggle('hidden');
            if(!form.classList.contains('hidden')) {
                if(GOOGLE_SIGNIN_ENABLED) {
                    initMerchantGoogleSignIn();
                } else {
                    document.getElementById('merchantGoogleSignInBox').classList.add('hidden');
                }
            }
        }

        // --- تأمين الحساب بالبريد الإلكتروني (اختياري) ---
        // بيبعت كود التفعيل فعليًا عن طريق EmailJS (راجع الثوابت EMAILJS_SERVICE_ID / TEMPLATE_ID /
        // PUBLIC_KEY فوق). لازم يكون قالب الإيميل بتاعك على emailjs.com فيه المتغيرات دي بالظبط:
        // {{to_email}} و {{code}} و {{store_name}}، وخانة "To Email" في إعدادات القالب نفسه
        // (مش هنا في الكود) لازم تكون متظبطة على {{to_email}} عشان الإيميل يوصل للعنوان الصح.
        // لو حصل أي خطأ في الاتصال (مثلاً معرفات غلط أو مفيش إنترنت)، بيرجع تلقائيًا لوضع تجريبي
        // آمن (عرض الكود على الشاشة) بدل ما يوقف عملية التسجيل بالكامل.
        function generateVerificationCode() {
            return String(Math.floor(100000 + Math.random() * 900000));
        }

        // 🔐 قائمة كل الـ UID المصرّح لهم يعدّلوا على بيانات هذا المتجر سحابيًا (صاحب
        // المتجر + كل مساعد وشريك ليه حساب Firebase حقيقي). قاعدة الأمان في Firestore
        // بتتحقق من القائمة دي، فلازم نعيد حسابها في أي مرة نضيف/نحذف مساعد أو شريك.
        function recomputeAuthorizedUids(store) {
            let uids = [];
            if (store.authUid) uids.push(store.authUid);
            (store.staff || []).forEach(s => { if (s.authUid) uids.push(s.authUid); });
            (store.coOwners || []).forEach(c => { if (c.authUid) uids.push(c.authUid); });
            store.authorizedUids = [...new Set(uids)];
        }

        // 🔐 كود تتبع طلب عشوائي غير قابل للتخمين (مش تسلسلي زي رقم الطلب) - بنستخدم
        // crypto.getRandomValues لو متاحة (عشوائية حقيقية آمنة)، وإلا Math.random كحل احتياطي.
        function generateOrderTrackingCode() {
            let chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // من غير حروف/أرقام بتتلخبط بصريًا (0,O,1,I)
            let length = 10;
            let result = '';
            if (window.crypto && window.crypto.getRandomValues) {
                let arr = new Uint32Array(length);
                window.crypto.getRandomValues(arr);
                for (let i = 0; i < length; i++) result += chars[arr[i] % chars.length];
            } else {
                for (let i = 0; i < length; i++) result += chars[Math.floor(Math.random() * chars.length)];
            }
            return result;
        }

        function sendVerificationEmail(email, code, storeName) {
            if(window.emailjs && EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY) {
                emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
                    to_email: email,
                    code: code,
                    store_name: storeName
                }).then(() => {
                    showToast(`📧 تم إرسال كود التفعيل إلى بريدك (${email})`);
                }).catch((err) => {
                    console.error('EmailJS error:', err);
                    alert(`⚠️ تعذر إرسال الإيميل فعليًا (تأكد إن قالب EmailJS فيه المتغيرات to_email و code و store_name، وإن خانة "To Email" في إعدادات القالب متظبطة على {{to_email}}).\n\nكود التفعيل احتياطيًا: ${code}`);
                });
            } else {
                // وضع تجريبي احتياطي لو مكتبة EmailJS مش متاحة لأي سبب (مثلاً لا يوجد اتصال إنترنت)
                alert(`📧 (وضع تجريبي - تعذر الاتصال بخدمة الإرسال)\nكود التفعيل لبريد "${email}" الخاص بمتجر "${storeName}" هو: ${code}`);
            }
        }

        function startEmailVerification(storeName, email) {
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            if(!stores[storeName]) return;
            let code = generateVerificationCode();
            stores[storeName].email = email;
            stores[storeName].emailVerified = false;
            stores[storeName].emailVerificationCode = code;
            if(!saveAllStores(stores)) return;
            sendVerificationEmail(email, code, storeName);
        }

        function registerStoreSubmit() {
            let pausedUntil = parseInt(localStorage.getItem('registrationPausedUntil'));
            if(pausedUntil && pausedUntil > Date.now()) {
                let mins = Math.ceil((pausedUntil - Date.now()) / 60000);
                showAppModal('التسجيل موقوف مؤقتًا', '⏸️', `تسجيل متاجر جديدة موقوف مؤقتًا من إدارة المنصة. حاول تاني بعد حوالي ${mins} دقيقة.`);
                return;
            }
            let name = document.getElementById('regStoreName').value.trim();
            let displayName = document.getElementById('regStoreDisplayName').value.trim();
            let email = document.getElementById('regStoreEmail').value.trim();
            let pass = document.getElementById('regStorePass').value.trim();
            let passConfirm = document.getElementById('regStorePassConfirm').value.trim();
            if(!name || !displayName || !pass) { alert(t('alert_fill_all_fields', 'برجاء ملء جميع البيانات!')); return; }
            if(email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { alert('البريد الإلكتروني اللي كتبته مش صحيح، تأكد منه أو سيبه فاضي.'); return; }
            if(pass.length < 6) { alert('كلمة المرور لازم تكون 6 حروف/أرقام على الأقل.'); return; }
            if(pass !== passConfirm) { alert(t('alert_passwords_dont_match', 'كلمة المرور وتأكيدها مش متطابقين، اكتبهم تاني.')); return; }
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            let adminAccounts = JSON.parse(localStorage.getItem('adminAccounts')) || [];
            let nameTaken = stores[name] || adminAccounts.some(a => a.username.toLowerCase() === name.toLowerCase());

            if(nameTaken) {
                // اسم المتجر يُستخدم كمعرّف دخول فريد (مثل اسم المستخدم)، فلازم يكون مختلفًا عن أي متجر آخر على نفس المنصة،
                // وإلا قد يحصل تضارب خطير في تسجيل الدخول بين متجرين مختلفين. نقترح هنا بدائل قريبة بدلاً من الرفض فقط.
                let suggestion1 = name + '-' + (Math.floor(Math.random() * 900) + 100);
                let suggestion2 = name + '_' + t('official_word_suffix', 'الرسمي');
                let suggestion3 = name + (Math.floor(Math.random() * 90) + 10);
                showAppModal(
                    t('username_taken_title', 'الاسم ده مستخدم بالفعل'),
                    '⚠️',
                    `${t('username_taken_body', 'اسم')} "${name}" ${t('username_taken_body2', 'مستخدم بالفعل كمعرّف دخول لمتجر آخر على هذه المنصة، ولازم يبقى فريدًا حتى لا يحدث تعارض بين حسابين عند تسجيل الدخول.')}<br><br>${t('username_taken_try', 'جرّب أحد الاقتراحات دي (اضغط عليه عشان يتملى تلقائيًا):')}`,
                    `<button class="app-modal-suggestion-btn" onclick="applySuggestedName('regStoreName', '${suggestion1.replace(/'/g, "\\'")}')">${suggestion1}</button>
                     <button class="app-modal-suggestion-btn" onclick="applySuggestedName('regStoreName', '${suggestion2.replace(/'/g, "\\'")}')">${suggestion2}</button>
                     <button class="app-modal-suggestion-btn" onclick="applySuggestedName('regStoreName', '${suggestion3.replace(/'/g, "\\'")}')">${suggestion3}</button>`
                );
                return;
            }

            showFinalRegConfirm(name, displayName, pass, email);
        }

        // 🛡️ قبل ما نأكد إنشاء المتجر فعليًا، بنفكّر التاجر مرة أخيرة يحفظ بياناته كويس، لأن
        // مفيش "استرجاع كلمة مرور" تلقائي حاليًا - لو نسيها، هيحتاج يتواصل مع إدارة المنصة.
        function showFinalRegConfirm(name, displayName, pass, email) {
            let overlay = document.getElementById('appModalOverlay');
            if(overlay) overlay.remove();
            overlay = document.createElement('div');
            overlay.id = 'appModalOverlay';
            overlay.className = 'app-modal-overlay';
            overlay.innerHTML = `
                <div class="app-modal-card">
                    <div class="app-modal-icon">🔐</div>
                    <div class="app-modal-title">${t('reg_confirm_title', 'قبل ما نكمل - احفظ بياناتك!')}</div>
                    <div class="app-modal-body">
                        <p>${email ? 'هتدخل للوحتك بعد كده من أي جهاز أو متصفح ببريدك الإلكتروني (أو اسم الدخول) وكلمة السر اللي كتبتهم. احفظهم في مكان آمن.' : 'اسم الدخول وكلمة السر اللي كتبتهم دول حسابك الحقيقي - تقدر تدخل بيهم من أي جهاز أو متصفح، حتى لو غيّرت موبايلك. احفظهم في مكان آمن. تقدر كمان تضيف بريدك لاحقًا من الإعدادات كوسيلة دخول إضافية.'}</p>
                        <div style="background:#fff7ed; border:1px solid #fed7aa; border-radius:8px; padding:8px 10px; margin-top:8px; font-family:monospace; direction:ltr; text-align:center; font-size:13px;">
                            ${email || name}
                        </div>
                    </div>
                    <div style="display:flex; gap:8px; margin-top:14px;">
                        <button class="app-modal-suggestion-btn" style="margin:0; flex:1;" onclick="closeAppModal()">${t('reg_confirm_cancel_btn', 'رجوع، أحفظها الأول')}</button>
                        <button class="app-modal-ok-btn" style="margin:0; flex:1; background:#10b981;" onclick="finalizeStoreRegistration('${name.replace(/'/g,"\\'")}', '${displayName.replace(/'/g,"\\'")}', '${pass.replace(/'/g,"\\'")}', '${email.replace(/'/g,"\\'")}')">${t('reg_confirm_proceed_btn', 'أكدت الحفظ، أنشئ المتجر')}</button>
                    </div>
                </div>
            `;
            document.body.appendChild(overlay);
            requestAnimationFrame(() => overlay.classList.add('show'));
        }

        // 🏷️ اسم دخول التاجر لازم يكون فريد، فبنستخدمه كإيميل داخلي (مش هيشوفه التاجر
        // ولا أي حد) عشان ننشئ حساب Firebase حقيقي له حتى لو مسجّلش بريده الحقيقي. كده
        // كل حساب - من أول ثانية - بيبقى محمي ومتزامن حقيقي من أي جهاز، حتى لو التاجر
        // اكتفى باسم دخول وكلمة سر بس. لو حط بريده الحقيقي بعدين، بنربطه بنفس الحساب.
        function buildSyntheticEmail(username) {
            return 'u_' + username.toLowerCase().replace(/[^a-z0-9_.-]/g, '') + '@storeplatform.internal';
        }

        function finalizeStoreRegistration(name, displayName, pass, email) {
            closeAppModal();

            // ============================================================
            // 🔐 كل حساب بيتعمل بحساب Firebase حقيقي من أول لحظة لو أمكن، حتى لو التاجر
            // مسجّلش بريد إلكتروني حقيقي - بنستخدم بريد داخلي مبني على اسم الدخول بدلاً منه.
            // ⚠️ مهم جدًا: لو حصل أي مشكلة في الاتصال بـ Firebase لأي سبب (نت، إعدادات
            // المشروع...)، التسجيل *لازم* يكمل عادي بالنظام المحلي القديم بدل ما يفشل
            // بالكامل - إنشاء المتجر أهم حاجة، والربط بـ Firebase ميتيح ميحصلش أول مرة
            // ممكن يتظبط لاحقًا. كده التسجيل مستحيل يفشل تمامًا زي ما كان بيحصل.
            // ============================================================
            if(!window.firebaseAuth) {
                completeRegistrationAndLogin(name, buildNewStoreObject(name, displayName, null, email, null), pass);
                return;
            }

            let authEmail = buildSyntheticEmail(name);
            window.firebaseAuth.createUserWithEmailAndPassword(authEmail, pass).then(function(cred) {
                let user = cred.user;
                if(email) {
                    user.updateEmail(email).catch(function() {});
                }
                completeRegistrationAndLogin(name, buildNewStoreObject(name, displayName, user.uid, email, authEmail), pass);
            }).catch(function(err) {
                console.error('فشل إنشاء حساب Firebase وقت التسجيل، هنكمل بالنظام المحلي بدل ما نوقف التسجيل:', err);
                if(err && err.code === 'auth/email-already-in-use') {
                    showAppModal(t('generic_error_title', 'حصل خطأ'), '⚠️', 'اسم الدخول ده مستخدم بالفعل من تاجر آخر. اختار اسم دخول مختلف.');
                    return;
                }
                if(err && err.code === 'auth/weak-password') {
                    showAppModal(t('generic_error_title', 'حصل خطأ'), '⚠️', 'كلمة المرور ضعيفة جدًا، اختار كلمة سر أقوى (6 حروف/أرقام على الأقل).');
                    return;
                }
                // أي سبب تاني (مشكلة نت، إعدادات المشروع...) - منوقفش التسجيل، نكمله محليًا
                completeRegistrationAndLogin(name, buildNewStoreObject(name, displayName, null, email, null), pass);
            });
        }

        function completeRegistrationAndLogin(name, storeObj, pass) {
            let stores2 = JSON.parse(localStorage.getItem('allStores')) || {};
            // لو حساب Firebase ما اتعملش (مشكلة نت مثلاً)، كلمة السر لازم تتخزن محليًا
            // عادي عشان الدخول من نفس الجهاز يفضل شغال فورًا
            if(!storeObj.authUid && pass) storeObj.pass = pass;
            stores2[name] = storeObj;
            if(!saveAllStores(stores2)) return;
            localStorage.setItem('currentActiveMerchant', name);
            activeStore = name;
            localStorage.setItem('currentActiveStore', name);
            localStorage.setItem('viewMode', 'store');
            updateHeaderBrand();
            document.getElementById('merchantRegisterForm').classList.add('hidden');
            document.getElementById('regStoreName').value = '';
            document.getElementById('regStoreDisplayName').value = '';
            document.getElementById('regStorePass').value = '';
            document.getElementById('regStorePassConfirm').value = '';
            document.getElementById('regStoreEmail').value = '';
            showToast('🎉 تم إنشاء متجرك بنجاح! جاري نقلك للوحة التحكم...');
            // 📧 لو التاجر كتب بريده وقت التسجيل، نبعتله كود التأكيد الحقيقي فورًا (نفس
            // آلية EmailJS المستخدمة في إعدادات "تأمين الحساب بالبريد") - قبل كده كان البريد
            // بيتسجل "موثّق" من غير أي إرسال فعلي، فده بيصلّح المشكلة من جذرها.
            if(storeObj.email) {
                try { startEmailVerification(name, storeObj.email); } catch(e) { console.error('startEmailVerification error:', e); }
            }
            switchTab('auth');
        }

        // بيانات المتجر الافتراضية عند التسجيل. authUid هو مرجع الدخول الحقيقي (دايمًا موجود
        // الآن)، authEmail هو البريد الداخلي المستخدم فعليًا مع Firebase، و email هو بريد
        // التاجر الحقيقي (اختياري، لو حطّه) لعرضه له فقط وللاسترجاع بالبريد لاحقًا.
        function buildNewStoreObject(name, displayName, uid, email, authEmail) {
            return {
                authUid: uid,
                authorizedUids: uid ? [uid] : [],
                authEmail: authEmail,
                email: email,
                // 🐛 إصلاح: كان بيتسجل "موثّق" فورًا (!!email) من غير أي تأكيد فعلي بالكود -
                // يعني أي بريد (حتى لو غلط/مش ملك التاجر) كان بيتعلّم موثّق من غير إرسال
                // ولا تأكيد أي حاجة. دلوقتي بيبدأ "غير موثّق" دايمًا، وبعد التسجيل مباشرة
                // بنبعتله كود تأكيد حقيقي عن طريق EmailJS (راجع finalizeStoreRegistration).
                emailVerified: false,
                displayName: displayName,
                status: 'active',
                logo: "",
                currency: "ج.م",
                whatsapp: "",
                whatsappCountryCode: "20",
                messenger: "",
                telegram: "",
                vodafoneCash: "",
                productsLabel: "منتج",
                registeredAt: Date.now(),
                subscriptionExpiresAt: Date.now() + (parseInt(localStorage.getItem('trialDays')) || 15) * 86400000,
                subscriptionActivatedOnce: false,
                customCodeSnippets: [],
                storageQuotaMB: 20,
                planId: 'free',
                aboutUs: "",
                aboutUsStyle: { color: '#5a5248', fontSize: '15px', bold: false, underline: false },
                pushNotificationsEnabled: true,
                returnPolicy: "",
                showOnHomepage: true,
                aboutImage: "",
                deliveryFee: null,
                freeDeliveryThreshold: null,
                orderHistory: [],
                coupons: [],
                blockedReviewers: [],
                visitCount: 0,
                visitLog: [],
                socialLinks: { facebook: "", instagram: "", youtube: "", tiktok: "", twitter: "", callPhone: "" },
                shortcuts: [],
                banners: [],
                categories: [{ name: 'عام', image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400' }],
                products: []
            };
        }

        // --- تسجيل الخروج اللحظي والسريع ---
        // 🔔 التاجر يضغط الزرار ده بنفسه (مش تلقائي) عشان إذن الإشعارات يتطلب تفاعل حقيقي
        // 🔔 صوت تنبيه بسيط (بدون أي ملف صوتي خارجي) لما طلب جديد يوصل ولوحة التاجر مفتوحة
        // 🔊 المتصفحات (خصوصًا على الموبايل) بتمنع أي صوت يبدأ من غير "لمسة" حقيقية من
        // المستخدم على الصفحة الأول. فبنفتح/نجهّز AudioContext من أول نقرة أو لمسة على أي
        // حاجة في الصفحة (حتى لو مالهاش علاقة بالإشعارات)، عشان لما يجي تنبيه فعلي بعد كده
        // يقدر يصوت فورًا من غير ما يتمنع بصمت.
        // 🔊 صوت تنبيه حقيقي (ملف mp3 اللي رفعه التاجر نفسه) مُضمّن داخل الكود كـ base64
        // عشان يشتغل فورًا من غير أي طلب شبكة خارجي، حتى لو الملف اتفتح محليًا.
        const NOTIF_SOUND_DATA_URI = "data:audio/mpeg;base64,//uQZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAAgAAB8yQAICAgQEBAZGRkhISEqKioyMjI7OztDQ0NMTExMVFRUXV1dZWVlbm5udnZ2f39/h4eHkJCQkJiYmKGhoampqbKysrq6usLCwsvLy9PT09Pc3Nzk5OTt7e319fX+/v7///////8AAAA8TEFNRTMuMTAwBK8AAAAALjIAADX/JAXATQABzAAAfMkIACwyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//vgZAAAAM0AzW0AAAgAAA/woAABFaDFO7neAAA2AGfTAAAAgCcAJlnAAADQfNwficH3wfB83nNYPh+CAIZEAYBgMBgclaiQEAAABYQjDwW1DjDES1UzBITjBUAQEJ5mMdht5jgkFBrm+RisBhh+DZ18QhrScp3cCwFIMFIgweATPYnOETgwgEzeZDLIAIaLvM8A8xQGWPGZAcuZra7E+KekMLhUoENOqcCEoeB/VVVeQ3Dj+eFwGwaEymCAMLqe5SlYA/n/z1aZcj4qd0cYOrEgESy7n////8borVyX/xorefWfW/8QSe//SAAABcFUAB/g40kXOAimIKaimZcYmBgqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//vgZAAAM+w60P92oAgNIUmY4IgBirznR+xySSAVgGdgAAAGyTAQAQAAC74QGQmBQGtwCoEI3JrBABgoAn9StMHxoM5pXMIBDMPAfL4tWZs8BdFyhq0AACgCKkA4uEDGRJkvF43RRKQckCEUhgEXENIvJdRgEgOTjo/uQIL1kVNf1GQRAQq0jJFm6JMh8BAS6trrTaLQJ+Nn/WiSD/9yqj6AACAAD//6H/////z/V2YLgJiAgrb1gOEu6V5qqDMTAKWQsYgmWcX3QsA4Yl+FM3v/bpxEZRoOznW0OmBHDdMhPueCAzFv6JuCaH2R+qGfDaX19bCz0nb9Q3CF6/aT//nXen6ADBA5TyCYgpqKZlxiYGFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//vgZAAAcqw6T/sdmkgSAAlUAAAAChS5Qex2SSAVgCTAAAAGupBgBhAQDJ2AI+7GoccsxIM9X7XAKjEQGHH1dhgMQqkZ2pQl/vN+KcLEiLALIM0GWm7OwGDZUQHv6zwSGPf/LgN0T3/DrHP/G5Y+v6xLishofmH/nWADQDgHUd5ZP///6f///////prIBgAyAQ3N0AMbtZVdwBUYApDisYgUIQNOR4cDgXdiXyiedaxnL7YoLr/znWrQ7gAwbrFsV1HS0DRRA7f6YZef/YN0SHq9Qrt2X3xrBa3X9vv////5RMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//vgZAAA8o0uT3s9kkgH4AlSAAAAC4y7O+9qauAAAD/AAAAEmmBQBCAgk/UAO4TTgPuIADDra+rgCigQGD2aSwgRGhwIyeBXnzxhiXiIYyIC5zqFZfs7AaSaKHe3nTUOqIGR/2EFf+oJgIt6vYMvN/ywGfLfaBgAf////6qalQIAMwIO31gCaktdhcAEIAoEA8XI+KoDANAfNE8dgW7qQgdvHHaZSTbpyMUrkyu91DOL1AZxG6xwG/nS6CQQq8uP/WDY8ft+wd4QIvq60w+VakP5w1IF02HWE9aYgpqKZlxiYGCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//vgZAAB8oYvT/u5grgSwBkAAAAACYy9P+z2aOANgGUAAAAAulAgA0BT7vkAIjEom0aCSwABKFLPVzIDigGT3Ydx91UUJaFCLtfTdIsOUlZ/OoKda+AWoQy2THUPkio1QZr/1BjFqXrx1Cov/XHE//OGmKZb///yn//r//7ep7f//vR9T/9uq5UCAFQEFv8BOz7SYCQQheJUyKpgCmBoXHlZlgoWlYX6StZNS1MHRtBBkGNZ2rMkdwwU8gB3zqJZCgzn+wbElX6WkNj261Dtevq899H///qTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//vgZAABUswozns9mkgL4BlZAAAACfS7O+x2CSASjmUEEAl/qmAAAzBBt/QAH9fqsoMy0ChGVaHCphAkYwKH0+YkQwqBFB5rKwz6xqzTQ1DwwDZWEN7rKQICjlEEQWjPkOfkaxoDxEN/zcMwjS88tZKii+lqOGAw51Noks7wCAAAwAOt3//yvoJ1agAAhgi2/lUgbmoLA6ahpclEyUgGKjIbgx2IgKYXBCj7dH3p676w8h6UBVz2UdJ5POAvJRrF3zsVwHxk/62D7v673I8eWqo3VckK1f1nqhf5rixKYgpqKZlxiYGFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//vgZAAAcpMozPsdgdgdw6j1CAJOieCPM+x2aOB1AGNAAAAAiVAAAyAxb6AAKSXxMYapgARng4cRoSaBgWPpi5nxhmDKDjO0xGHuRLJmBn2YSRCdZ+pJBesMojHSVn5ikHUBeLT/rKIW8IVXqUdcjSEfZLucImEAQP8g1X/qQCnKf9Wzs4+8Z//d+92iv62teq3+tjQooAGYItfGAB9x2XgbuIiEY1D0nBa4OCAz2m8BDIn26jB3ch+nuOLWYF5I63J5dZwFDpRykPOm4iAeJ/6kBBdpgyTT6UomqoeekCXzNEinT///+L1NUcPj8+fXvv9lHn1JZ/9rHfVt9/6//UmIKaimZcYmBgqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//vgZAABEp0izGgcmHgcoBlNAAAACcB1L65J8CB7AGToAAAAHpYEgz9zYAEuoZhF0DAhhTKS9IGCRz37DRPU4hbFHnhyWZvnHh+B5l1rRJhdRmA0RcXKbzfNSbESEyNdb9BxjE3OqXqVOu8eOFHJPtZZ////2ddDSgAAAYlAAAcOKO/Z6f26hueGpJ//////9//9eq7FAaDv7HHVFWbqi4BQG0lrSYQEAZ0THlYeaFJla2oQPX1AseF0D682maYuL0BP45pUrX4hxgoRHxvr33f50kxhAM2t/IsWYKslf//6+0ygIE7Qg6pf5r0ephss6UCjlCYwQ//////+7///9+pMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//vgZAAAUjwjTPtvK2ohYAkGAAAACJR3M+Dto6CaAGRoAAAABoNACGB7/4gAP+/u6ghBgQyplKgqPR5eYTBUhtCVNZUUyecI+Asv/asSu8XBSX6dn3vEOsYbCCzjdLe9TuFLZVJZ43ubeullhXwAFcqj63dQwIQsXWg3kqVoc1n/o///1///u+71JoTUqwbAUOL37xgASV9WjCMFcliRcJVU6KHGhV5p1toFt73CKAVAK3Uy6ClAk6mKSnRdDFgfdT9S0FEmpBlKVvJIrElSUGqSkE3FeY//WMMJFnTYoZYtANExII2Ei7Ujr/b/7/9+7/X//1dNfQtMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//vgZAAB0jcdzPg7aOggIBkGAAAAB5h3M+Dpo6ijAGOIAAAABYRwN4J//qAAN5K0kYBneXaXJZEcCqDQlAtqK2uaxjcwEECC+cXpgEgnNUnWg6nFghs6kOxxmDkPEpUNhMwkx/////7Pn9RRH8AByo77G/niewVUdKDxYO2xP///0N+///9v/++nFVWEkEiBfX+qrwvEQgYdRWBIRup5GIsNi1LFrNvmVioI4RXdSaDsoKM0U/2j8y0EmdloUiaprGtyVr/rCp6o5d/pZWl8wOa4LsYbARYyOHBQzN+V65Cs6PXOXoU9n/0f/q3v9H+qhMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//vgZAAAEksfy/tPMtglQnkaACM+CdB1NeywzSCigCRoAAAABGOANnFvvmAAP/f3cUCpcwULAW7HrTBdPX0WFV7eHAKo1v97+PmfInF7qdSO76AkU9aEmMz2cnu6atIvcoWeU///9nus9D/XbWAAUZkYAAD/jAD+Cp89AQ0NjiaWAmBjaIutv///9yf/uq+n//9j1LoArJxvvWABSerYDBDGEMQYviNCVmjP6dBKY7rxsA4Nz8INEtWNQRr14Nx0PObu2+NZ2eEDMjkyaZkIREN/BiA0UABMMEAQCA8ggU/1CAAmpE6f76YVEo6RYLGSJK5wETaXPsApccdEJZZ///b+n/T//6f72aUxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//vgZAAAAiUZzX09IAomYAj2oAAAGBjHOfnvAEAuACdTAAAAeXUxBVRbt6AAJoBdAJgKADKCTAZidCGoAOIk0fKdRp0hoiRLESL4qokssiaaanrTTSJE0ste7UlgoYgloCkLIev1k3yFQpoAAgp6G+1qznYuLzCDCVCic2Wv///b91m+n0xZdfovUxv/+6p0AwBACACQBgDIuwAAAAACAzAVATCgFxgUAhjIDRguhxsJGQKzAlANMGEAUzND3DlQrUDgSnxKwEjA1AdM/ZCEwfjllBo0YKYCoOAEMn1Ow0HgeBIAlSlgpaNGuTGF2CkYOISRguieyqzWvuO29inAw3ZgZgZEAAJghAhU2VX9tvU3ngYIoBSfpbAwGADmy/v//7E53Cx0AgCg0CkWAiUXZWYAwBn/////////Q4y1+97qf88CBMB//0Pd//8VcnW0AAAACkMAD/y5XebTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//vgZAAAxEY3UX9zYAgSIBlc4AAADGzdSexySWBbgGSIAAAAtCAAAABAXdewEjm+aSia/BdYLhoCh4WFxhEtG0bAeIHpiYOow1sWkoSUviyxgowcCkGmA7BZRLqlSK0qeqmJjQ8j9A2OdWls6rMiJQNyXKkVr/1lk+Jelrs7zX7xx3AKJUupu8/88dOGq2lx/X/r/dCey/////5LS2ss8d6yyzdHFoUMiAt93kQAAAKkASAf8segr//+w0Fv+tO0wAAKAUBfvoArcMBYEjq3IQFHSBYyRJgWZnkpvwIhwGcWLJIt82tW4n6YIQKRMer6Vvd9pFK1wuADmVP9MPmTMx2KvuJWF7ySavRmQl4fb/i7Gz9WwrxovXVqJh+3XL3yn/pAyAP////5YWNe+YKHxUDCE+/irX//9CYgpqKZlxiYGFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//vgZAAA83k2z3teolgdjQjhACLYDMzbQexyaWBLgGRAAAAAtkAAAgBQLn2AFNh4I2dcLFxoQPAx6YAkpgp4UQ1CwPpCAom68TPZRI4s6qAYwXgehYHpftHee6vNQ6+BXA1QAibVXXcugiIlomBzzVJ1TEbABzIklOk1qATBkG9usXpV/ZzER2MFSXWqgOJv9Rd0CB/o3NfqulNr8u9fzlR5TXf//n/////T/8H///wdwYAAGAOF/rQAtFBAtMLCdNBAI+mTbODKk2B0TzohEhYn27isbLHfzyXgY3LQcDIfpM2uP40uKPuYA8ZU6lKokOAktI6M0Vm6wiIBRBIpI9rhooojdHUsS09/x8r/1ky9fuyy9fNr/////v/vVd+Wr6vr////fo//1piCmopmXGJgYKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//vgZAAA0u8x0Hs8klgQQAkgAAAADYyvOe16aWBDAGTIAAAAuWAABACQ7v2AEhUMk5QuIiCDWBEyAXTDANWA2F3jy4qBwxRyaalc8srqwEvkQmcSAMqx1JZ9hr3tcOgTFPnK6h/BvIdckW9AngUE0+yotIqH9USs3b18tFvpN5KfK/////7P/t/61///yP/9FfVTkAABAEBf6EAK9Ig6oA4O2iNYYUJs5owxieBgEqmGBwFEKgPlUAJR1Npn7wVMX6AwSBMCO9lHeWu/8AM2k5QA6iQ9tZFABAlwigjce23QCYwCjjNFVLUa0hlQYRn+6AnkbbInu+Sj4eNMD3lgN7////6t3tv////////9mpMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//vgZAAAs0QxzXtdmlgDIAlgAAAADBidOe16KWBCACUgAAAAhgAAAABQZ7CAGFEoNGQQiW4DIECYjM6BUGbZIb/6MfNCYYrgKJBIiWvx138iDC0ZDDEoi8EN1M4YpHwtTRZA5RO9bPY2Ako3L5ADbqTJ0FFETJ18oIXGcByW351AlRtNR+xkh1+5i/lf//ylygAAEAOF/EAAYMIYgOAQBhhaXxgh5gVxknxoi5tM5inoDmRwDuYF4CwGAJSKRRYlFcbrdTAPBRGgEZdjlZrPhAlU4ADkuu2UQ2hjhij6YY4HoEaf6j9YrAqKH6NRX+S9QB//7uX/////0//////+mtCYgpqKZlxiYGFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//vgZAAFE5orzHt+mlgiw5lNCAI6D6yvMbXtACBWC6Z2giAEhTAAAABAJ4wAH7LaJhlrC05iwsY6dmlJZnAGDbMxun4TIHD1MDADYwBQDy9it7WHLi7XFdmCUBiLAdvJP4S+nj8ZmjEDB0uvoPzggupieS9RDgcEnC2zumVnRD/E6/90B3VvTrrMSjgE61f//r9n/1o/+gOsAAAAqtgAdTgadbft/P/ug2eeA0a3xqxI3EP////////v8YAC3hd8RgBKaImDICZgVgXmA2EGBAuTChB1MNAX4zVCHjRnDxMH8HcrBBAQChZxjtHHGkNwMj6QyZpGMb+D62q8PgUlQWOfHMOb3E0tr0jZrYt29fXWmzFxq/f1zudxuCl8/v+//0nzEj/PX/vP/uLiotcv6/s9fUbY7/2jRAXAAKVcEK/c//0/1b8BtxPrDSQomIKaimZcYmBgqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//vgZAAABQ4nT257ZIAdIBn9wIAAGtjdOnnuggCBBGm/BABILAAAAAYEYkxPAAAAAAW2YBwFhgEABCAEZ0zAvB5MdIU80FXUjHzCcMLB50EgamSwXUYQwMxgAgImDgDiAQBDDUECMNoFwlKDTCEdHjaQ0650McIjBgRbgqTr+h4YBzHgYyMPLJgI5is8YIEsnkENBwEhWxBYRmjm12wufi1qo0Vz7ah5gYKGAb7LCfMa/+4Z4f/GaNjZfal04oz//u////+3QADbgCzDX/AAAAAAAARUf0GzXhsnO8pLADFz5tXmqsDAAAAEZMCIH0wAAFjBjCFaKKARGGAH6ZAQxJkYSBG4MaiYLx+RkriDGDUAoYQhPpjFhpGbBMUYAANBizjeHEgmmEAAHW85mKIPG2JNDQLmO4vmAASNZNlB5MYCTJAQMSR6MLwKfoCBMnW3QuqYEkyLCA5xiiARVCBcUdQoGgNMAQHMXQGUqighCYRBqYSAwzsQAMFQBU4Hh5Z+VQEKwMyZgx7a+xoKc0CC3uLApm4qJPd2IWeQV/JTnI9yu9qa1R/S/93/7/8///71pO//XYq3//quQ5JToQAAAxHKh/gAAAAAABZ4+s9FlcI/n1KOylfQoXbSmIKaimZcYmBhVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//vgZAAAFBQ4Un9vIAglRSlc5ogADZDTQ+5lruA3BCUsYCQgpTAAEAAA///QEEzD1VSzL6AkSMFEDEyg/eONjLjE2MIMS8KpWC4jhgfkqnCoGLQNDEts4Bd0OFcqVfvlePIgwzTQq1/1m5DwMOuU+1NlWfYILVhjNS1lqs0pMOzzessqZO69r9f25m1rWWsf/m3zy7//+6S1//v8atJ////8zsnejp6ACOAgAYAAGgln/1JCyEvHKeS/6G/////+v7f8YNvVUYT///+vIQAAgACAu/gAVmAoNTkBIDXIXvZAIRabk/4GUpiJAg4VpWNfXwouVEoYrJ8rGnnVeeK1o+DLwcG1t/bHfqdAwVvM08Zg4aiSTzMANJTQQTXl8B6N2r1A3hQdJm0QV26Cq2J43PfqHcpSvmvk4AAAgAMJzlgKf///7uxMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//vgZAAAk0kw0Ps9idgRoBmNBAAADWTBO+7uSSAyAGTUAAACuoAAYAAA7v2AFVRQIVBCiAjLBFCd5A8YbQsYQgmKAMTC2xBqKJb5GA4VGcYCIUqbRGI56tKWA/jrJlLM0QsVPKIv1iJCBVS8frOBMGyz62qHyI0Zq9ZFxMb2SoCynSZuWTLU+xTNbt/J4AAIAAACgAAn/Ff///V7xE6uqcAAQAADvuAAa0tVayA1TYtC/wACc3fqUwrHIxR4M1BETWRKdoyGBuJzbEhaRBkKbhPVYKJDoCzFFM+znjIFaPrIxLWEUEau5kW2dELQxg2OF6dHQA0JofL60KxTxs0fjM6SqlEaVEXby68A/hr///0OykQM//0piCmopmXGJgYKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//vgZAAA8xEwT/scidgEYAkwAAAADWSvN+x2Q6BfACPAAAAAynEAYAAjN/mAFYDWEBIOKwEQ7vTAI3nzEUZWJZg8iEwMDgslbE4kFB6aKBDBkuZdfw3KAuDgLgcgiz7mIIoeky3CYL6bJG2ZhcKT6DLXkcHPNrL1iIoq+wzWn50taGpRxXR////+i2IABQAACnrAAQfN3i/5gIoGWULLmDggHZcbGYozGA4FkQ2CwBx1IRrZgMFBmoIIsATB6jdZ8xASoM4dBSXonAbnvIk/DvD1XP1nAtscTmpomgNcLnkzC5qyYzpJrWrXHD+090mf//////9f/////6r1fWwO/bvdoX9Cv19v9Xd/vf0piCmopmXGJgYVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//vgZAAA0xcnTnu6elgdQAjxAAAADUCdM+17ZiBnj+QIEAk4lUAAUAAyv/AAFkBcA1yF7y3BgCCIgAIwFEs1wzUySA8wz0aCo4MHXg+I7GOChhlIKKyTPVCSGQwLLrN7vs1gzM9x//KpB7nljf6AP0DV7i3tBDxrdvr1iGtmk1b/oVO1HdYsEH////6dA9atjezW/27aW+n93//V9K2ymVmjGonLEAAYAAJfxgAKNigJCeFBCq4gBCMaFPBhPKQGD+CuYuYozgoGRxW88gsFHqiyBrpVYavYU4UDx4DidLr/pY4IhGUYUff/2jLj/OhtfqfCAFv6lbPHm4MaTrmGXc/jk9+euf/JbMVP/o/0g90f/2/0ODBYZcZJptV9NnttejV+3v///+xMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//vgZAAA0qEnznu5aiobYAk6AAAADfSvMez6B6BZAGUMAAAAuWAAMAAS/tQAHKUpZEtFgQoALcgIGJuLZIJGAFah0xb1UzKXwJZwaoQBRPk3SBPAFInmL1KTA9nmnj8KTzF61AF5Bj1uJF0vYiOzI+bMu9eG91stWAAASIgAAs9//l/OdPeEYoPFf///X//////+qJUAAgAFE/jAAagpuDnDdJBwAOrVAc6BoRE5GEkGmYDYJiQ6Dy7X28QAJlAoilzBZVO0f0BCAoWudyRSPlaIX1QURNfIcDEzRKKqi6A9HCUjqCdQ+xnmMTR2XKRpratZrdBTaj6C7y//3f///q//9YTsU7//fyzOZpegysHWuXDJd3////0piCmopmXGJgYKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//vgZAAAU14nS2tegcgcA5kqBAIuCzidNex2B2BjACSkAAAA1QAYABfrIAEKUsRXMIERXMIABws4DI1nx0DEhD4AACiMheVYZtHjBgHRg1Aar+WfYiyCaAC8F2EYZdSQI43TLD6joeJJEmTRNRmFpI2h9qanRFtTpzE2UotNQUrLxXvf7fazZ+r//ocj3fQhgAAEJAQAJo+r/8v6OiHcYYlBNP9FFbP///0fqmmABkCE5v6wAH8TnMRj7cCGM605AiZ45OZi0MK6koU9l8qLbGQUCBjhlSUtr46qo7hRIwyResug4QcxbURoh6LGLVqEZKKC7qqL6DIoI1mZqq93njLd///+owDL5T//Dvq9wGSkGQlfKm0s////////+lMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//vgZAABEuknTPuvM9gNY3kzACOiCph7Ne7haaCVACRkAAAAmEAAQBCZ/qAAGxtwUPL2MzQYX2OhIeK4oYniQDgLQhSSZK98sZ2Ch6Ly8vS+MhigVRxoasT+j4GnH7lv+xdxWrC+9+vUw4qvhb/rDtKl/Dlzqdfalf///////3/1CVgAAev1JuPncYanYdmVAAUFZd/o3Jsqhg6ArCCUA1HBEIpvVQJg8BpqSvYIKlcxGaLA1FHVJgxaCJ69GkfSI8bpdf+cpRMx2dr1ArGR9k99lp85Xx2gNIiy5Bt3///p//rcgAJ/1A/Of5R3RjQ8tSAMXvFCQqwNpEgdLk2f//3f//s9P93+tMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//vgZAABEj4fTPu4ajgh4ukaBAI4CgBpL+69a2CAACVoAAAAiFAAUFFt/YgAIi8TRVUGjodGqjIaGf8mJdiUoBAwlBXK9kJGlPpasqieoPgCeJFb1IJAxzIp6nEKf6aOSRqm+pp5TrR8fZ+iBAAC5EAAL8Ptbp3dd2ljkWkxp8FD5EmEGXNQ9Lv9f///W7sAAYMMXfCmpYtJm2QddoGAuYDQqYSgoRAqkkHKZSNjjIAMS1CzaET/gmQhh+M13lr5GFWpyt+Lbz1VKTx7EgIm3B0itv///6P1/+5+79dZ2AZy4WpT/y9ZaFqS1joVQCDDv4qRrDgdOf///////0JiCmopmXGJgYVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//vgZAABkoQaTPsbGfglpCkHBAIoCMBpMe09aOCJAGQoAAAAiJMCcIh//6AAL0XfxdYQA4hZIbwGwYBjAOAQR3Uil2v9i9StbQUIoq8W+2V1qITFN/8xsqlw1Ka4UqR2+ID4gQguMBUiCLwMJVB5//7v//6wDNxgAAfLmbdfc+Sdqu95amLdV7ElJhHf//uTq9X/+v/X67P6NLRIA7i6P/891H/XYWjMUKjaxD6mwMeBygICTbGOj8QIpWS8/EhSEYZUOOuAOf1bItUtUmqUukiYZHjDgbDPpq///7PV//SAyjY0/0SDc4waGxI/SD4qVLmJJP/R/V7v+lrK//2/3f6NSYgpqKZlxiYGCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//vgZAABkiwSTXssM5gdYBkKAAAABjxJM+BkoaiwCePkEAggeKUFhJiP/7QAOZ0j7pyA0FgAJTPBtaqpZ2TWrOmiskNwhVpfnwVPvKeW4TyLCoh1zZkVafGMOkxGooTaaDJNRQaEBwv+oABPG4gAAHfdLvcOdhdiUGiiD4ENKNCzxU8h///SDQgRJssf/veF2AImQAGjB40uki06K031W1Hl+gaxCFews9SBUgU6FEORIdI6mDb/f+hGvw7Z0/Vr3UnLhyB8w8mXcOGBRA4wRIdf9I7r/2cr4sWt9RMql28oF6P/oTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//vgZAABEYAPzPgvMOojA2ldBCM/SLhtHaE9I4CDhCQwFIAsBncGeJh9vwAAOsQ1UENAUVoelRNGIc5PEyckN+zGKPHVsYe16f2aidsLvVwDTbycjkEcsstqAABbgGSAMdTyjBkSeUt770iS9+cENp0pTHWR3/0FkltOORCRwxyrsvgLY+gVJMnI8w5W4nyFrNjleMQ+BlkRBsNBoEcOGmSEswkJiWKhpyEhZYaiqxrQVPHhZaHv+y9XJf+spkGBprQKqobkQg8Kz5LqxGwKmwWkTwTIrZp7mTpFbhRaYgpqKZlxiYGFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//vgRAAP8AAAf4AAAAgFQAjVAAABAAAB/gAAACAAAD/AAAAEEAAHBkUTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQZN2P8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+xBk3Y/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVQ==";
        var __sharedAudioCtx = null;
        var __notifAudioEl = null;
        var __notifAudioUnlocked = false;
        // 🔊 الطريقة الأوثق: فكّ تشفير الـmp3 لبيانات صوت خام (AudioBuffer) مرة واحدة
        // فقط عبر Web Audio API، لأن تشغيل AudioBufferSourceNode من AudioContext
        // اتفك قفله بلمسة واحدة بيفضل شغال دايمًا بعد كده (حتى من كول‌باك غير مباشر
        // زي onSnapshot)، على عكس عنصر <audio> اللي بعض متصفحات الموبايل بترجع تمنعه
        // تاني في حالات معينة حتى بعد أول تشغيل ناجح. فهنعتمد على البديل ده أولًا.
        var __notifBuffer = null;
        var __notifBufferLoading = null;
        function getSharedAudioCtx() {
            try {
                __sharedAudioCtx = __sharedAudioCtx || new (window.AudioContext || window.webkitAudioContext)();
            } catch(e) {}
            return __sharedAudioCtx;
        }
        function loadNotifBuffer() {
            if(__notifBuffer) return Promise.resolve(__notifBuffer);
            if(__notifBufferLoading) return __notifBufferLoading;
            __notifBufferLoading = new Promise(function(resolve) {
                try {
                    let ctx = getSharedAudioCtx();
                    if(!ctx) { resolve(null); return; }
                    let b64 = NOTIF_SOUND_DATA_URI.split(',')[1];
                    let bstr = atob(b64);
                    let bytes = new Uint8Array(bstr.length);
                    for (let i = 0; i < bstr.length; i++) bytes[i] = bstr.charCodeAt(i);
                    let decodePromise = ctx.decodeAudioData(bytes.buffer);
                    if(decodePromise && typeof decodePromise.then === 'function') {
                        decodePromise.then(function(buf) { __notifBuffer = buf; resolve(buf); }, function() { resolve(null); });
                    } else {
                        // Safari القديم: decodeAudioData بيستخدم callbacks مش Promise
                        ctx.decodeAudioData(bytes.buffer, function(buf) { __notifBuffer = buf; resolve(buf); }, function() { resolve(null); });
                    }
                } catch(e) { resolve(null); }
            });
            return __notifBufferLoading;
        }
        function playNotifBuffer() {
            let ctx = getSharedAudioCtx();
            if(!ctx || !__notifBuffer) return false;
            try {
                if(ctx.state === 'suspended') { try { ctx.resume(); } catch(e) {} }
                let src = ctx.createBufferSource();
                src.buffer = __notifBuffer;
                src.connect(ctx.destination);
                src.start(0);
                return true;
            } catch(e) { return false; }
        }
        function getNotifAudioEl() {
            if(!__notifAudioEl) {
                try { __notifAudioEl = new Audio(NOTIF_SOUND_DATA_URI); __notifAudioEl.preload = 'auto'; }
                catch(e) { __notifAudioEl = null; }
            }
            return __notifAudioEl;
        }
        function unlockAudioOnFirstGesture() {
            let ctx = getSharedAudioCtx();
            if(ctx && ctx.state === 'suspended') { try { ctx.resume(); } catch(e) {} }
            loadNotifBuffer(); // نجهّز البفر فورًا من أول لمسة عشان يكون جاهز قبل أي طلب جديد
            if(__notifAudioUnlocked) return;
            let el = getNotifAudioEl();
            if(!el) return;
            let prevMuted = el.muted;
            el.muted = true;
            let p = el.play();
            if(p && typeof p.then === 'function') {
                p.then(function() { el.pause(); el.currentTime = 0; el.muted = prevMuted; __notifAudioUnlocked = true; })
                 .catch(function() { el.muted = prevMuted; });
            } else {
                try { el.pause(); el.currentTime = 0; } catch(e) {}
                el.muted = prevMuted;
                __notifAudioUnlocked = true;
            }
        }
        // ⚠️ تصحيح مهم: الاستماع لأول لمسة/ضغطة "مرة واحدة فقط" (once:true) كان بيفشل في
        // حالات حقيقية كتير: (1) المتصفحات (خصوصًا الموبايل) بتوقف AudioContext تلقائيًا
        // تاني بعد فترة خمول حتى لو كان شغال قبل كده، (2) لو التاجر فاتح اللوحة وبس بيتابع
        // الشاشة من غير أي لمسة فعلية، الصوت ما يتفك قفله خالص من الأساس. الحل: نسمع بشكل
        // مستمر (من غير once) لأي نوع تفاعل (لمسة/ضغطة فأرة/لوحة مفاتيح)، ونحاول نعمل resume
        // كل مرة - العملية مجانية وآمنة لو كان شغال بالفعل.
        document.addEventListener('click', unlockAudioOnFirstGesture, { passive: true });
        document.addEventListener('touchstart', unlockAudioOnFirstGesture, { passive: true });
        document.addEventListener('keydown', unlockAudioOnFirstGesture, { passive: true });
        document.addEventListener('pointerdown', unlockAudioOnFirstGesture, { passive: true });
        // ولما التاجر يرجع لتبويب اللوحة بعد ما يكون سرّحه (تبديل تطبيقات، قفل الشاشة...)،
        // المتصفح غالبًا بيوقف الصوت تلقائيًا، فنحاول نفك القفل تاني فورًا وقت الرجوع.
        document.addEventListener('visibilitychange', function() {
            if (document.visibilityState === 'visible') unlockAudioOnFirstGesture();
        });
        function playNewOrderSound() {
            if(localStorage.getItem('newOrderSoundEnabled') === 'false') return;
            // 1) البديل الأوثق: AudioBuffer جاهز بالفعل
            if(playNotifBuffer()) return;
            // 2) لو البفر لسه مش جاهز (أول مرة قبل ما يخلص التحميل)، نحمّله الآن ونشغّله فورًا
            //    ما يخلص، وفي نفس الوقت نجرّب عنصر <audio> كخطة بديلة سريعة.
            try {
                loadNotifBuffer().then(function(buf) { if(buf) playNotifBuffer(); });
            } catch(e) {}
            try {
                let el = getNotifAudioEl();
                if(el) {
                    el.currentTime = 0;
                    let p = el.play();
                    if(p && typeof p.catch === 'function') p.catch(function() { playFallbackTone(); });
                    return;
                }
            } catch(e) {}
            playFallbackTone();
        }
        function playFallbackTone() {
            try {
                if(__sharedAudioCtx && __sharedAudioCtx.state === 'suspended') { __sharedAudioCtx.resume(); }
                let ctx = __sharedAudioCtx || new (window.AudioContext || window.webkitAudioContext)();
                let o = ctx.createOscillator();
                let g = ctx.createGain();
                o.type = 'sine';
                o.frequency.setValueAtTime(880, ctx.currentTime);
                g.gain.setValueAtTime(0.15, ctx.currentTime);
                g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
                o.connect(g); g.connect(ctx.destination);
                o.start(); o.stop(ctx.currentTime + 0.5);
            } catch(e) {}
        }

        // ============================================================
        // 🔔 جرس تنبيه الطلبات الجديدة: عداد دقيق (مش كل طلبات المتجر) + قايمة الطلبات
        // الأخيرة مع تمييز الجديد اللي لسه ماتشافش، بالظبط زي فيسبوك: أول ما تفتح الجرس
        // العداد يتصفّر فورًا، والطلبات اللي كانت جديدة تتحول لعادية (مقروءة) من غير ما
        // تختفي، وأي طلب جديد بعد كده يزوّد العداد تاني من الصفر مش من إجمالي كل الطلبات.
        // ============================================================
        // ⏱️ نظام مبني على "وقت آخر مشاهدة" (lastSeenTs) بدل قائمة أرقام طلبات، عشان لو
        // طلب جديد وصل فعلاً وقفل التاجر المتصفح قبل ما يفتح الجرس، يفضل يحسب "جديد" صح
        // لما يرجع - بعكس الطريقة القديمة اللي كانت أحيانًا بتعتبر طلبات جت فعلاً بعد
        // أول مرة فتح فيها التاجر اللوحة كـ"متشافة" غلط فيختفي التنبيه بتاعها.
        function getNotifBaselineTs(storeKey) {
            let v = localStorage.getItem('notifBaselineTs_' + storeKey);
            if(v) return parseInt(v);
            let now = Date.now();
            localStorage.setItem('notifBaselineTs_' + storeKey, String(now));
            return now;
        }
        function getLastSeenTs(storeKey) {
            let baseline = getNotifBaselineTs(storeKey);
            let v = parseInt(localStorage.getItem('lastSeenTs_' + storeKey));
            return (v && v > baseline) ? v : baseline;
        }
        function markAllSeenNow(storeKey) {
            localStorage.setItem('lastSeenTs_' + storeKey, String(Date.now()));
        }
        function getUnseenOrders(storeKey, store) {
            let cutoff = getLastSeenTs(storeKey);
            return (store.orderHistory || []).filter(o => (o.timestamp || 0) > cutoff);
        }
        function updateNewOrdersBadge() {
            let storeKey = localStorage.getItem('currentActiveMerchant');
            let badge = document.getElementById('newOrdersBadge');
            if(!badge || !storeKey) return;
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            let store = stores[storeKey];
            if(!store) { badge.classList.add('hidden'); return; }
            pruneOldSeenNotifications(storeKey, store);
            if(localStorage.getItem('newOrderNotifDisabled') === 'true') { badge.classList.add('hidden'); return; }
            let unseen = getUnseenOrders(storeKey, store).length;
            if(unseen > 0) {
                badge.textContent = unseen > 99 ? '99+' : unseen;
                badge.classList.remove('hidden');
            } else {
                badge.classList.add('hidden');
            }
        }
        function toggleNewOrdersBell() {
            document.getElementById('newOrdersSettingsBox').classList.add('hidden');
            let dd = document.getElementById('newOrdersDropdown');
            if(!dd) return;
            if(!dd.classList.contains('hidden')) { dd.classList.add('hidden'); return; }
            let storeKey = localStorage.getItem('currentActiveMerchant');
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            let store = stores[storeKey];
            if(!store) return;
            let unseenNos = getUnseenOrders(storeKey, store).map(o => o.orderNo);
            let recent = (store.orderHistory || []).slice(0, 15);
            // 🔔 كل عنصر في القايمة بيحمل الـ index الحقيقي بتاعه جوه store.orderHistory (مش
            // بس ترتيبه في القايمة المصغّرة دي) - عشان الضغط عليه يفتح تفاصيل الطلب ده
            // بالظبط فورًا، مش يودّي لسجل الطلبات ويسيب التاجر يدوّر عليه بنفسه.
            dd.innerHTML = recent.length ? recent.map((o, idx) => {
                let isNew = unseenNos.indexOf(o.orderNo) !== -1;
                return `
                <div onclick="goToOrderFromBell(${idx})" style="padding:8px; border-bottom:1px solid var(--border-color); cursor:pointer; font-size:12px; ${isNew ? 'background:#fef9c3;' : 'opacity:0.65;'}">
                    <b>${isNew ? '🔴 ' : ''}${t('track_order_no_label', 'رقم الطلب')} #${o.orderNo}</b> — ${(o.total || 0)} ${store.currency || ''}
                    <div style="color:var(--text-muted); font-size:11px;">${o.date || ''}</div>
                </div>`;
            }).join('') : `<p style="font-size:12px; text-align:center; padding:10px; color:var(--text-muted);">${t('bell_no_new_orders', 'مفيش طلبات جديدة')}</p>`;
            dd.classList.remove('hidden');
            // ✅ زي فيسبوك بالظبط: أول ما تفتح الجرس، العداد يتصفّر فورًا (تتعلّم كل الطلبات
            // الظاهرة كمقروءة)، لكن المتصفّح لسه بيميّزها بصريًا في القايمة دي كـ"كانت جديدة"
            // للحظة المشاهدة الحالية دي بس، من غير ما تختفي فجأة.
            markAllSeenNow(storeKey);
            updateNewOrdersBadge();
        }
        // 🔔 الضغط على إشعار من قايمة الجرس بيفتح نافذة تفاصيل الطلب ده مباشرة (فاتورة
        // تفصيلية كاملة بداخل النافذة، بدون تحميل صورة) - من غير ما يحتاج التاجر يسكرول
        // لسجل الطلبات ويدوّر على طلبه بنفسه. لو حابب يفتح سجل الطلبات كامل بنفسه براحته،
        // يقدر من زرار "سجل الطلبات" العادي في اللوحة.
        function goToOrderFromBell(index) {
            document.getElementById('newOrdersDropdown').classList.add('hidden');
            openOrderDetailsModal(index);
        }
        function toggleNewOrderSound() {
            let cb = document.getElementById('notifSoundToggle');
            localStorage.setItem('newOrderSoundEnabled', cb.checked ? 'true' : 'false');
        }
        function toggleNewOrderVisibility() {
            let cb = document.getElementById('notifVisibleToggle');
            localStorage.setItem('newOrderNotifDisabled', cb.checked ? 'false' : 'true');
            updateNewOrdersBadge();
        }
        function toggleNewOrdersSettingsBox() {
            document.getElementById('newOrdersDropdown').classList.add('hidden');
            document.getElementById('newOrdersSettingsBox').classList.toggle('hidden');
        }
        // ✅ بدل ما كان القيمة تتحفظ تلقائيًا أول ما التاجر يغيّر الرقم (onchange)، دلوقتي
        // لازم يضغط زرار التأكيد بنفسه؛ markNotifAutoDeleteDirty() بس بتاخد بوصة إن فيه
        // تغيير مش محفوظ (تلوين الزرار) من غير ما تحفظ أي شيء لحد ما يضغط فعليًا.
        function markNotifAutoDeleteDirty() {
            let btn = document.getElementById('notifAutoDeleteConfirmBtn');
            if(btn) btn.classList.add('notif-autodel-dirty');
        }
        function saveNotifAutoDeleteDays() {
            let v = document.getElementById('notifAutoDeleteDaysInput').value.trim();
            let storeKey = localStorage.getItem('currentActiveMerchant');
            if(!storeKey) return;
            if(v === '') localStorage.removeItem('notifAutoDeleteDays_' + storeKey);
            else localStorage.setItem('notifAutoDeleteDays_' + storeKey, v);
            let btn = document.getElementById('notifAutoDeleteConfirmBtn');
            if(btn) btn.classList.remove('notif-autodel-dirty');
            showToast('✅ ' + t('notif_autodel_saved_toast', 'اتحفظت مدة حذف الإشعارات'));
        }
        // 🗑️ لو التاجر حدد مدة، أي طلب "مقروء" أقدم من المدة دي بيتشال من قايمة "المقروءة
        // المحفوظة" (بترجعله يظهر معلّم زي الجديد لو فاتت المدة من غير أي تفاعل تاني - وده
        // سلوك بسيط ومقصود بدل تعقيد نظام تواريخ منفصل لكل إشعار).
        // 🗑️ لو التاجر حدد مدة، أي طلب "مقروء" وصلته أقدم من المدة دي بيتشال من قايمة
        // "المقروءة" المحفوظة - عمليًا كده بيبقى تنظيف دوري بسيط للسجل الداخلي، ومايأثرش
        // على سجل الطلبات نفسه (بيفضل زي ما هو، ده بس بيمسح "ذاكرة" الجرس القديمة).
        function pruneOldSeenNotifications(storeKey, store) {
            // ⚡ مش محتاجين تنظيف تفصيلي هنا بعد التحول لنظام lastSeenTs (قيمة واحدة بس
            // لكل متجر، مفيش قائمة بتكبر مع الوقت تحتاج تقليم أصلاً). خليناها فاضية
            // لعدم كسر أي استدعاء قديم ليها.
        }
        function initNewOrdersBell() {
            let storeKey = localStorage.getItem('currentActiveMerchant');
            document.getElementById('notifSoundToggle').checked = localStorage.getItem('newOrderSoundEnabled') !== 'false';
            document.getElementById('notifVisibleToggle').checked = localStorage.getItem('newOrderNotifDisabled') !== 'true';
            document.getElementById('notifAutoDeleteDaysInput').value = localStorage.getItem('notifAutoDeleteDays_' + storeKey) || '';
            updateNewOrdersBadge();
        }
        window.updateNewOrdersBadge = updateNewOrdersBadge;

                function enablePushNotifications(silent) {
            let merchant = localStorage.getItem('currentActiveMerchant');
            if(!merchant) return;
            let statusEl = document.getElementById('pushNotifStatus');
            if(!silent && statusEl) statusEl.textContent = '⏳ جاري التفعيل...';
            if(!window.requestPushPermissionAndSaveToken) {
                if(!silent && statusEl) statusEl.textContent = '⚠️ غير مدعوم على هذا المتصفح';
                return;
            }
            window.requestPushPermissionAndSaveToken(merchant).then(function() {
                if(statusEl) statusEl.textContent = '✅ الإشعارات مفعّلة على هذا الجهاز';
                if(!silent) showToast('🔔 تم تفعيل الإشعارات بنجاح');
            }).catch(function(err) {
                if(!silent) {
                    if(statusEl) statusEl.textContent = '❌ ' + (err.message || 'فشل التفعيل');
                    showToast('⚠️ تعذر تفعيل الإشعارات: ' + (err.message || 'جرب تاني'));
                } else if(statusEl) {
                    // في الوضع الصامت (فتح اللوحة عادي)، لو الإذن لسه ما اتطلبش خالص، منوريش
                    // خطأ - بنقول بس إن التفعيل محتاج ضغطة من التاجر نفسه (متطلب من المتصفح)
                    statusEl.textContent = (typeof Notification !== 'undefined' && Notification.permission === 'denied')
                        ? '🔕 ' + t('push_blocked_by_browser', 'الإشعارات ممنوعة من إعدادات المتصفح لهذا الموقع')
                        : 'ℹ️ اضغط "تفعيل" عشان تفعّل الإشعارات على هذا الجهاز';
                }
            });
        }

        // 🔔 مفتاح التبديل في اللوحة: بيحفظ تفضيل التاجر (مفعّل/متوقف) في بيانات متجره،
        // ولو فعّله وإذن المتصفح موجود بالفعل، بيسجّل التوكن على طول من غير أي إزعاج إضافي.
        function togglePushNotifications(enabled) {
            let merchant = localStorage.getItem('currentActiveMerchant');
            if(!merchant) return;
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            if(!stores[merchant]) return;
            stores[merchant].pushNotificationsEnabled = enabled;
            if(!enabled) {
                // بنشيل الـ token عشان الـ Cloud Function ميبعتلوش إشعارات تاني، من غير ما نلغي
                // إذن المتصفح نفسه (التاجر يقدر يرجّعها في أي وقت بضغطة واحدة بس)
                stores[merchant].fcmToken = '';
            }
            if(!saveAllStores(stores)) return;
            let statusEl = document.getElementById('pushNotifStatus');
            if(enabled) {
                enablePushNotifications(true);
            } else {
                if(statusEl) statusEl.textContent = '🔕 الإشعارات متوقفة لهذا المتجر';
                showToast('🔕 تم إيقاف إشعارات الطلبات');
            }
        }

        function logoutApp() {
            if(window.stopWatchingStoreOrders) { try { window.stopWatchingStoreOrders(); } catch(e) {} }
            try { stopMerchantChatWatch(); } catch(e) {}
            try { stopBuyerChatThreadsWatch(); } catch(e) {}
            localStorage.removeItem('currentActiveMerchant');
            localStorage.removeItem('currentStaffUsername');
            localStorage.removeItem('isAdminLoggedIn');
            try { syncTopHeaderChatIcon(); } catch(e) {}
            let authLabel = document.getElementById('authNavLabel');
            let authIcon = document.getElementById('authNavIcon');
            if(authLabel) { authLabel.setAttribute('data-i18n', 'nav_auth'); authLabel.textContent = t('nav_auth', 'دخول التجار'); }
            if(authIcon) { authIcon.className = 'fa fa-store'; }
            switchTab('auth');
        }

        // --- لوحة التاجر وتعديل اسم المتجر واللوجو ---
        function loadDashboard() {
            // ⚠️ الدالة دي ضخمة وبتلمس عشرات العناصر في نفس الوقت (فورم المنتج، الأقسام،
            // الإعدادات، الاشتراك...)، فأي خطأ بسيط في جزء واحد منها (زي عنصر مش موجود) كان
            // بيوقف تنفيذ باقي الدالة بالكامل من غير أي رسالة واضحة للمستخدم - يعني مثلاً لو
            // حصل بعد حفظ منتج بنجاح، كان بيبان للتاجر وكأن "المنتج مانششرش" رغم إنه فعليًا
            // اتحفظ، بس الشاشة مارجعتش تتحدث. دلوقتي أي خطأ زي ده بيتسجل في الكونسول بس، ومايوقفش
            // بقية الكود اللي بينده عليها (زي إغلاق الفورم وتفريغه).
            try {
                loadDashboardInner();
            } catch(e) {
                console.error('loadDashboard: حصل خطأ غير متوقع أثناء تحديث لوحة التاجر', e);
            }
        }
        function loadDashboardInner() {
            let merchant = localStorage.getItem('currentActiveMerchant');
            if(window.watchStoreForNewOrders) { try { window.watchStoreForNewOrders(merchant); } catch(e) {} }
            try { initMerchantChatWatch(merchant); } catch(e) { console.error('initMerchantChatWatch error:', e); }
            try { initBuyerChatThreadsWatch(merchant); } catch(e) { console.error('initBuyerChatThreadsWatch error:', e); }
            try {
                document.getElementById('dashStoreTitle').innerText = `${t('dash_store_title_prefix', 'إدارة متجر:')} ${merchant}`;
                // 🔁 التاجر داخل فعلاً دلوقتي، فمنطقي إن الأيقونة السفلية تبقى "لوحة إدارة المتجر"
                // بدل "دخول التجار" (اللي بقت مالهاش لازمة له بعد ما دخل بالفعل).
                let authLabel = document.getElementById('authNavLabel');
                let authIcon = document.getElementById('authNavIcon');
                if(authLabel) { authLabel.removeAttribute('data-i18n'); authLabel.textContent = t('nav_dashboard', '🏪 لوحة إدارة المتجر'); }
                if(authIcon) { authIcon.className = 'fa fa-gauge'; }
            } catch(e) {
                console.error('loadDashboardInner: خطأ في عنوان اللوحة/الأيقونة (الباقي هيكمل عادي):', e);
            }
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            let store = stores[merchant] || {};

            try {
                // 📖 دليل الاستخدام: موجود في لوحة التاجر (زي ما كان الأصل)، وكمان في صفحة "عن
                // المنصة" للزوار الجداد قبل التسجيل.
                document.getElementById('dashboardGuideCard').classList.toggle('hidden', getPlatformGuideItems().length === 0);
                renderActivateAccountBanner();
                try { updateMerchantCopyrightModeUI(); } catch(e) {}
                try { mountRichToolbars(); } catch(e) {}

                let staffBanner = document.getElementById('staffSessionBanner');
                let staffUsername = localStorage.getItem('currentStaffUsername');
                if(staffBanner) {
                    staffBanner.classList.toggle('hidden', !staffUsername);
                    if(staffUsername) document.getElementById('staffSessionUsername').textContent = staffUsername;
                }
            } catch(e) {
                console.error('loadDashboardInner: خطأ في دليل الاستخدام/بانر التفعيل (الباقي هيكمل عادي):', e);
            }
            
            // 🛡️ من هنا لحد نهاية تعبئة فورم الإعدادات: بلوك واحد محمي بالكامل. ده الجزء
            // اللي كان بيسبب المشكلة المتكررة اللي اتبلغت عنها ("الاشتراك والباقات" ولا
            // "الأقسام" بتفضل فاضية) - لو أي سطر هنا يفشل لأي سبب (مثلاً عنصر مش موجود
            // في صفحة معينة)، كان بيوقف كل حاجة بعده تمامًا من غير أي رسالة توضح السبب،
            // شامل تحميل الأقسام والمنتجات والاشتراك اللي جايين بعده. دلوقتي أي خطأ هنا
            // يتسجل في الكونسول بس، والباقي (الأقسام، المنتجات، الاشتراك...) يكمل عادي.
            try {
                document.getElementById('storeNameInput').value = store.displayName || merchant;
                document.getElementById('storeLoginNameReadonly').textContent = merchant;
                document.getElementById('storeLockoutMinutesInput').value = store.loginLockoutMinutes || '';

                // فصل رقم الواتساب عن كود الدولة المخزن مسبقاً
                populateCountryCodes();
                document.getElementById('storeWhatsappCountryCode').value = store.whatsappCountryCode || '20';
                let localWa = (store.whatsapp || '').replace(new RegExp('^' + (store.whatsappCountryCode || '20')), '');
                document.getElementById('storeWhatsappInput').value = localWa;
                updateWhatsappPreview();

                document.getElementById('storeMessengerInput').value = store.messenger || '';
                document.getElementById('storeTelegramInput').value = store.telegram || '';
                document.getElementById('storeOrderTemplateInput').value = store.orderMessageTemplate || '';
                document.getElementById('storeDirectOrderHoursInput').value = (store.directOrderHours !== null && store.directOrderHours !== undefined) ? store.directOrderHours : '';
                document.getElementById('storeDirectOrderMessageInput').value = store.directOrderMessage || '';
                document.getElementById('storeVodafoneCashInput').value = store.vodafoneCash || '';
                populateCurrencyDropdown('storeCurrencyInput', store.currency);
                populateCurrencyDropdown('prodCurrencyQuickSelect', store.currency);
                document.getElementById('storeDeliveryFeeInput').value = (store.deliveryFee !== null && store.deliveryFee !== undefined) ? store.deliveryFee : '';
                document.getElementById('storeFreeDeliveryThresholdInput').value = (store.freeDeliveryThreshold !== null && store.freeDeliveryThreshold !== undefined) ? store.freeDeliveryThreshold : '';
                try { document.getElementById('storeDeliveryZonesInput').value = ((store.deliveryZones || []).map(z => z.name + ' = ' + z.fee)).join('\n'); } catch(e) {}
                document.getElementById('storePhoneFieldModeSelect').value = store.phoneFieldMode || 'optional';
                try { document.getElementById('storeGuestCheckoutToggle').checked = store.guestCheckoutAllowed !== false; } catch(e) {}
                try { document.getElementById('storeReviewsEnabledToggle').checked = store.reviewsEnabled !== false; } catch(e) {}
                try { document.getElementById('storeReviewsRequireLoginToggle').checked = store.reviewsRequireLogin === true; } catch(e) {}
                try { document.getElementById('storeBuyerRegDisabledToggle').checked = store.buyerRegistrationDisabled === true; } catch(e) {}
                document.getElementById('storeProductsLabelInput').value = isDefaultProductsLabel(store.productsLabel) ? t('default_product_word', 'منتج') : store.productsLabel;
                document.getElementById('storeCategoriesLabelInput').value = store.categoriesLabel || 'التصنيفات';
                document.getElementById('storeCategoriesIconSelect').value = store.categoriesIcon || '🗂️';
                let catIconPreview = document.getElementById('storeCategoriesIconImagePreview');
                if(store.categoriesIconImage) {
                    catIconPreview.src = store.categoriesIconImage;
                    catIconPreview.style.display = 'block';
                } else {
                    catIconPreview.style.display = 'none';
                    catIconPreview.removeAttribute('src');
                }
                document.getElementById('storeCategoriesIconImageFile').removeAttribute('data-base64');

                let social = store.socialLinks || {};
                document.getElementById('storeFacebookInput').value = social.facebook || '';
                document.getElementById('storeInstagramInput').value = social.instagram || '';
                document.getElementById('storeYoutubeInput').value = social.youtube || '';
                document.getElementById('storeTiktokInput').value = social.tiktok || '';
                document.getElementById('storeTwitterInput').value = social.twitter || '';
                document.getElementById('storeCallPhoneInput').value = social.callPhone || '';
                document.getElementById('storePaymentLinkInput').value = store.paymentLink || '';
                {
                    let pushToggle = document.getElementById('pushNotifToggle');
                    let pushEnabled = store.pushNotificationsEnabled !== false; // افتراضيًا مفعّلة
                    if(pushToggle) pushToggle.checked = pushEnabled;
                    if(pushEnabled) enablePushNotifications(true); // تفعيل صامت لو الإذن ممنوح بالفعل، من غير أي إزعاج
                }
                renderMerchantColorsGateBox(merchant, store);
                document.getElementById('storeAboutUsInput').value = store.aboutUs || '';
                {
                    let aStyle = store.aboutUsStyle || { color: '#5a5248', fontSize: '15px', bold: false, underline: false };
                    document.getElementById('storeAboutColor').value = aStyle.color || '#5a5248';
                    document.getElementById('storeAboutSize').value = aStyle.fontSize || '15px';
                    document.getElementById('storeAboutBold').checked = !!aStyle.bold;
                    document.getElementById('storeAboutUnderline').checked = !!aStyle.underline;
                    updateAboutPreview();
                }
                document.getElementById('storeHowToShopInput').value = store.howToShopText || '';
                document.getElementById('storeReturnPolicyInput').value = store.returnPolicy || '';
                if(store.aboutImage) {
                    let aboutImgPrev = document.getElementById('storeAboutImagePreview');
                    aboutImgPrev.src = store.aboutImage;
                    aboutImgPrev.style.display = 'block';
                }
                renderEmailSecurityBox(store);

                if(store.logo) {
                    let p = document.getElementById('storeLogoPreview');
                    p.src = store.logo;
                    p.style.display = 'block';
                }
            } catch(e) {
                console.error('loadDashboardInner: حصل خطأ أثناء تعبئة فورم إعدادات المتجر (الأقسام والمنتجات والاشتراك هتكمل عادي بعد كده):', e);
            }

            try { renderDashboardCategories(store.categories || []); } catch(e) { console.error('renderDashboardCategories error:', e); }
            try { renderDashboardProducts(store.products || [], store.categories || [], store.currency || "ج.م"); } catch(e) { console.error('renderDashboardProducts error:', e); }
            try { renderBestSellers(store.products || []); } catch(e) { console.error('renderBestSellers error:', e); }
            try { renderMerchantShortcuts(store.shortcuts || []); } catch(e) { console.error('renderMerchantShortcuts error:', e); }
            try { renderMerchantBanners(store.banners || []); } catch(e) { console.error('renderMerchantBanners error:', e); }
            // ⚠️ من هنا لحد نهاية الدالة: كل نداء في try/catch مستقل. لو حصل خطأ في
            // قسم واحد (مثلاً بيانات متجر قديم ناقصة حقل معيّن)، الخطأ يتسجل في
            // الكونسول بس ومايوقفش تحديث باقي الأقسام (زي ما كان يحصل قبل كده لو
            // القسم اللي فيه المشكلة كان في نص الترتيب، كل اللي بعده كان يفضل فاضي
            // من غير أي رسالة توضح السبب).
            try { renderStorageQuotaBox(store); } catch(e) { console.error('renderStorageQuotaBox error:', e); }
            try { renderSubscriptionStatusBox(store); } catch(e) { console.error('renderSubscriptionStatusBox error:', e); }
            try { renderAdminMessagesInbox(store); } catch(e) { console.error('renderAdminMessagesInbox error:', e); }
            try { renderVisitorChart(store); } catch(e) { console.error('renderVisitorChart error:', e); }
            try { if(cleanupOldOrders(store)) saveAllStores(stores); } catch(e) { console.error('cleanupOldOrders error:', e); }
            try { renderOrderHistory(store); } catch(e) { console.error('renderOrderHistory error:', e); }
            try { renderRevenueReport(store); } catch(e) { console.error('renderRevenueReport error:', e); }
            applyProductsLabelToDashboard(store.productsLabel || 'منتج');
            updateStockAlertBadge(store.products || []);

            // 🖼️ الحد الأقصى لعدد الصور الإضافية للمنتج: افتراضيًا 5، والأدمن ممكن يزوّده لمتجر معين
            currentMaxGalleryImages = parseInt(store.maxProductImages) || 5;
            let galleryLimitLabel = document.getElementById('prodGalleryLimitLabel');
            if(galleryLimitLabel) galleryLimitLabel.textContent = t('prod_gallery_label', 'صور إضافية للمنتج (اختياري، حتى 5 صور):').replace(/\d+/, currentMaxGalleryImages);

            // ============================================================
            // 👥 مساعدو المتجر: عرض القائمة + تجهيز فورم الإضافة (لصاحب المتجر بس)،
            // وإخفاء قسم إدارة المساعدين بالكامل عن أي مساعد داخل هو نفسه (حماية من
            // أي مساعد يضيف مساعد تاني أو يغيّر صلاحياته هو نفسه).
            // ============================================================
            let staffAccordionEl = document.getElementById('storeStaffAccordion');
            if(staffAccordionEl) staffAccordionEl.classList.toggle('hidden', isCurrentUserStaff());
            updateStaffLoginLinkBox(localStorage.getItem('currentActiveMerchant'));
            renderStoreStaffList(store.staff || []);
            renderStaffActivityLog(store);
            renderNewStaffPermsChecklist();

            applyStaffPermissionGating();
        }

        // ============================================================
        // 🔒 تقييد الواجهة حسب صلاحيات المساعد (لو اللي داخل مساعد مش صاحب المتجر):
        // بيخفي/يعطّل الأزرار والأجزاء اللي مالوش صلاحية عليها، من غير ما يمس بيانات
        // المتجر نفسها - صاحب المتجر لما يدخل بحسابه هو بيشوف كل حاجة زي العادة.
        // ============================================================
        function applyStaffPermissionGating() {
            let isStaff = isCurrentUserStaff();

            // جزء سجل الطلبات بالكامل
            let ordersAccordion = document.getElementById('ordersLogAccordion');
            if(ordersAccordion) ordersAccordion.classList.toggle('hidden', isStaff && !currentStaffHasPermission('viewOrders'));

            // زراير "المنتجات" و"الأقسام" السريعة
            let productsBtn = document.querySelector('.dash-quick-btn[onclick="openProductsModal()"]');
            let categoriesBtn = document.querySelector('.dash-quick-btn[onclick="openCategoriesModal()"]');
            if(productsBtn) productsBtn.classList.toggle('hidden', isStaff && !currentStaffHasPermission('manageProducts'));
            if(categoriesBtn) categoriesBtn.classList.toggle('hidden', isStaff && !currentStaffHasPermission('manageCategories'));

            // جزء تقرير الأرباح (بيانات حساسة)
            let profitAccordion = document.getElementById('profitManagementAccordion');
            if(profitAccordion) {
                let wrapper = profitAccordion.closest('details.dash-accordion') || profitAccordion;
                wrapper.classList.toggle('hidden', isStaff && !currentStaffHasPermission('viewProfitReport'));
            }

            // جزء إعدادات المتجر العامة (كل حاجة تحت "إدارة المتجر والإعدادات"، وده بيشمل
            // كمان الاختصارات واللافتات وإعدادات التوصيل لأنهم جوه نفس القسم ده بالظبط)
            let settingsBox = document.getElementById('dashStoreTitle');
            if(settingsBox) {
                let settingsAccordion = settingsBox.closest('details.dash-accordion');
                if(settingsAccordion) settingsAccordion.classList.toggle('hidden', isStaff && !(currentStaffHasPermission('manageSettings') || currentStaffHasPermission('manageShortcutsBanners') || currentStaffHasPermission('manageDelivery')));
            }

            // إحصائيات الزوار (جزء من صندوق الاشتراك، بس بيتم إخفاؤه لوحده لو المساعد معهوش
            // صلاحية viewVisitorStats بالتحديد)
            let visitorBox = document.getElementById('visitorChartBox');
            if(visitorBox) visitorBox.classList.toggle('hidden', isStaff && !currentStaffHasPermission('viewVisitorStats'));

            // زرار "تصفير الترتيب" في الأكثر مبيعًا
            let resetBestsellersBtn = document.querySelector('.dash-quick-btn[onclick="resetBestsellersRanking()"]') || document.getElementById('resetBestsellersBtn');
            if(resetBestsellersBtn) resetBestsellersBtn.classList.toggle('hidden', isStaff && !currentStaffHasPermission('manageBestsellers'));

            // زرار تحديث حالة الطلب في سجل الطلبات (يفضل يشوف الطلبات دايمًا لو معاه viewOrders،
            // لكن يقدر يعدّل حالتها بس لو معاه updateOrders كمان)
            document.querySelectorAll('.order-status-action-btn').forEach(btn => {
                btn.classList.toggle('hidden', isStaff && !currentStaffHasPermission('updateOrders'));
            });

            // زرار حذف الطلب نهائيًا - صلاحية منفصلة وحساسة عن مجرد تحديث الحالة
            document.querySelectorAll('.order-delete-action-btn').forEach(btn => {
                btn.classList.toggle('hidden', isStaff && !currentStaffHasPermission('deleteOrders'));
            });
        }

        // 🔗 بيبني رابط دخول المساعدين الخاص بالمتجر (نفس رابط المتجر ?store=اسم_المتجر)،
        // عشان صاحب المتجر يبعته لمساعديه بدل رابط المنصة العام. هو نفس الرابط اللي
        // هيفضل شغال حتى بعد ما المتجر يتنقل لاستضافة/دومين مستقل خاص بيه.
        function buildStaffLoginLink(storeKey) {
            let base = window.location.origin + window.location.pathname;
            return `${base}?store=${encodeURIComponent(storeKey)}`;
        }

        function updateStaffLoginLinkBox(storeKey) {
            let box = document.getElementById('staffLoginLinkBox');
            if(box) box.value = buildStaffLoginLink(storeKey);
        }

        // ============================================================
        // 📱 QR كود لمتجرك: نفس رابط المتجر (buildStaffLoginLink) لكن كصورة QR
        // يقدر التاجر يطبعها على المنيو/الفاتورة/الفيتيرينة. مكتبة qrcode.min.js
        // خفيفة جدًا (~4 كيلوبايت) ومحمّلة من CDN في index.html.
        // ============================================================
        function showStoreQrCode() {
            let storeKey = localStorage.getItem('currentActiveMerchant');
            if(!storeKey) return;
            let link = buildStaffLoginLink(storeKey);
            renderQrModal(link, 'qr-' + storeKey);
        }
        // 📱 QR كود مخصص لمنتج معيّن: نفس رابط المتجر + معرّف المنتج، عشان العميل يفتح
        // صفحة المنتج مباشرة (مفيد جدًا لو طبعتها على ملصق المنتج نفسه في المحل).
        function showProductQrCode(index) {
            let storeKey = localStorage.getItem('currentActiveMerchant');
            if(!storeKey) return;
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            let product = stores[storeKey] && stores[storeKey].products && stores[storeKey].products[index];
            if(!product) return;
            let link = buildStaffLoginLink(storeKey) + '&product=' + encodeURIComponent(product.name);
            renderQrModal(link, 'qr-product-' + product.name.replace(/[^a-zA-Z0-9_-]/g, '_'));
        }
        function renderQrModal(link, downloadFileName) {
            let box = document.getElementById('storeQrCanvasBox');
            box.innerHTML = '';
            if(typeof QRCode === 'undefined') {
                box.innerHTML = '<p style="font-size:12px; color:var(--text-muted);">تعذر تحميل مكتبة QR (تأكد من الاتصال بالإنترنت).</p>';
            } else {
                new QRCode(box, { text: link, width: 220, height: 220, colorDark: '#000000', colorLight: '#ffffff' });
            }
            document.getElementById('storeQrModal').setAttribute('data-download-name', downloadFileName);
            document.getElementById('storeQrModal').classList.remove('hidden');
        }
        function closeStoreQrModal() {
            document.getElementById('storeQrModal').classList.add('hidden');
        }
        function downloadStoreQrCode() {
            let box = document.getElementById('storeQrCanvasBox');
            let canvas = box.querySelector('canvas');
            let img = box.querySelector('img');
            let fileName = document.getElementById('storeQrModal').getAttribute('data-download-name') || 'qr-code';
            let dataUrl = canvas ? canvas.toDataURL('image/png') : (img ? img.src : null);
            if(!dataUrl) { showToast('⚠️ لسه الكود مش جاهز، جرب تاني بعد لحظة'); return; }
            let a = document.createElement('a');
            a.href = dataUrl;
            a.download = fileName + '.png';
            a.click();
        }

        // 📋 نسخ نص لأي حافظة بشكل موثوق: لو navigator.clipboard مش متاحة أصلاً (بيحصل في
        // سياقات معينة زي فتح ملف محلي مباشرة بدل استضافة حقيقية)، الكود القديم كان بيوقف
        // من غير ما يجرب الطريقة الاحتياطية خالص. الدالة دي بتضمن إن فيه محاولة حقيقية
        // بالطريقتين قبل ما تعتبرها فشلت.
        function copyTextRobust(text, successMessage) {
            function fallbackCopy() {
                let temp = document.createElement('textarea');
                temp.value = text;
                temp.style.position = 'fixed';
                temp.style.opacity = '0';
                document.body.appendChild(temp);
                temp.focus();
                temp.select();
                let ok = false;
                try { ok = document.execCommand('copy'); } catch(e) { ok = false; }
                document.body.removeChild(temp);
                if(ok) showToast(successMessage);
                else showToast('⚠️ تعذر النسخ تلقائيًا، انسخ النص يدويًا من الصندوق.');
            }
            if(navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(text).then(() => {
                    showToast(successMessage);
                }).catch(fallbackCopy);
            } else {
                fallbackCopy();
            }
        }

        function copyStaffLoginLink() {
            let box = document.getElementById('staffLoginLinkBox');
            if(!box || !box.value) return;
            box.select();
            box.setSelectionRange(0, 99999);
            copyTextRobust(box.value, '🔗 تم نسخ رابط دخول المساعدين');
        }

        // --- عرض قائمة مساعدي المتجر بشكل مضغوط (chip)، بجانب كل واحد ✏️ للتعديل و🗑️ للحذف ---
        function renderStoreStaffList(staffList) {
            let listDiv = document.getElementById('storeStaffList');
            if(!listDiv) return;
            if(staffList.length === 0) {
                listDiv.innerHTML = `<p style="font-size:12px; color:var(--text-muted);">${t('staff_none_yet', 'لسه مفيش مساعدين مضافين.')}</p>`;
                return;
            }
            listDiv.style.display = 'flex';
            listDiv.style.flexWrap = 'wrap';
            listDiv.style.gap = '8px';
            listDiv.innerHTML = staffList.map((s, index) => {
                let grantedCount = s.permissions ? Object.values(s.permissions).filter(Boolean).length : 0;
                return `
                    <div style="display:inline-flex; align-items:center; gap:6px; background:#fff; border:1px solid var(--border-color); border-radius:24px; padding:4px 6px 4px 10px;" title="${grantedCount}/${STORE_STAFF_PERMISSIONS_LIST.length} ${t('staff_perms_active', 'صلاحيات مفعّلة')}">
                        <i class="fa fa-user" style="color:var(--primary-color);"></i>
                        <span style="font-size:12px; font-weight:bold; white-space:nowrap;">${s.username}</span>
                        <button onclick="editStoreStaff(${index})" title="${t('edit_btn', 'تعديل')}" style="width:22px; height:22px; border-radius:50%; border:none; background:var(--bg-body); color:var(--text-main); font-size:10px; cursor:pointer; display:flex; align-items:center; justify-content:center; padding:0;"><i class="fa fa-pen"></i></button>
                        <button onclick="deleteStoreStaff(${index})" title="${t('delete_btn', 'حذف')}" style="width:22px; height:22px; border-radius:50%; border:none; background:#fee2e2; color:#dc2626; font-size:10px; cursor:pointer; display:flex; align-items:center; justify-content:center; padding:0;"><i class="fa fa-trash"></i></button>
                    </div>
                `;
            }).join('');
        }

        // --- رسم قائمة صناديق الصلاحيات وقت إضافة/تعديل مساعد ---
        function renderNewStaffPermsChecklist(selectedPerms) {
            let box = document.getElementById('newStaffPermsChecklist');
            if(!box) return;
            let perms = selectedPerms || {};
            box.innerHTML = STORE_STAFF_PERMISSIONS_LIST.map(p => `
                <label style="display:flex; align-items:center; gap:6px; font-size:12px; padding:4px 0;">
                    <input type="checkbox" class="new-staff-perm" value="${p.key}" ${perms[p.key] ? 'checked' : ''} style="width:auto; margin:0;"> ${t(p.labelKey, p.label)}
                </label>
            `).join('');
        }

        function saveStoreStaff() {
            let username = document.getElementById('newStaffUsername').value.trim();
            let password = document.getElementById('newStaffPassword').value.trim();
            let editIndex = parseInt(document.getElementById('editStaffIndex').value);
            if(!username || !password) { alert(t('alert_staff_creds_required')); return; }

            let merchant = localStorage.getItem('currentActiveMerchant');
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            let store = stores[merchant];
            if(!store) return;
            store.staff = store.staff || [];

            // ✅ اسم دخول المساعد لازم يكون فريد على مستوى المنصة كلها (مش بس داخل نفس المتجر)،
            // عشان لما يدخل بياناته في صفحة تسجيل الدخول العامة، النظام يعرف يميّزه صح من غير لبس
            // مع أي تاجر أو مساعد أو حساب أدمن تاني بنفس الاسم.
            let usernameTaken =
                (stores[username] && username !== merchant) ||
                (JSON.parse(localStorage.getItem('adminAccounts')) || []).some(a => a.username.toLowerCase() === username.toLowerCase()) ||
                Object.keys(stores).some(k => (stores[k].staff || []).some((s, i) => s.username.toLowerCase() === username.toLowerCase() && !(k === merchant && i === editIndex)));
            if(usernameTaken) { alert(t('alert_username_taken')); return; }

            // 🏷️ فحص حد عدد المساعدين المسموح بيه حسب باقة اشتراك المتجر (بس وقت
            // إضافة مساعد جديد، مش وقت تعديل مساعد موجود بالفعل)
            if(editIndex < 0) {
                let plan = getPlanForStore(store);
                if(plan.staffLimit !== -1 && store.staff.length >= plan.staffLimit) {
                    alert(`⛔ وصلت للحد الأقصى لعدد المساعدين في باقتك الحالية (${plan.name} - ${plan.staffLimit === 0 ? 'مفيش مساعدين مسموح بيهم في الباقة دي' : plan.staffLimit + ' مساعد'}). ترقّى لباقة أعلى عشان تضيف مساعدين أكتر.`);
                    return;
                }
            }

            let permissions = {};
            document.querySelectorAll('.new-staff-perm').forEach(cb => { permissions[cb.value] = cb.checked; });

            // ============================================================
            // 🔐 حساب المساعد بقى حقيقي على Firebase Authentication من أول لحظة (بنفس
            // طريقة حساب التاجر تمامًا)، عن طريق اتصال ثانوي منفصل عشان جلسة التاجر
            // الحالية ما تتأثرش. بنحتفظ بكلمة السر محليًا كمان (زي حساب التاجر) للعمل
            // الفوري أوفلاين، لكنها لا تُرفع للسحابة أبدًا (محمية بالفعل في firebase-config.js).
            // ============================================================
            let saveBtn = document.getElementById('saveStaffBtn');
            let originalBtnHtml = saveBtn ? saveBtn.innerHTML : '';
            if(saveBtn) { saveBtn.disabled = true; saveBtn.innerHTML = '⏳ جاري الحفظ...'; }

            function finishSave(authUid) {
                let entry = { username, password, permissions, authUid: authUid || null };
                if(editIndex >= 0 && store.staff[editIndex]) {
                    // لو بيعدّل مساعد موجود بالفعل وله حساب Firebase قديم، منحافظش عليه لو مفيش uid جديد
                    if(!authUid && store.staff[editIndex].authUid) entry.authUid = store.staff[editIndex].authUid;
                    store.staff[editIndex] = entry;
                } else {
                    store.staff.push(entry);
                }
                recomputeAuthorizedUids(store);
                if(!saveAllStores(stores)) return;
                cancelEditStaff();
                renderStoreStaffList(store.staff);
                showToast('✅ تم حفظ بيانات المساعد بنجاح');
            }

            let needsNewAuthAccount = editIndex < 0 || !store.staff[editIndex] || !store.staff[editIndex].authUid || store.staff[editIndex].password !== password;
            if(needsNewAuthAccount && window.createAuxAuthAccount) {
                let authEmail = window.buildSyntheticStaffEmail(username);
                window.createAuxAuthAccount(authEmail, password).then(function(uid) {
                    finishSave(uid);
                }).catch(function(err) {
                    console.warn('تعذر إنشاء حساب Firebase للمساعد، هيتم حفظه محليًا فقط:', err.message);
                    finishSave(null);
                }).finally(function() {
                    if(saveBtn) { saveBtn.disabled = false; saveBtn.innerHTML = originalBtnHtml; }
                });
            } else {
                finishSave(null);
                if(saveBtn) { saveBtn.disabled = false; saveBtn.innerHTML = originalBtnHtml; }
            }
        }

        // ============================================================
        // 🤝 تجار الشركاء: الأدمن بس (مش صاحب المتجر) هو اللي يقدر يضيف/يحذف
        // شريك على متجر معين، ببيانات دخول مستقلة كاملة (زي تاجر عادي تمامًا)
        // بس بيديروا نفس بيانات المتجر. مفيد لو المتجر مملوك لأكتر من طرف.
        // ============================================================
        function openStoreCoOwnersModal(name) {
            document.getElementById('storeCoOwnersModalTarget').value = name;
            document.getElementById('storeCoOwnersModalName').textContent = name;
            renderStoreCoOwnersList(name);
            document.getElementById('newCoOwnerUsername').value = '';
            document.getElementById('newCoOwnerPassword').value = '';
            document.getElementById('storeCoOwnersModal').classList.remove('hidden');
        }

        function closeStoreCoOwnersModal() {
            document.getElementById('storeCoOwnersModal').classList.add('hidden');
        }

        function renderStoreCoOwnersList(name) {
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            let store = stores[name];
            let list = document.getElementById('storeCoOwnersList');
            let coOwners = (store && store.coOwners) || [];
            if(coOwners.length === 0) {
                list.innerHTML = '<p style="font-size:12px; color:var(--text-muted); margin:0;">لا يوجد شركاء مضافين على هذا المتجر حالياً.</p>';
                return;
            }
            list.innerHTML = coOwners.map((c, i) => `
                <div style="display:flex; justify-content:space-between; align-items:center; background:#fff; border:1px solid var(--border-color); border-radius:8px; padding:8px 10px; margin-bottom:6px; font-size:12px;">
                    <span><i class="fa fa-user-friends"></i> <strong>${c.username}</strong> — كلمة السر: ${c.password}</span>
                    <button class="danger edit" style="width:auto; padding:5px 8px; font-size:11px;" onclick="removeStoreCoOwner('${name}', ${i})"><i class="fa fa-trash"></i></button>
                </div>
            `).join('');
        }

        function addStoreCoOwner() {
            let name = document.getElementById('storeCoOwnersModalTarget').value;
            let username = document.getElementById('newCoOwnerUsername').value.trim();
            let password = document.getElementById('newCoOwnerPassword').value.trim();
            if(!username || !password) { alert(t('alert_coowner_creds_required')); return; }

            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            if(!stores[name]) return;

            // ✅ نفس فحص التفرد المستخدم مع المساعدين: اسم دخول الشريك لازم يكون فريد
            // على مستوى المنصة كلها (أسماء المتاجر، حسابات الأدمن، كل المساعدين، كل الشركاء).
            let usernameTaken =
                !!stores[username] ||
                (JSON.parse(localStorage.getItem('adminAccounts')) || []).some(a => a.username.toLowerCase() === username.toLowerCase()) ||
                Object.keys(stores).some(k => (stores[k].staff || []).some(s => s.username.toLowerCase() === username.toLowerCase())) ||
                Object.keys(stores).some(k => (stores[k].coOwners || []).some(c => c.username.toLowerCase() === username.toLowerCase()));
            if(usernameTaken) { alert(t('alert_username_taken')); return; }

            stores[name].coOwners = stores[name].coOwners || [];

            // 🔐 نفس نمط حساب المساعد: حساب Firebase حقيقي عبر اتصال ثانوي (بدون التأثير
            // على جلسة التاجر أو الأدمن الحالية)، مع الاحتفاظ بكلمة السر محليًا للعمل
            // الفوري أوفلاين (لا تُرفع للسحابة أبدًا - محمية في firebase-config.js).
            let btn = document.getElementById('addCoOwnerBtn');
            let originalBtnHtml = btn ? btn.innerHTML : '';
            if(btn) { btn.disabled = true; btn.innerHTML = '⏳ جاري الحفظ...'; }

            function finishAdd(authUid) {
                stores[name].coOwners.push({ username, password, authUid: authUid || null, addedAt: Date.now() });
                recomputeAuthorizedUids(stores[name]);
                if(!saveAllStores(stores)) return;
                document.getElementById('newCoOwnerUsername').value = '';
                document.getElementById('newCoOwnerPassword').value = '';
                renderStoreCoOwnersList(name);
                renderAdminStores();
                showToast('✅ تم إضافة الشريك بنجاح');
            }

            if(window.createAuxAuthAccount) {
                let authEmail = window.buildSyntheticPartnerEmail(username);
                window.createAuxAuthAccount(authEmail, password).then(function(uid) {
                    finishAdd(uid);
                }).catch(function(err) {
                    console.warn('تعذر إنشاء حساب Firebase للشريك، هيتم حفظه محليًا فقط:', err.message);
                    finishAdd(null);
                }).finally(function() {
                    if(btn) { btn.disabled = false; btn.innerHTML = originalBtnHtml; }
                });
            } else {
                finishAdd(null);
                if(btn) { btn.disabled = false; btn.innerHTML = originalBtnHtml; }
            }
        }

        function removeStoreCoOwner(name, index) {
            if(!confirm('تأكيد حذف هذا الشريك؟ لن يستطيع الدخول لإدارة المتجر بعد كده.')) return;
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            if(!stores[name] || !stores[name].coOwners) return;
            stores[name].coOwners.splice(index, 1);
            recomputeAuthorizedUids(stores[name]);
            if(!saveAllStores(stores)) return;
            renderStoreCoOwnersList(name);
            renderAdminStores();
            showToast('🗑️ تم حذف الشريك');
        }

        function editStoreStaff(index) {
            let merchant = localStorage.getItem('currentActiveMerchant');
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            let staff = (stores[merchant].staff || [])[index];
            if(!staff) return;
            document.getElementById('editStaffIndex').value = index;
            document.getElementById('newStaffUsername').value = staff.username;
            document.getElementById('newStaffPassword').value = staff.password;
            renderNewStaffPermsChecklist(staff.permissions || {});
            document.getElementById('saveStaffBtn').innerHTML = '<i class="fa fa-save"></i> حفظ التعديل';
            document.getElementById('cancelStaffEditBtn').classList.remove('hidden');
            document.getElementById('newStaffUsername').scrollIntoView({ behavior: 'smooth', block: 'center' });
        }

        function cancelEditStaff() {
            document.getElementById('editStaffIndex').value = '-1';
            document.getElementById('newStaffUsername').value = '';
            document.getElementById('newStaffPassword').value = '';
            renderNewStaffPermsChecklist();
            document.getElementById('saveStaffBtn').innerHTML = '<i class="fa fa-user-plus"></i> إضافة المساعد';
            document.getElementById('cancelStaffEditBtn').classList.add('hidden');
        }

        function deleteStoreStaff(index) {
            let merchant = localStorage.getItem('currentActiveMerchant');
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            let staff = (stores[merchant].staff || [])[index];
            if(!staff) return;
            if(!confirm(`تأكيد حذف المساعد "${staff.username}"؟`)) return;
            stores[merchant].staff.splice(index, 1);
            recomputeAuthorizedUids(stores[merchant]);
            if(!saveAllStores(stores)) return;
            renderStoreStaffList(stores[merchant].staff);
            showToast('🗑️ تم حذف المساعد');
        }

        // --- بيحسب عدد المنتجات "نفذت" أو "مخزونها منخفض" وبيظهرها كشارة تنبيه فوق قسم "المنتجات" ---
        function updateStockAlertBadge(products) {
            let badge = document.getElementById('stockAlertBadge');
            if(!badge) return;
            let attention = products.filter(p => typeof p.stock === 'number' && (p.stock <= 0 || (p.stockAlertEnabled && p.stock <= (p.stockAlertThreshold || 5))));
            if(attention.length === 0) { badge.classList.add('hidden'); return; }
            badge.classList.remove('hidden');
            badge.innerText = `${attention.length} تنبيه`;
        }

        // --- حفظ طريقة تسجيل الدخول المفضّلة للتاجر (اسم/بريد/الاتنين) ---
        function saveMerchantLoginMethod() {
            let merchant = localStorage.getItem('currentActiveMerchant');
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            if(!stores[merchant]) return;
            stores[merchant].loginMethod = document.getElementById('merchantLoginMethodSelect').value;
            localStorage.setItem('allStores', JSON.stringify(stores));
            showToast('✅ اتحفظت طريقة الدخول');
        }

        // --- صندوق تأمين الحساب بالبريد الإلكتروني داخل لوحة التاجر ---
        // --- بانر "فعّل حسابك بالبريد": يظهر بس لو التاجر لسه ماوثقش بريده، ويختفي أوتوماتيك
        // بمجرد ما يوثّقه (مفيش داعي يفضل يشغل مساحة في اللوحة بعد كده). ---
        function renderActivateAccountBanner() {
            let banner = document.getElementById('activateAccountBanner');
            if(!banner) return;
            let merchant = localStorage.getItem('currentActiveMerchant');
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            let store = stores[merchant];
            if(!store) return;
            banner.classList.toggle('hidden', !!store.emailVerified);
        }

        function renderEmailSecurityBox(store) {
            let box = document.getElementById('emailSecurityBox');
            if(!box) return;

            if(store.email && store.emailVerified) {
                box.innerHTML = `
                    <div style="background:#f0fdf4; border:1px solid #86efac; border-radius:10px; padding:10px; font-size:13px; display:flex; justify-content:space-between; align-items:center;">
                        <span>✅ ${t('email_verified_label', 'الحساب موثّق ببريد')}: <strong>${store.email}</strong></span>
                        <button class="secondary" style="width:auto; padding:5px 10px; font-size:11px;" onclick="changeMerchantEmail()">${t('email_change_btn', 'تغيير البريد')}</button>
                    </div>
                    <div style="margin-top:10px;">
                        <label style="font-size:12px; font-weight:bold;">${t('login_method_label', '🔒 طريقة تسجيل الدخول المسموحة لحسابك:')}</label>
                        <select id="merchantLoginMethodSelect" onchange="saveMerchantLoginMethod()">
                            <option value="both">${t('login_method_both', 'اسم الدخول أو البريد الموثّق (الاثنين)')}</option>
                            <option value="username">${t('login_method_username', 'اسم الدخول فقط')}</option>
                            <option value="email">${t('login_method_email', 'البريد الموثّق فقط')}</option>
                        </select>
                        <p style="font-size:10.5px; color:var(--text-muted); margin-top:2px;">${t('login_method_note', 'لو قصرت الدخول على البريد بس، محدش هيقدر يدخل حسابك باسم الدخول حتى لو عرفه — أمان إضافي ليك.')}</p>
                    </div>
                `;
                document.getElementById('merchantLoginMethodSelect').value = store.loginMethod || 'both';
            } else if(store.email && !store.emailVerified) {
                box.innerHTML = `
                    <div style="background:#fff7ed; border:1px solid #fed7aa; border-radius:10px; padding:10px; font-size:13px;">
                        <p style="margin:0 0 8px;">📧 ${t('email_pending_label', 'بريدك')}: <strong>${store.email}</strong> — ${t('email_not_verified_yet', 'لسه مش موثّق.')}</p>
                        <input type="text" id="merchantEmailCodeInput" data-i18n-ph="email_code_ph" placeholder="${t('email_code_ph', 'اكتب كود التفعيل هنا')}" style="margin:0 0 8px;">
                        <div style="display:flex; gap:8px;">
                            <button style="margin:0; background:#10b981;" onclick="confirmMerchantEmailCode()">${t('email_confirm_code_btn', 'تأكيد الكود')}</button>
                            <button class="secondary" style="margin:0;" onclick="resendMerchantEmailCode()">${t('email_resend_code_btn', 'إعادة إرسال الكود')}</button>
                        </div>
                    </div>
                `;
            } else {
                box.innerHTML = `
                    <input type="email" id="merchantEmailInput" placeholder="${t('email_ph', 'بريدك الإلكتروني')}">
                    <button style="margin:0; background:#10b981;" onclick="requestMerchantEmailVerification()"><i class="fa fa-shield-alt"></i> ${t('email_send_code_btn', 'إرسال كود التفعيل')}</button>
                `;
            }
        }

        function requestMerchantEmailVerification() {
            let merchant = localStorage.getItem('currentActiveMerchant');
            let email = document.getElementById('merchantEmailInput').value.trim();
            if(!email) { alert(t('alert_enter_email_first', 'اكتب بريدك الإلكتروني الأول!')); return; }
            startEmailVerification(merchant, email);
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            renderEmailSecurityBox(stores[merchant]);
        }

        function resendMerchantEmailCode() {
            let merchant = localStorage.getItem('currentActiveMerchant');
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            let store = stores[merchant];
            if(!store || !store.email) return;
            startEmailVerification(merchant, store.email);
        }

        function confirmMerchantEmailCode() {
            let merchant = localStorage.getItem('currentActiveMerchant');
            let code = document.getElementById('merchantEmailCodeInput').value.trim();
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            let store = stores[merchant];
            if(!store) return;
            if(!code) { alert(t('alert_enter_code', 'اكتب الكود اللي وصلك!')); return; }
            if(code === store.emailVerificationCode) {
                store.emailVerified = true;
                store.emailVerificationCode = '';
                if(!saveAllStores(stores)) return;
                showToast('✅ ' + t('email_verify_success', 'تم توثيق بريدك بنجاح!'));
                renderEmailSecurityBox(store);
                renderActivateAccountBanner();
            } else {
                alert(t('alert_wrong_code', 'الكود غير صحيح، حاول تاني أو اطلب إعادة إرسال.'));
            }
        }

        function changeMerchantEmail() {
            let merchant = localStorage.getItem('currentActiveMerchant');
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            let store = stores[merchant];
            if(!store) return;
            store.email = '';
            store.emailVerified = false;
            store.emailVerificationCode = '';
            if(!saveAllStores(stores)) return;
            renderEmailSecurityBox(store);
        }

        // --- صندوق رسائل الأدمن للتاجر (يظهر بس لو فيه رسائل) ---
        function renderAdminMessagesInbox(store) {
            let box = document.getElementById('adminMessagesInbox');
            if(!box) return;
            let msgs = store.adminMessages || [];
            if(msgs.length === 0) { box.innerHTML = ''; return; }
            let unread = msgs.filter(m => !m.read).length;
            box.innerHTML = `
                <div style="background:#eff6ff; border:1px solid #bfdbfe; border-radius:12px; padding:12px;">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                        <strong style="color:#1e40af;">📬 رسائل المنصة ${unread > 0 ? `<span style="background:#ef4444;color:#fff;border-radius:50%;padding:1px 7px;font-size:11px;margin-right:4px;">${unread}</span>` : ''}</strong>
                        ${unread > 0 ? `<button class="secondary" style="width:auto;padding:4px 10px;font-size:11px;" onclick="markAllAdminMsgsRead()">تحديد الكل كمقروء</button>` : ''}
                    </div>
                    ${msgs.slice(0,5).map((m,i) => `
                        <div style="background:#fff;border:1px solid ${m.read ? 'var(--border-color)' : '#93c5fd'};border-radius:8px;padding:10px;margin-bottom:6px;${m.read ? 'opacity:0.7;' : ''}">
                            <div style="font-size:12px; color:var(--text-muted); margin-bottom:4px;">${m.date}</div>
                            <div style="font-size:13px; line-height:1.6;">${m.text}</div>
                        </div>
                    `).join('')}
                </div>
            `;
            // تعليم الرسائل كمقروءة بعد الظهور
            setTimeout(() => markAllAdminMsgsRead(), 3000);
        }

        function markAllAdminMsgsRead() {
            let merchant = localStorage.getItem('currentActiveMerchant');
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            if(!stores[merchant]) return;
            (stores[merchant].adminMessages || []).forEach(m => m.read = true);
            saveAllStores(stores);
            let box = document.getElementById('adminMessagesInbox');
            if(box) {
                let badge = box.querySelector('span[style*="#ef4444"]');
                if(badge) badge.remove();
                let readBtn = box.querySelector('button');
                if(readBtn) readBtn.remove();
            }
        }

        // --- استخدام اسم القسم المخصص (منتج / دورة / خدمة...) في واجهة لوحة التاجر ---
        // ملحوظة: بنفرّق هنا بين الاسم الافتراضي (بيتبع لغة الواجهة الحالية زي أي نص تاني)
        // والاسم المخصص اللي التاجر كتبه بنفسه (بيفضل زي ما هو، مهما كانت لغة الواجهة).
        // 🌍 اسم قسم المنتجات الافتراضي ("منتج") بيتخزن مرة واحدة وقت إنشاء المتجر أو أول
        // مرة يتفتح فيها فورم الإعدادات، بغض النظر عن لغة الواجهة وقتها — فلو اتخزن بالعربي
        // وبعدين التاجر بدّل لغة الواجهة للإنجليزي مثلاً، أي مقارنة نص-بنص بسيطة هتفشل تعرف
        // إنه لسه القيمة الافتراضية (مش قيمة مخصّصة كتبها التاجر بنفسه)، فبنشوف بدل كده لو القيمة
        // دي متطابقة مع كلمة "منتج/Product/..." في أي لغة من اللغات العشرة كلها.
        function isDefaultProductsLabel(label) {
            if(!label) return true;
            ensureAllLanguagesLoaded();
            let allDefaultWords = Object.values(TRANSLATIONS).map(d => d.default_product_word).filter(Boolean);
            return allDefaultWords.includes(label);
        }

        function applyProductsLabelToDashboard(label) {
            let isCustom = !isDefaultProductsLabel(label);
            let header = document.getElementById('prodFormHeader');
            if(header && document.getElementById('editProductIndex').value === "-1") {
                header.innerText = isCustom ? t('tpl_add_new', '📦 إضافة {label} جديد').replace('{label}', label) : t('prod_add_new_h', '📦 إضافة منتج جديد');
            }
            let listHeader = document.querySelector('#dashboardSection h4[data-i18n="prod_current_h"]');
            if(listHeader) listHeader.innerText = isCustom ? t('tpl_current', '{label} الحالية').replace('{label}', label) : t('prod_current_h', 'المنتجات الحالية');
            let nameInput = document.getElementById('prodName');
            if(nameInput) nameInput.placeholder = isCustom ? t('tpl_name_ph', 'اسم {label}').replace('{label}', label) : t('prod_name_ph', 'اسم المنتج');
        }

        // --- التحقق التقريبي من مساحة التخزين المستخدمة في المتجر ---
        // 📊 حساب "مساحة التخزين المستخدمة" لمتجر معين: بيفضّل الرقم الحقيقي القادم
        // من Firebase (اللي بيتحدث تلقائيًا في الخلفية بعد كل رفع سحابي وبيعتبر
        // القياس الدقيق الحقيقي)، ولو لسه مافيش رقم سحابي (أول مرة، أو مفيش نت،
        // أو Firebase مش متصل أصلاً) بيرجع لتقدير تقريبي من حجم البيانات محليًا.
        function getStoreStorageUsageMB(store) {
            if(store && typeof store.__cloudUsageBytes === 'number' && store.__cloudUsageBytes > 0) {
                return { mb: (store.__cloudUsageBytes / (1024*1024)), isReal: true };
            }
            return { mb: (JSON.stringify(store || {}).length / (1024*1024)), isReal: false };
        }

        function renderStorageQuotaBox(store) {
            let box = document.getElementById('storageQuotaBox');
            if(!box) return;
            let usage = getStoreStorageUsageMB(store);
            let usedMB = usage.mb.toFixed(2);
            let quota = store.storageQuotaMB || 20;
            let pct = Math.min(100, (usage.mb / quota) * 100);
            let sourceNote = usage.isReal
                ? t('storage_note_real', 'ده الاستخدام الفعلي الحقيقي على قاعدة بيانات Firebase السحابية (يشمل بيانات المتجر + الصور).')
                : t('storage_note', 'هذه مساحة تقريبية داخل المتصفح؛ لسه مافيش رقم سحابي حقيقي لهذا المتجر (يظهر تلقائيًا بعد أول مزامنة مع الإنترنت).');
            box.innerHTML = `
                <strong>${t('storage_used_label', 'مساحة التخزين المستخدمة تقريباً')}:</strong> ${usedMB} MB ${t('of_label', 'من')} ${quota} MB
                <div class="quota-bar-bg"><div class="quota-bar-fill" style="width:${pct}%; background:${pct > 90 ? '#ef4444' : 'var(--primary-color)'};"></div></div>
                <p style="font-size:11px; color:var(--text-muted);">${sourceNote}</p>
            `;
        }

        // --- عرض حالة الاشتراك (تجريبي / تجديد) للتاجر ---
        function renderSubscriptionPlansList() {
            let container = document.getElementById('subscriptionPlansList');
            if(!container) return;
            let plans = getSubscriptionPlans();
            container.innerHTML = plans.map((p, i) => `
                <div style="background:#fff; border:1px solid var(--border-color); border-radius:10px; padding:10px; margin-bottom:10px;">
                    <div style="display:flex; gap:6px; margin-bottom:6px;">
                        <input type="text" value="${p.name}" placeholder="اسم الباقة" style="margin:0; flex:1;" onchange="updateSubscriptionPlanField(${i}, 'name', this.value)">
                        <button class="danger edit" style="width:auto; padding:8px 10px; margin:0;" onclick="deleteSubscriptionPlan(${i})"><i class="fa fa-trash"></i></button>
                    </div>
                    <div style="display:grid; grid-template-columns:1fr 1fr; gap:6px; font-size:11px;">
                        <label style="margin:0;">السعر<input type="text" value="${p.price}" style="margin:2px 0 0;" onchange="updateSubscriptionPlanField(${i}, 'price', this.value)"></label>
                        <label style="margin:0;">حد المنتجات (-1 = بلا حدود)<input type="number" value="${p.productLimit}" style="margin:2px 0 0;" onchange="updateSubscriptionPlanField(${i}, 'productLimit', parseInt(this.value))"></label>
                        <label style="margin:0;">مساحة التخزين (MB)<input type="number" value="${p.storageMB}" style="margin:2px 0 0;" onchange="updateSubscriptionPlanField(${i}, 'storageMB', parseInt(this.value))"></label>
                        <label style="margin:0;">حد المساعدين (-1 = بلا حدود)<input type="number" value="${p.staffLimit}" style="margin:2px 0 0;" onchange="updateSubscriptionPlanField(${i}, 'staffLimit', parseInt(this.value))"></label>
                    </div>
                    <div style="display:flex; gap:14px; margin-top:8px; font-size:11.5px;">
                        <label style="margin:0; display:flex; align-items:center; gap:4px;"><input type="checkbox" style="width:auto; margin:0;" ${p.allowColors ? 'checked' : ''} onchange="updateSubscriptionPlanField(${i}, 'allowColors', this.checked)"> 🎨 ألوان مخصصة</label>
                        <label style="margin:0; display:flex; align-items:center; gap:4px;"><input type="checkbox" style="width:auto; margin:0;" ${p.allowBanners ? 'checked' : ''} onchange="updateSubscriptionPlanField(${i}, 'allowBanners', this.checked)"> 🖼️ لافتات إعلانية</label>
                    </div>
                </div>
            `).join('');
        }

        function updateSubscriptionPlanField(index, field, value) {
            let plans = getSubscriptionPlans();
            if(!plans[index]) return;
            plans[index][field] = value;
            saveSubscriptionPlans(plans);
            showToast('✅ تم تحديث الباقة');
        }

        function addNewSubscriptionPlan() {
            let plans = getSubscriptionPlans();
            let newId = 'plan_' + Date.now();
            plans.push({ id: newId, name: 'باقة جديدة', price: 0, productLimit: 20, storageMB: 20, staffLimit: 1, allowColors: false, allowBanners: false });
            saveSubscriptionPlans(plans);
            renderSubscriptionPlansList();
        }

        function deleteSubscriptionPlan(index) {
            let plans = getSubscriptionPlans();
            let plan = plans[index];
            if(!plan) return;
            if(plan.id === 'free') { alert('⚠️ مينفعش تمسح الباقة المجانية لأنها الافتراضية لأي متجر جديد أو متجر قديم من غير باقة.'); return; }
            if(!confirm(`تأكيد حذف باقة "${plan.name}"؟ أي متجر عليها هيترحّل تلقائيًا للباقة المجانية.`)) return;
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            Object.keys(stores).forEach(k => { if(stores[k].planId === plan.id) stores[k].planId = 'free'; });
            saveAllStores(stores);
            plans.splice(index, 1);
            saveSubscriptionPlans(plans);
            renderSubscriptionPlansList();
            showToast('🗑️ تم حذف الباقة');
        }

        function renderSubscriptionStatusBox(store) {
            let box = document.getElementById('subscriptionStatusBox');
            if(!box) return;
            let sub = computeSubscriptionStatus(store);
            let price = localStorage.getItem('subscriptionPrice') || '';
            let template = localStorage.getItem('subscriptionReminderTemplate') || '';
            let pm = JSON.parse(localStorage.getItem('subscriptionPayMethods') || '{}');

            // 🏷️ باقة المتجر الحالية واستخدامه الفعلي مقابل حدودها - عشان التاجر
            // يعرف بالظبط فين واقف ولو قرّب يوصل لحد باقته
            let plan = getPlanForStore(store);
            let productsCount = (store.products || []).length;
            let staffCount = (store.staff || []).length;
            let unlimitedLabel = t('unlimited_label', 'بلا حدود');
            let planUsageHtml = `
                <div style="margin-top:10px; background:#f5f3ff; border:1px solid #ddd6fe; border-radius:10px; padding:10px; font-size:12px;">
                    <strong style="color:#6d28d9;">🏷️ ${t('current_plan_label', 'باقتك الحالية')}: ${planDisplayName(plan)}${plan.price ? ' (' + plan.price + ')' : ' (' + t('free_label', 'مجانية') + ')'}</strong>
                    <div style="margin-top:6px; display:flex; flex-direction:column; gap:3px; color:var(--text-muted);">
                        <span>📦 ${t('plan_products_label', 'المنتجات')}: ${productsCount} / ${plan.productLimit === -1 ? unlimitedLabel : plan.productLimit}</span>
                        <span>👥 ${t('plan_staff_label', 'المساعدين')}: ${staffCount} / ${plan.staffLimit === -1 ? unlimitedLabel : plan.staffLimit}</span>
                        <span>🎨 ${t('plan_colors_label', 'ألوان مخصصة')}: ${plan.allowColors ? t('available_label', 'متاحة ✅') : t('unavailable_label', 'غير متاحة')}</span>
                        <span>🖼️ ${t('plan_banners_label', 'لافتات إعلانية')}: ${plan.allowBanners ? t('available_label', 'متاحة ✅') : t('unavailable_label', 'غير متاحة')}</span>
                    </div>
                </div>
            `;

            // ============================================================
            // 🏷️ "اختار باقتك": التاجر يشوف كل الباقات المتاحة بالمنصة، ويقدر
            // يطلب تفعيل أي باقة تانية غير باقته الحالية بضغطة واحدة، والنظام
            // بيوصله مباشرة بفريق الدعم/الإدارة (واتساب/فيسبوك/تيليجرام) برسالة
            // جاهزة، والأدمن هو اللي يفعّل الباقة يدويًا بعد ما يتأكد من الدفع.
            // ============================================================
            let allPlans = getSubscriptionPlans();
            let planCardsHtml = allPlans.map(p => {
                let isCurrent = p.id === (store.planId || 'free');
                return `
                    <div style="background:#fff; border:2px solid ${isCurrent ? '#6d28d9' : 'var(--border-color)'}; border-radius:10px; padding:10px; margin-bottom:8px;">
                        <div style="display:flex; justify-content:space-between; align-items:center;">
                            <strong style="font-size:13px;">${planDisplayName(p)}</strong>
                            <span style="font-size:12px; color:var(--primary-color); font-weight:bold;">${p.price ? p.price : t('free_label', 'مجانية')}</span>
                        </div>
                        <div style="font-size:10.5px; color:var(--text-muted); margin-top:4px;">
                            ${[
                                (p.productLimit !== undefined && p.productLimit !== null && p.productLimit !== '') ? `📦 ${p.productLimit === -1 ? unlimitedLabel : p.productLimit}` : '',
                                (p.staffLimit !== undefined && p.staffLimit !== null && p.staffLimit !== '') ? `👥 ${p.staffLimit === -1 ? unlimitedLabel : p.staffLimit}` : '',
                                (p.allowColors !== undefined && p.allowColors !== null) ? `🎨 ${p.allowColors ? '✅' : '✖️'}` : '',
                                (p.allowBanners !== undefined && p.allowBanners !== null) ? `🖼️ ${p.allowBanners ? '✅' : '✖️'}` : ''
                            ].filter(Boolean).join(' · ')}
                        </div>
                        ${isCurrent
                            ? `<div style="margin-top:6px; font-size:11px; color:#6d28d9; font-weight:bold;">✔️ ${t('your_current_plan', 'باقتك الحالية')}</div>`
                            : `<button class="secondary" style="width:100%; margin:6px 0 0; font-size:11.5px; padding:6px;" onclick="requestPlanActivation('${p.id}')"><i class="fa fa-arrow-up"></i> ${t('request_this_plan', 'اطلب هذه الباقة')}</button>
                               <div id="planActivationContactBox_${p.id}" class="hidden"></div>`
                        }
                    </div>
                `;
            }).join('');
            let planChooserHtml = `
                <details style="margin-top:12px;" id="planChooserDetails">
                    <summary style="cursor:pointer; list-style:none; display:block;">
                        <div style="background: linear-gradient(135deg, #f59e0b, #ea580c); border-radius:14px; padding:14px 16px; display:flex; align-items:center; gap:12px; box-shadow:0 4px 14px rgba(234,88,12,0.35); animation: pulseGlow 2.2s ease-in-out infinite;">
                            <span style="font-size:26px;">🚀</span>
                            <div style="flex:1;">
                                <div style="color:#fff; font-weight:bold; font-size:14.5px;">${t('choose_your_plan', 'اختار باقتك')}</div>
                                <div style="color:#fff; opacity:0.9; font-size:11px; margin-top:2px;">${t('plan_cta_subtitle', 'قارن الباقات وارقّي متجرك لإمكانيات أكتر ✨')}</div>
                            </div>
                            <i class="fa fa-chevron-down" style="color:#fff; font-size:14px;"></i>
                        </div>
                    </summary>
                    <div style="margin-top:8px;">${planCardsHtml}</div>
                </details>
            `;

            let urgentColor = sub.expired ? '#dc2626' : sub.daysLeft <= 3 ? '#ef4444' : sub.daysLeft <= 7 ? '#f59e0b' : 'var(--primary-color)';

            let statusLine;
            if(sub.expired) {
                statusLine = `⛔ ${t('sub_expired_since', 'اشتراكك منتهي منذ')} <strong style="color:${urgentColor}">${Math.abs(sub.daysLeft)}</strong> ${t('unit_day', 'يوم')}. ${t('sub_renew_prompt', 'برجاء التجديد لضمان استمرار ظهور متجرك.')}${price ? ' <strong>' + t('sub_price_label', 'سعر الاشتراك') + ': ' + price + '</strong>' : ''}`;
            } else if(sub.phase === 'trial') {
                statusLine = `🎁 ${t('sub_trial_active', 'أنت في الفترة التجريبية المجانية')} — ${t('sub_days_left', 'باقي')} <strong>${sub.daysLeft}</strong> ${t('unit_day', 'يوم')}.`;
            } else {
                statusLine = `💳 ${t('sub_days_left', 'باقي')} <strong style="color:${urgentColor}">${sub.daysLeft}</strong> ${t('sub_days_until_renewal', 'يوم على تجديد اشتراكك')}.${price ? ' <strong>' + t('sub_price_label', 'سعر الاشتراك') + ': ' + price + '</strong>' : ''}`;
            }

            let customMsg = template ? '<p style="font-size:12px;margin:6px 0 0;color:var(--text-muted);">' + template.replace(/\{days\}/g,sub.daysLeft).replace(/\{price\}/g,price) + '</p>' : '';

            // بطاقات طرق الدفع
            let methodIcons = {instapay:'📲',vodafone:'📱',orange:'🟠',etisalat:'🟢',paypal:'💳',bank:'🏦'};
            let methodLabels = {instapay:t('pm_instapay','انستاباي'),vodafone:t('pm_vodafone','فودافون كاش'),orange:t('pm_orange','أورنج كاش'),etisalat:t('pm_etisalat','اتصالات كاش'),paypal:'PayPal',bank:t('pm_bank','تحويل بنكي')};
            let payCards = Object.entries(pm).filter(([k,v])=>v).map(([k,v])=>`
                <div style="background:#fff;border:1px solid var(--border-color);border-radius:8px;padding:8px 12px;display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
                    <span style="font-size:13px;">${methodIcons[k]} ${methodLabels[k]}</span>
                    <strong style="font-size:14px;color:var(--primary-color);">${v}</strong>
                </div>
            `).join('');

            // 📤 لو التاجر عنده طلب تجديد "قيد المراجعة" لسه ماتراجعش من الأدمن، بنوريه كده بدل الفورم
            let pendingReq = store.pendingRenewalRequest;
            let renewalActionHtml;
            if(pendingReq) {
                renewalActionHtml = `
                    <div style="margin-top:10px; background:#eff6ff; border:1px solid #bfdbfe; border-radius:10px; padding:10px; font-size:12.5px; color:#1e40af;">
                        <i class="fa fa-clock"></i> ${t('renewal_pending_note', 'بلّغت إنك حوّلت عن طريق')} <strong>${methodLabels[pendingReq.method] || pendingReq.method}</strong> (${pendingReq.senderInfo}) ${t('on_date', 'بتاريخ')} ${new Date(pendingReq.requestedAt).toLocaleDateString('ar-EG')}. ${t('renewal_pending_note2', 'طلبك قيد المراجعة من إدارة المنصة وهيتجدد اشتراكك بمجرد التأكيد.')}
                    </div>
                `;
            } else if(payCards) {
                renewalActionHtml = `
                    <div style="margin-top:10px;">
                        <button class="secondary" style="width:100%; margin:0;" onclick="document.getElementById('renewalReportBox').classList.toggle('hidden')"><i class="fa fa-paper-plane"></i> ${t('report_transfer_btn', 'بلّغ إنك حوّلت الاشتراك')}</button>
                        <div id="renewalReportBox" class="hidden" style="margin-top:8px; background:#fff; border:1px solid var(--border-color); border-radius:10px; padding:10px;">
                            <p style="font-size:11px; color:var(--text-muted); margin:0 0 6px;">${t('report_transfer_desc', 'اختار الطريقة اللي حوّلت بيها واكتب رقم المحفظة/الحساب اللي حوّلت منه أو رقم العملية، وهيتراجع طلبك ويتجدد اشتراكك بأسرع وقت.')}</p>
                            <select id="renewalReportMethod">
                                ${Object.entries(pm).filter(([k,v])=>v).map(([k,v]) => `<option value="${k}">${methodIcons[k]} ${methodLabels[k]}</option>`).join('')}
                            </select>
                            <input type="text" id="renewalReportSender" placeholder="${t('transfer_sender_ph', 'رقم المحفظة/الحساب اللي حوّلت منه أو رقم العملية')}">
                            <button style="width:100%; margin:4px 0 0;" onclick="submitRenewalReport()"><i class="fa fa-check"></i> ${t('submit_report_btn', 'إرسال البلاغ')}</button>
                        </div>
                    </div>
                `;
            } else {
                renewalActionHtml = '';
            }

            box.innerHTML = `
                <div>${statusLine}</div>
                ${customMsg}
                ${planUsageHtml}
                ${planChooserHtml}
                ${payCards ? `<div style="margin-top:10px;"><p style="font-size:12px;color:var(--text-muted);margin:0 0 6px;">🔄 ${t('renewal_payment_methods', 'طرق الدفع المتاحة للتجديد')}:</p>${payCards}</div>` : ''}
                ${renewalActionHtml}
            `;
        }

        // --- التاجر بيبلّغ إنه حوّل المبلغ (بدل ما تقعد أنت تتابعه)، والطلب يوصلك في لوحة الإدارة
        // عشان تراجعه وتأكده بضغطة واحدة (تجديد فعلي فوري) بمجرد ما تتأكد من وصول التحويل ---
        function submitRenewalReport() {
            let merchant = localStorage.getItem('currentActiveMerchant');
            let method = document.getElementById('renewalReportMethod').value;
            let senderInfo = document.getElementById('renewalReportSender').value.trim();
            if(!senderInfo) { alert('اكتب رقم المحفظة أو الحساب اللي حوّلت منه، أو رقم العملية.'); return; }

            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            let store = stores[merchant];
            if(!store) return;
            store.pendingRenewalRequest = { method, senderInfo, requestedAt: Date.now() };
            if(!saveAllStores(stores)) return;
            renderSubscriptionStatusBox(store);
            showToast('✅ تم إرسال البلاغ، هيتراجع ويتجدد اشتراكك بأسرع وقت.');
        }

        // --- تسجيل زيارة للمتجر مرة واحدة يومياً لكل جلسة متصفح (لتجنب تضخيم العداد عند كل تحديث للصفحة) ---
        function trackStoreVisit(storeName, store, stores) {
            let today = new Date().toISOString().split('T')[0];
            let sessionKey = `visited_${storeName}_${today}`;
            if(sessionStorage.getItem(sessionKey)) return;
            sessionStorage.setItem(sessionKey, '1');

            if(!store.visitLog) store.visitLog = [];
            let todayEntry = store.visitLog.find(v => v.date === today);
            if(todayEntry) todayEntry.count++;
            else store.visitLog.push({ date: today, count: 1 });

            if(store.visitLog.length > 14) store.visitLog = store.visitLog.slice(-14);
            store.visitCount = (store.visitCount || 0) + 1;

            stores[storeName] = store;
            if(!saveAllStores(stores)) return;
        }

        // --- رسم مؤشر أداء بسيط (زوار آخر 7 أيام) مع سهم اتجاه يشجع التاجر على النشر ---
        function renderVisitorChart(store) {
            let container = document.getElementById('visitorChartBox');
            if(!container) return;
            let log = (store.visitLog || []).slice(-7);
            if(log.length === 0) {
                container.innerHTML = `<p style="font-size:12px; color:var(--text-muted); margin:0;">لا توجد بيانات زيارات كافية بعد. شارك رابط متجرك ليبدأ العداد!</p>`;
                return;
            }
            let max = Math.max(...log.map(d => d.count), 1);
            let bars = log.map(d => `
                <div style="display:flex; flex-direction:column; align-items:center; gap:4px; flex:1;">
                    <div style="width:100%; height:${Math.max(6, (d.count / max) * 60)}px; background:var(--primary-color); border-radius:4px 4px 0 0;"></div>
                    <span style="font-size:9px; color:var(--text-muted);">${d.date.slice(5)}</span>
                </div>
            `).join('');

            let last = log[log.length - 1].count;
            let prevAvg = log.length > 1 ? (log.slice(0, -1).reduce((s, d) => s + d.count, 0) / (log.length - 1)) : last;
            let trendUp = last >= prevAvg;

            container.innerHTML = `
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                    <strong style="font-size:12px;">📈 ${t('visitors_last_7_days', 'زوار آخر 7 أيام')}</strong>
                    <span style="font-size:16px; color:${trendUp ? '#10b981' : '#ef4444'};">${trendUp ? '▲' : '▼'} ${t('total_visits', 'إجمالي الزيارات')}: ${store.visitCount || 0}</span>
                </div>
                <div style="display:flex; align-items:flex-end; gap:6px; height:70px;">${bars}</div>
                <p style="font-size:11px; color:var(--text-muted); margin-top:8px;">${trendUp ? t('performance_improving', 'أداء متجرك في تحسّن! شارك رابطك أكتر لجذب زوار جدد 📈') : t('performance_lower', 'زوارك أقل من المعتاد، جرب نشر رابط متجرك على السوشيال ميديا 📢')}</p>
            `;
        }

        // --- تنظيف تلقائي لسجل الطلبات: يشيل الطلبات القديمة عن المدة اللي حددها التاجر، ---
        // --- وأي طلب "تم تسليمه" بيتشال تلقائيًا بعد ساعة واحدة من تسليمه بغض النظر عن المدة العامة ---
        // 🕐 مدة الحذف التلقائي بقت مرنة (دقايق/ساعات/أيام) بدل يوم ثابت، ومتخزنة دايمًا
        // بالدقايق جوه store.autoDeleteOrdersMinutes عشان تبقى وحدة قياس واحدة موحّدة.
        // لسه بندعم store.autoDeleteOrdersDays القديمة (لو موجودة عند متاجر اتسجلت قبل التحديث ده).
        function getAutoDeleteMinutes(store) {
            if(store.autoDeleteOrdersMinutes !== undefined && store.autoDeleteOrdersMinutes !== null) {
                return store.autoDeleteOrdersMinutes;
            }
            if(store.autoDeleteOrdersDays !== undefined) return store.autoDeleteOrdersDays * 1440;
            return 5 * 1440; // الافتراضي: 5 أيام
        }

        // بيرجع {value, unit} أنسب تمثيل لعرض المدة (بيفضل الوحدة الأكبر اللي بتقسم بالظبط)
        function minutesToDisplayUnit(minutes) {
            if(minutes % 1440 === 0 && minutes >= 1440) return { value: minutes / 1440, unit: 'days' };
            if(minutes % 60 === 0 && minutes >= 60) return { value: minutes / 60, unit: 'hours' };
            return { value: minutes, unit: 'minutes' };
        }

        function unitToMinutes(value, unit) {
            if(unit === 'days') return value * 1440;
            if(unit === 'hours') return value * 60;
            return value; // minutes
        }

        function cleanupOldOrders(store) {
            if(!store.orderHistory || store.orderHistory.length === 0) return false;
            let autoDeleteMs = getAutoDeleteMinutes(store) * 60000;
            let now = Date.now();

            // طلبات قديمة اتسجلت قبل ما نضيف الميزة دي، مفيش عندها توقيت خام محفوظ - نبدأ نحسبلها من دلوقتي بدل ما نمسحها فجأة
            store.orderHistory.forEach(o => { if(!o.timestamp) o.timestamp = now; });

            let before = store.orderHistory.length;
            store.orderHistory = store.orderHistory.filter(o => {
                if((now - o.timestamp) > autoDeleteMs) return false;
                if(o.status === 'completed' && o.completedAt && (now - o.completedAt) > 3600000) return false;
                return true;
            });
            return store.orderHistory.length !== before;
        }

        function saveAutoDeleteOrdersTime() {
            let merchant = localStorage.getItem('currentActiveMerchant');
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            let store = stores[merchant];
            if(!store) return;
            let valueInput = document.getElementById('autoDeleteOrdersValueInput');
            let unitInput = document.getElementById('autoDeleteOrdersUnitInput');
            let rawValue = parseInt(valueInput ? valueInput.value : 0) || 1;
            let unit = unitInput ? unitInput.value : 'days';
            let minutes = unitToMinutes(rawValue, unit);
            store.autoDeleteOrdersMinutes = minutes;
            delete store.autoDeleteOrdersDays; // استبدال القديمة بالوحدة الموحدة الجديدة
            if(!saveAllStores(stores)) return;
            let unitLabel = unit === 'days' ? 'يوم' : (unit === 'hours' ? 'ساعة' : 'دقيقة');
            showToast(`🧹 هيتم مسح الطلبات تلقائيًا بعد ${rawValue} ${unitLabel} من الآن فصاعدًا`);
        }

        function runOrdersCleanupNow() {
            let merchant = localStorage.getItem('currentActiveMerchant');
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            let store = stores[merchant];
            if(!store) return;
            let changed = cleanupOldOrders(store);
            if(changed && !saveAllStores(stores)) return;
            renderOrderHistory(store);
            showToast(changed ? '🧹 تم تنظيف الطلبات القديمة!' : 'مفيش طلبات قديمة محتاجة تنظيف دلوقتي.');
        }

        // --- عرض سجل الطلبات السابقة للتاجر مع إمكانية تغيير حالة كل طلب ---
        function renderOrderHistory(store) {
            let container = document.getElementById('merchantOrderHistoryList');
            if(!container) return;
            let valueInput = document.getElementById('autoDeleteOrdersValueInput');
            let unitInput = document.getElementById('autoDeleteOrdersUnitInput');
            if(valueInput && unitInput) {
                let disp = minutesToDisplayUnit(getAutoDeleteMinutes(store));
                valueInput.value = disp.value;
                unitInput.value = disp.unit;
            }
            let orders = store.orderHistory || [];

            let banner = `
                <div style="background:#fff7ea; border:1px solid #f0d9a8; border-radius:8px; padding:10px; margin-bottom:10px; font-size:11.5px; color:#7a5b16;">
                    ⚠️ ${t('orders_important_note')}
                </div>
            `;

            if(orders.length === 0) {
                container.innerHTML = banner + `<p style="font-size:12px; color:var(--text-muted);">${t('orders_none_yet')}</p>`;
                return;
            }

            const statusLabels = { pending: '🟡 ' + t('ordstat_pending', 'جديد - يحتاج متابعة'), confirmed: '🟢 ' + t('ordstat_confirmed', 'تم التأكيد'), completed: '✅ ' + t('ordstat_completed', 'تم التسليم'), cancelled: '🔴 ' + t('ordstat_cancelled', 'ملغي') };
            const methodLabels = { whatsapp: '📱 ' + t('ordmethod_whatsapp', 'واتساب'), 'whatsapp-image': '📱 ' + t('ordmethod_whatsapp', 'واتساب'), messenger: '📩 ' + t('ordmethod_messenger', 'ماسنجر'), telegram: '✈️ ' + t('ordmethod_telegram', 'تيليجرام'), direct: '📮 ' + t('ordmethod_direct', 'إرسال مباشر') };
            const orderCardStrings = {
                orderHash: t('ord_hash', 'طلب'), delivery: '🚚 ' + t('ord_delivery', 'توصيل'), pickup: '🏪 ' + t('ord_pickup', 'استلام من المتجر'),
                cod: t('ord_cod', 'دفع عند الاستلام'), cashTransfer: t('ord_cash_transfer', 'تحويل كاش'), onNumber: t('ord_on_number', 'على رقم'),
                buyerTransferredFrom: t('ord_buyer_transferred_from', 'حوّل المشتري من'), newOpt: t('ord_opt_new', 'جديد'), confirmOpt: t('ord_opt_confirm', 'تأكيد'),
                deliveredOpt: t('ord_opt_delivered', 'تم التسليم'), cancelOpt: t('ord_opt_cancel', 'إلغاء'), downloadInvoice: t('ord_download_invoice', 'تحميل فاتورة الطلب'),
                deleteOrder: t('ord_delete', 'حذف الطلب'), adjustAmount: t('ord_adjust_amount', 'تعديل المبلغ (إرجاع جزئي)'),
                viewDetails: t('ord_view_details', 'تفاصيل الطلب'), whatsappContact: t('ord_whatsapp_contact', 'تواصل واتساب')
            };

            container.innerHTML = banner + orders.map((o, idx) => {
                let itemsTxt = o.items.map(i => `${i.name}${i.qty > 1 ? ' ×' + i.qty : ''}`).join('، ');
                let status = o.status || 'pending';
                let hasAdjustment = typeof o.countedAmount === 'number' && o.countedAmount !== o.total;
                let displayedAmount = hasAdjustment ? o.countedAmount : o.total;
                let amountHtml = hasAdjustment
                    ? `<span style="text-decoration:line-through; color:var(--text-muted); font-size:11px;">${o.total} ${store.currency}</span> <strong style="color:var(--primary-color);">${displayedAmount} ${store.currency}</strong>`
                    : `<strong style="color:var(--primary-color);">${o.total} ${store.currency}</strong>`;
                // 📱 زرار تواصل واتساب بنقرة واحدة برقم المشتري (لو متوفر) - بيفتح واتساب برسالة
                // جاهزة فيها رقم الطلب، من غير ما التاجر يحتاج ينسخ الرقم يدويًا.
                let whatsappBtnHtml = o.buyerPhone
                    ? `<button class="secondary" style="width:auto; margin:0; padding:4px 10px; font-size:11px; background:#25d366; color:#fff; border-color:#25d366;" onclick="event.stopPropagation(); contactBuyerWhatsapp('${String(o.buyerPhone).replace(/[^\d+]/g,'')}', '${(o.orderNo||'').toString().replace(/'/g,'')}')"><i class="fab fa-whatsapp"></i> ${orderCardStrings.whatsappContact}</button>`
                    : '';
                return `
                    <div style="background:var(--bg-body); border:1px solid var(--border-color); border-radius:8px; padding:10px; margin-bottom:8px; font-size:12px;">
                        <div style="display:flex; justify-content:space-between; cursor:pointer;" onclick="openOrderDetailsModal(${idx})" title="${orderCardStrings.viewDetails}">
                            <strong>${o.date}${o.orderNo ? ' — ' + orderCardStrings.orderHash + ' #' + o.orderNo : ''}</strong>
                            <span>${methodLabels[o.method] || o.method}</span>
                        </div>
                        <div style="margin:4px 0; color:var(--text-muted);">${itemsTxt}</div>
                        <div style="display:flex; justify-content:space-between; align-items:center;">
                            <span>${o.deliveryMode === 'delivery' ? orderCardStrings.delivery : orderCardStrings.pickup} — ${o.payment === 'COD' ? orderCardStrings.cod : `${orderCardStrings.cashTransfer}${o.paymentWalletNumber ? ` (${orderCardStrings.onNumber}: ${o.paymentWalletNumber})` : ''}`}</span>
                            ${o.cashSenderInfo ? `<br><span style="font-size:11px; color:#92400e;"><i class="fa fa-mobile-alt"></i> ${orderCardStrings.buyerTransferredFrom}: ${o.cashSenderInfo}</span>` : ''}
                            ${amountHtml}
                        </div>
                        ${hasAdjustment ? `<div style="margin-top:2px; font-size:10.5px; color:#b45309;"><i class="fa fa-rotate-left" style="cursor:pointer;" onclick="adjustOrderAmount(${idx}, null)"></i> المبلغ اتعدّل يدويًا (يمكن بسبب إرجاع جزئي) - اضغط لاسترجاع المبلغ الأصلي</div>` : ''}
                        ${o.address ? `<div style="margin-top:4px;"><i class="fa fa-location-dot" style="color:var(--primary-color);"></i> ${o.address}</div>` : ''}
                        ${o.buyerPhone ? `<div style="margin-top:4px;">📞 ${o.buyerPhone}</div>` : ''}
                        <div style="margin-top:6px; display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
                            <span>${statusLabels[status]}</span>
                            <select class="order-status-action-btn" style="margin:0; padding:4px; font-size:11px; width:auto;" onchange="updateOrderStatus(${idx}, this.value)">
                                <option value="pending" ${status==='pending'?'selected':''}>${orderCardStrings.newOpt}</option>
                                <option value="confirmed" ${status==='confirmed'?'selected':''}>${orderCardStrings.confirmOpt}</option>
                                <option value="completed" ${status==='completed'?'selected':''}>${orderCardStrings.deliveredOpt}</option>
                                <option value="cancelled" ${status==='cancelled'?'selected':''}>${orderCardStrings.cancelOpt}</option>
                            </select>
                            ${whatsappBtnHtml}
                            <button class="secondary" style="width:auto; margin:0; padding:4px 10px; font-size:11px;" onclick="openOrderDetailsModal(${idx})"><i class="fa fa-circle-info"></i> ${orderCardStrings.viewDetails}</button>
                            <button class="secondary" style="width:auto; margin:0; padding:4px 10px; font-size:11px;" onclick="downloadOrderInvoice(${idx})"><i class="fa fa-image"></i> ${orderCardStrings.downloadInvoice}</button>
                            ${status === 'completed' ? `<button class="secondary" style="width:auto; margin:0; padding:4px 10px; font-size:11px;" onclick="adjustOrderAmount(${idx})"><i class="fa fa-pen"></i> ${orderCardStrings.adjustAmount}</button>` : ''}
                            <button class="danger secondary order-delete-action-btn" style="width:auto; margin:0; padding:4px 10px; font-size:11px;" onclick="deleteOrder(${idx})"><i class="fa fa-trash"></i> ${orderCardStrings.deleteOrder}</button>
                        </div>
                    </div>
                `;
            }).join('');

            // ✅ إعادة تطبيق قيود صلاحيات المساعد فورًا بعد أي إعادة رسم لسجل الطلبات (مش بس أول
            // مرة)، عشان لو مساعد عدّل حالة طلب وده استدعى renderOrderHistory تاني، زرار الحذف
            // (لو مالوش صلاحية عليه) يفضل مخفي عنه ومش يرجع يظهر من غير قصد.
            applyStaffPermissionGating();
        }

        // --- فتح واتساب برسالة جاهزة لرقم المشتري، برقم الطلب مكتوب جواها تلقائيًا ---
        function contactBuyerWhatsapp(phone, orderNo) {
            if(!phone) return;
            let digits = String(phone).replace(/\D/g, '');
            if(!digits) return;
            let msg = t('whatsapp_contact_buyer_msg', 'أهلاً، بخصوص طلبك رقم') + (orderNo ? (' #' + orderNo) : '');
            window.open('https://wa.me/' + digits + '?text=' + encodeURIComponent(msg), '_blank');
        }

        // ============================================================
        // 📋 نافذة تفاصيل الطلب الكاملة: بتفتح بنقرة واحدة على الكارت نفسه أو زرار "تفاصيل
        // الطلب" - كل بيانات الطلب (المنتجات، الكميات، الإجمالي، عنوان التسليم، رقم الهاتف،
        // طريقة الدفع) من غير ما التاجر يحتاج ينزّل صورة الفاتورة أصلاً عشان يشوفها.
        // ============================================================
        function openOrderDetailsModal(index) {
            let merchant = localStorage.getItem('currentActiveMerchant');
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            let store = stores[merchant];
            if(!store || !store.orderHistory || !store.orderHistory[index]) return;
            let o = store.orderHistory[index];

            const methodLabels = { whatsapp: '📱 ' + t('ordmethod_whatsapp', 'واتساب'), 'whatsapp-image': '📱 ' + t('ordmethod_whatsapp', 'واتساب'), messenger: '📩 ' + t('ordmethod_messenger', 'ماسنجر'), telegram: '✈️ ' + t('ordmethod_telegram', 'تيليجرام'), direct: '📮 ' + t('ordmethod_direct', 'إرسال مباشر') };
            const statusLabels = { pending: '🟡 ' + t('ordstat_pending', 'جديد - يحتاج متابعة'), confirmed: '🟢 ' + t('ordstat_confirmed', 'تم التأكيد'), completed: '✅ ' + t('ordstat_completed', 'تم التسليم'), cancelled: '🔴 ' + t('ordstat_cancelled', 'ملغي') };
            let status = o.status || 'pending';
            let hasAdjustment = typeof o.countedAmount === 'number' && o.countedAmount !== o.total;
            let displayedAmount = hasAdjustment ? o.countedAmount : o.total;

            let itemsRows = (o.items || []).map(function(i){
                let lineTotal = (typeof i.price === 'number') ? (i.price * (i.qty || 1)) : null;
                return `<div style="display:flex; justify-content:space-between; padding:6px 0; border-bottom:1px solid var(--border-color); font-size:12.5px;">
                    <span>${escapeHtml(i.name)}${i.qty > 1 ? ' <span style="color:var(--text-muted);">×' + i.qty + '</span>' : ''}</span>
                    ${lineTotal !== null ? `<span style="color:var(--text-muted);">${lineTotal} ${store.currency}</span>` : ''}
                </div>`;
            }).join('');

            // 💰 نفس تفصيل المجموع الفرعي + رسوم التوصيل اللي موجود في صورة الفاتورة
            // بالظبط (مش إجمالي واحد بس)، عشان التاجر يعتمد على النافذة دي من غير ما
            // يحتاج ينزّل صورة الفاتورة أصلاً لمعرفة أي تفصيلة.
            let subtotalRow = (typeof o.subtotal === 'number')
                ? `<div style="display:flex; justify-content:space-between; font-size:12.5px; margin-top:6px;"><span>${t('invoice_subtotal_label','المجموع الفرعي')}</span><span>${o.subtotal} ${store.currency}</span></div>`
                : '';
            let deliveryFeeRow = (typeof o.deliveryFee === 'number')
                ? `<div style="display:flex; justify-content:space-between; font-size:12.5px;"><span>${t('ord_delivery','🚚 توصيل')}${o.deliveryZone ? ' (' + escapeHtml(o.deliveryZone) + ')' : ''}</span><span>${o.deliveryFee} ${store.currency}</span></div>`
                : '';

            let whatsappBtn = o.buyerPhone
                ? `<button style="width:auto; margin:0; padding:8px 16px; background:#25d366; border-color:#25d366;" onclick="contactBuyerWhatsapp('${String(o.buyerPhone).replace(/[^\d+]/g,'')}', '${(o.orderNo||'').toString().replace(/'/g,'')}'); closeAppModal();"><i class="fab fa-whatsapp"></i> ${t('ord_whatsapp_contact', 'تواصل واتساب')}</button>`
                : '';

            let body = `
                <div style="text-align:start; font-size:13px;">
                    <p style="margin:0 0 8px; color:var(--text-muted);">${o.date}${o.orderNo ? ' — <strong>#' + o.orderNo + '</strong>' : ''} · ${methodLabels[o.method] || o.method}</p>
                    <div style="background:var(--bg-body); border-radius:8px; padding:8px 10px; margin-bottom:8px;">${itemsRows}${subtotalRow}${deliveryFeeRow}</div>
                    <p style="margin:4px 0;"><i class="fa ${o.deliveryMode === 'delivery' ? 'fa-truck' : 'fa-store'}"></i> ${o.deliveryMode === 'delivery' ? t('ord_delivery','🚚 توصيل') : t('ord_pickup','🏪 استلام من المتجر')}</p>
                    ${o.address ? `<p style="margin:4px 0;"><i class="fa fa-location-dot" style="color:var(--primary-color);"></i> ${escapeHtml(o.address)}</p>` : ''}
                    ${o.buyerPhone ? `<p style="margin:4px 0;">📞 ${escapeHtml(String(o.buyerPhone))}</p>` : ''}
                    <p style="margin:4px 0;">${o.payment === 'COD' ? t('ord_cod','دفع عند الاستلام') : t('ord_cash_transfer','تحويل كاش') + (o.paymentWalletNumber ? ` (${t('ord_on_number','على رقم')}: ${o.paymentWalletNumber})` : '')}</p>
                    ${o.cashSenderInfo ? `<p style="margin:4px 0; color:#92400e;"><i class="fa fa-mobile-alt"></i> ${t('ord_buyer_transferred_from','حوّل المشتري من')}: ${escapeHtml(o.cashSenderInfo)}</p>` : ''}
                    <hr style="border-color:var(--border-color); margin:10px 0;">
                    <p style="margin:0; font-size:16px; text-align:center;">${hasAdjustment ? `<span style="text-decoration:line-through; color:var(--text-muted); font-size:12px;">${o.total} ${store.currency}</span> ` : ''}<strong style="color:var(--primary-color);">${displayedAmount} ${store.currency}</strong></p>
                    <hr style="border-color:var(--border-color); margin:10px 0;">
                    <!-- 🔄 نفس قائمة تغيير حالة الطلب الموجودة في الكارت - التاجر يقدر يغيّرها من
                         هنا مباشرة من غير ما يقفل النافذة ويرجع لسجل الطلبات -->
                    <div style="display:flex; align-items:center; gap:8px; justify-content:center; flex-wrap:wrap;">
                        <span>${statusLabels[status]}</span>
                        <select style="margin:0; padding:5px; font-size:12px; width:auto;" onchange="updateOrderStatus(${index}, this.value); openOrderDetailsModal(${index});">
                            <option value="pending" ${status==='pending'?'selected':''}>${t('ord_opt_new','جديد')}</option>
                            <option value="confirmed" ${status==='confirmed'?'selected':''}>${t('ord_opt_confirm','تأكيد')}</option>
                            <option value="completed" ${status==='completed'?'selected':''}>${t('ord_opt_delivered','تم التسليم')}</option>
                            <option value="cancelled" ${status==='cancelled'?'selected':''}>${t('ord_opt_cancel','إلغاء')}</option>
                        </select>
                    </div>
                    <div style="display:flex; justify-content:center; margin-top:10px;">
                        <button class="secondary" style="width:auto; margin:0; padding:6px 14px; font-size:11.5px;" onclick="downloadOrderInvoice(${index})"><i class="fa fa-image"></i> ${t('ord_download_invoice', 'تحميل فاتورة الطلب')}</button>
                    </div>
                </div>
            `;
            showAppModal(t('ord_view_details', 'تفاصيل الطلب'), '🧾', body, whatsappBtn);
        }

        // --- حذف طلب واحد نهائيًا من سجل الطلبات (لصاحب المتجر، أو لمساعد معاه صلاحية "حذف الطلبات") ---
        function deleteOrder(index) {
            if(!currentStaffHasPermission('deleteOrders')) { alert('ليس لديك صلاحية حذف الطلبات.'); return; }
            let merchant = localStorage.getItem('currentActiveMerchant');
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            let store = stores[merchant];
            if(!store || !store.orderHistory || !store.orderHistory[index]) return;
            if(!confirm('تأكيد حذف هذا الطلب نهائيًا من السجل؟ الإجراء ده لا يمكن التراجع عنه.')) return;
            let deletedOrder = store.orderHistory[index];
            store.orderHistory.splice(index, 1);
            if(!saveAllStores(stores)) return;
            // ☁️ نحذف النسخة السحابية كمان بكود التتبع بتاعها، عشان لو العميل يرجع يتابع
            // طلبه بنفس الكود، يلاقي "الطلب غير موجود" مش بيانات قديمة اتحذفت من عندك بس
            if(window.deleteOrderFromCloud && deletedOrder.trackingCode) {
                window.deleteOrderFromCloud(merchant, deletedOrder.trackingCode).catch(function() {});
            }
            logStaffActivity('حذف طلب من السجل', `طلب رقم #${index + 1}`);
            renderOrderHistory(store);
            showToast('🗑️ تم حذف الطلب');
        }

        // --- بيسمح للتاجر يعدّل المبلغ المحسوب فعليًا من طلب "تم تسليمه" في تقرير الأرباح -
        // مفيد جدًا لو العميل رجّع جزء من الطلب (أو الطلب كله) بعد التسليم. تمرير newAmount=null
        // بيرجّع المبلغ الأصلي زي ما كان. ---
        function adjustOrderAmount(index, newAmount) {
            let merchant = localStorage.getItem('currentActiveMerchant');
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            let store = stores[merchant];
            if(!store || !store.orderHistory || !store.orderHistory[index]) return;
            let order = store.orderHistory[index];

            if(newAmount === undefined) {
                let entered = prompt(`المبلغ الحالي المحسوب من هذا الطلب: ${(typeof order.countedAmount === 'number' ? order.countedAmount : order.total)} ${store.currency}\nاكتب المبلغ الصحيح بعد أي إرجاع (اكتب 0 لو اترجع بالكامل):`, (typeof order.countedAmount === 'number' ? order.countedAmount : order.total));
                if(entered === null) return; // إلغاء
                let parsed = parseFloat(entered);
                if(isNaN(parsed) || parsed < 0) { alert('المبلغ غير صحيح.'); return; }
                newAmount = parsed;
            }

            if(newAmount === null) {
                delete order.countedAmount; // رجوع للمبلغ الأصلي
            } else {
                order.countedAmount = newAmount;
            }

            if(!saveAllStores(stores)) return;
            renderOrderHistory(store);
            renderRevenueReport(store);
            showToast('✅ اتحدث المبلغ، وتقرير الأرباح اتحدث معاه تلقائيًا.');
        }

        // بيولّد نفس شكل فاتورة الطلب الاحترافية لكن من الأرقام الرسمية المسجلة عندك، مش من أي محادثة خارجية
        async function downloadOrderInvoice(idx) {
            let merchant = localStorage.getItem('currentActiveMerchant');
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            let store = stores[merchant];
            let order = store && store.orderHistory && store.orderHistory[idx];
            if(!order) return;
            showToast('⏳ جاري تجهيز صورة الفاتورة...');
            let blob = await generateOrderReceiptImage(store, getStoreDisplayName(merchant, store), order.orderNo || String(idx + 1).padStart(4, '0'), order.items, order.subtotal, order.deliveryFee, order.total, order.address, order.buyerPhone, order.deliveryZone);
            let link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = `فاتورة-طلب-${order.orderNo || (idx + 1)}.jpg`;
            link.click();
        }

        // =====================================================================
        // 📊 تقرير الأرباح والمبيعات: بيتحسب من طلبات "تم التسليم" فقط، لحظة بلحظة
        // من سجل الطلبات نفسه (مفيش أي تخزين منفصل يقدر يتعارض معاه) — فأي تعديل
        // على مبلغ طلب أو تغيير حالته بينعكس على التقرير فورًا وبشكل صحيح دايمًا.
        // =====================================================================
        function computeRevenueStats(store) {
            let orders = store.orderHistory || [];
            let now = new Date();
            let startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
            let startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1).getTime();
            let startOfYear = new Date(now.getFullYear(), 0, 1).getTime();

            let buckets = {
                today: { revenue: 0, profit: 0, hasCostData: false, count: 0 },
                month: { revenue: 0, profit: 0, hasCostData: false, count: 0 },
                year:  { revenue: 0, profit: 0, hasCostData: false, count: 0 },
                all:   { revenue: 0, profit: 0, hasCostData: false, count: 0 }
            };

            orders.forEach(o => {
                if((o.status || 'pending') !== 'completed') return;
                let ts = typeof o.timestamp === 'number' ? o.timestamp : now.getTime(); // لطلبات قديمة جدًا من غير وقت مسجل
                let revenueAmount = (typeof o.countedAmount === 'number') ? o.countedAmount : (o.total || 0);
                let ratio = (o.total && o.total > 0) ? (revenueAmount / o.total) : 1;

                let orderHasCost = false;
                let orderProfit = 0;
                (o.items || []).forEach(item => {
                    if(typeof item.cost === 'number') {
                        orderHasCost = true;
                        orderProfit += (item.price - item.cost) * (item.qty || 1);
                    }
                });
                orderProfit *= ratio; // لو المبلغ اتعدّل بسبب إرجاع جزئي، الربح بينزل بنفس النسبة

                let applyTo = (b) => {
                    b.revenue += revenueAmount;
                    b.count += 1;
                    if(orderHasCost) { b.profit += orderProfit; b.hasCostData = true; }
                };

                applyTo(buckets.all);
                if(ts >= startOfYear) applyTo(buckets.year);
                if(ts >= startOfMonth) applyTo(buckets.month);
                if(ts >= startOfToday) applyTo(buckets.today);
            });

            return buckets;
        }

        function renderRevenueReport(store) {
            let box = document.getElementById('revenueReportBox');
            if(!box) return;
            let currency = store.currency || 'ج.م';
            let b = computeRevenueStats(store);

            let card = (label, icon, data) => `
                <div style="background:#fff; border:1px solid var(--border-color); border-radius:10px; padding:12px; text-align:center;">
                    <div style="font-size:11.5px; color:var(--text-muted); margin-bottom:4px;">${icon} ${label}</div>
                    <div style="font-size:17px; font-weight:bold; color:var(--primary-color);">${data.revenue.toFixed(2)} <span style="font-size:11px;">${currency}</span></div>
                    <div style="font-size:10.5px; color:var(--text-muted); margin-top:2px;">${data.count} ${t('revenue_delivered_order', 'طلب مُسلَّم')}</div>
                    ${data.hasCostData ? `<div style="margin-top:6px; padding-top:6px; border-top:1px dashed var(--border-color); font-size:12px; color:#166534; font-weight:bold;">💚 ${t('revenue_net_profit', 'صافي الربح')}: ${data.profit.toFixed(2)} ${currency}</div>` : ''}
                </div>
            `;

            let anyCostDataAnywhere = b.all.hasCostData;

            box.innerHTML = `
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
                    ${card(t('revenue_today', 'اليوم'), '📅', b.today)}
                    ${card(t('revenue_this_month', 'الشهر الحالي'), '🗓️', b.month)}
                    ${card(t('revenue_this_year', 'السنة الحالية'), '📆', b.year)}
                    ${card(t('revenue_all_time', 'إجمالي كل الوقت'), '🏆', b.all)}
                </div>
                ${!anyCostDataAnywhere ? `
                    <div style="margin-top:10px; background:#fff7ed; border:1px solid #fed7aa; border-radius:8px; padding:8px 10px; font-size:11px; color:#9a3412;">
                        💡 ${t('revenue_no_cost_note', 'الأرقام دي "إجمالي المبيعات"، مش صافي الربح، لأنك لسه محددتش "سعر التكلفة" لأي منتج. حدد سعر تكلفة الوحدة من فورم كل منتج في قسم "المنتجات" عشان تقدر تشوف صافي ربحك الحقيقي (البيع ناقص التكلفة) هنا تلقائيًا.')}
                    </div>` : `
                    <div style="margin-top:10px; font-size:10.5px; color:var(--text-muted);">
                        💚 ${t('revenue_cost_note', 'صافي الربح بيتحسب بس للمنتجات اللي حددت لها سعر تكلفة. المنتجات من غير سعر تكلفة بتدخل في "إجمالي المبيعات" فقط.')}
                    </div>`}
            `;
        }

        function updateOrderStatus(index, newStatus) {
            let merchant = localStorage.getItem('currentActiveMerchant');
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            if(!stores[merchant] || !stores[merchant].orderHistory[index]) return;
            let store = stores[merchant];
            let order = store.orderHistory[index];
            order.status = newStatus;
            if(newStatus === 'completed') {
                order.completedAt = Date.now(); // بيتحسب منه الساعة اللي بعدها الطلب يتشال تلقائيًا من القائمة
            } else {
                delete order.completedAt;
            }

            // 📦 نقص المخزون بيحصل هنا بالظبط، لحظة ما التاجر يأكد إنه سلّم الطلب فعليًا -
            // مش لحظة إرسال الطلب - عشان الطلب ممكن ميتمش. لو التاجر غيّر رأيه ورجّع الحالة
            // من "تم التسليم" لحالة تانية بالغلط، بترجع الكمية زي ما كانت (عشان مايحصلش نقص مزدوج).
            if(newStatus === 'completed' && !order.stockDeducted) {
                (order.items || []).forEach(item => {
                    let prod = store.products.find(p => p.name === item.name);
                    if(prod && typeof prod.stock === 'number') prod.stock = Math.max(0, prod.stock - (item.qty || 1));
                });
                order.stockDeducted = true;
            } else if(newStatus !== 'completed' && order.stockDeducted) {
                (order.items || []).forEach(item => {
                    let prod = store.products.find(p => p.name === item.name);
                    if(prod && typeof prod.stock === 'number') prod.stock = prod.stock + (item.qty || 1);
                });
                order.stockDeducted = false;
            }

            if(!saveAllStores(stores)) return;
            // ☁️ تحديث حالة الطلب في السحابة فورًا (مستند الطلب بكود تتبعه) - ده اللي بيسمح
            // لشاشة "تتبع الطلب" عند العميل (لو مفتوحة) إنها تتحدث لحظيًا من غير ما يحتاج
            // يضغط بحث تاني، عن طريق مستمع onSnapshot شغال على نفس المستند ده.
            if(window.pushOrderStatusUpdate && order.trackingCode) {
                window.pushOrderStatusUpdate(merchant, order.trackingCode, { status: newStatus, completedAt: order.completedAt || null }).catch(function(){});
            }
            logStaffActivity('غيّر حالة طلب', `طلب #${index + 1} → ${newStatus}`);
            renderOrderHistory(store);
            renderRevenueReport(store);
            renderDashboardProducts(store.products || [], store.categories || [], store.currency || "ج.م");
            updateStockAlertBadge(store.products || []);
        }

        // --- يسمح لصاحب المتجر بتغيير كلمة مروره الخاصة بنفسه (عن طريق Firebase Authentication
        // الحقيقي دلوقتي، مش نص محلي) ---
        function changeMyPassword() {
            let merchant = localStorage.getItem('currentActiveMerchant');
            if(!merchant) return;

            let current = document.getElementById('currentPassInput').value;
            let newPass = document.getElementById('newPassInput').value;
            let confirmPass = document.getElementById('confirmNewPassInput').value;

            if(!newPass || newPass.length < 6) {
                alert('كلمة المرور الجديدة لازم تكون 6 حروف/أرقام على الأقل.');
                return;
            }
            if(newPass !== confirmPass) {
                alert(t('alert_pass_mismatch'));
                return;
            }

            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            let store = stores[merchant];
            let user = window.firebaseAuth && window.firebaseAuth.currentUser;

            if(store && store.authUid && user) {
                // 🔐 الحساب حقيقي على Firebase: لازم نعيد التحقق من كلمة السر الحالية أولاً
                // (reauthenticate) قبل ما Firebase يسمح بتغييرها، كإجراء أمان قياسي.
                let credential = firebase.auth.EmailAuthProvider.credential(user.email, current);
                user.reauthenticateWithCredential(credential).then(function() {
                    return user.updatePassword(newPass);
                }).then(function() {
                    document.getElementById('currentPassInput').value = '';
                    document.getElementById('newPassInput').value = '';
                    document.getElementById('confirmNewPassInput').value = '';
                    showToast('✅ تم تغيير كلمة المرور بنجاح');
                }).catch(function(err) {
                    if(err.code === 'auth/wrong-password') alert(t('alert_wrong_current_pass'));
                    else alert('حصل خطأ أثناء تغيير كلمة المرور: ' + (err.message || 'جرب تاني.'));
                });
                return;
            }

            // مسار احتياطي للحسابات القديمة (قبل التحديث) اللي لسه مالهاش حساب Firebase حقيقي
            if(!store || store.pass !== current) {
                alert(t('alert_wrong_current_pass'));
                return;
            }
            stores[merchant].pass = newPass;
            if(!saveAllStores(stores)) return;
            document.getElementById('currentPassInput').value = '';
            document.getElementById('newPassInput').value = '';
            document.getElementById('confirmNewPassInput').value = '';
            showToast('✅ تم تغيير كلمة المرور بنجاح');
        }

        // --- تغيير اسم الدخول (المفتاح الفريد) منفصل تمامًا عن اسم المتجر الظاهر للعملاء،
        // عشان تغيير اسم الدخول له تبعات (بيغيّر رابط المتجر وبيحتاج فحص تفرّد) بينما اسم
        // المتجر الظاهر ممكن يتغير براحة من غير أي قيود. ---
        const LOGIN_NAME_CHANGE_COOLDOWN_MS = 182 * 86400000; // 6 شهور تقريبًا (182 يوم)

        function changeLoginUsername() {
            let oldName = localStorage.getItem('currentActiveMerchant');
            let newName = document.getElementById('storeLoginNameInput').value.trim();
            if(!newName) { alert(t('alert_new_login_required')); return; }
            if(newName === oldName) { showToast('لم يتغير شيء.'); return; }

            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            let currentStoreData = stores[oldName] || {};

            // التاجر (بعكس الأدمن) مسموحله يغيّر اسم دخوله مرة كل 6 شهور بس، عشان الاستقرار
            // ومنع تكرار التغيير اللي ممكن يلخبط العملاء أو يُستغل بشكل ضار
            let lastChanged = currentStoreData.loginNameChangedAt || currentStoreData.registeredAt || 0;
            let elapsed = Date.now() - lastChanged;
            if(elapsed < LOGIN_NAME_CHANGE_COOLDOWN_MS) {
                let daysLeft = Math.ceil((LOGIN_NAME_CHANGE_COOLDOWN_MS - elapsed) / 86400000);
                alert(`⏳ ممكن تغيّر اسم الدخول مرة كل 6 شهور بس. باقي ${daysLeft} يوم قبل ما تقدر تغيّره تاني.\n\nلو محتاج تغييره قبل كده لسبب ضروري، تواصل مع إدارة المنصة.`);
                return;
            }

            let adminAccounts = JSON.parse(localStorage.getItem('adminAccounts')) || [];
            let nameTaken = stores[newName] || adminAccounts.some(a => a.username.toLowerCase() === newName.toLowerCase());
            if(nameTaken) { alert(t('alert_username_taken', 'اسم الدخول ده مستخدم بالفعل، اختار اسم تاني.')); return; }

            if(!confirm(`متأكد إنك عايز تغيّر اسم الدخول من "${oldName}" لـ "${newName}"؟ ده هيغيّر رابط متجرك القديم، وأي رابط قديم اتبعت للعملاء مش هيشتغل تاني.\n\nملحوظة: مش هتقدر تغيّره تاني قبل مرور 6 شهور من دلوقتي.`)) return;

            stores[newName] = stores[oldName];
            stores[newName].loginNameChangedAt = Date.now();
            delete stores[oldName];
            if(!saveAllStores(stores)) return;

            localStorage.setItem('currentActiveMerchant', newName);
            activeStore = newName;
            localStorage.setItem('currentActiveStore', newName);
            document.getElementById('storeLoginNameInput').value = newName;
            updateHeaderBrand();
            showToast(`✅ تم تغيير اسم الدخول إلى "${newName}" بنجاح.`);
        }

        // --- إزالة الأيقونة المخصصة (المرفوعة من الجهاز) والرجوع لاستخدام الإيموجي الجاهز ---
        function removeCustomCategoriesIcon() {
            let merchant = localStorage.getItem('currentActiveMerchant');
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            if(!stores[merchant]) return;
            delete stores[merchant].categoriesIconImage;
            if(!saveAllStores(stores)) return;
            document.getElementById('storeCategoriesIconImageFile').value = '';
            document.getElementById('storeCategoriesIconImageFile').removeAttribute('data-base64');
            let preview = document.getElementById('storeCategoriesIconImagePreview');
            preview.style.display = 'none';
            preview.removeAttribute('src');
            showToast('✅ تم الرجوع للأيقونة الجاهزة.');
        }

        // ============================================================
        // 📜 سجل نشاط المساعدين: أي تصرف يعمله مساعد (تعديل إعدادات، منتج،
        // طلب...) بيتسجل هنا فورًا، وصاحب المتجر يشوفه أول ما يفتح لوحته
        // (علامة "جديد" واضحة لحد ما يفتح السجل ويشوفه)، مش لازم ينتظر 24
        // ساعة - الإشعار بيوصله فورًا في أول زيارة للوحته. مدة الاحتفاظ
        // بالسجل قابلة للتحكم زي سجل الطلبات بالظبط (من دقايق لأيام).
        // ============================================================
        function logStaffActivity(action, details) {
            let staffUsername = localStorage.getItem('currentStaffUsername');
            if(!staffUsername) return; // صاحب المتجر نفسه بيتصرف، مش مساعد - مفيش داعي نسجل
            let merchant = localStorage.getItem('currentActiveMerchant');
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            let store = stores[merchant];
            if(!store) return;
            store.staffActivityLog = store.staffActivityLog || [];
            store.staffActivityLog.unshift({
                staffUsername, action, details: details || '', timestamp: Date.now(), read: false
            });
            saveAllStores(stores);
        }

        function getStaffLogRetentionMinutes(store) {
            if(store.staffLogRetentionMinutes !== undefined && store.staffLogRetentionMinutes !== null) {
                return store.staffLogRetentionMinutes;
            }
            return 7 * 1440; // افتراضيًا: أسبوع
        }

        function cleanupOldStaffLog(store) {
            if(!store.staffActivityLog || store.staffActivityLog.length === 0) return false;
            let retentionMs = getStaffLogRetentionMinutes(store) * 60000;
            let now = Date.now();
            let before = store.staffActivityLog.length;
            store.staffActivityLog = store.staffActivityLog.filter(e => (now - e.timestamp) <= retentionMs);
            return store.staffActivityLog.length !== before;
        }

        function saveStaffLogRetentionTime() {
            let merchant = localStorage.getItem('currentActiveMerchant');
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            let store = stores[merchant];
            if(!store) return;
            let valueInput = document.getElementById('staffLogRetentionValueInput');
            let unitInput = document.getElementById('staffLogRetentionUnitInput');
            let rawValue = parseInt(valueInput ? valueInput.value : 0) || 1;
            let unit = unitInput ? unitInput.value : 'days';
            store.staffLogRetentionMinutes = unitToMinutes(rawValue, unit);
            if(!saveAllStores(stores)) return;
            let unitLabel = unit === 'days' ? 'يوم' : (unit === 'hours' ? 'ساعة' : 'دقيقة');
            showToast(`🧹 هيتم مسح سجل نشاط المساعدين تلقائيًا بعد ${rawValue} ${unitLabel}`);
        }

        function clearStaffActivityLogNow() {
            let merchant = localStorage.getItem('currentActiveMerchant');
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            let store = stores[merchant];
            if(!store) return;
            if(!confirm('تأكيد مسح سجل نشاط المساعدين بالكامل؟')) return;
            store.staffActivityLog = [];
            if(!saveAllStores(stores)) return;
            renderStaffActivityLog(store);
            showToast('🗑️ تم مسح سجل نشاط المساعدين');
        }

        function renderStaffActivityLog(store) {
            let container = document.getElementById('staffActivityLogList');
            let badge = document.getElementById('staffActivityUnreadBadge');
            if(!container) return;

            let changed = cleanupOldStaffLog(store);
            if(changed) saveAllStores(JSON.parse(localStorage.getItem('allStores')) || {});

            let valueInput = document.getElementById('staffLogRetentionValueInput');
            let unitInput = document.getElementById('staffLogRetentionUnitInput');
            if(valueInput && unitInput) {
                let disp = minutesToDisplayUnit(getStaffLogRetentionMinutes(store));
                valueInput.value = disp.value;
                unitInput.value = disp.unit;
            }

            let log = store.staffActivityLog || [];
            let unreadCount = log.filter(e => !e.read).length;
            if(badge) badge.classList.toggle('hidden', unreadCount === 0);
            if(badge) badge.textContent = unreadCount;

            if(log.length === 0) {
                container.innerHTML = `<p style="font-size:12px; color:var(--text-muted); margin:0;">${t('staff_log_empty', 'لسه مفيش أي نشاط مسجل من مساعدينك.')}</p>`;
                return;
            }

            container.innerHTML = log.map(e => `
                <div style="background:${e.read ? '#fff' : '#fff7ed'}; border:1px solid ${e.read ? 'var(--border-color)' : '#fed7aa'}; border-radius:8px; padding:8px 10px; margin-bottom:6px; font-size:11.5px;">
                    ${!e.read ? '<span style="color:#d97706; font-weight:bold;">🔴 جديد — </span>' : ''}
                    <strong>${e.staffUsername}</strong>: ${e.action}
                    ${e.details ? `<div style="color:var(--text-muted); margin-top:2px;">${e.details}</div>` : ''}
                    <div style="color:var(--text-muted); font-size:10px; margin-top:2px;">${new Date(e.timestamp).toLocaleString('ar-EG')}</div>
                </div>
            `).join('');
        }

        // بيتنفذ لما صاحب المتجر (مش مساعد) يفتح جزء سجل نشاط المساعدين، بيعلّم كل حاجة "مقروءة"
        function markStaffActivityLogRead() {
            if(isCurrentUserStaff()) return; // المساعد نفسه ميقدرش يعلّم سجل نشاطه هو مقروء
            let merchant = localStorage.getItem('currentActiveMerchant');
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            let store = stores[merchant];
            if(!store || !store.staffActivityLog) return;
            let anyUnread = store.staffActivityLog.some(e => !e.read);
            if(!anyUnread) return;
            store.staffActivityLog.forEach(e => e.read = true);
            saveAllStores(stores);
            renderStaffActivityLog(store);
        }

        function saveMerchantSettings() {
            try {
            let merchant = localStorage.getItem('currentActiveMerchant');
            let newDisplayName = safeVal('storeNameInput').trim();
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};

            if(!newDisplayName) { alert(t('alert_store_name_required')); return; }
            if(!stores[merchant]) return;

            stores[merchant].displayName = newDisplayName;
            let currentStore = stores[merchant];

            // دمج كود الدولة مع رقم الواتساب مع حماية من تكرار الكود عن طريق الخطأ (سبب مشكلة 404)
            let finalWhatsapp = buildFinalWhatsappNumber();
            if(safeVal('storeWhatsappInput').trim() !== '' && !finalWhatsapp) {
                alert(t('alert_whatsapp_invalid'));
                return;
            }
            currentStore.whatsappCountryCode = safeVal('storeWhatsappCountryCode');
            currentStore.whatsapp = finalWhatsapp;

            currentStore.messenger = safeVal('storeMessengerInput').trim();
            // نقبل أي صيغة (username@ أو رابط كامل) ونطبّعها لرابط t.me نظيف
            let telegramRaw = safeVal('storeTelegramInput').trim();
            currentStore.telegram = telegramRaw.replace(/^@/, '').replace(/^https?:\/\/t\.me\//i, '').trim();
            currentStore.orderMessageTemplate = safeVal('storeOrderTemplateInput');
            let directHoursRaw = safeVal('storeDirectOrderHoursInput').trim();
            currentStore.directOrderHours = directHoursRaw === '' ? null : Math.max(0, parseFloat(directHoursRaw) || 0);
            currentStore.directOrderMessage = safeVal('storeDirectOrderMessageInput');
            currentStore.vodafoneCash = safeVal('storeVodafoneCashInput').trim();
            // العملة: بتتقرأ من الحقل النشط فعليًا (القائمة أو الكتابة اليدوية)، عشان لو التاجر
            // كان مستخدم وضع "اكتبها يدويًا" مايضيعش اللي كتبه وقت الحفظ.
            let manualCurrencyEl = document.getElementById('storeCurrencyManualInput');
            let usingManualCurrency = manualCurrencyEl && !manualCurrencyEl.classList.contains('hidden');
            currentStore.currency = (usingManualCurrency ? manualCurrencyEl.value : safeVal('storeCurrencyInput')).trim() || 'ج.م';
            let lockoutVal = parseInt(safeVal('storeLockoutMinutesInput'));
            currentStore.loginLockoutMinutes = (lockoutVal && lockoutVal > 0) ? lockoutVal : null;
            let feeVal = safeVal('storeDeliveryFeeInput').trim();
            let thresholdVal = safeVal('storeFreeDeliveryThresholdInput').trim();
            currentStore.deliveryFee = feeVal === '' ? null : parseFloat(feeVal);
            currentStore.freeDeliveryThreshold = thresholdVal === '' ? null : parseFloat(thresholdVal);
            // 📍 مناطق التوصيل: كل سطر "اسم المنطقة = السعر"
            currentStore.deliveryZones = (safeVal('storeDeliveryZonesInput') || '').split('\n').map(l => {
                let m = l.trim().match(/^(.+?)\s*[=:：،,-]\s*([0-9]+(?:\.[0-9]+)?)\s*$/);
                return m ? { name: m[1].trim(), fee: parseFloat(m[2]) } : null;
            }).filter(Boolean);
            currentStore.phoneFieldMode = safeVal('storePhoneFieldModeSelect') || 'optional';
            currentStore.guestCheckoutAllowed = safeChecked('storeGuestCheckoutToggle');
            currentStore.reviewsEnabled = safeChecked('storeReviewsEnabledToggle');
            currentStore.reviewsRequireLogin = safeChecked('storeReviewsRequireLoginToggle');
            currentStore.buyerRegistrationDisabled = safeChecked('storeBuyerRegDisabledToggle');
            currentStore.productsLabel = safeVal('storeProductsLabelInput').trim() || 'منتج';
            currentStore.categoriesLabel = safeVal('storeCategoriesLabelInput').trim() || 'التصنيفات';
            currentStore.categoriesIcon = safeVal('storeCategoriesIconSelect') || '🗂️';
            currentStore.paymentLink = safeVal('storePaymentLinkInput').trim();
            let catIconEl = document.getElementById('storeCategoriesIconImageFile');
            let catIconImgData = catIconEl && catIconEl.getAttribute('data-base64');
            if(catIconImgData) currentStore.categoriesIconImage = catIconImgData;
            currentStore.aboutUs = safeVal('storeAboutUsInput').trim();
            currentStore.aboutUsStyle = {
                color: safeVal('storeAboutColor'),
                fontSize: safeVal('storeAboutSize'),
                bold: safeChecked('storeAboutBold'),
                underline: safeChecked('storeAboutUnderline')
            };
            currentStore.howToShopText = safeVal('storeHowToShopInput').trim();
            currentStore.returnPolicy = safeVal('storeReturnPolicyInput').trim();
            let aboutImgEl = document.getElementById('storeAboutImageFile');
            let aboutImgData = aboutImgEl && aboutImgEl.getAttribute('data-base64');
            if(aboutImgData) currentStore.aboutImage = aboutImgData;

            currentStore.socialLinks = {
                facebook: safeVal('storeFacebookInput').trim(),
                instagram: safeVal('storeInstagramInput').trim(),
                youtube: safeVal('storeYoutubeInput').trim(),
                tiktok: safeVal('storeTiktokInput').trim(),
                twitter: safeVal('storeTwitterInput').trim(),
                callPhone: safeVal('storeCallPhoneInput').trim()
            };

            let logoInput = document.getElementById('storeLogoFile');
            let newLogo = logoInput && logoInput.getAttribute('data-base64');
            if(newLogo) currentStore.logo = newLogo;

            if(!saveAllStores(stores)) return;
            logStaffActivity('عدّل إعدادات المتجر', `اسم المتجر: ${newDisplayName}`);
            updateHeaderBrand();
            loadDashboard();
            alert(t('alert_settings_saved'));
            } catch(e) {
                // ⚠️ أي خطأ غير متوقع (نادر جدًا دلوقتي بعد ما كل الحقول بقت تُقرأ بأمان عن
                // طريق safeVal/safeChecked اللي بترجع قيمة افتراضية بدل ما تكسر لو العنصر
                // مش موجود) هيظهر برسالة واضحة بدل الصمت.
                console.error('saveMerchantSettings error:', e);
                alert('⚠️ حصل خطأ ولم يتم حفظ التغييرات. الخطأ: ' + (e && e.message ? e.message : e));
            }
        }

        // --- إضافة وتعديل التصنيفات والمنتجات للتاجر ---

        function renderDashboardCategories(categories) {
            let listDiv = document.getElementById('merchantCategoriesList');
            listDiv.innerHTML = '';
            listDiv.style.display = 'flex';
            listDiv.style.flexWrap = 'wrap';
            listDiv.style.gap = '8px';
            let select = document.getElementById('prodCategorySelect');
            select.innerHTML = '';

            let badge = document.getElementById('categoriesCountBadge');
            if(badge) {
                if(categories.length > 0) { badge.textContent = categories.length; badge.classList.remove('hidden'); }
                else { badge.classList.add('hidden'); }
            }

            if(categories.length === 0) {
                listDiv.innerHTML = `<p style="font-size:12px; color:var(--text-muted);">${t('cat_none_yet', 'لسه مفيش أقسام. ابدأ بإضافة أول قسم من الفورم فوق.')}</p>`;
            }

            // ✅ شكل مضغوط جدًا (chip/tag صغير) بدل صف كامل العرض لكل قسم، عشان التاجر
            // يقدر يشوف كل أقسامه مرة واحدة براحته، ويعدّل/يحذف أي قسم بضغطة واحدة بسيطة.
            categories.forEach((cat, index) => {
                listDiv.innerHTML += `
                    <div data-category-chip-index="${index}" style="display:inline-flex; align-items:center; gap:6px; background:#fff; border:1px solid var(--border-color); border-radius:24px; padding:4px 6px 4px 10px;">
                        <img src="${cat.image}" style="width:24px; height:24px; border-radius:50%; object-fit:cover; flex-shrink:0;">
                        <span style="font-size:12px; font-weight:bold; white-space:nowrap;">${cat.name}</span>
                        <button onclick="editCategory(${index})" title="تعديل" style="width:22px; height:22px; border-radius:50%; border:none; background:var(--bg-body); color:var(--text-main); font-size:10px; cursor:pointer; display:flex; align-items:center; justify-content:center; padding:0; flex-shrink:0;"><i class="fa fa-pen"></i></button>
                        <button onclick="deleteCategory(${index})" title="حذف" style="width:22px; height:22px; border-radius:50%; border:none; background:#fee2e2; color:#dc2626; font-size:10px; cursor:pointer; display:flex; align-items:center; justify-content:center; padding:0; flex-shrink:0;"><i class="fa fa-trash"></i></button>
                    </div>
                `;
                select.innerHTML += `<option value="${cat.name}">${cat.name}</option>`;
            });
        }

        function addCategory() {
            let merchant = localStorage.getItem('currentActiveMerchant');
            let editIndex = document.getElementById('editCategoryIndex').value;
            let catName = document.getElementById('newCatName').value.trim();
            let fileInput = document.getElementById('newCatImageFile');
            let catImage = fileInput.getAttribute('data-base64');

            let stores = JSON.parse(localStorage.getItem('allStores')) || {};

            if(editIndex === "-1") {
                if(!catName || !catImage) { alert(t('alert_cat_name_image_required')); return; }
                stores[merchant].categories.push({ name: catName, image: catImage });
            } else {
                if(!catName) { alert(t('alert_cat_name_required')); return; }
                let oldName = stores[merchant].categories[editIndex].name;
                stores[merchant].categories[editIndex].name = catName;
                if(catImage) stores[merchant].categories[editIndex].image = catImage;
                // تحديث اسم القسم في المنتجات المرتبطة به إن تم تغيير الاسم
                if(oldName !== catName) {
                    (stores[merchant].products || []).forEach(p => { if(p.category === oldName) p.category = catName; });
                }
            }

            if(!saveAllStores(stores)) return;
            let isNewAdd = (editIndex === "-1");
            let newIndex = isNewAdd ? (stores[merchant].categories.length - 1) : parseInt(editIndex);
            logStaffActivity(isNewAdd ? 'أضاف قسم جديد' : 'عدّل قسم', catName);
            cancelEditCategory();
            loadDashboard();
            if(isNewAdd) {
                // ✅ زي إضافة المنتج بالظبط: بعد إضافة قسم جديد نقفل الفورم وننقل التاجر مباشرة
                // لصفحة المتجر اللي فيها الأقسام، ونضوّي على القسم الجديد.
                let wasQuick = !!quickNavReturnSectionId;
                closeCategoriesModal();
                try {
                    if(!wasQuick && localStorage.getItem('viewMode') === 'store' && localStorage.getItem('currentActiveStore') === merchant) {
                        switchTab('home');
                    }
                    renderHome();
                    if(typeof backToCategories === 'function') backToCategories();
                } catch(e) { console.error('addCategory: خطأ أثناء الانتقال لصفحة الأقسام', e); }
                showToast('✅ ' + catName);
                setTimeout(() => {
                    let cards = document.querySelectorAll('#homeCategoriesGrid .cat-card');
                    let card = Array.from(cards).find(c => { let h = c.querySelector('h4'); return h && h.textContent.trim() === catName; });
                    if(card) {
                        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        card.style.boxShadow = '0 0 0 3px #22c55e';
                        setTimeout(() => { card.style.boxShadow = ''; }, 2000);
                    }
                }, 250);
                return;
            }
            setTimeout(() => {
                let chip = document.querySelector(`[data-category-chip-index="${newIndex}"]`);
                if(chip) {
                    chip.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    chip.style.boxShadow = '0 0 0 3px #22c55e';
                    setTimeout(() => { chip.style.boxShadow = ''; }, 1800);
                }
            }, 150);
        }

        function editCategory(index) {
            let merchant = localStorage.getItem('currentActiveMerchant');
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            let cat = stores[merchant].categories[index];

            document.getElementById('editCategoryIndex').value = index;
            document.getElementById('newCatName').value = cat.name;
            let preview = document.getElementById('catPreviewImg');
            preview.src = cat.image; preview.style.display = 'block';

            document.getElementById('catFormHeader').innerText = t('cat_edit_h', '✏️ تعديل القسم');
            document.getElementById('saveCatBtn').innerHTML = `${t('cat_save_edit_btn', 'حفظ التعديل')} <i class="fa fa-save"></i>`;
            document.getElementById('cancelCatEditBtn').classList.remove('hidden');
            document.getElementById('catFormHeader').scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        function cancelEditCategory() {
            document.getElementById('editCategoryIndex').value = '-1';
            document.getElementById('newCatName').value = '';
            document.getElementById('newCatImageFile').removeAttribute('data-base64');
            document.getElementById('catPreviewImg').style.display = 'none';
            document.getElementById('catFormHeader').innerText = t('cat_add_new_h', '📂 إضافة قسم جديد');
            document.getElementById('saveCatBtn').innerHTML = `${t('cat_add_btn', 'إضافة القسم')} <i class="fa fa-folder-plus"></i>`;
            document.getElementById('cancelCatEditBtn').classList.add('hidden');
        }

        function deleteCategory(index) {
            if(!confirm('تأكيد حذف القسم؟')) return;
            let merchant = localStorage.getItem('currentActiveMerchant');
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            stores[merchant].categories.splice(index, 1);
            if(!saveAllStores(stores)) return;
            loadDashboard();
        }

        // --- ترتيب المنتجات حسب عدد مرات الشراء الفعلية (salesCount)، وعرض أعلى 10 منتجات ---
        function renderBestSellers(products) {
            let box = document.getElementById('bestSellersList');
            if(!box) return;
            let ranked = products
                .map((p, idx) => ({ ...p, _idx: idx }))
                .filter(p => (p.salesCount || 0) > 0)
                .sort((a, b) => (b.salesCount || 0) - (a.salesCount || 0))
                .slice(0, 10);

            if(ranked.length === 0) {
                box.innerHTML = `<p style="font-size:12px; color:var(--text-muted);">${t('bestsellers_empty', 'لسه مفيش مبيعات كفاية لعرض ترتيب. هيظهر هنا أول ما تبدأ تستقبل طلبات.')}</p>`;
                return;
            }

            box.innerHTML = ranked.map((p, rank) => `
                <div style="display:flex; align-items:center; gap:10px; background:var(--bg-body); border:1px solid var(--border-color); border-radius:8px; padding:8px; margin-bottom:6px;">
                    <strong style="width:22px; text-align:center; color:var(--primary-color);">#${rank + 1}</strong>
                    <img src="${p.image}" style="width:38px; height:38px; border-radius:6px; object-fit:cover;">
                    <div style="flex:1; font-size:12px;">
                        <strong>${p.name}</strong><br>
                        <span style="color:var(--text-muted);">${t('purchased_n_times', 'تم شراؤه {n} مرة').replace('{n}', p.salesCount)}</span>
                    </div>
                    <button class="${p.featuredBestSeller ? '' : 'secondary'}" style="width:auto; margin:0; padding:5px 8px; font-size:11px;" onclick="toggleBestSellerBadge(${p._idx})">
                        ${p.featuredBestSeller ? '⭐ ' + t('bestseller_badge_shown', 'الشارة ظاهرة') : t('bestseller_show_badge', 'إظهار شارة الأكثر مبيعاً')}
                    </button>
                </div>
            `).join('');
        }

        // --- إظهار/إخفاء شارة "🔥 الأكثر مبيعاً" على المنتج في واجهة المتجر، بقرار التاجر بنفسه ---
        function toggleBestSellerBadge(productIndex) {
            let merchant = localStorage.getItem('currentActiveMerchant');
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            let store = stores[merchant];
            let prod = store.products[productIndex];
            if(!prod) return;
            prod.featuredBestSeller = !prod.featuredBestSeller;
            if(!saveAllStores(stores)) return;
            renderBestSellers(store.products);
            renderDashboardProducts(store.products, store.categories || [], store.currency || "ج.م");
        }

        // --- تصفير عداد المبيعات لكل المنتجات والبدء من جديد (لا يمكن التراجع، لذلك في تأكيد قبلها) ---
        function resetBestSellers() {
            if(!confirm('⚠️ هل توافق؟ سيتم إزالة جميع ترتيبات "الأكثر مبيعاً" الحالية وبدء العد من جديد لكل المنتجات، ولا يمكن التراجع عن هذا الإجراء.')) return;
            let merchant = localStorage.getItem('currentActiveMerchant');
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            let store = stores[merchant];
            if(!store) return;
            (store.products || []).forEach(p => { p.salesCount = 0; });
            if(!saveAllStores(stores)) return;
            renderBestSellers(store.products);
            showToast('🔄 تم تصفير ترتيب الأكثر مبيعاً، العد بدأ من جديد.');
        }

        // --- بترجع وحدة العد بعد الرقم (مثلاً " قطعة" أو " كرتونة") لو التاجر حددها، أو فاضي لو لأ ---
        function formatStockUnit(p) {
            return (p && p.stockUnitLabel) ? (' ' + p.stockUnitLabel) : '';
        }

        function escapeHtml(str) {
            return (str || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        }

        // ============================================================
        // 🖋️ محرر النص الغني (Rich Text Editor) العام: بيُستخدم لوصف المنتج ولسياسة
        // الخصوصية - تنسيق حقيقي (عريض/مائل/تسطير/حجم خط/لون/تظليل/محاذاة/قائمة نقطية)
        // بيتطبق على أي جزء محدد من النص فقط (مش شكل واحد على كل النص زي الطريقة القديمة).
        // المحتوى بيُحفظ كـ HTML (بعد تنقية أمان) وبيُعرض للعميل بنفس التنسيق بالظبط.
        // ============================================================
        function richToolbarHtml(targetId) {
            return `
                <button type="button" onmousedown="event.preventDefault()" onclick="richExec('${targetId}','bold')" title="${t('rich_bold','عريض')}"><b>B</b></button>
                <button type="button" onmousedown="event.preventDefault()" onclick="richExec('${targetId}','italic')" title="${t('rich_italic','مائل')}"><i>I</i></button>
                <button type="button" onmousedown="event.preventDefault()" onclick="richExec('${targetId}','underline')" title="${t('rich_underline','تسطير')}"><u>U</u></button>
                <select onmousedown="richSaveSelection('${targetId}')" onchange="if(this.value){ richSetFontSize('${targetId}', this.value); } this.selectedIndex=0;">
                    <option value="">${t('rich_font_size','حجم الخط')}</option>
                    <option value="12px">12</option>
                    <option value="14px">14</option>
                    <option value="16px">16</option>
                    <option value="18px">18</option>
                    <option value="22px">22</option>
                    <option value="28px">28</option>
                </select>
                <label title="${t('rich_text_color','لون النص')}" style="display:inline-flex; align-items:center; gap:2px; cursor:pointer;">🎨<input type="color" value="#5a5248" onmousedown="richSaveSelection('${targetId}')" onchange="richSetColor('${targetId}', this.value)" style="width:26px; height:26px; padding:0; border:1px solid var(--border-color); border-radius:6px; cursor:pointer;"></label>
                <label title="${t('rich_highlight','تظليل')}" style="display:inline-flex; align-items:center; gap:2px; cursor:pointer;">🖍️<input type="color" value="#fff59d" onmousedown="richSaveSelection('${targetId}')" onchange="richSetHighlight('${targetId}', this.value)" style="width:26px; height:26px; padding:0; border:1px solid var(--border-color); border-radius:6px; cursor:pointer;"></label>
                <button type="button" onmousedown="event.preventDefault()" onclick="richExec('${targetId}','insertUnorderedList')" title="${t('rich_bullet_list','قائمة نقطية')}"><i class="fa fa-list-ul"></i></button>
                <button type="button" onmousedown="event.preventDefault()" onclick="richExec('${targetId}','justifyRight')" title="${t('rich_align_right','محاذاة يمين')}"><i class="fa fa-align-right"></i></button>
                <button type="button" onmousedown="event.preventDefault()" onclick="richExec('${targetId}','justifyCenter')" title="${t('rich_align_center','توسيط')}"><i class="fa fa-align-center"></i></button>
                <button type="button" onmousedown="event.preventDefault()" onclick="richExec('${targetId}','justifyLeft')" title="${t('rich_align_left','محاذاة شمال')}"><i class="fa fa-align-left"></i></button>
                <button type="button" onmousedown="event.preventDefault()" onclick="richClearFormatting('${targetId}')" title="${t('rich_clear_format','إزالة التنسيق')}"><i class="fa fa-eraser"></i></button>
            `;
        }
        // --- بتملأ كل أماكن الـ toolbar (.rich-toolbar-mount) الموجودة في الصفحة دلوقتي بالأزرار الفعلية ---
        function mountRichToolbars() {
            document.querySelectorAll('.rich-toolbar-mount').forEach(function(mount){
                let target = mount.getAttribute('data-target');
                if(!target) return;
                mount.className = 'rich-toolbar-mount rich-toolbar';
                mount.innerHTML = richToolbarHtml(target);
            });
        }
        function richExec(editorId, cmd, val) {
            let el = document.getElementById(editorId);
            if(!el) return;
            el.focus();
            try { document.execCommand('styleWithCSS', false, true); } catch(e) {}
            try { document.execCommand(cmd, false, val || null); } catch(e) {}
        }
        // --- بيحفظ آخر تحديد (تظليل) قام المستخدم بعمله جوه المحرر، قبل ما يضغط على قائمة
        // الحجم أو أي input[type=color] - العنصرين دول بيسرقوا الـ focus من المحرر لحظة
        // الضغط عليهم (حتى من غير ما نقدر نمنع ده، لأنهم لازم ياخدوا focus عشان يفتحوا)،
        // فالتحديد كان بيضيع قبل ما نلحق نستخدمه. دلوقتي بنحفظه onmousedown (قبل ما الفوكس
        // ينتقل) وبعدين نرجعه تاني وقت التنفيذ الفعلي. ده الحل الجذري لمشكلة "التظليل بيروح". ---
        let richSavedRange = null;
        let richSavedEditorId = null;
        function richSaveSelection(editorId) {
            let el = document.getElementById(editorId);
            let sel = window.getSelection();
            if(el && sel && sel.rangeCount > 0) {
                let range = sel.getRangeAt(0);
                if(el.contains(range.commonAncestorContainer) && !range.collapsed) {
                    richSavedRange = range.cloneRange();
                    richSavedEditorId = editorId;
                }
            }
        }
        // --- بترجع التحديد المحفوظ (لو موجود ومن نفس المحرر) على الصفحة الحالية ---
        function richRestoreSelection(editorId) {
            if(richSavedRange && richSavedEditorId === editorId) {
                let sel = window.getSelection();
                sel.removeAllRanges();
                sel.addRange(richSavedRange);
                return true;
            }
            return false;
        }
        // --- بترجع Range صالح للتنسيق: من التحديد الحالي (لو لسه موجود ومش فاضي)، وإلا من
        // آخر تحديد محفوظ (بعد الضغط على قائمة الحجم/اللون) - أو null لو مفيش ولا حاجة ---
        function richGetActiveRange(editorId) {
            let el = document.getElementById(editorId);
            if(!el) return null;
            el.focus();
            let sel = window.getSelection();
            let live = sel && sel.rangeCount > 0 && !sel.isCollapsed && el.contains(sel.getRangeAt(0).commonAncestorContainer);
            if(!live) {
                if(!richRestoreSelection(editorId)) return null;
                sel = window.getSelection();
            }
            richSavedRange = null; richSavedEditorId = null;
            return sel.getRangeAt(0);
        }
        // --- بتغلف النص المحدد (المظلل بالماوس) جوه <span> بالتنسيق المطلوب - لو مفيش تحديد، بتتجاهل العملية ---
        function richWrapStyle(editorId, cssText) {
            let el = document.getElementById(editorId);
            if(!el) return;
            let range = richGetActiveRange(editorId);
            if(!range) {
                showToast('⚠️ ' + t('rich_select_text_first', 'حدد (ظلل) النص أولاً عشان تنسّقه'));
                return;
            }
            let span = document.createElement('span');
            span.style.cssText = cssText;
            span.appendChild(range.extractContents());
            range.insertNode(span);
            let sel = window.getSelection();
            sel.removeAllRanges();
            let newRange = document.createRange();
            newRange.selectNodeContents(span);
            sel.addRange(newRange);
        }
        function richSetFontSize(editorId, px) { richWrapStyle(editorId, 'font-size:' + px + ';'); }
        function richSetColor(editorId, color) { richWrapStyle(editorId, 'color:' + color + ';'); }
        function richSetHighlight(editorId, color) { richWrapStyle(editorId, 'background-color:' + color + '; border-radius:2px;'); }
        // --- إزالة التنسيق الحقيقية: بتحوّل النص المحدد لنص عادي تمامًا (بتشيل كل الوسوم
        // اللي جواه - bold/italic/span بالألوان والأحجام..إلخ)، مش execCommand('removeFormat')
        // القديمة اللي كانت مش بتشيل التنسيق المطبّق يدويًا عن طريق محرر النص الغني ده. ---
        function richClearFormatting(editorId) {
            let range = richGetActiveRange(editorId);
            if(!range) {
                showToast('⚠️ ' + t('rich_select_text_first', 'حدد (ظلل) النص أولاً عشان تشيل تنسيقه'));
                return;
            }
            let plainText = range.extractContents().textContent || '';
            let textNode = document.createTextNode(plainText);
            range.insertNode(textNode);
            let sel = window.getSelection();
            sel.removeAllRanges();
            let newRange = document.createRange();
            newRange.selectNode(textNode);
            sel.addRange(newRange);
        }
        // --- تنقية أمان: بتشيل أي وسم أو خاصية خطيرة (script/iframe/on*) قبل الحفظ أو العرض ---
        function sanitizeRichHtml(html) {
            let tmp = document.createElement('div');
            tmp.innerHTML = html || '';
            let dangerousTags = ['script','iframe','object','embed','link','style','meta','form','input','button','textarea','select'];
            tmp.querySelectorAll(dangerousTags.join(',')).forEach(function(n){ n.remove(); });
            tmp.querySelectorAll('*').forEach(function(node){
                [...node.attributes].forEach(function(attr){
                    let name = attr.name.toLowerCase();
                    if(name.startsWith('on') || name === 'srcdoc') { node.removeAttribute(attr.name); return; }
                    if((name === 'href' || name === 'src') && /^\s*javascript:/i.test(attr.value)) { node.removeAttribute(attr.name); }
                });
            });
            return tmp.innerHTML;
        }
        function stripHtmlTags(html) {
            let tmp = document.createElement('div');
            tmp.innerHTML = html || '';
            return tmp.textContent || tmp.innerText || '';
        }
        // --- توافق مع وصف المنتج القديم (نص عادي + ستايل واحد ثابت) - بيحوّله لـ HTML منسّق ---
        function legacyDescToHtml(desc, descStyle) {
            desc = desc || '';
            if(/<[a-z][\s\S]*>/i.test(desc)) return desc; // بالفعل HTML (من المحرر الجديد)
            if(!desc.trim()) return '';
            let style = descStyle || {};
            let css = `color:${style.color || '#5a5248'}; font-size:${style.fontSize || '14px'}; font-weight:${style.bold ? 'bold' : 'normal'}; text-decoration:${style.underline ? 'underline' : 'none'};`;
            return `<span style="${css}">${escapeHtml(desc).replace(/\n/g, '<br>')}</span>`;
        }

        // ============================================================
        // 🖋️ نفس فكرة أدوات تنسيق وصف المنتج، لكن لـ "نبذة عن المتجر"
        // (من نحن): نقطة تعداد / سطر جديد / إيموجي سريع + معاينة حية
        // بنفس اللون والحجم والعريض والتسطير اللي هيشوفه العميل بالظبط.
        // ============================================================
        function insertAtAboutCursor(textToInsert) {
            let ta = document.getElementById('storeAboutUsInput');
            let start = ta.selectionStart, end = ta.selectionEnd;
            let before = ta.value.slice(0, start), after = ta.value.slice(end);
            let needsNewline = before.length > 0 && !before.endsWith('\n');
            ta.value = before + (needsNewline ? '\n' : '') + textToInsert + after;
            let newPos = before.length + (needsNewline ? 1 : 0) + textToInsert.length;
            ta.focus();
            ta.setSelectionRange(newPos, newPos);
            updateAboutPreview();
        }
        function insertAboutBullet() { insertAtAboutCursor('• '); }
        function insertAboutLineBreak() { insertAtAboutCursor('\n'); }
        function insertAboutEmoji(emoji) {
            let ta = document.getElementById('storeAboutUsInput');
            let start = ta.selectionStart, end = ta.selectionEnd;
            ta.value = ta.value.slice(0, start) + emoji + ' ' + ta.value.slice(end);
            let newPos = start + emoji.length + 1;
            ta.focus();
            ta.setSelectionRange(newPos, newPos);
            updateAboutPreview();
        }
        function getAboutStyleAttr(style) {
            style = style || {};
            return `color:${style.color || '#5a5248'}; font-size:${style.fontSize || '15px'}; font-weight:${style.bold ? 'bold' : 'normal'}; text-decoration:${style.underline ? 'underline' : 'none'}; white-space:pre-wrap; line-height:1.9; word-break:break-word;`;
        }
        function updateAboutPreview() {
            let box = document.getElementById('storeAboutPreviewBox');
            let ta = document.getElementById('storeAboutUsInput');
            if(!box || !ta) return;
            let about = ta.value;
            let style = {
                color: document.getElementById('storeAboutColor').value,
                fontSize: document.getElementById('storeAboutSize').value,
                bold: document.getElementById('storeAboutBold').checked,
                underline: document.getElementById('storeAboutUnderline').checked
            };
            if(!about.trim()) { box.innerHTML = '<span style="color:var(--text-muted); font-size:11px;">هيظهر شكل النبذة هنا وانت بتكتب...</span>'; return; }
            box.innerHTML = `<p style="margin:0; ${getAboutStyleAttr(style)}">${escapeHtml(about)}</p>`;
        }

        function renderDashboardProducts(products, categories, currency) {
            let prodListDiv = document.getElementById('merchantProductsList');
            prodListDiv.innerHTML = '';
            if(products.length === 0) prodListDiv.innerHTML = `<p style="font-size:12px; color:var(--text-muted); text-align:center;">${t('no_products_yet', 'لا توجد منتجات.')}</p>`;
            
            products.forEach((p, index) => {
                let discount = getProductDiscountPercent(p);
                let priceLine = discount > 0
                    ? `<span style="text-decoration:line-through; color:var(--text-muted); font-size:11px;">${p.price} ${currency}</span> <span style="color:var(--primary-color); font-weight:bold; font-size:13px;">${getEffectivePrice(p)} ${currency}</span> <span style="background:${p.discountColor || '#ef4444'}; color:#fff; font-size:9px; font-weight:bold; padding:1px 6px; border-radius:20px;">-${discount}%</span>`
                    : `<span style="color:var(--primary-color); font-weight:bold; font-size:13px;">${p.price} ${currency}</span>`;
                let returnLine = (p.returnDays && p.returnDays > 0) ? `<br><span style="color:#166534; font-size:10.5px;"><i class="fa fa-undo"></i> إرجاع خلال ${p.returnDays} يوم</span>` : '';

                // 📦 شارة المخزون: بتظهر بس لو التاجر فعّل تتبع الكمية لهذا المنتج
                let stockLine = '';
                if(typeof p.stock === 'number') {
                    if(p.stock <= 0) {
                        stockLine = `<br><span style="color:#fff; background:#dc2626; font-size:10px; font-weight:bold; padding:2px 7px; border-radius:20px; display:inline-block; margin-top:3px;"><i class="fa fa-triangle-exclamation"></i> نفذ من المخزون</span>`;
                    } else if(p.stockAlertEnabled && p.stock <= (p.stockAlertThreshold || 5)) {
                        stockLine = `<br><span style="color:#92400e; background:#fef3c7; font-size:10px; font-weight:bold; padding:2px 7px; border-radius:20px; display:inline-block; margin-top:3px;"><i class="fa fa-triangle-exclamation"></i> متبقي ${p.stock}${formatStockUnit(p)} فقط - مخزون منخفض</span>`;
                    } else {
                        stockLine = `<br><span style="color:var(--text-muted); font-size:10.5px; display:inline-block; margin-top:3px;"><i class="fa fa-boxes-stacked"></i> المتوفر: ${p.stock}${formatStockUnit(p)}</span>`;
                    }
                }

                prodListDiv.innerHTML += `
                    <div data-product-row-index="${index}" style="background:#fff; padding:10px; margin-bottom:8px; border-radius:8px; border:1px solid var(--border-color); display:flex; gap:10px; align-items:center; transition: box-shadow 0.3s, border-color 0.3s;">
                        <img src="${p.image}" style="width:50px; height:50px; border-radius:6px; object-fit:cover;">
                        <div style="flex:1;">
                            <strong style="font-size:13px;">${planDisplayName(p)}</strong><br>
                            ${priceLine}${returnLine}${stockLine}
                        </div>
                        <div style="display:flex; gap:4px;">
                            <button class="edit" onclick="editProduct(${index})"><i class="fa fa-edit"></i></button>
                            <button class="secondary edit" onclick="showProductQrCode(${index})" title="QR كود للمنتج"><i class="fa fa-qrcode"></i></button>
                            <button class="danger edit" onclick="deleteProduct(${index})"><i class="fa fa-trash"></i></button>
                        </div>
                    </div>
                `;
            });

            renderProfitManagementPanel(products, currency);
        }

        // ============================================================
        // 💰 نظام إدارة الربح: حاسبة الدفعة/الكرتونة + معاينة الربح الفورية
        // + لوحة تجميعية لكل المنتجات (الربح المتوقع قبل البيع).
        // ============================================================

        // --- بتحسب تكلفة القطعة الواحدة من إجمالي سعر دفعة/كرتونة + مصاريف إضافية (اختياري) ---
        function calcBulkUnitCost() {
            let total = parseFloat(document.getElementById('bulkTotalCost').value) || 0;
            let units = parseFloat(document.getElementById('bulkUnitsCount').value) || 0;
            let extra = parseFloat(document.getElementById('bulkExtraCost').value) || 0;
            let resultBox = document.getElementById('bulkUnitCostResult');
            if(units <= 0) { resultBox.innerHTML = 'تكلفة القطعة الواحدة: — <span style="font-weight:normal; color:var(--text-muted);">(اكتب عدد القطع)</span>'; return; }
            let unitCost = (total + extra) / units;
            resultBox.innerHTML = `تكلفة القطعة الواحدة: <span style="color:#166534;">${unitCost.toFixed(2)}</span>`;
        }

        // --- بتنقل الرقم الناتج من حاسبة الدفعة مباشرة لحقل "سعر التكلفة للوحدة" فوق ---
        function applyBulkUnitCost() {
            let total = parseFloat(document.getElementById('bulkTotalCost').value) || 0;
            let units = parseFloat(document.getElementById('bulkUnitsCount').value) || 0;
            let extra = parseFloat(document.getElementById('bulkExtraCost').value) || 0;
            if(units <= 0) { showToast('⚠️ اكتب عدد القطع في الدفعة الأول'); return; }
            let unitCost = (total + extra) / units;
            document.getElementById('prodCostPrice').value = Math.round(unitCost * 100) / 100;
            updateProductProfitPreview();
            showToast('✅ اتحط سعر التكلفة تلقائيًا، تقدر تعدله يدوي لو حابب');
        }

        // --- معاينة فورية لربح القطعة الواحدة (وهامش الربح %) وانت لسه بتكتب السعر وسعر التكلفة، قبل حتى ما تحفظ المنتج ---
        function updateProductProfitPreview() {
            let box = document.getElementById('prodProfitPreviewBox');
            let price = parseFloat(document.getElementById('prodPrice').value);
            let cost = document.getElementById('prodCostPrice').value.trim();
            if(isNaN(price) || price <= 0 || cost === '') { box.classList.add('hidden'); box.innerHTML = ''; return; }
            cost = parseFloat(cost) || 0;
            let profit = price - cost;
            let margin = price > 0 ? (profit / price * 100) : 0;
            box.classList.remove('hidden');
            if(profit > 0) {
                box.style.background = '#f0fdf4'; box.style.border = '1px solid #86efac'; box.style.color = '#166534';
                box.innerHTML = `💚 ربحك المتوقع للقطعة: ${profit.toFixed(2)} (هامش ربح ${margin.toFixed(1)}%)`;
            } else if(profit === 0) {
                box.style.background = '#fffbeb'; box.style.border = '1px solid #fcd34d'; box.style.color = '#92400e';
                box.innerHTML = `⚠️ السعر يساوي التكلفة بالظبط - مفيش أي ربح على القطعة دي.`;
            } else {
                box.style.background = '#fef2f2'; box.style.border = '1px solid #fca5a5'; box.style.color = '#991b1b';
                box.innerHTML = `🚨 خسارة! سعر البيع أقل من سعر التكلفة بـ ${Math.abs(profit).toFixed(2)} للقطعة الواحدة.`;
            }
        }

        // --- لوحة "إدارة الربح" التجميعية: بتتحدث تلقائيًا مع أي تعديل/إضافة/حذف منتج ---
        function renderProfitManagementPanel(products, currency) {
            let summaryBox = document.getElementById('profitManagementSummary');
            let table = document.getElementById('profitManagementTable');
            let emptyMsg = document.getElementById('profitManagementEmptyMsg');
            if(!summaryBox || !table) return;

            if(!products || products.length === 0) {
                summaryBox.innerHTML = ''; table.innerHTML = '';
                emptyMsg.classList.remove('hidden');
                return;
            }
            emptyMsg.classList.add('hidden');

            let totalInvestment = 0;      // رأس المال المستثمر في المخزون الحالي (تكلفة × كمية)
            let totalPotentialProfit = 0; // الربح المتوقع لو اتباع كل المخزون الحالي
            let missingCostCount = 0;
            let marginSum = 0, marginCount = 0;

            let rows = products.map(p => {
                let price = parseFloat(p.price) || 0;
                let hasCost = typeof p.costPrice === 'number';
                let cost = hasCost ? p.costPrice : null;
                let hasStock = typeof p.stock === 'number';
                let profitPerUnit = hasCost ? (price - cost) : null;
                let margin = (hasCost && price > 0) ? (profitPerUnit / price * 100) : null;

                if(hasCost && margin !== null) { marginSum += margin; marginCount++; }
                if(!hasCost) missingCostCount++;

                let potentialTotal = null;
                if(hasCost && hasStock) {
                    potentialTotal = profitPerUnit * p.stock;
                    totalInvestment += cost * p.stock;
                    totalPotentialProfit += potentialTotal;
                }

                let profitCellColor = profitPerUnit === null ? 'var(--text-muted)' : (profitPerUnit > 0 ? '#166534' : (profitPerUnit === 0 ? '#92400e' : '#991b1b'));

                return `
                    <tr style="border-bottom:1px solid var(--border-color);">
                        <td style="padding:7px 6px; text-align:right; font-weight:bold;">${p.name}</td>
                        <td style="padding:7px 6px; text-align:center;">${hasCost ? cost.toFixed(2) : '<span style="color:var(--text-muted);">— </span>'}</td>
                        <td style="padding:7px 6px; text-align:center;">${price.toFixed(2)}</td>
                        <td style="padding:7px 6px; text-align:center; color:${profitCellColor}; font-weight:bold;">${profitPerUnit === null ? '—' : profitPerUnit.toFixed(2)}</td>
                        <td style="padding:7px 6px; text-align:center; color:${profitCellColor};">${margin === null ? '—' : margin.toFixed(1) + '%'}</td>
                        <td style="padding:7px 6px; text-align:center;">${hasStock ? p.stock : '<span style="color:var(--text-muted);">' + t('not_tracked_label','غير متتبع') + '</span>'}</td>
                        <td style="padding:7px 6px; text-align:center; font-weight:bold; color:#166534;">${potentialTotal === null ? '—' : potentialTotal.toFixed(2)}</td>
                    </tr>
                `;
            }).join('');

            table.innerHTML = `
                <thead>
                    <tr style="background:var(--bg-body); border-bottom:2px solid var(--border-color);">
                        <th style="padding:7px 6px; text-align:right;">${t('col_product','المنتج')}</th>
                        <th style="padding:7px 6px;">${t('col_cost','التكلفة')}</th>
                        <th style="padding:7px 6px;">${t('col_sale_price','سعر البيع')}</th>
                        <th style="padding:7px 6px;">${t('col_profit_per_unit','ربح/قطعة')}</th>
                        <th style="padding:7px 6px;">${t('col_profit_margin','هامش الربح')}</th>
                        <th style="padding:7px 6px;">${t('col_quantity','الكمية')}</th>
                        <th style="padding:7px 6px;">${t('col_expected_total','إجمالي متوقع')}</th>
                    </tr>
                </thead>
                <tbody>${rows}</tbody>
            `;

            let avgMargin = marginCount > 0 ? (marginSum / marginCount) : null;
            summaryBox.innerHTML = `
                <div style="background:#f0fdf4; border:1px solid #86efac; border-radius:10px; padding:10px; text-align:center;">
                    <div style="font-size:10.5px; color:#166534;">${t('capital_in_stock_label','رأس المال في المخزون الحالي')}</div>
                    <div style="font-size:15px; font-weight:bold; color:#166534;">${totalInvestment.toFixed(2)} ${currency}</div>
                </div>
                <div style="background:#eff6ff; border:1px solid #93c5fd; border-radius:10px; padding:10px; text-align:center;">
                    <div style="font-size:10.5px; color:#1e40af;">${t('expected_profit_if_sold_label','الربح المتوقع لو اتباع كل المخزون')}</div>
                    <div style="font-size:15px; font-weight:bold; color:#1e40af;">${totalPotentialProfit.toFixed(2)} ${currency}</div>
                </div>
                ${avgMargin !== null ? `
                <div style="background:#fffbeb; border:1px solid #fcd34d; border-radius:10px; padding:10px; text-align:center; grid-column:1 / -1;">
                    <div style="font-size:10.5px; color:#92400e;">${t('avg_margin_label','متوسط هامش الربح على المنتجات المحدد لها سعر تكلفة')}</div>
                    <div style="font-size:15px; font-weight:bold; color:#92400e;">${avgMargin.toFixed(1)}%</div>
                </div>` : ''}
                ${missingCostCount > 0 ? `
                <div style="background:#fef2f2; border:1px solid #fca5a5; border-radius:10px; padding:8px 10px; font-size:11px; color:#991b1b; grid-column:1 / -1;">
                    ⚠️ ${t('missing_cost_warning_tpl', '{count} منتج لسه من غير سعر تكلفة، فمش هيدخل في حساب الربح المتوقع - حدد سعر تكلفته من فورم المنتج عشان الرقم يبقى دقيق.').replace('{count}', missingCostCount)}
                </div>` : ''}
                ${totalInvestment === 0 && totalPotentialProfit === 0 && missingCostCount < products.length ? `
                <div style="background:#eff6ff; border:1px solid #93c5fd; border-radius:10px; padding:8px 10px; font-size:11px; color:#1e40af; grid-column:1 / -1;">
                    💡 ${t('expected_total_hint', 'لحساب "الإجمالي المتوقع" لازم تحدد سعر التكلفة + الكمية المتوفرة (تتبع المخزون) مع بعض لكل منتج.')}
                </div>` : ''}
            `;
        }

        let tempProductGallery = [];
        // 🖼️ الحد الأقصى لعدد الصور الإضافية للمنتج الواحد: 5 افتراضيًا، والأدمن يقدر يزوّده لمتجر معين
        // (يتحدّث تلقائيًا من loadDashboard() حسب إعدادات المتجر الحالي).
        let currentMaxGalleryImages = 5;

        // --- إضافة أكتر من صورة للمعرض دفعة واحدة (اختيار متعدد من نفس نافذة اختيار الملفات) ---
        function addProductGalleryImages(input) {
            let files = Array.from(input.files || []);
            if(files.length === 0) return;

            let maxImgs = currentMaxGalleryImages || 5;
            let remaining = maxImgs - tempProductGallery.length;
            if(remaining <= 0) {
                alert(`وصلت للحد الأقصى (${maxImgs} صور إضافية للمنتج الواحد). احذف صورة موجودة الأول لو عاوز تضيف غيرها.`);
                input.value = '';
                return;
            }

            let toProcess = files.slice(0, remaining);
            if(files.length > remaining) {
                alert(`اخترت ${files.length} صورة، لكن هيتضاف منهم بس ${remaining} (الحد الأقصى ${maxImgs} صور إضافية للمنتج الواحد). احذف بعض الصور الحالية لو عاوز تضيف أكتر.`);
            }

            // كل صورة بتتعالج وتتضغط بشكل مستقل، وبتتضاف للمعرض أول ما تخلص (مش لازم ننتظر
            // كل الصور تخلص مع بعض)، فالمعاينة بتظهر تباعًا وبسرعة من غير ما التاجر يحس بأي تجميد.
            toProcess.forEach(file => {
                let reader = new FileReader();
                reader.onload = function(e) {
                    compressImageDataUrl(e.target.result, function(compressed) {
                        if(tempProductGallery.length < maxImgs) {
                            // ⬆️ نضيف الصورة فورًا بالنسخة المحلية المضغوطة عشان المعاينة تظهر بسرعة،
                            // وبمجرد ما ترفع لـ ImgBB بننده مكانها برابطها الصغير في نفس المكان
                            // بالظبط (index ثابت وقت الإضافة)، فمفيش أي تكرار أو ترتيب غلط.
                            let idx = tempProductGallery.length;
                            tempProductGallery.push(compressed);
                            renderProductGalleryPreview();
                            uploadToImgBB(compressed, function(finalUrl) {
                                if(tempProductGallery[idx] === compressed) {
                                    tempProductGallery[idx] = finalUrl;
                                }
                            });
                        }
                    });
                };
                reader.onerror = function() {
                    showToast('⚠️ تعذر تحميل إحدى الصور، جرب تاني.');
                };
                reader.readAsDataURL(file);
            });

            input.value = '';
        }

        function renderProductGalleryPreview() {
            let list = document.getElementById('prodGalleryPreviewList');
            list.innerHTML = tempProductGallery.map((img, i) => `
                <div class="gallery-thumb-chip">
                    <img src="${img}">
                    <div class="del-x" onclick="removeProductGalleryImage(${i})">×</div>
                </div>
            `).join('');
        }

        function removeProductGalleryImage(i) {
            tempProductGallery.splice(i, 1);
            renderProductGalleryPreview();
        }

        // 🔴 رسالة تنبيه حمراء داخل فورم المنتج نفسه بدل alert المزعج — بتاخد التاجر لمكان
        // الحقل الناقص من غير ما تمسح أي بيانة كتبها قبل كده، عشان مايتعبش يكتب تاني
        function showProductFormError(fieldId, message) {
            let box = document.getElementById('prodFormError');
            document.getElementById('prodFormErrorText').innerText = message;
            box.classList.remove('hidden');
            box.scrollIntoView({ behavior: 'smooth', block: 'center' });
            if(fieldId) {
                let field = document.getElementById(fieldId);
                if(field) {
                    field.style.border = '2px solid #ef4444';
                    field.focus();
                    setTimeout(() => { field.style.border = ''; }, 4000);
                }
            }
        }

        function hideProductFormError() {
            document.getElementById('prodFormError').classList.add('hidden');
        }

        // 🛡️ دالة قراءة آمنة لقيمة أي حقل: لو العنصر مش موجود لأي سبب (خطأ برمجي، توقيت
        // تحميل، أو أي ظرف غير متوقع)، بترجع القيمة الافتراضية بدل ما توقف الكود كله بخطأ
        // "Cannot read properties of null". بنستخدمها بدل document.getElementById(id).value
        // في كل حقول فورم المنتج، عشان نشر المنتج ينجح دايمًا حتى لو حقل اختياري واحد فيه مشكلة.
        function safeVal(id, fallback) {
            let el = document.getElementById(id);
            return el ? el.value : (fallback !== undefined ? fallback : '');
        }
        function safeChecked(id, fallback) {
            let el = document.getElementById(id);
            return el ? el.checked : (fallback !== undefined ? fallback : false);
        }
        function safeHtml(id, fallback) {
            let el = document.getElementById(id);
            return el ? sanitizeRichHtml(el.innerHTML) : (fallback !== undefined ? fallback : '');
        }

        function saveProduct() {
            // ⏳ لو لسه فيه صور بترفع على ImgBB في الخلفية، منستناش تفشل العملية، لكن نبلّغ
            // التاجر بلطف إنه ينتظر ثانية بس عشان الصورة تتحفظ بالجودة النهائية الصحيحة.
            if(__pendingImageUploads > 0) {
                showToast('⏳ لسه بيرفع الصورة... استنى ثانية واحدة وجرب تاني');
                return;
            }
            try {
                saveProductInner();
            } catch(e) {
                console.error('saveProduct: حصل خطأ غير متوقع أثناء نشر المنتج', e);
                showAppModal(t('generic_error_title', 'حصل خطأ'), '⚠️', `${t('product_save_error', 'حصل خطأ غير متوقع أثناء نشر المنتج. جرب تاني، ولو المشكلة استمرت جرب تفتح المتجر من متصفح تاني أو من نافذة تصفح خفي (Incognito) للتأكد إن السبب مش بيانات متراكمة من اختبارات سابقة.')}<br><br><span style="font-family:monospace; font-size:10.5px; color:#9ca3af; direction:ltr; display:block; text-align:left; word-break:break-word;">${(e && e.message) ? e.message : ''}</span>`);
            }
        }
        function saveProductInner() {
            hideProductFormError();
            let merchant = localStorage.getItem('currentActiveMerchant');
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            if(!stores[merchant]) {
                showAppModal(t('generic_error_title', 'حصل خطأ'), '⚠️', t('session_expired_msg', 'انتهت جلستك أو حصل خطأ في تحديد متجرك. سجّل دخولك تاني وحاول من جديد.'));
                return;
            }
            let editIndex = safeVal('editProductIndex', '-1');
            let category = safeVal('prodCategorySelect');
            let name = safeVal('prodName').trim();
            let price = safeVal('prodPrice').trim();
            let fileInput = document.getElementById('prodImageFile');
            let newImage = fileInput.getAttribute('data-base64');
            // 🖋️ الوصف دلوقتي HTML منسّق من محرر النص الغني (مش نص عادي + ستايل واحد
            // على الكل زي الطريقة القديمة) - بيُحفظ كـ HTML بعد تنقية أمان.
            let desc = safeHtml('prodDesc').trim();
            if(!stripHtmlTags(desc).trim()) desc = '';
            let gallery = tempProductGallery.slice();

            // نسبة الخصم (اختياري): رقم من 0-95، لو فاضي أو صفر يبقى مفيش خصم
            let discountRaw = safeVal('prodDiscount').trim();
            let discount = discountRaw === '' ? 0 : Math.max(0, Math.min(95, parseFloat(discountRaw) || 0));
            let discountColor = safeVal('prodDiscountColor');

            // مدة الإرجاع بالأيام (اختياري)
            let returnDaysRaw = safeVal('prodReturnDays').trim();
            let returnDays = returnDaysRaw === '' ? 0 : Math.max(0, parseInt(returnDaysRaw) || 0);

            // 📦 المخزون (اختياري بالكامل): لو فاضي = مش بيتتبع، ويفضل المنتج شغال زي العادي
            let stockRaw = safeVal('prodStock').trim();
            let stock = stockRaw === '' ? null : Math.max(0, parseInt(stockRaw) || 0);
            let stockUnitLabel = safeVal('prodStockUnitLabel').trim().slice(0, 15);
            let stockAlertEnabled = safeChecked('prodStockAlertEnabled');
            let stockAlertThresholdRaw = safeVal('prodStockAlertThreshold').trim();
            let showStockToCustomer = safeChecked('prodShowStockToCustomer');
            let stockAlertThreshold = stockAlertThresholdRaw === '' ? 5 : Math.max(0, parseInt(stockAlertThresholdRaw) || 0);

            // 💰 سعر التكلفة (اختياري): لو محدد، هيتحسب بيه صافي الربح في تقرير الأرباح
            let costPriceRaw = safeVal('prodCostPrice').trim();
            let costPrice = costPriceRaw === '' ? null : Math.max(0, parseFloat(costPriceRaw) || 0);

            // ⏳ عداد العرض الزمني (اختياري بالكامل، مستقل عن كمية المخزون)
            let countdownEnabled = safeChecked('prodCountdownEnabled');
            let countdownEndRaw = safeVal('prodCountdownEnd');
            let countdownLabel = safeVal('prodCountdownLabel').trim();
            let countdownColor = safeVal('prodCountdownColor') || '#dc2626';
            if(countdownEnabled && !countdownEndRaw) { showProductFormError('prodCountdownEnd', 'حدد تاريخ ووقت انتهاء العرض، أو ألغِ تفعيل العداد!'); return; }
            let countdownEnd = countdownEnabled ? new Date(countdownEndRaw).toISOString() : null;

            if(!name) { showProductFormError('prodName', 'من فضلك أدخل اسم المنتج!'); return; }
            if(!price) { showProductFormError('prodPrice', 'من فضلك أدخل سعر المنتج!'); return; }

            if(!stores[merchant].products) stores[merchant].products = [];

            // 🏷️ فحص حد عدد المنتجات المسموح به حسب باقة اشتراك المتجر (بيتفحص بس
            // وقت إضافة منتج جديد، مش وقت تعديل منتج موجود بالفعل)
            if(editIndex === "-1") {
                let plan = getPlanForStore(stores[merchant]);
                if(plan.productLimit !== -1 && stores[merchant].products.length >= plan.productLimit) {
                    showProductFormError(null, `⛔ وصلت للحد الأقصى لعدد المنتجات في باقتك الحالية (${plan.name} - ${plan.productLimit} منتج). ترقّى لباقة أعلى عشان تضيف منتجات أكتر.`);
                    return;
                }
                // 💾 فحص مساحة التخزين المسموح بها حسب باقة الاشتراك: بيستخدم الرقم
                // الحقيقي من Firebase لو متوفر (getStoreStorageUsageMB)، بدل تقدير تقريبي بس
                let usage = getStoreStorageUsageMB(stores[merchant]);
                let quota = stores[merchant].storageQuotaMB || 20;
                if(usage.mb >= quota) {
                    showProductFormError(null, `⛔ وصلت للحد الأقصى لمساحة التخزين المسموح بها في باقتك الحالية (${usage.mb.toFixed(1)} من ${quota} MB). ترقّى لباقة أعلى أو قلّل حجم صور منتجاتك عشان تقدر تضيف منتجات جديدة.`);
                    return;
                }
            }

            if(editIndex === "-1") {
                if(!newImage) { showProductFormError(null, 'من فضلك اختر صورة رئيسية للمنتج!'); return; }
                stores[merchant].products.push({ category, name, price, image: newImage, desc, gallery, discount, discountColor, returnDays, stock, stockUnitLabel, stockAlertEnabled, stockAlertThreshold, showStockToCustomer, costPrice, countdownEnabled, countdownEnd, countdownLabel, countdownColor, reviews: [] });
            } else {
                let p = stores[merchant].products[editIndex];
                p.category = category; p.name = name; p.price = price; p.desc = desc; p.gallery = gallery;
                p.discount = discount; p.discountColor = discountColor; p.returnDays = returnDays;
                p.stock = stock; p.stockUnitLabel = stockUnitLabel; p.stockAlertEnabled = stockAlertEnabled; p.stockAlertThreshold = stockAlertThreshold; p.showStockToCustomer = showStockToCustomer;
                p.costPrice = costPrice;
                p.countdownEnabled = countdownEnabled; p.countdownEnd = countdownEnd; p.countdownLabel = countdownLabel; p.countdownColor = countdownColor;
                if(newImage) p.image = newImage;
            }

            // 📍 رقم المنتج اللي اتحفظ (جديد = آخر عنصر في المصفوفة بعد الإضافة، تعديل = نفس
            // مكانه القديم) - هنستخدمه بعد شوية عشان نمرّر ونضوّي عليه بالظبط، مش بس نمرّر
            // لأول القايمة ونسيب التاجر يدوّر عليه بعينه.
            let savedIndex = (editIndex === "-1") ? (stores[merchant].products.length - 1) : parseInt(editIndex);

            if(!saveAllStores(stores)) return;
            logStaffActivity(editIndex === "-1" ? 'أضاف منتج جديد' : 'عدّل منتج', name);
            // ⚠️ المنتج اتحفظ فعليًا في السطر اللي فوق - أي خطأ في خطوات "التنظيف" اللي بعده
            // (تصفير الفورم، تحديث الشاشة) متلفوف في try/catch عشان ميوهمش التاجر إن النشر فشل
            // وهو فعليًا نجح.
            try {
                cancelEditProduct();
            } catch(e) {
                console.error('saveProduct: المنتج اتنشر بنجاح، لكن حصل خطأ أثناء تصفير الفورم', e);
            }
            showToast('✅ ' + t('product_published_toast', 'تم نشر المنتج بنجاح!'));
            loadDashboard();

            if(quickNavReturnSectionId) {
                // 🔙 التاجر جاي من زرار "إضافة منتج" السريع وهو بيتصفح قسم في متجره (مش من
                // داخل لوحة الإدارة نفسها) - فمفيش داعي نسيبه واقف في شاشة إدارة المنتجات
                // الداخلية دي أصلاً. نقفل الفورم بالكامل ونرجّعه بالظبط لنفس القسم اللي كان
                // فيه، مع تحديث قائمة منتجات القسم ده عشان يشوف منتجه الجديد فيها فورًا.
                let returnToCategory = currentViewingCategory;
                closeProductsModal();
                if(returnToCategory) {
                    try {
                        openCategoryProducts(returnToCategory);
                    } catch(e) {
                        console.error('saveProduct: خطأ أثناء تحديث قائمة منتجات القسم بعد الرجوع له', e);
                    }
                }
            } else {
                // الفورم اتفتح من جوه لوحة الإدارة نفسها (زرار "المنتجات" العادي) - مفيش صفحة
                // تانية نرجعله لها، فبنفضل واقفين في نفس المكان ونمرّر لكارت المنتج نفسه
                // (مش بس لأول القايمة) ونضوّي عليه لحظة عشان يبان واضح إنه اتنشر وظاهر فعلاً.
                setTimeout(() => {
                    let row = document.querySelector(`[data-product-row-index="${savedIndex}"]`);
                    if(row) {
                        row.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        row.style.boxShadow = '0 0 0 3px #22c55e';
                        row.style.borderColor = '#22c55e';
                        setTimeout(() => { row.style.boxShadow = ''; row.style.borderColor = ''; }, 1800);
                    } else {
                        // 🛟 احتياط: لو لأي سبب مش لاقيين كارت المنتج بعينه، على الأقل نمرّر لأول القايمة
                        let list = document.querySelector('h4[data-i18n="prod_current_h"]');
                        if(list) list.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }, 200);
            }
        }

        function editProduct(index) {
            let merchant = localStorage.getItem('currentActiveMerchant');
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            let p = stores[merchant].products[index];

            document.getElementById('editProductIndex').value = index;
            document.getElementById('prodCategorySelect').value = p.category;
            document.getElementById('prodName').value = p.name;
            document.getElementById('prodPrice').value = p.price;
            // 🖋️ توافق مع منتجات قديمة كانت محفوظة بنص عادي + ستايل واحد (قبل محرر النص
            // الغني) - بنحوّلها لـ HTML منسّق أول ما تُفتح للتعديل عشان تفضل شكلها زي ما كانت.
            document.getElementById('prodDesc').innerHTML = legacyDescToHtml(p.desc, p.descStyle);

            document.getElementById('prodDiscount').value = p.discount ? p.discount : '';
            document.getElementById('prodDiscountColor').value = p.discountColor || '#ef4444';
            document.getElementById('prodReturnDays').value = p.returnDays ? p.returnDays : '';

            document.getElementById('prodStock').value = (typeof p.stock === 'number') ? p.stock : '';
            document.getElementById('prodStockUnitLabel').value = p.stockUnitLabel || '';
            document.getElementById('prodStockAlertEnabled').checked = !!p.stockAlertEnabled;
            document.getElementById('prodStockAlertThreshold').value = (typeof p.stockAlertThreshold === 'number') ? p.stockAlertThreshold : '';
            document.getElementById('prodStockAlertThresholdBox').classList.toggle('hidden', !p.stockAlertEnabled);
            document.getElementById('prodShowStockToCustomer').checked = !!p.showStockToCustomer;
            document.getElementById('prodCostPrice').value = (typeof p.costPrice === 'number') ? p.costPrice : '';
            document.getElementById('prodBulkCalcEnabled').checked = false;
            document.getElementById('prodBulkCalcBox').classList.add('hidden');
            document.getElementById('bulkTotalCost').value = '';
            document.getElementById('bulkUnitsCount').value = '';
            document.getElementById('bulkExtraCost').value = '';
            document.getElementById('bulkUnitCostResult').innerHTML = 'تكلفة القطعة الواحدة: —';
            updateProductProfitPreview();

            document.getElementById('prodCountdownEnabled').checked = !!p.countdownEnabled;
            document.getElementById('prodCountdownEnd').value = p.countdownEnd ? isoToDatetimeLocal(p.countdownEnd) : '';
            document.getElementById('prodCountdownLabel').value = p.countdownLabel || '';
            document.getElementById('prodCountdownColor').value = p.countdownColor || '#dc2626';
            document.getElementById('prodCountdownBox').classList.toggle('hidden', !p.countdownEnabled);

            tempProductGallery = (p.gallery || []).slice();
            renderProductGalleryPreview();
            
            let preview = document.getElementById('prodPreviewImg');
            // نفس السبب اللي في cancelEditProduct: لازم نشيل أي onerror قديم مربوط بالعنصر
            // قبل ما نحط صورة المنتج، وإلا لو كان فيه خطأ معلّق من إجراء قبل كده (زي قفل
            // الفورم)، بيتنفذ بعد كده ويخفي صورة المنتج اللي إحنا لسه حاططينها - فتلاقي
            // الاسم والسعر ظاهرين بس من غير الصورة، رغم إنها موجودة فعليًا في بيانات المنتج.
            preview.onerror = null;
            preview.src = p.image;
            preview.style.display = 'block';
            preview.onerror = function() {
                preview.style.display = 'none';
                showToast('⚠️ تعذر عرض هذه الصورة، جرب صورة تانية.');
            };

            let label = stores[merchant].productsLabel || t('default_product_word', 'منتج');
            document.getElementById('prodFormHeader').innerText = !isDefaultProductsLabel(label) ? t('tpl_edit', '✏️ تعديل بيانات {label}').replace('{label}', label) : t('prod_edit_h', '✏️ تعديل بيانات المنتج');
            document.getElementById('cancelProductEditBtn').classList.remove('hidden');
            document.getElementById('prodFormHeader').scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        function cancelEditProduct() {
            // 🛡️ الحقول الأساسية اللي التاجر شايفها فورًا (الاسم، السعر، الصورة) بنصفّرها هنا
            // أول حاجة، في try/catch منفصل، عشان تتصفّر أكيد ومضمون مهما حصل. المشكلة اللي
            // كانت بتحصل قبل كده: لو أي حقل اختياري تحت (المخزون، العداد، معرض الصور...) رمى
            // خطأ من غير قصد، الكود كان بيوقف في نصه وميوصلش لسطور تصفير الصورة اللي كانت
            // مكتوبة في الآخر - فتفضل الصورة القديمة ظاهرة رغم إن الاسم والسعر اتصفروا فعلاً.
            try {
                hideProductFormError();
                document.getElementById('editProductIndex').value = "-1";
                document.getElementById('prodName').value = '';
                document.getElementById('prodPrice').value = '';
                document.getElementById('prodImageFile').removeAttribute('data-base64');
                document.getElementById('prodImageFile').value = '';
                let previewImg = document.getElementById('prodPreviewImg');
                // ⚠️ مهم: بنشيل previewImg.onerror الأول قبل أي حاجة تانية. previewImage() كانت
                // بتربط previewImg.onerror بمعالج بيعرض تنبيه "تعذر عرض هذه الصورة" ويخفي
                // الصورة - وده مقصود وقت اختيار صورة فعلاً. بس المعالج ده بيفضل مربوط بالعنصر
                // للأبد، فلو صفّرنا الـ src هنا من غير ما نشيله الأول، المتصفح بيعتبر إن ده "خطأ
                // تحميل صورة" ويشغّل نفس المعالج ده تاني من غير أي داعي - فيظهر تنبيه وهمي
                // للتاجر لحظة النشر رغم إن الصورة اتنشرت تمام (وده بالظبط اللي كان بيحصل).
                previewImg.onerror = null;
                previewImg.style.display = 'none';
                previewImg.removeAttribute('src');
                tempProductGallery = [];
                let galleryList = document.getElementById('prodGalleryPreviewList');
                if(galleryList) galleryList.innerHTML = '';
            } catch(e) {
                console.error('cancelEditProduct: حصل خطأ أثناء تصفير الحقول الأساسية (الاسم/السعر/الصورة)', e);
            }

            // باقي الحقول الاختيارية: كل واحدة في try/catch لوحدها عشان لو حقل واحد فيه مشكلة،
            // ده ميمنعش تصفير باقي الحقول التانية.
            try { document.getElementById('prodDesc').innerHTML = ''; } catch(e) {}
            try { document.getElementById('prodDiscount').value = ''; } catch(e) {}
            try { document.getElementById('prodDiscountColor').value = '#ef4444'; } catch(e) {}
            try { document.getElementById('prodReturnDays').value = ''; } catch(e) {}
            try { document.getElementById('prodStock').value = ''; } catch(e) {}
            try { document.getElementById('prodStockUnitLabel').value = ''; } catch(e) {}
            try { document.getElementById('prodStockAlertEnabled').checked = false; } catch(e) {}
            try { document.getElementById('prodStockAlertThreshold').value = ''; } catch(e) {}
            try { document.getElementById('prodStockAlertThresholdBox').classList.add('hidden'); } catch(e) {}
            try { document.getElementById('prodShowStockToCustomer').checked = false; } catch(e) {}
            try { document.getElementById('prodCostPrice').value = ''; } catch(e) {}
            try { document.getElementById('prodBulkCalcEnabled').checked = false; } catch(e) {}
            try { document.getElementById('prodBulkCalcBox').classList.add('hidden'); } catch(e) {}
            try { document.getElementById('bulkTotalCost').value = ''; } catch(e) {}
            try { document.getElementById('bulkUnitsCount').value = ''; } catch(e) {}
            try { document.getElementById('bulkExtraCost').value = ''; } catch(e) {}
            try { document.getElementById('bulkUnitCostResult').innerHTML = 'تكلفة القطعة الواحدة: —'; } catch(e) {}
            try { updateProductProfitPreview(); } catch(e) { console.error('cancelEditProduct: خطأ في updateProductProfitPreview', e); }
            try { document.getElementById('prodCountdownEnabled').checked = false; } catch(e) {}
            try { document.getElementById('prodCountdownEnd').value = ''; } catch(e) {}
            try { document.getElementById('prodCountdownLabel').value = ''; } catch(e) {}
            try { document.getElementById('prodCountdownColor').value = '#dc2626'; } catch(e) {}
            try { document.getElementById('prodCountdownBox').classList.add('hidden'); } catch(e) {}
            try { renderProductGalleryPreview(); } catch(e) { console.error('cancelEditProduct: خطأ في renderProductGalleryPreview', e); }

            try {
                let merchant = localStorage.getItem('currentActiveMerchant');
                let stores = JSON.parse(localStorage.getItem('allStores')) || {};
                let defaultWord2 = t('default_product_word', 'منتج');
                let label = (stores[merchant] && stores[merchant].productsLabel) || defaultWord2;
                document.getElementById('prodFormHeader').innerText = !isDefaultProductsLabel(label) ? t('tpl_add_new', '📦 إضافة {label} جديد').replace('{label}', label) : t('prod_add_new_h', '📦 إضافة منتج جديد');
                document.getElementById('cancelProductEditBtn').classList.add('hidden');
            } catch(e) {
                console.error('cancelEditProduct: خطأ أثناء تحديث عنوان الفورم', e);
            }
        }

        function deleteProduct(index) {
            if(!confirm('حذف هذا المنتج؟')) return;
            let merchant = localStorage.getItem('currentActiveMerchant');
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            let prodName = (stores[merchant].products[index] || {}).name || '';
            stores[merchant].products.splice(index, 1);
            if(!saveAllStores(stores)) return;
            logStaffActivity('حذف منتج', prodName);
            loadDashboard();
        }

        // --- إدارة أيقونات الاختصارات العلوية (مثل أمازون) ---
        function renderMerchantShortcuts(shortcuts) {
            let list = document.getElementById('merchantShortcutsList');
            list.innerHTML = '';
            if(shortcuts.length === 0) { list.innerHTML = `<p style="font-size:12px; color:var(--text-muted);">${t('shortcuts_none_yet', 'لا توجد اختصارات مضافة.')}</p>`; return; }
            shortcuts.forEach((s, index) => {
                list.innerHTML += `
                    <div class="shortcut-manage-row">
                        <img src="${s.image}">
                        <div class="info"><strong>${s.name}</strong>${s.link ? '<br><span style="color:var(--text-muted);">' + s.link + '</span>' : ''}</div>
                        <div style="display:flex; gap:4px;">
                            <button class="edit" onclick="editShortcut(${index})"><i class="fa fa-edit"></i></button>
                            <button class="danger edit" onclick="deleteShortcut(${index})"><i class="fa fa-trash"></i></button>
                        </div>
                    </div>
                `;
            });
        }

        function saveShortcut() {
            let merchant = localStorage.getItem('currentActiveMerchant');
            let editIndex = document.getElementById('editShortcutIndex').value;
            let name = document.getElementById('newShortcutName').value.trim();
            let fileInput = document.getElementById('newShortcutImageFile');
            let image = fileInput.getAttribute('data-base64');
            let link = document.getElementById('newShortcutLink').value.trim();

            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            if(!stores[merchant].shortcuts) stores[merchant].shortcuts = [];

            if(editIndex === "-1") {
                if(!name || !image) { alert(t('alert_shortcut_name_image_required')); return; }
                stores[merchant].shortcuts.push({ name, image, link });
            } else {
                if(!name) { alert(t('alert_shortcut_name_required')); return; }
                stores[merchant].shortcuts[editIndex].name = name;
                stores[merchant].shortcuts[editIndex].link = link;
                if(image) stores[merchant].shortcuts[editIndex].image = image;
            }

            if(!saveAllStores(stores)) return;
            cancelEditShortcut();
            loadDashboard();
        }

        function editShortcut(index) {
            let merchant = localStorage.getItem('currentActiveMerchant');
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            let s = stores[merchant].shortcuts[index];

            document.getElementById('editShortcutIndex').value = index;
            document.getElementById('newShortcutName').value = s.name;
            document.getElementById('newShortcutLink').value = s.link || '';
            let preview = document.getElementById('shortcutPreviewImg');
            preview.src = s.image; preview.style.display = 'block';

            document.getElementById('shortcutFormHeader').innerText = '✏️ تعديل الاختصار';
            document.getElementById('saveShortcutBtn').innerHTML = 'حفظ التعديل <i class="fa fa-save"></i>';
            document.getElementById('cancelShortcutEditBtn').classList.remove('hidden');
        }

        function cancelEditShortcut() {
            document.getElementById('editShortcutIndex').value = '-1';
            document.getElementById('newShortcutName').value = '';
            document.getElementById('newShortcutLink').value = '';
            document.getElementById('newShortcutImageFile').removeAttribute('data-base64');
            document.getElementById('shortcutPreviewImg').style.display = 'none';
            document.getElementById('shortcutFormHeader').innerText = '⭐ أيقونات مختصرة أعلى المتجر (اختياري)';
            document.getElementById('saveShortcutBtn').innerHTML = 'إضافة اختصار <i class="fa fa-plus"></i>';
            document.getElementById('cancelShortcutEditBtn').classList.add('hidden');
        }

        function deleteShortcut(index) {
            if(!confirm('تأكيد حذف هذا الاختصار؟')) return;
            let merchant = localStorage.getItem('currentActiveMerchant');
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            stores[merchant].shortcuts.splice(index, 1);
            if(!saveAllStores(stores)) return;
            loadDashboard();
        }

        // --- إدارة اللافتات الإعلانية المتحركة الخاصة بالتاجر ---
        function renderMerchantBanners(banners) {
            let list = document.getElementById('merchantBannersList');
            list.innerHTML = '';
            if(banners.length === 0) { list.innerHTML = `<p style="font-size:12px; color:var(--text-muted);">${t('banners_none_yet', 'لا توجد لافتات مضافة.')}</p>`; return; }
            banners.forEach((b, index) => {
                list.innerHTML += `
                    <div class="shortcut-manage-row">
                        <img src="${b.image}" style="width:50px; height:32px; border-radius:6px;">
                        <div class="info">${b.link ? '<span style="color:var(--text-muted);">' + b.link + '</span>' : 'بدون رابط'}</div>
                        <div style="display:flex; gap:4px;">
                            <button class="edit" onclick="editBanner(${index})"><i class="fa fa-edit"></i></button>
                            <button class="danger edit" onclick="deleteBanner(${index})"><i class="fa fa-trash"></i></button>
                        </div>
                    </div>
                `;
            });
        }

        function saveBanner() {
            let merchant = localStorage.getItem('currentActiveMerchant');
            let editIndex = document.getElementById('editBannerIndex').value;
            let fileInput = document.getElementById('newBannerImageFile');
            let image = fileInput.getAttribute('data-base64');
            let link = document.getElementById('newBannerLink').value.trim();

            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            if(!stores[merchant].banners) stores[merchant].banners = [];

            // 🏷️ اللافتات الإعلانية ميزة مقصورة على باقات معينة، حسب ما يحدده الأدمن
            if(editIndex === "-1") {
                let plan = getPlanForStore(stores[merchant]);
                if(!plan.allowBanners) {
                    alert(`⛔ باقتك الحالية ("${plan.name}") لا تشمل ميزة اللافتات الإعلانية. تواصل مع إدارة المنصة للترقية لباقة تدعمها.`);
                    return;
                }
            }

            if(editIndex === "-1") {
                if(!image) { alert(t('alert_banner_image_required')); return; }
                stores[merchant].banners.push({ image, link });
            } else {
                stores[merchant].banners[editIndex].link = link;
                if(image) stores[merchant].banners[editIndex].image = image;
            }

            if(!saveAllStores(stores)) return;
            cancelEditBanner();
            loadDashboard();
        }

        function editBanner(index) {
            let merchant = localStorage.getItem('currentActiveMerchant');
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            let b = stores[merchant].banners[index];

            document.getElementById('editBannerIndex').value = index;
            document.getElementById('newBannerLink').value = b.link || '';
            let preview = document.getElementById('bannerPreviewImg');
            preview.src = b.image; preview.style.display = 'block';

            document.getElementById('bannerFormHeader').innerText = '✏️ تعديل اللافتة';
            document.getElementById('saveBannerBtn').innerHTML = 'حفظ التعديل <i class="fa fa-save"></i>';
            document.getElementById('cancelBannerEditBtn').classList.remove('hidden');
        }

        function cancelEditBanner() {
            document.getElementById('editBannerIndex').value = '-1';
            document.getElementById('newBannerLink').value = '';
            document.getElementById('newBannerImageFile').removeAttribute('data-base64');
            document.getElementById('bannerPreviewImg').style.display = 'none';
            document.getElementById('bannerFormHeader').innerText = '🖼️ لافتات إعلانية متحركة (اختياري)';
            document.getElementById('saveBannerBtn').innerHTML = 'إضافة لافتة <i class="fa fa-plus"></i>';
            document.getElementById('cancelBannerEditBtn').classList.add('hidden');
        }

        function deleteBanner(index) {
            if(!confirm('تأكيد حذف هذه اللافتة؟')) return;
            let merchant = localStorage.getItem('currentActiveMerchant');
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            stores[merchant].banners.splice(index, 1);
            if(!saveAllStores(stores)) return;
            loadDashboard();
        }

        // بيرسم عنوان قسم "التصنيفات" مع الأيقونة: إما إيموجي من القائمة الجاهزة، أو صورة
        // مخصصة رفعها التاجر من جهازه لو فضّلها بدل الإيموجي (بتاخد أولوية لو موجودة)
        function renderCategoriesTitle(store) {
            let catLabel = store.categoriesLabel || 'التصنيفات';
            // 🌐 لو التاجر سايب الاسم الافتراضي "التصنيفات" (ما غيّرهوش بإيده) نترجمه حسب لغة الزائر،
            // أما لو كتب اسم خاص (زي "الأقسام") فبنسيبه زي ما كتبه.
            if(catLabel === 'التصنيفات') catLabel = t('categories_title', '🗂️ التصنيفات').replace(/^\S+\s*/, '');
            let titleEl = document.getElementById('mainTitle');
            if(store.categoriesIconImage) {
                titleEl.innerHTML = `<img src="${store.categoriesIconImage}" style="width:22px; height:22px; object-fit:cover; border-radius:6px; vertical-align:-4px; margin-left:4px;">${catLabel}`;
            } else {
                let catIcon = store.categoriesIcon || '🗂️';
                titleEl.innerText = `${catIcon} ${catLabel}`;
            }
        }

        // --- 5. العرض في الرئيسية مع النجوم وعدد المراجعات ---
        function renderHome() {
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            let store = stores[activeStore];
            document.getElementById('trackOrderNavBtn').classList.toggle('hidden', !store);
            syncBuyerAccountIcon();
            if(!store || store.status === 'stopped') {
                document.getElementById('homeCategoriesGrid').innerHTML = '<p style="text-align:center; color:red; grid-column:span 2;">هذا المتجر موقوف حالياً.</p>';
                document.getElementById('amazonTopBarContainer').classList.add('hidden');
                document.getElementById('merchantBannerContainer').innerHTML = '';
                document.getElementById('footerSocialContainer').innerHTML = '';
                document.getElementById('merchantQuickAddCategoryBtn').classList.add('hidden');
                return;
            }
            applyStoreTheme(store);
            trackStoreVisit(activeStore, store, stores);
            updateHeaderBrand();
            // 🐛 خط دفاع إضافي لنفس إصلاح عداد السلة: renderHome() بتتنفذ عند أي دخول/تحديث
            // لصفحة متجر (رابط مباشر، رجوع للخلف، إلخ)، فاستدعاء العداد هنا كمان يضمن إنه
            // دايمًا متزامن مع المتجر المعروض فعليًا على الشاشة، مهما كان مصدر الدخول له.
            updateCartBadge();
            renderCategoriesTitle(store);
            renderCategoriesGrid(store.categories || []);
            renderShortcutsBar(store.shortcuts || []);
            renderMerchantBannerStrip(store.banners || []);
            renderFooterSocial(store);

            // زرار "إضافة قسم" السريع بيظهر بس لصاحب المتجر نفسه وهو واقف في صفحة الأقسام الرئيسية
            let isOwnerOnCatsPage = localStorage.getItem('currentActiveMerchant') === activeStore;
            document.getElementById('merchantQuickAddCategoryBtn').classList.toggle('hidden', !isOwnerOnCatsPage);
        }

        // --- دخول متجر تاجر معين من دليل المتاجر بالصفحة الرئيسية للمنصة ---
        // بيغيّر رابط الصفحة فعليًا لرابط المتجر الخاص به (?store=اسم_المتجر) عشان يبقى رابط
        // حقيقي قابل للمشاركة ومستقل، مش مجرد تنقل داخلي جوه نفس الرابط
        function enterStore(name) {
            activeStore = name;
            localStorage.setItem('currentActiveStore', name);
            localStorage.setItem('viewMode', 'store');
            // 🐛 إصلاح: الدالة دي كانت بتغيّر المتجر النشط من غير ما تحدّث عداد السلة في
            // الهيدر، فيفضل العداد شايل رقم المتجر اللي فات (مش فاضي زي ما المفروض) لحد ما
            // أي حدث تاني (إضافة/حذف منتج) يصادف يحصل ويحدّثه. updateCartBadge() بيفلتر
            // أصلاً حسب activeStore الحالي بس، فاستدعاؤه هنا كفاية يصلّح الرقم فورًا.
            updateCartBadge();
            syncBuyerAccountIcon();
            pushStoreUrl(name);
            switchTab('home');
        }

        // --- الرجوع من متجر تاجر معين لدليل المتاجر (الصفحة الرئيسية للمنصة) ---
        function exitToPlatformHome() {
            localStorage.setItem('viewMode', 'platform');
            pushPlatformUrl();
            switchTab('home');
        }

        // --- 5.ب العرض في الصفحة الرئيسية للمنصة نفسها: بلوك تسويقي + دليل كل المتاجر ---
        function renderPlatformHome() {
            renderHomeAdBanner();
            applyStoreTheme(null);

            let name = getPlatformDisplayName();
            let tagline = localStorage.getItem('platformTagline') || t('about_plat_default_tagline', 'ابدأ متجرك الإلكتروني الآن');
            let logo    = localStorage.getItem('platformLogo')    || '';
            document.getElementById('platformHeroName').textContent = name;
            document.getElementById('platformHeroTagline').textContent = tagline;

            let logoEl = document.getElementById('platformHeroLogo');
            let emojiEl = document.getElementById('platformHeroEmoji');
            if(logo) {
                logoEl.src = logo;
                logoEl.classList.remove('hidden');
                emojiEl.classList.add('hidden');
            } else {
                logoEl.classList.add('hidden');
                emojiEl.classList.remove('hidden');
            }

            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            // إحصائية "متجر نشط" في الهيرو بتحسب كل المتاجر المفعّلة (حتى لو الأدمن مخفيها من الدليل)
            let activeNames = Object.keys(stores).filter(n => stores[n].status !== 'stopped');
            let productCount = activeNames.reduce((acc, n) => acc + (stores[n].products || []).length, 0);
            let statsBox = document.getElementById('platformHeroStats');
            if(activeNames.length > 0) {
                statsBox.classList.remove('hidden');
                document.getElementById('platformHeroStoreCount').textContent = activeNames.length;
                document.getElementById('platformHeroProductCount').textContent = productCount;
            } else {
                statsBox.classList.add('hidden');
            }

            // دليل المتاجر نفسه: بيستبعد أي متجر وقّفه الأدمن من الظهور في الرئيسية تحديداً
            // (showOnHomepage) حتى لو المتجر نفسه لسه شغال وله رابطه الخاص
            let visibleInDirectory = activeNames.filter(n => stores[n].showOnHomepage !== false);

            // روابط تواصل المنصة (بيظهروا بس لو الأدمن فعلاً حطهم)
            let fb = localStorage.getItem('platformFacebook') || '';
            let ig = localStorage.getItem('platformInstagram') || '';
            let tw = localStorage.getItem('platformTwitter') || '';
            let tg = localStorage.getItem('platformTelegram') || '';
            let wa = localStorage.getItem('platformWhatsapp') || localStorage.getItem('platformContact') || '';
            let socialHtml = '';
            if(fb) socialHtml += `<a href="${fb}" target="_blank" style="color:#fff; font-size:18px;"><i class="fab fa-facebook"></i></a>`;
            if(ig) socialHtml += `<a href="${ig}" target="_blank" style="color:#fff; font-size:18px;"><i class="fab fa-instagram"></i></a>`;
            if(tw) socialHtml += `<a href="${tw}" target="_blank" style="color:#fff; font-size:18px;"><i class="fab fa-x-twitter"></i></a>`;
            if(tg) socialHtml += `<a href="https://t.me/${tg.replace(/^@/,'').replace(/^https?:\/\/t\.me\//i,'')}" target="_blank" style="color:#fff; font-size:18px;"><i class="fab fa-telegram"></i></a>`;
            if(wa) socialHtml += `<a href="https://wa.me/${wa.replace(/\D/g,'')}" target="_blank" style="color:#fff; font-size:18px;"><i class="fab fa-whatsapp"></i></a>`;
            document.getElementById('platformHeroSocial').innerHTML = socialHtml;

            // ✨ قسم "ليه تختارنا" — بيظهر بس لو الأدمن فعّله وحط فيه ميزة واحدة على الأقل
            let features = getPlatformFeatures();
            let featuresSection = document.getElementById('platformFeaturesSection');
            if(localStorage.getItem('platformShowFeatures') === 'true' && features.length > 0) {
                featuresSection.classList.remove('hidden');
                document.getElementById('platformFeaturesGrid').innerHTML = features.map(f => `
                    <div class="cat-card" style="padding:14px 10px; cursor:default;">
                        <div style="font-size:28px;">${f.icon}</div>
                        <h4 style="margin:8px 0 4px; font-size:13px;">${f.title}</h4>
                        ${f.text ? `<p style="font-size:11px; color:var(--text-muted); margin:0 0 8px;">${f.text}</p>` : ''}
                    </div>
                `).join('');
            } else {
                featuresSection.classList.add('hidden');
            }

            // 🚀 قسم "خطوات البدء" — بيظهر بس لو الأدمن فعّله وحط فيه خطوة واحدة على الأقل
            let steps = getPlatformSteps();
            let stepsSection = document.getElementById('platformStepsSection');
            if(localStorage.getItem('platformShowSteps') === 'true' && steps.length > 0) {
                stepsSection.classList.remove('hidden');
                document.getElementById('platformStepsGrid').innerHTML = steps.map((s, i) => `
                    <div class="box" style="display:flex; align-items:center; gap:12px; margin:0; padding:10px 14px;">
                        <div style="flex-shrink:0; width:32px; height:32px; border-radius:50%; background:var(--primary-color); color:#fff; display:flex; align-items:center; justify-content:center; font-weight:bold; font-size:14px;">${i + 1}</div>
                        <div>
                            <h4 style="margin:0 0 2px; font-size:13px;">${s.title}</h4>
                            ${s.text ? `<p style="font-size:11px; color:var(--text-muted); margin:0;">${s.text}</p>` : ''}
                        </div>
                    </div>
                `).join('');
            } else {
                stepsSection.classList.add('hidden');
            }

            let grid = document.getElementById('platformStoresGrid');
            let emptyMsg = document.getElementById('platformStoresEmptyMsg');
            let noMatchMsg = document.getElementById('platformStoresNoMatchMsg');
            document.getElementById('platformStoresSearchInput').value = '';
            noMatchMsg.classList.add('hidden');

            if(visibleInDirectory.length === 0) {
                grid.innerHTML = '';
                emptyMsg.classList.remove('hidden');
                return;
            }
            emptyMsg.classList.add('hidden');
            grid.innerHTML = visibleInDirectory.map(n => {
                let s = stores[n];
                let pCount = (s.products || []).length;
                let storeLogo = s.logo || 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400';
                let displayName = getStoreDisplayName(n, s);
                return `
                    <div class="cat-card" data-store-name="${displayName.toLowerCase()}" onclick="enterStore('${n}')">
                        <img src="${storeLogo}">
                        <h4>${displayName}</h4>
                        <p style="margin:-6px 0 10px; font-size:11px; color:var(--text-muted);">${pCount} منتج</p>
                    </div>
                `;
            }).join('');

            renderPlatformFooterSocial();
        }

        // --- أيقونات تواصل صغيرة أسفل الصفحة الرئيسية للمنصة (بنفس الشكل الأنيق المستخدم أسفل صفحات المتاجر) ---
        // بتظهر فقط لو الأدمن حط رابط تواصل واحد على الأقل من إعدادات "صفحة عن المنصة"، وغير كده بتختفي تلقائيًا.
        function renderPlatformFooterSocial() {
            let container = document.getElementById('platformFooterSocialContainer');
            if(!container) return;

            let fb = localStorage.getItem('platformFacebook') || '';
            let ig = localStorage.getItem('platformInstagram') || '';
            let tw = localStorage.getItem('platformTwitter') || '';
            let tg = localStorage.getItem('platformTelegram') || '';
            let wa = localStorage.getItem('platformWhatsapp') || localStorage.getItem('platformContact') || '';

            let icons = '';
            if(fb) icons += `<a href="${fb}" target="_blank" title="فيسبوك"><i class="fab fa-facebook"></i></a>`;
            if(ig) icons += `<a href="${ig}" target="_blank" title="انستقرام"><i class="fab fa-instagram"></i></a>`;
            if(tw) icons += `<a href="${tw}" target="_blank" title="تويتر / X"><i class="fab fa-x-twitter"></i></a>`;
            if(tg) icons += `<a href="https://t.me/${tg.replace(/^@/,'').replace(/^https?:\/\/t\.me\//i,'')}" target="_blank" title="تيليجرام"><i class="fab fa-telegram"></i></a>`;
            if(wa) icons += `<a href="https://wa.me/${wa.replace(/\D/g,'')}" target="_blank" title="واتساب"><i class="fab fa-whatsapp"></i></a>`;

            // 🐛 كان فيه باگ حقيقي هنا: لو الأدمن ما حطش ولا رابط تواصل اجتماعي واحد (مفيش
            // فيسبوك/انستقرام/تويتر/تيليجرام/واتساب)، الكود كان بيمسح الـcontainer بالكامل
            // ويرجع فورًا - يعني سطر الحقوق ورابط سياسة الخصوصية (اللي مش مرتبطين بالتواصل
            // الاجتماعي خالص) كانوا بيختفوا تمامًا من غير أي سبب واضح للأدمن. دلوقتي بيترسم
            // سطر الحقوق + سياسة الخصوصية دايمًا بغض النظر عن وجود أيقونات تواصل من عدمه.
            let platformName = getPlatformDisplayName();
            container.innerHTML = `
                ${icons ? `<div class="elegant-divider"><span>•</span></div><div class="social-footer-box">${icons}</div>` : ''}
                ${renderCopyrightLine(platformName, null)}
            `;
        }

        // --- سطر الحقوق (© سنة - اسم) في أسفل المنصة/المتجر: قابل للتحكم من الأدمن -
        // تفعيل/تعطيل بالكامل، تخصيص النص، واختيار يظهر في كل المتاجر مع المنصة، أو في
        // متجر واحد بعينه بس. السنة بتتحدث تلقائيًا كل سنة من غير ما حد يحتاج يعدلها يدويًا. ---
        // 👑 نظام حقوق النشر الديناميكي: كل متجر بيتحدد له نص تلقائيًا من اسمه + السنة
        // الحالية، بدل نص ثابت يدوي. فيه وضعين: combined (فيه اسم المتجر + "بدعم من" اسم
        // المنصة - ده المفروض على الباقات العادية) و store_only (اسم المتجر بس - مفتوح
        // بس لباقات الـwhite-label زي بريميوم). الأدمن يقدر يستثني أي متجر بعينه من غير
        // ما يغيّر باقته (override) أو يكتبله نص مخصص تمامًا.
        function getEffectiveCopyrightMode(store) {
            if(!store) return 'combined';
            let override = store.adminCopyrightOverride || 'inherit';
            if(override === 'custom' && store.adminCopyrightCustomText) return 'custom';
            if(override === 'combined' || override === 'store_only') return override;
            let plan = getPlanForStore(store);
            if(plan && plan.allowWhiteLabel && store.copyrightMode === 'store_only') return 'store_only';
            return 'combined';
        }
        function buildStoreCopyrightText(store, defaultName) {
            let year = new Date().getFullYear();
            let platformName = getPlatformDisplayName();
            // 🔗 اسم المنصة جوه سطر الحقوق بقى رابط فعلي يودي للصفحة الرئيسية للمنصة (مش
            // لمتجر هذا التاجر)، عشان زوار متاجر التجار يكتشفوا إنهم يقدروا يفتحوا متجرهم هم
            // كمان على نفس المنصة - وسيلة تسويق مجانية بسيطة لجذب تجار جداد.
            let platformLink = `<a href="#" onclick="exitToPlatformHome(); return false;" style="color:inherit; text-decoration:underline;">${platformName}</a>`;
            let mode = getEffectiveCopyrightMode(store);
            if(mode === 'custom') {
                return store.adminCopyrightCustomText.replace('{year}', year).replace('{name}', defaultName).replace('{platform}', platformLink);
            }
            if(mode === 'store_only') {
                return t('copyright_store_only_tpl', '© {year} {name}. جميع الحقوق محفوظة.').replace('{year}', year).replace('{name}', defaultName);
            }
            return t('copyright_combined_tpl', 'جميع الحقوق محفوظة لـ {name} © {year} | بدعم من {platform}').replace('{year}', year).replace('{name}', defaultName).replace('{platform}', platformLink);
        }
        function renderCopyrightLine(defaultName, storeKey) {
            let enabled = localStorage.getItem('footerCopyrightEnabled') !== 'false';
            // 🐛 كان هنا باگ ترجمة: النص كان Arabic ثابت جوه الـ template literal، وبرغم
            // وجود data-i18n، العنصر ده بيتعاد بناؤه من الصفر في كل مرة (innerHTML) بعد
            // تغيير اللغة - فمحتاج يتترجم وقت البناء نفسه عن طريق t()، مش يعتمد على إعادة
            // معالجة data-i18n لاحقًا (اللي ميحصلش تلقائيًا بعد إعادة البناء).
            let privacyLink = `<div style="text-align:center; margin-bottom:6px;"><a href="#" onclick="openPrivacyPolicyModal(event)" style="font-size:11px; color:var(--primary-color); text-decoration:underline;">${t('footer_privacy_link', '🔒 سياسة الخصوصية')}</a></div>`;
            if(!enabled) return privacyLink;
            let scope = localStorage.getItem('footerCopyrightScope') || 'all';
            if(scope !== 'all' && storeKey && scope !== storeKey) return privacyLink;
            if(scope !== 'all' && !storeKey) return privacyLink; // صفحة المنصة نفسها: يظهر رابط الخصوصية بس لو النطاق مش "الكل"
            let text;
            if(storeKey) {
                let stores = JSON.parse(localStorage.getItem('allStores')) || {};
                let store = stores[storeKey];
                text = store ? buildStoreCopyrightText(store, defaultName) : `© ${new Date().getFullYear()} ${defaultName}`;
            } else {
                // صفحة المنصة نفسها (مش داخل متجر معين): نص مخصص قديم لو موجود، وإلا نص تلقائي بسيط
                let customText = localStorage.getItem('footerCopyrightCustomText');
                let year = new Date().getFullYear();
                text = customText ? customText.replace('{year}', year).replace('{name}', defaultName) : `© ${year} ${defaultName}`;
            }
            return `<div style="text-align:center; font-size:11px; color: var(--text-muted); padding-bottom: 14px;">${text}${privacyLink}</div>`;
        }
        // 🔒/👑 التاجر بيختار وضع حقوق النشر بتاعه من لوحته - مفتوح بس لو باقته تسمح
        // بالـwhite-label، وغير كده الاختيار يظهر مقفول بشارة 👑 ولو ضغط عليه تظهر نافذة
        // توضح إنها ميزة احترافية.
        function updateMerchantCopyrightModeUI() {
            let merchant = localStorage.getItem('currentActiveMerchant');
            if(!merchant) return;
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            let store = stores[merchant];
            if(!store) return;
            let plan = getPlanForStore(store);
            let sel = document.getElementById('merchantCopyrightModeSelect');
            let lockBadge = document.getElementById('merchantCopyrightLockBadge');
            if(!sel) return;
            let allowed = !!(plan && plan.allowWhiteLabel);
            sel.disabled = !allowed;
            sel.value = (allowed && store.copyrightMode === 'store_only') ? 'store_only' : 'combined';
            if(lockBadge) lockBadge.classList.toggle('hidden', allowed);
        }
        function onMerchantCopyrightModeChange(selectEl) {
            let merchant = localStorage.getItem('currentActiveMerchant');
            if(!merchant) return;
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            let store = stores[merchant];
            if(!store) return;
            let plan = getPlanForStore(store);
            if(!plan || !plan.allowWhiteLabel) {
                selectEl.value = 'combined';
                showWhiteLabelUpgradeModal();
                return;
            }
            store.copyrightMode = selectEl.value;
            saveAllStores(stores);
            showToast('✅ ' + t('copyright_mode_saved', 'اتحفظ اختيارك لسطر الحقوق'));
        }
        function showWhiteLabelUpgradeModal() {
            alert('👑 ' + t('whitelabel_upgrade_msg', 'هذه الميزة متاحة فقط لمشتركي الباقات العالية، قم بترقية باقتك الآن لتتمكن من إزالة اسم المنصة.'));
        }
        // 🔎 بحث شامل في كل لوحة الإدارة (مش بند واحد بس): بيدوّر جوه كل الأقسام
        // (details.dash-accordion) الموجودة تحت الـ scope (لوحة التاجر أو لوحة الأدمن)،
        // ويفلتر فعليًا زي بحث إعدادات الهاتف - بيخفي تمامًا أي قسم مالوش ولا نتيجة واحدة،
        // ويسيب ظاهر وبيفتح أوتوماتيك بس الأقسام اللي فيها نتيجة، مع تظليل أماكن التطابق.
        function searchInSettings(query, scopeId) {
            scopeId = scopeId || 'dashboardSection';
            let scopeRoot = document.getElementById(scopeId);
            if(!scopeRoot) return;
            let countEl = document.getElementById(scopeId === 'adminSection' ? 'adminSettingsSearchCount' : 'settingsSearchCount');
            let allAccordions = scopeRoot.querySelectorAll('details.dash-accordion');
            // 🔘 أزرار الوصول السريع (زي "المنتجات" و"الأقسام") مش جوه أكورديون، فلازم
            // نتعامل معاها بشكل منفصل عشان تدخل هي كمان في نطاق الفلترة الحقيقي.
            let allQuickBtns = scopeRoot.querySelectorAll('.dash-quick-btn');

            // --- تصفير أي فلترة/تظليل سابق قبل كل بحث جديد ---
            allAccordions.forEach(function(acc){ acc.style.display = ''; });
            allQuickBtns.forEach(function(btn){ btn.style.display = ''; });
            scopeRoot.querySelectorAll('.settings-search-match').forEach(function(el){ el.classList.remove('settings-search-match'); });

            query = (query || '').trim().toLowerCase();
            // لو الاستعلام قصير جدًا (حرف واحد)، النتايج بتكون كتير جدًا ومش مفيدة (زي أي
            // بحث حقيقي) - فبنرجّع الحالة الطبيعية (كل الأقسام ظاهرة) ونستنى حرفين كحد أدنى.
            if(query.length < 2) {
                if(countEl) countEl.classList.add('hidden');
                return;
            }

            let totalMatches = 0;
            let firstMatchEl = null;
            allAccordions.forEach(function(acc){
                let candidates = acc.querySelectorAll('label, h4, h3, summary, p, legend, button, span[data-i18n]');
                let accHasMatch = false;
                candidates.forEach(function(el){
                    // عناصر جوه أكورديون متداخل (accordion جوه accordion) هنعالجها لوحدها لما نوصلها
                    if(el.closest('.rich-toolbar-mount, .rich-toolbar')) return;
                    let txt = (el.textContent || '').replace(/\s+/g,' ').trim();
                    let low = txt.toLowerCase();
                    if(txt && txt.length < 250 && low.includes(query)) {
                        el.classList.add('settings-search-match');
                        accHasMatch = true;
                        totalMatches++;
                        if(!firstMatchEl) firstMatchEl = el;
                    }
                });
                if(accHasMatch) {
                    acc.style.display = '';
                    acc.open = true;
                } else {
                    acc.style.display = 'none';
                }
            });

            allQuickBtns.forEach(function(btn){
                let txt = (btn.textContent || '').replace(/\s+/g,' ').trim();
                let low = txt.toLowerCase();
                if(txt && low.includes(query)) {
                    btn.classList.add('settings-search-match');
                    btn.style.display = '';
                    totalMatches++;
                    if(!firstMatchEl) firstMatchEl = btn;
                } else {
                    btn.style.display = 'none';
                }
            });

            if(countEl) {
                if(totalMatches > 0) {
                    countEl.textContent = totalMatches + ' ' + t('settings_search_found', 'نتيجة');
                    countEl.classList.remove('hidden');
                    if(firstMatchEl) {
                        setTimeout(function(){ firstMatchEl.scrollIntoView({behavior:'smooth', block:'center'}); }, 60);
                    }
                } else {
                    countEl.textContent = t('settings_search_none', 'لا نتائج');
                    countEl.classList.remove('hidden');
                }
            }
        }
        // 🛠️ الأدمن بيقدر يستثني أي متجر بعينه من قيد الباقة (يدّيله store_only أو نص
        // مخصص تمامًا) حتى لو كان على باقة مجانية، من صفحة تعديل المتجر في لوحة الأدمن.
        function saveAdminCopyrightOverride(storeName) {
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            if(!stores[storeName]) return;
            let mode = document.getElementById('adminCopyrightOverrideSelect_' + storeName).value;
            stores[storeName].adminCopyrightOverride = mode;
            if(mode === 'custom') {
                stores[storeName].adminCopyrightCustomText = document.getElementById('adminCopyrightCustomText_' + storeName).value.trim();
            }
            saveAllStores(stores);
            showToast('✅ ' + t('copyright_override_saved', 'اتحفظ استثناء حقوق النشر لهذا المتجر'));
        }
        function openPrivacyPolicyModal(evt) {
            if(evt) evt.preventDefault();
            let lang = (typeof currentAppLanguage !== 'undefined' && currentAppLanguage) || localStorage.getItem('appLanguage') || 'ar';
            let byLang = {};
            try { byLang = JSON.parse(localStorage.getItem('privacyPolicyTextByLang')) || {}; } catch(e) {}
            let customText = byLang[lang];
            if(customText === undefined) {
                // لا يوجد نص مخصص بهذه اللغة بعينها: نرجع للنص القديم (المحفوظ بالعربي قبل دعم تعدد اللغات) فقط لو اللغة الحالية عربي
                customText = (lang === 'ar') ? localStorage.getItem('privacyPolicyText') : '';
            }
            if(customText && customText.trim()) {
                // 🖋️ النص المخصص دلوقتي محفوظ كـ HTML منسّق (من محرر النص الغني)، فبنعرضه
                // زي ما هو (بعد تنقية أمان sanitizeRichHtml وقت الحفظ بالفعل).
                document.getElementById('privacyPolicyContent').innerHTML = customText;
            } else {
                document.getElementById('privacyPolicyContent').innerText = t('privacy_policy_content', DEFAULT_PRIVACY_POLICY_AR);
            }
            document.getElementById('privacyPolicyModal').classList.remove('hidden');
        }

        // --- فلترة دليل المتاجر بالاسم من مربع البحث في الصفحة الرئيسية للمنصة ---
        function filterPlatformStores(query) {
            query = query.trim().toLowerCase();
            let cards = document.querySelectorAll('#platformStoresGrid .cat-card');
            let anyVisible = false;
            cards.forEach(card => {
                let match = card.getAttribute('data-store-name').includes(query);
                card.style.display = match ? '' : 'none';
                if(match) anyVisible = true;
            });
            document.getElementById('platformStoresNoMatchMsg').classList.toggle('hidden', anyVisible || cards.length === 0);
        }

        // --- شريط الاختصارات العلوي (يظهر فقط إذا أضافه التاجر) ---
        function renderShortcutsBar(shortcuts) {
            let container = document.getElementById('amazonTopBarContainer');
            if(!shortcuts || shortcuts.length === 0) { container.classList.add('hidden'); container.innerHTML = ''; return; }
            container.classList.remove('hidden');
            container.innerHTML = shortcuts.map(s => `
                <div class="amazon-shortcut-item" onclick="${s.link ? `window.open('${s.link}', '_blank')` : ''}">
                    <img src="${s.image}">
                    <span>${s.name}</span>
                </div>
            `).join('');
        }

        // --- شريط اللافتات: عرض شرائح حقيقي (صورة واحدة كاملة، تنتقل للتي بعدها تلقائياً) ---
        let bannerSlideInterval = null;
        function renderMerchantBannerStrip(banners) {
            let container = document.getElementById('merchantBannerContainer');
            if(bannerSlideInterval) { clearInterval(bannerSlideInterval); bannerSlideInterval = null; }
            if(!banners || banners.length === 0) { container.innerHTML = ''; return; }

            container.innerHTML = `
                <div class="banner-slideshow" id="bannerSlideshow">
                    ${banners.map((b, i) => `
                        <div class="banner-slide ${i === 0 ? 'active' : ''}" style="background-image:url('${b.image}');${b.link ? 'cursor:pointer;' : ''}" ${b.link ? `onclick="window.open('${b.link}','_blank')"` : ''}>
                            <img src="${b.image}">
                        </div>
                    `).join('')}
                </div>
                ${banners.length > 1 ? `<div class="banner-dots">${banners.map((_, i) => `<span class="banner-dot ${i === 0 ? 'active' : ''}"></span>`).join('')}</div>` : ''}
            `;

            if(banners.length > 1) {
                let current = 0;
                bannerSlideInterval = setInterval(() => {
                    let slides = document.querySelectorAll('#bannerSlideshow .banner-slide');
                    let dots = document.querySelectorAll('.banner-dot');
                    if(!slides.length) return;
                    slides[current].classList.remove('active');
                    if(dots[current]) dots[current].classList.remove('active');
                    current = (current + 1) % banners.length;
                    slides[current].classList.add('active');
                    if(dots[current]) dots[current].classList.add('active');
                }, 3500);
            }
        }

        // --- أيقونات التواصل الاجتماعي أسفل الصفحة (لا تظهر إذا لم تُضَف) ---
        function renderFooterSocial(store) {
            let social = store.socialLinks || {};
            let icons = '';
            if(social.facebook) icons += `<a href="${social.facebook}" target="_blank" title="فيسبوك"><i class="fab fa-facebook"></i></a>`;
            if(social.instagram) icons += `<a href="${social.instagram}" target="_blank" title="انستقرام"><i class="fab fa-instagram"></i></a>`;
            if(social.youtube) icons += `<a href="${social.youtube}" target="_blank" title="يوتيوب"><i class="fab fa-youtube"></i></a>`;
            if(social.tiktok) icons += `<a href="${social.tiktok}" target="_blank" title="تيك توك"><i class="fab fa-tiktok"></i></a>`;
            if(social.twitter) icons += `<a href="${social.twitter}" target="_blank" title="تويتر / X"><i class="fab fa-x-twitter"></i></a>`;
            if(store.whatsapp) icons += `<a href="https://wa.me/${store.whatsapp}" target="_blank" title="واتساب"><i class="fab fa-whatsapp"></i></a>`;
            if(social.callPhone) icons += `<a href="tel:+${social.callPhone}" title="اتصال مباشر"><i class="fa fa-phone-alt"></i></a>`;

            let container = document.getElementById('footerSocialContainer');
            if(!container) return;
            // 🐛 نفس الباگ بالظبط: لو المتجر مفيش عليه ولا رابط تواصل اجتماعي، سطر الحقوق
            // وسياسة الخصوصية كانوا بيختفوا من صفحة المتجر بالكامل. دلوقتي بيفضلوا ظاهرين دايمًا.
            container.innerHTML = `
                ${icons ? `<div class="elegant-divider"><span>•</span></div><div class="social-footer-box">${icons}</div><div class="elegant-divider"><span>•</span></div>` : ''}
                ${renderCopyrightLine(getStoreDisplayName(activeStore, store), activeStore)}
            `;
        }

        // --- صفحة "تعرّف علينا" — تفتح كصفحة كاملة داخل التطبيق ---
        // --- صفحة "من نحن" الخاصة بمتجر معيّن: نص وصورة يتحكم بهما صاحب المتجر نفسه فقط ---
        function openStoreAboutModal() {
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            let store = stores[activeStore] || {};
            let hasAbout = !!(store.aboutUs && store.aboutUs.trim());
            let about = hasAbout ? store.aboutUs : t('about_us_empty_default', 'لم يقم صاحب المتجر بإضافة نبذة تعريفية بعد.');
            let aboutStyle = store.aboutUsStyle || { color: '#5a5248', fontSize: '15px', bold: false, underline: false };
            let aboutStyleAttr = hasAbout ? getAboutStyleAttr(aboutStyle) : 'color:var(--text-muted); font-size:13px; font-style:italic;';
            let image = store.aboutImage || store.logo || '';
            let storeName = getStoreDisplayName(activeStore, store);

            document.getElementById('platformAboutModalInner').innerHTML = `
                <!-- ===== هيدر صفحة "من نحن": شعار المتجر + اسمه فوق تدرج لوني مميز ===== -->
                <div style="background: linear-gradient(135deg, var(--primary-color), var(--accent-color)); padding:34px 20px 40px; text-align:center; color:#fff; position:relative; overflow:hidden;">
                    <div style="position:absolute; inset:0; background:radial-gradient(circle at 15% 20%, rgba(255,255,255,0.18) 0, transparent 45%), radial-gradient(circle at 85% 85%, rgba(255,255,255,0.14) 0, transparent 50%); pointer-events:none;"></div>
                    <button onclick="closeAboutUsModal()" style="position:absolute; top:12px; right:14px; background:rgba(255,255,255,0.25); border:none; border-radius:50%; width:32px; height:32px; color:#fff; font-size:18px; cursor:pointer; z-index:1;">←</button>
                    <div style="position:relative; z-index:1;">
                        ${image ? `<img src="${image}" style="width:78px; height:78px; border-radius:50%; object-fit:cover; border:3px solid rgba(255,255,255,0.75); box-shadow:0 6px 18px rgba(0,0,0,0.18); margin-bottom:10px;">` : `<div style="font-size:44px; margin-bottom:8px;">🏪</div>`}
                        <h2 style="margin:0 0 4px; color:#fff; font-size:19px;">${storeName}</h2>
                        <div style="font-size:11.5px; color:rgba(255,255,255,0.85); display:flex; align-items:center; justify-content:center; gap:5px;"><i class="fa fa-circle-info"></i> <span data-i18n="set_about_h">نبذة عن المتجر</span></div>
                    </div>
                    <!-- موجة خفيفة تفصل الهيدر عن باقي الصفحة -->
                    <svg viewBox="0 0 500 24" preserveAspectRatio="none" style="position:absolute; bottom:-1px; right:0; width:100%; height:22px; display:block;"><path d="M0,10 C125,26 375,-6 500,10 L500,24 L0,24 Z" fill="var(--bg-body, #f5f1eb)"></path></svg>
                </div>

                <div style="padding:16px 16px 22px;">
                    <!-- ===== بطاقة "نبذة عن المتجر" بالتنسيق اللي حدده التاجر (لون/حجم/عريض/تسطير) ===== -->
                    <div style="background:#fff; border:1px solid var(--border-color); border-radius:16px; padding:16px 16px 14px; box-shadow:0 2px 10px rgba(0,0,0,0.04); position:relative;">
                        <div style="position:absolute; top:-11px; right:16px; background:var(--primary-color); color:#fff; font-size:11px; font-weight:bold; padding:4px 12px; border-radius:20px; display:flex; align-items:center; gap:4px; box-shadow:0 2px 6px rgba(0,0,0,0.15);"><i class="fa fa-store"></i> <span data-i18n="set_about_h">من نحن</span></div>
                        <div style="margin-top:8px; ${aboutStyleAttr}">${escapeHtml(about)}</div>
                    </div>

                    ${(() => {
                        let howToShop = (store.howToShopText && store.howToShopText.trim()) ? store.howToShopText : t('how_to_shop_default_text', DEFAULT_HOW_TO_SHOP_AR);
                        let shopTitleText = t('how_to_shop_title', 'إزاي تشتري من {store}؟').replace('{store}', storeName);
                        return `
                        <details id="howToShopDetails" style="margin-top:16px; background:linear-gradient(180deg,#eff6ff,#e0eefe); border:1px solid #93c5fd; border-radius:16px; overflow:hidden; box-shadow:0 2px 10px rgba(37,99,235,0.08);">
                            <summary style="cursor:pointer; padding:15px 16px; display:flex; align-items:center; gap:10px; list-style:none; user-select:none;">
                                <span style="font-size:20px; background:#fff; width:38px; height:38px; border-radius:50%; display:flex; align-items:center; justify-content:center; box-shadow:0 2px 6px rgba(37,99,235,0.15); flex-shrink:0;">🛒</span>
                                <span style="flex:1; font-size:14.5px; font-weight:bold; color:#1e3a8a;">${escapeHtml(shopTitleText)}</span>
                                <i id="howToShopChevron" class="fa fa-chevron-down" style="color:#1e40af; font-size:13px; transition:transform 0.25s;"></i>
                            </summary>
                            <div style="padding:2px 16px 18px;">
                                <div style="height:1px; background:rgba(37,99,235,0.18); margin-bottom:14px;"></div>
                                <div style="font-size:13.5px; color:#1e3a8a; line-height:2; white-space:pre-wrap;">${howToShop}</div>
                            </div>
                        </details>`;
                    })()}
                </div>
            `;

            // 🔄 تدوير سهم "التفاصيل" لما القسم يتفتح/يتقفل
            let detailsEl = document.getElementById('howToShopDetails');
            if(detailsEl) {
                detailsEl.addEventListener('toggle', () => {
                    let chevron = document.getElementById('howToShopChevron');
                    if(chevron) chevron.style.transform = detailsEl.open ? 'rotate(180deg)' : 'rotate(0deg)';
                });
            }

            const sectionIds = ['platformHomeSection','homeSection','authSection','dashboardSection','adminSection','cartSection','productModal','deliveryModal','aboutUsModal','orderConfirmModal','directOrderSuccessModal','returnPolicyModal', 'storeCustomCodeModal', 'usageGuideModal', 'storeColorsModal', 'editAdminPermsModal', 'productsModal', 'categoriesModal'];
            sectionIds.forEach(id => { let el = document.getElementById(id); if(el) el.classList.add('hidden'); });
            document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
            document.getElementById('aboutUsModal').classList.remove('hidden');
        }

        function openPlatformAboutModal() {
            let name = getPlatformDisplayName();
            let tagline = localStorage.getItem('platformTagline') || 'ابدأ متجرك الإلكتروني الآن';
            let about   = localStorage.getItem('platformAboutText') || t('about_plat_default_about', 'منصة سهلة وسريعة تتيح لأي تاجر إنشاء متجره الإلكتروني في دقائق، والاستقبال الفوري للطلبات عبر واتساب وماسنجر.');
            let contact = localStorage.getItem('platformWhatsapp') || localStorage.getItem('platformContact') || '';
            let logo    = localStorage.getItem('platformLogo') || '';
            let nameColor = localStorage.getItem('platformNameColor') || '#6d4c41';
            let fb = localStorage.getItem('platformFacebook') || '';
            let ig = localStorage.getItem('platformInstagram') || '';
            let tw = localStorage.getItem('platformTwitter') || '';

            // إحصائيات حية من البيانات الفعلية
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            let storeCount = Object.keys(stores).length;
            let productCount = Object.values(stores).reduce((acc, s) => acc + (s.products || []).length, 0);

            // تحويل نص الميزات لبطاقات: كل سطر يبدأ بـ ✅ أو - أو * يصبح بطاقة
            let featuresHtml = '';
            let lines = about.split('\n');
            let descLines = [];
            lines.forEach(line => {
                line = line.trim();
                if(!line) return;
                if(/^[✅✔️⭐🔥💡🎯🚀•\-\*]/.test(line)) {
                    featuresHtml += `<div style="display:flex; align-items:flex-start; gap:10px; background:#fff; border:1px solid var(--border-color); border-radius:10px; padding:12px; margin-bottom:8px;">
                        <span style="font-size:20px; flex-shrink:0;">${line.charAt(0)}</span>
                        <span style="font-size:13px; line-height:1.6;">${line.slice(1).trim()}</span>
                    </div>`;
                } else {
                    descLines.push(line);
                }
            });

            document.getElementById('platformAboutModalInner').innerHTML = `
                <div style="background: linear-gradient(135deg, var(--primary-color) 0%, var(--accent-color) 100%); padding:36px 20px 28px; text-align:center; color:#fff; position:relative;">
                    <button onclick="closeAboutUsModal()" style="position:absolute; top:12px; right:14px; background:rgba(255,255,255,0.25); border:none; border-radius:50%; width:32px; height:32px; color:#fff; font-size:18px; cursor:pointer;">←</button>
                    ${logo ? `<img src="${logo}" style="width:64px; height:64px; border-radius:50%; object-fit:cover; border:3px solid rgba(255,255,255,0.6); margin-bottom:10px;">` : `<div style="font-size:52px; margin-bottom:10px;">🛍️</div>`}
                    <h1 style="margin:0 0 8px; font-size:26px; color:#fff;">${name}</h1>
                    <p style="margin:0; font-size:14px; opacity:0.9; font-weight:500;">${tagline}</p>
                </div>

                ${storeCount > 0 ? `
                <div style="display:flex; justify-content:center; gap:20px; padding:16px 20px; background:#fff; border-bottom:1px solid var(--border-color);">
                    <div style="text-align:center;">
                        <div style="font-size:22px; font-weight:bold; color:${nameColor};">${storeCount}+</div>
                        <div style="font-size:11px; color:var(--text-muted);">${t('ph_stat_stores', 'متجر نشط')}</div>
                    </div>
                    <div style="width:1px; background:var(--border-color);"></div>
                    <div style="text-align:center;">
                        <div style="font-size:22px; font-weight:bold; color:${nameColor};">${productCount}+</div>
                        <div style="font-size:11px; color:var(--text-muted);">${t('ph_stat_products', 'منتج مسجّل')}</div>
                    </div>
                </div>` : ''}

                <div style="padding:20px;">
                    ${descLines.length ? `<p style="font-size:14px; line-height:1.9; color:var(--text-main); margin:0 0 16px;">${descLines.join('<br>')}</p>` : ''}

                    ${featuresHtml ? `<h3 style="font-size:15px; margin:0 0 12px; color:${nameColor};">${t('about_plat_why', '✨ لماذا تختارنا؟')}</h3>${featuresHtml}` : ''}

                    ${(getPlatformGuideItems().length > 0 && localStorage.getItem('showGuideInAboutStore') === 'true') ? `
                    <div onclick="openUsageGuideModal()" style="margin-top:16px; cursor:pointer; background: linear-gradient(135deg, #eff6ff, #dbeafe); border:1px solid #93c5fd; border-radius:14px; padding:16px; display:flex; align-items:center; gap:14px;">
                        <div style="width:46px; height:46px; border-radius:12px; background:#3b82f6; color:#fff; display:flex; align-items:center; justify-content:center; font-size:20px; flex-shrink:0;"><i class="fa fa-book"></i></div>
                        <div style="flex:1;">
                            <h3 style="margin:0 0 3px; font-size:14.5px; color:#1e40af;">${t('dash_guide_title', 'دليل الاستخدام')}</h3>
                            <p style="margin:0; font-size:12px; color:#1e3a8a; opacity:0.85;">${t('dash_guide_desc', 'محتاج تعرف إزاي تدير متجرك؟ اضغط هنا')}</p>
                        </div>
                        <i class="fa fa-chevron-left" style="color:#3b82f6;"></i>
                    </div>` : ''}

                    <div style="margin-top:20px; background: linear-gradient(135deg, #f0fdf4, #dcfce7); border:1px solid #86efac; border-radius:14px; padding:18px; text-align:center;">
                        <h3 style="margin:0 0 8px; font-size:16px; color:#166534;"><i class="fa fa-bolt"></i> ${t('about_plat_trial_title', 'ابدأ تجربتك المجانية الآن')}</h3>
                        <p style="margin:0 0 14px; font-size:13px; color:#15803d;">${t('about_plat_trial_desc', 'سجّل متجرك مجاناً وابدأ البيع في أقل من 5 دقائق')}</p>
                        <button onclick="closeAboutUsModal(); switchTab('auth');" style="background:#16a34a; width:auto; padding:12px 28px; font-size:14px; font-weight:bold;">${t('about_plat_create_btn', 'إنشاء متجرك الآن')} <i class='fa fa-arrow-left'></i></button>
                    </div>

                    ${getPlatformGuideItems().length > 0 ? `
                    <div onclick="openUsageGuideModal()" style="margin-top:16px; cursor:pointer; background: linear-gradient(135deg, #eff6ff, #dbeafe); border:1px solid #93c5fd; border-radius:14px; padding:16px; display:flex; align-items:center; gap:14px;">
                        <div style="width:46px; height:46px; border-radius:12px; background:#3b82f6; color:#fff; display:flex; align-items:center; justify-content:center; font-size:20px; flex-shrink:0;"><i class="fa fa-book"></i></div>
                        <div style="flex:1;">
                            <h3 style="margin:0 0 3px; font-size:14.5px; color:#1e40af;">${t('dash_guide_title', 'دليل الاستخدام')}</h3>
                            <p style="margin:0; font-size:11px; color:#1e3a8a; opacity:0.85;">${t('dash_guide_desc', 'محتاج تعرف إزاي تدير متجرك؟ اضغط هنا')}</p>
                        </div>
                        <i class="fa fa-chevron-left" style="color:#3b82f6;"></i>
                    </div>` : ''}

                    ${(contact || fb || ig || tw) ? `
                    <div style="margin-top:16px; background:#fff; border:1px solid var(--border-color); border-radius:12px; padding:16px; text-align:center;">
                        <p style="margin:0 0 10px; font-size:13px; color:var(--text-muted);">${t('about_plat_contact', '📞 للتواصل والاستفسار')}</p>
                        <div style="display:flex; justify-content:center; gap:10px; flex-wrap:wrap;">
                            ${contact ? `<a href="https://wa.me/${contact.replace(/\D/g,'')}" target="_blank" style="display:inline-block; background:#25d366; color:#fff; padding:10px 18px; border-radius:10px; text-decoration:none; font-size:13px; font-weight:bold;"><i class="fab fa-whatsapp"></i> WhatsApp</a>` : ''}
                            ${fb ? `<a href="${fb}" target="_blank" style="display:inline-block; background:#1877f2; color:#fff; padding:10px 18px; border-radius:10px; text-decoration:none; font-size:13px; font-weight:bold;"><i class="fab fa-facebook"></i> Facebook</a>` : ''}
                            ${ig ? `<a href="${ig}" target="_blank" style="display:inline-block; background:#e1306c; color:#fff; padding:10px 18px; border-radius:10px; text-decoration:none; font-size:13px; font-weight:bold;"><i class="fab fa-instagram"></i> Instagram</a>` : ''}
                            ${tw ? `<a href="${tw}" target="_blank" style="display:inline-block; background:#000; color:#fff; padding:10px 18px; border-radius:10px; text-decoration:none; font-size:13px; font-weight:bold;"><i class="fab fa-x-twitter"></i> X</a>` : ''}
                        </div>
                    </div>` : ''}
                </div>
            `;

            // فتح الصفحة زي أي تاب تاني
            const sectionIds = ['platformHomeSection','homeSection','authSection','dashboardSection','adminSection','cartSection','productModal','deliveryModal','aboutUsModal','orderConfirmModal','directOrderSuccessModal','returnPolicyModal', 'storeCustomCodeModal', 'usageGuideModal', 'storeColorsModal', 'editAdminPermsModal', 'productsModal', 'categoriesModal'];
            sectionIds.forEach(id => { let el = document.getElementById(id); if(el) el.classList.add('hidden'); });
            document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
            document.getElementById('aboutUsModal').classList.remove('hidden');
            // ⚠️ المحتوى فوق اتحط عن طريق innerHTML بعد ما applyDataI18n خلصت شغلها على الصفحة
            // من الأول، فأي data-i18n جوه المحتوى ده (زي "نبذة عن المتجر") كانت بتفضل عربي
            // ثابت مهما كانت لغة الزائر. بنعيد تطبيق الترجمة هنا فورًا على المحتوى الجديد.
            try { applyDataI18n(currentAppLanguage); } catch(e) {}
        }

        // الدالة القديمة للتوافق
        function openAboutModal() { openPlatformAboutModal(); }

        function closeAboutUsModal() {
            switchTab('home');
        }

        // --- حفظ إعدادات المنصة من الأدمن ---
        // =====================================================================
        // ✨ إدارة قسم "ليه تختارنا" و🚀 "خطوات البدء" في الصفحة الرئيسية للمنصة
        // نفس منطق إدارة الأقسام (addCategory/editCategory/deleteCategory) بالظبط،
        // كل عنصر اختياري بالكامل والأدمن حر يضيف/يعدّل/يحذف أي عدد يحبه.
        // =====================================================================
        function getPlatformFeatures() { return JSON.parse(localStorage.getItem('platformFeatures') || '[]'); }
        function savePlatformFeatures(list) { localStorage.setItem('platformFeatures', JSON.stringify(list)); }

        function renderPlatformFeaturesAdminList() {
            let list = getPlatformFeatures();
            let box = document.getElementById('platformFeaturesAdminList');
            box.innerHTML = list.length === 0 ? `<p style="font-size:12px; color:var(--text-muted);">${t('features_none_yet', 'لسه مفيش ميزات مضافة.')}</p>` : '';
            list.forEach((f, index) => {
                box.innerHTML += `
                    <div class="manage-row">
                        <span>${f.icon} <strong>${f.title}</strong>${f.text ? ' - ' + f.text : ''}</span>
                        <div>
                            <button class="edit" onclick="editPlatformFeature(${index})"><i class="fa fa-edit"></i></button>
                            <button class="danger edit" onclick="deletePlatformFeature(${index})"><i class="fa fa-trash"></i></button>
                        </div>
                    </div>
                `;
            });
        }

        function addPlatformFeature() {
            let title = document.getElementById('newFeatureTitle').value.trim();
            if(!title) { alert('اكتب عنوان الميزة!'); return; }
            let icon = document.getElementById('newFeatureIcon').value;
            let text = document.getElementById('newFeatureText').value.trim();
            let editIndex = document.getElementById('editFeatureIndex').value;
            let list = getPlatformFeatures();
            if(editIndex === "-1") {
                list.push({ icon, title, text });
            } else {
                list[editIndex] = { icon, title, text };
            }
            savePlatformFeatures(list);
            cancelEditPlatformFeature();
            renderPlatformFeaturesAdminList();
            renderPlatformHome();
        }

        function editPlatformFeature(index) {
            let f = getPlatformFeatures()[index];
            document.getElementById('editFeatureIndex').value = index;
            document.getElementById('newFeatureIcon').value = f.icon;
            document.getElementById('newFeatureTitle').value = f.title;
            document.getElementById('newFeatureText').value = f.text || '';
            document.getElementById('saveFeatureBtn').innerHTML = 'حفظ التعديل <i class="fa fa-save"></i>';
            document.getElementById('cancelFeatureEditBtn').classList.remove('hidden');
        }

        function cancelEditPlatformFeature() {
            document.getElementById('editFeatureIndex').value = '-1';
            document.getElementById('newFeatureIcon').selectedIndex = 0;
            document.getElementById('newFeatureTitle').value = '';
            document.getElementById('newFeatureText').value = '';
            document.getElementById('saveFeatureBtn').innerHTML = 'إضافة ميزة <i class="fa fa-plus"></i>';
            document.getElementById('cancelFeatureEditBtn').classList.add('hidden');
        }

        function deletePlatformFeature(index) {
            if(!confirm('تأكيد حذف الميزة دي؟')) return;
            let list = getPlatformFeatures();
            list.splice(index, 1);
            savePlatformFeatures(list);
            renderPlatformFeaturesAdminList();
            renderPlatformHome();
        }

        function getPlatformSteps() { return JSON.parse(localStorage.getItem('platformSteps') || '[]'); }
        function savePlatformSteps(list) { localStorage.setItem('platformSteps', JSON.stringify(list)); }

        function renderPlatformStepsAdminList() {
            let list = getPlatformSteps();
            let box = document.getElementById('platformStepsAdminList');
            box.innerHTML = list.length === 0 ? `<p style="font-size:12px; color:var(--text-muted);">${t('steps_none_yet', 'لسه مفيش خطوات مضافة.')}</p>` : '';
            list.forEach((s, index) => {
                box.innerHTML += `
                    <div class="manage-row">
                        <span><strong>${index + 1}. ${s.title}</strong>${s.text ? ' - ' + s.text : ''}</span>
                        <div>
                            <button class="edit" onclick="editPlatformStep(${index})"><i class="fa fa-edit"></i></button>
                            <button class="danger edit" onclick="deletePlatformStep(${index})"><i class="fa fa-trash"></i></button>
                        </div>
                    </div>
                `;
            });
        }

        function addPlatformStep() {
            let title = document.getElementById('newStepTitle').value.trim();
            if(!title) { alert('اكتب عنوان الخطوة!'); return; }
            let text = document.getElementById('newStepText').value.trim();
            let editIndex = document.getElementById('editStepIndex').value;
            let list = getPlatformSteps();
            if(editIndex === "-1") {
                list.push({ title, text });
            } else {
                list[editIndex] = { title, text };
            }
            savePlatformSteps(list);
            cancelEditPlatformStep();
            renderPlatformStepsAdminList();
            renderPlatformHome();
        }

        function editPlatformStep(index) {
            let s = getPlatformSteps()[index];
            document.getElementById('editStepIndex').value = index;
            document.getElementById('newStepTitle').value = s.title;
            document.getElementById('newStepText').value = s.text || '';
            document.getElementById('saveStepBtn').innerHTML = 'حفظ التعديل <i class="fa fa-save"></i>';
            document.getElementById('cancelStepEditBtn').classList.remove('hidden');
        }

        function cancelEditPlatformStep() {
            document.getElementById('editStepIndex').value = '-1';
            document.getElementById('newStepTitle').value = '';
            document.getElementById('newStepText').value = '';
            document.getElementById('saveStepBtn').innerHTML = 'إضافة خطوة <i class="fa fa-plus"></i>';
            document.getElementById('cancelStepEditBtn').classList.add('hidden');
        }

        function deletePlatformStep(index) {
            if(!confirm('تأكيد حذف الخطوة دي؟')) return;
            let list = getPlatformSteps();
            list.splice(index, 1);
            savePlatformSteps(list);
            renderPlatformStepsAdminList();
            renderPlatformHome();
        }

        function savePlatformAbout() {
            localStorage.setItem('platformName',      document.getElementById('platformNameInput').value.trim());
            localStorage.setItem('platformNameColor', document.getElementById('platformNameColorInput').value);
            localStorage.setItem('platformTagline',   document.getElementById('platformTaglineInput').value.trim());
            localStorage.setItem('platformAboutText', document.getElementById('platformAboutTextInput').value.trim());
            localStorage.setItem('platformContact',   document.getElementById('platformContactInput').value.trim());
            localStorage.setItem('platformFacebook',  document.getElementById('platformFacebookInput').value.trim());
            localStorage.setItem('platformInstagram', document.getElementById('platformInstagramInput').value.trim());
            localStorage.setItem('platformTwitter',   document.getElementById('platformTwitterInput').value.trim());
            localStorage.setItem('platformWhatsapp',  document.getElementById('platformWhatsappInput').value.trim());
            localStorage.setItem('platformTelegram',  document.getElementById('platformTelegramInput').value.trim());

            let logoData = document.getElementById('platformLogoFile').getAttribute('data-base64');
            if(logoData) localStorage.setItem('platformLogo', logoData);

            showToast('✅ تم حفظ معلومات المنصة بنجاح');
            renderPlatformFooterSocial();
        }

        // ============================================================
        // 📘 دليل استخدام المتجر: بنود (عنوان + محتوى) يكتبهم الأدمن بنفسه، بيظهروا للتاجر
        // كصفحة مستقلة قابلة للطي (accordion) بدل ما يكون رابط خارجي.
        // ============================================================
        // ============================================================
        // 🗂️ الأكورديونات (الأجزاء القابلة للطي) في أي لوحة بقت "حصرية":
        // فتح جزء واحد (زي "المنتجات" أو "الأقسام") بيقفل تلقائيًا باقي
        // الأجزاء المجاورة له في نفس اللوحة. كده التاجر وهو بيضيف منتج أو
        // قسم بيشوف الجزء ده بس قدامه، من غير ما بقية إعدادات المتجر
        // (سجل الطلبات، إعدادات المتجر العامة...) تفضل ظاهرة معاه وترهقه.
        // ============================================================
        function setupExclusiveAccordions() {
            document.querySelectorAll('.dash-accordion').forEach(det => {
                det.addEventListener('toggle', function() {
                    if(!det.open) return;
                    if(det.id === 'storeStaffAccordion') markStaffActivityLogRead();
                    let parent = det.parentElement;
                    if(!parent) return;
                    Array.from(parent.children).forEach(sib => {
                        if(sib !== det && sib.classList && sib.classList.contains('dash-accordion')) sib.open = false;
                    });
                });
            });
        }

        // فتح جزء معيّن في اللوحة برمجيًا (من زرار "إضافة سريعة" مثلاً) مع قفل باقي
        // الأجزاء المجاورة له فورًا، بنفس منطق setupExclusiveAccordions بالظبط.
        function openAccordionExclusive(id) {
            let det = document.getElementById(id);
            if(!det) return;
            let parent = det.parentElement;
            if(parent) {
                Array.from(parent.children).forEach(sib => {
                    if(sib !== det && sib.classList && sib.classList.contains('dash-accordion')) sib.open = false;
                });
            }
            det.open = true;
        }

        // ============================================================
        // 📦 المنتجات و 📂 الأقسام بقى ليهم شاشة مستقلة بالكامل (مودال) لما التاجر
        // يضغط زرارهم، بدل ما يكونوا جزء من سكرول اللوحة العادي. كده وهو بيضيف
        // منتج أو قسم، مش شايف حاجة تانية من اللوحة خالص إلا لما يقفل الشاشة دي بنفسه.
        // ============================================================
        function openProductsModal() {
            // 🛡️ نعيد ملء قائمة الأقسام هنا كمان (مش بس عند فتح اللوحة أول مرة)، عشان لو
            // لأي سبب القائمة فضلت فاضية (مثلاً حصل خطأ في قسم سابق وقف التحديث)، دايمًا
            // تتظبط لحظة ما التاجر يفتح شاشة "إضافة منتج" فعليًا.
            let merchant = localStorage.getItem('currentActiveMerchant');
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            if(stores[merchant]) {
                try { renderDashboardCategories(stores[merchant].categories || []); } catch(e) { console.error('openProductsModal: renderDashboardCategories error:', e); }
            }
            document.getElementById('productsModal').classList.remove('hidden');
        }
        function closeProductsModal() {
            document.getElementById('productsModal').classList.add('hidden');
            returnFromQuickNavIfNeeded();
        }
        function openCategoriesModal() {
            let merchant = localStorage.getItem('currentActiveMerchant');
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            if(stores[merchant]) {
                try { renderDashboardCategories(stores[merchant].categories || []); } catch(e) { console.error('openCategoriesModal: renderDashboardCategories error:', e); }
            }
            document.getElementById('categoriesModal').classList.remove('hidden');
        }
        function closeCategoriesModal() {
            document.getElementById('categoriesModal').classList.add('hidden');
            returnFromQuickNavIfNeeded();
        }

        // ============================================================
        // 👥 صلاحيات مساعدي المتجر (يحددها صاحب المتجر نفسه لكل مساعد لوحده):
        // نظام منفصل تمامًا عن صلاحيات مشرفي المنصة (اللي بيديرهم الأدمن) - ده خاص
        // بموظفي/مساعدين التاجر نفسه جوه متجره بس.
        // ============================================================
        const STORE_STAFF_PERMISSIONS_LIST = [
            { key: 'viewOrders',      labelKey: 'perm_viewOrders',       label: '📋 عرض سجل الطلبات ومتابعة الأوردرات بالرقم' },
            { key: 'updateOrders',    labelKey: 'perm_updateOrders',     label: '✅ تحديث حالة الطلب (تم التسليم / ملغي)' },
            { key: 'deleteOrders',    labelKey: 'perm_deleteOrders',     label: '🗑️ حذف الطلبات من السجل نهائيًا' },
            { key: 'manageProducts',  labelKey: 'perm_manageProducts',   label: '📦 إضافة وتعديل وحذف المنتجات' },
            { key: 'manageCategories',labelKey: 'perm_manageCategories', label: '📂 إضافة وتعديل وحذف الأقسام' },
            { key: 'viewProfitReport',labelKey: 'perm_viewProfitReport', label: '💰 الاطلاع على تقرير الأرباح (بيانات حساسة)' },
            { key: 'manageSettings',  labelKey: 'perm_manageSettings',   label: '🏪 تعديل إعدادات المتجر العامة' },
            { key: 'manageShortcutsBanners', labelKey: 'perm_manageShortcutsBanners', label: '⭐ إدارة الأيقونات المختصرة واللافتات الإعلانية' },
            { key: 'manageDelivery',  labelKey: 'perm_manageDelivery',   label: '🚚 تعديل إعدادات وسعر التوصيل' },
            { key: 'viewVisitorStats',labelKey: 'perm_viewVisitorStats', label: '📈 الاطلاع على إحصائيات الزوار' },
            { key: 'manageBestsellers', labelKey: 'perm_manageBestsellers', label: '🏆 التحكم في شارة "الأكثر مبيعًا"' },
        ];

        // هل المستخدم الحالي (لو داخل كمساعد) عنده صلاحية معينة؟ صاحب المتجر نفسه
        // (مش مساعد) عنده كل الصلاحيات دايمًا بدون أي قيود.
        function currentStaffHasPermission(key) {
            let staffUsername = localStorage.getItem('currentStaffUsername');
            if(!staffUsername) return true; // صاحب المتجر نفسه داخل، مش مساعد
            let merchant = localStorage.getItem('currentActiveMerchant');
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            let store = stores[merchant];
            if(!store) return false;
            let staff = (store.staff || []).find(s => s.username === staffUsername);
            return !!(staff && staff.permissions && staff.permissions[key]);
        }

        function isCurrentUserStaff() {
            return !!localStorage.getItem('currentStaffUsername');
        }

        function getPlatformGuideItems() {
            try { return JSON.parse(localStorage.getItem('platformGuideItems') || '[]'); }
            catch(e) { return []; }
        }

        // ============================================================
        // 📚 دليل استخدام افتراضي جاهز يظهر لكل تاجر من أول لحظة (بدون ما الأدمن
        // يحتاج يكتب حاجة بنفسه). مقسّم جزء جزء بحيث كل بند مستقل وقابل للطي،
        // ومفيش فيه أي صور مرفوعة (base64) خالص — بس إيموجي وأيقونات — عشان
        // يفضل الدليل خفيف جدًا وميأثرش على سرعة تحميل المتجر ولا حجمه.
        // الأدمن يقدر يعدّل أو يحذف أي بند منه أو يضيف بنود جديدة وقت ما يحب
        // من "لوحة الإدارة ← صفحة عن المنصة ← دليل استخدام المتجر".
        // بيتنفذ مرة واحدة بس (أول ما حد يفتح المنصة)، ومش بيعيد نفسه لو الأدمن
        // مسح البنود بعد كده قصدًا.
        // ============================================================
        function seedDefaultUsageGuide() {
            if(localStorage.getItem('platformGuideItems') !== null) return; // اتعمل قبل كده، سيبه زي ما الأدمن سايبه

            let items = [
                {
                    id: 'g_start', title: '📌 أول خطوة: تعرّف على لوحتك',
                    content: 'لوحة متجرك مقسّمة لأجزاء صغيرة، كل جزء مسؤول عن حاجة واحدة بس:\n\n📋 سجل الطلبات — تشوف فيه طلبات عملائك أول بأول.\n📦 المنتجات — شاشة مستقلة لإضافة وتعديل منتجاتك.\n📂 الأقسام — شاشة مستقلة لتنظيم منتجاتك في تصنيفات.\n🏪 إدارة المتجر — بيانات التواصل والتوصيل والمظهر.\n\nالمنتجات والأقسام ليهم زرار مخصص بيفتحلك شاشة كاملة لإضافتهم لوحدهم، من غير ما تشوف بقية إعدادات المتجر معاهم في نفس الوقت.',
                    image: ''
                },
                {
                    id: 'g_addprod', title: '📦 إزاي تضيف منتج جديد؟',
                    content: 'اضغط على زرار "📦 المنتجات" في لوحتك، هتفتحلك شاشة مستقلة فيها فورم إضافة منتج جاهز:\n\n1️⃣ اختار القسم اللي المنتج ده تابع له.\n2️⃣ اكتب اسم المنتج والسعر.\n3️⃣ ارفع صورة رئيسية (وصور إضافية للمعرض لو حابب).\n4️⃣ اكتب وصف بسيط يوضح مميزاته.\n5️⃣ اضغط "نشر المنتج" وخلاص، هيظهر لعملائك فورًا.\n\nكل الحقول التانية (الخصم، المخزون، العداد الزمني...) اختيارية بالكامل، سيبها فاضية لو مش محتاجها دلوقتي.',
                    image: ''
                },
                {
                    id: 'g_addcat', title: '📂 إزاي تضيف أو تعدّل قسم؟',
                    content: 'اضغط على زرار "📂 الأقسام" في لوحتك (جنب المنتجات مباشرة)، هتفتحلك شاشة مستقلة:\n\n1️⃣ اكتب اسم القسم (مثلاً: عروض، ملابس رجالي، الأكثر مبيعًا).\n2️⃣ اختار صورة بسيطة تمثّله.\n3️⃣ اضغط "إضافة القسم".\n\nكل أقسامك بتظهر تحت الفورم في شكل مربعات صغيرة، وبجانب كل قسم أيقونتين صغيرتين: ✏️ للتعديل و 🗑️ للحذف — اضغط عليهم براحتك في أي وقت.',
                    image: ''
                },
                {
                    id: 'g_banners', title: '🖼️ إزاي تعمل لافتة إعلانية متحركة لمتجرك؟',
                    content: 'من جزء "🏪 إدارة المتجر والإعدادات"، تحت "اللافتات الإعلانية"، تقدر تضيف لافتة أو أكتر (صورة + رابط اختياري) تظهر أعلى صفحة متجرك في شريط متحرك تلقائيًا (زي عروض اليوم أو تخفيضات موسمية). لو ضفت أكتر من لافتة، بيتبادلوا الظهور لوحدهم من غير أي تدخل منك، وتقدر تحذف أو تعدّل أي لافتة وقت ما تحب.',
                    image: ''
                },
                {
                    id: 'g_shortcuts', title: '⭐ إزاي تضيف أيقونات مختصرة أعلى متجرك؟',
                    content: 'من جزء "🏪 إدارة المتجر والإعدادات"، تحت "أيقونات مختصرة أعلى المتجر"، تقدر تضيف أيقونات صغيرة (زي "عرض اليوم"، "الأكثر مبيعًا"، "تواصل معنا") بحيث يضغط عليها العميل فيروح على الحتة اللي انت حددتها له مباشرة (قسم معين، رابط واتساب، أو رابط خارجي). دي وسيلة سريعة توجّه بيها عملاءك لأهم حاجة عندك من غير ما يدوروا عليها بنفسهم.',
                    image: ''
                },
                {
                    id: 'g_colors', title: '🎨 إزاي تغيّر شكل وألوان متجرك؟',
                    content: 'من جزء "🏪 إدارة المتجر والإعدادات"، هتلاقي بند "🎨 تصميم وألوان متجرك" — لو باقتك بتسمح بالميزة دي، اضغط "اختار ألوان متجرك" وهتلاقي تشكيلات جاهزة تجربها بضغطة واحدة (اللون الأساسي، الخلفية، النصوص...)، أو تحدد كل لون بنفسك بالكامل. التغيير يظهر فورًا لعملائك بمجرد الحفظ، من غير ما يأثر على أي متجر تاني على المنصة.\n\nلو باقتك الحالية مش بتشمل الميزة دي، هتلاقي رسالة توضح كده وتقدر تتواصل مع إدارة المنصة للترقية.',
                    image: ''
                },
                {
                    id: 'g_discount', title: '🏷️ إزاي تعمل خصم على منتج؟',
                    content: 'وانت بتضيف أو بتعدّل أي منتج، هتلاقي جزء صغير اسمه "خصم على المنتج":\n\n1️⃣ اكتب نسبة الخصم (مثلاً 20 يعني 20%).\n2️⃣ اختار لون شارة الخصم اللي هتظهر على المنتج.\n\nالسعر بعد الخصم هيتحسب ويتظهر لعميلك تلقائيًا في كل مكان (الكارت، صفحة التفاصيل، والسلة) من غير أي خطوة إضافية منك.',
                    image: ''
                },
                {
                    id: 'g_stock', title: '📊 إزاي تتابع المخزون المتاح؟',
                    content: 'ده اختياري بالكامل، وموجود جوه فورم كل منتج تحت "إدارة المخزون":\n\n• اكتب الكمية المتاحة حاليًا.\n• فعّل تنبيه لما الكمية توصل لرقم معين (مخزون منخفض).\n• اختياريًا اظهر الكمية المتبقية للعميل ("متبقي 3 قطع بس").\n\nالكمية بتقل تلقائيًا لما تحدد أي طلب فيه المنتج ده بـ "✅ تم التسليم" من سجل الطلبات.',
                    image: ''
                },
                {
                    id: 'g_countdown', title: '⏳ إزاي تعمل عداد تنازلي لعرض؟',
                    content: 'مفيد جدًا للعروض المحدودة بوقت. جواه فورم المنتج، فعّل خانة "عداد تنازلي لعرض بوقت محدد"، وحدد إمتى العرض هينتهي بالظبط. العداد هيظهر على كارت المنتج ويختفي تلقائيًا لوحده لما الوقت يخلص، من غير ما تحتاج ترجع تعدّل حاجة بنفسك.',
                    image: ''
                },
                {
                    id: 'g_delivery', title: '🚚 إزاي تظبط سعر التوصيل؟',
                    content: 'من جزء "🏪 إدارة المتجر والإعدادات"، تحت "إعدادات التوصيل":\n\n• حدد سعر التوصيل الثابت (أو سيبه فاضي لو العميل هيستلم من عندك مباشرة).\n• حدد حد أدنى للطلب يخلي التوصيل مجاني لو حابب.\n\nالأرقام دي بتتحسب فعليًا جوه سلة العميل أول ما يختار "توصيل"، مش مجرد رقم شكلي.',
                    image: ''
                },
                {
                    id: 'g_orders', title: '💬 إزاي توصلك طلبات العملاء؟',
                    content: 'العميل بيضغط "إتمام الطلب" وبيتفتحله واتساب (أو ماسنجر/تيليجرام حسب اللي فعّلته) برسالة جاهزة فيها كل تفاصيل طلبه، وانت ترد عليه من هناك مباشرة.\n\n📞 خانة رقم الهاتف اختيارية بشكل افتراضي (كتير من العملاء بيحبوا الطلب السريع)، وتقدر تغيّر ده من "إدارة المتجر والإعدادات" لتبقى إجبارية أو تختفي خالص، حسب اللي يناسبك.\n\n⚠️ مهم: مهما كانت الرسالة اللي وصلتك، الأرقام والأسعار الرسمية الموثوقة دايمًا موجودة في "📋 سجل الطلبات" بلوحتك، مش في الرسالة نفسها (لأن العميل نظريًا يقدر يعدّلها قبل الإرسال من جهازه).',
                    image: ''
                },
                {
                    id: 'g_profit', title: '💰 إزاي تشوف تقرير أرباحك؟',
                    content: 'افتح جزء "📊 تقرير الأرباح والمبيعات" في لوحتك. لو حددت "سعر التكلفة" وانت بتضيف كل منتج (اختياري وسرّي، بيظهر لك بس)، هيحسبلك صافي ربحك الحقيقي مش بس إجمالي المبيعات — فرق كبير لما تيجي تقيّم تجارتك صح.',
                    image: ''
                },
                {
                    id: 'g_social', title: '🔗 إزاي تضيف روابط السوشيال ميديا بتاعتك؟',
                    content: 'من جزء "🏪 إدارة المتجر والإعدادات"، تحت "روابط التواصل الاجتماعي"، حط روابط الفيسبوك والانستقرام واليوتيوب والتيك توك وتويتر ورقم الاتصال المباشر بتاعتك. أي رابط تسيبه فاضي هيختفي تلقائيًا من متجرك، مفيش حاجة فاضية أو مكسورة تظهر لعميلك.',
                    image: ''
                },
                {
                    id: 'g_about', title: 'ℹ️ إزاي تكتب "عن متجرك" وسياسة الإرجاع؟',
                    content: 'من نفس جزء "🏪 إدارة المتجر والإعدادات":\n\n• "من نحن" — اكتب نبذة عن نشاطك تظهر لعميلك لما يضغط زرار "عن المتجر".\n• "سياسة الإرجاع" — اكتب شروط استرجاع منتجاتك، وهتظهر تلقائيًا في صفحة تفاصيل أي منتج.\n\nالمحتوى ده خاص بمتجرك أنت بس، ومش بيتشارك مع أي متجر تاني على المنصة.',
                    image: ''
                },
                {
                    id: 'g_staff', title: '👥 إزاي تضيف مساعدين لمتجرك؟',
                    content: 'من بند "👥 مساعدو المتجر" المستقل في لوحتك (تحت "سجل الطلبات" و"إدارة المتجر والإعدادات" مباشرة):\n\n1️⃣ اكتب اسم دخول وكلمة مرور خاصة بالمساعد (مختلفة تمامًا عن بياناتك أنت).\n2️⃣ حدد بالظبط إيه اللي يقدر يعمله (يشوف الطلبات، يحدّث حالتها، يضيف منتجات، يشوف تقرير الأرباح...).\n3️⃣ ابعت لمساعدك رابط متجرك العادي (نفس الرابط اللي عملاءك بيستخدموه - مش رابط سري منفصل)، وقوله يضغط أيقونة 👤 فوق الصفحة عشان يسجل دخوله ببياناته. لو حاول يدخل من الصفحة الرئيسية العامة للمنصة مش من رابط متجرك، الدخول هيترفض.\n\nالمساعد هيشوف لوحتك أنت بالظبط، لكن هيلاقي بس الأجزاء اللي انت سمحتله بيها. تقدر تعدّل صلاحياته أو تحذفه وقت ما تحب، وهو مش هيقدر يضيف مساعد تاني أو يغيّر صلاحيات نفسه. أما انت (أو أي شريك ليك) فتدخلوا من رابط متجركم أو من الصفحة الرئيسية للمنصة، مفيش فرق.\n\n📜 وكل تعديل يعمله أي مساعد (منتج، طلب، إعدادات) بيتسجل فورًا في "سجل نشاط المساعدين" في نفس القسم، ومهما كان مشغول هيشوف علامة 🔴 وعداد على عنوان القسم لحد ما يفتحه ويطّلع عليه. تقدر تتحكم في مدة الاحتفاظ بالسجل من دقايق لأيام.',
                    image: ''
                },
                {
                    id: 'g_coowners', title: '🤝 المتجر مملوك لأكتر من شخص/شركة؟',
                    content: 'المساعدين بيقدروا يشتغلوا في متجرك بصلاحيات محدودة تحددها انت، لكن لو المتجر أصلاً مملوك لأكتر من تاجر (شركة أو شراكة بينكم) وعاوزين كل واحد يدخل ببياناته الخاصة ويدير المتجر بالكامل بنفس صلاحياتك أنت، ده مختلف عن المساعدين وبيتم فقط عن طريق إدارة المنصة.\n\nكل اللي عليك: تواصل مع الإدارة واطلب إضافة "تاجر شريك" على متجرك، وهما هيضيفولك بيانات دخول مستقلة لشريكك (اسم دخول وكلمة سر خاصة بيه، منفصلة تمامًا عن بياناتك)، وهو هيقدر يدخل ويدير المتجر بالكامل زيك بالظبط.',
                    image: ''
                },
                {
                    id: 'g_plans', title: '🏷️ باقات الاشتراك - إيه اللي بياخده متجري؟',
                    content: 'المنصة فيها أكتر من باقة اشتراك (زي مجانية، أساسي، متقدم، بريميوم)، وكل باقة ليها حدود مختلفة:\n\n📦 عدد المنتجات اللي تقدر تضيفها.\n💾 مساحة التخزين المتاحة لصور منتجاتك.\n👥 عدد المساعدين اللي تقدر تضيفهم لمتجرك.\n🎨 هل متاح تخصيص ألوان متجرك أو لأ.\n🖼️ هل متاح إضافة لافتات إعلانية متحركة أو لأ.\n\nتقدر تشوف باقتك الحالية وحدودها واستخدامك الفعلي منها في بند "🏷️ الاشتراك والباقات" المستقل بلوحتك. لو حبيت تترقّى لباقة أعلى، تواصل مع إدارة المنصة.',
                    image: ''
                },
                {
                    id: 'g_qr', title: '📱 إزاي أعمل QR كود لمتجري؟',
                    content: 'من بند "👥 مساعدو المتجر" في لوحتك، جنب رابط متجرك هتلاقي أيقونة QR — اضغط عليها وهيظهرلك كود QR جاهز لمتجرك، وتقدر تنزّله كصورة وتطبعه على المنيو أو الفاتورة أو فيتيرينة محلك. أي عميل يمسحه بكاميرة موبايله هيدخل متجرك فورًا من غير ما يكتب أي رابط بنفسه.',
                    image: ''
                },
                {
                    id: 'g_payment', title: '💳 إزاي أضيف رابط دفع أونلاين لمتجري؟',
                    content: 'من جزء "🏪 إدارة المتجر والإعدادات"، هتلاقي بند "💳 رابط الدفع الأونلاين" — حط فيه رابط دفعك الجاهز (Instapay، فودافون كاش، فوري، أو أي رابط دفع تاني عندك)، وهيظهر تلقائيًا لعميلك كخيار دفع مباشر بعد ما يأكد طلبه، غير طريقة "الدفع عند الاستلام" العادية. سيبه فاضي لو مش عايز الميزة دي، هتختفي تلقائيًا.',
                    image: ''
                },
                {
                    id: 'g_pwa', title: '📲 تقدر تثبّت متجرك كتطبيق على موبايلك',
                    content: 'متجرك (ومتاجر عملاءك) تقدروا تثبّتوه على شاشة الموبايل الرئيسية زي أي تطبيق حقيقي، وبعد كده يفتح بسرعة من غير ما تحتاجوا تفتحوا المتصفح كل مرة. لو ظهرت أيقونة ⬇️ في شريط الأيقونات فوق الصفحة، اضغط عليها وثبّت المتجر بضغطة واحدة.',
                    image: ''
                },
            ];

            localStorage.setItem('platformGuideItems', JSON.stringify(items));
        }

        function renderPlatformGuideItemsList() {
            let box = document.getElementById('platformGuideItemsList');
            if(!box) return;
            let checkbox = document.getElementById('showGuideInAboutStoreCheckbox');
            if(checkbox) checkbox.checked = localStorage.getItem('showGuideInAboutStore') === 'true';
            let items = getPlatformGuideItems();
            if(items.length === 0) {
                box.innerHTML = '<p style="font-size:12px; color:var(--text-muted);">لا توجد بنود مضافة بعد.</p>';
                return;
            }
            box.innerHTML = items.map(it => `
                <div class="manage-row">
                    <div style="display:flex; align-items:center; gap:8px;">
                        ${it.image ? `<img src="${it.image}" style="width:34px; height:34px; border-radius:6px; object-fit:cover;">` : ''}
                        <strong>${it.title}</strong>
                    </div>
                    <div style="display:flex; gap:4px;">
                        <button class="edit" onclick="editGuideItem('${it.id}')"><i class="fa fa-edit"></i></button>
                        <button class="danger edit" onclick="deleteGuideItem('${it.id}')"><i class="fa fa-trash"></i></button>
                    </div>
                </div>
            `).join('');
        }

        function saveGuideItem() {
            let title = document.getElementById('guideItemTitleInput').value.trim();
            let content = document.getElementById('guideItemContentInput').value.trim();
            if(!title || !content) { alert('اكتب عنوان البند ومحتواه.'); return; }
            let items = getPlatformGuideItems();
            let editId = document.getElementById('guideItemEditId').value;
            let imageData = document.getElementById('guideItemImageFile').getAttribute('data-base64');
            if(editId) {
                let it = items.find(i => i.id === editId);
                if(it) {
                    it.title = title; it.content = content;
                    if(imageData === '__REMOVE__') it.image = '';
                    else if(imageData) it.image = imageData;
                }
            } else {
                items.push({ id: 'g' + Date.now(), title, content, image: (imageData && imageData !== '__REMOVE__') ? imageData : '' });
            }
            localStorage.setItem('platformGuideItems', JSON.stringify(items));
            renderPlatformGuideItemsList();
            cancelGuideItemEdit();
            showToast('✅ تم حفظ البند.');
        }

        function editGuideItem(id) {
            let it = getPlatformGuideItems().find(i => i.id === id);
            if(!it) return;
            document.getElementById('guideItemEditId').value = it.id;
            document.getElementById('guideItemTitleInput').value = it.title;
            document.getElementById('guideItemContentInput').value = it.content;
            document.getElementById('guideItemImageFile').removeAttribute('data-base64');
            document.getElementById('guideItemImageFile').value = '';
            let preview = document.getElementById('guideItemImagePreview');
            if(it.image) { preview.src = it.image; preview.style.display = 'block'; }
            else { preview.style.display = 'none'; preview.removeAttribute('src'); }
            document.getElementById('cancelGuideItemEditBtn').classList.remove('hidden');
        }

        // لو التاجر (الأدمن هنا) عايز يشيل الصورة من البند وهو بيعدّل، بنعلّم عليها إشارة حذف
        // صريحة (__REMOVE__) عشان لما يحفظ، نعرف إننا نمسح الصورة القديمة مش نسيبها زي ما هي
        function removeGuideItemImage() {
            document.getElementById('guideItemImageFile').setAttribute('data-base64', '__REMOVE__');
            document.getElementById('guideItemImageFile').value = '';
            let preview = document.getElementById('guideItemImagePreview');
            preview.style.display = 'none';
            preview.removeAttribute('src');
        }

        function cancelGuideItemEdit() {
            document.getElementById('guideItemEditId').value = '';
            document.getElementById('guideItemTitleInput').value = '';
            document.getElementById('guideItemContentInput').value = '';
            document.getElementById('guideItemImageFile').value = '';
            document.getElementById('guideItemImageFile').removeAttribute('data-base64');
            let preview = document.getElementById('guideItemImagePreview');
            preview.style.display = 'none';
            preview.removeAttribute('src');
            document.getElementById('cancelGuideItemEditBtn').classList.add('hidden');
        }

        function deleteGuideItem(id) {
            if(!confirm('متأكد إنك عايز تحذف البند ده؟')) return;
            let items = getPlatformGuideItems().filter(i => i.id !== id);
            localStorage.setItem('platformGuideItems', JSON.stringify(items));
            renderPlatformGuideItemsList();
        }

        // --- فتح صفحة "دليل الاستخدام" المستقلة: قائمة بنود قابلة للطي، كل بند تضغط عليه يفتح محتواه ---
        function openUsageGuideModal() {
            let items = getPlatformGuideItems();
            let body = document.getElementById('usageGuideModalBody');
            if(items.length === 0) {
                body.innerHTML = '<p style="text-align:center; color:var(--text-muted); font-size:13px;">لا يوجد دليل استخدام مُضاف حتى الآن.</p>';
            } else {
                body.innerHTML = `
                    <p style="font-size:12.5px; color:var(--text-muted); text-align:center; margin:0 0 14px;">📖 ${items.length} ${t('guide_items_count_label', 'جزء')} — ${t('guide_tap_hint', 'اضغط على أي عنوان عشان تشوف تفاصيله، وارجع اقفله تاني براحتك.')}</p>
                ` + items.map((it, i) => {
                    // 🌍 لو البند ده من البنود الافتراضية الجاهزة (ليها id ثابت زي g_start)، بنجيب
                    // عنوانه ومحتواه من نظام الترجمة حسب لغة الواجهة الحالية. لو الأدمن ضاف بند
                    // مخصص بنفسه (مفهوش id متعرف عليه)، بيفضل زي ما كتبه بالظبط أيًا كانت اللغة،
                    // لأنه محتوى مكتوب يدويًا مش نص جاهز في النظام.
                    let titleKey = it.id ? `guide_${it.id}_title` : null;
                    let contentKey = it.id ? `guide_${it.id}_content` : null;
                    let title = titleKey ? t(titleKey, it.title) : it.title;
                    let content = contentKey ? t(contentKey, it.content) : it.content;
                    return `
                    <details class="dash-accordion" style="margin-bottom:8px;">
                        <summary><span>${title}</span></summary>
                        <div class="box">
                            ${it.image ? `<img src="${it.image}" style="width:100%; border-radius:10px; margin-bottom:10px; object-fit:cover; max-height:220px;">` : ''}
                            <div style="white-space:pre-wrap; font-size:13px; line-height:1.9; color:var(--text-main);">${content}</div>
                        </div>
                    </details>
                `;}).join('');
            }
            document.getElementById('usageGuideModal').classList.remove('hidden');
        }

        function closeUsageGuideModal() {
            document.getElementById('usageGuideModal').classList.add('hidden');
        }

        // --- حفظ الأكواد المخصصة (CSS / HTML / JS) وتطبيقها فورًا بدون الحاجة لإعادة تحميل الصفحة ---
        // =====================================================================
        // 🧩 نظام "الأكواد المخصصة" (CSS / HTML / JavaScript) - نسخة تدعم عدد غير
        // محدود من الأكواد، كل واحد باسمه ونوعه، وقابل للتفعيل/التعطيل/التعديل/الحذف
        // بشكل مستقل. نفس المنطق مستخدم مرتين: مرة على مستوى المنصة كلها (الأدمن)،
        // ومرة على مستوى متجر واحد بعينه - كل واحدة ليها تخزين منفصل (namespace مختلف)
        // عشان محدش يأثر على التاني، لكن بيشتركوا في نفس دوال الحقن والعرض تجنبًا للتكرار.
        // =====================================================================

        function generateSnippetId() { return 'snip_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7); }

        function escapeHtml(str) {
            return String(str == null ? '' : str).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
        }

        // بينسخ أي عنصر HTML بعمق (مش بس المستوى الأول)، وبيستبدل أي وسم سكريبت متداخل - حتى لو
        // جوه عناصر تانية زي (div يحتوي على script جواه) - بعنصر سكريبت جديد
        // مُنشأ فعليًا بالجافاسكريبت، لأن أي وسم سكريبت بينضاف عن طريق innerHTML/cloneNode
        // العادي بيفضل "خامل" ومايتنفذش أبدًا فعليًا - وده بالظبط سبب مشكلة "كود الـHTML/JS
        // مابيشتغلش" (كان الـCSS شغال لأنه مش محتاج تنفيذ زي الـJS، بس يتطبق كتنسيق مباشرة).
        function cloneWithExecutableScripts(sourceNode, targetParent) {
            Array.from(sourceNode.childNodes).forEach(node => {
                if(node.nodeType === 1 && node.tagName === 'SCRIPT') {
                    let s = document.createElement('script');
                    Array.from(node.attributes).forEach(attr => s.setAttribute(attr.name, attr.value));
                    s.textContent = node.textContent;
                    targetParent.appendChild(s);
                } else if(node.nodeType === 1) {
                    let clone = node.cloneNode(false);
                    targetParent.appendChild(clone);
                    cloneWithExecutableScripts(node, clone); // نكرر بعمق عشان أي سكريبت متداخل جوه عناصر تانية يتنفذ برضو
                } else {
                    targetParent.appendChild(node.cloneNode(true));
                }
            });
        }

        // بيحقن مجموعة أكواد (snippets) في الصفحة تحت "مساحة اسم" (namespace) معينة، وبيشيل
        // أي حقن قديم بنفس المساحة الأول عشان مايتكررش. أكواد الـHTML/JS بتتحقن في نهاية
        // الـ body (مش في head مخفي) عشان أي عنصر مرئي (ودجت، بانر، زرار شات...) يظهر فعلاً
        // للزوار، مش يفضل مخفي زي ما كان بيحصل قبل كده.
        function injectSnippets(snippets, namespace) {
            try {
                document.querySelectorAll(`[data-snippet-ns="${namespace}"]`).forEach(el => el.remove());
                (snippets || []).forEach(snip => {
                    if(!snip.enabled) return;
                    if(snip.type === 'css') {
                        let styleTag = document.createElement('style');
                        styleTag.setAttribute('data-snippet-ns', namespace);
                        styleTag.setAttribute('data-snippet-id', snip.id);
                        styleTag.textContent = snip.content;
                        document.head.appendChild(styleTag);
                    } else {
                        if(snip.type === 'js' && !/<script/i.test(snip.content)) snip = Object.assign({}, snip, { content: '<script>' + snip.content + '<\/script>' });
                        let container = document.createElement('div');
                        container.setAttribute('data-snippet-ns', namespace);
                        container.setAttribute('data-snippet-id', snip.id);
                        let temp = document.createElement('div');
                        temp.innerHTML = snip.content;
                        cloneWithExecutableScripts(temp, container);
                        document.body.appendChild(container);
                    }
                });
            } catch(e) {
                console.error('تعذر تطبيق الأكواد المخصصة (' + namespace + '):', e);
            }
        }

        // --- تهجير تلقائي: لو المستخدم كان مستخدم النظام القديم (كود CSS واحد + كود HTML/JS
        // واحد بس)، بنحوّلهم أول مرة لعناصر داخل النظام الجديد عشان مايضيعش أي كود كان شغال. ---
        function migrateOldPlatformCustomCode() {
            if(localStorage.getItem('platformCustomCodeSnippets')) return; // النظام الجديد مستخدم بالفعل
            let oldCss = localStorage.getItem('customCSS') || '';
            let oldCode = localStorage.getItem('customHeadCode') || '';
            let migrated = [];
            if(oldCss.trim()) migrated.push({ id: generateSnippetId(), name: 'كود CSS (من النظام القديم)', type: 'css', content: oldCss, enabled: true });
            if(oldCode.trim()) migrated.push({ id: generateSnippetId(), name: 'كود HTML/JS (من النظام القديم)', type: 'code', content: oldCode, enabled: true });
            localStorage.setItem('platformCustomCodeSnippets', JSON.stringify(migrated));
        }

        function getPlatformSnippets() {
            migrateOldPlatformCustomCode();
            try { return JSON.parse(localStorage.getItem('platformCustomCodeSnippets')) || []; } catch(e) { return []; }
        }
        function savePlatformSnippets(snippets) { localStorage.setItem('platformCustomCodeSnippets', JSON.stringify(snippets)); }
        // 🎯 نطاق تطبيق الكود: all = المنصة + كل المتاجر (الافتراضي)، platform = صفحات المنصة فقط، stores = متاجر محددة بس
        function snippetAppliesTo(snip, storeId) {
            let sc = snip.scope || 'all';
            if(sc === 'platform') return !storeId;
            if(sc === 'stores') return !!storeId && (snip.stores || []).indexOf(storeId) !== -1;
            return true;
        }
        var __snippetCtxStore = null;
        function injectCustomCode(ctx) {
            if(ctx !== undefined) __snippetCtxStore = ctx;
            injectSnippets(getPlatformSnippets().filter(s => snippetAppliesTo(s, __snippetCtxStore)), 'platform');
        }

        function renderPlatformSnippets() {
            let snippets = getPlatformSnippets();
            let list = document.getElementById('platformSnippetsList');
            if(!list) return;
            let badge = document.getElementById('platformSnippetsCountBadge');
            if(badge) {
                if(snippets.length === 0) { badge.classList.add('hidden'); }
                else { badge.classList.remove('hidden'); badge.innerText = snippets.length; }
            }
            if(snippets.length === 0) { list.innerHTML = '<p style="font-size:12px; color:var(--text-muted); text-align:center;">لا توجد أكواد مضافة بعد.</p>'; return; }
            list.innerHTML = snippets.map((s, i) => `
                <div style="background:#fff; border:1px solid var(--border-color); border-radius:8px; padding:10px; margin-bottom:8px; display:flex; justify-content:space-between; align-items:center; gap:8px;">
                    <div style="min-width:0;">
                        <strong style="font-size:13px; word-break:break-word;">${escapeHtml(s.name)}</strong><br>
                        <span style="font-size:10.5px; color:var(--text-muted);">${({css:'🎨 CSS', js:'⚙️ JavaScript', html:'📄 HTML', code:'🧩 HTML/JS'})[s.type] || '🧩 HTML/JS'} · ${({all:'🌐 المنصة + كل المتاجر', platform:'🏛️ المنصة فقط', stores:'🏪 متاجر محددة (' + ((s.stores||[]).length) + ')'})[s.scope || 'all']}</span>
                        ${!s.enabled ? '<span style="font-size:10.5px; color:#dc2626; font-weight:bold;"> - معطّل</span>' : ''}
                    </div>
                    <div style="display:flex; align-items:center; gap:6px; flex-shrink:0;">
                        <label style="font-size:10px; display:flex; flex-direction:column; align-items:center; gap:2px; margin:0;">
                            <input type="checkbox" ${s.enabled ? 'checked' : ''} style="width:auto; margin:0;" onchange="togglePlatformSnippet(${i})">مفعّل
                        </label>
                        <button class="edit" style="margin:0;" onclick="openPlatformSnippetForm(${i})"><i class="fa fa-edit"></i></button>
                        <button class="danger edit" style="margin:0;" onclick="deletePlatformSnippet(${i})"><i class="fa fa-trash"></i></button>
                    </div>
                </div>
            `).join('');
        }

        function openPlatformSnippetForm(index) {
            let box = document.getElementById('platformSnippetFormBox');
            document.getElementById('platformSnippetEditIndex').value = index;
            if(index === -1) {
                document.getElementById('platformSnippetFormHeader').innerText = '🧩 إضافة كود جديد';
                document.getElementById('platformSnippetNameInput').value = '';
                document.getElementById('platformSnippetTypeSelect').value = 'css';
                document.getElementById('platformSnippetContentInput').value = '';
                document.getElementById('platformSnippetEnabledInput').checked = true;
                document.getElementById('platformSnippetScopeSelect').value = 'all';
                renderSnippetStoresBox([]);
            } else {
                let s = getPlatformSnippets()[index];
                if(!s) return;
                document.getElementById('platformSnippetFormHeader').innerText = `✏️ تعديل: ${s.name}`;
                document.getElementById('platformSnippetNameInput').value = s.name;
                document.getElementById('platformSnippetTypeSelect').value = s.type;
                document.getElementById('platformSnippetContentInput').value = s.content;
                document.getElementById('platformSnippetEnabledInput').checked = s.enabled;
                document.getElementById('platformSnippetScopeSelect').value = s.scope || 'all';
                renderSnippetStoresBox(s.stores || []);
            }
            box.classList.remove('hidden');
            box.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }

        function renderSnippetStoresBox(selected) {
            let box = document.getElementById('platformSnippetStoresBox');
            let scope = document.getElementById('platformSnippetScopeSelect').value;
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            box.innerHTML = Object.keys(stores).map(n => `<label style="display:flex; align-items:center; gap:6px; font-size:12px; margin:3px 0;"><input type="checkbox" class="snippetStoreCb" value="${escapeHtml(n)}" ${selected.indexOf(n) !== -1 ? 'checked' : ''} style="width:auto; margin:0;"> ${escapeHtml(n)}</label>`).join('') || '<p style="font-size:12px;">لا توجد متاجر.</p>';
            box.classList.toggle('hidden', scope !== 'stores');
        }
        function onSnippetScopeChange() {
            let sel = Array.from(document.querySelectorAll('.snippetStoreCb:checked')).map(c => c.value);
            renderSnippetStoresBox(sel);
        }
        function closePlatformSnippetForm() {
            document.getElementById('platformSnippetFormBox').classList.add('hidden');
        }

        function savePlatformSnippetForm() {
            let index = parseInt(document.getElementById('platformSnippetEditIndex').value);
            let name = document.getElementById('platformSnippetNameInput').value.trim();
            let type = document.getElementById('platformSnippetTypeSelect').value;
            let content = document.getElementById('platformSnippetContentInput').value;
            let enabled = document.getElementById('platformSnippetEnabledInput').checked;
            let scope = document.getElementById('platformSnippetScopeSelect').value;
            let storesSel = Array.from(document.querySelectorAll('.snippetStoreCb:checked')).map(c => c.value);
            if(scope === 'stores' && storesSel.length === 0) { alert('اختار متجر واحد على الأقل، أو غيّر النطاق.'); return; }
            if(!name) { alert('اكتب اسم للكود عشان تفتكره بعدين!'); return; }
            if(!content.trim()) { alert('محتوى الكود فاضي!'); return; }

            let snippets = getPlatformSnippets();
            if(index === -1) {
                snippets.push({ id: generateSnippetId(), name, type, content, enabled, scope, stores: storesSel });
            } else {
                snippets[index] = { ...snippets[index], name, type, content, enabled, scope, stores: storesSel };
            }
            savePlatformSnippets(snippets);
            injectCustomCode();
            renderPlatformSnippets();
            closePlatformSnippetForm();
            showToast('✅ تم حفظ الكود وتطبيقه.');
        }

        function togglePlatformSnippet(index) {
            let snippets = getPlatformSnippets();
            if(!snippets[index]) return;
            snippets[index].enabled = !snippets[index].enabled;
            savePlatformSnippets(snippets);
            injectCustomCode();
            renderPlatformSnippets();
        }

        function deletePlatformSnippet(index) {
            let snippets = getPlatformSnippets();
            if(!snippets[index]) return;
            if(!confirm(`حذف كود "${snippets[index].name}"؟`)) return;
            snippets.splice(index, 1);
            savePlatformSnippets(snippets);
            injectCustomCode();
            renderPlatformSnippets();
        }

        // ============================================================
        // 🧩 نفس نظام الأكواد المخصصة، لكن على مستوى متجر واحد بعينه (مختلف عن كود المنصة
        // العام فوق). بيتحقن/بيتشال بس وانت داخل المتجر ده بالذات، عشان متجر "أ" ميتأثرش
        // بكود متجر "ب" أبدًا.
        // ============================================================
        function injectStoreCustomCode(store) {
            injectSnippets((store && store.customCodeSnippets) || [], 'store');
        }

        // بنشيل كود أي متجر سابق لما نطلع لصفحة المنصة الرئيسية أو لوحة الإدارة، عشان مايفضلش
        // شغال في مكان مالوش علاقة بيه
        function clearStoreCustomCode() {
            document.querySelectorAll('[data-snippet-ns="store"]').forEach(el => el.remove());
        }

        let storeSnippetModalTarget = '';

        function openStoreCustomCodeModal(name) {
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            let store = stores[name];
            if(!store) return;
            if(!currentAdminHasPermission('customCode')) { alert('ليس لديك صلاحية إدارة الأكواد المخصصة للمتاجر.'); return; }
            storeSnippetModalTarget = name;
            document.getElementById('storeCustomCodeModalTarget').value = name;
            document.getElementById('storeCustomCodeModalName').textContent = name;
            document.getElementById('storeSnippetFormBox').classList.add('hidden');
            renderStoreSnippets();
            document.getElementById('storeCustomCodeModal').classList.remove('hidden');
        }

        function closeStoreCustomCodeModal() {
            document.getElementById('storeCustomCodeModal').classList.add('hidden');
        }

        function getStoreSnippets(name) {
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            return (stores[name] && stores[name].customCodeSnippets) || [];
        }

        function renderStoreSnippets() {
            let snippets = getStoreSnippets(storeSnippetModalTarget);
            let list = document.getElementById('storeSnippetsList');
            if(!list) return;
            if(snippets.length === 0) { list.innerHTML = '<p style="font-size:12px; color:var(--text-muted); text-align:center;">لا توجد أكواد مضافة لهذا المتجر بعد.</p>'; return; }
            list.innerHTML = snippets.map((s, i) => `
                <div style="background:var(--bg-body); border:1px solid var(--border-color); border-radius:8px; padding:10px; margin-bottom:8px; display:flex; justify-content:space-between; align-items:center; gap:8px;">
                    <div style="min-width:0;">
                        <strong style="font-size:13px; word-break:break-word;">${escapeHtml(s.name)}</strong><br>
                        <span style="font-size:10.5px; color:var(--text-muted);">${({css:'🎨 CSS', js:'⚙️ JavaScript', html:'📄 HTML', code:'🧩 HTML/JS'})[s.type] || '🧩 HTML/JS'}</span>
                        ${!s.enabled ? '<span style="font-size:10.5px; color:#dc2626; font-weight:bold;"> - معطّل</span>' : ''}
                    </div>
                    <div style="display:flex; align-items:center; gap:6px; flex-shrink:0;">
                        <label style="font-size:10px; display:flex; flex-direction:column; align-items:center; gap:2px; margin:0;">
                            <input type="checkbox" ${s.enabled ? 'checked' : ''} style="width:auto; margin:0;" onchange="toggleStoreSnippet(${i})">مفعّل
                        </label>
                        <button class="edit" style="margin:0;" onclick="openStoreSnippetForm(${i})"><i class="fa fa-edit"></i></button>
                        <button class="danger edit" style="margin:0;" onclick="deleteStoreSnippet(${i})"><i class="fa fa-trash"></i></button>
                    </div>
                </div>
            `).join('');
        }

        function openStoreSnippetForm(index) {
            let box = document.getElementById('storeSnippetFormBox');
            document.getElementById('storeSnippetEditIndex').value = index;
            if(index === -1) {
                document.getElementById('storeSnippetFormHeader').innerText = '🧩 إضافة كود جديد';
                document.getElementById('storeSnippetNameInput').value = '';
                document.getElementById('storeSnippetTypeSelect').value = 'css';
                document.getElementById('storeSnippetContentInput').value = '';
                document.getElementById('storeSnippetEnabledInput').checked = true;
            } else {
                let s = getStoreSnippets(storeSnippetModalTarget)[index];
                if(!s) return;
                document.getElementById('storeSnippetFormHeader').innerText = `✏️ تعديل: ${s.name}`;
                document.getElementById('storeSnippetNameInput').value = s.name;
                document.getElementById('storeSnippetTypeSelect').value = s.type;
                document.getElementById('storeSnippetContentInput').value = s.content;
                document.getElementById('storeSnippetEnabledInput').checked = s.enabled;
            }
            box.classList.remove('hidden');
            box.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }

        function closeStoreSnippetForm() {
            document.getElementById('storeSnippetFormBox').classList.add('hidden');
        }

        function saveStoreSnippetsAndRefresh(snippets) {
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            if(!stores[storeSnippetModalTarget]) return;
            stores[storeSnippetModalTarget].customCodeSnippets = snippets;
            if(!saveAllStores(stores)) return;
            // لو حاليًا واقف تعاين نفس المتجر ده، نطبّق التغيير فورًا من غير ما تحتاج تعمل رفريش
            if(activeStore === storeSnippetModalTarget && localStorage.getItem('viewMode') === 'store') {
                injectStoreCustomCode(stores[storeSnippetModalTarget]);
            }
            renderStoreSnippets();
            renderAdminStores();
        }

        function saveStoreSnippetForm() {
            let index = parseInt(document.getElementById('storeSnippetEditIndex').value);
            let name = document.getElementById('storeSnippetNameInput').value.trim();
            let type = document.getElementById('storeSnippetTypeSelect').value;
            let content = document.getElementById('storeSnippetContentInput').value;
            let enabled = document.getElementById('storeSnippetEnabledInput').checked;
            if(!name) { alert('اكتب اسم للكود عشان تفتكره بعدين!'); return; }
            if(!content.trim()) { alert('محتوى الكود فاضي!'); return; }

            let snippets = getStoreSnippets(storeSnippetModalTarget);
            if(index === -1) {
                snippets.push({ id: generateSnippetId(), name, type, content, enabled });
            } else {
                snippets[index] = { ...snippets[index], name, type, content, enabled };
            }
            saveStoreSnippetsAndRefresh(snippets);
            closeStoreSnippetForm();
            showToast(`✅ تم حفظ الكود لمتجر "${storeSnippetModalTarget}".`);
        }

        function toggleStoreSnippet(index) {
            let snippets = getStoreSnippets(storeSnippetModalTarget);
            if(!snippets[index]) return;
            snippets[index].enabled = !snippets[index].enabled;
            saveStoreSnippetsAndRefresh(snippets);
        }

        function deleteStoreSnippet(index) {
            let snippets = getStoreSnippets(storeSnippetModalTarget);
            if(!snippets[index]) return;
            if(!confirm(`حذف كود "${snippets[index].name}"؟`)) return;
            snippets.splice(index, 1);
            saveStoreSnippetsAndRefresh(snippets);
        }

        // --- تحقق من المساحة وعرض تحذير تلقائي في صفحة تسجيل الدخول ---
        function checkStorageAndWarn() {
            try {
                let testKey = '__storageTest__';
                localStorage.setItem(testKey, new Array(50 * 1024).join('x')); // اختبار 50KB
                localStorage.removeItem(testKey);
                let box = document.getElementById('storageWarningBox');
                if(box) box.style.display = 'none';
            } catch(e) {
                let box = document.getElementById('storageWarningBox');
                if(box) box.style.display = 'block';
            }
        }

        // --- تنظيف طارئ: يحذف سجلات الزيارات والطلبات القديمة للتخفيف ---
        function emergencyStorageCleanup() {
            let freed = 0;
            try {
                let stores = JSON.parse(localStorage.getItem('allStores')) || {};
                for(let s in stores) {
                    let before = JSON.stringify(stores[s]).length;
                    stores[s].visitLog = (stores[s].visitLog || []).slice(-3);
                    stores[s].orderHistory = (stores[s].orderHistory || []).slice(0, 10);
                    freed += before - JSON.stringify(stores[s]).length;
                }
                localStorage.setItem('allStores', JSON.stringify(stores));
                localStorage.removeItem('supportLogs');
                localStorage.setItem('supportLogs', JSON.stringify([]));
                alert(`✅ تم التنظيف! تم تحرير حوالي ${Math.round(freed/1024)} كيلوبايت.\nجرّب التسجيل مجدداً.`);
                checkStorageAndWarn();
            } catch(e) {
                alert('⚠️ لم ينجح التنظيف. المساحة ممتلئة جداً. امسح بيانات الموقع يدوياً من إعدادات المتصفح ثم استورد النسخة الاحتياطية.');
            }
        }

        // --- لافتة الأدمن الإعلانية للصفحة الرئيسية فقط (لا تظهر أثناء تسجيل التاجر) ---
        function renderHomeAdBanner() {
            let container = document.getElementById('homeAdBannerContainer');
            let banner = JSON.parse(localStorage.getItem('homeAdBanner') || 'null');
            if(!banner || (!banner.text && !banner.image)) { container.innerHTML = ''; return; }
            let inner = banner.type === 'image' && banner.image
                ? `<img src="${banner.image}">`
                : `<div class="text-ad">${banner.text || ''}</div>`;
            container.innerHTML = banner.link
                ? `<div class="home-ad-banner" style="cursor:pointer;" onclick="window.open('${banner.link}','_blank')">${inner}</div>`
                : `<div class="home-ad-banner">${inner}</div>`;
        }

        function renderCategoriesGrid(categories) {
            let catGrid = document.getElementById('homeCategoriesGrid');
            catGrid.innerHTML = '';
            categories.forEach(cat => {
                catGrid.innerHTML += `
                    <div class="cat-card" onclick="openCategoryProducts('${cat.name}')">
                        <img src="${cat.image}" loading="lazy">
                        <h4>${cat.name}</h4>
                    </div>
                `;
            });
        }

        function openCategoryProducts(catName) {
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            let store = stores[activeStore];
            document.getElementById('homeCategoriesGrid').classList.add('hidden');
            document.getElementById('mainTitle').innerText = `${t('category_prefix', 'قسم')}: ${catName}`;
            document.getElementById('backHomeBtn').classList.remove('hidden');
            document.getElementById('productsViewSection').classList.remove('hidden');
            currentViewingCategory = catName;

            let filtered = (store.products || []).filter(p => p.category === catName);
            renderProductsGrid(filtered, store.currency);

            // زرار "إضافة منتج" السريع بيظهر بس لصاحب المتجر نفسه وهو داخل قسم، مش لأي زائر عادي
            let isOwner = localStorage.getItem('currentActiveMerchant') === activeStore;
            document.getElementById('merchantQuickAddProductBtn').classList.toggle('hidden', !isOwner);
            document.getElementById('merchantQuickAddCategoryBtn').classList.add('hidden');
        }

        function backToCategories() {
            document.getElementById('productsViewSection').classList.add('hidden');
            document.getElementById('homeCategoriesGrid').classList.remove('hidden');
            document.getElementById('backHomeBtn').classList.add('hidden');
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            let store = stores[activeStore] || {};
            renderCategoriesTitle(store);
            currentViewingCategory = null;
            document.getElementById('merchantQuickAddProductBtn').classList.add('hidden');
            renderHome();
        }

        // --- زرار "إضافة قسم" السريع من صفحة الأقسام نفسها: بيوّدي التاجر لنفس فورم إضافة
        // الأقسام الموجود في لوحة الإدارة (بكل حقوله)، من غير ما يحتاج يدوّر عليه وسط
        // إعدادات المتجر العامة. ---
        // ملحوظة مهمة: بنستخدم هنا goToMerchantDashboardQuick() بدل switchTab('auth') العادية،
        // لأن switchTab('auth') بتدّي أولوية لجلسة الأدمن لو لسه شغالة من قبل كده في نفس المتصفح
        // (حتى لو التاجر داخل يعاين متجره في تاب تاني)، فكانت بتاخد صاحب المتجر للوحة الإدارة
        // العامة بالغلط بدل ما تفتحله فورم الإضافة على طول. الدالة دي بتضمن إنه يوصل للوحته هو تحديدًا.
        // 🔙 بنسجل هنا "من فين جاي التاجر" قبل ما ننقله مؤقتًا للوحته (من صفحة تصفح متجره
        // نفسه مثلاً)، عشان لما يضغط "إغلاق" في فورم إضافة المنتج/القسم نقدر نرجّعه بالظبط
        // لنفس المكان اللي كان واقف فيه (مش نسيبه واقف في لوحة الإدارة العامة وكأنه اتنقل
        // بشكل غريب من غير ما يطلب ده). لو null، معناه إنه أصلاً كان في لوحة الإدارة، فمفيش
        // حاجة نرجعله لها غير هي نفسها.
        let quickNavReturnSectionId = null;

        function goToMerchantDashboardQuick() {
            const sectionIds = ['platformHomeSection', 'homeSection', 'authSection', 'dashboardSection', 'adminSection', 'cartSection', 'productModal', 'deliveryModal', 'aboutUsModal', 'orderConfirmModal', 'directOrderSuccessModal', 'returnPolicyModal', 'storeCustomCodeModal', 'usageGuideModal', 'storeColorsModal', 'editAdminPermsModal', 'productsModal', 'categoriesModal'];

            // 📍 قبل ما نقفل أي حاجة: نلاقي الصفحة الرئيسية اللي التاجر واقف فيها دلوقتي
            // (لو مكانتش أصلاً لوحة الإدارة) ونسجلها عشان نرجعله لها بعدين.
            const returnableSectionIds = ['platformHomeSection', 'homeSection', 'authSection', 'adminSection', 'cartSection'];
            let currentVisible = returnableSectionIds.find(id => {
                let el = document.getElementById(id);
                return el && !el.classList.contains('hidden');
            });
            quickNavReturnSectionId = currentVisible || null;

            sectionIds.forEach(id => { let el = document.getElementById(id); if(el) el.classList.add('hidden'); });
            document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
            let authBtn = document.getElementById('authNavBtn');
            if(authBtn) authBtn.classList.add('active');
            ensureDashboardFragmentLoaded(function() {
                document.getElementById('dashboardSection').classList.remove('hidden');
                // ⚠️ loadDashboard() بيملى فورم إعدادات المتجر كله (عشرات الحقول)، ولو حصل خطأ في أي
                // حقل منها، من غير try/catch كان بيوقف باقي الكود اللي بعده (زي فتح فورم "إضافة منتج"
                // نفسه) من غير ما يظهر أي حاجة للتاجر — فبيبان وكأن الزرار "مش بيعمل حاجة".
                try {
                    loadDashboard();
                } catch(e) {
                    console.error('goToMerchantDashboardQuick: حصل خطأ أثناء تحميل بيانات لوحة التاجر', e);
                }
            });
        }

        // 🔙 بترجّع التاجر بالظبط لنفس المكان اللي كان واقف فيه قبل ما يضغط "إضافة منتج/قسم
        // سريع" من صفحة تصفح متجره (لو كان فعلاً جاي من مكان تاني غير لوحة الإدارة). بتتنادى
        // من closeProductsModal() و closeCategoriesModal() بدل ما سيبهم يقفلوا على لوحة
        // الإدارة العامة دايمًا وكأنه اتنقل بشكل غريب مانوش طالبه.
        function returnFromQuickNavIfNeeded() {
            if(!quickNavReturnSectionId) return;
            let target = document.getElementById(quickNavReturnSectionId);
            if(target) {
                document.getElementById('dashboardSection').classList.add('hidden');
                target.classList.remove('hidden');
            }
            quickNavReturnSectionId = null;
        }

        function quickAddCategory() {
            let merchant = localStorage.getItem('currentActiveMerchant');
            if(!merchant || merchant !== activeStore) return; // حماية إضافية: مينفعش غير صاحب المتجر

            goToMerchantDashboardQuick();
            openCategoriesModal();

            try {
                cancelEditCategory();
            } catch(e) {
                console.error('quickAddCategory: حصل خطأ أثناء تصفير فورم الأقسام', e);
            }

            setTimeout(() => {
                let target = document.getElementById('catFormHeader');
                if(target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                let nameInput = document.getElementById('newCatName');
                if(nameInput) nameInput.focus();
            }, 100);
        }

        // --- زرار "إضافة منتج" السريع من داخل القسم: بيوّدي التاجر لنفس فورم الإضافة الموجود
        // في لوحة الإدارة (نفس الفورم بالظبط، بكل حقوله بما فيها المخزون والخصم والصور...)
        // بعد ما يحدد له القسم الحالي أوتوماتيك، عشان يوفر عليه رحلة الدخول للوحة والدور على القسم. ---
        function quickAddProductToCurrentCategory() {
            let merchant = localStorage.getItem('currentActiveMerchant');
            if(!merchant || merchant !== activeStore) return; // حماية إضافية: مينفعش غير صاحب المتجر
            let catToPreselect = currentViewingCategory;

            // ⚠️ ملحوظة هامة: بنفتح فورم إضافة المنتج أولاً وقبل أي خطوة تانية، ولو حصل أي
            // خطأ غير متوقع في خطوات التجهيز اللي بعده (تصفير الفورم، اختيار القسم..)، بيكون
            // متلفوف في try/catch عشان الخطأ ده ميمنعش الفورم إنه يظهر للتاجر أصلاً.
            goToMerchantDashboardQuick();
            openProductsModal();

            try {
                cancelEditProduct();
            } catch(e) {
                console.error('quickAddProductToCurrentCategory: نظّف الفورم بس مكملناش باقي التجهيز التلقائي', e);
            }

            // 🎯 بنحدد القسم بعد شوية (مش فورًا) عشان نضمن إن قائمة الأقسام خلصت اتبنت بالكامل
            // قبل ما نحاول نختار منها - لو حددناها فورًا ولسه القائمة بتتبني، الاختيار كان
            // بيضيع ويرجع القسم الافتراضي (الأول في القائمة) بدل القسم اللي التاجر داخل عليه فعلاً.
            setTimeout(() => {
                if(catToPreselect) {
                    let sel = document.getElementById('prodCategorySelect');
                    if(sel) {
                        sel.value = catToPreselect;
                        // تأكيد إضافي: لو القيمة مطابقتش لأي سبب (حرف خاص في اسم القسم مثلاً)،
                        // بنلاقي الـ option المطابق يدويًا ونحدده بالـ index بدل الاعتماد على value بس.
                        if(sel.value !== catToPreselect) {
                            let match = Array.from(sel.options).find(o => o.value === catToPreselect || o.textContent === catToPreselect);
                            if(match) sel.value = match.value;
                        }
                    }
                }
            }, 120);

            setTimeout(() => {
                let target = document.getElementById('prodFormHeader');
                if(target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                let nameInput = document.getElementById('prodName');
                if(nameInput) nameInput.focus();
            }, 100);
        }

        // --- زرار التعديل السريع ✏️ من نافذة تفاصيل المنتج نفسها (اللي بتظهر لصاحب المتجر فقط):
        // بيوّديه على نفس فورم التعديل الموجود في لوحة الإدارة (بكل حقوله)، وبيحمّل فيه بيانات
        // المنتج ده تحديدًا جاهزة، من غير ما يضطر يدخل يدور عليه من الأول في قائمة منتجاته. ---
        function quickEditProductFromDetails(prodIndex) {
            let merchant = localStorage.getItem('currentActiveMerchant');
            if(!merchant || merchant !== activeStore || prodIndex < 0) return; // حماية إضافية: مينفعش غير صاحب المتجر

            closeProductModal();
            goToMerchantDashboardQuick();
            openProductsModal();

            try {
                editProduct(prodIndex);
            } catch(e) {
                console.error('quickEditProductFromDetails: حصل خطأ أثناء تحميل بيانات المنتج للتعديل', e);
            }

            setTimeout(() => {
                let target = document.getElementById('prodFormHeader');
                if(target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }

        // ============================================================
        // 🏷️ دوال مساعدة للخصم — نقطة واحدة لحساب السعر بعد الخصم
        // تُستخدم في كل مكان بيتعرض فيه السعر أو بيتضاف فيه للسلة، عشان
        // لو حبيت تغيّر طريقة حساب الخصم مستقبلاً تغيّرها هنا بس.
        // ============================================================
        function getProductDiscountPercent(p) {
            let d = parseFloat(p && p.discount);
            return (!isNaN(d) && d > 0) ? d : 0;
        }

        function getEffectivePrice(p) {
            let discount = getProductDiscountPercent(p);
            let price = parseFloat(p.price) || 0;
            if(discount > 0) {
                let discounted = price - (price * discount / 100);
                return Math.round(discounted * 100) / 100;
            }
            return price;
        }

        // بيرجع الـ HTML بتاع كتلة السعر (مع أو من غير خصم) — استخدمها بدل
        // ما تكتب <div class="price-tag"> يدوي عشان الخصم يظهر تلقائي فين ما استخدمتها
        function renderPriceBlock(p, currency) {
            let discount = getProductDiscountPercent(p);
            if(discount <= 0) {
                return `<div class="price-tag">${p.price} ${currency}</div>`;
            }
            let effective = getEffectivePrice(p);
            return `
                <div style="display:flex; align-items:center; gap:6px; flex-wrap:wrap; margin:3px 0;">
                    <span style="text-decoration:line-through; color:var(--text-muted); font-size:12px;">${p.price} ${currency}</span>
                    <span class="price-tag" style="margin:0;">${effective} ${currency}</span>
                </div>
            `;
        }

        // تحويل تاريخ ISO المخزّن إلى صيغة datetime-local عشان يظهر في حقل التاريخ عند التعديل
        function isoToDatetimeLocal(iso) {
            let d = new Date(iso);
            if(isNaN(d.getTime())) return '';
            let pad = n => String(n).padStart(2, '0');
            return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
        }

        // بتاخد لون Hex وتُرجّع نسخة أغمق منه بنسبة معينة، عشان نعمل تدرّج (gradient) جميل
        // من لون العداد اللي التاجر اختاره، من غير ما نطلب منه يختار لونين
        function shadeColorDarker(hex, percent) {
            try {
                let num = parseInt(hex.replace('#', ''), 16);
                let r = Math.max(0, (num >> 16) - Math.round(255 * percent));
                let g = Math.max(0, ((num >> 8) & 0x00FF) - Math.round(255 * percent));
                let b = Math.max(0, (num & 0x0000FF) - Math.round(255 * percent));
                return `rgb(${r},${g},${b})`;
            } catch(e) { return hex; }
        }

        // ⏳ شارة عداد العرض التنازلي — بتتحدث لوحدها كل ثانية عن طريق tickAllCountdowns تحت
        // مصمّمة سطرين (تسمية + رقم) عشان متعملش overflow برّه حدود الكارت مهما كان طول النص
        function renderCountdownBadge(p) {
            if(!p.countdownEnabled || !p.countdownEnd) return '';
            if(new Date(p.countdownEnd).getTime() <= Date.now()) return '';
            let label = (p.countdownLabel && p.countdownLabel.trim()) || 'ينتهي العرض خلال';
            let color = p.countdownColor || '#dc2626';
            let colorDark = shadeColorDarker(color, 0.15);
            return `<div class="offer-countdown" data-end="${p.countdownEnd}" style="max-width:100%; box-sizing:border-box; overflow:hidden; display:inline-flex; flex-direction:column; align-items:flex-start; gap:1px; background:linear-gradient(135deg,${color},${colorDark}); color:#fff; padding:5px 10px; border-radius:10px; margin:5px 0; box-shadow:0 3px 10px rgba(0,0,0,0.25); animation: countdownPulse 1.6s ease-in-out infinite;">
                <span style="font-size:9.5px; font-weight:bold; opacity:0.92; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; max-width:100%; display:flex; align-items:center; gap:3px;"><i class="fa fa-bolt"></i> ${label}</span>
                <span class="countdown-time" style="font-size:16px; font-weight:900; white-space:nowrap; font-variant-numeric: tabular-nums; letter-spacing:0.3px;">--:--:--</span>
            </div>`;
        }

        // بتشتغل كل ثانية، وبتحدث كل عدادات العروض الظاهرة حاليًا على الشاشة (كارت أو مودال)
        function tickAllCountdowns() {
            document.querySelectorAll('.offer-countdown').forEach(el => {
                let end = new Date(el.getAttribute('data-end')).getTime();
                let remaining = end - Date.now();
                let timeEl = el.querySelector('.countdown-time');
                if(remaining <= 0) {
                    el.remove(); // انتهى العرض: يختفي العداد تلقائيًا من غير رفريش
                    return;
                }
                let totalSec = Math.floor(remaining / 1000);
                let days = Math.floor(totalSec / 86400);
                let hours = Math.floor((totalSec % 86400) / 3600);
                let mins = Math.floor((totalSec % 3600) / 60);
                let secs = totalSec % 60;
                let pad = n => String(n).padStart(2, '0');
                timeEl.textContent = days > 0 ? `${days}ي ${pad(hours)}:${pad(mins)}:${pad(secs)}` : `${pad(hours)}:${pad(mins)}:${pad(secs)}`;
            });
        }
        setInterval(tickAllCountdowns, 1000);

        // شارة الخصم اللي بتتحط فوق صورة المنتج (بلون اختاره صاحب المتجر)
        function renderDiscountRibbon(p) {
            let discount = getProductDiscountPercent(p);
            if(discount <= 0) return '';
            let color = p.discountColor || '#ef4444';
            return `<span style="position:absolute; top:6px; left:6px; background:${color}; color:#fff; font-size:10px; font-weight:bold; padding:3px 8px; border-radius:20px; box-shadow:0 2px 6px rgba(0,0,0,0.15);">خصم ${discount}%</span>`;
        }

        // شارة "متبقي X" تظهر للعميل فقط لو التاجر فعّل الخيار ده بنفسه على المنتج (اختياري بالكامل)
        function renderStockToCustomerLine(p) {
            if(!p.showStockToCustomer || typeof p.stock !== 'number' || p.stock <= 0) return '';
            return `<div style="font-size:11px; color:#b45309; font-weight:bold; margin:2px 0;"><i class="fa fa-box"></i> متبقي ${p.stock}${formatStockUnit(p)} فقط</div>`;
        }

        function renderProductsGrid(prods, currency) {
            let grid = document.getElementById('storeProductsGrid');
            grid.innerHTML = '';
            if(prods.length === 0) {
                grid.innerHTML = `<p style="text-align:center; color:var(--text-muted); grid-column:span 2;">${t('no_products_yet', 'لا توجد منتجات.')}</p>`;
                return;
            }
            
            prods.forEach(p => {
                let avg = 0;
                let revCount = p.reviews ? p.reviews.length : 0;
                if(revCount > 0) {
                    let sum = p.reviews.reduce((s, r) => s + r.rating, 0);
                    avg = (sum / revCount).toFixed(1);
                }
                
                // إظهار التقييم وعدد المراجعين في الكارت الخارجي
                let starsHtml = revCount > 0 
                    ? `<div class="outer-rating"><i class="fa fa-star"></i> <strong>${avg}</strong> (${revCount})</div>` 
                    : `<div class="outer-rating" style="color:#a39d96;"><i class="fa fa-star"></i> جديد</div>`;

                let effectivePrice = getEffectivePrice(p);
                let isOutOfStock = typeof p.stock === 'number' && p.stock <= 0;
                grid.innerHTML += `
                    <div class="product-card" data-pname="${p.name}" onclick="openProductDetails('${p.name}')">
                        <div>
                            <div style="position:relative;">
                                <img src="${p.image}" loading="lazy" style="${isOutOfStock ? 'filter:grayscale(60%); opacity:0.7;' : ''}">
                                ${isOutOfStock ? '<span style="position:absolute; top:6px; right:6px; background:#4b5563; color:#fff; font-size:10px; font-weight:bold; padding:3px 8px; border-radius:20px;">نفذ من المخزون</span>' : (p.featuredBestSeller ? '<span style="position:absolute; top:6px; right:6px; background:#dc2626; color:#fff; font-size:10px; font-weight:bold; padding:3px 8px; border-radius:20px;">🔥 الأكثر مبيعاً</span>' : '')}
                                ${renderDiscountRibbon(p)}
                            </div>
                            ${starsHtml}
                            <h4 class="product-title">${p.name}</h4>
                            ${renderStockToCustomerLine(p)}
                            ${renderPriceBlock(p, currency)}
                            ${renderCountdownBadge(p)}
                        </div>
                        <div class="cart-btn-area" onclick="event.stopPropagation()">${renderCardCartControl(p.name, effectivePrice, p.stock)}</div>
                    </div>
                `;
            });
        }

        // --- عنصر تحكم السلة داخل كارت المنتج: زر إضافة أو عداد +/- إذا كان مضافاً بالفعل ---
        // stock: undefined/null = مش متتبع (مفيش حد أقصى)، رقم = الكمية المتاحة فعليًا
        function renderCardCartControl(name, price, stock) {
            if(typeof stock === 'number' && stock <= 0) {
                return `<button disabled style="width:100%; padding:6px; font-size:12px; margin:4px 0 0; background:#9ca3af; cursor:not-allowed;"><i class="fa fa-ban"></i> نفذ من المخزون</button>`;
            }
            let existing = cart.find(i => i.name === name && i.store === activeStore);
            if(existing) {
                let plusDisabled = (typeof stock === 'number' && existing.qty >= stock) ? 'disabled style="opacity:0.5; cursor:not-allowed;"' : '';
                return `
                    <div style="display:flex; align-items:center; justify-content:center; gap:10px; margin-top:4px;">
                        <button style="width:auto; padding:4px 12px; margin:0; font-size:14px;" onclick="cardChangeQty('${name}', ${price}, -1, ${stock === null || stock === undefined ? 'null' : stock})">−</button>
                        <span style="font-weight:bold; min-width:18px; text-align:center;">${existing.qty}</span>
                        <button ${plusDisabled} style="width:auto; padding:4px 12px; margin:0; font-size:14px;" onclick="cardChangeQty('${name}', ${price}, 1, ${stock === null || stock === undefined ? 'null' : stock})">+</button>
                    </div>
                `;
            }
            return `<button style="width:100%; padding:6px; font-size:12px; margin:4px 0 0;" onclick="cardChangeQty('${name}', ${price}, 1, ${stock === null || stock === undefined ? 'null' : stock})"><i class="fa fa-cart-plus"></i> للسلة</button>`;
        }

        function cardChangeQty(name, price, delta, stock) {
            let idx = cart.findIndex(i => i.name === name && i.store === activeStore);
            if(idx === -1 && delta > 0) {
                if(typeof stock === 'number' && stock <= 0) { showToast('❌ نفذت الكمية من المخزون.'); return; }
                cart.push({ name, price: parseFloat(price), store: activeStore, qty: 1 });
                showToast('تمت الإضافة للسلة 🛒');
            } else if(idx !== -1) {
                if(delta > 0 && typeof stock === 'number' && cart[idx].qty >= stock) {
                    showToast(`⚠️ الكمية المتوفرة ${stock} فقط.`);
                    return;
                }
                cart[idx].qty += delta;
                if(cart[idx].qty <= 0) cart.splice(idx, 1);
            }
            localStorage.setItem('appCart', JSON.stringify(cart));
            updateCartBadge();

            let cardArea = document.querySelector(`.product-card[data-pname="${name.replace(/"/g, '\\"')}"] .cart-btn-area`);
            if(cardArea) cardArea.innerHTML = renderCardCartControl(name, price, stock);
        }

        // --- نافذة تفاصيل المنتج وقائمة التقييمات ---
        function openProductDetails(prodName) {
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            let store = stores[activeStore];
            let p = store.products.find(item => item.name === prodName);
            
            let modal = document.getElementById('productModal');
            let body = document.getElementById('modalBodyContainer');

            let reviewsListHtml = '';
            let isViewingOwnStore = localStorage.getItem('currentActiveMerchant') === activeStore;
            if(p.reviews && p.reviews.length > 0) {
                p.reviews.forEach((rev, idx) => {
                    let rStars = '';
                    for(let i=0; i<5; i++) rStars += i < rev.rating ? '★' : '☆';
                    reviewsListHtml += `
                        <div style="background:var(--bg-card); padding:10px; border-radius:8px; margin-bottom:8px; border:1px solid var(--border-color);">
                            <div style="display:flex; justify-content:space-between; align-items:center;">
                                <strong style="font-size:12px; color:var(--text-main);">${rev.author || 'عميل'}</strong>
                                <span style="font-size:11px; color:var(--text-muted); display:flex; align-items:center; gap:8px;">
                                    ${rev.date || ''}
                                    ${isViewingOwnStore ? `
                                        <i class="fa fa-reply" title="رد على المراجعة" style="color:#3b82f6; cursor:pointer;" onclick="replyToReview('${p.name}', ${idx})"></i>
                                        <i class="fa fa-ban" title="حظر هذا الحساب من متجرك" style="color:#f59e0b; cursor:pointer;" onclick="blockReviewer('${p.name}', ${idx})"></i>
                                        <i class="fa fa-trash" title="حذف المراجعة" style="color:#ef4444; cursor:pointer;" onclick="deleteReview('${p.name}', ${idx})"></i>
                                    ` : ''}
                                </span>
                            </div>
                            <div style="color:var(--star-color); font-size:13px; margin:2px 0;">${rStars}</div>
                            <p style="font-size:12px; color:var(--text-muted); margin:0;">${rev.comment || 'بدون تعليق.'}</p>
                            ${rev.reply ? `
                                <div style="margin-top:8px; background:var(--bg-body); border-right:3px solid var(--primary-color); padding:6px 10px; border-radius:6px;">
                                    <strong style="font-size:11px; color:var(--primary-color);"><i class="fa fa-store"></i> رد صاحب المتجر:</strong>
                                    <p style="font-size:12px; margin:2px 0 0; color:var(--text-main);">${rev.reply}</p>
                                </div>
                            ` : ''}
                        </div>
                    `;
                });
            } else {
                reviewsListHtml = '<p style="text-align:center; color:var(--text-muted); font-size:12px;">لا توجد مراجعات حتى الآن.</p>';
            }

            let galleryImages = [p.image, ...(p.gallery || [])];
            let galleryHtml = galleryImages.length > 1 ? `
                <div style="display:flex; gap:6px; margin-bottom:10px; overflow-x:auto;">
                    ${galleryImages.map((img, i) => `<img src="${img}" onclick="document.getElementById('mainProductImg').src='${img}'" style="width:50px; height:50px; object-fit:cover; border-radius:8px; cursor:pointer; border:2px solid ${i===0 ? 'var(--primary-color)' : 'transparent'}; flex-shrink:0;">`).join('')}
                </div>
            ` : '';

            // 🖋️ الوصف دلوقتي HTML منسّق من محرر النص الغني - بنعرضه زي ما هو (مع توافق
            // مع منتجات قديمة كانت نص عادي + ستايل واحد عبر legacyDescToHtml).
            let descHtml = legacyDescToHtml(p.desc, p.descStyle);

            let modalDiscount = getProductDiscountPercent(p);
            let modalEffectivePrice = getEffectivePrice(p);
            let modalPriceHtml = modalDiscount > 0 ? `
                <div style="text-align:center; background: var(--bg-body); padding:8px; border-radius:8px;">
                    <span style="background:${p.discountColor || '#ef4444'}; color:#fff; font-size:11px; font-weight:bold; padding:3px 9px; border-radius:20px;">خصم ${modalDiscount}%</span>
                    <div style="margin-top:6px;">
                        <span style="text-decoration:line-through; color:var(--text-muted); font-size:13px;">${p.price} ${store.currency}</span>
                        <span class="price-tag" style="font-size:18px; margin-right:6px;">${modalEffectivePrice} ${store.currency}</span>
                    </div>
                </div>
            ` : `<div class="price-tag" style="font-size:18px; text-align:center; background: var(--bg-body); padding:6px; border-radius:8px;">${p.price} ${store.currency}</div>`;

            let hasReturnDays = p.returnDays && p.returnDays > 0;
            let hasReturnPolicyText = store.returnPolicy && store.returnPolicy.trim();
            let returnDaysHtml = (hasReturnDays || hasReturnPolicyText) ? `
                <div onclick="openReturnPolicyModal()" style="cursor:pointer; display:flex; align-items:center; justify-content:space-between; gap:6px; background:#f0fdf4; border:1px solid #bbf7d0; color:#166534; padding:8px 10px; border-radius:8px; font-size:12px; margin-top:8px;">
                    <span><i class="fa fa-undo"></i> ${hasReturnDays ? `يمكن إرجاع هذا المنتج خلال ${p.returnDays} يوم من الاستلام` : 'سياسة الإرجاع'}</span>
                    <span style="text-decoration:underline; white-space:nowrap;">التفاصيل <i class="fa fa-chevron-left"></i></span>
                </div>
            ` : '';

            // 📦 حالة المخزون: "نفذ" بيظهر دايمًا (لازم العميل يعرف إنه مش متاح)، لكن "متبقي X"
            // بيظهر بس لو التاجر فعّل خيار "اظهار الكمية المتبقية للعميل" بنفسه على المنتج ده
            // (منفصل تمامًا عن تنبيه المخزون المنخفض الداخلي الخاص بالتاجر وحده)
            let isOutOfStock = typeof p.stock === 'number' && p.stock <= 0;
            let stockNoticeHtml = '';
            if(isOutOfStock) {
                stockNoticeHtml = `<div style="text-align:center; background:#fee2e2; color:#991b1b; font-weight:bold; padding:8px; border-radius:8px; margin-top:8px; font-size:12.5px;"><i class="fa fa-triangle-exclamation"></i> نفذ من المخزون حاليًا</div>`;
            } else if(typeof p.stock === 'number' && p.showStockToCustomer) {
                stockNoticeHtml = `<div style="text-align:center; background:#fef3c7; color:#92400e; font-weight:bold; padding:8px; border-radius:8px; margin-top:8px; font-size:12.5px;"><i class="fa fa-triangle-exclamation"></i> الكمية محدودة، متبقي ${p.stock}${formatStockUnit(p)} فقط</div>`;
            }

            let addToCartBtnHtml = isOutOfStock
                ? `<button disabled style="background:#9ca3af; cursor:not-allowed;"><i class="fa fa-ban"></i> نفذ من المخزون</button>`
                : `<button onclick="addToCart('${p.name}', ${modalEffectivePrice}, '${activeStore}'); closeProductModal();"><i class="fa fa-cart-plus"></i> إضافة للسلة</button>`;

            // ✏️ أيقونة تعديل سريعة، بتظهر فقط لصاحب المتجر نفسه (مش لأي عميل عادي)، عشان
            // يقدر يعدّل على المنتج فورًا وهو شايفه في متجره، من غير ما يدخل يدور عليه في لوحته.
            let prodIndex = store.products.indexOf(p);
            let editIconHtml = isViewingOwnStore
                ? `<i class="fa fa-pen" title="تعديل المنتج" style="font-size:17px; cursor:pointer; color:var(--primary-color); background:var(--bg-body); padding:8px; border-radius:50%;" onclick="quickEditProductFromDetails(${prodIndex})"></i>`
                : '';

            body.innerHTML = `
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                    <h3 style="margin:0; color:var(--text-main); font-size:16px;">تفاصيل المنتج</h3>
                    <div style="display:flex; align-items:center; gap:10px;">
                        ${editIconHtml}
                        <span class="modal-close-chip" onclick="closeProductModal()"><i class="fa fa-times"></i> <span data-i18n="close_label">إغلاق</span></span>
                    </div>
                </div>
                
                <div class="product-modal-top">
                    <div class="product-modal-media">
                        <img id="mainProductImg" src="${p.image}" style="width:100%; max-height:200px; object-fit:contain; background:var(--bg-body); border-radius:12px; margin-bottom:10px;">
                        ${galleryHtml}
                    </div>
                    <div class="product-modal-info">
                        <div class="box" style="margin-bottom:12px; padding:12px;">
                            <h3 style="margin:0 0 5px; color:var(--text-main); font-size:16px;">${p.name}</h3>
                            <div class="rich-content-display" style="margin:0 0 8px; color:var(--text-muted); font-size:13px; line-height:1.7; word-break:break-word;">${descHtml}</div>
                            ${modalPriceHtml}
                            ${renderCountdownBadge(p)}
                            ${returnDaysHtml}
                            ${stockNoticeHtml}
                        </div>

                        ${addToCartBtnHtml}
                    </div>
                </div>

                ${store.reviewsEnabled === false ? '' : `
                <hr style="border-color:var(--border-color); margin:15px 0;">

                <h4 style="color:var(--text-main); margin-bottom:8px; font-size:14px;">💬 التقييمات والمراجعات السابقة</h4>
                <div style="margin-bottom:12px; max-height:150px; overflow-y:auto;">${reviewsListHtml}</div>

                <div class="box" style="background:var(--bg-body); padding: 12px;">
                    <h5 style="margin:0 0 8px; color:var(--text-main); font-size:13px;">أضف تقييمك ومراجعتك:</h5>
                    ${(store.reviewsRequireLogin === true && !getBuyerSession(activeStore)) ? `
                        <p style="font-size:12px; color:var(--text-muted); margin-bottom:8px;">${t('review_login_required_msg', 'لازم تسجّل دخولك بحساب مشترِي في هذا المتجر الأول عشان تضيف تقييم.')}</p>
                        <button class="secondary" style="padding:8px; font-size:12px;" onclick="closeProductModal(); openBuyerAuthModal('login');">${t('buyer_login_tab', 'تسجيل الدخول')}</button>
                    ` : `
                    ${(store.reviewsRequireLogin === true) ? '' : (GOOGLE_SIGNIN_ENABLED ? `
                        <div id="googleSignInBox" style="margin-bottom:8px;"><div id="googleSignInBtn"></div></div>
                        <div id="googleSignedInBox" class="hidden" style="font-size:12px; margin-bottom:8px; background:#fff; padding:6px 10px; border-radius:8px;"></div>
                    ` : `
                        <input type="text" id="reviewerName" placeholder="اسمك (اختياري)" style="padding:8px; font-size:12px;">
                    `)}
                    <div style="text-align:center; margin-bottom:8px;">
                        <div class="star-rating" id="starContainer">
                            <span class="star selected" onclick="setRating(1)">★</span>
                            <span class="star selected" onclick="setRating(2)">★</span>
                            <span class="star selected" onclick="setRating(3)">★</span>
                            <span class="star selected" onclick="setRating(4)">★</span>
                            <span class="star selected" onclick="setRating(5)">★</span>
                        </div>
                    </div>
                    <textarea id="prodReviewComment" placeholder="اكتب تعليقك هنا..." style="height:50px; font-size:12px;"></textarea>
                    <button class="secondary" style="padding: 6px; font-size: 12px;" onclick="submitReview('${p.name}')">إرسال التقييم 🌟</button>
                    `}
                </div>
                `}
            `;

            modal.classList.remove('hidden');

            if(GOOGLE_SIGNIN_ENABLED && window.google && google.accounts && google.accounts.id) {
                currentReviewerGoogleUser = null;
                try {
                    google.accounts.id.initialize({ client_id: GOOGLE_CLIENT_ID, callback: handleGoogleReviewCredential });
                    google.accounts.id.renderButton(document.getElementById('googleSignInBtn'), { theme: 'outline', size: 'medium', text: 'signin_with' });
                } catch(e) { /* لو حدث خطأ في الإعداد، تجاهله بأمان دون كسر الصفحة */ }
            }
        }

        function closeProductModal() {
            document.getElementById('productModal').classList.add('hidden');
        }

        // --- نافذة "سياسة الإرجاع": بتفتح فوق صفحة تفاصيل المنتج لما المشتري يضغط عليها ---
        function openReturnPolicyModal() {
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            let store = stores[activeStore];
            let text = (store && store.returnPolicy && store.returnPolicy.trim()) ? store.returnPolicy.trim() : 'لم يحدد صاحب المتجر شروط إرجاع تفصيلية بعد.';
            document.getElementById('returnPolicyModalBody').innerText = text;
            document.getElementById('returnPolicyModal').classList.remove('hidden');
        }

        function closeReturnPolicyModal() {
            document.getElementById('returnPolicyModal').classList.add('hidden');
        }

        function setRating(rating) {
            tempSelectedRating = rating;
            let stars = document.querySelectorAll('#starContainer .star');
            stars.forEach((star, index) => {
                if(index < rating) star.classList.add('selected');
                else star.classList.remove('selected');
            });
        }

        function submitReview(prodName) {
            let author, email = '';
            let __storesForReview = JSON.parse(localStorage.getItem('allStores')) || {};
            let __storeForReview = __storesForReview[activeStore];
            if(__storeForReview && __storeForReview.reviewsRequireLogin === true) {
                let sess = getBuyerSession(activeStore);
                if(!sess) { alert(t('review_login_required_msg', 'لازم تسجّل دخولك بحساب مشترِي في هذا المتجر الأول عشان تضيف تقييم.')); return; }
                author = sess.name || 'عميل';
                email = sess.buyerId && sess.buyerId.includes('@') ? sess.buyerId : '';
            } else if(GOOGLE_SIGNIN_ENABLED) {
                if(!currentReviewerGoogleUser) { alert('برجاء تسجيل الدخول بحساب جوجل أولاً لإضافة تقييم.'); return; }
                author = currentReviewerGoogleUser.name;
                email = currentReviewerGoogleUser.email || '';
            } else {
                author = document.getElementById('reviewerName').value.trim() || 'عميل';
            }
            let comment = document.getElementById('prodReviewComment').value.trim();
            let date = new Date().toISOString().split('T')[0];
            
            let stores = JSON.parse(localStorage.getItem('allStores'));
            let store = stores[activeStore];

            // منع حساب جوجل محظور من إضافة مراجعة جديدة في هذا المتجر تحديداً
            if(email && store.blockedReviewers && store.blockedReviewers.includes(email)) {
                alert('عذراً، لا يمكنك إضافة مراجعات في هذا المتجر.');
                return;
            }

            let product = store.products.find(p => p.name === prodName);

            if(!product.reviews) product.reviews = [];
            let newReview = { rating: tempSelectedRating, author, email, comment, date, reply: '' };
            product.reviews.push(newReview);

            if(!saveAllStores(stores)) return;

            // ☁️ نفس فكرة الطلبات: التقييم بيتبعت مباشرة للسحابة فورًا، مستقل عن أي
            // حفظ تاني، وبدون ما يحتاج العميل يكون مسجّل دخول - قاعدة الأمان بتسمح
            // بالإنشاء (create) للجميع في مجموعة "reviews" الفرعية بس.
            if(window.pushReviewDirectly) {
                window.pushReviewDirectly(activeStore, prodName, newReview).catch(function() {});
            }

            showToast('تم تسجيل مراجعتك وتقييمك بنجاح! 🌟');
            closeProductModal();
            renderHome();
        }

        // --- يسمح لصاحب المتجر بالرد على مراجعة عميل ---
        function replyToReview(prodName, idx) {
            let stores = JSON.parse(localStorage.getItem('allStores'));
            let store = stores[activeStore];
            let product = store.products.find(p => p.name === prodName);
            let existingReply = product.reviews[idx].reply || '';
            let reply = prompt('اكتب ردك على هذه المراجعة:', existingReply);
            if(reply === null) return;
            product.reviews[idx].reply = reply.trim();
            if(!saveAllStores(stores)) return;
            openProductDetails(prodName);
        }

        // --- يسمح لصاحب المتجر بحظر حساب جوجل معيّن من إضافة مراجعات جديدة في متجره فقط (لا يحذف مراجعاته القديمة) ---
        function blockReviewer(prodName, idx) {
            let stores = JSON.parse(localStorage.getItem('allStores'));
            let store = stores[activeStore];
            let product = store.products.find(p => p.name === prodName);
            let email = product.reviews[idx].email;
            if(!email) { alert('هذه المراجعة غير مرتبطة بحساب جوجل، لا يمكن حظرها بهذه الطريقة (يمكنك حذفها فقط).'); return; }
            if(!confirm(`هل تريد حظر "${product.reviews[idx].author}" (${email}) من إضافة أي مراجعات جديدة في متجرك؟`)) return;

            if(!store.blockedReviewers) store.blockedReviewers = [];
            if(!store.blockedReviewers.includes(email)) store.blockedReviewers.push(email);
            if(!saveAllStores(stores)) return;
            showToast('✅ تم حظر هذا الحساب من إضافة مراجعات جديدة في متجرك');
        }

        // --- يسمح لصاحب المتجر بحذف أي مراجعة/تعليق غير لائق من متجره فقط ---
        function deleteReview(prodName, idx) {
            if(!confirm('هل تريد حذف هذه المراجعة؟')) return;
            let stores = JSON.parse(localStorage.getItem('allStores'));
            let store = stores[activeStore];
            let product = store.products.find(p => p.name === prodName);
            product.reviews.splice(idx, 1);
            if(!saveAllStores(stores)) return;
            openProductDetails(prodName);
        }

        // --- 6. السلة وطرق الدفع وتأكيد التحويل ---
        function addToCart(name, price, storeName) {
            let existing = cart.find(item => item.name === name && item.store === storeName);
            if(existing) {
                existing.qty = (existing.qty || 1) + 1;
            } else {
                cart.push({ name, price: parseFloat(price), store: storeName, qty: 1 });
            }
            localStorage.setItem('appCart', JSON.stringify(cart));
            updateCartBadge();
            showToast('تمت الإضافة للسلة 🛒');

            let cardArea = document.querySelector(`.product-card[data-pname="${name.replace(/"/g, '\\"')}"] .cart-btn-area`);
            if(cardArea) cardArea.innerHTML = renderCardCartControl(name, price);
        }

        // --- إشعار سريع غير معطّل (بديل alert) أعلى الشاشة يختفي تلقائياً ---
        let toastTimeout = null;
        function showToast(message) {
            let toast = document.getElementById('appToast');
            if(!toast) {
                toast = document.createElement('div');
                toast.id = 'appToast';
                toast.className = 'app-toast';
                document.body.appendChild(toast);
            }
            toast.innerText = message;
            toast.classList.add('show');
            clearTimeout(toastTimeout);
            toastTimeout = setTimeout(() => toast.classList.remove('show'), 1600);
        }

        // --- نافذة تنبيه موحّدة بهوية المنصة (بديل لـ alert() الافتراضي في المتصفح، اللي شكله
        // غريب وغير متسق مع تصميم المتجر). بتقبل عنوان، رمز تعبيري، ومحتوى HTML للجسم، وممكن
        // كمان تدّيها أزرار اقتراحات إضافية (زي أسماء بديلة) بتتنفذ لما المستخدم يضغط عليها. ---
        function showAppModal(title, icon, bodyHtml, extraButtonsHtml) {
            let existing = document.getElementById('appModalOverlay');
            if(existing) existing.remove();
            let overlay = document.createElement('div');
            overlay.id = 'appModalOverlay';
            overlay.className = 'app-modal-overlay';
            overlay.innerHTML = `
                <div class="app-modal-card">
                    <div class="app-modal-icon">${icon || 'ℹ️'}</div>
                    <div class="app-modal-title">${title}</div>
                    <div class="app-modal-body">${bodyHtml}</div>
                    ${extraButtonsHtml || ''}
                    <button class="app-modal-ok-btn" onclick="closeAppModal()">${t('modal_ok_btn', 'حسنًا')}</button>
                </div>
            `;
            overlay.addEventListener('click', (e) => { if(e.target === overlay) closeAppModal(); });
            document.body.appendChild(overlay);
            requestAnimationFrame(() => overlay.classList.add('show'));
        }
        function closeAppModal() {
            let overlay = document.getElementById('appModalOverlay');
            if(!overlay) return;
            overlay.classList.remove('show');
            setTimeout(() => overlay.remove(), 200);
        }

        // 🎨 استبدال alert() الافتراضي بتاع المتصفح (اللي شكله غريب عن هوية المنصة) بنافذة
        // موحدة بنفس تصميم المتجر، من غير ما نحتاج نلمس كل استخدام alert() في الكود
        // (أكتر من ٣٠ مكان مختلف في المتجر ولوحة الإدارة) واحد واحد. أي استدعاء عادي
        // لـ alert() في أي مكان في الكود (حتى الأماكن القديمة اللي مكتوبة زمان) هيستخدم
        // تلقائيًا النافذة الجديدة بمجرد إضافة السطر ده، من غير أي تعديل تاني مطلوب.
        const nativeAlert = window.alert.bind(window);
        window.alert = function(message) {
            try {
                showAppModal(t('generic_alert_title', 'تنبيه'), 'ℹ️', String(message).replace(/\n/g, '<br>'));
            } catch(e) {
                nativeAlert(message); // خط دفاع أخير لو حصلت أي مشكلة غير متوقعة في النافذة الجديدة
            }
        };
        // بتملأ خانة اسم الدخول المطلوبة باقتراح جاهز وتقفل نافذة التنبيه، عشان المستخدم
        // يقدر يكمل تسجيله بضغطة واحدة من غير ما يكتب أو ينسخ حاجة يدويًا.
        function applySuggestedName(inputId, value) {
            let input = document.getElementById(inputId);
            if(input) { input.value = value; input.focus(); }
            closeAppModal();
        }

        function updateCartBadge() {
            // مهم: العدّاد بيحسب فقط منتجات المتجر الحالي، مش كل المتاجر مجمّعة مع بعض
            let storeCartItems = cart.filter(item => item.store === activeStore);
            let totalQty = storeCartItems.reduce((sum, item) => sum + (item.qty || 1), 0);
            document.getElementById('cartCount').innerText = totalQty;
        }

        function selectPaymentMethod(method) {
            selectedPayment = method;
            document.getElementById('payCOD').classList.toggle('active', method === 'COD');
            document.getElementById('payCash').classList.toggle('active', method === 'CASH');
            
            let vodaFields = document.getElementById('vodafoneCashFields');
            if(method === 'CASH') vodaFields.classList.remove('hidden');
            else vodaFields.classList.add('hidden');
        }

        function selectDeliveryOption(mode) {
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            let store = stores[activeStore];
            if(mode === 'delivery' && !storeHasDelivery(store)) return;
            selectedDeliveryMode = mode;
            document.getElementById('pickupOption').classList.toggle('active', mode === 'pickup');
            document.getElementById('deliveryOption').classList.toggle('active', mode === 'delivery');
            renderCart();
        }

        function renderCart() {
            let listDiv = document.getElementById('cartItemsList');
            let totalEl = document.getElementById('cartTotal');
            let vodaCashNum = document.getElementById('vodaCashNumberDisplay');
            let stores = JSON.parse(localStorage.getItem('allStores'));
            let currentStoreObj = stores ? stores[activeStore] : null;

            // مهم جداً: السلة بتعرض فقط منتجات المتجر الحالي (activeStore)، مش كل المنتجات من كل المتاجر مجمّعة مع بعض،
            // لأن كل متجر له رقم واتساب وعملة ورسوم توصيل مختلفة، ودمجهم كان بيسبب لخبطة وأرقام غلط.
            // كل متجر مستقل تمامًا عن غيره حتى في العرض - مفيش أي إشارة أو تنويه عن منتجات في متاجر تانية.
            let storeCart = cart.filter(item => item.store === activeStore);

            // إظهار/إخفاء خيار التوصيل بناءً على إعدادات التاجر
            let deliveryOptionEl = document.getElementById('deliveryOption');
            let deliveryFeeNoteEl = document.getElementById('deliveryFeeNote');
            let __zones = getStoreDeliveryZones(currentStoreObj);
            let __zoneBox = document.getElementById('deliveryZoneBox');
            if(storeHasDelivery(currentStoreObj)) {
                deliveryOptionEl.classList.remove('hidden');
                let thresholdTxt = currentStoreObj.freeDeliveryThreshold ? ` (مجاني للطلبات فوق ${currentStoreObj.freeDeliveryThreshold} ${currentStoreObj.currency})` : '';
                if(__zones.length > 0) {
                    deliveryFeeNoteEl.innerText = t('cart_delivery_by_zone', 'رسوم التوصيل حسب المنطقة') + thresholdTxt;
                } else {
                    deliveryFeeNoteEl.innerText = `رسوم التوصيل: ${currentStoreObj.deliveryFee} ${currentStoreObj.currency}${thresholdTxt}`;
                }
                if(__zoneBox) {
                    if(__zones.length > 0 && selectedDeliveryMode === 'delivery') {
                        if(!__zones.find(z => z.name === selectedDeliveryZone)) selectedDeliveryZone = __zones[0].name;
                        let sel = document.getElementById('deliveryZoneSelect');
                        sel.innerHTML = __zones.map(z => `<option value="${String(z.name).replace(/"/g,'&quot;')}" ${z.name === selectedDeliveryZone ? 'selected' : ''}>${z.name} — ${z.fee} ${currentStoreObj.currency}</option>`).join('');
                        __zoneBox.classList.remove('hidden');
                    } else { __zoneBox.classList.add('hidden'); }
                }
            } else {
                if(__zoneBox) __zoneBox.classList.add('hidden');
                deliveryOptionEl.classList.add('hidden');
                if(selectedDeliveryMode === 'delivery') { selectedDeliveryMode = 'pickup'; }
            }
            document.getElementById('pickupOption').classList.toggle('active', selectedDeliveryMode === 'pickup');
            document.getElementById('deliveryOption').classList.toggle('active', selectedDeliveryMode === 'delivery');

            if(storeCart.length === 0) {
                listDiv.innerHTML = '<div style="text-align:center; padding:15px; color:var(--text-muted);">' + t('cart_empty_in_store', 'السلة فارغة في هذا المتجر.') + '</div>';
                totalEl.innerText = t('cart_total_label', 'الإجمالي') + ': 0';
                return;
            }

            listDiv.innerHTML = '';
            let subtotal = 0;

            if(currentStoreObj && currentStoreObj.vodafoneCash) {
                vodaCashNum.innerText = currentStoreObj.vodafoneCash;
            }
            
            storeCart.forEach((item) => {
                let realIndex = cart.indexOf(item);
                let qty = item.qty || 1;
                let lineTotal = item.price * qty;
                subtotal += lineTotal;
                listDiv.innerHTML += `
                    <div style="display:flex; justify-content:space-between; align-items:center; padding:8px 0; border-bottom:1px solid var(--border-color);">
                        <div>
                            <strong style="font-size:13px;">${item.name}${qty > 1 ? ' × ' + qty : ''}</strong><br>
                            <span style="font-size:11px; color:var(--text-muted);">${item.store}</span>
                        </div>
                        <div style="display:flex; align-items:center; gap:8px;">
                            <button style="width:auto; padding:2px 8px; margin:0; font-size:13px;" onclick="changeCartQty(${realIndex}, -1)">−</button>
                            <span style="font-weight:bold; color:var(--primary-color); font-size:13px;">${lineTotal}</span>
                            <button style="width:auto; padding:2px 8px; margin:0; font-size:13px;" onclick="changeCartQty(${realIndex}, 1)">+</button>
                            <i class="fa fa-trash-alt" style="color:#ef4444; cursor:pointer;" onclick="removeFromCart(${realIndex})"></i>
                        </div>
                    </div>
                `;
            });

            let finalTotal = subtotal + getDeliveryFeeForCurrentCart(currentStoreObj, subtotal);
            let currency = currentStoreObj ? currentStoreObj.currency : '';
            if(selectedDeliveryMode === 'delivery' && storeHasDelivery(currentStoreObj)) {
                let fee = getDeliveryFeeForCurrentCart(currentStoreObj, subtotal);
                totalEl.innerHTML = `${t('cart_subtotal_label','المجموع الفرعي')}: ${subtotal} ${currency} ${fee > 0 ? ('+ ' + t('cart_delivery_word','توصيل') + ' ' + fee + ' ' + currency) : ('(' + t('cart_free_delivery_word','توصيل مجاني') + ')')} <br> ${t('cart_total_label','الإجمالي')}: ${finalTotal} ${currency}`;
            } else {
                totalEl.innerText = `${t('cart_total_label','الإجمالي')}: ${finalTotal} ${currency}`;
            }
        }

        // --- حساب رسوم التوصيل الفعلية بناءً على إعدادات التاجر (وليست شكلية) ---
        var selectedDeliveryZone = '';
        // 📍 مناطق التوصيل: كل منطقة ليها اسم وسعر شحن خاص بيها (التاجر بيحددها)
        function getStoreDeliveryZones(store) {
            return ((store && store.deliveryZones) || []).filter(z => z && z.name && !isNaN(parseFloat(z.fee)));
        }
        function storeHasDelivery(store) {
            if(!store) return false;
            return (store.deliveryFee !== null && store.deliveryFee !== undefined) || getStoreDeliveryZones(store).length > 0;
        }
        function selectDeliveryZone(name) {
            selectedDeliveryZone = name;
            renderCart();
        }
        function getDeliveryFeeForCurrentCart(store, subtotal) {
            if(selectedDeliveryMode !== 'delivery') return 0;
            if(!storeHasDelivery(store)) return 0;
            if(store.freeDeliveryThreshold && subtotal >= store.freeDeliveryThreshold) return 0;
            let zones = getStoreDeliveryZones(store);
            if(zones.length > 0) {
                let z = zones.find(x => x.name === selectedDeliveryZone) || zones[0];
                return parseFloat(z.fee);
            }
            return store.deliveryFee;
        }

        function removeFromCart(index) {
            cart.splice(index, 1);
            localStorage.setItem('appCart', JSON.stringify(cart));
            updateCartBadge();
            renderCart();
        }

        function changeCartQty(index, delta) {
            cart[index].qty = (cart[index].qty || 1) + delta;
            if(cart[index].qty <= 0) { cart.splice(index, 1); }
            localStorage.setItem('appCart', JSON.stringify(cart));
            updateCartBadge();
            renderCart();
        }

        function openDeliveryModal() {
            if(cart.length === 0) { alert(t('alert_cart_empty')); return; }
            // 🔒 لو التاجر عطّل الشراء كزائر (guestCheckoutAllowed === false) ومفيش عميل
            // مسجّل دخوله دلوقتي في المتجر ده، نوقفه عند نافذة تسجيل الدخول/إنشاء حساب
            // بدل ما نكمله لنافذة بيانات التسليم.
            let __storesChk = JSON.parse(localStorage.getItem('allStores')) || {};
            let __storeChk = __storesChk[activeStore];
            if(__storeChk && __storeChk.guestCheckoutAllowed === false && !getBuyerSession(activeStore)) {
                openBuyerAuthModal('login', t('guest_checkout_blocked_msg', 'هذا المتجر يتطلب تسجيل الدخول لإتمام الشراء. سجّل دخولك أو أنشئ حسابًا للمتابعة.'));
                return;
            }
            if(selectedPayment === 'CASH') {
                let senderInput = document.getElementById('cashTransferSenderInput').value.trim();
                if(!senderInput) {
                    alert(t('alert_cash_sender_required'));
                    return;
                }
            }
            // ملحوظة مهمة: التحقق من "العنوان" اتنقل لدالة sendOrder() بدل ما يكون هنا،
            // لأن هنا لسه نافذة "بيانات التسليم" (اللي فيها خانة العنوان نفسها) مقفولة وماتفتحش
            // إلا بعد آخر السطر تحت. لو التحقق فضل هنا، العميل هياخد رسالة "اكتب العنوان" من غير
            // ما يشوف خانة العنوان خالص عشان يكتب فيها - وده كان البلوك اللي بيوقف عملية الشراء.

            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            let store = stores[activeStore];
            document.getElementById('sendViaMessengerBtn').classList.toggle('hidden', !(store && store.messenger));
            document.getElementById('sendViaTelegramBtn').classList.toggle('hidden', !(store && store.telegram));

            // ============================================================
            // 📞 خانة رقم الهاتف عند الطلب بقت بـ 3 أوضاع يحددها التاجر (أو الأدمن/مساعديه
            // المصرّح لهم) لكل متجر لوحده - مش وضع واحد مفروض على الجميع:
            //  - 'optional' (الافتراضي): الخانة ظاهرة برسالة واضحة إنها اختيارية.
            //  - 'hidden': الخانة مخفية تمامًا (يعتمد على إن واتساب نفسه بيوريك رقم اللي بيكلمك).
            //  - 'required': الخانة إجبارية زي أي متجر إلكتروني رسمي.
            // ============================================================
            let phoneMode = (store && store.phoneFieldMode) || 'optional';
            let phoneBox = document.getElementById('buyerPhoneFieldBox');
            let phoneLabel = document.getElementById('buyerPhoneLabel');
            let phoneHint = document.getElementById('buyerPhoneHint');
            let phoneInput = document.getElementById('buyerPhoneInput');

            if(phoneMode === 'hidden') {
                phoneBox.classList.add('hidden');
                phoneInput.value = '';
            } else if(phoneMode === 'required') {
                phoneBox.classList.remove('hidden');
                phoneLabel.textContent = 'رقم هاتفك (مطلوب):';
                phoneHint.textContent = 'التاجر يحتاج رقمك عشان يتواصل معك بخصوص طلبك ويكون واضح في فاتورتك.';
            } else {
                phoneBox.classList.remove('hidden');
                phoneLabel.textContent = t('optional_phone_label', 'رقم هاتفك (اختياري):');
                phoneHint.textContent = t('optional_phone_hint', 'لو حابب البائع يتواصل معك تليفونيًا بخصوص طلبك، سيبله رقمك هنا. مش شرط، وممكن تكمّل طلبك من غيره.');
            }

            // 👤 لو فيه حساب مشتري مسجّل دخوله في هذا المتجر، نعبّي عنوانه ورقمه تلقائيًا
            // (يقدر يعدّلهم لحظة الطلب لو حب، مش إجبارية).
            let __buyerSess = getBuyerSession(activeStore);
            if(__buyerSess) {
                let addrEl = document.getElementById('deliveryAddressInput');
                if(addrEl && !addrEl.value) addrEl.value = __buyerSess.address || '';
                if(phoneMode !== 'hidden' && phoneInput && !phoneInput.value) phoneInput.value = __buyerSess.phone || '';
            }

            document.getElementById('deliveryModal').classList.remove('hidden');
        }

        function closeDeliveryModal() {
            document.getElementById('deliveryModal').classList.add('hidden');
            document.getElementById('cashTransferSenderInput').value = '';
        }

        // ============================================================================
        // 👤 نظام حسابات المشترين داخل المتجر: تسجيل/دخول/ملف شخصي+طلبات/دمج سلة تلقائي
        // ============================================================================

        // 🗂️ الجلسة محفوظة محليًا لكل متجر لوحده (مفتاح مختلف لكل storeKey)، عشان مشتري
        // يقدر يكون مسجّل دخوله في متجر ومش مسجّل في متجر تاني في نفس الوقت.
        function getBuyerSession(storeKey) {
            try { return JSON.parse(localStorage.getItem('buyerSession_' + storeKey)) || null; }
            catch(e) { return null; }
        }
        function setBuyerSession(storeKey, data) {
            localStorage.setItem('buyerSession_' + storeKey, JSON.stringify(data));
            syncBuyerAccountIcon();
        }
        function clearBuyerSession(storeKey) {
            localStorage.removeItem('buyerSession_' + storeKey);
            syncBuyerAccountIcon();
        }

        // 🔘 زر "حسابي" في الشريط العلوي: لو مسجّل دخوله يفتحله ملفه وطلباته، لو لأ يفتحله
        // تسجيل الدخول/إنشاء حساب.
        function openBuyerAccountEntry() {
            if(!activeStore) return;
            if(getBuyerSession(activeStore)) openBuyerProfileModal();
            else openBuyerAuthModal('login');
        }

        // 🔄 يحدّث شكل أيقونة "حسابي" في الهيدر: مخفية خارج المتجر، وشكلها يتغيّر لو
        // فيه حساب مسجّل دخوله دلوقتي (دائرة ممتلئة) عن لو زائر (دائرة فاضية).
        function syncBuyerAccountIcon() {
            let btn = document.getElementById('buyerAccountBtn');
            let icon = document.getElementById('buyerAccountIcon');
            if(!btn || !icon) return;
            // 🚪 الأيقونة دلوقتي ظاهرة دايمًا (مش بس جوه متجر) عشان هي نفسها بوابة الدخول
            // الموحّدة لأي حد: عميل جوه متجر، أو صاحب متجر/تاجر من الصفحة الرئيسية للمنصة.
            btn.classList.remove('hidden');
            if(!activeStore) {
                let loggedMerchant = localStorage.getItem('currentActiveMerchant');
                let loggedAdmin = localStorage.getItem('isAdminLoggedIn') === 'true';
                icon.className = (loggedMerchant || loggedAdmin) ? 'fa fa-store' : 'fa fa-right-to-bracket';
                btn.title = (loggedMerchant || loggedAdmin) ? t('my_store_dashboard_label', 'لوحة إدارة متجري') : t('header_merchant_login_title', 'تسجيل الدخول للمتجر');
                return;
            }
            let sess = getBuyerSession(activeStore);
            icon.className = sess ? 'fa fa-circle-user' : 'fa fa-user-circle';
            btn.title = sess ? (sess.name || t('my_account_label', 'حسابي')) : t('login_register_label', 'تسجيل الدخول / حساب جديد');
        }

        // 🚪 نقطة الدخول الموحّدة الوحيدة في الهيدر: بتوجّه أي زائر تلقائيًا للمكان الصح
        // حسب وضعه بالظبط - عميل مسجّل دخوله، عميل زائر جوه متجر، أو صاحب متجر/أدمن من
        // الصفحة الرئيسية للمنصة - من غير ما يحتاج يختار بنفسه بين أيقونتين مختلفتين.
        function unifiedEntryClick() {
            if(activeStore) {
                let sess = getBuyerSession(activeStore);
                if(sess) { openBuyerProfileModal(); return; }
                openBuyerAuthModal('login');
                return;
            }
            switchTab('auth');
        }

        let __buyerAuthPendingMsg = '';
        function openBuyerAuthModal(tab, msg) {
            __buyerAuthPendingMsg = msg || '';
            switchBuyerAuthTab(tab || 'login');
            document.getElementById('buyerAuthModal').classList.remove('hidden');
            // 🔵 تسجيل الدخول بجوجل (لو المنصة فعّلت GOOGLE_CLIENT_ID حقيقي) - نفس الآلية
            // المستخدمة فعلاً مع تقييمات المنتجات وتسجيل التجار.
            if(GOOGLE_SIGNIN_ENABLED && window.google && google.accounts && google.accounts.id) {
                try {
                    google.accounts.id.initialize({ client_id: GOOGLE_CLIENT_ID, callback: handleGoogleBuyerCredential });
                    let box = document.getElementById('buyerGoogleSignInBox');
                    if(box) { box.innerHTML = ''; google.accounts.id.renderButton(box, { theme: 'outline', size: 'large', text: 'continue_with', width: 260 }); box.classList.remove('hidden'); }
                } catch(e) { /* تجاهل بأمان لو حصل أي خطأ في تهيئة جوجل */ }
            }
        }
        function closeBuyerAuthModal() {
            document.getElementById('buyerAuthModal').classList.add('hidden');
            __buyerAuthPendingMsg = '';
        }
        function switchBuyerAuthTab(tab) {
            let isLogin = tab === 'login';
            document.getElementById('buyerAuthLoginBox').classList.toggle('hidden', !isLogin);
            document.getElementById('buyerAuthRegisterBox').classList.toggle('hidden', isLogin);
            document.getElementById('buyerAuthLoginTabBtn').classList.toggle('active', isLogin);
            document.getElementById('buyerAuthRegisterTabBtn').classList.toggle('active', !isLogin);
            // 🏷️ عنوان واضح يتغيّر حسب التبويب المفتوح، بدل عنوان عام غامض.
            let titleEl = document.getElementById('buyerAuthModalTitle');
            if(titleEl) titleEl.textContent = isLogin ? t('buyer_login_title', 'تسجيل دخول المشتري') : t('buyer_register_title', 'تسجيل حساب مشترٍ جديد');
            let msgBox = document.getElementById('buyerAuthMsgBox');
            if(__buyerAuthPendingMsg) {
                msgBox.textContent = __buyerAuthPendingMsg;
                msgBox.classList.remove('hidden');
            } else {
                msgBox.classList.add('hidden');
            }
        }

        // 🔵 يُستدعى تلقائيًا بعد ما جوجل يرجّع هوية العميل بنجاح - بيسجّل دخوله أو ينشئله
        // حساب فورًا (بدون كلمة سر، البريد نفسه هو معرّف الحساب) ويدمج سلته ويقفل النافذة.
        async function handleGoogleBuyerCredential(response) {
            if(!activeStore) return;
            let payload = parseJwt(response.credential);
            if(!payload || !payload.email) { alert(t('buyer_generic_error', 'حصل خطأ، حاول مرة أخرى.')); return; }
            if(!window.loginOrRegisterBuyerWithGoogle) { alert(t('alert_no_internet', 'لا يوجد اتصال بالإنترنت حاليًا، حاول مرة أخرى.')); return; }
            try {
                let res = await window.loginOrRegisterBuyerWithGoogle(activeStore, payload.email, payload.name || '');
                if(!res.ok) { alert(t('buyer_generic_error', 'حصل خطأ، حاول مرة أخرى.')); return; }
                setBuyerSession(activeStore, { buyerId: res.buyerId, name: res.name, phone: res.phone || '', address: res.address || '' });
                await mergeCartOnBuyerLogin(activeStore, res.buyerId, res.savedCart || []);
                closeBuyerAuthModal();
            } catch(e) {
                console.error('handleGoogleBuyerCredential error:', e);
                alert(t('buyer_generic_error', 'حصل خطأ، حاول مرة أخرى.'));
            }
        }

        async function submitBuyerRegister() {
            if(!activeStore) return;
            let btn = document.getElementById('buyerRegSubmitBtn');
            try {
                let stores = JSON.parse(localStorage.getItem('allStores')) || {};
                let store = stores[activeStore];
                // 🚦 لو التاجر عطّل تسجيل مشترين جدد مؤقتًا من لوحته، نوقف هنا برسالة واضحة
                // (تسجيل الدخول لحسابات موجودة بالفعل يفضل شغال عادي، التعطيل للتسجيل الجديد بس).
                if(store && store.buyerRegistrationDisabled === true) {
                    alert(t('buyer_registration_disabled_msg', 'تسجيل حسابات مشترين جدد متوقف مؤقتًا في هذا المتجر. جرب تسجيل الدخول لو عندك حساب بالفعل.'));
                    return;
                }
                let name = document.getElementById('buyerRegNameInput').value.trim();
                let identifier = document.getElementById('buyerRegPhoneInput').value.trim();
                let address = document.getElementById('buyerRegAddressInput').value.trim();
                let password = document.getElementById('buyerRegPasswordInput').value;
                if(!name || !identifier || !password) { alert(t('buyer_fill_required', 'من فضلك اكتب الاسم ورقم الهاتف وكلمة السر')); return; }
                if(!window.registerBuyerAccount) { alert(t('alert_no_internet', 'لا يوجد اتصال بالإنترنت حاليًا، حاول مرة أخرى.')); return; }
                if(btn) btn.disabled = true;
                let res = await window.registerBuyerAccount(activeStore, { name, identifier, address, password });
                if(!res.ok) {
                    let msg = res.error === 'already_exists' ? t('buyer_phone_registered', 'رقم الهاتف/البريد ده مسجّل بحساب بالفعل، جرب تسجيل الدخول بدل كده.')
                        : res.error === 'weak_password' ? t('buyer_weak_password', 'كلمة السر لازم تكون 4 حروف/أرقام على الأقل.')
                        : res.error === 'invalid_identifier' ? t('buyer_invalid_identifier', 'اكتب رقم هاتف أو بريد إلكتروني صحيح.')
                        : t('buyer_generic_error', 'حصل خطأ، حاول مرة أخرى.');
                    alert(msg);
                    return;
                }
                setBuyerSession(activeStore, { buyerId: res.buyerId, name: res.name, phone: res.phone, address: res.address });
                await mergeCartOnBuyerLogin(activeStore, res.buyerId);
                closeBuyerAuthModal();
                alert(t('buyer_welcome_msg', 'أهلاً بك! تم إنشاء حسابك بنجاح.'));
            } catch(e) {
                // 🛟 شبكة أمان: أي خطأ غير متوقع (مثلاً crypto.subtle غير متاحة على صفحة مفتوحة
                // محليًا من غير https) هيظهر هنا بدل ما الزرار "يعلّق" من غير أي رد فعل ظاهر.
                console.error('submitBuyerRegister error:', e);
                alert(t('buyer_generic_error', 'حصل خطأ، حاول مرة أخرى.') + (e && e.message ? ' (' + e.message + ')' : ''));
            } finally {
                if(btn) btn.disabled = false;
            }
        }

        async function submitBuyerLogin() {
            if(!activeStore) return;
            let btn = document.getElementById('buyerLoginSubmitBtn');
            try {
                let identifier = document.getElementById('buyerLoginPhoneInput').value.trim();
                let password = document.getElementById('buyerLoginPasswordInput').value;
                if(!identifier || !password) { alert(t('buyer_fill_required', 'من فضلك اكتب الاسم ورقم الهاتف وكلمة السر')); return; }
                if(!window.loginBuyerAccount) { alert(t('alert_no_internet', 'لا يوجد اتصال بالإنترنت حاليًا، حاول مرة أخرى.')); return; }
                if(btn) btn.disabled = true;
                let res = await window.loginBuyerAccount(activeStore, identifier, password);
                if(!res.ok) {
                    let msg = res.error === 'not_found' ? t('buyer_not_found', 'لا يوجد حساب بهذا الرقم أو البريد في هذا المتجر.')
                        : res.error === 'wrong_password' ? t('buyer_wrong_password', 'كلمة السر غير صحيحة.')
                        : res.error === 'invalid_identifier' ? t('buyer_invalid_identifier', 'اكتب رقم هاتف أو بريد إلكتروني صحيح.')
                        : t('buyer_generic_error', 'حصل خطأ، حاول مرة أخرى.');
                    alert(msg);
                    return;
                }
                setBuyerSession(activeStore, { buyerId: res.buyerId, name: res.name, phone: res.phone, address: res.address });
                await mergeCartOnBuyerLogin(activeStore, res.buyerId, res.savedCart || []);
                closeBuyerAuthModal();
            } catch(e) {
                console.error('submitBuyerLogin error:', e);
                alert(t('buyer_generic_error', 'حصل خطأ، حاول مرة أخرى.') + (e && e.message ? ' (' + e.message + ')' : ''));
            } finally {
                if(btn) btn.disabled = false;
            }
        }

        // 🔀 دمج السلة المحلية (اللي كانت عند الزائر قبل تسجيل الدخول) مع سلته المحفوظة
        // على حسابه في السحابة (لو موجودة) - بنجمع الكميات لنفس المنتج، ونحتفظ بأي منتج
        // موجود في أي من الاثنين. بعد الدمج بنحفظ النسخة الموحّدة تاني على الحساب.
        async function mergeCartOnBuyerLogin(storeKey, buyerId, savedCart) {
            try {
                if(savedCart === undefined && window.fetchBuyerOrders) {
                    // لو ملهاش savedCart جاهزة (حالة التسجيل الجديد) معندناش حاجة ندمجها
                    savedCart = [];
                }
                let localItems = cart.filter(i => i.store === storeKey);
                let otherItems = cart.filter(i => i.store !== storeKey);
                let merged = localItems.slice();
                (savedCart || []).forEach(savedItem => {
                    let existing = merged.find(i => i.name === savedItem.name);
                    if(existing) existing.qty = (existing.qty || 1) + (savedItem.qty || 1);
                    else merged.push(savedItem);
                });
                cart = otherItems.concat(merged);
                localStorage.setItem('appCart', JSON.stringify(cart));
                updateCartBadge();
                if(typeof renderCart === 'function') renderCart();
                if(window.saveBuyerCart) window.saveBuyerCart(storeKey, buyerId, merged);
            } catch(e) { console.warn('⚠️ تعذر دمج السلة:', e.message); }
        }

        function logoutBuyer() {
            if(!activeStore) return;
            let sess = getBuyerSession(activeStore);
            if(sess && window.saveBuyerCart) {
                window.saveBuyerCart(activeStore, sess.buyerId, cart.filter(i => i.store === activeStore));
            }
            clearBuyerSession(activeStore);
            closeBuyerProfileModal();
        }

        async function openBuyerProfileModal() {
            if(!activeStore) return;
            let sess = getBuyerSession(activeStore);
            if(!sess) { openBuyerAuthModal('login'); return; }
            document.getElementById('buyerProfileNameInput').value = sess.name || '';
            document.getElementById('buyerProfilePhoneDisplay').textContent = sess.phone || '';
            document.getElementById('buyerProfileAddressInput').value = sess.address || '';
            document.getElementById('buyerProfileOldPasswordInput').value = '';
            document.getElementById('buyerProfileNewPasswordInput').value = '';
            document.getElementById('buyerProfileOrdersList').innerHTML = '<p style="text-align:center; color:var(--text-muted); font-size:12px;">⏳ ' + t('loading_label', 'جاري التحميل...') + '</p>';
            document.getElementById('buyerProfileModal').classList.remove('hidden');
            if(window.fetchBuyerOrders) {
                let orders = await window.fetchBuyerOrders(activeStore, sess.buyerId);
                renderBuyerOrdersList(orders);
            } else {
                document.getElementById('buyerProfileOrdersList').innerHTML = '';
            }
            initBuyerChatWatch(activeStore, sess.buyerId);
        }
        function closeBuyerProfileModal() {
            document.getElementById('buyerProfileModal').classList.add('hidden');
            stopBuyerChatWatch();
        }

        // ============================================================
        // 💬 شات المشترِي مع صاحب المتجر (جانب المشترِي) - منفصل تمامًا عن شات
        // التاجر/الدعم. بيُفتح تلقائيًا مع ملفه الشخصي، ويتوقف لما يقفل الملف.
        // ============================================================
        let __buyerChatUnsub = null;
        let __buyerChatMsgsCache = [];
        function initBuyerChatWatch(storeKey, buyerId) {
            stopBuyerChatWatch();
            if(!storeKey || !buyerId || !window.watchBuyerChatMessages) return;
            __buyerChatUnsub = window.watchBuyerChatMessages(storeKey, buyerId, function(msgs) {
                __buyerChatMsgsCache = msgs;
                renderBuyerChatMessages();
                if(window.markBuyerChatThreadRead) window.markBuyerChatThreadRead(storeKey, buyerId, 'buyer');
            });
        }
        function stopBuyerChatWatch() {
            if(__buyerChatUnsub) { try { __buyerChatUnsub(); } catch(e) {} __buyerChatUnsub = null; }
            __buyerChatMsgsCache = [];
        }
        function renderBuyerChatMessages() {
            let box = document.getElementById('buyerChatMessagesBox');
            if(!box) return;
            if(!__buyerChatMsgsCache.length) {
                box.innerHTML = '<p style="text-align:center; color:var(--text-muted); font-size:11.5px; margin:8px 0;">' + t('buyer_chat_empty', 'ابدأ المحادثة مع صاحب المتجر من هنا.') + '</p>';
                return;
            }
            box.innerHTML = __buyerChatMsgsCache.map(function(m) {
                let mine = m.senderType === 'buyer';
                return '<div style="align-self:' + (mine ? 'flex-end' : 'flex-start') + '; max-width:80%; background:' + (mine ? 'var(--primary-color)' : '#fff') + '; color:' + (mine ? '#fff' : '#333') + '; border:1px solid var(--border-color); border-radius:10px; padding:6px 10px; font-size:12.5px; position:relative;">' +
                    '<span>' + escapeHtml(m.text || '') + '</span>' +
                    (mine ? ' <i class="fa fa-trash" style="cursor:pointer; opacity:0.7; font-size:10px; margin-right:6px;" onclick="deleteBuyerChatMsgUI(\'' + m.id + '\')"></i>' : '') +
                '</div>';
            }).join('');
            box.scrollTop = box.scrollHeight;
        }
        function sendBuyerChatMsg() {
            if(!activeStore) return;
            let sess = getBuyerSession(activeStore);
            if(!sess) return;
            let input = document.getElementById('buyerChatInput');
            let text = input.value.trim();
            if(!text || !window.sendBuyerChatMessage) return;
            input.value = '';
            window.sendBuyerChatMessage(activeStore, sess.buyerId, 'buyer', text, sess.name || '');
        }
        function deleteBuyerChatMsgUI(msgId) {
            if(!activeStore) return;
            let sess = getBuyerSession(activeStore);
            if(!sess || !window.deleteBuyerChatMessage) return;
            if(!confirm(t('buyer_chat_delete_confirm', 'تحذف الرسالة دي؟'))) return;
            window.deleteBuyerChatMessage(activeStore, sess.buyerId, msgId);
        }

        // 🗑️ المشترِي يحذف حسابه بنفسه نهائيًا (بعد تأكيد صريح)
        async function confirmDeleteBuyerAccountSelf() {
            if(!activeStore) return;
            let sess = getBuyerSession(activeStore);
            if(!sess) return;
            if(!confirm(t('buyer_delete_account_confirm', 'هيتم حذف حسابك نهائيًا من هذا المتجر وكل بياناته (الطلبات المحفوظة، المحادثة). متأكد؟'))) return;
            if(!window.deleteBuyerAccount) { alert(t('alert_no_internet', 'لا يوجد اتصال بالإنترنت حاليًا، حاول مرة أخرى.')); return; }
            let ok = await window.deleteBuyerAccount(activeStore, sess.buyerId);
            if(ok) {
                clearBuyerSession(activeStore);
                closeBuyerProfileModal();
                alert(t('buyer_delete_account_done', 'تم حذف حسابك بنجاح.'));
            } else {
                alert(t('buyer_generic_error', 'حصل خطأ، حاول مرة أخرى.'));
            }
        }

        function renderBuyerOrdersList(orders) {
            let box = document.getElementById('buyerProfileOrdersList');
            if(!orders || orders.length === 0) {
                box.innerHTML = '<p style="text-align:center; color:var(--text-muted); font-size:12px;">' + t('buyer_no_orders', 'لا يوجد لديك أي طلبات بعد.') + '</p>';
                return;
            }
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            let store = stores[activeStore] || {};
            let statusLabels = { pending: '🟡 ' + t('status_pending', 'قيد الانتظار'), confirmed: '🔵 ' + t('status_confirmed', 'تم التأكيد'), completed: '🟢 ' + t('status_completed', 'تم التسليم'), cancelled: '🔴 ' + t('status_cancelled', 'ملغي') };
            box.innerHTML = orders.map(o => `
                <div class="box" style="padding:10px; margin-bottom:8px; font-size:12.5px;">
                    <div style="display:flex; justify-content:space-between;">
                        <strong>#${escapeHtml(String(o.orderNo || ''))}</strong>
                        <span>${statusLabels[o.status] || o.status || ''}</span>
                    </div>
                    <div style="color:var(--text-muted); font-size:11px; margin:3px 0;">${escapeHtml(o.date || '')}</div>
                    <div>${(o.items || []).map(i => escapeHtml(i.name) + ' ×' + (i.qty || 1)).join('، ')}</div>
                    <div style="margin-top:4px; font-weight:bold;">${t('order_total_label', 'الإجمالي')}: ${o.total || 0} ${store.currency || ''}</div>
                </div>
            `).join('');
        }

        async function saveBuyerProfileEdits() {
            if(!activeStore) return;
            let sess = getBuyerSession(activeStore);
            if(!sess) return;
            let name = document.getElementById('buyerProfileNameInput').value.trim();
            let address = document.getElementById('buyerProfileAddressInput').value.trim();
            if(window.updateBuyerProfile) await window.updateBuyerProfile(activeStore, sess.buyerId, { name, address });
            sess.name = name; sess.address = address;
            setBuyerSession(activeStore, sess);
            alert(t('buyer_profile_saved', 'تم حفظ بياناتك بنجاح.'));
        }

        async function submitBuyerPasswordChangeFromProfile() {
            if(!activeStore) return;
            let sess = getBuyerSession(activeStore);
            if(!sess) return;
            let oldPw = document.getElementById('buyerProfileOldPasswordInput').value;
            let newPw = document.getElementById('buyerProfileNewPasswordInput').value;
            if(!oldPw || !newPw) { alert(t('buyer_fill_both_passwords', 'اكتب كلمة السر الحالية والجديدة.')); return; }
            if(!window.changeBuyerPassword) return;
            let res = await window.changeBuyerPassword(activeStore, sess.buyerId, oldPw, newPw);
            if(!res.ok) {
                alert(res.error === 'wrong_password' ? t('buyer_wrong_password', 'كلمة السر غير صحيحة.') : t('buyer_generic_error', 'حصل خطأ، حاول مرة أخرى.'));
                return;
            }
            document.getElementById('buyerProfileOldPasswordInput').value = '';
            document.getElementById('buyerProfileNewPasswordInput').value = '';
            alert(t('buyer_password_changed', 'تم تغيير كلمة السر بنجاح.'));
        }

        // ============================================================================
        // 👥 إدارة حسابات المشترين من لوحة التاجر: عرض كل المشترين المسجلين في متجره،
        // وإمكانية حذف أي حساب (مثلاً لعميل مزعج أو حساب تجريبي).
        // ============================================================================
        async function openBuyerManagementModal() {
            let merchant = localStorage.getItem('currentActiveMerchant');
            if(!merchant) return;
            document.getElementById('buyerManagementModal').classList.remove('hidden');
            document.getElementById('buyerManagementList').innerHTML = '<p style="text-align:center; color:var(--text-muted); font-size:12px;">⏳ ' + t('loading_label', 'جاري التحميل...') + '</p>';
            if(!window.fetchAllStoreBuyers) {
                document.getElementById('buyerManagementList').innerHTML = '<p style="text-align:center; color:red; font-size:12px;">' + t('alert_no_internet', 'لا يوجد اتصال بالإنترنت حاليًا، حاول مرة أخرى.') + '</p>';
                return;
            }
            let buyers = await window.fetchAllStoreBuyers(merchant);
            renderBuyerManagementList(buyers);
        }
        function closeBuyerManagementModal() {
            document.getElementById('buyerManagementModal').classList.add('hidden');
        }
        function renderBuyerManagementList(buyers) {
            let box = document.getElementById('buyerManagementList');
            if(!buyers || buyers.length === 0) {
                box.innerHTML = '<p style="text-align:center; color:var(--text-muted); font-size:12px;">' + t('buyer_mgmt_none', 'لا يوجد مشترون مسجّلون في هذا المتجر بعد.') + '</p>';
                return;
            }
            box.innerHTML = buyers.map(b => `
                <div class="box" style="padding:10px; margin-bottom:8px; display:flex; justify-content:space-between; align-items:center; font-size:12.5px;">
                    <div>
                        <strong>${escapeHtml(b.name || '-')}</strong><br>
                        <span style="color:var(--text-muted); direction:ltr; display:inline-block;">${escapeHtml(b.buyerId || '')}</span>
                    </div>
                    <button class="secondary" style="width:auto; margin:0; padding:5px 10px; font-size:11px; background:#dc2626; color:#fff; border-color:#dc2626;" onclick="deleteBuyerFromManagement('${escapeHtml(b.buyerId).replace(/'/g, "\\'")}')"><i class="fa fa-trash"></i> ${t('buyer_mgmt_delete_btn', 'حذف')}</button>
                </div>
            `).join('');
        }
        async function deleteBuyerFromManagement(buyerId) {
            let merchant = localStorage.getItem('currentActiveMerchant');
            if(!merchant || !buyerId) return;
            if(!confirm(t('buyer_mgmt_delete_confirm', 'تأكيد حذف حساب هذا المشترِي نهائيًا؟ لن يقدر يدخل بنفس الحساب تاني.'))) return;
            if(!window.deleteBuyerAccount) return;
            let res = await window.deleteBuyerAccount(merchant, buyerId);
            if(!res) { alert(t('buyer_generic_error', 'حصل خطأ، حاول مرة أخرى.')); return; }
            openBuyerManagementModal();
        }

        // ============================================================
        // 💬 شات التاجر مع عملائه (جانب التاجر) - قائمة كل محادثات العملاء +
        // محادثة واحدة مفتوحة. منفصل تمامًا عن شات التاجر مع الدعم/الأدمن.
        // ============================================================
        let __buyerChatThreadsUnsub = null;
        let __buyerChatThreadsCache = [];
        function initBuyerChatThreadsWatch(storeKey) {
            stopBuyerChatThreadsWatch();
            if(!storeKey || !window.watchAllBuyerChatThreads) return;
            __buyerChatThreadsUnsub = window.watchAllBuyerChatThreads(storeKey, function(threads) {
                __buyerChatThreadsCache = threads;
                syncBuyerChatsBadge();
                let modal = document.getElementById('buyerChatThreadsModal');
                if(modal && !modal.classList.contains('hidden')) renderBuyerChatThreadsList();
            });
        }
        function stopBuyerChatThreadsWatch() {
            if(__buyerChatThreadsUnsub) { try { __buyerChatThreadsUnsub(); } catch(e) {} __buyerChatThreadsUnsub = null; }
            __buyerChatThreadsCache = [];
        }
        function syncBuyerChatsBadge() {
            let badge = document.getElementById('buyerChatsTotalBadge');
            if(!badge) return;
            let total = __buyerChatThreadsCache.reduce((a, th) => a + (th.unreadByMerchant || 0), 0);
            badge.textContent = total;
            badge.classList.toggle('hidden', total === 0);
        }
        function openBuyerChatThreadsModal() {
            document.getElementById('buyerChatThreadsModal').classList.remove('hidden');
            renderBuyerChatThreadsList();
        }
        function closeBuyerChatThreadsModal() {
            document.getElementById('buyerChatThreadsModal').classList.add('hidden');
        }
        function renderBuyerChatThreadsList() {
            let box = document.getElementById('buyerChatThreadsList');
            if(!box) return;
            if(!__buyerChatThreadsCache.length) {
                box.innerHTML = '<p style="text-align:center; color:var(--text-muted); font-size:12.5px; padding:10px 0;">' + t('buyer_chats_empty', 'مفيش أي محادثات مع عملاء لسه.') + '</p>';
                return;
            }
            box.innerHTML = __buyerChatThreadsCache.map(function(th) {
                let unread = th.unreadByMerchant || 0;
                return '<div onclick="openBuyerChatThreadModal(\'' + th.buyerId + '\', ' + JSON.stringify(th.buyerName || th.buyerId).replace(/"/g, '&quot;') + ')" style="display:flex; justify-content:space-between; align-items:center; gap:8px; padding:10px; border-bottom:1px solid var(--border-color); cursor:pointer;">' +
                    '<div style="overflow:hidden;"><strong style="font-size:13px;">' + escapeHtml(th.buyerName || th.buyerId) + '</strong>' +
                    '<div style="font-size:11.5px; color:var(--text-muted); white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">' + escapeHtml(th.lastMessage || '') + '</div></div>' +
                    (unread > 0 ? '<span style="background:#dc2626; color:#fff; font-size:10px; min-width:18px; height:18px; border-radius:9px; display:inline-flex; align-items:center; justify-content:center; padding:0 4px; flex-shrink:0;">' + unread + '</span>' : '') +
                '</div>';
            }).join('');
        }

        let __activeBuyerChatThreadBuyerId = null;
        let __merchantBuyerChatUnsub = null;
        let __merchantBuyerChatMsgsCache = [];
        function openBuyerChatThreadModal(buyerId, buyerName) {
            let merchant = localStorage.getItem('currentActiveMerchant');
            if(!merchant || !buyerId) return;
            __activeBuyerChatThreadBuyerId = buyerId;
            document.querySelector('#buyerChatThreadTitle span:last-child').textContent = buyerName || buyerId;
            document.getElementById('buyerChatThreadModal').classList.remove('hidden');
            if(__merchantBuyerChatUnsub) { try { __merchantBuyerChatUnsub(); } catch(e) {} __merchantBuyerChatUnsub = null; }
            if(window.watchBuyerChatMessages) {
                __merchantBuyerChatUnsub = window.watchBuyerChatMessages(merchant, buyerId, function(msgs) {
                    __merchantBuyerChatMsgsCache = msgs;
                    renderMerchantBuyerChatMessages();
                    if(window.markBuyerChatThreadRead) window.markBuyerChatThreadRead(merchant, buyerId, 'merchant');
                });
            }
        }
        function closeBuyerChatThreadModal() {
            document.getElementById('buyerChatThreadModal').classList.add('hidden');
            if(__merchantBuyerChatUnsub) { try { __merchantBuyerChatUnsub(); } catch(e) {} __merchantBuyerChatUnsub = null; }
            __activeBuyerChatThreadBuyerId = null;
            __merchantBuyerChatMsgsCache = [];
        }
        function renderMerchantBuyerChatMessages() {
            let box = document.getElementById('merchantBuyerChatMessagesBox');
            if(!box) return;
            if(!__merchantBuyerChatMsgsCache.length) {
                box.innerHTML = '<p style="text-align:center; color:var(--text-muted); font-size:11.5px; margin:8px 0;">' + t('buyer_chat_empty', 'ابدأ المحادثة مع صاحب المتجر من هنا.') + '</p>';
                return;
            }
            box.innerHTML = __merchantBuyerChatMsgsCache.map(function(m) {
                let mine = m.senderType === 'merchant';
                return '<div style="align-self:' + (mine ? 'flex-end' : 'flex-start') + '; max-width:80%; background:' + (mine ? 'var(--primary-color)' : '#fff') + '; color:' + (mine ? '#fff' : '#333') + '; border:1px solid var(--border-color); border-radius:10px; padding:6px 10px; font-size:12.5px;">' +
                    '<span>' + escapeHtml(m.text || '') + '</span>' +
                    (mine ? ' <i class="fa fa-trash" style="cursor:pointer; opacity:0.7; font-size:10px; margin-right:6px;" onclick="deleteMerchantBuyerChatMsgUI(\'' + m.id + '\')"></i>' : '') +
                '</div>';
            }).join('');
            box.scrollTop = box.scrollHeight;
        }
        function sendMerchantBuyerChatMsg() {
            let merchant = localStorage.getItem('currentActiveMerchant');
            if(!merchant || !__activeBuyerChatThreadBuyerId) return;
            let input = document.getElementById('merchantBuyerChatInput');
            let text = input.value.trim();
            if(!text || !window.sendBuyerChatMessage) return;
            input.value = '';
            window.sendBuyerChatMessage(merchant, __activeBuyerChatThreadBuyerId, 'merchant', text, '');
        }
        function deleteMerchantBuyerChatMsgUI(msgId) {
            let merchant = localStorage.getItem('currentActiveMerchant');
            if(!merchant || !__activeBuyerChatThreadBuyerId || !window.deleteBuyerChatMessage) return;
            if(!confirm(t('buyer_chat_delete_confirm', 'تحذف الرسالة دي؟'))) return;
            window.deleteBuyerChatMessage(merchant, __activeBuyerChatThreadBuyerId, msgId);
        }

        // --- تتبع الطلب: بيسمح لأي عميل (من غير أي حساب) يتابع حالة طلبه بنفسه، بالبحث في
        // سجل طلبات المتجر الحالي برقم الطلب + رقم الموبايل اللي طلب بيه كتحقق بسيط. ---
        // --- استرجاع كلمة المرور تلقائيًا عن طريق البريد الموثّق (بدون تدخل الأدمن) ---
        // بيدور على البريد في المتاجر (تجار/شركاء) وفي حسابات الأدمن، ويشتغل بس لو البريد
        // ده موثّق فعلاً (emailVerified) - ده أهم شرط أمان هنا.
        let passwordResetContext = null;
        function openForgotPasswordModal(evt) {
            if(evt) evt.preventDefault();
            document.getElementById('forgotPasswordStep1').classList.remove('hidden');
            document.getElementById('forgotPasswordStep2').classList.add('hidden');
            document.getElementById('forgotPasswordEmailInput').value = '';
            document.getElementById('forgotPasswordModal').classList.remove('hidden');
        }
        function closeForgotPasswordModal() {
            document.getElementById('forgotPasswordModal').classList.add('hidden');
        }
        function requestPasswordReset() {
            let email = document.getElementById('forgotPasswordEmailInput').value.trim().toLowerCase();
            if(!email) { alert(t('alert_enter_email_first', 'اكتب بريدك الإلكتروني الأول!')); return; }

            // ============================================================
            // 🔐 التجار دلوقتي حساباتهم حقيقية على Firebase Authentication، فاستعادة
            // كلمة السر بتتم عن طريق Firebase نفسه (رابط آمن يوصل على الإيميل ويفتح
            // صفحة رسمية من Firebase لتغيير كلمة السر) - مش عن طريق كود يدوي زي الأول.
            // ده أضمن وأسرع، وبيشتغل من أي جهاز من غير أي تعقيد.
            // ============================================================
            if(window.firebaseAuth) {
                window.firebaseAuth.sendPasswordResetEmail(email).then(function() {
                    closeForgotPasswordModal();
                    showAppModal('📧 تم إرسال رابط الاستعادة', '📧', `بعتنا رابط تغيير كلمة السر على بريدك (${email}). افتح الإيميل واضغط الرابط اللي جواه، وبعد ما تغيّر كلمة السر هناك، ارجع هنا وسجّل دخولك بكلمة السر الجديدة مباشرة.`);
                }).catch(function(err) {
                    if(err.code === 'auth/user-not-found') {
                        tryLegacyAdminPasswordReset(email);
                    } else {
                        alert('حصل خطأ أثناء إرسال رابط الاستعادة: ' + (err.message || 'جرب تاني بعد لحظات.'));
                    }
                });
            } else {
                tryLegacyAdminPasswordReset(email);
            }
        }
        // مسار احتياطي لحسابات الأدمن فقط (لسه مش منقولة لـ Firebase Authentication)
        function tryLegacyAdminPasswordReset(email) {
            let accounts = JSON.parse(localStorage.getItem('adminAccounts')) || [];
            let accIdx = accounts.findIndex(a => a.email && a.emailVerified && a.email.toLowerCase() === email);
            if(accIdx !== -1) {
                let code = generateVerificationCode();
                accounts[accIdx].passwordResetCode = code;
                accounts[accIdx].passwordResetExpiry = Date.now() + 15 * 60000;
                localStorage.setItem('adminAccounts', JSON.stringify(accounts));
                sendVerificationEmail(email, code, accounts[accIdx].username);
                passwordResetContext = { type: 'admin', key: accounts[accIdx].username };
                showForgotPasswordStep2();
                return;
            }
            alert(t('forgot_password_not_found', 'مفيش حساب موثّق بالبريد ده. تأكد من كتابته صح أو تواصل مع إدارة المنصة.'));
        }
        function showForgotPasswordStep2() {
            document.getElementById('forgotPasswordStep1').classList.add('hidden');
            document.getElementById('forgotPasswordStep2').classList.remove('hidden');
            document.getElementById('resetCodeInput').value = '';
            document.getElementById('resetNewPassInput').value = '';
            document.getElementById('resetNewPassConfirmInput').value = '';
        }
        function resendPasswordResetCode(evt) {
            if(evt) evt.preventDefault();
            if(!passwordResetContext) return;
            let code = generateVerificationCode();
            if(passwordResetContext.type === 'store') {
                let stores = JSON.parse(localStorage.getItem('allStores')) || {};
                let store = stores[passwordResetContext.key];
                if(!store) return;
                store.passwordResetCode = code;
                store.passwordResetExpiry = Date.now() + 15 * 60000;
                if(!saveAllStores(stores)) return;
                sendVerificationEmail(store.email, code, passwordResetContext.key);
            } else {
                let accounts = JSON.parse(localStorage.getItem('adminAccounts')) || [];
                let acc = accounts.find(a => a.username === passwordResetContext.key);
                if(!acc) return;
                acc.passwordResetCode = code;
                acc.passwordResetExpiry = Date.now() + 15 * 60000;
                localStorage.setItem('adminAccounts', JSON.stringify(accounts));
                sendVerificationEmail(acc.email, code, acc.username);
            }
            showToast('📧 ' + t('forgot_password_resent', 'اتبعت الكود تاني'));
        }
        function confirmPasswordReset() {
            if(!passwordResetContext) return;
            let code = document.getElementById('resetCodeInput').value.trim();
            let newPass = document.getElementById('resetNewPassInput').value.trim();
            let confirmPass = document.getElementById('resetNewPassConfirmInput').value.trim();
            if(!code || !newPass) { alert(t('alert_enter_code', 'اكتب الكود اللي وصلك!')); return; }
            if(newPass !== confirmPass) { alert(t('alert_passwords_dont_match', 'كلمة المرور وتأكيدها مش متطابقين، اكتبهم تاني.')); return; }

            if(passwordResetContext.type === 'store') {
                let stores = JSON.parse(localStorage.getItem('allStores')) || {};
                let store = stores[passwordResetContext.key];
                if(!store || store.passwordResetCode !== code || Date.now() > (store.passwordResetExpiry || 0)) {
                    alert(t('alert_wrong_code', 'الكود غير صحيح، حاول تاني أو اطلب إعادة إرسال.'));
                    return;
                }
                store.pass = newPass;
                store.passwordResetCode = '';
                if(!saveAllStores(stores)) return;
            } else {
                let accounts = JSON.parse(localStorage.getItem('adminAccounts')) || [];
                let idx = accounts.findIndex(a => a.username === passwordResetContext.key);
                if(idx === -1 || accounts[idx].passwordResetCode !== code || Date.now() > (accounts[idx].passwordResetExpiry || 0)) {
                    alert(t('alert_wrong_code', 'الكود غير صحيح، حاول تاني أو اطلب إعادة إرسال.'));
                    return;
                }
                accounts[idx].password = newPass;
                accounts[idx].passwordResetCode = '';
                localStorage.setItem('adminAccounts', JSON.stringify(accounts));
            }
            closeForgotPasswordModal();
            showToast('✅ ' + t('forgot_password_success', 'تم تغيير كلمة المرور بنجاح! سجل دخولك بيها دلوقتي.'));
        }


        function openTrackOrderModal() {
            document.getElementById('trackOrderResultBox').innerHTML = '';
            document.getElementById('trackOrderCodeInput').value = '';
            document.getElementById('trackOrderModal').classList.remove('hidden');
        }
        function closeTrackOrderModal() {
            document.getElementById('trackOrderModal').classList.add('hidden');
        }
        function renderTrackOrderResult(order, resultBox) {
            let store = (JSON.parse(localStorage.getItem('allStores')) || {})[activeStore] || {};
            if(!order) {
                resultBox.innerHTML = `<p style="color:#dc2626; font-size:12.5px;">${t('track_order_not_found', 'مفيش طلب بكود التتبع ده. تأكد إنك ناسخه صح، أو إن الطلب لسه موجود ومتحذفش.')}</p>`;
                return;
            }
            let steps = [
                { key: 'pending', icon: '🕐', label: t('track_status_pending', 'قيد المراجعة') },
                { key: 'completed', icon: '✅', label: t('track_status_delivered', 'تم التسليم') },
            ];
            let isCancelled = order.status === 'cancelled';
            let currentIdx = isCancelled ? -1 : (order.status === 'completed' ? 1 : 0);
            let stepsHtml = isCancelled
                ? `<p style="color:#dc2626; font-weight:bold; text-align:center; font-size:14px;">❌ ${t('track_status_cancelled', 'تم إلغاء هذا الطلب')}</p>`
                : steps.map((s, i) => `
                    <div style="display:flex; align-items:center; gap:10px; opacity:${i <= currentIdx ? '1' : '0.35'};">
                        <span style="font-size:20px;">${s.icon}</span>
                        <span style="font-size:13px; font-weight:${i === currentIdx ? 'bold' : 'normal'};">${s.label}</span>
                        ${i === currentIdx ? '<span style="margin-inline-start:auto; font-size:11px; color:var(--primary-color);">●</span>' : ''}
                    </div>
                `).join('<div style="width:2px; height:14px; background:var(--border-color); margin-inline-start:9px;"></div>');
            resultBox.innerHTML = `
                <div style="background:var(--bg-card); border:1px solid var(--border-color); border-radius:12px; padding:14px;">
                    <p style="font-size:12px; color:var(--text-muted); margin:0 0 10px;">${t('track_order_no_label', 'رقم الطلب')}: <strong>#${order.orderNo}</strong> — ${order.date}</p>
                    ${stepsHtml}
                    <p style="font-size:12px; margin-top:12px; border-top:1px solid var(--border-color); padding-top:8px;">${t('track_order_total_label', 'الإجمالي')}: <strong>${order.total} ${store.currency || ''}</strong></p>
                </div>
            `;
        }
        // 👂 مرجع لدالة إلغاء الاشتراك من مراقبة آخر كود تتبع تم البحث عنه - عشان لو العميل
        // بحث بكود تاني أو قفل الصفحة، نقفل المستمع القديم ومنفضلش بنراقب كود قديم من غير داعي.
        let __trackOrderWatchUnsub = null;
        function searchOrderStatus() {
            let code = document.getElementById('trackOrderCodeInput').value.trim().toUpperCase();
            let resultBox = document.getElementById('trackOrderResultBox');
            if(__trackOrderWatchUnsub) { try { __trackOrderWatchUnsub(); } catch(e) {} __trackOrderWatchUnsub = null; }
            if(!code) {
                resultBox.innerHTML = `<p style="color:#dc2626; font-size:12.5px;">من فضلك اكتب كود التتبع الأول.</p>`;
                return;
            }
            resultBox.innerHTML = `<p style="font-size:12.5px; color:var(--text-muted);">⏳ جاري البحث...</p>`;
            // ⚡ بحث محلي فوري أولاً (بيشتغل حتى من غير استضافة/إنترنت، على نفس الجهاز)
            try {
                let __st = (JSON.parse(localStorage.getItem('allStores')) || {})[activeStore] || {};
                let __local = (__st.orderHistory || []).find(o => o && o.trackingCode && String(o.trackingCode).toUpperCase() === code);
                if(__local) { renderTrackOrderResult(__local, resultBox); }
            } catch(e) { console.error('searchOrderStatus local lookup error:', e); }
            // ☁️ نراقب نفس الطلب لحظيًا من السحابة (حتى لو لقيناه محليًا فوق) - عشان لو
            // التاجر غيّر حالته من جهازه هو، شاشة العميل دي (لو فاضلة مفتوحة) تتحدث فورًا
            // من غير ما يحتاج يضغط "بحث" تاني أو يعمل تحديث للصفحة بنفسه.
            if(window.watchOrderStatusByTrackingCode) {
                __trackOrderWatchUnsub = window.watchOrderStatusByTrackingCode(activeStore, code, function(order) {
                    renderTrackOrderResult(order, resultBox);
                });
            } else if(window.getOrderByTrackingCode) {
                window.getOrderByTrackingCode(activeStore, code).then(function(order) {
                    renderTrackOrderResult(order, resultBox);
                }).catch(function(err) {
                    console.error('searchOrderStatus error:', err);
                });
            }
        }

        // --- رسم فاتورة الطلب كصورة احترافية فيها شعار المتجر تلقائياً، عشان توصل للتاجر بشكل غير قابل للتعديل ---
        // 💰 تنسيق موحّد للمبلغ+العملة جوه الفاتورة: كنا بنكتب `${amount} ${currency}` مباشرة،
        // ولأن الفاتورة بتتكتب غالبًا جوه سياق عربي RTL، خوارزمية اتجاه النص في الـcanvas كانت
        // بتقلب ترتيب الرقم والعملة حسب موضعهم في السطر (ظهر "66 $" مرة و"$ 66" مرة تانية لنفس
        // القيمة). بنحيط الرقم+العملة بعلامات اتجاه LTR صريحة (U+200E) عشان يفضلوا ثابتين بنفس
        // الترتيب دايمًا بغض النظر عن موضعهم جوه جملة عربية.
        function fmtMoney(amount, currency) {
            return '\u200E' + amount + ' ' + (currency || '') + '\u200E';
        }
        // 🧾 رقم طلب رسمي بصيغة تواريخ احترافية (زي أمازون/نون): ORD-YYMMDD-### بدل رقم
        // تسلسلي بسيط زي #17. السنة/الشهر/اليوم بيوضحوا تاريخ الطلب فورًا من غير فتح الفاتورة،
        // والرقم آخره هو تسلسل الطلب (عدد كل طلبات المتجر + 1 - زي القديم بالظبط، بس متنسّق).
        function generateOfficialOrderNo(store) {
            let seq = (store.orderHistory || []).length + 1;
            let now = new Date();
            let yy = String(now.getFullYear()).slice(-2);
            let mm = String(now.getMonth() + 1).padStart(2, '0');
            let dd = String(now.getDate()).padStart(2, '0');
            let seqStr = String(seq).padStart(3, '0');
            return `ORD-${yy}${mm}${dd}-${seqStr}`;
        }

        function generateOrderReceiptImage(store, storeName, orderNo, storeItems, subtotal, deliveryFee, finalTotal, address, buyerPhone, deliveryZone) {
            return new Promise((resolve) => {
                let brandColor = store.themeColor || '#d97706';
                let width = 700;
                let topBarH = 10;
                let headerH = 120;
                let rowH = 46;
                let footerLines = (deliveryFee > 0 ? 2 : 0) + (address ? 1 : 0) + (buyerPhone ? 1 : 0);
                let footerH = 100 + footerLines * 26;
                let height = topBarH + headerH + 40 + storeItems.length * rowH + footerH;
                let canvas = document.createElement('canvas');
                // 🖼️ بنرسم على قماشة أكبر بمرتين (Scale ×2) عشان النص والخطوط يطلعوا حادّة
                // وواضحة على شاشات الموبايل عالية الدقة، بدل ما تبان الصورة باهتة أو "مغشّشة"
                // زي ما بيحصل لو رسمنا بدقة منخفضة وبعدين اتكبرت الصورة على الشاشة.
                let scaleFactor = 2;
                canvas.width = width * scaleFactor;
                canvas.height = height * scaleFactor;
                canvas.style.width = width + 'px';
                canvas.style.height = height + 'px';
                let ctx = canvas.getContext('2d');
                ctx.scale(scaleFactor, scaleFactor);
                // 🔑 السبب الحقيقي لانعكاس العملة/الأرقام: canvas مفيش له اتجاه نص افتراضي
                // RTL، فكان بيتعامل مع كل سطر كـ"LTR أساسي فيه كلام عربي محشور جواه"، وده اللي
                // كان يقلب ترتيب الرقم والعملة والأقواس والنقطتين حسب موضعهم. التثبيت اليدوي بعلامات
                // LTR (fmtMoney) كان تلطيف جزئي بس، مش حل جذري. الحل الصحيح: نحدد اتجاه النص
                // الأساسي للوحة الرسم نفسها (rtl للعربي، ltr لباقي اللغات) صراحةً.
                ctx.direction = (currentAppLanguage === 'ar') ? 'rtl' : 'ltr';

                function roundRect(x, y, w, h, r) {
                    ctx.beginPath();
                    ctx.moveTo(x + r, y);
                    ctx.arcTo(x + w, y, x + w, y + h, r);
                    ctx.arcTo(x + w, y + h, x, y + h, r);
                    ctx.arcTo(x, y + h, x, y, r);
                    ctx.arcTo(x, y, x + w, y, r);
                    ctx.closePath();
                }

                // بيرسم اللوجو داخل دايرة بمقاس ثابت، مع قص الصورة نفسها لمربع من نص وسطها الأول (Cover)
                // عشان لوجوهات مش مربعة الشكل متتمططش أو تتشوه جوه الدايرة
                function drawLogoCropped(img, cx, cy, radius) {
                    let sw = img.naturalWidth || img.width;
                    let sh = img.naturalHeight || img.height;
                    let side = Math.min(sw, sh);
                    let sx = (sw - side) / 2;
                    let sy = (sh - side) / 2;
                    ctx.save();
                    ctx.beginPath();
                    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
                    ctx.fillStyle = '#fff';
                    ctx.fill();
                    ctx.clip();
                    ctx.drawImage(img, sx, sy, side, side, cx - radius, cy - radius, radius * 2, radius * 2);
                    ctx.restore();
                    ctx.beginPath();
                    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
                    ctx.strokeStyle = '#e5dec9';
                    ctx.lineWidth = 1.5;
                    ctx.stroke();
                }

                function draw(logoImg) {
                    // خلفية أبيض بالكامل - شكل فاتورة رسمية مش بوستر ملون
                    ctx.fillStyle = '#ffffff';
                    ctx.fillRect(0, 0, width, height);

                    // شريط رفيع بلون هوية المتجر أعلى الفاتورة (لمسة هوية بدون ما يطغى على الشكل الرسمي)
                    ctx.fillStyle = brandColor;
                    ctx.fillRect(0, 0, width, topBarH);

                    let headerY = topBarH;

                    // اللوجو دايرة صغيرة ناحية اليمين
                    if(logoImg) {
                        drawLogoCropped(logoImg, width - 70, headerY + 55, 34);
                    } else {
                        ctx.beginPath();
                        ctx.arc(width - 70, headerY + 55, 34, 0, Math.PI * 2);
                        ctx.fillStyle = '#f4efe8';
                        ctx.fill();
                        ctx.fillStyle = brandColor;
                        ctx.font = 'bold 26px Tahoma, Arial';
                        ctx.textAlign = 'center';
                        ctx.fillText('🏪', width - 70, headerY + 63);
                    }

                    ctx.fillStyle = '#2b2623';
                    ctx.textAlign = 'right';
                    ctx.font = 'bold 24px Tahoma, Arial';
                    ctx.fillText(storeName, width - 118, headerY + 48);
                    ctx.font = '12px Tahoma, Arial';
                    ctx.fillStyle = '#6b6259';
                    ctx.fillText(t('invoice_official_label', 'فاتورة طلب رسمية'), width - 118, headerY + 70);

                    // رقم الطلب والتاريخ في صندوق فاتح ناحية اليسار
                    // 🐛 كان الصندوق بعرض ثابت 190px مهما كان طول النص، فرقم الطلب الرسمي
                    // الجديد (ORD-YYMMDD-XXX) أطول بكتير من الرقم البسيط القديم، فأول حرف
                    // (O) كان بيطلع برّه حدود الـcanvas نفسه (مش بس برّه الصندوق) ويتقص.
                    // الحل: نقيس عرض النص فعليًا الأول، ونوسّع الصندوق ونزوّد هامش الأمان
                    // حسب الحاجة بدل عرض ثابت.
                    let orderNoLine = `${t('invoice_order_no_label', 'رقم الطلب')}: #${orderNo}`;
                    let dateLine = new Date().toLocaleString(currentAppLanguage === 'ar' ? 'ar-EG' : currentAppLanguage);
                    ctx.font = 'bold 13px Tahoma, Arial';
                    let orderNoW = ctx.measureText(orderNoLine).width;
                    ctx.font = '11px Tahoma, Arial';
                    let dateW = ctx.measureText(dateLine).width;
                    let infoBoxW = Math.max(190, orderNoW + 30, dateW + 30);
                    ctx.fillStyle = '#f7f4ef';
                    roundRect(20, headerY + 20, infoBoxW, 62, 8);
                    ctx.fill();
                    ctx.fillStyle = '#3d3730';
                    ctx.font = 'bold 13px Tahoma, Arial';
                    ctx.textAlign = 'right';
                    ctx.fillText(orderNoLine, 20 + infoBoxW - 15, headerY + 44);
                    ctx.font = '11px Tahoma, Arial';
                    ctx.fillText(dateLine, 20 + infoBoxW - 15, headerY + 64);

                    ctx.strokeStyle = '#e5dec9';
                    ctx.beginPath(); ctx.moveTo(20, headerY + headerH - 6); ctx.lineTo(width - 20, headerY + headerH - 6); ctx.stroke();

                    let y = headerY + headerH + 34;

                    // رأس جدول المنتجات
                    ctx.fillStyle = '#f4efe8';
                    roundRect(20, y - 28, width - 40, 34, 8);
                    ctx.fill();
                    ctx.fillStyle = '#6b6259';
                    ctx.font = 'bold 12px Tahoma, Arial';
                    ctx.textAlign = 'right';
                    ctx.fillText(t('invoice_product_col', 'المنتج'), width - 32, y - 6);
                    ctx.textAlign = 'left';
                    ctx.fillText(t('invoice_total_col', 'السعر الإجمالي'), 32, y - 6);
                    y += 20;

                    storeItems.forEach((item, i) => {
                        let qty = item.qty || 1;
                        let lineTotal = item.price * qty;
                        if(i % 2 === 1) {
                            ctx.fillStyle = '#fbf8f5';
                            ctx.fillRect(20, y - 22, width - 40, rowH - 6);
                        }
                        ctx.fillStyle = '#2b2623';
                        ctx.font = 'bold 14px Tahoma, Arial';
                        ctx.textAlign = 'right';
                        ctx.fillText(item.name, width - 32, y);
                        if(qty > 1) {
                            ctx.font = '11px Tahoma, Arial';
                            ctx.fillStyle = '#6b6259';
                            ctx.fillText(`${t('invoice_qty_label', 'الكمية')} × ${qty}`, width - 32, y + 16);
                        }
                        ctx.textAlign = 'left';
                        ctx.fillStyle = '#2b2623';
                        ctx.font = 'bold 14px Tahoma, Arial';
                        ctx.fillText(fmtMoney(lineTotal, store.currency), 32, y);
                        y += rowH;
                    });

                    ctx.strokeStyle = '#e5dec9';
                    ctx.beginPath(); ctx.moveTo(20, y - 12); ctx.lineTo(width - 20, y - 12); ctx.stroke();
                    y += 14;

                    if(deliveryFee > 0) {
                        ctx.font = '13px Tahoma, Arial';
                        ctx.fillStyle = '#3d3730';
                        ctx.textAlign = 'right';
                        ctx.fillText(`${t('invoice_subtotal_label', 'المجموع الفرعي')}: ${fmtMoney(subtotal, store.currency)}`, width - 20, y);
                        y += 24;
                        ctx.fillText(`${t('invoice_delivery_label', 'رسوم التوصيل')}${deliveryZone ? ' (' + deliveryZone + ')' : ''}: ${fmtMoney(deliveryFee, store.currency)}`, width - 20, y);
                        y += 30;
                    }

                    // صندوق الإجمالي: حدود بلون الهوية بدل تعبئة كاملة، أهدأ وأقرب لشكل الفواتير الرسمية
                    ctx.strokeStyle = brandColor;
                    ctx.lineWidth = 2;
                    roundRect(width - 260, y - 24, 240, 44, 10);
                    ctx.stroke();
                    ctx.fillStyle = brandColor;
                    ctx.font = 'bold 18px Tahoma, Arial';
                    ctx.textAlign = 'center';
                    ctx.fillText(`${t('invoice_total_label', 'الإجمالي')}: ${fmtMoney(finalTotal, store.currency)}`, width - 140, y + 4);
                    y += 46;

                    ctx.font = '12px Tahoma, Arial';
                    ctx.fillStyle = '#3d3730';
                    ctx.textAlign = 'right';
                    if(address) {
                        // 📍 نفس أيقونة علامة الموقع المستخدمة في كارت الطلب بلوحة التاجر
                        // (fa-location-dot)، مرسومة يدويًا بـcanvas بنفس شكلها (دمعة + دائرة
                        // فاضية جوها) بلون هوية المتجر، عشان الأيقونة تبقى واحدة متسقة في كل
                        // حتة في المنصة بدل أشكال مختلفة لنفس المعنى.
                        ctx.save();
                        let pinX = width - 16, pinTopY = y - 13;
                        ctx.fillStyle = brandColor;
                        ctx.beginPath();
                        ctx.arc(pinX, pinTopY, 5, Math.PI, 0, false);
                        ctx.lineTo(pinX, pinTopY + 9);
                        ctx.closePath();
                        ctx.fill();
                        ctx.fillStyle = '#fff';
                        ctx.beginPath();
                        ctx.arc(pinX, pinTopY, 2, 0, Math.PI * 2);
                        ctx.fill();
                        ctx.restore();
                        ctx.fillText(`${t('invoice_address_label', 'العنوان')}: ${address}`, width - 30, y);
                        y += 24;
                    }
                    if(buyerPhone) { ctx.fillText(`📞 ${buyerPhone}`, width - 20, y); y += 24; }

                    // فوتر شكر هادئ
                    ctx.strokeStyle = '#e5dec9';
                    ctx.beginPath(); ctx.moveTo(20, height - 44); ctx.lineTo(width - 20, height - 44); ctx.stroke();
                    ctx.textAlign = 'center';
                    ctx.font = 'bold 13px Tahoma, Arial';
                    ctx.fillStyle = '#2b2623';
                    ctx.fillText(`${t('invoice_thanks_label', 'شكراً لطلبك من')} ${storeName} 💛`, width / 2, height - 20);

                    // إطار رفيع حوالين الفاتورة كلها يديها شكل بطاقة/مستند رسمي
                    ctx.strokeStyle = '#e5dec9';
                    ctx.lineWidth = 1;
                    ctx.strokeRect(0.5, 0.5, width - 1, height - 1);

                    canvas.toBlob((blob) => resolve(blob), 'image/jpeg', 0.92);
                }

                if(store.logo) {
                    let img = new Image();
                    img.crossOrigin = 'anonymous';
                    img.onload = () => draw(img);
                    img.onerror = () => draw(null);
                    img.src = store.logo;
                } else {
                    draw(null);
                }
            });
        }

        // --- إرسال الطلب: دايمًا كصورة فاتورة غير قابلة للتعديل لأي وسيلة فيها محادثة خارجية (واتساب / ماسنجر / تيليجرام) ---
        // مفيش خيار "نص عادي" خالص عشان محدش يقدر يلعب في الأرقام قبل ما توصل للتاجر.
        // على الموبايل (فوق HTTPS) بتفتح قائمة المشاركة الحقيقية للجهاز والصورة بتتلزق تلقائي، والزبون بس بيختار نفس تطبيق المحادثة.
        // على الكمبيوتر أو متصفح مش بيدعم مشاركة الملفات (قيد تقني من واتساب/ماسنجر/تيليجرام نفسهم، مش من الموقع):
        // بننزل الصورة تلقائياً ونفتح نفس محادثة التاجر المحددة عشان يرفقها المشتري بضغطة واحدة.
        // --- القالب الافتراضي لرسالة الطلب (بيُستخدم لو التاجر ماكتبش قالب خاص بيه) ---
        const DEFAULT_ORDER_MESSAGE_TEMPLATE =
`مرحباً، أود طلب التالي من متجر {store}:

{items}

الإجمالي الكلي: {total}
طريقة الاستلام: {deliveryMode}
طريقة الدفع: {payment}
{addressLine}{phoneLine}رقم الطلب: #{orderNo}`;

        // الرسالة الافتراضية اللي بتظهر للعميل بعد "الإرسال المباشر" لو التاجر ماكتبش رسالة خاصة بيه
        const DEFAULT_DIRECT_ORDER_MESSAGE = 'سيتواصل معك المتجر {hours} لتأكيد وتنفيذ طلبك.';

        // بيبني رسالة التطمين اللي تظهر للعميل بعد "الإرسال المباشر" - بتستخدم رسالة التاجر
        // المخصصة لو موجودة، وإلا الرسالة الافتراضية، وبتستبدل {hours} و{orderNo} بالقيم الفعلية.
        // لو التاجر ماحددش عدد ساعات خالص، بنستبدل الجزء ده بعبارة عامة "في أقرب وقت ممكن" بدل ما نسيب فراغ غريب.
        function buildDirectOrderMessage(store, orderNo) {
            let hasHours = typeof store.directOrderHours === 'number' && store.directOrderHours > 0;
            // 🌐 لو التاجر ما كتبش رسالة خاصة بيه، نستخدم القالب المترجم حسب لغة الزائر بدل نص
            // عربي ثابت دايمًا (كان ده سبب ظهورها عربي في صفحة "تم إرسال الطلب" بالإنجليزي).
            let template = (store.directOrderMessage && store.directOrderMessage.trim()) ? store.directOrderMessage : t('default_direct_order_msg', DEFAULT_DIRECT_ORDER_MESSAGE);
            let hoursText = hasHours ? t('direct_order_hours_tpl', 'خلال {n} ساعة تقريبًا').replace('{n}', store.directOrderHours) : t('direct_order_asap', 'في أقرب وقت ممكن');
            return template.replace(/\{hours\}/g, hoursText).replace(/\{orderNo\}/g, orderNo);
        }

        // بيستبدل المتغيرات {placeholder} بقيمها الفعلية في نص القالب (سواء الافتراضي أو قالب التاجر الخاص)
        function fillOrderTemplate(template, data) {
            return template.replace(/\{(\w+)\}/g, (match, key) => (data[key] !== undefined ? data[key] : match));
        }

        // --- ملحوظة أمان مهمة جدًا: رسالة واتساب/ماسنجر/تيليجرام دي مجرد "إشعار" للتاجر بوجود طلب جديد ---
        // العميل نظريًا يقدر يعدّل في النص ده قبل الإرسال من على جهازه، فمينفعش التاجر يحاسب عليها أبداً.
        // المرجع الرسمي الوحيد والموثوق دايمًا هو سجل "الطلبات" في لوحة تحكم التاجر (orderHistory) لأنه
        // بيتسجل بالأرقام الصحيحة المحسوبة هنا في التطبيق نفسه *قبل* ما أي رسالة تتفتح أو تتبعت خالص.
        let pendingOrderMethod = null;

        // --- تحقق بسيط من شكل رقم الهاتف (يقبل أي دولة: مصري، أمريكي، خليجي... إلخ) ---
        // مش بيتأكد إن الرقم "موجود فعلاً" (ده محتاج إرسال SMS فعلي)، لكن بيرفض أي حاجة مش شكل
        // رقم هاتف من الأساس (حروف، رقم قصير جدًا زي "123"، أو طويل جدًا بشكل غير منطقي).
        function isPlausiblePhoneNumber(raw) {
            let cleaned = raw.trim().replace(/[\s\-\(\)]/g, '');
            // يسمح بـ + اختيارية في الأول، وبعدها أرقام بس، طول من 7 لـ 15 رقم (زي المعيار الدولي E.164)
            return /^\+?\d{7,15}$/.test(cleaned);
        }

        async function sendOrder(method) {
            method = method || 'whatsapp';
            let stores = JSON.parse(localStorage.getItem('allStores'));
            let store = stores[activeStore];

            // ✅ التحقق من العنوان بقى هنا بالظبط - لحظة إرسال الطلب الفعلية، ونافذة "بيانات
            // التسليم" (وفيها خانة العنوان) بتكون مفتوحة وظاهرة قدام العميل، فلو نسي يكتبه
            // هيشوف رسالة التنبيه وخانة الكتابة قدامه في نفس الوقت، ويقدر يكملها فورًا.
            if(selectedDeliveryMode === 'delivery' && document.getElementById('deliveryAddressInput').value.trim() === '') {
                alert(t('alert_address_required'));
                document.getElementById('deliveryAddressInput').focus();
                return;
            }

            if(method === 'whatsapp' && !store.whatsapp) { alert(t('alert_no_whatsapp')); return; }
            if(method === 'messenger' && !store.messenger) { alert(t('alert_no_messenger')); return; }
            if(method === 'telegram' && !store.telegram) { alert(t('alert_no_telegram')); return; }

            // ✅ رقم الهاتف بقى إجباري بس لو التاجر (أو الأدمن) اختار وضع "إجباري" لمتجره تحديدًا.
            // في الوضع الافتراضي (اختياري) أو وضع "مخفي"، العميل يقدر يكمل طلبه من غير ما يكتب رقمه.
            let phoneMode = store.phoneFieldMode || 'optional';
            if(phoneMode === 'required' && document.getElementById('buyerPhoneInput').value.trim() === '') {
                alert(t('alert_phone_required'));
                document.getElementById('buyerPhoneInput').focus();
                return;
            }

            // ✅ التحقق من شكل رقم الهاتف لو المشتري كتب حاجة (سواء كانت الخانة دي إجبارية أو
            // اختيارية - ده مش بيغيّر إجبارية الخانة، بس لو كتب حاجة، لازم تبقى شكلها رقم هاتف
            // حقيقي (مصري/أمريكي/أي دولة) مش أرقام عشوائية أو حروف، عشان التاجر يقدر يتواصل فعلاً.
            let buyerPhoneVal = phoneMode === 'hidden' ? '' : document.getElementById('buyerPhoneInput').value.trim();
            if(buyerPhoneVal !== '' && !isPlausiblePhoneNumber(buyerPhoneVal)) {
                alert(t('alert_phone_invalid'));
                document.getElementById('buyerPhoneInput').focus();
                return;
            }

            let storeItems = cart.filter(item => item.store === activeStore);
            if(storeItems.length === 0) { alert(t('alert_cart_empty')); return; }

            if(method === 'direct') {
                await proceedWithOrder(method);
                return;
            }

            // بدل نافذة confirm() الافتراضية اللي شكلها مخيف زي تحذير فيروس، بنعرض نافذة ودّية
            // حاسة إنها جزء طبيعي من تجربة الشراء، وبتفتح واتساب/ماسنجر/تيليجرام بعد الموافقة عليها بس
            pendingOrderMethod = method;
            let appName = method === 'whatsapp' ? 'واتساب' : method === 'messenger' ? 'ماسنجر' : 'تيليجرام';
            document.getElementById('orderConfirmAppName').textContent = appName;
            document.getElementById('orderConfirmModal').classList.remove('hidden');
        }

        function closeOrderConfirmModal() {
            pendingOrderMethod = null;
            document.getElementById('orderConfirmModal').classList.add('hidden');
        }

        // --- بتفتح نافذة تطمين "تم الإرسال المباشر" بعد ما الطلب يتسجل، وبتحط فيها رسالة التاجر (أو الافتراضية) ---
        function openDirectOrderSuccessModal(store, orderNo, trackingCode) {
            document.getElementById('directOrderSuccessNo').textContent = orderNo;
            document.getElementById('directOrderSuccessMessage').textContent = buildDirectOrderMessage(store, orderNo);
            // 🔗 رابط تتبع مباشر يحمل كود التتبع - العميل يحفظه (Bookmark) أو يصوّره بالشاشة،
            // وبفتحه بعد كده هيشوف حالة طلبه على طول من غير ما يكتب أي حاجة يدويًا.
            let trackBox = document.getElementById('directOrderTrackBox');
            if(trackBox && trackingCode) {
                document.getElementById('directOrderTrackCode').textContent = trackingCode;
                trackBox.classList.remove('hidden');
            } else if(trackBox) {
                trackBox.classList.add('hidden');
            }
            // 💳 لو صاحب المتجر ضاف رابط دفع أونلاين في إعداداته، نظهره هنا كخيار
            // إضافي للعميل، غير طريقة الدفع عند الاستلام العادية.
            let payBox = document.getElementById('directOrderPaymentBox');
            if(payBox) {
                if(store && store.paymentLink && store.paymentLink.trim()) {
                    document.getElementById('directOrderPaymentLink').href = store.paymentLink.trim();
                    payBox.classList.remove('hidden');
                } else {
                    payBox.classList.add('hidden');
                }
            }
            document.getElementById('directOrderSuccessModal').classList.remove('hidden');
        }
        function copyTrackOrderLink() {
            let codeEl = document.getElementById('directOrderTrackCode');
            copyTextRobust(codeEl.textContent, '🔗 تم نسخ كود التتبع - احفظه في مكان آمن');
        }
        function closeDirectOrderSuccessModal() {
            document.getElementById('directOrderSuccessModal').classList.add('hidden');
        }

        async function confirmSendOrder() {
            let method = pendingOrderMethod;
            document.getElementById('orderConfirmModal').classList.add('hidden');
            if(!method) return;
            await proceedWithOrder(method);
        }

        async function proceedWithOrder(method) {
            let stores = JSON.parse(localStorage.getItem('allStores'));
            let store = stores[activeStore];
            let address = document.getElementById('deliveryAddressInput').value.trim();
            let buyerPhone = document.getElementById('buyerPhoneInput').value.trim();
            let storeItems = cart.filter(item => item.store === activeStore);
            if(storeItems.length === 0) { alert(t('alert_cart_empty')); return; }

            // 📱 رقم/معرّف التحويل اللي كتبه المشتري (لو اختار "تحويل كاش") - ده كان بيتجمع
            // ويتطلب إجباريًا من المشتري، لكن كان بيضيع وميتسجلش ولا يوصل للتاجر خالص. دلوقتي
            // بيتسجل في الطلب وبيظهر في رسالة واتساب/ماسنجر/تيليجرام عشان التاجر يقدر يطابق
            // التحويل اللي وصله فعليًا مع الطلب ده.
            let cashSenderInfo = (selectedPayment === 'CASH') ? document.getElementById('cashTransferSenderInput').value.trim() : '';

            let subtotal = 0;
            storeItems.forEach(item => { subtotal += item.price * (item.qty || 1); });
            let deliveryFee = getDeliveryFeeForCurrentCart(store, subtotal);
            let finalTotal = subtotal + deliveryFee;
            let deliveryZoneName = '';
            if(selectedDeliveryMode === 'delivery') {
                let __z = getStoreDeliveryZones(store);
                if(__z.length > 0) deliveryZoneName = (__z.find(x => x.name === selectedDeliveryZone) || __z[0]).name;
            }
            let orderNo = generateOfficialOrderNo(store);
            // 🔐 كود تتبع عشوائي غير قابل للتخمين، فريد لكل طلب - ده اللي هيتستخدم للقراءة
            // الآمنة من السحابة (العميل يشوف طلبه هو بس، مش كل الطلبات)، مش رقم الطلب
            // التسلسلي البسيط اللي ممكن أي حد يجرب أرقام قريبة منه.
            let trackingCode = generateOrderTrackingCode();

            // === المصدر الرسمي الوحيد للأرقام: بيتسجل هنا بالأرقام الصحيحة *قبل* فتح أي محادثة خارجية ===
            // ملحوظة: الكمية في المخزون (stock) مش بتتنقص هنا لحظة إرسال الطلب، لأن الطلب ممكن ميتمش
            // فعليًا. بتتنقص فقط لما التاجر يحدد الطلب "✅ تم التسليم" من سجل الطلبات (updateOrderStatus).
            storeItems.forEach(item => {
                let prod = store.products.find(p => p.name === item.name);
                if(prod) prod.salesCount = (prod.salesCount || 0) + (item.qty || 1); // لحساب "الأكثر مبيعاً"
            });
            if(!store.orderHistory) store.orderHistory = [];
            let newOrder = {
                orderNo,
                trackingCode,
                deliveryZone: deliveryZoneName,
                date: new Date().toLocaleString('ar-EG'),
                timestamp: Date.now(),
                items: storeItems.map(i => {
                    let prod = store.products.find(p => p.name === i.name);
                    // بنلقّط سعر التكلفة وقت الطلب بالظبط (زي السعر تمامًا)، عشان لو التاجر غيّر
                    // سعر التكلفة بعدين، تقرير الأرباح لطلبات قديمة يفضل صحيح تاريخيًا ومايتأثرش.
                    return { name: i.name, qty: i.qty || 1, price: i.price, cost: (prod && typeof prod.costPrice === 'number') ? prod.costPrice : null };
                }),
                subtotal, deliveryFee, total: finalTotal,
                deliveryMode: selectedDeliveryMode, payment: selectedPayment,
                paymentWalletNumber: selectedPayment !== 'COD' ? (store.vodafoneCash || '') : '',
                cashSenderInfo,
                address: selectedDeliveryMode === 'delivery' ? address : '',
                buyerPhone, method, status: 'pending',
                // 👤 لو عميل مسجّل دخوله بحساب داخل المتجر، نربط الطلب بحسابه عشان يظهر
                // في صفحة "طلباتي" بتاعته تلقائيًا.
                buyerId: (getBuyerSession(activeStore) || {}).buyerId || null
            };
            store.orderHistory.unshift(newOrder);
            if(!saveAllStores(stores)) return;
            // 🔔 تحديث فوري لعداد الجرس على نفس الجهاز (مش محتاج ننتظر رجوع من السحابة) -
            // مهم خصوصًا وقت الاختبار على نفس المتصفح، وأسرع استجابة في كل الحالات.
            try { if(typeof window.updateNewOrdersBadge === 'function') window.updateNewOrdersBadge(); } catch(e) {}

            // ============================================================
            // ☁️ بعت الطلب مباشرة لقاعدة البيانات السحابية فورًا لحظة التأكيد - مستقل
            // تمامًا عن فتح واتساب (لو حصلت أي مشكلة في فتح واتساب بعد كده، الطلب يكون
            // وصل بالفعل للتاجر سحابيًا). العميل نفسه مش محتاج يكون مسجّل دخول لإرسال
            // الطلب ده - قاعدة الأمان بتسمح بالإنشاء (create) للجميع، وبس.
            // ============================================================
            if(window.pushOrderDirectly) {
                window.pushOrderDirectly(activeStore, newOrder).catch(function() {});
            }
            // 👤 لو عميل مسجّل دخوله، نربط كود تتبع الطلب ده بحسابه عشان يظهر فورًا في
            // صفحة "طلباتي" من غير ما نحتاج نعمل أي استعلام (list) ممنوع على الطلبات.
            if(newOrder.buyerId && window.appendBuyerOrderTrackingCode) {
                window.appendBuyerOrderTrackingCode(activeStore, newOrder.buyerId, trackingCode).catch(function() {});
            }
            closeDeliveryModal();

            if(method === 'direct') {
                cart = cart.filter(item => item.store !== activeStore);
                localStorage.setItem('appCart', JSON.stringify(cart));
                updateCartBadge();
                // 🐛 إصلاح: كان بيتصفر البادچ الأحمر بس المنتجات تفضل ظاهرة في صفحة السلة
                // نفسها لحد ما حاجة تانية تصادف تعمل renderCart() - استدعاؤها هنا فورًا
                // يضمن إن الصفحة نفسها تتفضّى في نفس اللحظة بالظبط مش بعدها بوقت.
                renderCart();
                openDirectOrderSuccessModal(store, orderNo, trackingCode);
                return;
            }

            // بناء نص الرسالة من قالب التاجر الخاص لو موجود (بأي لغة يختارها هو)، وإلا القالب الافتراضي
            let itemsText = storeItems.map((item, i) => {
                let qty = item.qty || 1;
                let lineTotal = item.price * qty;
                return `${i+1}. ${item.name}${qty > 1 ? ' (الكمية: ' + qty + ')' : ''} - ${lineTotal} ${store.currency}`;
            }).join('\n');

            let templateData = {
                store: getStoreDisplayName(activeStore, store),
                items: itemsText,
                subtotal: `${subtotal} ${store.currency}`,
                delivery: `${deliveryFee} ${store.currency}`,
                total: `${finalTotal} ${store.currency}`,
                deliveryMode: selectedDeliveryMode === 'delivery' ? 'توصيل' : 'استلام من المتجر',
                payment: selectedPayment === 'COD' ? 'الدفع عند الاستلام (COD)' : `تحويل كاش / محفظة${store.vodafoneCash ? ` (تم التحويل على رقم: ${store.vodafoneCash})` : ''}${cashSenderInfo ? `\nرقم/معرّف تحويل المشتري: ${cashSenderInfo}` : ''}`,
                addressLine: (selectedDeliveryMode === 'delivery' ? ((deliveryZoneName ? `منطقة التوصيل: ${deliveryZoneName}\n` : '') + (address ? `عنوان التسليم: ${address}\n` : '')) : ''),
                phoneLine: buyerPhone ? `رقم هاتف المشتري: ${buyerPhone}\n` : '',
                orderNo, currency: store.currency
            };

            let template = (store.orderMessageTemplate && store.orderMessageTemplate.trim()) ? store.orderMessageTemplate : DEFAULT_ORDER_MESSAGE_TEMPLATE;
            let messageText = fillOrderTemplate(template, templateData);

            let waLink = null, tgLink = null;
            if(method === 'whatsapp') {
                waLink = `https://wa.me/${store.whatsapp}?text=${encodeURIComponent(messageText)}`;
                // ⚠️ بنستخدم location.href بدل window.open(_blank) — على الموبايل، فتح تاب جديد
                // كان بيوريّ صفحة "wa.me" وسيطة (أو صفحة تنزيل واتساب) بدل ما يفتح تطبيق واتساب
                // على طول، خصوصًا في المتصفحات الخفيفة. location.href بتاخد المستخدم مباشرة
                // ويسيب تحويل الرابط لتطبيق واتساب نفسه يحصل تلقائي زي أي رابط عادي.
                location.href = waLink;
            } else if(method === 'telegram') {
                let tgUser = (store.telegram || '').replace(/^@/, '');
                tgLink = `https://t.me/${tgUser}?text=${encodeURIComponent(messageText)}`;
                location.href = tgLink;
            } else if(method === 'messenger') {
                // روابط ماسنجر (m.me) لا تدعم تمرير نص جاهز في كل الحالات، فبننسخ التفاصيل للحافظة ليتم لصقها يدوياً
                if(navigator.clipboard) {
                    navigator.clipboard.writeText(messageText).catch(() => {});
                }
                alert(t('alert_messenger_copied'));
                location.href = store.messenger;
            }

            // ⚠️ مهم جدًا: مش بنمسح السلة فورًا هنا. فتح الرابط مش معناه إن الرسالة اتبعتت
            // فعلاً — لو واتساب اتقفل، أو الجهاز علّق، أو المستخدم رجع من غير ما يبعت، السلة
            // كانت بتتمسح برضه وبيضيع طلب العميل تمامًا من غير أي فرصة تانية. دلوقتي بنسيب
            // نافذة تأكيد صغيرة تفضل ظاهرة، وبتمسح السلة فعليًا بس لما يأكد إنه بعت فعلاً،
            // أو تفضل السلة زي ما هي عشان يقدر يحاول تاني في أي وقت.
            window.__lastExternalOrder = { orderNo: orderNo, trackingCode: trackingCode, storeId: activeStore };
            showWhatsAppOrderConfirmBanner(waLink || tgLink || store.messenger, method);
        }

        // --- بانر تأكيد بعد فتح واتساب/تليجرام/ماسنجر: بيفضل السلة محفوظة لحد ما العميل
        // يأكد إنه بعت طلبه فعلاً، عشان لو حصلت مشكلة (واتساب مقفول، الجهاز علّق...) يقدر
        // يحاول تاني بضغطة واحدة من غير ما يضيع اللي في سلته. ---
        function showWhatsAppOrderConfirmBanner(link, method) {
            let methodLabel = method === 'whatsapp' ? 'واتساب' : (method === 'telegram' ? 'تليجرام' : 'ماسنجر');
            showAppModal(
                `${t('order_send_confirm_title_prefix', 'اتفتح')} ${methodLabel} ${t('order_send_confirm_title_suffix', 'لإتمام طلبك')}`,
                '📤',
                `${t('order_send_confirm_body', 'لو التطبيق ماتفتحش صح أو حصلت مشكلة ومقدرتش تبعت الرسالة، سلتك لسه محفوظة عندك - اضغط "حاول تاني" تحت وهيتفتحلك تاني.')}`,
                `<button class="app-modal-suggestion-btn" onclick="retryWhatsAppOrder('${(link||'').replace(/'/g,"\\'")}')">${t('order_send_retry_btn', '🔁 حاول تاني')}</button>
                 <button class="app-modal-ok-btn" style="margin-top:8px; background:#16a34a;" onclick="confirmOrderSentSuccessfully()">${t('order_send_success_btn', '✅ بعت الطلب بنجاح، امسح السلة')}</button>`
            );
        }
        function retryWhatsAppOrder(link) {
            closeAppModal();
            if(link) location.href = link;
        }
        function confirmOrderSentSuccessfully() {
            closeAppModal();
            cart = cart.filter(item => item.store !== activeStore);
            localStorage.setItem('appCart', JSON.stringify(cart));
            updateCartBadge();
            renderCart(); // 🐛 نفس إصلاح تفريغ صفحة السلة فورًا (راجع proceedWithOrder أعلاه)
            showToast('✅ ' + t('cart_cleared_toast', 'تم تفريغ السلة'));
            // 🔐 نعرض للعميل كود تتبع طلبه (واتساب / ماسنجر / تيليجرام) زي الإرسال المباشر بالظبط
            try {
                let info = window.__lastExternalOrder;
                if(info && info.trackingCode && info.storeId === activeStore) {
                    let st = (JSON.parse(localStorage.getItem('allStores')) || {})[activeStore];
                    if(st) openDirectOrderSuccessModal(st, info.orderNo, info.trackingCode);
                }
                window.__lastExternalOrder = null;
            } catch(e) { console.error('confirmOrderSentSuccessfully: خطأ في عرض كود التتبع', e); }
        }



        // --- 7. الدعم الفني وتوزيع Round-Robin وتسجيل الضغطات ---
        function triggerRoundRobinSupport(customText) {
            let team = JSON.parse(localStorage.getItem('supportTeam')) || [];
            if(team.length === 0) { alert(t('alert_no_support_team', 'لا يوجد موظفو دعم مسجلون حالياً.')); return; }

            let member = team[lastSupportIndex % team.length];
            lastSupportIndex++;

            // تسجيل الضغطة للتقرير
            let logs = JSON.parse(localStorage.getItem('supportLogs')) || [];
            let currentMerchant = localStorage.getItem('currentActiveMerchant') || 'زائر';
            logs.push({
                merchant: currentMerchant,
                assignedTo: member.name,
                date: new Date().toLocaleString('ar-EG')
            });
            localStorage.setItem('supportLogs', JSON.stringify(logs));

            let msg = customText || `استفسار دعم فني من: ${currentMerchant}`;
            window.open(`https://wa.me/${member.phone}?text=${encodeURIComponent(msg)}`, '_blank');
        }

        // ============================================================
        // 🏷️ طلب تفعيل باقة معينة: التاجر يختار الباقة اللي عايزها من قائمة
        // الباقات المتاحة، وبيتواصل مباشرة مع فريق الدعم/الإدارة عبر واتساب أو
        // فيسبوك أو تيليجرام (أي وسيلة الأدمن فعّلها) برسالة جاهزة فيها اسم
        // متجره والباقة المطلوبة، عشان الأدمن يفعّلها له بعد ما يتأكد من الدفع.
        // ============================================================
        // 🏷️ أسماء الباقات الافتراضية (مجانية/أساسي/متقدم/بريميوم) كانت مكتوبة عربي صريح
        // جوه بيانات الباقة نفسها، فكانت تفضل عربي حتى لو التاجر أو الزائر غيّر لغة الواجهة
        // بالكامل للإنجليزي. الدالة دي بتترجم الأسماء الافتراضية الأربعة بس (لو الأدمن غيّر
        // اسم باقة بنفسه لاسم مخصص، بنحترم اسمه المخصص زي ما هو من غير ترجمة تلقائية).
        function planDisplayName(plan) {
            if (!plan) return '';
            let defaultNames = { free: 'مجانية', basic: 'أساسي', pro: 'متقدم', premium: 'بريميوم' };
            if (defaultNames[plan.id] && plan.name === defaultNames[plan.id]) {
                return t('plan_name_' + plan.id, plan.name);
            }
            return plan.name;
        }

        function requestPlanActivation(planId) {
            let plans = getSubscriptionPlans();
            let plan = plans.find(p => p.id === planId);
            if(!plan) return;
            let merchant = localStorage.getItem('currentActiveMerchant') || '';
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            let storeName = (stores[merchant] && stores[merchant].displayName) || merchant;
            let msg = `مرحباً، أنا صاحب متجر "${storeName}" وعايز أفعّل باقة "${plan.name}" (${plan.price || 0}). من فضلكم أكدولي طريقة الدفع وهحوّل فورًا.`;

            let wa = localStorage.getItem('platformWhatsapp') || localStorage.getItem('platformContact') || '';
            let fb = localStorage.getItem('platformFacebook') || '';
            let tg = localStorage.getItem('platformTelegram') || '';
            let hasSupportTeam = (JSON.parse(localStorage.getItem('supportTeam')) || []).length > 0;

            if(!hasSupportTeam && !wa && !fb && !tg) {
                alert(t('alert_no_contact_channel', '⚠️ لسه مفيش وسيلة تواصل متاحة مع إدارة المنصة. حاول تاني لاحقًا أو دوّر على معلومات تواصل تانية في صفحة "عن المنصة".'));
                return;
            }

            let box = document.getElementById('planActivationContactBox_' + planId);
            if(!box) return;
            box.classList.remove('hidden');
            box.innerHTML = `
                <p style="font-size:11px; color:var(--text-muted); margin:6px 0 8px;">${t('plan_contact_intro', 'اختار وسيلة التواصل وابعت رسالتك الجاهزة للإدارة عشان تفعّل الباقة بعد تأكيد الدفع:')}</p>
                <div style="display:flex; flex-direction:column; gap:6px;">
                    ${hasSupportTeam ? `<button style="background:#25D366; margin:0; font-size:12.5px;" onclick='triggerRoundRobinSupport(${JSON.stringify(msg)})'><i class="fab fa-whatsapp"></i> ${t('contact_via_whatsapp', 'تواصل عبر واتساب')}</button>` : ''}
                    ${fb ? `<button style="background:#1877f2; margin:0; font-size:12.5px;" onclick="window.open('${fb}', '_blank')"><i class="fab fa-facebook"></i> ${t('contact_via_facebook', 'تواصل عبر فيسبوك')}</button>` : ''}
                    ${tg ? `<button style="background:#229ED9; margin:0; font-size:12.5px;" onclick="window.open('https://t.me/${tg}?text=${encodeURIComponent(msg)}', '_blank')"><i class="fab fa-telegram"></i> ${t('contact_via_telegram', 'تواصل عبر تيليجرام')}</button>` : ''}
                </div>
            `;
        }

        // --- 8. لوحة الإدارة العامة (Admin Panel) ---
        // --- إعدادات صفحة هبوط المنصة (تحكم كامل من لوحة الأدمن) ---
        // --- يسمح لأي حساب أدمن (عام أو دعم فني) بتغيير كلمة مروره الخاصة بنفسه ---
        function changeMyAdminPassword() {
            let username = localStorage.getItem('loggedAdminUsername');
            if(!username) return;

            let current = document.getElementById('adminCurrentPassInput').value;
            let newPass = document.getElementById('adminNewPassInput').value;
            let confirmPass = document.getElementById('adminConfirmNewPassInput').value;

            let accounts = JSON.parse(localStorage.getItem('adminAccounts')) || [];
            let idx = accounts.findIndex(a => a.username === username);
            if(idx === -1 || accounts[idx].password !== current) {
                alert(t('alert_wrong_current_pass'));
                return;
            }
            if(!newPass || newPass.length < 3) {
                alert(t('alert_new_pass_short'));
                return;
            }
            if(newPass !== confirmPass) {
                alert(t('alert_pass_mismatch'));
                return;
            }

            accounts[idx].password = newPass;
            localStorage.setItem('adminAccounts', JSON.stringify(accounts));

            document.getElementById('adminCurrentPassInput').value = '';
            document.getElementById('adminNewPassInput').value = '';
            document.getElementById('adminConfirmNewPassInput').value = '';
            showToast('✅ تم تغيير كلمة المرور بنجاح');
        }

        // --- تغيير اسم دخول الأدمن الحالي (اسمه المستخدم لتسجيل الدخول) ---
        function changeMyAdminUsername() {
            let oldUsername = localStorage.getItem('loggedAdminUsername');
            if(!oldUsername) return;
            let newUsername = document.getElementById('adminNewUsernameInput').value.trim();
            if(!newUsername) { alert(t('alert_new_login_required', 'اكتب اسم الدخول الجديد!')); return; }

            let accounts = JSON.parse(localStorage.getItem('adminAccounts')) || [];
            let idx = accounts.findIndex(a => a.username === oldUsername);
            if(idx === -1) return;

            let taken = accounts.some((a, i) => i !== idx && a.username.toLowerCase() === newUsername.toLowerCase());
            if(taken) { showAppModal(t('username_taken_title', 'الاسم ده مستخدم بالفعل'), '⚠️', t('alert_username_taken', 'اسم الدخول ده مستخدم بالفعل، اختار اسم تاني.')); return; }

            accounts[idx].username = newUsername;
            localStorage.setItem('adminAccounts', JSON.stringify(accounts));
            localStorage.setItem('loggedAdminUsername', newUsername);
            document.getElementById('adminNewUsernameInput').value = '';
            renderAdminAccounts();
            showToast('✅ اتغيّر اسم الدخول بنجاح، استخدم الاسم الجديد في مرات الدخول الجاية');
        }

        // --- تأمين حساب الأدمن بالبريد الإلكتروني + اختيار طريقة الدخول (اسم/بريد/الاتنين) ---
        function renderAdminEmailSecurityBox() {
            let box = document.getElementById('adminEmailSecurityBox');
            if(!box) return;
            let username = localStorage.getItem('loggedAdminUsername');
            let accounts = JSON.parse(localStorage.getItem('adminAccounts')) || [];
            let acc = accounts.find(a => a.username === username);
            if(!acc) return;

            if(acc.email && acc.emailVerified) {
                box.innerHTML = `
                    <div style="background:#f0fdf4; border:1px solid #86efac; border-radius:10px; padding:10px; font-size:13px; display:flex; justify-content:space-between; align-items:center;">
                        <span>✅ ${t('email_verified_label', 'الحساب موثّق ببريد')}: <strong>${acc.email}</strong></span>
                        <button class="secondary" style="width:auto; padding:5px 10px; font-size:11px;" onclick="changeAdminEmail()">${t('email_change_btn', 'تغيير البريد')}</button>
                    </div>
                    <div style="margin-top:10px;">
                        <label style="font-size:12px; font-weight:bold;">${t('login_method_label', '🔒 طريقة تسجيل الدخول المسموحة لحسابك:')}</label>
                        <select id="adminLoginMethodSelect" onchange="saveAdminLoginMethod()">
                            <option value="both">${t('login_method_both', 'اسم الدخول أو البريد الموثّق (الاثنين)')}</option>
                            <option value="username">${t('login_method_username', 'اسم الدخول فقط')}</option>
                            <option value="email">${t('login_method_email', 'البريد الموثّق فقط')}</option>
                        </select>
                    </div>
                `;
                document.getElementById('adminLoginMethodSelect').value = acc.loginMethod || 'both';
            } else if(acc.email && !acc.emailVerified) {
                box.innerHTML = `
                    <div style="background:#fff7ed; border:1px solid #fed7aa; border-radius:10px; padding:10px; font-size:13px;">
                        <p style="margin:0 0 8px;">📧 ${t('email_pending_label', 'بريدك')}: <strong>${acc.email}</strong> — ${t('email_not_verified_yet', 'لسه مش موثّق.')}</p>
                        <input type="text" id="adminEmailCodeInput" placeholder="${t('email_code_ph', 'اكتب كود التفعيل هنا')}" style="margin:0 0 8px;">
                        <div style="display:flex; gap:8px;">
                            <button style="margin:0; background:#10b981;" onclick="confirmAdminEmailCode()">${t('email_confirm_code_btn', 'تأكيد الكود')}</button>
                            <button class="secondary" style="margin:0;" onclick="resendAdminEmailCode()">${t('email_resend_code_btn', 'إعادة إرسال الكود')}</button>
                        </div>
                    </div>
                `;
            } else {
                box.innerHTML = `
                    <input type="email" id="adminEmailInput" placeholder="${t('email_ph', 'بريدك الإلكتروني')}">
                    <button style="margin:0; background:#10b981;" onclick="requestAdminEmailVerification()"><i class="fa fa-shield-alt"></i> ${t('email_send_code_btn', 'إرسال كود التفعيل')}</button>
                `;
            }
        }
        function requestAdminEmailVerification() {
            let username = localStorage.getItem('loggedAdminUsername');
            let email = document.getElementById('adminEmailInput').value.trim();
            if(!email) { alert(t('alert_enter_email_first', 'اكتب بريدك الإلكتروني الأول!')); return; }
            let accounts = JSON.parse(localStorage.getItem('adminAccounts')) || [];
            let idx = accounts.findIndex(a => a.username === username);
            if(idx === -1) return;
            let code = generateVerificationCode();
            accounts[idx].email = email;
            accounts[idx].emailVerified = false;
            accounts[idx].emailVerificationCode = code;
            localStorage.setItem('adminAccounts', JSON.stringify(accounts));
            sendVerificationEmail(email, code, username);
            renderAdminEmailSecurityBox();
        }
        function resendAdminEmailCode() {
            let username = localStorage.getItem('loggedAdminUsername');
            let accounts = JSON.parse(localStorage.getItem('adminAccounts')) || [];
            let acc = accounts.find(a => a.username === username);
            if(!acc || !acc.email) return;
            requestAdminEmailVerificationInternal(acc.email);
        }
        function requestAdminEmailVerificationInternal(email) {
            let username = localStorage.getItem('loggedAdminUsername');
            let accounts = JSON.parse(localStorage.getItem('adminAccounts')) || [];
            let idx = accounts.findIndex(a => a.username === username);
            if(idx === -1) return;
            let code = generateVerificationCode();
            accounts[idx].emailVerificationCode = code;
            localStorage.setItem('adminAccounts', JSON.stringify(accounts));
            sendVerificationEmail(email, code, username);
        }
        function confirmAdminEmailCode() {
            let username = localStorage.getItem('loggedAdminUsername');
            let code = document.getElementById('adminEmailCodeInput').value.trim();
            let accounts = JSON.parse(localStorage.getItem('adminAccounts')) || [];
            let idx = accounts.findIndex(a => a.username === username);
            if(idx === -1) return;
            if(!code) { alert(t('alert_enter_code', 'اكتب الكود اللي وصلك!')); return; }
            if(code === accounts[idx].emailVerificationCode) {
                accounts[idx].emailVerified = true;
                accounts[idx].emailVerificationCode = '';
                localStorage.setItem('adminAccounts', JSON.stringify(accounts));
                showToast('✅ ' + t('email_verify_success', 'تم توثيق بريدك بنجاح!'));
                renderAdminEmailSecurityBox();
            } else {
                alert(t('alert_wrong_code', 'الكود غير صحيح، حاول تاني أو اطلب إعادة إرسال.'));
            }
        }
        function changeAdminEmail() {
            let username = localStorage.getItem('loggedAdminUsername');
            let accounts = JSON.parse(localStorage.getItem('adminAccounts')) || [];
            let idx = accounts.findIndex(a => a.username === username);
            if(idx === -1) return;
            accounts[idx].email = '';
            accounts[idx].emailVerified = false;
            accounts[idx].loginMethod = 'username';
            localStorage.setItem('adminAccounts', JSON.stringify(accounts));
            renderAdminEmailSecurityBox();
        }
        function saveAdminLoginMethod() {
            let username = localStorage.getItem('loggedAdminUsername');
            let accounts = JSON.parse(localStorage.getItem('adminAccounts')) || [];
            let idx = accounts.findIndex(a => a.username === username);
            if(idx === -1) return;
            accounts[idx].loginMethod = document.getElementById('adminLoginMethodSelect').value;
            localStorage.setItem('adminAccounts', JSON.stringify(accounts));
            showToast('✅ اتحفظت طريقة الدخول');
        }

        function renderAdminPanel() {
            let role = localStorage.getItem('loggedAdminRole') || 'support';
            let username = localStorage.getItem('loggedAdminUsername') || 'admin';

            try {
                document.getElementById('adminWelcomeNote').innerText =
                    `مرحباً "${username}" — صلاحيتك: ${role === 'super' ? 'مدير عام (كل الصلاحيات)' : 'دعم فني فقط'}`;

                // الحاوية دي بتتقفل تمامًا بس لو الحساب مالوش ولا صلاحية واحدة من صلاحيات لوحة الإدارة
                // المتقدمة أصلاً - غير كده بتفضل ظاهرة، والتحكم الدقيق في كل قسم لوحده بيحصل في
                // applyAdminPanelSectionGating() فوق حسب اللي الأدمن الرئيسي منحه لكل مشرف بالتحديد.
                let hasAnyAdvancedPanelPerm = role === 'super' || ADMIN_PANEL_SECTIONS_LIST.some(p => currentAdminHasPanelPermission(p.key));
                document.getElementById('adminSuperOnlySections').classList.toggle('hidden', !hasAnyAdvancedPanelPerm);
                applyAdminPanelSectionGating();
            } catch(e) { console.error('renderAdminPanel: خطأ في الترحيب/الصلاحيات:', e); }

            // 🛡️ من هنا لكل نداء عرض قسم إداري، محمي لوحده على حدة - عشان لو قسم واحد فيه
            // مشكلة (بيانات ناقصة، عنصر مش موجود)، الأقسام التانية كلها تكمل تعرض عادي
            // بدل ما توقف كلها من نداء واحد بيفشل بالغلط زي ما كان بيحصل قبل كده.
            try { renderAdminStats(); } catch(e) { console.error('renderAdminStats error:', e); }
            try { renderSupportTeam(); } catch(e) { console.error('renderSupportTeam error:', e); }
            try { renderSupportLogs(); } catch(e) { console.error('renderSupportLogs error:', e); }
            try { renderAdminStores(); } catch(e) { console.error('renderAdminStores error:', e); }
            try { renderBroadcastTargets(); } catch(e) { console.error('renderBroadcastTargets error:', e); }
            try { renderAdminEmailSecurityBox(); } catch(e) { console.error('renderAdminEmailSecurityBox error:', e); }

            if(role === 'super') {
                try { loadHomeAdBannerToForm(); } catch(e) { console.error('loadHomeAdBannerToForm error:', e); }
                try { renderAdminAccounts(); } catch(e) { console.error('renderAdminAccounts error:', e); }
                try { renderSubscriptionPlansList(); } catch(e) { console.error('renderSubscriptionPlansList error:', e); }
                try {
                    document.getElementById('subscriptionPriceInput').value = localStorage.getItem('subscriptionPrice') || '';
                    document.getElementById('trialDaysInput').value = localStorage.getItem('trialDays') || '15';
                    document.getElementById('renewalCycleInput').value = localStorage.getItem('renewalCycleDays') || '30';
                    document.getElementById('subscriptionReminderTemplateInput').value = localStorage.getItem('subscriptionReminderTemplate') || '';
                    let pm = JSON.parse(localStorage.getItem('subscriptionPayMethods') || '{}');
                    if(document.getElementById('payInstapay'))  document.getElementById('payInstapay').value  = pm.instapay  || '';
                    if(document.getElementById('payVodafone'))  document.getElementById('payVodafone').value  = pm.vodafone  || '';
                    if(document.getElementById('payOrange'))    document.getElementById('payOrange').value    = pm.orange    || '';
                    if(document.getElementById('payEtisalat')) document.getElementById('payEtisalat').value = pm.etisalat || '';
                    if(document.getElementById('payPaypal'))    document.getElementById('payPaypal').value    = pm.paypal    || '';
                    if(document.getElementById('payBank'))      document.getElementById('payBank').value      = pm.bank      || '';
                } catch(e) { console.error('renderAdminPanel: خطأ في إعدادات الاشتراك/الدفع:', e); }
                try {
                    document.getElementById('platformNameInput').value = localStorage.getItem('platformName') || '';
                    populatePlatformLanguageSettings();
                    populatePlatformNameByLang();
                    populateFooterCopyrightSettings();
                    try { populatePrivacyPolicyEditorTabs(); } catch(e) {}
                    try { mountRichToolbars(); } catch(e) {}
                    try { populatePlatformChatSettingsUI(); } catch(e) {}
                    try { refreshAdminChatBadge(); } catch(e) {}
                    renderRegistrationPauseStatus();
                    if(document.getElementById('platformNameColorInput')) document.getElementById('platformNameColorInput').value = localStorage.getItem('platformNameColor') || '#6d4c41';
                    document.getElementById('platformTaglineInput').value = localStorage.getItem('platformTagline') || '';
                    document.getElementById('platformAboutTextInput').value = localStorage.getItem('platformAboutText') || '';
                    document.getElementById('platformContactInput').value = localStorage.getItem('platformContact') || '';
                    document.getElementById('platformFacebookInput').value = localStorage.getItem('platformFacebook') || '';
                    document.getElementById('platformInstagramInput').value = localStorage.getItem('platformInstagram') || '';
                    document.getElementById('platformTwitterInput').value = localStorage.getItem('platformTwitter') || '';
                    document.getElementById('platformWhatsappInput').value = localStorage.getItem('platformWhatsapp') || '';
                    document.getElementById('platformTelegramInput').value = localStorage.getItem('platformTelegram') || '';
                } catch(e) { console.error('renderAdminPanel: خطأ في إعدادات هوية المنصة:', e); }
                try { renderPlatformGuideItemsList(); } catch(e) { console.error('renderPlatformGuideItemsList error:', e); }
                try {
                    document.getElementById('platformShowFeaturesToggle').checked = localStorage.getItem('platformShowFeatures') === 'true';
                    document.getElementById('platformShowStepsToggle').checked = localStorage.getItem('platformShowSteps') === 'true';
                } catch(e) { console.error('renderAdminPanel: خطأ في مفاتيح إظهار الأقسام:', e); }
                try { renderPlatformFeaturesAdminList(); } catch(e) { console.error('renderPlatformFeaturesAdminList error:', e); }
                try { renderPlatformStepsAdminList(); } catch(e) { console.error('renderPlatformStepsAdminList error:', e); }
                try {
                    let platLogo = localStorage.getItem('platformLogo');
                    if(platLogo) {
                        let plp = document.getElementById('platformLogoPreview');
                        plp.src = platLogo; plp.style.display = 'block';
                    }
                } catch(e) { console.error('renderAdminPanel: خطأ في شعار المنصة:', e); }
                try { renderPlatformSnippets(); } catch(e) { console.error('renderPlatformSnippets error:', e); }
            }
        }

        // --- إحصائيات عامة للمنصة ---
        function renderAdminStats() {
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            let names = Object.keys(stores);
            let activeCount = names.filter(n => stores[n].status === 'active').length;
            let stoppedCount = names.length - activeCount;

            let totalOrders = 0, totalVisits = 0, mostActiveName = '—', mostActiveCount = -1;
            names.forEach(n => {
                let count = (stores[n].orderHistory || []).length;
                totalOrders += count;
                totalVisits += stores[n].visitCount || 0;
                if(count > mostActiveCount) { mostActiveCount = count; mostActiveName = n; }
            });

            document.getElementById('adminStatsBox').innerHTML = `
                <div style="display:flex; justify-content:space-between; margin-bottom:4px;"><span>🛍️ إجمالي المتاجر</span><strong>${names.length}</strong></div>
                <div style="display:flex; justify-content:space-between; margin-bottom:4px;"><span>🟢 مفعّلة / 🔴 موقوفة</span><strong>${activeCount} / ${stoppedCount}</strong></div>
                <div style="display:flex; justify-content:space-between; margin-bottom:4px;"><span>📦 إجمالي الطلبات المسجلة</span><strong>${totalOrders}</strong></div>
                <div style="display:flex; justify-content:space-between; margin-bottom:4px;"><span>👁️ إجمالي الزيارات (كل المتاجر)</span><strong>${totalVisits}</strong></div>
                <div style="display:flex; justify-content:space-between;"><span>🏆 الأكثر نشاطاً</span><strong>${mostActiveName} (${mostActiveCount > 0 ? mostActiveCount : 0})</strong></div>
            `;
        }

        // --- قائمة الصلاحيات المتاحة لحسابات "الدعم الفني" على المتاجر المسموح لهم بها ---
        // الأدمن (مدير عام) يقدر يفعّل/يعطّل أي تركيبة منها لكل حساب على حدة عند الإضافة أو التعديل.
        const STORE_PERMISSIONS_LIST = [
            { key: 'visit',              label: '👁️ معاينة المتجر (الدخول له كزائر)' },
            { key: 'toggleStatus',       label: '⏯️ تفعيل / إيقاف المتجر' },
            { key: 'homepageVisibility', label: '🏠 إظهار / إخفاء المتجر من الصفحة الرئيسية' },
            { key: 'renewSubscription',  label: '💳 تجديد اشتراك المتجر' },
            { key: 'manageColors',       label: '🎨 تخصيص ألوان المتجر' },
            { key: 'manageQuota',        label: '💾 تعديل مساحة التخزين المسموحة' },
            { key: 'manageImageLimit',   label: '🖼️ تعديل الحد الأقصى لعدد صور المنتج' },
            { key: 'managePhoneMode',    label: '📞 تعديل وضع طلب رقم هاتف العميل عند الشراء' },
            { key: 'customCode',         label: '🧩 إدارة الأكواد المخصصة للمتجر' },
            { key: 'manageCoOwners',     label: '🤝 إدارة تجار الشراكة على المتجر' },
            { key: 'manageStorePlans',   label: '🏷️ إدارة باقات الاشتراك وتعيينها للمتاجر' },
            { key: 'changeLoginName',    label: '✏️ تغيير اسم دخول التاجر' },
            { key: 'resetPassword',      label: '🔑 تغيير كلمة سر التاجر' },
            { key: 'deleteStore',        label: '🗑️ حذف المتجر نهائيًا (صلاحية حساسة)' },
        ];

        // ============================================================
        // 🗂️ صلاحيات منفصلة تمامًا عن اللي فوق: مش عن "المتاجر"، دي عن أجزاء لوحة
        // الإدارة نفسها. الأدمن يقدر يحدد أي جزء من اللوحة يشوفه أو يستخدمه أي مشرف،
        // بغض النظر عن صلاحياته على المتاجر (ممكن مشرف يشوف كل المتاجر لكن مايشوفش
        // مثلاً "فريق الدعم الفني" أو "الإحصائيات العامة" لو الأدمن ماحبش كده).
        // ============================================================
        const ADMIN_PANEL_SECTIONS_LIST = [
            { key: 'viewStats',         label: '📊 الإحصائيات العامة للمنصة' },
            { key: 'manageRenewals',    label: '🔔 مراجعة طلبات تجديد الاشتراك' },
            { key: 'broadcastMessages', label: '📨 إرسال رسائل جماعية للتجار' },
            { key: 'manageSupportTeam', label: '🎧 إدارة فريق الدعم الفني وتقاريره' },
            { key: 'manageHomeBanner',  label: '🖼️ اللافتة الإعلانية للصفحة الرئيسية' },
            { key: 'manageAboutPlatform', label: 'ℹ️ صفحة "عن المنصة"' },
            { key: 'manageGuide',       label: '📖 دليل استخدام المتجر' },
            { key: 'manageHomeSections', label: '🏠 تخصيص أقسام الصفحة الرئيسية' },
            { key: 'managePlans',       label: '🏷️ إنشاء وتعديل باقات الاشتراك' },
            { key: 'manageSubSettings', label: '💳 إعدادات الاشتراك والدفع' },
            { key: 'manageBackup',      label: '💾 النسخ الاحتياطي والاسترجاع' },
            { key: 'manageAdminAccounts', label: '👑 حسابات مديري المنصة (حساسة)' },
            { key: 'manageCustomCode',  label: '🧩 أكواد مخصصة عامة للمنصة' },
            { key: 'managePlatformLang', label: '🌍 إعدادات لغة المنصة الافتراضية' },
            { key: 'manageRegPause',    label: '⏸️ إيقاف تسجيل متاجر جديدة مؤقتًا' },
            { key: 'bulkDeleteStores',  label: '🗑️ حذف عدة متاجر دفعة واحدة' },
        ];

        // --- التحقق هل الحساب المسجل دخوله حاليًا يملك صلاحية معينة على المتاجر ---
        // المدير العام (super) يملك كل الصلاحيات دايمًا. حساب الدعم الفني يعتمد على الصلاحيات المحددة له بالظبط.
        function currentAdminHasPermission(key) {
            let role = localStorage.getItem('loggedAdminRole') || 'support';
            if(role === 'super') return true;
            let username = localStorage.getItem('loggedAdminUsername');
            let accounts = JSON.parse(localStorage.getItem('adminAccounts')) || [];
            let me = accounts.find(a => a.username === username);
            if(!me) return false;
            // حسابات دعم فني اتعملت قبل إضافة نظام الصلاحيات الدقيقة (مفيش عندها permissions خالص):
            // بنحافظلها على نفس الصلاحية الكاملة اللي كانت شغالة بيها سابقًا، لحد ما الأدمن يعدّلها بنفسه.
            if(me.permissions === undefined) return true;
            return !!me.permissions[key];
        }

        // نفس فكرة currentAdminHasPermission بالظبط، لكن لأجزاء لوحة الإدارة نفسها (panelPermissions)
        function currentAdminHasPanelPermission(key) {
            let role = localStorage.getItem('loggedAdminRole') || 'support';
            if(role === 'super') return true;
            let username = localStorage.getItem('loggedAdminUsername');
            let accounts = JSON.parse(localStorage.getItem('adminAccounts')) || [];
            let me = accounts.find(a => a.username === username);
            if(!me) return false;
            if(me.panelPermissions === undefined) return true; // حسابات قديمة: تفضل بصلاحيتها الكاملة السابقة
            return !!me.panelPermissions[key];
        }

        // إخفاء/إظهار أجزاء لوحة الإدارة (الأكورديونات) حسب panelPermissions بتاعة الحساب الحالي
        function applyAdminPanelSectionGating() {
            let statsAcc = document.getElementById('adminStatsAccordion');
            if(statsAcc) statsAcc.classList.toggle('hidden', !currentAdminHasPanelPermission('viewStats'));
            let renewalsAcc = document.getElementById('renewalRequestsAccordion');
            if(renewalsAcc) renewalsAcc.classList.toggle('hidden', !currentAdminHasPanelPermission('manageRenewals'));
            let broadcastAcc = document.getElementById('broadcastAccordion');
            if(broadcastAcc) broadcastAcc.classList.toggle('hidden', !currentAdminHasPanelPermission('broadcastMessages'));
            let supportAcc = document.getElementById('supportTeamAccordion');
            if(supportAcc) supportAcc.classList.toggle('hidden', !currentAdminHasPanelPermission('manageSupportTeam'));
            let sectionMap = {
                homeBannerAccordion: 'manageHomeBanner', aboutPlatformAccordion: 'manageAboutPlatform',
                guideAccordion: 'manageGuide', homeSectionsAccordion: 'manageHomeSections',
                plansAccordion: 'managePlans', subSettingsAccordion: 'manageSubSettings',
                backupAccordion: 'manageBackup', adminAccountsAccordion: 'manageAdminAccounts',
                customCodeAccordion: 'manageCustomCode',
            };
            for(let elId in sectionMap) {
                let el = document.getElementById(elId);
                if(el) el.classList.toggle('hidden', !currentAdminHasPanelPermission(sectionMap[elId]));
            }
        }



        // --- إدارة حسابات المديرين (متعددة الصلاحيات، مع تحديد متاجر وصلاحيات دقيقة لحسابات الدعم الفني) ---
        function renderAdminAccounts() {
            let accounts = JSON.parse(localStorage.getItem('adminAccounts')) || [];
            let currentUsername = localStorage.getItem('loggedAdminUsername');
            let list = document.getElementById('adminAccountsList');
            list.innerHTML = '';
            accounts.forEach((acc, index) => {
                let grantedCount = acc.permissions ? Object.values(acc.permissions).filter(Boolean).length : STORE_PERMISSIONS_LIST.length;
                let permsTxt = acc.role === 'super'
                    ? '👑 مدير عام (كل الصلاحيات وكل المتاجر)'
                    : `🎧 دعم فني — متاجر: ${(acc.allowedStores && acc.allowedStores.length) ? acc.allowedStores.join('، ') : 'لا يوجد متجر محدد بعد'} — صلاحيات مفعّلة: ${grantedCount}/${STORE_PERMISSIONS_LIST.length}${acc.permissions === undefined ? ' (حساب قديم بكل الصلاحيات، عدّله لتخصيصه)' : ''}`;
                // 💬 حالة توفّر الشات الخاصة بهذا الحساب (موظف/مدير قفل الشات عن نفسه مؤقتًا؟)
                let chatAvailTxt = acc.chatAvailable === false
                    ? `<span style="color:#dc2626;">⛔ ${t('chat_staff_unavailable_badge', 'غير متاح للشات حاليًا')}</span>`
                    : `<span style="color:#16a34a;">💬 ${t('chat_staff_available_badge', 'متاح للشات')}</span>`;
                list.innerHTML += `
                    <div class="manage-row">
                        <div>
                            <strong>${acc.username}</strong> ${acc.username === currentUsername ? '(أنت)' : ''}<br>
                            <span style="font-size:11px; color:var(--text-muted);">${permsTxt} — كلمة المرور: ${acc.password}</span><br>
                            <span style="font-size:11px;">${chatAvailTxt}</span>
                        </div>
                        <div style="display:flex; gap:4px;">
                            <button class="edit" style="width:auto; padding:6px 10px; font-size:11px; margin:0;" onclick="openEditAdminPermsModal(${index})" title="تعديل الصلاحيات/الشات"><i class="fa fa-user-shield"></i></button>
                            <button class="danger edit" onclick="deleteAdminAccount(${index})" ${acc.username === currentUsername ? 'disabled title="لا يمكنك حذف حسابك الحالي"' : ''}><i class="fa fa-trash"></i></button>
                        </div>
                    </div>
                `;
            });
            toggleNewAdminStorePerms();
        }

        function toggleNewAdminStorePerms() {
            let role = document.getElementById('newAdminRole').value;
            let box = document.getElementById('newAdminStoresPermBox');
            let permsBox = document.getElementById('newAdminPermsBox');
            let panelPermsBox = document.getElementById('newAdminPanelPermsBox');
            box.classList.toggle('hidden', role !== 'support');
            permsBox.classList.toggle('hidden', role !== 'support');
            panelPermsBox.classList.toggle('hidden', role !== 'support');
            if(role !== 'support') return;

            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            let checklist = document.getElementById('newAdminStoresChecklist');
            let names = Object.keys(stores);
            checklist.innerHTML = names.length === 0
                ? '<p style="font-size:11px; color:var(--text-muted);">لا توجد متاجر مسجلة بعد.</p>'
                : names.map(n => `
                    <label style="display:flex; align-items:center; gap:6px; font-size:12px; padding:4px 0;">
                        <input type="checkbox" class="new-admin-store-perm" value="${n}" style="width:auto; margin:0;"> ${n}
                    </label>
                `).join('');

            document.getElementById('newAdminPermsChecklist').innerHTML = STORE_PERMISSIONS_LIST.map(p => `
                <label style="display:flex; align-items:center; gap:6px; font-size:12px; padding:4px 0;">
                    <input type="checkbox" class="new-admin-perm" value="${p.key}" style="width:auto; margin:0;"> ${p.label}
                </label>
            `).join('');

            document.getElementById('newAdminPanelPermsChecklist').innerHTML = ADMIN_PANEL_SECTIONS_LIST.map(p => `
                <label style="display:flex; align-items:center; gap:6px; font-size:12px; padding:4px 0;">
                    <input type="checkbox" class="new-admin-panel-perm" value="${p.key}" style="width:auto; margin:0;"> ${p.label}
                </label>
            `).join('');
        }

        function addAdminAccount() {
            let username = document.getElementById('newAdminUsername').value.trim();
            let password = document.getElementById('newAdminPassword').value.trim();
            let role = document.getElementById('newAdminRole').value;
            if(!username || !password) { alert('يرجى إدخال اسم المستخدم وكلمة المرور!'); return; }

            let accounts = JSON.parse(localStorage.getItem('adminAccounts')) || [];
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            if(accounts.some(a => a.username.toLowerCase() === username.toLowerCase()) || stores[username]) {
                alert('هذا الاسم مستخدم بالفعل!'); return;
            }

            let allowedStores = [];
            let permissions = {};
            let panelPermissions = {};
            if(role === 'support') {
                document.querySelectorAll('.new-admin-store-perm').forEach(cb => { if(cb.checked) allowedStores.push(cb.value); });
                document.querySelectorAll('.new-admin-perm').forEach(cb => { permissions[cb.value] = cb.checked; });
                document.querySelectorAll('.new-admin-panel-perm').forEach(cb => { panelPermissions[cb.value] = cb.checked; });
            }

            accounts.push({ username, password, role, allowedStores, permissions, panelPermissions });
            localStorage.setItem('adminAccounts', JSON.stringify(accounts));
            document.getElementById('newAdminUsername').value = '';
            document.getElementById('newAdminPassword').value = '';
            renderAdminAccounts();
            alert('تم إضافة الحساب بنجاح.');
        }

        function deleteAdminAccount(index) {
            let accounts = JSON.parse(localStorage.getItem('adminAccounts')) || [];
            let currentUsername = localStorage.getItem('loggedAdminUsername');
            if(accounts[index].username === currentUsername) { alert('لا يمكنك حذف حسابك الحالي وأنت مسجل دخول به!'); return; }
            let superCount = accounts.filter(a => a.role === 'super').length;
            if(accounts[index].role === 'super' && superCount <= 1) { alert('لا يمكن حذف آخر حساب مدير عام في المنصة!'); return; }
            if(!confirm(`تأكيد حذف الحساب "${accounts[index].username}"؟`)) return;
            accounts.splice(index, 1);
            localStorage.setItem('adminAccounts', JSON.stringify(accounts));
            renderAdminAccounts();
        }

        // --- تعديل صلاحيات ومتاجر حساب دعم فني موجود بالفعل ---
        function openEditAdminPermsModal(index) {
            let accounts = JSON.parse(localStorage.getItem('adminAccounts')) || [];
            let acc = accounts[index];
            if(!acc) return;

            document.getElementById('editAdminPermsModalIndex').value = index;
            document.getElementById('editAdminPermsModalName').textContent = acc.username;

            // 👑 مدير عام مالوش متاجر/صلاحيات محدودة (كل الصلاحيات أصلاً)، فبنخبي الأقسام
            // دي ونعرض بس إعدادات التواصل/توفر الشات الخاصة بحسابه.
            let isSuper = acc.role === 'super';
            ['editAdminStoresChecklist', 'editAdminPermsChecklist', 'editAdminPanelPermsChecklist'].forEach(function(id) {
                let el = document.getElementById(id);
                if(!el) return;
                el.classList.toggle('hidden', isSuper);
                // ⚠️ العنوان (h4) مش أب للعنصر ده، هو شقيق سابق له مباشرة (previousElementSibling)
                // - closest('h4') كان هيرجع null دايمًا هنا لأنه بيدور في الأجداد بس، مش الإخوة.
                if(el.previousElementSibling) el.previousElementSibling.classList.toggle('hidden', isSuper);
            });

            if(!isSuper) {
                let stores = JSON.parse(localStorage.getItem('allStores')) || {};
                let names = Object.keys(stores);
                let allowed = acc.allowedStores || [];
                document.getElementById('editAdminStoresChecklist').innerHTML = names.length === 0
                    ? '<p style="font-size:11px; color:var(--text-muted);">لا توجد متاجر مسجلة بعد.</p>'
                    : names.map(n => `
                        <label style="display:flex; align-items:center; gap:6px; font-size:12px; padding:4px 0;">
                            <input type="checkbox" class="edit-admin-store-perm" value="${n}" ${allowed.includes(n) ? 'checked' : ''} style="width:auto; margin:0;"> ${n}
                        </label>
                    `).join('');

                let perms = acc.permissions;
                let isLegacyFullAccess = perms === undefined;
                document.getElementById('editAdminPermsChecklist').innerHTML = STORE_PERMISSIONS_LIST.map(p => `
                    <label style="display:flex; align-items:center; gap:6px; font-size:12px; padding:4px 0;">
                        <input type="checkbox" class="edit-admin-perm" value="${p.key}" ${isLegacyFullAccess || (perms && perms[p.key]) ? 'checked' : ''} style="width:auto; margin:0;"> ${p.label}
                    </label>
                `).join('');

                let panelPerms = acc.panelPermissions;
                let isLegacyFullPanelAccess = panelPerms === undefined;
                document.getElementById('editAdminPanelPermsChecklist').innerHTML = ADMIN_PANEL_SECTIONS_LIST.map(p => `
                    <label style="display:flex; align-items:center; gap:6px; font-size:12px; padding:4px 0;">
                        <input type="checkbox" class="edit-admin-panel-perm" value="${p.key}" ${isLegacyFullPanelAccess || (panelPerms && panelPerms[p.key]) ? 'checked' : ''} style="width:auto; margin:0;"> ${p.label}
                    </label>
                `).join('');
            }

            // 💬 إعدادات الشات الخاصة بهذا الحساب بعينه (سوبر أو دعم، الاتنين عندهم نفس الحقول)
            document.getElementById('editAdminChatAvailable').checked = acc.chatAvailable !== false;
            document.getElementById('editAdminWhatsapp').value = acc.whatsapp || '';
            document.getElementById('editAdminTelegram').value = acc.telegram || '';

            document.getElementById('editAdminPermsModal').classList.remove('hidden');
        }

        function closeEditAdminPermsModal() {
            document.getElementById('editAdminPermsModal').classList.add('hidden');
        }

        function saveEditedAdminPerms() {
            let index = parseInt(document.getElementById('editAdminPermsModalIndex').value);
            let accounts = JSON.parse(localStorage.getItem('adminAccounts')) || [];
            if(!accounts[index]) return;

            if(accounts[index].role !== 'super') {
                let allowedStores = [];
                document.querySelectorAll('.edit-admin-store-perm').forEach(cb => { if(cb.checked) allowedStores.push(cb.value); });
                let permissions = {};
                document.querySelectorAll('.edit-admin-perm').forEach(cb => { permissions[cb.value] = cb.checked; });
                let panelPermissions = {};
                document.querySelectorAll('.edit-admin-panel-perm').forEach(cb => { panelPermissions[cb.value] = cb.checked; });

                accounts[index].allowedStores = allowedStores;
                accounts[index].permissions = permissions;
                accounts[index].panelPermissions = panelPermissions;
            }

            accounts[index].chatAvailable = document.getElementById('editAdminChatAvailable').checked;
            accounts[index].whatsapp = document.getElementById('editAdminWhatsapp').value.trim();
            accounts[index].telegram = document.getElementById('editAdminTelegram').value.trim();

            localStorage.setItem('adminAccounts', JSON.stringify(accounts));
            closeEditAdminPermsModal();
            renderAdminAccounts();
            showToast('✅ تم تحديث صلاحيات الحساب بنجاح');
        }

        // --- نسخ احتياطي واسترجاع لبيانات المنصة بالكامل ---
        function exportBackup() {
            let backupKeys = ['allStores', 'adminAccounts', 'supportTeam', 'supportLogs', 'homeAdBanner', 'subscriptionPrice'];
            let backup = {};
            backupKeys.forEach(k => { backup[k] = localStorage.getItem(k); });

            let blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
            let link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = `منصة-نسخة-احتياطية-${new Date().toISOString().slice(0,10)}.json`;
            link.click();
        }

        function importBackup(input) {
            let file = input.files[0];
            if(!file) return;
            if(!confirm('سيتم استبدال كل بيانات المنصة الحالية ببيانات الملف المستورد. هل أنت متأكد؟')) { input.value = ''; return; }

            let reader = new FileReader();
            reader.onload = function(e) {
                try {
                    let backup = JSON.parse(e.target.result);
                    for(let key in backup) {
                        if(backup[key] !== null && backup[key] !== undefined) localStorage.setItem(key, backup[key]);
                    }
                    alert('تم استرجاع النسخة الاحتياطية بنجاح! سيتم تحديث الصفحة الآن.');
                    location.reload();
                } catch(err) {
                    alert('ملف النسخة الاحتياطية غير صالح!');
                }
            };
            reader.readAsText(file);
        }

        // ============================================================
        // ☁️ النسخ الاحتياطي الشامل من السحابة (Firestore) - معزول تمامًا عن النسخ المحلي فوق:
        // - الأدمن: كل المتاجر + طلباتها من السحابة نفسها.
        // - التاجر: متجره هو بس (بمفتاح متجره من جلسته الحالية، مش قابل للتلاعب).
        // ============================================================
        // ⏱️ مهلة أمان: لو الاتصال بالسحابة معلّق (شبكة بطيئة/محجوبة، خصوصًا لو بتفتح
        // الملف محليًا مش من رابط مستضاف)، لازم تظهر رسالة واضحة بعد مدة معقولة بدل ما
        // "جاري جمع البيانات..." تفضل معلّقة للأبد من غير أي رد.
        function withTimeout(promise, ms, timeoutMsg) {
            return Promise.race([
                promise,
                new Promise((_, reject) => setTimeout(() => reject(new Error(timeoutMsg)), ms))
            ]);
        }
        async function adminExportCloudBackup() {
            if(!window.adminExportFullCloudBackup) { alert('⚠️ الاتصال بالسحابة غير متاح الآن.'); return; }
            try {
                showToast('⏳ جاري جمع بيانات كل المتاجر من السحابة...');
                let slowNoticeTimerA = setTimeout(() => showToast('⏳ لسه بيجمع بيانات كل المتاجر... ممكن ياخد دقيقة أو اتنين لو فيه متاجر كتير.'), 15000);
                let data = await withTimeout(window.adminExportFullCloudBackup(), 180000, 'الاتصال بالسحابة بطيء جدًا أو غير متاح. تأكد إنك بتفتح المنصة من رابط حقيقي على الإنترنت (مش ملف محفوظ على الجهاز) وجرب تاني.');
                clearTimeout(slowNoticeTimerA);
                let blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
                let url = URL.createObjectURL(blob);
                let a = document.createElement('a');
                a.href = url; a.download = 'platform_full_backup.json'; a.click();
                URL.revokeObjectURL(url);
                showToast('✅ تم تحميل النسخة الشاملة (' + Object.keys(data).length + ' متجر)');
            } catch(e) {
                console.error('adminExportCloudBackup error:', e);
                alert('⚠️ حصل خطأ أثناء التصدير: ' + (e && e.message ? e.message : e));
            }
        }
        function adminImportCloudBackup(input) {
            let file = input.files[0];
            if(!file) return;
            if(!confirm('⚠️ تحذير مهم: هذا سيستبدل بيانات المتاجر الموجودة في الملف فوق السحابة فورًا (المتاجر اللي مذكورة في الملف بس، الباقي مش بيتأثر). متأكد؟')) { input.value = ''; return; }
            let reader = new FileReader();
            reader.onload = async function(e) {
                try {
                    let data = JSON.parse(e.target.result);
                    if(!window.adminImportFullCloudBackup) { alert('⚠️ الاتصال بالسحابة غير متاح الآن.'); return; }
                    showToast('⏳ جاري رفع النسخة الشاملة للسحابة...');
                    let n = await withTimeout(window.adminImportFullCloudBackup(data), 25000, 'الاتصال بالسحابة بطيء جدًا أو غير متاح. تأكد إنك بتفتح المنصة من رابط حقيقي على الإنترنت وجرب تاني.');
                    alert('✅ تم استرجاع ' + n + ' متجر بنجاح للسحابة.');
                } catch(err) {
                    console.error('adminImportCloudBackup error:', err);
                    alert('⚠️ ملف غير صالح أو حصل خطأ: ' + (err && err.message ? err.message : err));
                }
                input.value = '';
            };
            reader.readAsText(file);
        }

        async function merchantExportCloudBackup() {
            let merchant = localStorage.getItem('currentActiveMerchant');
            if(!merchant) { alert('⚠️ لازم تكون داخل متجرك أولاً.'); return; }
            if(!window.merchantExportStoreCloudBackup) { alert('⚠️ الاتصال بالسحابة غير متاح الآن.'); return; }
            try {
                showToast('⏳ جاري جمع بيانات متجرك من السحابة...');
                let slowNoticeTimer = setTimeout(() => showToast('⏳ لسه بيجمع البيانات... ممكن ياخد وقت أطول لو المتجر فيه منتجات/طلبات كتير.'), 15000);
                let data = await withTimeout(window.merchantExportStoreCloudBackup(merchant), 180000, 'الاتصال بالسحابة بطيء جدًا أو غير متاح. تأكد إنك بتفتح المتجر من رابط حقيقي على الإنترنت (مش ملف محفوظ على الجهاز) وجرب تاني.');
                clearTimeout(slowNoticeTimer);
                let blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
                let url = URL.createObjectURL(blob);
                let a = document.createElement('a');
                a.href = url; a.download = 'store_backup_' + merchant + '.json'; a.click();
                URL.revokeObjectURL(url);
                showToast('✅ تم تحميل نسخة متجرك');
            } catch(e) {
                console.error('merchantExportCloudBackup error:', e);
                alert('⚠️ حصل خطأ أثناء التصدير: ' + (e && e.message ? e.message : e));
            }
        }
        function merchantImportCloudBackup(input) {
            let file = input.files[0];
            if(!file) return;
            let merchant = localStorage.getItem('currentActiveMerchant');
            if(!merchant) { alert('⚠️ لازم تكون داخل متجرك أولاً.'); input.value = ''; return; }
            if(!confirm('⚠️ هذا سيستبدل منتجاتك وطلباتك الحالية على السحابة بمحتوى الملف. هنحتفظ بنسخة من حالتك الحالية تلقائيًا عشان تقدر "تتراجع" لو حصل خطأ. متأكد؟')) { input.value = ''; return; }
            let reader = new FileReader();
            reader.onload = async function(e) {
                try {
                    let data = JSON.parse(e.target.result);
                    if(!window.merchantExportStoreCloudBackup || !window.merchantImportStoreCloudBackup) { alert('⚠️ الاتصال بالسحابة غير متاح الآن.'); return; }
                    showToast('⏳ جاري أخذ نسخة أمان من حالتك الحالية...');
                    // 🛟 "نقطة استعادة" تلقائية قبل أي استيراد: بنحفظ حالة متجرك الحالية فعليًا
                    // (من السحابة نفسها) قبل ما نكتب فوقها، عشان لو الملف المرفوع غلط أو
                    // بوّظ حاجة، تقدر تضغط "تراجع عن آخر استيراد" وترجع لحالتك قبل كده فورًا.
                    try {
                        let snapshot = await withTimeout(window.merchantExportStoreCloudBackup(merchant), 15000, 'تعذر أخذ نسخة أمان قبل الاستيراد.');
                        localStorage.setItem('preImportSnapshot_' + merchant, JSON.stringify(snapshot));
                        localStorage.setItem('preImportSnapshotTime_' + merchant, new Date().toLocaleString('ar-EG'));
                    } catch(snapErr) {
                        if(!confirm('⚠️ تعذّر أخذ نسخة أمان تلقائية قبل الاستيراد (لن تقدر تتراجع لو حصل خطأ). تكمل الاستيراد عادي برضو؟')) return;
                    }
                    showToast('⏳ جاري استرجاع متجرك للسحابة...');
                    // 🔒 دايمًا بنستخدم "merchant" (متجرك الحالي في الجلسة) كمكان الكتابة، حتى لو
                    // الملف فيه __storeId مختلف - ده اللي يمنع استرجاع بيانات لمتجر غير متجرك.
                    await withTimeout(window.merchantImportStoreCloudBackup(merchant, data), 25000, 'الاتصال بالسحابة بطيء جدًا أو غير متاح. جرب تاني.');
                    alert('✅ تم استرجاع نسخة متجرك بنجاح. لو حصل أي خطأ غير متوقع، في زرار "تراجع عن آخر استيراد" جنب أزرار النسخ الاحتياطي.');
                    refreshMerchantUndoImportBtn();
                    loadDashboard();
                } catch(err) {
                    console.error('merchantImportCloudBackup error:', err);
                    alert('⚠️ ملف غير صالح أو حصل خطأ: ' + (err && err.message ? err.message : err));
                }
                input.value = '';
            };
            reader.readAsText(file);
        }
        // ⏪ تراجع عن آخر استيراد: بيرجع بيانات متجرك على السحابة لنفس الحالة قبل آخر
        // عملية استيراد مباشرة (النسخة المحفوظة تلقائيًا فوق).
        async function merchantUndoLastImport() {
            let merchant = localStorage.getItem('currentActiveMerchant');
            let snap = merchant && localStorage.getItem('preImportSnapshot_' + merchant);
            if(!merchant || !snap) { alert('⚠️ لا توجد نسخة أمان محفوظة للتراجع إليها.'); return; }
            if(!confirm('هل تريد التراجع عن آخر استيراد والعودة لحالة متجرك قبله مباشرة؟')) return;
            try {
                showToast('⏳ جاري التراجع...');
                await withTimeout(window.merchantImportStoreCloudBackup(merchant, JSON.parse(snap)), 25000, 'الاتصال بالسحابة بطيء جدًا أو غير متاح. جرب تاني.');
                localStorage.removeItem('preImportSnapshot_' + merchant);
                localStorage.removeItem('preImportSnapshotTime_' + merchant);
                refreshMerchantUndoImportBtn();
                alert('✅ تم التراجع بنجاح.');
                loadDashboard();
            } catch(e) {
                console.error('merchantUndoLastImport error:', e);
                alert('⚠️ حصل خطأ أثناء التراجع: ' + (e && e.message ? e.message : e));
            }
        }
        function refreshMerchantUndoImportBtn() {
            let merchant = localStorage.getItem('currentActiveMerchant');
            let btn = document.getElementById('merchantUndoImportBtn');
            if(!btn) return;
            let hasSnap = merchant && !!localStorage.getItem('preImportSnapshot_' + merchant);
            btn.classList.toggle('hidden', !hasSnap);
            if(hasSnap) {
                let time = localStorage.getItem('preImportSnapshotTime_' + merchant) || '';
                btn.title = 'نسخة الأمان من: ' + time;
            }
        }


        function toggleAdBannerType() {
            let type = document.getElementById('adBannerType').value;
            document.getElementById('adBannerTextInput').classList.toggle('hidden', type !== 'text');
            document.getElementById('adBannerImageWrap').classList.toggle('hidden', type !== 'image');
        }

        function loadHomeAdBannerToForm() {
            let banner = JSON.parse(localStorage.getItem('homeAdBanner') || 'null');
            if(!banner) return;
            document.getElementById('adBannerType').value = banner.type || 'text';
            toggleAdBannerType();
            document.getElementById('adBannerTextInput').value = banner.text || '';
            document.getElementById('adBannerLinkInput').value = banner.link || '';
            if(banner.image) {
                let p = document.getElementById('adBannerPreviewImg');
                p.src = banner.image; p.style.display = 'block';
            }
        }

        function saveHomeAdBanner() {
            let type = document.getElementById('adBannerType').value;
            let text = document.getElementById('adBannerTextInput').value.trim();
            let link = document.getElementById('adBannerLinkInput').value.trim();
            let fileInput = document.getElementById('adBannerImageFile');
            let existing = JSON.parse(localStorage.getItem('homeAdBanner') || 'null') || {};
            let image = fileInput.getAttribute('data-base64') || existing.image || '';

            localStorage.setItem('homeAdBanner', JSON.stringify({ type, text, image, link }));
            alert('تم حفظ اللافتة الإعلانية، وستظهر الآن للزوار في الصفحة الرئيسية للمنصة فقط (قبل دخولهم أي متجر).');
        }

        function removeHomeAdBanner() {
            localStorage.removeItem('homeAdBanner');
            document.getElementById('adBannerTextInput').value = '';
            document.getElementById('adBannerLinkInput').value = '';
            document.getElementById('adBannerPreviewImg').style.display = 'none';
            alert('تم إزالة اللافتة الإعلانية.');
        }

        function saveSubscriptionPrice() {
            let price = document.getElementById('subscriptionPriceInput').value.trim();
            let trialDays = document.getElementById('trialDaysInput').value.trim();
            let renewalCycle = document.getElementById('renewalCycleInput').value.trim();
            let template = document.getElementById('subscriptionReminderTemplateInput').value.trim();
            let payMethods = {
                instapay:  (document.getElementById('payInstapay')  || {value:''}).value.trim(),
                vodafone:  (document.getElementById('payVodafone')  || {value:''}).value.trim(),
                orange:    (document.getElementById('payOrange')    || {value:''}).value.trim(),
                etisalat:  (document.getElementById('payEtisalat') || {value:''}).value.trim(),
                paypal:    (document.getElementById('payPaypal')    || {value:''}).value.trim(),
                bank:      (document.getElementById('payBank')      || {value:''}).value.trim(),
            };
            localStorage.setItem('subscriptionPrice', price);
            localStorage.setItem('trialDays', trialDays || '15');
            localStorage.setItem('renewalCycleDays', renewalCycle || '30');
            localStorage.setItem('subscriptionPayMethods', JSON.stringify(payMethods));
            localStorage.setItem('subscriptionReminderTemplate', template);
            showToast('✅ تم حفظ إعدادات الاشتراك');
        }

        // --- حساب حالة اشتراك المتجر (تجريبي أو دورة تجديد) بناءً على إعدادات الأدمن ---
        // === حساب حالة الاشتراك بناءً على "تاريخ انتهاء" فعلي بيتحدد وقت التجديد (subscriptionExpiresAt)
        // بدل ما يتحسب رياضيًا من دورة تجديد ثابتة، عشان الأدمن يقدر يجدد لأي متجر بأي عدد أيام
        // يحدده بنفسه وقت التجديد الفعلي (زر "🔄 تجديد" في قسم التحكم بالمتاجر). ===
        // ============================================================
        // 🏷️ باقات الاشتراك: بدل سعر واحد ثابت لكل التجار، بقى فيه أكتر من
        // باقة (فيها باقة مجانية محدودة كمان)، وكل باقة ليها حدود مختلفة:
        // عدد المنتجات، مساحة التخزين، عدد المساعدين، وهل مسموح بألوان/لافتات
        // مخصصة أو لأ. الأدمن هو اللي يضيف/يعدّل/يحذف الباقات، ويحدد باقة كل
        // متجر من قسم "إدارة المتاجر". القيم دي افتراضية بس، وقابلة للتعديل بالكامل.
        // ============================================================
        function getSubscriptionPlans() {
            let raw = localStorage.getItem('subscriptionPlans');
            if(raw) {
                try { return JSON.parse(raw); } catch(e) {}
            }
            // 🌱 باقات افتراضية أول مرة بس (الأدمن يقدر يعدّلها/يمسحها/يضيف غيرها بعد كده)
            // 👑 allowWhiteLabel: هل مسموح للتاجر يشيل اسم المنصة من سطر الحقوق أسفل متجره
            // ويخليه بس اسم متجره هو (store_only)، ولا لأ وبيتفرض عليه الوضع المدمج
            // (combined - فيه اسم متجره + "بدعم من" اسم المنصة) زي باقي الباقات العادية.
            let defaults = [
                { id: 'free',    name: 'مجانية',  price: 0,   productLimit: 10,  storageMB: 10,   staffLimit: 0, allowColors: false, allowBanners: false, allowWhiteLabel: false },
                { id: 'basic',   name: 'أساسي',   price: 100, productLimit: 50,  storageMB: 50,   staffLimit: 1, allowColors: false, allowBanners: true,  allowWhiteLabel: false },
                { id: 'pro',     name: 'متقدم',   price: 250, productLimit: 300, storageMB: 200,  staffLimit: 5, allowColors: true,  allowBanners: true,  allowWhiteLabel: false },
                { id: 'premium', name: 'بريميوم', price: 500, productLimit: -1,  storageMB: 1000, staffLimit: -1, allowColors: true, allowBanners: true, allowWhiteLabel: true  },
            ];
            localStorage.setItem('subscriptionPlans', JSON.stringify(defaults));
            return defaults;
        }

        function saveSubscriptionPlans(plans) {
            try {
                localStorage.setItem('subscriptionPlans', JSON.stringify(plans));
                return true;
            } catch(e) {
                alert('⚠️ حدث خطأ أثناء حفظ الباقات، المساحة قد تكون ممتلئة.');
                return false;
            }
        }

        // بيرجع باقة متجر معين، ولو المتجر لسه معندوش باقة محددة (متاجر قديمة قبل
        // إضافة النظام ده) بيرجعله الباقة المجانية كافتراضي آمن بدل ما ينهار الكود
        function getPlanForStore(store) {
            let plans = getSubscriptionPlans();
            let plan = plans.find(p => p.id === store.planId);
            return plan || plans.find(p => p.id === 'free') || plans[0] || { id:'free', name:'مجانية', price:0, productLimit:10, storageMB:10, staffLimit:0, allowColors:false, allowBanners:false };
        }

        function setStorePlan(name, planId) {
            if(!currentAdminHasPermission('manageStorePlans') && !currentAdminHasPermission('renewSubscription')) {
                alert('ليس لديك صلاحية تغيير باقة المتاجر.'); return;
            }
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            if(!stores[name]) return;
            stores[name].planId = planId;
            // 🏷️ لما التاجر يترقّى/ينزل باقة، مساحة التخزين المسموحة بتتحدث تلقائيًا لتطابق
            // الباقة الجديدة. الأدمن برضه يقدر بعد كده يعدّلها يدويًا من حقل "المساحة" لو حب.
            let newPlan = getSubscriptionPlans().find(p => p.id === planId);
            if(newPlan) stores[name].storageQuotaMB = newPlan.storageMB;
            if(!saveAllStores(stores)) return;
            renderAdminStores();
            let plan = getSubscriptionPlans().find(p => p.id === planId);
            showToast(`✅ تم نقل متجر "${name}" لباقة "${plan ? plan.name : planId}"`);
        }

        function computeSubscriptionStatus(store) {
            let trialDays = parseInt(localStorage.getItem('trialDays')) || 15;
            let now = Date.now();
            let expiresAt = store.subscriptionExpiresAt;
            if(expiresAt === undefined || expiresAt === null) {
                // احتياط للمتاجر القديمة جدًا اللي لسه ماتعالجتش بالـ migration لأي سبب
                expiresAt = (store.registeredAt || now) + trialDays * 86400000;
            }
            let isStillInTrial = !store.subscriptionActivatedOnce && store.registeredAt && (now - store.registeredAt) < trialDays * 86400000;
            let daysLeft = Math.ceil((expiresAt - now) / 86400000);
            return {
                phase: isStillInTrial ? 'trial' : 'renewal',
                daysLeft: daysLeft,
                expired: daysLeft <= 0,
                expiresAt: expiresAt
            };
        }

        // --- تجديد اشتراك متجر معين لعدد أيام يحدده الأدمن بنفسه (بيضيفهم فوق باقي المدة الحالية
        // لو لسه مفيش فيه، أو من النهاردة لو الاشتراك خلص خالص) ---
        function renewStoreSubscription(name) {
            if(!currentAdminHasPermission('renewSubscription')) { alert('ليس لديك صلاحية تجديد اشتراكات المتاجر.'); return; }
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            let store = stores[name];
            if(!store) return;
            let defaultDays = parseInt(localStorage.getItem('renewalCycleDays')) || 30;
            let input = prompt(`لعدد كام يوم عايز تجدد اشتراك متجر "${name}"؟`, defaultDays);
            if(input === null) return; // المستخدم ضغط إلغاء
            let days = parseInt(input);
            if(isNaN(days) || days <= 0) { alert('اكتب عدد أيام صحيح أكبر من صفر.'); return; }

            let now = Date.now();
            let currentExpiry = store.subscriptionExpiresAt || now;
            // لو الاشتراك لسه شغال ومعندوش تاريخ انتهاء فات، بنضيف الأيام فوق تاريخ الانتهاء الحالي
            // (يعني التجديد بيراكم فوق المدة المتبقية)، ولو خلص بالفعل، بنبدأ العد من النهاردة.
            let base = currentExpiry > now ? currentExpiry : now;
            store.subscriptionExpiresAt = base + days * 86400000;
            store.subscriptionActivatedOnce = true;
            if(!saveAllStores(stores)) return;
            showToast(`✅ تم تجديد اشتراك "${name}" لمدة ${days} يوم إضافية.`);
            renderAdminStores();
        }

        // --- الأدمن (بعكس التاجر) يقدر يغيّر اسم دخول أي متجر في أي وقت من غير قيد الـ 6 شهور،
        // لحالات الطوارئ (مثلاً التاجر نسي اسم دخوله أو فيه مشكلة أمنية) ---
        function adminChangeStoreLoginName(oldName) {
            if(!currentAdminHasPermission('changeLoginName')) { alert('ليس لديك صلاحية تغيير اسم دخول التجار.'); return; }
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            if(!stores[oldName]) return;
            let newName = prompt(`اسم الدخول الجديد لمتجر "${getStoreDisplayName(oldName, stores[oldName])}" (الحالي: "${oldName}")؟`, oldName);
            if(newName === null) return;
            newName = newName.trim();
            if(!newName || newName === oldName) return;

            let adminAccounts = JSON.parse(localStorage.getItem('adminAccounts')) || [];
            let nameTaken = stores[newName] || adminAccounts.some(a => a.username.toLowerCase() === newName.toLowerCase());
            if(nameTaken) { alert(t('alert_username_taken', 'اسم الدخول ده مستخدم بالفعل، اختار اسم تاني.')); return; }

            if(!confirm(`متأكد إنك عايز تغيّر اسم دخول "${oldName}" إلى "${newName}"؟ ده هيغيّر رابط المتجر القديم.`)) return;

            stores[newName] = stores[oldName];
            stores[newName].loginNameChangedAt = Date.now();
            delete stores[oldName];
            if(!saveAllStores(stores)) return;

            // لو كنت واقف حاليًا بتعاين نفس المتجر ده (activeStore)، حدّث المرجع عشان ميحصلش تعارض
            if(activeStore === oldName) {
                activeStore = newName;
                localStorage.setItem('currentActiveStore', newName);
            }
            showToast(`✅ تم تغيير اسم دخول المتجر إلى "${newName}".`);
            renderAdminStores();
        }

        // --- إرسال رسائل للتجار (تظهر في صندوق رسائل المتجر داخل لوحته - مش عبر واتساب فعليًا) ---
        // ✅ اتصلح هنا: كانت الدالة دي بتتنفذ لحساب "مدير عام" بس (role === 'super')، فأي مشرف
        // عنده صلاحية "broadcastMessages" كان شايف الجزء ده فاضي تمامًا وميقدرش يستخدمه خالص.
        // كمان كانت بتفلتر وتشيل أي متجر مالوش رقم واتساب مسجل، وده غلط لأن الرسالة أصلاً
        // بتتحفظ في صندوق رسائل المتجر جوه اللوحة (مش بترسل عبر واتساب)، فمفيش داعي للفلترة دي.
        function renderBroadcastTargets() {
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            let box = document.getElementById('broadcastTargetsChecklist');
            if(!box) return;

            // نفس تقييد الصلاحيات المستخدم في renderAdminStores: دعم فني يشوف بس متاجره المسموحة
            let role = localStorage.getItem('loggedAdminRole') || 'support';
            let names = Object.keys(stores);
            if(role !== 'super') {
                let accounts = JSON.parse(localStorage.getItem('adminAccounts')) || [];
                let me = accounts.find(a => a.username === localStorage.getItem('loggedAdminUsername'));
                let allowed = (me && me.allowedStores) ? me.allowedStores : [];
                names = names.filter(n => allowed.includes(n));
            }

            box.innerHTML = names.length === 0
                ? '<p style="font-size:11px; color:var(--text-muted); margin:0;">لا يوجد تجار متاحين لك حاليًا.</p>'
                : names.map(n => `
                    <label style="display:flex; align-items:center; gap:6px; font-size:12px; padding:4px 0;">
                        <input type="checkbox" class="broadcast-target-cb" value="${n}" style="width:auto; margin:0;"> ${getStoreDisplayName(n, stores[n])}
                    </label>
                `).join('');
        }

        function toggleAllBroadcastTargets(checked) {
            document.querySelectorAll('.broadcast-target-cb').forEach(cb => { cb.checked = checked; });
        }

        function sendMerchantBroadcast(lang, toAll) {
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            let customMsg = document.getElementById('broadcastMessageInput').value.trim();
            let price = localStorage.getItem('subscriptionPrice') || '';

            let defaultMsg = lang === 'ar'
                ? `مرحباً، هذه رسالة من إدارة المنصة${price ? ' — سعر الاشتراك: ' + price : ''}. فعّل اشتراكك الآن لضمان استمرار ظهور متجرك.`
                : `Hello, this is a message from the platform admin${price ? ' — subscription: ' + price : ''}. Please activate your subscription.`;

            let finalMsg = customMsg || defaultMsg;
            let targets = [];

            if(toAll) {
                targets = Object.keys(stores);
                // ✅ حماية: مشرف دعم فني لا يقدر يبرودكاست لمتاجر برّه نطاق صلاحياته حتى بزرار "الجميع"
                let role = localStorage.getItem('loggedAdminRole') || 'support';
                if(role !== 'super') {
                    let accounts = JSON.parse(localStorage.getItem('adminAccounts')) || [];
                    let me = accounts.find(a => a.username === localStorage.getItem('loggedAdminUsername'));
                    let allowed = (me && me.allowedStores) ? me.allowedStores : [];
                    targets = targets.filter(n => allowed.includes(n));
                }
                if(targets.length === 0) { alert('لا يوجد تجار مسموح لك بإرسال رسائل لهم.'); return; }
            } else {
                // ✅ بقى يدعم تحديد متجر واحد أو أكتر من قائمة الاختيار المتعدد فوق
                document.querySelectorAll('.broadcast-target-cb').forEach(cb => { if(cb.checked) targets.push(cb.value); });
                if(targets.length === 0) { alert('اختر متجرًا واحدًا على الأقل من القائمة، أو استخدم زرار "إرسال للجميع".'); return; }
            }

            // الرسالة تُحفظ في صندوق رسائل المتجر — يشوفها التاجر في لوحة التحكم
            let now = new Date().toLocaleString('ar-EG');
            let sent = 0;
            targets.forEach(name => {
                if(!stores[name]) return;
                if(!stores[name].adminMessages) stores[name].adminMessages = [];
                stores[name].adminMessages.unshift({ text: finalMsg, date: now, read: false });
                // نحتفظ بآخر 20 رسالة فقط
                if(stores[name].adminMessages.length > 20) stores[name].adminMessages = stores[name].adminMessages.slice(0,20);
                sent++;
            });

            if(saveAllStores(stores)) {
                showToast(`✅ تم إرسال الرسالة لـ ${sent} متجر. سيشوفها التجار في لوحة التحكم.`);
                document.getElementById('broadcastMessageInput').value = '';
            }
        }

        function renderSupportTeam() {
            let team = JSON.parse(localStorage.getItem('supportTeam')) || [];
            let list = document.getElementById('adminSupportTeamList');
            list.innerHTML = '';
            team.forEach((m, index) => {
                list.innerHTML += `
                    <div class="manage-row">
                        <span>👤 <strong>${m.name}</strong> (${m.phone})</span>
                        <div style="display:flex; gap:4px;">
                            <button class="edit" onclick="editSupportMember(${index})"><i class="fa fa-edit"></i></button>
                            <button class="danger edit" onclick="deleteSupportMember(${index})">حذف</button>
                        </div>
                    </div>
                `;
            });
        }

        function saveSupportMember() {
            let editIndex = document.getElementById('editSupportIndex').value;
            let name = document.getElementById('newSupportName').value.trim();
            let phone = document.getElementById('newSupportPhone').value.trim();
            if(!name || !phone) return;

            let team = JSON.parse(localStorage.getItem('supportTeam')) || [];
            if(editIndex === "-1") {
                team.push({ name, phone });
            } else {
                team[editIndex] = { name, phone };
            }
            localStorage.setItem('supportTeam', JSON.stringify(team));
            cancelEditSupportMember();
            renderSupportTeam();
        }

        function editSupportMember(index) {
            let team = JSON.parse(localStorage.getItem('supportTeam')) || [];
            let m = team[index];
            document.getElementById('editSupportIndex').value = index;
            document.getElementById('newSupportName').value = m.name;
            document.getElementById('newSupportPhone').value = m.phone;
            document.getElementById('saveSupportBtn').innerHTML = '<i class="fa fa-save"></i>';
            document.getElementById('cancelSupportEditBtn').classList.remove('hidden');
        }

        function cancelEditSupportMember() {
            document.getElementById('editSupportIndex').value = '-1';
            document.getElementById('newSupportName').value = '';
            document.getElementById('newSupportPhone').value = '';
            document.getElementById('saveSupportBtn').innerHTML = '<i class="fa fa-plus"></i>';
            document.getElementById('cancelSupportEditBtn').classList.add('hidden');
        }

        function deleteSupportMember(index) {
            let team = JSON.parse(localStorage.getItem('supportTeam')) || [];
            team.splice(index, 1);
            localStorage.setItem('supportTeam', JSON.stringify(team));
            renderSupportTeam();
        }

        function renderSupportLogs() {
            let logs = JSON.parse(localStorage.getItem('supportLogs')) || [];
            let div = document.getElementById('adminSupportLogs');
            if(logs.length === 0) { div.innerHTML = 'لا توجد طلبات دعم مسجلة بعد.'; return; }
            
            div.innerHTML = `<strong>إجمالي طلبات الدعم: ${logs.length}</strong><hr style="margin:5px 0;">`;
            logs.reverse().forEach(log => {
                div.innerHTML += `
                    <div style="margin-bottom:4px; border-bottom:1px dashed #eee; padding-bottom:3px;">
                        📌 <strong>${log.merchant}</strong> ⬅️ ${log.assignedTo} <span style="color:#888; font-size:10px;">(${log.date})</span>
                    </div>
                `;
            });
        }

        // --- عرض قائمة "طلبات تجديد الاشتراك" اللي بلّغ عنها التجار (بلّغ إني حوّلت) ---
        function renderRenewalRequests(visibleNames, stores) {
            let box = document.getElementById('renewalRequestsList');
            let badge = document.getElementById('renewalRequestsCountBadge');
            if(!box) return;
            let methodLabels = {instapay:'انستاباي',vodafone:'فودافون كاش',orange:'أورنج كاش',etisalat:'اتصالات كاش',paypal:'PayPal',bank:'تحويل بنكي'};
            let pending = visibleNames.filter(n => stores[n] && stores[n].pendingRenewalRequest);

            if(badge) badge.textContent = pending.length > 0 ? `(${pending.length})` : '';

            if(pending.length === 0) {
                box.innerHTML = '<p style="font-size:12px; color:var(--text-muted);">لا توجد طلبات تجديد جديدة حاليًا.</p>';
                return;
            }
            box.innerHTML = pending.map(name => {
                let s = stores[name];
                let req = s.pendingRenewalRequest;
                return `
                    <div class="manage-row" style="flex-direction:column; align-items:stretch; gap:6px; border-right:3px solid #3b82f6;">
                        <div>
                            <strong>${getStoreDisplayName(name, s)}</strong>
                            <span style="font-size:11px; color:var(--text-muted); display:block; margin-top:2px;">
                                حوّل عن طريق <strong>${methodLabels[req.method] || req.method}</strong> — الرقم/المعرّف: <strong>${req.senderInfo}</strong><br>
                                بتاريخ ${new Date(req.requestedAt).toLocaleString('ar-EG')}
                            </span>
                        </div>
                        <div style="display:flex; gap:6px;">
                            <button style="width:auto; padding:6px 12px; font-size:11px; margin:0; background:#059669;" onclick="confirmRenewalRequest('${name}')"><i class="fa fa-check"></i> تأكيد التحويل وتجديد الاشتراك</button>
                            <button class="danger" style="width:auto; padding:6px 12px; font-size:11px; margin:0;" onclick="rejectRenewalRequest('${name}')"><i class="fa fa-times"></i> رفض</button>
                        </div>
                    </div>
                `;
            }).join('');
        }

        // بعد ما تتأكد إن التحويل وصلك فعليًا في محفظتك، اضغط تأكيد فيفتحلك نفس نافذة تحديد
        // عدد الأيام (زي زرار "تجديد الاشتراك" العادي)، وبيمسح البلاغ من القائمة تلقائيًا
        function confirmRenewalRequest(name) {
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            if(!stores[name]) return;
            delete stores[name].pendingRenewalRequest;
            if(!saveAllStores(stores)) return;
            renewStoreSubscription(name); // بيفتح البرومبت لتحديد عدد الأيام ويحفظ ويعمل renderAdminStores بنفسه
        }

        function rejectRenewalRequest(name) {
            if(!confirm(`متأكد إنك عايز ترفض بلاغ التجديد بتاع "${name}"؟ (استخدم ده بس لو اتأكدت إن التحويل مش حقيقي أو غلط)`)) return;
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            if(!stores[name]) return;
            delete stores[name].pendingRenewalRequest;
            if(!saveAllStores(stores)) return;
            showToast('تم رفض البلاغ.');
            renderAdminStores();
        }

        function renderAdminStores() {
            renderRegistrationPauseStatus();
            document.getElementById('selectAllStoresCheckbox').checked = false;
            try { let ea=document.getElementById('expiryAlertDaysInput'); if(ea && !ea.value) ea.value = localStorage.getItem('expiryAlertDays') || 3; } catch(e){}
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            let list = document.getElementById('adminStoresList');
            list.innerHTML = '';

            // تصفية القائمة حسب صلاحيات الحساب الحالي: مدير عام يرى الكل، دعم فني يرى متاجره المحددة فقط
            let role = localStorage.getItem('loggedAdminRole') || 'support';
            let visibleNames = Object.keys(stores);
            if(role !== 'super') {
                let accounts = JSON.parse(localStorage.getItem('adminAccounts')) || [];
                let me = accounts.find(a => a.username === localStorage.getItem('loggedAdminUsername'));
                let allowed = (me && me.allowedStores) ? me.allowedStores : [];
                visibleNames = visibleNames.filter(n => allowed.includes(n));
                if(visibleNames.length === 0) {
                    list.innerHTML = '<p style="font-size:12px; color:var(--text-muted);">لا توجد متاجر مسموح لك بإدارتها حالياً. اطلب من المدير العام تحديد متاجر لحسابك.</p>';
                    renderRenewalRequests([], stores);
                    return;
                }
            }
            renderRenewalRequests(visibleNames, stores);

            // ⏱️ فلترة إضافية اختيارية حسب آخر نشاط (تسجيل دخول) للمتجر، لمساعدة الأدمن يكتشف
            // المتاجر المهجورة اللي تجارها بطّلوا يدخلوا من مدة طويلة.
            let searchQ = (document.getElementById('adminStoresSearchInput')?.value || '').trim().toLowerCase();
            if(searchQ) visibleNames = visibleNames.filter(n => n.toLowerCase().includes(searchQ) || getStoreDisplayName(n, stores[n]).toLowerCase().includes(searchQ));
            let inactivityDays = parseInt(document.getElementById('inactivityFilterSelect')?.value) || 0;
            if(inactivityDays > 0) {
                let cutoff = Date.now() - inactivityDays * 86400000;
                visibleNames = visibleNames.filter(n => {
                    let s = stores[n];
                    let lastActive = s.lastActivityAt || s.registeredAt || 0;
                    return lastActive < cutoff;
                });
                if(visibleNames.length === 0) {
                    list.innerHTML = `<p style="font-size:12px; color:var(--text-muted);">مفيش متاجر أقدم من المدة دي حاليًا. 👍</p>`;
                    return;
                }
            }

            let __searchQ = (document.getElementById('adminStoreSearchInput')?.value || '').trim().toLowerCase();
            if(__searchQ) visibleNames = visibleNames.filter(n => n.toLowerCase().includes(__searchQ) || (stores[n].displayName || '').toLowerCase().includes(__searchQ));
            if(visibleNames.length === 0 && __searchQ) { list.innerHTML = '<p style="font-size:12px; color:var(--text-muted);">مفيش متاجر بالاسم ده.</p>'; return; }

            for(let name of visibleNames) {
                let s = stores[name];
                let st = s.status;
                let daysCount = s.registeredAt ? Math.floor((Date.now() - s.registeredAt) / 86400000) : 0;
                let usedMB = (JSON.stringify(s).length / (1024*1024)).toFixed(2);
                let quota = s.storageQuotaMB || 20;
                let sub = computeSubscriptionStatus(s);
                let subText, subColor;
                let expiryAlertDays = parseInt(localStorage.getItem('expiryAlertDays')) || 3;
                let expiringSoon = !sub.expired && sub.daysLeft <= expiryAlertDays;
                if(sub.expired) {
                    subText = `⛔ الاشتراك منتهي منذ ${Math.abs(sub.daysLeft)} يوم`;
                    subColor = '#dc2626';
                } else if(expiringSoon) {
                    subText = `⚠️ هتنتهي خلال ${sub.daysLeft} يوم!`;
                    subColor = '#d97706';
                } else if(sub.phase === 'trial') {
                    subText = `🎁 فترة تجريبية: باقي ${sub.daysLeft} يوم`;
                    subColor = '#166534';
                } else {
                    subText = `💳 مشترك: باقي ${sub.daysLeft} يوم`;
                    subColor = '#166534';
                }
                let showsOnHome = s.showOnHomepage !== false;
                let staffCount = (s.staff || []).length;
                let lastActiveDays = s.lastActivityAt ? Math.floor((Date.now() - s.lastActivityAt) / 86400000) : null;
                let lastActiveLabel = lastActiveDays === null ? `${t('admin_never_relogged', 'لم يسجل دخول تاني منذ الإنشاء')}` : (lastActiveDays === 0 ? t('admin_active_today', 'نشط اليوم') : `${t('admin_last_active_prefix', 'آخر نشاط منذ')} ${lastActiveDays} ${t('unit_day', 'يوم')}`);
                let staffCountRow = `<span style="font-size:11px; color:var(--text-muted);" title="${t('admin_staff_count_title', 'عدد المساعدين اللي التاجر ضايفهم في متجره ده')}">👥 ${t('admin_staff_count_label', 'المساعدين')}: <strong>${staffCount}</strong></span> — <span style="font-size:11px; color:${lastActiveDays > 30 ? '#dc2626' : 'var(--text-muted)'};">⏱️ ${lastActiveLabel}</span>`;

                let canVisit    = currentAdminHasPermission('visit');
                let canToggle   = currentAdminHasPermission('toggleStatus');
                let canDelete   = currentAdminHasPermission('deleteStore');
                let canRenew    = currentAdminHasPermission('renewSubscription');
                let canHomeVis  = currentAdminHasPermission('homepageVisibility');
                let canCode     = currentAdminHasPermission('customCode');
                let canCoOwners = currentAdminHasPermission('manageCoOwners');
                let canRename   = currentAdminHasPermission('changeLoginName');
                let canQuota      = currentAdminHasPermission('manageQuota');
                let canColors     = currentAdminHasPermission('manageColors');
                let canImageLimit = currentAdminHasPermission('manageImageLimit');
                let canPhoneMode  = currentAdminHasPermission('managePhoneMode');
                let canPassword   = currentAdminHasPermission('resetPassword');
                let canPlans      = currentAdminHasPermission('manageStorePlans');

                let currentPlan = getPlanForStore(s);
                let planRow = canPlans
                    ? `<span title="باقة اشتراك هذا المتجر"><i class="fa fa-tags"></i> الباقة:</span>
                       <select style="width:auto; margin:0; padding:5px; font-size:11px;" onchange="setStorePlan('${name}', this.value)">
                           ${getSubscriptionPlans().map(p => `<option value="${p.id}" ${p.id === (s.planId || 'free') ? 'selected' : ''}>${p.name}</option>`).join('')}
                       </select>`
                    : `<span>الباقة: ${currentPlan.name}</span>`;

                // 👑 استثناء الأدمن لسطر حقوق النشر: يقدر يدّي أي متجر وضع "اسمه بس" أو نص
                // مخصص تمامًا، بغض النظر عن باقته (مش لازم يغيّر باقته كلها عشان ميزة واحدة).
                let copyOverride = s.adminCopyrightOverride || 'inherit';
                let copyrightOverrideRow = canPlans ? `
                    <span title="استثناء سطر حقوق النشر لهذا المتجر بعينه"><i class="fa fa-crown"></i> ${t('admin_copyright_override_label','حقوق النشر')}:</span>
                    <select id="adminCopyrightOverrideSelect_${name}" style="width:auto; margin:0; padding:5px; font-size:11px;" onchange="document.getElementById('adminCopyrightCustomBox_${name}').classList.toggle('hidden', this.value !== 'custom'); saveAdminCopyrightOverride('${name}')">
                        <option value="inherit" ${copyOverride === 'inherit' ? 'selected' : ''}>${t('copyright_inherit_opt','حسب الباقة')}</option>
                        <option value="combined" ${copyOverride === 'combined' ? 'selected' : ''}>${t('copyright_combined_opt','مدمج (مع المنصة)')}</option>
                        <option value="store_only" ${copyOverride === 'store_only' ? 'selected' : ''}>${t('copyright_store_only_opt','اسم المتجر بس')}</option>
                        <option value="custom" ${copyOverride === 'custom' ? 'selected' : ''}>${t('copyright_custom_opt','نص مخصص')}</option>
                    </select>
                    <span id="adminCopyrightCustomBox_${name}" class="${copyOverride === 'custom' ? '' : 'hidden'}" style="display:flex; gap:4px; align-items:center;">
                        <input type="text" id="adminCopyrightCustomText_${name}" value="${(s.adminCopyrightCustomText||'').replace(/"/g,'&quot;')}" placeholder="${t('copyright_custom_ph','© {year} {name}')}" style="width:160px; margin:0; padding:5px; font-size:11px;" onchange="saveAdminCopyrightOverride('${name}')">
                    </span>` : '';

                let topButtons =
                    (canVisit  ? `<button class="edit" onclick="visitStoreAsAdmin('${name}')" title="زيارة المتجر"><i class="fa fa-eye"></i></button>` : '') +
                    (canToggle ? `<button class="edit" onclick="toggleStoreStatus('${name}')">${st === 'active' ? 'إيقاف' : 'تفعيل'}</button>` : '') +
                    (canDelete ? `<button class="danger edit" onclick="deleteStore('${name}')">حذف</button>` : '');

                let midButtons =
                    (canRenew   ? `<button style="width:auto; padding:6px 10px; font-size:11px; margin:0; background:#059669;" onclick="renewStoreSubscription('${name}')"><i class="fa fa-sync"></i> تجديد الاشتراك</button>` : '') +
                    (canHomeVis ? `<button class="secondary" style="width:auto; padding:6px 10px; font-size:11px; margin:0;" onclick="toggleStoreHomepageVisibility('${name}')"><i class="fa fa-${showsOnHome ? 'eye-slash' : 'eye'}"></i> ${showsOnHome ? 'إخفاء من الرئيسية' : 'إظهار في الرئيسية'}</button>` : '') +
                    (canCode    ? `<button class="secondary" style="width:auto; padding:6px 10px; font-size:11px; margin:0;" onclick="openStoreCustomCodeModal('${name}')"><i class="fa fa-code"></i> أكواد مخصصة${(s.customCodeSnippets && s.customCodeSnippets.length > 0) ? ` (${s.customCodeSnippets.length})` : ''}</button>` : '') +
                    (canCoOwners ? `<button class="secondary" style="width:auto; padding:6px 10px; font-size:11px; margin:0;" onclick="openStoreCoOwnersModal('${name}')"><i class="fa fa-user-friends"></i> تجار شركاء${(s.coOwners && s.coOwners.length > 0) ? ` (${s.coOwners.length})` : ''}</button>` : '') +
                    (canRename  ? `<button class="secondary" style="width:auto; padding:6px 10px; font-size:11px; margin:0;" onclick="adminChangeStoreLoginName('${name}')"><i class="fa fa-user-edit"></i> تغيير اسم الدخول</button>` : '');

                let quotaRow = canQuota
                    ? `<span>المساحة: ${usedMB}/${quota} MB</span><input type="number" style="width:60px; margin:0; padding:5px;" value="${quota}" onchange="setStoreQuota('${name}', this.value)">`
                    : `<span>المساحة: ${usedMB}/${quota} MB</span>`;

                let imgLimit = s.maxProductImages || 5;
                let imageLimitRow = canImageLimit
                    ? `<span title="عدد الصور الإضافية المسموح رفعها لكل منتج في هذا المتجر"><i class="fa fa-images"></i> صور المنتج:</span><input type="number" min="1" max="30" style="width:55px; margin:0; padding:5px;" value="${imgLimit}" onchange="setStoreMaxImages('${name}', this.value)">`
                    : '';

                let phoneMode = s.phoneFieldMode || 'optional';
                let phoneModeRow = canPhoneMode
                    ? `<span title="طلب رقم هاتف العميل عند الشراء"><i class="fa fa-phone"></i> رقم العميل:</span>
                       <select style="width:auto; margin:0; padding:5px; font-size:11px;" onchange="setStorePhoneMode('${name}', this.value)">
                           <option value="optional" ${phoneMode === 'optional' ? 'selected' : ''}>اختياري</option>
                           <option value="hidden" ${phoneMode === 'hidden' ? 'selected' : ''}>مخفي</option>
                           <option value="required" ${phoneMode === 'required' ? 'selected' : ''}>إجباري</option>
                       </select>`
                    : '';

                let colorsBtn = canColors
                    ? `<button class="secondary" style="width:auto; padding:6px 10px; font-size:11px; margin:0;" onclick="openStoreColorsModal('${name}')">
                            <span style="display:inline-block; width:12px; height:12px; border-radius:50%; background:${(s.themeColors && s.themeColors.primary) || s.themeColor || '#d97706'}; margin-left:5px; border:1px solid rgba(0,0,0,0.15); vertical-align:middle;"></span>
                            <i class="fa fa-palette"></i> تخصيص الألوان
                       </button>`
                    : '';

                let passwordRow = canPassword
                    ? `<span>كلمة السر الحالية: <strong>${s.pass}</strong></span><button class="edit" style="width:auto; padding:5px 8px; font-size:11px;" onclick="resetStorePassword('${name}')"><i class="fa fa-key"></i> تغيير كلمة السر</button>`
                    : `<span style="color:var(--text-muted);">لا تملك صلاحية عرض/تغيير كلمة السر</span>`;

                list.innerHTML += `
                    <div class="manage-row" style="flex-direction:column; align-items:stretch; gap:8px;">
                        <div style="display:flex; justify-content:space-between; align-items:center;">
                            <div style="display:flex; align-items:flex-start; gap:8px;">
                                ${canDelete ? `<input type="checkbox" class="store-bulk-checkbox" data-store-key="${name}" onchange="updateBulkDeleteButton()" style="width:auto; margin-top:4px;">` : ''}
                                <div>
                                <strong>${getStoreDisplayName(name, s)}</strong> <span style="font-size:10.5px; color:var(--text-muted); font-weight:normal; font-family:monospace;">(${t('admin_login_id_label', 'معرّف الدخول')}: ${name})</span><br>
                                <span style="font-size:11px; color:var(--text-muted);">${st === 'active' ? '🟢 مفعّل' : '🔴 موقوف'} — ${showsOnHome ? '👁️ ظاهر في الرئيسية' : '🙈 مخفي من الرئيسية'} — مسجل منذ ${daysCount} يوم</span><br>
                                ${staffCountRow}<br>
                                <span style="font-size:11.5px; font-weight:bold; color:${subColor};">${subText}</span>
                                </div>
                            </div>
                            ${topButtons ? `<div style="display:flex; gap:4px;">${topButtons}</div>` : ''}
                        </div>
                        ${midButtons ? `<div style="display:flex; gap:6px; align-items:center; flex-wrap:wrap;">${midButtons}</div>` : ''}
                        ${(canQuota || canColors) ? `<div style="display:flex; gap:6px; align-items:center; font-size:11px; flex-wrap:wrap;">${quotaRow}${colorsBtn}</div>` : ''}
                        <div style="display:flex; gap:6px; align-items:center; font-size:11px; flex-wrap:wrap;">${planRow}</div>
                        <div style="display:flex; gap:6px; align-items:center; font-size:11px; flex-wrap:wrap; margin-top:4px;">${copyrightOverrideRow}</div>
                        ${canImageLimit ? `<div style="display:flex; gap:6px; align-items:center; font-size:11px; flex-wrap:wrap;">${imageLimitRow}</div>` : ''}
                        ${canPhoneMode ? `<div style="display:flex; gap:6px; align-items:center; font-size:11px; flex-wrap:wrap;">${phoneModeRow}</div>` : ''}
                        <div style="display:flex; gap:6px; align-items:center; font-size:11px; flex-wrap:wrap;">
                            ${passwordRow}
                        </div>
                    </div>
                `;
            }
        }

        // --- تغيير لون هوية المتجر بناءً على طلب التاجر (يديره الأدمن) — للتوافق مع الكود القديم فقط ---
        function setStoreColor(name, color) {
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            stores[name].themeColor = color;
            stores[name].themeColors = Object.assign({}, stores[name].themeColors, { primary: color });
            if(!saveAllStores(stores)) return;
        }

        // --- تطبيق ألوان هوية المتجر (كاملة) عند عرضه للزوار: أساسي / ثانوي / خلفية / بطاقات / نص / نجوم ---
        function applyStoreTheme(store) {
            let c = (store && store.themeColors) || {};
            document.documentElement.style.setProperty('--primary-color', c.primary || (store && store.themeColor) || '#d97706');
            document.documentElement.style.setProperty('--accent-color',  c.accent  || '#2563eb');
            document.documentElement.style.setProperty('--bg-body',       c.bg      || '#f6f0ea');
            document.documentElement.style.setProperty('--bg-card',       c.card    || '#fbf8f5');
            document.documentElement.style.setProperty('--text-main',     c.text    || '#2b2623');
            document.documentElement.style.setProperty('--star-color',    c.star    || '#f59e0b');
        }

        // --- تشكيلات ألوان جاهزة يقدر الأدمن يجرّبها بضغطة واحدة قبل ما يعدّل يدويًا ---
        const STORE_COLOR_PRESETS = [
            { name: 'الافتراضي',   primary: '#d97706', accent: '#2563eb', bg: '#f6f0ea', card: '#fbf8f5', text: '#2b2623', star: '#f59e0b' },
            { name: 'أزرق ملكي',   primary: '#1d4ed8', accent: '#0ea5e9', bg: '#eff6ff', card: '#ffffff', text: '#0f172a', star: '#f59e0b' },
            { name: 'أخضر أنيق',   primary: '#15803d', accent: '#059669', bg: '#f0fdf4', card: '#ffffff', text: '#052e16', star: '#f59e0b' },
            { name: 'وردي عصري',   primary: '#db2777', accent: '#a21caf', bg: '#fdf2f8', card: '#ffffff', text: '#3b0764', star: '#f59e0b' },
            { name: 'بنفسجي فخم',  primary: '#7c3aed', accent: '#c026d3', bg: '#f5f3ff', card: '#ffffff', text: '#2e1065', star: '#facc15' },
            { name: 'ذهبي دافئ',   primary: '#b45309', accent: '#92400e', bg: '#fffbeb', card: '#fffdf7', text: '#451a03', star: '#f59e0b' },
            { name: 'أحمر جريء',   primary: '#dc2626', accent: '#ea580c', bg: '#fef2f2', card: '#ffffff', text: '#450a0a', star: '#fbbf24' },
            { name: 'ليلي داكن',   primary: '#f59e0b', accent: '#38bdf8', bg: '#1f2937', card: '#111827', text: '#f3f4f6', star: '#facc15' },
            { name: 'فيروزي منعش', primary: '#0d9488', accent: '#0284c7', bg: '#f0fdfa', card: '#ffffff', text: '#134e4a', star: '#f59e0b' },
            { name: 'فضي هادئ',    primary: '#475569', accent: '#0f766e', bg: '#f1f5f9', card: '#ffffff', text: '#1e293b', star: '#f59e0b' },
        ];

        // ============================================================
        // 🎨 نسخة "ذاتية الخدمة" من تخصيص الألوان: التاجر نفسه يفتحها من لوحته
        // (بدون الحاجة لصلاحية أدمن)، بس برضه محكومة بباقة اشتراكه بالظبط زي
        // ما الأدمن يقدر يحددها له. بتستخدم نفس المودال والدوال (saveStoreColors،
        // applyStoreColorPreset...) اللي كانت أصلاً للأدمن، فمفيش أي كود مكرر.
        // ============================================================
        function renderMerchantColorsGateBox(merchant, store) {
            let box = document.getElementById('merchantColorsGateBox');
            if(!box) return;
            let plan = getPlanForStore(store);
            if(plan.allowColors) {
                box.innerHTML = `<button type="button" onclick="openMerchantColorsModal()" style="width:auto; padding:8px 14px; margin:0;"><i class="fa fa-palette"></i> ${t('set_choose_colors_btn', 'اختار ألوان متجرك')}</button>`;
            } else {
                box.innerHTML = `<p style="font-size:11.5px; color:#9a3412; background:#fff7ed; border:1px solid #fed7aa; border-radius:8px; padding:8px 10px; margin:0;">🔒 ${t('set_colors_locked_tpl', 'باقتك الحالية ("{plan}") لا تشمل تخصيص الألوان. تواصل مع إدارة المنصة للترقية لباقة تدعمها.').replace('{plan}', plan.name)}</p>`;
            }
        }
        function openMerchantColorsModal() {
            let merchant = localStorage.getItem('currentActiveMerchant');
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            let store = stores[merchant];
            if(!store) return;
            let plan = getPlanForStore(store);
            if(!plan.allowColors) {
                alert(`⛔ باقتك الحالية ("${plan.name}") لا تشمل ميزة الألوان المخصصة. تواصل مع إدارة المنصة للترقية لباقة تدعمها.`);
                return;
            }
            document.getElementById('storeColorsModalTarget').value = merchant;
            document.getElementById('storeColorsModalName').textContent = getStoreDisplayName(merchant, store);
            let c = store.themeColors || {};
            document.getElementById('storeColorPrimary').value = c.primary || store.themeColor || '#d97706';
            document.getElementById('storeColorAccent').value  = c.accent  || '#2563eb';
            document.getElementById('storeColorBg').value      = c.bg      || '#f6f0ea';
            document.getElementById('storeColorCard').value    = c.card    || '#fbf8f5';
            document.getElementById('storeColorText').value    = c.text    || '#2b2623';
            document.getElementById('storeColorStar').value    = c.star    || '#f59e0b';
            document.getElementById('storeColorPresetsRow').innerHTML = STORE_COLOR_PRESETS.map(p => `
                <button type="button" class="secondary" style="width:auto; padding:6px 10px; font-size:11px; margin:0; display:flex; align-items:center; gap:6px;"
                    onclick="applyStoreColorPreset('${p.primary}','${p.accent}','${p.bg}','${p.card}','${p.text}','${p.star}')">
                    <span style="width:14px; height:14px; border-radius:50%; background:${p.primary}; display:inline-block; border:1px solid rgba(0,0,0,0.15);"></span>${p.name}
                </button>
            `).join('');
            document.getElementById('storeColorsModal').classList.remove('hidden');
        }

        // --- فتح نافذة تخصيص ألوان متجر معيّن ---
        function openStoreColorsModal(name) {
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            let store = stores[name];
            if(!store) return;
            if(!currentAdminHasPermission('manageColors')) { alert('ليس لديك صلاحية تخصيص ألوان المتاجر.'); return; }

            // 🏷️ الألوان المخصصة ميزة مقصورة على باقات معينة (حسب ما يحدده الأدمن في
            // إعدادات كل باقة). لو باقة المتجر الحالية مش بتسمح بيها، بنمنع ونقترح الترقية.
            let plan = getPlanForStore(store);
            if(!plan.allowColors) {
                if(!confirm(`⚠️ باقة هذا المتجر الحالية ("${plan.name}") لا تشمل ميزة الألوان المخصصة. هل تريد المتابعة رغم ذلك على أي حال؟`)) return;
            }

            document.getElementById('storeColorsModalTarget').value = name;
            document.getElementById('storeColorsModalName').textContent = getStoreDisplayName(name, store);

            let c = store.themeColors || {};
            document.getElementById('storeColorPrimary').value = c.primary || store.themeColor || '#d97706';
            document.getElementById('storeColorAccent').value  = c.accent  || '#2563eb';
            document.getElementById('storeColorBg').value      = c.bg      || '#f6f0ea';
            document.getElementById('storeColorCard').value    = c.card    || '#fbf8f5';
            document.getElementById('storeColorText').value    = c.text    || '#2b2623';
            document.getElementById('storeColorStar').value    = c.star    || '#f59e0b';

            document.getElementById('storeColorPresetsRow').innerHTML = STORE_COLOR_PRESETS.map(p => `
                <button type="button" class="secondary" style="width:auto; padding:6px 10px; font-size:11px; margin:0; display:flex; align-items:center; gap:6px;"
                    onclick="applyStoreColorPreset('${p.primary}','${p.accent}','${p.bg}','${p.card}','${p.text}','${p.star}')">
                    <span style="width:14px; height:14px; border-radius:50%; background:${p.primary}; display:inline-block; border:1px solid rgba(0,0,0,0.15);"></span>${p.name}
                </button>
            `).join('');

            document.getElementById('storeColorsModal').classList.remove('hidden');
        }

        function applyStoreColorPreset(primary, accent, bg, card, text, star) {
            document.getElementById('storeColorPrimary').value = primary;
            document.getElementById('storeColorAccent').value  = accent;
            document.getElementById('storeColorBg').value      = bg;
            document.getElementById('storeColorCard').value    = card;
            document.getElementById('storeColorText').value    = text;
            document.getElementById('storeColorStar').value    = star;
        }

        function closeStoreColorsModal() {
            document.getElementById('storeColorsModal').classList.add('hidden');
        }

        function saveStoreColors() {
            let name = document.getElementById('storeColorsModalTarget').value;
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            if(!stores[name]) return;
            let themeColors = {
                primary: document.getElementById('storeColorPrimary').value,
                accent:  document.getElementById('storeColorAccent').value,
                bg:      document.getElementById('storeColorBg').value,
                card:    document.getElementById('storeColorCard').value,
                text:    document.getElementById('storeColorText').value,
                star:    document.getElementById('storeColorStar').value,
            };
            stores[name].themeColors = themeColors;
            stores[name].themeColor = themeColors.primary; // توافق مع الكود القديم
            if(!saveAllStores(stores)) return;
            showToast('✅ تم حفظ ألوان المتجر بنجاح');
            closeStoreColorsModal();
            renderAdminStores();
        }

        function resetStoreColors() {
            let name = document.getElementById('storeColorsModalTarget').value;
            if(!confirm(`استعادة الألوان الافتراضية لمتجر "${name}"؟`)) return;
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            if(!stores[name]) return;
            delete stores[name].themeColors;
            stores[name].themeColor = '#d97706';
            if(!saveAllStores(stores)) return;
            showToast('✅ تمت استعادة الألوان الافتراضية');
            closeStoreColorsModal();
            renderAdminStores();
        }

        // --- زيارة متجر تاجر معين مباشرة من لوحة الأدمن (تعود للوحة الأدمن بالضغط على "دخول التجار والمشرفين" مرة أخرى) ---
        function visitStoreAsAdmin(name) {
            if(!currentAdminHasPermission('visit')) { alert('ليس لديك صلاحية معاينة المتاجر.'); return; }
            activeStore = name;
            localStorage.setItem('currentActiveStore', name);
            localStorage.setItem('viewMode', 'store');
            pushStoreUrl(name);
            switchTab('home');
            showToast(`أنت الآن تشاهد متجر "${name}" — اضغط "دخول التجار والمشرفين" للعودة للوحة الإدارة`);
        }

        function setStoreQuota(name, value) {
            if(!currentAdminHasPermission('manageQuota')) { alert('ليس لديك صلاحية تعديل مساحة التخزين المسموحة.'); renderAdminStores(); return; }
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            stores[name].storageQuotaMB = parseFloat(value) || 20;
            if(!saveAllStores(stores)) return;
        }

        // --- تحديد أقصى عدد صور إضافية مسموح بها لمنتج واحد في متجر معيّن (افتراضيًا 5 لكل المتاجر) ---
        function setStoreMaxImages(name, value) {
            if(!currentAdminHasPermission('manageImageLimit')) { alert('ليس لديك صلاحية تعديل الحد الأقصى لصور المنتج.'); renderAdminStores(); return; }
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            let n = parseInt(value);
            if(!n || n < 1) n = 5;
            if(n > 30) { n = 30; alert('أقصى حد ممكن هو 30 صورة للمنتج الواحد، حفاظًا على سرعة المتجر.'); }
            stores[name].maxProductImages = n;
            if(!saveAllStores(stores)) return;
            renderAdminStores();
        }

        // --- تحكم الأدمن (أو مشرف عنده الصلاحية) في وضع طلب رقم هاتف العميل لمتجر معيّن ---
        function setStorePhoneMode(name, value) {
            if(!currentAdminHasPermission('managePhoneMode')) { alert('ليس لديك صلاحية تعديل وضع طلب رقم الهاتف.'); renderAdminStores(); return; }
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            stores[name].phoneFieldMode = value;
            if(!saveAllStores(stores)) return;
            showToast('✅ تم تحديث وضع رقم الهاتف لهذا المتجر');
        }

        function resetStorePassword(name) {
            if(!currentAdminHasPermission('resetPassword')) { alert('ليس لديك صلاحية تغيير كلمة سر التجار.'); return; }
            let newPass = prompt(`أدخل كلمة سر جديدة للتاجر "${name}":`);
            if(newPass === null) return;
            if(!newPass.trim()) { alert('كلمة السر لا يمكن أن تكون فارغة!'); return; }
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            stores[name].pass = newPass.trim();
            if(!saveAllStores(stores)) return;
            alert(`تم تحديث كلمة سر المتجر "${name}" بنجاح. أخبر التاجر بكلمة السر الجديدة.`);
        }

        function toggleStoreStatus(name) {
            if(!currentAdminHasPermission('toggleStatus')) { alert('ليس لديك صلاحية تفعيل/إيقاف المتاجر.'); return; }
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            stores[name].status = stores[name].status === 'active' ? 'stopped' : 'active';
            if(!saveAllStores(stores)) return;
            renderAdminStores();
        }

        // --- تحكم الأدمن في ظهور متجر معين بدليل المتاجر في الرئيسية (مستقل عن تفعيل/إيقاف المتجر نفسه) ---
        // المتجر ممكن يفضل شغال بكامل رابطه الخاص، لكن الأدمن يقرر إنه ميظهرش ضمن الدليل العام في الرئيسية
        function toggleStoreHomepageVisibility(name) {
            if(!currentAdminHasPermission('homepageVisibility')) { alert('ليس لديك صلاحية إظهار/إخفاء المتاجر من الرئيسية.'); return; }
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            stores[name].showOnHomepage = stores[name].showOnHomepage === false ? true : false;
            if(!saveAllStores(stores)) return;
            renderAdminStores();
        }

        function deleteStore(name) {
            if(!currentAdminHasPermission('deleteStore')) { alert('ليس لديك صلاحية حذف المتاجر.'); return; }
            if(confirm(`تأكيد حذف متجر ${name}؟`)) {
                let stores = JSON.parse(localStorage.getItem('allStores')) || {};
                delete stores[name];
                if(!saveAllStores(stores)) return;
                renderAdminStores();
            }
        }

        // --- تحديد/حذف عدة متاجر دفعة واحدة من لوحة الإدارة ---
        function toggleSelectAllStores(checked) {
            document.querySelectorAll('.store-bulk-checkbox').forEach(cb => cb.checked = checked);
            updateBulkDeleteButton();
        }
        function updateBulkDeleteButton() {
            let checked = document.querySelectorAll('.store-bulk-checkbox:checked');
            document.getElementById('selectedStoresCount').innerText = checked.length;
            document.getElementById('bulkDeleteStoresBtn').disabled = checked.length === 0;
        }
        function bulkDeleteSelectedStores() {
            if(!currentAdminHasPermission('deleteStore')) { alert('ليس لديك صلاحية حذف المتاجر.'); return; }
            let checked = Array.from(document.querySelectorAll('.store-bulk-checkbox:checked')).map(cb => cb.dataset.storeKey);
            if(checked.length === 0) return;
            if(!confirm(`تأكيد حذف ${checked.length} متجر نهائيًا؟ الإجراء ده مينفعش يتراجع فيه.`)) return;
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            checked.forEach(name => delete stores[name]);
            if(!saveAllStores(stores)) return;
            renderAdminStores();
            showToast(`✅ اتحذف ${checked.length} متجر`);
        }

        // --- إيقاف تسجيل متاجر جديدة مؤقتًا (من دقايق لأيام) ---
        function pauseNewRegistrations() {
            let duration = parseInt(document.getElementById('regPauseDurationInput').value);
            let unit = document.getElementById('regPauseUnitSelect').value;
            if(!duration || duration <= 0) { alert('اكتب مدة صحيحة أكبر من صفر.'); return; }
            let ms = unit === 'days' ? duration * 86400000 : (unit === 'hours' ? duration * 3600000 : duration * 60000);
            localStorage.setItem('registrationPausedUntil', String(Date.now() + ms));
            renderRegistrationPauseStatus();
            showToast('⏸️ اتوقف تسجيل متاجر جديدة مؤقتًا');
        }
        function resumeNewRegistrations() {
            localStorage.removeItem('registrationPausedUntil');
            renderRegistrationPauseStatus();
            showToast('▶️ اتلغى إيقاف التسجيل');
        }
        function renderRegistrationPauseStatus() {
            let el = document.getElementById('regPauseStatusText');
            if(!el) return;
            let until = parseInt(localStorage.getItem('registrationPausedUntil'));
            if(until && until > Date.now()) {
                let mins = Math.ceil((until - Date.now()) / 60000);
                el.innerText = `⏸️ التسجيل موقوف حاليًا، وهيرجع تلقائيًا بعد حوالي ${mins} دقيقة.`;
                el.style.color = '#dc2626';
            } else {
                el.innerText = '✅ التسجيل شغال عادي دلوقتي، مفيش إيقاف مفعّل.';
                el.style.color = 'var(--text-muted)';
            }
            let lockoutInput = document.getElementById('platformLockoutMinutesInput');
            if(lockoutInput) lockoutInput.value = localStorage.getItem('platformLoginLockoutMinutes') || DEFAULT_LOGIN_LOCK_MINUTES;
        }
        function savePlatformLockoutMinutes() {
            let val = parseInt(document.getElementById('platformLockoutMinutesInput').value);
            if(!val || val <= 0) { alert('اكتب رقم دقايق صحيح أكبر من صفر.'); return; }
            localStorage.setItem('platformLoginLockoutMinutes', String(val));
            showToast('✅ اتحفظت مدة القفل الافتراضية للمنصة');
        }

        // --- البحث السريع ---
        function handleSearch(query) {
            backToCategories();
            let stores = JSON.parse(localStorage.getItem('allStores'));
            let store = stores[activeStore];
            
            let term = query.trim().toLowerCase();
            if(term === "") { renderHome(); return; }

            document.getElementById('homeCategoriesGrid').classList.add('hidden');
            document.getElementById('mainTitle').innerText = `🔍 نتائج البحث: "${query}"`;
            document.getElementById('backHomeBtn').classList.remove('hidden');
            document.getElementById('productsViewSection').classList.remove('hidden');

            let filtered = store.products.filter(p =>
                p.name.toLowerCase().includes(term) ||
                (p.desc && stripHtmlTags(p.desc).toLowerCase().includes(term))
            );
            renderProductsGrid(filtered, store.currency);
        }

        // ============================================================
        // 💬 الشات المباشر (نص فقط، بدون صور عمدًا للسرعة) بين التاجر وفريق الدعم/الأدمن.
        // مبني فوق أدوات Firestore في firebase-config.js (sendChatMessage/watchChatMessages/
        // markChatMessagesRead/fetchChatUnreadCountOnce/fetchChatLastMessageOnce/
        // watchPlatformChatConfig/savePlatformChatConfig). "فريق المنصة" الموحّد هو نفسه
        // adminAccounts الموجود أصلاً (login + role + allowedStores)، فمفيش داعي لنظام
        // صلاحيات جديد منفصل - كل حساب فيه allowedStores بيحدد المتاجر اللي شاته مسموح له بيها.
        // ============================================================

        // 🔑 هوية الأدمن/الموظف الحالي المسجل دخوله (لو موجود)
        function getChatCurrentActorInfo() {
            return {
                username: localStorage.getItem('loggedAdminUsername') || '',
                role: localStorage.getItem('loggedAdminRole') || ''
            };
        }

        // 🏪 المتاجر اللي الحساب الحالي مسموح له يشوف/يرد على شاتها (مدير عام = كل المتاجر،
        // دعم فني = بس اللي محددة له في allowedStores بالظبط - زي صلاحيات إدارة المتاجر تمامًا)
        function getAccessibleChatStoreKeys() {
            let stores = JSON.parse(localStorage.getItem('allStores')) || {};
            let allKeys = Object.keys(stores);
            let actor = getChatCurrentActorInfo();
            if(actor.role === 'super') return allKeys;
            let accounts = JSON.parse(localStorage.getItem('adminAccounts')) || [];
            let acc = accounts.find(a => a.username === actor.username);
            if(!acc) return [];
            return (acc.allowedStores || []).filter(k => allKeys.includes(k));
        }

        // ⛔ لو الموظف/المدير "قفل" توفّره الشخصي للشات، بيوقف يستقبل بادچ/تنبيهات الشات
        // عنه بس (باقي الفريق اللي عندهم وصول لنفس المتجر يفضلوا شغالين عادي)
        function isCurrentAdminChatAvailable() {
            let actor = getChatCurrentActorInfo();
            let accounts = JSON.parse(localStorage.getItem('adminAccounts')) || [];
            let acc = accounts.find(a => a.username === actor.username);
            return !acc || acc.chatAvailable !== false;
        }

        // ------------------------------------------------------------
        // ⚙️ إعدادات الشات العامة (تفعيل/تعطيل كامل، أو رسالة غياب) - مستند واحد يراقبه
        // الجميع لحظيًا عشان أي تغيير من الأدمن ينعكس فورًا عند كل التجار.
        // ------------------------------------------------------------
        let __platformChatConfig = { enabled: true, awayActive: false, awayMessage: '', retentionDays: 14 };
        function initPlatformChatConfigWatch() {
            if(!window.watchPlatformChatConfig) return;
            window.watchPlatformChatConfig(function(cfg) {
                __platformChatConfig = Object.assign({ enabled: true, awayActive: false, awayMessage: '', retentionDays: 14 }, cfg || {});
                try { syncTopHeaderChatIcon(); } catch(e) {}
                try { populatePlatformChatSettingsUI(); } catch(e) {}
            });
        }
        function populatePlatformChatSettingsUI() {
            let enabledEl = document.getElementById('chatGloballyEnabledToggle');
            if(!enabledEl) return;
            document.getElementById('chatAwayActiveToggle').checked = !!__platformChatConfig.awayActive;
            document.getElementById('chatAwayMessageInput').value = __platformChatConfig.awayMessage || '';
            enabledEl.checked = __platformChatConfig.enabled !== false;
            let retEl = document.getElementById('chatRetentionDaysInput');
            if(retEl) retEl.value = __platformChatConfig.retentionDays || 14;
        }
        function savePlatformChatSettings() {
            if(!window.savePlatformChatConfig) return;
            let retEl = document.getElementById('chatRetentionDaysInput');
            let cfg = {
                enabled: document.getElementById('chatGloballyEnabledToggle').checked,
                awayActive: document.getElementById('chatAwayActiveToggle').checked,
                awayMessage: document.getElementById('chatAwayMessageInput').value.trim(),
                retentionDays: retEl ? (parseInt(retEl.value, 10) || 14) : (__platformChatConfig.retentionDays || 14)
            };
            window.savePlatformChatConfig(cfg).then(function(ok) {
                if(ok) showToast(t('chat_settings_saved_toast', '✅ اتحفظت إعدادات الشات'));
            });
        }
        // 🧹 تنظيف يدوي فوري لكل المحادثات القديمة الأقدم من مدة الاحتفاظ المضبوطة، على كل
        // المتاجر المتاح للحساب الحالي الوصول لها - بيُستخدم من زرار "تنظيف الآن" في لوحة
        // الأدمن، وبيتنفذ تلقائيًا كمان كل ما صندوق محادثات التجار يتفتح (انظر
        // openAdminChatStoresPanel) عشان قاعدة البيانات تفضل سريعة ومفيهاش تكدس.
        function adminCleanupChatNow(showFeedback) {
            if(!window.cleanupAllOldChatMessages) return Promise.resolve(0);
            let keys = getAccessibleChatStoreKeys();
            let days = __platformChatConfig.retentionDays || 14;
            if(!keys.length) return Promise.resolve(0);
            return window.cleanupAllOldChatMessages(keys, days).then(function(count) {
                if(showFeedback) showToast(count > 0 ? `🧹 ${t('chat_cleanup_done_toast', 'اتنظفت')} ${count} ${t('chat_cleanup_msgs_word', 'رسالة قديمة')}` : t('chat_cleanup_nothing_toast', '✅ مفيش رسائل قديمة محتاجة تنظيف'));
                return count;
            }).catch(function() { return 0; });
        }

        // ------------------------------------------------------------
        // 🔝 أيقونة الشات الموحّدة في الشريط العلوي (نفس الشكل عند التاجر/الأدمن/المشرف) +
        // البادچ + دالة واحدة تقرر مين الداخل وتفتح اللوحة المناسبة له.
        // ------------------------------------------------------------
        function handleTopHeaderChatClick() {
            if(localStorage.getItem('currentActiveMerchant')) { openMerchantChatModal(); return; }
            if(localStorage.getItem('isAdminLoggedIn') === 'true') {
                let keys = getAccessibleChatStoreKeys();
                if(keys.length === 1) { openAdminChatThreadModal(keys[0]); }
                else { openAdminChatStoresPanel(); }
            }
        }
        // 🔄 بتُستدعى من كذا مكان (بعد تحميل إعدادات الشات، بعد تسجيل دخول/خروج، بعد فتح
        // لوحة التاجر/الأدمن، بعد غلق أي نافذة شات) - بتحدّث ظهور الأيقونة وعدد البادچ
        // حسب مين الداخل دلوقتي بالظبط.
        function syncTopHeaderChatIcon() {
            let btn = document.getElementById('topHeaderChatBtn');
            let badge = document.getElementById('topHeaderChatBadge');
            if(!btn) return;
            let merchant = localStorage.getItem('currentActiveMerchant');
            let isAdmin = localStorage.getItem('isAdminLoggedIn') === 'true';
            if(merchant) {
                btn.classList.toggle('hidden', __platformChatConfig.enabled === false);
                let unread = __merchantChatMsgsCache.filter(m => m.senderType === 'staff' && !m.readByMerchant).length;
                if(badge) { badge.textContent = unread; badge.classList.toggle('hidden', unread === 0); }
                return;
            }
            if(isAdmin) {
                btn.classList.remove('hidden');
                if(!isCurrentAdminChatAvailable() || !window.fetchChatUnreadCountOnce) { if(badge) badge.classList.add('hidden'); return; }
                let keys = getAccessibleChatStoreKeys();
                if(!keys.length) { if(badge) badge.classList.add('hidden'); return; }
                Promise.all(keys.map(k => window.fetchChatUnreadCountOnce(k, true).catch(() => 0))).then(function(counts) {
                    let total = counts.reduce((a, b) => a + b, 0);
                    if(badge) { badge.textContent = total; badge.classList.toggle('hidden', total === 0); }
                    let accBadge = document.getElementById('adminChatTotalBadge');
                    if(accBadge) { accBadge.textContent = total; accBadge.classList.toggle('hidden', total === 0); }
                }).catch(function(){ if(badge) badge.classList.add('hidden'); });
                return;
            }
            btn.classList.add('hidden');
            if(badge) badge.classList.add('hidden');
        }
        // 🔁 نفس المنطق القديم محفوظ كاسمين بديلين عشان أي استدعاء قديم (refreshAdminChatBadge)
        // يفضل شغال من غير ما نلحق نعدّل كل مكان نده عليه فيه.
        function refreshAdminChatBadge() { syncTopHeaderChatIcon(); }

        // ------------------------------------------------------------
        // 🏪 جانب التاجر: مودال الشات + مراقبة الرسائل لحظيًا
        // ------------------------------------------------------------
        let __merchantChatUnsub = null;
        let __merchantChatMsgsCache = [];
        let __merchantRatingUnsub = null;
        function initMerchantChatWatch(storeKey) {
            stopMerchantChatWatch();
            if(!storeKey) return;
            syncTopHeaderChatIcon();
            if(!window.watchChatMessages) {
                console.warn('⚠️ watchChatMessages غير موجودة - تأكد إن firebase-config.js المحدّث فعليًا هو المرفوع على الاستضافة (مش نسخة قديمة مخبأة في الكاش).');
                return;
            }
            __merchantChatUnsub = window.watchChatMessages(storeKey, function(msgs) {
                __merchantChatMsgsCache = msgs;
                syncTopHeaderChatIcon();
                let modal = document.getElementById('merchantChatModal');
                if(modal && !modal.classList.contains('hidden')) {
                    renderMerchantChatMessages();
                    markMerchantChatRead();
                }
            });
            // ⭐ مراقبة لحظية: لو الدعم/الأدمن طلب تقييم بعد ما خلّص المحادثة، نعرض مودال
            // التقييم للتاجر فورًا من غير ما يحتاج يعمل أي حاجة.
            if(window.watchChatRatingRequest) {
                __merchantRatingUnsub = window.watchChatRatingRequest(storeKey, function(reqData) {
                    if(reqData) openMerchantRatingModal(reqData); else closeMerchantRatingModal();
                });
            }
        }
        function stopMerchantChatWatch() {
            if(__merchantChatUnsub) { try { __merchantChatUnsub(); } catch(e) {} __merchantChatUnsub = null; }
            if(__merchantRatingUnsub) { try { __merchantRatingUnsub(); } catch(e) {} __merchantRatingUnsub = null; }
            __merchantChatMsgsCache = [];
        }
        function openMerchantChatModal() {
            if(__platformChatConfig.enabled === false) return;
            document.getElementById('merchantChatModal').classList.remove('hidden');
            let awayBanner = document.getElementById('merchantChatAwayBanner');
            if(__platformChatConfig.awayActive && __platformChatConfig.awayMessage) {
                awayBanner.textContent = '🌙 ' + __platformChatConfig.awayMessage;
                awayBanner.classList.remove('hidden');
            } else {
                awayBanner.classList.add('hidden');
            }
            renderMerchantChatMessages();
            markMerchantChatRead();
        }
        function closeMerchantChatModal() {
            document.getElementById('merchantChatModal').classList.add('hidden');
        }
        // 🗑️ حذف رسالة من جانب التاجر (بعد تأكيد) - حذف فوري من Firestore وإزالة من الشاشة
        function deleteMerchantChatMessage(msgId) {
            if(!msgId) return;
            if(!confirm(t('chat_delete_confirm', 'تأكيد حذف هذه الرسالة نهائيًا؟'))) return;
            let storeKey = localStorage.getItem('currentActiveMerchant');
            if(!storeKey || !window.deleteChatMessage) return;
            window.deleteChatMessage(storeKey, msgId).then(function(ok) {
                if(ok) {
                    __merchantChatMsgsCache = __merchantChatMsgsCache.filter(m => m.id !== msgId);
                    renderMerchantChatMessages();
                } else {
                    showToast(t('chat_delete_failed_toast', '⚠️ تعذر حذف الرسالة'));
                }
            });
        }
        function renderMerchantChatMessages() {
            let box = document.getElementById('merchantChatMessagesBox');
            if(!box) return;
            if(!__merchantChatMsgsCache.length) {
                box.innerHTML = `<p style="text-align:center; color:var(--text-muted); font-size:12px; margin-top:20px;">${t('chat_empty_state', 'لا توجد رسائل بعد. ابدأ المحادثة!')}</p>`;
                return;
            }
            // 🆕 أول رسالة واردة من الدعم لسه ماتقرتش - هنحط قبلها خط فاصل "رسائل جديدة"
            let firstUnreadIdx = __merchantChatMsgsCache.findIndex(m => m.senderType === 'staff' && !m.readByMerchant);
            box.innerHTML = __merchantChatMsgsCache.map(function(m, idx) {
                let mine = m.senderType === 'merchant';
                let roleBadge = '';
                if(!mine && m.senderRole) {
                    let roleTxt = m.senderRole === 'admin' ? t('chat_role_admin_badge', 'مدير عام') : t('chat_role_support_badge', 'دعم فني');
                    roleBadge = `<span style="background:${m.senderRole === 'admin' ? '#7c3aed' : '#0891b2'}; color:#fff; font-size:9px; padding:1px 6px; border-radius:10px; margin-inline-start:4px;">${roleTxt}</span>`;
                }
                let isUnread = !mine && !m.readByMerchant;
                let divider = (idx === firstUnreadIdx && firstUnreadIdx > -1) ? `<div style="display:flex; align-items:center; gap:8px; margin:4px 0;"><hr style="flex:1; border-color:#dc2626;"><span style="color:#dc2626; font-size:10.5px; font-weight:bold; white-space:nowrap;">🔴 ${t('chat_new_messages_divider', 'رسائل جديدة')}</span><hr style="flex:1; border-color:#dc2626;"></div>` : '';
                let safeId = (m.id || '').replace(/'/g, "\\'");
                return `${divider}<div style="align-self:${mine ? 'flex-end' : 'flex-start'}; max-width:80%; position:relative;">
                    <div style="font-size:10.5px; color:var(--text-muted); margin-bottom:2px; display:flex; align-items:center; gap:5px;">
                        <span>${escapeHtml(m.senderName || '')}</span>${roleBadge}${isUnread ? `<span style="width:7px; height:7px; border-radius:50%; background:#dc2626; display:inline-block;"></span>` : ''}
                        <i class="fa fa-trash" title="${t('chat_delete_msg_title', 'حذف الرسالة')}" style="cursor:pointer; color:var(--text-muted); font-size:10px; margin-inline-start:auto;" onclick="deleteMerchantChatMessage('${safeId}')"></i>
                    </div>
                    <div style="background:${mine ? 'var(--primary-color)' : (isUnread ? '#fff7ed' : '#fff')}; color:${mine ? '#fff' : 'var(--text-main)'}; border:1px solid ${isUnread ? '#fdba74' : 'var(--border-color)'}; border-radius:12px; padding:8px 12px; font-size:13px; white-space:pre-wrap; word-break:break-word;">${escapeHtml(m.text || '')}</div>
                </div>`;
            }).join('');
            box.scrollTop = box.scrollHeight;
        }
        function markMerchantChatRead() {
            let storeKey = localStorage.getItem('currentActiveMerchant');
            if(!storeKey || !window.markChatMessagesRead) return;
            let unreadIds = __merchantChatMsgsCache.filter(m => m.senderType === 'staff' && !m.readByMerchant).map(m => m.id);
            if(unreadIds.length) window.markChatMessagesRead(storeKey, unreadIds, 'readByMerchant').then(function(){ try { syncTopHeaderChatIcon(); } catch(e) {} });
        }
        // ------------------------------------------------------------
        // ⭐ مودال تقييم الدعم (جانب التاجر): بيظهر تلقائيًا لحظة ما الدعم/الأدمن يقفل
        // المحادثة ويطلب تقييم. نجوم 1-5 + ملاحظة اختيارية.
        // ------------------------------------------------------------
        let __merchantRatingPendingInfo = null;
        let __merchantRatingSelectedStars = 0;
        function openMerchantRatingModal(reqData) {
            __merchantRatingPendingInfo = reqData;
            __merchantRatingSelectedStars = 0;
            let modal = document.getElementById('merchantChatRatingModal');
            if(!modal) return;
            document.getElementById('merchantChatRatingNote').value = '';
            renderMerchantRatingStars();
            modal.classList.remove('hidden');
        }
        function closeMerchantRatingModal() {
            let modal = document.getElementById('merchantChatRatingModal');
            if(modal) modal.classList.add('hidden');
        }
        function setMerchantRatingStars(n) {
            __merchantRatingSelectedStars = n;
            renderMerchantRatingStars();
        }
        function renderMerchantRatingStars() {
            let box = document.getElementById('merchantChatRatingStars');
            if(!box) return;
            let n = __merchantRatingSelectedStars;
            box.innerHTML = [1,2,3,4,5].map(i => `<i class="fa fa-star" onclick="setMerchantRatingStars(${i})" style="cursor:pointer; font-size:26px; margin:0 3px; color:${i <= n ? '#f59e0b' : '#d1d5db'};"></i>`).join('');
        }
        function submitMerchantChatRating() {
            let storeKey = localStorage.getItem('currentActiveMerchant');
            if(!storeKey || !window.submitChatRating) { closeMerchantRatingModal(); return; }
            if(!__merchantRatingSelectedStars) { showToast(t('chat_rating_pick_star_toast', 'اختر عدد النجوم الأول')); return; }
            let note = (document.getElementById('merchantChatRatingNote').value || '').trim();
            let info = __merchantRatingPendingInfo || {};
            window.submitChatRating(storeKey, {
                rating: __merchantRatingSelectedStars,
                note: note,
                staffUsername: info.staffUsername || '',
                staffRole: info.staffRole || ''
            }).then(function(ok) {
                closeMerchantRatingModal();
                if(ok) showToast(t('chat_rating_thanks_toast', '🙏 شكرًا لتقييمك!'));
            });
        }
        function dismissMerchantRatingModal() {
            // التاجر اختار يتجاهل التقييم دلوقتي - نقفل المودال بس من غير ما نسجل تقييم،
            // الطلب هيفضل متسجل كـ "غير محلول" وممكن يظهر تاني لو فتح الشات تاني.
            closeMerchantRatingModal();
        }
        // ⚠️ أهم فرق عن النسخة القديمة: أي سبب فشل (مفيش اتصال سحابة، أو صلاحيات Firestore
        // مرفوضة، أو حتى الدالة نفسها مش موجودة لسبب تقني) دلوقتي بيظهر للتاجر كرسالة واضحة
        // بدل ما يختفي بصمت ويفضل التاجر مش فاهم ليه رسالته "مترسلتش" من غير أي تفسير.
        function sendMerchantChatMessage() {
            let input = document.getElementById('merchantChatInput');
            let text = input.value.trim();
            if(!text) return;
            let storeKey = localStorage.getItem('currentActiveMerchant');
            if(!storeKey) return;
            if(!window.sendChatMessage) {
                showToast(t('chat_send_failed_toast', '⚠️ تعذر إرسال الرسالة، حاول تاني'));
                console.error('⚠️ sendChatMessage غير معرّفة - الملف firebase-config.js المحمّل حاليًا قديم ولسه مفيهوش دوال الشات. حدّث الصفحة بقوة (Ctrl+Shift+R) أو تأكد إن الملف الجديد مرفوع فعليًا على الاستضافة.');
                return;
            }
            let staffUsername = localStorage.getItem('currentStaffUsername');
            input.value = '';
            window.sendChatMessage(storeKey, {
                text: text,
                senderType: 'merchant',
                senderName: staffUsername || storeKey,
                readByMerchant: true,
                readByStaff: false
            }).then(function(ok) {
                if(!ok) {
                    showToast(t('chat_send_failed_toast', '⚠️ تعذر إرسال الرسالة، حاول تاني'));
                    input.value = text;
                }
            });
        }

        // ------------------------------------------------------------
        // 👑 جانب الأدمن/الدعم: صندوق محادثات بكل المتاجر المتاح له الوصول لها
        // (مرتبة حسب غير المقروء) + نافذة شات فعلية لكل متجر.
        // ------------------------------------------------------------
        let __adminChatThreadUnsub = null;
        let __adminChatThreadStoreKey = null;
        let __adminChatThreadMsgsCache = [];

        // ⚠️ أهم فرق عن النسخة القديمة: الدالة كلها دلوقتي محاطة بحماية كاملة (try/catch +
        // .catch على كل Promise) عشان أي خطأ (صلاحيات Firestore، اتصال سحابة مقطوع، ملف
        // قديم في الكاش...) يظهر كرسالة واضحة للأدمن بدل ما شاشة "⏳ بنجمّع المحادثات..."
        // تفضل عالقة للأبد من غير أي تفسير - وده بالظبط اللي كان بيحصل قبل كده.
        function openAdminChatStoresPanel() {
            document.getElementById('adminChatInboxModal').classList.remove('hidden');
            let loadingEl = document.getElementById('adminChatInboxLoading');
            let listEl = document.getElementById('adminChatInboxList');
            listEl.innerHTML = '';
            loadingEl.classList.remove('hidden');
            loadingEl.textContent = t('chat_admin_loading', '⏳ بنجمّع المحادثات...');

            // 🧹 تنظيف تلقائي صامت للمحادثات القديمة كل ما الأدمن يفتح الصندوق ده - من غير
            // ما يأخر ظهور القائمة (fire-and-forget، مفيش انتظار له).
            try { adminCleanupChatNow(false); } catch(e) {}

            try {
                if(!window.fetchChatLastMessageOnce || !window.fetchChatUnreadCountOnce) {
                    loadingEl.classList.add('hidden');
                    listEl.innerHTML = `<p style="text-align:center; color:#dc2626; font-size:12px; padding:20px;">${t('chat_cloud_unavailable', '⚠️ الاتصال بالسحابة غير متاح حاليًا، حدّث الصفحة بقوة (Ctrl+Shift+R) وجرّب تاني.')}</p>`;
                    return;
                }

                let keys = getAccessibleChatStoreKeys();
                if(!keys.length) {
                    loadingEl.classList.add('hidden');
                    listEl.innerHTML = `<p style="text-align:center; color:var(--text-muted); font-size:12px; padding:20px;">${t('chat_no_stores_access', 'لا يوجد متاجر مخصصة لك بعد، تواصل مع المدير العام.')}</p>`;
                    return;
                }

                Promise.all(keys.map(function(key) {
                    return Promise.all([
                        window.fetchChatLastMessageOnce(key).catch(function(){ return null; }),
                        window.fetchChatUnreadCountOnce(key, true).catch(function(){ return 0; })
                    ]).then(function(res) { return { key: key, lastMsg: res[0], unread: res[1] }; });
                })).then(function(results) {
                    results.sort(function(a, b) {
                        if(a.unread !== b.unread) return b.unread - a.unread;
                        let at = (a.lastMsg && a.lastMsg.ts && a.lastMsg.ts.toMillis) ? a.lastMsg.ts.toMillis() : 0;
                        let bt = (b.lastMsg && b.lastMsg.ts && b.lastMsg.ts.toMillis) ? b.lastMsg.ts.toMillis() : 0;
                        return bt - at;
                    });
                    loadingEl.classList.add('hidden');
                    if(!results.some(r => r.lastMsg)) {
                        listEl.innerHTML = `<p style="text-align:center; color:var(--text-muted); font-size:12px; padding:20px;">${t('chat_inbox_empty', 'لا توجد محادثات بعد.')}</p>`;
                        return;
                    }
                    listEl.innerHTML = results.map(function(r) {
                        let snippet = r.lastMsg ? escapeHtml((r.lastMsg.text || '').slice(0, 60)) : '<span style="color:var(--text-muted);">—</span>';
                        let safeKey = r.key.replace(/'/g, "\\'");
                        return `<div class="manage-row" style="cursor:pointer;" onclick="openAdminChatThreadModal('${safeKey}')">
                            <div>
                                <strong>${escapeHtml(r.key)}</strong>${r.unread > 0 ? ` <span style="background:#dc2626; color:#fff; font-size:10px; padding:1px 6px; border-radius:10px;">${r.unread}</span>` : ''}<br>
                                <span style="font-size:11px; color:var(--text-muted);">${snippet}</span>
                            </div>
                            <i class="fa fa-chevron-left"></i>
                        </div>`;
                    }).join('');
                }).catch(function(err) {
                    console.error('openAdminChatStoresPanel: خطأ أثناء تجميع المحادثات:', err);
                    loadingEl.classList.add('hidden');
                    listEl.innerHTML = `<p style="text-align:center; color:#dc2626; font-size:12px; padding:20px;">⚠️ تعذر تحميل المحادثات (تأكد من صلاحيات Firestore). حدّث الصفحة وجرّب تاني.</p>`;
                });
            } catch(err) {
                console.error('openAdminChatStoresPanel: خطأ غير متوقع:', err);
                loadingEl.classList.add('hidden');
                listEl.innerHTML = `<p style="text-align:center; color:#dc2626; font-size:12px; padding:20px;">⚠️ حصل خطأ غير متوقع، حدّث الصفحة وجرّب تاني.</p>`;
            }
        }
        function closeAdminChatInboxModal() {
            document.getElementById('adminChatInboxModal').classList.add('hidden');
        }

        function openAdminChatThreadModal(storeKey) {
            closeAdminChatInboxModal();
            __adminChatThreadStoreKey = storeKey;
            document.getElementById('adminChatThreadTitle').innerHTML = `<i class="fa fa-comment-dots"></i> ${escapeHtml(storeKey)}`;
            document.getElementById('adminChatThreadModal').classList.remove('hidden');
            if(__adminChatThreadUnsub) { try { __adminChatThreadUnsub(); } catch(e) {} }
            if(!window.watchChatMessages) return;
            __adminChatThreadUnsub = window.watchChatMessages(storeKey, function(msgs) {
                __adminChatThreadMsgsCache = msgs;
                renderAdminChatThreadMessages();
                markAdminChatThreadRead();
            });
        }
        function closeAdminChatThreadModal() {
            document.getElementById('adminChatThreadModal').classList.add('hidden');
            if(__adminChatThreadUnsub) { try { __adminChatThreadUnsub(); } catch(e) {} __adminChatThreadUnsub = null; }
            __adminChatThreadStoreKey = null;
            refreshAdminChatBadge();
        }
        // 🗑️ حذف رسالة من جانب الأدمن/الدعم (بعد تأكيد) - حذف فوري من Firestore وإزالة من الشاشة
        function deleteAdminChatMessage(msgId) {
            if(!msgId || !__adminChatThreadStoreKey) return;
            if(!confirm(t('chat_delete_confirm', 'تأكيد حذف هذه الرسالة نهائيًا؟'))) return;
            if(!window.deleteChatMessage) return;
            window.deleteChatMessage(__adminChatThreadStoreKey, msgId).then(function(ok) {
                if(ok) {
                    __adminChatThreadMsgsCache = __adminChatThreadMsgsCache.filter(m => m.id !== msgId);
                    renderAdminChatThreadMessages();
                } else {
                    showToast(t('chat_delete_failed_toast', '⚠️ تعذر حذف الرسالة'));
                }
            });
        }
        // 🔒⭐ إنهاء المحادثة من جانب الدعم/الأدمن وطلب تقييم من التاجر - بيظهر للتاجر
        // مودال التقييم فورًا لحظيًا (عبر watchChatRatingRequest).
        function closeAdminChatConversationAndRate() {
            if(!__adminChatThreadStoreKey || !window.requestChatRating) return;
            let actor = getChatCurrentActorInfo();
            window.requestChatRating(__adminChatThreadStoreKey, actor.username, actor.role === 'super' ? 'admin' : 'support').then(function(ok) {
                if(ok) showToast(t('chat_rating_requested_toast', '✅ اتبعت للتاجر طلب تقييم للمحادثة'));
            });
        }
        function renderAdminChatThreadMessages() {
            let box = document.getElementById('adminChatThreadMessagesBox');
            if(!box) return;
            if(!__adminChatThreadMsgsCache.length) {
                box.innerHTML = `<p style="text-align:center; color:var(--text-muted); font-size:12px; margin-top:20px;">${t('chat_empty_state', 'لا توجد رسائل بعد. ابدأ المحادثة!')}</p>`;
                return;
            }
            let firstUnreadIdx = __adminChatThreadMsgsCache.findIndex(m => m.senderType === 'merchant' && !m.readByStaff);
            box.innerHTML = __adminChatThreadMsgsCache.map(function(m, idx) {
                let mine = m.senderType === 'staff';
                let roleBadge = '';
                if(mine && m.senderRole) {
                    let roleTxt = m.senderRole === 'admin' ? t('chat_role_admin_badge', 'مدير عام') : t('chat_role_support_badge', 'دعم فني');
                    roleBadge = `<span style="background:${m.senderRole === 'admin' ? '#7c3aed' : '#0891b2'}; color:#fff; font-size:9px; padding:1px 6px; border-radius:10px; margin-inline-start:4px;">${roleTxt}</span>`;
                }
                let isUnread = !mine && !m.readByStaff;
                let divider = (idx === firstUnreadIdx && firstUnreadIdx > -1) ? `<div style="display:flex; align-items:center; gap:8px; margin:4px 0;"><hr style="flex:1; border-color:#dc2626;"><span style="color:#dc2626; font-size:10.5px; font-weight:bold; white-space:nowrap;">🔴 ${t('chat_new_messages_divider', 'رسائل جديدة')}</span><hr style="flex:1; border-color:#dc2626;"></div>` : '';
                let safeId = (m.id || '').replace(/'/g, "\\'");
                return `${divider}<div style="align-self:${mine ? 'flex-end' : 'flex-start'}; max-width:80%; position:relative;">
                    <div style="font-size:10.5px; color:var(--text-muted); margin-bottom:2px; display:flex; align-items:center; gap:5px;">
                        <span>${escapeHtml(m.senderName || '')}</span>${roleBadge}${isUnread ? `<span style="width:7px; height:7px; border-radius:50%; background:#dc2626; display:inline-block;"></span>` : ''}
                        <i class="fa fa-trash" title="${t('chat_delete_msg_title', 'حذف الرسالة')}" style="cursor:pointer; color:var(--text-muted); font-size:10px; margin-inline-start:auto;" onclick="deleteAdminChatMessage('${safeId}')"></i>
                    </div>
                    <div style="background:${mine ? 'var(--primary-color)' : (isUnread ? '#fff7ed' : '#fff')}; color:${mine ? '#fff' : 'var(--text-main)'}; border:1px solid ${isUnread ? '#fdba74' : 'var(--border-color)'}; border-radius:12px; padding:8px 12px; font-size:13px; white-space:pre-wrap; word-break:break-word;">${escapeHtml(m.text || '')}</div>
                </div>`;
            }).join('');
            box.scrollTop = box.scrollHeight;
        }
        function markAdminChatThreadRead() {
            if(!__adminChatThreadStoreKey || !window.markChatMessagesRead) return;
            let unreadIds = __adminChatThreadMsgsCache.filter(m => m.senderType === 'merchant' && !m.readByStaff).map(m => m.id);
            if(unreadIds.length) window.markChatMessagesRead(__adminChatThreadStoreKey, unreadIds, 'readByStaff').then(function(){ try { syncTopHeaderChatIcon(); } catch(e) {} });
        }
        function sendAdminChatMessage() {
            let input = document.getElementById('adminChatThreadInput');
            let text = input.value.trim();
            if(!text || !__adminChatThreadStoreKey) return;
            if(!window.sendChatMessage) {
                showToast(t('chat_send_failed_toast', '⚠️ تعذر إرسال الرسالة، حاول تاني'));
                console.error('⚠️ sendChatMessage غير معرّفة - تأكد إن firebase-config.js المحدّث هو المرفوع فعليًا على الاستضافة.');
                return;
            }
            let actor = getChatCurrentActorInfo();
            input.value = '';
            window.sendChatMessage(__adminChatThreadStoreKey, {
                text: text,
                senderType: 'staff',
                senderName: actor.username || 'Admin',
                senderRole: actor.role === 'super' ? 'admin' : 'support',
                readByStaff: true,
                readByMerchant: false
            }).then(function(ok) {
                if(!ok) {
                    showToast(t('chat_send_failed_toast', '⚠️ تعذر إرسال الرسالة، حاول تاني'));
                    input.value = text;
                }
            });
        }

        // ------------------------------------------------------------
        // 📊 لوحة تقييمات الدعم (جانب الأدمن): متوسط تقييم لكل موظف/مدير + قائمة بكل
        // تقييمات التجار مع ملاحظاتهم (نفس فكرة تقييمات الدعم في أمازون/شوبيفاي).
        // ------------------------------------------------------------
        function openAdminChatRatingsPanel() {
            document.getElementById('adminChatRatingsModal').classList.remove('hidden');
            let loadingEl = document.getElementById('adminChatRatingsLoading');
            let summaryEl = document.getElementById('adminChatRatingsSummary');
            let listEl = document.getElementById('adminChatRatingsList');
            summaryEl.innerHTML = '';
            listEl.innerHTML = '';
            loadingEl.classList.remove('hidden');
            if(!window.fetchAllChatRatingsOnce) {
                loadingEl.classList.add('hidden');
                listEl.innerHTML = `<p style="text-align:center; color:#dc2626; font-size:12px; padding:20px;">${t('chat_cloud_unavailable', '⚠️ الاتصال بالسحابة غير متاح حاليًا، حدّث الصفحة بقوة (Ctrl+Shift+R) وجرّب تاني.')}</p>`;
                return;
            }
            window.fetchAllChatRatingsOnce().then(function(ratings) {
                let keys = getAccessibleChatStoreKeys();
                ratings = (ratings || []).filter(r => keys.includes(r.storeKey));
                ratings.sort(function(a, b) {
                    let at = (a.ts && a.ts.toMillis) ? a.ts.toMillis() : 0;
                    let bt = (b.ts && b.ts.toMillis) ? b.ts.toMillis() : 0;
                    return bt - at;
                });
                loadingEl.classList.add('hidden');
                if(!ratings.length) {
                    summaryEl.innerHTML = '';
                    listEl.innerHTML = `<p style="text-align:center; color:var(--text-muted); font-size:12px; padding:20px;">${t('chat_ratings_empty', 'لا توجد تقييمات بعد.')}</p>`;
                    return;
                }
                // 📈 متوسط التقييم لكل موظف/مدير
                let byStaff = {};
                ratings.forEach(function(r) {
                    let key = r.staffUsername || '—';
                    if(!byStaff[key]) byStaff[key] = { sum: 0, count: 0, role: r.staffRole };
                    byStaff[key].sum += (r.rating || 0);
                    byStaff[key].count++;
                });
                let overallAvg = (ratings.reduce((s, r) => s + (r.rating || 0), 0) / ratings.length).toFixed(1);
                summaryEl.innerHTML = `<div style="background:#fff; border:1px solid var(--border-color); border-radius:10px; padding:10px; margin-bottom:10px;">
                    <div style="text-align:center; margin-bottom:8px;"><span style="font-size:22px; font-weight:bold; color:#f59e0b;">⭐ ${overallAvg}</span> <span style="font-size:11px; color:var(--text-muted);">/5 (${ratings.length} ${t('chat_ratings_count_word', 'تقييم')})</span></div>
                    ${Object.keys(byStaff).map(function(username) {
                        let s = byStaff[username];
                        let avg = (s.sum / s.count).toFixed(1);
                        let roleTxt = s.role === 'admin' ? t('chat_role_admin_badge', 'مدير عام') : t('chat_role_support_badge', 'دعم فني');
                        return `<div style="display:flex; justify-content:space-between; align-items:center; font-size:12px; padding:4px 0; border-top:1px solid var(--border-color);">
                            <span><strong>${escapeHtml(username)}</strong> <span style="color:var(--text-muted); font-size:10px;">(${roleTxt})</span></span>
                            <span>⭐ ${avg} <span style="color:var(--text-muted); font-size:10px;">(${s.count})</span></span>
                        </div>`;
                    }).join('')}
                </div>`;
                listEl.innerHTML = ratings.map(function(r) {
                    let stars = '⭐'.repeat(r.rating || 0) + '☆'.repeat(5 - (r.rating || 0));
                    return `<div class="manage-row" style="display:block;">
                        <div style="display:flex; justify-content:space-between; align-items:center;">
                            <strong style="font-size:12px;">${escapeHtml(r.storeKey || '')}</strong>
                            <span style="font-size:13px; color:#f59e0b;">${stars}</span>
                        </div>
                        <div style="font-size:11px; color:var(--text-muted); margin-top:2px;">${t('chat_ratings_staff_word', 'الموظف')}: ${escapeHtml(r.staffUsername || '—')}</div>
                        ${r.note ? `<div style="font-size:12px; margin-top:4px; background:#f9fafb; border-radius:6px; padding:6px;">${escapeHtml(r.note)}</div>` : ''}
                    </div>`;
                }).join('');
            }).catch(function(err) {
                console.error('openAdminChatRatingsPanel:', err);
                loadingEl.classList.add('hidden');
                listEl.innerHTML = `<p style="text-align:center; color:#dc2626; font-size:12px; padding:20px;">⚠️ تعذر تحميل التقييمات.</p>`;
            });
        }
        function closeAdminChatRatingsPanel() {
            document.getElementById('adminChatRatingsModal').classList.add('hidden');
        }
        // ⚠️ ملحوظة: كان فيه نسخة قديمة مكررة من refreshAdminChatBadge هنا بتاريخ لها نفس
        // الاسم بالظبط، وبما إن تعريفات function بنفس الاسم في نفس الـ scope آخر واحد
        // يفوز، كانت هي اللي شغالة فعليًا (مش الاستدعاء البسيط لـ syncTopHeaderChatIcon
        // المعرّف فوق في بداية قسم الشات) - يعني أيقونة الهيدر الموحّدة ما كانتش بتتحدّث
        // صح بعد كل حدث. اتشالت نهائيًا والاسم دلوقتي بيشاور بس على النسخة الموحّدة فوق.
