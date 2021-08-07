/* eslint-disable no-restricted-globals */
const FILES_TO_CACHE = [
    "./",
    "./index.html",
    "./manifest.json",
    "./logo192.png",
    "./logo512.png",
    "./favicon.ico",
    "./assets/images/blog.png",
    "./assets/images/crumbscapture.png",
    "./assets/images/note.png",
    "./assets/images/quizcapture.png",
    "./assets/images/saveyourcode-img.png",
    "./assets/images/self-photo-final-2.jpg",
    "./assets/images/tracker.png",
    "./assets/images/weathercapture.png",
    "./assets/images/webpage_capture.png",
    "./assets/images/placeholder-01.jfif",
    "./assets/other/Resume_Randy.pdf",
    "./static/js/bundle.js",
  ];
  
  const STATIC_CACHE = "static-cache-v1";
  const RUNTIME_CACHE = "runtime-cache";
  
  self.addEventListener("install", event => {
    event.waitUntil(
      caches
        .open(STATIC_CACHE)
        .then(cache => cache.addAll(FILES_TO_CACHE))
        .then(() => self.skipWaiting())
    );
  });
  
  // The activate handler takes care of cleaning up old caches.
  self.addEventListener("activate", event => {
    const currentCaches = [STATIC_CACHE, RUNTIME_CACHE];
    event.waitUntil(
      caches
        .keys()
        .then(cacheNames => {
          // return array of cache names that are old to delete
          return cacheNames.filter(
            cacheName => !currentCaches.includes(cacheName)
          );
        })
        .then(cachesToDelete => {
          return Promise.all(
            cachesToDelete.map(cacheToDelete => {
              return caches.delete(cacheToDelete);
            })
          );
        })
        .then(() => self.clients.claim())
    );
  });
  
  self.addEventListener("fetch", event => {
    console.log(event.request.url);
    // non GET requests are not cached and requests to other origins are not cached
  
    // use cache first for all other requests for performance
    event.respondWith(
      caches.match(event.request).then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }
  
        // request is not in cache. make network request and cache the response
        return caches.open(RUNTIME_CACHE).then(cache => {
          return fetch(event.request).then(response => {
            return cache.put(event.request, response.clone()).then(() => {
              return response;
            });
          });
        });
      })
    );
  });
