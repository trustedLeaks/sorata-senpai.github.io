(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{114:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return p})),t.d(r,"rightToc",(function(){return u})),t.d(r,"default",(function(){return c}));var n=t(2),a=t(6),o=(t(0),t(210)),i={id:"applyPlayerUpgradeBonuses",title:"applyPlayerUpgradeBonuses",sidebar_label:"applyPlayerUpgradeBonuses"},p={id:"server_functions/hideout/applyPlayerUpgradeBonuses",title:"applyPlayerUpgradeBonuses",description:"Internal void applyPlayerUpgradesBonuses(pmcData,bonus)",source:"@site/docs\\server_functions\\hideout\\applyPlayerUpgradeBonuses.md",permalink:"/docs/server_functions/hideout/applyPlayerUpgradeBonuses",editUrl:"https://github.com/Sorata-senpai/sorata-senpai.github.io/tree/developpement/emutarkovwiki/docs/server_functions/hideout/applyPlayerUpgradeBonuses.md",sidebar_label:"applyPlayerUpgradeBonuses",sidebar:"Developpers resources",previous:{title:"secondsToTime",permalink:"/docs/server_functions/utility/secondsToTime"},next:{title:"continuousProductionStart",permalink:"/docs/server_functions/hideout/continuousProductionStart"}},u=[],s={rightToc:u};function c(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Internal void applyPlayerUpgradesBonuses(pmcData,bonus)"),Object(o.b)("p",null,"Inputs :"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"pmcData : profile Data "),Object(o.b)("li",{parentName:"ul"},"bonus : upgraded area bonus data (from area.stages","[stageNumber]",".bonuses)")),Object(o.b)("p",null,"OutPuts : None"),Object(o.b)("p",null,'function who is called when an area has been upgraded, aim to add some bonuses into the player profile data according to the upgraded area, bonuses in profiles are stored in "playerdata.bonuses[]"'))}c.isMDXComponent=!0},210:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return f}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),c=function(e){var r=a.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},l=function(e){var r=c(e.components);return a.a.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},b=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=c(t),b=n,f=l["".concat(i,".").concat(b)]||l[b]||d[b]||o;return t?a.a.createElement(f,p(p({ref:r},s),{},{components:t})):a.a.createElement(f,p({ref:r},s))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=b;var p={};for(var u in r)hasOwnProperty.call(r,u)&&(p[u]=r[u]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var s=2;s<o;s++)i[s]=t[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);