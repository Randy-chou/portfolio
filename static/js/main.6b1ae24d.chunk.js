(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{14:function(e,a,t){},38:function(e,a,t){"use strict";t.r(a);var n=t(1),c=t(7),s=t.n(c),r=t(2),l=t(0);var o=function(e){var a=e.currentPage,t=e.handlePageChange,n={background:{background:"#1f1f1f"},brand:{color:"#B08D57"},li:{color:"#B08D57",fontSize:19}};return Object(l.jsx)("div",{children:Object(l.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark pb-0",style:n.background,children:Object(l.jsxs)("div",{className:"container-fluid ps-4 align-items-end",children:[Object(l.jsx)("div",{className:"navbar-brand fs-1",style:n.brand,children:"Hi, I'm Randy"}),Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsx)("div",{className:"collapse navbar-collapse justify-content-end align-items-end",id:"navbarNav",children:Object(l.jsxs)("ul",{className:"navbar-nav pe-3",children:[Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{className:"About"===a?"nav-link active p-3 rounded-top":"nav-link p-3",href:"#about",style:n.li,onClick:function(){return t("About")},children:"About Me"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{className:"Project"===a?"nav-link active p-3 rounded-top":"nav-link p-3",href:"#project",style:n.li,onClick:function(){return t("Project")},children:"Projects"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{className:"Resume"===a?"nav-link active p-3 rounded-top":"nav-link p-3",href:"#resume",style:n.li,onClick:function(){return t("Resume")},children:"Resume"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{className:"Contact"===a?"nav-link active p-3 rounded-top":"nav-link p-3",href:"#contact",style:n.li,onClick:function(){return t("Contact")},children:"Contact"})})]})})]})})})};var i=function(e){var a=e.currentPage,t=e.handlePageChange;return Object(l.jsx)("div",{children:Object(l.jsx)(o,{currentPage:a,handlePageChange:t})})},b=t(8),j=t.n(b);var d=function(){var e=Object(n.useState)(!1),a=Object(r.a)(e,2),t=a[0],c=a[1],s=function(e){e.preventDefault(),c(!t)},o={card:{width:"300px",height:"400px",background:"#333333"},back:{width:"300px",height:"400px",background:"#1f1f1f",boxShadow:"inset 0 0 10px #000000"}};return Object(l.jsx)("section",{style:o.back,children:Object(l.jsxs)(j.a,{isFlipped:t,children:[Object(l.jsxs)("div",{style:o.card,children:["front",Object(l.jsx)("img",{src:window.location.origin+"/portfolio/assets/images/blog.png",alt:"project"}),Object(l.jsx)("button",{onClick:s,children:"Click to flip"})]}),Object(l.jsxs)("div",{style:o.card,children:["back",Object(l.jsx)("button",{onClick:s,children:"Click to flip"})]})]})})};var u=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{children:"About Me"}),Object(l.jsx)("p",{children:"I am an aspiring Fullstack Web developer from Cottonwood Heights Utah. I have a background in academic cell and molecular biology and fell in love with technology. I now wish to use the skills I learned in academia to bring the forefront of technology to the hands of everyday people. Contact me if there are any projects you want to collaborate on, or even if you need an extra set of hands."})]})};var m=function(){var e={info:{maxWidth:"550px"},form:{background:"#333333",maxWidth:"550px",fontSize:"19px",boxShadow:"8px 8px 16px 0px #1f1f1f"},textarea:{height:"170px"},a:{color:"#B08D57",fontSize:"18px"}},a=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())},t=Object(n.useState)(""),c=Object(r.a)(t,2),s=c[0],o=c[1],i=Object(n.useState)(""),b=Object(r.a)(i,2),j=b[0],d=b[1],u=Object(n.useState)(""),m=Object(r.a)(u,2),h=m[0],x=m[1],f=Object(n.useState)(!1),p=Object(r.a)(f,2),O=p[0],v=p[1],g=Object(n.useState)(!1),y=Object(r.a)(g,2),N=y[0],k=y[1],w=Object(n.useState)(!1),C=Object(r.a)(w,2),S=C[0],P=C[1],R=function(e){var a=e.target,t=a.name,n=a.value;"email"===t?o(n):"userName"===t?d(n):x(n)},A=function(e){var a=e.target.name;"email"===a?v(!1):"userName"===a?k(!1):P(!1)},B=function(e){var t=e.target.name;"email"===t?a(s)||v(!0):"userName"===t?j||k(!0):h||P(!0)};return Object(l.jsxs)("div",{children:[Object(l.jsxs)("section",{className:"container p-4",style:e.info,children:[Object(l.jsx)("p",{style:e.a,children:"Phone Number : 385-259-3665"}),Object(l.jsxs)("a",{href:"mailto:Randychou2020@gmail.com",className:"text-decoration-none",style:e.a,children:["Randychou2020@gmail.com",Object(l.jsx)("i",{className:"fas fa-envelope ms-1"})]})]}),Object(l.jsxs)("section",{className:"container mb-5 p-4",style:e.form,children:[Object(l.jsx)("h4",{className:"mb-2",children:"Feel free to send a message my way!"}),Object(l.jsxs)("form",{children:[Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("label",{className:"form-label",children:"Full Name"}),Object(l.jsx)("input",{type:"text",className:"form-control",name:"userName",placeholder:"Firstname Lastname",value:j,onChange:R,onFocus:A,onBlur:B}),Object(l.jsx)("p",{children:N?"Please enter your name":""})]}),Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("label",{className:"form-label",children:"Email address"}),Object(l.jsx)("input",{type:"email",className:"form-control",name:"email",placeholder:"email@example.com",value:s,onChange:R,onFocus:A,onBlur:B}),Object(l.jsx)("p",{children:O?"Invalid email try again?":""})]}),Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("label",{className:"form-label",children:"Message"}),Object(l.jsx)("textarea",{type:"textbox",className:"form-control",name:"message",style:e.textarea,placeholder:"Whats on your mind?",value:h,onChange:R,onFocus:A,onBlur:B}),Object(l.jsx)("p",{children:S?"Please add a message to send":""})]}),Object(l.jsx)("button",{type:"submit",className:"btn",onClick:function(e){if(e.preventDefault(),!a(s)||!j||!h)return a(s)||v(!0),j||k(!0),void(h||P(!0));alert("Hello ".concat(j)),d(""),o(""),x("")},children:"Submit"})]})]})]})};var h=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{children:"Link to downloadable Resume"}),Object(l.jsx)("a",{href:"./assets/images/Resume_Randy.pdf",children:"Resume"})]})};var x=function(){var e={background:{background:"#1f1f1f",heightMin:"100px"},a:{color:"#A97142",fontSize:"20px"}};return Object(l.jsxs)("section",{className:"conatiner-fluid d-flex flex-column flex-lg-row align-items-center justify-content-center",style:e.background,children:[Object(l.jsxs)("a",{href:"https://github.com/Randy-chou",target:"_blank",rel:"noreferrer",className:"text-decoration-none p-3",style:e.a,children:["Github",Object(l.jsx)("i",{className:"fab fa-github ps-1"})]}),Object(l.jsxs)("a",{href:"https://www.linkedin.com/in/randy-chou-6a8217133/",target:"_blank",rel:"noreferrer",className:"text-decoration-none p-3",style:e.a,children:["LinkedIn",Object(l.jsx)("i",{className:"fab fa-linkedin ps-1"})]}),Object(l.jsxs)("a",{href:"https://stackoverflow.com/users/15749690/randy-chou",target:"_blank",rel:"noreferrer",className:"text-decoration-none p-3",style:e.a,children:["StackOverflow",Object(l.jsx)("i",{className:"fab fa-stack-overflow ps-1"})]})]})};t(14);var f=function(){var e=Object(n.useState)("About"),a=Object(r.a)(e,2),t=a[0],c=a[1];return Object(l.jsxs)("main",{className:"min-vh-100 d-flex flex-column justify-content-between",id:"mainBody",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)(i,{currentPage:t,handlePageChange:function(e){return c(e)}}),"Project"===t?Object(l.jsx)(d,{}):"About"===t?Object(l.jsx)(u,{}):"Resume"===t?Object(l.jsx)(h,{}):"Contact"===t?Object(l.jsx)(m,{}):void 0]}),Object(l.jsx)(x,{})]})},p=function(){return Object(l.jsx)(f,{})};t(15),t(16);s.a.render(Object(l.jsx)(p,{}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.6b1ae24d.chunk.js.map