"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[76],{108:function(t,n,e){function r(t,n,e,r,c,a,u){try{var s=t[a](u),o=s.value}catch(i){return void e(i)}s.done?n(o):Promise.resolve(o).then(r,c)}function c(t){return function(){var n=this,e=arguments;return new Promise((function(c,a){var u=t.apply(n,e);function s(t){r(u,c,a,s,o,"next",t)}function o(t){r(u,c,a,s,o,"throw",t)}s(void 0)}))}}e.d(n,{y:function(){return f},Y5:function(){return p},Bt:function(){return h},oA:function(){return i},Tg:function(){return o}});var a=e(311),u=e.n(a),s="066dd3f638d42b734e86b50ba07e683c",o=function(){var t=c(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(s));case 2:return n=t.sent,t.next=5,n.json();case 5:return t.abrupt("return",t.sent.results);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=c(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(s,"&language=en-US&page=1&include_adult=false&query=").concat(n));case 2:return e=t.sent,t.next=5,e.json();case 5:return t.abrupt("return",t.sent.results);case 6:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=c(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=").concat(s));case 2:return e=t.sent,t.next=5,e.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=c(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=").concat(s));case 2:return e=t.sent,t.next=5,e.json();case 5:return t.abrupt("return",t.sent.cast);case 6:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),h=function(){var t=c(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=").concat(s));case 2:return e=t.sent,t.next=5,e.json();case 5:return t.abrupt("return",t.sent.results);case 6:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},76:function(t,n,e){e.r(n),e.d(n,{default:function(){return f}});var r=e(439),c=e(791),a=e(108),u=e(883),s="Cast_castBox__KVoEk",o="Cast_castList__ARoWn",i=e(689),p=e(184),f=function(){var t=(0,c.useState)(!1),n=(0,r.Z)(t,2),e=n[0],f=n[1],h=(0,i.UO)().movieId,v=(0,c.useState)([]),l=(0,r.Z)(v,2),d=l[0],m=l[1];return(0,c.useEffect)((function(){f(!0),(0,a.y)(h).then((function(t){m(t)})).catch((function(t){return console.log(t)})).finally((function(){return f(!1)}))}),[h]),(0,p.jsxs)("div",{children:[e&&(0,p.jsx)(u.a,{}),(0,p.jsx)("ul",{className:s,children:d.map((function(t){var n=t.id,e=t.profile_path,r=t.name,c=t.character;return(0,p.jsxs)("li",{className:o,children:[(0,p.jsx)("img",{width:"200px",src:e&&"https://image.tmdb.org/t/p/w500".concat(e),alt:r}),(0,p.jsx)("p",{children:r}),(0,p.jsxs)("p",{children:["Character: ",c]})]},n)}))})]})}}}]);
//# sourceMappingURL=76.70ae9b22.chunk.js.map