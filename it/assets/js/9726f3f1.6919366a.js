"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8852],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var i=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),u=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,k=m["".concat(p,".").concat(d)]||m[d]||s[d]||a;return n?i.createElement(k,l(l({ref:t},c),{},{components:n})):i.createElement(k,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<a;u++)l[u]=n[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7837:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>s});var i=n(2182),r=n(9028),a=(n(9496),n(9613)),l=["components"],o={id:"recursive",title:"pnpm -r, --recursive"},p=void 0,u={unversionedId:"cli/recursive",id:"cli/recursive",title:"pnpm -r, --recursive",description:"Alias: m, multi, recursive,  -r",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/cli/recursive.md",sourceDirName:"cli",slug:"/cli/recursive",permalink:"/it/next/cli/recursive",editUrl:"https://crowdin.com/project/pnpm/it",tags:[],version:"current",frontMatter:{id:"recursive",title:"pnpm -r, --recursive"},sidebar:"docs",previous:{title:"pnpm pack",permalink:"/it/next/cli/pack"},next:{title:"pnpm server",permalink:"/it/next/cli/server"}},c={},s=[{value:"Opzioni",id:"opzioni",level:2},{value:"--link-workspace-packages",id:"--link-workspace-packages",level:3},{value:"--workspace-concurrency",id:"--workspace-concurrency",level:3},{value:"--no-bail",id:"--no-bail",level:3},{value:"--no-sort",id:"--no-sort",level:3},{value:"--reverse",id:"--reverse",level:3},{value:"--filter &lt;selettore_pacchetto&gt;",id:"--filter-selettore_pacchetto",level:3}],m={toc:s};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Alias: ",(0,a.kt)("inlineCode",{parentName:"p"},"m"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"multi"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"recursive"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"<command> -r")),(0,a.kt)("p",null,"Esegue un comando in ogni progetto di uno spazio di lavoro, quando utilizzato con i seguenti comandi:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"install")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"list")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"outdated")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"publish")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rebuild")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"remove")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"unlink")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"update")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"why"))),(0,a.kt)("p",null,"Esegue un comando in ogni progetto di uno spazio di lavoro, escludendo il progetto nella root, quando utilizzato con i seguenti comandi:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"exec")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"run")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"test")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"add"))),(0,a.kt)("p",null,"Esempio di utilizzo:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm -r publish\n")),(0,a.kt)("h2",{id:"opzioni"},"Opzioni"),(0,a.kt)("h3",{id:"--link-workspace-packages"},"--link-workspace-packages"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Predefinito: ",(0,a.kt)("strong",{parentName:"li"},"true")),(0,a.kt)("li",{parentName:"ul"},"Tipo: ",(0,a.kt)("strong",{parentName:"li"},"true, false, deep"))),(0,a.kt)("p",null,"Collega i pacchetti disponibili localmente negli spazi di lavoro di un monorepo in ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," invece di scaricarli nuovamente dal registro. Questo emula la funzionalit\xe0 simile a ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn workspaces"),"."),(0,a.kt)("p",null,"Quando \xe8 impostato su deep, i pacchetti locali possono anche essere collegati alle dipendenze secondarie."),(0,a.kt)("p",null,"Tieni presente che si consiglia invece di utilizzare ",(0,a.kt)("a",{parentName:"p",href:"/it/next/workspaces#link-workspace-packages"},"npmrc")," per questa impostazione, di imporre lo stesso comportamento in tutti gli ambienti. Questa opzione esiste esclusivamente in modo che tu possa sovrascriverla se necessario."),(0,a.kt)("h3",{id:"--workspace-concurrency"},"--workspace-concurrency"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Predefinito: ",(0,a.kt)("strong",{parentName:"li"},"4")),(0,a.kt)("li",{parentName:"ul"},"Tipo: ",(0,a.kt)("strong",{parentName:"li"},"Numero"))),(0,a.kt)("p",null,"Imposta il numero massimo di attivit\xe0 da eseguire contemporaneamente. Per la simultaneit\xe0 illimitata usa ",(0,a.kt)("inlineCode",{parentName:"p"},"Infinity"),"."),(0,a.kt)("p",null,"Puoi impostare ",(0,a.kt)("inlineCode",{parentName:"p"},"workspace-concurrency")," come ",(0,a.kt)("inlineCode",{parentName:"p"},"<= 0")," e verr\xe0 utilizzato la quantit\xe0 di core dell'host come: ",(0,a.kt)("inlineCode",{parentName:"p"},"max(1, (numero di core) - abs(workspace-concurrency))")),(0,a.kt)("h3",{id:"--no-bail"},"--","[no-]","bail"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Predefinito: ",(0,a.kt)("strong",{parentName:"li"},"true")),(0,a.kt)("li",{parentName:"ul"},"Tipo: ",(0,a.kt)("strong",{parentName:"li"},"Booleano"))),(0,a.kt)("p",null,"Se true, si interrompe quando un'attivit\xe0 genera un errore."),(0,a.kt)("p",null,"Questa configurazione non influisce sul codice di uscita. Anche se viene utilizzato ",(0,a.kt)("inlineCode",{parentName:"p"},"--no-bail"),", tutte le attivit\xe0 finiranno ma se una qualsiasi delle attivit\xe0 fallisce, il comando uscir\xe0 con un codice diverso da zero."),(0,a.kt)("p",null,"Esempio (esegui test in ogni pacchetto, continua se i test falliscono in uno di essi):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm -r --no-bail test\n")),(0,a.kt)("h3",{id:"--no-sort"},"--","[no-]","sort"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Predefinito: ",(0,a.kt)("strong",{parentName:"li"},"true")),(0,a.kt)("li",{parentName:"ul"},"Tipo: ",(0,a.kt)("strong",{parentName:"li"},"Booleano"))),(0,a.kt)("p",null,"Quando ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", i pacchetti vengono ordinati topologicamente (dipendenze prima dei dipendenti). Passa ",(0,a.kt)("inlineCode",{parentName:"p"},"--no-sort")," per disabilitare."),(0,a.kt)("p",null,"Esempio:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm -r --no-sort test\n")),(0,a.kt)("h3",{id:"--reverse"},"--reverse"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Predefinito: ",(0,a.kt)("strong",{parentName:"li"},"false")),(0,a.kt)("li",{parentName:"ul"},"Tipo: ",(0,a.kt)("strong",{parentName:"li"},"booleano"))),(0,a.kt)("p",null,"Quando ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", l'ordine dei pacchetti viene invertito."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm -r --reverse run clean\n")),(0,a.kt)("h3",{id:"--filter-selettore_pacchetto"},"--filter ","<","selettore_pacchetto",">"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/it/next/filtering"},"Ulteriori informazioni sui filtri.")))}d.isMDXComponent=!0}}]);