"use strict";(self.webpackChunkreact_project=self.webpackChunkreact_project||[]).push([[9298],{5127:(e,n,t)=>{t.d(n,{Vu:()=>_,e2:()=>N,oq:()=>E,vd:()=>P,wl:()=>O,xk:()=>S});var r,o,a,i,s,l,d,c,u,m,p,h,g,f,x=t(7528),b=t(197),y=t(9888),w=t(5559);const{big:v,medium:A,normal:j}=w.A,{jmt:C}=y.y,k=(0,b.AH)(r||(r=(0,x.A)(["\n  width: 100%;\n  border-radius: 3px;\n  cursor: pointer;\n"]))),O=b.Ay.button(o||(o=(0,x.A)(["\n  font-size: ",";\n  height: 30px;\n  ","\n\n  ","\n  ","\n"])),j,k,(e=>{let{color:n}=e;return y.S[n]&&(0,b.AH)(a||(a=(0,x.A)(["\n      background: ",";\n      color: ",";\n      border: 1px solid ",";\n    "])),y.S[n][0],y.S[n][1],y.S[n][2])}),(e=>{let{width:n}=e;return(0,b.AH)(i||(i=(0,x.A)(["\n    width: ","px;\n  "])),n)})),S=b.Ay.button(s||(s=(0,x.A)(["\n  font-size: ",";\n  height: 40px;\n  ","\n\n  ","\n"])),A,k,(e=>{let{color:n}=e;return y.S[n]&&(0,b.AH)(l||(l=(0,x.A)(["\n      background: ",";\n      color: ",";\n      border: 1px solid ",";\n    "])),y.S[n][0],y.S[n][1],y.S[n][2])})),_=b.Ay.button(d||(d=(0,x.A)(["\n  font-size: ",";\n  height: 45px;\n  ","\n\n  ","\n"])),v,k,(e=>{let{color:n}=e;return y.S[n]&&(0,b.AH)(c||(c=(0,x.A)(["\n      background: ",";\n      color: ",";\n      border: 1px solid ",";\n    "])),y.S[n][0],y.S[n][1],y.S[n][2])})),P=b.Ay.button(u||(u=(0,x.A)(["\n  font-size: ",";\n  height: 40px;\n  ","\n\n  border-radius: 3px;\n  cursor: pointer;\n\n    ","\n  ","\n"])),A,k,(e=>{let{color:n}=e;return y.S[n]&&(0,b.AH)(m||(m=(0,x.A)(["\n      background: ",";\n      color: ",";\n      border: 1px solid ",";\n    "])),y.S[n][0],y.S[n][1],y.S[n][2])}),(e=>{let{width:n}=e;return(0,b.AH)(p||(p=(0,x.A)(["\n    width: ","px;\n  "])),n)})),N=b.Ay.div(h||(h=(0,x.A)(["\n  display: flex;\n  width: ",";\n  margin: 20px auto;\n\n  button {\n    width: 0;\n    flex-grow: 1;\n  }\n\n  button + button {\n    margin-left: 5px;\n  }\n"])),(e=>{let{width:n}=e;return n?"".concat(n,"px"):"100%"})),E=(b.Ay.button(g||(g=(0,x.A)(["\n\n"]))),b.Ay.button(f||(f=(0,x.A)(["\n  font-size: ",";\n  width: 120px;\n  height: 40px;\n  background-color:","; \n  color: white;\n  border-color: white;\n  margin: 0 auto;\n  border-radius: 3px;\n  display: block;\n\n"])),A,C))},947:(e,n,t)=>{t.d(n,{A:()=>c});var r=t(5043),o=t(7390),a=t(5127),i=t(8444),s=t(4117),l=t(579);const d=e=>{let{children:n,gid:t,location:d,color:c,imageOnly:u,single:m,done:p,callback:h,width:g,imageUrl:f}=e;const[x,b]=(0,r.useState)(""),{t:y}=(0,s.Bd)(),w=(0,r.useCallback)((()=>{const e=document.createElement("input");e.type="file",e.multiple=!Boolean(m),e.click();const n=e=>{const n=e.target.files;try{if(0===n.length)throw new Error(y("\ud30c\uc77c\uc744_\uc120\ud0dd\ud558\uc138\uc694."));if(u)for(const t of n)if(!t.type.includes("image/"))throw new Error(y("\uc774\ubbf8\uc9c0_\ud615\uc2dd\uc758_\ud30c\uc77c\ub9cc_\uc5c5\ub85c\ub4dc\ud558\uc138\uc694."));if(null===t||void 0===t||!t.trim())throw new Error(y("\ud544\uc218\ud56d\ubaa9(gid)_\ub204\ub77d"));const e=new FormData;e.append("gid",t.trim()),d&&e.append("location",d);for(const t of n)e.append("file",t);m&&e.append("single",Boolean(m)),u&&e.append("imageOnly",Boolean(u)),p&&e.append("done",Boolean(p)),(async()=>{try{const n=await(0,o.A)("/file/upload","POST",e);if(201===n.status&&n.data.success)return void("function"===typeof h&&h(n.data.data));n.data.message&&b(n.data.message)}catch(n){b(n.message),console.error(n)}})()}catch(r){b(r.message)}};e.removeEventListener("change",n),e.addEventListener("change",n)}),[m,t,d,u,y,h,p]);return(0,l.jsxs)(l.Fragment,{children:[f?(0,l.jsx)("img",{src:f,width:g,alt:"profile",onClick:w}):(0,l.jsx)(a.wl,{width:g,type:"button",color:c,onClick:w,children:n}),x&&(0,l.jsx)(i.A,{color:"danger",children:x})]})},c=r.memo(d)},2809:(e,n,t)=>{t.d(n,{A:()=>s});var r,o=t(7528),a=t(5043);const i=t(197).Ay.input(r||(r=(0,o.A)(["\n  border: 1px solid #d5d5d5;\n  height: 40px;\n  width: 100%;\n  padding: 0 10px;\n  border-radius: 3px;\n"]))),s=a.memo(i)},7841:(e,n,t)=>{t.d(n,{Bu:()=>h,Uz:()=>p,ZL:()=>g,xG:()=>m});var r,o,a,i,s,l=t(7528),d=t(197),c=t(9888);const{dark:u}=c.y,m=d.Ay.div(r||(r=(0,l.A)(["\n  max-width: 900px;\n  min-width: 700px;\n  padding: 25px 50px;\n  margin: 50px auto;\n"]))),p=d.Ay.div(o||(o=(0,l.A)(["\n  margin: 0 auto 50px;\n"]))),h=d.Ay.div(a||(a=(0,l.A)(["\n  max-width: 900px;\n  min-width: 700px;\n  box-shadow: 0 0 20px #c9c9c9;\n  padding: 25px 50px;\n  margin: 50px auto;\n  border-radius: 3px;\n"]))),g=d.Ay.div(i||(i=(0,l.A)(["\n  max-width: 900px;\n  min-width: 700px;\n  padding: 50px;\n  margin: 50px auto;\n  border-radius: 20px;\n  box-shadow: 2px 2px 5px ",";\n"])),u);d.Ay.div(s||(s=(0,l.A)(["\n  width: 500px;\n  margin: auto;\n"])))},8444:(e,n,t)=>{t.d(n,{A:()=>h});var r,o,a=t(7528),i=t(5043),s=t(197),l=t(9888),d=t(5559),c=t(579);const{small:u}=d.A,m=s.Ay.div(r||(r=(0,a.A)(["\n  text-align: center;\n  padding: 7px 10px;\n  font-size: ",";\n  border-radius: 3px;\n  color: ",";\n\n  & + & {\n    margin-top: 5px;\n  }\n\n  ","\n"])),u,l.y.dark,(e=>{let{color:n}=e;return n&&(0,s.AH)(o||(o=(0,a.A)(["\n      color: ",";\n      box-shadow: 2px 2px 5px ",";\n    "])),l.y[n],l.y[n])})),p=e=>{let{messages:n,color:t,children:r}=e;return n=n||[],r&&n.push(r),(0,c.jsx)(c.Fragment,{children:n.map(((e,n)=>(0,c.jsx)(m,{color:t,children:e},n)))})},h=i.memo(p)},2915:(e,n,t)=>{t.d(n,{O:()=>l});var r,o=t(7528),a=t(197),i=t(5559);const{extraBig:s}=i.A,l=a.Ay.h1(r||(r=(0,o.A)(["\n  font-size: ",";\n  font-weight: bold;\n  padding: 0 15px 15px;\n  margin: 0 0 20px;\n  line-height: 1;\n  text-align: center;\n"])),s)},8843:(e,n,t)=>{t.d(n,{A:()=>d});var r=t(5043),o=t(9136),a=t(7779),i=t(579);const s=(0,o.Ay)((()=>t.e(7954).then(t.bind(t,7954)))),l=e=>{let{children:n}=e;const{states:{isLogin:t}}=(0,r.useContext)(a.Ay);return t?(0,i.jsx)(s,{}):n},d=r.memo(l)},7408:(e,n,t)=>{t.r(n),t.d(n,{default:()=>E});var r=t(5043),o=t(9367),a=t(4117),i=t(3216),s=t(7390),l=t(2550),d=t(8147);var c,u,m=t(7528),p=t(197),h=t(184),g=t(5127),f=t(2809),x=t(8444),b=t(579);p.Ay.div(c||(c=(0,m.A)(["\n  width: ",";\n  height: ",";\n  ","\n  overflow: hidden;\n  margin-bottom: 10px;\n  position: relative;\n\n  .image {\n    width: 100%;\n    height: 100%;\n    background: url('","') no-repeat center center;\n    background-size: cover;\n\n    cursor: pointer;\n  }\n\n  .icon {\n    position: absolute;\n    top: 2px;\n    right: 2px;\n    font-size: 2.5rem;\n    color: #fff;\n    cursor: pointer;\n  }\n"])),(e=>{let{width:n}=e;return null!==n&&void 0!==n?n:"100%"}),(e=>{let{height:n}=e;return null!==n&&void 0!==n?n:"300px"}),(e=>{let{radius:n}=e;return(0,p.AH)(u||(u=(0,m.A)(["\n    border-radius: ",";\n  "])),n)}),(e=>{let{url:n}=e;return n}));var y,w;t(947);const v=p.Ay.form(y||(y=(0,m.A)(["\n  dl {\n    display: flex;\n    align-items: center;\n\n    dt {\n      width: 120px;\n    }\n\n    dd {\n      flex-grow: 1;\n    }\n  }\n\n  dl + dl {\n    margin-top: 5px;\n  }\n\n  .terms-agree {\n    text-align: center;\n    margin: 15px 0;\n\n    svg {\n      font-size: 1.5rem;\n      vertical-align: middle;\n    }\n  }\n"]))),A=p.Ay.div(w||(w=(0,m.A)(["\n  .rows {\n    display: flex;\n    align-items: center;\n    button {\n      width: 160px;\n      height: 40px;\n    }\n  }\n\n  .rows:last-of-type {\n    span {\n      width: 100px;\n      text-align: center;\n    }\n    button {\n      width: 80px;\n    }\n\n    button + button {\n      margin-left: 5px;\n    }\n  }\n"]))),j=e=>{var n,t,r,o,i;let{form:s,onSubmit:l,onChange:d,onToggle:c,onReset:u,onSendAuthCode:m,onReSendAuthCode:p,onVerifyAuthCode:y,errors:w,fileUploadCallback:j,fileDeleteCallback:C}=e;const{t:k}=(0,a.Bd)();return(0,b.jsxs)(v,{autoComplete:"off",onSubmit:l,children:[(0,b.jsxs)("dl",{children:[(0,b.jsx)("dt",{children:k("\uc774\uba54\uc77c")}),(0,b.jsxs)("dd",{children:[(0,b.jsxs)(A,{children:[(0,b.jsxs)("div",{className:"rows",children:[(0,b.jsx)(f.A,{type:"text",name:"email",value:null!==(n=s.email)&&void 0!==n?n:"",onChange:d,readOnly:s.emailVerified||s.authCount>0&&s.authCount<180}),!s.emailVerified&&s.authCount>0&&(0,b.jsxs)("button",{type:"button",onClick:m,disabled:s.authCount<180&&s.authCount>0,children:[" ",k("\uc778\uc99d\ucf54\ub4dc_\uc804\uc1a1")]})]}),s.emailVerified?(0,b.jsx)(x.A,{color:"primary",children:k("\ud655\uc778\ub41c_\uc774\uba54\uc77c_\uc785\ub2c8\ub2e4")}):(0,b.jsxs)("div",{className:"rows",children:[s.authCount>0&&(0,b.jsx)(f.A,{type:"text",name:"authNum",placeholder:k("\uc778\uc99d\ucf54\ub4dc_\uc785\ub825"),onChange:d}),(0,b.jsx)("span",{children:s.authCountMin}),(0,b.jsx)("button",{type:"button",onClick:y,children:k("\ud655\uc778")}),(0,b.jsx)("button",{type:"button",onClick:p,children:k("\uc7ac\uc804\uc1a1")})]})]}),(0,b.jsx)(x.A,{messages:w.email,color:"danger"})]})]}),(0,b.jsxs)("dl",{children:[(0,b.jsx)("dt",{children:k("\ube44\ubc00\ubc88\ud638")}),(0,b.jsxs)("dd",{children:[(0,b.jsx)(f.A,{type:"password",name:"password",value:null!==(t=s.password)&&void 0!==t?t:"",onChange:d}),(0,b.jsx)(x.A,{messages:w.password,color:"danger"})]})]}),(0,b.jsxs)("dl",{children:[(0,b.jsx)("dt",{children:k("\ube44\ubc00\ubc88\ud638_\ud655\uc778")}),(0,b.jsxs)("dd",{children:[(0,b.jsx)(f.A,{type:"password",name:"confirmPassword",value:null!==(r=s.confirmPassword)&&void 0!==r?r:"",onChange:d}),(0,b.jsx)(x.A,{messages:w.confirmPassword,color:"danger"})]})]}),(0,b.jsxs)("dl",{children:[(0,b.jsx)("dt",{children:k("\ud68c\uc6d0\uba85")}),(0,b.jsxs)("dd",{children:[(0,b.jsx)(f.A,{type:"text",name:"userName",value:null!==(o=s.userName)&&void 0!==o?o:"",onChange:d}),(0,b.jsx)(x.A,{messages:w.userName,color:"danger"})]})]}),(0,b.jsxs)("dl",{children:[(0,b.jsx)("dt",{children:k("\ud734\ub300\uc804\ud654\ubc88\ud638")}),(0,b.jsxs)("dd",{children:[(0,b.jsx)(f.A,{type:"text",name:"mobile",value:null!==(i=s.mobile)&&void 0!==i?i:"",onChange:d}),(0,b.jsx)(x.A,{messages:w.mobile,color:"danger"})]})]}),(0,b.jsxs)("div",{className:"terms-agree",onClick:c,children:[s.agree?(0,b.jsx)(h.Hcz,{}):(0,b.jsx)(h.p29,{}),k("\ud68c\uc6d0\uac00\uc785_\uc57d\uad00\uc5d0_\ub3d9\uc758\ud569\ub2c8\ub2e4."),(0,b.jsx)(x.A,{messages:w.agree,color:"danger"})]}),(0,b.jsxs)(g.e2,{width:450,children:[(0,b.jsx)(g.Vu,{type:"button",color:"light",onClick:u,children:k("\ub2e4\uc2dc\uc785\ub825")}),(0,b.jsx)(g.Vu,{type:"submit",color:"dark",children:k("\uac00\uc785\ud558\uae30")})]})]})},C=r.memo(j),k=()=>{const e=(0,r.useRef)(),[n,t]=(0,r.useState)({gid:""+Date.now(),agree:!1,authNum:"",emailVerified:!1,authCount:180,authCountMin:"03:00"}),[o,c]=(0,r.useState)({}),{t:u}=(0,a.Bd)(),m=(0,i.Zp)(),p=(0,r.useCallback)((()=>{if(null!==n&&void 0!==n&&n.email.trim()){delete o.email;c(o);var r,a;n.authCount=180,e.current=setInterval((()=>{n.authCount--;const r=Math.floor(n.authCount/60),o=n.authCount-60*r,a=(""+r).padStart(2,"0")+":"+(""+o).padStart(2,"0");n.authCount<0&&(n.authCount=0,clearInterval(e.current)),t((e=>({...e,authCount:e.authCount,authCountMin:a})))}),1e3),r=n.email,a=n.gid,(0,d.A)("/email/verify?email=".concat(r,"&uid=").concat(a))}else c((e=>({...e,email:[u("\uc774\uba54\uc77c\uc744_\uc785\ub825\ud574\uc8fc\uc138\uc694")]})))}),[n,o,u]),h=(0,r.useCallback)((()=>{clearTimeout(e.current),p()}),[p]),g=(0,r.useCallback)((()=>{var r;null!==(r=n.authNum)&&void 0!==r&&r.trim()?(async()=>{try{await(r=n.authNum,a=n.gid,new Promise(((e,n)=>{(async()=>{try{const t=await(0,s.A)("/email/auth_check?authNum=".concat(r,"&uid=").concat(a));if(200===t.status&&t.data.success)return void n(t.data);e(t.data.data)}catch(t){n(t)}})()}))),t((e=>({...e,emailVerified:!0}))),delete o.email;c(o),clearInterval(e.current)}catch(i){c((e=>({...e,email:[u("\uc774\uba54\uc77c_\uc778\uc99d\uc5d0_\uc2e4\ud328\ud558\uc600\uc2b5\ub2c8\ub2e4.")]})))}var r,a})():c((e=>({...e,email:[u("\uc778\uc99d\ucf54\ub4dc\ub97c_\uc785\ub825\ud558\uc138\uc694.")]})))}),[u,n,o]),f=(0,r.useCallback)((e=>{e.preventDefault();const t={};let r=!1;const o={email:u("\uc774\uba54\uc77c\uc744_\uc785\ub825\ud558\uc138\uc694."),password:u("\ube44\ubc00\ubc88\ud638\ub97c_\uc785\ub825\ud558\uc138\uc694."),confirmPassword:u("\ube44\ubc00\ubc88\ud638\ub97c_\ud655\uc778\ud558\uc138\uc694."),userName:u("\ud68c\uc6d0\uba85\uc744_\uc785\ub825\ud558\uc138\uc694."),agree:u("\ud68c\uc6d0\uac00\uc785_\uc57d\uad00\uc5d0_\ub3d9\uc758\ud558\uc138\uc694.")};for(const[i,s]of Object.entries(o))n[i]&&("string"!==typeof n[i]||n[i].trim())||(t[i]=t[i]||[],t[i].push(s),r=!0);if(n.password&&n.confirmPassword&&n.password!==n.confirmPassword&&(t.confirmPassword=t.confirmPassword||[],t.confirmPassword.push(u("\ube44\ubc00\ubc88\ud638\uac00_\uc815\ud655\ud558\uc9c0_\uc54a\uc2b5\ub2c8\ub2e4.")),r=!0),r)c(t);else{var a;if(!n.emailVerified)t.email=null!==(a=t.email)&&void 0!==a?a:[],t.email.push(u("\uc774\uba54\uc77c\uc744_\uc778\uc99d\ud558\uc138\uc694.")),r=!0;r?c(t):(e=>new Promise(((n,t)=>{l.Ay.remove("token",{path:"/"}),(0,s.A)("/account","POST",e).then((e=>{201===e.status?n(e.data):t(e.data)})).catch((e=>{t(e)}))})))(n).then((()=>{m("/member/login",{replace:!0})})).catch((e=>{console.log(e);const n="string"===typeof e.message?{global:[e.message]}:e.message;for(const[o,a]of Object.entries(n)){var r;t[o]=null!==(r=t[o])&&void 0!==r?r:[],t[o].push(a)}c({...t})}))}}),[u,n,m]),x=(0,r.useCallback)((e=>{const n=e.target.name,r=e.target.value.trim();t((e=>({...e,[n]:r})))}),[]),y=(0,r.useCallback)((()=>{t((e=>({...e,agree:!e.agree})))}),[]),w=(0,r.useCallback)((()=>t({agree:!1})),[]),v=(0,r.useCallback)((e=>{0!==e.length&&t((n=>({...n,profile:e[0]})))}),[]),A=(0,r.useCallback)((e=>{window.confirm(u("\uc815\ub9d0_\uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?"))&&(async()=>{try{const n=await(0,s.A)("/file/delete/".concat(e),"DELETE");if(200===n.status&&n.data.success)return void t((e=>({...e,profile:null})));n.data.message&&c({global:[n.data.message]})}catch(n){c({global:[n.message]}),console.error(n)}})()}),[u]);return(0,b.jsx)(C,{form:n,errors:o,onSubmit:f,onChange:x,onToggle:y,onReset:w,onSendAuthCode:p,onReSendAuthCode:h,onVerifyAuthCode:g,fileUploadCallback:v,fileDeleteCallback:A})},O=r.memo(k);var S=t(7841),_=t(2915),P=t(8843);const N=()=>{const{t:e}=(0,a.Bd)();return(0,b.jsxs)(P.A,{children:[(0,b.jsx)(o.mg,{children:(0,b.jsx)("title",{children:e("\ud68c\uc6d0\uac00\uc785")})}),(0,b.jsxs)(S.xG,{children:[(0,b.jsx)(_.O,{children:e("\ud68c\uc6d0\uac00\uc785")}),(0,b.jsx)(O,{})]})]})},E=r.memo(N)},9888:(e,n,t)=>{t.d(n,{S:()=>o,y:()=>r});const r={primary:"#007bff",secondary:"#6c757d",success:"#28a745",danger:"#dc3545",warning:"#ffc107",info:"#17a2b8",light:"#f8f9fa",dark:"#515151",black:"#000",jmt:"#ff3d00",shadow:"#c9c9c9"},o={primary:[r.primary,"#fff",r.primary],secondary:[r.secondary,"#fff",r.secondary],success:[r.success,"#fff",r.success],danger:[r.danger,"#fff",r.danger],warning:[r.warning,"#212529","#212529"],info:[r.info,"#fff",r.info],light:[r.light,"#212529","#212529"],dark:[r.dark,"#fff",r.dark],jmt:[r.jmt,"#fff",r.jmt]}},5559:(e,n,t)=>{t.d(n,{A:()=>r});const r={small:"0.75rem",normal:"1rem",medium:"1.25rem",big:"1.5rem",extraBig:"2rem"}},3441:(e,n,t)=>{t.d(n,{k5:()=>p});var r=t(5043),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=r.createContext&&r.createContext(o),i=["attr","size","title"];function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function l(){return l=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},l.apply(this,arguments)}function d(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?d(Object(t),!0).forEach((function(n){u(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n,t){return(n=function(e){var n=function(e,n){if("object"!==typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,n||"default");if("object"!==typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"===typeof n?n:String(n)}(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function m(e){return e&&e.map(((e,n)=>r.createElement(e.tag,c({key:n},e.attr),m(e.child))))}function p(e){return n=>r.createElement(h,l({attr:c({},e.attr)},n),m(e.child))}function h(e){var n=n=>{var t,{attr:o,size:a,title:d}=e,u=s(e,i),m=a||n.size||"1em";return n.className&&(t=n.className),e.className&&(t=(t?t+" ":"")+e.className),r.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,o,u,{className:t,style:c(c({color:e.color||n.color},n.style),e.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),d&&r.createElement("title",null,d),e.children)};return void 0!==a?r.createElement(a.Consumer,null,(e=>n(e))):n(o)}}}]);
//# sourceMappingURL=9298.85933c9d.chunk.js.map