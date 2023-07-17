var st=Object.defineProperty;var at=(e,t,s)=>t in e?st(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var k=(e,t,s)=>(at(e,typeof t!="symbol"?t+"":t,s),s);import{_ as J}from"./preload-helper.cf010ec4.js";import{s as G,n as q,i as nt,c as B,r as it,o as Z}from"./scheduler.c607dd8c.js";import{S as Q,i as U,g as y,m as tt,h as C,j as D,n as et,f as v,k as d,l as R,a as O,y as A,B as j,o as ot,C as rt,s as x,r as M,D as ct,c as F,u as H,v as I,d as V,t as L,w as P}from"./index.7682a14d.js";import{B as K}from"./BackgroundText.6e4dea00.js";import{e as lt,A as ut}from"./AppState.2e476ff2.js";function ht(e){let t,s,a,i,u,o,h;return{c(){t=y("button"),s=y("h3"),a=tt(e[1]),this.h()},l(r){t=C(r,"BUTTON",{class:!0,style:!0,"data-page":!0,"data-url":!0});var c=D(t);s=C(c,"H3",{class:!0});var E=D(s);a=et(E,e[1]),E.forEach(v),c.forEach(v),this.h()},h(){d(s,"class","svelte-1q5cdts"),d(t,"class",i=q(e[3])+" svelte-1q5cdts"),R(t,"box-shadow",e[8]),R(t,"transition-duration",e[6]),R(t,"transform","rotateX("+e[4]+"deg) rotateY("+e[5]+"deg) skew(-5deg) scale("+e[7]+")"),d(t,"data-page","Work"),d(t,"data-url",u=e[0]||null)},m(r,c){O(r,t,c),A(t,s),A(s,a),o||(h=[j(t,"click",function(){nt(e[2])&&e[2].apply(this,arguments)}),j(t,"mouseenter",e[9].mouseEnter.bind(e[9])),j(t,"mousemove",e[9].mouseMove.bind(e[9])),j(t,"mouseleave",e[9].mouseLeave.bind(e[9])),j(t,"touchstart",e[9].touchStart.bind(e[9])),j(t,"touchend",e[9].mouseLeave.bind(e[9])),j(t,"touchmove",e[9].touchMove.bind(e[9]))],o=!0)},p(r,[c]){e=r,c&2&&ot(a,e[1]),c&8&&i!==(i=q(e[3])+" svelte-1q5cdts")&&d(t,"class",i),c&256&&R(t,"box-shadow",e[8]),c&64&&R(t,"transition-duration",e[6]),c&176&&R(t,"transform","rotateX("+e[4]+"deg) rotateY("+e[5]+"deg) skew(-5deg) scale("+e[7]+")"),c&1&&u!==(u=e[0]||null)&&d(t,"data-url",u)},i:B,o:B,d(r){r&&v(t),o=!1,it(h)}}}let ft=!1;function mt(e,t,s){let{url:a=""}=t,{text:i=""}=t,{active:u=!1}=t,{func:o}=t,h="three-dee-button",r=0,c=0,E="0.5s",g=1,w="none",X=null;Z(()=>()=>{X&&clearTimeout(X)});class _{static cacheTargetData(l){if(!this.left||!this.height||!this.width){const{left:f,top:p}=l.getBoundingClientRect(),{offsetWidth:n,offsetHeight:m}=l;this.left=f,this.top=p,this.height=m,this.width=n,this.mathX=this.left+this.width/2,this.mathY=this.top+this.height/2}}static getRotations({x:l,y:f}){const p=(this.mathY-f)/1.75;return{rotX:p>0?p+4:p,rotY:(this.mathX-l)/-10}}static setFrame(l,f){u&&(s(4,r=l.rotX),s(5,c=l.rotY),s(6,E=`${f}s`),s(7,g=1.1),s(8,w=`0 14px 28px rgba(0,0,0,0.5), ${l.rotY*-1.85}px ${l.rotX}px 10px rgba(0,0,0,0.44)`))}static mouseEnter({clientX:l,clientY:f,target:p}){u&&(this.cacheTargetData(p),this.setFrame(this.getRotations({y:f,x:l}),.5))}static touchStart({target:l,touches:f}){u&&(this.cacheTargetData(l),this.setFrame(this.getRotations({y:f[0].clientY,x:f[0].clientX}),.5))}static mouseMove({clientX:l,clientY:f}){this.setFrame(this.getRotations({y:f,x:l}),0)}static touchMove({touches:l}){this.setFrame(this.getRotations({y:l[0].clientY,x:l[0].clientX}),0)}static mouseLeave(){s(4,r=0),s(5,c=0),s(7,g=1),s(6,E="0.5s"),s(8,w="none")}}return k(_,"top",0),k(_,"left",0),k(_,"height",0),k(_,"width",0),k(_,"mathX",0),k(_,"mathY",0),e.$$set=b=>{"url"in b&&s(0,a=b.url),"text"in b&&s(1,i=b.text),"active"in b&&s(10,u=b.active),"func"in b&&s(2,o=b.func)},e.$$.update=()=>{e.$$.dirty&1024&&u&&!ft&&(s(3,h="three-dee-button active"),X=setTimeout(()=>{s(3,h="three-dee-button active reset-delays")},1500))},[a,i,o,h,r,c,E,g,w,_,u]}class W extends Q{constructor(t){super(),U(this,t,mt,ht,G,{url:0,text:1,active:10,func:2})}}function dt(e,t,s){const a=e.slice();return a[1]=t[s],a[3]=s,a}function _t(e){let t,s;return{c(){t=y("div"),s=tt(e[1]),this.h()},l(a){t=C(a,"DIV",{style:!0,class:!0});var i=D(t);s=et(i,e[1]),i.forEach(v),this.h()},h(){R(t,"transition","transform 0.5s $"+e[3]/20+"s"),d(t,"class","svelte-xjp945")},m(a,i){O(a,t,i),A(t,s)},p:B,d(a){a&&v(t)}}}function vt(e){let t,s,a,i=lt("Contact".split("")),u=[];for(let o=0;o<i.length;o+=1)u[o]=_t(dt(e,i,o));return{c(){t=y("div"),s=y("h2");for(let o=0;o<u.length;o+=1)u[o].c();this.h()},l(o){t=C(o,"DIV",{class:!0});var h=D(t);s=C(h,"H2",{class:!0});var r=D(s);for(let c=0;c<u.length;c+=1)u[c].l(r);r.forEach(v),h.forEach(v),this.h()},h(){d(s,"class","svelte-xjp945"),d(t,"class",a=q(`contact-text ${e[0]?"active":""}`)+" svelte-xjp945")},m(o,h){O(o,t,h),A(t,s);for(let r=0;r<u.length;r+=1)u[r]&&u[r].m(s,null)},p(o,[h]){h&1&&a!==(a=q(`contact-text ${o[0]?"active":""}`)+" svelte-xjp945")&&d(t,"class",a)},i:B,o:B,d(o){o&&v(t),rt(u,o)}}}function gt(e,t,s){let{active:a}=t;return e.$$set=i=>{"active"in i&&s(0,a=i.active)},[a]}class bt extends Q{constructor(t){super(),U(this,t,gt,vt,G,{active:0})}}function pt(e){let t,s,a,i,u,o,h,r,c,E,g,w,X,_,b,l,f,p;return i=new K({props:{text:"Alex",active:e[0].textActive}}),o=new K({props:{text:"Figliolia",active:e[0].textActive}}),c=new bt({props:{active:e[0].textActive}}),w=new W({props:{text:"Call Me",active:e[0].textActive,func:wt}}),_=new W({props:{text:"Email Me",active:e[0].textActive,func:e[0].sendEmail.bind(e[0])}}),l=new W({props:{text:"GitHub",active:e[0].textActive,func:e[0].gitHub.bind(e[0])}}),{c(){t=y("meta"),s=x(),a=y("section"),M(i.$$.fragment),u=x(),M(o.$$.fragment),h=x(),r=y("div"),M(c.$$.fragment),E=x(),g=y("div"),M(w.$$.fragment),X=x(),M(_.$$.fragment),b=x(),M(l.$$.fragment),this.h()},l(n){const m=ct("svelte-1r5um1t",document.head);t=C(m,"META",{name:!0,content:!0}),m.forEach(v),s=F(n),a=C(n,"SECTION",{id:!0,class:!0});var $=D(a);H(i.$$.fragment,$),u=F($),H(o.$$.fragment,$),h=F($),r=C($,"DIV",{class:!0});var Y=D(r);H(c.$$.fragment,Y),E=F(Y),g=C(Y,"DIV",{class:!0});var T=D(g);H(w.$$.fragment,T),X=F(T),H(_.$$.fragment,T),b=F(T),H(l.$$.fragment,T),T.forEach(v),Y.forEach(v),$.forEach(v),this.h()},h(){document.title="Contact",d(t,"name","description"),d(t,"content","Alex Figliolia's Portfolio"),d(g,"class","contact-buttons svelte-h75lfy"),d(r,"class","svelte-h75lfy"),d(a,"id","contact"),d(a,"class",f=q(e[0].classes)+" svelte-h75lfy")},m(n,m){A(document.head,t),O(n,s,m),O(n,a,m),I(i,a,null),A(a,u),I(o,a,null),A(a,h),A(a,r),I(c,r,null),A(r,E),A(r,g),I(w,g,null),A(g,X),I(_,g,null),A(g,b),I(l,g,null),p=!0},p(n,[m]){const $={};m&1&&($.active=n[0].textActive),i.$set($);const Y={};m&1&&(Y.active=n[0].textActive),o.$set(Y);const T={};m&1&&(T.active=n[0].textActive),c.$set(T);const z={};m&1&&(z.active=n[0].textActive),w.$set(z);const S={};m&1&&(S.active=n[0].textActive),m&1&&(S.func=n[0].sendEmail.bind(n[0])),_.$set(S);const N={};m&1&&(N.active=n[0].textActive),m&1&&(N.func=n[0].gitHub.bind(n[0])),l.$set(N),(!p||m&1&&f!==(f=q(n[0].classes)+" svelte-h75lfy"))&&d(a,"class",f)},i(n){p||(V(i.$$.fragment,n),V(o.$$.fragment,n),V(c.$$.fragment,n),V(w.$$.fragment,n),V(_.$$.fragment,n),V(l.$$.fragment,n),p=!0)},o(n){L(i.$$.fragment,n),L(o.$$.fragment,n),L(c.$$.fragment,n),L(w.$$.fragment,n),L(_.$$.fragment,n),L(l.$$.fragment,n),p=!1},d(n){n&&(v(s),v(a)),v(t),P(i),P(o),P(c),P(w),P(_),P(l)}}}const wt=()=>{};function At(e,t,s){class a{static sendEmail(){window.location.href="mailto:alexfigliolia@gmail.com?subject=Subject"}static gitHub(){window.open("https://github.com/alexfigliolia","_blank")}}return k(a,"textActive",!1),k(a,"classes","home contact"),Z(()=>{ut.TaskQueue.registerTask(()=>{s(0,a.classes="contact contact-show",a),s(0,a.textActive=!0,a),Promise.all([J(()=>import("./jquery.6646e875.js").then(i=>i.j),["_app/immutable/chunks/jquery.6646e875.js","_app/immutable/chunks/AppState.2e476ff2.js","_app/immutable/chunks/index.0624fa79.js","_app/immutable/chunks/scheduler.c607dd8c.js"]),J(()=>import("./jquery.ripples.5405de81.js").then(i=>i.j),["_app/immutable/chunks/jquery.ripples.5405de81.js","_app/immutable/chunks/AppState.2e476ff2.js","_app/immutable/chunks/index.0624fa79.js","_app/immutable/chunks/scheduler.c607dd8c.js","_app/immutable/chunks/jquery.6646e875.js"])]).then(([{default:i}])=>{i("#contact").ripples({resolution:512,dropRadius:10,perturbance:.02})})})}),[a]}class Dt extends Q{constructor(t){super(),U(this,t,At,pt,G,{})}}export{Dt as default};
//# sourceMappingURL=_Contact.5f8231ee.js.map
