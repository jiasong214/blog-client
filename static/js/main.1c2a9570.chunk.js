(this["webpackJsonpblog-by-jia"]=this["webpackJsonpblog-by-jia"]||[]).push([[2],{30:function(t,e,n){"use strict";n.d(e,"a",(function(){return p})),n.d(e,"b",(function(){return f}));var r=n(2),c=n.n(r),a=n(6),u=n(10),o=n(0),s=n(1),i=Object(o.createContext)({}),p=function(t){var e=t.authService,n=t.children,r=Object(o.useState)(void 0),p=Object(u.a)(r,2),f=p[0],h=p[1];Object(o.useEffect)((function(){e.me().then((function(t){return h(t)}))}),[e]);var b=Object(o.useCallback)(function(){var t=Object(a.a)(c.a.mark((function t(n,r){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.login(n,r).then((function(t){return h(t),t})));case 1:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),[e]),j=Object(o.useCallback)(Object(a.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.logout().then((function(){return h(void 0)}));case 1:case"end":return t.stop()}}),t)}))),[e]),d=Object(o.useMemo)((function(){return{user:f,onLogin:b,onLogout:j}}),[f,b,j]);return Object(s.jsx)(i.Provider,{value:d,children:n})},f=function(){return Object(o.useContext)(i)}},49:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n.n(r),a=n(36),u=n.n(a),o=n(21),s=n(51),i=n(3),p=n(17),f=n(10),h=function(t){var e=t.postService,n=Object(r.useState)(!0),c=Object(f.a)(n,2),a=c[0],u=c[1],o=Object(r.useState)(!1),s=Object(f.a)(o,2),i=s[0],h=s[1],b=Object(r.useState)([]),j=Object(f.a)(b,2),d=j[0],l=j[1],O=Object(r.useState)(0),v=Object(f.a)(O,2),x=v[0],m=v[1],y=Object(r.useState)(0),k=Object(f.a)(y,2),g=k[0],w=k[1];Object(r.useEffect)((function(){u(!0),h(!1),e.getPosts(g).then((function(t){return m(t.total),t.data})).then((function(t){return l((function(e){return Object(p.a)(new Set([].concat(Object(p.a)(e),Object(p.a)(t))))}))})).then((function(){return u(!1)})).catch((function(){return h(!0)}))}),[e,g]);return{posts:d,total:x,loading:a,error:i,createPost:function(t){l((function(){return[t].concat(Object(p.a)(d))}))},updatePost:function(t,e){l((function(){return d.map((function(n){return parseInt(n.id)===parseInt(t)?e:n}))}))},deletePost:function(t){l((function(){return d.filter((function(e){return parseInt(e.id)!==parseInt(t)}))}))},updateCurrentPostIndex:function(t){w(t),console.log("Getting more posts from index ".concat(t,"..."))}}},b=n(1),j=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(9),n.e(6)]).then(n.bind(null,560))})),d=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(5)]).then(n.bind(null,562))})),l=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,557))})),O=Object(r.lazy)((function(){return Promise.all([n.e(1),n.e(7)]).then(n.bind(null,558))}));var v=function(t){var e=t.postService,n=h({postService:e}),c=n.posts,a=n.total,u=n.createPost,o=n.updatePost,p=n.deletePost,f=n.updateCurrentPostIndex,v=Object(i.g)();return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(r.Suspense,{fallback:Object(b.jsx)("div",{}),children:Object(b.jsx)(s.a,{exitBeforeEnter:!0,children:Object(b.jsxs)(i.c,{location:v,children:[Object(b.jsx)(i.a,{exact:!0,path:"/",render:function(){return Object(b.jsx)(j,{postService:e,posts:c,total:a,updateCurrentPostIndex:f})}}),Object(b.jsx)(i.a,{exact:!0,path:"/post/compose",render:function(){return Object(b.jsx)(O,{postService:e,createPost:u,updatePost:o})}}),Object(b.jsx)(i.a,{exact:!0,path:"/post/:id",render:function(){return Object(b.jsx)(d,{postService:e,deletePost:p})}}),Object(b.jsx)(i.a,{exact:!0,path:"/post/:id/edit",render:function(){return Object(b.jsx)(O,{postService:e})}}),Object(b.jsx)(i.a,{exact:!0,path:"/login",component:l})]},v.pathname)})}),Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{id:"background"}),Object(b.jsx)("div",{id:"background-effect1"}),Object(b.jsx)("div",{id:"background-effect2"})]})]})},x=n(30),m=n(2),y=n.n(m),k=n(19),g=n(6),w=n(13),P=n(14),S=function(){function t(e){Object(w.a)(this,t),this.baseURL=e}return Object(P.a)(t,[{key:"fetch",value:function(t){function e(e,n){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(){var t=Object(g.a)(y.a.mark((function t(e,n){var r,c,a;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(this.baseURL).concat(e),Object(k.a)(Object(k.a)({},n),{},{headers:Object(k.a)({"Content-Type":"application/json"},n.headers),credentials:"include"}));case 2:return r=t.sent,t.prev=3,t.next=6,r.json();case 6:c=t.sent,t.next=12;break;case 9:t.prev=9,t.t0=t.catch(3),console.error(t.t0);case 12:if(!(r.status>299||r.status<200)){t.next=15;break}return a=c&&c.message?c.message:"http error!",t.abrupt("return",new Error(a));case 15:return t.abrupt("return",c);case 16:case"end":return t.stop()}}),t,this,[[3,9]])})));return function(e,n){return t.apply(this,arguments)}}())}]),t}(),E=function(){function t(e){Object(w.a)(this,t),this.http=e}return Object(P.a)(t,[{key:"getPosts",value:function(){var t=Object(g.a)(y.a.mark((function t(e){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.http.fetch("/posts/?start=".concat(e),{method:"GET"}));case 1:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"getPostById",value:function(){var t=Object(g.a)(y.a.mark((function t(e){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.http.fetch("/posts/".concat(e),{method:"GET"}));case 1:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"createPost",value:function(){var t=Object(g.a)(y.a.mark((function t(e,n){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.http.fetch("/posts",{method:"POST",body:JSON.stringify({title:e,text:n})}));case 1:case"end":return t.stop()}}),t,this)})));return function(e,n){return t.apply(this,arguments)}}()},{key:"updatePost",value:function(){var t=Object(g.a)(y.a.mark((function t(e,n,r){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.http.fetch("/posts/".concat(e),{method:"PUT",body:JSON.stringify({title:n,text:r})}));case 1:case"end":return t.stop()}}),t,this)})));return function(e,n,r){return t.apply(this,arguments)}}()},{key:"deletePost",value:function(){var t=Object(g.a)(y.a.mark((function t(e){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.http.fetch("/posts/".concat(e),{method:"DELETE"}));case 1:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()}]),t}(),I=function(){function t(e){Object(w.a)(this,t),this.http=e}return Object(P.a)(t,[{key:"login",value:function(){var t=Object(g.a)(y.a.mark((function t(e,n){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.http.fetch("/auth/login",{method:"POST",body:JSON.stringify({username:e,password:n})}));case 1:case"end":return t.stop()}}),t,this)})));return function(e,n){return t.apply(this,arguments)}}()},{key:"logout",value:function(){var t=Object(g.a)(y.a.mark((function t(){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.http.fetch("/auth/logout",{method:"POST"}));case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"me",value:function(){var t=Object(g.a)(y.a.mark((function t(){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.http.fetch("/auth/me",{method:"GET"}));case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()}]),t}(),T=new S("https://jia-blog.herokuapp.com"),C=new E(T),J=new I(T);u.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(o.a,{children:Object(b.jsx)(x.a,{authService:J,children:Object(b.jsx)(v,{postService:C})})})}),document.getElementById("root"))}},[[49,3,4]]]);
//# sourceMappingURL=main.1c2a9570.chunk.js.map