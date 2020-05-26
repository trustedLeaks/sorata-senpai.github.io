(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{154:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return a})),n.d(t,"default",(function(){return u}));var r=n(2),o=(n(0),n(210));const i={id:"secondsToTime",title:"secondsToTime",sidebar_label:"secondsToTime"},c={id:"server_functions/utility/secondsToTime",title:"secondsToTime",description:"utility.secondsToTime(int)",source:"@site/docs\\server_functions\\utility\\secondsToTime.md",permalink:"/docs/server_functions/utility/secondsToTime",editUrl:"https://github.com/Sorata-senpai/sorata-senpai.github.io/tree/developpement/emutarkovwiki/docs/server_functions/utility/secondsToTime.md",sidebar_label:"secondsToTime",sidebar:"Developpers resources",previous:{title:"removeDir",permalink:"/docs/server_functions/utility/removeDir"},next:{title:"applyPlayerUpgradeBonuses",permalink:"/docs/server_functions/hideout/applyPlayerUpgradeBonuses"}},a=[{value:"utility.secondsToTime(int)",id:"utilitysecondstotimeint",children:[]}],s={rightToc:a};function u({components:e,...t}){return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"utilitysecondstotimeint"},"utility.secondsToTime(int)"),Object(o.b)("p",null,"Transform a second time into a correct timestamp. "),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Usage exemple :")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const timestamp = utility.getTime()\nconst example = utility.secondsToTime(timestamp)\n")))}u.isMDXComponent=!0},210:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||i;return n?o.a.createElement(f,a(a({ref:t},u),{},{components:n})):o.a.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var u=2;u<i;u++)c[u]=n[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);