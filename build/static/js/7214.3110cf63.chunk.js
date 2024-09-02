"use strict";(self.webpackChunkreact_project=self.webpackChunkreact_project||[]).push([[7214],{3485:(n,e,t)=>{t.d(e,{A:()=>m});var r,i=t(7528),o=t(5043),s=t(197),a=t(9888),d=t(8147),l=t(579);const c=s.Ay.div(r||(r=(0,i.A)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: ",";\n  width: 100%;\n  background: white;\n  .clear {\n    clear: both;\n  }\n  .chat-box {\n    width: 100%;\n    height: 100%;\n    margin-top: ",";\n    background: white;\n    border-radius: 8px;\n\n    overflow: hidden;\n    display: flex;\n    flex-direction: column;\n  }\n\n  .messages-list {\n    padding: 15px;\n    flex-grow: 1;\n    overflow-y: auto;\n    width: 100%;\n      &::-webkit-scrollbar {\n      width: 2px;\n    }\n    &::-webkit-scrollbar-thumb {\n      border-radius: 2px;\n      background: ",";\n    }\n  }\n\n  .user-message,\n  .ai-message {\n    margin-bottom: 20px;\n    max-width: 90%;\n  }\n\n  .user-message {\n    float: right;\n    align-self: flex-end;\n    background: ",";\n    color: ",";\n    padding: 10px 15px;\n    border-radius: 16px 16px 0 16px;\n  }\n  .ai-message {\n    float: left;\n    align-self: flex-start;\n    background: #f0f0f0;\n    color: ",";\n    padding: 10px 15px;\n    border-radius: 16px 16px 16px 0;\n  }\n\n  .message-form {\n    border-top: 1px solid ",";\n    padding: 20px;\n    display: flex;\n    align-items: center;\n  }\n\n  .message-input {\n    flex-grow: 1;\n    padding: 10px;\n    border-radius: 16px;\n    border: 1px solid ",";\n    margin-right: 10px;\n  }\n\n  .send-button {\n    padding: 10px 20px;\n    border-radius: 16px;\n    border: none;\n    background-color: ",";\n    color: ",";\n    cursor: pointer;\n  }\n\n  h1 {\n    text-align: center;\n    background-color: ",";\n    padding: 20px;\n    margin: 0;\n  }\n  a {\n    color: ",";\n  }\n"])),(n=>{let{height:e}=n;return null!==e&&void 0!==e?e:"530px"}),(n=>{let{marginTop:e}=n;return null!==e&&void 0!==e?e:"15px"}),a.y.secondary,a.y.jmt,a.y.light,a.y.dark,a.y.light,a.y.dark,a.y.jmt,a.y.light,a.y.light,a.y.primary),x=n=>{let{height:e,marginTop:t}=n;const[r,i]=(0,o.useState)([]);return(0,l.jsx)(c,{height:e,marginTop:t,children:(0,l.jsxs)("div",{className:"chat-box",children:[(0,l.jsx)(p,{messages:r}),(0,l.jsx)(h,{onSendMessage:n=>{var e;(e=n,(0,d.A)("/ai?message=".concat(e))).then((e=>{i((t=>[...t,{text:n,isUser:!0},{text:e,isUser:!1}]))}))}})]})})},p=n=>{let{messages:e}=n;const t=(0,o.useRef)();return(0,o.useEffect)((()=>{t.current.scrollTop=t.current.scrollHeight}),[e]),(0,l.jsx)("div",{className:"messages-list",ref:t,children:e.map(((n,e)=>(0,l.jsx)(g,{...n},e)))})},g=n=>{let{text:e,isUser:t}=n;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:t?"user-message":"ai-message",children:(0,l.jsxs)("p",{children:[(0,l.jsx)("b",{children:t?"User":"AI"}),":"," ",(0,l.jsx)("span",{dangerouslySetInnerHTML:{__html:e}})]})}),(0,l.jsx)("div",{className:"clear"})]})},h=n=>{let{onSendMessage:e}=n;const[t,r]=(0,o.useState)(""),i=(0,o.useRef)();return(0,l.jsxs)("form",{onSubmit:n=>{n.preventDefault(),e(t),r(""),i.current.focus()},className:"message-form",children:[(0,l.jsx)("input",{type:"text",value:t,onChange:n=>r(n.target.value),className:"message-input",ref:i}),(0,l.jsx)("button",{type:"submit",className:"send-button",children:"\ubb3c\uc5b4\ubcf4\uae30"})]})},m=o.memo(x)},7502:(n,e,t)=>{t.d(e,{A:()=>k});var r,i,o,s,a=t(5043),d=t(7528),l=t(197),c=t(9888),x=t(5559);const{extraBig:p}=x.A,g=(0,l.AH)(r||(r=(0,d.A)(["\n  position: fixed;\n  right: 100px;\n  bottom: 30px;\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  cursor: pointer;\n  box-shadow: 2px 2px 5px #555;\n"]))),h=l.Ay.button(i||(i=(0,d.A)(["\n  font-size: ",";\n  height: 70px;\n  z-index: 100;\n  ","\n\n  ","\n  ","\n"])),p,g,(n=>{let{color:e}=n;return c.S[e]&&(0,l.AH)(o||(o=(0,d.A)(["\n      background: ",";\n      color: ",";\n      border: 1px solid ",";\n    "])),c.S[e][0],c.S[e][1],c.S[e][2])}),(n=>{let{width:e}=n;return(0,l.AH)(s||(s=(0,d.A)(["\n    width: ","px;\n  "])),e)}));var m=t(2963),u=t.n(m),f=t(5394),b=t(3485),A=t(579);const j={content:{top:"calc(50% - 350px)",left:"calc(50% - 280px)",width:"500px",height:"610px",radius:"10px"}},v={display:"flex",float:"left",color:"red",fontSize:"1.5rem"},y={display:"flex",float:"right"},w=n=>{var e;let{children:t,color:r}=n;u().setAppElement("#root"),r=null!==(e=r)&&void 0!==e?e:"primary";const[i,o]=(0,a.useState)(!1),s=(0,a.useCallback)((()=>{o((n=>!n))}),[]);return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(h,{type:"button",color:"jmt",onClick:s,children:t}),i&&(0,A.jsxs)(u(),{isOpen:i,style:j,children:[(0,A.jsxs)("div",{children:[(0,A.jsx)("div",{style:v,className:"aiTitle",children:(0,A.jsx)("b",{children:"JeomMeChu AI"})}),(0,A.jsx)("button",{style:y,type:"button",onClick:()=>o(!1),children:(0,A.jsx)(f.FyX,{})})]}),(0,A.jsx)(b.A,{height:"530px",marginTop:"0"})]})]})},k=a.memo(w)},5127:(n,e,t)=>{t.d(e,{Vu:()=>z,e2:()=>H,oq:()=>_,vd:()=>T,wl:()=>S,xk:()=>C});var r,i,o,s,a,d,l,c,x,p,g,h,m,u,f=t(7528),b=t(197),A=t(9888),j=t(5559);const{big:v,medium:y,normal:w}=j.A,{jmt:k}=A.y,N=(0,b.AH)(r||(r=(0,f.A)(["\n  width: 100%;\n  border-radius: 3px;\n  cursor: pointer;\n"]))),S=b.Ay.button(i||(i=(0,f.A)(["\n  font-size: ",";\n  height: 30px;\n  ","\n\n  ","\n  ","\n"])),w,N,(n=>{let{color:e}=n;return A.S[e]&&(0,b.AH)(o||(o=(0,f.A)(["\n      background: ",";\n      color: ",";\n      border: 1px solid ",";\n    "])),A.S[e][0],A.S[e][1],A.S[e][2])}),(n=>{let{width:e}=n;return(0,b.AH)(s||(s=(0,f.A)(["\n    width: ","px;\n  "])),e)})),C=b.Ay.button(a||(a=(0,f.A)(["\n  font-size: ",";\n  height: 40px;\n  ","\n\n  ","\n"])),y,N,(n=>{let{color:e}=n;return A.S[e]&&(0,b.AH)(d||(d=(0,f.A)(["\n      background: ",";\n      color: ",";\n      border: 1px solid ",";\n    "])),A.S[e][0],A.S[e][1],A.S[e][2])})),z=b.Ay.button(l||(l=(0,f.A)(["\n  font-size: ",";\n  height: 45px;\n  ","\n\n  ","\n"])),v,N,(n=>{let{color:e}=n;return A.S[e]&&(0,b.AH)(c||(c=(0,f.A)(["\n      background: ",";\n      color: ",";\n      border: 1px solid ",";\n    "])),A.S[e][0],A.S[e][1],A.S[e][2])})),T=b.Ay.button(x||(x=(0,f.A)(["\n  font-size: ",";\n  height: 40px;\n  ","\n\n  border-radius: 3px;\n  cursor: pointer;\n\n    ","\n  ","\n"])),y,N,(n=>{let{color:e}=n;return A.S[e]&&(0,b.AH)(p||(p=(0,f.A)(["\n      background: ",";\n      color: ",";\n      border: 1px solid ",";\n    "])),A.S[e][0],A.S[e][1],A.S[e][2])}),(n=>{let{width:e}=n;return(0,b.AH)(g||(g=(0,f.A)(["\n    width: ","px;\n  "])),e)})),H=b.Ay.div(h||(h=(0,f.A)(["\n  display: flex;\n  width: ",";\n  margin: 20px auto;\n\n  button {\n    width: 0;\n    flex-grow: 1;\n  }\n\n  button + button {\n    margin-left: 5px;\n  }\n"])),(n=>{let{width:e}=n;return e?"".concat(e,"px"):"100%"})),_=(b.Ay.button(m||(m=(0,f.A)(["\n\n"]))),b.Ay.button(u||(u=(0,f.A)(["\n  font-size: ",";\n  width: 120px;\n  height: 40px;\n  background-color:","; \n  color: white;\n  border-color: white;\n  margin: 0 auto;\n  border-radius: 3px;\n  display: block;\n\n"])),y,k))},7114:(n,e,t)=>{t.d(e,{q:()=>o});var r,i=t(7528);t(5043);const o=t(197).Ay.div(r||(r=(0,i.A)(["\n  background: url('","') no-repeat center center;\n  background-size: cover; //\uc0ac\uc774\uc988 \ubc15\uc2a4\uc5d0 \uace0\uc815\n  width: ","; //\ub113\uc774 200px \uace0\uc815\n  height: ",";\n"])),(n=>{let{url:e}=n;return e}),(n=>{let{width:e}=n;return null!==e&&void 0!==e?e:"200px"}),(n=>{let{height:e}=n;return null!==e&&void 0!==e?e:"200px"}))},7841:(n,e,t)=>{t.d(e,{Bu:()=>h,Uz:()=>g,ZL:()=>m,xG:()=>p});var r,i,o,s,a,d=t(7528),l=t(197),c=t(9888);const{dark:x}=c.y,p=l.Ay.div(r||(r=(0,d.A)(["\n  max-width: 900px;\n  min-width: 700px;\n  padding: 25px 50px;\n  margin: 50px auto;\n"]))),g=l.Ay.div(i||(i=(0,d.A)(["\n  margin: 0 auto 50px;\n"]))),h=l.Ay.div(o||(o=(0,d.A)(["\n  max-width: 900px;\n  min-width: 700px;\n  box-shadow: 0 0 20px #c9c9c9;\n  padding: 25px 50px;\n  margin: 50px auto;\n  border-radius: 3px;\n"]))),m=l.Ay.div(s||(s=(0,d.A)(["\n  max-width: 900px;\n  min-width: 700px;\n  padding: 50px;\n  margin: 50px auto;\n  border-radius: 20px;\n  box-shadow: 2px 2px 5px ",";\n"])),x);l.Ay.div(a||(a=(0,d.A)(["\n  width: 500px;\n  margin: auto;\n"])))},982:(n,e,t)=>{t.d(e,{A:()=>x});var r=t(7528),i=t(5043);const o=t.p+"static/media/loading.4bce908dde1a6ad3c019.webp";var s,a=t(197),d=t(579);const l=a.Ay.div(s||(s=(0,r.A)(["\n  position: fixed;\n  top: calc(50% - 75px);\n  left: calc(50% - 75px);\n  width: 150px;\n  height: 150px;\n  z-index: 100;\n\n  img {\n    width: 100%;\n    height: 100%;\n    display: block;\n  }\n"]))),c=()=>(0,d.jsx)(l,{children:(0,d.jsx)("img",{src:o,alt:"loading"})}),x=i.memo(c)},1884:(n,e,t)=>{t.d(e,{A:()=>g});var r,i=t(7528),o=t(5043),s=t(197),a=t(8139),d=t.n(a),l=t(6720),c=t(579);const x=s.Ay.div(r||(r=(0,i.A)(["\n  display: flex;\n  max-width: 450px;\n  min-width: 100px;\n  margin: 20px auto;\n  align-items: center;\n  justify-content: center;\n\n  .page {\n    min-width: 35px;\n    max-width: 45px;\n    padding: 0 5px;\n    height: 35px;\n    line-height: 33px;\n    text-align: center;\n    font-size: 1.15rem;\n    border: 1px solid #000;\n    border-radius: 3px;\n    cursor: pointer;\n  }\n  .page + .page {\n    margin-left: 3px;\n  }\n\n  .page.on {\n    background: #000;\n    color: #fff;\n  }\n"]))),p=n=>{let{pagination:e,onClick:t}=n;const{page:r,pages:i,prevRangePage:o,nextRangePage:s,totalPages:a}=e;return i.length>0&&(0,c.jsxs)(x,{children:[o>0&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(l.V2s,{onClick:()=>t(1),className:"page"}),(0,c.jsx)(l.Wup,{onClick:()=>t(Number(o)),className:"page"})]}),i.map((n=>(0,c.jsx)("div",{onClick:()=>t(Number(n[0])),className:"page"+d()({" on":Number(n[0])===r}),children:n[0]},"page"+n[0]))),s>0&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(l.mny,{onClick:()=>t(Number(s)),className:"page"}),(0,c.jsx)(l.$uC,{onClick:()=>t(Number(a)),className:"page"})]})]})},g=o.memo(p)},2915:(n,e,t)=>{t.d(e,{O:()=>d});var r,i=t(7528),o=t(197),s=t(5559);const{extraBig:a}=s.A,d=o.Ay.h1(r||(r=(0,i.A)(["\n  font-size: ",";\n  font-weight: bold;\n  padding: 0 15px 15px;\n  margin: 0 0 20px;\n  line-height: 1;\n  text-align: center;\n"])),a)},4480:(n,e,t)=>{t.d(e,{A:()=>i});var r=t(7390);function i(n,e,t){return new Promise(((i,o)=>{(async()=>{try{const s=await(0,r.A)(n,e,t);if(s.status>=200&&s.status<400)return void i(s.data.data);o(s.data)}catch(s){o(s)}})()}))}},2987:(n,e,t)=>{t.d(e,{A:()=>c});var r=t(5043),i=t(5475),o=t(7779),s=t(9136),a=t(579);const d=(0,s.Ay)((()=>Promise.all([t.e(5200),t.e(8734)]).then(t.bind(t,8669)))),l=n=>{let{children:e}=n;const{states:{isLogin:t}}=(0,r.useContext)(o.Ay),[s]=(0,i.ok)();return t||s.get("redirectUrl")||s.append("redirectUrl",window.location.href),t?e:(0,a.jsx)(d,{})},c=r.memo(l)},6201:(n,e,t)=>{t.d(e,{A:()=>i});var r=t(4480);function i(n){return(0,r.A)("/reservation/cancel/".concat(n))}},5519:(n,e,t)=>{t.d(e,{V:()=>o,l:()=>i});var r=t(8147);const i=n=>{var e;n=null!==(e=n)&&void 0!==e?e:{};const t=[];for(const[r,o]of Object.entries(n))t.push("".concat(r,"=").concat(o));let i="/reservation/list";return t.length>0&&(i+="?".concat(t.join("&"))),(0,r.A)(i)},o=n=>(0,r.A)("/reservation/info/".concat(n))},1228:(n,e,t)=>{t.r(e),t.d(e,{default:()=>E});var r,i,o,s,a,d,l,c,x=t(5043),p=t(9367),g=t(7841),h=t(4117),m=t(2915),u=t(5475),f=t(3216),b=t(5519),A=t(6201),j=t(7528),v=t(197),y=t(184),w=t(7114),k=(t(5127),t(579));const N=v.Ay.h2(r||(r=(0,j.A)(["\n  display: flex;\n  align-items: center;\n\n  svg {\n    margin-right: 7px;\n    font-size: 1.2rem;\n  }\n\n  h2 {\n    margin: 0;\n    font-size: 1.1rem;\n    font-weight: bold;\n  }\n"]))),S=v.Ay.div(i||(i=(0,j.A)(["\n  font-weight: bold;\n  font-size: 1.7em;\n"]))),C=v.Ay.div(o||(o=(0,j.A)(["\n  font-weight: bold;\n  font-size: 1em;\n  color: #666;\n"]))),z=v.Ay.div(s||(s=(0,j.A)(["\n  font-weight: bold;\n  font-size: 1.2em;\n  color: #ff3d00;\n  margin-top: 10px;\n\n  .rDateTime,\n  .persons {\n    display: inline-block;\n    margin-right: 6px;\n  }\n"]))),T=v.Ay.div(a||(a=(0,j.A)(["\n  font-weight: bold;\n  font-size: 1em;\n  margin-bottom: 20px;\n"]))),H=v.Ay.div(d||(d=(0,j.A)(["\n  display: flex;\n  align-items: center;\n  margin-top: 10px;\n  font-weight: bold;\n\n  .status {\n    font-size: 1.1em;\n    color: #555;\n    margin-right: 10px;\n  }\n\n  button {\n    padding: 6px 12px;\n    color: #ff3d00;\n    border-color: #ff3d00;\n    font-weight: bold;\n    border-radius: 5px;\n    cursor: pointer;\n    font-size: 1rem;\n\n    &:hover {\n      background-color: #ff3d00;\n      color: white;\n    }\n  }\n"]))),_=v.Ay.button(l||(l=(0,j.A)(["\n  margin-top: 15px;\n  padding: 8px 12px;\n  background-color: #ff3d00;\n  color: white;\n  border: none;\n  font-weight: bold;\n  border-radius: 5px;\n  cursor: pointer;\n  font-size: 1.1rem;\n  text-align: center;\n  width: 100%;\n  height: 37px;\n\n  &:hover {\n    background-color: #d03e12;\n  }\n"]))),F=(0,v.Ay)((n=>{let{item:e,className:t,onCancel:r}=n;const i="/reservation/info/".concat(null===e||void 0===e?void 0:e.orderNo),{t:o}=(0,h.Bd)(),{restaurant:{images:s,rstrNm:a}}=e,{formattedDate:d,formattedTime:l}=(n=>{const e=new Date(n),t=e.getFullYear(),r=e.getMonth()+1,i=e.getDate(),o=e.getHours(),s=e.getMinutes();return{formattedDate:"".concat(t,"\ub144 ").concat(r,"\uc6d4 ").concat(i,"\uc77c"),formattedTime:"".concat(o,"\uc2dc ").concat(s.toString().padStart(2,"0"),"\ubd84")}})(null===e||void 0===e?void 0:e.rDateTime);return(0,k.jsxs)("li",{className:t,children:[(0,k.jsxs)("div",{className:"item-inner",children:[s&&s.length>0&&(0,k.jsx)(w.q,{className:"photo",url:s[0].rstrImgUrl,alt:a,width:"150px",height:"150px"}),(0,k.jsxs)("div",{className:"item-content",children:[(0,k.jsx)(T,{children:(0,k.jsx)("div",{className:"orderNo",children:(0,k.jsxs)(N,{children:[(0,k.jsx)(y.mCR,{}),(0,k.jsxs)("h2",{children:[null===e||void 0===e?void 0:e.orderNo,"\ubc88"]})]})})}),(0,k.jsx)(S,{children:(0,k.jsx)("div",{className:"rname",children:null===e||void 0===e?void 0:e.rname})}),(0,k.jsx)(C,{children:(0,k.jsx)("div",{className:"raddress",children:null===e||void 0===e?void 0:e.raddress})}),(0,k.jsxs)(z,{children:[(0,k.jsxs)("div",{className:"rDateTime",children:[d," ",l]}),(0,k.jsxs)("div",{className:"persons",children:[null===e||void 0===e?void 0:e.persons,"\uba85"]})]}),(0,k.jsxs)(H,{children:[(0,k.jsx)("div",{className:"status",children:null===e||void 0===e?void 0:e.statusStr}),e&&["START","APPLY","CONFIRM"].includes(e.status)&&(0,k.jsx)("button",{type:"button",onClick:()=>r(e.orderNo),children:o("\uc608\uc57d_\ucde8\uc18c")})]})]})]}),(0,k.jsx)(u.N_,{to:i,children:(0,k.jsx)(_,{children:o("\uc608\uc57d_\uc815\ubcf4_\ud655\uc778")})})]})}))(c||(c=(0,j.A)(["\n  padding: 20px;\n  margin-bottom: 15px;\n  box-shadow: 2px 2px 5px #818181;\n  border-radius: 5px;\n\n  .item-inner {\n    display: flex;\n    align-items: center;\n  }\n\n  .photo {\n    margin-right: 20px;\n    flex-shrink: 0;\n  }\n\n  .item-content {\n    width: 100%;\n    word-break: break-all;\n  }\n\n  a {\n    text-decoration: none;\n    color: inherit;\n  }\n"]))),D=n=>{let{items:e,onCancel:t}=n;return(0,k.jsx)("ul",{children:e&&e.length>0?e.map(((n,e)=>(0,k.jsx)(F,{item:n,onCancel:t},e))):(0,k.jsx)("li",{children:"\ud56d\ubaa9\uc774\uc5c6\uc2b5\ub2c8\ub2e4."})})},U=x.memo(D);var B=t(1884),M=t(982);const P=()=>{const[n]=(0,u.ok)(),[e,t]=(0,x.useState)((()=>function(n){const e={};if(n.size>0)for(const[t,r]of n)e[t]=r;return e}(n))),[r,i]=(0,x.useState)([]),[o,s]=(0,x.useState)({}),[a,d]=(0,x.useState)(!1),{orderNo:l}=(0,f.g)(),{t:c}=(0,h.Bd)();(0,x.useEffect)((()=>{(async()=>{try{d(!0);const{items:n,pagination:t}=await(0,b.l)(e);i(n),s(t),d(!1)}catch(n){console.error(n)}})()}),[e,l]);const p=(0,x.useCallback)((n=>{t((e=>({...e,page:n})))}),[]),g=(0,x.useCallback)((n=>{window.confirm(c("\uc815\ub9d0_\ucde8\uc18c\ud558\uaca0\uc2b5\ub2c8\uae4c"))&&(async()=>{try{const e=await(0,A.A)(n);i((t=>t.map((t=>t.orderNo===n?e:t))))}catch(e){console.error(e)}})()}),[c]);return a?(0,k.jsx)(M.A,{}):(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(U,{items:r,onCancel:g}),r.length>0&&(0,k.jsx)(B.A,{onClick:p,pagination:o})]})},R=x.memo(P);var I=t(7502),O=t(7196),L=t(2987);const q=()=>{const{t:n}=(0,h.Bd)();return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(p.mg,{children:(0,k.jsx)("title",{children:n("\ub098\uc758_\uc608\uc57d_\ub0b4\uc5ed")})}),(0,k.jsx)(L.A,{children:(0,k.jsxs)(g.xG,{children:[(0,k.jsx)(m.O,{children:n("\ub098\uc758_\uc608\uc57d_\ub0b4\uc5ed")}),(0,k.jsx)(R,{}),(0,k.jsx)(I.A,{children:(0,k.jsx)(O.mYn,{style:{width:"50px",height:"50px"}})})]})})]})},E=x.memo(q)},9888:(n,e,t)=>{t.d(e,{S:()=>i,y:()=>r});const r={primary:"#007bff",secondary:"#6c757d",success:"#28a745",danger:"#dc3545",warning:"#ffc107",info:"#17a2b8",light:"#f8f9fa",dark:"#515151",black:"#000",jmt:"#ff3d00",shadow:"#c9c9c9"},i={primary:[r.primary,"#fff",r.primary],secondary:[r.secondary,"#fff",r.secondary],success:[r.success,"#fff",r.success],danger:[r.danger,"#fff",r.danger],warning:[r.warning,"#212529","#212529"],info:[r.info,"#fff",r.info],light:[r.light,"#212529","#212529"],dark:[r.dark,"#fff",r.dark],jmt:[r.jmt,"#fff",r.jmt]}},5559:(n,e,t)=>{t.d(e,{A:()=>r});const r={small:"0.75rem",normal:"1rem",medium:"1.25rem",big:"1.5rem",extraBig:"2rem"}}}]);
//# sourceMappingURL=7214.3110cf63.chunk.js.map