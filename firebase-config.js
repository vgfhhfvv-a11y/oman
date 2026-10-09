// ============================================================================
// 🔥 Firebase — قاعدة بيانات سحابية حقيقية (Cloud Firestore) بدل الاعتماد الكامل
// على localStorage بمفرده. مفاتيح المشروع دي خاصة بمنصتك.
//
// 🖼️ حل مشكلة "حد 1 ميجابايت لكل مستند" بدون الحاجة لخدمة Storage المدفوعة:
// Firestore بيحدد 1 ميجابايت لكل *مستند واحد*، لكن مفيش حد على عدد المستندات.
// فبدل ما نحط بيانات المتجر + كل صوره في مستند واحد (وده اللي كان يخليه يتخطى
// الحد بسرعة)، الكود تحت بيفصل الصور تلقائيًا لمستندات صغيرة منفصلة جوه
// subcollection اسمها "images" تحت كل متجر:
//   stores/{storeKey}          → بيانات المتجر النصية فقط (نص خفيف جدًا)
//   stores/{storeKey}/images/* → كل صورة (base64) في مستند مستقل بمفردها
// وبكده كل المتاجر تقريبًا (حتى بصور كتير) تشتغل سحابيًا بأمان بدون أي حاجة
// لتفعيل Storage أو ربط بطاقة بنكية. لو فعّلت Storage مستقبلًا، ده يبقى تحسين
// إضافي (توفير تكلفة قراءة/كتابة أكتر)، مش شرط لتشغيل المزامنة.
// ============================================================================

const firebaseConfig = {
  apiKey: "AIzaSyDDMBCPb5yKdlFpkNis6btsx7qDwUHvpU4",
  authDomain: "platform-stores-49c14.firebaseapp.com",
  projectId: "platform-stores-49c14",
  storageBucket: "platform-stores-49c14.firebasestorage.app",
  messagingSenderId: "246895081561",
  appId: "1:246895081561:web:01560b80e2296b3f289948"
};

let __cloudDb = null;
let __cloudEnabled = false;
try {
  firebase.initializeApp(firebaseConfig);
  __cloudDb = firebase.firestore();
  __cloudEnabled = true;
  // 🔐 Firebase Authentication الحقيقي: بيحل محل نظام كلمات السر النصية القديم
  // بالكامل لحساب صاحب المتجر. window.firebaseAuth معروضة بشكل صريح هنا عشان
  // app.js (اللي هو ملف/سكريبت منفصل) يقدر يوصلها ويستخدمها في تسجيل الدخول والتسجيل.
  window.firebaseAuth = firebase.auth();
  console.log('🔥 Firebase متصل بنجاح — المزامنة السحابية + تسجيل الدخول الحقيقي مفعّلين.');
} catch (e) {
  console.warn('⚠️ فشل الاتصال بـ Firebase، المنصة ستعمل محليًا فقط (localStorage) بدون مزامنة سحابية أو تسجيل دخول حقيقي:', e);
}

const CLOUD_DOC_SAFE_LIMIT = 900 * 1024;

const __originalLocalStorageSetItem = Storage.prototype.setItem.bind(localStorage);
const __originalLocalStorageGetItem = Storage.prototype.getItem.bind(localStorage);

const __pendingCloudPushTimers = {};

function __extractImagesForCloud(obj, path, images) {
    if (obj === null || typeof obj !== 'object') return obj;
    if (Array.isArray(obj)) {
        return obj.map((v, i) => __extractImagesForCloud(v, path + '.' + i, images));
    }
    let result = {};
    for (let key in obj) {
        let val = obj[key];
        let childPath = path + '.' + key;
        if (typeof val === 'string' && val.indexOf('data:image') === 0) {
            images[childPath] = val;
            result[key] = '__CLOUD_IMG_REF__';
        } else if (val !== null && typeof val === 'object') {
            result[key] = __extractImagesForCloud(val, childPath, images);
        } else {
            result[key] = val;
        }
    }
    return result;
}

function __reinjectImagesFromCloud(obj, path, images) {
    if (obj === null || typeof obj !== 'object') return obj;
    if (Array.isArray(obj)) {
        return obj.map((v, i) => __reinjectImagesFromCloud(v, path + '.' + i, images));
    }
    let result = {};
    for (let key in obj) {
        let val = obj[key];
        let childPath = path + '.' + key;
        if (val === '__CLOUD_IMG_REF__' && images[childPath] !== undefined) {
            result[key] = images[childPath];
        } else if (val !== null && typeof val === 'object') {
            result[key] = __reinjectImagesFromCloud(val, childPath, images);
        } else {
            result[key] = val;
        }
    }
    return result;
}

function __pathToDocId(path) {
    let id = path.replace(/^\./, '').replace(/[\/.]/g, '_');
    return id || 'root';
}

// ----------------------------------------------------------------------------
// 🔒 حماية: كلمات السر (كلمة سر التاجر نفسه، كلمات سر المساعدين والشركاء،
// وأكواد استرجاع كلمة السر المؤقتة) لازم *ما تتخزنش خالص* في السحابة، عشان
// ولا حتى في أسوأ الأحوال (لو حصل خطأ في صلاحيات القاعدة على Firebase) يقدر
// حد يوصل لكلمة سر أي تاجر. بيانات المتجر (منتجات، طلبات، تصميم...) تتزامن
// عادي، لكن الدخول والخروج يفضلوا مرتبطين بالجهاز نفسه إلا لو التاجر استخدم
// خطوة "استرجاع كلمة السر" لتعيين كلمة سر جديدة (وقتها تتزامن الكلمة الجديدة
// تلقائيًا من نفس آلية الحفظ العادية).
// ----------------------------------------------------------------------------
function __redactSensitiveFields(storeObj) {
    let clone = JSON.parse(JSON.stringify(storeObj));
    delete clone.pass;
    delete clone.passwordResetCode;
    delete clone.passwordResetExpiry;
    if (Array.isArray(clone.staff)) {
        clone.staff = clone.staff.map(s => { let c = Object.assign({}, s); delete c.password; return c; });
    }
    if (Array.isArray(clone.coOwners)) {
        clone.coOwners = clone.coOwners.map(c0 => { let c = Object.assign({}, c0); delete c.password; return c; });
    }
    return clone;
}

// وقت السحب من السحابة: بما إن كلمات السر مش موجودة في نسخة السحابة أصلاً
// (بحكم __redactSensitiveFields فوق)، لازم نرجّع كلمات السر المحلية الموجودة
// فعليًا على هذا الجهاز بعد الدمج، عشان الدخول يفضل شغال من غير ما "يتصفّر".
function __restoreSensitiveFieldsFromLocal(cloudStore, localStore) {
    if (!localStore) return cloudStore;
    let merged = Object.assign({}, cloudStore);
    if (localStore.pass !== undefined) merged.pass = localStore.pass;
    if (localStore.passwordResetCode !== undefined) merged.passwordResetCode = localStore.passwordResetCode;
    if (localStore.passwordResetExpiry !== undefined) merged.passwordResetExpiry = localStore.passwordResetExpiry;
    if (Array.isArray(merged.staff) && Array.isArray(localStore.staff)) {
        merged.staff = merged.staff.map(s => {
            let localMatch = localStore.staff.find(ls => ls.username === s.username);
            return localMatch ? Object.assign({}, s, { password: localMatch.password }) : s;
        });
    }
    if (Array.isArray(merged.coOwners) && Array.isArray(localStore.coOwners)) {
        merged.coOwners = merged.coOwners.map(c => {
            let localMatch = localStore.coOwners.find(lc => lc.username === c.username);
            return localMatch ? Object.assign({}, c, { password: localMatch.password }) : c;
        });
    }
    return merged;
}

function __cloudPushStore(storeKey, storeObj) {
    if (!__cloudEnabled) return;
    clearTimeout(__pendingCloudPushTimers[storeKey]);
    __pendingCloudPushTimers[storeKey] = setTimeout(() => {
        let redactedStore = __redactSensitiveFields(storeObj);
        let images = {};
        let cleanedStore;
        try {
            cleanedStore = __extractImagesForCloud(redactedStore, '', images);
        } catch (e) { return; }

        let textJson;
        try { textJson = JSON.stringify(cleanedStore); } catch (e) { return; }
        if (textJson.length > CLOUD_DOC_SAFE_LIMIT) {
            console.warn('⚠️ متجر "' + storeKey + '" فيه بيانات نصية كبيرة جدًا (غير الصور)، تم تخطي رفعه سحابيًا هذه المرة.');
            return;
        }

        let totalBytes = textJson.length;
        let imageWritePromises = [];
        let storeRef = __cloudDb.collection('stores').doc(storeKey);
        let imagesRef = storeRef.collection('images');

        for (let imgPath in images) {
            let imgData = images[imgPath];
            if (imgData.length > CLOUD_DOC_SAFE_LIMIT) {
                console.warn('⚠️ صورة كبيرة جدًا (' + imgPath + ') في متجر "' + storeKey + '" تم تخطي رفعها سحابيًا.');
                continue;
            }
            totalBytes += imgData.length;
            let docId = __pathToDocId(imgPath);
            imageWritePromises.push(
                imagesRef.doc(docId).set({ path: imgPath, img: imgData }).catch(err => {
                    console.warn('⚠️ تعذر رفع صورة "' + imgPath + '" لمتجر "' + storeKey + '":', err.message);
                })
            );
        }

        Promise.all(imageWritePromises).then(() => {
            return storeRef.set({
                data: textJson,
                sizeBytes: totalBytes,
                updatedAt: firebase.firestore.FieldValue.serverTimestamp()
            }, { merge: true });
        }).then(() => {
            try {
                let allStores = JSON.parse(__originalLocalStorageGetItem('allStores')) || {};
                if (allStores[storeKey]) {
                    allStores[storeKey].__cloudUsageBytes = totalBytes;
                    __originalLocalStorageSetItem('allStores', JSON.stringify(allStores));
                }
            } catch (e) { /* تجاهل بهدوء */ }
        }).catch(err => {
            console.warn('⚠️ تعذر رفع متجر "' + storeKey + '" للسحابة:', err.message);
        });
    }, 800);
}

Storage.prototype.setItem = function (key, value) {
    __originalLocalStorageSetItem(key, value);
    if (key === 'allStores' && __cloudEnabled) {
        try {
            let stores = JSON.parse(value);
            for (let storeKey in stores) {
                __cloudPushStore(storeKey, stores[storeKey]);
            }
        } catch (e) { /* بيانات غير صالحة - نتجاهل بهدوء */ }
    }
};

function __cloudPullAllStores() {
    if (!__cloudEnabled) return;
    __cloudDb.collection('stores').get().then(snapshot => {
        let localStores = {};
        try { localStores = JSON.parse(__originalLocalStorageGetItem('allStores')) || {}; } catch (e) { localStores = {}; }

        let perStorePromises = [];
        snapshot.forEach(doc => {
            let storeKey = doc.id;
            let docData = doc.data();
            let cleanedStore;
            try { cleanedStore = JSON.parse(docData.data); } catch (e) { return; }

            let p = doc.ref.collection('images').get().then(imgSnap => {
                let images = {};
                imgSnap.forEach(imgDoc => {
                    let d = imgDoc.data();
                    if (d && d.path) images[d.path] = d.img;
                });
                let fullStore = __reinjectImagesFromCloud(cleanedStore, '', images);
                fullStore.__cloudUsageBytes = docData.sizeBytes || 0;
                localStores[storeKey] = __restoreSensitiveFieldsFromLocal(fullStore, localStores[storeKey]);
            }).catch(() => {
                cleanedStore.__cloudUsageBytes = docData.sizeBytes || 0;
                localStores[storeKey] = __restoreSensitiveFieldsFromLocal(cleanedStore, localStores[storeKey]);
            });
            perStorePromises.push(p);
        });

        return Promise.all(perStorePromises).then(() => {
            __originalLocalStorageSetItem('allStores', JSON.stringify(localStores));
        });
    }).catch(err => {
        console.warn('⚠️ تعذر سحب بيانات المتاجر من السحابة، المتجر شغال بالنسخة المحلية المتاحة فقط:', err.message);
    });
}

__cloudPullAllStores();

// ============================================================
// 🔔 إشعارات Push حقيقية للتاجر عند وصول طلب جديد
// ============================================================
// مفتاح VAPID الخاص بمشروع Cloud Messaging (عام وآمن الظهور، مش سر).
const FCM_VAPID_KEY = 'BAJiHbVuqn0nqgnxQ2TuPbMrJnsfLciS2hKaBDoCf5JS_hmird-UF7gTwoOLa_i0ncuWSeEKQ6fumMC0dKaFg8U';
let __fcmMessaging = null;
try {
    if (firebase.messaging && firebase.messaging.isSupported && firebase.messaging.isSupported()) {
        __fcmMessaging = firebase.messaging();
    } else if (firebase.messaging) {
        __fcmMessaging = firebase.messaging();
    }
} catch (e) {
    console.warn('⚠️ إشعارات Push غير مدعومة على هذا المتصفح/الجهاز:', e.message);
}

// 🔔 طلب إذن الإشعارات وتسجيل "توكن" هذا الجهاز - بيُستدعى من زرار صريح في لوحة
// التاجر (enablePushNotifications في app.js)، مش تلقائيًا، عشان الإذن يتطلب تفاعل
// حقيقي من المستخدم على أغلب المتصفحات، وأفضل تجربة إنه هو نفسه يضغط "فعّل الإشعارات".
function requestPushPermissionAndSaveToken(storeKey) {
    if (!__fcmMessaging) {
        return Promise.reject(new Error('الإشعارات غير مدعومة على هذا المتصفح.'));
    }
    return Notification.requestPermission().then(permission => {
        if (permission !== 'granted') {
            throw new Error('تم رفض إذن الإشعارات من المتصفح.');
        }
        return navigator.serviceWorker.getRegistration();
    }).then(registration => {
        return __fcmMessaging.getToken({ vapidKey: FCM_VAPID_KEY, serviceWorkerRegistration: registration });
    }).then(token => {
        if (!token) throw new Error('تعذر الحصول على رمز الإشعارات.');
        let stores = JSON.parse(__originalLocalStorageGetItem('allStores')) || {};
        if (stores[storeKey]) {
            stores[storeKey].fcmToken = token;
            __originalLocalStorageSetItem('allStores', JSON.stringify(stores));
            if (__cloudEnabled) __cloudPushStore(storeKey, stores[storeKey]);
        }
        return token;
    });
}
window.requestPushPermissionAndSaveToken = requestPushPermissionAndSaveToken;

// ============================================================
// 👥 حسابات المساعدين والشركاء على Firebase Authentication الحقيقي، بنفس مستوى
// أمان حساب صاحب المتجر تمامًا. المشكلة التقنية المعروفة: لو استخدمنا نفس
// اتصال Firebase الأساسي (اللي فيه جلسة التاجر حاليًا) عشان ننشئ حساب مساعد
// جديد، الاستدعاء ده بيعمل تسجيل خروج للتاجر تلقائيًا ويسجّله دخول كالمساعد
// الجديد (سلوك افتراضي غريب لكنه معروف في Firebase). الحل الرسمي: اتصال
// "ثانوي" منفصل تمامًا (Secondary App) بنستخدمه بس للإنشاء، وبعدها نقفله على
// طول - جلسة التاجر الأساسية مايتأثرش بيها خالص.
// ============================================================
let __secondaryFirebaseApp = null;
function getSecondaryAuth() {
    if (!__secondaryFirebaseApp) {
        __secondaryFirebaseApp = firebase.initializeApp(firebaseConfig, 'SecondaryAuxAuth');
    }
    return __secondaryFirebaseApp.auth();
}
// بينشئ حساب Firebase جديد بمعزل تام عن جلسة التاجر الحالية، ويرجع الـ uid بس.
function createAuxAuthAccount(email, password) {
    let auxAuth = getSecondaryAuth();
    return auxAuth.createUserWithEmailAndPassword(email, password).then(cred => {
        let uid = cred.user.uid;
        return auxAuth.signOut().then(() => uid);
    });
}
window.createAuxAuthAccount = createAuxAuthAccount;
function buildSyntheticStaffEmail(username) {
    return 's_' + username.toLowerCase().replace(/[^a-z0-9_.-]/g, '') + '@storeplatform.internal';
}
function buildSyntheticPartnerEmail(username) {
    return 'p_' + username.toLowerCase().replace(/[^a-z0-9_.-]/g, '') + '@storeplatform.internal';
}
window.buildSyntheticStaffEmail = buildSyntheticStaffEmail;
window.buildSyntheticPartnerEmail = buildSyntheticPartnerEmail;
// 🔐 دخول مساعد/شريك حقيقي عبر Firebase Auth (بريد داخلي مبني على اسمه) - بيرجع
// الـ uid عند النجاح عشان app.js يدوّر بيه على صاحب الحساب داخل بيانات المتاجر.
function signInAuxAccount(email, password) {
    return window.firebaseAuth.signInWithEmailAndPassword(email, password).then(cred => cred.user.uid);
}
window.signInAuxAccount = signInAuxAccount;

// 🔔 استقبال إشعار والتاب مفتوح فعليًا (foreground) - بنوريه كـ toast جوه الصفحة
// نفسها بدل إشعار نظام تلقائي (أفضل تجربة وقت استخدام المتجر فعليًا)
if (__fcmMessaging) {
    __fcmMessaging.onMessage(payload => {
        let title = (payload.notification && payload.notification.title) || '🛒 طلب جديد!';
        let body = (payload.notification && payload.notification.body) || '';
        if (typeof showToast === 'function') showToast(title + (body ? (' - ' + body) : ''));
        else console.log('🔔', title, body);
    });
}

// ============================================================
// 🛒 الطلبات والتقييمات: مجموعات فرعية مستقلة تمامًا عن مستند المتجر الأساسي
// (stores/{storeId}/orders و stores/{storeId}/reviews). ده بيسمح لأي عميل زائر
// (حتى من غير تسجيل دخول خالص) إنه يبعت طلب أو تقييم مباشرة وبأمان (create فقط،
// من غير أي قدرة على تعديل أو حذف أي حاجة)، بينما بيانات المتجر الأساسية (منتجات،
// إعدادات، تصميم) تفضل محمية بالكامل لصاحب المتجر بس. الطلب بيوصل لقاعدة البيانات
// السحابية فورًا لحظة الضغط على "تأكيد الطلب"، بغض النظر تمامًا عن فتح واتساب أو
// نجاحه من عدمه - القناتين مستقلتين وبيشتغلوا مع بعض، مش واحدة بديلة عن التانية.
// ============================================================

// ⬆️ إرسال طلب مباشرة للسحابة لحظة الضغط على "تأكيد الطلب" - مستقل تمامًا عن حفظ
// بيانات المتجر العادي، وشغال حتى لو العميل مش مسجّل دخول خالص (زائر عادي).
// 🔐 معرّف المستند نفسه هو "كود التتبع" العشوائي غير القابل للتخمين (مش رقم الطلب
// التسلسلي) - ده اللي بيسمح للعميل يقرا طلبه هو بس لاحقًا (get لمستند معروف بالاسم)
// من غير ما يقدر يشوف أو "يعدّد" طلبات باقي العملاء (list ممنوعة لغير صاحب المتجر).
function pushOrderDirectly(storeKey, orderObj) {
    if (!__cloudEnabled || !__cloudDb) return Promise.resolve(false);
    if (!orderObj.trackingCode) return Promise.resolve(false);
    return __cloudDb.collection('stores').doc(storeKey).collection('orders').doc(orderObj.trackingCode).set(orderObj)
        .then(() => true)
        .catch(err => { console.warn('⚠️ تعذر إرسال الطلب للسحابة فورًا (هيتزامن لاحقًا من جهاز التاجر عادي):', err.message); return false; });
}
window.pushOrderDirectly = pushOrderDirectly;

// ============================================================
// 💾 نسخ احتياطي شامل من السحابة (Firestore) - إصدارين معزولين تمامًا عن بعض:
// 1) نسخة الأدمن: كل متاجر المنصة + طلباتها (للأدمن العام بس).
// 2) نسخة التاجر: متجره هو بس + طلباته هو بس (ممنوع يشوف أو يصدّر بيانات متجر غيره).
// ============================================================

// 👑 تصدير نسخة شاملة من كل المتاجر + طلباتهم من السحابة (أدمن فقط)
async function adminExportFullCloudBackup() {
    if (!__cloudEnabled || !__cloudDb) throw new Error('الاتصال بالسحابة غير متاح الآن.');
    let storesSnap = await __cloudDb.collection('stores').get();
    let result = {};
    for (let doc of storesSnap.docs) {
        let storeData = doc.data();
        let ordersSnap = await __cloudDb.collection('stores').doc(doc.id).collection('orders').get();
        storeData.__cloudOrders = ordersSnap.docs.map(o => ({ id: o.id, ...o.data() }));
        result[doc.id] = storeData;
    }
    return result;
}
window.adminExportFullCloudBackup = adminExportFullCloudBackup;

// 👑 استيراد نسخة شاملة: بيكتب كل متجر (وطلباته) زي ما هو في الملف فوق السحابة - لازم
// تأكيد صريح من الأدمن قبل الاستدعاء لأنه بيستبدل البيانات الحالية بالكامل.
async function adminImportFullCloudBackup(data) {
    if (!__cloudEnabled || !__cloudDb) throw new Error('الاتصال بالسحابة غير متاح الآن.');
    let storeIds = Object.keys(data);
    for (let storeId of storeIds) {
        let storeData = Object.assign({}, data[storeId]);
        let orders = storeData.__cloudOrders || [];
        delete storeData.__cloudOrders;
        await __cloudDb.collection('stores').doc(storeId).set(storeData, { merge: true });
        for (let o of orders) {
            let oid = o.id;
            let oData = Object.assign({}, o);
            delete oData.id;
            await __cloudDb.collection('stores').doc(storeId).collection('orders').doc(oid).set(oData, { merge: true });
        }
    }
    return storeIds.length;
}
window.adminImportFullCloudBackup = adminImportFullCloudBackup;

// 🏪 تصدير نسخة متجر واحد بس (منتجاته + طلباته + إعداداته) - التاجر نفسه بس، بمفتاح متجره
// هو بالتحديد (activeStoreKey بييجي من الجلسة الحالية، مش من أي مصدر تاني)، عشان يستحيل
// تاجر يصدّر بيانات متجر غيره حتى لو جرّب يتلاعب بالطلب.
async function merchantExportStoreCloudBackup(activeStoreKey) {
    if (!__cloudEnabled || !__cloudDb) throw new Error('الاتصال بالسحابة غير متاح الآن.');
    if (!activeStoreKey) throw new Error('لا يوجد متجر نشط حاليًا.');
    let doc = await __cloudDb.collection('stores').doc(activeStoreKey).get();
    if (!doc.exists) throw new Error('بيانات المتجر غير موجودة على السحابة.');
    let storeData = doc.data();
    let ordersSnap = await __cloudDb.collection('stores').doc(activeStoreKey).collection('orders').get();
    storeData.__cloudOrders = ordersSnap.docs.map(o => ({ id: o.id, ...o.data() }));
    storeData.__storeId = activeStoreKey;
    return storeData;
}
window.merchantExportStoreCloudBackup = merchantExportStoreCloudBackup;

// 🏪 استيراد نسخة متجر واحد بس، وبيتم تثبيت الكتابة دايمًا تحت activeStoreKey الحالي لجلسة
// التاجر بغض النظر عن أي __storeId مكتوب في الملف نفسه - ده أهم سطر أمان هنا: يمنع تاجر
// من رفع/استرجاع بيانات تحت اسم متجر غير متجره هو بالتحديد.
async function merchantImportStoreCloudBackup(activeStoreKey, data) {
    if (!__cloudEnabled || !__cloudDb) throw new Error('الاتصال بالسحابة غير متاح الآن.');
    if (!activeStoreKey) throw new Error('لا يوجد متجر نشط حاليًا.');
    let storeData = Object.assign({}, data);
    let orders = storeData.__cloudOrders || [];
    delete storeData.__cloudOrders;
    delete storeData.__storeId;
    await __cloudDb.collection('stores').doc(activeStoreKey).set(storeData, { merge: true });
    for (let o of orders) {
        let oid = o.id;
        let oData = Object.assign({}, o);
        delete oData.id;
        await __cloudDb.collection('stores').doc(activeStoreKey).collection('orders').doc(oid).set(oData, { merge: true });
    }
    return orders.length;
}
window.merchantImportStoreCloudBackup = merchantImportStoreCloudBackup;

// 🔍 قراءة طلب واحد بكود التتبع بتاعه بس (get لمستند معروف الاسم - مسموحة للجميع
// حسب قاعدة الأمان)، مش استعلام على كل المجموعة (اللي بقت مقفولة على صاحب المتجر بس).
function getOrderByTrackingCode(storeKey, trackingCode) {
    if (!__cloudEnabled || !__cloudDb) return Promise.resolve(null);
    try {
        return __cloudDb.collection('stores').doc(storeKey).collection('orders').doc(trackingCode).get()
            .then(doc => doc.exists ? doc.data() : null)
            .catch(err => { console.warn('⚠️ تعذر جلب حالة الطلب:', err.message); return null; });
    } catch (err) {
        console.warn('⚠️ خطأ فوري أثناء محاولة جلب حالة الطلب:', err.message);
        return Promise.resolve(null);
    }
}
window.getOrderByTrackingCode = getOrderByTrackingCode;

// 🗑️ لما التاجر يحذف طلب من لوحته، لازم نحذف نسخته السحابية كمان، عشان لو العميل
// رجع يتابع بنفس كود التتبع، يلاقي "الطلب غير موجود" بدل ما يفضل شايف بيانات قديمة.
function deleteOrderFromCloud(storeKey, trackingCode) {
    if (!__cloudEnabled || !__cloudDb || !trackingCode) return Promise.resolve(false);
    return __cloudDb.collection('stores').doc(storeKey).collection('orders').doc(trackingCode).delete()
        .then(() => true)
        .catch(err => { console.warn('⚠️ تعذر حذف الطلب من السحابة:', err.message); return false; });
}
window.deleteOrderFromCloud = deleteOrderFromCloud;

// 🔄 تحديث حالة طلب واحد بس في السحابة (merge جزئي، بدون إعادة رفع الطلب كله) - بيتصل
// فورًا لحظة ما التاجر يغيّر القائمة المنسدلة لحالة الطلب، عشان شاشة "تتبع الطلب" عند
// العميل (لو فاتحة ومستمعة لنفس المستند) تتحدث لحظيًا من غير ما يحتاج يضغط بحث تاني.
function pushOrderStatusUpdate(storeKey, trackingCode, statusData) {
    if (!__cloudEnabled || !__cloudDb || !trackingCode) return Promise.resolve(false);
    return __cloudDb.collection('stores').doc(storeKey).collection('orders').doc(trackingCode).set(statusData, { merge: true })
        .then(() => true)
        .catch(err => { console.warn('⚠️ تعذر تحديث حالة الطلب في السحابة:', err.message); return false; });
}
window.pushOrderStatusUpdate = pushOrderStatusUpdate;

// 👂 مراقبة لحظية (onSnapshot) لحالة طلب واحد بكود تتبعه - بترجع دالة إلغاء الاشتراك.
// بتُستخدم في شاشة "تتبع الطلب" عند العميل عشان يشوف تحديث الحالة فورًا من غير ما
// يحتاج يضغط بحث تاني أو يعمل تحديث للصفحة بنفسه.
function watchOrderStatusByTrackingCode(storeKey, trackingCode, onUpdate) {
    if (!__cloudEnabled || !__cloudDb || !trackingCode) return function(){};
    let unsub = __cloudDb.collection('stores').doc(storeKey).collection('orders').doc(trackingCode)
        .onSnapshot(function(doc) {
            if (doc.exists) onUpdate(doc.data());
        }, function(err) { console.warn('⚠️ خطأ في مراقبة حالة الطلب لحظيًا:', err.message); });
    return unsub;
}
window.watchOrderStatusByTrackingCode = watchOrderStatusByTrackingCode;

// ⬆️ نفس الفكرة بالظبط للتقييمات
function pushReviewDirectly(storeKey, productName, reviewObj) {
    if (!__cloudEnabled || !__cloudDb) return Promise.resolve(false);
    let docId = productName.replace(/[^a-zA-Z0-9_-]/g, '_') + '_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7);
    return __cloudDb.collection('stores').doc(storeKey).collection('reviews').doc(docId).set(
        Object.assign({ productName: productName }, reviewObj)
    ).then(() => true)
    .catch(err => { console.warn('⚠️ تعذر إرسال التقييم للسحابة فورًا:', err.message); return false; });
}
window.pushReviewDirectly = pushReviewDirectly;

// ⬇️ سحب الطلبات/التقييمات الجديدة اللي جايه من مجموعات فرعية ودمجها جوه بيانات
// المتجر المحلية (عشان كل كود العرض القديم - سجل الطلبات، تقييمات المنتج - يفضل
// شغال زي ما هو بالظبط من غير أي تعديل، وكأن البيانات دي "كانت موجودة من الأول").
function pullNewOrdersAndReviews(storeKey) {
    if (!__cloudEnabled || !__cloudDb) return Promise.resolve();
    let ordersPromise = __cloudDb.collection('stores').doc(storeKey).collection('orders').get().then(snap => {
        if (snap.empty) return;
        let stores = JSON.parse(__originalLocalStorageGetItem('allStores')) || {};
        let store = stores[storeKey];
        if (!store) return;
        store.orderHistory = store.orderHistory || [];
        let existingCodes = new Set(store.orderHistory.map(o => o.trackingCode || (String(o.orderNo) + '|' + o.timestamp)));
        let added = false;
        snap.forEach(doc => {
            let order = doc.data();
            let key = order.trackingCode || doc.id;
            if (!existingCodes.has(key)) {
                store.orderHistory.unshift(order);
                existingCodes.add(key);
                added = true;
            }
        });
        if (added) {
            store.orderHistory.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
            __originalLocalStorageSetItem('allStores', JSON.stringify(stores));
            // 🔁 نرجّع ندفع المستند الرئيسي المحدّث للسحابة كمان (مش بس محليًا)، عشان أي
            // عميل يعمل "تتبع الطلب" فورًا يلاقي الطلب ظاهر، حتى لو التاجر لسه ما عملش
            // أي حفظ تاني بنفسه من لوحته من بعد وصول الطلب.
            if (__cloudEnabled) __cloudPushStore(storeKey, store);
        }
    }).catch(err => console.warn('⚠️ تعذر سحب الطلبات الجديدة:', err.message));

    let reviewsPromise = __cloudDb.collection('stores').doc(storeKey).collection('reviews').get().then(snap => {
        if (snap.empty) return;
        let stores = JSON.parse(__originalLocalStorageGetItem('allStores')) || {};
        let store = stores[storeKey];
        if (!store || !store.products) return;
        let added = false;
        snap.forEach(doc => {
            let review = doc.data();
            let prod = store.products.find(p => p.name === review.productName);
            if (!prod) return;
            prod.reviews = prod.reviews || [];
            let exists = prod.reviews.some(r => r.date === review.date && r.author === review.author && r.comment === review.comment);
            if (!exists) {
                let clean = Object.assign({}, review);
                delete clean.productName;
                prod.reviews.push(clean);
                added = true;
            }
        });
        if (added) __originalLocalStorageSetItem('allStores', JSON.stringify(stores));
        if (added && __cloudEnabled) __cloudPushStore(storeKey, store);
    }).catch(err => console.warn('⚠️ تعذر سحب التقييمات الجديدة:', err.message));

    return Promise.all([ordersPromise, reviewsPromise]);
}
window.pullNewOrdersAndReviews = pullNewOrdersAndReviews;

// ============================================================
// 🔴 تنبيه لحظي داخل التطبيق: طالما لوحة التاجر مفتوحة فعليًا، بنراقب مجموعة
// الطلبات الفرعية لمتجره لحظيًا (onSnapshot)، وأي طلب جديد بيتضاف بيظهر فورًا
// كتنبيه + بيتدمج جوه سجل الطلبات المحلي تلقائيًا من غير ما التاجر يحدّث الصفحة.
// الإشعار "الحقيقي" (لما الموبايل قافل/التطبيق مقفول) محتاج Cloud Function
// منفصلة (راجع ملف cloud-functions-send-push/README في حزمة الملفات).
// ============================================================
let __orderWatchUnsubscribe = null;
let __orderWatchFirstSnapshot = true;
function watchStoreForNewOrders(storeKey) {
    if (!__cloudEnabled || !__cloudDb) return;
    if (__orderWatchUnsubscribe) { __orderWatchUnsubscribe(); __orderWatchUnsubscribe = null; }
    __orderWatchFirstSnapshot = true;
    // أول حاجة: نسحب أي طلبات/تقييمات وصلت وقت ما التاجر كان off-line أو مش فاتح لوحته
    pullNewOrdersAndReviews(storeKey).then(() => {
        if (typeof loadDashboard === 'function' && localStorage.getItem('currentActiveMerchant') === storeKey) {
            try { loadDashboard(); } catch (e) {}
        }
    });
    __orderWatchUnsubscribe = __cloudDb.collection('stores').doc(storeKey).collection('orders').onSnapshot(snapshot => {
        if (__orderWatchFirstSnapshot) { __orderWatchFirstSnapshot = false; return; } // نتجاهل الدفعة الأولى (طلبات قديمة بالفعل)
        // ⚠️ "إظهار التنبيه" و"الصوت" إعدادان مستقلان تمامًا عن بعض: التاجر ممكن يوقف
        // ظهور التوست المرئي ويسيب الصوت شغال (أو العكس)، فمفيش داعي نربطهم في متغير واحد.
        let __notifVisibleOff = localStorage.getItem('newOrderNotifDisabled') === 'true';
        snapshot.docChanges().forEach(change => {
            if (change.type === 'added') {
                if (!__notifVisibleOff && typeof showToast === 'function') showToast('🛒 طلب جديد وصل لمتجرك الآن!');
                if (typeof playNewOrderSound === 'function') { try { playNewOrderSound(); } catch (e) {} }
            }
        });
        pullNewOrdersAndReviews(storeKey).then(() => {
            if (typeof loadDashboard === 'function' && localStorage.getItem('currentActiveMerchant') === storeKey) {
                try { loadDashboard(); } catch (e) {}
            }
            // 🔔 نحدّث عداد الجرس فورًا حتى لو التاجر مش فاتح تبويب لوحته دلوقتي بالظبط
            if (typeof window.updateNewOrdersBadge === 'function') { try { window.updateNewOrdersBadge(); } catch (e) {} }
        });
    }, err => {
        // ⚠️ قبل كده لو المراقبة فشلت (مثلاً: قواعد أمان Firestore مارضيتش تسمح بالقراءة
        // لهذا الحساب) كانت تفشل بصمت تام من غير أي أثر - يبان للتاجر إن "التنبيهات مش
        // شغالة" من غير أي سبب واضح. دلوقتي أي فشل هنا يتسجل بوضوح في الكونسول.
        console.error('⚠️ فشلت مراقبة الطلبات الجديدة لحظيًا (تنبيه صوتي/فوري) لمتجر ' + storeKey + ':', err && err.message);
    });
}
function stopWatchingStoreOrders() {
    if (__orderWatchUnsubscribe) { __orderWatchUnsubscribe(); __orderWatchUnsubscribe = null; }
}
window.watchStoreForNewOrders = watchStoreForNewOrders;
window.stopWatchingStoreOrders = stopWatchingStoreOrders;

// ============================================================
// 💬 الشات المباشر (نص فقط، بدون صور عمدًا للسرعة) بين التاجر وفريق الدعم/الأدمن.
// نفس فلسفة الطلبات بالظبط: subcollection مستقلة تحت كل متجر (stores/{storeKey}/chatMessages)
// بترتيب زمني بسيط، + مستند إعدادات عام واحد (platformChatConfig/global) يراقبه الجميع
// لحظيًا (تفعيل/تعطيل كامل، أو رسالة غياب بدل السكوت).
// ⚠️ لو ظهر خطأ "صلاحيات" (permission-denied) هنا، لازم تتأكد إن قواعد أمان Firestore
// بتاعتك بتسمح بالقراءة/الإضافة لـ stores/{storeId}/chatMessages (نفس أسلوب orders/reviews
// الموجودين بالفعل)، ولـ platformChatConfig/global (قراءة للجميع، وكتابة من لوحة الأدمن).
// ============================================================

function sendChatMessage(storeKey, messageObj) {
    if (!__cloudEnabled || !__cloudDb || !storeKey) return Promise.resolve(false);
    return __cloudDb.collection('stores').doc(storeKey).collection('chatMessages').add(
        Object.assign({ ts: firebase.firestore.FieldValue.serverTimestamp() }, messageObj)
    ).then(() => true)
    .catch(err => { console.warn('⚠️ تعذر إرسال رسالة الشات:', err.message); return false; });
}
window.sendChatMessage = sendChatMessage;

// 👂 مراقبة لحظية لكل رسائل شات متجر واحد (التاجر نفسه، أو الأدمن وهو فاتح نافذة شات
// هذا المتجر بالتحديد) - بترجع دالة إلغاء الاشتراك.
function watchChatMessages(storeKey, onUpdate) {
    if (!__cloudEnabled || !__cloudDb || !storeKey) return function(){};
    return __cloudDb.collection('stores').doc(storeKey).collection('chatMessages')
        .orderBy('ts', 'asc')
        .onSnapshot(function(snap) {
            let msgs = snap.docs.map(d => Object.assign({ id: d.id }, d.data()));
            onUpdate(msgs);
        }, function(err) { console.warn('⚠️ خطأ في مراقبة رسائل الشات:', err.message); });
}
window.watchChatMessages = watchChatMessages;

// ✅ تعليم مجموعة رسائل كمقروءة لطرف معيّن (readByMerchant أو readByStaff)
function markChatMessagesRead(storeKey, msgIds, readField) {
    if (!__cloudEnabled || !__cloudDb || !storeKey || !msgIds || !msgIds.length) return Promise.resolve(false);
    let batch = __cloudDb.batch();
    msgIds.forEach(function(id) {
        let ref = __cloudDb.collection('stores').doc(storeKey).collection('chatMessages').doc(id);
        batch.update(ref, readField, true);
    });
    return batch.commit().then(() => true).catch(err => { console.warn('⚠️ تعذر تعليم رسائل الشات كمقروءة:', err.message); return false; });
}
window.markChatMessagesRead = markChatMessagesRead;

// 🔢 عدّ الرسائل غير المقروءة لمتجر واحد مرة واحدة (بدون اشتراك دائم) - بتُستخدم في صندوق
// محادثات الأدمن (ممكن يكون عنده عشرات المتاجر، فمفيش داعي لاشتراك onSnapshot دائم لكل واحد).
function fetchChatUnreadCountOnce(storeKey, forStaffSide) {
    if (!__cloudEnabled || !__cloudDb || !storeKey) return Promise.resolve(0);
    return __cloudDb.collection('stores').doc(storeKey).collection('chatMessages').get().then(function(snap) {
        let count = 0;
        snap.forEach(function(doc) {
            let d = doc.data();
            if (forStaffSide) { if (d.senderType === 'merchant' && !d.readByStaff) count++; }
            else { if (d.senderType === 'staff' && !d.readByMerchant) count++; }
        });
        return count;
    }).catch(() => 0);
}
window.fetchChatUnreadCountOnce = fetchChatUnreadCountOnce;

// 📨 آخر رسالة في محادثة متجر معيّن (لعرض نبذة في صندوق محادثات الأدمن)
function fetchChatLastMessageOnce(storeKey) {
    if (!__cloudEnabled || !__cloudDb || !storeKey) return Promise.resolve(null);
    return __cloudDb.collection('stores').doc(storeKey).collection('chatMessages').orderBy('ts', 'desc').limit(1).get()
        .then(function(snap) { return snap.empty ? null : Object.assign({ id: snap.docs[0].id }, snap.docs[0].data()); })
        .catch(() => null);
}
window.fetchChatLastMessageOnce = fetchChatLastMessageOnce;

// ⚙️ إعدادات الشات العامة على مستوى المنصة كلها: تفعيل/تعطيل كامل، أو رسالة غياب بدل
// السكوت التام - مستند واحد يراقبه كل تاجر وكل الأدمن لحظيًا.
function watchPlatformChatConfig(onUpdate) {
    if (!__cloudEnabled || !__cloudDb) return function(){};
    return __cloudDb.collection('platformChatConfig').doc('global').onSnapshot(function(doc) {
        onUpdate(doc.exists ? doc.data() : { enabled: true, awayActive: false, awayMessage: '' });
    }, function(err) { console.warn('⚠️ خطأ في مراقبة إعدادات الشات العامة:', err.message); });
}
window.watchPlatformChatConfig = watchPlatformChatConfig;

function savePlatformChatConfig(configObj) {
    if (!__cloudEnabled || !__cloudDb) return Promise.resolve(false);
    return __cloudDb.collection('platformChatConfig').doc('global').set(configObj, { merge: true })
        .then(() => true).catch(err => { console.warn('⚠️ تعذر حفظ إعدادات الشات العامة:', err.message); return false; });
}
window.savePlatformChatConfig = savePlatformChatConfig;

// 🗑️ حذف رسالة شات واحدة فورًا من Firestore (بعد تأكيد من المستخدم في الواجهة)
// ⚠️ لازم قاعدة أمان Firestore تسمح بالحذف لمسار chatMessages (allow delete: if true)
// وإلا هيفشل بصمت ويرجع false مع تحذير واضح في الكونسول.
function deleteChatMessage(storeKey, msgId) {
    if (!__cloudEnabled || !__cloudDb || !storeKey || !msgId) return Promise.resolve(false);
    return __cloudDb.collection('stores').doc(storeKey).collection('chatMessages').doc(msgId).delete()
        .then(() => true)
        .catch(err => { console.warn('⚠️ تعذر حذف رسالة الشات (تأكد إن قاعدة أمان Firestore بتسمح بالحذف لـ chatMessages):', err.message); return false; });
}
window.deleteChatMessage = deleteChatMessage;

// 🧹 تنظيف الرسائل الأقدم من مدة احتفاظ معيّنة (بالأيام) لمتجر واحد - بيرجع عدد
// الرسائل المحذوفة. بيُستخدم زرار "تنظيف الآن" اليدوي، وكمان تلقائيًا كل ما الأدمن
// يفتح لوحة التحكم بالشات (عشان قاعدة البيانات تفضل سريعة وما تتكدسش).
function cleanupOldChatMessages(storeKey, retentionDays) {
    if (!__cloudEnabled || !__cloudDb || !storeKey || !retentionDays || retentionDays <= 0) return Promise.resolve(0);
    let cutoff = new Date(Date.now() - (retentionDays * 24 * 60 * 60 * 1000));
    let cutoffTs = firebase.firestore.Timestamp.fromDate(cutoff);
    return __cloudDb.collection('stores').doc(storeKey).collection('chatMessages')
        .where('ts', '<', cutoffTs).get()
        .then(function(snap) {
            if (snap.empty) return 0;
            let docs = snap.docs;
            let chunks = [];
            for (let i = 0; i < docs.length; i += 450) chunks.push(docs.slice(i, i + 450));
            return chunks.reduce(function(chain, chunk) {
                return chain.then(function(total) {
                    let batch = __cloudDb.batch();
                    chunk.forEach(function(d) { batch.delete(d.ref); });
                    return batch.commit().then(function() { return total + chunk.length; });
                });
            }, Promise.resolve(0));
        })
        .catch(function(err) { console.warn('⚠️ تعذر تنظيف محادثات متجر ' + storeKey + ' القديمة:', err.message); return 0; });
}
window.cleanupOldChatMessages = cleanupOldChatMessages;

// 🧹 تشغيل التنظيف على كذا متجر مرة واحدة (بترجع إجمالي عدد الرسائل المحذوفة) - بتُستخدم
// في زرار "تنظيف الآن" الجماعي، وكمان تلقائيًا عند فتح لوحة شات الأدمن.
function cleanupAllOldChatMessages(storeKeys, retentionDays) {
    if (!storeKeys || !storeKeys.length) return Promise.resolve(0);
    return Promise.all(storeKeys.map(k => cleanupOldChatMessages(k, retentionDays).catch(() => 0)))
        .then(function(counts) { return counts.reduce((a, b) => a + b, 0); });
}
window.cleanupAllOldChatMessages = cleanupAllOldChatMessages;

// ⭐ نظام تقييم الدعم: الدعم/الأدمن يطلب تقييم بعد ما يخلّص/يقفل محادثة (مستند واحد
// بيتراقب من التاجر لحظيًا)، والتاجر يبعت التقييم (1-5 نجوم + ملاحظة اختيارية).
function requestChatRating(storeKey, staffUsername, staffRole) {
    if (!__cloudEnabled || !__cloudDb || !storeKey) return Promise.resolve(false);
    return __cloudDb.collection('stores').doc(storeKey).collection('chatMeta').doc('ratingRequest').set({
        staffUsername: staffUsername || '',
        staffRole: staffRole || '',
        resolved: false,
        ts: firebase.firestore.FieldValue.serverTimestamp()
    }).then(() => true).catch(err => { console.warn('⚠️ تعذر طلب تقييم المحادثة:', err.message); return false; });
}
window.requestChatRating = requestChatRating;

function watchChatRatingRequest(storeKey, onUpdate) {
    if (!__cloudEnabled || !__cloudDb || !storeKey) return function(){};
    return __cloudDb.collection('stores').doc(storeKey).collection('chatMeta').doc('ratingRequest')
        .onSnapshot(function(doc) {
            let data = doc.exists ? doc.data() : null;
            onUpdate(data && !data.resolved ? data : null);
        }, function(err) { console.warn('⚠️ خطأ في مراقبة طلب تقييم المحادثة:', err.message); });
}
window.watchChatRatingRequest = watchChatRatingRequest;

function submitChatRating(storeKey, ratingObj) {
    if (!__cloudEnabled || !__cloudDb || !storeKey) return Promise.resolve(false);
    return __cloudDb.collection('stores').doc(storeKey).collection('chatRatings').add(
        Object.assign({ ts: firebase.firestore.FieldValue.serverTimestamp(), storeKey: storeKey }, ratingObj)
    ).then(function() {
        return __cloudDb.collection('stores').doc(storeKey).collection('chatMeta').doc('ratingRequest')
            .set({ resolved: true }, { merge: true });
    }).then(() => true).catch(err => { console.warn('⚠️ تعذر إرسال تقييم المحادثة:', err.message); return false; });
}
window.submitChatRating = submitChatRating;

// 📊 جلب كل تقييمات كل المتاجر مرة واحدة (استعلام collectionGroup بسيط من غير ترتيب
// حتى ما يحتجش Index خاص - الترتيب بيتم في الواجهة بعد الجلب).
function fetchAllChatRatingsOnce() {
    if (!__cloudEnabled || !__cloudDb) return Promise.resolve([]);
    return __cloudDb.collectionGroup('chatRatings').get().then(function(snap) {
        return snap.docs.map(function(d) {
            let storeKey = d.ref.parent.parent ? d.ref.parent.parent.id : '';
            return Object.assign({ id: d.id, storeKey: storeKey }, d.data());
        });
    }).catch(function(err) { console.warn('⚠️ تعذر جلب تقييمات الدعم:', err.message); return []; });
}
window.fetchAllChatRatingsOnce = fetchAllChatRatingsOnce;

// ============================================================================
// 👤 نظام حسابات المشترين (العملاء) داخل كل متجر - تسجيل/دخول/تعديل بيانات/
// تغيير كلمة سر/سجل طلبات، بالإضافة لدمج السلة تلقائيًا عند تسجيل الدخول.
// البيانات محفوظة في: stores/{storeKey}/buyers/{buyerId}
// مُعرّف الحساب (buyerId) هو رقم الهاتف بعد تطبيعه (أرقام فقط) - بسيط وفريد
// وبيسمح بالدخول المباشر بمستند معروف الاسم بدل استعلام (أسرع وأخف على القواعد).
// ============================================================================

// 📞 تطبيع رقم الهاتف: إزالة أي حرف غير رقمي، عشان "01012345678" و"0101 234 5678"
// يتعاملوا كنفس الحساب.
function normalizeBuyerPhone(phone) {
    return String(phone || '').replace(/[^\d]/g, '');
}
window.normalizeBuyerPhone = normalizeBuyerPhone;

// 🆔 معرّف المشترِي المرن: يقبل رقم هاتف أو بريد إلكتروني كوسيلة تسجيل/دخول - لو فيه
// "@" بنعتبره بريد (lowercase+trim)، وإلا بنطبّعه كرقم هاتف. كده المستخدم يقدر يختار
// اللي يريحه بدون ما نحتاج حقلين منفصلين إجباريين.
function resolveBuyerIdentifier(raw) {
    let s = String(raw || '').trim();
    if (!s) return null;
    if (s.includes('@')) return s.toLowerCase();
    let digits = normalizeBuyerPhone(s);
    return digits || null;
}
window.resolveBuyerIdentifier = resolveBuyerIdentifier;

// 🔐 تشفير كلمة السر بـ SHA-256 (Web Crypto API المتوفرة افتراضيًا في كل المتصفحات
// الحديثة) - مش بنخزن كلمة السر كنص صريح أبدًا، حتى لو حساب بسيط لعميل متجر.
async function hashBuyerPassword(password) {
    try {
        let enc = new TextEncoder().encode(String(password || ''));
        let hashBuffer = await crypto.subtle.digest('SHA-256', enc);
        return Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('');
    } catch (err) {
        console.warn('⚠️ تعذر تشفير كلمة السر:', err.message);
        return null;
    }
}
window.hashBuyerPassword = hashBuyerPassword;

// 📝 تسجيل حساب مشتري جديد داخل متجر معيّن - data.identifier ممكن يكون رقم هاتف أو
// بريد إلكتروني (resolveBuyerIdentifier بيحدد النوع تلقائيًا).
async function registerBuyerAccount(storeKey, data) {
    if (!__cloudEnabled || !__cloudDb) return { ok: false, error: 'offline' };
    let identifier = resolveBuyerIdentifier(data.identifier != null ? data.identifier : data.phone);
    if (!identifier) return { ok: false, error: 'invalid_identifier' };
    if (!data.password || String(data.password).length < 4) return { ok: false, error: 'weak_password' };
    try {
        let ref = __cloudDb.collection('stores').doc(storeKey).collection('buyers').doc(identifier);
        let existing = await ref.get();
        if (existing.exists) return { ok: false, error: 'already_exists' };
        let passwordHash = await hashBuyerPassword(data.password);
        if (!passwordHash) return { ok: false, error: 'hash_failed' };
        let isEmail = identifier.includes('@');
        let buyerDoc = {
            name: data.name || '',
            phone: isEmail ? '' : identifier,
            email: isEmail ? identifier : '',
            address: data.address || '',
            passwordHash: passwordHash,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            savedCart: [],
            orderTrackingCodes: []
        };
        await ref.set(buyerDoc);
        return { ok: true, buyerId: identifier, name: buyerDoc.name, phone: buyerDoc.phone, address: buyerDoc.address };
    } catch (err) {
        console.warn('⚠️ تعذر تسجيل حساب المشتري:', err.message);
        return { ok: false, error: 'network' };
    }
}
window.registerBuyerAccount = registerBuyerAccount;

// 🔑 تسجيل دخول مشتري بالهاتف أو البريد + كلمة السر
async function loginBuyerAccount(storeKey, identifierRaw, password) {
    if (!__cloudEnabled || !__cloudDb) return { ok: false, error: 'offline' };
    let identifier = resolveBuyerIdentifier(identifierRaw);
    if (!identifier) return { ok: false, error: 'invalid_identifier' };
    try {
        let ref = __cloudDb.collection('stores').doc(storeKey).collection('buyers').doc(identifier);
        let snap = await ref.get();
        if (!snap.exists) return { ok: false, error: 'not_found' };
        let buyer = snap.data();
        let passwordHash = await hashBuyerPassword(password);
        if (!passwordHash || passwordHash !== buyer.passwordHash) return { ok: false, error: 'wrong_password' };
        return { ok: true, buyerId: identifier, name: buyer.name || '', phone: buyer.phone || '', address: buyer.address || '', savedCart: buyer.savedCart || [] };
    } catch (err) {
        console.warn('⚠️ تعذر تسجيل دخول المشتري:', err.message);
        return { ok: false, error: 'network' };
    }
}
window.loginBuyerAccount = loginBuyerAccount;

// ✏️ تعديل بيانات المشتري (اسم/عنوان - ورقم الهاتف لو حابب يغيّره، لكن معرّف المستند
// بيفضل نفس الرقم القديم عشان نتجنب تعقيد نقل المستند - تغيير رقم الهاتف الفعلي كمعرّف
// دخول مش متاح حاليًا من هنا).
async function updateBuyerProfile(storeKey, buyerId, data) {
    if (!__cloudEnabled || !__cloudDb || !buyerId) return { ok: false, error: 'offline' };
    try {
        let ref = __cloudDb.collection('stores').doc(storeKey).collection('buyers').doc(buyerId);
        await ref.set({ name: data.name || '', address: data.address || '' }, { merge: true });
        return { ok: true };
    } catch (err) {
        console.warn('⚠️ تعذر تحديث بيانات المشتري:', err.message);
        return { ok: false, error: 'network' };
    }
}
window.updateBuyerProfile = updateBuyerProfile;

// 🔒 تغيير كلمة السر (بيتطلب كلمة السر القديمة للتأكيد)
async function changeBuyerPassword(storeKey, buyerId, oldPassword, newPassword) {
    if (!__cloudEnabled || !__cloudDb || !buyerId) return { ok: false, error: 'offline' };
    if (!newPassword || String(newPassword).length < 4) return { ok: false, error: 'weak_password' };
    try {
        let ref = __cloudDb.collection('stores').doc(storeKey).collection('buyers').doc(buyerId);
        let snap = await ref.get();
        if (!snap.exists) return { ok: false, error: 'not_found' };
        let buyer = snap.data();
        let oldHash = await hashBuyerPassword(oldPassword);
        if (!oldHash || oldHash !== buyer.passwordHash) return { ok: false, error: 'wrong_password' };
        let newHash = await hashBuyerPassword(newPassword);
        if (!newHash) return { ok: false, error: 'hash_failed' };
        await ref.set({ passwordHash: newHash }, { merge: true });
        return { ok: true };
    } catch (err) {
        console.warn('⚠️ تعذر تغيير كلمة سر المشتري:', err.message);
        return { ok: false, error: 'network' };
    }
}
window.changeBuyerPassword = changeBuyerPassword;

// 📦 جلب كل طلبات هذا المشتري في هذا المتجر. ملحوظة أمان مهمة: بدل ما نعمل استعلام
// (query/list) على كل مجموعة الطلبات (ده ممنوع على غير صاحب المتجر حسب قواعد الأمان
// الحالية، وبيكشف إمكانية عد/تصفح كل الطلبات)، بنحتفظ بقائمة "أكواد تتبع" الطلبات
// بتاعة كل مشتري جوه مستند حسابه نفسه (orderTrackingCodes)، وبعدين بنقرأ كل طلب
// بمستند معروف الاسم (get) - ده بالظبط نفس أسلوب "تتبع الطلب" الحالي، فمش محتاج أي
// تعديل إضافي على قواعد الأمان المنشورة.
async function fetchBuyerOrders(storeKey, buyerId) {
    if (!__cloudEnabled || !__cloudDb || !buyerId) return [];
    try {
        let buyerSnap = await __cloudDb.collection('stores').doc(storeKey).collection('buyers').doc(buyerId).get();
        if (!buyerSnap.exists) return [];
        let codes = buyerSnap.data().orderTrackingCodes || [];
        if (codes.length === 0) return [];
        let ordersRef = __cloudDb.collection('stores').doc(storeKey).collection('orders');
        let docs = await Promise.all(codes.map(code => ordersRef.doc(code).get().catch(() => null)));
        return docs.filter(d => d && d.exists).map(d => d.data()).sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
    } catch (err) {
        console.warn('⚠️ تعذر جلب طلبات المشتري:', err.message);
        return [];
    }
}
window.fetchBuyerOrders = fetchBuyerOrders;

// 🔗 بعد ما طلب جديد يتسجل بنجاح لمشتري مسجّل دخوله، بنضيف كود تتبعه لقائمة طلباته
// المحفوظة على حسابه (arrayUnion - آمن من التكرار ومن تضارب التحديثات المتزامنة).
function appendBuyerOrderTrackingCode(storeKey, buyerId, trackingCode) {
    if (!__cloudEnabled || !__cloudDb || !buyerId || !trackingCode) return Promise.resolve(false);
    return __cloudDb.collection('stores').doc(storeKey).collection('buyers').doc(buyerId)
        .set({ orderTrackingCodes: firebase.firestore.FieldValue.arrayUnion(trackingCode) }, { merge: true })
        .then(() => true)
        .catch(err => { console.warn('⚠️ تعذر ربط الطلب بحساب المشتري:', err.message); return false; });
}
window.appendBuyerOrderTrackingCode = appendBuyerOrderTrackingCode;

// 🛒 حفظ نسخة من سلة المشتري على حسابه (تُستخدم وقت تسجيل الخروج أو كحفظ دوري بسيط)
async function saveBuyerCart(storeKey, buyerId, cartItems) {
    if (!__cloudEnabled || !__cloudDb || !buyerId) return false;
    try {
        await __cloudDb.collection('stores').doc(storeKey).collection('buyers').doc(buyerId)
            .set({ savedCart: cartItems || [] }, { merge: true });
        return true;
    } catch (err) {
        console.warn('⚠️ تعذر حفظ سلة المشتري:', err.message);
        return false;
    }
}
window.saveBuyerCart = saveBuyerCart;

// 🔵 تسجيل دخول/إنشاء حساب فوري عن طريق جوجل (بدون كلمة سر - الهوية موثّقة من جوجل
// نفسه). معرّف المستند هنا هو البريد الإلكتروني (بعد تحويله لحروف صغيرة) بدل رقم
// الهاتف، عشان نفرّق بين النوعين من الحسابات جوه نفس المجموعة الفرعية.
async function loginOrRegisterBuyerWithGoogle(storeKey, email, name) {
    if (!__cloudEnabled || !__cloudDb) return { ok: false, error: 'offline' };
    let normEmail = String(email || '').trim().toLowerCase();
    if (!normEmail) return { ok: false, error: 'invalid_email' };
    try {
        let ref = __cloudDb.collection('stores').doc(storeKey).collection('buyers').doc(normEmail);
        let snap = await ref.get();
        if (snap.exists) {
            let buyer = snap.data();
            return { ok: true, buyerId: normEmail, name: buyer.name || name || '', phone: buyer.phone || '', address: buyer.address || '', savedCart: buyer.savedCart || [] };
        }
        let buyerDoc = {
            name: name || '',
            email: normEmail,
            phone: '',
            address: '',
            passwordHash: null,
            authProvider: 'google',
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            savedCart: [],
            orderTrackingCodes: []
        };
        await ref.set(buyerDoc);
        return { ok: true, buyerId: normEmail, name: buyerDoc.name, phone: '', address: '', savedCart: [] };
    } catch (err) {
        console.warn('⚠️ تعذر تسجيل الدخول بجوجل للمشتري:', err.message);
        return { ok: false, error: 'network' };
    }
}
window.loginOrRegisterBuyerWithGoogle = loginOrRegisterBuyerWithGoogle;

// 👥 جلب كل المشترين المسجلين في متجر معيّن - لصاحب المتجر فقط (list مقفولة في قواعد
// الأمان على غير المصرّح لهم - راجع authorizedUids). تُستخدم في لوحة "إدارة المشترين".
async function fetchAllStoreBuyers(storeKey) {
    if (!__cloudEnabled || !__cloudDb || !storeKey) return [];
    try {
        let snap = await __cloudDb.collection('stores').doc(storeKey).collection('buyers').get();
        return snap.docs.map(d => Object.assign({ buyerId: d.id }, d.data()));
    } catch (err) {
        console.warn('⚠️ تعذر جلب قائمة المشترين (تأكد إن قواعد الأمان بتسمح بـ list لصاحب المتجر):', err.message);
        return [];
    }
}
window.fetchAllStoreBuyers = fetchAllStoreBuyers;

// 🗑️ حذف حساب مشترٍ نهائيًا (من لوحة التاجر فقط)
function deleteBuyerAccount(storeKey, buyerId) {
    if (!__cloudEnabled || !__cloudDb || !storeKey || !buyerId) return Promise.resolve(false);
    return __cloudDb.collection('stores').doc(storeKey).collection('buyers').doc(buyerId).delete()
        .then(() => true)
        .catch(err => { console.warn('⚠️ تعذر حذف حساب المشتري:', err.message); return false; });
}
window.deleteBuyerAccount = deleteBuyerAccount;


// ============================================================
// 💬 شات بين المشترِي وصاحب المتجر (منفصل تمامًا عن شات التاجر/الدعم).
// كل مشترِي له "ثريد" خاص بيه تحت المتجر: stores/{storeKey}/buyerChats/{buyerId}
// ده نفسه مستند ملخص (آخر رسالة + عدادات غير مقروء) + subcollection "messages".
// ⚠️ زي باقي أجزاء المشروع، لازم قواعد أمان Firestore تسمح بالقراءة/الكتابة/الحذف
// على مسار stores/{storeId}/buyerChats/** (نفس أسلوب chatMessages الموجود بالفعل).
// ============================================================

function sendBuyerChatMessage(storeKey, buyerId, senderType, text, buyerName) {
    if (!__cloudEnabled || !__cloudDb || !storeKey || !buyerId || !text) return Promise.resolve(false);
    let threadRef = __cloudDb.collection('stores').doc(storeKey).collection('buyerChats').doc(buyerId);
    let msgData = {
        text: text,
        senderType: senderType, // 'buyer' أو 'merchant'
        ts: firebase.firestore.FieldValue.serverTimestamp(),
        readByMerchant: senderType === 'merchant',
        readByBuyer: senderType === 'buyer'
    };
    return threadRef.collection('messages').add(msgData).then(function() {
        return threadRef.set({
            buyerName: buyerName || '',
            lastMessage: text,
            lastSenderType: senderType,
            lastTs: firebase.firestore.FieldValue.serverTimestamp(),
            unreadByMerchant: firebase.firestore.FieldValue.increment(senderType === 'buyer' ? 1 : 0),
            unreadByBuyer: firebase.firestore.FieldValue.increment(senderType === 'merchant' ? 1 : 0)
        }, { merge: true });
    }).then(() => true)
    .catch(err => { console.warn('⚠️ تعذر إرسال رسالة شات المشترِي:', err.message); return false; });
}
window.sendBuyerChatMessage = sendBuyerChatMessage;

// 👂 مراقبة لحظية لرسائل ثريد مشترِي واحد (تُستخدم من المشترِي نفسه، أو من صاحب
// المتجر وهو فاتح محادثة هذا المشترِي بالذات).
function watchBuyerChatMessages(storeKey, buyerId, onUpdate) {
    if (!__cloudEnabled || !__cloudDb || !storeKey || !buyerId) return function(){};
    return __cloudDb.collection('stores').doc(storeKey).collection('buyerChats').doc(buyerId)
        .collection('messages').orderBy('ts', 'asc')
        .onSnapshot(function(snap) {
            onUpdate(snap.docs.map(d => Object.assign({ id: d.id }, d.data())));
        }, function(err) { console.warn('⚠️ خطأ في مراقبة رسائل شات المشترِي:', err.message); });
}
window.watchBuyerChatMessages = watchBuyerChatMessages;

// 👂 مراقبة لحظية لكل "ثريدات" المشترين في متجر معيّن مرتبة بآخر رسالة - لصاحب المتجر
// فقط، تُستخدم في قائمة "محادثات العملاء" بلوحة التاجر.
function watchAllBuyerChatThreads(storeKey, onUpdate) {
    if (!__cloudEnabled || !__cloudDb || !storeKey) return function(){};
    return __cloudDb.collection('stores').doc(storeKey).collection('buyerChats')
        .orderBy('lastTs', 'desc')
        .onSnapshot(function(snap) {
            onUpdate(snap.docs.map(d => Object.assign({ buyerId: d.id }, d.data())));
        }, function(err) { console.warn('⚠️ خطأ في مراقبة قائمة محادثات العملاء:', err.message); });
}
window.watchAllBuyerChatThreads = watchAllBuyerChatThreads;

// ✅ تعليم كل رسائل ثريد معيّن كمقروءة لطرف معيّن + تصفير عداده في مستند الملخص
function markBuyerChatThreadRead(storeKey, buyerId, readerType) {
    if (!__cloudEnabled || !__cloudDb || !storeKey || !buyerId) return Promise.resolve(false);
    let threadRef = __cloudDb.collection('stores').doc(storeKey).collection('buyerChats').doc(buyerId);
    let readField = readerType === 'merchant' ? 'readByMerchant' : 'readByBuyer';
    let unreadField = readerType === 'merchant' ? 'unreadByMerchant' : 'unreadByBuyer';
    return threadRef.collection('messages').where(readField, '==', false).get().then(function(snap) {
        if (snap.empty) return;
        let batch = __cloudDb.batch();
        snap.forEach(function(d) { batch.update(d.ref, readField, true); });
        return batch.commit();
    }).then(function() {
        let upd = {}; upd[unreadField] = 0;
        return threadRef.set(upd, { merge: true });
    }).then(() => true)
    .catch(err => { console.warn('⚠️ تعذر تعليم شات المشترِي كمقروء:', err.message); return false; });
}
window.markBuyerChatThreadRead = markBuyerChatThreadRead;

// 🗑️ حذف رسالة واحدة من شات مشترِي (متاح للطرفين حسب الواجهة)
function deleteBuyerChatMessage(storeKey, buyerId, msgId) {
    if (!__cloudEnabled || !__cloudDb || !storeKey || !buyerId || !msgId) return Promise.resolve(false);
    return __cloudDb.collection('stores').doc(storeKey).collection('buyerChats').doc(buyerId)
        .collection('messages').doc(msgId).delete()
        .then(() => true)
        .catch(err => { console.warn('⚠️ تعذر حذف رسالة شات المشترِي:', err.message); return false; });
}
window.deleteBuyerChatMessage = deleteBuyerChatMessage;
