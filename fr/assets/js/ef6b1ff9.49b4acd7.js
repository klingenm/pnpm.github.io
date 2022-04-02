"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9920],{9613:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(9496);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=l(r),d=i,m=f["".concat(p,".").concat(d)]||f[d]||u[d]||a;return r?n.createElement(m,o(o({ref:t},s),{},{components:r})):n.createElement(m,o({ref:t},s))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4626:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var n=r(2182),i=r(9028),a=(r(9496),r(9613)),o=["components"],c={id:"pack",title:"pnpm pack"},p=void 0,l={unversionedId:"cli/pack",id:"version-7.x/cli/pack",title:"pnpm pack",description:"Create a tarball from a package.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-7.x/cli/pack.md",sourceDirName:"cli",slug:"/cli/pack",permalink:"/fr/cli/pack",editUrl:"https://crowdin.com/project/pnpm/fr",tags:[],version:"7.x",frontMatter:{id:"pack",title:"pnpm pack"},sidebar:"version-7.x/docs",previous:{title:"pnpm publish",permalink:"/fr/cli/publish"},next:{title:"pnpm -r, --recursive",permalink:"/fr/cli/recursive"}},s={},u=[{value:"Options",id:"options",level:2},{value:"--pack-destination &lt;dir&gt;",id:"--pack-destination-dir",level:3}],f={toc:u};function d(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Create a tarball from a package."),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("h3",{id:"--pack-destination-dir"},"--pack-destination ","<","dir",">"),(0,a.kt)("p",null,"Directory in which ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm pack")," will save tarballs. The default is the current working directory."))}d.isMDXComponent=!0}}]);