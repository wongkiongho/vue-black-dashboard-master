if(!self.define){let i,n={};const e=(e,d)=>(e=new URL(e+".js",d).href,n[e]||new Promise((n=>{if("document"in self){const i=document.createElement("script");i.src=e,i.onload=n,document.head.appendChild(i)}else i=e,importScripts(e),n()})).then((()=>{let i=n[e];if(!i)throw new Error(`Module ${e} didn’t register its module`);return i})));self.define=(d,a)=>{const r=i||("document"in self?document.currentScript.src:"")||location.href;if(n[r])return;let s={};const l=i=>e(i,r),o={module:{uri:r},exports:s,require:l};n[r]=Promise.all(d.map((i=>o[i]||l(i)))).then((i=>(a(...i),s)))}}define(["./workbox-6567b62a"],(function(i){"use strict";i.setCacheNameDetails({prefix:"vue-black-dashboard"}),self.addEventListener("message",(i=>{i.data&&"SKIP_WAITING"===i.data.type&&self.skipWaiting()})),i.precacheAndRoute([{url:"/admin/apple-icon.png",revision:"82afbfaa2a64cebfd0077f73abe15659"},{url:"/admin/css/497.fd92dcbd.css",revision:null},{url:"/admin/css/app.36bd7047.css",revision:null},{url:"/admin/favicon.png",revision:"996d8248f580f8e26e6c45c67da9b5a6"},{url:"/admin/fonts/nucleo.1980fd62.eot",revision:null},{url:"/admin/fonts/nucleo.47dbbd6a.woff2",revision:null},{url:"/admin/fonts/nucleo.82def8cd.ttf",revision:null},{url:"/admin/fonts/nucleo.e3d17b30.woff",revision:null},{url:"/admin/img/anime3.png",revision:"3b91359dcf1cf96c8440a7532ac61dda"},{url:"/admin/img/anime6.png",revision:"2a5a031c63d290c6cd3803e21d8c3b5d"},{url:"/admin/img/apple-icon.png",revision:"d2caaad36a395104bd99f30487798d79"},{url:"/admin/img/bg5.jpg",revision:"9b0c49b657dd738a77a37e7dabcc0b5d"},{url:"/admin/img/default-avatar.png",revision:"d25412bcd9af1fb98017c8144a4e40d1"},{url:"/admin/img/emilyz.jpg",revision:"fadc3f3a4c94b151d8b8ed33456c2344"},{url:"/admin/img/favicon.png",revision:"4422794dfa779751326660ae681b082e"},{url:"/admin/img/img_3115.jpg",revision:"f220d1815d421bfa192ee352780ba194"},{url:"/admin/img/james.jpg",revision:"40fdb6e1e72e21ff904da682c46d0116"},{url:"/admin/img/mike.jpg",revision:"93f1328bd264f02aacef8b0c6b498445"},{url:"/admin/index.html",revision:"c453b0baee786129b56dad1209d220dd"},{url:"/admin/js/151.dd7c86bb.js",revision:null},{url:"/admin/js/497.7678a753.js",revision:null},{url:"/admin/js/888.6b291505.js",revision:null},{url:"/admin/js/977.436bf796.js",revision:null},{url:"/admin/js/app.e05dab94.js",revision:null},{url:"/admin/js/chunk-vendors.9e9d5f8b.js",revision:null},{url:"/admin/manifest.json",revision:"1a167cfd82a1a7480ea601fccc8d7e18"},{url:"/admin/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
