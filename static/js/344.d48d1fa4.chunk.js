"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[344],{581:function(e,t,n){n.d(t,{Bt:function(){return v},Tg:function(){return i},Y5:function(){return o},oA:function(){return c},y:function(){return f}});var r=n(861),a=n(311),u=n.n(a),s=n(243);s.Z.defaults.baseURL="https://api.themoviedb.org/3/",s.Z.defaults.params={language:"enUS",api_key:"066dd3f638d42b734e86b50ba07e683c"};var i=function(){var e=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("trending/movie/day");case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("search/movie?page=1&include_adult=false&query=".concat(t));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(t,"/credits"));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(t,"/reviews"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},344:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(439),a=n(581),u=n(791),s=n(510),i=n(883),c="Home_homeTitle__7Xo0I",o="Home_homeContainer__okylG",f=n(184),v=function(){var e=(0,u.useState)([]),t=(0,r.Z)(e,2),n=t[0],v=t[1],l=(0,u.useState)(!1),p=(0,r.Z)(l,2),m=p[0],d=p[1];return(0,u.useEffect)((function(){(0,a.Tg)().then((function(e){v(e)})).catch((function(e){return console.log(e)})).finally((function(){return d(!1)}))}),[]),(0,f.jsxs)("div",{className:o,children:[(0,f.jsx)("h1",{className:c,children:"Trending today"}),(0,f.jsx)(s.e,{films:n}),m&&(0,f.jsx)(i.a,{})]})}},510:function(e,t,n){n.d(t,{e:function(){return s}});var r=n(689),a={moviesList:"MovieList_moviesList__oxGXM",moviesItem:"MovieList_moviesItem__osSDo",moviesLink:"MovieList_moviesLink__U9e0W"},u=n(184),s=function(e){var t=e.films,n=(0,r.s0)();return(0,u.jsx)("div",{children:(0,u.jsx)("ul",{className:a.movieList,children:t.map((function(e){return(0,u.jsx)("li",{className:a.moviesItem,children:(0,u.jsx)("span",{className:a.moviesLink,onClick:function(){return t=e.id,void n("/movies/".concat(t));var t},children:e.title})},e.id)}))})})}}}]);
//# sourceMappingURL=344.d48d1fa4.chunk.js.map