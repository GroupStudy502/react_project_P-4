"use strict";(self.webpackChunkreact_project=self.webpackChunkreact_project||[]).push([[6253],{3485:(n,e,t)=>{t.d(e,{A:()=>x});var a,i=t(7528),r=t(5043),s=t(197),o=t(9888),l=t(8147),d=t(579);const c=s.Ay.div(a||(a=(0,i.A)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: ",";\n  width: 100%;\n  background: white;\n  .clear {\n    clear: both;\n  }\n  .chat-box {\n    width: 100%;\n    height: 100%;\n    margin-top: ",";\n    background: white;\n    border-radius: 8px;\n\n    overflow: hidden;\n    display: flex;\n    flex-direction: column;\n  }\n\n  .messages-list {\n    padding: 15px;\n    flex-grow: 1;\n    overflow-y: auto;\n    width: 100%;\n      &::-webkit-scrollbar {\n      width: 2px;\n    }\n    &::-webkit-scrollbar-thumb {\n      border-radius: 2px;\n      background: ",";\n    }\n  }\n\n  .user-message,\n  .ai-message {\n    margin-bottom: 20px;\n    max-width: 90%;\n  }\n\n  .user-message {\n    float: right;\n    align-self: flex-end;\n    background: ",";\n    color: ",";\n    padding: 10px 15px;\n    border-radius: 16px 16px 0 16px;\n  }\n  .ai-message {\n    float: left;\n    align-self: flex-start;\n    background: #f0f0f0;\n    color: ",";\n    padding: 10px 15px;\n    border-radius: 16px 16px 16px 0;\n  }\n\n  .message-form {\n    border-top: 1px solid ",";\n    padding: 20px;\n    display: flex;\n    align-items: center;\n  }\n\n  .message-input {\n    flex-grow: 1;\n    padding: 10px;\n    border-radius: 16px;\n    border: 1px solid ",";\n    margin-right: 10px;\n  }\n\n  .send-button {\n    padding: 10px 20px;\n    border-radius: 16px;\n    border: none;\n    background-color: ",";\n    color: ",";\n    cursor: pointer;\n  }\n\n  h1 {\n    text-align: center;\n    background-color: ",";\n    padding: 20px;\n    margin: 0;\n  }\n  a {\n    color: ",";\n  }\n"])),(n=>{let{height:e}=n;return null!==e&&void 0!==e?e:"530px"}),(n=>{let{marginTop:e}=n;return null!==e&&void 0!==e?e:"15px"}),o.y.secondary,o.y.jmt,o.y.light,o.y.dark,o.y.light,o.y.dark,o.y.jmt,o.y.light,o.y.light,o.y.primary),p=n=>{let{height:e,marginTop:t}=n;const[a,i]=(0,r.useState)([]);return(0,d.jsx)(c,{height:e,marginTop:t,children:(0,d.jsxs)("div",{className:"chat-box",children:[(0,d.jsx)(m,{messages:a}),(0,d.jsx)(u,{onSendMessage:n=>{var e;(e=n,(0,l.A)("/ai?message=".concat(e))).then((e=>{i((t=>[...t,{text:n,isUser:!0},{text:e,isUser:!1}]))}))}})]})})},m=n=>{let{messages:e}=n;const t=(0,r.useRef)();return(0,r.useEffect)((()=>{t.current.scrollTop=t.current.scrollHeight}),[e]),(0,d.jsx)("div",{className:"messages-list",ref:t,children:e.map(((n,e)=>(0,d.jsx)(g,{...n},e)))})},g=n=>{let{text:e,isUser:t}=n;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{className:t?"user-message":"ai-message",children:(0,d.jsxs)("p",{children:[(0,d.jsx)("b",{children:t?"User":"AI"}),":"," ",(0,d.jsx)("span",{dangerouslySetInnerHTML:{__html:e}})]})}),(0,d.jsx)("div",{className:"clear"})]})},u=n=>{let{onSendMessage:e}=n;const[t,a]=(0,r.useState)(""),i=(0,r.useRef)();return(0,d.jsxs)("form",{onSubmit:n=>{n.preventDefault(),e(t),a(""),i.current.focus()},className:"message-form",children:[(0,d.jsx)("input",{type:"text",value:t,onChange:n=>a(n.target.value),className:"message-input",ref:i}),(0,d.jsx)("button",{type:"submit",className:"send-button",children:"\ubb3c\uc5b4\ubcf4\uae30"})]})},x=r.memo(p)},7502:(n,e,t)=>{t.d(e,{A:()=>A});var a,i,r,s,o=t(5043),l=t(7528),d=t(197),c=t(9888),p=t(5559);const{extraBig:m}=p.A,g=(0,d.AH)(a||(a=(0,l.A)(["\n  position: fixed;\n  right: 100px;\n  bottom: 30px;\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  cursor: pointer;\n  box-shadow: 2px 2px 5px #555;\n"]))),u=d.Ay.button(i||(i=(0,l.A)(["\n  font-size: ",";\n  height: 70px;\n  z-index: 100;\n  ","\n\n  ","\n  ","\n"])),m,g,(n=>{let{color:e}=n;return c.S[e]&&(0,d.AH)(r||(r=(0,l.A)(["\n      background: ",";\n      color: ",";\n      border: 1px solid ",";\n    "])),c.S[e][0],c.S[e][1],c.S[e][2])}),(n=>{let{width:e}=n;return(0,d.AH)(s||(s=(0,l.A)(["\n    width: ","px;\n  "])),e)}));var x=t(2963),h=t.n(x),b=t(5394),f=t(3485),y=t(579);const v={content:{top:"calc(50% - 350px)",left:"calc(50% - 280px)",width:"500px",height:"610px",radius:"10px"}},w={display:"flex",float:"left",color:"red",fontSize:"1.5rem"},j={display:"flex",float:"right"},k=n=>{var e;let{children:t,color:a}=n;h().setAppElement("#root"),a=null!==(e=a)&&void 0!==e?e:"primary";const[i,r]=(0,o.useState)(!1),s=(0,o.useCallback)((()=>{r((n=>!n))}),[]);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(u,{type:"button",color:"jmt",onClick:s,children:t}),i&&(0,y.jsxs)(h(),{isOpen:i,style:v,children:[(0,y.jsxs)("div",{children:[(0,y.jsx)("div",{style:w,className:"aiTitle",children:(0,y.jsx)("b",{children:"JeomMeChu AI"})}),(0,y.jsx)("button",{style:j,type:"button",onClick:()=>r(!1),children:(0,y.jsx)(b.FyX,{})})]}),(0,y.jsx)(f.A,{height:"530px",marginTop:"0"})]})]})},A=o.memo(k)},7841:(n,e,t)=>{t.d(e,{Bu:()=>u,Uz:()=>g,ZL:()=>x,xG:()=>m});var a,i,r,s,o,l=t(7528),d=t(197),c=t(9888);const{dark:p}=c.y,m=d.Ay.div(a||(a=(0,l.A)(["\n  max-width: 900px;\n  min-width: 700px;\n  padding: 25px 50px;\n  margin: 50px auto;\n"]))),g=d.Ay.div(i||(i=(0,l.A)(["\n  margin: 0 auto 50px;\n"]))),u=d.Ay.div(r||(r=(0,l.A)(["\n  max-width: 900px;\n  min-width: 700px;\n  box-shadow: 0 0 20px #c9c9c9;\n  padding: 25px 50px;\n  margin: 50px auto;\n  border-radius: 3px;\n"]))),x=d.Ay.div(s||(s=(0,l.A)(["\n  max-width: 900px;\n  min-width: 700px;\n  padding: 50px;\n  margin: 50px auto;\n  border-radius: 20px;\n  box-shadow: 2px 2px 5px ",";\n"])),p);d.Ay.div(o||(o=(0,l.A)(["\n  width: 500px;\n  margin: auto;\n"])))},9605:(n,e,t)=>{t.d(e,{A:()=>u});var a,i,r=t(7528),s=t(5043),o=t(197),l=t(5475),d=t(4975),c=t(50),p=(t(4014),t(3874),t(5084),t(579));const m=o.Ay.div(a||(a=(0,r.A)(["\n  position: relative;\n  width: ",";\n  ","\n  .banner {\n    img {\n      width: 100%;\n      display: block;\n    }\n  }\n"])),(n=>{let{width:e}=n;return e?e+"px":"100%"}),(n=>{let{height:e}=n;return e&&(0,o.AH)(i||(i=(0,r.A)(["\n      height: ","px;\n      overflow-y: hidden;\n\n      * {\n        max-height: ","px;\n      }\n    "])),e,e)})),g=n=>{var e;let{items:t,width:a,height:i,options:r,onChange:s,onSwiper:o,className:g}=n;r=null!==(e=r)&&void 0!==e?e:{};const{spaceBetween:u,slidesPerView:x,loop:h,speed:b,pagination:f,navigation:y,autoplay:v}=r,w={modules:[c.Vx,c.dK,c.Ij],spaceBetween:null!==u&&void 0!==u?u:0,slidesPerView:null!==x&&void 0!==x?x:1,loop:Boolean(h),speed:null!==b&&void 0!==b?b:500};return s&&(w.onSlideChange=s),o&&(w.onSwiper=o),y&&(w.navigation=!0),f&&(w.pagination={clickable:!0}),v&&(w.autoplay={speed:v}),t&&t.length>0&&(0,p.jsx)(m,{width:a,height:i,className:g,children:(0,p.jsx)(d.RC,{...w,children:t.map((n=>{let{image:e,link:t,alt:a}=n;return(0,p.jsx)(d.qr,{className:"banner",children:null!==t&&void 0!==t&&t.trim()?(0,p.jsx)(l.N_,{to:t,children:(0,p.jsx)("img",{src:e,alt:a})}):(0,p.jsx)("img",{src:e,alt:a})},e)}))})})},u=s.memo(g)},6639:(n,e,t)=>{t.r(e),t.d(e,{default:()=>Q});var a=t(5043),i=t(9367),r=t(4117),s=t(7841),o=t(7502),l=t(7196),d=t(7528),c=t(197),p=t(9888),m=t(9605);const g=t.p+"static/media/banner1.74296aa550b2890cbd0a.png",u=t.p+"static/media/banner2.d7e3716ab2316b85a6e2.png";var x,h,b=t(579);const f=c.Ay.div(x||(x=(0,d.A)(["\n  div {\n    margin: 0 auto 50px;\n  }\n\n  img {\n    width: 100%;\n    height: 100%;\n  }\n"]))),y={loop:!0,speed:1e3,pagination:!0,navigation:!0,autoplay:4e3},v=[{image:g,link:"/ai",alt:"\ubc30\ub1081"},{image:u,link:"/ai",alt:"\ubc30\ub1082"}],w=(0,c.Ay)(m.A)(h||(h=(0,d.A)(["\n  .swiper-pagination {\n    bottom: 10px;\n  }\n\n  .swiper-pagination-bullet {\n    width: 12px;\n    height: 12px;\n    background: #000;\n    opacity: 0.3;\n  }\n  .swiper-pagination-bullet-active {\n    background: ",";\n    opacity: 0.8;\n  }\n\n  .swiper-button-prev,\n  .swiper-button-next {\n    top: calc(50% - 60px);\n    color: #ececec;\n    opacity: 0.8;\n  }\n  .swiper-button-prev {\n    left: calc(50% - 900px);\n  }\n\n  .swiper-button-next {\n    right: calc(50% - 900px);\n  }\n"])),p.y.jmt),j=n=>{let{}=n;return(0,b.jsx)(f,{children:(0,b.jsx)(w,{items:v,width:1920,height:540,options:y})})},k=a.memo(j),A=t.p+"static/media/1.833e0354d0a34aa1ce17.png",S=t.p+"static/media/2.9a1572a10205a2149a28.png",N=t.p+"static/media/3.fa4e602ae92e21da0300.png",O=t.p+"static/media/4.aa164905495085d10d6e.png",z=t.p+"static/media/5.cd45581b67a969448459.png",B=t.p+"static/media/6.31fa4c54756767305552.png",P=t.p+"static/media/7.16ee4d759f68aacfb1d6.png",C=t.p+"static/media/8.7f8dd454cb151540968e.png",E=t.p+"static/media/9.4fe4c6fb2e0bd6950fae.png",T=t.p+"static/media/10.e75bbe59e1941767acaf.png",H=t.p+"static/media/11.5f0b4b832df5270056bd.png",U=t.p+"static/media/12.dce399c48e88bc65357d.png",D=t.p+"static/media/13.77593a278a6dc372ac55.png",F=t.p+"static/media/14.baa67223a951dc7bcb44.png",I=t.p+"static/media/15.f00689c44a1749dbe987.png";var _,M;const V=c.Ay.div(_||(_=(0,d.A)(["\n  div {\n    margin: 0 auto 20px;\n  }\n\n  img {\n    width: 100%;\n    height: 100%;\n  }\n"]))),R={loop:!0,speed:500,pagination:!0,navigation:!0,slidesPerView:5,spaceBetween:20},q=[{image:A,link:"/restaurant/list?dbsnsStatmBzcndNm=\ud55c\uc2dd",alt:"\uce74\ud14c\uace0\ub9ac1"},{image:S,link:"/restaurant/list?dbsnsStatmBzcndNm=\uc911\uad6d\uc2dd",alt:"\uce74\ud14c\uace0\ub9ac2"},{image:N,link:"/restaurant/list?dbsnsStatmBzcndNm=\uc77c\uc2dd",alt:"\uce74\ud14c\uace0\ub9ac3"},{image:O,link:"/restaurant/list?dbsnsStatmBzcndNm=\ubd84\uc2dd",alt:"\uce74\ud14c\uace0\ub9ac4"},{image:z,link:"/restaurant/list?dbsnsStatmBzcndNm=\uacbd\uc591\uc2dd",alt:"\uce74\ud14c\uace0\ub9ac5"},{image:B,link:"/restaurant/list?dbsnsStatmBzcndNm=\ud328\ubc00\ub9ac\ub808\uc2a4\ud1a0\ub791",alt:"\uce74\ud14c\uace0\ub9ac6"},{image:P,link:"/restaurant/list?dbsnsStatmBzcndNm=\ud328\uc2a4\ud2b8\ud478\ub4dc",alt:"\uce74\ud14c\uace0\ub9ac7"},{image:C,link:"/restaurant/list?dbsnsStatmBzcndNm=\ud638\ud504/\ud1b5\ub2ed",alt:"\uce74\ud14c\uace0\ub9ac8"},{image:E,link:"/restaurant/list?dbsnsStatmBzcndNm=\uc2dd\uc721(\uc22f\ubd88\uad6c\uc774)",alt:"\uce74\ud14c\uace0\ub9ac9"},{image:T,link:"/restaurant/list?dbsnsStatmBzcndNm=\ud68c\uc9d1",alt:"\uce74\ud14c\uace0\ub9ac10"},{image:H,link:"/restaurant/list?dbsnsStatmBzcndNm=\ud0d5\ub958(\ubcf4\uc2e0\uc6a9)",alt:"\uce74\ud14c\uace0\ub9ac11"},{image:U,link:"/restaurant/list?dbsnsStatmBzcndNm=\ub0c9\uba74\uc9d1",alt:"\uce74\ud14c\uace0\ub9ac12"},{image:D,link:"/restaurant/list?dbsnsStatmBzcndNm=\uc678\uad6d\uc74c\uc2dd\uc804\ubb38\uc810(\uc778\ub3c4,\ud0dc\uad6d\ub4f1)",alt:"\uce74\ud14c\uace0\ub9ac13"},{image:F,link:"/restaurant/list?dbsnsStatmBzcndNm=\ucee4\ud53c\uc20d",alt:"\uce74\ud14c\uace0\ub9ac14"},{image:I,link:"/restaurant/list?dbsnsStatmBzcndNm=\uc81c\uacfc\uc810\uc601\uc5c5",alt:"\uce74\ud14c\uace0\ub9ac15"}],L=(0,c.Ay)(m.A)(M||(M=(0,d.A)(["\n  .swiper-pagination {\n    bottom: 10px;\n  }\n\n  .swiper-pagination-bullet {\n    width: 12px;\n    height: 12px;\n    background: #000;\n    opacity: 0.3;\n  }\n  .swiper-pagination-bullet-active {\n    background: ",";\n    opacity: 0.8;\n  }\n\n  .swiper-button-prev,\n  .swiper-button-next {\n    top: calc(50% - 80px);\n    color: #ececec;\n    opacity: 0.8;\n  }\n"])),p.y.jmt),G=n=>{let{}=n;return(0,b.jsx)(V,{children:(0,b.jsx)(L,{items:q,width:1400,height:370,options:R})})},J=a.memo(G);var K;const W=c.Ay.div(K||(K=(0,d.A)(['\n  width: 1400px;\n  margin: 0 auto 20px;\n  \n  div{\n    font-size: 2.25rem;\n    font-family: "NanumSquareEB";\n  }\n']))),X=()=>(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(k,{}),(0,b.jsx)(W,{children:(0,b.jsx)("div",{children:"\uc5b4\ub5a4 \uba54\ub274 \ucc3e\uace0 \uacc4\uc138\uc694?"})}),(0,b.jsx)(J,{})]}),Y=a.memo(X),Z=()=>{const{t:n}=(0,r.Bd)();return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(i.mg,{children:(0,b.jsx)("title",{children:n("\uc810\uba54\ucd94")})}),(0,b.jsxs)(s.Uz,{children:[(0,b.jsx)(Y,{}),(0,b.jsx)(o.A,{children:(0,b.jsx)(l.mYn,{style:{width:"50px",height:"50px"}})})]})]})},Q=a.memo(Z)},9888:(n,e,t)=>{t.d(e,{S:()=>i,y:()=>a});const a={primary:"#007bff",secondary:"#6c757d",success:"#28a745",danger:"#dc3545",warning:"#ffc107",info:"#17a2b8",light:"#f8f9fa",dark:"#515151",black:"#000",jmt:"#ff3d00",shadow:"#c9c9c9"},i={primary:[a.primary,"#fff",a.primary],secondary:[a.secondary,"#fff",a.secondary],success:[a.success,"#fff",a.success],danger:[a.danger,"#fff",a.danger],warning:[a.warning,"#212529","#212529"],info:[a.info,"#fff",a.info],light:[a.light,"#212529","#212529"],dark:[a.dark,"#fff",a.dark],jmt:[a.jmt,"#fff",a.jmt]}},5559:(n,e,t)=>{t.d(e,{A:()=>a});const a={small:"0.75rem",normal:"1rem",medium:"1.25rem",big:"1.5rem",extraBig:"2rem"}},3441:(n,e,t)=>{t.d(e,{k5:()=>g});var a=t(5043),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},r=a.createContext&&a.createContext(i),s=["attr","size","title"];function o(n,e){if(null==n)return{};var t,a,i=function(n,e){if(null==n)return{};var t,a,i={},r=Object.keys(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function l(){return l=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a])}return n},l.apply(this,arguments)}function d(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function c(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?d(Object(t),!0).forEach((function(e){p(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function p(n,e,t){return(e=function(n){var e=function(n,e){if("object"!==typeof n||null===n)return n;var t=n[Symbol.toPrimitive];if(void 0!==t){var a=t.call(n,e||"default");if("object"!==typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(n)}(n,"string");return"symbol"===typeof e?e:String(e)}(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function m(n){return n&&n.map(((n,e)=>a.createElement(n.tag,c({key:e},n.attr),m(n.child))))}function g(n){return e=>a.createElement(u,l({attr:c({},n.attr)},e),m(n.child))}function u(n){var e=e=>{var t,{attr:i,size:r,title:d}=n,p=o(n,s),m=r||e.size||"1em";return e.className&&(t=e.className),n.className&&(t=(t?t+" ":"")+n.className),a.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,i,p,{className:t,style:c(c({color:n.color||e.color},e.style),n.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),d&&a.createElement("title",null,d),n.children)};return void 0!==r?a.createElement(r.Consumer,null,(n=>e(n))):e(i)}}}]);
//# sourceMappingURL=6253.4a870fff.chunk.js.map