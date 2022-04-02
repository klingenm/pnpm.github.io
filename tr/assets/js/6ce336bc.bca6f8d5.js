"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5542],{9613:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>u});var n=t(9496);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=n.createContext({}),s=function(e){var a=n.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},m=function(e){var a=s(e.components);return n.createElement(d.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},k=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),k=s(t),u=i,c=k["".concat(d,".").concat(u)]||k[u]||p[u]||r;return t?n.createElement(c,l(l({ref:a},m),{},{components:t})):n.createElement(c,l({ref:a},m))}));function u(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=k;var o={};for(var d in a)hasOwnProperty.call(a,d)&&(o[d]=a[d]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},6884:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>m,contentTitle:()=>d,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=t(2182),i=t(9028),r=(t(9496),t(9613)),l=["components"],o={id:"motivation",title:"Motivasyon"},d=void 0,s={unversionedId:"motivation",id:"version-7.x/motivation",title:"Motivasyon",description:"Daha az disk t\xfcketimi ve a\u015f\u0131r\u0131 h\u0131zl\u0131 kurulum",source:"@site/i18n/tr/docusaurus-plugin-content-docs/version-7.x/motivation.md",sourceDirName:".",slug:"/motivation",permalink:"/tr/motivation",editUrl:"https://crowdin.com/project/pnpm/tr",tags:[],version:"7.x",frontMatter:{id:"motivation",title:"Motivasyon"},sidebar:"version-7.x/docs",next:{title:"Kurulum",permalink:"/tr/installation"}},m={},p=[{value:"Daha az disk t\xfcketimi ve a\u015f\u0131r\u0131 h\u0131zl\u0131 kurulum",id:"daha-az-disk-t\xfcketimi-ve-a\u015f\u0131r\u0131-h\u0131zl\u0131-kurulum",level:2},{value:"D\xfcz, klasik, &quot;hepsi bir arada&quot; node_modules dizin yap\u0131s\u0131ndan kurtulma",id:"d\xfcz-klasik-hepsi-bir-arada-node_modules-dizin-yap\u0131s\u0131ndan-kurtulma",level:2}],k={toc:p};function u(e){var a=e.components,o=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},k,o,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"daha-az-disk-t\xfcketimi-ve-a\u015f\u0131r\u0131-h\u0131zl\u0131-kurulum"},"Daha az disk t\xfcketimi ve a\u015f\u0131r\u0131 h\u0131zl\u0131 kurulum"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/HemSays/status/1434921646083563525/photo/1"},(0,r.kt)("img",{src:t(6985).Z,width:"2500",height:"1406"}))),(0,r.kt)("p",null,"Varsayal\u0131m ",(0,r.kt)("inlineCode",{parentName:"p"},"abc")," ad\u0131nda bir k\xfct\xfcphaneyi (dependency), 100 adet projende kullan\u0131yorsun. Yarn ve npm kullan\u0131rken, ",(0,r.kt)("inlineCode",{parentName:"p"},"abc")," ad\u0131ndaki k\xfct\xfcphane, 100 adet projende tek tek klonlanarak y\xfcklendi\u011finden, disk t\xfcketimini x100 defa artt\u0131rarak depolam\u0131\u015f olursun. Pnpm ise",(0,r.kt)("inlineCode",{parentName:"p"},"abc")," k\xfct\xfcphanesini ortak bir alanda depolar ve:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"E\u011fer, ",(0,r.kt)("inlineCode",{parentName:"li"},"abc")," k\xfct\xfcphanesinin birden fazla s\xfcr\xfcm\xfcn\xfcn kullan\u0131lmas\u0131 gerekiyorsa, ortak alanda sadece farkl\u0131 olan dosyalar depolan\u0131r ve fazla yer t\xfcketimine m\xfcsade etmez. \xd6rne\u011fin, ",(0,r.kt)("inlineCode",{parentName:"li"},"abc")," k\xfct\xfcphanesinde 100 adet dosya y\xfcklenmi\u015f ise ve gelecekte yay\u0131nlanacak olan yeni s\xfcr\xfcmde 1 adet dosyada de\u011fi\u015fiklik olmu\u015fsa; ",(0,r.kt)("inlineCode",{parentName:"li"},"pnpm update")," komutu, yeni s\xfcr\xfcm i\xe7in 100 adet dosyay\u0131 yeniden indirmek/y\xfcklemek yerine sadece de\u011fi\u015ftirilmi\u015f olan o 1 dosyay\u0131 \xe7ekerek g\xfcncellemeyi uygular."),(0,r.kt)("li",{parentName:"ol"},"B\xfct\xfcn dosyalar, disk \xfczerinde sadece bir yerde depolan\u0131r. Bu durumda ",(0,r.kt)("inlineCode",{parentName:"li"},"abc")," k\xfct\xfcphanesini farkl\u0131 bir projeye dahil etmek istedi\u011fin zaman, h\xe2li haz\u0131rda ortak alanda depolanan dosyalara, hard-link (sembolik ba\u011f) olu\u015fturularak, ekstra disk t\xfcketiminden tasarruf edilmi\u015f olur. B\xf6ylece bir paketin ayn\u0131 s\xfcr\xfcm\xfcn\xfc, projelerin aras\u0131nda payla\u015ft\u0131rma imkan\u0131 elde etmi\u015f olursun.")),(0,r.kt)("p",null,"Sonu\xe7 olarak, projelerinde kulland\u0131\u011f\u0131n k\xfct\xfcphanelerin say\u0131s\u0131na orant\u0131l\u0131 olarak disk t\xfcketiminde ve y\xfckleme h\u0131z\u0131nda, m\xfcthi\u015f bir seviyede kazan\xe7 sa\u011flam\u0131\u015f olursun!"),(0,r.kt)("h2",{id:"d\xfcz-klasik-hepsi-bir-arada-node_modules-dizin-yap\u0131s\u0131ndan-kurtulma"},'D\xfcz, klasik, "hepsi bir arada" node_modules dizin yap\u0131s\u0131ndan kurtulma'),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/xiaokedada/status/1471691763102679041/photo/1"},(0,r.kt)("img",{src:t(9686).Z,width:"2920",height:"1392"}))),(0,r.kt)("p",null,"npm veya Yarn Classic ile ba\u011f\u0131ml\u0131l\u0131klar\u0131 kurarken, t\xfcm paketler mod\xfcl dizininin k\xf6k\xfcne \xe7ekilir. Haliyle sonu\xe7 olarak, projeye kesin olarak dahil etmedi\u011fimiz yan k\xfct\xfcphanelere, kaynak koduz eri\u015fim sa\u011flayabilir."),(0,r.kt)("p",null,"By default, pnpm uses symlinks to add only the direct dependencies of the project into the root of the modules directory. Pnpm'in, benzersiz ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," klas\xf6r yap\u0131s\u0131 ve bu yap\u0131n\u0131n Node.js ekosistemi ile nas\u0131l ve neden uyumlu bi\xe7imde \xe7al\u0131\u015ft\u0131\u011f\u0131 hakk\u0131nda daha fazla bilgi almak istersen e\u011fer:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/blog/2020/05/27/flat-node-modules-is-not-the-only-way"},"D\xfcz, klasik node_modules yap\u0131s\u0131 art\u0131k tek yol de\u011fil")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/tr/symlinked-node-modules-structure"},(0,r.kt)("inlineCode",{parentName:"a"},"node_modules"),"'da sembolik ba\u011f (symlink) yap\u0131s\u0131"))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If your tooling doesn't work well with symlinks, you may still use pnpm and set the ",(0,r.kt)("a",{parentName:"p",href:"npmrc#node-linker"},"node-linker")," setting to ",(0,r.kt)("inlineCode",{parentName:"p"},"hoisted"),". This will instruct pnpm to create a node_modules directory that is similar to those created by npm and Yarn Classic."))))}u.isMDXComponent=!0},6985:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/cafs-illustration-7be6bd97e43ba11a031b099869321deb.jpg"},9686:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/node-modules-structure-8ab301ddaed3b7530858b233f5b3be57.jpg"}}]);