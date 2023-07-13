var at=Object.defineProperty;var rt=(s,i,a)=>i in s?at(s,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[i]=a;var G=(s,i,a)=>(rt(s,typeof i!="symbol"?i+"":i,a),a);import{s as Le,w as _e,i as ge,c as Ne,r as Re,n as fe,o as et,d as ze,x as lt}from"./scheduler.c607dd8c.js";import{S as Xe,i as We,g as X,s as Q,h as W,j as B,f as L,c as K,k,a as ce,y as S,B as $,m as Me,n as Ee,l as P,o as Se,x as Pe,d as se,p as je,t as oe,b as Ae,C as tt,e as Ue,r as xe,u as Ve,v as Be,w as Fe,D as ot}from"./index.0cf6920a.js";import{e as De,h as st,w as Ye,A as ct}from"./AppState.2b05501d.js";import{c as ut,g as ht}from"./_commonjsHelpers.725317a4.js";function ft(s,i){const a={},l={},d={$$scope:1};let c=s.length;for(;c--;){const v=s[c],N=i[c];if(N){for(const y in v)y in N||(l[y]=1);for(const y in N)d[y]||(a[y]=N[y],d[y]=1);s[c]=N}else for(const y in v)d[y]=1}for(const v in l)v in a||(a[v]=void 0);return a}function dt(s){return typeof s=="object"&&s!==null?s:{}}const pt="/_app/immutable/assets/up.f851e69b.svg",mt="/_app/immutable/assets/down.f1cc9e51.svg";function gt(s){let i,a,l,d,c,v,N,y,b,w,V,I;return{c(){i=X("div"),a=X("div"),l=Q(),d=X("button"),c=X("img"),N=Q(),y=X("button"),b=X("img"),this.h()},l(u){i=W(u,"DIV",{class:!0});var _=B(i);a=W(_,"DIV",{class:!0}),B(a).forEach(L),l=K(_),d=W(_,"BUTTON",{class:!0,"data-direction":!0});var D=B(d);c=W(D,"IMG",{src:!0,alt:!0,class:!0}),D.forEach(L),N=K(_),y=W(_,"BUTTON",{class:!0,"data-direction":!0});var T=B(y);b=W(T,"IMG",{src:!0,alt:!0,class:!0}),T.forEach(L),_.forEach(L),this.h()},h(){k(a,"class","bar svelte-dpts9z"),_e(c.src,v=pt)||k(c,"src",v),k(c,"alt","Go to previous"),k(c,"class","svelte-dpts9z"),k(d,"class","control svelte-dpts9z"),k(d,"data-direction","left"),_e(b.src,w=mt)||k(b,"src",w),k(b,"alt","Go to next"),k(b,"class","svelte-dpts9z"),k(y,"class","control svelte-dpts9z"),k(y,"data-direction","right"),k(i,"class","controls svelte-dpts9z")},m(u,_){ce(u,i,_),S(i,a),S(i,l),S(i,d),S(d,c),S(i,N),S(i,y),S(y,b),V||(I=[$(d,"click",function(){ge(s[0])&&s[0].apply(this,arguments)}),$(y,"click",function(){ge(s[0])&&s[0].apply(this,arguments)})],V=!0)},p(u,[_]){s=u},i:Ne,o:Ne,d(u){u&&L(i),V=!1,Re(I)}}}function vt(s,i,a){let{scroll:l}=i;return s.$$set=d=>{"scroll"in d&&a(0,l=d.scroll)},[l]}class yt extends Xe{constructor(i){super(),We(this,i,vt,gt,Le,{scroll:0})}}function bt(s){let i,a,l,d,c,v,N;return{c(){i=X("button"),a=X("h3"),l=Me(s[1]),this.h()},l(y){i=W(y,"BUTTON",{class:!0,style:!0,"data-page":!0,"data-url":!0});var b=B(i);a=W(b,"H3",{class:!0});var w=B(a);l=Ee(w,s[1]),w.forEach(L),b.forEach(L),this.h()},h(){k(a,"class","svelte-s6xedi"),k(i,"class",d=fe(s[3])+" svelte-s6xedi"),P(i,"box-shadow",s[8]),P(i,"transition-duration",s[6]),P(i,"transform","rotateX("+s[4]+"deg) rotateY("+s[5]+"deg) skew(-5deg) scale("+s[7]+")"),k(i,"data-page","Work"),k(i,"data-url",c=s[0]||null)},m(y,b){ce(y,i,b),S(i,a),S(a,l),v||(N=[$(i,"click",function(){ge(s[2])&&s[2].apply(this,arguments)}),$(i,"mouseenter",s[9].mouseEnter.bind(s[9])),$(i,"mousemove",s[9].mouseMove.bind(s[9])),$(i,"mouseleave",s[9].mouseLeave.bind(s[9])),$(i,"touchstart",s[9].touchStart.bind(s[9])),$(i,"touchend",s[9].mouseLeave.bind(s[9])),$(i,"touchmove",s[9].touchMove.bind(s[9]))],v=!0)},p(y,[b]){s=y,b&2&&Se(l,s[1]),b&8&&d!==(d=fe(s[3])+" svelte-s6xedi")&&k(i,"class",d),b&256&&P(i,"box-shadow",s[8]),b&64&&P(i,"transition-duration",s[6]),b&176&&P(i,"transform","rotateX("+s[4]+"deg) rotateY("+s[5]+"deg) skew(-5deg) scale("+s[7]+")"),b&1&&c!==(c=s[0]||null)&&k(i,"data-url",c)},i:Ne,o:Ne,d(y){y&&L(i),v=!1,Re(N)}}}let wt=!1;function _t(s,i,a){let{url:l=""}=i,{text:d=""}=i,{active:c=!1}=i,{func:v}=i,N="three-dee-button",y=0,b=0,w="0.5s",V=1,I="none",u=null;et(()=>()=>{u&&clearTimeout(u)});class _{static cacheTargetData(T){if(!this.left||!this.height||!this.width){const{left:C,top:q}=T.getBoundingClientRect(),{offsetWidth:ee,offsetHeight:ve}=T;this.left=C,this.top=q,this.height=ve,this.width=ee,this.mathX=this.left+this.width/2,this.mathY=this.top+this.height/2}}static getRotations({x:T,y:C}){const q=(this.mathY-C)/1.75;return{rotX:q>0?q+4:q,rotY:(this.mathX-T)/-10}}static setFrame(T,C){a(4,y=T.rotX),a(5,b=T.rotY),a(6,w=`${C}s`),a(7,V=1.1),a(8,I=`0 14px 28px rgba(0,0,0,0.5), ${T.rotY*-1.85}px ${T.rotX}px 10px rgba(0,0,0,0.44)`)}static mouseEnter({clientX:T,clientY:C,target:q}){this.cacheTargetData(q),this.setFrame(this.getRotations({y:C,x:T}),.5)}static touchStart({target:T,touches:C}){this.cacheTargetData(T),this.setFrame(this.getRotations({y:C[0].clientY,x:C[0].clientX}),.5)}static mouseMove({clientX:T,clientY:C}){this.setFrame(this.getRotations({y:C,x:T}),0)}static touchMove({touches:T}){this.setFrame(this.getRotations({y:T[0].clientY,x:T[0].clientX}),0)}static mouseLeave(){a(4,y=0),a(5,b=0),a(7,V=1),a(6,w="0.5s"),a(8,I="none")}}return G(_,"left",0),G(_,"top",0),G(_,"height",0),G(_,"width",0),G(_,"mathX",0),G(_,"mathY",0),s.$$set=D=>{"url"in D&&a(0,l=D.url),"text"in D&&a(1,d=D.text),"active"in D&&a(10,c=D.active),"func"in D&&a(2,v=D.func)},s.$$.update=()=>{s.$$.dirty&1024&&c&&!wt&&(a(3,N="three-dee-button active"),u=setTimeout(()=>{a(3,N="three-dee-button active reset-delays")},1500)),s.$$.dirty&1024&&(c||a(3,N="three-dee-button"))},[l,d,v,N,y,b,w,V,I,_,c]}class kt extends Xe{constructor(i){super(),We(this,i,_t,bt,Le,{url:0,text:1,active:10,func:2})}}const It="/_app/immutable/assets/left.242e47bd.svg",Ct="/_app/immutable/assets/right.15f0a0e3.svg";function qe(s,i,a){const l=s.slice();return l[13]=i[a],l[15]=a,l}function Ge(s){let i,a="   ";return{c(){i=X("div"),i.textContent=a,this.h()},l(l){i=W(l,"DIV",{class:!0,"data-svelte-h":!0}),Pe(i)!=="svelte-1gxyfja"&&(i.textContent=a),this.h()},h(){k(i,"class","svelte-1sel1c6")},m(l,d){ce(l,i,d)},d(l){l&&L(i)}}}function He(s){let i,a=s[13]+"",l;return{c(){i=X("div"),l=Me(a),this.h()},l(d){i=W(d,"DIV",{style:!0,class:!0});var c=B(i);l=Ee(c,a),c.forEach(L),this.h()},h(){P(i,"transition-delay",.3+s[15]/20+"s"),k(i,"class","svelte-1sel1c6")},m(d,c){ce(d,i,c),S(i,l)},p(d,c){c&8&&a!==(a=d[13]+"")&&Se(l,a)},d(d){d&&L(i)}}}function Oe(s){let i,a,l=s[13]===" "&&Ge(),d=s[13]!==" "&&He(s);return{c(){l&&l.c(),i=Q(),d&&d.c(),a=Ue()},l(c){l&&l.l(c),i=K(c),d&&d.l(c),a=Ue()},m(c,v){l&&l.m(c,v),ce(c,i,v),d&&d.m(c,v),ce(c,a,v)},p(c,v){c[13]===" "?l||(l=Ge(),l.c(),l.m(i.parentNode,i)):l&&(l.d(1),l=null),c[13]!==" "?d?d.p(c,v):(d=He(c),d.c(),d.m(a.parentNode,a)):d&&(d.d(1),d=null)},d(c){c&&(L(i),L(a)),l&&l.d(c),d&&d.d(c)}}}function Ze(s){let i,a;return i=new kt({props:{url:s[2],text:"VISIT",active:s[4]&&s[6],func:s[8].visit.bind(s[8])}}),{c(){xe(i.$$.fragment)},l(l){Ve(i.$$.fragment,l)},m(l,d){Be(i,l,d),a=!0},p(l,d){const c={};d&4&&(c.url=l[2]),d&80&&(c.active=l[4]&&l[6]),d&256&&(c.func=l[8].visit.bind(l[8])),i.$set(c)},i(l){a||(se(i.$$.fragment,l),a=!0)},o(l){oe(i.$$.fragment,l),a=!1},d(l){Fe(i,l)}}}function Tt(s){let i,a,l,d,c,v,N,y,b,w,V,I,u,_=" More Info",D,T,C,q,ee,ve=" Back",de,pe,ye,H,te,O,ke,me,z,ie,ne,ae,be,R,re,ue,he=De(s[3].split("")),F=[];for(let x=0;x<he.length;x+=1)F[x]=Oe(qe(s,he,x));let M=!!s[2]&&Ze(s);return{c(){i=X("div"),a=X("div"),l=X("img"),c=Q(),v=X("div"),N=X("h2");for(let x=0;x<F.length;x+=1)F[x].c();y=Q(),b=X("div"),w=X("p"),V=Me(s[0]),I=Q(),u=X("button"),u.textContent=_,D=Q(),T=X("p"),C=Me(s[1]),q=Q(),ee=X("button"),ee.textContent=ve,ye=Q(),H=X("div"),te=X("button"),O=X("img"),me=Q(),M&&M.c(),z=Q(),ie=X("button"),ne=X("img"),this.h()},l(x){i=W(x,"DIV",{class:!0,style:!0});var Y=B(i);a=W(Y,"DIV",{class:!0,style:!0});var j=B(a);l=W(j,"IMG",{src:!0,alt:!0,class:!0}),c=K(j),v=W(j,"DIV",{class:!0});var Z=B(v);N=W(Z,"H2",{class:!0});var Ce=B(N);for(let r=0;r<F.length;r+=1)F[r].l(Ce);Ce.forEach(L),y=K(Z),b=W(Z,"DIV",{class:!0});var we=B(b);w=W(we,"P",{class:!0});var e=B(w);V=Ee(e,s[0]),I=K(e),u=W(e,"BUTTON",{class:!0,"data-svelte-h":!0}),Pe(u)!=="svelte-x5zkyu"&&(u.textContent=_),e.forEach(L),D=K(we),T=W(we,"P",{class:!0});var t=B(T);C=Ee(t,s[1]),q=K(t),ee=W(t,"BUTTON",{class:!0,"data-svelte-h":!0}),Pe(ee)!=="svelte-yezwg4"&&(ee.textContent=ve),t.forEach(L),we.forEach(L),ye=K(Z),H=W(Z,"DIV",{class:!0});var o=B(H);te=W(o,"BUTTON",{class:!0,"data-direction":!0});var n=B(te);O=W(n,"IMG",{alt:!0,style:!0,src:!0,class:!0}),n.forEach(L),me=K(o),M&&M.l(o),z=K(o),ie=W(o,"BUTTON",{class:!0,"data-direction":!0});var p=B(ie);ne=W(p,"IMG",{alt:!0,style:!0,src:!0,class:!0}),p.forEach(L),o.forEach(L),Z.forEach(L),j.forEach(L),Y.forEach(L),this.h()},h(){_e(l.src,d=s[8].img)||k(l,"src",d),k(l,"alt",s[3]),k(l,"class","svelte-1sel1c6"),k(N,"class","svelte-1sel1c6"),k(u,"class","svelte-1sel1c6"),k(w,"class","svelte-1sel1c6"),k(ee,"class","svelte-1sel1c6"),k(T,"class",de=fe(s[5]<957?"text-switch":"")+" svelte-1sel1c6"),k(b,"class",pe=fe(s[8].infoClasses)+" svelte-1sel1c6"),k(O,"alt","View previous project"),P(O,"margin-left","0%"),P(O,"margin-right","10%"),_e(O.src,ke=It)||k(O,"src",ke),k(O,"class","svelte-1sel1c6"),k(te,"class","scroller svelte-1sel1c6"),k(te,"data-direction","left"),k(ne,"alt","View next project"),P(ne,"margin-left","10%"),P(ne,"margin-right","0%"),_e(ne.src,ae=Ct)||k(ne,"src",ae),k(ne,"class","svelte-1sel1c6"),k(ie,"class","scroller svelte-1sel1c6"),k(ie,"data-direction","right"),k(H,"class","slide-buttons svelte-1sel1c6"),k(v,"class","svelte-1sel1c6"),k(a,"class","center-stuff svelte-1sel1c6"),P(a,"height",s[9]),P(a,"width",s[10]),k(i,"class",be=fe(s[4]&&s[6]?"project is-selected":"project")+" svelte-1sel1c6"),P(i,"height",s[9]),P(i,"width",s[10])},m(x,Y){ce(x,i,Y),S(i,a),S(a,l),S(a,c),S(a,v),S(v,N);for(let j=0;j<F.length;j+=1)F[j]&&F[j].m(N,null);S(v,y),S(v,b),S(b,w),S(w,V),S(w,I),S(w,u),S(b,D),S(b,T),S(T,C),S(T,q),S(T,ee),S(v,ye),S(v,H),S(H,te),S(te,O),S(H,me),M&&M.m(H,null),S(H,z),S(H,ie),S(ie,ne),R=!0,re||(ue=[$(u,"click",function(){ge(s[8].switchText.bind(s[8]))&&s[8].switchText.bind(s[8]).apply(this,arguments)}),$(ee,"click",function(){ge(s[8].switchText.bind(s[8]))&&s[8].switchText.bind(s[8]).apply(this,arguments)}),$(te,"click",function(){ge(s[7])&&s[7].apply(this,arguments)}),$(ie,"click",function(){ge(s[7])&&s[7].apply(this,arguments)})],re=!0)},p(x,[Y]){if(s=x,(!R||Y&256&&!_e(l.src,d=s[8].img))&&k(l,"src",d),(!R||Y&8)&&k(l,"alt",s[3]),Y&8){he=De(s[3].split(""));let j;for(j=0;j<he.length;j+=1){const Z=qe(s,he,j);F[j]?F[j].p(Z,Y):(F[j]=Oe(Z),F[j].c(),F[j].m(N,null))}for(;j<F.length;j+=1)F[j].d(1);F.length=he.length}(!R||Y&1)&&Se(V,s[0]),(!R||Y&2)&&Se(C,s[1]),(!R||Y&32&&de!==(de=fe(s[5]<957?"text-switch":"")+" svelte-1sel1c6"))&&k(T,"class",de),(!R||Y&256&&pe!==(pe=fe(s[8].infoClasses)+" svelte-1sel1c6"))&&k(b,"class",pe),s[2]?M?(M.p(s,Y),Y&4&&se(M,1)):(M=Ze(s),M.c(),se(M,1),M.m(H,z)):M&&(je(),oe(M,1,1,()=>{M=null}),Ae()),(!R||Y&512)&&P(a,"height",s[9]),(!R||Y&1024)&&P(a,"width",s[10]),(!R||Y&80&&be!==(be=fe(s[4]&&s[6]?"project is-selected":"project")+" svelte-1sel1c6"))&&k(i,"class",be),(!R||Y&512)&&P(i,"height",s[9]),(!R||Y&1024)&&P(i,"width",s[10])},i(x){R||(se(M),R=!0)},o(x){oe(M),R=!1},d(x){x&&L(i),tt(F,x),M&&M.d(),re=!1,Re(ue)}}}function Nt(s,i,a){let l,d;ze(s,st,C=>a(9,l=C)),ze(s,Ye,C=>a(10,d=C));let{p1:c}=i,{p2:v}=i,{url:N}=i,{name:y}=i,{imgSmall:b}=i,{imgLarge:w}=i,{active:V}=i,{rawWidth:I}=i,{pageLoaded:u}=i,{scroll:_}=i;const T=class T{static visit(q){q.target&&window.open(q.target.dataset.url,"_blank")}static switchText(){T.infoClasses==="info"?a(8,T.infoClasses="info change-info",T):a(8,T.infoClasses="info",T)}};G(T,"preloaded",!1),G(T,"infoClasses","info"),G(T,"img",I>=670?w:b);let D=T;return s.$$set=C=>{"p1"in C&&a(0,c=C.p1),"p2"in C&&a(1,v=C.p2),"url"in C&&a(2,N=C.url),"name"in C&&a(3,y=C.name),"imgSmall"in C&&a(11,b=C.imgSmall),"imgLarge"in C&&a(12,w=C.imgLarge),"active"in C&&a(4,V=C.active),"rawWidth"in C&&a(5,I=C.rawWidth),"pageLoaded"in C&&a(6,u=C.pageLoaded),"scroll"in C&&a(7,_=C.scroll)},s.$$.update=()=>{s.$$.dirty&6176&&a(8,D.img=I>=670?w:b,D)},[c,v,N,y,V,I,u,_,D,l,d,b,w]}class zt extends Xe{constructor(i){super(),We(this,i,Nt,Tt,Le,{p1:0,p2:1,url:2,name:3,imgSmall:11,imgLarge:12,active:4,rawWidth:5,pageLoaded:6,scroll:7})}}const Mt="/_app/immutable/assets/atl-small.5eb5fb15.jpg",Et="/_app/immutable/assets/atl-large.cf71ccb7.jpg",St="/_app/immutable/assets/carta-large.d3de102a.jpg",Dt="/_app/immutable/assets/carta-small.0e33b788.jpg",Lt="/_app/immutable/assets/wordClouds-small.a65f65d9.png",Xt="/_app/immutable/assets/wordClouds.98a70945.png",Wt="/_app/immutable/assets/skedge-small.37a79bb4.jpg",Pt="/_app/immutable/assets/skedge-desktop2.a64509bb.jpg",jt="/_app/immutable/assets/react-small.5d6b29c6.jpg",At="/_app/immutable/assets/react-desktop2.d5f52010.jpg",Yt="/_app/immutable/assets/sv-small.3deaf13a.jpg",Rt="/_app/immutable/assets/sv-large.c9c1d335.jpg",xt="/_app/immutable/assets/gnocchi-small.ca1fb471.jpg",Vt="/_app/immutable/assets/gnocchi.8244eefb.jpg",Bt="/_app/immutable/assets/republic-small.ad4bfc60.jpg",Ft="/_app/immutable/assets/republic-large.d926a8b0.jpg",Je=[{name:"Atlassian",p1:"At Atlassian, I worked as a full-stack developer speer heading several initiatives for improving Confluence performance and developer experience",p2:"I built tools designed to automate dependency removal, analyze JavaScript delivery to the browser, improve performance, automate redundant tasks, and more",url:"https://www.atlassian.com/software/confluence",imgSmall:Mt,imgLarge:Et},{name:"Carta",p1:"At Carta Healthcare, I worked as a lead full stack engineer building tools for improving patient-care through AI and automation",p2:"As a team, we built as a suite of tools for improving the quality of data collection, purchasing and inventory, and staff scheduling",url:"https://www.carta.healthcare",imgSmall:Dt,imgLarge:St},{name:"Word Clouds",p1:"Word Clouds is a crossword puzzle game for all iOS and Android devices. Train your brain and vocabulary as you play through thousands of puzzles!",p2:"Words Clouds was built with React Native, a serverless backend using Google Cloud, and Node.js for generating crossword puzzles.",url:"https://itunes.apple.com/us/app/word-clouds/id1435511292?mt=8",imgSmall:Lt,imgLarge:Xt},{name:"Skedge",p1:"Welcome to Skedge, an easy to use mobile and desktop app for small business owners and managers. Skedge allows you to manage your team's schedules in real time.",p2:"Your employees are notified of new shifts and schedule changes with their own mobile app. Skedge was developed with Meteor, Node, React, Electron, and Cordova.",imgSmall:Wt,imgLarge:Pt},{name:"React",p1:"Welcome to REACT property management software. REACT will handle your maintenace, income, and expenses while creating accounting statements for you.",p2:"With a seperate apps for managers and owners, communication and issue tracking is instant. It has built-in real time chat for an easier means of communication.",imgSmall:jt,imgLarge:At},{name:"Piper Chat",p1:"Piper Chat is a parody application based on the popular HBO television show Silicon Valley. It is a fully functional text, voice and video chat that is built for iOS, Android, and all modern browsers",p2:"Under the hood is JavaScript front to back. Core technologies include web sockets, WebRTC, MongoDB and views built with React/React Native.",imgSmall:Yt,imgLarge:Rt},{name:"E-Commerce",p1:"After seeing some e-commerce interactions on Dribble, I tried to recreate some with a simple ecommerce site of my own.",p2:"On mobile, the app is performant and fun to use. It has a React front end and a backend using Node.js, Meteor, and Moltin.",imgSmall:xt,imgLarge:Vt},{name:"Eat Better",p1:"For as long as I can remember Yelp has been a reliable tool for deciding where I'll go for a meal. 'Eat Better' utilizes their api in conjunction with a fun to use UI to help you find a place to eat.",p2:"I created this app to up my game when designing in the browser. All animations are done with CSS3 and vanilla javascript. It has a React front end with an Express backend.",imgSmall:Bt,imgLarge:Ft}];var it={exports:{}};(function(s,i){(function(a,l,d){if(typeof window>"u")return;var c="2.3.2",v=0,N=a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame||a.msRequestAnimationFrame||function(e){var t=+new Date,o=Math.max(1e3/60,1e3/60-(t-v));return v=t+o,setTimeout(e,o)},y=a.cancelAnimationFrame||a.webkitCancelAnimationFrame||a.webkitCancelRequestAnimationFrame||a.mozCancelRequestAnimationFrame||a.msCancelRequestAnimationFrame||clearTimeout,b=a.document,w=b.createElement("div").style,V=function(){for(var e="-webkit- -moz- -o- -ms-".split(" "),t;t=e.shift();)if(R(t+"transform")in w)return t;return""}(),I=re("opacity"),u=re("transform"),_=re("perspective"),D=re("transform-style"),T=re("transform-origin"),C=re("backface-visibility"),q=D&&function(){return w[D]="preserve-3d",w[D]=="preserve-3d"}(),ee=Object.prototype.toString,ve=[].slice,de={},pe={},ye={click:4,mousewheel:5,dommousescroll:5,keydown:6},H={2:"touch",3:"pen",4:"mouse",pen:"pen"},te=[],O=[];(function(){var e={},t={start:1,down:1,move:2,end:3,up:3,cancel:3};return M("mouse touch pointer MSPointer-".split(" "),function(o){var n=/pointer/i.test(o)?"pointer":o;e[n]=e[n]||{},H[n]=n,M(t,function(p,r){var h=R(o+p);e[n][h]=r,pe[h.toLowerCase()]=n,ye[h.toLowerCase()]=r,r==1?te.push(h):O.push(h)})}),e})();var ke={touch:{},pointer:{},mouse:{}},me={linear:function(e,t,o,n){return o*e/n+t},ease:function(e,t,o,n){return-o*((e=e/n-1)*e*e*e-1)+t},"ease-in":function(e,t,o,n){return o*(e/=n)*e*e+t},"ease-out":function(e,t,o,n){return o*((e=e/n-1)*e*e+1)+t},"ease-in-out":function(e,t,o,n){return(e/=n/2)<1?o/2*e*e*e+t:o/2*((e-=2)*e*e+2)+t},bounce:function(e,t,o,n){return(e/=n)<1/2.75?o*(7.5625*e*e)+t:e<2/2.75?o*(7.5625*(e-=1.5/2.75)*e+.75)+t:e<2.5/2.75?o*(7.5625*(e-=2.25/2.75)*e+.9375)+t:o*(7.5625*(e-=2.625/2.75)*e+.984375)+t}},z={fade:function(e,t,o,n){I?(e.style.opacity=1-Math.abs(t),o&&(o.style.opacity=Math.abs(t))):(e.style.filter="alpha(opacity="+(1-Math.abs(t))*100+")",o&&(o.style.filter="alpha(opacity="+Math.abs(t)*100+")"))}},ie=!1;try{var ne=Object.defineProperty({},"passive",{get:function(){ie=!0}});window.addEventListener("testPassive",null,ne)}catch{}M("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e){de["[object "+e+"]"]=e.toLowerCase()}),M("X Y ".split(" "),function(e){var t={X:"left",Y:"top"},o=_?" translateZ(0)":"";z["scroll"+e]=function(n,p,r,h){var f=e||["X","Y"][this.direction];u?n.style[u]="translate"+f+"("+p*100+"%)"+o:n.style[t[f]]=p*100+"%",r&&(u?r.style[u]="translate"+f+"("+h*100+"%)"+o:r.style[t[f]]=h*100+"%")},z["scroll3d"+e]=function(n,p,r,h){var f=e||["X","Y"][this.direction],g=p<0?-1:1,m=Math.abs(p),E;_?(m<.05?(E=m*1200,p=0,h=g*-1):m<.95?(E=60,p=(p-.05*g)/.9,h=(h+.05*g)/.9):(E=(1-m)*1200,p=g,h=0),n.parentNode.style[u]="perspective(1000px) rotateX("+E+"deg)",n.style[u]="translate"+f+"("+p*100+"%)",r&&(r.style[u]="translate"+f+"("+h*100+"%)")):z["scroll"+e].apply(this,arguments)},z["slide"+e]=function(n,p,r,h){z["slideCoverReverse"+e].apply(this,arguments)},z["flow"+e]=function(n,p,r,h){z["flowCoverIn"+e].apply(this,arguments)},z["slice"+e]=function(){var n=function(r,h){var f=b.createElement("div");f.style.cssText="position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;",f.appendChild(r),h.appendChild(f)},p=function(r,h,f,g){M(f,function(m){m.parentNode!=g&&(r!=m&&h!=m?m.parentNode.style.display="none":m.parentNode.style.display="block")})};return function(r,h,f,g){var m=e||["X","Y"][this.direction],E=m=="X"?"width":"height",A=this.container[R("client-"+E)],U=h==0||g==0;r.style[E]=U?"100%":A+"px",r.parentNode==this.container&&n(r,this.container),r.parentNode.style.zIndex=h>0?0:1,r.parentNode.style[E]=(Math.min(h,0)+1)*100+"%",f&&(f.style[E]=U?"100%":A+"px",f.parentNode==this.container&&n(f,this.container),f.parentNode.style.zIndex=h>0?1:0,f.parentNode.style[E]=(Math.min(g,0)+1)*100+"%"),p(r,f,this.pages,this.container)}}(),z["flip"+e]=function(n,p,r,h){var f=e||["X","Y"][1-this.direction],g=f=="X"?-1:1;_?(n.style[C]="hidden",n.style[u]="perspective(1000px) rotate"+f+"("+p*180*g+"deg)"+o,r&&(r.style[C]="hidden",r.style[u]="perspective(1000px) rotate"+f+"("+h*180*g+"deg)"+o)):z["scroll"+e].apply(this,arguments)},z["flip3d"+e]=function(){var n;return function(p,r,h,f){var g=e||["X","Y"][1-this.direction],m=g=="X"?-1:1,E=m*(r<0?1:-1),A=p["offset"+(g=="X"?"Height":"Width")]/2;q?(n||(n=!0,p.parentNode.parentNode.style[_]="1000px",p.parentNode.style[D]="preserve-3d"),p.parentNode.style[u]="translateZ(-"+A+"px) rotate"+g+"("+r*90*m+"deg)",p.style[u]="rotate"+g+"(0) translateZ("+A+"px)",h&&(h.style[u]="rotate"+g+"("+E*90+"deg) translateZ("+A+"px)")):z["scroll"+e].apply(this,arguments)}}(),z["flipClock"+e]=function(){var n=function(r,h,f,g){var m=r.parentNode,E=f=="X"?"height":"width",A=f=="X"?"top":"left",U=["50%",(g?0:100)+"%"][f=="X"?"slice":"reverse"]().join(" ");return(!m||m==h)&&(m=b.createElement("div"),m.style.cssText="position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;display:none;",m.style[T]=U,m.style[C]="hidden",m.appendChild(r),h.appendChild(m)),m.style[E]="50%",m.style[A]=g*100+"%",r.style[E]="200%",r.style[A]=-g*200+"%",m},p=function(r,h,f,g){M(f,function(m){m.parentNode!=g&&(r!=m&&h!=m?m.parentNode.style.display=m._clone.parentNode.style.display="none":m.parentNode.style.display=m._clone.parentNode.style.display="block")})};return function(r,h,f,g){var m=e||["X","Y"][1-this.direction];this.pages[this.current]==r;var E=+(Math.abs(h)<.5),A=m=="X"?1:-1,U,J;_?(n(r,this.container,m,0),n(r._clone||(r._clone=r.cloneNode(!0)),this.container,m,.5),U=J=-h*180*A,h>0?J=0:U=0,r.parentNode.style.zIndex=r._clone.parentNode.style.zIndex=E,r.parentNode.style[u]="perspective(1000px) rotate"+m+"("+U+"deg)",r._clone.parentNode.style[u]="perspective(1000px) rotate"+m+"("+J+"deg)",f&&(n(f,this.container,m,0),n(f._clone||(f._clone=f.cloneNode(!0)),this.container,m,.5),U=J=-g*180*A,h>0?U=0:J=0,f.parentNode.style.zIndex=f._clone.parentNode.style.zIndex=1-E,f.parentNode.style[u]="perspective(1000px) rotate"+m+"("+U+"deg)",f._clone.parentNode.style[u]="perspective(1000px) rotate"+m+"("+J+"deg)"),p(r,f,this.pages,this.container),(h==0||g==0)&&(r=this.pages[this.current],r.style.height=r.style.width=r.parentNode.style.height=r.parentNode.style.width="100%",r.style.top=r.style.left=r.parentNode.style.top=r.parentNode.style.left=0,r.parentNode.style.zIndex=2)):z["scroll"+e].apply(this,arguments)}}(),z["flipPaper"+e]=function(){var n;return function(p,r,h,f){var g=e||["X","Y"][this.direction],m=g=="X"?"width":"height",E=Math.abs(r)*100;if(!n){n=b.createElement("div"),n.style.cssText="position:absolute;z-index:2;top:0;left:0;height:0;width:0;background:no-repeat #fff;";try{n.style.backgroundImage=V+"linear-gradient("+(g=="X"?"right":"bottom")+", #aaa 0,#fff 20px)"}catch{}this.container.appendChild(n)}z["slice"+e].apply(this,arguments),n.style.display=r==0||f==0?"none":"block",n.style.width=n.style.height="100%",n.style[m]=(r<0?E:100-E)+"%",n.style[t[g]]=(r<0?100-2*E:2*E-100)+"%"}}(),z["zoom"+e]=function(n,p,r,h){var f=+(Math.abs(p)<.5);u?(n.style[u]="scale"+e+"("+Math.abs(1-Math.abs(p)*2)+")"+o,n.style.zIndex=f,r&&(r.style[u]="scale"+e+"("+Math.abs(1-Math.abs(p)*2)+")"+o,r.style.zIndex=1-f)):z["scroll"+e].apply(this,arguments)},z["bomb"+e]=function(n,p,r,h){var f=+(Math.abs(p)<.5),g=Math.abs(1-Math.abs(p)*2);u?(n.style[u]="scale"+e+"("+(2-g)+")"+o,n.style.opacity=f?g:0,n.style.zIndex=f,r&&(r.style[u]="scale"+e+"("+(2-g)+")"+o,r.style.opacity=f?0:g,r.style.zIndex=1-f)):z["scroll"+e].apply(this,arguments)},z["skew"+e]=function(n,p,r,h){var f=+(Math.abs(p)<.5);u?(n.style[u]="skew"+e+"("+p*180+"deg)"+o,n.style.zIndex=f,r&&(r.style[u]="skew"+e+"("+h*180+"deg)"+o,r.style.zIndex=1-f)):z["scroll"+e].apply(this,arguments)},M(" Reverse In Out".split(" "),function(n){z["scrollCover"+n+e]=function(p,r,h,f){var g=e||["X","Y"][this.direction],m=+(n=="In"||!n&&r<0||n=="Reverse"&&r>0),E=100,A=100;m?E=20:A=20,u?p.style[u]="translate"+g+"("+r*E+"%)"+o:p.style[t[g]]=r*E+"%",p.style.zIndex=1-m,h&&(u?h.style[u]="translate"+g+"("+f*A+"%)"+o:h.style[t[g]]=f*A+"%",h.style.zIndex=m)},z["slideCover"+n+e]=function(p,r,h,f){var g=e||["X","Y"][this.direction],m=+(n=="In"||!n&&r<0||n=="Reverse"&&r>0);u?(p.style[u]="translate"+g+"("+r*(100-m*100)+"%) scale("+((1-Math.abs(m&&r))*.2+.8)+")"+o,p.style.zIndex=1-m,h&&(h.style[u]="translate"+g+"("+f*m*100+"%) scale("+((1-Math.abs(m?0:f))*.2+.8)+")"+o,h.style.zIndex=m)):z["scrollCover"+n+e].apply(this,arguments)},z["flowCover"+n+e]=function(p,r,h,f){var g=e||["X","Y"][this.direction],m=+(n=="In"||!n&&r<0||n=="Reverse"&&r>0);u?(p.style[u]="translate"+g+"("+r*(100-m*50)+"%) scale("+((1-Math.abs(r))*.5+.5)+")"+o,p.style.zIndex=1-m,h&&(h.style[u]="translate"+g+"("+f*(50+m*50)+"%) scale("+((1-Math.abs(f))*.5+.5)+")"+o,h.style.zIndex=m)):z["scrollCover"+n+e].apply(this,arguments)},z["flipCover"+n+e]=function(p,r,h,f){var g=e||["X","Y"][1-this.direction],m=+(n=="In"||!n&&r<0||n=="Reverse"&&r>0);_?(m?r=0:f=0,p.style[u]="perspective(1000px) rotate"+g+"("+r*-90+"deg)"+o,p.style.zIndex=1-m,h&&(h.style[u]="perspective(1000px) rotate"+g+"("+f*-90+"deg)"+o,h.style.zIndex=m)):z["scroll"+e].apply(this,arguments)},z["skewCover"+n+e]=function(p,r,h,f){var g=+(n=="In"||!n&&r<0||n=="Reverse"&&r>0);u?(g?r=0:f=0,p.style[u]="skew"+e+"("+r*90+"deg)"+o,p.style.zIndex=1-g,h&&(h.style[u]="skew"+e+"("+f*90+"deg)"+o,h.style.zIndex=g)):z["scroll"+e].apply(this,arguments)},z["zoomCover"+n+e]=function(p,r,h,f){var g=+(n=="In"||!n&&r<0||n=="Reverse"&&r>0);u?(g?r=0:f=0,p.style[u]="scale"+e+"("+(1-Math.abs(r))+")"+o,p.style.zIndex=1-g,h&&(h.style[u]="scale"+e+"("+(1-Math.abs(f))+")"+o,h.style.zIndex=g)):z["scroll"+e].apply(this,arguments)},z["bombCover"+n+e]=function(p,r,h,f){var g=+(n=="In"||!n&&r<0||n=="Reverse"&&r>0);u?(g?r=0:f=0,p.style[u]="scale"+e+"("+(1+Math.abs(r))+")"+o,p.style.zIndex=1-g,h&&(h.style[u]="scale"+e+"("+(1+Math.abs(f))+")"+o,h.style.zIndex=g),z.fade.apply(this,arguments)):z["scroll"+e].apply(this,arguments)}})});function ae(e){return e==null?e+"":typeof e=="object"||typeof e=="function"?de[ee.call(e)]||"object":typeof e}function be(e){var t=ae(e);return!!e&&t!="function"&&t!="string"&&(e.length===0||e.length&&(e.nodeType==1||e.length-1 in e))}function R(e){return(e+"").replace(/^-ms-/,"ms-").replace(/-([a-z]|[0-9])/ig,function(t,o){return(o+"").toUpperCase()})}function re(e){var t=R(e),o=R(V+t);return t in w&&t||o in w&&o||""}function ue(e){return ae(e)=="function"}function he(e){var t=0,o;if(ae(e.length)=="number")t=e.length;else if("keys"in Object)t=Object.keys(e).length;else for(o in e)e.hasOwnProperty(o)&&t++;return t}function F(e,t){return"item"in e?e.item(t):(function(){var o=0,n;for(n in this)if(o++==t)return this[n]}).call(e,t)}function M(e,t){if(be(e)){if(ae(e.forEach)=="function")return e.forEach(t);for(var o=0,n=e.length,p;o<n;o++)p=e[o],ae(p)!="undefined"&&t(p,o,e)}else{var r;for(r in e)t(r,e[r],e)}}function x(e){var t=[];return M(e.children||e.childNodes,function(o){o.nodeType==1&&t.push(o)}),t}function Y(e,t){var o=a.getComputedStyle&&a.getComputedStyle(e,null)||e.currentStyle||e.style;return o[t]}function j(e,t,o){if(ae(t)=="object")return M(t,function(n,p){j(e,n,p)});M(t.split(" "),function(n){e.addEventListener?e.addEventListener(n,o,ie?{passive:!1}:!1):e.attachEvent?e.attachEvent("on"+n,o):e["on"+n]=o})}function Z(e,t,o){if(ae(t)=="object")return M(t,function(n,p){Z(e,n,p)});M(t.split(" "),function(n){e.removeEventListener?e.removeEventListener(n,o,!1):e.detachEvent?e.detachEvent("on"+n,o):e["on"+n]=null})}function Ce(){var e;a.getSelection?(e=getSelection(),"empty"in e?e.empty():"removeAllRanges"in e&&e.removeAllRanges()):b.selection.empty()}function we(e){var t={},o=e.which,n=e.button,p,r;if(M("wheelDelta detail which keyCode".split(" "),function(f){t[f]=e[f]}),t.oldEvent=e,t.type=e.type.toLowerCase(),t.eventType=pe[t.type]||t.type,t.eventCode=ye[t.type]||0,t.pointerType=H[e.pointerType]||e.pointerType||t.eventType,t.target=e.target||e.srcElement||b.documentElement,t.target.nodeType===3&&(t.target=t.target.parentNode),t.preventDefault=function(){e.preventDefault&&e.preventDefault(),t.returnValue=e.returnValue=!1},p=ke[t.eventType]){switch(t.eventType){case"mouse":case"pointer":var h=e.pointerId||0;t.eventCode==3?delete p[h]:p[h]=e;break;case"touch":ke[t.eventType]=p=e.touches;break}(r=F(p,0))&&(t.clientX=r.clientX,t.clientY=r.clientY),t.button=o<4?Math.max(0,o-1):n&4&&1||n&2,t.length=he(p)}return t}l.prototype={version:c,constructor:l,latestTime:0,init:function(e){var t=this,o=this.handler=function(n){!t.frozen&&t.handleEvent(n)};this.events={},this.duration=isNaN(parseInt(e.duration))?600:parseInt(e.duration),this.direction=parseInt(e.direction)==0?0:1,this.current=parseInt(e.start)||0,this.loop=!!e.loop,this.mouse=e.mouse==null?!0:!!e.mouse,this.mousewheel=!!e.mousewheel,this.interval=parseInt(e.interval)||5e3,this.playing=!!e.autoplay,this.arrowkey=!!e.arrowkey,this.frozen=!!e.freeze,this.pages=x(this.container),this.length=this.pages.length,this.pageData=[],j(this.container,te.join(" ")+" click"+(this.mousewheel?" mousewheel DOMMouseScroll":""),o),j(b,O.join(" ")+(this.arrowkey?" keydown":""),o),M(this.pages,function(n){t.pageData.push({percent:0,cssText:n.style.cssText||""}),t.initStyle(n)}),this.pages[this.current].style.display="block",this.on({before:function(){clearTimeout(this.playTimer)},dragStart:function(){clearTimeout(this.playTimer),Ce()},after:this.firePlay,update:null}).firePlay(),this.comment=document.createComment(" Powered by pageSwitch v"+this.version+"  https://github.com/qiqiboy/pageSwitch "),this.container.appendChild(this.comment),this.setEase(e.ease),this.setTransition(e.transition)},initStyle:function(e){var t=e.style,o;return M("position:absolute;top:0;left:0;width:100%;height:100%;display:none".split(";"),function(n){o=n.split(":"),t[o[0]]=o[1]}),e},setEase:function(e){return this.ease=ue(e)?e:me[e]||me.ease,this},addEase:function(e,t){return ue(t)&&(me[e]=t),this},setTransition:function(e){return this.events.update.splice(0,1,ue(e)?e:z[e]||z.slide),this},addTransition:function(e,t){return ue(t)&&(z[e]=t),this},isStatic:function(){return!this.timer&&!this.drag},on:function(e,t){var o=this;return ae(e)=="object"?M(e,function(n,p){o.on(n,p)}):(this.events[e]||(this.events[e]=[]),this.events[e].push(t)),this},fire:function(e){var t=this,o=ve.call(arguments,1);return M(this.events[e]||[],function(n){ue(n)&&n.apply(t,o)}),this},freeze:function(e){return this.frozen=e==null?!0:!!e,this},slide:function(e){var t=this;this.direction;var o=this.duration,n=+new Date,p=this.ease,r=this.current,h=Math.min(this.length-1,Math.max(0,this.fixIndex(e))),f=this.pages[r],g=this.getPercent(),m=this.fixIndex(h==r?r+(g>0?-1:1):h),E=this.pages[m],A=e>r?-1:1,U=f;y(this.timer),h==r?(A=0,U=E):E.style.display=="none"&&(g=0),this.fixBlock(r,m),this.fire("before",r,h),this.current=h,o*=Math.abs(A-g),this.latestTime=n+o,J();function J(){var Ie=Math.min(o,+new Date-n),Te=o?p(Ie,0,1,o):1,le=(A-g)*Te+g;t.fixUpdate(le,r,m),Ie==o?(U&&(U.style.display="none"),delete t.timer,t.fire("after",h,r)):t.timer=N(J)}return this},prev:function(){return this.slide(this.current-1)},next:function(){return this.slide(this.current+1)},play:function(){return this.playing=!0,this.firePlay()},firePlay:function(){var e=this;return this.playing&&(this.playTimer=setTimeout(function(){e.slide((e.current+1)%(e.loop?1/0:e.length))},this.interval)),this},pause:function(){return this.playing=!1,clearTimeout(this.playTimer),this},fixIndex:function(e){return this.length>1&&this.loop?(this.length+e)%this.length:e},fixBlock:function(e,t){return M(this.pages,function(o,n){e!=n&&t!=n?o.style.display="none":o.style.display="block"}),this},fixUpdate:function(e,t,o){var n=this.pageData,p=this.pages[t],r=this.pages[o],h;return n[t].percent=e,r&&(h=n[o].percent=e>0?e-1:1+e),this.fire("update",p,e,r,h)},getPercent:function(e){var t=this.pageData[e??this.current];return t&&(t.percent||0)},getOffsetParent:function(){var e=Y(this.container,"position");return e&&e!="static"?this.container:this.container.offsetParent||b.body},handleEvent:function(e){var t=we(e),o=t.button<1&&t.length<2&&(!this.pointerType||this.pointerType==t.eventType)&&(this.mouse||t.pointerType!="mouse");switch(t.eventCode){case 2:if(o&&this.rect){var n=this.current,p=this.direction,r=[t.clientX,t.clientY],h=this.rect,f=r[p]-h[p];this.pages[n];var g=this.offsetParent[p?"clientHeight":"clientWidth"],m,E;this.drag==null&&h.toString()!=r.toString()&&(this.drag=Math.abs(f)>=Math.abs(r[1-p]-h[1-p]),this.drag&&this.fire("dragStart",t)),this.drag&&(E=this.percent+(g&&f/g),this.pages[m=this.fixIndex(n+(E>0?-1:1))]||(E/=Math.abs(f)/g+2),this.fixBlock(n,m),this.fire("dragMove",t),this.fixUpdate(E,n,m),this._offset=f,t.preventDefault())}this.drag&&this.pointerType!=="touch"&&t.eventType==="touch"&&t.preventDefault();break;case 1:case 3:if(o){var A=this,U=this.current,E=this.getPercent(),J,f,Ie,le;t.length&&(t.eventCode==1||this.drag)?(le=t.target.nodeName.toLowerCase(),clearTimeout(this.eventTimer),this.pointerType||(this.pointerType=t.eventType),this.timer&&(y(this.timer),delete this.timer),this.rect=[t.clientX,t.clientY],this.percent=E,this.time=+new Date,this.offsetParent=this.getOffsetParent(),t.eventType!="touch"&&(le=="a"||le=="img")&&t.preventDefault()):(Ie=this.time)&&(f=this._offset,J=this.drag,M("rect drag time percent _offset offsetParent".split(" "),function(nt){delete A[nt]}),J&&((+new Date-Ie<500&&Math.abs(f)>20||Math.abs(E)>.5)&&(U+=f>0?-1:1),this.fire("dragEnd",t),t.preventDefault()),E?this.slide(U):J&&this.firePlay(),this.eventTimer=setTimeout(function(){delete A.pointerType},400))}break;case 4:this.timer&&t.preventDefault();break;case 5:if(t.preventDefault(),this.isStatic()&&+new Date-this.latestTime>Math.max(1e3-this.duration,0)){var Te=t.wheelDelta||-t.detail;Math.abs(Te)>=3&&this[Te>0?"prev":"next"]()}break;case 6:var le=t.target.nodeName.toLowerCase();if(this.isStatic()&&le!="input"&&le!="textarea"&&le!="select")switch(t.keyCode||t.which){case 33:case 37:case 38:this.prev();break;case 32:case 34:case 39:case 40:this.next();break;case 35:this.slide(this.length-1);break;case 36:this.slide(0);break}break}},destroy:function(){var e=this.pageData;return Z(this.container,te.join(" ")+" click"+(this.mousewheel?" mousewheel DOMMouseScroll":""),this.handler),Z(b,O.join(" ")+(this.arrowkey?" keydown":""),this.handler),M(this.pages,function(t,o){t.style.cssText=e[o].cssText}),this.container.removeChild(this.comment),this.length=0,this.pause()},append:function(e,t){return t==null&&(t=this.pages.length),this.pageData.splice(t,0,{percent:0,cssText:e.style.cssText}),this.pages.splice(t,0,e),this.container.appendChild(this.initStyle(e)),this.length=this.pages.length,t<=this.current&&this.current++,this},prepend:function(e){return this.append(e,0)},insertBefore:function(e,t){return this.append(e,t-1)},insertAfter:function(e,t){return this.append(e,t+1)},remove:function(e){return this.container.removeChild(this.pages[e]),this.pages.splice(e,1),this.pageData.splice(e,1),this.length=this.pages.length,e<=this.current&&this.slide(this.current=Math.max(0,this.current-1)),this}},M("Ease Transition".split(" "),function(e){l["add"+e]=l.prototype["add"+e]}),s.exports=l})(typeof window<"u"?window:ut,function(a,l){this.container=typeof a=="string"?document.getElementById(a):a,this.init(l||{})})})(it);var Ut=it.exports;const qt=ht(Ut);function Qe(s,i,a){const l=s.slice();return l[3]=i[a],l[5]=a,l}function Ke(s){let i,a;return i=new yt({props:{scroll:s[0].scroll.bind(s[0])}}),{c(){xe(i.$$.fragment)},l(l){Ve(i.$$.fragment,l)},m(l,d){Be(i,l,d),a=!0},p(l,d){const c={};d&1&&(c.scroll=l[0].scroll.bind(l[0])),i.$set(c)},i(l){a||(se(i.$$.fragment,l),a=!0)},o(l){oe(i.$$.fragment,l),a=!1},d(l){Fe(i,l)}}}function $e(s){let i,a;const l=[s[3],{rawWidth:s[0].rawWidth},{pageLoaded:s[0].pageLoaded},{scroll:s[0].scroll.bind(s[0])},{active:s[0].selectedIndex===s[5]}];let d={};for(let c=0;c<l.length;c+=1)d=lt(d,l[c]);return i=new zt({props:d}),{c(){xe(i.$$.fragment)},l(c){Ve(i.$$.fragment,c)},m(c,v){Be(i,c,v),a=!0},p(c,v){const N=v&1?ft(l,[v&0&&dt(c[3]),v&1&&{rawWidth:c[0].rawWidth},v&1&&{pageLoaded:c[0].pageLoaded},v&1&&{scroll:c[0].scroll.bind(c[0])},v&1&&{active:c[0].selectedIndex===c[5]}]):{};i.$set(N)},i(c){a||(se(i.$$.fragment,c),a=!0)},o(c){oe(i.$$.fragment,c),a=!1},d(c){Fe(i,c)}}}function Gt(s){let i,a,l,d,c,v,N,y=s[0].rawWidth>956&&Ke(s),b=De(Je),w=[];for(let I=0;I<b.length;I+=1)w[I]=$e(Qe(s,b,I));const V=I=>oe(w[I],1,1,()=>{w[I]=null});return{c(){i=X("meta"),a=Q(),l=X("div"),d=X("div"),y&&y.c(),c=Q(),v=X("section");for(let I=0;I<w.length;I+=1)w[I].c();this.h()},l(I){const u=ot("svelte-18b41j6",document.head);i=W(u,"META",{name:!0,content:!0}),u.forEach(L),a=K(I),l=W(I,"DIV",{class:!0,style:!0});var _=B(l);d=W(_,"DIV",{style:!0,class:!0});var D=B(d);y&&y.l(D),c=K(D),v=W(D,"SECTION",{id:!0,class:!0,style:!0});var T=B(v);for(let C=0;C<w.length;C+=1)w[C].l(T);T.forEach(L),D.forEach(L),_.forEach(L),this.h()},h(){document.title="Work",k(i,"name","description"),k(i,"content","Alex Figliolia's Portfolio"),k(v,"id","slides"),k(v,"class","work"),P(v,"height",s[1]),P(d,"height",s[1]),P(d,"width",s[2]),k(d,"class","svelte-1u6ou66"),k(l,"class","work-wrapper svelte-1u6ou66"),P(l,"height",s[1]),P(l,"width",s[2])},m(I,u){S(document.head,i),ce(I,a,u),ce(I,l,u),S(l,d),y&&y.m(d,null),S(d,c),S(d,v);for(let _=0;_<w.length;_+=1)w[_]&&w[_].m(v,null);N=!0},p(I,[u]){if(I[0].rawWidth>956?y?(y.p(I,u),u&1&&se(y,1)):(y=Ke(I),y.c(),se(y,1),y.m(d,c)):y&&(je(),oe(y,1,1,()=>{y=null}),Ae()),u&1){b=De(Je);let _;for(_=0;_<b.length;_+=1){const D=Qe(I,b,_);w[_]?(w[_].p(D,u),se(w[_],1)):(w[_]=$e(D),w[_].c(),se(w[_],1),w[_].m(v,null))}for(je(),_=b.length;_<w.length;_+=1)V(_);Ae()}(!N||u&2)&&P(v,"height",I[1]),(!N||u&2)&&P(d,"height",I[1]),(!N||u&4)&&P(d,"width",I[2]),(!N||u&2)&&P(l,"height",I[1]),(!N||u&4)&&P(l,"width",I[2])},i(I){if(!N){se(y);for(let u=0;u<b.length;u+=1)se(w[u]);N=!0}},o(I){oe(y),w=w.filter(Boolean);for(let u=0;u<w.length;u+=1)oe(w[u]);N=!1},d(I){I&&(L(a),L(l)),L(i),y&&y.d(),tt(w,I)}}}function Ht(s,i,a){let l,d;ze(s,st,N=>a(1,l=N)),ze(s,Ye,N=>a(2,d=N));const v=class v{static scroll({target:{dataset:{direction:y}}}){y==="right"?this.PW.next():this.PW.prev()}static createPW(){const y=v.rawWidth>957;return new qt("slides",{duration:750,direction:y?1:0,start:0,loop:!0,ease:"ease",transition:y?"flip3d":"flip3dY",freeze:!1,mouse:!0,mousewheel:!0,arrowkey:!0})}};G(v,"PW"),G(v,"rawWidth",0),G(v,"selectedIndex",0),G(v,"isDesktop",!1),G(v,"pageLoaded",!1);let c=v;return et(()=>{a(0,c.rawWidth=window.innerWidth,c),Ye.subscribe(()=>{a(0,c.rawWidth=window.innerWidth,c),c.PW&&c.PW.setTransition(window.innerWidth>957?"flip3d":"flip3dY")}),a(0,c.PW=c.createPW(),c),c.PW.on("after",()=>{a(0,c.selectedIndex=c.PW.current,c)}),ct.TaskQueue.registerTask(()=>{a(0,c.pageLoaded=!0,c)})}),[c,l,d]}class $t extends Xe{constructor(i){super(),We(this,i,Ht,Gt,Le,{})}}export{$t as default};
