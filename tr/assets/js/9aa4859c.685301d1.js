"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[787],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,h=m["".concat(o,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(h,l(l({ref:t},u),{},{components:n})):r.createElement(h,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},83:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>p,metadata:()=>s,toc:()=>c});var r=n(2182),a=n(9028),i=(n(9496),n(9613)),l=["components"],p={id:"run",title:"pnpm run"},o=void 0,s={unversionedId:"cli/run",id:"version-7.x/cli/run",title:"pnpm run",description:"Aliases: run-script",source:"@site/i18n/tr/docusaurus-plugin-content-docs/version-7.x/cli/run.md",sourceDirName:"cli",slug:"/cli/run",permalink:"/tr/cli/run",editUrl:"https://crowdin.com/project/pnpm/tr",tags:[],version:"7.x",frontMatter:{id:"run",title:"pnpm run"},sidebar:"version-7.x/docs",previous:{title:"pnpm why",permalink:"/tr/cli/why"},next:{title:"pnpm test",permalink:"/tr/cli/test"}},u={},c=[{value:"Examples",id:"examples",level:2},{value:"Details",id:"details",level:2},{value:"Differences with <code>npm run</code>",id:"differences-with-npm-run",level:2},{value:"Parametreler",id:"parametreler",level:2},{value:"script-shell",id:"script-shell",level:3},{value:"shell-emulator",id:"shell-emulator",level:3},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"--if-present",id:"--if-present",level:3},{value:"--parallel",id:"--parallel",level:3},{value:"--stream",id:"--stream",level:3},{value:"--aggregate-output",id:"--aggregate-output",level:3},{value:"enable-pre-post-scripts",id:"enable-pre-post-scripts",level:3},{value:"--filter &lt;paket_se\xe7ici&gt;",id:"--filter-paket_se\xe7ici",level:3}],m={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Aliases: ",(0,i.kt)("inlineCode",{parentName:"p"},"run-script")),(0,i.kt)("p",null,"Runs a script defined in the package's manifest file."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,"Let's say you have a ",(0,i.kt)("inlineCode",{parentName:"p"},"watch")," script configured in your ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),", like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n    "watch": "build-command --watch"\n}\n')),(0,i.kt)("p",null,"You can now run that script by using ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm run watch"),"! Simple, right? Another thing to note for those that like to save keystrokes and time is that all scripts get aliased in as pnpm commands, so ultimately ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm watch")," is just shorthand for ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm run watch")," (ONLY for scripts that do not share the same name as already existing pnpm commands)."),(0,i.kt)("h2",{id:"details"},"Details"),(0,i.kt)("p",null,"In addition to the shell\u2019s pre-existing ",(0,i.kt)("inlineCode",{parentName:"p"},"PATH"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm run")," includes ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules/.bin")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"PATH")," provided to ",(0,i.kt)("inlineCode",{parentName:"p"},"scripts"),". This means that so long as you have a package installed, you can use it in a script like a regular command. For example, if you have ",(0,i.kt)("inlineCode",{parentName:"p"},"eslint")," installed, you can write up a script like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"lint": "eslint src --fix"\n')),(0,i.kt)("p",null,"And even though ",(0,i.kt)("inlineCode",{parentName:"p"},"eslint")," is not installed globally in your shell, it will run."),(0,i.kt)("p",null,"For workspaces, ",(0,i.kt)("inlineCode",{parentName:"p"},"<workspace root>/node_modules/.bin")," is also added to the ",(0,i.kt)("inlineCode",{parentName:"p"},"PATH"),", so if a tool is installed in the workspace root, it may be called in any workspace package's ",(0,i.kt)("inlineCode",{parentName:"p"},"scripts"),"."),(0,i.kt)("h2",{id:"differences-with-npm-run"},"Differences with ",(0,i.kt)("inlineCode",{parentName:"h2"},"npm run")),(0,i.kt)("p",null,"By default, pnpm doesn't run arbitrary ",(0,i.kt)("inlineCode",{parentName:"p"},"pre")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"post")," hooks for user-defined scripts (such as ",(0,i.kt)("inlineCode",{parentName:"p"},"prestart"),"). This behavior, inherited from npm, caused scripts to be implicit rather than explicit, obfuscating the execution flow. It also led to surprising executions with ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm serve")," also running ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm preserve"),"."),(0,i.kt)("p",null,"If for some reason you need the pre/post scripts behavior of npm, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"enable-pre-post-scripts")," option."),(0,i.kt)("h2",{id:"parametreler"},"Parametreler"),(0,i.kt)("h3",{id:"script-shell"},"script-shell"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Varsay\u0131lan: ",(0,i.kt)("strong",{parentName:"li"},"null")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"path"))),(0,i.kt)("p",null,"The shell to use for scripts run with the ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm run")," command."),(0,i.kt)("p",null,"For instance, to force usage of Git Bash on Windows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'pnpm config set script-shell "C:\\\\Program Files\\\\git\\\\bin\\\\bash.exe"\n')),(0,i.kt)("h3",{id:"shell-emulator"},"shell-emulator"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Varsay\u0131lan: ",(0,i.kt)("strong",{parentName:"li"},"false")),(0,i.kt)("li",{parentName:"ul"},"Tip: ",(0,i.kt)("strong",{parentName:"li"},"Boolean"))),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", pnpm will use a JavaScript implementation of a ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@yarnpkg/shell"},"bash-like shell")," to execute scripts."),(0,i.kt)("p",null,"This option simplifies cross-platform scripting. For instance, by default, the next script will fail on non-POSIX-compliant systems:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n  "test": "NODE_ENV=test node test.js"\n}\n')),(0,i.kt)("p",null,"But if the ",(0,i.kt)("inlineCode",{parentName:"p"},"shell-emulator")," setting is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", it will work on all platforms."),(0,i.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,i.kt)("p",null,"This runs an arbitrary command from each package's \"scripts\" object. If a package doesn't have the command, it is skipped. If none of the packages have the command, the command fails."),(0,i.kt)("h3",{id:"--if-present"},"--if-present"),(0,i.kt)("p",null,"You can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"--if-present")," flag to avoid exiting with a non-zero exit code when the script is undefined. This lets you run potentially undefined scripts without breaking the execution chain."),(0,i.kt)("h3",{id:"--parallel"},"--parallel"),(0,i.kt)("p",null,"Completely disregard concurrency and topological sorting, running a given script immediately in all matching packages with prefixed streaming output. This is the preferred flag for long-running processes over many packages, for instance, a lengthy build process."),(0,i.kt)("h3",{id:"--stream"},"--stream"),(0,i.kt)("p",null,"Stream output from child processes immediately, prefixed with the originating package directory. This allows output from different packages to be interleaved."),(0,i.kt)("h3",{id:"--aggregate-output"},"--aggregate-output"),(0,i.kt)("p",null,"Aggregate output from child processes that are run in parallel, and only print output when the child process is finished. It makes reading large logs after running ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm -r <command>")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"--parallel")," or with ",(0,i.kt)("inlineCode",{parentName:"p"},"--workspace-concurrency=<number>")," much easier (especially on CI). Only ",(0,i.kt)("inlineCode",{parentName:"p"},"--reporter=append-only")," is supported."),(0,i.kt)("h3",{id:"enable-pre-post-scripts"},"enable-pre-post-scripts"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Varsay\u0131lan: ",(0,i.kt)("strong",{parentName:"li"},"false")),(0,i.kt)("li",{parentName:"ul"},"Tip: ",(0,i.kt)("strong",{parentName:"li"},"Boolean"))),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", pnpm will run any pre/post scripts automatically. So running ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm foo")," will be like running ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm prefoo && pnpm foo && pnpm postfoo"),"."),(0,i.kt)("h3",{id:"--filter-paket_se\xe7ici"},"--filter ","<","paket_se\xe7ici>"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/tr/filtering"},"Buradan daha fazla bilgiye ula\u015fabilirsin.")))}d.isMDXComponent=!0}}]);