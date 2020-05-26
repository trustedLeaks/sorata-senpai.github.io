(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{202:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return l}));var n=r(2),o=r(6),a=(r(0),r(210)),i={id:"scavCaseProductionStart",title:"scavCaseProductionStart",sidebar_label:"scavCaseProductionStart"},c={id:"server_functions/hideout/scavCaseProductionStart",title:"scavCaseProductionStart",description:"Public function singleProductionStart(pmcData, body, sessionID)",source:"@site/docs\\server_functions\\hideout\\scavCaseProductionStart.md",permalink:"/docs/server_functions/hideout/scavCaseProductionStart",editUrl:"https://github.com/Sorata-senpai/sorata-senpai.github.io/tree/developpement/emutarkovwiki/docs/server_functions/hideout/scavCaseProductionStart.md",sidebar_label:"scavCaseProductionStart",sidebar:"Developpers resources",previous:{title:"registerProduction",permalink:"/docs/server_functions/hideout/registerProduction"},next:{title:"singleProductionStart",permalink:"/docs/server_functions/hideout/singleProductionStart"}},u=[],s={rightToc:u};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Public function singleProductionStart(pmcData, body, sessionID)"),Object(a.b)("p",null,"Inputs :"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"pmcData : profile Data "),Object(a.b)("li",{parentName:"ul"},"body : game call informations (request)"),Object(a.b)("li",{parentName:"ul"},"sessionID : player SessionID")),Object(a.b)("p",null,"Output : Global Output (link : game is waiting for output)"),Object(a.b)("p",null,"called when player has paid a scav case research\nregistering the production of a scav case in the hideout player profile data,\nadding items to the products results"))}l.isMDXComponent=!0},210:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(r),f=n,b=p["".concat(i,".").concat(f)]||p[f]||d[f]||a;return r?o.a.createElement(b,c(c({ref:t},s),{},{components:r})):o.a.createElement(b,c({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);