(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{194:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return o}));var r=a(2),n=(a(0),a(210));const b={id:"create_weather",title:"Creating a weather preset",sidebar_label:"Tutorial - How to create a weather preset"},l={id:"tutorials/create_weather",title:"Creating a weather preset",description:"STILL UNDER DEVELOPMENT",source:"@site/docs\\tutorials\\create_weather.md",permalink:"/docs/tutorials/create_weather",editUrl:"https://github.com/Sorata-senpai/sorata-senpai.github.io/tree/developpement/emutarkovwiki/docs/tutorials/create_weather.md",sidebar_label:"Tutorial - How to create a weather preset",sidebar:"docs",previous:{title:"Change some traders behaviour",permalink:"/docs/tutorials/edit_traders_values"},next:{title:"Modders resources",permalink:"/docs/resources/index_mods"}},c=[{value:"STILL UNDER DEVELOPMENT",id:"still-under-development",children:[]},{value:"Creating weather",id:"creating-weather",children:[]},{value:"Editing weather",id:"editing-weather",children:[{value:"ID&#39;s",id:"ids",children:[]},{value:"Ranges",id:"ranges",children:[]}]},{value:"Official links",id:"official-links",children:[]}],i={rightToc:c};function o({components:e,...t}){return Object(n.b)("wrapper",Object(r.a)({},i,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"still-under-development"},"STILL UNDER DEVELOPMENT"),Object(n.b)("p",null,"So yeah, information on this page is likely to change in the future"),Object(n.b)("h2",{id:"creating-weather"},"Creating weather"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Copy-paste a weather present from ",Object(n.b)("inlineCode",{parentName:"li"},"ServerDir/db/weather/")),Object(n.b)("li",{parentName:"ol"},"Rename the weather present to what you want"),Object(n.b)("li",{parentName:"ol"},"Make changes where needed")),Object(n.b)("p",null,"We recommend you to add the weather as a mod. More info here : ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://sorata-senpai.github.io/docs/tutorials/create_a_mod"}),"https://sorata-senpai.github.io/docs/tutorials/create_a_mod")),Object(n.b)("h2",{id:"editing-weather"},"Editing weather"),Object(n.b)("p",null,"Note that the weather files are loaded only when the server starts. If you make changes to a weather profile during the game, restart the server for the changes to take into effect."),Object(n.b)("h3",{id:"ids"},"ID's"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"id"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"wind_speed"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"wind speed")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"wind_direction"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"wind direction")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"wind_gustiness"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"wind gustiness")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"cloud"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"cloud density")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"fog"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"fog")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"rain"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"rain puddles intensity")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"rainIntensity"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"falling rain intensity")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"temp"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"temperature")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"accelerate"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"weather change speed multiplier")))),Object(n.b)("h3",{id:"ranges"},"Ranges"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"id"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"min"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"max"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"wind_speed"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"0.0"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1.0")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"wind_direction"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"8")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"wind_gustiness"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"0.0"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1.0")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"cloud"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-1.0"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1.0")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"fog"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"0.0"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"rain"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"0"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"rainIntensity"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"0"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"2")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"temp"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-50"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"50")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"accelerate"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"0"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"10")))),Object(n.b)("h2",{id:"official-links"},"Official links"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Discord link"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://discord.gg/3sR4KKS"}),"https://discord.gg/3sR4KKS")))}o.isMDXComponent=!0},210:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=n.a.createContext({}),d=function(e){var t=n.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=d(e.components);return n.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},j=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,l=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),p=d(a),j=r,u=p["".concat(l,".").concat(j)]||p[j]||O[j]||b;return a?n.a.createElement(u,c(c({ref:t},o),{},{components:a})):n.a.createElement(u,c({ref:t},o))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,l=new Array(b);l[0]=j;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var o=2;o<b;o++)l[o]=a[o];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"}}]);