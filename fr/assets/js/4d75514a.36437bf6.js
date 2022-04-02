"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4866],{9613:(e,r,n)=>{n.d(r,{Zo:()=>u,kt:()=>d});var t=n(9496);function p(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){p(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,p=function(e,r){if(null==e)return{};var n,t,p={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||(p[n]=e[n]);return p}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var s=t.createContext({}),o=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},u=function(e){var r=o(e.components);return t.createElement(s.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},c=t.forwardRef((function(e,r){var n=e.components,p=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=o(n),d=p,v=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return n?t.createElement(v,a(a({ref:r},u),{},{components:n})):t.createElement(v,a({ref:r},u))}));function d(e,r){var n=arguments,p=r&&r.mdxType;if("string"==typeof e||p){var l=n.length,a=new Array(l);a[0]=c;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:p,a[1]=i;for(var o=2;o<l;o++)a[o]=n[o];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7802:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var t=n(2182),p=n(9028),l=(n(9496),n(9613)),a=["components"],i={id:"uninstall",title:"D\xe9sinstaller pnpm"},s=void 0,o={unversionedId:"uninstall",id:"version-7.x/uninstall",title:"D\xe9sinstaller pnpm",description:"Supprimer globalement les packages install\xe9s",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-7.x/uninstall.md",sourceDirName:".",slug:"/uninstall",permalink:"/fr/uninstall",editUrl:"https://crowdin.com/project/pnpm/fr",tags:[],version:"7.x",frontMatter:{id:"uninstall",title:"D\xe9sinstaller pnpm"},sidebar:"version-7.x/docs",previous:{title:"How peers are resolved",permalink:"/fr/how-peers-are-resolved"},next:{title:"pnpm vs npm",permalink:"/fr/pnpm-vs-npm"}},u={},m=[{value:"Supprimer globalement les packages install\xe9s",id:"supprimer-globalement-les-packages-install\xe9s",level:2},{value:"Supprimer l&#39;interface de commande de pnpm",id:"supprimer-linterface-de-commande-de-pnpm",level:2},{value:"Supprimer la m\xe9moire d&#39;adressage globale",id:"supprimer-la-m\xe9moire-dadressage-globale",level:2},{value:"Supprimer le fichier d&#39;\xe9tat",id:"supprimer-le-fichier-d\xe9tat",level:2}],c={toc:m};function d(e){var r=e.components,n=(0,p.Z)(e,a);return(0,l.kt)("wrapper",(0,t.Z)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"supprimer-globalement-les-packages-install\xe9s"},"Supprimer globalement les packages install\xe9s"),(0,l.kt)("p",null,"Avant de supprimer le pnpm CLI, il serait judicieux de supprimer tout les packages globaux install\xe9s par pnpm."),(0,l.kt)("p",null,"Pour r\xe9pertorier tous les packages globaux, ex\xe9cutez ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm ls -g"),". Il existe deux mani\xe8res de supprimer les packages globaux:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Ex\xe9cutez ",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm rm -g <pkg>...")," avec chaque package global r\xe9pertori\xe9."),(0,l.kt)("li",{parentName:"ol"},"Ex\xe9cutez ",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm root -g")," pour trouver l'emplacement du r\xe9pertoire global et supprimez-le manuellement.")),(0,l.kt)("h2",{id:"supprimer-linterface-de-commande-de-pnpm"},"Supprimer l'interface de commande de pnpm"),(0,l.kt)("p",null,"Si vous avez utilis\xe9 le script autonome pour installer pnpm (ou npx), vous devriez pouvoir d\xe9sinstaller la CLI pnpm en utilisant:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pnpm rm -g pnpm\n")),(0,l.kt)("p",null,"Si vous avez utilis\xe9 npm pour installer pnpm, vous devez utiliser npm pour d\xe9sinstaller pnpm:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"npm rm -g pnpm\n")),(0,l.kt)("h2",{id:"supprimer-la-m\xe9moire-dadressage-globale"},"Supprimer la m\xe9moire d'adressage globale"),(0,l.kt)("p",null,"Si vous avez utilis\xe9 pnpm uniquement sur le disque principal, vous disposerez d'un magasin global dans le r\xe9pertoire de base. Alors supprimez-le simplement via:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"rm -rf ~/.pnpm-store\n")),(0,l.kt)("p",null,"Si vous avez utilis\xe9 pnpm sur des disques non principaux, le magasin se trouve \xe0 la racine de ce disque. Par exemple, si vous avez utilis\xe9 pnpm sur le disque ",(0,l.kt)("inlineCode",{parentName:"p"},"D:")," sous Windows, supprimez le magasin de ",(0,l.kt)("inlineCode",{parentName:"p"},"D:\\.pnpm-store"),"."),(0,l.kt)("h2",{id:"supprimer-le-fichier-d\xe9tat"},"Supprimer le fichier d'\xe9tat"),(0,l.kt)("p",null,"pnpm sauvegarde quelques \xe9tats dans ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.pnpm-state.json"),". Vous devez supprimer ce fichier."))}d.isMDXComponent=!0}}]);