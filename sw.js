// ============================================================
// 🚀 Service Worker: تخزين مؤقت (Cache) للملف الرئيسي والموارد الثابتة
// عشان الفتح التالي للمتجر يكون فوري من الكاش المحلي (زي تيليجرام/واتساب)
// حتى لو النت بطيء أو مقطوع مؤقتًا، بدل ما يعيد تحميل كل حاجة من الصفر.
// ============================================================
const CACHE_NAME = 'store-platform-cache-v7';
const CORE_ASSETS = [
  './',
  './index.html',
  './manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_ASSETS)).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// استراتيجية "الشبكة أولاً، والكاش احتياطي": يجرب ياخد أحدث نسخة من النت،
// ولو النت مقطوع أو بطيء جدًا يرجع فورًا للنسخة المحفوظة بدل ما يعلّق الصفحة.
self.addEventListener('fetch', (event) => {
  if(event.request.method !== 'GET') return;
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        let clone = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone)).catch(() => {});
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});

// ============================================================
// 🔔 إشعارات Push في الخلفية (لما المتجر مقفول أو التاب مش مفتوح): بنحمّل
// مكتبة Firebase Messaging جوه الـ Service Worker نفسه هنا، عشان أي إشعار
// يوصل حتى لو التاجر مش فاتح الصفحة دلوقتي. المفاتيح هنا عامة وآمنة الظهور
// (زي أي مشروع Firebase على الويب، مش سر).
// ============================================================
try {
  importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
  importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

  firebase.initializeApp({
    apiKey: "AIzaSyDDMBCPb5yKdlFpkNis6btsx7qDwUHvpU4",
    authDomain: "platform-stores-49c14.firebaseapp.com",
    projectId: "platform-stores-49c14",
    storageBucket: "platform-stores-49c14.firebasestorage.app",
    messagingSenderId: "246895081561",
    appId: "1:246895081561:web:01560b80e2296b3f289948"
  });

  const messaging = firebase.messaging();
  messaging.onBackgroundMessage((payload) => {
    let title = (payload.notification && payload.notification.title) || '🛒 طلب جديد!';
    let body = (payload.notification && payload.notification.body) || 'وصلك طلب جديد في متجرك.';
    self.registration.showNotification(title, {
      body: body,
      icon: './manifest.json',
      badge: './manifest.json',
      data: payload.data || {}
    });
  });
} catch (e) {
  // لو حصل خطأ في تحميل Firebase Messaging (مثلاً مفيش نت وقت أول تحميل)، الكاش
  // العادي بتاع الصفحة يفضل شغال عادي من غيرها، من غير ما يأثر على باقي الـ SW
}

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.matchAll({ type: 'window' }).then((clientList) => {
      for (const client of clientList) {
        if ('focus' in client) return client.focus();
      }
      if (clients.openWindow) return clients.openWindow('./');
    })
  );
});
