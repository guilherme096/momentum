if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let t={};const l=e=>s(e,o),f={module:{uri:o},exports:t,require:l};i[o]=Promise.all(n.map((e=>f[e]||l(e)))).then((e=>(r(...e),t)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-C195zo9u.css",revision:null},{url:"assets/index-CECTSfSh.js",revision:null},{url:"index.html",revision:"68c81934b1f1b4d015ff13c3c444ba98"},{url:"registerSW.js",revision:"cc3d0f5882bcfb8992fdb2ec5d54e115"},{url:"logo_azul.png",revision:"d7fdf08387a7e87a1e6effa99d875912"},{url:"maskable-icon-512x512.png",revision:"78d0372eb06c2384cb6ae41651b02c69"},{url:"manifest.webmanifest",revision:"780641cb7ab7d13d384a05af0f2f8bbf"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
