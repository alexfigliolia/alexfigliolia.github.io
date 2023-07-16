var tt=Object.defineProperty;var et=(e,t,a)=>t in e?tt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var A=(e,t,a)=>(et(e,typeof t!="symbol"?t+"":t,a),a);import{_ as N}from"./preload-helper.cf010ec4.js";import{s as B,n as F,i as st,c as L,r as at,o as S}from"./scheduler.c607dd8c.js";import{S as W,i as j,g as w,m as z,h as E,j as D,n as H,f as g,k as f,l as Y,a as I,y,B as X,o as it,s as x,c as R,C as Q,e as G,x as nt,r as C,D as lt,u as V,v as M,d as P,t as O,w as q}from"./index.0cf6920a.js";import{B as U}from"./BackgroundText.8b51954c.js";import{e as J,A as K}from"./AppState.6284b104.js";function ot(e){let t,a,s,i,r,c,b;return{c(){t=w("button"),a=w("h3"),s=z(e[1]),this.h()},l(h){t=E(h,"BUTTON",{class:!0,style:!0,"data-page":!0,"data-url":!0});var o=D(t);a=E(o,"H3",{class:!0});var l=D(a);s=H(l,e[1]),l.forEach(g),o.forEach(g),this.h()},h(){f(a,"class","svelte-1v0xzgh"),f(t,"class",i=F(e[4])+" svelte-1v0xzgh"),t.disabled=e[2],Y(t,"box-shadow",e[9]),Y(t,"transition-duration",e[7]),Y(t,"transform","rotateX("+e[5]+"deg) rotateY("+e[6]+"deg) skew(-5deg) scale("+e[8]+")"),f(t,"data-page","Work"),f(t,"data-url",r=e[0]||null)},m(h,o){I(h,t,o),y(t,a),y(a,s),c||(b=[X(t,"click",function(){st(e[3])&&e[3].apply(this,arguments)}),X(t,"mouseenter",e[10].mouseEnter.bind(e[10])),X(t,"mousemove",e[10].mouseMove.bind(e[10])),X(t,"mouseleave",e[10].mouseLeave.bind(e[10])),X(t,"touchstart",e[10].touchStart.bind(e[10])),X(t,"touchend",e[10].mouseLeave.bind(e[10])),X(t,"touchmove",e[10].touchMove.bind(e[10]))],c=!0)},p(h,[o]){e=h,o&2&&it(s,e[1]),o&16&&i!==(i=F(e[4])+" svelte-1v0xzgh")&&f(t,"class",i),o&4&&(t.disabled=e[2]),o&512&&Y(t,"box-shadow",e[9]),o&128&&Y(t,"transition-duration",e[7]),o&352&&Y(t,"transform","rotateX("+e[5]+"deg) rotateY("+e[6]+"deg) skew(-5deg) scale("+e[8]+")"),o&1&&r!==(r=e[0]||null)&&f(t,"data-url",r)},i:L,o:L,d(h){h&&g(t),c=!1,at(b)}}}let rt=!1;function ct(e,t,a){let{url:s=""}=t,{text:i=""}=t,{active:r=!1}=t,{disabled:c=!1}=t,{func:b}=t,h="three-dee-button",o=0,l=0,_="0.5s",d=1,T="none",n=null;S(()=>()=>{n&&(clearTimeout(n),n=null)});class m{static cacheTargetData(u){if(!this.left||!this.height||!this.width){const{left:p,top:k}=u.getBoundingClientRect(),{offsetWidth:Z,offsetHeight:$}=u;this.left=p,this.top=k,this.height=$,this.width=Z,this.mathX=this.left+this.width/2,this.mathY=this.top+this.height/2}}static getRotations({x:u,y:p}){const k=(this.mathY-p)/1.75;return{rotX:k>0?k+4:k,rotY:(this.mathX-u)/-10}}static setFrame(u,p){!r||c||(a(5,o=u.rotX),a(6,l=u.rotY),a(7,_=`${p}s`),a(8,d=1.1),a(9,T=`0 14px 28px rgba(0,0,0,0.5), ${u.rotY*-1.85}px ${u.rotX}px 10px rgba(0,0,0,0.44)`))}static mouseEnter({clientX:u,clientY:p,target:k}){!r||c||(this.cacheTargetData(k),this.setFrame(this.getRotations({y:p,x:u}),.5))}static touchStart({target:u,touches:p}){!r||c||(this.cacheTargetData(u),this.setFrame(this.getRotations({y:p[0].clientY,x:p[0].clientX}),.5))}static mouseMove({clientX:u,clientY:p}){this.setFrame(this.getRotations({y:p,x:u}),0)}static touchMove({touches:u}){this.setFrame(this.getRotations({y:u[0].clientY,x:u[0].clientX}),0)}static mouseLeave(){a(5,o=0),a(6,l=0),a(8,d=1),a(7,_="0.5s"),a(9,T="none")}}return A(m,"top",0),A(m,"left",0),A(m,"height",0),A(m,"width",0),A(m,"mathX",0),A(m,"mathY",0),e.$$set=v=>{"url"in v&&a(0,s=v.url),"text"in v&&a(1,i=v.text),"active"in v&&a(11,r=v.active),"disabled"in v&&a(2,c=v.disabled),"func"in v&&a(3,b=v.func)},e.$$.update=()=>{e.$$.dirty&2048&&r&&!rt&&(a(4,h="three-dee-button active"),n=setTimeout(()=>{a(4,h="three-dee-button active reset-delays")},1500))},[s,i,c,b,h,o,l,_,d,T,m,r]}class ut extends W{constructor(t){super(),j(this,t,ct,ot,B,{url:0,text:1,active:11,disabled:2,func:3})}}function ht(e,t,a){const s=e.slice();return s[1]=t[a],s[3]=a,s}function ft(e,t,a){const s=e.slice();return s[1]=t[a],s[3]=a,s}function _t(e){let t,a="  ";return{c(){t=w("div"),t.textContent=a,this.h()},l(s){t=E(s,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),nt(t)!=="svelte-hwc1re"&&(t.textContent=a),this.h()},h(){f(t,"class","space svelte-79pxo3"),f(t,"style",`transition-delay: ${(4-e[3])/50}s;`)},m(s,i){I(s,t,i)},d(s){s&&g(t)}}}function dt(e){let t,a;return{c(){t=w("div"),a=z(e[1]),this.h()},l(s){t=E(s,"DIV",{style:!0,class:!0});var i=D(t);a=H(i,e[1]),i.forEach(g),this.h()},h(){f(t,"style",`transition-delay: ${(7-e[3])/50}s;`),f(t,"class","svelte-79pxo3")},m(s,i){I(s,t,i),y(t,a)},d(s){s&&g(t)}}}function mt(e){let t,a,s=e[1]===" "&&_t(e),i=e[1]!==" "&&dt(e);return{c(){s&&s.c(),t=x(),i&&i.c(),a=G()},l(r){s&&s.l(r),t=R(r),i&&i.l(r),a=G()},m(r,c){s&&s.m(r,c),I(r,t,c),i&&i.m(r,c),I(r,a,c)},p:L,d(r){r&&(g(t),g(a)),s&&s.d(r),i&&i.d(r)}}}function vt(e){let t,a;return{c(){t=w("div"),a=z(e[1]),this.h()},l(s){t=E(s,"DIV",{style:!0,class:!0});var i=D(t);a=H(i,e[1]),i.forEach(g),this.h()},h(){f(t,"style",`transition-delay: ${e[3]/50}s;`),f(t,"class","svelte-79pxo3")},m(s,i){I(s,t,i),y(t,a)},p:L,d(s){s&&g(t)}}}function gt(e){let t,a,s,i,r,c=J("ALEX".split("")),b=[];for(let l=0;l<c.length;l+=1)b[l]=mt(ft(e,c,l));let h=J("FIGLIOLIA".split("")),o=[];for(let l=0;l<h.length;l+=1)o[l]=vt(ht(e,h,l));return{c(){t=w("div"),a=w("h2");for(let l=0;l<b.length;l+=1)b[l].c();s=x(),i=w("h2");for(let l=0;l<o.length;l+=1)o[l].c();this.h()},l(l){t=E(l,"DIV",{class:!0});var _=D(t);a=E(_,"H2",{class:!0});var d=D(a);for(let n=0;n<b.length;n+=1)b[n].l(d);d.forEach(g),s=R(_),i=E(_,"H2",{class:!0});var T=D(i);for(let n=0;n<o.length;n+=1)o[n].l(T);T.forEach(g),_.forEach(g),this.h()},h(){f(a,"class","svelte-79pxo3"),f(i,"class","svelte-79pxo3"),f(t,"class",r=F(`intro-text ${e[0]?"active":""}`)+" svelte-79pxo3")},m(l,_){I(l,t,_),y(t,a);for(let d=0;d<b.length;d+=1)b[d]&&b[d].m(a,null);y(t,s),y(t,i);for(let d=0;d<o.length;d+=1)o[d]&&o[d].m(i,null)},p(l,[_]){_&1&&r!==(r=F(`intro-text ${l[0]?"active":""}`)+" svelte-79pxo3")&&f(t,"class",r)},i:L,o:L,d(l){l&&g(t),Q(b,l),Q(o,l)}}}function bt(e,t,a){let{active:s=!1}=t;return e.$$set=i=>{"active"in i&&a(0,s=i.active)},[s]}class pt extends W{constructor(t){super(),j(this,t,bt,gt,B,{active:0})}}function Tt(e){let t,a,s,i,r,c,b,h,o,l,_,d,T;return i=new U({props:{text:"Alex",active:e[0].activateText}}),c=new U({props:{text:"Figliolia",active:e[0].activateText}}),o=new pt({props:{active:e[0].activateText}}),_=new ut({props:{text:"Work",active:e[0].activateText,disabled:!e[0].buttonActive,func:e[0].navigate.bind(e[0])}}),{c(){t=w("meta"),a=x(),s=w("section"),C(i.$$.fragment),r=x(),C(c.$$.fragment),b=x(),h=w("div"),C(o.$$.fragment),l=x(),C(_.$$.fragment),this.h()},l(n){const m=lt("svelte-rutw3g",document.head);t=E(m,"META",{name:!0,content:!0}),m.forEach(g),a=R(n),s=E(n,"SECTION",{class:!0,id:!0});var v=D(s);V(i.$$.fragment,v),r=R(v),V(c.$$.fragment,v),b=R(v),h=E(v,"DIV",{class:!0});var u=D(h);V(o.$$.fragment,u),l=R(u),V(_.$$.fragment,u),u.forEach(g),v.forEach(g),this.h()},h(){document.title="Home",f(t,"name","description"),f(t,"content","Alex Figliolia's Portfolio"),f(h,"class","svelte-u4fd6q"),f(s,"class",d=F(e[0].classes)+" svelte-u4fd6q"),f(s,"id","home")},m(n,m){y(document.head,t),I(n,a,m),I(n,s,m),M(i,s,null),y(s,r),M(c,s,null),y(s,b),y(s,h),M(o,h,null),y(h,l),M(_,h,null),T=!0},p(n,[m]){const v={};m&1&&(v.active=n[0].activateText),i.$set(v);const u={};m&1&&(u.active=n[0].activateText),c.$set(u);const p={};m&1&&(p.active=n[0].activateText),o.$set(p);const k={};m&1&&(k.active=n[0].activateText),m&1&&(k.disabled=!n[0].buttonActive),m&1&&(k.func=n[0].navigate.bind(n[0])),_.$set(k),(!T||m&1&&d!==(d=F(n[0].classes)+" svelte-u4fd6q"))&&f(s,"class",d)},i(n){T||(P(i.$$.fragment,n),P(c.$$.fragment,n),P(o.$$.fragment,n),P(_.$$.fragment,n),T=!0)},o(n){O(i.$$.fragment,n),O(c.$$.fragment,n),O(o.$$.fragment,n),O(_.$$.fragment,n),T=!1},d(n){n&&(g(a),g(s)),g(t),q(i),q(c),q(o),q(_)}}}function kt(e,t,a){class s{static navigate(){window.location.hash="Work"}}return A(s,"classes","home"),A(s,"activateText",!1),A(s,"buttonActive",!1),S(()=>{K.TaskQueue.registerTask(()=>{a(0,s.classes="home home-show",s),a(0,s.activateText=!0,s),K.TaskQueue.defer(()=>{a(0,s.buttonActive=!0,s)},1500),Promise.all([N(()=>import("./jquery.be82c7a9.js").then(i=>i.j),["_app/immutable/chunks/jquery.be82c7a9.js","_app/immutable/chunks/_commonjsHelpers.725317a4.js"]),N(()=>import("./jquery.ripples.30bcfd3f.js").then(i=>i.j),["_app/immutable/chunks/jquery.ripples.30bcfd3f.js","_app/immutable/chunks/_commonjsHelpers.725317a4.js","_app/immutable/chunks/jquery.be82c7a9.js"])]).then(([{default:i}])=>{i("#home").ripples({resolution:512,dropRadius:10,perturbance:.02})})})}),[s]}class Xt extends W{constructor(t){super(),j(this,t,kt,Tt,B,{})}}export{Xt as default};