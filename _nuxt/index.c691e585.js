import{_ as m}from"./nuxt-link.1e38e0db.js";import{a as s,b as n,o as c,e as a,j as r,w as g,f as e}from"./entry.03beaa83.js";const f=s({setup(){return{}},props:{logo:{type:String,required:!0},tour:{type:String,required:!0}}});const h={class:"tour-card m-3 shadow-md rounded-xl"},$={class:"p-5"},v=["src","alt"];function x(o,d,_,u,l,p){const t=m;return c(),a("div",h,[r(t,{to:`/${o.tour}`},{default:g(()=>[e("div",$,[e("img",{src:o.logo,alt:o.tour},null,8,v)])]),_:1},8,["to"])])}const i=n(f,[["render",x],["__scopeId","data-v-d01e4060"]]),w=s({components:{TourCard:i},metaInfo:{title:"Tour Averages"}}),y={class:"home container-large h-full grid grid-cols-1 items-center justify-center justify-items-center"},b=e("div",{class:"p-2 border-black border-b-2 dark:border-white"},[e("h2",null,"Select which tour averages you want")],-1),k={class:"tours grid grid-cols-1 sm:grid-cols-2 items-center justify-between justify-items-center max-w-xl w-full"};function j(o,d,_,u,l,p){const t=i;return c(),a("div",y,[b,e("div",k,[r(t,{logo:"/golf-launch-monitor-averages/img/PGATourBlack.png",tour:"PGA"}),r(t,{logo:"/golf-launch-monitor-averages/img/LPGABlack.png",tour:"LPGA"})])])}const C=n(w,[["render",j]]);export{C as default};
