(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{208:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),c=(n(0),n(359)),o={id:"getPlayerStash",title:"itm_hf.getPlayerStash",sidebar_label:"getPlayerStash"},l={id:"server_functions/classes/helpfunctions/getPlayerStash",title:"itm_hf.getPlayerStash",description:"! src/classes/helpfunc.js",source:"@site/docs\\server_functions\\classes\\helpfunctions\\getPlayerStash.md",permalink:"/docs/server_functions/classes/helpfunctions/getPlayerStash",editUrl:"https://github.com/Sorata-senpai/sorata-senpai.github.io/tree/developpement/emutarkovwiki/docs/server_functions/classes/helpfunctions/getPlayerStash.md",sidebar_label:"getPlayerStash",sidebar:"Developpers resources",previous:{title:"itm_hf.getMoney",permalink:"/docs/server_functions/classes/helpfunctions/getMoney"},next:{title:"itm_hf.getSize",permalink:"/docs/server_functions/classes/helpfunctions/getSize"}},s=[],i={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("img",Object(r.a)({parentName:"p"},{src:"/img/github.png",alt:null}))," ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/TrustedSourceLeaks/LeakedServer/blob/master/src/classes/helpfunc.js"}),"src/classes/helpfunc.js")),Object(c.b)("p",null,"Calculate Size of item inputed"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters"),":"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"arg(",Object(c.b)("inlineCode",{parentName:"td"},"string"),")"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"This value must contain a Item template ID, Item Id, InventoryItem (item from inventory having _id and _tpl)")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Output"),":"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"array"),": It return an array contain both width and height value."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Exemple"),":"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const test = itm_hf.getPlayerStash(sessionID)\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Result"),":"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"[width, height]\n")))}p.isMDXComponent=!0},359:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),p=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),b=p(n),m=r,f=b["".concat(o,".").concat(m)]||b[m]||u[m]||c;return n?a.a.createElement(f,l(l({ref:t},i),{},{components:n})):a.a.createElement(f,l({ref:t},i))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var i=2;i<c;i++)o[i]=n[i];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);