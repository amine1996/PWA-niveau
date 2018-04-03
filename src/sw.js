importScripts('/js/static/workbox/workbox-sw.js');

if (workbox) 
{
  workbox.setConfig({
    modulePathPrefix: '/js/static/workbox/'
  });

  workbox.routing.registerRoute(
    new RegExp('js/sketch.js'),
    workbox.strategies.networkFirst(
      {
        cacheName : 'sketch',
        plugins: [
          new workbox.expiration.Plugin({
            maxAgeSeconds: 0,
          }),
        ],
      }
    )
  );

  workbox.routing.registerRoute(
    new RegExp('index.html'),
    workbox.strategies.networkFirst(
      {
        cacheName : 'index',
        plugins: [
          new workbox.expiration.Plugin({
            maxAgeSeconds: 0,
          }),
        ],
      }
    )
  );

  workbox.precaching.precacheAndRoute([]);
} 