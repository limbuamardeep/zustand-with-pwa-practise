const cacheName="v1";

self.addEventListener('install',()=>{
    console.log("Service Worker installed");})
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
    //attempt to fetch from internet
    e.respondWith(fetch(e.request).then(res=>{
        //make copy or clone
        const resCLone=res.clone();// make clone of response
        caches.open(cacheName).then(cache=>{
            cache.put(e.request, resCLone);//key pair value for example Request: /style.css Response: CSS file data
        })
        return res;// return original response back to be rendered

    }).catch(()=>caches.match(e.request).then(res=>res)))//if fetching from internet fails fetch from cache
})