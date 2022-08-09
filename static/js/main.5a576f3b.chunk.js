(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{29:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(9),c=n(3),i=n(1),s=n(0),r=Object(i.createContext)(),l=function(e){var t=e.children,n=Object(i.useState)("light"),a=Object(c.a)(n,2),l=a[0],o=a[1];Object(i.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");o(e.matches?"dark":"light"),e.addEventListener("change",(function(e){o(e.matches?"dark":"light")}))}),[]);return Object(s.jsx)(r.Provider,{value:[{themeName:l,toggleTheme:function(){var e="dark"===l?"light":"dark";localStorage.setItem("themeName",e),o(e)}}],children:t})},o="https://vishaalpkumar.github.io/portfolio",j="VK.",h="Vishaal Kumar",u="Student | Software Engineer",b="I am a senior at the University of Pennsylvania pursuing a bachelor's degree in Networked & Social Systems Engineering and masters's degree in Data Science. I am passionate about building applications and learning new technologies.",d="https://drive.google.com/file/d/1JAPMOcwZ4zPwXNgYNaUh5sd8F97KHRGa/view?usp=sharing",m={linkedin:"https://www.linkedin.com/in/vishaalpkumar/",github:"https://github.com/VishaalPKumar"},O=[{name:"Calendar.yaml",description:"Built a tool to allow users to create reminders and recurring weekly events via a Dockerized React web application.",stack:["Docker","Kubernetes","React","GitHub API"],sourceCode:"https://github.com/VishaalPKumar/CIS188-Final"},{name:"Akari Solver",description:"Created a constraint programming solver for the infamous puzzle game, Akari, using Google OR-Tools CP Solver.",stack:["Python","Google OR-Tools"],sourceCode:"https://github.com/VishaalPKumar/akarisolver"},{name:"FIFA Rating Predictor",description:"Applied a variety of regression techniques to analyze how Electronic Arts (EA) rates football players in the popular video game FIFA.",stack:["Python","Pandas","Numpy","Seaborn","Scikit-Learn"],sourceCode:"https://github.com/VishaalPKumar/FIFA-Ratings-Predictor",livePreview:"https://medium.com/@vishaalkumar_21306/demystifying-the-fifa-algorithm-e391bce93ec9"},{name:"Monadic Money Making",description:"Developed a back testing system for testing algorithmic trading strategies by creating a Doman Specific Language (DSL) in Haskell.",stack:["Haskell","Python"],sourceCode:"https://github.com/VishaalPKumar/project_t1-project"},{name:"Pennbook",description:"Collaboratively designed and implemented a social network site hosted on an EC2 instance with a DynamoDB backend.",stack:["JavaScript","HMTL","CSS","Node.js","jQuery","AWS/EC2/Hadoop"],sourceCode:"https://github.com/VishaalPKumar/PennBook"},{name:"Pac-Virus",description:"Developed a custom version of PAC-Man (Coronavirus themed) using the Java Swing GUI framework",stack:["Java","Java Swing"]}],p=["Java","Python","Swift","OCaml","Haskell","HTML","CSS","JavaScript","SQL","Object-Oriented Programming","Data Structures","Algorithms"],g="vishaalk@seas.upenn.edu",k=n(16),f=n.n(k),x=n(14),v=n.n(x),N=n(18),_=n.n(N),w=n(17),S=n.n(w),C=(n(29),function(){var e=Object(i.useContext)(r),t=Object(c.a)(e,1)[0],n=t.themeName,a=t.toggleTheme,l=Object(i.useState)(!1),o=Object(c.a)(l,2),j=o[0],h=o[1],u=function(){return h(!j)};return Object(s.jsxs)("nav",{className:"center nav",children:[Object(s.jsxs)("ul",{style:{display:j?"flex":null},className:"nav__list",children:[O.length?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#projects",onClick:u,className:"link link--nav",children:"Projects"})}):null,p.length?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#skills",onClick:u,className:"link link--nav",children:"Skills"})}):null,g?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#contact",onClick:u,className:"link link--nav",children:"Contact"})}):null]}),Object(s.jsx)("button",{type:"button",onClick:a,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===n?Object(s.jsx)(v.a,{}):Object(s.jsx)(f.a,{})}),Object(s.jsx)("button",{type:"button",onClick:u,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:j?Object(s.jsx)(S.a,{}):Object(s.jsx)(_.a,{})})]})}),P=(n(33),function(){var e=o,t=j;return Object(s.jsxs)("header",{className:"header center",children:[Object(s.jsx)("h3",{children:e?Object(s.jsx)("a",{href:e,className:"link",children:t}):t}),Object(s.jsx)(C,{})]})}),y=n(11),A=n.n(y),E=n(20),I=n.n(E),K=n(19),D=n.n(K),V=(n(34),function(){var e=h,t=u,n=b,a=d,c=m;return Object(s.jsxs)("div",{className:"about center",children:[e&&Object(s.jsxs)("h1",{children:["Hi, I am ",Object(s.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(s.jsxs)("h2",{className:"about__role",children:[t,"."]}),Object(s.jsx)("p",{className:"about__desc",children:n&&n}),Object(s.jsxs)("div",{className:"about__contact center",children:[a&&Object(s.jsx)("a",{href:a,target:"_blank",rel:"noopener noreferrer","aria-label":"assignment",className:"link link--icon",children:Object(s.jsx)(D.a,{})}),c&&Object(s.jsxs)(s.Fragment,{children:[c.github&&Object(s.jsx)("a",{href:c.github,target:"_blank",rel:"noopener noreferrer","aria-label":"github",className:"link link--icon",children:Object(s.jsx)(A.a,{})}),c.linkedin&&Object(s.jsx)("a",{href:c.linkedin,target:"_blank",rel:"noopener noreferrer","aria-label":"linkedin",className:"link link--icon",children:Object(s.jsx)(I.a,{})})]})]})]})}),F=n(7),H=n.n(F),J=n(21),L=n.n(J),M=(n(36),function(e){var t=e.project;return Object(s.jsxs)("div",{className:"project",children:[Object(s.jsx)("h3",{children:t.name}),Object(s.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(s.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(s.jsx)("li",{className:"project__stack-item",children:e},H()())}))}),t.sourceCode&&Object(s.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(s.jsx)(A.a,{})}),t.livePreview&&Object(s.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(s.jsx)(L.a,{})})]})}),R=(n(37),function(){return O.length?Object(s.jsxs)("section",{id:"projects",className:"section projects",children:[Object(s.jsx)("h2",{className:"section__title",children:"Projects"}),Object(s.jsx)("div",{className:"projects__grid",children:O.map((function(e){return Object(s.jsx)(M,{project:e},H()())}))})]}):null}),z=(n(38),function(){return p.length?Object(s.jsxs)("section",{className:"section skills",id:"skills",children:[Object(s.jsx)("h2",{className:"section__title",children:"Skills"}),Object(s.jsx)("ul",{className:"skills__list",children:p.map((function(e){return Object(s.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},H()())}))})]}):null}),T=n(22),B=n.n(T),G=(n(39),function(){var e=Object(i.useState)(!1),t=Object(c.a)(e,2),n=t[0],a=t[1];return Object(i.useEffect)((function(){var e=function(){return window.pageYOffset>500?a(!0):a(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),n?Object(s.jsx)("div",{className:"scroll-top",children:Object(s.jsx)("a",{href:"#top",children:Object(s.jsx)(B.a,{fontSize:"large"})})}):null}),U=(n(40),function(){return g?Object(s.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(s.jsx)("h2",{className:"section__title",children:"Contact"}),Object(s.jsx)("a",{href:"mailto:".concat(g),children:Object(s.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),Q=(n(41),function(){return Object(s.jsx)("footer",{className:"footer",children:Object(s.jsx)("a",{href:"https://github.com",className:"link footer__link",children:"Created By Vishaal Kumar"})})}),Y=(n(42),function(){var e=Object(i.useContext)(r),t=Object(c.a)(e,1)[0].themeName;return Object(s.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(s.jsx)(P,{}),Object(s.jsxs)("main",{children:[Object(s.jsx)(V,{}),Object(s.jsx)(R,{}),Object(s.jsx)(z,{}),Object(s.jsx)(U,{})]}),Object(s.jsx)(G,{}),Object(s.jsx)(Q,{})]})});n(43);Object(a.render)(Object(s.jsx)(l,{children:Object(s.jsx)(Y,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.5a576f3b.chunk.js.map