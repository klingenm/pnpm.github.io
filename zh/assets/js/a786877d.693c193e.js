"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1572],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=c(n),m=l,k=s["".concat(o,".").concat(m)]||s[m]||d[m]||a;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=s;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},5140:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>p,metadata:()=>c,toc:()=>d});var r=n(2182),l=n(9028),a=(n(9496),n(9613)),i=["components"],p={id:"why",title:"pnpm why"},o=void 0,c={unversionedId:"cli/why",id:"cli/why",title:"pnpm why",description:"\u663e\u793a\u4f9d\u8d56\u4e8e\u6307\u5b9a  package \u7684\u6240\u6709  package \u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/cli/why.md",sourceDirName:"cli",slug:"/cli/why",permalink:"/zh/next/cli/why",editUrl:"https://crowdin.com/project/pnpm/zh-CN",tags:[],version:"current",frontMatter:{id:"why",title:"pnpm why"},sidebar:"docs",previous:{title:"pnpm outdated",permalink:"/zh/next/cli/outdated"},next:{title:"pnpm run",permalink:"/zh/next/cli/run"}},u={},d=[{value:"\u914d\u7f6e\u9879",id:"\u914d\u7f6e\u9879",level:2},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"--json",id:"--json",level:3},{value:"--long",id:"--long",level:3},{value:"--parseable",id:"--parseable",level:3},{value:"--global",id:"--global",level:3},{value:"--prod, -P",id:"--prod--p",level:3},{value:"--dev, -D",id:"--dev--d",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],s={toc:d};function m(e){var t=e.components,n=(0,l.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u663e\u793a\u4f9d\u8d56\u4e8e\u6307\u5b9a ",(0,a.kt)("inlineCode",{parentName:"p"},"package"),"\u7684\u6240\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"package"),"\u3002"),(0,a.kt)("h2",{id:"\u914d\u7f6e\u9879"},"\u914d\u7f6e\u9879"),(0,a.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,a.kt)("p",null,"\u5728\u5b50\u76ee\u5f55\u6240\u6709",(0,a.kt)("inlineCode",{parentName:"p"},"package")," \u4e2d\uff0c\u6216\u8005\u5982\u679c\u5728\u4e00\u4e2a\u5de5\u4f5c\u7a7a\u95f4\u6267\u884c\u65f6\uff0c\u5728\u5de5\u4f5c\u7a7a\u95f4\u7684\u6240\u6709",(0,a.kt)("inlineCode",{parentName:"p"},"package"),"\u4e2d\uff0c\u663e\u793a\u6307\u5b9a ",(0,a.kt)("inlineCode",{parentName:"p"},"package"),"\u7684\u4f9d\u8d56\u5173\u7cfb\u6811\u3002"),(0,a.kt)("h3",{id:"--json"},"--json"),(0,a.kt)("p",null,"\u4ee5 JSON \u683c\u5f0f\u663e\u793a\u4fe1\u606f\u3002"),(0,a.kt)("h3",{id:"--long"},"--long"),(0,a.kt)("p",null,"\u8f93\u51fa\u8be6\u7ec6\u4fe1\u606f\u3002"),(0,a.kt)("h3",{id:"--parseable"},"--parseable"),(0,a.kt)("p",null,"\u663e\u793a\u53ef\u89e3\u6790\u7684\u8f93\u51fa\u800c\u4e0d\u662f\u6811\u5f62\u89c6\u56fe\u3002"),(0,a.kt)("h3",{id:"--global"},"--global"),(0,a.kt)("p",null,"\u5217\u51fa\u5728\u5168\u5c40\u5b89\u88c5\u76ee\u5f55\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"package"),"\uff0c\u800c\u4e0d\u662f\u5728\u5f53\u524d\u9879\u76ee\u4e2d\u3002"),(0,a.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,a.kt)("p",null,"\u4ec5\u4ec5\u663e\u793a\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"dependencies"),"\u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"package"),"\u7684\u4f9d\u8d56\u5173\u7cfb\u6811\u3002"),(0,a.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,a.kt)("p",null,"\u4ec5\u4ec5\u663e\u793a\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"devDependencies"),"\u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"package"),"\u7684\u4f9d\u8d56\u5173\u7cfb\u6811\u3002"),(0,a.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/zh/next/filtering"},"\u9605\u8bfb\u66f4\u591a\u6709\u5173 filter \u7684\u5185\u5bb9\u3002")))}m.isMDXComponent=!0}}]);