(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{171:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(6),o=(r(0),r(359)),c={id:"singleProductionStart",title:"singleProductionStart",sidebar_label:"singleProductionStart"},i={id:"server_functions/classes/hideout/singleProductionStart",title:"singleProductionStart",description:"! src/classes/hideout.js",source:"@site/docs\\server_functions\\classes\\hideout\\singleProductionStart.md",permalink:"/docs/server_functions/classes/hideout/singleProductionStart",editUrl:"https://github.com/Sorata-senpai/sorata-senpai.github.io/tree/developpement/emutarkovwiki/docs/server_functions/classes/hideout/singleProductionStart.md",sidebar_label:"singleProductionStart",sidebar:"Developpers resources",previous:{title:"scavCaseProductionStart",permalink:"/docs/server_functions/classes/hideout/scavCaseProductionStart"},next:{title:"takeItemsFromAreaSlots",permalink:"/docs/server_functions/classes/hideout/takeItemsFromAreaSlots"}},s=[],l={rightToc:s};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/github.png",alt:null}))," ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/TrustedSourceLeaks/LeakedServer/blob/master/src/classes/hideout.js#L3"}),"src/classes/hideout.js")),Object(o.b)("p",null,"Explanation text"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Parameters"),":"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"pmcData(",Object(o.b)("font",{color:"red"},"object"),")"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"This is done from reversing ",Object(o.b)("inlineCode",{parentName:"td"},"escape from tarkov")," game")))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Output"),":"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("font",{color:"purple"},"string")),": Explanation"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Code to Example\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Result"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"//Result here\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"Public function singleProductionStart(pmcData, body, sessionID)\n\nInputs :\n- pmcData : profile Data \n- body : game call data (request)\n- sessionID : player SessionID\n\nOutput : Global Output (link : game is waiting for output)\n\ncalled when any craftable item from the hideout has started,, this function call registerProduction()\n")))}u.isMDXComponent=!0},359:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,m=p["".concat(c,".").concat(d)]||p[d]||b[d]||o;return r?a.a.createElement(m,i(i({ref:t},l),{},{components:r})):a.a.createElement(m,i({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);