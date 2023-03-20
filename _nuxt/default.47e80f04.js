import{_ as N}from"./nuxt-link.5f162dd2.js";import{a as u,b as h,o as l,e as _,f as v,j as c,w as f,i as p,m as I,p as w,q as L,s as g,v as A,h as D,x as T}from"./entry.bdcd3152.js";const B=u({});const G={class:"header flex px-10 py-1 bg-light-black border-neutral-2 sticky top-0"},F={class:"header__links"};function H(t,o,e,n,s,r){const a=N;return l(),_("header",G,[v("nav",F,[c(a,{class:"header__link border-r-2",to:"/"},{default:f(()=>[p("Home")]),_:1}),c(a,{class:"header__link border-r-2",to:"/PGA"},{default:f(()=>[p("PGA")]),_:1}),c(a,{class:"header__link",to:"/LPGA"},{default:f(()=>[p("LPGA")]),_:1})])])}const x=h(B,[["render",H],["__scopeId","data-v-a75b8cd6"]]),P=u({name:"NuxtLoadingIndicator",props:{throttle:{type:Number,default:200},duration:{type:Number,default:2e3},height:{type:Number,default:3},color:{type:[String,Boolean],default:"repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"}},setup(t,{slots:o}){const e=V({duration:t.duration,throttle:t.throttle}),n=I();return n.hook("page:start",e.start),n.hook("page:finish",e.finish),w(e.clear),()=>L("div",{class:"nuxt-loading-indicator",style:{position:"fixed",top:0,right:0,left:0,pointerEvents:"none",width:"auto",height:`${t.height}px`,opacity:e.isLoading.value?1:0,background:t.color||void 0,backgroundSize:`${100/e.progress.value*100}% auto`,transform:`scaleX(${e.progress.value}%)`,transformOrigin:"left",transition:"transform 0.1s, height 0.4s, opacity 0.4s",zIndex:999999}},o)}});function V(t){const o=g(0),e=g(!1),n=A(()=>1e4/t.duration);let s=null,r=null;function a(){i(),o.value=0,t.throttle?r=setTimeout(()=>{e.value=!0,m()},t.throttle):(e.value=!0,m())}function d(){o.value=100,y()}function i(){clearInterval(s),clearTimeout(r),s=null,r=null}function $(k){o.value=Math.min(100,o.value+k)}function y(){i(),setTimeout(()=>{e.value=!1,setTimeout(()=>{o.value=0},400)},500)}function m(){s=setInterval(()=>{$(n.value)},100)}return{progress:o,isLoading:e,start:a,finish:d,clear:i}}const C=u({});const S={class:"border-neutral-2"},j={key:0,class:"icon-attribute text-xs",href:"https://www.flaticon.com/free-icons/golf-club",title:"golf club icons"};function z(t,o,e,n,s,r){return l(),_("footer",S,[this.$route.name==="tour"?(l(),_("a",j,"Golf club icons created by iconixar and juicy_fish - Flaticon")):D("",!0)])}const b=h(C,[["render",z],["__scopeId","data-v-53bbce5a"]]),E=u({components:{DefaultHeader:x,DefaultFooter:b}});const q={class:"pga bg-light-black w-screen text-green align-middle text-center"},M={class:"main-content h-full w-full bg-black"};function O(t,o,e,n,s,r){const a=x,d=P,i=b;return l(),_("div",q,[c(a),v("div",M,[c(d),T(t.$slots,"default",{},void 0,!0)]),c(i)])}const J=h(E,[["render",O],["__scopeId","data-v-c3961973"]]);export{J as default};
