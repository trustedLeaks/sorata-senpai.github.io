(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{203:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(6),c=(n(0),n(359)),l={id:"splitStack",title:"itm_hf.splitStack",sidebar_label:"splitStack"},i={id:"server_functions/classes/helpfunctions/splitStack",title:"itm_hf.splitStack",description:"! src/classes/helpfunc.js",source:"@site/docs\\server_functions\\classes\\helpfunctions\\splitStack.md",permalink:"/docs/server_functions/classes/helpfunctions/splitStack",editUrl:"https://github.com/Sorata-senpai/sorata-senpai.github.io/tree/developpement/emutarkovwiki/docs/server_functions/classes/helpfunctions/splitStack.md",sidebar_label:"splitStack",sidebar:"Developpers resources",previous:{title:"itm_hf.replaceIds",permalink:"/docs/server_functions/classes/helpfunctions/replaceIds"},next:{title:"itm_hf.itm_hf.templatesWithParent",permalink:"/docs/server_functions/classes/helpfunctions/templatesWithParent"}},o=[],p={rightToc:o};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("img",Object(r.a)({parentName:"p"},{src:"/img/github.png",alt:null}))," ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/TrustedSourceLeaks/LeakedServer/blob/master/src/classes/helpfunc.js"}),"src/classes/helpfunc.js")),Object(c.b)("p",null,"Explanation text"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters"),":"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"pmcData(",Object(c.b)("inlineCode",{parentName:"td"},"object"),")"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"This value must contain the pmcData object")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"itemID(",Object(c.b)("inlineCode",{parentName:"td"},"string"),")"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"This value must contain a valid item ID")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Output"),":"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"string"),": Explanation"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Exemple"),":"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"let pmcData = profile_f.profileServer.getPmcProfile(sessionID);\nconst FreeSpace = itm_hf.splitStack(pmcData, itemID)\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Result"),":"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"//Result here\n")))}s.isMDXComponent=!0},359:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),b=s(n),m=r,f=b["".concat(l,".").concat(m)]||b[m]||u[m]||c;return n?a.a.createElement(f,i(i({ref:t},p),{},{components:n})):a.a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,l=new Array(c);l[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<c;p++)l[p]=n[p];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);