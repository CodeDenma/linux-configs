'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "0ccd19026aed41c079443e57bc0df3f6",
"manifest.json": "32f19af935e215dde842c5be9f214676",
"images/icons/pieces.png": "657e600ee74b13ca0f35911d40479939",
"images/icons/icon96.png": "a07d4c89cb5790405efa3db96a9e85ac",
"images/icons/link.png": "01a1691b35df43bd0db4caf871108d14",
"images/icons/grey_logo.png": "f6214c77be0a8cc9c882fb1cf32272f8",
"images/icons/icon32.png": "da0ba3a91c8825c1967d3a872a622f2d",
"images/icons/icon48.png": "b03e8b24daf32f1cb8c9cfff38ba6f68",
"images/icons/icon16.png": "ecdc92c76a9135fc0e29478b0efe2504",
"images/icons/icon128.png": "5a437311d319ecba47edc09098f68d0f",
"images/icons/bulb.png": "87f0465c2762b89e1ed33561f8947303",
"images/sideimage.jpg": "6f9696a03a42ac11a059334d31f8c901",
"images/rightclick.png": "7bdd554dfa1e09bc000a63b0ad3fc1b2",
"content.js": "ccd43f4a483c619e8b214635f2d8cee0",
"background.js": "af301bd19cc9f7ab809d912650930feb",
"assets/shaders/ink_sparkle.frag": "941bb03e508e6832dc7e1bd98b54ab44",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/web/images/icons/pieces.png": "657e600ee74b13ca0f35911d40479939",
"assets/web/images/icons/icon96.png": "a07d4c89cb5790405efa3db96a9e85ac",
"assets/web/images/icons/link.png": "01a1691b35df43bd0db4caf871108d14",
"assets/web/images/icons/grey_logo.png": "f6214c77be0a8cc9c882fb1cf32272f8",
"assets/web/images/icons/icon32.png": "da0ba3a91c8825c1967d3a872a622f2d",
"assets/web/images/icons/icon48.png": "b03e8b24daf32f1cb8c9cfff38ba6f68",
"assets/web/images/icons/icon16.png": "ecdc92c76a9135fc0e29478b0efe2504",
"assets/web/images/icons/icon128.png": "5a437311d319ecba47edc09098f68d0f",
"assets/web/images/icons/bulb.png": "87f0465c2762b89e1ed33561f8947303",
"assets/web/images/sideimage.jpg": "6f9696a03a42ac11a059334d31f8c901",
"assets/web/images/rightclick.png": "7bdd554dfa1e09bc000a63b0ad3fc1b2",
"assets/NOTICES": "84b43e3cd8416b47323050fa519e4c02",
"assets/AssetManifest.json": "21a5f3af19d30f259202efeb3e9be557",
"assets/assets/fonts/google_sans_mono/w600.ttf": "b138d575494dcbd79a10b2ce49b4bedc",
"assets/assets/fonts/google_sans_mono/w400.ttf": "f1e5626ef46f6596738fb82f34cc6f69",
"assets/assets/fonts/google_sans_mono/w500.ttf": "55aa3d401756ea5d93d39374d34e22d1",
"assets/assets/fonts/google_sans_mono/w700.ttf": "665205f5074b1349435f3074a02dfe3c",
"assets/FontManifest.json": "60c73ea01692f01171ea4f7182939813",
"assets/packages/runtime_client/assets/illustrations/coffee_illustration.png": "2f4eae962509fa62f51be73c06a7a623",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"pieces.css": "c3e4a8d82c19fd685906563bd440a7e1",
"main.dart.js": "507bce6720ac2386fbb11000ac406627",
"main.js": "a3843b4308acacad1fee72dbe5452c31",
"index.html": "9a6868999272214117336e7baa3088bf",
"/": "9a6868999272214117336e7baa3088bf",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
