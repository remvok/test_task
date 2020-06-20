(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{103:function(e,t,a){},146:function(e,t,a){e.exports=a(302)},151:function(e,t,a){},299:function(e,t,a){},300:function(e,t,a){},302:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),o=a.n(c),i=(a(151),a(17)),u=a(95),s=a(4),l=a(23),m=function(){return JSON.parse(localStorage.getItem("authData")||"{}")},p=function(){localStorage.removeItem("authData"),delete l.defaultHeaders.Authorization},d=function(){Object.assign(l.defaultHeaders,{Authorization:m().accessToken})},h=a(10),f=a(88),b=a.n(f),v=a(122),g=a(5),E=a(6),O=a(7),j=a(8),y=a(305),w="http://167.86.71.101:3001",k=a(63),A=Object(l.createResource)({name:"me",url:"".concat(w,"/api/me"),actions:{get:{transformResponse:function(e){return{body:e.body}}},update:{method:"PATCH",reduce:function(e,t){return function(e,t){return"resolved"===t.status?Object(h.a)({},k.defaultReducers.get(e,t),{item:t.body}):k.defaultReducers.get(e,t)}(e,t)}},clear:{isPure:!0,reduce:function(e){return Object(h.a)({},e,{item:null})}}}}),S=(A.types,A.actions),C=A.rootReducer,P=function(e){Object(j.a)(a,e);var t=Object(O.a)(a);function a(){var e;Object(g.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(E.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.getMe;e.me||t()}},{key:"componentDidUpdate",value:function(e,t,a){var n=this.props,r=n.history;n.me&&r.push("/dashboard")}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Welcome"),r.a.createElement("div",null,r.a.createElement("a",{href:"/signin"},"Sign in")),r.a.createElement("div",null,r.a.createElement("a",{href:"/signup"},"Sign up")))}}]),a}(n.Component),N=Object(s.g)(Object(i.b)((function(e){return{me:e.reducerMe.item}}),Object(h.a)({},S))(P)),x=function(e){Object(j.a)(a,e);var t=Object(O.a)(a);function a(){var e;Object(g.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(E.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Page not found"))}}]),a}(n.Component),I=function(e){Object(j.a)(a,e);var t=Object(O.a)(a);function a(){var e;Object(g.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(E.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Error500"))}}]),a}(n.Component),T=a(28),M=function(e){Object.assign(l.defaultHeaders,{Authorization:e})},R=function(e){return M(e.body.accessToken),function(e){var t=e.accessToken;Object.assign(l.defaultHeaders,{Authorization:t}),localStorage.setItem("authData",JSON.stringify(e))}(e.body),{res:e,body:e.body}},q=Object(l.createResource)({name:"user",url:"".concat(w,"/api/sign-in"),actions:{login:{method:"POST",transformResponse:R,reduce:function(e){return Object(h.a)({},e,{isAuth:!0})}},refresh:{method:"POST",url:"".concat(w,"/api/auth-token-refresh"),transformResponse:R},create:{method:"POST",transformResponse:R},register:{method:"POST",url:"".concat(w,"/api/sign-up"),transformResponse:function(e){return{data:e.body}}},logout:{url:"".concat(w,"/api/logout"),method:"POST",reduce:function(e){return p(),Object(h.a)({},e,{item:null})}}}}),D=(q.types,q.actions),U=q.rootReducer;M(m().accessToken);a(103);var z,H=a(306),W=a(307),F=a(94),J=a(308),L=function(e){var t=e.duration,a=void 0===t?10:t,n=e.msg,r=e.type,c=J.a[r]?r:"info";J.a[c]({className:"error-message",content:n,duration:a})},B=function(e){var t=e.body&&e.body.message?e.body.message:"Unknown error";L({msg:t,type:"error"})},V={labelCol:{span:10},layout:"vertical",wrapperCol:{span:24}},G=function(e){var t=e.handleSubmit;return r.a.createElement(H.a,Object.assign({},V,{name:"basic",initialValues:{remember:!0},onFinish:function(e){var a={};a.email=e.email,a.password=e.password,t(a).then((function(e){window.location.href="/dashboard"})).catch((function(e){B(e)}))}}),r.a.createElement(H.a.Item,{name:"email",rules:[{required:!0,message:"Please input your Email!"}]},r.a.createElement(W.a,{placeholder:"Email"})),r.a.createElement(H.a.Item,{name:"password",rules:[{required:!0,message:"Please input your password!"}]},r.a.createElement(W.a.Password,{placeholder:"Password"})),r.a.createElement(H.a.Item,null,r.a.createElement(F.a,{type:"primary",htmlType:"submit"},"Submit")))},Z=function(e){Object(j.a)(a,e);var t=Object(O.a)(a);function a(){var e;Object(g.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(E.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.getMe;e.me||t()}},{key:"componentDidUpdate",value:function(e,t,a){var n=this.props,r=n.history;n.me&&r.push("/dashboard")}},{key:"render",value:function(){var e=this.props.loginUser;return r.a.createElement("div",{className:"login-form-wrapper"},r.a.createElement("h1",null,"Sign in"),r.a.createElement(G,{handleSubmit:e}),r.a.createElement(T.a,{to:"/signup"},"Click here to sign up"))}}]),a}(n.Component),$=Object(s.g)(Object(i.b)((function(e){return{me:e.reducerMe.item}}),Object(h.a)({},S,{},D))(Z)),K=a(303),Q=a(304),X={labelCol:{span:8},layout:"vertical",wrapperCol:{span:24}},Y=function(e){var t=e.handleSubmit,a=e.handleSuccess;return r.a.createElement(H.a,Object.assign({},X,{name:"basic",initialValues:{remember:!0},onFinish:function(e){t(e).then((function(){a()})).catch((function(e){B(e)}))}}),r.a.createElement(K.a,null,r.a.createElement(Q.a,{className:"sign-up-first-name",span:12},r.a.createElement(H.a.Item,{name:"firstName",rules:[{required:!0,message:"First Name is required!"}]},r.a.createElement(W.a,{placeholder:"First Name"}))),r.a.createElement(Q.a,{className:"sign-up-last-name",span:12},r.a.createElement(H.a.Item,{name:"lastName",rules:[{required:!0,message:"Last Name is required!"}]},r.a.createElement(W.a,{placeholder:"Last Name"})))),r.a.createElement(K.a,null,r.a.createElement(Q.a,{span:24},r.a.createElement(H.a.Item,{name:"email",rules:[{required:!0,message:"Email is required!"},{type:"email",message:"Invalid Email!"}]},r.a.createElement(W.a,{placeholder:"Email address"})))),r.a.createElement(K.a,null,r.a.createElement(Q.a,{span:24},r.a.createElement(H.a.Item,{name:"password",rules:[{required:!0,message:"Password is required!"},{message:"Al least 7 chars contains letters and numbers",validator:function(e,t,a){var n=new RegExp("[a-zA-Z]"),r=new RegExp("[0-9]");t.length>6&&n.test(t)&&r.test(t)?a():a("Error!")}}]},r.a.createElement(W.a.Password,{placeholder:"Password"})))),r.a.createElement(K.a,null,r.a.createElement(Q.a,{span:24},r.a.createElement(H.a.Item,null,r.a.createElement(F.a,{type:"primary",htmlType:"submit"},"Sign up")))))},_=function(e){Object(j.a)(a,e);var t=Object(O.a)(a);function a(){var e;Object(g.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e.handleSuccess=function(){var t=e.props.history;L({msg:"Successful sign up!",type:"info",duration:10}),t.push("/signin")},e}return Object(E.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.getMe;e.me||t()}},{key:"componentDidUpdate",value:function(e,t,a){var n=this.props,r=n.history;n.me&&r.push("/dashboard")}},{key:"render",value:function(){var e=this.props.registerUser;return r.a.createElement("div",{className:"login-form-wrapper"},r.a.createElement("h1",null,"Sign up"),r.a.createElement(Y,{handleSubmit:e,handleSuccess:this.handleSuccess}),"Already have an account? ",r.a.createElement(T.a,{to:"/signin"},"Login"))}}]),a}(n.Component),ee=Object(s.g)(Object(i.b)((function(e){return{me:e.reducerMe.item}}),Object(h.a)({},S,{},D))(_)),te=function(e){Object(j.a)(a,e);var t=Object(O.a)(a);function a(){var e;Object(g.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e.logout=function(){(0,e.props.logoutUser)()},e}return Object(E.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,"Welcome to dashboard!"),r.a.createElement("a",{rel:"noopener noreferrer",onClick:this.logout,href:"/signin"},"Logout"))}}]),a}(n.Component),ae=Object(s.g)(Object(i.b)((function(e){return{}}),Object(h.a)({},D))(te)),ne=function(e){Object(j.a)(a,e);var t=Object(O.a)(a);function a(){var e;Object(g.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(E.a)(a,[{key:"render",value:function(){return r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/dashboard/404"},r.a.createElement(x,null)),r.a.createElement(s.b,{exact:!0,path:"/dashboard/500"},r.a.createElement(I,null)),r.a.createElement(s.b,{exact:!0,path:"/dashboard"},r.a.createElement(ae,null)))}}]),a}(r.a.Component),re=function(e){Object(j.a)(a,e);var t=Object(O.a)(a);function a(){var e;Object(g.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(E.a)(a,[{key:"componentDidMount",value:function(){var e=Object(v.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.getMe,e.next=3,t();case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props,t=e.isAuth;return e.me?r.a.createElement(ne,{isAuth:t}):r.a.createElement(y.a,null)}}]),a}(n.Component),ce=Object(s.g)(Object(i.b)((function(e){return{me:e.reducerMe.item}}),Object(h.a)({},S))(re)),oe=(a(299),function(e){Object(j.a)(a,e);var t=Object(O.a)(a);function a(){var e;Object(g.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(E.a)(a,[{key:"render",value:function(){return r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/signin"},r.a.createElement($,null)),r.a.createElement(s.b,{exact:!0,path:"/signup"},r.a.createElement(ee,null)),r.a.createElement(s.b,{exact:!0,path:"/"},r.a.createElement(N,null)),r.a.createElement(s.b,{exact:!0,path:"/404"},r.a.createElement(x,null)),r.a.createElement(s.b,{exact:!0,path:"/500"},r.a.createElement(I,null)),r.a.createElement(s.b,{path:"*"},r.a.createElement(x,null)))}}]),a}(r.a.Component)),ie=function(e){Object(j.a)(a,e);var t=Object(O.a)(a);function a(){return Object(g.a)(this,a),t.apply(this,arguments)}return Object(E.a)(a,[{key:"render",value:function(){var e=this.props.isAuth;return r.a.createElement("div",{className:"site-wrapper"},r.a.createElement(oe,{isAuth:e}))}}]),a}(n.Component),ue=function(){},se=/\/(auth-token-refresh|sign-in|forgot-password|reset-password|users)/i;function le(e){var t=e.children,a=e.isAuth,n=Object(u.a)(e,["children","isAuth"]);return d(),r.a.createElement(s.b,Object.assign({},n,{render:function(e){var n=e.location;return a?t:r.a.createElement(s.a,{to:{pathname:"/signin",state:{from:n}}})}}))}Object.assign(l.defaultGlobals,{fetch:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return fetch.apply(void 0,t).then((function(e){if(401!==e.status||se.test(e.url))return e;var a=m(),n=a.refreshToken,r=a.userId;return n&&r?z||(z=D.refreshUser({refreshToken:n,userId:r})(ue).then((function(e){return z=null,e})).catch((function(e){return p(),document.location.href="/signin",Promise.reject(e)})).then((function(){return fetch.apply(void 0,t)}))):Promise.reject(e)}))}))});var me=function(e){var t=e.children,a=(e.isAuth,Object(u.a)(e,["children","isAuth"]));return d(),r.a.createElement(s.b,Object.assign({},a,{render:function(e){e.location;return t}}))},pe=Object(i.b)((function(e){return{isAuth:!!m().accessToken}}),{})((function(e){var t=e.history,a=e.isAuth;return r.a.createElement(s.c,{history:t},r.a.createElement(s.d,null,r.a.createElement(le,{exact:!0,path:"/dashboard*",isAuth:a},r.a.createElement(ce,{isAuth:a})),r.a.createElement(me,{exact:!0,path:"/*",isAuth:a},r.a.createElement(ie,{isAuth:a}))))})),de=a(35),he=a(140),fe=a(64),be={},ve={reducerMe:C,reducerUsers:U,pagination:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;return"resolved"===t.status&&t.pagination?Object.assign({},e,Object(fe.a)({},t.pagination.resourceName,t.pagination)):e}},ge=a(18),Ee=Object(ge.a)({getUserConfirmation:function(e,t){return t(window.confirm(e))}}),Oe=Object(de.c)(Object(h.a)({},ve)),je=Object(de.e)(Oe,Object(de.d)(de.a.apply(void 0,[he.a,function(e){return function(e){return function(t){try{if(t.type.startsWith("@@resource")){if(404===t.code)return;if(404===t.code||t.code>=500)return;if(403===t.code)return}return e(t)}catch(a){throw a}}}}])));a(300),a(301);var ye=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(i.a,{store:je},r.a.createElement(pe,{history:Ee})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ye,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[146,1,2]]]);
//# sourceMappingURL=main.b22c9a66.chunk.js.map