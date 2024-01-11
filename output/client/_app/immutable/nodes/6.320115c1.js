import{s as j,f as z,n as G}from"../chunks/scheduler.1f6706a1.js";import{S as F,i as J,g as $,r as M,s as q,m as K,h as k,j as x,u as S,c as w,n as O,f as m,k as g,a as C,v as T,y as v,d as P,t as E,w as V,e as N,x as D,p as Q,b as R,z as U}from"../chunks/index.5dc5c8e5.js";import{e as A}from"../chunks/each.e59479a4.js";import{P as L,c as X}from"../chunks/Pokemon.60ed7d86.js";function B(o,e,a){const s=o.slice();return s[4]=e[a].opponent,s[5]=e[a].winner,s}function Y(o){let e,a="History",s,i,h,f=A(o[2]),n=[];for(let t=0;t<f.length;t+=1)n[t]=W(B(o,f,t));const y=t=>E(n[t],1,1,()=>{n[t]=null});return{c(){e=$("h2"),e.textContent=a,s=q();for(let t=0;t<n.length;t+=1)n[t].c();i=N()},l(t){e=k(t,"H2",{"data-svelte-h":!0}),D(e)!=="svelte-dhg2vq"&&(e.textContent=a),s=w(t);for(let l=0;l<n.length;l+=1)n[l].l(t);i=N()},m(t,l){C(t,e,l),C(t,s,l);for(let r=0;r<n.length;r+=1)n[r]&&n[r].m(t,l);C(t,i,l),h=!0},p(t,l){if(l&5){f=A(t[2]);let r;for(r=0;r<f.length;r+=1){const p=B(t,f,r);n[r]?(n[r].p(p,l),P(n[r],1)):(n[r]=W(p),n[r].c(),P(n[r],1),n[r].m(i.parentNode,i))}for(Q(),r=f.length;r<n.length;r+=1)y(r);R()}},i(t){if(!h){for(let l=0;l<f.length;l+=1)P(n[l]);h=!0}},o(t){n=n.filter(Boolean);for(let l=0;l<n.length;l+=1)E(n[l]);h=!1},d(t){t&&(m(e),m(s),m(i)),U(n,t)}}}function Z(o){let e,a='<img src="/src/lib/assets/crown.png" alt=""/> <p>Winner</p>';return{c(){e=$("span"),e.innerHTML=a,this.h()},l(s){e=k(s,"SPAN",{class:!0,"data-svelte-h":!0}),D(e)!=="svelte-1fu9k45"&&(e.innerHTML=a),this.h()},h(){g(e,"class","has-win")},m(s,i){C(s,e,i)},d(s){s&&m(e)}}}function ee(o){let e,a='<img src="/src/lib/assets/crown.png" alt=""/> <p>Winner</p>';return{c(){e=$("span"),e.innerHTML=a,this.h()},l(s){e=k(s,"SPAN",{class:!0,"data-svelte-h":!0}),D(e)!=="svelte-1fu9k45"&&(e.innerHTML=a),this.h()},h(){g(e,"class","has-win")},m(s,i){C(s,e,i)},d(s){s&&m(e)}}}function W(o){let e,a,s,i,h,f,n="vs",y,t,l,r,p,c;s=new L({props:{pokemon:o[0]}});let u=o[5]===o[0].uuid&&Z();l=new L({props:{pokemon:o[4]}});let d=o[5]===o[4].uuid&&ee();return{c(){e=$("div"),a=$("div"),M(s.$$.fragment),i=q(),u&&u.c(),h=q(),f=$("p"),f.textContent=n,y=q(),t=$("div"),M(l.$$.fragment),r=q(),d&&d.c(),p=q(),this.h()},l(_){e=k(_,"DIV",{class:!0});var b=x(e);a=k(b,"DIV",{class:!0});var H=x(a);S(s.$$.fragment,H),i=w(H),u&&u.l(H),H.forEach(m),h=w(b),f=k(b,"P",{class:!0,"data-svelte-h":!0}),D(f)!=="svelte-93qx69"&&(f.textContent=n),y=w(b),t=k(b,"DIV",{class:!0});var I=x(t);S(l.$$.fragment,I),r=w(I),d&&d.l(I),I.forEach(m),p=w(b),b.forEach(m),this.h()},h(){g(a,"class","fighter svelte-olfq0i"),g(f,"class","svelte-olfq0i"),g(t,"class","opponent svelte-olfq0i"),g(e,"class","history-item svelte-olfq0i")},m(_,b){C(_,e,b),v(e,a),T(s,a,null),v(a,i),u&&u.m(a,null),v(e,h),v(e,f),v(e,y),v(e,t),T(l,t,null),v(t,r),d&&d.m(t,null),v(e,p),c=!0},p:G,i(_){c||(P(s.$$.fragment,_),P(l.$$.fragment,_),c=!0)},o(_){E(s.$$.fragment,_),E(l.$$.fragment,_),c=!1},d(_){_&&m(e),V(s),u&&u.d(),V(l),d&&d.d()}}}function te(o){let e,a,s,i,h,f,n,y,t,l,r;a=new L({props:{pokemon:o[0]}});let p=o[2].length>0&&Y(o);return{c(){e=$("div"),M(a.$$.fragment),s=q(),i=$("span"),h=$("img"),n=q(),y=K(o[1]),t=q(),l=$("div"),p&&p.c(),this.h()},l(c){e=k(c,"DIV",{class:!0});var u=x(e);S(a.$$.fragment,u),s=w(u),i=k(u,"SPAN",{class:!0,style:!0});var d=x(i);h=k(d,"IMG",{src:!0,alt:!0}),n=w(d),y=O(d,o[1]),d.forEach(m),u.forEach(m),t=w(c),l=k(c,"DIV",{class:!0});var _=x(l);p&&p.l(_),_.forEach(m),this.h()},h(){z(h.src,f="/src/lib/assets/crown.png")||g(h,"src",f),g(h,"alt",""),g(i,"class","is-champion svelte-olfq0i"),g(i,"style",`color: ${X[o[0].types[0].type.name].secondary} !important;`),g(e,"class","fighter-wrapper svelte-olfq0i"),g(l,"class","history svelte-olfq0i")},m(c,u){C(c,e,u),T(a,e,null),v(e,s),v(e,i),v(i,h),v(i,n),v(i,y),C(c,t,u),C(c,l,u),p&&p.m(l,null),r=!0},p(c,[u]){c[2].length>0&&p.p(c,u)},i(c){r||(P(a.$$.fragment,c),P(p),r=!0)},o(c){E(a.$$.fragment,c),E(p),r=!1},d(c){c&&(m(e),m(t),m(l)),V(a),p&&p.d()}}}function se(o,e,a){let{data:s}=e;const{fighter:i,points:h,history:f}=s;return o.$$set=n=>{"data"in n&&a(3,s=n.data)},[i,h,f,s]}class ie extends F{constructor(e){super(),J(this,e,se,te,j,{data:3})}}export{ie as component};