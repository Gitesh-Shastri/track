console.log('Service Worker Started');

const cache_files = [ 'index.html', '/js/bundle.js' ];

caches
	.open('v1')
	.then((cache) => {
		console.log('Service Worker Caching Files');
		cache.addAll(cache_files);
	});
