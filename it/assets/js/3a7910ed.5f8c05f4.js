"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[613],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var i=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,k=m["".concat(p,".").concat(d)]||m[d]||c[d]||a;return n?i.createElement(k,o(o({ref:t},u),{},{components:n})):i.createElement(k,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},459:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var i=n(2182),r=n(9028),a=(n(9496),n(9613)),o=["components"],l={id:"recursive",title:"pnpm recursive"},p=void 0,s={unversionedId:"cli/recursive",id:"version-5.x/cli/recursive",title:"pnpm recursive",description:"Esegue un comando pnpm in modo ricorsivo su tutte le sottocartelle del pacchetto o su ogni spazio di lavoro disponibile. Attualmente, solo i seguenti comandi possono essere usati ricorsivamente: add, exec, install, list, outdated, publish, build, remove, run, test, unlink, update, why",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-5.x/cli/recursive.md",sourceDirName:"cli",slug:"/cli/recursive",permalink:"/it/5.x/cli/recursive",editUrl:"https://crowdin.com/project/pnpm/it",tags:[],version:"5.x",frontMatter:{id:"recursive",title:"pnpm recursive"},sidebar:"version-5.x/docs",previous:{title:"pnpm publish",permalink:"/it/5.x/cli/publish"},next:{title:"pnpm server",permalink:"/it/5.x/cli/server"}},u={},c=[{value:"Opzioni",id:"opzioni",level:2},{value:"--link-workspace-packages",id:"--link-workspace-packages",level:3},{value:"--workspace-concurrency",id:"--workspace-concurrency",level:3},{value:"--no-bail",id:"--no-bail",level:3},{value:"--no-sort",id:"--no-sort",level:3},{value:"--reverse",id:"--reverse",level:3},{value:"pnpm -r exec",id:"pnpm--r-exec",level:2},{value:"--filter &lt;selettore_pacchetto&gt;",id:"--filter-selettore_pacchetto",level:3}],m={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Esegue un comando pnpm in modo ricorsivo su tutte le sottocartelle del pacchetto o su ogni spazio di lavoro disponibile. Attualmente, solo i seguenti comandi possono essere usati ricorsivamente: ",(0,a.kt)("inlineCode",{parentName:"p"},"add"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"exec"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"install"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"list"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"outdated"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"publish"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"build"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"remove"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"run"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"test"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"unlink"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"update"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"why")),(0,a.kt)("p",null,"Alias: ",(0,a.kt)("inlineCode",{parentName:"p"},"m"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"multi"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"<command> -r")),(0,a.kt)("h2",{id:"opzioni"},"Opzioni"),(0,a.kt)("h3",{id:"--link-workspace-packages"},"--link-workspace-packages"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Predefinito: ",(0,a.kt)("strong",{parentName:"li"},"true")),(0,a.kt)("li",{parentName:"ul"},"Tipo: ",(0,a.kt)("strong",{parentName:"li"},"true, false, deep"))),(0,a.kt)("p",null,"Collega i pacchetti disponibili localmente negli spazi di lavoro di un monorepo in ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," invece di scaricarli nuovamente dal registro. Questo emula la funzionalit\xe0 simile a ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn workspaces"),"."),(0,a.kt)("p",null,"Quando \xe8 impostato su deep, i pacchetti locali possono anche essere collegati alle dipendenze secondarie."),(0,a.kt)("p",null,"Tieni presente che si consiglia invece di utilizzare ",(0,a.kt)("a",{parentName:"p",href:"/it/5.x/workspaces#link-workspace-packages"},"npmrc")," per questa impostazione, di imporre lo stesso comportamento in tutti gli ambienti. Questa opzione esiste esclusivamente in modo che tu possa sovrascriverla se necessario."),(0,a.kt)("h3",{id:"--workspace-concurrency"},"--workspace-concurrency"),(0,a.kt)("p",null,"Aggiunto nella versione: v2.13.0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Predefinito: ",(0,a.kt)("strong",{parentName:"li"},"4")),(0,a.kt)("li",{parentName:"ul"},"Tipo: ",(0,a.kt)("strong",{parentName:"li"},"Numero"))),(0,a.kt)("p",null,"Imposta il numero massimo di attivit\xe0 da eseguire contemporaneamente. Per la simultaneit\xe0 illimitata usa ",(0,a.kt)("inlineCode",{parentName:"p"},"Infinity"),"."),(0,a.kt)("h3",{id:"--no-bail"},"--","[no-]","bail"),(0,a.kt)("p",null,"Aggiunto nella versione: v2.13.0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Predefinito: ",(0,a.kt)("strong",{parentName:"li"},"true")),(0,a.kt)("li",{parentName:"ul"},"Tipo: ",(0,a.kt)("strong",{parentName:"li"},"Booleano"))),(0,a.kt)("p",null,"Se true, si interrompe quando un'attivit\xe0 genera un errore."),(0,a.kt)("p",null,"Questa configurazione non influisce sul codice di uscita. Anche se viene utilizzato ",(0,a.kt)("inlineCode",{parentName:"p"},"--no-bail"),", tutte le attivit\xe0 finiranno ma se una qualsiasi delle attivit\xe0 fallisce, il comando uscir\xe0 con un codice diverso da zero."),(0,a.kt)("p",null,"Esempio (esegui test in ogni pacchetto, continua se i test falliscono in uno di essi):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm -r --no-bail test\n")),(0,a.kt)("h3",{id:"--no-sort"},"--","[no-]","sort"),(0,a.kt)("p",null,"Aggiunto nella versione: v2.14.0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Predefinito: ",(0,a.kt)("strong",{parentName:"li"},"true")),(0,a.kt)("li",{parentName:"ul"},"Tipo: ",(0,a.kt)("strong",{parentName:"li"},"Booleano"))),(0,a.kt)("p",null,"Quando ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", i pacchetti vengono ordinati topologicamente (dipendenze prima dei dipendenti). Passa ",(0,a.kt)("inlineCode",{parentName:"p"},"--no-sort")," per disabilitare."),(0,a.kt)("p",null,"Esempio:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm -r --no-sort test\n")),(0,a.kt)("h3",{id:"--reverse"},"--reverse"),(0,a.kt)("p",null,"Aggiunto nella versione: v5.17.1"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Predefinito: ",(0,a.kt)("strong",{parentName:"li"},"false")),(0,a.kt)("li",{parentName:"ul"},"Tipo: ",(0,a.kt)("strong",{parentName:"li"},"booleano"))),(0,a.kt)("p",null,"Quando ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", l'ordine dei pacchetti viene invertito."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm -r --reverse run clean\n")),(0,a.kt)("h2",{id:"pnpm--r-exec"},"pnpm -r exec"),(0,a.kt)("p",null,"Aggiunto nella versione: v2.9.0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm -r exec -- <command> [args...]\n")),(0,a.kt)("p",null,"Questo comando esegue un comando in ogni pacchetto del monorepo."),(0,a.kt)("p",null,"Il nome del pacchetto corrente \xe8 disponibile tramite la variabile di ambiente ",(0,a.kt)("inlineCode",{parentName:"p"},"PNPM_PACKAGE_NAME")," (supportato da pnpm v2.22.0 in poi)."),(0,a.kt)("p",null,"Esempi:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# elimina le installazioni node_modules per tutti i pacchetti\npnpm -r exec -- rm -rf node_modules\n# visualizza le informazioni sui pacchetti per tutti i pacchetti\npnpm -r exec -- pnpm view $PNPM_PACKAGE_NAME\n")),(0,a.kt)("h3",{id:"--filter-selettore_pacchetto"},"--filter ","<","selettore_pacchetto",">"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/it/5.x/filtering"},"Ulteriori informazioni sui filtri.")))}d.isMDXComponent=!0}}]);