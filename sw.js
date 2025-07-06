const CACHE_NAME = 'artistic-home-designs-v1';
const urlsToCache = [
    '/',
    '/css/modern-style.css',
    '/js/modern-script.js',
    '/images/09-PNG-image-e1728376877246.png',
    '/images/09-20241008_074715761_iOS.jpg',
    '/images/09-20241008_074732697_iOS.jpg',
    '/images/09-20241008_074747811_iOS.jpg',
    '/favicons/09-PNG-image-e1728376877246-150x150.png',
    'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;500;600;700&display=swap',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
    'https://unpkg.com/aos@2.3.1/dist/aos.css'
];

// Install event
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

// Fetch event
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Return cached version or fetch from network
                return response || fetch(event.request);
            })
    );
});

// Activate event
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
