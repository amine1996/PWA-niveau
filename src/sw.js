importScripts('/js/workbox/workbox-sw.js');

if (workbox) 
{
  workbox.setConfig({
    modulePathPrefix: '/js/workbox-v3.0.1/'
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