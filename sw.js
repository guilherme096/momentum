if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let t={};const l=e=>n(e,o),f={module:{uri:o},exports:t,require:l};i[o]=Promise.all(s.map((e=>f[e]||l(e)))).then((e=>(r(...e),t)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-B1z236zl.css",revision:null},{url:"assets/index-C5Pqni4D.js",revision:null},{url:"index.html",revision:"660981f6fa54d4e25799f9630922550a"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"favicon.ico",revision:"f26274075f9e9610d54a72c9d204fb90"},{url:"logo_azul.png",revision:"d7fdf08387a7e87a1e6effa99d875912"},{url:"manifest.webmanifest",revision:"8b01f5706eadd7c91f0f0e0b42fc870c"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
