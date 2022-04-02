"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2207],{9613:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),v=c(r),d=o,m=v["".concat(p,".").concat(d)]||v[d]||u[d]||l;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=v;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<l;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},3781:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var n=r(2182),o=r(9028),l=(r(9496),r(9613)),a=["components"],i={id:"remove",title:"pnpm remove"},p=void 0,c={unversionedId:"cli/remove",id:"version-5.x/cli/remove",title:"pnpm remove",description:"Removes packages from node_modules and from the project's package.json.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/version-5.x/cli/remove.md",sourceDirName:"cli",slug:"/cli/remove",permalink:"/ko/5.x/cli/remove",editUrl:"https://crowdin.com/project/pnpm/ko",tags:[],version:"5.x",frontMatter:{id:"remove",title:"pnpm remove"},sidebar:"version-5.x/docs",previous:{title:"pnpm update",permalink:"/ko/5.x/cli/update"},next:{title:"pnpm link",permalink:"/ko/5.x/cli/link"}},s={},u=[{value:"\uc635\uc158",id:"\uc635\uc158",level:2},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"--global",id:"--global",level:3},{value:"--save-dev, -D",id:"--save-dev--d",level:3},{value:"--save-optional, -O",id:"--save-optional--o",level:3},{value:"--save-prod, -P",id:"--save-prod--p",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],v={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,n.Z)({},v,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Removes packages from ",(0,l.kt)("inlineCode",{parentName:"p"},"node_modules")," and from the project's ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,l.kt)("p",null,"Aliases: rm, uninstall, un"),(0,l.kt)("h2",{id:"\uc635\uc158"},"\uc635\uc158"),(0,l.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/ko/5.x/workspaces"},"\uc6cc\ud06c\uc2a4\ud398\uc774\uc2a4")," \ub0b4\ubd80\uc5d0\uc11c \uc0ac\uc6a9\ub420 \ub54c, \ubaa8\ub4e0 \uc6cc\ud06c\uc2a4\ud398\uc774\uc2a4 \ud328\ud0a4\uc9c0\uc5d0\uc11c \uc758\uc874\uc131\uc744 \uc81c\uac70\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc6cc\ud06c\uc2a4\ud398\uc774\uc2a4 \ub0b4\uc5d0\uc11c \uc0ac\uc6a9\ub418\uc9c0 \uc54a\ub294 \uacbd\uc6b0 \ud558\uc704 \ub514\ub809\ud1a0\ub9ac\uc5d0\uc11c \ucc3e\uc740 \ubaa8\ub4e0 \ud328\ud0a4\uc9c0\uc5d0\uc11c \uc758\uc874\uc131\uc744 \uc5d0\uc11c \uc81c\uac70\ud569\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"--global"},"--global"),(0,l.kt)("p",null,"\uc804\uc5ed \ud328\ud0a4\uc9c0\ub97c \uc81c\uac70\ud569\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"--save-dev--d"},"--save-dev, -D"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"devDependencies"),"\uc5d0\uc11c\ub9cc \uc758\uc874\uc131\uc744 \uc81c\uac70\ud569\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"--save-optional--o"},"--save-optional, -O"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"\uc5d0\uc11c\ub9cc \uc758\uc874\uc131\uc744 \uc81c\uac70\ud569\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"--save-prod--p"},"--save-prod, -P"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"\uc885\uc18d\uc131"),"\uc5d0\uc11c\ub9cc \uc758\uc874\uc131\uc744 \uc81c\uac70\ud569\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/ko/5.x/filtering"},"\ud544\ud130\ub9c1\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcf4\uc138\uc694.")))}d.isMDXComponent=!0}}]);