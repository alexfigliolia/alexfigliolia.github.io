var ut=Object.defineProperty;var ht=(s,i,r)=>i in s?ut(s,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[i]=r;var H=(s,i,r)=>(ht(s,typeof i!="symbol"?i+"":i,r),r);import{s as Xe,w as we,i as fe,c as Se,r as Be,n as Ee,o as it,d as _e,g as Re,x as ct}from"./scheduler.c607dd8c.js";import{S as Ae,i as Ye,g as P,s as Q,h as X,j,f as L,c as K,k,a as le,y as M,B as $,m as Me,n as De,l as A,o as Le,x as We,E as ze,d as se,p as Ve,t as ae,b as xe,C as nt,e as Ge,r as Fe,u as je,v as Ue,w as qe,D as ft}from"./index.7682a14d.js";import{e as Pe,h as rt,w as at,r as ke,c as dt,g as pt,A as He}from"./AppState.2e476ff2.js";import{A as mt,a as gt,C as vt,b as yt,W as bt,c as wt,S as _t,d as kt,R as It,e as Tt,f as Ct,g as Nt,h as zt,i as St,E as Et,j as Mt}from"./0.cdb3c0f3.js";function Dt(s,i){const r={},l={},d={$$scope:1};let h=s.length;for(;h--;){const m=s[h],I=i[h];if(I){for(const y in m)y in I||(l[y]=1);for(const y in I)d[y]||(r[y]=I[y],d[y]=1);s[h]=I}else for(const y in m)d[y]=1}for(const m in l)m in r||(r[m]=void 0);return r}function Lt(s){return typeof s=="object"&&s!==null?s:{}}const Pt="/_app/immutable/assets/up.f851e69b.svg",Xt="/_app/immutable/assets/down.f1cc9e51.svg";function At(s){let i,r,l,d,h,m,I,y,b,w,F,C;return{c(){i=P("div"),r=P("div"),l=Q(),d=P("button"),h=P("img"),I=Q(),y=P("button"),b=P("img"),this.h()},l(u){i=X(u,"DIV",{class:!0});var _=j(i);r=X(_,"DIV",{class:!0}),j(r).forEach(L),l=K(_),d=X(_,"BUTTON",{class:!0,"data-direction":!0});var D=j(d);h=X(D,"IMG",{src:!0,alt:!0,class:!0}),D.forEach(L),I=K(_),y=X(_,"BUTTON",{class:!0,"data-direction":!0});var z=j(y);b=X(z,"IMG",{src:!0,alt:!0,class:!0}),z.forEach(L),_.forEach(L),this.h()},h(){k(r,"class","bar svelte-dpts9z"),we(h.src,m=Pt)||k(h,"src",m),k(h,"alt","Go to previous"),k(h,"class","svelte-dpts9z"),k(d,"class","control svelte-dpts9z"),k(d,"data-direction","left"),we(b.src,w=Xt)||k(b,"src",w),k(b,"alt","Go to next"),k(b,"class","svelte-dpts9z"),k(y,"class","control svelte-dpts9z"),k(y,"data-direction","right"),k(i,"class","controls svelte-dpts9z")},m(u,_){le(u,i,_),M(i,r),M(i,l),M(i,d),M(d,h),M(i,I),M(i,y),M(y,b),F||(C=[$(d,"click",function(){fe(s[0])&&s[0].apply(this,arguments)}),$(y,"click",function(){fe(s[0])&&s[0].apply(this,arguments)})],F=!0)},p(u,[_]){s=u},i:Se,o:Se,d(u){u&&L(i),F=!1,Be(C)}}}function Yt(s,i,r){let{scroll:l}=i;return s.$$set=d=>{"scroll"in d&&r(0,l=d.scroll)},[l]}class Rt extends Ae{constructor(i){super(),Ye(this,i,Yt,At,Xe,{scroll:0})}}function Wt(s){let i,r,l,d,h,m,I;return{c(){i=P("button"),r=P("h3"),l=Me(s[1]),this.h()},l(y){i=X(y,"BUTTON",{class:!0,style:!0,"data-page":!0,"data-url":!0});var b=j(i);r=X(b,"H3",{class:!0});var w=j(r);l=De(w,s[1]),w.forEach(L),b.forEach(L),this.h()},h(){k(r,"class","svelte-zagwik"),k(i,"class",d=Ee(s[3])+" svelte-zagwik"),A(i,"box-shadow",s[8]),A(i,"transition-duration",s[6]),A(i,"transform","rotateX("+s[4]+"deg) rotateY("+s[5]+"deg) skew(-5deg) scale("+s[7]+")"),k(i,"data-page","Work"),k(i,"data-url",h=s[0]||null)},m(y,b){le(y,i,b),M(i,r),M(r,l),m||(I=[$(i,"click",function(){fe(s[2])&&s[2].apply(this,arguments)}),$(i,"mouseenter",s[9].mouseEnter.bind(s[9])),$(i,"mousemove",s[9].mouseMove.bind(s[9])),$(i,"mouseleave",s[9].mouseLeave.bind(s[9])),$(i,"touchstart",s[9].touchStart.bind(s[9])),$(i,"touchend",s[9].mouseLeave.bind(s[9])),$(i,"touchmove",s[9].touchMove.bind(s[9]))],m=!0)},p(y,[b]){s=y,b&2&&Le(l,s[1]),b&8&&d!==(d=Ee(s[3])+" svelte-zagwik")&&k(i,"class",d),b&256&&A(i,"box-shadow",s[8]),b&64&&A(i,"transition-duration",s[6]),b&176&&A(i,"transform","rotateX("+s[4]+"deg) rotateY("+s[5]+"deg) skew(-5deg) scale("+s[7]+")"),b&1&&h!==(h=s[0]||null)&&k(i,"data-url",h)},i:Se,o:Se,d(y){y&&L(i),m=!1,Be(I)}}}let Vt=!1;function xt(s,i,r){let{url:l=""}=i,{text:d=""}=i,{active:h=!1}=i,{func:m}=i,I="three-dee-button",y=0,b=0,w="0.5s",F=1,C="none",u=null;it(()=>()=>{u&&clearTimeout(u)});class _{static cacheTargetData(z){if(!this.left||!this.height||!this.width){const{left:T,top:q}=z.getBoundingClientRect(),{offsetWidth:ee,offsetHeight:de}=z;this.left=T,this.top=q,this.height=de,this.width=ee,this.mathX=this.left+this.width/2,this.mathY=this.top+this.height/2}}static getRotations({x:z,y:T}){const q=(this.mathY-T)/1.75;return{rotX:q>0?q+4:q,rotY:(this.mathX-z)/-10}}static setFrame(z,T){r(4,y=z.rotX),r(5,b=z.rotY),r(6,w=`${T}s`),r(7,F=1.1),r(8,C=`0 14px 28px rgba(0,0,0,0.5), ${z.rotY*-1.85}px ${z.rotX}px 10px rgba(0,0,0,0.44)`)}static mouseEnter({clientX:z,clientY:T,target:q}){this.cacheTargetData(q),this.setFrame(this.getRotations({y:T,x:z}),.5)}static touchStart({target:z,touches:T}){this.cacheTargetData(z),this.setFrame(this.getRotations({y:T[0].clientY,x:T[0].clientX}),.5)}static mouseMove({clientX:z,clientY:T}){this.setFrame(this.getRotations({y:T,x:z}),0)}static touchMove({touches:z}){this.setFrame(this.getRotations({y:z[0].clientY,x:z[0].clientX}),0)}static mouseLeave(){r(4,y=0),r(5,b=0),r(7,F=1),r(6,w="0.5s"),r(8,C="none")}}return H(_,"left",0),H(_,"top",0),H(_,"height",0),H(_,"width",0),H(_,"mathX",0),H(_,"mathY",0),s.$$set=D=>{"url"in D&&r(0,l=D.url),"text"in D&&r(1,d=D.text),"active"in D&&r(10,h=D.active),"func"in D&&r(2,m=D.func)},s.$$.update=()=>{s.$$.dirty&1024&&h&&!Vt&&(r(3,I="three-dee-button active"),u=setTimeout(()=>{r(3,I="three-dee-button active reset-delays")},1500)),s.$$.dirty&1024&&(h||r(3,I="three-dee-button"))},[l,d,m,I,y,b,w,F,C,_,h]}class Bt extends Ae{constructor(i){super(),Ye(this,i,xt,Wt,Xe,{url:0,text:1,active:10,func:2})}}const Ft="/_app/immutable/assets/left.242e47bd.svg",jt="/_app/immutable/assets/right.15f0a0e3.svg";function Oe(s,i,r){const l=s.slice();return l[13]=i[r],l[15]=r,l}function Ze(s){let i,r="   ";return{c(){i=P("div"),i.textContent=r,this.h()},l(l){i=X(l,"DIV",{class:!0,"data-svelte-h":!0}),We(i)!=="svelte-1gxyfja"&&(i.textContent=r),this.h()},h(){k(i,"class","svelte-1tlbsw0")},m(l,d){le(l,i,d)},d(l){l&&L(i)}}}function Je(s){let i,r=s[13]+"",l;return{c(){i=P("div"),l=Me(r),this.h()},l(d){i=X(d,"DIV",{style:!0,class:!0});var h=j(i);l=De(h,r),h.forEach(L),this.h()},h(){A(i,"transition-delay",.3+s[15]/20+"s"),k(i,"class","svelte-1tlbsw0")},m(d,h){le(d,i,h),M(i,l)},p(d,h){h&4&&r!==(r=d[13]+"")&&Le(l,r)},d(d){d&&L(i)}}}function Qe(s){let i,r,l=s[13]===" "&&Ze(),d=s[13]!==" "&&Je(s);return{c(){l&&l.c(),i=Q(),d&&d.c(),r=Ge()},l(h){l&&l.l(h),i=K(h),d&&d.l(h),r=Ge()},m(h,m){l&&l.m(h,m),le(h,i,m),d&&d.m(h,m),le(h,r,m)},p(h,m){h[13]===" "?l||(l=Ze(),l.c(),l.m(i.parentNode,i)):l&&(l.d(1),l=null),h[13]!==" "?d?d.p(h,m):(d=Je(h),d.c(),d.m(r.parentNode,r)):d&&(d.d(1),d=null)},d(h){h&&(L(i),L(r)),l&&l.d(h),d&&d.d(h)}}}function Ke(s){let i,r;return i=new Bt({props:{url:s[4],text:"VISIT",active:s[3]&&s[5],func:s[7].visit.bind(s[7])}}),{c(){Fe(i.$$.fragment)},l(l){je(i.$$.fragment,l)},m(l,d){Ue(i,l,d),r=!0},p(l,d){const h={};d&16&&(h.url=l[4]),d&40&&(h.active=l[3]&&l[5]),d&128&&(h.func=l[7].visit.bind(l[7])),i.$set(h)},i(l){r||(se(i.$$.fragment,l),r=!0)},o(l){ae(i.$$.fragment,l),r=!1},d(l){qe(i,l)}}}function Ut(s){let i,r,l,d,h,m,I,y,b,w,F,C,u,_=" More Info",D,z,T,q,ee,de=" Back",ce,pe,G,ie,O,me,ge,oe,N,te,Ce,Y,Ie,ue,Z=Pe(s[2].split("")),V=[];for(let B=0;B<Z.length;B+=1)V[B]=Qe(Oe(s,Z,B));let x=!!s[4]&&Ke(s);return{c(){i=P("div"),r=P("div"),l=P("img"),h=Q(),m=P("div"),I=P("h2");for(let B=0;B<V.length;B+=1)V[B].c();y=Q(),b=P("div"),w=P("p"),F=Me(s[0]),C=Q(),u=P("button"),u.textContent=_,D=Q(),z=P("p"),T=Me(s[1]),q=Q(),ee=P("button"),ee.textContent=de,pe=Q(),G=P("div"),ie=P("button"),O=P("img"),ge=Q(),x&&x.c(),oe=Q(),N=P("button"),te=P("img"),this.h()},l(B){i=X(B,"DIV",{class:!0,style:!0});var S=j(i);r=X(S,"DIV",{class:!0,style:!0});var R=j(r);l=X(R,"IMG",{src:!0,alt:!0,class:!0}),h=K(R),m=X(R,"DIV",{class:!0});var ne=j(m);I=X(ne,"H2",{class:!0});var ve=j(I);for(let n=0;n<V.length;n+=1)V[n].l(ve);ve.forEach(L),y=K(ne),b=X(ne,"DIV",{class:!0});var he=j(b);w=X(he,"P",{class:!0});var ye=j(w);F=De(ye,s[0]),C=K(ye),u=X(ye,"BUTTON",{class:!0,"data-svelte-h":!0}),We(u)!=="svelte-x5zkyu"&&(u.textContent=_),ye.forEach(L),D=K(he),z=X(he,"P",{class:!0});var be=j(z);T=De(be,s[1]),q=K(be),ee=X(be,"BUTTON",{class:!0,"data-svelte-h":!0}),We(ee)!=="svelte-yezwg4"&&(ee.textContent=de),be.forEach(L),he.forEach(L),pe=K(ne),G=X(ne,"DIV",{class:!0});var e=j(G);ie=X(e,"BUTTON",{class:!0,"data-direction":!0});var t=j(ie);O=X(t,"IMG",{alt:!0,style:!0,src:!0,class:!0}),t.forEach(L),ge=K(e),x&&x.l(e),oe=K(e),N=X(e,"BUTTON",{class:!0,"data-direction":!0});var o=j(N);te=X(o,"IMG",{alt:!0,style:!0,src:!0,class:!0}),o.forEach(L),e.forEach(L),ne.forEach(L),R.forEach(L),S.forEach(L),this.h()},h(){we(l.src,d=s[7].img)||k(l,"src",d),k(l,"alt",s[2]),k(l,"class","svelte-1tlbsw0"),k(I,"class","svelte-1tlbsw0"),k(u,"class","svelte-1tlbsw0"),k(w,"class","svelte-1tlbsw0"),k(ee,"class","svelte-1tlbsw0"),k(z,"class",ce=Ee(s[10]<957?"text-switch":"")+" svelte-1tlbsw0"),k(b,"class","info svelte-1tlbsw0"),ze(b,"change-info",s[7].changeInfo),k(O,"alt","View previous project"),A(O,"margin-left","0%"),A(O,"margin-right","10%"),we(O.src,me=Ft)||k(O,"src",me),k(O,"class","svelte-1tlbsw0"),k(ie,"class","scroller svelte-1tlbsw0"),k(ie,"data-direction","left"),k(te,"alt","View next project"),A(te,"margin-left","10%"),A(te,"margin-right","0%"),we(te.src,Ce=jt)||k(te,"src",Ce),k(te,"class","svelte-1tlbsw0"),k(N,"class","scroller svelte-1tlbsw0"),k(N,"data-direction","right"),k(G,"class","slide-buttons svelte-1tlbsw0"),k(m,"class","svelte-1tlbsw0"),k(r,"class","center-stuff svelte-1tlbsw0"),A(r,"height",s[8]),A(r,"width",s[9]),k(i,"class","project svelte-1tlbsw0"),A(i,"height",s[8]),A(i,"width",s[9]),ze(i,"is-selected",s[3]&&s[5])},m(B,S){le(B,i,S),M(i,r),M(r,l),M(r,h),M(r,m),M(m,I);for(let R=0;R<V.length;R+=1)V[R]&&V[R].m(I,null);M(m,y),M(m,b),M(b,w),M(w,F),M(w,C),M(w,u),M(b,D),M(b,z),M(z,T),M(z,q),M(z,ee),M(m,pe),M(m,G),M(G,ie),M(ie,O),M(G,ge),x&&x.m(G,null),M(G,oe),M(G,N),M(N,te),Y=!0,Ie||(ue=[$(u,"click",function(){fe(s[7].switchText.bind(s[7]))&&s[7].switchText.bind(s[7]).apply(this,arguments)}),$(ee,"click",function(){fe(s[7].switchText.bind(s[7]))&&s[7].switchText.bind(s[7]).apply(this,arguments)}),$(ie,"click",function(){fe(s[6])&&s[6].apply(this,arguments)}),$(N,"click",function(){fe(s[6])&&s[6].apply(this,arguments)})],Ie=!0)},p(B,[S]){if(s=B,(!Y||S&128&&!we(l.src,d=s[7].img))&&k(l,"src",d),(!Y||S&4)&&k(l,"alt",s[2]),S&4){Z=Pe(s[2].split(""));let R;for(R=0;R<Z.length;R+=1){const ne=Oe(s,Z,R);V[R]?V[R].p(ne,S):(V[R]=Qe(ne),V[R].c(),V[R].m(I,null))}for(;R<V.length;R+=1)V[R].d(1);V.length=Z.length}(!Y||S&1)&&Le(F,s[0]),(!Y||S&2)&&Le(T,s[1]),(!Y||S&1024&&ce!==(ce=Ee(s[10]<957?"text-switch":"")+" svelte-1tlbsw0"))&&k(z,"class",ce),(!Y||S&128)&&ze(b,"change-info",s[7].changeInfo),s[4]?x?(x.p(s,S),S&16&&se(x,1)):(x=Ke(s),x.c(),se(x,1),x.m(G,oe)):x&&(Ve(),ae(x,1,1,()=>{x=null}),xe()),(!Y||S&256)&&A(r,"height",s[8]),(!Y||S&512)&&A(r,"width",s[9]),(!Y||S&256)&&A(i,"height",s[8]),(!Y||S&512)&&A(i,"width",s[9]),(!Y||S&40)&&ze(i,"is-selected",s[3]&&s[5])},i(B){Y||(se(x),Y=!0)},o(B){ae(x),Y=!1},d(B){B&&L(i),nt(V,B),x&&x.d(),Ie=!1,Be(ue)}}}function qt(s,i,r){let l,d,h;_e(s,rt,T=>r(8,l=T)),_e(s,at,T=>r(9,d=T)),_e(s,ke,T=>r(10,h=T));let{p1:m}=i,{p2:I}=i,{name:y}=i,{imgSmall:b}=i,{imgLarge:w}=i,{active:F}=i,{url:C=""}=i,{pageLoaded:u}=i,{scroll:_}=i;const z=class z{static visit(q){q.target&&window.open(q.target.dataset.url,"_blank")}static switchText(){r(7,z.changeInfo=!z.changeInfo,z)}};H(z,"preloaded",!1),H(z,"changeInfo",!1),H(z,"img",Re(ke)>=670?w:b);let D=z;return s.$$set=T=>{"p1"in T&&r(0,m=T.p1),"p2"in T&&r(1,I=T.p2),"name"in T&&r(2,y=T.name),"imgSmall"in T&&r(11,b=T.imgSmall),"imgLarge"in T&&r(12,w=T.imgLarge),"active"in T&&r(3,F=T.active),"url"in T&&r(4,C=T.url),"pageLoaded"in T&&r(5,u=T.pageLoaded),"scroll"in T&&r(6,_=T.scroll)},s.$$.update=()=>{s.$$.dirty&6144&&r(7,D.img=Re(ke)>=670?w:b,D)},[m,I,y,F,C,u,_,D,l,d,h,b,w]}class Gt extends Ae{constructor(i){super(),Ye(this,i,qt,Ut,Xe,{p1:0,p2:1,name:2,imgSmall:11,imgLarge:12,active:3,url:4,pageLoaded:5,scroll:6})}}const $e=[{name:"Atlassian",p1:"At Atlassian, I worked as a full-stack engineer speer heading several initiatives for improving Confluence performance and developer experience",p2:"I built tools designed to automate dependency removal, analyze JavaScript delivery to the browser, improve performance, automate redundant tasks, and more",url:"https://www.atlassian.com/software/confluence",imgSmall:mt,imgLarge:gt},{name:"Carta",p1:"At Carta Healthcare, I worked as a lead frontend engineer building tools for improving patient-care through AI and automation",p2:"As a team, we built as a suite of tools for improving the quality of data collection, purchasing and inventory, and staff scheduling",url:"https://www.carta.healthcare",imgSmall:vt,imgLarge:yt},{name:"Word Clouds",p1:"Word Clouds is a crossword puzzle game for all iOS and Android devices. Train your brain and vocabulary as you play through thousands of puzzles!",p2:"Words Clouds was built with React Native, a serverless backend using Google Cloud, and Node.js for generating crossword puzzles.",url:"https://itunes.apple.com/us/app/word-clouds/id1435511292?mt=8",imgSmall:bt,imgLarge:wt},{name:"Skedge",p1:"Welcome to Skedge, an easy to use mobile and desktop app for small business owners and managers. Skedge allows you to manage your team's schedules in real time.",p2:"Your employees are notified of new shifts and schedule changes with their own mobile app. Skedge was developed with Meteor, Node, React, Electron, and Cordova.",imgSmall:_t,imgLarge:kt},{name:"React",p1:"Welcome to REACT property management software. REACT will handle your maintenace, income, and expenses while creating accounting statements for you.",p2:"With a seperate apps for managers and owners, communication and issue tracking is instant. It has built-in real time chat for an easier means of communication.",imgSmall:It,imgLarge:Tt},{name:"Piper Chat",p1:"Piper Chat is a parody application based on the popular HBO television show Silicon Valley. It is a fully functional text, voice and video chat that is built for iOS, Android, and all modern browsers",p2:"Under the hood is JavaScript front to back. Core technologies include web sockets, WebRTC, MongoDB and views built with React/React Native.",imgSmall:Ct,imgLarge:Nt},{name:"E-Commerce",p1:"After seeing some e-commerce interactions on Dribble, I tried to recreate some with a simple ecommerce site of my own.",p2:"On mobile, the app is performant and fun to use. It has a React front end and a backend using Node.js, Meteor, and Moltin.",imgSmall:zt,imgLarge:St},{name:"Eat Better",p1:"For as long as I can remember Yelp has been a reliable tool for deciding where I'll go for a meal. 'Eat Better' utilizes their api in conjunction with a fun to use UI to help you find a place to eat.",p2:"I created this app to up my game when designing in the browser. All animations are done with CSS3 and vanilla javascript. It has a React front end with an Express backend.",imgSmall:Et,imgLarge:Mt}];var lt={exports:{}};(function(s,i){(function(r,l,d){if(typeof window>"u")return;var h="2.3.2",m=0,I=r.requestAnimationFrame||r.webkitRequestAnimationFrame||r.mozRequestAnimationFrame||r.msRequestAnimationFrame||function(e){var t=+new Date,o=Math.max(1e3/60,1e3/60-(t-m));return m=t+o,setTimeout(e,o)},y=r.cancelAnimationFrame||r.webkitCancelAnimationFrame||r.webkitCancelRequestAnimationFrame||r.mozCancelRequestAnimationFrame||r.msCancelRequestAnimationFrame||clearTimeout,b=r.document,w=b.createElement("div").style,F=function(){for(var e="-webkit- -moz- -o- -ms-".split(" "),t;t=e.shift();)if(ue(t+"transform")in w)return t;return""}(),C=Z("opacity"),u=Z("transform"),_=Z("perspective"),D=Z("transform-style"),z=Z("transform-origin"),T=Z("backface-visibility"),q=D&&function(){return w[D]="preserve-3d",w[D]=="preserve-3d"}(),ee=Object.prototype.toString,de=[].slice,ce={},pe={},G={click:4,mousewheel:5,dommousescroll:5,keydown:6},ie={2:"touch",3:"pen",4:"mouse",pen:"pen"},O=[],me=[];(function(){var e={},t={start:1,down:1,move:2,end:3,up:3,cancel:3};return S("mouse touch pointer MSPointer-".split(" "),function(o){var n=/pointer/i.test(o)?"pointer":o;e[n]=e[n]||{},ie[n]=n,S(t,function(p,a){var c=ue(o+p);e[n][c]=a,pe[c.toLowerCase()]=n,G[c.toLowerCase()]=a,a==1?O.push(c):me.push(c)})}),e})();var ge={touch:{},pointer:{},mouse:{}},oe={linear:function(e,t,o,n){return o*e/n+t},ease:function(e,t,o,n){return-o*((e=e/n-1)*e*e*e-1)+t},"ease-in":function(e,t,o,n){return o*(e/=n)*e*e+t},"ease-out":function(e,t,o,n){return o*((e=e/n-1)*e*e+1)+t},"ease-in-out":function(e,t,o,n){return(e/=n/2)<1?o/2*e*e*e+t:o/2*((e-=2)*e*e+2)+t},bounce:function(e,t,o,n){return(e/=n)<1/2.75?o*(7.5625*e*e)+t:e<2/2.75?o*(7.5625*(e-=1.5/2.75)*e+.75)+t:e<2.5/2.75?o*(7.5625*(e-=2.25/2.75)*e+.9375)+t:o*(7.5625*(e-=2.625/2.75)*e+.984375)+t}},N={fade:function(e,t,o,n){C?(e.style.opacity=1-Math.abs(t),o&&(o.style.opacity=Math.abs(t))):(e.style.filter="alpha(opacity="+(1-Math.abs(t))*100+")",o&&(o.style.filter="alpha(opacity="+Math.abs(t)*100+")"))}},te=!1;try{var Ce=Object.defineProperty({},"passive",{get:function(){te=!0}});window.addEventListener("testPassive",null,Ce)}catch{}S("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e){ce["[object "+e+"]"]=e.toLowerCase()}),S("X Y ".split(" "),function(e){var t={X:"left",Y:"top"},o=_?" translateZ(0)":"";N["scroll"+e]=function(n,p,a,c){var f=e||["X","Y"][this.direction];u?n.style[u]="translate"+f+"("+p*100+"%)"+o:n.style[t[f]]=p*100+"%",a&&(u?a.style[u]="translate"+f+"("+c*100+"%)"+o:a.style[t[f]]=c*100+"%")},N["scroll3d"+e]=function(n,p,a,c){var f=e||["X","Y"][this.direction],v=p<0?-1:1,g=Math.abs(p),E;_?(g<.05?(E=g*1200,p=0,c=v*-1):g<.95?(E=60,p=(p-.05*v)/.9,c=(c+.05*v)/.9):(E=(1-g)*1200,p=v,c=0),n.parentNode.style[u]="perspective(1000px) rotateX("+E+"deg)",n.style[u]="translate"+f+"("+p*100+"%)",a&&(a.style[u]="translate"+f+"("+c*100+"%)")):N["scroll"+e].apply(this,arguments)},N["slide"+e]=function(n,p,a,c){N["slideCoverReverse"+e].apply(this,arguments)},N["flow"+e]=function(n,p,a,c){N["flowCoverIn"+e].apply(this,arguments)},N["slice"+e]=function(){var n=function(a,c){var f=b.createElement("div");f.style.cssText="position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;",f.appendChild(a),c.appendChild(f)},p=function(a,c,f,v){S(f,function(g){g.parentNode!=v&&(a!=g&&c!=g?g.parentNode.style.display="none":g.parentNode.style.display="block")})};return function(a,c,f,v){var g=e||["X","Y"][this.direction],E=g=="X"?"width":"height",W=this.container[ue("client-"+E)],U=c==0||v==0;a.style[E]=U?"100%":W+"px",a.parentNode==this.container&&n(a,this.container),a.parentNode.style.zIndex=c>0?0:1,a.parentNode.style[E]=(Math.min(c,0)+1)*100+"%",f&&(f.style[E]=U?"100%":W+"px",f.parentNode==this.container&&n(f,this.container),f.parentNode.style.zIndex=c>0?1:0,f.parentNode.style[E]=(Math.min(v,0)+1)*100+"%"),p(a,f,this.pages,this.container)}}(),N["flip"+e]=function(n,p,a,c){var f=e||["X","Y"][1-this.direction],v=f=="X"?-1:1;_?(n.style[T]="hidden",n.style[u]="perspective(1000px) rotate"+f+"("+p*180*v+"deg)"+o,a&&(a.style[T]="hidden",a.style[u]="perspective(1000px) rotate"+f+"("+c*180*v+"deg)"+o)):N["scroll"+e].apply(this,arguments)},N["flip3d"+e]=function(){var n;return function(p,a,c,f){var v=e||["X","Y"][1-this.direction],g=v=="X"?-1:1,E=g*(a<0?1:-1),W=p["offset"+(v=="X"?"Height":"Width")]/2;q?(n||(n=!0,p.parentNode.parentNode.style[_]="1000px",p.parentNode.style[D]="preserve-3d"),p.parentNode.style[u]="translateZ(-"+W+"px) rotate"+v+"("+a*90*g+"deg)",p.style[u]="rotate"+v+"(0) translateZ("+W+"px)",c&&(c.style[u]="rotate"+v+"("+E*90+"deg) translateZ("+W+"px)")):N["scroll"+e].apply(this,arguments)}}(),N["flipClock"+e]=function(){var n=function(a,c,f,v){var g=a.parentNode,E=f=="X"?"height":"width",W=f=="X"?"top":"left",U=["50%",(v?0:100)+"%"][f=="X"?"slice":"reverse"]().join(" ");return(!g||g==c)&&(g=b.createElement("div"),g.style.cssText="position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;display:none;",g.style[z]=U,g.style[T]="hidden",g.appendChild(a),c.appendChild(g)),g.style[E]="50%",g.style[W]=v*100+"%",a.style[E]="200%",a.style[W]=-v*200+"%",g},p=function(a,c,f,v){S(f,function(g){g.parentNode!=v&&(a!=g&&c!=g?g.parentNode.style.display=g._clone.parentNode.style.display="none":g.parentNode.style.display=g._clone.parentNode.style.display="block")})};return function(a,c,f,v){var g=e||["X","Y"][1-this.direction];this.pages[this.current]==a;var E=+(Math.abs(c)<.5),W=g=="X"?1:-1,U,J;_?(n(a,this.container,g,0),n(a._clone||(a._clone=a.cloneNode(!0)),this.container,g,.5),U=J=-c*180*W,c>0?J=0:U=0,a.parentNode.style.zIndex=a._clone.parentNode.style.zIndex=E,a.parentNode.style[u]="perspective(1000px) rotate"+g+"("+U+"deg)",a._clone.parentNode.style[u]="perspective(1000px) rotate"+g+"("+J+"deg)",f&&(n(f,this.container,g,0),n(f._clone||(f._clone=f.cloneNode(!0)),this.container,g,.5),U=J=-v*180*W,c>0?U=0:J=0,f.parentNode.style.zIndex=f._clone.parentNode.style.zIndex=1-E,f.parentNode.style[u]="perspective(1000px) rotate"+g+"("+U+"deg)",f._clone.parentNode.style[u]="perspective(1000px) rotate"+g+"("+J+"deg)"),p(a,f,this.pages,this.container),(c==0||v==0)&&(a=this.pages[this.current],a.style.height=a.style.width=a.parentNode.style.height=a.parentNode.style.width="100%",a.style.top=a.style.left=a.parentNode.style.top=a.parentNode.style.left=0,a.parentNode.style.zIndex=2)):N["scroll"+e].apply(this,arguments)}}(),N["flipPaper"+e]=function(){var n;return function(p,a,c,f){var v=e||["X","Y"][this.direction],g=v=="X"?"width":"height",E=Math.abs(a)*100;if(!n){n=b.createElement("div"),n.style.cssText="position:absolute;z-index:2;top:0;left:0;height:0;width:0;background:no-repeat #fff;";try{n.style.backgroundImage=F+"linear-gradient("+(v=="X"?"right":"bottom")+", #aaa 0,#fff 20px)"}catch{}this.container.appendChild(n)}N["slice"+e].apply(this,arguments),n.style.display=a==0||f==0?"none":"block",n.style.width=n.style.height="100%",n.style[g]=(a<0?E:100-E)+"%",n.style[t[v]]=(a<0?100-2*E:2*E-100)+"%"}}(),N["zoom"+e]=function(n,p,a,c){var f=+(Math.abs(p)<.5);u?(n.style[u]="scale"+e+"("+Math.abs(1-Math.abs(p)*2)+")"+o,n.style.zIndex=f,a&&(a.style[u]="scale"+e+"("+Math.abs(1-Math.abs(p)*2)+")"+o,a.style.zIndex=1-f)):N["scroll"+e].apply(this,arguments)},N["bomb"+e]=function(n,p,a,c){var f=+(Math.abs(p)<.5),v=Math.abs(1-Math.abs(p)*2);u?(n.style[u]="scale"+e+"("+(2-v)+")"+o,n.style.opacity=f?v:0,n.style.zIndex=f,a&&(a.style[u]="scale"+e+"("+(2-v)+")"+o,a.style.opacity=f?0:v,a.style.zIndex=1-f)):N["scroll"+e].apply(this,arguments)},N["skew"+e]=function(n,p,a,c){var f=+(Math.abs(p)<.5);u?(n.style[u]="skew"+e+"("+p*180+"deg)"+o,n.style.zIndex=f,a&&(a.style[u]="skew"+e+"("+c*180+"deg)"+o,a.style.zIndex=1-f)):N["scroll"+e].apply(this,arguments)},S(" Reverse In Out".split(" "),function(n){N["scrollCover"+n+e]=function(p,a,c,f){var v=e||["X","Y"][this.direction],g=+(n=="In"||!n&&a<0||n=="Reverse"&&a>0),E=100,W=100;g?E=20:W=20,u?p.style[u]="translate"+v+"("+a*E+"%)"+o:p.style[t[v]]=a*E+"%",p.style.zIndex=1-g,c&&(u?c.style[u]="translate"+v+"("+f*W+"%)"+o:c.style[t[v]]=f*W+"%",c.style.zIndex=g)},N["slideCover"+n+e]=function(p,a,c,f){var v=e||["X","Y"][this.direction],g=+(n=="In"||!n&&a<0||n=="Reverse"&&a>0);u?(p.style[u]="translate"+v+"("+a*(100-g*100)+"%) scale("+((1-Math.abs(g&&a))*.2+.8)+")"+o,p.style.zIndex=1-g,c&&(c.style[u]="translate"+v+"("+f*g*100+"%) scale("+((1-Math.abs(g?0:f))*.2+.8)+")"+o,c.style.zIndex=g)):N["scrollCover"+n+e].apply(this,arguments)},N["flowCover"+n+e]=function(p,a,c,f){var v=e||["X","Y"][this.direction],g=+(n=="In"||!n&&a<0||n=="Reverse"&&a>0);u?(p.style[u]="translate"+v+"("+a*(100-g*50)+"%) scale("+((1-Math.abs(a))*.5+.5)+")"+o,p.style.zIndex=1-g,c&&(c.style[u]="translate"+v+"("+f*(50+g*50)+"%) scale("+((1-Math.abs(f))*.5+.5)+")"+o,c.style.zIndex=g)):N["scrollCover"+n+e].apply(this,arguments)},N["flipCover"+n+e]=function(p,a,c,f){var v=e||["X","Y"][1-this.direction],g=+(n=="In"||!n&&a<0||n=="Reverse"&&a>0);_?(g?a=0:f=0,p.style[u]="perspective(1000px) rotate"+v+"("+a*-90+"deg)"+o,p.style.zIndex=1-g,c&&(c.style[u]="perspective(1000px) rotate"+v+"("+f*-90+"deg)"+o,c.style.zIndex=g)):N["scroll"+e].apply(this,arguments)},N["skewCover"+n+e]=function(p,a,c,f){var v=+(n=="In"||!n&&a<0||n=="Reverse"&&a>0);u?(v?a=0:f=0,p.style[u]="skew"+e+"("+a*90+"deg)"+o,p.style.zIndex=1-v,c&&(c.style[u]="skew"+e+"("+f*90+"deg)"+o,c.style.zIndex=v)):N["scroll"+e].apply(this,arguments)},N["zoomCover"+n+e]=function(p,a,c,f){var v=+(n=="In"||!n&&a<0||n=="Reverse"&&a>0);u?(v?a=0:f=0,p.style[u]="scale"+e+"("+(1-Math.abs(a))+")"+o,p.style.zIndex=1-v,c&&(c.style[u]="scale"+e+"("+(1-Math.abs(f))+")"+o,c.style.zIndex=v)):N["scroll"+e].apply(this,arguments)},N["bombCover"+n+e]=function(p,a,c,f){var v=+(n=="In"||!n&&a<0||n=="Reverse"&&a>0);u?(v?a=0:f=0,p.style[u]="scale"+e+"("+(1+Math.abs(a))+")"+o,p.style.zIndex=1-v,c&&(c.style[u]="scale"+e+"("+(1+Math.abs(f))+")"+o,c.style.zIndex=v),N.fade.apply(this,arguments)):N["scroll"+e].apply(this,arguments)}})});function Y(e){return e==null?e+"":typeof e=="object"||typeof e=="function"?ce[ee.call(e)]||"object":typeof e}function Ie(e){var t=Y(e);return!!e&&t!="function"&&t!="string"&&(e.length===0||e.length&&(e.nodeType==1||e.length-1 in e))}function ue(e){return(e+"").replace(/^-ms-/,"ms-").replace(/-([a-z]|[0-9])/ig,function(t,o){return(o+"").toUpperCase()})}function Z(e){var t=ue(e),o=ue(F+t);return t in w&&t||o in w&&o||""}function V(e){return Y(e)=="function"}function x(e){var t=0,o;if(Y(e.length)=="number")t=e.length;else if("keys"in Object)t=Object.keys(e).length;else for(o in e)e.hasOwnProperty(o)&&t++;return t}function B(e,t){return"item"in e?e.item(t):(function(){var o=0,n;for(n in this)if(o++==t)return this[n]}).call(e,t)}function S(e,t){if(Ie(e)){if(Y(e.forEach)=="function")return e.forEach(t);for(var o=0,n=e.length,p;o<n;o++)p=e[o],Y(p)!="undefined"&&t(p,o,e)}else{var a;for(a in e)t(a,e[a],e)}}function R(e){var t=[];return S(e.children||e.childNodes,function(o){o.nodeType==1&&t.push(o)}),t}function ne(e,t){var o=r.getComputedStyle&&r.getComputedStyle(e,null)||e.currentStyle||e.style;return o[t]}function ve(e,t,o){if(Y(t)=="object")return S(t,function(n,p){ve(e,n,p)});S(t.split(" "),function(n){e.addEventListener?e.addEventListener(n,o,te?{passive:!1}:!1):e.attachEvent?e.attachEvent("on"+n,o):e["on"+n]=o})}function he(e,t,o){if(Y(t)=="object")return S(t,function(n,p){he(e,n,p)});S(t.split(" "),function(n){e.removeEventListener?e.removeEventListener(n,o,!1):e.detachEvent?e.detachEvent("on"+n,o):e["on"+n]=null})}function ye(){var e;r.getSelection?(e=getSelection(),"empty"in e?e.empty():"removeAllRanges"in e&&e.removeAllRanges()):b.selection.empty()}function be(e){var t={},o=e.which,n=e.button,p,a;if(S("wheelDelta detail which keyCode".split(" "),function(f){t[f]=e[f]}),t.oldEvent=e,t.type=e.type.toLowerCase(),t.eventType=pe[t.type]||t.type,t.eventCode=G[t.type]||0,t.pointerType=ie[e.pointerType]||e.pointerType||t.eventType,t.target=e.target||e.srcElement||b.documentElement,t.target.nodeType===3&&(t.target=t.target.parentNode),t.preventDefault=function(){e.preventDefault&&e.preventDefault(),t.returnValue=e.returnValue=!1},p=ge[t.eventType]){switch(t.eventType){case"mouse":case"pointer":var c=e.pointerId||0;t.eventCode==3?delete p[c]:p[c]=e;break;case"touch":ge[t.eventType]=p=e.touches;break}(a=B(p,0))&&(t.clientX=a.clientX,t.clientY=a.clientY),t.button=o<4?Math.max(0,o-1):n&4&&1||n&2,t.length=x(p)}return t}l.prototype={version:h,constructor:l,latestTime:0,init:function(e){var t=this,o=this.handler=function(n){!t.frozen&&t.handleEvent(n)};this.events={},this.duration=isNaN(parseInt(e.duration))?600:parseInt(e.duration),this.direction=parseInt(e.direction)==0?0:1,this.current=parseInt(e.start)||0,this.loop=!!e.loop,this.mouse=e.mouse==null?!0:!!e.mouse,this.mousewheel=!!e.mousewheel,this.interval=parseInt(e.interval)||5e3,this.playing=!!e.autoplay,this.arrowkey=!!e.arrowkey,this.frozen=!!e.freeze,this.pages=R(this.container),this.length=this.pages.length,this.pageData=[],ve(this.container,O.join(" ")+" click"+(this.mousewheel?" mousewheel DOMMouseScroll":""),o),ve(b,me.join(" ")+(this.arrowkey?" keydown":""),o),S(this.pages,function(n){t.pageData.push({percent:0,cssText:n.style.cssText||""}),t.initStyle(n)}),this.pages[this.current].style.display="block",this.on({before:function(){clearTimeout(this.playTimer)},dragStart:function(){clearTimeout(this.playTimer),ye()},after:this.firePlay,update:null}).firePlay(),this.comment=document.createComment(" Powered by pageSwitch v"+this.version+"  https://github.com/qiqiboy/pageSwitch "),this.container.appendChild(this.comment),this.setEase(e.ease),this.setTransition(e.transition)},initStyle:function(e){var t=e.style,o;return S("position:absolute;top:0;left:0;width:100%;height:100%;display:none".split(";"),function(n){o=n.split(":"),t[o[0]]=o[1]}),e},setEase:function(e){return this.ease=V(e)?e:oe[e]||oe.ease,this},addEase:function(e,t){return V(t)&&(oe[e]=t),this},setTransition:function(e){return this.events.update.splice(0,1,V(e)?e:N[e]||N.slide),this},addTransition:function(e,t){return V(t)&&(N[e]=t),this},isStatic:function(){return!this.timer&&!this.drag},on:function(e,t){var o=this;return Y(e)=="object"?S(e,function(n,p){o.on(n,p)}):(this.events[e]||(this.events[e]=[]),this.events[e].push(t)),this},fire:function(e){var t=this,o=de.call(arguments,1);return S(this.events[e]||[],function(n){V(n)&&n.apply(t,o)}),this},freeze:function(e){return this.frozen=e==null?!0:!!e,this},slide:function(e){var t=this;this.direction;var o=this.duration,n=+new Date,p=this.ease,a=this.current,c=Math.min(this.length-1,Math.max(0,this.fixIndex(e))),f=this.pages[a],v=this.getPercent(),g=this.fixIndex(c==a?a+(v>0?-1:1):c),E=this.pages[g],W=e>a?-1:1,U=f;y(this.timer),c==a?(W=0,U=E):E.style.display=="none"&&(v=0),this.fixBlock(a,g),this.fire("before",a,c),this.current=c,o*=Math.abs(W-v),this.latestTime=n+o,J();function J(){var Te=Math.min(o,+new Date-n),Ne=o?p(Te,0,1,o):1,re=(W-v)*Ne+v;t.fixUpdate(re,a,g),Te==o?(U&&(U.style.display="none"),delete t.timer,t.fire("after",c,a)):t.timer=I(J)}return this},prev:function(){return this.slide(this.current-1)},next:function(){return this.slide(this.current+1)},play:function(){return this.playing=!0,this.firePlay()},firePlay:function(){var e=this;return this.playing&&(this.playTimer=setTimeout(function(){e.slide((e.current+1)%(e.loop?1/0:e.length))},this.interval)),this},pause:function(){return this.playing=!1,clearTimeout(this.playTimer),this},fixIndex:function(e){return this.length>1&&this.loop?(this.length+e)%this.length:e},fixBlock:function(e,t){return S(this.pages,function(o,n){e!=n&&t!=n?o.style.display="none":o.style.display="block"}),this},fixUpdate:function(e,t,o){var n=this.pageData,p=this.pages[t],a=this.pages[o],c;return n[t].percent=e,a&&(c=n[o].percent=e>0?e-1:1+e),this.fire("update",p,e,a,c)},getPercent:function(e){var t=this.pageData[e??this.current];return t&&(t.percent||0)},getOffsetParent:function(){var e=ne(this.container,"position");return e&&e!="static"?this.container:this.container.offsetParent||b.body},handleEvent:function(e){var t=be(e),o=t.button<1&&t.length<2&&(!this.pointerType||this.pointerType==t.eventType)&&(this.mouse||t.pointerType!="mouse");switch(t.eventCode){case 2:if(o&&this.rect){var n=this.current,p=this.direction,a=[t.clientX,t.clientY],c=this.rect,f=a[p]-c[p];this.pages[n];var v=this.offsetParent[p?"clientHeight":"clientWidth"],g,E;this.drag==null&&c.toString()!=a.toString()&&(this.drag=Math.abs(f)>=Math.abs(a[1-p]-c[1-p]),this.drag&&this.fire("dragStart",t)),this.drag&&(E=this.percent+(v&&f/v),this.pages[g=this.fixIndex(n+(E>0?-1:1))]||(E/=Math.abs(f)/v+2),this.fixBlock(n,g),this.fire("dragMove",t),this.fixUpdate(E,n,g),this._offset=f,t.preventDefault())}this.drag&&this.pointerType!=="touch"&&t.eventType==="touch"&&t.preventDefault();break;case 1:case 3:if(o){var W=this,U=this.current,E=this.getPercent(),J,f,Te,re;t.length&&(t.eventCode==1||this.drag)?(re=t.target.nodeName.toLowerCase(),clearTimeout(this.eventTimer),this.pointerType||(this.pointerType=t.eventType),this.timer&&(y(this.timer),delete this.timer),this.rect=[t.clientX,t.clientY],this.percent=E,this.time=+new Date,this.offsetParent=this.getOffsetParent(),t.eventType!="touch"&&(re=="a"||re=="img")&&t.preventDefault()):(Te=this.time)&&(f=this._offset,J=this.drag,S("rect drag time percent _offset offsetParent".split(" "),function(ot){delete W[ot]}),J&&((+new Date-Te<500&&Math.abs(f)>20||Math.abs(E)>.5)&&(U+=f>0?-1:1),this.fire("dragEnd",t),t.preventDefault()),E?this.slide(U):J&&this.firePlay(),this.eventTimer=setTimeout(function(){delete W.pointerType},400))}break;case 4:this.timer&&t.preventDefault();break;case 5:if(t.preventDefault(),this.isStatic()&&+new Date-this.latestTime>Math.max(1e3-this.duration,0)){var Ne=t.wheelDelta||-t.detail;Math.abs(Ne)>=3&&this[Ne>0?"prev":"next"]()}break;case 6:var re=t.target.nodeName.toLowerCase();if(this.isStatic()&&re!="input"&&re!="textarea"&&re!="select")switch(t.keyCode||t.which){case 33:case 37:case 38:this.prev();break;case 32:case 34:case 39:case 40:this.next();break;case 35:this.slide(this.length-1);break;case 36:this.slide(0);break}break}},destroy:function(){var e=this.pageData;return he(this.container,O.join(" ")+" click"+(this.mousewheel?" mousewheel DOMMouseScroll":""),this.handler),he(b,me.join(" ")+(this.arrowkey?" keydown":""),this.handler),S(this.pages,function(t,o){t.style.cssText=e[o].cssText}),this.container.removeChild(this.comment),this.length=0,this.pause()},append:function(e,t){return t==null&&(t=this.pages.length),this.pageData.splice(t,0,{percent:0,cssText:e.style.cssText}),this.pages.splice(t,0,e),this.container.appendChild(this.initStyle(e)),this.length=this.pages.length,t<=this.current&&this.current++,this},prepend:function(e){return this.append(e,0)},insertBefore:function(e,t){return this.append(e,t-1)},insertAfter:function(e,t){return this.append(e,t+1)},remove:function(e){return this.container.removeChild(this.pages[e]),this.pages.splice(e,1),this.pageData.splice(e,1),this.length=this.pages.length,e<=this.current&&this.slide(this.current=Math.max(0,this.current-1)),this}},S("Ease Transition".split(" "),function(e){l["add"+e]=l.prototype["add"+e]}),s.exports=l})(typeof window<"u"?window:dt,function(r,l){this.container=typeof r=="string"?document.getElementById(r):r,this.init(l||{})})})(lt);var Ht=lt.exports;const Ot=pt(Ht);function et(s,i,r){const l=s.slice();return l[4]=i[r],l[6]=r,l}function tt(s){let i,r;return i=new Rt({props:{scroll:s[0].scroll.bind(s[0])}}),{c(){Fe(i.$$.fragment)},l(l){je(i.$$.fragment,l)},m(l,d){Ue(i,l,d),r=!0},p(l,d){const h={};d&1&&(h.scroll=l[0].scroll.bind(l[0])),i.$set(h)},i(l){r||(se(i.$$.fragment,l),r=!0)},o(l){ae(i.$$.fragment,l),r=!1},d(l){qe(i,l)}}}function st(s){let i,r;const l=[s[4],{pageLoaded:s[0].pageLoaded},{scroll:s[0].scroll.bind(s[0])},{active:s[0].selectedIndex===s[6]}];let d={};for(let h=0;h<l.length;h+=1)d=ct(d,l[h]);return i=new Gt({props:d}),{c(){Fe(i.$$.fragment)},l(h){je(i.$$.fragment,h)},m(h,m){Ue(i,h,m),r=!0},p(h,m){const I=m&1?Dt(l,[m&0&&Lt(h[4]),m&1&&{pageLoaded:h[0].pageLoaded},m&1&&{scroll:h[0].scroll.bind(h[0])},m&1&&{active:h[0].selectedIndex===h[6]}]):{};i.$set(I)},i(h){r||(se(i.$$.fragment,h),r=!0)},o(h){ae(i.$$.fragment,h),r=!1},d(h){qe(i,h)}}}function Zt(s){let i,r,l,d,h,m,I,y=s[3]>956&&tt(s),b=Pe($e),w=[];for(let C=0;C<b.length;C+=1)w[C]=st(et(s,b,C));const F=C=>ae(w[C],1,1,()=>{w[C]=null});return{c(){i=P("meta"),r=Q(),l=P("div"),d=P("div"),y&&y.c(),h=Q(),m=P("section");for(let C=0;C<w.length;C+=1)w[C].c();this.h()},l(C){const u=ft("svelte-18b41j6",document.head);i=X(u,"META",{name:!0,content:!0}),u.forEach(L),r=K(C),l=X(C,"DIV",{class:!0,style:!0});var _=j(l);d=X(_,"DIV",{style:!0,class:!0});var D=j(d);y&&y.l(D),h=K(D),m=X(D,"SECTION",{id:!0,class:!0,style:!0});var z=j(m);for(let T=0;T<w.length;T+=1)w[T].l(z);z.forEach(L),D.forEach(L),_.forEach(L),this.h()},h(){document.title="Work",k(i,"name","description"),k(i,"content","Alex Figliolia's Portfolio"),k(m,"id","slides"),k(m,"class","work"),A(m,"height",s[1]),A(d,"height",s[1]),A(d,"width",s[2]),k(d,"class","svelte-1u6ou66"),k(l,"class","work-wrapper svelte-1u6ou66"),A(l,"height",s[1]),A(l,"width",s[2])},m(C,u){M(document.head,i),le(C,r,u),le(C,l,u),M(l,d),y&&y.m(d,null),M(d,h),M(d,m);for(let _=0;_<w.length;_+=1)w[_]&&w[_].m(m,null);I=!0},p(C,[u]){if(C[3]>956?y?(y.p(C,u),u&8&&se(y,1)):(y=tt(C),y.c(),se(y,1),y.m(d,h)):y&&(Ve(),ae(y,1,1,()=>{y=null}),xe()),u&1){b=Pe($e);let _;for(_=0;_<b.length;_+=1){const D=et(C,b,_);w[_]?(w[_].p(D,u),se(w[_],1)):(w[_]=st(D),w[_].c(),se(w[_],1),w[_].m(m,null))}for(Ve(),_=b.length;_<w.length;_+=1)F(_);xe()}(!I||u&2)&&A(m,"height",C[1]),(!I||u&2)&&A(d,"height",C[1]),(!I||u&4)&&A(d,"width",C[2]),(!I||u&2)&&A(l,"height",C[1]),(!I||u&4)&&A(l,"width",C[2])},i(C){if(!I){se(y);for(let u=0;u<b.length;u+=1)se(w[u]);I=!0}},o(C){ae(y),w=w.filter(Boolean);for(let u=0;u<w.length;u+=1)ae(w[u]);I=!1},d(C){C&&(L(r),L(l)),L(i),y&&y.d(),nt(w,C)}}}function Jt(s,i,r){let l,d,h;_e(s,rt,I=>r(1,l=I)),_e(s,at,I=>r(2,d=I)),_e(s,ke,I=>r(3,h=I));class m{static scroll({target:{dataset:{direction:y}}}){y==="right"?this.PW.next():this.PW.prev()}static createPW(){const y=Re(ke)>957;return new Ot("slides",{duration:750,direction:y?1:0,start:0,loop:!0,ease:"ease",transition:y?"flip3d":"flip3dY",mouse:!0,mousewheel:!0,arrowkey:!0,freeze:!0})}}return H(m,"PW"),H(m,"selectedIndex",0),H(m,"isDesktop",!1),H(m,"pageLoaded",!1),it(()=>{He.TaskQueue.registerTask(()=>{r(0,m.pageLoaded=!0,m),m.PW&&He.TaskQueue.deferTask(()=>{m.PW.freeze(!1)},750)});const I=ke.subscribe(y=>{m.PW&&m.PW.setTransition(y>957?"flip3d":"flip3dY")});return r(0,m.PW=m.createPW(),m),m.PW.on("after",()=>{r(0,m.selectedIndex=m.PW.current,m)}),()=>{I(),m.PW.destroy()}}),[m,l,d,h]}class ss extends Ae{constructor(i){super(),Ye(this,i,Jt,Zt,Xe,{})}}export{ss as default};