"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6662],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=u(n),d=r,f=s["".concat(i,".").concat(d)]||s[d]||m[d]||o;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=s;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},6755:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>p,metadata:()=>u,toc:()=>m});var a=n(2182),r=n(9028),o=(n(9496),n(9613)),l=["components"],p={title:"pnpm\u7684node_modules\u914d\u7f6e\u9009\u9879",author:"Zoltan Kochan",authorURL:"http://twitter.com/zoltankochan",authorImageURL:"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"},i=void 0,u={permalink:"/zh/blog/2020/10/17/node-modules-configuration-options-with-pnpm",editUrl:"https://crowdin.com/project/pnpm/zh-CN",source:"@site/i18n/zh/docusaurus-plugin-content-blog/2020-10-17-node-modules-configuration-options-with-pnpm.md",title:"pnpm\u7684node_modules\u914d\u7f6e\u9009\u9879",description:"\u521b\u5efanode_modules\u76ee\u5f55\u7ed3\u6784\u6709\u591a\u79cd\u65b9\u5f0f\u3002 \u4f60\u4e00\u5b9a\u60f3\u8981\u521b\u5efa\u6700\u4e25\u683c\u7684\u7ed3\u6784\uff0c\u5f53\u7136\u5982\u679c\u4f60\u5f53\u524d\u7684\u9879\u76ee\u5c1a\u65e0\u6cd5\u652f\u6301\uff0c\u4f60\u53ef\u4ee5\u914d\u7f6e\u4e3a\u4e0d\u4e25\u683c\u7684\u3002",date:"2020-10-17T00:00:00.000Z",formattedDate:"2020\u5e7410\u670817\u65e5",tags:[],readingTime:2.755,truncated:!0,authors:[{name:"Zoltan Kochan",url:"http://twitter.com/zoltankochan",imageURL:"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"}],frontMatter:{title:"pnpm\u7684node_modules\u914d\u7f6e\u9009\u9879",author:"Zoltan Kochan",authorURL:"http://twitter.com/zoltankochan",authorImageURL:"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"},prevItem:{title:"pnpm \u7684 2021 \u5e74",permalink:"/zh/blog/2021/12/29/yearly-update"},nextItem:{title:"\u5e73\u94fa\u7684\u7ed3\u6784\u4e0d\u662f node_modules \u7684\u552f\u4e00\u5b9e\u73b0\u65b9\u5f0f",permalink:"/zh/blog/2020/05/27/flat-node-modules-is-not-the-only-way"}},c={authorsImageUrls:[void 0]},m=[{value:"\u9ed8\u8ba4\u914d\u7f6e",id:"\u9ed8\u8ba4\u914d\u7f6e",level:2},{value:"Plug&#39;n&#39;Play. \u6700\u4e25\u683c\u7684\u914d\u7f6e",id:"plugnplay-\u6700\u4e25\u683c\u7684\u914d\u7f6e",level:2},{value:"\u4e25\u683c\u7684\u6a21\u5757\u76ee\u5f55",id:"\u4e25\u683c\u7684\u6a21\u5757\u76ee\u5f55",level:2},{value:"\u6700\u574f\u7684\u60c5\u51b5 -- \u63d0\u5347\u81f3\u6839",id:"\u6700\u574f\u7684\u60c5\u51b5----\u63d0\u5347\u81f3\u6839",level:2}],s={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u521b\u5efanode_modules\u76ee\u5f55\u7ed3\u6784\u6709\u591a\u79cd\u65b9\u5f0f\u3002 \u4f60\u4e00\u5b9a\u60f3\u8981\u521b\u5efa\u6700\u4e25\u683c\u7684\u7ed3\u6784\uff0c\u5f53\u7136\u5982\u679c\u4f60\u5f53\u524d\u7684\u9879\u76ee\u5c1a\u65e0\u6cd5\u652f\u6301\uff0c\u4f60\u53ef\u4ee5\u914d\u7f6e\u4e3a\u4e0d\u4e25\u683c\u7684\u3002"),(0,o.kt)("h2",{id:"\u9ed8\u8ba4\u914d\u7f6e"},"\u9ed8\u8ba4\u914d\u7f6e"),(0,o.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cpnpm v5\u5c06\u521b\u5efa\u4e00\u4e2a\u201c\u534a\u4e25\u683c\u201d\u7684node_modules\u3002 \u201c\u534a\u4e25\u683c\u201d\u610f\u5473\u7740\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u5c06\u53ea\u80fd\u5bfc\u5165 ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u5217\u51fa\u7684\u4f9d\u8d56\u9879(\u4f46\u4e5f\u6709\u4f8b\u5916)\u3002 \u7136\u800c\uff0c\u4f60\u6240\u4f9d\u8d56\u7684\u90a3\u4e9b\u5305\u5c06\u80fd\u8bbf\u95ee\u4efb\u4f55\u5176\u4ed6\u7684\u5305\u3002"),(0,o.kt)("p",null,"\u9ed8\u8ba4\u914d\u7f6e\u5982\u4e0b\u6240\u793a\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"; \u63d0\u5347\u6240\u6709\u5305\u5230 node_modules/.pnpm/node_modules\nhoist-pattern[]=*\n\n; \u63d0\u5347\u6240\u6709\u540d\u79f0\u5305\u542btypes\u7684\u5305\u81f3\u6839\uff0c\u4ee5\u4fbfTypescript\u80fd\u627e\u5230\npublic-hoist-pattern[]=*types*\n\n; \u63d0\u5347\u6240\u6709ESLint\u76f8\u5173\u7684\u5305\u81f3\u6839\npublic-hoist-pattern[]=*eslint*\n")),(0,o.kt)("h2",{id:"plugnplay-\u6700\u4e25\u683c\u7684\u914d\u7f6e"},"Plug'n'Play. \u6700\u4e25\u683c\u7684\u914d\u7f6e"),(0,o.kt)("p",null,"\u81eav5.9\u8d77\uff0cpnpm\u652f\u6301 ",(0,o.kt)("a",{parentName:"p",href:"https://yarnpkg.com/features/pnp"},"Yarn\u7684Plug'n'Play"),"\u3002 \u4f7f\u7528PnP\uff0c\u60a8\u7684\u5e94\u7528\u4ee5\u53ca\u4f60\u6240\u4f9d\u8d56\u7684\u5305\u90fd\u53ea\u80fd\u8bbf\u95ee\u4ed6\u4eec\u58f0\u660e\u7684\u4f9d\u8d56\u5173\u7cfb\u3002 \u8fd9\u6bd4\u8bbe\u7f6e ",(0,o.kt)("inlineCode",{parentName:"p"},"hoist = false")," \u66f4\u4e3a\u4e25\u683c\uff0c\u56e0\u4e3a\u5728monorepo\u4e2d\uff0c\u60a8\u7684\u5e94\u7528\u751a\u81f3\u8fde\u6839\u9879\u76ee\u7684\u4f9d\u8d56\u9879\u4e5f\u65e0\u6cd5\u8bbf\u95ee\u3002"),(0,o.kt)("p",null,"\u8981\u4f7f\u7528 Plug'n'Play\uff0c\u8bf7\u8bbe\u7f6e\u4ee5\u4e0b\u8bbe\u7f6e:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"node-linker=pnp\nsymlink=false\n")),(0,o.kt)("h2",{id:"\u4e25\u683c\u7684\u6a21\u5757\u76ee\u5f55"},"\u4e25\u683c\u7684\u6a21\u5757\u76ee\u5f55"),(0,o.kt)("p",null,"\u5982\u679c\u60a8\u5c1a\u672a\u51c6\u5907\u597d\u4f7f\u7528PnP\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7\u5c06\u63d0\u5347\u914d\u7f6e\u8bbe\u7f6e\u4e3afalse\u6765\u4ec5\u5141\u8bb8\u7a0b\u5e8f\u5305\u8bbf\u95ee\u5176\u81ea\u8eab\u7684\u4f9d\u8d56\u9879\uff0c\u786e\u4fdd\u5176\u201c\u4e25\u683c\u201d\u6027\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"hoist=false\n")),(0,o.kt)("p",null,"\u4f46\u662f\uff0c\u5982\u679c\u60a8\u7684\u67d0\u4e9b\u4f9d\u8d56\u9879\u9700\u8981\u8bbf\u95ee\u5b83\u4eec\u5728\u4f9d\u8d56\u9879\u4e2d\u6ca1\u6709\u7684\u7a0b\u5e8f\u5305\uff0c\u5219\u6709\u4e24\u79cd\u9009\u62e9\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u521b\u5efa ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpmfile.js")," \u5e76\u4f7f\u7528\u4e00\u4e2a ",(0,o.kt)("a",{parentName:"p",href:"/pnpmfile"},"hook")," \u5c06\u7f3a\u5c11\u7684\u4f9d\u8d56\u9879\u6dfb\u52a0\u5230\u5305\u7684\u6e05\u5355\u4e2d\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u6dfb\u52a0\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"hoist-pattern")," \u4e2d\u3002 \u4f8b\u5982\uff0c\u5982\u679c\u672a\u627e\u5230\u7684\u6a21\u5757\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"babel-core"),"\uff0c\u5219\u5c06\u4ee5\u4e0b\u8bbe\u7f6e\u6dfb\u52a0\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},".npmrc"),"\uff1a"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"hoist-pattern[]=babel-core\n")))),(0,o.kt)("h2",{id:"\u6700\u574f\u7684\u60c5\u51b5----\u63d0\u5347\u81f3\u6839"},"\u6700\u574f\u7684\u60c5\u51b5 -- \u63d0\u5347\u81f3\u6839"),(0,o.kt)("p",null,"\u5373\u4f7f\u4f7f\u7528pnpm\u7684\u9ed8\u8ba4\u914d\u7f6e\uff0c\u67d0\u4e9b\u5de5\u5177\u4e5f\u53ef\u80fd\u65e0\u6cd5\u5de5\u4f5c\uff0c\u9ed8\u8ba4\u914d\u7f6e\u4e0b\u6240\u6709\u5185\u5bb9\u90fd\u60ac\u6302\u5728\u865a\u62df\u5b58\u50a8\u7684\u6839\u76ee\u5f55\u4e2d\uff0c\u800c\u67d0\u4e9b\u8f6f\u4ef6\u5305\u5219\u60ac\u6302\u5728\u6839\u76ee\u5f55\u4e2d\u3002 \u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u60a8\u53ef\u4ee5\u5c06\u6240\u6709\u5185\u5bb9\u6216\u90e8\u5206\u4f9d\u8d56\u5173\u7cfb\u63d0\u5347\u5230modules\u76ee\u5f55\u7684\u6839\u76ee\u5f55\u3002"),(0,o.kt)("p",null,"\u8981\u5c06\u6240\u6709\u5185\u5bb9\u63d0\u5347\u5230node_modules\u7684\u6839\u76ee\u5f55\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"shamefully-hoist=true\n")),(0,o.kt)("p",null,"\u6309\u5339\u914d\u89c4\u5219\u63d0\u5347:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"public-hoist-pattern[]=babel-*\n")))}d.isMDXComponent=!0}}]);