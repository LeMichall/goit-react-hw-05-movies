"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[94],{108:function(e,t,n){function r(e,t,n,r,a,s,i){try{var o=e[s](i),c=o.value}catch(u){return void n(u)}o.done?t(c):Promise.resolve(c).then(r,a)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(a,s){var i=e.apply(t,n);function o(e){r(i,a,s,o,c,"next",e)}function c(e){r(i,a,s,o,c,"throw",e)}o(void 0)}))}}n.d(t,{y:function(){return v},Y5:function(){return f},Bt:function(){return p},oA:function(){return u},Tg:function(){return c}});var s=n(311),i=n.n(s),o="066dd3f638d42b734e86b50ba07e683c",c=function(){var e=a(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(o));case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent.results);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=a(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(o,"&language=en-US&page=1&include_adult=false&query=").concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent.results);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=a(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(o));case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=a(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(o));case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent.cast);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=a(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(o));case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent.results);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},94:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r=n(439),a=n(791),s=n(87),i="Searchbar_formBox__CbBbs",o="Searchbar_inputForm__MN3Wx",c="Searchbar_formBtn__idt6S",u=n(184),f=function(e){var t=e.searchMovies,n=(0,a.useState)(""),f=(0,r.Z)(n,2),v=f[0],p=f[1],h=(0,s.lr)(),l=(0,r.Z)(h,2)[1];(0,a.useEffect)((function(){l(v?{query:v.toLowerCase()}:{})}),[v,l]);return(0,u.jsxs)("form",{className:i,onSubmit:function(e){e.preventDefault(),t(v.toLowerCase())},children:[(0,u.jsx)("input",{className:o,type:"text",name:"query",value:v,autoFocus:!0,onChange:function(e){p(e.target.value)}}),(0,u.jsx)("button",{className:c,type:"submit",children:"Search"})]})},v=n(108),p=n(510),h=n(883),l="Movies_MovieContainer__VECUD",m=function(){var e=(0,a.useState)([]),t=(0,r.Z)(e,2),n=t[0],s=t[1],i=(0,a.useState)(!1),o=(0,r.Z)(i,2),c=o[0],m=o[1],d=(0,a.useState)(!1),x=(0,r.Z)(d,2),_=x[0],b=x[1];return(0,u.jsxs)("div",{className:l,children:[(0,u.jsx)(f,{searchMovies:function(e){(0,v.oA)(e).then((function(e){s(e),m(0===e.length)})).catch((function(e){return console.log(e)})).finally((function(){return b(!1)}))}}),_&&(0,u.jsx)(h.a,{}),c&&(0,u.jsx)("p",{children:"There are no movies with this title. Please, try again"}),n&&(0,u.jsx)(p.e,{films:n})]})}},510:function(e,t,n){n.d(t,{e:function(){return i}});var r=n(689),a={moviesList:"MovieList_moviesList__oxGXM",moviesItem:"MovieList_moviesItem__osSDo",moviesLink:"MovieList_moviesLink__U9e0W"},s=n(184),i=function(e){var t=e.films,n=(0,r.s0)();return(0,s.jsx)("div",{children:(0,s.jsx)("ul",{className:a.movieList,children:t.map((function(e){return(0,s.jsx)("li",{className:a.moviesItem,children:(0,s.jsx)("span",{className:a.moviesLink,onClick:function(){return t=e.id,void n("/movies/".concat(t));var t},children:e.title})},e.id)}))})})}}}]);
//# sourceMappingURL=94.b0ced2dd.chunk.js.map