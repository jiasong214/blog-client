(this["webpackJsonpblog-by-jia"]=this["webpackJsonpblog-by-jia"]||[]).push([[5],{551:function(e,t,n){},552:function(e,t,n){},553:function(e,t,n){},563:function(e,t,n){"use strict";n.r(t);var c=n(10),o=n(0),i=n.n(o),s=n(3),a=n(560),r=n(30),l=n(68),u=n(85),j=n(21),d=(n(551),n(1)),b=function(e){var t=e.id,n=e.onDelete;return Object(d.jsxs)("div",{className:"postSetting",children:[Object(d.jsx)(j.b,{to:{pathname:"/post/".concat(t,"/edit")},children:"Edit"}),Object(d.jsx)("div",{className:"deletePostBtn",onClick:function(){return n(t)},children:"Delete"})]})},f=(n(552),function(){var e=Object(o.createRef)();return Object(o.useEffect)((function(){var t=document.createElement("script");Object.entries({src:"https://utteranc.es/client.js",repo:"jiasong214/blog-comments","issue-term":"url",theme:"github-light",crossorigin:"anonymous",async:!0}).forEach((function(e){var n=Object(c.a)(e,2),o=n[0],i=n[1];t.setAttribute(o,i)})),e.current.appendChild(t)}),[]),Object(d.jsx)("div",{className:"comments",ref:e})}),O=n(33),h=n(83),m=(n(553),function(e){var t=e.postService,n=e.deletePost,i=Object(s.h)(),j=Object(s.f)(),m=Object(o.useState)([]),x=Object(c.a)(m,2),p=x[0],v=x[1],g=Object(o.useState)(!1),N=Object(c.a)(g,2),y=N[0],_=N[1],w=Object(r.b)().user;Object(o.useEffect)((function(){t.getPostById(i.id).then((function(e){return v(e)})).catch(console.error())}),[t,i.id]),Object(o.useEffect)((function(){""!==(null===p||void 0===p?void 0:p.id)&&setTimeout((function(){_(!0)}),1e3)}),[p]);return Object(d.jsx)(d.Fragment,{children:y?Object(d.jsxs)(a.a.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3,delay:.3},style:{position:"relative",zIndex:10},children:[Object(d.jsx)(l.a,{}),Object(d.jsxs)("section",{className:"post",children:[Object(d.jsx)("h2",{className:"post__title",children:p.title}),Object(d.jsx)("span",{className:"post__createdAt",children:function(e){var t=new Date(e),n=t.getFullYear(),c=t.toLocaleString("en",{month:"short"}),o=t.getDate();return"".concat(o," ").concat(c," ").concat(n)}(p.createdAt)}),Object(d.jsx)("div",{className:"post__contents",children:Object(d.jsx)(u.a,{text:p.text})}),(null===w||void 0===w?void 0:w.token)&&Object(d.jsx)(b,{id:i.id,onDelete:function(e){window.confirm("Do you want to delete this post?")&&(t.deletePost(e).then((function(){return n(e)})).catch(console.error()),j.push("/"))}}),Object(d.jsx)(f,{})]}),Object(d.jsx)(h.a,{})]}):Object(d.jsx)(O.a,{})})});t.default=i.a.memo(m)},68:function(e,t,n){"use strict";var c=n(0),o=n.n(c),i=n(21),s=(n(69),n(1)),a=function(){return Object(s.jsx)("aside",{className:"backBtn",children:Object(s.jsx)("div",{children:Object(s.jsx)(i.b,{to:"/",className:"hover-button",children:"\u2190 Back"})})})};t.a=o.a.memo(a)},69:function(e,t,n){},83:function(e,t,n){"use strict";var c=n(0),o=n.n(c),i=n(3),s=n(21),a=n(30),r=(n(84),n(1)),l=function(e){e.onOpenLoginModal;var t=Object(i.f)(),n=Object(a.b)(),c=n.user,o=n.onLogout;return Object(r.jsxs)("footer",{className:"footer",children:[(null===c||void 0===c?void 0:c.token)?Object(r.jsx)("button",{className:"footer__logout",onClick:function(){window.confirm("Do you want to log out?")&&(o(),t.push("/"))},children:"Logout Admin"}):Object(r.jsx)(s.b,{className:"footer__login",to:"/login",children:"Admin account"}),Object(r.jsx)("p",{className:"footer__copyright",children:"\xa9 2021 Jia Song"})]})};t.a=o.a.memo(l)},84:function(e,t,n){},85:function(e,t,n){"use strict";var c=n(19),o=n(157),i=(n(0),n(108)),s=n.n(i),a=n(562),r=n(557),l=n(145),u=n.n(l),j=(n(97),n(1)),d=["node","inline","className","children"];t.a=function(e){var t=e.text,n={code:function(e){e.node;var t=e.inline,n=e.className,i=e.children,s=Object(o.a)(e,d),l=/language-(\w+)/.exec(n||"");return!t&&l?Object(j.jsx)(a.a,Object(c.a)({style:r.a,language:l[1],PreTag:"div",children:String(i).replace(/\n$/,"")},s)):Object(j.jsx)("code",Object(c.a)(Object(c.a)({className:n},s),{},{children:i}))}};return Object(j.jsx)("div",{className:"markdown",children:Object(j.jsx)(s.a,{components:n,remarkPlugins:[u.a],children:t})})}},97:function(e,t,n){}}]);
//# sourceMappingURL=5.8d98034d.chunk.js.map