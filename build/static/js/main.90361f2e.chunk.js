(this["webpackJsonpblog-by-jia"]=this["webpackJsonpblog-by-jia"]||[]).push([[0],{130:function(t,e,n){},137:function(t,e,n){},138:function(t,e,n){},139:function(t,e,n){},140:function(t,e,n){},141:function(t,e,n){},142:function(t,e,n){},268:function(t,e,n){},524:function(t,e,n){},525:function(t,e,n){},526:function(t,e,n){},527:function(t,e,n){},528:function(t,e,n){},529:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),s=n(116),a=n.n(s),i=n(7),o=n(124),u=n(8),l=n(3),j=(n(130),n(0)),h=function(){return Object(j.jsx)("header",{className:"header",children:Object(j.jsx)("div",{children:Object(j.jsx)("h1",{className:"header__title",children:Object(j.jsx)(i.b,{to:"/",children:"JIA"})})})})},b=n(2),d=n.n(b),p=n(9),f=Object(c.createContext)({}),O=function(t){var e=t.authService,n=t.children,r=Object(c.useState)(void 0),s=Object(u.a)(r,2),a=s[0],i=s[1];Object(c.useEffect)((function(){e.me().then((function(t){return i(t)}))}),[e]);var o=Object(c.useCallback)(function(){var t=Object(p.a)(d.a.mark((function t(n,c){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.login(n,c).then((function(t){return i(t)}));case 1:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),[e]),l=Object(c.useCallback)(Object(p.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.logout().then((function(){return i(void 0)}));case 1:case"end":return t.stop()}}),t)}))),[e]),h=Object(c.useMemo)((function(){return{user:a,onLogin:o,onLogout:l}}),[a,o,l]);return Object(j.jsx)(f.Provider,{value:h,children:n})},x=function(){return Object(c.useContext)(f)},m=(n(137),function(){var t=Object(l.f)(),e=x(),n=e.user,c=e.onLogout;return Object(j.jsxs)("footer",{className:"footer",children:[n&&n.token?Object(j.jsx)("div",{className:"footer__logout",onClick:function(){window.confirm("Do you want to log out?")&&(c(),t.push("/"))},children:"Logout Admin"}):Object(j.jsx)(i.b,{className:"footer__login",to:"/login",children:"Admin account"}),Object(j.jsx)("p",{className:"footer__copyright",children:"\xa9 2021 Jia Song"})]})}),v=(n(138),n.p+"static/media/avatar2.fda41455.jpg"),g=function(){return Object(j.jsxs)("aside",{className:"intro",children:[Object(j.jsx)("div",{className:"intro__img",children:Object(j.jsx)("img",{src:v,alt:"profile"})}),Object(j.jsxs)("p",{className:"intro__text",children:["Personal Blog by ",Object(j.jsx)("a",{href:"https://github.com/JiaSong214",target:"_blank",rel:"noreferrer",children:"Jia Song"})]})]})},y=(n(139),function(t){var e=t.id,n=t.title,c=t.createdAt,r=t.subtitle;return Object(j.jsx)("li",{className:"postCard",children:Object(j.jsxs)(i.b,{to:{pathname:"/post/".concat(e)},children:[Object(j.jsx)("h3",{className:"postCard__title",children:n}),Object(j.jsx)("span",{className:"postCard__createdAt",children:function(t){var e=new Date(t),n=e.getFullYear(),c=e.toLocaleString("en",{month:"long"}),r=e.getDate();return"".concat(r," ").concat(c,", ").concat(n)}(c)}),Object(j.jsx)("div",{className:"postCard__subtitle",children:r})]})})}),N=(n(140),function(){return Object(j.jsx)("div",{className:"loading",children:Object(j.jsxs)("div",{className:"ellipsis",children:[Object(j.jsx)("div",{children:"."}),Object(j.jsx)("div",{children:"."}),Object(j.jsx)("div",{children:"."}),Object(j.jsx)("div",{children:"."}),Object(j.jsx)("div",{children:"."})]})})}),w=(n(141),function(t){var e=t.posts;return Object(j.jsxs)(j.Fragment,{children:[0===e.length&&Object(j.jsx)(N,{}),Object(j.jsx)("ul",{className:"postCardsList",children:e.map((function(t){return Object(j.jsx)(y,{id:t.id,title:t.title,subtitle:t.subtitle,createdAt:t.createdAt},t.id)}))})]})}),P=(n(142),function(){return Object(j.jsx)("aside",{className:"createPostBtn",children:Object(j.jsx)(i.b,{to:"/post/compose",children:Object(j.jsx)("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:Object(j.jsx)("g",{children:Object(j.jsx)("path",{d:"M8.8 7.2H5.6V3.9c0-.4-.3-.8-.8-.8s-.7.4-.7.8v3.3H.8c-.4 0-.8.3-.8.8s.3.8.8.8h3.3v3.3c0 .4.3.8.8.8s.8-.3.8-.8V8.7H9c.4 0 .8-.3.8-.8s-.5-.7-1-.7zm15-4.9v-.1h-.1c-.1 0-9.2 1.2-14.4 11.7-3.8 7.6-3.6 9.9-3.3 9.9.3.1 3.4-6.5 6.7-9.2 5.2-1.1 6.6-3.6 6.6-3.6s-1.5.2-2.1.2c-.8 0-1.4-.2-1.7-.3 1.3-1.2 2.4-1.5 3.5-1.7.9-.2 1.8-.4 3-1.2 2.2-1.6 1.9-5.5 1.8-5.7z"})})})})})}),k=function(t){var e=t.posts,n=x().user;return Object(j.jsxs)("main",{className:"main",children:[Object(j.jsx)(g,{}),Object(j.jsx)(w,{posts:e}),n&&n.token&&Object(j.jsx)(P,{})]})},S=n(21),_=n(125),C=n(118),E=n.n(C),B=n(533),D=n(532),A=n(119),L=n.n(A),T=(n(268),["node","inline","className","children"]),I=function(t){var e=t.text,n={code:function(t){t.node;var e=t.inline,n=t.className,c=t.children,r=Object(_.a)(t,T),s=/language-(\w+)/.exec(n||"");return!e&&s?Object(j.jsx)(B.a,Object(S.a)({style:D.a,language:s[1],PreTag:"div",children:String(c).replace(/\n$/,"")},r)):Object(j.jsx)("code",Object(S.a)(Object(S.a)({className:n},r),{},{children:c}))}};return Object(j.jsx)("div",{className:"markdown",children:Object(j.jsx)(E.a,{components:n,remarkPlugins:[L.a],children:e})})},J=(n(524),function(t){var e=t.id,n=t.onDelete;return Object(j.jsxs)("div",{className:"postSetting",children:[Object(j.jsx)(i.b,{to:{pathname:"/post/".concat(e,"/edit")},children:"Edit"}),Object(j.jsx)("div",{className:"deletePostBtn",onClick:function(){return n(e)},children:"Delete"})]})}),U=(n(525),function(){var t=Object(c.createRef)();return Object(c.useEffect)((function(){var e=document.createElement("script");Object.entries({src:"https://utteranc.es/client.js",repo:"jiasong214/blog-comments","issue-term":"pathname",theme:"github-light",crossorigin:"anonymous",async:!0}).forEach((function(t){var n=Object(u.a)(t,2),c=n[0],r=n[1];e.setAttribute(c,r)})),t.current.appendChild(e)}),[]),Object(j.jsx)("div",{className:"comments",ref:t})}),F=(n(526),function(t){var e=t.postService,n=t.changePostsByDelete,r=Object(l.g)(),s=Object(l.f)(),a=Object(c.useState)([]),i=Object(u.a)(a,2),o=i[0],h=i[1],b=x().user;Object(c.useEffect)((function(){e.getPostById(r.id).then((function(t){return h(t)})).catch(console.error())}),[e,r.id]);return Object(j.jsx)(j.Fragment,{children:0===o.length?Object(j.jsx)(N,{}):Object(j.jsxs)("section",{className:"post",children:[Object(j.jsx)("h2",{className:"post__title",children:o.title}),Object(j.jsx)("span",{className:"post__createdAt",children:function(t){var e=new Date(t),n=e.getFullYear(),c=e.toLocaleString("en",{month:"long"}),r=e.getDate();return"".concat(r," ").concat(c,", ").concat(n)}(o.createdAt)}),Object(j.jsx)("div",{className:"post__contents",children:Object(j.jsx)(I,{text:o.text})}),b&&b.token&&Object(j.jsx)(J,{id:r.id,onDelete:function(t){window.confirm("Do you want to delete this post?")&&(e.deletePost(t).then((function(){return n(t)})).catch(console.error()),s.push("/"))}}),Object(j.jsx)(U,{})]})})}),G=(n(527),function(){var t=Object(l.f)(),e=x().onLogin,n=Object(c.useState)(""),r=Object(u.a)(n,2),s=r[0],a=r[1],i=Object(c.useState)(""),o=Object(u.a)(i,2),h=o[0],b=o[1];return Object(j.jsxs)("div",{className:"login",children:[Object(j.jsx)("h2",{className:"login__title",children:"Admin"}),Object(j.jsxs)("form",{onSubmit:function(n){return function(n){n.preventDefault(),e(s,h),t.push("/")}(n)},children:[Object(j.jsx)("input",{type:"text",placeholder:"Username",value:s,onChange:function(t){return function(t){return a(t.target.value)}(t)}}),Object(j.jsx)("input",{type:"password",placeholder:"Password",value:h,onChange:function(t){return function(t){return b(t.target.value)}(t)}}),Object(j.jsx)("button",{type:"submit",children:"LOG IN"})]})]})}),H=(n(528),function(t){var e=t.postService,n=t.changePostsByCreate,r=t.changePostsByUpdate,s=Object(l.f)(),a=Object(l.g)(),i=Object(c.useState)(),o=Object(u.a)(i,2),h=o[0],b=o[1],d=Object(c.useState)(),p=Object(u.a)(d,2),f=p[0],O=p[1],x=Object(c.useState)(),m=Object(u.a)(x,2),v=m[0],g=m[1],y=Object(c.useState)(""),N=Object(u.a)(y,2),w=N[0],P=N[1];Object(c.useEffect)((function(){a.id&&e.getPostById(a.id).then((function(t){return b(t)})).catch(console.error())}),[e,a.id]),Object(c.useEffect)((function(){h&&(O(h.title),g(h.subtitle),P(h.text))}),[h]);return Object(j.jsxs)("div",{className:"createPost",children:[Object(j.jsxs)("div",{className:"createPost-titlebox",children:[Object(j.jsx)("input",{type:"text",className:"createPost__title",placeholder:"Post Title",value:f||"",onChange:function(t){return O(t.target.value)}}),Object(j.jsx)("input",{type:"text",className:"createPost__subtitle",placeholder:"Post Subtitle",value:v||"",onChange:function(t){return g(t.target.value)}})]}),Object(j.jsxs)("div",{className:"createPost-textbox",children:[Object(j.jsx)("textarea",{onChange:function(t){return P(t.target.value)},value:w}),Object(j.jsx)("div",{className:"createPost__markdown",children:Object(j.jsx)(I,{text:w})})]}),Object(j.jsx)("div",{className:"createPost-buttonbox",children:Object(j.jsx)("button",{onClick:function(t){t.preventDefault();var c={title:f,subtitle:v,text:w};a.id?(e.updatePost(a.id,c.title,c.subtitle,c.text).then((function(t){return r(a.id,t)})).catch(console.error),s.push("/post/".concat(a.id))):(e.createPost(c.title,c.subtitle,c.text).then((function(t){return n(t)})).catch(console.error),s.push("/"))},className:"createPost__submitBtn",children:"Compost"})})]})});var M=function(t){var e=t.postService,n=Object(c.useState)([]),r=Object(u.a)(n,2),s=r[0],a=r[1];return Object(c.useEffect)((function(){e.getPosts().then((function(t){return a(t)})).catch(console.error())}),[e]),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(h,{}),Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{exact:!0,path:"/",children:Object(j.jsx)(k,{postService:e,posts:s})}),Object(j.jsx)(l.a,{exact:!0,path:"/post/compose",children:Object(j.jsx)(H,{postService:e,changePostsByCreate:function(t){a((function(){return[t].concat(Object(o.a)(s))}))},changePostsByUpdate:function(t,e){console.log("Update"),a((function(){return s.map((function(n){return parseInt(n.id)===parseInt(t)?e:n}))}))}})}),Object(j.jsx)(l.a,{exact:!0,path:"/post/:id",children:Object(j.jsx)(F,{postService:e,changePostsByDelete:function(t){a((function(){return s.filter((function(e){return parseInt(e.id)!==parseInt(t)}))}))}})}),Object(j.jsx)(l.a,{exact:!0,path:"/post/:id/edit",children:Object(j.jsx)(H,{postService:e})}),Object(j.jsx)(l.a,{exact:!0,path:"/login",component:G})]}),Object(j.jsx)(m,{})]})},R=n(27),z=n(28),V=function(){function t(e){Object(R.a)(this,t),this.baseURL=e}return Object(z.a)(t,[{key:"fetch",value:function(t){function e(e,n){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(){var t=Object(p.a)(d.a.mark((function t(e,n){var c,r,s;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(this.baseURL).concat(e),Object(S.a)(Object(S.a)({},n),{},{headers:Object(S.a)({"Content-Type":"application/json"},n.headers),credentials:"include"}));case 2:return c=t.sent,t.prev=3,t.next=6,c.json();case 6:r=t.sent,t.next=12;break;case 9:t.prev=9,t.t0=t.catch(3),console.error(t.t0);case 12:if(!(c.status>299||c.status<200)){t.next=15;break}return s=r&&r.message?r.message:"http error!",t.abrupt("return",new Error(s));case 15:return t.abrupt("return",r);case 16:case"end":return t.stop()}}),t,this,[[3,9]])})));return function(e,n){return t.apply(this,arguments)}}())}]),t}(),Y=function(){function t(e){Object(R.a)(this,t),this.http=e}return Object(z.a)(t,[{key:"getPosts",value:function(){var t=Object(p.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.http.fetch("/post",{method:"GET"}));case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getPostById",value:function(){var t=Object(p.a)(d.a.mark((function t(e){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.http.fetch("/post/".concat(e),{method:"GET"}));case 1:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"createPost",value:function(){var t=Object(p.a)(d.a.mark((function t(e,n,c){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.http.fetch("/post",{method:"POST",body:JSON.stringify({title:e,subtitle:n,text:c})}));case 1:case"end":return t.stop()}}),t,this)})));return function(e,n,c){return t.apply(this,arguments)}}()},{key:"updatePost",value:function(){var t=Object(p.a)(d.a.mark((function t(e,n,c,r){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.http.fetch("/post/".concat(e),{method:"PUT",body:JSON.stringify({title:n,subtitle:c,text:r})}));case 1:case"end":return t.stop()}}),t,this)})));return function(e,n,c,r){return t.apply(this,arguments)}}()},{key:"deletePost",value:function(){var t=Object(p.a)(d.a.mark((function t(e){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.http.fetch("/post/".concat(e),{method:"DELETE"}));case 1:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()}]),t}(),$=function(){function t(e){Object(R.a)(this,t),this.http=e}return Object(z.a)(t,[{key:"login",value:function(){var t=Object(p.a)(d.a.mark((function t(e,n){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.http.fetch("/auth/login",{method:"POST",body:JSON.stringify({username:e,password:n})}));case 1:case"end":return t.stop()}}),t,this)})));return function(e,n){return t.apply(this,arguments)}}()},{key:"logout",value:function(){var t=Object(p.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.http.fetch("/auth/logout",{method:"POST"}));case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"me",value:function(){var t=Object(p.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.http.fetch("/auth/me",{method:"GET"}));case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()}]),t}(),q=new V("https://jia-blog.herokuapp.com"),K=new Y(q),Q=new $(q);a.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(i.a,{basename:"/blog-client",children:Object(j.jsx)(O,{authService:Q,children:Object(j.jsx)(M,{postService:K})})})}),document.getElementById("root"))}},[[529,1,2]]]);
//# sourceMappingURL=main.90361f2e.chunk.js.map