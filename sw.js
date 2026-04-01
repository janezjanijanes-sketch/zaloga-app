self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('zaloga-cache').then(cache => {
      return cache.addAll([
        '/',
        '/zaloga-app/',
        '/zaloga-app/index.html'
      ]);
    })
  );
});
