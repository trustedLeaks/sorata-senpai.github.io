(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{163:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(2),i=n(6),o=(n(0),n(354)),r={id:"development-environment-setup",title:"How to setup the files",sidebar_label:"Tutorial - How to setup the files"},l={id:"tutorials/development-environment-setup",title:"How to setup the files",description:"!",source:"@site/docs\\tutorials\\development-environment-setup.md",permalink:"/docs/tutorials/development-environment-setup",editUrl:"https://github.com/Sorata-senpai/sorata-senpai.github.io/tree/developpement/emutarkovwiki/docs/tutorials/development-environment-setup.md",sidebar_label:"Tutorial - How to setup the files",sidebar:"docs",previous:{title:"Index - EmuTarkov Tutorial",permalink:"/docs/tutorials/index_tutorials"},next:{title:"How to report a bug",permalink:"/docs/tutorials/bug-report"}},c=[{value:"Requirements",id:"requirements",children:[]},{value:"1. Installing your developer environment",id:"1-installing-your-developer-environment",children:[{value:"Visual Studio 2019 (VC2019)",id:"visual-studio-2019-vc2019",children:[]},{value:"Visual Studio Codium (VSCodium)",id:"visual-studio-codium-vscodium",children:[]},{value:"NodeJS",id:"nodejs",children:[]},{value:"Github Desktop",id:"github-desktop",children:[]}]},{value:"2. Obtaining the files",id:"2-obtaining-the-files",children:[]},{value:"3. Setting up the server",id:"3-setting-up-the-server",children:[{value:"Building the server",id:"building-the-server",children:[]},{value:"Building the modules",id:"building-the-modules",children:[]}]},{value:"Thanks",id:"thanks",children:[]},{value:"Revisions",id:"revisions",children:[]},{value:"Official links",id:"official-links",children:[]}],b={rightToc:c};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/tutorials_settingup.png",alt:null}))),Object(o.b)("h2",{id:"requirements"},"Requirements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/join"}),"A github account")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://account.microsoft.com/account"}),"A microsoft account")," (for Visual Studio 2019)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://visualstudio.microsoft.com/en/vs/community/"}),"Visual Studio 2017 / 2019")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://vscodium.com/"}),"VSCodium")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://desktop.github.com/"}),"Github Desktop")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://nodejs.org/en/"}),"NodeJS")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"http://angusj.com/resourcehacker/"}),"Resource hacker")),Object(o.b)("li",{parentName:"ul"},"A copy of escape from tarkov which matches with emutarkov\u2019s work"),Object(o.b)("li",{parentName:"ul"},"A working internet connection")),Object(o.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Make sure to follow ",Object(o.b)("strong",{parentName:"p"},"all the steps")," below before asking help. Don't assume things Wand carefully read ",Object(o.b)("strong",{parentName:"p"},"everything"),"."))),Object(o.b)("h2",{id:"1-installing-your-developer-environment"},"1. Installing your developer environment"),Object(o.b)("h3",{id:"visual-studio-2019-vc2019"},"Visual Studio 2019 (VC2019)"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Download Visual Studio Community edition"),Object(o.b)("li",{parentName:"ol"},"Run the installer"),Object(o.b)("li",{parentName:"ol"},"For workload, select .NET Desktop (C#)"),Object(o.b)("li",{parentName:"ol"},"Press install"),Object(o.b)("li",{parentName:"ol"},"Login with your microsoft account when prompted")),Object(o.b)("h3",{id:"visual-studio-codium-vscodium"},"Visual Studio Codium (VSCodium)"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Download Visual Studio Codium"),Object(o.b)("li",{parentName:"ol"},"Run the installer"),Object(o.b)("li",{parentName:"ol"},"Press install")),Object(o.b)("h3",{id:"nodejs"},"NodeJS"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Download NodeJS"),Object(o.b)("li",{parentName:"ol"},"Run the installer"),Object(o.b)("li",{parentName:"ol"},"Make sure to select \u201cAdd to PATH\u201d"),Object(o.b)("li",{parentName:"ol"},"Deselect installation of chocolaty"),Object(o.b)("li",{parentName:"ol"},"Press install")),Object(o.b)("h3",{id:"github-desktop"},"Github Desktop"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Download Github Desktop"),Object(o.b)("li",{parentName:"ol"},"Run the installer"),Object(o.b)("li",{parentName:"ol"},"Login with your github account")),Object(o.b)("h2",{id:"2-obtaining-the-files"},"2. Obtaining the files"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Go to ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/TrustedSourceLeaks"}),"https://github.com/TrustedSourceLeaks")," "),Object(o.b)("li",{parentName:"ol"},"Open every repository in a new tab"),Object(o.b)("li",{parentName:"ol"},"For each repository, click on \u201cClone or Download\u201d -> \u201cOpen in desktop\u201d")),Object(o.b)("h2",{id:"3-setting-up-the-server"},"3. Setting up the server"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Download ResourceHacker (zip file)"),Object(o.b)("li",{parentName:"ol"},"Unzip the resource hacker zip"),Object(o.b)("li",{parentName:"ol"},"Copy ResourceHacker.exe"),Object(o.b)("li",{parentName:"ol"},"Github desktop -> select the LeakedServer repository"),Object(o.b)("li",{parentName:"ol"},"Click the \u201cview in explorer\u201d button"),Object(o.b)("li",{parentName:"ol"},"Go to the dev folder"),Object(o.b)("li",{parentName:"ol"},"Create a new folder named \u201cbin\u201d (without quotes)"),Object(o.b)("li",{parentName:"ol"},"Paste ResourceHacker.exe in the bin folder"),Object(o.b)("li",{parentName:"ol"},"Github desktop -> select the LeakedServer repository"),Object(o.b)("li",{parentName:"ol"},"Click the \u201copen in editor\u201d button"),Object(o.b)("li",{parentName:"ol"},"VSCode -> Menu Bar -> Run -> Run task... -> NPM -> Install")),Object(o.b)("h3",{id:"building-the-server"},"Building the server"),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"This step require internet only the first time you do it"))),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"VSCode -> Menu Bar -> Run -> Run build task"),Object(o.b)("li",{parentName:"ol"},"In the ",Object(o.b)("inlineCode",{parentName:"li"},"(project root)")," folder, ",Object(o.b)("inlineCode",{parentName:"li"},"EmuTarkov-Server.exe")," should appear")),Object(o.b)("h3",{id:"building-the-modules"},"Building the modules"),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"This step require internet only the first time you do it"))),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"I will be referencing to ",Object(o.b)("inlineCode",{parentName:"p"},"EscapeFromTarkov_Data/Managed/")," as ",Object(o.b)("inlineCode",{parentName:"p"},"managed"),"."))),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Github desktop -> select the LeakedModules repository."),Object(o.b)("li",{parentName:"ol"},"Click the \u201cview in explorer\u201d button."),Object(o.b)("li",{parentName:"ol"},"Click on Modules.sln."),Object(o.b)("li",{parentName:"ol"},"VS2019 -> Menu Bar-> Build -> Rebuild solution."),Object(o.b)("li",{parentName:"ol"},"Copy-paste the contents of ",Object(o.b)("inlineCode",{parentName:"li"},"(project root directory)/build")," into the game root directory")),Object(o.b)("h2",{id:"thanks"},"Thanks"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Tutorial made by : Senko-San")),Object(o.b)("h2",{id:"revisions"},"Revisions"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"added instructions for assembly-charp, slight wording change"),Object(o.b)("li",{parentName:"ol"},"changed the instruction to reflect the new build procedure")),Object(o.b)("h2",{id:"official-links"},"Official links"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Discord link"),": ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://discord.gg/3sR4KKS"}),"https://discord.gg/3sR4KKS")))}s.isMDXComponent=!0},354:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var b=i.a.createContext({}),s=function(e){var t=i.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=s(n),u=a,m=p["".concat(r,".").concat(u)]||p[u]||d[u]||o;return n?i.a.createElement(m,l(l({ref:t},b),{},{components:n})):i.a.createElement(m,l({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var b=2;b<o;b++)r[b]=n[b];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);