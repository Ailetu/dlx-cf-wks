addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  url.protocol = 'https';
  url.hostname = 'github.com';
  const request = new Request(url, event.request);
  event.respondWith(fetch(request));
})
