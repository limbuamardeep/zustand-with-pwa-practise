const cacheName="v3";
const cacheAssets=[
    "App.tsx",
    "main.tsx",
    "Cart.tsx",
    "ProductList.tsx",
    "Products.ts",
    "cartStore.ts",
    "themeStore.ts",
    "userStore.ts",
    "index.css"
]
self.addEventListener('install',()=>{
    console.log("Service Worker installed");
    caches.open(cacheName).then(cache=>cache.addAll(cacheAssets))
})
self.addEventListener("activate",e=>{
    console.log("service worker: activated")
    e.waitUntil(
        // remove unwanted caches
        caches.keys().then(cacheNames=>{
            return Promise.all(
                cacheNames.map(cache=>{
                    if(cache!=cacheName){
                        console.log("service worker deleted")
                        return caches.delete(cache);
                    }
                })
            )
        })
    )
})
//call fetch event
self.addEventListener("fetch",e=>{
    console.log("service worker fetching");
    e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)))
})