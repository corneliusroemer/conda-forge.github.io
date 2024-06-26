"use strict";(self.webpackChunkcf_infra_docs=self.webpackChunkcf_infra_docs||[]).push([[7741],{93147:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var t=o(85893),s=o(11151);const a={},c="Core Dependency Tree Package Changes",r={permalink:"/news/2020/07/16/core-dependency-tree-package-changes",source:"@site/news/2020-07-16-core-dependency-tree-package-changes.md",title:"Core Dependency Tree Package Changes",description:"conda-forge is moving to a new system for generating Core Dependency",date:"2020-07-16T00:00:00.000Z",tags:[],hasTruncateMarker:!1,authors:[],frontMatter:{},unlisted:!1,prevItem:{title:"Conda-forge is building openblas with both pthreads and openmp on Linux",permalink:"/news/2020/07/17/conda-forge-is-building-openblas-with-both-pthreads-and-openmp-on-linux"},nextItem:{title:"Moving from clang 9 to clang 10",permalink:"/news/2020/07/16/moving-from-clang-9-to-clang-10"}},i={authorsImageUrls:[]},d=[];function l(e){const n={a:"a",code:"code",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"conda-forge is moving to a new system for generating Core Dependency\nTree (CDT) packages. These changes include:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"CDT packages will no longer be built using feedstocks and this\npractice is officially deprecated."}),"\n",(0,t.jsxs)(n.li,{children:["Any current CDT packages in\nfeedstocks will be moved to the new\n",(0,t.jsx)(n.a,{href:"https://github.com/conda-forge/cdt-builds",children:"conda-forge/cdt-builds"})," repo\nand the feedstock will be archived. Members of core will be doing this\nslowly on an as-needed basis, so it may not happen right away."]}),"\n",(0,t.jsxs)(n.li,{children:["Requests for new CDTs should be submitted as PRs to the\n",(0,t.jsx)(n.a,{href:"https://github.com/conda-forge/cdt-builds",children:"conda-forge/cdt-builds"}),"\nrepo."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["These changes are being made so that conda-forge can provide access to\nCentOS 7 / glibc 2.17 for ",(0,t.jsx)(n.code,{children:"linux-64"})," builds. They will also move more of\nthe packages needed for conda-forge builds into the conda-forge channels\nmaking builds more reliable."]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>r,a:()=>c});var t=o(67294);const s={},a=t.createContext(s);function c(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);