(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{103:function(e,t,a){},146:function(e,t,a){e.exports=a(302)},151:function(e,t,a){},299:function(e,t,a){},300:function(e,t,a){},302:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),o=a.n(c),i=(a(151),a(17)),u=a(95),s=a(4),l=a(23),m=function(){return JSON.parse(localStorage.getItem("authData")||"{}")},p=function(){localStorage.removeItem("authData"),delete l.defaultHeaders.Authorization},h=function(){Object.assign(l.defaultHeaders,{Authorization:m().accessToken})},d=a(10),f=a(88),b=a.n(f),v=a(122),g=a(5),E=a(6),O=a(7),j=a(8),y=a(305),w="http://167.86.71.101:3001",k="https://remvok.github.io/test_task",A=a(63),S=Object(l.createResource)({name:"me",url:"".concat(w,"/api/me"),actions:{get:{transformResponse:function(e){return{body:e.body}}},update:{method:"PATCH",reduce:function(e,t){return function(e,t){return"resolved"===t.status?Object(d.a)({},A.defaultReducers.get(e,t),{item:t.body}):A.defaultReducers.get(e,t)}(e,t)}},clear:{isPure:!0,reduce:function(e){return Object(d.a)({},e,{item:null})}}}}),C=(S.types,S.actions),P=S.rootReducer,N=function(e){Object(j.a)(a,e);var t=Object(O.a)(a);function a(){var e;Object(g.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(E.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.getMe;e.me||t()}},{key:"componentDidUpdate",value:function(e,t,a){var n=this.props,r=n.history;n.me&&r.push("/dashboard")}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Welcome"),r.a.createElement("div",null,r.a.createElement("a",{href:"/signin"},"Sign in")),r.a.createElement("div",null,r.a.createElement("a",{href:"/signup"},"Sign up")))}}]),a}(n.Component),x=Object(s.g)(Object(i.b)((function(e){return{me:e.reducerMe.item}}),Object(d.a)({},C))(N)),I=function(e){Object(j.a)(a,e);var t=Object(O.a)(a);function a(){var e;Object(g.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(E.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Page not found"))}}]),a}(n.Component),T=function(e){Object(j.a)(a,e);var t=Object(O.a)(a);function a(){var e;Object(g.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(E.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Error500"))}}]),a}(n.Component),M=a(28),R=function(e){Object.assign(l.defaultHeaders,{Authorization:e})},q=function(e){return R(e.body.accessToken),function(e){var t=e.accessToken;Object.assign(l.defaultHeaders,{Authorization:t}),localStorage.setItem("authData",JSON.stringify(e))}(e.body),{res:e,body:e.body}},D=Object(l.createResource)({name:"user",url:"".concat(w,"/api/sign-in"),actions:{login:{method:"POST",transformResponse:q,reduce:function(e){return Object(d.a)({},e,{isAuth:!0})}},refresh:{method:"POST",url:"".concat(w,"/api/auth-token-refresh"),transformResponse:q},create:{method:"POST",transformResponse:q},register:{method:"POST",url:"".concat(w,"/api/sign-up"),transformResponse:function(e){return{data:e.body}}},logout:{url:"".concat(w,"/api/logout"),method:"POST",reduce:function(e){return p(),Object(d.a)({},e,{item:null})}}}}),U=(D.types,D.actions),z=D.rootReducer;R(m().accessToken);a(103);var H,W=a(306),F=a(307),J=a(94),L=a(308),B=function(e){var t=e.duration,a=void 0===t?10:t,n=e.msg,r=e.type,c=L.a[r]?r:"info";L.a[c]({className:"error-message",content:n,duration:a})},V=function(e){var t=e.body&&e.body.message?e.body.message:"Unknown error";B({msg:t,type:"error"})},G={labelCol:{span:10},layout:"vertical",wrapperCol:{span:24}},Z=function(e){var t=e.handleSubmit;return r.a.createElement(W.a,Object.assign({},G,{name:"basic",initialValues:{remember:!0},onFinish:function(e){var a={};a.email=e.email,a.password=e.password,t(a).then((function(e){window.location.href="/dashboard"})).catch((function(e){V(e)}))}}),r.a.createElement(W.a.Item,{name:"email",rules:[{required:!0,message:"Please input your Email!"}]},r.a.createElement(F.a,{placeholder:"Email"})),r.a.createElement(W.a.Item,{name:"password",rules:[{required:!0,message:"Please input your password!"}]},r.a.createElement(F.a.Password,{placeholder:"Password"})),r.a.createElement(W.a.Item,null,r.a.createElement(J.a,{type:"primary",htmlType:"submit"},"Submit")))},$=function(e){Object(j.a)(a,e);var t=Object(O.a)(a);function a(){var e;Object(g.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(E.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.getMe;e.me||t()}},{key:"componentDidUpdate",value:function(e,t,a){var n=this.props,r=n.history;n.me&&r.push("/dashboard")}},{key:"render",value:function(){var e=this.props.loginUser;return r.a.createElement("div",{className:"login-form-wrapper"},r.a.createElement("h1",null,"Sign in"),r.a.createElement(Z,{handleSubmit:e}),r.a.createElement(M.a,{to:"/signup"},"Click here to sign up"))}}]),a}(n.Component),_=Object(s.g)(Object(i.b)((function(e){return{me:e.reducerMe.item}}),Object(d.a)({},C,{},U))($)),K=a(303),Q=a(304),X={labelCol:{span:8},layout:"vertical",wrapperCol:{span:24}},Y=function(e){var t=e.handleSubmit,a=e.handleSuccess;return r.a.createElement(W.a,Object.assign({},X,{name:"basic",initialValues:{remember:!0},onFinish:function(e){t(e).then((function(){a()})).catch((function(e){V(e)}))}}),r.a.createElement(K.a,null,r.a.createElement(Q.a,{className:"sign-up-first-name",span:12},r.a.createElement(W.a.Item,{name:"firstName",rules:[{required:!0,message:"First Name is required!"}]},r.a.createElement(F.a,{placeholder:"First Name"}))),r.a.createElement(Q.a,{className:"sign-up-last-name",span:12},r.a.createElement(W.a.Item,{name:"lastName",rules:[{required:!0,message:"Last Name is required!"}]},r.a.createElement(F.a,{placeholder:"Last Name"})))),r.a.createElement(K.a,null,r.a.createElement(Q.a,{span:24},r.a.createElement(W.a.Item,{name:"email",rules:[{required:!0,message:"Email is required!"},{type:"email",message:"Invalid Email!"}]},r.a.createElement(F.a,{placeholder:"Email address"})))),r.a.createElement(K.a,null,r.a.createElement(Q.a,{span:24},r.a.createElement(W.a.Item,{name:"password",rules:[{required:!0,message:"Password is required!"},{message:"Al least 7 chars contains letters and numbers",validator:function(e,t,a){var n=new RegExp("[a-zA-Z]"),r=new RegExp("[0-9]");t.length>6&&n.test(t)&&r.test(t)?a():a("Error!")}}]},r.a.createElement(F.a.Password,{placeholder:"Password"})))),r.a.createElement(K.a,null,r.a.createElement(Q.a,{span:24},r.a.createElement(W.a.Item,null,r.a.createElement(J.a,{type:"primary",htmlType:"submit"},"Sign up")))))},ee=function(e){Object(j.a)(a,e);var t=Object(O.a)(a);function a(){var e;Object(g.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e.handleSuccess=function(){var t=e.props.history;B({msg:"Successful sign up!",type:"info",duration:10}),t.push("/signin")},e}return Object(E.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.getMe;e.me||t()}},{key:"componentDidUpdate",value:function(e,t,a){var n=this.props,r=n.history;n.me&&r.push("/dashboard")}},{key:"render",value:function(){var e=this.props.registerUser;return r.a.createElement("div",{className:"login-form-wrapper"},r.a.createElement("h1",null,"Sign up"),r.a.createElement(Y,{handleSubmit:e,handleSuccess:this.handleSuccess}),"Already have an account? ",r.a.createElement(M.a,{to:"/signin"},"Login"))}}]),a}(n.Component),te=Object(s.g)(Object(i.b)((function(e){return{me:e.reducerMe.item}}),Object(d.a)({},C,{},U))(ee)),ae=function(e){Object(j.a)(a,e);var t=Object(O.a)(a);function a(){var e;Object(g.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e.logout=function(){(0,e.props.logoutUser)()},e}return Object(E.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,"Welcome to dashboard!"),r.a.createElement("a",{rel:"noopener noreferrer",onClick:this.logout,href:"/signin"},"Logout"))}}]),a}(n.Component),ne=Object(s.g)(Object(i.b)((function(e){return{}}),Object(d.a)({},U))(ae)),re=function(e){Object(j.a)(a,e);var t=Object(O.a)(a);function a(){var e;Object(g.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(E.a)(a,[{key:"render",value:function(){return r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"".concat(k,"/dashboard/404")},r.a.createElement(I,null)),r.a.createElement(s.b,{exact:!0,path:"".concat(k,"/dashboard/500")},r.a.createElement(T,null)),r.a.createElement(s.b,{exact:!0,path:"".concat(k,"/dashboard")},r.a.createElement(ne,null)))}}]),a}(r.a.Component),ce=function(e){Object(j.a)(a,e);var t=Object(O.a)(a);function a(){var e;Object(g.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(E.a)(a,[{key:"componentDidMount",value:function(){var e=Object(v.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.getMe,e.next=3,t();case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props,t=e.isAuth;return e.me?r.a.createElement(re,{isAuth:t}):r.a.createElement(y.a,null)}}]),a}(n.Component),oe=Object(s.g)(Object(i.b)((function(e){return{me:e.reducerMe.item}}),Object(d.a)({},C))(ce)),ie=(a(299),function(e){Object(j.a)(a,e);var t=Object(O.a)(a);function a(){var e;Object(g.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(E.a)(a,[{key:"render",value:function(){return r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"".concat(k,"/signin")},r.a.createElement(_,null)),r.a.createElement(s.b,{exact:!0,path:"".concat(k,"/signup")},r.a.createElement(te,null)),r.a.createElement(s.b,{exact:!0,path:"".concat(k)},r.a.createElement(x,null)),r.a.createElement(s.b,{exact:!0,path:"".concat(k,"/404")},r.a.createElement(I,null)),r.a.createElement(s.b,{exact:!0,path:"".concat(k,"/500")},r.a.createElement(T,null)),r.a.createElement(s.b,{path:"*"},r.a.createElement(I,null)))}}]),a}(r.a.Component)),ue=function(e){Object(j.a)(a,e);var t=Object(O.a)(a);function a(){return Object(g.a)(this,a),t.apply(this,arguments)}return Object(E.a)(a,[{key:"render",value:function(){var e=this.props.isAuth;return r.a.createElement("div",{className:"site-wrapper"},r.a.createElement(ie,{isAuth:e}))}}]),a}(n.Component),se=function(){},le=/\/(auth-token-refresh|sign-in|forgot-password|reset-password|users)/i;function me(e){var t=e.children,a=e.isAuth,n=Object(u.a)(e,["children","isAuth"]);return h(),r.a.createElement(s.b,Object.assign({},n,{render:function(e){var n=e.location;return a?t:r.a.createElement(s.a,{to:{pathname:"/signin",state:{from:n}}})}}))}Object.assign(l.defaultGlobals,{fetch:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return fetch.apply(void 0,t).then((function(e){if(401!==e.status||le.test(e.url))return e;var a=m(),n=a.refreshToken,r=a.userId;return n&&r?H||(H=U.refreshUser({refreshToken:n,userId:r})(se).then((function(e){return H=null,e})).catch((function(e){return p(),document.location.href="/signin",Promise.reject(e)})).then((function(){return fetch.apply(void 0,t)}))):Promise.reject(e)}))}))});var pe=function(e){var t=e.children,a=(e.isAuth,Object(u.a)(e,["children","isAuth"]));return h(),r.a.createElement(s.b,Object.assign({},a,{render:function(e){e.location;return t}}))},he=Object(i.b)((function(e){return{isAuth:!!m().accessToken}}),{})((function(e){var t=e.history,a=e.isAuth;return r.a.createElement(s.c,{history:t},r.a.createElement(s.d,null,r.a.createElement(me,{exact:!0,path:"/dashboard*",isAuth:a},r.a.createElement(oe,{isAuth:a})),r.a.createElement(pe,{exact:!0,path:"/*",isAuth:a},r.a.createElement(ue,{isAuth:a}))))})),de=a(35),fe=a(140),be=a(64),ve={},ge={reducerMe:P,reducerUsers:z,pagination:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;return"resolved"===t.status&&t.pagination?Object.assign({},e,Object(be.a)({},t.pagination.resourceName,t.pagination)):e}},Ee=a(18),Oe=Object(Ee.a)({getUserConfirmation:function(e,t){return t(window.confirm(e))}}),je=Object(de.c)(Object(d.a)({},ge)),ye=Object(de.e)(je,Object(de.d)(de.a.apply(void 0,[fe.a,function(e){return function(e){return function(t){try{if(t.type.startsWith("@@resource")){if(404===t.code)return;if(404===t.code||t.code>=500)return;if(403===t.code)return}return e(t)}catch(a){throw a}}}}])));a(300),a(301);var we=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(i.a,{store:ye},r.a.createElement(he,{history:Oe})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(we,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[146,1,2]]]);
//# sourceMappingURL=main.0df73e12.chunk.js.map