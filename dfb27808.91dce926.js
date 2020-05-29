(window.webpackJsonp=window.webpackJsonp||[]).push([[225],{327:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return d}));var r=a(2),n=a(6),b=(a(0),a(354)),l={id:"create_weather",title:"Creating a weather preset",sidebar_label:"Tutorial - How to create a weather preset"},c={id:"tutorials/create_weather",title:"Creating a weather preset",description:"!",source:"@site/docs\\tutorials\\create_weather.md",permalink:"/docs/tutorials/create_weather",editUrl:"https://github.com/Sorata-senpai/sorata-senpai.github.io/tree/developpement/emutarkovwiki/docs/tutorials/create_weather.md",sidebar_label:"Tutorial - How to create a weather preset",sidebar:"docs",previous:{title:"Change some traders behaviour",permalink:"/docs/tutorials/edit_traders_values"},next:{title:"Modders resources",permalink:"/docs/resources/index_mods"}},i=[{value:"STILL UNDER DEVELOPMENT",id:"still-under-development",children:[]},{value:"Creating weather",id:"creating-weather",children:[]},{value:"Editing weather",id:"editing-weather",children:[{value:"ID&#39;s",id:"ids",children:[]},{value:"Ranges",id:"ranges",children:[]}]},{value:"Official links",id:"official-links",children:[]}],o={rightToc:i};function d(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,Object(b.b)("img",Object(r.a)({parentName:"p"},{src:"/img/tutorials_weather.png",alt:null}))),Object(b.b)("h2",{id:"still-under-development"},"STILL UNDER DEVELOPMENT"),Object(b.b)("p",null,"So yeah, information on this page is likely to change in the future"),Object(b.b)("h2",{id:"creating-weather"},"Creating weather"),Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},"Copy-paste a weather present from ",Object(b.b)("inlineCode",{parentName:"li"},"ServerDir/db/weather/")),Object(b.b)("li",{parentName:"ol"},"Rename the weather present to what you want"),Object(b.b)("li",{parentName:"ol"},"Make changes where needed")),Object(b.b)("p",null,"We recommend you to add the weather as a mod. More info here : ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://sorata-senpai.github.io/docs/tutorials/create_a_mod"}),"https://sorata-senpai.github.io/docs/tutorials/create_a_mod")),Object(b.b)("h2",{id:"editing-weather"},"Editing weather"),Object(b.b)("p",null,"Note that the weather files are loaded only when the server starts. If you make changes to a weather profile during the game, restart the server for the changes to take into effect."),Object(b.b)("h3",{id:"ids"},"ID's"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"id"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"wind_speed"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"wind speed")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"wind_direction"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"wind direction")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"wind_gustiness"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"wind gustiness")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"cloud"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"cloud density")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"fog"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"fog")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"rain"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"rain puddles intensity")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"rainIntensity"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"falling rain intensity")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"temp"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"temperature")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"accelerate"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"weather change speed multiplier")))),Object(b.b)("h3",{id:"ranges"},"Ranges"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"id"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"min"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"max"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"wind_speed"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"0.0"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1.0")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"wind_direction"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"8")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"wind_gustiness"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"0.0"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1.0")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"cloud"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-1.0"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1.0")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"fog"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"0.0"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"rain"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"0"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"rainIntensity"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"0"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"2")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"temp"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-50"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"50")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"accelerate"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"0"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"10")))),Object(b.b)("h2",{id:"official-links"},"Official links"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Discord link"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://discord.gg/3sR4KKS"}),"https://discord.gg/3sR4KKS")))}d.isMDXComponent=!0},354:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=n.a.createContext({}),d=function(e){var t=n.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=d(e.components);return n.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},j=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,l=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),p=d(a),j=r,u=p["".concat(l,".").concat(j)]||p[j]||O[j]||b;return a?n.a.createElement(u,c(c({ref:t},o),{},{components:a})):n.a.createElement(u,c({ref:t},o))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,l=new Array(b);l[0]=j;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var o=2;o<b;o++)l[o]=a[o];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"}}]);