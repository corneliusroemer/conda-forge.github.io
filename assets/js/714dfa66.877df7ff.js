"use strict";(self.webpackChunkcf_infra_docs=self.webpackChunkcf_infra_docs||[]).push([[6850],{46023:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>r});var s=i(85893),t=i(11151);const l={title:"2020-01-22"},o="2020-01-22 conda-forge core meeting",a={id:"minutes/2020-01-22",title:"2020-01-22",description:"Attendees",source:"@site/community/minutes/2020-01-22.md",sourceDirName:"minutes",slug:"/minutes/2020-01-22",permalink:"/community/minutes/2020-01-22",draft:!1,unlisted:!1,editUrl:"https://github.com/conda-forge/conda-forge.github.io/tree/refs/heads/main/community/minutes/2020-01-22.md",tags:[],version:"current",lastUpdatedAt:1719399198e3,frontMatter:{title:"2020-01-22"},sidebar:"community",previous:{title:"2020-02-05",permalink:"/community/minutes/2020-02-05"},next:{title:"2020-01-08",permalink:"/community/minutes/2020-01-08"}},c={},r=[{value:"Attendees",id:"attendees",level:2},{value:"Agenda",id:"agenda",level:2},{value:"Your agenda items",id:"your-agenda-items",level:3},{value:"Subteam updates",id:"subteam-updates",level:3},{value:"Bot",id:"bot",level:4},{value:"ARM",id:"arm",level:4},{value:"POWER",id:"power",level:4},{value:"CUDA",id:"cuda",level:4},{value:"Docs",id:"docs",level:4},{value:"staged-recipes",id:"staged-recipes",level:4},{value:"website",id:"website",level:4},{value:"CI infrastructure",id:"ci-infrastructure",level:3},{value:"Compiler upgrade",id:"compiler-upgrade",level:4},{value:"CFEP updates",id:"cfep-updates",level:3},{value:"Open PRs",id:"open-prs",level:4},{value:"Discussion",id:"discussion",level:2},{value:"Check in on previous action items",id:"check-in-on-previous-action-items",level:2},{value:"This meeting TODOs",id:"this-meeting-todos",level:3},{value:"Last meeting",id:"last-meeting",level:3},{value:"2 meetings ago",id:"2-meetings-ago",level:3},{value:"3 meetings ago",id:"3-meetings-ago",level:3},{value:"4 meetings ago",id:"4-meetings-ago",level:3},{value:"Move to Issue Tracker",id:"move-to-issue-tracker",level:3}];function d(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",h4:"h4",input:"input",li:"li",p:"p",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"2020-01-22-conda-forge-core-meeting",children:"2020-01-22 conda-forge core meeting"}),"\n",(0,s.jsx)(n.h2,{id:"attendees",children:"Attendees"}),"\n",(0,s.jsx)(n.h2,{id:"agenda",children:"Agenda"}),"\n",(0,s.jsx)(n.h3,{id:"your-agenda-items",children:"Your agenda items"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Recurring Anaconda update on what's going on on our side."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"(jakirkham) What's the plan for conda / conda-build moving forward?"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"who's taking over maintenance of these projects going forward?"}),"\n",(0,s.jsxs)(n.li,{children:["Opportunity to onboard someone new from not Anaconda?\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Is Anaconda open to opening up permissions on conda-build to others?\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Michael S once he leaves?"}),"\n",(0,s.jsx)(n.li,{children:"Marcel Bargull?"}),"\n",(0,s.jsx)(n.li,{children:"Marcelo Trevisani?"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Anacondacon"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["(CJ) breakout session submitted to AnacondaCON\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"deep dive into the automation systems used by conda-forge"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["conda-forge / Anaconda / bioconda / RAPIDS / wolfv (Quantstack & RooS & mamba) summit at Anacondacon?\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"(Eric) check internally for funding levels for hotels & flying folks from the community in?"}),"\n",(0,s.jsx)(n.li,{children:"(Eric) Figure out finances of conda-forge to support themselves?"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"(FF) Drop python 2.7"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"(Eric) Open up a CFEP about what to do about Python 2.7."}),"\n",(0,s.jsx)(n.li,{children:"We probably need a statement that says when and why we're dropping py27"}),"\n",(0,s.jsx)(n.li,{children:"Anaconda has stopped building py27 packages"}),"\n",(0,s.jsx)(n.li,{children:"After the next Anaconda distro release (Feb/March)"}),"\n",(0,s.jsx)(n.li,{children:"Anaconda will build the CPython interpreter for py27 when it comes out in March"}),"\n",(0,s.jsx)(n.li,{children:"Coordinate timing between Anaconda and conda-forge on python 2.7."}),"\n",(0,s.jsx)(n.li,{children:'Should we make there be a way to "opt-in" to continue building python 2.7 packages?'}),"\n",(0,s.jsxs)(n.li,{children:["Idea:\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Remove python 2.7 from the conda-forge pinnings."}),"\n",(0,s.jsx)(n.li,{children:"Migration to update the feedstocks so they drop python 2.7"}),"\n",(0,s.jsx)(n.li,{children:"Have a bot command to let people opt-out"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"(Eric) What Pythons are we going to support? 3.6-3.8?"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"(jjhelmus) Open up a CFEP for this."}),"\n",(0,s.jsx)(n.li,{children:"We have a weak policy (more of a tradition, really) on supporting three python versions -- this was 2.7 plus the most recent 3.x versions."}),"\n",(0,s.jsx)(n.li,{children:"The conda-forge policy was mirroring Anaconda's policy."}),"\n",(0,s.jsxs)(n.li,{children:["Should we mirror the CPython policy?\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Disadvantage is that we will have up to 5 versions in 2021."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"(Eric) Push scheduling to one week out and then every other week."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Push everything below this to next week"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:['(FF) The blog is "ready" but we need a Jekyll expert to take a look at it.\nThe layout and page publication is not OK.\n',(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://conda-forge.org/blog/",children:"https://conda-forge.org/blog/"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"subteam-updates",children:"Subteam updates"}),"\n",(0,s.jsx)(n.h4,{id:"bot",children:"Bot"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["(CJ) Automerge progress, PRs ready for review, available for beta testing\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["example ",(0,s.jsx)(n.a,{href:"https://github.com/conda-forge/face-feedstock/pull/2",children:"https://github.com/conda-forge/face-feedstock/pull/2"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"(CJ) PR open to fix issues with strong exports (CUDA) and outputs (GDAL)"}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"arm",children:"ARM"}),"\n",(0,s.jsx)(n.h4,{id:"power",children:"POWER"}),"\n",(0,s.jsx)(n.h4,{id:"cuda",children:"CUDA"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Question: are we ready to advertise this? If so should we Tweet and do a NumFOCUS update about it?"}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"docs",children:"Docs"}),"\n",(0,s.jsx)(n.h4,{id:"staged-recipes",children:"staged-recipes"}),"\n",(0,s.jsx)(n.h4,{id:"website",children:"website"}),"\n",(0,s.jsx)(n.h3,{id:"ci-infrastructure",children:"CI infrastructure"}),"\n",(0,s.jsx)(n.h4,{id:"compiler-upgrade",children:"Compiler upgrade"}),"\n",(0,s.jsx)(n.h3,{id:"cfep-updates",children:"CFEP updates"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"(Eric) (finally) renamed conda-forge-enhancement-proposals to cfep"}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"open-prs",children:"Open PRs"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/conda-forge/conda-forge-enhancement-proposals/pull/5",children:"cfep-03"})," Manual upload of builds"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/conda-forge/conda-forge-enhancement-proposals/pull/7",children:"cfep-04"})," X11 and CDT policy"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/conda-forge/conda-forge-enhancement-proposals/pull/3",children:"cfep-05"})," dev/rc builds"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Voting finished today. The vote has passed"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/conda-forge/conda-forge-enhancement-proposals/pull/9",children:"cfep-06"})," Staged-recipes review lifecycle"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/conda-forge/conda-forge-enhancement-proposals/pull/15",children:"cfep-10"})," Feedstock statuses, unmaintained"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/conda-forge/cfep/pull/18",children:"cfep-11"})," Automated Closing of Excessively Old PRs on Staged Recipes"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Voting finished a while ago, and this has the votes to pass"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"discussion",children:"Discussion"}),"\n",(0,s.jsx)(n.h2,{id:"check-in-on-previous-action-items",children:"Check in on previous action items"}),"\n",(0,s.jsx)(n.p,{children:"Copy previous action items from last meeting agenda."}),"\n",(0,s.jsx)(n.h3,{id:"this-meeting-todos",children:"This meeting TODOs"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Open up a CFEP about what to do about Python 2.7.\n",(0,s.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/conda-forge/cfep/issues/20",children:"cfep issue #20"})}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," Someone volunteer to drive this CFEP to completion"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"(Eric) check internally for funding levels for hotels & flying folks from the community in?"}),"\n",(0,s.jsx)(n.li,{children:"(Eric) Figure out finances of conda-forge to support themselves?"}),"\n",(0,s.jsx)(n.li,{children:"(jjhelmus) Open up CFEP for which python's we're going to support."}),"\n",(0,s.jsx)(n.li,{children:"(Eric) Change meeting cadence"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"last-meeting",children:"Last meeting"}),"\n",(0,s.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," cfep-11 next steps: Merge PR and ping staged-recipes team they can implement if they want?"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," cfep-10 next steps: CJ to call a vote for feedback"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," cfep-06 next steps: Ask staged recipes team to champion this CFEP and move it forward"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," cfep-04 next steps: jjhelmus to add a comment per notes above"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," jakirkham & CJ-wright to sync on adding CUDA to the migration bot"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"2-meetings-ago",children:"2 meetings ago"}),"\n",(0,s.jsx)(n.h3,{id:"3-meetings-ago",children:"3 meetings ago"}),"\n",(0,s.jsx)(n.h3,{id:"4-meetings-ago",children:"4 meetings ago"}),"\n",(0,s.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," (Filipe) CFEP-03: Review, fix any text and merge it in.\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Minor updates that are needed. This will likely get done in December."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," (CJ) CFEP-08: Merge in with deferred status\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Will check in next meeting."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"move-to-issue-tracker",children:"Move to Issue Tracker"}),"\n",(0,s.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," (Eric) Scheduling Anaconda <-> conda-forge sync on anaconda.org requirements gathering\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Will try and get this scheduled in the next month."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," (Anthony) Reach out to NumFocus to figure out legal ramifications of not including licenses in files."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>o});var s=i(67294);const t={},l=s.createContext(t);function o(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);