"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[168],{581:function(e,t,n){n.d(t,{Bt:function(){return p},Tg:function(){return s},Y5:function(){return o},oA:function(){return i},y:function(){return f}});var r=n(861),u=n(311),a=n.n(u),c=n(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/",c.Z.defaults.params={language:"enUS",api_key:"066dd3f638d42b734e86b50ba07e683c"};var s=function(){var e=(0,r.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/movie/day");case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("search/movie?page=1&include_adult=false&query=".concat(t));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"/credits"));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"/reviews"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},168:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var r=n(439),u=n(689),a=n(791),c=n(883),s="Reviews_reviewsList__hDAQA",i=n(581),o=n(184),f=function(){var e=(0,u.UO)().movieId,t=(0,a.useState)([]),n=(0,r.Z)(t,2),f=n[0],p=n[1],d=(0,a.useState)(!1),l=(0,r.Z)(d,2),v=l[0],h=l[1];return(0,a.useEffect)((function(){h(!0),(0,i.Bt)(e).then((function(e){return p(e)})).catch((function(e){return console.log(e)})).finally((function(){return h(!1)}))}),[e]),(0,o.jsxs)("div",{className:"reviewsBox",children:[v&&(0,o.jsx)(c.a,{}),0!==f.length&&(0,o.jsx)("div",{children:(0,o.jsx)("ul",{className:s,children:f.map((function(e){return(0,o.jsxs)("li",{children:[(0,o.jsxs)("h2",{children:["Author: ",e.author]}),(0,o.jsx)("p",{children:e.content})]},e.id)}))})}),0===f.length&&(0,o.jsx)("div",{children:"We don't have any reviews for this movie"})]})}}}]);
//# sourceMappingURL=168.f2f643d5.chunk.js.map