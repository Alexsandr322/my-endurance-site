const CACHE_NAME = 'endurance-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/css/styles.css',
  '/js/scripts.min.js',
  '/images/hffar.webp',
  '/images/faeyf.webp'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request)
      .then(response => response || fetch(e.request))
  );
});
