import{$ as F,B as M,C as s,E as o,F as r,G as l,K as p,M as v,O as g,T as C,W as S,X as y,Y as _,Z as x,_ as A,aa as c,j as n,n as u,o as m,x as a}from"./chunk-YBZCWNHN.js";var j=[{path:"reactive",loadChildren:()=>import("./chunk-QMHZOQGE.js").then(t=>t.ReactiveModule)},{path:"auth",loadChildren:()=>import("./chunk-TE7RGEDK.js").then(t=>t.AuthModule)},{path:"**",redirectTo:"reactive"}],R=(()=>{class t{static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275mod=m({type:t})}static{this.\u0275inj=n({imports:[c.forRoot(j),c]})}}return t})();var w=t=>[t];function D(t,f){if(t&1&&(o(0,"li",3),p(1),r()),t&2){let i=f.$implicit;s("routerLink",g(2,w,i.route)),a(),v(" ",i.title," ")}}function I(t,f){if(t&1&&(o(0,"li",3),p(1),r()),t&2){let i=f.$implicit;s("routerLink",g(2,w,i.route)),a(),v(" ",i.title," ")}}var E=(()=>{class t{constructor(){this.reactiveMenu=[{title:"B\xE1sicos",route:"./reactive/basic"},{title:"Din\xE1micos",route:"./reactive/dynamic"},{title:"Switches",route:"./reactive/switches"}],this.authMenu=[{title:"Registro",route:"./reactive/sign-up"}]}static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275cmp=u({type:t,selectors:[["shared-side-menu"]],decls:11,vars:2,consts:[[1,"mt-3"],[1,"list-group"],["class","list-group-item","routerLinkActive","active",3,"routerLink",4,"ngFor","ngForOf"],["routerLinkActive","active",1,"list-group-item",3,"routerLink"]],template:function(e,h){e&1&&(o(0,"h2"),p(1," P\xE1ginas"),r(),l(2,"hr"),o(3,"h3",0),p(4," Reactive "),r(),o(5,"ul",1),M(6,D,2,4,"li",2),r(),o(7,"h3",0),p(8," Validaciones "),r(),o(9,"ul",1),M(10,I,2,4,"li",2),r()),e&2&&(a(6),s("ngForOf",h.reactiveMenu),a(4),s("ngForOf",h.authMenu))},dependencies:[C,A,F]})}}return t})();var N=(()=>{class t{constructor(){this.title="formsApp"}static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275cmp=u({type:t,selectors:[["app-root"]],decls:5,vars:0,consts:[[1,"row","mt-5"],[1,"col"],[1,"col-12","col-sm-4"]],template:function(e,h){e&1&&(o(0,"div",0)(1,"div",1),l(2,"router-outlet"),r(),o(3,"div",2),l(4,"shared-side-menu"),r()())},dependencies:[x,E]})}}return t})();var k=(()=>{class t{static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275mod=m({type:t})}static{this.\u0275inj=n({imports:[S,c]})}}return t})();var L=(()=>{class t{static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275mod=m({type:t,bootstrap:[N]})}static{this.\u0275inj=n({imports:[_,R,k]})}}return t})();y().bootstrapModule(L).catch(t=>console.error(t));
