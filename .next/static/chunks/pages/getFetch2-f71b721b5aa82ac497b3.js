_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{EIuW:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return f}));var r=t("o0o1"),c=t.n(r),s=t("HaE+"),o=t("nKUr"),u=(t("q1tI"),t("7oih")),a=t("LpSC"),i=t.n(a);function f(e){if(console.log(e.data),e.data)return Object(o.jsx)(u.a,{children:Object(o.jsx)("div",{className:"row p-5",children:Object(o.jsxs)("div",{className:"col-md-10 m-auto text-center",children:[Object(o.jsx)("h1",{children:"Data!"}),e.data.map((function(e,n){return Object(o.jsx)("pre",{children:Object(o.jsx)("p",{children:JSON.stringify(e)})},n)}))]})})})}f.getInitialProps=function(){var e=Object(s.a)(c.a.mark((function e(n){var t,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i()("https://jsonplaceholder.typicode.com/posts");case 3:return t=e.sent,e.next=6,t.json();case 6:return r=e.sent,console.log(r),e.abrupt("return",{data:r});case 11:return e.prev=11,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",{});case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(n){return e.apply(this,arguments)}}()},"HaE+":function(e,n,t){"use strict";function r(e,n,t,r,c,s,o){try{var u=e[s](o),a=u.value}catch(i){return void t(i)}u.done?n(a):Promise.resolve(a).then(r,c)}function c(e){return function(){var n=this,t=arguments;return new Promise((function(c,s){var o=e.apply(n,t);function u(e){r(o,c,s,u,a,"next",e)}function a(e){r(o,c,s,u,a,"throw",e)}u(void 0)}))}}t.d(n,"a",(function(){return c}))},K64n:function(e,n,t){"use strict";n.Headers=self.Headers,n.Request=self.Request,n.Response=self.Response,n.fetch=self.fetch},LpSC:function(e,n,t){t("K64n"),e.exports=self.fetch.bind(self)},O5g5:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/getFetch2",function(){return t("EIuW")}])}},[["O5g5",0,1,2,3]]]);