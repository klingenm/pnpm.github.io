"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9238],{9613:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>m});var n=t(9496);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),s=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},c=function(e){var a=s(e.components);return n.createElement(p.Provider,{value:a},e.children)},k={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=r,u=d["".concat(p,".").concat(m)]||d[m]||k[m]||i;return t?n.createElement(u,o(o({ref:a},c),{},{components:t})):n.createElement(u,o({ref:a},c))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var p in a)hasOwnProperty.call(a,p)&&(l[p]=a[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7723:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>k});var n=t(2182),r=t(9028),i=(t(9496),t(9613)),o=["components"],l={id:"workspaces",title:"\u0412\u043e\u0440\u043a\u0441\u043f\u0435\u0439\u0441\u044b"},p=void 0,s={unversionedId:"workspaces",id:"version-7.x/workspaces",title:"\u0412\u043e\u0440\u043a\u0441\u043f\u0435\u0439\u0441\u044b",description:"pnpm has built-in support for monorepositories (AKA multi-package repositories, multi-project repositories, or monolithic repositories). You can create a workspace to unite multiple projects inside a single repository.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-7.x/workspaces.md",sourceDirName:".",slug:"/workspaces",permalink:"/ru/workspaces",editUrl:"https://crowdin.com/project/pnpm/ru",tags:[],version:"7.x",frontMatter:{id:"workspaces",title:"\u0412\u043e\u0440\u043a\u0441\u043f\u0435\u0439\u0441\u044b"},sidebar:"version-7.x/docs",previous:{title:".pnpmfile.cjs",permalink:"/ru/pnpmfile"},next:{title:"\u0410\u043b\u0438\u0430\u0441\u044b",permalink:"/ru/aliases"}},c={},k=[{value:"Workspace protocol (workspace:)",id:"workspace-protocol-workspace",level:2},{value:"Referencing workspace packages through aliases",id:"referencing-workspace-packages-through-aliases",level:3},{value:"Referencing workspace packages through their relative path",id:"referencing-workspace-packages-through-their-relative-path",level:3},{value:"Publishing workspace packages",id:"publishing-workspace-packages",level:3},{value:"Release workflow",id:"release-workflow",level:2},{value:"\u041e\u043f\u0446\u0438\u0438",id:"\u043e\u043f\u0446\u0438\u0438",level:2},{value:"link-workspace-packages",id:"link-workspace-packages",level:3},{value:"prefer-workspace-packages",id:"prefer-workspace-packages",level:3},{value:"shared-workspace-lockfile",id:"shared-workspace-lockfile",level:3},{value:"save-workspace-protocol",id:"save-workspace-protocol",level:3},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0431\u043b\u0435\u043c",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-\u043f\u0440\u043e\u0431\u043b\u0435\u043c",level:2},{value:"Usage examples",id:"usage-examples",level:2}],d={toc:k};function m(e){var a=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"pnpm has built-in support for monorepositories (AKA multi-package repositories, multi-project repositories, or monolithic repositories). You can create a workspace to unite multiple projects inside a single repository."),(0,i.kt)("p",null,"A workspace must have a ",(0,i.kt)("a",{parentName:"p",href:"/ru/pnpm-workspace_yaml"},(0,i.kt)("inlineCode",{parentName:"a"},"pnpm-workspace.yaml"))," file in its root. A workspace also may have an ",(0,i.kt)("a",{parentName:"p",href:"/ru/npmrc"},(0,i.kt)("inlineCode",{parentName:"a"},".npmrc"))," in its root."),(0,i.kt)("h2",{id:"workspace-protocol-workspace"},"Workspace protocol (workspace:)"),(0,i.kt)("p",null,"By default, pnpm will link packages from the workspace if the available packages match the declared ranges. For instance, ",(0,i.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," is linked into ",(0,i.kt)("inlineCode",{parentName:"p"},"bar")," if ",(0,i.kt)("inlineCode",{parentName:"p"},"bar")," has ",(0,i.kt)("inlineCode",{parentName:"p"},'"foo": "^1.0.0"')," in its dependencies. However, if ",(0,i.kt)("inlineCode",{parentName:"p"},"bar")," has ",(0,i.kt)("inlineCode",{parentName:"p"},'"foo": "2.0.0"')," in dependencies and ",(0,i.kt)("inlineCode",{parentName:"p"},"foo@2.0.0")," is not in the workspace, ",(0,i.kt)("inlineCode",{parentName:"p"},"foo@2.0.0")," will be installed from the registry. This behavior introduces some uncertainty."),(0,i.kt)("p",null,"Luckily, pnpm supports the ",(0,i.kt)("inlineCode",{parentName:"p"},"workspace:")," protocol. When this protocol is used, pnpm will refuse to resolve to anything other than a local workspace package. So, if you set ",(0,i.kt)("inlineCode",{parentName:"p"},'"foo": "workspace:2.0.0"'),", this time installation will fail because ",(0,i.kt)("inlineCode",{parentName:"p"},'"foo@2.0.0"')," isn't present in the workspace."),(0,i.kt)("p",null,"This protocol is especially useful when the ",(0,i.kt)("a",{parentName:"p",href:"#link-workspace-packages"},"link-workspace-packages")," option is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),". In that case, pnpm will only link packages from the workspace if the ",(0,i.kt)("inlineCode",{parentName:"p"},"workspace:")," protocol is used."),(0,i.kt)("h3",{id:"referencing-workspace-packages-through-aliases"},"Referencing workspace packages through aliases"),(0,i.kt)("p",null,"Let's say you have a package in the workspace named ",(0,i.kt)("inlineCode",{parentName:"p"},"foo"),". Usually, you would reference it as ",(0,i.kt)("inlineCode",{parentName:"p"},'"foo": "workspace:*"'),"."),(0,i.kt)("p",null,"If you want to use a different alias, the following syntax will work too: ",(0,i.kt)("inlineCode",{parentName:"p"},'"bar": "workspace:foo@*"'),"."),(0,i.kt)("p",null,"Before publish, aliases are converted to regular aliased dependencies. The above example will become: ",(0,i.kt)("inlineCode",{parentName:"p"},'"bar": "npm:foo@1.0.0"'),"."),(0,i.kt)("h3",{id:"referencing-workspace-packages-through-their-relative-path"},"Referencing workspace packages through their relative path"),(0,i.kt)("p",null,"In a workspace with 2 packages:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"+ packages\n    + foo\n    + bar\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"bar")," may have ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," in its dependencies declared as ",(0,i.kt)("inlineCode",{parentName:"p"},'"foo": "workspace:../foo"'),". Before publishing, these specs are converted to regular version specs supported by all package managers."),(0,i.kt)("h3",{id:"publishing-workspace-packages"},"Publishing workspace packages"),(0,i.kt)("p",null,"When a workspace package is packed into an archive (whether it's through ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm pack")," or one of the publish commands like ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm publish"),"), we dynamically replace any ",(0,i.kt)("inlineCode",{parentName:"p"},"workspace:")," dependency by:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The corresponding version in the target workspace (if you use ",(0,i.kt)("inlineCode",{parentName:"li"},"workspace:*"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"workspace:~"),", or ",(0,i.kt)("inlineCode",{parentName:"li"},"workspace:^"),")"),(0,i.kt)("li",{parentName:"ul"},"The associated semver range (for any other range type)")),(0,i.kt)("p",null,"So for example, if we have ",(0,i.kt)("inlineCode",{parentName:"p"},"foo"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"bar"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"qar"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"zoo")," in the workspace and they all are at version ",(0,i.kt)("inlineCode",{parentName:"p"},"1.5.0"),", the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "dependencies": {\n        "foo": "workspace:*",\n        "bar": "workspace:~",\n        "qar": "workspace:^",\n        "zoo": "workspace:^1.5.0"\n    }\n}\n')),(0,i.kt)("p",null,"Will be transformed into:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "dependencies": {\n        "foo": "1.5.0",\n        "bar": "~1.5.0",\n        "qar": "^1.5.0",\n        "zoo": "^1.5.0"\n    }\n}\n')),(0,i.kt)("p",null,"This feature allows you to depend on your local workspace packages while still being able to publish the resulting packages to the remote registry without needing intermediary publish steps - your consumers will be able to use your published workspaces as any other package, still benefitting from the guarantees semver offers."),(0,i.kt)("h2",{id:"release-workflow"},"Release workflow"),(0,i.kt)("p",null,"Versioning packages inside a workspace is a complex task and pnpm currently does not provide a built-in solution for it. However, there are 2 well tested tools that handle versioning and support pnpm:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/changesets/changesets"},"changesets")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://rushjs.io"},"Rush"),".")),(0,i.kt)("p",null,"For how to set up a repository using Rush, read ",(0,i.kt)("a",{parentName:"p",href:"https://rushjs.io/pages/maintainer/setup_new_repo"},"this page"),"."),(0,i.kt)("p",null,"For using Changesets with pnpm, read ",(0,i.kt)("a",{parentName:"p",href:"/ru/using-changesets"},"this guide"),"."),(0,i.kt)("h2",{id:"\u043e\u043f\u0446\u0438\u0438"},"\u041e\u043f\u0446\u0438\u0438"),(0,i.kt)("h3",{id:"link-workspace-packages"},"link-workspace-packages"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e: ",(0,i.kt)("strong",{parentName:"li"},"true")),(0,i.kt)("li",{parentName:"ul"},"\u0422\u0438\u043f: ",(0,i.kt)("strong",{parentName:"li"},"true"),", ",(0,i.kt)("strong",{parentName:"li"},"false"),", ",(0,i.kt)("strong",{parentName:"li"},"deep"))),(0,i.kt)("p",null,"If this is enabled, locally available packages are linked to ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," instead of being downloaded from the registry. This is very convenient in a monorepo. If you need local packages to also be linked to subdependencies, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"deep")," setting."),(0,i.kt)("p",null,"Else, packages are downloaded and installed from the registry. However, workspace packages can still be linked by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"workspace:")," range protocol."),(0,i.kt)("h3",{id:"prefer-workspace-packages"},"prefer-workspace-packages"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e: ",(0,i.kt)("strong",{parentName:"li"},"false")),(0,i.kt)("li",{parentName:"ul"},"\u0422\u0438\u043f: ",(0,i.kt)("strong",{parentName:"li"},"Boolean"))),(0,i.kt)("p",null,"If this is enabled, local packages from the workspace are preferred over packages from the registry, even if there is a newer version of the package in the registry."),(0,i.kt)("p",null,"This setting is only useful if the workspace doesn't use ",(0,i.kt)("inlineCode",{parentName:"p"},"save-workspace-protocol"),"."),(0,i.kt)("h3",{id:"shared-workspace-lockfile"},"shared-workspace-lockfile"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e: ",(0,i.kt)("strong",{parentName:"li"},"true")),(0,i.kt)("li",{parentName:"ul"},"\u0422\u0438\u043f: ",(0,i.kt)("strong",{parentName:"li"},"Boolean"))),(0,i.kt)("p",null,"If this is enabled, pnpm creates a single ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," file in the root of the workspace. This also means that all dependencies of workspace packages will be in a single ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," (and get symlinked to their package ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," folder for Node's module resolution)."),(0,i.kt)("p",null,"\u041f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430 \u0434\u0430\u043d\u043d\u043e\u0439 \u043e\u043f\u0446\u0438\u0438:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"every dependency is a singleton"),(0,i.kt)("li",{parentName:"ul"},"faster installations in a monorepo"),(0,i.kt)("li",{parentName:"ul"},"fewer changes in code reviews as they are all in one file")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Even though all the dependencies will be hard linked into the root ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules"),", packages will have access only to those dependencies that are declared in their ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),", so pnpm's strictness is preserved. This is a result of the aforementioned symbolic linking."))),(0,i.kt)("h3",{id:"save-workspace-protocol"},"save-workspace-protocol"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e: ",(0,i.kt)("strong",{parentName:"li"},"true")),(0,i.kt)("li",{parentName:"ul"},"\u0422\u0438\u043f: ",(0,i.kt)("strong",{parentName:"li"},"Boolean"))),(0,i.kt)("p",null,"If this is enabled, new dependencies will be added with the workspace protocol IF (and only if) they are present in the workspace."),(0,i.kt)("p",null,"You might want to change this setting to ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," if the tooling in your repository does not understand the workspace protocol (and ideally submit a PR to your tooling to get it added in the future)."),(0,i.kt)("h2",{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-\u043f\u0440\u043e\u0431\u043b\u0435\u043c"},"\u0420\u0435\u0448\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0431\u043b\u0435\u043c"),(0,i.kt)("p",null,"pnpm cannot guarantee that scripts will be run in topological order if there are cycles between workspace dependencies. If pnpm detects cyclic dependencies during installation, it will produce a warning. If pnpm is able to find out which dependencies are causing the cycles, it will display them too."),(0,i.kt)("p",null,"If you see the message ",(0,i.kt)("inlineCode",{parentName:"p"},"There are cyclic workspace dependencies"),", please inspect workspace dependencies declared in ",(0,i.kt)("inlineCode",{parentName:"p"},"dependencies"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"optionalDependencies")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,i.kt)("h2",{id:"usage-examples"},"Usage examples"),(0,i.kt)("p",null,"Here are a few open source projects that use the workspace feature of pnpm:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/ice-lab/icestark"},"icestark")," (as of 12/16/2021, commit ",(0,i.kt)("inlineCode",{parentName:"li"},"4862326a8de53d02f617e7b1986774fd7540fccd"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/vuejs/vue-next"},"Vue 3.0")," (as of 10/9/2021, commit ",(0,i.kt)("inlineCode",{parentName:"li"},"61c5fbd3e35152f5f32e95bf04d3ee083414cecb"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/vitejs/vite"},"Vite")," (as of 9/26/2021, commit ",(0,i.kt)("inlineCode",{parentName:"li"},"3e1cce01d01493d33e50966d0d0fd39a86d229f9"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/cyclejs/cyclejs"},"Cycle.js")," (as of 9/21/2021, commit ",(0,i.kt)("inlineCode",{parentName:"li"},"f2187ab6688368edb904b649bd371a658f6a8637"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/prisma/prisma"},"Prisma")," (as of 9/21/2021, commit ",(0,i.kt)("inlineCode",{parentName:"li"},"c4c83e788aa16d61bae7a6d00adc8a58b3789a06"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/verdaccio/verdaccio"},"Verdaccio")," (as of 9/21/2021, commit ",(0,i.kt)("inlineCode",{parentName:"li"},"9dbf73e955fcb70b0a623c5ab89649b95146c744"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/rollup/plugins"},"Rollup plugins")," (as of 9/21/2021, commit ",(0,i.kt)("inlineCode",{parentName:"li"},"53fb18c0c2852598200c547a0b1d745d15b5b487"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Saul-Mirone/milkdown"},"Milkdown")," (as of 9/26/2021, commit ",(0,i.kt)("inlineCode",{parentName:"li"},"4b2e1dd6125bc2198fd1b851c4f00eda70e9b913"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/bytedance/bytemd"},"ByteMD")," (as of 2/18/2021, commit ",(0,i.kt)("inlineCode",{parentName:"li"},"36ef25f1ea1cd0b08752df5f8c832302017bb7fb"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/vueuse/vueuse"},"VueUse")," (as of 9/25/2021, commit ",(0,i.kt)("inlineCode",{parentName:"li"},"826351ba1d9c514e34426c85f3d69fb9875c7dd9"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/slidevjs/slidev"},"Slidev")," (as of 4/12/2021, commit ",(0,i.kt)("inlineCode",{parentName:"li"},"d6783323eb1ab1fc612577eb63579c8f7bc99c3a"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/sveltejs/kit"},"SvelteKit")," (as of 9/26/2021, commit ",(0,i.kt)("inlineCode",{parentName:"li"},"b164420ab26fa04fd0fbe0ac05431f36a89ef193"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/telecraft/telecraft"},"Telecraft")," (as of 9/26/2021, commit ",(0,i.kt)("inlineCode",{parentName:"li"},"73a9c48c9d4f160d758b8881f404cc52c20a7454"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/hayes/giraphql"},"GiraphQL")," (as of 8/4/2021, commit ",(0,i.kt)("inlineCode",{parentName:"li"},"3dd3ff148da382d6f406f20626a9a5c25707c0c8"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/msgbyte/tailchat"},"Tailchat")," (as of 12/27/2021, commit ",(0,i.kt)("inlineCode",{parentName:"li"},"298af71aa0619e0a8fa8717777afe2fb32739db4"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/vitest-dev/vitest"},"Vitest")," (as of 12/13/2021, commit ",(0,i.kt)("inlineCode",{parentName:"li"},"d6ff0ccb819716713f5eab5c046861f4d8e4f988"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/element-plus/element-plus"},"Element Plus")," (as of 9/23/2021, commit ",(0,i.kt)("inlineCode",{parentName:"li"},"f9e192535ff74d1443f1d9e0c5394fad10428629"),")")))}m.isMDXComponent=!0}}]);