if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let o={};const t=e=>s(e,d),l={module:{uri:d},exports:o,require:t};i[d]=Promise.all(n.map((e=>l[e]||t(e)))).then((e=>(r(...e),o)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-khTzGIdp.css",revision:null},{url:"assets/index-ueNVgCVj.js",revision:null},{url:"index.html",revision:"21e0c4f1b4a26855c701a871e34db0c2"},{url:"info.js",revision:"7ed265d5b3354d16640dfa0cd3df4d8d"},{url:"registerSW.js",revision:"cc3d0f5882bcfb8992fdb2ec5d54e115"},{url:"logo_azul.png",revision:"d7fdf08387a7e87a1e6effa99d875912"},{url:"manifest.webmanifest",revision:"3d12e07c66d46c9d751be81b2b6b4de4"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
