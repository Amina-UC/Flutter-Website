'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "b7a3ae48b5e238af15d4ec4afacfbf1b",
".git/config": "4404242418c0f966931e813d91a3fa52",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "7b22c77d8ec5c19675d5831fea1515a5",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1cd855a98beed611fd03ba1cb34c851d",
".git/logs/refs/heads/master": "1cd855a98beed611fd03ba1cb34c851d",
".git/logs/refs/remotes/origin/master": "aef6d65300909a0096c2336a7e5d7600",
".git/objects/00/1be390514e5943b4591deb5763d735e7fb4d41": "cf93c6d70555ba7aa5d3a5cd2f6967bc",
".git/objects/02/20533beccfb93832bca3c5c8ead108e92ecf7d": "eff640f1e50ca83b9e11084c54d5b770",
".git/objects/0b/91d8483977797127c71f4e9030600f96683261": "fcecb8884adc18a9045045aeb4545031",
".git/objects/13/539426c0989d4e0afbc8ac95b200a0d6cdfd43": "8712a25dc064a42127c3e62c16d586d4",
".git/objects/14/c0c4825944f7154cf3b473da55136f02649d0a": "ded6eb1b66d96628f0fda9c4bb780c35",
".git/objects/1b/cc64667b9bb2cf6ce7be70c2438d9b3dfc8c1e": "dffddd63c1a9479056a836d4c04f13f9",
".git/objects/1c/afe6738df582b0979c3af8a5977eaf2d45bde5": "1aa6d5ee12da51073d21f6a829baadd7",
".git/objects/1e/ea864d4ed3f9e085a20a7f5edfb4f718a70718": "cd5b589f5711f8e7073cd7b4a0a34745",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/a2b2631452e33870279044bb0fee98654f2882": "1f9269d2b77403c3570547b7a2efa72e",
".git/objects/2c/55954bb30762f3ee3bec86e9541e5d87f7186f": "c6a9b0f771b941703a13bf2fe0a18c5d",
".git/objects/3c/ee57c2f6f3f442d47e78bf964568f97ce4e439": "bf40d12a4dc7e0dc15bdc0b9f2ada3e9",
".git/objects/41/c037427f7447bbc08542a10343aca700f527a0": "1740a5928b935a4d2a9da1021934966e",
".git/objects/45/947d2a16cb056dc971a240fdf2bda737ffece1": "bb846d48f3573d71d290494ef55d2453",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/50/b41e73109168a39a6c255146551aedb39106ce": "62fed7bb1bda62ee7fa1161a03a34c0c",
".git/objects/56/7d6bfe91350dba736deada54747904088028b7": "82108a8edb92f7bad44028bfbddb2cb4",
".git/objects/63/19cd658659ea66e79af6e2adc12bdaf3b2421d": "3060ee9d6794464436658f9b056a88cc",
".git/objects/69/2b574763a028ef548fe42908eefeb9de97f80d": "cd0307535dee04265c464c2778c40ffd",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/98/ee0ec363ca1511f766a4f075ead5ce28952ff0": "9b3c78e784f3a995bd61875b7c70b1e7",
".git/objects/9d/07fbe5035afa525d37cd83c382f5f3659e3ca5": "033e613b59dd1e395c0c14c28665bc65",
".git/objects/9e/ae4784e2b5e949e5800fc9a0bd813c4ac25231": "8e9afd0ad54bbe8926f30631591bec6e",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/4595628d25436e792c2e8b6f8c555ebff0f766": "983253083ef0e102f637c3ebc0252e42",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/c2/04fa11f2d72e9306ff34a49fa3e651ff0ecd6e": "3c70fb0e2bee8392dac462edee8b566c",
".git/objects/c4/4265ac9a6b4d295e32957fc17dbcb7474d95df": "96717c249b6b4cabcf1e57d37238b500",
".git/objects/c6/76275a8629514dc7bbc9fba594d39118288dd3": "6b5ba0ddce9a15b7308b392c7da90d2d",
".git/objects/d9/caf70f45163e7dff227fb04310a80f4e4a9cc2": "8f1e2bd9274c0b836fb3b565976fbdb6",
".git/objects/df/2a29fd911e055cc66f4c728eab90618d1b5374": "2ef062c2c19bc5e92aec5de8040860c9",
".git/objects/e5/75c16c1ec3ad65e42ca1b854eab675f8a888e1": "2ccab230f44d076338cdc34b1430b4ed",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/69c226351ab6dcfe10de725f6c3ee61dccacd0": "6d8a14cd61245dc0d6cdbbfdea887021",
".git/objects/ee/ce7f934c8e6002452e672490fb3bf4dbe8627e": "cb9e0ddb16d9e9bd0eab111f9318df83",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f4/022f3c26751dbf2bd0a93f2eab9639d22a71cd": "6c942c61e5f089edf6dcf2f4d7351d28",
".git/objects/f9/94218ec44f3b04bcffdbe44bc9eee0a280f391": "6ad5f3389fc956a4f3e4948ae18a09e6",
".git/refs/heads/master": "012c132ffc24e9ed015b07eb38e5e079",
".git/refs/remotes/origin/master": "012c132ffc24e9ed015b07eb38e5e079",
"assets/AssetManifest.json": "e6ed8e3d3707b1a2ef46240d35374520",
"assets/assets/ami.jpg": "ddbf50320b6209232f10bf81dcd904de",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "286df8bbafa25f43d9f1ea1f994a8f1f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "c4bca20ba22e847700bd3e5758bb0bb9",
"/": "c4bca20ba22e847700bd3e5758bb0bb9",
"main.dart.js": "3b1e2cebe541398fb184be5447a3e96a",
"manifest.json": "f3ae36d2b6695d0166f0370f6a04299a",
"version.json": "5a46d25873c9578129442a8cbc54be97"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
  for (var resourceKey in Object.keys(RESOURCES)) {
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
