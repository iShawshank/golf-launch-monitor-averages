import{_ as N}from"./nuxt-link.97f706a0.js";import{a as f,b as h,o as u,e as d,f as v,j as s,w as l,i as _,m as w,p as I,q as L,s as g,v as A,h as B,x as D}from"./entry.a786eaab.js";const T=f({});const F={class:"header px-10 py-1 bg-light-black border-neutral-2 sticky top-0 h-15 md:h-10"},G={class:"header__links grid grid-cols-3 md:grid-cols-6 lg:max-w-3xl"};function H(t,o,e,a,r,c){const n=N;return u(),d("header",F,[v("nav",G,[s(n,{class:"header__link border-r-2",to:"/"},{default:l(()=>[_("Home")]),_:1}),s(n,{class:"header__link border-r-2",to:"/PGA"},{default:l(()=>[_("PGA")]),_:1}),s(n,{class:"header__link md:border-r-2",to:"/LPGA"},{default:l(()=>[_("LPGA")]),_:1}),s(n,{class:"header__link col-span-3",to:"https://account.venmo.com/u/ishawshank39",target:"_blank"},{default:l(()=>[_("If you're enjoying this app, buy me a 🍻")]),_:1})])])}const x=h(T,[["render",H],["__scopeId","data-v-f970bd50"]]),P=f({name:"NuxtLoadingIndicator",props:{throttle:{type:Number,default:200},duration:{type:Number,default:2e3},height:{type:Number,default:3},color:{type:[String,Boolean],default:"repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"}},setup(t,{slots:o}){const e=V({duration:t.duration,throttle:t.throttle}),a=w();return a.hook("page:start",e.start),a.hook("page:finish",e.finish),I(e.clear),()=>L("div",{class:"nuxt-loading-indicator",style:{position:"fixed",top:0,right:0,left:0,pointerEvents:"none",width:"auto",height:`${t.height}px`,opacity:e.isLoading.value?1:0,background:t.color||void 0,backgroundSize:`${100/e.progress.value*100}% auto`,transform:`scaleX(${e.progress.value}%)`,transformOrigin:"left",transition:"transform 0.1s, height 0.4s, opacity 0.4s",zIndex:999999}},o)}});function V(t){const o=g(0),e=g(!1),a=A(()=>1e4/t.duration);let r=null,c=null;function n(){i(),o.value=0,t.throttle?c=setTimeout(()=>{e.value=!0,m()},t.throttle):(e.value=!0,m())}function p(){o.value=100,y()}function i(){clearInterval(r),clearTimeout(c),r=null,c=null}function $(k){o.value=Math.min(100,o.value+k)}function y(){i(),setTimeout(()=>{e.value=!1,setTimeout(()=>{o.value=0},400)},500)}function m(){r=setInterval(()=>{$(a.value)},100)}return{progress:o,isLoading:e,start:n,finish:p,clear:i}}const j=f({});const C={class:"border-neutral-2"},S={key:0,class:"icon-attribute text-xs",href:"https://www.flaticon.com/free-icons/golf-club",title:"golf club icons"};function z(t,o,e,a,r,c){return u(),d("footer",C,[t.$route.name==="tour"?(u(),d("a",S,"Golf club icons created by iconixar and juicy_fish - Flaticon")):B("",!0)])}const b=h(j,[["render",z],["__scopeId","data-v-7b042381"]]),E=f({components:{DefaultHeader:x,DefaultFooter:b}});const q={class:"pga bg-light-black w-screen text-green align-middle text-center"},M={class:"main-content h-full w-full bg-black"};function O(t,o,e,a,r,c){const n=x,p=P,i=b;return u(),d("div",q,[s(n),v("div",M,[s(p),D(t.$slots,"default",{},void 0,!0)]),s(i)])}const J=h(E,[["render",O],["__scopeId","data-v-c3961973"]]);export{J as default};
