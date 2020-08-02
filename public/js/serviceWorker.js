
const isLocalhost = Boolean(
	window.location.hostname === 'localhost' ||
		window.location.hostname === '[::1]' ||
		window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
);

export function register() {
	if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
		const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
		if (publicUrl.origin !== window.location.origin) {
			return;
		}

		window.addEventListener('load', () => {
			const swUrl = `https://corona-tracker-gitesh.herokuapp.com/js/sw_cached_pages.js`;

			if (isLocalhost) {
				navigator.serviceWorker
			      .register('https://corona-tracker-gitesh.herokuapp.com/js/sw_cached_pages.js')
			      .then(reg => console.log('Service Worker: Registered (Pages)'))
			      .catch(err => console.log(`Service Worker: Error: ${err}`));
			} 
		});
	}
}
