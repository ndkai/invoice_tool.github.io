'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "fb659ccb8765808248ffdf7549bb3d4b",
"version.json": "a06361c2c2d699cbe09cbed1902a4df7",
"index.html": "4d41a58deee8a35ab0aa82e246a1b6fe",
"/": "4d41a58deee8a35ab0aa82e246a1b6fe",
"main.dart.js": "5435a3dda74fd4f2756d8be35079cbe4",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "49b5815d7152ddb2f2094177cd96f09b",
".git/config": "c0aa043c5bfe8919f3aecd2fe3be40ae",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/6f/3094122121c9c417b6706aac518977a253ab22": "2587f57e4fe5db40e29e432afb2e3820",
".git/objects/9b/54ccb7c47966c57ada9ac4dd000b462e85d1a5": "921f72b6f3fe1da19d1108f588617b9a",
".git/objects/04/e2604696416aa5df26a0f4ffb54175bb19f3d8": "21952500afe6a1892d7b15f44e746bff",
".git/objects/6a/ceb14929cb474ed23e3e72044631992c640a06": "7b3d09583596cb35f65c86140d067ad9",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/35/40b3d4bc41c9af6850da56a6b487d4ff55682c": "160764bc7613b4c9102234d477ebe32d",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/df/dc631cc4edd5bea363bde79a246ffc3bd07108": "31c5c3b165d6a35ada8fc1cda80847fa",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/14ee184b6a95caee10e07988bbe0e19e136263": "4c771b4db97ba61a0b100c877c82d539",
".git/objects/f4/14ded7e8ac71fe2c3fb1f50ceb1f0eb2783896": "c3677410d42ec4a98841a67bd0374593",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/7537df3761fed27db0d350ec9e074d46874912": "0b856ec9577c2a1ace98ec84f435f36e",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/c8/718fd82164c7926412040a6857446c7ff32a5d": "0fc9955438c1a71f412011a6239dae55",
".git/objects/29/3abe92ed257e0cc8e2119bd92f10995fc0da37": "4d4d12b02c67f7eaddf722ba1061f2d6",
".git/objects/7c/45f99aeb3a56866039523fc5a0c4dc5fbcc43c": "37a907a88cd870407e7bfb1ae9ac46a0",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/73/f6ca6baa2a2fbca27ff787a9b954b621c2a0a7": "2f3082440644d8a95123fb419bc43171",
".git/objects/80/b1dd0eca604d537056ca89f143ca7c54e11c6e": "4258a56fe9b4e6916db41971fa0b9fd9",
".git/objects/7b/65aed3adf2fd6a3df67fef95eb9c56d507bbd1": "ad7b4ebdce69df22485677c3b683a9cd",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/177eb18630800b018d6ff38a4ba78850488e4b": "aeeb10144264a2fc9358f1c633fc5990",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/9a/703af853a495e82f75ad6b6a88967c53392b60": "2877394b81cdcc94cccb799fe0387c7f",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/54/b4ee5bf0b21dc6a51885257dbdd68dfa7e4160": "650cee1984ab4e60b04c93eec27231e2",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/06/9383d5cf5b05d2bff47bef1a74b079137386b7": "18695577207c5cb7b690ce225dda8cbd",
".git/objects/39/75f66fc3c217240fb61d980c3113077d8fe171": "eaf47b6074ce026e7e2858402edcccca",
".git/objects/55/a5ba76672fdf6d597c8db939ed636a14d48759": "dfab32e6efefe385805c4dc4fb7ff306",
".git/objects/0f/8e4f1b90a8dc293d50b6958d6aa23f8802266f": "e7d2abaeec59208889280ad0b6a492c3",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/a9/ade62281955191f0d3a972b36a4ce706617b2b": "a5a7545a31117688d9d730093138c8dd",
".git/objects/af/bf5a24eac9801cfacb1380b17750ec2b3add43": "f310667d90555bc6438e6e105d49d2bb",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/e1/aa576a8a720b9cf17acb3b403e94b321037827": "5a85908182bc60434cbd61d372e7c09a",
".git/objects/41/c4c4392f10de42e3e83b7870256498a6b1ba63": "6993bd3ddc94d54159684c05e8068fa0",
".git/objects/83/57c58aaad41c389e3dc1496968b220b6234768": "38a4ca117ce486778f631b65c0fa180f",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/24/d7e03ac3b560f6586bbba614f67f16f14c2b7b": "d1dd81f8cbec818571e838e490c79db9",
".git/objects/8c/63c21cdbafe08ff88f6470e4459664d6124aa7": "28a0dece2483ae6548c511d7c86ce49a",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/2e/ae28ad3740cb4de1632c887c0079d20c2c9cad": "14552f326df9e53dd93223cf1300a559",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9c3131012a1d45d8161e927f3a3e271a",
".git/logs/refs/heads/main": "9c3131012a1d45d8161e927f3a3e271a",
".git/logs/refs/remotes/origin/main": "759f14bb8260c9d97c9fa50f10d69032",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "2edc3adcc480a48dd9d1526582176176",
".git/refs/remotes/origin/main": "2edc3adcc480a48dd9d1526582176176",
".git/index": "8fbb2e77f795b5485fc9f2b9527766e8",
".git/COMMIT_EDITMSG": "58e3b26452d39a3b59fb382c0ba03bac",
"assets/AssetManifest.json": "7f9cdbc1ae901fedc64267ecef8ac4a7",
"assets/NOTICES": "d6b14f189fe3ca45ab530df26b38ec1e",
"assets/FontManifest.json": "36566366cde1a92faa9873206915521b",
"assets/AssetManifest.bin.json": "3a5e89bf9bd2a63411978fe9249dcc50",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/lucide_icons_flutter/assets/lucide.ttf": "9fa442d01f297bf1efda14eee82352c6",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w500.ttf": "25ef9a4fb04689db70098e6e581c4338",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w100.ttf": "42b9678b68cadf6f0e142045fd0b7327",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w300.ttf": "28ed992bea12531d0f4168d45965d504",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w400.ttf": "6b19cd69f6a3c95a02e3e49e6e19d207",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w600.ttf": "53999d2d356a94261e12b3391152c713",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w200.ttf": "ea43aa7c18fe3dac85cb587d7c12c0f7",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "41ebf66dd1456336541c1dc4ac486ec8",
"assets/fonts/MaterialIcons-Regular.otf": "e23979832c662e8d08038ab0292f160d",
"assets/assets/hoadon.html": "54e0b0b259443e34cf7998ba6a674e7d",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
