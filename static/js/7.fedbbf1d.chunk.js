(this["webpackJsonpblog-by-jia"]=this["webpackJsonpblog-by-jia"]||[]).push([[7],{100:function(e,t,c){},569:function(e,t,c){},573:function(e,t,c){"use strict";c.r(t);var n=c(10),a=c(0),s=c.n(a),r=c(3),o=c(70),i=c(88),l=(c(569),c(1)),u=function(e){var t=e.postService,c=e.createPost,s=(e.updatePost,Object(r.f)()),u=Object(r.h)(),j=Object(a.useState)(),b=Object(n.a)(j,2),d=b[0],O=b[1],h=Object(a.useState)(),x=Object(n.a)(h,2),f=x[0],m=x[1],v=Object(a.useState)(""),p=Object(n.a)(v,2),g=p[0],P=p[1];Object(a.useEffect)((function(){u.id&&t.getPostById(u.id).then((function(e){return O(e)})).catch(console.error())}),[t,u.id]),Object(a.useEffect)((function(){d&&(m(d.title),P(d.text))}),[d]);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(o.a,{}),Object(l.jsxs)("section",{className:"createPost",children:[Object(l.jsx)("div",{className:"createPost-titlebox",children:Object(l.jsx)("input",{type:"text",className:"createPost__title",placeholder:"Post Title",value:f||"",onChange:function(e){return m(e.target.value)}})}),Object(l.jsxs)("div",{className:"createPost-textbox",children:[Object(l.jsx)("textarea",{onChange:function(e){return P(e.target.value)},value:g}),Object(l.jsx)("div",{className:"createPost__markdown",children:Object(l.jsx)(i.a,{text:g})})]}),Object(l.jsx)("div",{className:"createPost-buttonbox",children:Object(l.jsx)("button",{onClick:function(e){e.preventDefault(),function(e){return""!==e||(alert("Title must be filled out"),!1)}(f)&&(u.id?(t.updatePost(u.id,f,g).catch(console.error),s.push("/post/".concat(u.id))):(t.createPost(f,g).then((function(e){return c(e)})).catch(console.error),s.push("/")))},className:"createPost__submitBtn",children:"Compost"})})]})]})};t.default=s.a.memo(u)},70:function(e,t,c){"use strict";var n=c(0),a=c.n(n),s=c(21),r=(c(71),c(1)),o=function(){return Object(r.jsx)("aside",{className:"backBtn",children:Object(r.jsx)("div",{children:Object(r.jsx)(s.b,{to:"/",className:"hover-button",children:"\u2190 Back"})})})};t.a=a.a.memo(o)},71:function(e,t,c){},88:function(e,t,c){"use strict";var n=c(19),a=c(110),s=(c(0),c(111)),r=c.n(s),o=c(576),i=c(571),l=c(151),u=c.n(l),j=(c(100),c(1)),b=["node","inline","className","children"];t.a=function(e){var t=e.text,c={code:function(e){e.node;var t=e.inline,c=e.className,s=e.children,r=Object(a.a)(e,b),l=/language-(\w+)/.exec(c||"");return!t&&l?Object(j.jsx)(o.a,Object(n.a)({style:i.a,language:l[1],PreTag:"div",children:String(s).replace(/\n$/,"")},r)):Object(j.jsx)("code",Object(n.a)(Object(n.a)({className:c},r),{},{children:s}))}};return Object(j.jsx)("div",{className:"markdown",children:Object(j.jsx)(r.a,{components:c,remarkPlugins:[u.a],children:t})})}}}]);
//# sourceMappingURL=7.fedbbf1d.chunk.js.map