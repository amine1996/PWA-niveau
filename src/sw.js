importScripts('/js/workbox/workbox-sw.js');

if (workbox) 
{
  workbox.setConfig({
    modulePathPrefix: '/js/workbox/'
  });

  console.log('Yay! Workbox is loaded');

  workbox.precaching.precacheAndRoute([]);

  workbox.precaching.precacheAndRoute([
    {
        "url": "sw.js",
    },
  ])
} 
else 
{
  console.log('Boo! Workbox didn\'t load');
}