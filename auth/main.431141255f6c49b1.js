var e,t,r,a,n,o,u,f,i,l,d,c,s,h,p,m,v,b,g,y={7502:(e,t,r)=>{Promise.all([r.e(558),r.e(747),r.e(619),r.e(607),r.e(135),r.e(522),r.e(453)]).then(r.bind(r,5453))}},P={};function k(e){var t=P[e];if(void 0!==t)return t.exports;var r=P[e]={exports:{}};return y[e](r,r.exports,k),r.exports}k.m=y,k.c=P,k.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return k.d(t,{a:t}),t},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,k.t=function(r,a){if(1&a&&(r=this(r)),8&a)return r;if("object"==typeof r&&r){if(4&a&&r.__esModule)return r;if(16&a&&"function"==typeof r.then)return r}var n=Object.create(null);k.r(n);var o={};e=e||[null,t({}),t([]),t(t)];for(var u=2&a&&r;"object"==typeof u&&!~e.indexOf(u);u=t(u))Object.getOwnPropertyNames(u).forEach((e=>o[e]=()=>r[e]));return o.default=()=>r,k.d(n,o),n},k.d=(e,t)=>{for(var r in t)k.o(t,r)&&!k.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},k.f={},k.e=e=>Promise.all(Object.keys(k.f).reduce(((t,r)=>(k.f[r](e,t),t)),[])),k.u=e=>e+"."+{135:"853a272da0c3f813",136:"34a6f800f2ea5922",141:"6d095f16721cd3a9",196:"00a5081bfa66ee71",316:"77c36f11130c6e9e",352:"955bd2a4d86639d0",405:"8cfedbc0ce6c563e",453:"9780fe4fabf86ecd",522:"af71abc786eea86a",558:"71aea88446b4d423",591:"85201d7dd790308a",607:"e4a08ae4d7364677",609:"c9bfec1582383efa",619:"e6143d347b935656",747:"2e055f70547c2aff",784:"0c55864eb53cefd1",891:"2ecd181f714f0b21",925:"f0fa782a993dd456"}[e]+".js",k.miniCssF=e=>{},k.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),k.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r={},a="auth:",k.l=(e,t,n,o)=>{if(r[e])r[e].push(t);else{var u,f;if(void 0!==n)for(var i=document.getElementsByTagName("script"),l=0;l<i.length;l++){var d=i[l];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==a+n){u=d;break}}u||(f=!0,(u=document.createElement("script")).type="module",u.charset="utf-8",u.timeout=120,k.nc&&u.setAttribute("nonce",k.nc),u.setAttribute("data-webpack",a+n),u.src=e),r[e]=[t];var c=(t,a)=>{u.onerror=u.onload=null,clearTimeout(s);var n=r[e];if(delete r[e],u.parentNode&&u.parentNode.removeChild(u),n&&n.forEach((e=>e(a))),t)return t(a)},s=setTimeout(c.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=c.bind(null,u.onerror),u.onload=c.bind(null,u.onload),f&&document.head.appendChild(u)}},k.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{k.S={};var e={},t={};k.I=(r,a)=>{a||(a=[]);var n=t[r];if(n||(n=t[r]={}),!(a.indexOf(n)>=0)){if(a.push(n),e[r])return e[r];k.o(k.S,r)||(k.S[r]={});var o=k.S[r],u="auth",f=(e,t,r,a)=>{var n=o[e]=o[e]||{},f=n[t];(!f||!f.loaded&&(!a!=!f.eager?a:u>f.from))&&(n[t]={get:r,from:u,eager:!!a})},i=[];return"default"===r&&(f("@ldk/feature/auth","0.0.1",(()=>Promise.all([k.e(925),k.e(619),k.e(607),k.e(136)]).then((()=>()=>k(4136))))),f("@ldk/ui/toast","0.0.1",(()=>Promise.all([k.e(558),k.e(891),k.e(619),k.e(135),k.e(352)]).then((()=>()=>k(196))))),f("@tanstack/react-query","4.29.19",(()=>Promise.all([k.e(609),k.e(619)]).then((()=>()=>k(8609))))),f("react-dom","18.2.0",(()=>Promise.all([k.e(316),k.e(619)]).then((()=>()=>k(8316))))),f("react-i18next","13.0.2",(()=>Promise.all([k.e(141),k.e(619)]).then((()=>()=>k(1141))))),f("react-router-dom","6.11.2",(()=>Promise.all([k.e(591),k.e(619)]).then((()=>()=>k(6591))))),f("react","18.2.0",(()=>k.e(784).then((()=>()=>k(2784)))))),e[r]=i.length?Promise.all(i).then((()=>e[r]=1)):1}}})(),(()=>{var e;if("string"==typeof import.meta.url&&(e=import.meta.url),!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),k.p=e})(),n=e=>{var t=e=>e.split(".").map((e=>+e==e?+e:e)),r=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),a=r[1]?t(r[1]):[];return r[2]&&(a.length++,a.push.apply(a,t(r[2]))),r[3]&&(a.push([]),a.push.apply(a,t(r[3]))),a},o=(e,t)=>{e=n(e),t=n(t);for(var r=0;;){if(r>=e.length)return r<t.length&&"u"!=(typeof t[r])[0];var a=e[r],o=(typeof a)[0];if(r>=t.length)return"u"==o;var u=t[r],f=(typeof u)[0];if(o!=f)return"o"==o&&"n"==f||"s"==f||"u"==o;if("o"!=o&&"u"!=o&&a!=u)return a<u;r++}},u=e=>{var t=e[0],r="";if(1===e.length)return"*";if(t+.5){r+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";for(var a=1,n=1;n<e.length;n++)a--,r+="u"==(typeof(f=e[n]))[0]?"-":(a>0?".":"")+(a=2,f);return r}var o=[];for(n=1;n<e.length;n++){var f=e[n];o.push(0===f?"not("+i()+")":1===f?"("+i()+" || "+i()+")":2===f?o.pop()+" "+o.pop():u(f))}return i();function i(){return o.pop().replace(/^\((.+)\)$/,"$1")}},f=(e,t)=>{if(0 in e){t=n(t);var r=e[0],a=r<0;a&&(r=-r-1);for(var o=0,u=1,i=!0;;u++,o++){var l,d,c=u<e.length?(typeof e[u])[0]:"";if(o>=t.length||"o"==(d=(typeof(l=t[o]))[0]))return!i||("u"==c?u>r&&!a:""==c!=a);if("u"==d){if(!i||"u"!=c)return!1}else if(i)if(c==d)if(u<=r){if(l!=e[u])return!1}else{if(a?l>e[u]:l<e[u])return!1;l!=e[u]&&(i=!1)}else if("s"!=c&&"n"!=c){if(a||u<=r)return!1;i=!1,u--}else{if(u<=r||d<c!=a)return!1;i=!1}else"s"!=c&&"n"!=c&&(i=!1,u--)}}var s=[],h=s.pop.bind(s);for(o=1;o<e.length;o++){var p=e[o];s.push(1==p?h()|h():2==p?h()&h():p?f(p,t):!h())}return!!h()},i=(e,t)=>{var r=e[t];return(t=Object.keys(r).reduce(((e,t)=>!e||o(e,t)?t:e),0))&&r[t]},l=(e,t)=>{var r=e[t];return Object.keys(r).reduce(((e,t)=>!e||!r[e].loaded&&o(e,t)?t:e),0)},d=(e,t,r,a)=>"Unsatisfied version "+r+" from "+(r&&e[t][r].from)+" of shared singleton module "+t+" (required "+u(a)+")",c=(e,t,r,a)=>{var n=l(e,r);if(!f(a,n))throw new Error(d(e,r,n,a));return s(e[r][n])},s=e=>(e.loaded=1,e.get()),p=(h=e=>function(t,r,a,n){var o=k.I(t);return o&&o.then?o.then(e.bind(e,t,k.S[t],r,a,n)):e(t,k.S[t],r,a,n)})(((e,t,r,a)=>t&&k.o(t,r)?s(i(t,r)):a())),m=h(((e,t,r,a,n)=>t&&k.o(t,r)?c(t,0,r,a):n())),v={},b={9619:()=>m("default","react",[4,18,2,0],(()=>k.e(784).then((()=>()=>k(2784))))),607:()=>m("default","react-router-dom",[4,6,11,2],(()=>k.e(591).then((()=>()=>k(6591))))),1135:()=>m("default","react-dom",[4,18,2,0],(()=>k.e(316).then((()=>()=>k(8316))))),2318:()=>m("default","@tanstack/react-query",[1,4,29,19],(()=>k.e(609).then((()=>()=>k(8609))))),4155:()=>m("default","react-i18next",[1,13,0,2],(()=>k.e(141).then((()=>()=>k(1141))))),6068:()=>p("default","@ldk/ui/toast",(()=>Promise.all([k.e(891),k.e(196)]).then((()=>()=>k(196))))),8911:()=>p("default","@ldk/feature/auth",(()=>Promise.all([k.e(925),k.e(405)]).then((()=>()=>k(4136)))))},g={135:[1135],522:[2318,4155,6068,8911],607:[607],619:[9619]},k.f.consumes=(e,t)=>{k.o(g,e)&&g[e].forEach((e=>{if(k.o(v,e))return t.push(v[e]);var r=t=>{v[e]=0,k.m[e]=r=>{delete k.c[e],r.exports=t()}},a=t=>{delete v[e],k.m[e]=r=>{throw delete k.c[e],t}};try{var n=b[e]();n.then?t.push(v[e]=n.then(r).catch(a)):r(n)}catch(e){a(e)}}))},(()=>{var e={179:0};k.f.j=(t,r)=>{var a=k.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else if(/^(135|607|619)$/.test(t))e[t]=0;else{var n=new Promise(((r,n)=>a=e[t]=[r,n]));r.push(a[2]=n);var o=k.p+k.u(t),u=new Error;k.l(o,(r=>{if(k.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var n=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",u.name="ChunkLoadError",u.type=n,u.request=o,a[1](u)}}),"chunk-"+t,t)}};var t=(t,r)=>{var a,n,[o,u,f]=r,i=0;if(o.some((t=>0!==e[t]))){for(a in u)k.o(u,a)&&(k.m[a]=u[a]);f&&f(k)}for(t&&t(r);i<o.length;i++)n=o[i],k.o(e,n)&&e[n]&&e[n][0](),e[n]=0},r=self.webpackChunkauth=self.webpackChunkauth||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),k.nc=void 0,k(7502);