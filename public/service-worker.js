self.addEventListener("install", (event) => {
  self.skipWaiting();
  console.log("Service Worker installed");
});

self.addEventListener("activate", (event) => {
  self.clients.claim();
  console.log("Service Worker activated");
});

self.addEventListener("fetch", (event) => {
  // Only handle http(s) GET requests
  if (event.request.method === "GET" && event.request.url.startsWith("http")) {
    event.respondWith(
      fetch(event.request)
        .then(async (response) => {
          // If online, update cache
          return caches.open("v1").then((cache) => {
            cache.put(event.request, response.clone());
            return response;
          });
        })
        .catch(async () => {
          // If offline, try to serve from cache
          return caches.open("v1").then((cache) => cache.match(event.request));
        })
    );
  }
});
