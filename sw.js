if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let t={};const l=e=>n(e,o),f={module:{uri:o},exports:t,require:l};i[o]=Promise.all(s.map((e=>f[e]||l(e)))).then((e=>(r(...e),t)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-BS6N39Fk.css",revision:null},{url:"assets/index-DHXn50mJ.js",revision:null},{url:"index.html",revision:"769f05494b2159863a32718ec03924f2"},{url:"registerSW.js",revision:"cc3d0f5882bcfb8992fdb2ec5d54e115"},{url:"logo_azul.png",revision:"d7fdf08387a7e87a1e6effa99d875912"},{url:"maskable-icon-512x512.png",revision:"78d0372eb06c2384cb6ae41651b02c69"},{url:"manifest.webmanifest",revision:"780641cb7ab7d13d384a05af0f2f8bbf"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
