(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{14:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a(7),n=a.n(c),i=a(2),o=a(0);var l=function(e){var t=e.currentPage,a=e.handlePageChange,s={background:{background:"#1f1f1f"},brand:{color:"#B08D57"},li:{color:"#B08D57",fontSize:19}};return Object(o.jsx)("div",{children:Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark pb-0",style:s.background,children:Object(o.jsxs)("div",{className:"container-fluid ps-4 align-items-end",children:[Object(o.jsx)("div",{className:"navbar-brand fs-1",style:s.brand,children:"Hi, I'm Randy"}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsx)("div",{className:"collapse navbar-collapse justify-content-end align-items-end",id:"navbarNav",children:Object(o.jsxs)("ul",{className:"navbar-nav pe-3",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"About"===t?"nav-link active p-3 rounded-top":"nav-link p-3",href:"#about",style:s.li,onClick:function(){return a("About")},children:"About Me"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"Project"===t?"nav-link active p-3 rounded-top":"nav-link p-3",href:"#project",style:s.li,onClick:function(){return a("Project")},children:"Projects"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"Resume"===t?"nav-link active p-3 rounded-top":"nav-link p-3",href:"#resume",style:s.li,onClick:function(){return a("Resume")},children:"Resume"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"Contact"===t?"nav-link active p-3 rounded-top":"nav-link p-3",href:"#contact",style:s.li,onClick:function(){return a("Contact")},children:"Contact"})})]})})]})})})};var r=function(e){var t=e.currentPage,a=e.handlePageChange;return Object(o.jsx)("div",{children:Object(o.jsx)(l,{currentPage:t,handlePageChange:a})})},d=a(8),b=a.n(d);var h=function(e){var t=e.key,a=e.title,c=e.imglink,n=e.gitlink,l=e.deploy,r=e.desc,d=e.tech,h=Object(s.useState)(!1),j=Object(i.a)(h,2),m=j[0],p=j[1],u=function(e){e.preventDefault(),p(!m)},f={card:{width:"300px",height:"400px",background:"#333333"},back:{width:"300px",height:"400px",background:"#1f1f1f",boxShadow:"inset 0 0 10px #000000"},img:{width:"280px",maxHeight:"400px",background:"#1f1f1f",boxShadow:"inset 0 0 10px #000000"}};return Object(o.jsx)("section",{style:f.back,children:Object(o.jsxs)(b.a,{isFlipped:m,children:[Object(o.jsxs)("div",{className:"d-flex flex-column align-items-center p-2",style:f.card,children:[Object(o.jsx)("p",{className:"mb-1",children:a}),Object(o.jsx)("img",{className:"flex-fill mb-2",style:f.img,src:c,alt:"project"}),Object(o.jsx)("button",{className:"w-100",onClick:u,children:"Click to flip"})]}),Object(o.jsxs)("div",{className:"d-flex flex-column justify-content-between p-2",style:f.card,children:[Object(o.jsxs)("div",{children:[Object(o.jsxs)("p",{children:["Desc: ",r]}),Object(o.jsxs)("p",{children:["Tech: ",d]})]}),Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"d-flex justify-content-around mb-3",children:[l?Object(o.jsx)("a",{href:l,target:"_blank",rel:"noreferrer",children:"deploy"}):"",Object(o.jsx)("a",{href:n,target:"_blank",rel:"noreferrer",children:"Github Repo"})]}),Object(o.jsx)("button",{className:"w-100",onClick:u,children:"Click to flip"})]})]})]})},t)};var j=function(){return Object(o.jsx)("section",{className:"row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 mt-5 px-4",children:[{id:1,title:"Crumbs",desc:"This is a web app",imglink:"/portfolio/assets/images/crumbscapture.png",gitlink:"https://github.com/Randy-chou/crumbs-food-app",deploy:"https://randy-chou.github.io/crumbs-food-app/",tech:"HTML, Javascript, CSS"},{id:2,title:"Note Taker",desc:"This is a web app",imglink:"/portfolio/assets/images/note.png",gitlink:"https://github.com/Randy-chou/note_taker.git",deploy:"https://secure-fortress-85832.herokuapp.com/",tech:"HTML, Javascript, CSS"},{id:3,title:"Tech Blog",desc:"This is a web app",imglink:"/portfolio/assets/images/blog.png",gitlink:"https://github.com/Randy-chou/Tech_Blog_V1.git",deploy:"https://randy-chou.github.io/crumbs-food-app/",tech:"HTML, Javascript, CSS"},{id:4,title:"Employee Tracker",desc:"This is a web app",imglink:"/portfolio/assets/images/tracker.png",gitlink:"https://github.com/Randy-chou/employee_tracker_2021.git",deploy:"",tech:"HTML, Javascript, CSS"},{id:5,title:"E-Commerce API",desc:"This is a web app",imglink:"/portfolio/assets/images/placeholder-01.jfif",gitlink:"https://github.com/Randy-chou/E-CommerceBackEnd.git",deploy:"",tech:"HTML, Javascript, CSS"},{id:6,title:"Save Your Code",desc:"This is a web app",imglink:"/portfolio/assets/images/saveyourcode-img.png",gitlink:"https://github.com/Randy-chou/saveyourcode-website-v1",deploy:"https://randy-chou.github.io/saveyourcode-website-v1/",tech:"HTML, Javascript, CSS"},{id:7,title:"Weather Dash",desc:"This is a web app",imglink:"/portfolio/assets/images/weathercapture.png",gitlink:"https://github.com/Randy-chou/weather_dashboard-2021",deploy:"https://randy-chou.github.io/weather_dashboard-2021/",tech:"HTML, Javascript, CSS"},{id:8,title:"Code Quiz",desc:"This is a web app",imglink:"/portfolio/assets/images/webpage_capture.png",gitlink:"https://github.com/Randy-chou/code-quiz-2021",deploy:"https://randy-chou.github.io/code-quiz-2021/",tech:"HTML, Javascript, CSS"}].map((function(e){return Object(o.jsx)("div",{className:"col mb-3 d-flex flex-column justify-content-center align-items-center",children:Object(o.jsx)(h,{title:e.title,imglink:e.imglink,gitlink:e.gitlink,desc:e.desc,deploy:e.deploy,tech:e.tech},e.id)})}))})};var m=function(){return Object(o.jsxs)("div",{className:"container-md mt-5",children:[Object(o.jsx)("img",{className:"mb-2",src:"/portfolio/assets/images/self-photo-final-2.jpg",style:{width:"250px"},alt:"project"}),Object(o.jsx)("p",{children:"About Me"}),Object(o.jsx)("p",{children:"I am an aspiring Fullstack Web developer from Cottonwood Heights Utah. I have a background in academic cell and molecular biology and fell in love with technology. I now wish to use the skills I learned in academia to bring the forefront of technology to the hands of everyday people. Contact me if there are any projects you want to collaborate on, or even if you need an extra set of hands."})]})};var p=function(){var e={info:{maxWidth:"550px"},form:{background:"#333333",maxWidth:"550px",fontSize:"19px",boxShadow:"8px 8px 16px 0px #1f1f1f"},textarea:{height:"170px"},a:{color:"#B08D57",fontSize:"18px"}},t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())},a=Object(s.useState)(""),c=Object(i.a)(a,2),n=c[0],l=c[1],r=Object(s.useState)(""),d=Object(i.a)(r,2),b=d[0],h=d[1],j=Object(s.useState)(""),m=Object(i.a)(j,2),p=m[0],u=m[1],f=Object(s.useState)(!1),g=Object(i.a)(f,2),x=g[0],v=g[1],O=Object(s.useState)(!1),y=Object(i.a)(O,2),k=y[0],N=y[1],w=Object(s.useState)(!1),S=Object(i.a)(w,2),C=S[0],T=S[1],R=function(e){var t=e.target,a=t.name,s=t.value;"email"===a?l(s):"userName"===a?h(s):u(s)},L=function(e){var t=e.target.name;"email"===t?v(!1):"userName"===t?N(!1):T(!1)},P=function(e){var a=e.target.name;"email"===a?t(n)||v(!0):"userName"===a?b||N(!0):p||T(!0)};return Object(o.jsxs)("div",{children:[Object(o.jsxs)("section",{className:"container p-4",style:e.info,children:[Object(o.jsx)("p",{style:e.a,children:"Phone Number : 385-259-3665"}),Object(o.jsxs)("a",{href:"mailto:Randychou2020@gmail.com",className:"text-decoration-none",style:e.a,children:["Randychou2020@gmail.com",Object(o.jsx)("i",{className:"fas fa-envelope ms-1"})]})]}),Object(o.jsxs)("section",{className:"container mb-5 p-4",style:e.form,children:[Object(o.jsx)("h4",{className:"mb-2",children:"Feel free to send a message my way!"}),Object(o.jsxs)("form",{children:[Object(o.jsxs)("div",{className:"mb-3",children:[Object(o.jsx)("label",{className:"form-label",children:"Full Name"}),Object(o.jsx)("input",{type:"text",className:"form-control",name:"userName",placeholder:"Firstname Lastname",value:b,onChange:R,onFocus:L,onBlur:P}),Object(o.jsx)("p",{children:k?"Please enter your name":""})]}),Object(o.jsxs)("div",{className:"mb-3",children:[Object(o.jsx)("label",{className:"form-label",children:"Email address"}),Object(o.jsx)("input",{type:"email",className:"form-control",name:"email",placeholder:"email@example.com",value:n,onChange:R,onFocus:L,onBlur:P}),Object(o.jsx)("p",{children:x?"Invalid email try again?":""})]}),Object(o.jsxs)("div",{className:"mb-3",children:[Object(o.jsx)("label",{className:"form-label",children:"Message"}),Object(o.jsx)("textarea",{type:"textbox",className:"form-control",name:"message",style:e.textarea,placeholder:"Whats on your mind?",value:p,onChange:R,onFocus:L,onBlur:P}),Object(o.jsx)("p",{children:C?"Please add a message to send":""})]}),Object(o.jsx)("button",{type:"submit",className:"btn",onClick:function(e){if(e.preventDefault(),!t(n)||!b||!p)return t(n)||v(!0),b||N(!0),void(p||T(!0));alert("Hello ".concat(b)),h(""),l(""),u("")},children:"Submit"})]})]})]})};var u=function(){return Object(o.jsxs)("div",{className:"container-sm mt-5",children:[Object(o.jsx)("h3",{children:"Skills"}),Object(o.jsx)("p",{children:"Languages: JavaScript, CSS3, HTML5, Java, Python, R, SQL"}),Object(o.jsx)("p",{children:"Applications: GitHub, Adobe Illustrator, MySQL Workshop"}),Object(o.jsx)("p",{children:"Tools: Bootstrap, jQuery, MySQL, AJAX, Node.js, Express.js, Visual Studio, MongoDB, ReactJS, Firebase"}),Object(o.jsx)("a",{className:"text-decoration-none hoverable",style:{fontSize:"20px",color:"#B08D57"},href:"/portfolio/assets/other/Resume_Randy.pdf",children:"Resume Link!"})]})};var f=function(){var e={background:{background:"#1f1f1f",heightMin:"100px"},a:{color:"#A97142",fontSize:"20px"}};return Object(o.jsxs)("section",{className:"conatiner-fluid d-flex flex-column flex-lg-row align-items-center justify-content-center",style:e.background,children:[Object(o.jsxs)("a",{href:"https://github.com/Randy-chou",target:"_blank",rel:"noreferrer",className:"text-decoration-none p-3",style:e.a,children:["Github",Object(o.jsx)("i",{className:"fab fa-github ps-1"})]}),Object(o.jsxs)("a",{href:"https://www.linkedin.com/in/randy-chou-6a8217133/",target:"_blank",rel:"noreferrer",className:"text-decoration-none p-3",style:e.a,children:["LinkedIn",Object(o.jsx)("i",{className:"fab fa-linkedin ps-1"})]}),Object(o.jsxs)("a",{href:"https://stackoverflow.com/users/15749690/randy-chou",target:"_blank",rel:"noreferrer",className:"text-decoration-none p-3",style:e.a,children:["StackOverflow",Object(o.jsx)("i",{className:"fab fa-stack-overflow ps-1"})]})]})};a(14);var g=function(){var e=Object(s.useState)("About"),t=Object(i.a)(e,2),a=t[0],c=t[1];return Object(o.jsxs)("main",{className:"min-vh-100 d-flex flex-column justify-content-between",id:"mainBody",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)(r,{currentPage:a,handlePageChange:function(e){return c(e)}}),"Project"===a?Object(o.jsx)(j,{}):"About"===a?Object(o.jsx)(m,{}):"Resume"===a?Object(o.jsx)(u,{}):"Contact"===a?Object(o.jsx)(p,{}):void 0]}),Object(o.jsx)(f,{})]})},x=function(){return Object(o.jsx)(g,{})};a(15),a(16);n.a.render(Object(o.jsx)(x,{}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.3255cda9.chunk.js.map