(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{205:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),i=(n(0),n(210)),o={id:"edit_weapons_textures",title:"Edit weapons textures",sidebar_label:"Tutorial - Edit weapons textures"},l={id:"tutorials/edit_weapons_textures",title:"Edit weapons textures",description:"Explanation",source:"@site/docs\\tutorials\\edit_weapons_texture.md",permalink:"/docs/tutorials/edit_weapons_textures",editUrl:"https://github.com/Sorata-senpai/sorata-senpai.github.io/tree/developpement/emutarkovwiki/docs/tutorials/edit_weapons_texture.md",sidebar_label:"Tutorial - Edit weapons textures",sidebar:"docs",previous:{title:"Create a mod on EmuTarkov",permalink:"/docs/tutorials/create_a_mod"},next:{title:"Edit weapons textures with photoshop",permalink:"/docs/tutorials/photoshop_texture_editing"}},c=[{value:"Explanation",id:"explanation",children:[]},{value:"Requirements",id:"requirements",children:[]},{value:"How to start ?",id:"how-to-start-",children:[]},{value:"The end",id:"the-end",children:[]},{value:"Thanks",id:"thanks",children:[]},{value:"Official links",id:"official-links",children:[]}],s={rightToc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"explanation"},"Explanation"),Object(i.b)("p",null,"What we are going to do, is editing base gamefiles textures of a weapon, for making it a camo texture."),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Always make a backup of the file you're editing."))),Object(i.b)("h2",{id:"requirements"},"Requirements"),Object(i.b)("p",null,"In order to edit weaons textures, you will need some specific softwares. The software you need are :"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"AssetBundleExtractor - ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/DerPopo/UABE/releases"}),"https://github.com/DerPopo/UABE/releases")),Object(i.b)("li",{parentName:"ul"},"Photoshop")),Object(i.b)("h2",{id:"how-to-start-"},"How to start ?"),Object(i.b)("p",null,"Well, first of all, we are going to create a specific folder for our work, i will call it ",Object(i.b)("em",{parentName:"p"},"EditTutorial"),". In this folder i will create another folder called ",Object(i.b)("em",{parentName:"p"},"TexturesFiles")," in wich i will save my texture in a editable format.\nI'm going to edit the ",Object(i.b)("em",{parentName:"p"},"DT MDR .308")," weapon for this tutorial."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"First step: Finding the weapon textures bundle files."))),Object(i.b)("p",null,"For this, go in your gamedir ",Object(i.b)("inlineCode",{parentName:"p"},"GameDir\\EscapeFromTarkov_Data\\StreamingAssets\\Windows\\assets\\content\\weapons\\mdr\\textures")," and copy the file ",Object(i.b)("strong",{parentName:"p"},"client_assets.bundle")," to your previously made folder ",Object(i.b)("em",{parentName:"p"},"/EditTutorial/"),". We now have the file needed to make our camo weapon."),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Step two : Extracting the desired texture file."))),Object(i.b)("p",null,"For this step, we will use AssetBundleExtractor, then open AssetBundleExtractor.exe where you extracted it, you should have this window open : "),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"https://i.imgur.com/YprOfos.png",alt:"image"}))),Object(i.b)("p",null,"Click on ",Object(i.b)("em",{parentName:"p"},"File")," -> ",Object(i.b)("em",{parentName:"p"},"Open")," and select ",Object(i.b)("strong",{parentName:"p"},"client_assets.bundle")," in ",Object(i.b)("em",{parentName:"p"},"/EditTutorial/"),' folder and click "open". After doing it, this window should pop up : '),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"https://i.imgur.com/CBNxbIB.png",alt:"image"}))),Object(i.b)("p",null,'Click on "yes" and name the file to save like you want. I will call it ',Object(i.b)("em",{parentName:"p"},"extracted"),' and save.\nAfter doing this, click on the "Info" box on the main window '),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"https://i.imgur.com/8R3HDn1.png",alt:"image"}))),Object(i.b)("p",null,"and this window will pop up on the screen : "),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"https://i.imgur.com/OUgd5hg.png",alt:"image"}))),Object(i.b)("p",null,"We need to find in the list, these files :"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"weapon_dt_mdr_556x45_upper_LOD0_diff_blk")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"weapon_dt_mdr_556x45_lower_LOD0_diff_blk"),"\nYou only need to edit ",Object(i.b)("strong",{parentName:"li"},"_diff"),' files for replacing the textures.\nWhen you found them, select each file, click on "Plugins" at the right and choose ',Object(i.b)("strong",{parentName:"li"},"Export to .tga"),' then click "OK". ')),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"https://i.imgur.com/DGkrCuG.png",alt:"image"}))),Object(i.b)("p",null,"The soft will ask you to save the file, save it in ",Object(i.b)("inlineCode",{parentName:"p"},"/EditTutorial/TexturesFiles"),"."),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Step three: Edit the textures file to add the camo."))),Object(i.b)("p",null,"We are now gonna add our desired camo to the weapon. For this, open up ",Object(i.b)("em",{parentName:"p"},"Photoshop")," and open one of the file we extracted earlier.\nFor this, download any camo pattern you find, and drag the camo image into your image editing software, and put it in a new layer. Make sure it cover up the entire file like this : "),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"https://i.imgur.com/l6smFVX.jpg",alt:"image"}))),Object(i.b)("p",null,"When it's done, save the file, and keep the .tga extension. Overwrite the one you extracted earlier.\nDo the same thing for the second file !"),Object(i.b)("ol",{start:4},Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Step four: Replacing the texture in the bundle."))),Object(i.b)("p",null,"For this step, we go back into AssetBundleExtractor and select again the files in the ",Object(i.b)("strong",{parentName:"p"},"#Step2")," and click again on ",Object(i.b)("em",{parentName:"p"},"Plugins")," but now you choose ",Object(i.b)("strong",{parentName:"p"},"Edit")," and click on ",Object(i.b)("em",{parentName:"p"},"OK"),". This window should pop up : "),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"https://i.imgur.com/KA9ZucB.png",alt:"image"}))),Object(i.b)("p",null,"Click on ",Object(i.b)("strong",{parentName:"p"},"Load")," in front of ",Object(i.b)("em",{parentName:"p"},'"Texture"'),' and select the same .tga file as the one you selected. After that, click on "OK" on the both window (included the new little one that pop up after the first one). Click again on "OK" and on "YES" for saving the changes.\n',Object(i.b)("strong",{parentName:"p"},"Redo this step for each file you need to replace in the bundle file.")),Object(i.b)("ol",{start:5},Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Step five: Saving the new file."))),Object(i.b)("p",null,"Now that we have replacing the base texture by our camo, it's time to save the file, and replace the in game one !\nOn the UABE",Object(i.b)("em",{parentName:"p"}," window, select "),"File",Object(i.b)("em",{parentName:"p"}," and "),"Save",Object(i.b)("em",{parentName:"p"}," and save the file in "),"/EditTutorial/",Object(i.b)("em",{parentName:"p"}," named like this : ",Object(i.b)("strong",{parentName:"em"},"MDR_Texture")," "),"(The name is not important !)",Object(i.b)("em",{parentName:"p"},".\nWhen it's done, you can close the UABE soft, and go to your EditTutorial folder, copy the "),"MDR_Texture",Object(i.b)("em",{parentName:"p"}," file and paste it in ",Object(i.b)("inlineCode",{parentName:"em"},"GameDir\\EscapeFromTarkov_Data\\StreamingAssets\\Windows\\assets\\content\\weapons\\mdr\\textures"),".\nWhen it's done, rename the original "),"client_assets.bundle",Object(i.b)("em",{parentName:"p"}," file to ",Object(i.b)("strong",{parentName:"em"},"client_assets.bundle.old")," and rename the "),"MDR_Texture",Object(i.b)("em",{parentName:"p"}," file to "),"client_assets.bundle*."),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"https://i.imgur.com/YGnd12C.png",alt:"image"}))),Object(i.b)("ol",{start:6},Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Step six: Launch the game!"),"\nNow we have done every step of this tutorial, you can start the game, and see how your gun looks !")),Object(i.b)("p",null,"Final result : ",Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"https://i.imgur.com/VZUbL9n.jpg",alt:"image"}))),Object(i.b)("h2",{id:"the-end"},"The end"),Object(i.b)("p",null,"You now, know how to edit files textures on Escape From Tarkov ! This works for every textures on the game. Feel free to share your work on discord !"),Object(i.b)("h2",{id:"thanks"},"Thanks"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Thanks to @KandaSoranyan alias Sorata-sempai on discord for making this tutorial")),Object(i.b)("h2",{id:"official-links"},"Official links"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Discord link"),": ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://discord.gg/3sR4KKS"}),"https://discord.gg/3sR4KKS")))}p.isMDXComponent=!0},210:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(n),u=a,d=b["".concat(o,".").concat(u)]||b[u]||m[u]||i;return n?r.a.createElement(d,l(l({ref:t},s),{},{components:n})):r.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);