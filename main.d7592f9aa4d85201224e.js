!function(e){function t(t){for(var a,r,l=t[0],c=t[1],s=t[2],u=0,m=[];u<l.length;u++)r=l[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&m.push(i[r][0]),i[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);for(d&&d(t);m.length;)m.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(a=!1)}a&&(o.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},r={0:0},i={0:0},o=[];function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[];r[e]?t.push(r[e]):0!==r[e]&&{10:1,11:1}[e]&&t.push(r[e]=new Promise((function(t,n){for(var a=({}[e]||e)+".60b3888ae6241f431c60.css",i=l.p+a,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var s=(d=o[c]).getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(s===a||s===i))return t()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){var d;if((s=(d=u[c]).getAttribute("data-href"))===a||s===i)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var a=t&&t.target&&t.target.src||i,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete r[e],m.parentNode.removeChild(m),n(o)},m.href=i,document.getElementsByTagName("head")[0].appendChild(m)})).then((function(){r[e]=0})));var n=i[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,a){n=i[e]=[t,a]}));t.push(n[2]=a);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=function(e){return l.p+""+({}[e]||e)+".chunk.js"}(e);var s=new Error;o=function(t){c.onerror=c.onload=null,clearTimeout(u);var n=i[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",s.name="ChunkLoadError",s.type=a,s.request=r,n[1](s)}i[e]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(t)},l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/CV",l.oe=function(e){throw console.error(e),e};var c=window.webpackJsonp=window.webpackJsonp||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var d=s;o.push(["65baf8761d6e552ada9f",1,4,6,5,8,2,3,7,9]),n()}({"023eae6eba2525d8b5b4":function(e,t,n){},"12bc7a3be92cd47b65bc":function(e,t,n){},"65baf8761d6e552ada9f":function(e,t,n){"use strict";n.r(t);var a=n("8af190b70a6bc55c6f1b"),r=n.n(a),i=n("63f14ac74ce296f77f4d"),o=n.n(i),l=n("7ec16cbda2ecfff406c5"),c=n("95257d7d9e906422e3cb"),s=(n("acb47aca90350934ae57"),n("e2cc5dd5f84440be3c33"),n("cae353f1f8553e68d1a3"),n("6643a48240e3ce4e96c0")),u=n("8a2d1b95e05b6a321e74"),d=n.n(u);function m(e){var t=e.mobileSource,n=void 0===t?"":t,a=e.regularSource,i=e.alt,o=e.width,l=void 0===o?200:o,c=e.height,s=void 0===c?200:c;return r.a.createElement("picture",null,r.a.createElement("source",{srcSet:n}),r.a.createElement("img",{width:l,height:s,src:a,alt:i}))}m.propTypes={mobileSource:d.a.string,regularSource:d.a.string.isRequired,alt:d.a.string.isRequired,width:d.a.number,height:d.a.number};n("be8406b7788a1f739c0d");function p(e){var t=e.children,n=void 0===t?null:t,a=e.href,i=void 0===a?"#":a,o=e.targetBlank,l=void 0===o||o;return r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{className:"link",href:i,target:l?"_blank":"_self",rel:"noopener noreferrer"},n))}p.propTypes={href:d.a.string,targetBlank:d.a.bool,children:d.a.oneOfType([d.a.arrayOf(d.a.node),d.a.node])};"mailto:".concat("sorokinvladislav1402@gmail.com");var f="https://lineate.ru/",h="https://github.com/parabolabam";n("84e159f6cae996e0f9cb");function g(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{href:h},r.a.createElement("div",{className:"avatar"},r.a.createElement(m,{regularSource:"https://avatars.githubusercontent.com/u/30412774?v=4",alt:"profile image of Vladislav Sorokin"}))),r.a.createElement("div",{className:"avatar__social-media"},r.a.createElement(p,{href:"https://www.instagram.com/parabola_bam/"},r.a.createElement(s.a,{size:"2x",icon:["fab","instagram"]})),r.a.createElement(p,{href:"https://twitter.com/parabolabam"},r.a.createElement(s.a,{size:"2x",icon:["fab","twitter"]})),r.a.createElement(p,{href:h},r.a.createElement(s.a,{size:"2x",icon:["fab","github"]}))))}n("8b90967bef985c12c7cb");function b(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"greeting"},r.a.createElement("span",null,"Hi, I'm Vlad, software engineer.")," ",r.a.createElement("div",{className:"greeting__avatar"},r.a.createElement(g,null))))}n("ff34314e794d9da79ed2");function v(e){var t=e.id,n=e.projectName,a=e.projectDescription,i=e.startDate,o=e.endDate,l=e.technologies;return r.a.createElement("div",{key:t,className:"project-card"},r.a.createElement("h3",null,r.a.createElement("p",{className:"project-card__project-name"},n)),r.a.createElement("p",null,a),r.a.createElement("div",{className:"project-card__period"},r.a.createElement("span",null,i),"-",r.a.createElement("span",null,o)),r.a.createElement("div",{className:"project-card__tech-stack"},l.map((function(e){return r.a.createElement(p,{key:e.id,href:e.link},e.name)}))))}v.propTypes={id:d.a.string.isRequired,projectName:d.a.string.isRequired,projectDescription:d.a.string.isRequired,startDate:d.a.string.isRequired,endDate:d.a.string.isRequired,technologies:d.a.arrayOf(d.a.shape({id:d.a.number.isRequired,link:d.a.string.isRequired,name:d.a.string.isRequired,comment:d.a.string}))};n("12bc7a3be92cd47b65bc");function y(e){var t=e.children,n=e.onClick;return r.a.createElement("button",{onClick:n,className:"button",type:"button"},t)}n("cd443090a770cc7b1f3c");function w(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var a,r,i=[],o=!0,l=!1;try{for(n=n.call(e);!(o=(a=n.next()).done)&&(i.push(a.value),!t||i.length!==t);o=!0);}catch(e){l=!0,r=e}finally{try{o||null==n.return||n.return()}finally{if(l)throw r}}return i}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return E(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return E(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function k(e){var t=e.isInitiallyCollapsed,n=void 0===t||t,i=e.altForExpandButton,o=void 0===i?"More":i,l=e.altForCollapseButton,c=void 0===l?"Less":l,s=e.children,u=void 0===s?null:s,d=w(Object(a.useState)(n),2),m=d[0],p=d[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,{type:"button",id:"expandable__input",onClick:function(){p(!m)}},"\ud83d\udc47"," ",m?o:c),m?null:r.a.createElement("div",{className:"expandable__expanded-content"},u))}k.propTypes={isInitiallyCollapsed:d.a.bool,altForExpandButton:d.a.string,altForCollapseButton:d.a.string,children:d.a.oneOfType([d.a.arrayOf(d.a.node),d.a.node])};n("e3d60a93d6779adaf444");function S(e){var t=e.projects;return r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,{altForExpandButton:"More about projects",altForCollapseButton:"Collapse"},r.a.createElement("div",{className:"projects"},t.map((function(e){return r.a.createElement(v,{key:e.id,id:e.id,projectName:e.projectName,projectDescription:e.projectDescription,startDate:e.startDate,endDate:e.endDate,technologies:e.technologies})})))))}var T=[{id:"1",projectName:"DataXu",projectDescription:"dataxu is a software company that helps marketing professionals use data to improve their advertising",startDate:"04/01/2019",endDate:"09/30/2019",technologies:[{id:1,link:"https://angular.io/",name:"Angular 2.x"},{id:2,link:"https://www.w3.org/TR/html52/",name:"HTML5"},{id:3,link:"https://www.w3.org/Style/CSS/specs.en.html",name:"CSS3"},{id:4,link:"https://sass-lang.com/",name:"SCSS"}]},{id:"2",projectName:"OnDeck",projectDescription:"Application for small entrepreneurs (or businesses) helping them retrieve a loan for business aims",startDate:"09/01/2019",endDate:"03/30/2020",technologies:[{id:1,link:"https://vuejs.org/",name:"Vue.js"},{id:2,link:"https://www.w3.org/TR/html52/",name:"HTML5"},{id:3,link:"https://www.w3.org/Style/CSS/specs.en.html",name:"CSS3"},{id:4,link:"https://sass-lang.com/",name:"SCSS"}]},{id:"3",projectName:"MyRetro",projectDescription:"The application allowing to hold retro occasions which is alternate for funRetro",startDate:"03/30/2020",endDate:"07/30/2020",technologies:[{id:1,link:"https://vuejs.org/",name:"Vue.js"},{id:2,link:"https://www.w3.org/TR/html52/",name:"HTML5"},{id:3,link:"https://www.w3.org/Style/CSS/specs.en.html",name:"CSS3"},{id:4,link:"https://sass-lang.com/",name:"SCSS"},{id:5,link:"https://vuex.vuejs.org/",name:"Vuex"},{id:6,link:"https://hapi.dev/module/nes",name:"hapi"},{id:7,link:"https://www.docker.com/products",name:"Docker"},{id:8,name:"Docker Compose",link:"https://docs.docker.com/compose/"},{id:9,name:"Jenkins",link:"https://www.jenkins.io/"}]},{id:"4",projectName:"Warner Music Group",projectDescription:"the internal Warner music application with licensing purpose which helps handling copyright rights",startDate:"07/30/2020",endDate:"09/01/2021",technologies:[{id:1,link:"https://angular.io/",name:"Angular 2.x"},{id:2,link:"https://datorama.github.io/akita/",name:"Akita"},{id:3,link:"https://www.typescriptlang.org/",name:"Typescript"},{id:4,link:"https://www.jenkins.io/",name:"Jenkins"}]},{id:"5",projectName:"Telenav SoW",projectDescription:"the application working with large data sets on both UI and backend side rendering information about trips and events on roads",startDate:"04/24/2021",endDate:"04/24/2021",technologies:[{id:1,link:"https://angular.io/",name:"Angular 2.x"},{id:2,link:"https://datorama.github.io/akita/",name:"Akita"},{id:3,link:"https://www.typescriptlang.org/",name:"Typescript"},{id:4,link:"https://www.jenkins.io/",name:"Jenkins"}]}];function j(){return r.a.createElement(S,{projects:T})}var _=[{id:"1",projectName:"SuranceBay",projectDescription:"The USA iternal Application to provide an ability to serve insurance to insurance companies",startDate:"01/09/2019",endDate:"Present Time",technologies:[{id:1,link:"https://angular.io/",name:"Angular 2.x"},{id:2,link:"https://www.w3.org/TR/html52/",name:"HTML5"},{id:3,link:"https://www.w3.org/Style/CSS/specs.en.html",name:"CSS3"},{id:4,link:"https://sass-lang.com/",name:"SCSS"}]}];function D(){return r.a.createElement(S,{projects:_})}function N(e){var t=e.level,n=e.children;switch(t){case 1:return r.a.createElement("h1",null,n);case 2:return r.a.createElement("h2",null,n);case 3:return r.a.createElement("h3",null,n);default:return r.a.createElement("h4",null,n)}}N.propTypes={level:d.a.number.isRequired,children:d.a.oneOfType([d.a.arrayOf(d.a.node),d.a.node])};n("a780a2e405c76edb7022");function C(e){var t=e.link,n=e.linkText,a=e.shortDescription,i=e.children,o=void 0===i?null:i;return r.a.createElement("section",{className:"activity"},r.a.createElement(N,{level:2},r.a.createElement(p,{href:t},r.a.createElement("span",{className:"activity__link-text"},n))),r.a.createElement("p",{className:"activity__short-description"},a),o)}function O(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(C,{link:f,linkText:"Lineate Team Member",shortDescription:"Occupied software engineer position"},r.a.createElement(j,null)),r.a.createElement(C,{link:f,linkText:"Epam Team Member",shortDescription:"Occupied software engineer position"},r.a.createElement(D,null)))}C.propTypes={link:d.a.string.isRequired,linkText:d.a.string.isRequired,shortDescription:d.a.string.isRequired,children:d.a.oneOfType([d.a.arrayOf(d.a.node),d.a.node])};var x=n("5212d816ecd12fee6f61"),I=function(){return r.a.createElement("span",null,"Loading...")},A=r.a.lazy((function(){return n.e(10).then(n.bind(null,"57c45f0f26ff9d5c2239"))})),R=r.a.lazy((function(){return n.e(11).then(n.bind(null,"ba02f666cf65644cc92e"))})),F=function(e){var t=e.children,n=Object(x.useMediaPredicate)("(prefers-color-scheme: light)"),a=Object(x.useMediaPredicate)("(prefers-color-scheme: dark)");return r.a.createElement(r.a.Fragment,null,r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(I,null)},a&&r.a.createElement(A,null),n&&r.a.createElement(R,null)),t)},M=F;function q(){return r.a.createElement("header",null)}F.propTypes={children:d.a.oneOfType([d.a.arrayOf(d.a.node),d.a.node])};n("023eae6eba2525d8b5b4");function B(){return r.a.createElement("footer",{className:"footer"},(new Date).toDateString())}n("8d28bdb093bdd5af837d");function P(){return r.a.createElement("a",{href:"https://github.com/parabolabam/CV",className:"github-ribbon"},r.a.createElement("img",{loading:"lazy",width:"149",height:"149",src:"https://github.blog/wp-content/uploads/2008/12/forkme_right_white_ffffff.png?resize=149%2C149",className:"attachment-full size-full",alt:"Fork me on GitHub","data-recalc-dims":"1"}))}n("834b90d5b93318034aaf");function L(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(P,null),r.a.createElement(q,null),r.a.createElement("div",{className:"layout"},t),r.a.createElement(B,null))}L.propTypes={children:d.a.oneOfType([d.a.arrayOf(d.a.node),d.a.node])};n("743ca361969418fa8174");var z=function(){return r.a.createElement(M,null,r.a.createElement(L,null,r.a.createElement(b,null),r.a.createElement(O,null)))};l.b.add(c.d,c.b,c.c,c.a),o.a.render(r.a.createElement(z,null),document.getElementById("root"))},"698d75b157f24ae829cc":function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"===typeof window&&(n=window)}e.exports=n},"743ca361969418fa8174":function(e,t,n){},"834b90d5b93318034aaf":function(e,t,n){},"84e159f6cae996e0f9cb":function(e,t,n){},"8b90967bef985c12c7cb":function(e,t,n){},"8d28bdb093bdd5af837d":function(e,t,n){},a780a2e405c76edb7022:function(e,t,n){},acb47aca90350934ae57:function(e,t,n){},be8406b7788a1f739c0d:function(e,t,n){},cae353f1f8553e68d1a3:function(e,t,n){},cd443090a770cc7b1f3c:function(e,t,n){},e2cc5dd5f84440be3c33:function(e,t,n){},e3d60a93d6779adaf444:function(e,t,n){},e9aab379f407c6096333:function(e,t,n){(function(e){var a="undefined"!==typeof e&&e||"undefined"!==typeof self&&self||window,r=Function.prototype.apply;function i(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new i(r.call(setTimeout,a,arguments),clearTimeout)},t.setInterval=function(){return new i(r.call(setInterval,a,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(a,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout((function(){e._onTimeout&&e._onTimeout()}),t))},n("c4f90655ae719ce885a6"),t.setImmediate="undefined"!==typeof self&&self.setImmediate||"undefined"!==typeof e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!==typeof self&&self.clearImmediate||"undefined"!==typeof e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n("698d75b157f24ae829cc"))},ff34314e794d9da79ed2:function(e,t,n){}});