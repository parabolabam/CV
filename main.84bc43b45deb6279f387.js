!function(e){function t(t){for(var n,l,o=t[0],i=t[1],s=t[2],f=0,p=[];f<o.length;f++)l=o[f],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&p.push(r[l][0]),r[l]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(u&&u(t);p.length;)p.shift()();return c.push.apply(c,s||[]),a()}function a(){for(var e,t=0;t<c.length;t++){for(var a=c[t],n=!0,o=1;o<a.length;o++){var i=a[o];0!==r[i]&&(n=!1)}n&&(c.splice(t--,1),e=l(l.s=a[0]))}return e}var n={},r={0:0},c=[];function l(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=e,l.c=n,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(a,n,function(t){return e[t]}.bind(null,n));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/CV";var o=window.webpackJsonp=window.webpackJsonp||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var s=0;s<o.length;s++)t(o[s]);var u=i;c.push(["9b1e837f9fa2db581602",2,4,3,5,1]),a()}({"348bc3fc6fc65fb3c7bb":function(e,t,a){},"743ca361969418fa8174":function(e,t,a){},"84e159f6cae996e0f9cb":function(e,t,a){},"851cdd752c68ff29dd5a":function(e,t,a){},"8b90967bef985c12c7cb":function(e,t,a){},"9b1e837f9fa2db581602":function(e,t,a){"use strict";a.r(t);var n=a("8af190b70a6bc55c6f1b"),r=a.n(n),c=a("63f14ac74ce296f77f4d"),l=(a("acb47aca90350934ae57"),a("e2cc5dd5f84440be3c33"),a("348bc3fc6fc65fb3c7bb"),a("cae353f1f8553e68d1a3"),a("8a2d1b95e05b6a321e74")),o=a.n(l);function i(e){var t=e.mobileSource,a=e.regularSource,n=e.alt,c=e.width,l=void 0===c?200:c,o=e.height,i=void 0===o?200:o;return r.a.createElement("picture",null,r.a.createElement("source",{srcSet:t}),r.a.createElement("img",{width:l,height:i,src:a,alt:n}))}i.propTypes={mobileSource:o.a.string,regularSource:o.a.string.isRequired,alt:o.a.string.isRequired};a("be8406b7788a1f739c0d");function s(e){var t=e.children,a=e.href,n=e.targetBlank,c=void 0===n||n;return r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{className:"link",href:a,target:c?"_blank":"_self",rel:"noopener noreferrer"},t))}s.propTypes={href:o.a.string,targetBlank:o.a.bool};"mailto:".concat("sorokinvladislav1402@gmail.com");var u="https://github.com/parabolabam";a("84e159f6cae996e0f9cb");function f(){return r.a.createElement(s,{href:u},r.a.createElement("div",{className:"avatar"},r.a.createElement(i,{regularSource:"https://avatars.githubusercontent.com/u/30412774?v=4",alt:"profile image of Vladislav Sorokin"})))}a("8b90967bef985c12c7cb");function p(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"greeting"},r.a.createElement("span",null,"Hi, I'm Vlad, software engineer.")," ",r.a.createElement("div",{className:"greeting__avatar"},r.a.createElement(f,null))))}function m(e){var t=e.level,a=e.children;switch(t){case 1:return r.a.createElement("h1",null,a);case 2:return r.a.createElement("h2",null,a);case 3:return r.a.createElement("h3",null,a);default:return r.a.createElement("h4",null,a)}}m.propTypes={level:o.a.number.isRequired};a("ff34314e794d9da79ed2");function d(e){var t=e.projectName,a=e.projectDescription,n=e.startDate,c=e.endDate,l=e.technologies;return r.a.createElement("div",{className:"project-card"},r.a.createElement("h3",null,r.a.createElement("p",{className:"project-card__project-name"},t)),r.a.createElement("p",null,a),r.a.createElement("div",{className:"project-card__period"},r.a.createElement("span",null,n)," - ",r.a.createElement("span",null,c)),r.a.createElement("div",{className:"project-card__tech-stack"},l.map((function(e){return r.a.createElement(s,{key:e.id,href:e.link},e.name)}))))}d.propTypes={id:o.a.string,projectName:o.a.string,projectDescription:o.a.string,startDate:o.a.string,endDate:o.a.string,technologies:o.a.arrayOf(o.a.shape({id:o.a.number,link:o.a.string,name:o.a.string,comment:o.a.string}))};a("cd443090a770cc7b1f3c");function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==a)return;var n,r,c=[],l=!0,o=!1;try{for(a=a.call(e);!(l=(n=a.next()).done)&&(c.push(n.value),!t||c.length!==t);l=!0);}catch(e){o=!0,r=e}finally{try{l||null==a.return||a.return()}finally{if(o)throw r}}return c}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return h(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return h(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function g(e){var t=e.isInitiallyCollapsed,a=void 0===t||t,c=e.altForExpandButton,l=void 0===c?"More":c,o=e.altForCollapseButton,i=void 0===o?"Less":o,s=e.children,u=b(Object(n.useState)(a),2),f=u[0],p=u[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{className:"expandable__label"},r.a.createElement("input",{className:"hidden-accessibly",type:"checkbox",onClick:function(){return p(!f)}}),r.a.createElement("div",{className:f?"expandable__icon":"expandable__icon expandable__icon--rotated"},"\ud83d\udc47"),f?l:i),r.a.createElement("div",{className:f?"expandable__expanded-content expandable__expanded-content--collapsed":"expandable__expanded-content"},s))}var v=[{id:"lal9840fhnbio",projectName:"DataXu",projectDescription:"dataxu is a software company that helps marketing professionals use data to improve their advertising",startDate:"04/01/2019",endDate:"09/30/2019",technologies:[{id:1,link:"https://angular.io/",name:"Angular 2.x"},{id:2,link:"https://www.w3.org/TR/html52/",name:"HTML5"},{id:3,link:"https://www.w3.org/Style/CSS/specs.en.html",name:"CSS3"},{id:4,link:"https://sass-lang.com/",name:"SCSS"}]}];a("851cdd752c68ff29dd5a");function y(){return y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},y.apply(this,arguments)}function E(){return r.a.createElement(g,{altForExpandButton:"More about projects",altForCollapseButton:"Collapse"},r.a.createElement("div",{className:"lineate-projects"},v.map((function(e){return r.a.createElement(d,y({key:e.id},e))}))))}a("a780a2e405c76edb7022");function k(e){var t=e.link,a=e.linkText,n=e.shortDescription,c=e.children;return r.a.createElement("section",{className:"activity"},r.a.createElement(m,{level:2},r.a.createElement(s,{href:t},r.a.createElement("span",{className:"activity__link-text"},a))),r.a.createElement("p",{className:"activity__short-description"},n),c)}function _(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(k,{link:"https://lineate.ru/",linkText:"Lineate Team Member",shortDescription:"Occupied software engineer position"},r.a.createElement(E,null)),r.a.createElement(k,{link:u,linkText:"Github",shortDescription:" Yet there is no projects I've created but code examples might be found here"}),r.a.createElement(k,{link:"https://twitter.com/parabolabam",linkText:"Twitter",shortDescription:"Share my thoughts and experience mostly here"}),r.a.createElement(k,{link:"https://www.instagram.com/parabola_bam/",linkText:"Instagram",shortDescription:"Simple life of open person"}),r.a.createElement(k,{link:"https://t.me/VladislawSorokin",linkText:"Telegram",shortDescription:"Here you can contact me quickly and easily"}))}a("743ca361969418fa8174");var w=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"layout"},r.a.createElement(p,null),r.a.createElement(_,null)))};Object(c.hydrate)(r.a.createElement(w,null),document.getElementById("root"))},a780a2e405c76edb7022:function(e,t,a){},acb47aca90350934ae57:function(e,t,a){},be8406b7788a1f739c0d:function(e,t,a){},cae353f1f8553e68d1a3:function(e,t,a){},cd443090a770cc7b1f3c:function(e,t,a){},e2cc5dd5f84440be3c33:function(e,t,a){},ff34314e794d9da79ed2:function(e,t,a){}});