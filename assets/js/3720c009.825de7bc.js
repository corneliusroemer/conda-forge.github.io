"use strict";(self.webpackChunkcf_infra_docs=self.webpackChunkcf_infra_docs||[]).push([[3751],{10727:(t,e,s)=>{s.r(e),s.d(e,{default:()=>h});s(67294);var a=s(36905),r=s(71667),n=s(35281),l=s(35155),c=s(26090),i=s(90197),o=s(92503),g=s(85893);function u(t){let{title:e}=t;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(r.d,{title:e}),(0,g.jsx)(i.Z,{tag:"doc_tags_list"})]})}function d(t){let{tags:e,title:s}=t;return(0,g.jsx)(r.FG,{className:(0,a.Z)(n.k.page.docsTagsListPage),children:(0,g.jsx)("div",{className:"container margin-vert--lg",children:(0,g.jsx)("div",{className:"row",children:(0,g.jsxs)("main",{className:"col col--8 col--offset-2",children:[(0,g.jsx)(o.Z,{as:"h1",children:s}),(0,g.jsx)(c.Z,{tags:e})]})})})})}function h(t){const e=(0,l.M)();return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(u,{...t,title:e}),(0,g.jsx)(d,{...t,title:e})]})}},13008:(t,e,s)=>{s.d(e,{Z:()=>c});s(67294);var a=s(36905),r=s(33692);const n={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var l=s(85893);function c(t){let{permalink:e,label:s,count:c,description:i}=t;return(0,l.jsxs)(r.Z,{href:e,title:i,className:(0,a.Z)(n.tag,c?n.tagWithCount:n.tagRegular),children:[s,c&&(0,l.jsx)("span",{children:c})]})}},26090:(t,e,s)=>{s.d(e,{Z:()=>o});s(67294);var a=s(35155),r=s(13008),n=s(92503);const l={tag:"tag_Nnez"};var c=s(85893);function i(t){let{letterEntry:e}=t;return(0,c.jsxs)("article",{children:[(0,c.jsx)(n.Z,{as:"h2",id:e.letter,children:e.letter}),(0,c.jsx)("ul",{className:"padding--none",children:e.tags.map((t=>(0,c.jsx)("li",{className:l.tag,children:(0,c.jsx)(r.Z,{...t})},t.permalink)))}),(0,c.jsx)("hr",{})]})}function o(t){let{tags:e}=t;const s=(0,a.P)(e);return(0,c.jsx)("section",{className:"margin-vert--lg",children:s.map((t=>(0,c.jsx)(i,{letterEntry:t},t.letter)))})}},35155:(t,e,s)=>{s.d(e,{M:()=>r,P:()=>n});var a=s(95999);const r=()=>(0,a.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function n(t){const e={};return Object.values(t).forEach((t=>{const s=function(t){return t[0].toUpperCase()}(t.label);e[s]??=[],e[s].push(t)})),Object.entries(e).sort(((t,e)=>{let[s]=t,[a]=e;return s.localeCompare(a)})).map((t=>{let[e,s]=t;return{letter:e,tags:s.sort(((t,e)=>t.label.localeCompare(e.label)))}}))}}}]);