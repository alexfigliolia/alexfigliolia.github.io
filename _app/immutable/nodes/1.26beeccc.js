import{S,i as x,s as j,e as _,t as d,a as k,c as f,b as g,d as h,f as l,g as q,h as m,j as v,k as $,n as E,l as y}from"../chunks/first-paint.2d5f9d3f.js";import{s as C}from"../chunks/singletons.36adf05c.js";const H=()=>{const s=C;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},P={subscribe(s){return H().page.subscribe(s)}};function w(s){var b;let t,r=s[0].status+"",n,o,i,c=((b=s[0].error)==null?void 0:b.message)+"",u;return{c(){t=_("h1"),n=d(r),o=k(),i=_("p"),u=d(c)},l(e){t=f(e,"H1",{});var a=g(t);n=h(a,r),a.forEach(l),o=q(e),i=f(e,"P",{});var p=g(i);u=h(p,c),p.forEach(l)},m(e,a){m(e,t,a),v(t,n),m(e,o,a),m(e,i,a),v(i,u)},p(e,[a]){var p;a&1&&r!==(r=e[0].status+"")&&$(n,r),a&1&&c!==(c=((p=e[0].error)==null?void 0:p.message)+"")&&$(u,c)},i:E,o:E,d(e){e&&(l(t),l(o),l(i))}}}function z(s,t,r){let n;return y(s,P,o=>r(0,n=o)),[n]}let D=class extends S{constructor(t){super(),x(this,t,z,w,j,{})}};export{D as component};
//# sourceMappingURL=1.26beeccc.js.map
