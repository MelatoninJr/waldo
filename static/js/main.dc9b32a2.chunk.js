(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,n){e.exports=n.p+"static/media/waldo.953dadcb.jpg"},26:function(e,t,n){e.exports=n.p+"static/media/mario.2b46d42c.png"},27:function(e,t,n){e.exports=n.p+"static/media/fox.1de5f70d.png"},28:function(e,t,n){e.exports=n.p+"static/media/star.b6af7485.png"},34:function(e,t,n){e.exports=n(48)},42:function(e,t,n){},44:function(e,t,n){},46:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a=n(4),c=n.n(a),r=n(24),o=n.n(r),l=(n(42),n(44),n(25)),i=n.n(l),s=n(32),u=n(0),m=n(22),f=n(10),d=(n(46),n(26)),p=n.n(d),g=n(27),b=n.n(g),j=n(28),E=n.n(j),O=n(31),h=n(17),v=function(e){var t=e.running,n=(e.setRunning,e.time),r=e.setTime;return Object(a.useEffect)(function(){var e;return t?e=setInterval(function(){r(function(e){return e+10})},10):t||clearInterval(e),function(){return clearInterval(e)}},[t]),c.a.createElement("div",{className:"stopwatch"},c.a.createElement("div",{className:"numbers"},c.a.createElement("span",null,("0"+Math.floor(n/6e4%60)).slice(-2),":"),c.a.createElement("span",null,("0"+Math.floor(n/1e3%60)).slice(-2),":"),c.a.createElement("span",null,("0"+n/10%100).slice(-2))))},w=(Object(O.a)({apiKey:"AIzaSyAgNvtfRfpoYEiLtDgwy5zsGjhJyWBe_Zo",authDomain:"waldo-d3ec0.firebaseapp.com",projectId:"waldo-d3ec0",storageBucket:"waldo-d3ec0.appspot.com",messagingSenderId:"914214078248",appId:"1:914214078248:web:2652732eff8af53be0721d"}),Object(h.d)()),y=(Object(h.a)(w,"coordinates"),function(e){var t=Object(a.useState)([1]),n=Object(f.a)(t,2),r=n[0],o=(n[1],Object(a.useState)([])),l=Object(f.a)(o,2),s=l[0],u=l[1],d=Object(a.useState)([]),g=Object(f.a)(d,2),j=(g[0],g[1],Object(a.useState)(0)),O=Object(f.a)(j,2),y=O[0],N=O[1],x=Object(a.useState)(0),R=Object(f.a)(x,2),S=R[0],k=R[1],I=Object(a.useState)(!0),B=Object(f.a)(I,2),C=B[0],Y=B[1],M=Object(a.useRef)(null),T=Object(a.useRef)(null),A=Object(a.useRef)(null),J=Object(a.useRef)(null),X=Object(a.useRef)(null),z=Object(a.useRef)(null),D=function(e){var t=Object(h.a)(w,"coordinates"),n=[];Object(h.c)(t).then(function(t){t.docs.forEach(function(e){n.push(Object(m.a)({},e.data(),{id:e.id}))}),console.log(n[0][e]),"mario"===e&&n[1].current[1]>=n[0][e][1]-50&&n[1].current[1]<=n[0][e][1]+50&&n[1].current[1]>=n[0][e][1]-50&&n[1].current[1]<=n[0][e][1]+50&&(N(y+1),console.log("You found Mario!"),J.current.style.opacity="30%"),"fox"===e&&n[1].current[1]>=n[0][e][1]-50&&n[1].current[1]<=n[0][e][1]+50&&n[1].current[1]>=n[0][e][1]-50&&n[1].current[1]<=n[0][e][1]+50&&(N(y+1),console.log("You found Fox!"),z.current.style.opacity="30%"),"star"===e&&n[1].current[1]>=n[0][e][1]-50&&n[1].current[1]<=n[0][e][1]+50&&n[1].current[1]>=n[0][e][1]-50&&n[1].current[1]<=n[0][e][1]+50&&(N(y+1),console.log("You found Star!"),X.current.style.opacity="30%")}),u([]),y>=2&&(Y(!1),setTimeout(function(){alert("You won!")},500))};return Object(a.useEffect)(function(){setTimeout(function(){var e=M.current.getBoundingClientRect(),t=e.width,n=e.height,a=970*t/1440,c=1869*n/3120,r=1112*t/1440,o=1747*n/3120,l=172*t/1440,i=1338*n/3120;console.log(t,n);var s=Object(h.b)(w,"coordinates","E9F8lXBRRiHAKxbVS2OT");Object(h.e)(s,{mario:[a,c],star:[r,o],fox:[l,i]}).then(function(){console.log("sending...")})},1e3)},[]),c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"mini-container"},c.a.createElement("div",{className:"header"},c.a.createElement("div",{className:"status-container"},c.a.createElement("img",{src:p.a,className:"image-hold-two",ref:J}),c.a.createElement("img",{src:E.a,className:"image-hold-two",ref:X}),c.a.createElement("img",{src:b.a,className:"image-hold-two",ref:z})),c.a.createElement(v,{className:"stopwatch",time:S,setTime:k,running:C,setRunning:Y})),c.a.createElement("img",{src:i.a,onClick:function(e){var t=e.target.getBoundingClientRect(),n=e.clientX-t.left,a=e.clientY-t.top,c=Object(h.b)(w,"coordinates","click");Object(h.e)(c,{current:[n,a]}).then(function(){console.log("sending...")}),u([1]),setTimeout(function(){1==r[0]&&(A.current.style.opacity="100%",console.log(A.current),A.current.style.left=n+"px",A.current.style.top=a+"px")},200)},onMouseMove:function(e){var t=T.current,n=e.target.getBoundingClientRect(),a=e.clientX-n.left,c=e.clientY-n.top;t.style.left=a+"px",t.style.top=c+"px"},className:"waldo-image",ref:M}),r.map(function(e,t){return c.a.createElement("div",{className:"mario",key:t,ref:T})}),s.map(function(e,t){return c.a.createElement("div",{className:"image-holder",key:t,ref:A},c.a.createElement("img",{src:p.a,className:"image-hold",data:"mario-image",onClick:function(){return D("mario")}}),c.a.createElement("img",{src:E.a,className:"image-hold",onClick:function(){return D("star")}}),c.a.createElement("img",{src:b.a,className:"image-hold",onClick:function(){return D("fox")}}))}))))});var N=function(){return c.a.createElement(s.a,{basename:"/"},c.a.createElement(u.c,null,c.a.createElement(u.a,{path:"/",element:c.a.createElement(y,null)})))};o.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(N,null)))}},[[34,2,1]]]);
//# sourceMappingURL=main.dc9b32a2.chunk.js.map