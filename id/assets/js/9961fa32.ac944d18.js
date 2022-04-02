"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7325],{9613:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>s});var n=a(9496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),o=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},u=function(e){var t=o(e.components);return n.createElement(d.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=o(a),s=r,c=m["".concat(d,".").concat(s)]||m[s]||k[s]||i;return a?n.createElement(c,p(p({ref:t},u),{},{components:a})):n.createElement(c,p({ref:t},u))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,p=new Array(i);p[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,p[1]=l;for(var o=2;o<i;o++)p[o]=a[o];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},559:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>k});var n=a(2182),r=a(9028),i=(a(9496),a(9613)),p=["components"],l={id:"update",title:"pnpm update"},d=void 0,o={unversionedId:"cli/update",id:"version-5.x/cli/update",title:"pnpm update",description:"Alias: up",source:"@site/i18n/id/docusaurus-plugin-content-docs/version-5.x/cli/update.md",sourceDirName:"cli",slug:"/cli/update",permalink:"/id/5.x/cli/update",editUrl:"https://crowdin.com/project/pnpm/id",tags:[],version:"5.x",frontMatter:{id:"update",title:"pnpm update"},sidebar:"version-5.x/docs",previous:{title:"pnpm install",permalink:"/id/5.x/cli/install"},next:{title:"pnpm remove",permalink:"/id/5.x/cli/remove"}},u={},k=[{value:"RINGKASAN",id:"ringkasan",level:2},{value:"Options",id:"options",level:2},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"--latest, -L",id:"--latest--l",level:3},{value:"--global",id:"--global",level:3},{value:"--workspace",id:"--workspace",level:3},{value:"--prod, -P",id:"--prod--p",level:3},{value:"--dev, -D",id:"--dev--d",level:3},{value:"--no-optional",id:"--no-optional",level:3},{value:"--interactive, -i",id:"--interactive--i",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],m={toc:k};function s(e){var t=e.components,a=(0,r.Z)(e,p);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Alias: ",(0,i.kt)("inlineCode",{parentName:"p"},"up")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"pnpm update")," akan memperbarui paket-paket ke versi yang mutakhir berdasarkan rentang yang ditentukan."),(0,i.kt)("p",null,"Ketika digunakan tanpa argumen, perintah ini akan memperbarui semua dependensi. Anda dapat menggunakan pola untuk memperbarui dependensi tertentu."),(0,i.kt)("h2",{id:"ringkasan"},"RINGKASAN"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Perintah"),(0,i.kt)("th",{parentName:"tr",align:null},"Arti"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pnpm up")),(0,i.kt)("td",{parentName:"tr",align:null},"Akan memperbarui semua dependensi dengan mengikuti rentang waktu yang ditentukan dalam",(0,i.kt)("inlineCode",{parentName:"td"},"package.json"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pnpm up --latest")),(0,i.kt)("td",{parentName:"tr",align:null},"Akan memperbarui semua dependensi dengan mengabaikan rentang waktu yang ditentukan dalam",(0,i.kt)("inlineCode",{parentName:"td"},"package.json"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pnpm up foo@2")),(0,i.kt)("td",{parentName:"tr",align:null},"Akan memperbarui ",(0,i.kt)("inlineCode",{parentName:"td"},"foo")," ke versi paling mutakhir di versi v2")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'pnpm up "@babel/*"')),(0,i.kt)("td",{parentName:"tr",align:null},"Akan memperbarui semua dependensi di bawah lingkup ",(0,i.kt)("inlineCode",{parentName:"td"},"@babel"))))),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,i.kt)("p",null,"Menjalankan pembaruan secara bersamaan di semua subdirektori yang memiliki ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," di dalamnya (tidak termasuk ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules"),")."),(0,i.kt)("p",null,"Contoh penggunaan:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --recursive update\n# memperbarui semua paket sampai kedalaman 100 subdirektori\npnpm --recursive update --depth 100\n# memperbarui typescript ke versi paling mutakhir di setiap paket\npnpm --recursive update typescript@latest\n")),(0,i.kt)("h3",{id:"--latest--l"},"--latest, -L"),(0,i.kt)("p",null,"Ditambahkan di: v3.2.0"),(0,i.kt)("p",null,"Mengabaikan rentang versi yang ditentukan dalam ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),". Sebagai gantinya, akan menggunakan versi yang ditentukan oleh tanda ",(0,i.kt)("inlineCode",{parentName:"p"},"latest")," (mutakhir), yang mungkin berpotensi meningkatkan versi paket di seluruh versi utama."),(0,i.kt)("h3",{id:"--global"},"--global"),(0,i.kt)("p",null,"Memperbarui paket-paket global."),(0,i.kt)("h3",{id:"--workspace"},"--workspace"),(0,i.kt)("p",null,"Ditambahkan di: v4.4.0"),(0,i.kt)("p",null,"Mencoba menautkan semua paket dari workspace. Versi akan diperbarui mengikuti versi paket yang ditentukan di dalam workspace."),(0,i.kt)("p",null,"Jika paket yang tentukan mendapatkan pembaruan, perintah akan gagal jika salah satu pembaruan dependensi tidak ditemukan di dalam workspace. For instance, the following command fails if ",(0,i.kt)("inlineCode",{parentName:"p"},"express")," is not a workspace package: ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm up -r --workspace express"),"."),(0,i.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,i.kt)("p",null,"Only update packages in ",(0,i.kt)("inlineCode",{parentName:"p"},"dependencies")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,i.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,i.kt)("p",null,"Only update packages in ",(0,i.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,i.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,i.kt)("p",null,"Don't update packages in ",(0,i.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,i.kt)("h3",{id:"--interactive--i"},"--interactive, -i"),(0,i.kt)("p",null,"Added in: v4.8.0"),(0,i.kt)("p",null,"Show outdated dependencies and select which ones to update."),(0,i.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/id/5.x/filtering"},"Read more about filtering.")))}s.isMDXComponent=!0}}]);