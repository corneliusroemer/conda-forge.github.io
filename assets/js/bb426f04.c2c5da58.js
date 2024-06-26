"use strict";(self.webpackChunkcf_infra_docs=self.webpackChunkcf_infra_docs||[]).push([[2633],{24748:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>c});var s=i(85893),o=i(11151);const t={title:"Guidelines"},a="Guidelines",r={id:"maintainer/guidelines",title:"Guidelines",description:"Transferring to conda-forge",source:"@site/docs/maintainer/guidelines.md",sourceDirName:"maintainer",slug:"/maintainer/guidelines",permalink:"/docs/maintainer/guidelines",draft:!1,unlisted:!1,editUrl:"https://github.com/conda-forge/conda-forge.github.io/tree/refs/heads/main/docs/maintainer/guidelines.md",tags:[],version:"current",lastUpdatedAt:1719399198e3,frontMatter:{title:"Guidelines"},sidebar:"docs",previous:{title:"Infrastructure",permalink:"/docs/maintainer/infrastructure"},next:{title:"Contributing packages",permalink:"/docs/maintainer/adding_pkgs"}},d={},c=[{value:"Transferring to conda-forge",id:"transferring-to-conda-forge",level:2},{value:"Intended Usage",id:"intended-usage",level:2},{value:"Renaming Packages",id:"renaming-packages",level:2},{value:"Fixing Broken Packages",id:"fixing-broken-packages",level:2},{value:"Becoming a maintainer",id:"becoming-a-maintainer",level:2},{value:"Language versions",id:"language-versions",level:2},{value:"Python",id:"python",level:3},{value:"Reviewing recipes",id:"reviewing-recipes",level:2},{value:"Generalities",id:"generalities",level:3},{value:"Python-specific details",id:"python-specific-details",level:3},{value:"Compiled objects",id:"compiled-objects",level:3}];function l(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{id:"guidelines"})}),"\n",(0,s.jsx)(n.h1,{id:"guidelines",children:"Guidelines"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{id:"transferring-to-conda-forge"})}),"\n",(0,s.jsx)(n.h2,{id:"transferring-to-conda-forge",children:"Transferring to conda-forge"}),"\n",(0,s.jsxs)(n.p,{children:["This document intends to layout some guidelines on the transfer of\n",(0,s.jsx)(n.a,{href:"https://github.com/conda/conda-recipes",children:"conda-recipes"})," and\n",(0,s.jsx)(n.a,{href:"https://github.com/ContinuumIO/anaconda-recipes",children:"anaconda-recipes"}),"\nto conda-forge. These aren't hard and fast rules, instead are open to reasonable\ninterpretation and reviewer's judgement."]}),"\n",(0,s.jsx)(n.p,{children:"It is anticipated that almost all recipes from those repos shall be\nproposed for addition here, though it may be decided that a few don't\nactually belong or should not be supported anymore."}),"\n",(0,s.jsx)(n.p,{children:"While adding a package from either location, inspect the commit history\nto see who had made changes to the recipe in the past. Anyone who has\ntouched the recipe should be pinged about it, so that they can be added here. They\nshould also be consulted with regards, if the recipe needs any\ntweaks before being added. Also, they should be asked if they would\nlike to be added as maintainers. If they give their consent\nto take up the role as a maintainer, only then they should be added in the maintainer list."}),"\n",(0,s.jsxs)(n.p,{children:["In all cases while porting a recipe, you should add yourself as a\nmaintainer. Some contributors to these repos might be quite prolific, but may\nnot be as actively engaged. If they specify they only want to be contacted\nfor certain recipes or none at all, please respect their wishes and add them too.\nMake note of what recipes (if any) they would like to be notified for. If\nthey are no longer interested in any conda recipes, make that note here\nas well. Before contacting anyone, please consult the list in this\n",(0,s.jsx)(n.a,{href:"https://github.com/conda-forge/staged-recipes/issues/139",children:"issue"}),"\nto see if that contributor has restrictions."]}),"\n",(0,s.jsxs)(n.p,{children:["While porting make sure the recipe follows the linting specifications.\nThe section order should go ",(0,s.jsx)(n.code,{children:"package"}),", ",(0,s.jsx)(n.code,{children:"source"}),", ",(0,s.jsx)(n.code,{children:"build"}),",\n",(0,s.jsx)(n.code,{children:"requirements"}),", ",(0,s.jsx)(n.code,{children:"test"}),", ",(0,s.jsx)(n.code,{children:"about"}),", ",(0,s.jsx)(n.code,{children:"extra/recipe-maintainers"}),". It\nis recommended to add a ",(0,s.jsx)(n.code,{children:"build"})," section with the ",(0,s.jsx)(n.code,{children:"number"})," set to\n",(0,s.jsx)(n.code,{children:"0"})," explicitly even if the rest is unneeded. If there is no build for\nWindows, make sure to add ",(0,s.jsx)(n.code,{children:"skip: True  # [win]"})," to the ",(0,s.jsx)(n.code,{children:"build"}),"\nsection. The ",(0,s.jsx)(n.code,{children:"about"})," section must have the ",(0,s.jsx)(n.code,{children:"home"})," URL (verify if the\nURL is still correct), ",(0,s.jsx)(n.code,{children:"license"})," (verify if the correct license is present),\nand a one sentence (or few words) ",(0,s.jsx)(n.code,{children:"summary"}),". When specifying the version, it\nis strongly recommended that jinja templating be used to set the version\nat the top (e.g. ",(0,s.jsx)(n.code,{children:'{% set version = "0.10.1" %}'}),") and then replace all\nuses of the version with ",(0,s.jsx)(n.code,{children:"{{ version }}"}),". Preference should be given to\ncompressed source balls as opposed to version control checkouts. Make sure\nall links to compressed source balls allow for easy changing of the version\n(using latest is not acceptable). Also, a checksum should be included with\nall compressed source balls to allow for verification of downloads."]}),"\n",(0,s.jsxs)(n.p,{children:["It is required to add tests with all packages. These can include, but are\nnot limited to, checking if libraries are installed, python imports, simple\ncode snippet to compile or run a basic test, command line usage (checking\nhelp or version). It is suggested to get the compiled code to run all tests (e.g.\n",(0,s.jsx)(n.code,{children:"make check"}),") to ensure it was built properly. This normally should\nhappen in the build."]}),"\n",(0,s.jsxs)(n.p,{children:["It is possible, though not recommended, to include multiple recipes into a\nsingle pull request on ",(0,s.jsx)(n.a,{href:"https://github.com/conda-forge/staged-recipes",children:"staged-recipes"}),". ",(0,s.jsx)(n.code,{children:"conda-build-all"})," is used to determine\nthe build order and the necessary build matrix (e.g. which python versions to\nbuild against). From a practical perspective, there are limitations on the\ncontinuous integration resources and also on what reviewers are able/willing\nto review in a single pull request.\nA large pull request with numerous recipes makes it more difficult to review.\nIf the recipes make it through these two constraints and are merged, race\nconditions amongst the different feedstocks may require work by you and/or\ncore maintainers to restart them in such a way to build everything in a\nsuitable order.\nNone of this is to say that one can't add multiple recipes in a single\npull request. One certainly can do this and it can work, but the\nrecommendation is to open a PR with one recipe first, and to ping\n",(0,s.jsx)(n.strong,{children:"@conda-forge/core"})," to ask for agreement about adding one or two additional\nrecipes."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{id:"intended-usage"})}),"\n",(0,s.jsx)(n.h2,{id:"intended-usage",children:"Intended Usage"}),"\n",(0,s.jsx)(n.p,{children:"Maintainers' time and CI resources are what enable conda-forge. They are just as scarce as valuable. conda-forge has enough capacity to support releasing packages, but not developing them."}),"\n",(0,s.jsx)(n.p,{children:"Publishing a package to conda-forge signals it is suitable for users not involved with development. However, publishing does not always happen error-free. Multiple commits are acceptable when debugging issues with the release process itself."}),"\n",(0,s.jsx)(n.p,{children:"Fortunately, there are options for optimizing the development of a package."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/conda-forge/conda-smithy",children:"conda-smithy"})," is a tool used by conda-forge itself to manage feedstocks. conda-smithy can be used to create an internal development feedstock that is separate from conda-forge."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/astropy/ci-helpers",children:"ci-helpers"})," is a set of scripts that drive various CI services using environment variables."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{id:"renaming-packages"})}),"\n",(0,s.jsx)(n.h2,{id:"renaming-packages",children:"Renaming Packages"}),"\n",(0,s.jsxs)(n.p,{children:["Sometimes, packages are misnamed.\nTo correct the name of the package, please submit a PR into ",(0,s.jsx)(n.a,{href:"https://github.com/conda-forge/staged-recipes",children:"staged-recipes"})," with the correct name.\nDuring the review process, please make certain to note that the package is renamed and contact a member of conda-forge/core to remove the old feedstock (and potentially package, if needed)."]}),"\n",(0,s.jsxs)(n.p,{children:["Occasionally, the .gitmodules file in the ",(0,s.jsx)(n.a,{href:"https://github.com/conda-forge/feedstocks/blob/master/.gitmodules",children:"feedstocks"})," needs to be updated to remove the old feedstock.\nIt's not entirely clear what those circumstances are.\nSee ",(0,s.jsx)(n.a,{href:"https://github.com/conda-forge/conda-forge.github.io/issues/1070",children:"conda-forge.github.io#1070"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["If an existing feedstock has already created a package of the same name,\nthen you may need to add the new feedstock to the ",(0,s.jsx)(n.a,{href:"https://github.com/conda-forge/feedstock-outputs",children:"feedstock-outputs"})," map."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{id:"fix-broken-packages"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{id:"fixing-broken-packages"})}),"\n",(0,s.jsx)(n.h2,{id:"fixing-broken-packages",children:"Fixing Broken Packages"}),"\n",(0,s.jsxs)(n.p,{children:["Sometimes, you need to remove a package from the ",(0,s.jsx)(n.code,{children:"conda-forge"})," channel on Anaconda.org.\nThere can be many reasons for this, but the ones that immediately come to mind are:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Incorrect pinnings or metadata"}),"\n",(0,s.jsx)(n.li,{children:"Packages being renamed"}),"\n",(0,s.jsx)(n.li,{children:"Broken package contents"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"We prefer to not remove packages for the following reasons:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Unaffected users are unable to get the broken package."}),"\n",(0,s.jsx)(n.li,{children:"Unable to reverse (what if we were incorrect to remove it)."}),"\n",(0,s.jsx)(n.li,{children:"Loss of reproducibility (unable to create an old environment)."}),"\n",(0,s.jsx)(n.li,{children:"Not as community friendly (leaves no opportunity to review decision)."}),"\n",(0,s.jsx)(n.li,{children:"Blocks anyone from inspecting the broken packages."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Instead, if possible, we prefer to take one of the following actions:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["If the only issue is in the package metadata, we can directly patch it using\nthe ",(0,s.jsx)(n.a,{href:"https://github.com/conda-forge/conda-forge-repodata-patches-feedstock",children:"repo data patches feedstock"}),".\nTo change the repo data for your package, make a PR on the feedstock."]}),"\n",(0,s.jsxs)(n.li,{children:["If the the package contents themselves are broken, we add an extra label ",(0,s.jsx)(n.code,{children:"broken"}),"\nto the package. Packages with this extra label are removed from the repo data on the\n",(0,s.jsx)(n.code,{children:"main"})," label. Thus they are not considered by the solver\nbut their binaries are still available on Anaconda.org. To get the ",(0,s.jsx)(n.code,{children:"broken"})," label\nadded to your package, please refer to ",(0,s.jsx)(n.a,{href:"/docs/maintainer/updating_pkgs#maint-fix-broken-packages",children:"Removing broken packages"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Adding the ",(0,s.jsx)(n.code,{children:"broken"})," label to a package is more destructive than patching the repo data\nand thus we prefer repo data patches over labeling things as ",(0,s.jsx)(n.code,{children:"broken"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{id:"becoming-a-maintainer"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{id:"id1"})}),"\n",(0,s.jsx)(n.h2,{id:"becoming-a-maintainer",children:"Becoming a maintainer"}),"\n",(0,s.jsxs)(n.p,{children:["conda-forge is a community project and it can therefore happen that feedstocks become temporarily abandoned.\nYou can join the maintainer team of a feedstock by adding your github-id to the ",(0,s.jsx)(n.code,{children:"recipe-maintainers"})," section in the recipe's ",(0,s.jsx)(n.code,{children:"meta.yaml"}),".\nPlease refer to ",(0,s.jsx)(n.a,{href:"/docs/maintainer/updating_pkgs#maint-updating-maintainers",children:"Updating the maintainer list"})," for detailed instructions."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{id:"language-versions"})}),"\n",(0,s.jsx)(n.h2,{id:"language-versions",children:"Language versions"}),"\n",(0,s.jsx)(n.p,{children:"conda-forge contains packages from a number of languages including Python and R, among many others.\nEach of these language-specific packaging sub-ecosystems needs to keep cadence with the language itself, making it challenging to have a blanket policy for how long to keep older versions of the language around.\nAs it comes up, each group should be able to define their own policy on how long to keep older versions of their language around."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{id:"python"})}),"\n",(0,s.jsx)(n.h3,{id:"python",children:"Python"}),"\n",(0,s.jsx)(n.p,{children:"For the Python language, conda-forge aims to keep package builds active and available for the current version and at least two preceding minor versions.\nWhenever Python 4.0 comes out we'll need to figure out if this policy should change to support multiple versions of 3.x and 4.x simultaneously.\nFortunately, we can punt on that for now.\nThe question of when to decide to drop an older language version remains.\nThe guidance that we can provide here is two fold:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["We will move with the community.\nWhen our core libraries stop supporting an old version, so too will conda forge.\nThe (nonexhaustive) list of core libraries that we consider when making the decision to drop an older version are:\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"matplotlib"}),"\n",(0,s.jsx)(n.li,{children:"numpy"}),"\n",(0,s.jsx)(n.li,{children:"scipy"}),"\n",(0,s.jsx)(n.li,{children:"pypy"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"The core team can decide to keep an old version around temporarily until some specific criteria is met.\nFor example, we're holding off on turning off py36 until pypy comes out with pypy3.7."}),"\n",(0,s.jsx)(n.li,{children:"If there are lots of people in the community relying on older versions, core team can decide to keep an old version around.\nFor example, we held off turning off py27 even after numpy, scipy dropped support as there were many in the community interested in keeping support until the end of life of that version."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{id:"reviewer-guidelines"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{id:"reviewing-recipes"})}),"\n",(0,s.jsx)(n.h2,{id:"reviewing-recipes",children:"Reviewing recipes"}),"\n",(0,s.jsxs)(n.p,{children:["To add new packages to conda-forge, users can submit a PR to ",(0,s.jsx)(n.code,{children:"staged-recipes"})," (see ",(0,s.jsx)(n.a,{href:"/docs/maintainer/adding_pkgs#dev-contribute-pkgs",children:"Contributing packages"})," for more details),\nwhere it will undergo a series of automated checks and a code review.\nAny conda-forge member can perform a code review, but the final merge can only be done by the ",(0,s.jsx)(n.code,{children:"staged-recipes"})," or ",(0,s.jsx)(n.code,{children:"core"}),' teams.\nThe following sections suggest guidelines on how to perform a successful code review.\nWe distinguish between "Required" and "Recommended" as follows:']}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Required: These guidelines are very important and a requisite for PR acceptance. Exceptions are rare and usually require ",(0,s.jsx)(n.code,{children:"core"})," approval."]}),"\n",(0,s.jsx)(n.li,{children:'Recommended: These are considered "nice to have" features. Ideally, all recipes should abide by them, but exceptions are tolerated as long as justifiable reasons are provided.'}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{id:"generalities"})}),"\n",(0,s.jsx)(n.h3,{id:"generalities",children:"Generalities"}),"\n",(0,s.jsx)(n.p,{children:"Required:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["All interactions in the review adhere to our ",(0,s.jsx)(n.a,{href:"/community/governance/#code-of-conduct",children:"Code of Conduct"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"conda-forge-linter"})," ",(0,s.jsx)(n.a,{href:"https://github.com/conda-forge/conda-smithy/blob/main/conda_smithy/lint_recipe.py",children:"checks"})," pass successfully.\nSometimes the linter will also suggest modifications considered optional (hints); even if recommended, these are not required to accept the submission."]}),"\n",(0,s.jsxs)(n.li,{children:["The CI checks pass successfully in the required platforms. Exceptions:\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"noarch: python"})," can fail in platforms other than Linux (e.g. missing dependency). For non-noarch packages, the failing platform should be skipped via ",(0,s.jsx)(n.code,{children:"skip: true  # [<platform selector>]"})]}),"\n",(0,s.jsx)(n.li,{children:"CI times out or runs out of storage because it tries to build all Python versions in the same job. As long as one version passes, that's ok, since they will run individually in the resulting feedstock."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["The submission fulfills the ",(0,s.jsx)(n.a,{href:"https://github.com/conda-forge/staged-recipes/blob/main/.github/pull_request_template.md",children:"pull request template checklist"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"The license has been correctly identified and allows redistribution."}),"\n",(0,s.jsxs)(n.li,{children:["The source should not contain vendored code. If it does:\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Package the vendored project separately and specify the needed dependency in the ",(0,s.jsx)(n.code,{children:"requirements"})," section. Preferred if the vendored code is needed at runtime."]}),"\n",(0,s.jsxs)(n.li,{children:["Allow the vendored code, but make sure the license files are included in the ",(0,s.jsx)(n.code,{children:"about.license"})," field. Usually ok if it's only a build-time dependency (e.g. headers-only library)"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Recommended:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Source should be obtained from a URL that provides a stable tarball (same SHA over time).\nGit or other SVC repositories should only be used as a last resort."}),"\n",(0,s.jsxs)(n.li,{children:["Host requirements contained in the ",(0,s.jsx)(n.a,{href:"/docs/maintainer/pinning_deps#pinned-deps",children:"conda-forge pinnings"})," should be ",(0,s.jsx)(n.em,{children:"name-only"}),"; i.e. they do not specify a separate version."]}),"\n",(0,s.jsxs)(n.li,{children:["Runtime requirements are not pinned too strictly without justification.\nThanks to repodata patches, we can afford to be optimistic about lower or upper bounds instead of single-version pins: ",(0,s.jsx)(n.code,{children:">=1.4.2,<1.5"})," is better than ",(0,s.jsx)(n.code,{children:"==1.4.2"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["The package should place its files under standard locations (e.g. executables under ",(0,s.jsx)(n.code,{children:"$PREFIX/bin"}),"), unless justification is provided."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{id:"python-specific-details"})}),"\n",(0,s.jsx)(n.h3,{id:"python-specific-details",children:"Python-specific details"}),"\n",(0,s.jsx)(n.p,{children:"Required:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"noarch: python"})," packages fulfill the ",(0,s.jsx)(n.a,{href:"/docs/maintainer/knowledge_base#noarch",children:"required criteria"})," to be considered as such."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Recommended:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["The package does not accidentally include a ",(0,s.jsx)(n.code,{children:"tests"})," (also ",(0,s.jsx)(n.code,{children:"test"}),", ",(0,s.jsx)(n.code,{children:"_tests"}),", or similar) top-level package.\nThe list of files is usually printed by ",(0,s.jsx)(n.code,{children:"pip install"})," after the ",(0,s.jsx)(n.code,{children:"adding license file"})," message.\nIf this happens, upstream should modify their ",(0,s.jsx)(n.code,{children:"setuptools.find_packages()"})," usage accordingly.\nAlternatively, a patch can be applied. See ",(0,s.jsx)(n.a,{href:"https://github.com/conda-forge/staged-recipes/pull/19166/commits/0284fc6da273031a4f93a1fea4533822cd4b385d",children:"example"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["The modules checked by ",(0,s.jsx)(n.code,{children:"test.imports"})," are not empty (this can happen with placeholder ",(0,s.jsx)(n.code,{children:"__init__.py"})," files in top-level packages)."]}),"\n",(0,s.jsxs)(n.li,{children:["The versions reported by ",(0,s.jsx)(n.code,{children:"pip list"})," and ",(0,s.jsx)(n.code,{children:"conda build"})," logs match."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"pip check"})," passes. See ",(0,s.jsx)(n.a,{href:"/docs/maintainer/adding_pkgs#pip-check",children:"pip check"})," for more details."]}),"\n",(0,s.jsxs)(n.li,{children:["If a project can be considered ",(0,s.jsx)(n.code,{children:"noarch"})," (see ",(0,s.jsx)(n.a,{href:"/docs/maintainer/knowledge_base#noarch",children:"criteria"}),"), it should be packaged as such."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{id:"compiled-objects"})}),"\n",(0,s.jsx)(n.h3,{id:"compiled-objects",children:"Compiled objects"}),"\n",(0,s.jsx)(n.p,{children:"Required:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"The source does not include compiled files.\nIn principle, all compiled objects need to be generated in the CI, from source.\nExceptions to this rule (e.g. binary repackaging) need to be approved explicitly."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Recommended:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"SONAMEs follow naming recommendations given by upstream."}),"\n",(0,s.jsxs)(n.li,{children:["If ABI compatibility is important for the package, ",(0,s.jsx)(n.code,{children:"run_exports"})," are set accordingly.\nSee ",(0,s.jsx)(n.a,{href:"/docs/maintainer/pinning_deps#pinned-deps",children:"Pinned dependencies"})," and the ",(0,s.jsx)(n.a,{href:"https://docs.conda.io/projects/conda-build/en/stable/resources/define-metadata.html#export-runtime-requirements",children:"conda-build docs"})," for more information."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>a});var s=i(67294);const o={},t=s.createContext(o);function a(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);