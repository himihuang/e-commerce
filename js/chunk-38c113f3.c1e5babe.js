(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-38c113f3"],{"1ae4":function(e,t,c){e.exports=c.p+"img/logo.987c3b16.svg"},"1d1b":function(e,t,c){e.exports=c.p+"img/close.33571101.svg"},"493d":function(e,t,c){"use strict";c.r(t);var a=c("7a23"),n={class:"frontpage"},o={class:"cart-wrap"},r={class:"title-wrap"},l=Object(a["createElementVNode"])("h2",{class:"title"},"購物車",-1),i=Object(a["createElementVNode"])("span",null,null,-1),s=Object(a["createElementVNode"])("span",null,null,-1),d=[i,s],b={key:0,class:"cart-list"},u={key:1,class:"cart-noData"},m=Object(a["createElementVNode"])("h5",null,"目前您的購物車沒有商品",-1),j={class:"btn-wrap"},O=Object(a["createElementVNode"])("span",null," 繼續購物 ",-1),h={key:2,class:"btn-wrap"},p=Object(a["createElementVNode"])("span",null," 前往購物車 ",-1),f={class:"modal-bg"},N={class:"main-area"};function V(e,t,c,i,s,V){var v=Object(a["resolveComponent"])("loading"),E=Object(a["resolveComponent"])("cart"),C=Object(a["resolveComponent"])("router-link"),g=Object(a["resolveComponent"])("FrontNavbar"),w=Object(a["resolveComponent"])("RouterView"),k=Object(a["resolveComponent"])("FrontFooter");return Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],null,[Object(a["createVNode"])(v,{active:s.isLoading},null,8,["active"]),Object(a["createElementVNode"])("div",n,[Object(a["createVNode"])(a["Transition"],{name:"slide-fade"},{default:Object(a["withCtx"])((function(){return[Object(a["withDirectives"])(Object(a["createElementVNode"])("div",o,[Object(a["createElementVNode"])("div",r,[l,Object(a["createElementVNode"])("div",{class:"close",onClick:t[0]||(t[0]=function(){return V.closeCart&&V.closeCart.apply(V,arguments)})},d)]),0!==s.carts.length?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",b,[Object(a["createVNode"])(E,{"carts-items":s.carts,onUpdateQty:V.getCart,onUpdateItem:V.getCart},null,8,["carts-items","onUpdateQty","onUpdateItem"])])):Object(a["createCommentVNode"])("",!0),0==s.carts.length?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",u,[m,Object(a["createElementVNode"])("div",j,[Object(a["createVNode"])(C,{to:"/Products",class:"btn btn-primary--fill w-100",onClick:t[1]||(t[1]=function(e){return s.ShowCart=!1})},{default:Object(a["withCtx"])((function(){return[O]})),_:1})])])):Object(a["createCommentVNode"])("",!0),0!==s.carts.length?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",h,[Object(a["createVNode"])(C,{to:"/Carts",class:"btn btn-primary--fill w-100",onClick:t[2]||(t[2]=function(e){return s.ShowCart=!1})},{default:Object(a["withCtx"])((function(){return[p]})),_:1})])):Object(a["createCommentVNode"])("",!0)],512),[[a["vShow"],s.ShowCart]])]})),_:1}),Object(a["withDirectives"])(Object(a["createElementVNode"])("div",f,null,512),[[a["vShow"],s.ShowCart]]),Object(a["createVNode"])(g),Object(a["createElementVNode"])("div",N,[Object(a["createVNode"])(w)]),Object(a["createVNode"])(k)])],64)}c("99af");var v=c("1ae4"),E=c.n(v),C={class:"nav-desk w-100",ref:"navDesk"},g=Object(a["createElementVNode"])("img",{src:E.a,alt:"JJ飾品"},null,-1),w={class:"main"},k=Object(a["createTextVNode"])("商品分類"),x=Object(a["createTextVNode"])("關於我們"),y=Object(a["createTextVNode"])("部落格"),S={class:"side"},_=Object(a["createElementVNode"])("i",{class:"bi bi-suit-heart-fill"},null,-1),T=Object(a["createElementVNode"])("i",{class:"bi bi-person-fill fs-4"},null,-1),B=Object(a["createElementVNode"])("i",{class:"fas fa-shopping-cart"},null,-1),D={class:"nav-mobile",ref:"navMobile"},$={class:"nav-item"},F=Object(a["createElementVNode"])("img",{src:E.a,alt:"JJ飾品"},null,-1),U={class:"right-side"},J=Object(a["createElementVNode"])("i",{class:"bi bi-suit-heart-fill"},null,-1),q=Object(a["createElementVNode"])("i",{class:"fas fa-shopping-cart"},null,-1),L={class:"ham-wrap"},I=Object(a["createElementVNode"])("label",{class:"ham",for:"ham"},[Object(a["createElementVNode"])("span"),Object(a["createElementVNode"])("span"),Object(a["createElementVNode"])("span")],-1),M={class:"nav-content",ref:"mobile-nav-content"},H={class:"main"},R={class:"nav-item"},A=Object(a["createElementVNode"])("span",{class:"h1 me-4"},"Category",-1),Q=Object(a["createElementVNode"])("span",{class:"h6"},"商品分類",-1),P={class:"nav-item"},z=Object(a["createElementVNode"])("span",{class:"h1 me-4"},"About",-1),G=Object(a["createElementVNode"])("span",{class:"h6"},"關於我們",-1),K={class:"nav-item"},W=Object(a["createElementVNode"])("span",{class:"h1 me-4"},"Blog",-1),X=Object(a["createElementVNode"])("span",{class:"h6"},"部落格",-1),Y={class:"nav-item"},Z=Object(a["createElementVNode"])("span",{class:"h1 me-4"},"Contact Us",-1),ee=Object(a["createElementVNode"])("span",{class:"h6"},"聯絡我們",-1),te={class:"nav-item"},ce=Object(a["createElementVNode"])("span",{class:"me-4"},[Object(a["createElementVNode"])("i",{class:"far fa-user"})],-1),ae=Object(a["createElementVNode"])("span",null,"會員中心",-1);function ne(e,t,c,n,o,r){var l=Object(a["resolveComponent"])("router-link");return Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],null,[Object(a["createElementVNode"])("div",null,[Object(a["createElementVNode"])("div",C,[Object(a["createVNode"])(l,{to:"/",class:"logo"},{default:Object(a["withCtx"])((function(){return[g]})),_:1}),Object(a["createElementVNode"])("div",w,[Object(a["createVNode"])(l,{to:"/products",class:"nav-item"},{default:Object(a["withCtx"])((function(){return[k]})),_:1}),Object(a["createVNode"])(l,{to:"/about",class:"nav-item"},{default:Object(a["withCtx"])((function(){return[x]})),_:1}),Object(a["createVNode"])(l,{to:"/blogs",class:"nav-item"},{default:Object(a["withCtx"])((function(){return[y]})),_:1})]),Object(a["createElementVNode"])("div",S,[Object(a["createVNode"])(l,{to:"/Favorite",class:"nav-item"},{default:Object(a["withCtx"])((function(){return[_]})),_:1}),Object(a["createVNode"])(l,{to:"/login",class:"nav-item"},{default:Object(a["withCtx"])((function(){return[T]})),_:1}),Object(a["createVNode"])(l,{to:"",class:"nav-item cart-num-wrap",onClick:r.sideCartShow},{default:Object(a["withCtx"])((function(){return[Object(a["createTextVNode"])(Object(a["toDisplayString"])(o.cartsTotal.type)+" ",1),Object(a["withDirectives"])(Object(a["createElementVNode"])("span",{class:"cart-num"},Object(a["toDisplayString"])(o.cartsTotal),513),[[a["vShow"],0!==o.cartsTotal]]),B]})),_:1},8,["onClick"])])],512)]),Object(a["createElementVNode"])("div",D,[Object(a["createElementVNode"])("div",$,[Object(a["createVNode"])(l,{to:"/",class:"logo"},{default:Object(a["withCtx"])((function(){return[F]})),_:1})]),Object(a["createElementVNode"])("div",U,[Object(a["createVNode"])(l,{to:"/Favorite",class:"nav-item cart-num-wrap"},{default:Object(a["withCtx"])((function(){return[J]})),_:1}),Object(a["createVNode"])(l,{to:"",class:"nav-item cart-num-wrap pb-1",onClick:r.sideCartShow},{default:Object(a["withCtx"])((function(){return[Object(a["createTextVNode"])(Object(a["toDisplayString"])(o.cartsTotal.type)+" ",1),Object(a["withDirectives"])(Object(a["createElementVNode"])("span",{class:"cart-num"},Object(a["toDisplayString"])(o.cartsTotal),513),[[a["vShow"],0!==o.cartsTotal]]),q]})),_:1},8,["onClick"]),Object(a["createElementVNode"])("div",L,[Object(a["withDirectives"])(Object(a["createElementVNode"])("input",{type:"checkbox",id:"ham",ref:"ham","onUpdate:modelValue":t[0]||(t[0]=function(e){return o.ham=e})},null,512),[[a["vModelCheckbox"],o.ham]]),I,Object(a["createElementVNode"])("div",M,[Object(a["createElementVNode"])("ul",H,[Object(a["createElementVNode"])("li",R,[Object(a["createVNode"])(l,{to:"/products"},{default:Object(a["withCtx"])((function(){return[A,Q]})),_:1})]),Object(a["createElementVNode"])("li",P,[Object(a["createVNode"])(l,{to:"/about"},{default:Object(a["withCtx"])((function(){return[z,G]})),_:1})]),Object(a["createElementVNode"])("li",K,[Object(a["createVNode"])(l,{to:""},{default:Object(a["withCtx"])((function(){return[W,X]})),_:1})]),Object(a["createElementVNode"])("li",Y,[Object(a["createVNode"])(l,{to:""},{default:Object(a["withCtx"])((function(){return[Z,ee]})),_:1})])]),Object(a["createElementVNode"])("div",te,[Object(a["createVNode"])(l,{to:"/login",class:""},{default:Object(a["withCtx"])((function(){return[ce,ae]})),_:1})])],512)])])],512)],64)}c("d3b7"),c("159b");var oe=c("6be2"),re={data:function(){return{ShowCart:!1,carts:[],cartsTotal:0,ham:!1}},watch:{$route:function(e,t){this.ham=!1}},methods:{sideCartShow:function(){oe["a"].emit("cart-show",this.ShowCart)},getCart:function(){var e=this;this.$http.get("".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("himiapi","/cart")).then((function(t){e.carts=t.data.data.carts,e.cartsTotal=0,e.carts.forEach((function(t){e.cartsTotal+=t.qty}))}))},handleScroll:function(e){var t=this.$refs.navMobile.offsetHeight||"",c=this.$refs.navDesk.offsetHeight||"",a=e.target.documentElement.scrollTop;a>t||a>c?(this.$refs.navMobile.style.backgroundColor="#897B62",this.$refs.navDesk.style.backgroundColor="#897B62"):(this.$refs.navMobile.style.backgroundColor="transparent",this.$refs.navDesk.style.backgroundColor="transparent")}},mounted:function(){var e=this;window.addEventListener("scroll",this.handleScroll),this.getCart(),oe["a"].on("get-cart",(function(){e.getCart()})),oe["a"].on("delete-cart",(function(){e.getCart()}))},unmounted:function(){window.removeEventListener("scroll",this.handleScroll)}},le=c("d959"),ie=c.n(le);const se=ie()(re,[["render",ne]]);var de=se,be=c("dd8c"),ue=c.n(be),me={class:"footer"},je={class:"container"},Oe={class:"row"},he={class:"col-12 col-md-3"},pe=Object(a["createElementVNode"])("img",{src:ue.a,alt:"JJ飾品"},null,-1),fe=Object(a["createStaticVNode"])('<div class="col-12 col-md-3"><div class="title-wrap"><span class="h5 title">聯絡我們</span></div><ul class="list"><li><span>電話 ：</span><span><a href="tel:+886-0800000004">0800 000 004</a></span></li><li><span>營業時間：</span><span>9:00 am - 18:00 pm</span></li></ul></div>',1),Ne={class:"col-6 col-md-3"},Ve=Object(a["createElementVNode"])("div",{class:"title-wrap"},[Object(a["createElementVNode"])("span",{class:"h5 title"},"關於我們")],-1),ve={class:"link-list"},Ee=Object(a["createTextVNode"])("關於我們"),Ce=Object(a["createTextVNode"])("隱私權政策"),ge={class:"col-6 col-md-3"},we=Object(a["createElementVNode"])("div",{class:"title-wrap"},[Object(a["createElementVNode"])("span",{class:"h5 title"},"購物說明")],-1),ke={class:"link-list"},xe=Object(a["createTextVNode"])("付款與配送"),ye=Object(a["createTextVNode"])("退換貨說明"),Se=Object(a["createTextVNode"])("海外訂購"),_e=Object(a["createTextVNode"])("常見問題"),Te=Object(a["createElementVNode"])("div",{class:"copyright"}," Copyright Himi All Rights Reserved | Designed by Himi ",-1);function Be(e,t){var c=Object(a["resolveComponent"])("router-link");return Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],null,[Object(a["createElementVNode"])("div",me,[Object(a["createElementVNode"])("div",je,[Object(a["createElementVNode"])("div",Oe,[Object(a["createElementVNode"])("div",he,[Object(a["createVNode"])(c,{to:"/",class:"logo"},{default:Object(a["withCtx"])((function(){return[pe]})),_:1})]),fe,Object(a["createElementVNode"])("div",Ne,[Ve,Object(a["createElementVNode"])("ul",ve,[Object(a["createElementVNode"])("li",null,[Object(a["createVNode"])(c,{to:""},{default:Object(a["withCtx"])((function(){return[Ee]})),_:1})]),Object(a["createElementVNode"])("li",null,[Object(a["createVNode"])(c,{to:""},{default:Object(a["withCtx"])((function(){return[Ce]})),_:1})])])]),Object(a["createElementVNode"])("div",ge,[we,Object(a["createElementVNode"])("ul",ke,[Object(a["createElementVNode"])("li",null,[Object(a["createVNode"])(c,{to:""},{default:Object(a["withCtx"])((function(){return[xe]})),_:1})]),Object(a["createElementVNode"])("li",null,[Object(a["createVNode"])(c,{to:""},{default:Object(a["withCtx"])((function(){return[ye]})),_:1})]),Object(a["createElementVNode"])("li",null,[Object(a["createVNode"])(c,{to:""},{default:Object(a["withCtx"])((function(){return[Se]})),_:1})]),Object(a["createElementVNode"])("li",null,[Object(a["createVNode"])(c,{to:""},{default:Object(a["withCtx"])((function(){return[_e]})),_:1})])])])])])]),Te],64)}const De={},$e=ie()(De,[["render",Be]]);var Fe=$e,Ue=c("bb30"),Je={components:{cart:Ue["a"],FrontNavbar:de,FrontFooter:Fe},data:function(){return{isLoading:!0,carts:[],ShowCart:!1}},methods:{getCart:function(){var e=this;this.$http.get("".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("himiapi","/cart")).then((function(t){e.carts=t.data.data.carts}))},delCartItem:function(e){var t=this;this.$http.delete("".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("himiapi","/cart/").concat(e)).then((function(){t.getCart(),oe["a"].emit("get-cart")}))},closeCart:function(){this.ShowCart=!1}},mounted:function(){var e=this;this.getCart(),oe["a"].on("get-cart",(function(){e.getCart()})),oe["a"].on("cart-show",(function(t){e.ShowCart=!t})),setTimeout((function(){e.isLoading=!1}),1e3)}};c("bbad");const qe=ie()(Je,[["render",V]]);t["default"]=qe},6160:function(e,t,c){"use strict";c("7bf8")},"7bf8":function(e,t,c){},bb30:function(e,t,c){"use strict";var a=c("7a23"),n=c("1d1b"),o=c.n(n),r={class:"img-outer me-3"},l={class:"img-wrap"},i=["src","alt"],s={class:"txt-wrap me-3"},d={class:"price-wrap mb-3"},b={class:"me-2"},u={class:"num-select-wrap mb-3"},m=Object(a["createElementVNode"])("span",{class:"me-3"},"數量",-1),j={class:"num-select"},O=["onUpdate:modelValue","onChange"],h=["value"],p=["onClick"],f=Object(a["createElementVNode"])("img",{src:o.a,alt:"關閉"},null,-1),N=[f];function V(e,t,c,n,o,f){return Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(o.carts,(function(e,t){return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",{class:"cart-card",key:e.product.id},[Object(a["createElementVNode"])("div",r,[Object(a["createElementVNode"])("div",l,[Object(a["createElementVNode"])("img",{src:e.product.imageUrl,class:"img-fluid",alt:"商品圖片-".concat(t)},null,8,i)])]),Object(a["createElementVNode"])("div",s,[Object(a["createElementVNode"])("h5",null,Object(a["toDisplayString"])(e.product.title),1),Object(a["createElementVNode"])("div",d,[Object(a["createElementVNode"])("del",b,"NT$"+Object(a["toDisplayString"])(e.product.origin_price),1),Object(a["createElementVNode"])("span",null,"NT$"+Object(a["toDisplayString"])(e.product.price),1)]),Object(a["createElementVNode"])("div",u,[m,Object(a["createElementVNode"])("div",j,[Object(a["withDirectives"])(Object(a["createElementVNode"])("select",{name:"",id:"","onUpdate:modelValue":function(t){return e.qty=t},onChange:function(t){return f.updateCart(e.id,e.qty)}},[(Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(20,(function(e){return Object(a["createElementVNode"])("option",{value:e,key:e},Object(a["toDisplayString"])(e),9,h)})),64))],40,O),[[a["vModelSelect"],e.qty]])])])]),Object(a["createElementVNode"])("button",{type:"button",class:"btn delete",onClick:function(t){return f.delCartItem(e.id)}},N,8,p)])})),128)}c("99af");var v=c("6be2"),E={props:["carts-items"],emits:["update-qty","update-item"],data:function(){return{carts:[],cart:{}}},methods:{getCart:function(){var e=this;this.$http.get("".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("himiapi","/cart")).then((function(t){e.carts=e.cartsItems,e.carts=t.data.data.carts}))},delCartItem:function(e){var t=this;this.$http.delete("".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("himiapi","/cart/").concat(e)).then((function(){t.getCart(),t.$emit("update-item"),v["a"].emit("delete-cart")}))},updateCart:function(e,t){var c=this;this.cart={product_id:e,qty:t},this.$http.put("".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("himiapi","/cart/").concat(e),{data:this.cart}).then((function(){c.$emit("update-qty")}))}},mounted:function(){var e=this;this.getCart(),v["a"].on("get-cart",(function(){e.getCart()})),v["a"].on("add-cart",(function(t){e.carts=t,e.getCart()}))}},C=(c("6160"),c("d959")),g=c.n(C);const w=g()(E,[["render",V]]);t["a"]=w},bbad:function(e,t,c){"use strict";c("dbb1")},dbb1:function(e,t,c){},dd8c:function(e,t,c){e.exports=c.p+"img/footer-logo.e7443fef.svg"}}]);
//# sourceMappingURL=chunk-38c113f3.c1e5babe.js.map