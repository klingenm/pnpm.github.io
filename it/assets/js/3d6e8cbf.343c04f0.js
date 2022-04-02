"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2938],{9613:(e,n,o)=>{o.d(n,{Zo:()=>p,kt:()=>u});var t=o(9496);function a(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function i(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function r(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?i(Object(o),!0).forEach((function(n){a(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function l(e,n){if(null==e)return{};var o,t,a=function(e,n){if(null==e)return{};var o,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)o=i[t],n.indexOf(o)>=0||(a[o]=e[o]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)o=i[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var d=t.createContext({}),s=function(e){var n=t.useContext(d),o=n;return e&&(o="function"==typeof e?e(n):r(r({},n),e)),o},p=function(e){var n=s(e.components);return t.createElement(d.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var o=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(o),u=a,f=c["".concat(d,".").concat(u)]||c[u]||m[u]||i;return o?t.createElement(f,r(r({ref:n},p),{},{components:o})):t.createElement(f,r({ref:n},p))}));function u(e,n){var o=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=o.length,r=new Array(i);r[0]=c;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var s=2;s<i;s++)r[s]=o[s];return t.createElement.apply(null,r)}return t.createElement.apply(null,o)}c.displayName="MDXCreateElement"},8549:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>p,contentTitle:()=>d,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>m});var t=o(2182),a=o(9028),i=(o(9496),o(9613)),r=["components"],l={id:"symlinked-node-modules-structure",title:"Struttura `node_modules` con collegamenti simbolici"},d=void 0,s={unversionedId:"symlinked-node-modules-structure",id:"version-6.x/symlinked-node-modules-structure",title:"Struttura `node_modules` con collegamenti simbolici",description:"Questo articolo descrive solo come \xe8 strutturata la cartella node_modules di pnpm quando non ci sono pacchetti con dipendenze peer. Per lo scenario pi\xf9 complesso di dipendenze con i peer, vedere come vengono risolti i peer.",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-6.x/symlinked-node-modules-structure.md",sourceDirName:".",slug:"/symlinked-node-modules-structure",permalink:"/it/6.x/symlinked-node-modules-structure",editUrl:"https://crowdin.com/project/pnpm/it",tags:[],version:"6.x",frontMatter:{id:"symlinked-node-modules-structure",title:"Struttura `node_modules` con collegamenti simbolici"},sidebar:"version-6.x/docs",previous:{title:"Limitazioni",permalink:"/it/6.x/limitations"},next:{title:"Come vengono risolti i peer",permalink:"/it/6.x/how-peers-are-resolved"}},p={},m=[],c={toc:m};function u(e){var n=e.components,o=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,t.Z)({},c,o,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Questo articolo descrive solo come \xe8 strutturata la cartella ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," di pnpm quando non ci sono pacchetti con dipendenze peer. Per lo scenario pi\xf9 complesso di dipendenze con i peer, vedere ",(0,i.kt)("a",{parentName:"p",href:"/it/6.x/how-peers-are-resolved"},"come vengono risolti i peer"),"."))),(0,i.kt)("p",null,"il layout ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," pnpm utilizza collegamenti simbolici per creare una struttura nidificata di dipendenze."),(0,i.kt)("p",null,"Ogni file di ogni pacchetto all'interno di ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," \xe8 un collegamento fisico all'archivio indirizzabile al contenuto. Diciamo che installi ",(0,i.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," che dipende da ",(0,i.kt)("inlineCode",{parentName:"p"},"bar@1.0.0"),". pnpm collegher\xe0 entrambi i pacchetti a ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," in questo modo:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"node_modules\n\u2514\u2500\u2500 .pnpm\n    \u251c\u2500\u2500 bar@1.0.0\n    \u2502   \u2514\u2500\u2500 node_modules\n    \u2502       \u2514\u2500\u2500 bar -> <store>/bar\n    \u2502           \u251c\u2500\u2500 index.js\n    \u2502           \u2514\u2500\u2500 package.json\n    \u2514\u2500\u2500 foo@1.0.0\n        \u2514\u2500\u2500 node_modules\n            \u2514\u2500\u2500 foo -> <store>/foo\n                \u251c\u2500\u2500 index.js\n                \u2514\u2500\u2500 package.json\n")),(0,i.kt)("p",null,'Questi sono gli unici file "reali" in ',(0,i.kt)("inlineCode",{parentName:"p"},"node_modules"),". Una volta che tutti i pacchetti sono collegati fisicamente a ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules"),", vengono creati collegamenti simbolici per creare la struttura del grafico delle dipendenze annidata."),(0,i.kt)("p",null,"Come potresti aver notato, entrambi i pacchetti sono collegati fisicamente in una sottocartella all'interno di una cartella ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," (",(0,i.kt)("inlineCode",{parentName:"p"},"foo@1.0.0/node_modules/foo"),"). Ci\xf2 \xe8 necessario per:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"permettere ai pacchetti di importarsi.")," ",(0,i.kt)("inlineCode",{parentName:"li"},"foo")," dovrebbe essere in grado di eseguire ",(0,i.kt)("inlineCode",{parentName:"li"},"require('foo/package.json')")," o ",(0,i.kt)("inlineCode",{parentName:"li"},'import * as package from "foo/package.json"'),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"evitare i collegamenti simbolici circolari.")," Le dipendenze dei pacchetti sono posizionate nella stessa cartella in cui si trovano i pacchetti dipendenti. Per Node.js non fa differenza se le dipendenze si trovano all'interno di ",(0,i.kt)("inlineCode",{parentName:"li"},"node_modules")," del pacchetto o in qualsiasi altro ",(0,i.kt)("inlineCode",{parentName:"li"},"node_modules")," delle cartelle superiori.")),(0,i.kt)("p",null,"La fase successiva dell'installazione \xe8 il collegamento simbolico delle dipendenze. ",(0,i.kt)("inlineCode",{parentName:"p"},"bar")," sar\xe0 collegato simbolicamente alla cartella ",(0,i.kt)("inlineCode",{parentName:"p"},"foo@1.0.0/node_modules"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"node_modules\n\u2514\u2500\u2500 .pnpm\n    \u251c\u2500\u2500 bar@1.0.0\n    \u2502   \u2514\u2500\u2500 node_modules\n    \u2502       \u2514\u2500\u2500 bar -> <store>/bar\n    \u2514\u2500\u2500 foo@1.0.0\n        \u2514\u2500\u2500 node_modules\n            \u251c\u2500\u2500 foo -> <store>/foo\n            \u2514\u2500\u2500 bar -> ../../bar@1.0.0/node_modules/bar\n")),(0,i.kt)("p",null,"Successivamente, vengono gestite le dipendenze dirette. ",(0,i.kt)("inlineCode",{parentName:"p"},"pippo")," verr\xe0 collegato simbolicamente nella cartella root ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," perch\xe9 ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," \xe8 una dipendenza del progetto:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"node_modules\n\u251c\u2500\u2500 foo -> ./.pnpm/foo@1.0.0/node_modules/foo\n\u2514\u2500\u2500 .pnpm\n    \u251c\u2500\u2500 bar@1.0.0\n    \u2502   \u2514\u2500\u2500 node_modules\n    \u2502       \u2514\u2500\u2500 bar -> <store>/bar\n    \u2514\u2500\u2500 foo@1.0.0\n        \u2514\u2500\u2500 node_modules\n            \u251c\u2500\u2500 foo -> <store>/foo\n            \u2514\u2500\u2500 bar -> ../../bar@1.0.0/node_modules/bar\n")),(0,i.kt)("p",null,"Questo \xe8 un esempio molto semplice. Tuttavia, il layout manterr\xe0 questa struttura indipendentemente dal numero di dipendenze e dalla profondit\xe0 del grafico delle dipendenze."),(0,i.kt)("p",null,"Aggiungiamo ",(0,i.kt)("inlineCode",{parentName:"p"},"qar@2.0.0")," come dipendenza di ",(0,i.kt)("inlineCode",{parentName:"p"},"bar")," e ",(0,i.kt)("inlineCode",{parentName:"p"},"foo"),". Ecco come apparir\xe0 la nuova struttura:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"node_modules\n\u251c\u2500\u2500 foo -> ./.pnpm/foo@1.0.0/node_modules/foo\n\u2514\u2500\u2500 .pnpm\n    \u251c\u2500\u2500 bar@1.0.0\n    \u2502   \u2514\u2500\u2500 node_modules\n    \u2502       \u251c\u2500\u2500 bar -> <store>/bar\n    \u2502       \u2514\u2500\u2500 qar -> ../../qar@2.0.0/node_modules/qar\n    \u251c\u2500\u2500 foo@1.0.0\n    \u2502   \u2514\u2500\u2500 node_modules\n    \u2502       \u251c\u2500\u2500 foo -> <store>/foo\n    \u2502       \u251c\u2500\u2500 bar -> ../../bar@1.0.0/node_modules/bar\n    \u2502       \u2514\u2500\u2500 qar -> ../../qar@2.0.0/node_modules/qar\n    \u2514\u2500\u2500 qar@2.0.0\n        \u2514\u2500\u2500 node_modules\n            \u2514\u2500\u2500 qar -> <store>/qar\n")),(0,i.kt)("p",null,"Come puoi vedere, anche se il grafico ora \xe8 pi\xf9 profondo (",(0,i.kt)("inlineCode",{parentName:"p"},"pippo > bar > qar"),"), la cartella nel file system \xe8 sempre la stessa."),(0,i.kt)("p",null,"Questo layout potrebbe sembrare strano a prima vista, ma \xe8 completamente compatibile con l'algoritmo di risoluzione del modulo di Node! Quando risolve i moduli, Node ignora i collegamenti simbolici, quindi quando \xe8 richiesto ",(0,i.kt)("inlineCode",{parentName:"p"},"bar")," da ",(0,i.kt)("inlineCode",{parentName:"p"},"foo@1.0.0/node_modules/foo/index.js"),", Node non usa ",(0,i.kt)("inlineCode",{parentName:"p"},"bar")," da ",(0,i.kt)("inlineCode",{parentName:"p"},"foo@1.0.0/node_modules/bar"),", ma invece ",(0,i.kt)("inlineCode",{parentName:"p"},"bar")," \xe8 risolto nella sua posizione reale (",(0,i.kt)("inlineCode",{parentName:"p"},"bar@1.0.0/node_modules/bar"),"). Di conseguenza, ",(0,i.kt)("inlineCode",{parentName:"p"},"bar")," pu\xf2 anche risolvere le sue dipendenze che sono in ",(0,i.kt)("inlineCode",{parentName:"p"},"bar@1.0.0/node_modules"),"."),(0,i.kt)("p",null,"Un grande bonus di questo layout \xe8 che solo i pacchetti che sono davvero nelle dipendenze sono accessibili. Con una struttura ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules"),' appiattita, tutti i pacchetti installati sono accessibili. Per saperne di pi\xf9 sul perch\xe9 questo \xe8 un vantaggio, vedi "',(0,i.kt)("a",{parentName:"p",href:"https://www.kochan.io/nodejs/pnpms-strictness-helps-to-avoid-silly-bugs.html"},"la severit\xe0 di pnpm aiuta ad evitare bug stupidi"),'"'))}u.isMDXComponent=!0}}]);