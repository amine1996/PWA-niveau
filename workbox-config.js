module.exports = {
  "globDirectory": "build/",
  "globPatterns": [
    "**/*.{png,html,json,css,js}"
  ],
  "swDest": "build/sw.js",
  "swSrc": "src/sw.js",
  "globIgnores": [
    "../workbox-config.js",
    "./images/pwa-*"
  ]
};