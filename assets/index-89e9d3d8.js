import{P as e,j as s}from"./index-c0c25b16.js";import{F as r}from"./index.es-1acbf6c4.js";import{L as i,g as n,i as d,t as m,m as h}from"./constants-8bc9471c.js";function a({mobileSource:t="",regularSource:c,alt:o,width:l=200,height:x=200}){return s.jsxs("picture",{children:[s.jsx("source",{srcSet:t}),s.jsx("img",{width:l,height:x,src:c,alt:o})]})}a.propTypes={mobileSource:e.string,regularSource:e.string.isRequired,alt:e.string.isRequired,width:e.number,height:e.number};function j(){return s.jsxs(s.Fragment,{children:[s.jsx(i,{href:n,children:s.jsx("div",{className:"avatar",children:s.jsx(a,{regularSource:"https://avatars.githubusercontent.com/u/30412774?v=4",alt:"profile image of Vladislav Sorokin"})})}),s.jsxs("div",{className:"avatar__social-media",children:[s.jsx(i,{href:d,children:s.jsx(r,{size:"2x",icon:["fab","instagram"]})}),s.jsx(i,{href:m,children:s.jsx("span",{className:"link__content",children:s.jsx(r,{size:"2x",icon:["fab","twitter"]})})}),s.jsx(i,{href:n,children:s.jsx("span",{className:"link__content",children:s.jsx(r,{size:"2x",icon:["fab","github"]})})}),s.jsx(i,{href:h,children:s.jsx("span",{className:"link__content",children:s.jsx(r,{size:"2x",icon:["fab","mastodon"]})})})]})]})}function p(){return s.jsx(s.Fragment,{children:s.jsxs("div",{className:"greeting",children:[s.jsx("span",{children:"Hi, I'm Vlad, software engineer."})," ",s.jsx("div",{className:"greeting__avatar",children:s.jsx(j,{})})]})})}export{p as default};
