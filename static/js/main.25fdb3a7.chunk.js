(this["webpackJsonpblog-by-jia"]=this["webpackJsonpblog-by-jia"]||[]).push([[2],{29:function(t,e,n){"use strict";n.d(e,"a",(function(){return p})),n.d(e,"b",(function(){return f}));var r=n(6),c=n(10),a=n(2),u=n.n(a),s=n(0),o=n(1),i=Object(s.createContext)({}),p=function(t){var e=t.authService,n=t.children,a=Object(s.useState)(void 0),p=Object(c.a)(a,2),f=p[0],h=p[1];Object(s.useEffect)((function(){e.me().then((function(t){return h(t)}))}),[e]);var b=Object(s.useCallback)(function(){var t=Object(r.a)(u.a.mark((function t(n,r){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.login(n,r).then((function(t){return h(t),t})));case 1:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),[e]),j=Object(s.useCallback)(Object(r.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.logout().then((function(){return h(void 0)}));case 1:case"end":return t.stop()}}),t)}))),[e]),d=Object(s.useMemo)((function(){return{user:f,onLogin:b,onLogout:j}}),[f,b,j]);return Object(o.jsx)(i.Provider,{value:d,children:n})},f=function(){return Object(s.useContext)(i)}},32:function(t,e,n){"use strict";n(0),n(43);var r=n(1);e.a=function(){return Object(r.jsx)("div",{className:"loading",children:Object(r.jsx)("div",{})})}},43:function(t,e,n){},53:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n.n(r),a=n(35),u=n.n(a),s=n(21),o=n(55),i=n(3),p=n(32),f=n(17),h=n(10),b=function(t){var e=t.postService,n=Object(r.useState)(!0),c=Object(h.a)(n,2),a=c[0],u=c[1],s=Object(r.useState)(!1),o=Object(h.a)(s,2),i=o[0],p=o[1],b=Object(r.useState)([]),j=Object(h.a)(b,2),d=j[0],l=j[1],O=Object(r.useState)(0),v=Object(h.a)(O,2),x=v[0],m=v[1],y=Object(r.useState)(0),k=Object(h.a)(y,2),g=k[0],w=k[1];Object(r.useEffect)((function(){u(!0),p(!1),e.getPosts(g).then((function(t){return m(t.total),t.data})).then((function(t){return l((function(e){return Object(f.a)(new Set([].concat(Object(f.a)(e),Object(f.a)(t))))}))})).then((function(){return u(!1)})).catch((function(){return p(!0)}))}),[e,g]);return{posts:d,total:x,loading:a,error:i,createPost:function(t){l((function(){return[t].concat(Object(f.a)(d))}))},updatePost:function(t,e){l((function(){return d.map((function(n){return parseInt(n.id)===parseInt(t)?e:n}))}))},deletePost:function(t){l((function(){return d.filter((function(e){return parseInt(e.id)!==parseInt(t)}))}))},updateCurrentPostIndex:function(t){w(t)}}},j=n(1),d=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(9),n.e(6)]).then(n.bind(null,575))})),l=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(5)]).then(n.bind(null,577))})),O=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,572))})),v=Object(r.lazy)((function(){return Promise.all([n.e(1),n.e(7)]).then(n.bind(null,573))}));var x=function(t){var e=t.postService,n=b({postService:e}),c=n.posts,a=n.total,u=n.createPost,s=n.updatePost,f=n.deletePost,h=n.updateCurrentPostIndex,x=Object(i.g)();return Object(j.jsxs)("div",{className:"App",children:[0===(null===c||void 0===c?void 0:c.length)?Object(j.jsx)(p.a,{}):Object(j.jsx)(r.Suspense,{fallback:Object(j.jsx)("div",{}),children:Object(j.jsx)(o.a,{exitBeforeEnter:!0,children:Object(j.jsxs)(i.c,{location:x,children:[Object(j.jsx)(i.a,{exact:!0,path:"/",render:function(){return Object(j.jsx)(d,{postService:e,posts:c,total:a,updateCurrentPostIndex:h})}}),Object(j.jsx)(i.a,{exact:!0,path:"/post/compose",render:function(){return Object(j.jsx)(v,{postService:e,createPost:u,updatePost:s})}}),Object(j.jsx)(i.a,{exact:!0,path:"/post/:id",render:function(){return Object(j.jsx)(l,{postService:e,deletePost:f})}}),Object(j.jsx)(i.a,{exact:!0,path:"/post/:id/edit",render:function(){return Object(j.jsx)(v,{postService:e})}}),Object(j.jsx)(i.a,{exact:!0,path:"/login",component:O})]},x.pathname)})}),Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{id:"background"}),Object(j.jsx)("div",{id:"background-effect1"}),Object(j.jsx)("div",{id:"background-effect2"})]})]})},m=n(29),y=n(19),k=n(6),g=n(13),w=n(14),P=n(2),S=n.n(P),E=function(){function t(e){Object(g.a)(this,t),this.baseURL=e}return Object(w.a)(t,[{key:"fetch",value:function(t){function e(e,n){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(){var t=Object(k.a)(S.a.mark((function t(e,n){var r,c,a;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(this.baseURL).concat(e),Object(y.a)(Object(y.a)({},n),{},{headers:Object(y.a)({"Content-Type":"application/json"},n.headers),credentials:"include"}));case 2:return r=t.sent,t.prev=3,t.next=6,r.json();case 6:c=t.sent,t.next=12;break;case 9:t.prev=9,t.t0=t.catch(3),console.error(t.t0);case 12:if(!(r.status>299||r.status<200)){t.next=15;break}return a=c&&c.message?c.message:"http error!",t.abrupt("return",new Error(a));case 15:return t.abrupt("return",c);case 16:case"end":return t.stop()}}),t,this,[[3,9]])})));return function(e,n){return t.apply(this,arguments)}}())}]),t}(),I=function(){function t(e){Object(g.a)(this,t),this.http=e}return Object(w.a)(t,[{key:"getPosts",value:function(){var t=Object(k.a)(S.a.mark((function t(e){return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.http.fetch("/posts/?start=".concat(e),{method:"GET"}));case 1:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"getPostById",value:function(){var t=Object(k.a)(S.a.mark((function t(e){return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.http.fetch("/posts/".concat(e),{method:"GET"}));case 1:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"createPost",value:function(){var t=Object(k.a)(S.a.mark((function t(e,n){return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.http.fetch("/posts",{method:"POST",body:JSON.stringify({title:e,text:n})}));case 1:case"end":return t.stop()}}),t,this)})));return function(e,n){return t.apply(this,arguments)}}()},{key:"updatePost",value:function(){var t=Object(k.a)(S.a.mark((function t(e,n,r){return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.http.fetch("/posts/".concat(e),{method:"PUT",body:JSON.stringify({title:n,text:r})}));case 1:case"end":return t.stop()}}),t,this)})));return function(e,n,r){return t.apply(this,arguments)}}()},{key:"deletePost",value:function(){var t=Object(k.a)(S.a.mark((function t(e){return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.http.fetch("/posts/".concat(e),{method:"DELETE"}));case 1:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()}]),t}(),T=function(){function t(e){Object(g.a)(this,t),this.http=e}return Object(w.a)(t,[{key:"login",value:function(){var t=Object(k.a)(S.a.mark((function t(e,n){return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.http.fetch("/auth/login",{method:"POST",body:JSON.stringify({username:e,password:n})}));case 1:case"end":return t.stop()}}),t,this)})));return function(e,n){return t.apply(this,arguments)}}()},{key:"logout",value:function(){var t=Object(k.a)(S.a.mark((function t(){return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.http.fetch("/auth/logout",{method:"POST"}));case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"me",value:function(){var t=Object(k.a)(S.a.mark((function t(){return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.http.fetch("/auth/me",{method:"GET"}));case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()}]),t}(),C=new E("https://jia-blog.herokuapp.com"),J=new I(C),L=new T(C);u.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(s.a,{children:Object(j.jsx)(m.a,{authService:L,children:Object(j.jsx)(x,{postService:J})})})}),document.getElementById("root"))}},[[53,3,4]]]);
//# sourceMappingURL=main.25fdb3a7.chunk.js.map