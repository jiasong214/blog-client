(this["webpackJsonpblog-by-jia"]=this["webpackJsonpblog-by-jia"]||[]).push([[5],{143:function(t,e,c){},144:function(t,e,c){},145:function(t,e,c){},146:function(t,e,c){},539:function(t,e,c){"use strict";c.r(e);var s=c(0),n=c(17),i=(c(143),c.p+"static/media/image.1836321e.png"),r=c(1),a=function(){return Object(r.jsxs)("aside",{className:"intro",children:[Object(r.jsx)("h1",{className:"intro__title",children:"Blog"}),Object(r.jsxs)("p",{className:"intro__text",children:["About ... by ",Object(r.jsx)("a",{href:"https://github.com/JiaSong214",target:"_blank",rel:"noreferrer",children:"Jia Song"})]}),Object(r.jsx)("div",{className:"intro__img",children:Object(r.jsx)("img",{src:i,alt:"profile"})})]})},o=c(11),l=(c(144),function(t){var e,c=t.id,s=t.index,n=t.title,i=t.createdAt,a=t.text;return Object(r.jsxs)("li",{className:"postCard",children:[Object(r.jsx)(o.b,{to:{pathname:"/post/".concat(c)},children:Object(r.jsx)("h3",{className:"postCard__title",children:n})}),Object(r.jsxs)("div",{className:"postCard-container",children:[Object(r.jsx)("span",{className:"postCard__index",children:(e=s,"".concat(e,11===e||12===e||13===e?"th Post":e%10===1?"st Post":e%10===2?"nd Post":e%10===3?"st Post":"th Post"))}),Object(r.jsx)("span",{className:"postCard__dot"}),Object(r.jsx)("span",{className:"postCard__createdAt",children:function(t){var e=new Date(t),c=e.getFullYear(),s=e.toLocaleString("en",{month:"long"}),n=e.getDate();return"".concat(n," ").concat(s,", ").concat(c)}(i)})]}),Object(r.jsx)("div",{className:"postCard__preview",children:function(t){var e=window.innerWidth>768?500:window.innerWidth>480?360:280,c=t.substr(0,e).replaceAll("#","").replaceAll("`","").replaceAll("*","");return"".concat(c,"...")}(a)}),Object(r.jsx)(o.b,{to:{pathname:"/post/".concat(c)},children:Object(r.jsx)("div",{className:"postCard__readBtn",children:"Continue Reading \u2192"})})]})}),d=c(67),j=(c(145),function(t){var e=t.posts,c=t.total,s=parseInt(c.count)+1;return Object(r.jsxs)(r.Fragment,{children:[0===e.length&&Object(r.jsx)(d.a,{}),Object(r.jsx)("ul",{className:"postCardsList",children:e.map((function(t){return s--,Object(r.jsx)(l,{id:t.id,index:s,title:t.title,createdAt:t.createdAt,text:t.text},t.id)}))})]})}),b=(c(146),function(){return Object(r.jsx)("aside",{className:"createPostBtn",children:Object(r.jsx)(o.b,{to:"/post/compose",children:Object(r.jsx)("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:Object(r.jsx)("g",{children:Object(r.jsx)("path",{d:"M8.8 7.2H5.6V3.9c0-.4-.3-.8-.8-.8s-.7.4-.7.8v3.3H.8c-.4 0-.8.3-.8.8s.3.8.8.8h3.3v3.3c0 .4.3.8.8.8s.8-.3.8-.8V8.7H9c.4 0 .8-.3.8-.8s-.5-.7-1-.7zm15-4.9v-.1h-.1c-.1 0-9.2 1.2-14.4 11.7-3.8 7.6-3.6 9.9-3.3 9.9.3.1 3.4-6.5 6.7-9.2 5.2-1.1 6.6-3.6 6.6-3.6s-1.5.2-2.1.2c-.8 0-1.4-.2-1.7-.3 1.3-1.2 2.4-1.5 3.5-1.7.9-.2 1.8-.4 3-1.2 2.2-1.6 1.9-5.5 1.8-5.7z"})})})})})});e.default=function(t){var e=t.loading,c=t.error,i=t.posts,o=t.total,l=t.changePostsNumber,d=Object(n.b)().user,h=Object(s.useRef)(null),x=Object(s.useCallback)((function(t){t[0].isIntersecting&&l()}),[]);return Object(s.useEffect)((function(){var t=new IntersectionObserver(x,{root:null,rootMargin:"20px",threshold:0});h.current&&t.observe(h.current)}),[x]),Object(r.jsxs)("main",{className:"main",children:[Object(r.jsx)(a,{}),Object(r.jsx)(j,{posts:i,total:o}),e&&Object(r.jsx)("div",{children:"Loading next posts..."}),c&&Object(r.jsx)("div",{children:"Coudn't get next post..."}),d&&d.token&&Object(r.jsx)(b,{}),Object(r.jsx)("div",{ref:h})]})}},67:function(t,e,c){"use strict";c(0),c(68);var s=c(1);e.a=function(){return Object(s.jsx)("div",{className:"loading",children:Object(s.jsxs)("div",{className:"ellipsis",children:[Object(s.jsx)("div",{children:"."}),Object(s.jsx)("div",{children:"."}),Object(s.jsx)("div",{children:"."}),Object(s.jsx)("div",{children:"."}),Object(s.jsx)("div",{children:"."})]})})}},68:function(t,e,c){}}]);
//# sourceMappingURL=5.0cdc4d8e.chunk.js.map