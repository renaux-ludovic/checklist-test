const CACHE_NAME = "my-cache";

const urlsToCache = ["/checklist-test/"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
self.addEventListener("appinstalled", (event) => {
  event.waitUntil(
    clients.matchAll().then((windowClients) => {
      for (let client of windowClients) {
        client.navigate("/checklist-test");
      }
    })
  );
});
