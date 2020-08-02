const cacheName = 'v1';

const cacheAssets = [
  'index.html',
  '/js/bundle.js'
];

// Call Install Event
self.addEventListener('install', e => {
  console.log('Service Worker: Installed');

  e.waitUntil(
    caches
      .open(cacheName)
      .then(cache => {
        console.log('Service Worker: Caching Files');
        cache.addAll(cacheAssets);
      })
      .then(() => self.skipWaiting())
  );
});


// Call Fetch Event
self.addEventListener('fetch', e => {
  console.log('Service Worker: Fetching');
  
});
