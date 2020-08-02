console.log('Service Worker Started');

const cache_files = [ 'index.html', '/js/bundle.js' ];

self.addEventListener('install', (e) => {
	console.log('Registered');
	e.waitUntil(
		caches
			.open('v1')
			.then((cache) => {
				console.log('Service Worker Caching Files');
				cache.addAll(cache_files);
			})
			.then(self.skipWaiting())
	);
});

self.addEventListener('fetch', (e) => {
	console.log('Service Worker Fetching Files');
	e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
