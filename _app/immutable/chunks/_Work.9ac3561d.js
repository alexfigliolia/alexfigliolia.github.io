var ot=Object.defineProperty;var ut=(s,i,r)=>i in s?ot(s,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[i]=r;var H=(s,i,r)=>(ut(s,typeof i!="symbol"?i+"":i,r),r);import{s as Pe,w as _e,i as ge,c as Se,r as Ve,n as fe,o as st,d as ke,g as Ae,x as ct}from"./scheduler.c607dd8c.js";import{S as Xe,i as je,g as P,s as Q,h as X,j as B,f as L,c as K,k,a as ue,y as E,B as $,m as Me,n as Ee,l as j,o as De,x as Ye,d as se,p as Re,t as oe,b as We,C as it,e as qe,r as xe,u as Be,v as Fe,w as Ue,D as ht}from"./index.0cf6920a.js";import{e as Le,h as nt,w as at,r as Ie,c as ft,g as dt,A as Ge}from"./AppState.2e476ff2.js";function pt(s,i){const r={},l={},d={$$scope:1};let c=s.length;for(;c--;){const m=s[c],I=i[c];if(I){for(const y in m)y in I||(l[y]=1);for(const y in I)d[y]||(r[y]=I[y],d[y]=1);s[c]=I}else for(const y in m)d[y]=1}for(const m in l)m in r||(r[m]=void 0);return r}function mt(s){return typeof s=="object"&&s!==null?s:{}}const gt="/_app/immutable/assets/up.f851e69b.svg",vt="/_app/immutable/assets/down.f1cc9e51.svg";function yt(s){let i,r,l,d,c,m,I,y,b,w,x,C;return{c(){i=P("div"),r=P("div"),l=Q(),d=P("button"),c=P("img"),I=Q(),y=P("button"),b=P("img"),this.h()},l(u){i=X(u,"DIV",{class:!0});var _=B(i);r=X(_,"DIV",{class:!0}),B(r).forEach(L),l=K(_),d=X(_,"BUTTON",{class:!0,"data-direction":!0});var D=B(d);c=X(D,"IMG",{src:!0,alt:!0,class:!0}),D.forEach(L),I=K(_),y=X(_,"BUTTON",{class:!0,"data-direction":!0});var N=B(y);b=X(N,"IMG",{src:!0,alt:!0,class:!0}),N.forEach(L),_.forEach(L),this.h()},h(){k(r,"class","bar svelte-dpts9z"),_e(c.src,m=gt)||k(c,"src",m),k(c,"alt","Go to previous"),k(c,"class","svelte-dpts9z"),k(d,"class","control svelte-dpts9z"),k(d,"data-direction","left"),_e(b.src,w=vt)||k(b,"src",w),k(b,"alt","Go to next"),k(b,"class","svelte-dpts9z"),k(y,"class","control svelte-dpts9z"),k(y,"data-direction","right"),k(i,"class","controls svelte-dpts9z")},m(u,_){ue(u,i,_),E(i,r),E(i,l),E(i,d),E(d,c),E(i,I),E(i,y),E(y,b),x||(C=[$(d,"click",function(){ge(s[0])&&s[0].apply(this,arguments)}),$(y,"click",function(){ge(s[0])&&s[0].apply(this,arguments)})],x=!0)},p(u,[_]){s=u},i:Se,o:Se,d(u){u&&L(i),x=!1,Ve(C)}}}function bt(s,i,r){let{scroll:l}=i;return s.$$set=d=>{"scroll"in d&&r(0,l=d.scroll)},[l]}class wt extends Xe{constructor(i){super(),je(this,i,bt,yt,Pe,{scroll:0})}}function _t(s){let i,r,l,d,c,m,I;return{c(){i=P("button"),r=P("h3"),l=Me(s[1]),this.h()},l(y){i=X(y,"BUTTON",{class:!0,style:!0,"data-page":!0,"data-url":!0});var b=B(i);r=X(b,"H3",{class:!0});var w=B(r);l=Ee(w,s[1]),w.forEach(L),b.forEach(L),this.h()},h(){k(r,"class","svelte-zagwik"),k(i,"class",d=fe(s[3])+" svelte-zagwik"),j(i,"box-shadow",s[8]),j(i,"transition-duration",s[6]),j(i,"transform","rotateX("+s[4]+"deg) rotateY("+s[5]+"deg) skew(-5deg) scale("+s[7]+")"),k(i,"data-page","Work"),k(i,"data-url",c=s[0]||null)},m(y,b){ue(y,i,b),E(i,r),E(r,l),m||(I=[$(i,"click",function(){ge(s[2])&&s[2].apply(this,arguments)}),$(i,"mouseenter",s[9].mouseEnter.bind(s[9])),$(i,"mousemove",s[9].mouseMove.bind(s[9])),$(i,"mouseleave",s[9].mouseLeave.bind(s[9])),$(i,"touchstart",s[9].touchStart.bind(s[9])),$(i,"touchend",s[9].mouseLeave.bind(s[9])),$(i,"touchmove",s[9].touchMove.bind(s[9]))],m=!0)},p(y,[b]){s=y,b&2&&De(l,s[1]),b&8&&d!==(d=fe(s[3])+" svelte-zagwik")&&k(i,"class",d),b&256&&j(i,"box-shadow",s[8]),b&64&&j(i,"transition-duration",s[6]),b&176&&j(i,"transform","rotateX("+s[4]+"deg) rotateY("+s[5]+"deg) skew(-5deg) scale("+s[7]+")"),b&1&&c!==(c=s[0]||null)&&k(i,"data-url",c)},i:Se,o:Se,d(y){y&&L(i),m=!1,Ve(I)}}}let kt=!1;function It(s,i,r){let{url:l=""}=i,{text:d=""}=i,{active:c=!1}=i,{func:m}=i,I="three-dee-button",y=0,b=0,w="0.5s",x=1,C="none",u=null;st(()=>()=>{u&&clearTimeout(u)});class _{static cacheTargetData(N){if(!this.left||!this.height||!this.width){const{left:T,top:q}=N.getBoundingClientRect(),{offsetWidth:ee,offsetHeight:ve}=N;this.left=T,this.top=q,this.height=ve,this.width=ee,this.mathX=this.left+this.width/2,this.mathY=this.top+this.height/2}}static getRotations({x:N,y:T}){const q=(this.mathY-T)/1.75;return{rotX:q>0?q+4:q,rotY:(this.mathX-N)/-10}}static setFrame(N,T){r(4,y=N.rotX),r(5,b=N.rotY),r(6,w=`${T}s`),r(7,x=1.1),r(8,C=`0 14px 28px rgba(0,0,0,0.5), ${N.rotY*-1.85}px ${N.rotX}px 10px rgba(0,0,0,0.44)`)}static mouseEnter({clientX:N,clientY:T,target:q}){this.cacheTargetData(q),this.setFrame(this.getRotations({y:T,x:N}),.5)}static touchStart({target:N,touches:T}){this.cacheTargetData(N),this.setFrame(this.getRotations({y:T[0].clientY,x:T[0].clientX}),.5)}static mouseMove({clientX:N,clientY:T}){this.setFrame(this.getRotations({y:T,x:N}),0)}static touchMove({touches:N}){this.setFrame(this.getRotations({y:N[0].clientY,x:N[0].clientX}),0)}static mouseLeave(){r(4,y=0),r(5,b=0),r(7,x=1),r(6,w="0.5s"),r(8,C="none")}}return H(_,"left",0),H(_,"top",0),H(_,"height",0),H(_,"width",0),H(_,"mathX",0),H(_,"mathY",0),s.$$set=D=>{"url"in D&&r(0,l=D.url),"text"in D&&r(1,d=D.text),"active"in D&&r(10,c=D.active),"func"in D&&r(2,m=D.func)},s.$$.update=()=>{s.$$.dirty&1024&&c&&!kt&&(r(3,I="three-dee-button active"),u=setTimeout(()=>{r(3,I="three-dee-button active reset-delays")},1500)),s.$$.dirty&1024&&(c||r(3,I="three-dee-button"))},[l,d,m,I,y,b,w,x,C,_,c]}class Tt extends Xe{constructor(i){super(),je(this,i,It,_t,Pe,{url:0,text:1,active:10,func:2})}}const Ct="/_app/immutable/assets/left.242e47bd.svg",Nt="/_app/immutable/assets/right.15f0a0e3.svg";function He(s,i,r){const l=s.slice();return l[13]=i[r],l[15]=r,l}function Oe(s){let i,r="   ";return{c(){i=P("div"),i.textContent=r,this.h()},l(l){i=X(l,"DIV",{class:!0,"data-svelte-h":!0}),Ye(i)!=="svelte-1gxyfja"&&(i.textContent=r),this.h()},h(){k(i,"class","svelte-1tlbsw0")},m(l,d){ue(l,i,d)},d(l){l&&L(i)}}}function Ze(s){let i,r=s[13]+"",l;return{c(){i=P("div"),l=Me(r),this.h()},l(d){i=X(d,"DIV",{style:!0,class:!0});var c=B(i);l=Ee(c,r),c.forEach(L),this.h()},h(){j(i,"transition-delay",.3+s[15]/20+"s"),k(i,"class","svelte-1tlbsw0")},m(d,c){ue(d,i,c),E(i,l)},p(d,c){c&4&&r!==(r=d[13]+"")&&De(l,r)},d(d){d&&L(i)}}}function Je(s){let i,r,l=s[13]===" "&&Oe(),d=s[13]!==" "&&Ze(s);return{c(){l&&l.c(),i=Q(),d&&d.c(),r=qe()},l(c){l&&l.l(c),i=K(c),d&&d.l(c),r=qe()},m(c,m){l&&l.m(c,m),ue(c,i,m),d&&d.m(c,m),ue(c,r,m)},p(c,m){c[13]===" "?l||(l=Oe(),l.c(),l.m(i.parentNode,i)):l&&(l.d(1),l=null),c[13]!==" "?d?d.p(c,m):(d=Ze(c),d.c(),d.m(r.parentNode,r)):d&&(d.d(1),d=null)},d(c){c&&(L(i),L(r)),l&&l.d(c),d&&d.d(c)}}}function Qe(s){let i,r;return i=new Tt({props:{url:s[4],text:"VISIT",active:s[3]&&s[5],func:s[7].visit.bind(s[7])}}),{c(){xe(i.$$.fragment)},l(l){Be(i.$$.fragment,l)},m(l,d){Fe(i,l,d),r=!0},p(l,d){const c={};d&16&&(c.url=l[4]),d&40&&(c.active=l[3]&&l[5]),d&128&&(c.func=l[7].visit.bind(l[7])),i.$set(c)},i(l){r||(se(i.$$.fragment,l),r=!0)},o(l){oe(i.$$.fragment,l),r=!1},d(l){Ue(i,l)}}}function zt(s){let i,r,l,d,c,m,I,y,b,w,x,C,u,_=" More Info",D,N,T,q,ee,ve=" Back",de,pe,ye,G,te,O,Te,me,z,ie,ne,ae,be,W,re,ce,he=Le(s[2].split("")),F=[];for(let V=0;V<he.length;V+=1)F[V]=Je(He(s,he,V));let S=!!s[4]&&Qe(s);return{c(){i=P("div"),r=P("div"),l=P("img"),c=Q(),m=P("div"),I=P("h2");for(let V=0;V<F.length;V+=1)F[V].c();y=Q(),b=P("div"),w=P("p"),x=Me(s[0]),C=Q(),u=P("button"),u.textContent=_,D=Q(),N=P("p"),T=Me(s[1]),q=Q(),ee=P("button"),ee.textContent=ve,ye=Q(),G=P("div"),te=P("button"),O=P("img"),me=Q(),S&&S.c(),z=Q(),ie=P("button"),ne=P("img"),this.h()},l(V){i=X(V,"DIV",{class:!0,style:!0});var R=B(i);r=X(R,"DIV",{class:!0,style:!0});var A=B(r);l=X(A,"IMG",{src:!0,alt:!0,class:!0}),c=K(A),m=X(A,"DIV",{class:!0});var Z=B(m);I=X(Z,"H2",{class:!0});var Ne=B(I);for(let a=0;a<F.length;a+=1)F[a].l(Ne);Ne.forEach(L),y=K(Z),b=X(Z,"DIV",{class:!0});var we=B(b);w=X(we,"P",{class:!0});var e=B(w);x=Ee(e,s[0]),C=K(e),u=X(e,"BUTTON",{class:!0,"data-svelte-h":!0}),Ye(u)!=="svelte-x5zkyu"&&(u.textContent=_),e.forEach(L),D=K(we),N=X(we,"P",{class:!0});var t=B(N);T=Ee(t,s[1]),q=K(t),ee=X(t,"BUTTON",{class:!0,"data-svelte-h":!0}),Ye(ee)!=="svelte-yezwg4"&&(ee.textContent=ve),t.forEach(L),we.forEach(L),ye=K(Z),G=X(Z,"DIV",{class:!0});var o=B(G);te=X(o,"BUTTON",{class:!0,"data-direction":!0});var n=B(te);O=X(n,"IMG",{alt:!0,style:!0,src:!0,class:!0}),n.forEach(L),me=K(o),S&&S.l(o),z=K(o),ie=X(o,"BUTTON",{class:!0,"data-direction":!0});var p=B(ie);ne=X(p,"IMG",{alt:!0,style:!0,src:!0,class:!0}),p.forEach(L),o.forEach(L),Z.forEach(L),A.forEach(L),R.forEach(L),this.h()},h(){_e(l.src,d=s[7].img)||k(l,"src",d),k(l,"alt",s[2]),k(l,"class","svelte-1tlbsw0"),k(I,"class","svelte-1tlbsw0"),k(u,"class","svelte-1tlbsw0"),k(w,"class","svelte-1tlbsw0"),k(ee,"class","svelte-1tlbsw0"),k(N,"class",de=fe(s[10]<957?"text-switch":"")+" svelte-1tlbsw0"),k(b,"class",pe=fe(s[7].infoClasses)+" svelte-1tlbsw0"),k(O,"alt","View previous project"),j(O,"margin-left","0%"),j(O,"margin-right","10%"),_e(O.src,Te=Ct)||k(O,"src",Te),k(O,"class","svelte-1tlbsw0"),k(te,"class","scroller svelte-1tlbsw0"),k(te,"data-direction","left"),k(ne,"alt","View next project"),j(ne,"margin-left","10%"),j(ne,"margin-right","0%"),_e(ne.src,ae=Nt)||k(ne,"src",ae),k(ne,"class","svelte-1tlbsw0"),k(ie,"class","scroller svelte-1tlbsw0"),k(ie,"data-direction","right"),k(G,"class","slide-buttons svelte-1tlbsw0"),k(m,"class","svelte-1tlbsw0"),k(r,"class","center-stuff svelte-1tlbsw0"),j(r,"height",s[8]),j(r,"width",s[9]),k(i,"class",be=fe(s[3]&&s[5]?"project is-selected":"project")+" svelte-1tlbsw0"),j(i,"height",s[8]),j(i,"width",s[9])},m(V,R){ue(V,i,R),E(i,r),E(r,l),E(r,c),E(r,m),E(m,I);for(let A=0;A<F.length;A+=1)F[A]&&F[A].m(I,null);E(m,y),E(m,b),E(b,w),E(w,x),E(w,C),E(w,u),E(b,D),E(b,N),E(N,T),E(N,q),E(N,ee),E(m,ye),E(m,G),E(G,te),E(te,O),E(G,me),S&&S.m(G,null),E(G,z),E(G,ie),E(ie,ne),W=!0,re||(ce=[$(u,"click",function(){ge(s[7].switchText.bind(s[7]))&&s[7].switchText.bind(s[7]).apply(this,arguments)}),$(ee,"click",function(){ge(s[7].switchText.bind(s[7]))&&s[7].switchText.bind(s[7]).apply(this,arguments)}),$(te,"click",function(){ge(s[6])&&s[6].apply(this,arguments)}),$(ie,"click",function(){ge(s[6])&&s[6].apply(this,arguments)})],re=!0)},p(V,[R]){if(s=V,(!W||R&128&&!_e(l.src,d=s[7].img))&&k(l,"src",d),(!W||R&4)&&k(l,"alt",s[2]),R&4){he=Le(s[2].split(""));let A;for(A=0;A<he.length;A+=1){const Z=He(s,he,A);F[A]?F[A].p(Z,R):(F[A]=Je(Z),F[A].c(),F[A].m(I,null))}for(;A<F.length;A+=1)F[A].d(1);F.length=he.length}(!W||R&1)&&De(x,s[0]),(!W||R&2)&&De(T,s[1]),(!W||R&1024&&de!==(de=fe(s[10]<957?"text-switch":"")+" svelte-1tlbsw0"))&&k(N,"class",de),(!W||R&128&&pe!==(pe=fe(s[7].infoClasses)+" svelte-1tlbsw0"))&&k(b,"class",pe),s[4]?S?(S.p(s,R),R&16&&se(S,1)):(S=Qe(s),S.c(),se(S,1),S.m(G,z)):S&&(Re(),oe(S,1,1,()=>{S=null}),We()),(!W||R&256)&&j(r,"height",s[8]),(!W||R&512)&&j(r,"width",s[9]),(!W||R&40&&be!==(be=fe(s[3]&&s[5]?"project is-selected":"project")+" svelte-1tlbsw0"))&&k(i,"class",be),(!W||R&256)&&j(i,"height",s[8]),(!W||R&512)&&j(i,"width",s[9])},i(V){W||(se(S),W=!0)},o(V){oe(S),W=!1},d(V){V&&L(i),it(F,V),S&&S.d(),re=!1,Ve(ce)}}}function St(s,i,r){let l,d,c;ke(s,nt,T=>r(8,l=T)),ke(s,at,T=>r(9,d=T)),ke(s,Ie,T=>r(10,c=T));let{p1:m}=i,{p2:I}=i,{name:y}=i,{imgSmall:b}=i,{imgLarge:w}=i,{active:x}=i,{url:C=""}=i,{pageLoaded:u}=i,{scroll:_}=i;const N=class N{static visit(q){q.target&&window.open(q.target.dataset.url,"_blank")}static switchText(){N.infoClasses==="info"?r(7,N.infoClasses="info change-info",N):r(7,N.infoClasses="info",N)}};H(N,"preloaded",!1),H(N,"infoClasses","info"),H(N,"img",Ae(Ie)>=670?w:b);let D=N;return s.$$set=T=>{"p1"in T&&r(0,m=T.p1),"p2"in T&&r(1,I=T.p2),"name"in T&&r(2,y=T.name),"imgSmall"in T&&r(11,b=T.imgSmall),"imgLarge"in T&&r(12,w=T.imgLarge),"active"in T&&r(3,x=T.active),"url"in T&&r(4,C=T.url),"pageLoaded"in T&&r(5,u=T.pageLoaded),"scroll"in T&&r(6,_=T.scroll)},s.$$.update=()=>{s.$$.dirty&6144&&r(7,D.img=Ae(Ie)>=670?w:b,D)},[m,I,y,x,C,u,_,D,l,d,c,b,w]}class Mt extends Xe{constructor(i){super(),je(this,i,St,zt,Pe,{p1:0,p2:1,name:2,imgSmall:11,imgLarge:12,active:3,url:4,pageLoaded:5,scroll:6})}}const Et="/_app/immutable/assets/atl-small.5eb5fb15.jpg",Dt="/_app/immutable/assets/atl-large.cf71ccb7.jpg",Lt="/_app/immutable/assets/carta-large.d3de102a.jpg",Pt="/_app/immutable/assets/carta-small.0e33b788.jpg",Xt="/_app/immutable/assets/wordClouds-small.a65f65d9.png",jt="/_app/immutable/assets/wordClouds.98a70945.png",At="/_app/immutable/assets/skedge-small.37a79bb4.jpg",Yt="/_app/immutable/assets/skedge-desktop2.a64509bb.jpg",Rt="/_app/immutable/assets/react-small.5d6b29c6.jpg",Wt="/_app/immutable/assets/react-desktop2.d5f52010.jpg",Vt="/_app/immutable/assets/sv-small.3deaf13a.jpg",xt="/_app/immutable/assets/sv-large.c9c1d335.jpg",Bt="/_app/immutable/assets/gnocchi-small.ca1fb471.jpg",Ft="/_app/immutable/assets/gnocchi.8244eefb.jpg",Ut="/_app/immutable/assets/republic-small.ad4bfc60.jpg",qt="/_app/immutable/assets/republic-large.d926a8b0.jpg",Ke=[{name:"Atlassian",p1:"At Atlassian, I worked as a full-stack engineer speer heading several initiatives for improving Confluence performance and developer experience",p2:"I built tools designed to automate dependency removal, analyze JavaScript delivery to the browser, improve performance, automate redundant tasks, and more",url:"https://www.atlassian.com/software/confluence",imgSmall:Et,imgLarge:Dt},{name:"Carta",p1:"At Carta Healthcare, I worked as a lead frontend engineer building tools for improving patient-care through AI and automation",p2:"As a team, we built as a suite of tools for improving the quality of data collection, purchasing and inventory, and staff scheduling",url:"https://www.carta.healthcare",imgSmall:Pt,imgLarge:Lt},{name:"Word Clouds",p1:"Word Clouds is a crossword puzzle game for all iOS and Android devices. Train your brain and vocabulary as you play through thousands of puzzles!",p2:"Words Clouds was built with React Native, a serverless backend using Google Cloud, and Node.js for generating crossword puzzles.",url:"https://itunes.apple.com/us/app/word-clouds/id1435511292?mt=8",imgSmall:Xt,imgLarge:jt},{name:"Skedge",p1:"Welcome to Skedge, an easy to use mobile and desktop app for small business owners and managers. Skedge allows you to manage your team's schedules in real time.",p2:"Your employees are notified of new shifts and schedule changes with their own mobile app. Skedge was developed with Meteor, Node, React, Electron, and Cordova.",imgSmall:At,imgLarge:Yt},{name:"React",p1:"Welcome to REACT property management software. REACT will handle your maintenace, income, and expenses while creating accounting statements for you.",p2:"With a seperate apps for managers and owners, communication and issue tracking is instant. It has built-in real time chat for an easier means of communication.",imgSmall:Rt,imgLarge:Wt},{name:"Piper Chat",p1:"Piper Chat is a parody application based on the popular HBO television show Silicon Valley. It is a fully functional text, voice and video chat that is built for iOS, Android, and all modern browsers",p2:"Under the hood is JavaScript front to back. Core technologies include web sockets, WebRTC, MongoDB and views built with React/React Native.",imgSmall:Vt,imgLarge:xt},{name:"E-Commerce",p1:"After seeing some e-commerce interactions on Dribble, I tried to recreate some with a simple ecommerce site of my own.",p2:"On mobile, the app is performant and fun to use. It has a React front end and a backend using Node.js, Meteor, and Moltin.",imgSmall:Bt,imgLarge:Ft},{name:"Eat Better",p1:"For as long as I can remember Yelp has been a reliable tool for deciding where I'll go for a meal. 'Eat Better' utilizes their api in conjunction with a fun to use UI to help you find a place to eat.",p2:"I created this app to up my game when designing in the browser. All animations are done with CSS3 and vanilla javascript. It has a React front end with an Express backend.",imgSmall:Ut,imgLarge:qt}];var rt={exports:{}};(function(s,i){(function(r,l,d){if(typeof window>"u")return;var c="2.3.2",m=0,I=r.requestAnimationFrame||r.webkitRequestAnimationFrame||r.mozRequestAnimationFrame||r.msRequestAnimationFrame||function(e){var t=+new Date,o=Math.max(1e3/60,1e3/60-(t-m));return m=t+o,setTimeout(e,o)},y=r.cancelAnimationFrame||r.webkitCancelAnimationFrame||r.webkitCancelRequestAnimationFrame||r.mozCancelRequestAnimationFrame||r.msCancelRequestAnimationFrame||clearTimeout,b=r.document,w=b.createElement("div").style,x=function(){for(var e="-webkit- -moz- -o- -ms-".split(" "),t;t=e.shift();)if(W(t+"transform")in w)return t;return""}(),C=re("opacity"),u=re("transform"),_=re("perspective"),D=re("transform-style"),N=re("transform-origin"),T=re("backface-visibility"),q=D&&function(){return w[D]="preserve-3d",w[D]=="preserve-3d"}(),ee=Object.prototype.toString,ve=[].slice,de={},pe={},ye={click:4,mousewheel:5,dommousescroll:5,keydown:6},G={2:"touch",3:"pen",4:"mouse",pen:"pen"},te=[],O=[];(function(){var e={},t={start:1,down:1,move:2,end:3,up:3,cancel:3};return S("mouse touch pointer MSPointer-".split(" "),function(o){var n=/pointer/i.test(o)?"pointer":o;e[n]=e[n]||{},G[n]=n,S(t,function(p,a){var h=W(o+p);e[n][h]=a,pe[h.toLowerCase()]=n,ye[h.toLowerCase()]=a,a==1?te.push(h):O.push(h)})}),e})();var Te={touch:{},pointer:{},mouse:{}},me={linear:function(e,t,o,n){return o*e/n+t},ease:function(e,t,o,n){return-o*((e=e/n-1)*e*e*e-1)+t},"ease-in":function(e,t,o,n){return o*(e/=n)*e*e+t},"ease-out":function(e,t,o,n){return o*((e=e/n-1)*e*e+1)+t},"ease-in-out":function(e,t,o,n){return(e/=n/2)<1?o/2*e*e*e+t:o/2*((e-=2)*e*e+2)+t},bounce:function(e,t,o,n){return(e/=n)<1/2.75?o*(7.5625*e*e)+t:e<2/2.75?o*(7.5625*(e-=1.5/2.75)*e+.75)+t:e<2.5/2.75?o*(7.5625*(e-=2.25/2.75)*e+.9375)+t:o*(7.5625*(e-=2.625/2.75)*e+.984375)+t}},z={fade:function(e,t,o,n){C?(e.style.opacity=1-Math.abs(t),o&&(o.style.opacity=Math.abs(t))):(e.style.filter="alpha(opacity="+(1-Math.abs(t))*100+")",o&&(o.style.filter="alpha(opacity="+Math.abs(t)*100+")"))}},ie=!1;try{var ne=Object.defineProperty({},"passive",{get:function(){ie=!0}});window.addEventListener("testPassive",null,ne)}catch{}S("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e){de["[object "+e+"]"]=e.toLowerCase()}),S("X Y ".split(" "),function(e){var t={X:"left",Y:"top"},o=_?" translateZ(0)":"";z["scroll"+e]=function(n,p,a,h){var f=e||["X","Y"][this.direction];u?n.style[u]="translate"+f+"("+p*100+"%)"+o:n.style[t[f]]=p*100+"%",a&&(u?a.style[u]="translate"+f+"("+h*100+"%)"+o:a.style[t[f]]=h*100+"%")},z["scroll3d"+e]=function(n,p,a,h){var f=e||["X","Y"][this.direction],v=p<0?-1:1,g=Math.abs(p),M;_?(g<.05?(M=g*1200,p=0,h=v*-1):g<.95?(M=60,p=(p-.05*v)/.9,h=(h+.05*v)/.9):(M=(1-g)*1200,p=v,h=0),n.parentNode.style[u]="perspective(1000px) rotateX("+M+"deg)",n.style[u]="translate"+f+"("+p*100+"%)",a&&(a.style[u]="translate"+f+"("+h*100+"%)")):z["scroll"+e].apply(this,arguments)},z["slide"+e]=function(n,p,a,h){z["slideCoverReverse"+e].apply(this,arguments)},z["flow"+e]=function(n,p,a,h){z["flowCoverIn"+e].apply(this,arguments)},z["slice"+e]=function(){var n=function(a,h){var f=b.createElement("div");f.style.cssText="position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;",f.appendChild(a),h.appendChild(f)},p=function(a,h,f,v){S(f,function(g){g.parentNode!=v&&(a!=g&&h!=g?g.parentNode.style.display="none":g.parentNode.style.display="block")})};return function(a,h,f,v){var g=e||["X","Y"][this.direction],M=g=="X"?"width":"height",Y=this.container[W("client-"+M)],U=h==0||v==0;a.style[M]=U?"100%":Y+"px",a.parentNode==this.container&&n(a,this.container),a.parentNode.style.zIndex=h>0?0:1,a.parentNode.style[M]=(Math.min(h,0)+1)*100+"%",f&&(f.style[M]=U?"100%":Y+"px",f.parentNode==this.container&&n(f,this.container),f.parentNode.style.zIndex=h>0?1:0,f.parentNode.style[M]=(Math.min(v,0)+1)*100+"%"),p(a,f,this.pages,this.container)}}(),z["flip"+e]=function(n,p,a,h){var f=e||["X","Y"][1-this.direction],v=f=="X"?-1:1;_?(n.style[T]="hidden",n.style[u]="perspective(1000px) rotate"+f+"("+p*180*v+"deg)"+o,a&&(a.style[T]="hidden",a.style[u]="perspective(1000px) rotate"+f+"("+h*180*v+"deg)"+o)):z["scroll"+e].apply(this,arguments)},z["flip3d"+e]=function(){var n;return function(p,a,h,f){var v=e||["X","Y"][1-this.direction],g=v=="X"?-1:1,M=g*(a<0?1:-1),Y=p["offset"+(v=="X"?"Height":"Width")]/2;q?(n||(n=!0,p.parentNode.parentNode.style[_]="1000px",p.parentNode.style[D]="preserve-3d"),p.parentNode.style[u]="translateZ(-"+Y+"px) rotate"+v+"("+a*90*g+"deg)",p.style[u]="rotate"+v+"(0) translateZ("+Y+"px)",h&&(h.style[u]="rotate"+v+"("+M*90+"deg) translateZ("+Y+"px)")):z["scroll"+e].apply(this,arguments)}}(),z["flipClock"+e]=function(){var n=function(a,h,f,v){var g=a.parentNode,M=f=="X"?"height":"width",Y=f=="X"?"top":"left",U=["50%",(v?0:100)+"%"][f=="X"?"slice":"reverse"]().join(" ");return(!g||g==h)&&(g=b.createElement("div"),g.style.cssText="position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;display:none;",g.style[N]=U,g.style[T]="hidden",g.appendChild(a),h.appendChild(g)),g.style[M]="50%",g.style[Y]=v*100+"%",a.style[M]="200%",a.style[Y]=-v*200+"%",g},p=function(a,h,f,v){S(f,function(g){g.parentNode!=v&&(a!=g&&h!=g?g.parentNode.style.display=g._clone.parentNode.style.display="none":g.parentNode.style.display=g._clone.parentNode.style.display="block")})};return function(a,h,f,v){var g=e||["X","Y"][1-this.direction];this.pages[this.current]==a;var M=+(Math.abs(h)<.5),Y=g=="X"?1:-1,U,J;_?(n(a,this.container,g,0),n(a._clone||(a._clone=a.cloneNode(!0)),this.container,g,.5),U=J=-h*180*Y,h>0?J=0:U=0,a.parentNode.style.zIndex=a._clone.parentNode.style.zIndex=M,a.parentNode.style[u]="perspective(1000px) rotate"+g+"("+U+"deg)",a._clone.parentNode.style[u]="perspective(1000px) rotate"+g+"("+J+"deg)",f&&(n(f,this.container,g,0),n(f._clone||(f._clone=f.cloneNode(!0)),this.container,g,.5),U=J=-v*180*Y,h>0?U=0:J=0,f.parentNode.style.zIndex=f._clone.parentNode.style.zIndex=1-M,f.parentNode.style[u]="perspective(1000px) rotate"+g+"("+U+"deg)",f._clone.parentNode.style[u]="perspective(1000px) rotate"+g+"("+J+"deg)"),p(a,f,this.pages,this.container),(h==0||v==0)&&(a=this.pages[this.current],a.style.height=a.style.width=a.parentNode.style.height=a.parentNode.style.width="100%",a.style.top=a.style.left=a.parentNode.style.top=a.parentNode.style.left=0,a.parentNode.style.zIndex=2)):z["scroll"+e].apply(this,arguments)}}(),z["flipPaper"+e]=function(){var n;return function(p,a,h,f){var v=e||["X","Y"][this.direction],g=v=="X"?"width":"height",M=Math.abs(a)*100;if(!n){n=b.createElement("div"),n.style.cssText="position:absolute;z-index:2;top:0;left:0;height:0;width:0;background:no-repeat #fff;";try{n.style.backgroundImage=x+"linear-gradient("+(v=="X"?"right":"bottom")+", #aaa 0,#fff 20px)"}catch{}this.container.appendChild(n)}z["slice"+e].apply(this,arguments),n.style.display=a==0||f==0?"none":"block",n.style.width=n.style.height="100%",n.style[g]=(a<0?M:100-M)+"%",n.style[t[v]]=(a<0?100-2*M:2*M-100)+"%"}}(),z["zoom"+e]=function(n,p,a,h){var f=+(Math.abs(p)<.5);u?(n.style[u]="scale"+e+"("+Math.abs(1-Math.abs(p)*2)+")"+o,n.style.zIndex=f,a&&(a.style[u]="scale"+e+"("+Math.abs(1-Math.abs(p)*2)+")"+o,a.style.zIndex=1-f)):z["scroll"+e].apply(this,arguments)},z["bomb"+e]=function(n,p,a,h){var f=+(Math.abs(p)<.5),v=Math.abs(1-Math.abs(p)*2);u?(n.style[u]="scale"+e+"("+(2-v)+")"+o,n.style.opacity=f?v:0,n.style.zIndex=f,a&&(a.style[u]="scale"+e+"("+(2-v)+")"+o,a.style.opacity=f?0:v,a.style.zIndex=1-f)):z["scroll"+e].apply(this,arguments)},z["skew"+e]=function(n,p,a,h){var f=+(Math.abs(p)<.5);u?(n.style[u]="skew"+e+"("+p*180+"deg)"+o,n.style.zIndex=f,a&&(a.style[u]="skew"+e+"("+h*180+"deg)"+o,a.style.zIndex=1-f)):z["scroll"+e].apply(this,arguments)},S(" Reverse In Out".split(" "),function(n){z["scrollCover"+n+e]=function(p,a,h,f){var v=e||["X","Y"][this.direction],g=+(n=="In"||!n&&a<0||n=="Reverse"&&a>0),M=100,Y=100;g?M=20:Y=20,u?p.style[u]="translate"+v+"("+a*M+"%)"+o:p.style[t[v]]=a*M+"%",p.style.zIndex=1-g,h&&(u?h.style[u]="translate"+v+"("+f*Y+"%)"+o:h.style[t[v]]=f*Y+"%",h.style.zIndex=g)},z["slideCover"+n+e]=function(p,a,h,f){var v=e||["X","Y"][this.direction],g=+(n=="In"||!n&&a<0||n=="Reverse"&&a>0);u?(p.style[u]="translate"+v+"("+a*(100-g*100)+"%) scale("+((1-Math.abs(g&&a))*.2+.8)+")"+o,p.style.zIndex=1-g,h&&(h.style[u]="translate"+v+"("+f*g*100+"%) scale("+((1-Math.abs(g?0:f))*.2+.8)+")"+o,h.style.zIndex=g)):z["scrollCover"+n+e].apply(this,arguments)},z["flowCover"+n+e]=function(p,a,h,f){var v=e||["X","Y"][this.direction],g=+(n=="In"||!n&&a<0||n=="Reverse"&&a>0);u?(p.style[u]="translate"+v+"("+a*(100-g*50)+"%) scale("+((1-Math.abs(a))*.5+.5)+")"+o,p.style.zIndex=1-g,h&&(h.style[u]="translate"+v+"("+f*(50+g*50)+"%) scale("+((1-Math.abs(f))*.5+.5)+")"+o,h.style.zIndex=g)):z["scrollCover"+n+e].apply(this,arguments)},z["flipCover"+n+e]=function(p,a,h,f){var v=e||["X","Y"][1-this.direction],g=+(n=="In"||!n&&a<0||n=="Reverse"&&a>0);_?(g?a=0:f=0,p.style[u]="perspective(1000px) rotate"+v+"("+a*-90+"deg)"+o,p.style.zIndex=1-g,h&&(h.style[u]="perspective(1000px) rotate"+v+"("+f*-90+"deg)"+o,h.style.zIndex=g)):z["scroll"+e].apply(this,arguments)},z["skewCover"+n+e]=function(p,a,h,f){var v=+(n=="In"||!n&&a<0||n=="Reverse"&&a>0);u?(v?a=0:f=0,p.style[u]="skew"+e+"("+a*90+"deg)"+o,p.style.zIndex=1-v,h&&(h.style[u]="skew"+e+"("+f*90+"deg)"+o,h.style.zIndex=v)):z["scroll"+e].apply(this,arguments)},z["zoomCover"+n+e]=function(p,a,h,f){var v=+(n=="In"||!n&&a<0||n=="Reverse"&&a>0);u?(v?a=0:f=0,p.style[u]="scale"+e+"("+(1-Math.abs(a))+")"+o,p.style.zIndex=1-v,h&&(h.style[u]="scale"+e+"("+(1-Math.abs(f))+")"+o,h.style.zIndex=v)):z["scroll"+e].apply(this,arguments)},z["bombCover"+n+e]=function(p,a,h,f){var v=+(n=="In"||!n&&a<0||n=="Reverse"&&a>0);u?(v?a=0:f=0,p.style[u]="scale"+e+"("+(1+Math.abs(a))+")"+o,p.style.zIndex=1-v,h&&(h.style[u]="scale"+e+"("+(1+Math.abs(f))+")"+o,h.style.zIndex=v),z.fade.apply(this,arguments)):z["scroll"+e].apply(this,arguments)}})});function ae(e){return e==null?e+"":typeof e=="object"||typeof e=="function"?de[ee.call(e)]||"object":typeof e}function be(e){var t=ae(e);return!!e&&t!="function"&&t!="string"&&(e.length===0||e.length&&(e.nodeType==1||e.length-1 in e))}function W(e){return(e+"").replace(/^-ms-/,"ms-").replace(/-([a-z]|[0-9])/ig,function(t,o){return(o+"").toUpperCase()})}function re(e){var t=W(e),o=W(x+t);return t in w&&t||o in w&&o||""}function ce(e){return ae(e)=="function"}function he(e){var t=0,o;if(ae(e.length)=="number")t=e.length;else if("keys"in Object)t=Object.keys(e).length;else for(o in e)e.hasOwnProperty(o)&&t++;return t}function F(e,t){return"item"in e?e.item(t):(function(){var o=0,n;for(n in this)if(o++==t)return this[n]}).call(e,t)}function S(e,t){if(be(e)){if(ae(e.forEach)=="function")return e.forEach(t);for(var o=0,n=e.length,p;o<n;o++)p=e[o],ae(p)!="undefined"&&t(p,o,e)}else{var a;for(a in e)t(a,e[a],e)}}function V(e){var t=[];return S(e.children||e.childNodes,function(o){o.nodeType==1&&t.push(o)}),t}function R(e,t){var o=r.getComputedStyle&&r.getComputedStyle(e,null)||e.currentStyle||e.style;return o[t]}function A(e,t,o){if(ae(t)=="object")return S(t,function(n,p){A(e,n,p)});S(t.split(" "),function(n){e.addEventListener?e.addEventListener(n,o,ie?{passive:!1}:!1):e.attachEvent?e.attachEvent("on"+n,o):e["on"+n]=o})}function Z(e,t,o){if(ae(t)=="object")return S(t,function(n,p){Z(e,n,p)});S(t.split(" "),function(n){e.removeEventListener?e.removeEventListener(n,o,!1):e.detachEvent?e.detachEvent("on"+n,o):e["on"+n]=null})}function Ne(){var e;r.getSelection?(e=getSelection(),"empty"in e?e.empty():"removeAllRanges"in e&&e.removeAllRanges()):b.selection.empty()}function we(e){var t={},o=e.which,n=e.button,p,a;if(S("wheelDelta detail which keyCode".split(" "),function(f){t[f]=e[f]}),t.oldEvent=e,t.type=e.type.toLowerCase(),t.eventType=pe[t.type]||t.type,t.eventCode=ye[t.type]||0,t.pointerType=G[e.pointerType]||e.pointerType||t.eventType,t.target=e.target||e.srcElement||b.documentElement,t.target.nodeType===3&&(t.target=t.target.parentNode),t.preventDefault=function(){e.preventDefault&&e.preventDefault(),t.returnValue=e.returnValue=!1},p=Te[t.eventType]){switch(t.eventType){case"mouse":case"pointer":var h=e.pointerId||0;t.eventCode==3?delete p[h]:p[h]=e;break;case"touch":Te[t.eventType]=p=e.touches;break}(a=F(p,0))&&(t.clientX=a.clientX,t.clientY=a.clientY),t.button=o<4?Math.max(0,o-1):n&4&&1||n&2,t.length=he(p)}return t}l.prototype={version:c,constructor:l,latestTime:0,init:function(e){var t=this,o=this.handler=function(n){!t.frozen&&t.handleEvent(n)};this.events={},this.duration=isNaN(parseInt(e.duration))?600:parseInt(e.duration),this.direction=parseInt(e.direction)==0?0:1,this.current=parseInt(e.start)||0,this.loop=!!e.loop,this.mouse=e.mouse==null?!0:!!e.mouse,this.mousewheel=!!e.mousewheel,this.interval=parseInt(e.interval)||5e3,this.playing=!!e.autoplay,this.arrowkey=!!e.arrowkey,this.frozen=!!e.freeze,this.pages=V(this.container),this.length=this.pages.length,this.pageData=[],A(this.container,te.join(" ")+" click"+(this.mousewheel?" mousewheel DOMMouseScroll":""),o),A(b,O.join(" ")+(this.arrowkey?" keydown":""),o),S(this.pages,function(n){t.pageData.push({percent:0,cssText:n.style.cssText||""}),t.initStyle(n)}),this.pages[this.current].style.display="block",this.on({before:function(){clearTimeout(this.playTimer)},dragStart:function(){clearTimeout(this.playTimer),Ne()},after:this.firePlay,update:null}).firePlay(),this.comment=document.createComment(" Powered by pageSwitch v"+this.version+"  https://github.com/qiqiboy/pageSwitch "),this.container.appendChild(this.comment),this.setEase(e.ease),this.setTransition(e.transition)},initStyle:function(e){var t=e.style,o;return S("position:absolute;top:0;left:0;width:100%;height:100%;display:none".split(";"),function(n){o=n.split(":"),t[o[0]]=o[1]}),e},setEase:function(e){return this.ease=ce(e)?e:me[e]||me.ease,this},addEase:function(e,t){return ce(t)&&(me[e]=t),this},setTransition:function(e){return this.events.update.splice(0,1,ce(e)?e:z[e]||z.slide),this},addTransition:function(e,t){return ce(t)&&(z[e]=t),this},isStatic:function(){return!this.timer&&!this.drag},on:function(e,t){var o=this;return ae(e)=="object"?S(e,function(n,p){o.on(n,p)}):(this.events[e]||(this.events[e]=[]),this.events[e].push(t)),this},fire:function(e){var t=this,o=ve.call(arguments,1);return S(this.events[e]||[],function(n){ce(n)&&n.apply(t,o)}),this},freeze:function(e){return this.frozen=e==null?!0:!!e,this},slide:function(e){var t=this;this.direction;var o=this.duration,n=+new Date,p=this.ease,a=this.current,h=Math.min(this.length-1,Math.max(0,this.fixIndex(e))),f=this.pages[a],v=this.getPercent(),g=this.fixIndex(h==a?a+(v>0?-1:1):h),M=this.pages[g],Y=e>a?-1:1,U=f;y(this.timer),h==a?(Y=0,U=M):M.style.display=="none"&&(v=0),this.fixBlock(a,g),this.fire("before",a,h),this.current=h,o*=Math.abs(Y-v),this.latestTime=n+o,J();function J(){var Ce=Math.min(o,+new Date-n),ze=o?p(Ce,0,1,o):1,le=(Y-v)*ze+v;t.fixUpdate(le,a,g),Ce==o?(U&&(U.style.display="none"),delete t.timer,t.fire("after",h,a)):t.timer=I(J)}return this},prev:function(){return this.slide(this.current-1)},next:function(){return this.slide(this.current+1)},play:function(){return this.playing=!0,this.firePlay()},firePlay:function(){var e=this;return this.playing&&(this.playTimer=setTimeout(function(){e.slide((e.current+1)%(e.loop?1/0:e.length))},this.interval)),this},pause:function(){return this.playing=!1,clearTimeout(this.playTimer),this},fixIndex:function(e){return this.length>1&&this.loop?(this.length+e)%this.length:e},fixBlock:function(e,t){return S(this.pages,function(o,n){e!=n&&t!=n?o.style.display="none":o.style.display="block"}),this},fixUpdate:function(e,t,o){var n=this.pageData,p=this.pages[t],a=this.pages[o],h;return n[t].percent=e,a&&(h=n[o].percent=e>0?e-1:1+e),this.fire("update",p,e,a,h)},getPercent:function(e){var t=this.pageData[e??this.current];return t&&(t.percent||0)},getOffsetParent:function(){var e=R(this.container,"position");return e&&e!="static"?this.container:this.container.offsetParent||b.body},handleEvent:function(e){var t=we(e),o=t.button<1&&t.length<2&&(!this.pointerType||this.pointerType==t.eventType)&&(this.mouse||t.pointerType!="mouse");switch(t.eventCode){case 2:if(o&&this.rect){var n=this.current,p=this.direction,a=[t.clientX,t.clientY],h=this.rect,f=a[p]-h[p];this.pages[n];var v=this.offsetParent[p?"clientHeight":"clientWidth"],g,M;this.drag==null&&h.toString()!=a.toString()&&(this.drag=Math.abs(f)>=Math.abs(a[1-p]-h[1-p]),this.drag&&this.fire("dragStart",t)),this.drag&&(M=this.percent+(v&&f/v),this.pages[g=this.fixIndex(n+(M>0?-1:1))]||(M/=Math.abs(f)/v+2),this.fixBlock(n,g),this.fire("dragMove",t),this.fixUpdate(M,n,g),this._offset=f,t.preventDefault())}this.drag&&this.pointerType!=="touch"&&t.eventType==="touch"&&t.preventDefault();break;case 1:case 3:if(o){var Y=this,U=this.current,M=this.getPercent(),J,f,Ce,le;t.length&&(t.eventCode==1||this.drag)?(le=t.target.nodeName.toLowerCase(),clearTimeout(this.eventTimer),this.pointerType||(this.pointerType=t.eventType),this.timer&&(y(this.timer),delete this.timer),this.rect=[t.clientX,t.clientY],this.percent=M,this.time=+new Date,this.offsetParent=this.getOffsetParent(),t.eventType!="touch"&&(le=="a"||le=="img")&&t.preventDefault()):(Ce=this.time)&&(f=this._offset,J=this.drag,S("rect drag time percent _offset offsetParent".split(" "),function(lt){delete Y[lt]}),J&&((+new Date-Ce<500&&Math.abs(f)>20||Math.abs(M)>.5)&&(U+=f>0?-1:1),this.fire("dragEnd",t),t.preventDefault()),M?this.slide(U):J&&this.firePlay(),this.eventTimer=setTimeout(function(){delete Y.pointerType},400))}break;case 4:this.timer&&t.preventDefault();break;case 5:if(t.preventDefault(),this.isStatic()&&+new Date-this.latestTime>Math.max(1e3-this.duration,0)){var ze=t.wheelDelta||-t.detail;Math.abs(ze)>=3&&this[ze>0?"prev":"next"]()}break;case 6:var le=t.target.nodeName.toLowerCase();if(this.isStatic()&&le!="input"&&le!="textarea"&&le!="select")switch(t.keyCode||t.which){case 33:case 37:case 38:this.prev();break;case 32:case 34:case 39:case 40:this.next();break;case 35:this.slide(this.length-1);break;case 36:this.slide(0);break}break}},destroy:function(){var e=this.pageData;return Z(this.container,te.join(" ")+" click"+(this.mousewheel?" mousewheel DOMMouseScroll":""),this.handler),Z(b,O.join(" ")+(this.arrowkey?" keydown":""),this.handler),S(this.pages,function(t,o){t.style.cssText=e[o].cssText}),this.container.removeChild(this.comment),this.length=0,this.pause()},append:function(e,t){return t==null&&(t=this.pages.length),this.pageData.splice(t,0,{percent:0,cssText:e.style.cssText}),this.pages.splice(t,0,e),this.container.appendChild(this.initStyle(e)),this.length=this.pages.length,t<=this.current&&this.current++,this},prepend:function(e){return this.append(e,0)},insertBefore:function(e,t){return this.append(e,t-1)},insertAfter:function(e,t){return this.append(e,t+1)},remove:function(e){return this.container.removeChild(this.pages[e]),this.pages.splice(e,1),this.pageData.splice(e,1),this.length=this.pages.length,e<=this.current&&this.slide(this.current=Math.max(0,this.current-1)),this}},S("Ease Transition".split(" "),function(e){l["add"+e]=l.prototype["add"+e]}),s.exports=l})(typeof window<"u"?window:ft,function(r,l){this.container=typeof r=="string"?document.getElementById(r):r,this.init(l||{})})})(rt);var Gt=rt.exports;const Ht=dt(Gt);function $e(s,i,r){const l=s.slice();return l[4]=i[r],l[6]=r,l}function et(s){let i,r;return i=new wt({props:{scroll:s[0].scroll.bind(s[0])}}),{c(){xe(i.$$.fragment)},l(l){Be(i.$$.fragment,l)},m(l,d){Fe(i,l,d),r=!0},p(l,d){const c={};d&1&&(c.scroll=l[0].scroll.bind(l[0])),i.$set(c)},i(l){r||(se(i.$$.fragment,l),r=!0)},o(l){oe(i.$$.fragment,l),r=!1},d(l){Ue(i,l)}}}function tt(s){let i,r;const l=[s[4],{pageLoaded:s[0].pageLoaded},{scroll:s[0].scroll.bind(s[0])},{active:s[0].selectedIndex===s[6]}];let d={};for(let c=0;c<l.length;c+=1)d=ct(d,l[c]);return i=new Mt({props:d}),{c(){xe(i.$$.fragment)},l(c){Be(i.$$.fragment,c)},m(c,m){Fe(i,c,m),r=!0},p(c,m){const I=m&1?pt(l,[m&0&&mt(c[4]),m&1&&{pageLoaded:c[0].pageLoaded},m&1&&{scroll:c[0].scroll.bind(c[0])},m&1&&{active:c[0].selectedIndex===c[6]}]):{};i.$set(I)},i(c){r||(se(i.$$.fragment,c),r=!0)},o(c){oe(i.$$.fragment,c),r=!1},d(c){Ue(i,c)}}}function Ot(s){let i,r,l,d,c,m,I,y=s[3]>956&&et(s),b=Le(Ke),w=[];for(let C=0;C<b.length;C+=1)w[C]=tt($e(s,b,C));const x=C=>oe(w[C],1,1,()=>{w[C]=null});return{c(){i=P("meta"),r=Q(),l=P("div"),d=P("div"),y&&y.c(),c=Q(),m=P("section");for(let C=0;C<w.length;C+=1)w[C].c();this.h()},l(C){const u=ht("svelte-18b41j6",document.head);i=X(u,"META",{name:!0,content:!0}),u.forEach(L),r=K(C),l=X(C,"DIV",{class:!0,style:!0});var _=B(l);d=X(_,"DIV",{style:!0,class:!0});var D=B(d);y&&y.l(D),c=K(D),m=X(D,"SECTION",{id:!0,class:!0,style:!0});var N=B(m);for(let T=0;T<w.length;T+=1)w[T].l(N);N.forEach(L),D.forEach(L),_.forEach(L),this.h()},h(){document.title="Work",k(i,"name","description"),k(i,"content","Alex Figliolia's Portfolio"),k(m,"id","slides"),k(m,"class","work"),j(m,"height",s[1]),j(d,"height",s[1]),j(d,"width",s[2]),k(d,"class","svelte-1u6ou66"),k(l,"class","work-wrapper svelte-1u6ou66"),j(l,"height",s[1]),j(l,"width",s[2])},m(C,u){E(document.head,i),ue(C,r,u),ue(C,l,u),E(l,d),y&&y.m(d,null),E(d,c),E(d,m);for(let _=0;_<w.length;_+=1)w[_]&&w[_].m(m,null);I=!0},p(C,[u]){if(C[3]>956?y?(y.p(C,u),u&8&&se(y,1)):(y=et(C),y.c(),se(y,1),y.m(d,c)):y&&(Re(),oe(y,1,1,()=>{y=null}),We()),u&1){b=Le(Ke);let _;for(_=0;_<b.length;_+=1){const D=$e(C,b,_);w[_]?(w[_].p(D,u),se(w[_],1)):(w[_]=tt(D),w[_].c(),se(w[_],1),w[_].m(m,null))}for(Re(),_=b.length;_<w.length;_+=1)x(_);We()}(!I||u&2)&&j(m,"height",C[1]),(!I||u&2)&&j(d,"height",C[1]),(!I||u&4)&&j(d,"width",C[2]),(!I||u&2)&&j(l,"height",C[1]),(!I||u&4)&&j(l,"width",C[2])},i(C){if(!I){se(y);for(let u=0;u<b.length;u+=1)se(w[u]);I=!0}},o(C){oe(y),w=w.filter(Boolean);for(let u=0;u<w.length;u+=1)oe(w[u]);I=!1},d(C){C&&(L(r),L(l)),L(i),y&&y.d(),it(w,C)}}}function Zt(s,i,r){let l,d,c;ke(s,nt,I=>r(1,l=I)),ke(s,at,I=>r(2,d=I)),ke(s,Ie,I=>r(3,c=I));class m{static scroll({target:{dataset:{direction:y}}}){y==="right"?this.PW.next():this.PW.prev()}static createPW(){const y=Ae(Ie)>957;return new Ht("slides",{duration:750,direction:y?1:0,start:0,loop:!0,ease:"ease",transition:y?"flip3d":"flip3dY",mouse:!0,mousewheel:!0,arrowkey:!0,freeze:!0})}}return H(m,"PW"),H(m,"selectedIndex",0),H(m,"isDesktop",!1),H(m,"pageLoaded",!1),st(()=>{Ge.TaskQueue.registerTask(()=>{r(0,m.pageLoaded=!0,m),m.PW&&Ge.TaskQueue.deferTask(()=>{m.PW.freeze(!1)},750)});const I=Ie.subscribe(y=>{m.PW&&m.PW.setTransition(y>957?"flip3d":"flip3dY")});return r(0,m.PW=m.createPW(),m),m.PW.on("after",()=>{r(0,m.selectedIndex=m.PW.current,m)}),()=>{I(),m.PW.destroy()}}),[m,l,d,c]}class es extends Xe{constructor(i){super(),je(this,i,Zt,Ot,Pe,{})}}export{es as default};
