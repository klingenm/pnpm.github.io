"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2072],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,f=m["".concat(p,".").concat(d)]||m[d]||s[d]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9892:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var r=n(2182),i=n(9028),a=(n(9496),n(9613)),o=["components"],l={id:"setup",title:"pnpm setup"},p=void 0,c={unversionedId:"cli/setup",id:"cli/setup",title:"pnpm setup",description:"Questo comando viene utilizzato dagli script di installazione standalone di pnpm. Per esempio, in .",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/cli/setup.md",sourceDirName:"cli",slug:"/cli/setup",permalink:"/it/next/cli/setup",editUrl:"https://crowdin.com/project/pnpm/it",tags:[],version:"current",frontMatter:{id:"setup",title:"pnpm setup"},sidebar:"docs",previous:{title:"pnpm bin",permalink:"/it/next/cli/bin"},next:{title:"package.json",permalink:"/it/next/package_json"}},u={},s=[],m={toc:s};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Questo comando viene utilizzato dagli script di installazione standalone di pnpm. Per esempio, in ",(0,a.kt)("a",{parentName:"p",href:"https://get.pnpm.io/install.sh"},"https://get.pnpm.io/install.sh"),"."),(0,a.kt)("p",null,"L'installazione esegue le seguenti azioni:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"crea una cartella home per la CLI di pnpm"),(0,a.kt)("li",{parentName:"ul"},"aggiunge la cartella home di pnpm al ",(0,a.kt)("inlineCode",{parentName:"li"},"PATH")," aggiornando il file di configurazione della shell"),(0,a.kt)("li",{parentName:"ul"},"copia l'eseguibile pnpm nella cartella home di pnpm")))}d.isMDXComponent=!0}}]);