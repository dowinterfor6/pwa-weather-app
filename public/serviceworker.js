const CACHE_NAME = "version-1";
const urlsToCache = ['index.html', 'offline.html'];

// Install service worker
const self = this;
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Open cache');

        return cache.addAll(urlsToCache);
      })
  )
});

// Listen for req
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request)
      .then(() => {
        return fetch(e.request) // Always try new request
          .catch(() => caches.match('offline.html')) // No internet connection
      })
  )
});

// Activate service worker
self.addEventListener('activate', (e) => {
  const cacheWhitelist = [];
  cacheWhitelist.push(CACHE_NAME);

  e.waitUntil(
    caches.keys()
      .then((cacheNames) => Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      ))
  )
});
