"use strict";(self.webpackChunkcf_infra_docs=self.webpackChunkcf_infra_docs||[]).push([[9504],{77722:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>l,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var o=t(85893),r=t(11151);const s={},a="Dropping CUDA 11.2 on 2024 April 22",i={permalink:"/news/2024/03/06/dropping-cuda-112",source:"@site/news/2024-03-06-dropping-cuda-112.md",title:"Dropping CUDA 11.2 on 2024 April 22",description:"Conda-forge is dropping support for CUDA 11.2.",date:"2024-03-06T00:00:00.000Z",tags:[],hasTruncateMarker:!1,authors:[],frontMatter:{},unlisted:!1,prevItem:{title:'Upcoming migration for stdlib("c")',permalink:"/news/2024/03/24/stdlib-migration"},nextItem:{title:"Rust 1.75 requires setting newer MACOSX_DEPLOYMENT_TARGET",permalink:"/news/2024/01/29/rust-175-osx-sdk"}},d={authorsImageUrls:[]},c=[];function p(e){const n={a:"a",code:"code",p:"p",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Conda-forge is dropping support for CUDA 11.2."}),"\n",(0,o.jsx)(n.p,{children:"The latest version of the CUDA 11 series is CUDA 11.8. At this point CUDA 11.8+\nis well-supported in conda-forge. This is a result of running extensive\nmigration efforts to upgrade conda-forge feedstocks to newer CUDA versions."}),"\n",(0,o.jsx)(n.p,{children:"CUDA 11.8 packages can be installed and run on the same hardware that CUDA 11.2\nsupports. Also CUDA 11.8 packages have optimizations for newer hardware that\nCUDA 11.2 packages do not. So there is a benefit to users to upgrade to CUDA\n11.8."}),"\n",(0,o.jsx)(n.p,{children:"A very small number of feedstocks that appear unmaintained have not been\nmigrated. Issues have been raised on those feedstock to make maintainers aware\nof this deprecation plan. Until they are updated users can still install the\nCUDA 11.2 packages they produced previously. These should continue to work.\nHowever there will be no way to rebuild these packages without also updating to\nCUDA 11.8."}),"\n",(0,o.jsxs)(n.p,{children:["To upgrade an older feedstock to CUDA 11.8, simply re-render. If the recipe has\na ",(0,o.jsx)(n.code,{children:"skip"})," or other logic that blocks this from happening, simply remove this\nlogic and re-render to add CUDA 11.8."]}),"\n",(0,o.jsxs)(n.p,{children:["The date has been sent to ensure 1 full work week for maintainers to do any\nremaining updates to move to CUDA 11.8+. In 2024 May, ",(0,o.jsx)(n.a,{href:"https://gitlab.com/nvidia/container-images/cuda/-/issues/209#note_1641845842",children:"NVIDIA plans to delete\nthe CUDA 11.2 Docker image"}),"\nthat conda-forge has been using to build for CUDA 11.2. So it will not be\npossible for conda-forge to update the CUDA 11.2 Docker image, which will make\nit much harder to maintain. Feedstock maintainers are encouraged to update\nbefore then (if they have not already done so)."]})]})}function l(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>a});var o=t(67294);const r={},s=o.createContext(r);function a(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);