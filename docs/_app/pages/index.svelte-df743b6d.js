import{S as F,i as J,s as K,e as b,t as B,k as O,c as y,a as k,h as j,d as m,m as V,b as g,g as H,J as o,K as C,L as D,M as ie,j as re,E as L,N as Y,O as z,P as ce,Q as ue,w as A,x as G,y as W,q as P,o as q,B as X,p as de,R as fe,n as he}from"../chunks/index-59af8048.js";import{w as Z}from"../chunks/index-847341bc.js";let ae=Z(!1);const S=s=>{ae.update(e=>(e=s,e))};let oe=Z({}),Q=Z([]),pe=1;const _e=function(s){Q.update(e=>(e.push({entry:s,id:pe++}),e))},ge=function(s){Q.update(e=>(e.splice(e.findIndex(n=>n.id===s),1),e))},me=function(s,e){Q.update(n=>{let t=n.findIndex(l=>l.id===s);return n[t].entry=e,n})};function ve(s){let e,n,t,l,i,c,p=s[0].entry+"",f,_,d,$,v,r,x,a,h,u,w,E,N;return{c(){e=b("div"),n=b("div"),t=b("h2"),l=B("edit task"),i=O(),c=b("h3"),f=B(p),_=O(),d=b("input"),$=O(),v=b("div"),r=b("button"),x=B("confirm"),a=O(),h=b("button"),u=B("cancel"),this.h()},l(I){e=y(I,"DIV",{class:!0});var T=k(e);n=y(T,"DIV",{class:!0});var U=k(n);t=y(U,"H2",{class:!0});var M=k(t);l=j(M,"edit task"),M.forEach(m),i=V(U),c=y(U,"H3",{});var ee=k(c);f=j(ee,p),ee.forEach(m),_=V(U),d=y(U,"INPUT",{type:!0,class:!0}),$=V(U),v=y(U,"DIV",{class:!0});var R=k(v);r=y(R,"BUTTON",{class:!0});var te=k(r);x=j(te,"confirm"),te.forEach(m),a=V(R),h=y(R,"BUTTON",{class:!0});var ne=k(h);u=j(ne,"cancel"),ne.forEach(m),R.forEach(m),U.forEach(m),T.forEach(m),this.h()},h(){g(t,"class","text-center font-bold text-2xl"),g(d,"type","text"),g(d,"class","text-xs p-1 w-full"),g(r,"class","svelte-1pkok2p"),g(h,"class","svelte-1pkok2p"),g(v,"class","flex justify-between"),g(n,"class","bg-white p-6 w-[50%] max-w-md grid grid-flow-row gap-3"),g(e,"class",w="absolute bg-black bg-opacity-75 w-screen h-screen flex justify-center items-start pt-16 "+(s[2]?"":"hidden"))},m(I,T){H(I,e,T),o(e,n),o(n,t),o(t,l),o(n,i),o(n,c),o(c,f),o(n,_),o(n,d),C(d,s[1]),o(n,$),o(n,v),o(v,r),o(r,x),o(v,a),o(v,h),o(h,u),E||(N=[D(d,"keydown",s[5]),D(d,"input",s[6]),D(r,"click",s[3]),D(h,"click",s[7]),D(n,"mousedown",ie(s[4])),D(e,"mousedown",s[8])],E=!0)},p(I,[T]){T&1&&p!==(p=I[0].entry+"")&&re(f,p),T&2&&d.value!==I[1]&&C(d,I[1]),T&4&&w!==(w="absolute bg-black bg-opacity-75 w-screen h-screen flex justify-center items-start pt-16 "+(I[2]?"":"hidden"))&&g(e,"class",w)},i:L,o:L,d(I){I&&m(e),E=!1,Y(N)}}}function be(s,e,n){let t,l;z(s,oe,r=>n(0,t=r)),z(s,ae,r=>n(2,l=r));function i(){me(t.id,c),S(!1)}let c;function p(){n(1,c=t.entry)}function f(r){ce.call(this,s,r)}const _=r=>r.key==="Enter"?i():null;function d(){c=this.value,n(1,c)}const $=()=>S(!1),v=()=>S(!1);return s.$$.update=()=>{s.$$.dirty&1&&p()},[t,c,l,i,f,_,d,$,v]}class ye extends F{constructor(e){super(),J(this,e,be,ve,K,{})}}function we(s){let e,n,t,l,i,c=s[0].entry+"",p,f,_,d,$,v,r,x,a,h,u;return{c(){e=b("li"),n=b("div"),t=b("input"),l=O(),i=b("p"),p=B(c),_=O(),d=b("div"),$=b("button"),v=B("edit"),r=O(),x=b("button"),a=B("delete"),this.h()},l(w){e=y(w,"LI",{class:!0});var E=k(e);n=y(E,"DIV",{class:!0});var N=k(n);t=y(N,"INPUT",{type:!0}),l=V(N),i=y(N,"P",{class:!0});var I=k(i);p=j(I,c),I.forEach(m),N.forEach(m),_=V(E),d=y(E,"DIV",{class:!0});var T=k(d);$=y(T,"BUTTON",{class:!0});var U=k($);v=j(U,"edit"),U.forEach(m),r=V(T),x=y(T,"BUTTON",{class:!0});var M=k(x);a=j(M,"delete"),M.forEach(m),T.forEach(m),E.forEach(m),this.h()},h(){g(t,"type","checkbox"),g(i,"class",f=s[1]?"line-through":""),g(n,"class","flex items-center gap-2"),g($,"class","bg-gray-700 hover:bg-gray-500 text-white px-3 rounded-full"),g(x,"class","bg-gray-700 hover:bg-gray-500 text-white px-5 rounded-full"),g(d,"class","flex gap-2"),g(e,"class","flex justify-between bg-slate-300 even:bg-slate-200 p-2")},m(w,E){H(w,e,E),o(e,n),o(n,t),t.checked=s[1],o(n,l),o(n,i),o(i,p),o(e,_),o(e,d),o(d,$),o($,v),o(d,r),o(d,x),o(x,a),h||(u=[D(t,"change",s[3]),D($,"click",s[4]),D(x,"click",s[5])],h=!0)},p(w,[E]){E&2&&(t.checked=w[1]),E&1&&c!==(c=w[0].entry+"")&&re(p,c),E&2&&f!==(f=w[1]?"line-through":"")&&g(i,"class",f)},i:L,o:L,d(w){w&&m(e),h=!1,Y(u)}}}function ke(s,e,n){let{todo:t}=e;const l=ue();let i=!1;function c(){i=this.checked,n(1,i)}const p=()=>l("edit",t.id),f=()=>ge(t.id);return s.$$set=_=>{"todo"in _&&n(0,t=_.todo)},[t,i,l,c,p,f]}class $e extends F{constructor(e){super(),J(this,e,ke,we,K,{todo:0})}}function Ee(s){let e,n,t,l,i,c,p;return{c(){e=b("div"),n=b("input"),t=O(),l=b("button"),i=B("+"),this.h()},l(f){e=y(f,"DIV",{class:!0});var _=k(e);n=y(_,"INPUT",{type:!0,class:!0}),t=V(_),l=y(_,"BUTTON",{class:!0});var d=k(l);i=j(d,"+"),d.forEach(m),_.forEach(m),this.h()},h(){g(n,"type","text"),g(n,"class","w-full p-0.5"),g(l,"class","bg-black text-white hover:bg-gray-700 text-center h-full aspect-square"),g(e,"class","flex items-center gap-2")},m(f,_){H(f,e,_),o(e,n),C(n,s[0]),o(e,t),o(e,l),o(l,i),c||(p=[D(n,"keydown",s[2]),D(n,"input",s[3]),D(l,"click",s[1])],c=!0)},p(f,[_]){_&1&&n.value!==f[0]&&C(n,f[0])},i:L,o:L,d(f){f&&m(e),c=!1,Y(p)}}}function xe(s,e,n){let t="";function l(){!t||(_e(t),n(0,t=""))}const i=p=>p.key==="Enter"?l():null;function c(){t=this.value,n(0,t)}return[t,l,i,c]}class Ie extends F{constructor(e){super(),J(this,e,xe,Ee,K,{})}}function se(s,e,n){const t=s.slice();return t[3]=e[n],t}function le(s){let e,n;return e=new $e({props:{todo:s[3]}}),e.$on("edit",s[2]),{c(){A(e.$$.fragment)},l(t){G(e.$$.fragment,t)},m(t,l){W(e,t,l),n=!0},p(t,l){const i={};l&1&&(i.todo=t[3]),e.$set(i)},i(t){n||(P(e.$$.fragment,t),n=!0)},o(t){q(e.$$.fragment,t),n=!1},d(t){X(e,t)}}}function Te(s){let e,n,t,l,i,c,p,f,_,d,$;e=new ye({});let v=s[0],r=[];for(let a=0;a<v.length;a+=1)r[a]=le(se(s,v,a));const x=a=>q(r[a],1,1,()=>{r[a]=null});return d=new Ie({}),{c(){A(e.$$.fragment),n=O(),t=b("div"),l=b("div"),i=b("h1"),c=B("Todo List"),p=O(),f=b("ul");for(let a=0;a<r.length;a+=1)r[a].c();_=O(),A(d.$$.fragment),this.h()},l(a){G(e.$$.fragment,a),n=V(a),t=y(a,"DIV",{class:!0});var h=k(t);l=y(h,"DIV",{class:!0});var u=k(l);i=y(u,"H1",{class:!0});var w=k(i);c=j(w,"Todo List"),w.forEach(m),p=V(u),f=y(u,"UL",{class:!0});var E=k(f);for(let N=0;N<r.length;N+=1)r[N].l(E);E.forEach(m),_=V(u),G(d.$$.fragment,u),u.forEach(m),h.forEach(m),this.h()},h(){g(i,"class","text-4xl font-bold text-center"),g(f,"class","grid grid-flow-row gap-2"),g(l,"class","bg-gray-50 rounded-xl p-6 grid grid-flow-row w-[90%] max-w-xl gap-4"),g(t,"class","h-screen flex justify-center items-center")},m(a,h){W(e,a,h),H(a,n,h),H(a,t,h),o(t,l),o(l,i),o(i,c),o(l,p),o(l,f);for(let u=0;u<r.length;u+=1)r[u].m(f,null);o(l,_),W(d,l,null),$=!0},p(a,[h]){if(h&3){v=a[0];let u;for(u=0;u<v.length;u+=1){const w=se(a,v,u);r[u]?(r[u].p(w,h),P(r[u],1)):(r[u]=le(w),r[u].c(),P(r[u],1),r[u].m(f,null))}for(he(),u=v.length;u<r.length;u+=1)x(u);de()}},i(a){if(!$){P(e.$$.fragment,a);for(let h=0;h<v.length;h+=1)P(r[h]);P(d.$$.fragment,a),$=!0}},o(a){q(e.$$.fragment,a),r=r.filter(Boolean);for(let h=0;h<r.length;h+=1)q(r[h]);q(d.$$.fragment,a),$=!1},d(a){X(e,a),a&&m(n),a&&m(t),fe(r,a),X(d)}}}function De(s,e,n){let t;z(s,Q,c=>n(0,t=c));function l(c){oe.set(t.find(p=>p.id===c)),S(!0)}const i=c=>{l(c.detail)};return s.$$.update=()=>{s.$$.dirty&1&&console.log(t)},[t,l,i]}class Oe extends F{constructor(e){super(),J(this,e,De,Te,K,{})}}export{Oe as default};