"use strict";(self.webpackChunkcf_infra_docs=self.webpackChunkcf_infra_docs||[]).push([[9068],{82545:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>a});var s=i(85893),o=i(11151);const t={title:"2016-06-24"},r="2016-06-24: General discussion",l={id:"minutes/2016-06-24",title:"2016-06-24",description:"(please note this document previously incorrectly slated the meeting for the 17th)",source:"@site/community/minutes/2016-06-24.md",sourceDirName:"minutes",slug:"/minutes/2016-06-24",permalink:"/community/minutes/2016-06-24",draft:!1,unlisted:!1,editUrl:"https://github.com/conda-forge/conda-forge.github.io/tree/refs/heads/main/community/minutes/2016-06-24.md",tags:[],version:"current",lastUpdatedAt:1715410580,formattedLastUpdatedAt:"May 11, 2024",frontMatter:{title:"2016-06-24"},sidebar:"community",previous:{title:"2016-07-22",permalink:"/community/minutes/2016-07-22"},next:{title:"2016-06-09",permalink:"/community/minutes/2016-06-09"}},c={},a=[];function d(e){const n={a:"a",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",s:"s",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"2016-06-24-general-discussion",children:"2016-06-24: General discussion"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"(please note this document previously incorrectly slated the meeting for the 17th)"})}),"\n",(0,s.jsx)(n.p,{children:"Time: 14:00 UTC"}),"\n",(0,s.jsxs)(n.p,{children:["Hangout link: ",(0,s.jsx)(n.a,{href:"https://hangouts.google.com/call/v5olhwzpfzgzpoq5i3wthjpqpie"}),(0,s.jsx)(n.a,{href:"https://hangouts.google.com/call/v5olhwzpfzgzpoq5i3wthjpqpie",children:"https://hangouts.google.com/call/v5olhwzpfzgzpoq5i3wthjpqpie"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Attendees"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://conda-forge.hackpad.com/ep/profile/DMmBLyb21HK",children:"Bj\u02c6rn Gr\xb8ning"})}),"\n",(0,s.jsx)(n.p,{children:"Filipe"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://conda-forge.hackpad.com/ep/profile/wv6uvIZX6h0",children:"John Kirkham"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://conda-forge.hackpad.com/ep/profile/yHQTJXZ4gyS",children:"Michael Sarahan"})}),"\n",(0,s.jsx)(n.p,{children:"Jonathan Helmus"}),"\n",(0,s.jsx)(n.p,{children:"Matt Craig"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://conda-forge.hackpad.com/ep/profile/AviM60TiesB",children:"Phil Elson"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Standing items"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"How many repos?"}),"\n",(0,s.jsx)(n.li,{children:"How many contributors?"}),"\n",(0,s.jsx)(n.li,{children:"New core devs?"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Agenda"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Low level packaging"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Split gcc or work with defaults? We need a better and more consistent way to build packages that depends on Fortran and libgomp or we will keep seeing broken packages when mixing conda-forge and defaults."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Basic community practices when PR-ing to staged-recipes."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Recently I present conda-forge in a NOAA/IOOS in DC. Most people are excited about conda-forge, but reluctant to switch from the IOOS channel to conda-forge. The main reason is, of course, control.  I made my best ensured them that conda-forge will follow all the good community practices as any other open source project that they already rely on. However, there are still some concerns. I would like to present a summary of the discussion in our meeting."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["NetCDF (",(0,s.jsx)(n.s,{children:"also curl/ca-certificates and Perl packages"}),") - Done?"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"*   curl and ca-certificates are done and available. \n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Perl is no longer relevant as part of this process"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.s,{children:"GitHub rate limiting. How can we further mitigate these?"})," This is a duplicate, it appears again below."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"PR reviews"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"*   Treat every PR as a Work in Progress. At least let PRs sit for a few hours before merging them.\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Wait for answers when we ask clarification questions and avoid acting before we have them."}),"\n",(0,s.jsx)(n.li,{children:"Respect   the first reviewer by not repeating her/his review comments with   another words. That is also bad for the person submitting the PR as it   is confusing."}),"\n",(0,s.jsx)(n.li,{children:'Avoid the death by a thousand cuts: Many small "nit" comments that might scare new contributors ( ping Mike S ;-)'}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Notifications (how do we stay on top of them)"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Standardizing installs"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"*   Mention [`toolchain`](https://github.com/conda-forge/toolchain-feedstock) .\n\n        *   Discuss rollout to feedstocks.\n\n*   Get feedback on [`python-toolchain`](https://github.com/conda-forge/staged-recipes/pull/642) \n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"MSYS2"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"*   Discussing Ray Donnelly's work on MSYS2 packages and how we want to use and integrate these into conda-forge.\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Some use cases to consider OpenBLAS, FFTW, build tools, others?"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Binary data"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"*   Do we include it in recipes?\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"What kinds do we allow if any (e.g. icons)?"}),"\n",(0,s.jsx)(n.li,{children:"How do we verify the licensing?"}),"\n",(0,s.jsx)(n.li,{children:"How do we verify that they are safe?"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"OpenBLAS (on Windows)"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Dev releases: Where do they happen?"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"*   Do we do them at conda-forge?\n\n        *   Maybe add a label.\n\n*   Do we let others do them with a feedstock on their own repo?\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"How do we enforce whatever we decide?"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Conda-forge installer"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"*   We have Python 3.5 now\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Still need ",(0,s.jsx)(n.code,{children:"conda"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"New repo?"}),"\n",(0,s.jsx)(n.li,{children:"Where do we host the installers? Git tags?"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"GitHub rate limitations. How can we further mitigate these?"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"*   GitHub letter ( [](https://docs.google.com/document/d/19HLtYPwg6IKAwmxPwL7Vd3AX0n47ANP-ZTpZROn-Cwc/edit?pref=2&pli=1)https://docs.google.com/document/d/19HLtYPwg6IKAwmxPwL7Vd3AX0n47ANP-ZTpZROn-Cwc/edit?pref=2&pli=1 ).\n\n        *   +1, this reads very well\n*   +1 also -- is it appropriate to ask for advice on how to reduce our API calls or queue them up in the event they are unwilling to raise  limit?\n*   So, there have been updates since this was initially added. See this issue ( [conda forge/conda forge.github.io#88](https://github.com/conda-forge/conda-forge.github.io/issues/88) ). They wrote this letter in reply ( [](https://docs.google.com/document/d/1lzWNxvmEtrgjSBVrUWEO-imDryBOLRfObz3PkI9qT5Y/edit?pref=2&pli=1)https://docs.google.com/document/d/1lzWNxvmEtrgjSBVrUWEO-imDryBOLRfObz3PkI9qT5Y/edit?pref=2&pli=1 ). Basically, they said that it wouldn't make sense for them to bump our rate limit in this way as our current usage scales poorly. I think I agree with that sentiment. Wrote up this proposal for more optimizations ( [conda forge/conda forge.github.io#172](https://github.com/conda-forge/conda-forge.github.io/issues/172) ). Have done some of them. See this PR ( [conda forge/staged recipes#733](https://github.com/conda-forge/staged-recipes/pull/733) ) for part of the fix. This has greatly improved the situation. Though we still have some issues.\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Channel mirroring"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"*   Can this point be a little bit explained? I thought about this as well and would like to contribute to this point.\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Feedstock history"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"*   Is it sacred?\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Do we rebase/force push?"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    *   If so, under what conditions?\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"How do we avoid multiple people doing this simultaneously?"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Docker hosting solution"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"*   Docker Hub builds were broken for a week and a half.\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Have switched to quay.io currently."}),"\n",(0,s.jsx)(n.li,{children:"Mirroring quay.io image on Docker Hub."}),"\n",(0,s.jsx)(n.li,{children:"Thoughts about quay.io? Thoughts about hosting in general?"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Continuum metadata request: can we add these to linter?"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"*   example metadata: [](https://github.com/ContinuumIO/anaconda-recipes/blob/master/anaconda-build/meta.yaml#L36-L44)[https://github.com/ContinuumIO/anaconda-recipes/blob/master/anaconda-build/meta.yaml#L36-L44](https://github.com/ContinuumIO/anaconda-recipes/blob/master/anaconda-build/meta.yaml#L36-L44)\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Also, distinguish summary (limit of 77 or 80 chars) from description (unlimited)"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Google  hangouts has a max capacity of 10. Is it worth considering other  methods of communication so everyone who wants to participate can?"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Maybe this ( ",(0,s.jsx)(n.a,{href:"http://www.freeconferencecalling.com/"}),(0,s.jsx)(n.a,{href:"http://www.freeconferencecalling.com/",children:"http://www.freeconferencecalling.com/"})," ) is an option."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Bluejeans"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Continuum has webex.  Past experience is that some Linux platforms had trouble connecting"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Drop numpy 1.10 and reduce our build matrix. (Numba now works with numpy 1.11.)"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["This comment from the PR for graphviz is the best summary I've seen: ",(0,s.jsx)(n.a,{href:"https://github.com/conda-forge/staged-recipes/pull/568",children:"conda forge/staged recipes#568"}),"#issuecomment-225315370"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Thanks for pointing this out. The described solution looks reasonable and is preferable to prefixing package names. Great!"}),"\n"]}),"\n",(0,s.jsx)(n.li,{}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Signing packages"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"*   Should be easy to do. ( [](http://conda.pydata.org/docs/signed-packages.html)http://conda.pydata.org/docs/signed-packages.html )\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"There has been some interest previously."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"HTTPError: 503 Server Error: Service Unavailable: Back-end server is at capacity for url..."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"*   Seems we are regularly running into this issue under normal usage conditions.\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Had discussed previously caching packages on AppVeyor and trying to reuse those to start."}),"\n",(0,s.jsx)(n.li,{children:"Maybe we need to consider caching on all CIs."}),"\n",(0,s.jsxs)(n.li,{children:["Building our own Miniconda-like self-extracting scripts with packages via ",(0,s.jsx)(n.a,{href:"https://github.com/conda/constructor",children:(0,s.jsx)(n.code,{children:"constructor"})}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Notes"})}),"\n",(0,s.jsx)(n.p,{children:"Most pressing issues: naming conventions"}),"\n",(0,s.jsx)(n.p,{children:"Naming conventions"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Continuum's opinion : will take some time for name spaces to take effect, does not want to break anyone's setup, so keep current names, can we follow defaults where defaults have precedent?  Where Continuum does not have packages can they follows conda-forge?"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"simplegeneric issue, clobbering"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:'how to know what package gets installed when you do a "conda install gplot"? Leads to reproducible environments.'}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:'Start with no namespaces, get name-spaces after you install a "core" package (python, r, etc), then you will get packages which match the languages in your environment'}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:'Want conda to act like pip, cran, etc, "just works"'}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"What to do about dependencies?"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Proposed that when you install a package you will get the packages in all namespaces?"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:'Another option is to specify language in package name (python-simplegeneric), and have lookup table for "common" packages'}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Should raise issues on conda GitHub repo"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"No easy solutions, but we need to choose some solution"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:'meta-package which use "common" name'}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:'Correct solution is to prefix everything with "python-" but people do not want to do this when installing and people are already used to the old method.'}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Filipe's issue with namespaces is that it makes choices for users, would rather have that choice... raise on GitHub issue XXX"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"For many users conda is a drop in replacement for pip, should we keep this big advantage?"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Are there less engineered solution than namespacing?"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"*   Should be raised in GitHub, submit PRs \n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Prefix everything and have conda install be smart about finding these packages?"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Do not prefix packages which are in defaults but anything not in defaults should be prefixed with python-, r-"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Post toy examples in a PR to conda, see if it works?"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Continue discussion later..."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Skeleton generator"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"skeleton generator should use prefix names?"}),"\n",(0,s.jsx)(n.li,{children:"skeleton needs some updates, does not"}),"\n",(0,s.jsx)(n.li,{children:"John has Jinja template which generates meta.yaml, could we use this?  Needs to pull data from setuptools"}),"\n",(0,s.jsx)(n.li,{children:"Should conda-forge ship it's own skeleton generator? Or something different"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Governance"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"NOAA worried about losing control over repo"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Worried about hastily merged PR and similar issues"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Write proposal for guidance of what a good PR looks like, self-merging, and similar issues"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"NumPy issue"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Would libgfortran fix this issue?"}),"\n",(0,s.jsx)(n.li,{children:"Would like Micheal Grant look at solver before creating conda-forge libgfortran"}),"\n",(0,s.jsx)(n.li,{children:"libquadmath, current plan to include with libgfortran, not used in defaults, should these be separate packages?"}),"\n",(0,s.jsx)(n.li,{children:"libstdc++"}),"\n",(0,s.jsx)(n.li,{children:"Need to standardize on common compiler stack between conda-forge and Continuum"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Suggestions for Phil's priorities"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"conda-build-all"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"*   [SciTools/conda build all#41](https://github.com/SciTools/conda-build-all/issues/41)\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Service to run builds on beta releases of conda-build"}),"\n",(0,s.jsx)(n.p,{children:'Copy of "stable" packages?'}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Consolidate multiple PR into a single version"}),"\n",(0,s.jsx)(n.li,{children:"conda-build-all PR"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>r});var s=i(67294);const o={},t=s.createContext(o);function r(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);