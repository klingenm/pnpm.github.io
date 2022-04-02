"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7868],{9613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var l=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=l.createContext({}),s=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return l.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),m=s(n),k=a,u=m["".concat(p,".").concat(k)]||m[k]||c[k]||o;return n?l.createElement(u,i(i({ref:t},d),{},{components:n})):l.createElement(u,i({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r.mdxType="string"==typeof e?e:a,i[1]=r;for(var s=2;s<o;s++)i[s]=n[s];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2975:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>k,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var l=n(2182),a=n(9028),o=(n(9496),n(9613)),i=["components"],r={id:"pnpmfile",title:".pnpmfile.cjs"},p=void 0,s={unversionedId:"pnpmfile",id:"version-6.x/pnpmfile",title:".pnpmfile.cjs",description:"pnpm lets you hook directly into the installation process via special functions",source:"@site/versioned_docs/version-6.x/pnpmfile.md",sourceDirName:".",slug:"/pnpmfile",permalink:"/6.x/pnpmfile",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/main/versioned_docs/version-6.x/pnpmfile.md",tags:[],version:"6.x",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1647463814,formattedLastUpdatedAt:"3/16/2022",frontMatter:{id:"pnpmfile",title:".pnpmfile.cjs"},sidebar:"version-6.x/docs",previous:{title:"pnpm-workspace.yaml",permalink:"/6.x/pnpm-workspace_yaml"},next:{title:"Workspace",permalink:"/6.x/workspaces"}},d={},c=[{value:"Hooks",id:"hooks",level:2},{value:"TL;DR",id:"tldr",level:3},{value:"<code>hooks.readPackage(pkg, context): pkg | Promise&lt;pkg&gt;</code>",id:"hooksreadpackagepkg-context-pkg--promisepkg",level:3},{value:"Arguments",id:"arguments",level:4},{value:"Usage",id:"usage",level:4},{value:"Known limitations",id:"known-limitations",level:4},{value:"<code>hooks.afterAllResolved(lockfile, context): lockfile | Promise&lt;lockfile&gt;</code>",id:"hooksafterallresolvedlockfile-context-lockfile--promiselockfile",level:3},{value:"Arguments",id:"arguments-1",level:4},{value:"Usage example",id:"usage-example",level:4},{value:"Known Limitations",id:"known-limitations-1",level:4},{value:"Related Configuration",id:"related-configuration",level:2},{value:"ignore-pnpmfile",id:"ignore-pnpmfile",level:3},{value:"pnpmfile",id:"pnpmfile",level:3},{value:"global-pnpmfile",id:"global-pnpmfile",level:3}],m={toc:c};function k(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,l.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"pnpm lets you hook directly into the installation process via special functions\n(hooks). Hooks can be declared in a file called ",(0,o.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs"),"."),(0,o.kt)("p",null,"By default, ",(0,o.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs")," should be located in the same directory as the\nlockfile. For instance, in a ",(0,o.kt)("a",{parentName:"p",href:"/6.x/workspaces"},"workspace")," with a shared lockfile,\n",(0,o.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs")," should be in the root of the monorepo."),(0,o.kt)("h2",{id:"hooks"},"Hooks"),(0,o.kt)("h3",{id:"tldr"},"TL;DR"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Hook Function"),(0,o.kt)("th",{parentName:"tr",align:null},"Process"),(0,o.kt)("th",{parentName:"tr",align:null},"Uses"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"hooks.readPackage(pkg, context): pkg")),(0,o.kt)("td",{parentName:"tr",align:null},"Called after pnpm parses the dependency's package manifest"),(0,o.kt)("td",{parentName:"tr",align:null},"Allows you to mutate a dependency's ",(0,o.kt)("inlineCode",{parentName:"td"},"package.json"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"hooks.afterAllResolved(lockfile, context): lockfile")),(0,o.kt)("td",{parentName:"tr",align:null},"Called after the dependencies have been resolved."),(0,o.kt)("td",{parentName:"tr",align:null},"Allows you to mutate the lockfile.")))),(0,o.kt)("h3",{id:"hooksreadpackagepkg-context-pkg--promisepkg"},(0,o.kt)("inlineCode",{parentName:"h3"},"hooks.readPackage(pkg, context): pkg | Promise<pkg>")),(0,o.kt)("p",null,"Allows you to mutate a dependency's ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," after parsing and prior to\nresolution. These mutations are not saved to the filesystem, however, they will\naffect what gets resolved in the lockfile and therefore what gets installed."),(0,o.kt)("p",null,"Note that you will need to delete the ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," if you have already\nresolved the dependency you want to modify."),(0,o.kt)("h4",{id:"arguments"},"Arguments"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pkg")," - The manifest of the package. Either the response from the registry or\nthe ",(0,o.kt)("inlineCode",{parentName:"li"},"package.json")," content."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"context")," - Context object for the step. Method ",(0,o.kt)("inlineCode",{parentName:"li"},"#log(msg)")," allows you to use\na debug log for the step.")),(0,o.kt)("h4",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Example ",(0,o.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs")," (changes the dependencies of a dependency):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function readPackage(pkg, context) {\n  // Override the manifest of foo@1.x after downloading it from the registry\n  if (pkg.name === 'foo' && pkg.version.startsWith('1.')) {\n    // Replace bar@x.x.x with bar@2.0.0\n    pkg.dependencies = {\n      ...pkg.dependencies,\n      bar: '^2.0.0'\n    }\n    context.log('bar@1 => bar@2 in dependencies of foo')\n  }\n  \n  // This will change any packages using baz@x.x.x to use baz@1.2.3\n  if (pkg.dependencies.baz) {\n    pkg.dependencies.baz = '1.2.3';\n  }\n  \n  return pkg\n}\n\nmodule.exports = {\n  hooks: {\n    readPackage\n  }\n}\n")),(0,o.kt)("h4",{id:"known-limitations"},"Known limitations"),(0,o.kt)("p",null,"Removing the ",(0,o.kt)("inlineCode",{parentName:"p"},"scripts")," field from a dependency's manifest via ",(0,o.kt)("inlineCode",{parentName:"p"},"readPackage")," will\nnot prevent pnpm from building the dependency. When building a dependency, pnpm\nreads the ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," of the package from the package's archive, which is not\naffected by the hook. In order to ignore a package's build, use the\n",(0,o.kt)("a",{parentName:"p",href:"/6.x/package_json#pnpmneverbuiltdependencies"},"pnpm.neverBuiltDependencies")," field."),(0,o.kt)("h3",{id:"hooksafterallresolvedlockfile-context-lockfile--promiselockfile"},(0,o.kt)("inlineCode",{parentName:"h3"},"hooks.afterAllResolved(lockfile, context): lockfile | Promise<lockfile>")),(0,o.kt)("p",null,"Added in: v1.41.0"),(0,o.kt)("p",null,"Allows you to mutate the lockfile output before it is serialized."),(0,o.kt)("h4",{id:"arguments-1"},"Arguments"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"lockfile")," - The lockfile resolutions object that is serialized to\n",(0,o.kt)("inlineCode",{parentName:"li"},"pnpm-lock.yaml"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"context")," - Context object for the step. Method ",(0,o.kt)("inlineCode",{parentName:"li"},"#log(msg)")," allows you to use\na debug log for the step.")),(0,o.kt)("h4",{id:"usage-example"},"Usage example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title=".pnpmfile.cjs"',title:'".pnpmfile.cjs"'},"function afterAllResolved(lockfile, context) {\n  // ...\n  return lockfile\n}\n\nmodule.exports = {\n  hooks: {\n    afterAllResolved\n  }\n}\n")),(0,o.kt)("h4",{id:"known-limitations-1"},"Known Limitations"),(0,o.kt)("p",null,"There are none - anything that can be done with the lockfile can be modified via\nthis function, and you can even extend the lockfile's functionality."),(0,o.kt)("h2",{id:"related-configuration"},"Related Configuration"),(0,o.kt)("h3",{id:"ignore-pnpmfile"},"ignore-pnpmfile"),(0,o.kt)("p",null,"Added in: v1.25.0"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Default: ",(0,o.kt)("strong",{parentName:"li"},"false")),(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("strong",{parentName:"li"},"Boolean"))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs")," will be ignored. Useful together with ",(0,o.kt)("inlineCode",{parentName:"p"},"--ignore-scripts")," when you\nwant to make sure that no script gets executed during install."),(0,o.kt)("h3",{id:"pnpmfile"},"pnpmfile"),(0,o.kt)("p",null,"Added in: v1.39.0"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Default: ",(0,o.kt)("strong",{parentName:"li"},".pnpmfile.cjs")),(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("strong",{parentName:"li"},"path")),(0,o.kt)("li",{parentName:"ul"},"Example: ",(0,o.kt)("strong",{parentName:"li"},".pnpm/.pnpmfile.cjs"))),(0,o.kt)("p",null,"The location of the local pnpmfile."),(0,o.kt)("h3",{id:"global-pnpmfile"},"global-pnpmfile"),(0,o.kt)("p",null,"Added in: v1.39.0"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Default: ",(0,o.kt)("strong",{parentName:"li"},"null")),(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("strong",{parentName:"li"},"path")),(0,o.kt)("li",{parentName:"ul"},"Example: ",(0,o.kt)("strong",{parentName:"li"},"~/.pnpm/global_pnpmfile.cjs"))),(0,o.kt)("p",null,"The location of a global pnpmfile. A global pnpmfile is used by all projects\nduring installation."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"It is recommended to use local pnpmfiles. Only use a global pnpmfile\nif you use pnpm on projects that don't use pnpm as the primary package manager."))))}k.isMDXComponent=!0}}]);