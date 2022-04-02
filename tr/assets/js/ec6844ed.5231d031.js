"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6975],{9613:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>m});var n=t(9496);function l(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){l(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,l=function(e,r){if(null==e)return{};var t,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(l[t]=e[t]);return l}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},d=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=c(t),m=l,y=s["".concat(p,".").concat(m)]||s[m]||u[m]||i;return t?n.createElement(y,a(a({ref:r},d),{},{components:t})):n.createElement(y,a({ref:r},d))}));function m(e,r){var t=arguments,l=r&&r.mdxType;if("string"==typeof e||l){var i=t.length,a=new Array(i);a[0]=s;var o={};for(var p in r)hasOwnProperty.call(r,p)&&(o[p]=r[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,a[1]=o;for(var c=2;c<i;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},5894:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=t(2182),l=t(9028),i=(t(9496),t(9613)),a=["components"],o={id:"why",title:"pnpm why"},p=void 0,c={unversionedId:"cli/why",id:"version-7.x/cli/why",title:"pnpm why",description:"Belirtilen pakete ba\u011fl\u0131 t\xfcm paketleri g\xf6sterir.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/version-7.x/cli/why.md",sourceDirName:"cli",slug:"/cli/why",permalink:"/tr/cli/why",editUrl:"https://crowdin.com/project/pnpm/tr",tags:[],version:"7.x",frontMatter:{id:"why",title:"pnpm why"},sidebar:"version-7.x/docs",previous:{title:"pnpm outdated",permalink:"/tr/cli/outdated"},next:{title:"pnpm run",permalink:"/tr/cli/run"}},d={},u=[{value:"Parametreler",id:"parametreler",level:2},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"--json",id:"--json",level:3},{value:"--long",id:"--long",level:3},{value:"--parseable",id:"--parseable",level:3},{value:"--global",id:"--global",level:3},{value:"--prod, -P",id:"--prod--p",level:3},{value:"--dev, -D",id:"--dev--d",level:3},{value:"--filter &lt;paket_se\xe7ici&gt;",id:"--filter-paket_se\xe7ici",level:3}],s={toc:u};function m(e){var r=e.components,t=(0,l.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Belirtilen pakete ba\u011fl\u0131 t\xfcm paketleri g\xf6sterir."),(0,i.kt)("h2",{id:"parametreler"},"Parametreler"),(0,i.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,i.kt)("p",null,"Bir \xe7al\u0131\u015fma alan\u0131 i\xe7inde y\xfcr\xfct\xfcld\xfc\u011f\xfcnde, alt dizinlerindeki ya da her \xe7al\u0131\u015fma alan\u0131 paketinde belirtilen paket i\xe7in ba\u011f\u0131ml\u0131l\u0131k a\u011fac\u0131n\u0131 g\xf6sterin."),(0,i.kt)("h3",{id:"--json"},"--json"),(0,i.kt)("p",null,"Bilgileri JSON format\u0131nda g\xf6ster."),(0,i.kt)("h3",{id:"--long"},"--long"),(0,i.kt)("p",null,"Ayr\u0131nt\u0131l\u0131 \xe7\u0131kt\u0131y\u0131 g\xf6ster."),(0,i.kt)("h3",{id:"--parseable"},"--parseable"),(0,i.kt)("p",null,"A\u011fa\xe7 g\xf6r\xfcn\xfcm\xfc yerine parse edilebilir \xe7\u0131kt\u0131y\u0131 g\xf6ster."),(0,i.kt)("h3",{id:"--global"},"--global"),(0,i.kt)("p",null,"Paketleri ge\xe7erli proje yerine genel kurulum dizininde listeleyin."),(0,i.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,i.kt)("p",null,"Sadece ",(0,i.kt)("inlineCode",{parentName:"p"},"ba\u011f\u0131ml\u0131l\u0131k(dependency)")," i\xe7indeki paketler i\xe7in ba\u011f\u0131ml\u0131l\u0131k a\u011fac\u0131n\u0131 g\xf6r\xfcnt\xfcleyin."),(0,i.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,i.kt)("p",null,"Sadece ",(0,i.kt)("inlineCode",{parentName:"p"},"geli\u015ftirme ba\u011f\u0131ml\u0131l\u0131\u011f\u0131(devDependencies)")," i\xe7indeki paketler i\xe7in ba\u011f\u0131ml\u0131l\u0131k a\u011fac\u0131n\u0131 g\xf6r\xfcnt\xfcleyin."),(0,i.kt)("h3",{id:"--filter-paket_se\xe7ici"},"--filter ","<","paket_se\xe7ici>"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/tr/filtering"},"Buradan daha fazla bilgiye ula\u015fabilirsin.")))}m.isMDXComponent=!0}}]);