(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-72373291"],{"057f":function(e,t,r){var c=r("c6b6"),n=r("fc6a"),o=r("241c").f,i=r("4dae"),a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(e){try{return o(e)}catch(t){return i(a)}};e.exports.f=function(e){return a&&"Window"==c(e)?s(e):o(n(e))}},"0fd0":function(e,t,r){"use strict";r.r(t);r("a4d3"),r("e01a");var c=r("7a23"),n={class:"product"},o={class:"container cus-mb-lg cus-mt-lg"},i={class:"row content"},a={class:"col-12 col-md-6"},s={class:"img-wrap"},u=["src"],l={class:"img-wrap"},d=["src","alt"],f={class:"img-wrap"},p=["src"],b={class:"img-wrap"},m=["src","alt"],v={class:"col-12 col-md-6"},h={class:"title-wrap"},g={class:"price-wrap"},O={class:"h3 me-2"},j={class:"des-wrap"},N=Object(c["createElementVNode"])("h5",null,"商品描述",-1),w={class:"content-wrap"},y=Object(c["createElementVNode"])("h5",null,"商品內容",-1),E={class:"num-select-wrap"},S=Object(c["createElementVNode"])("span",{class:"me-3"},"數量",-1),V={class:"num-select"},k=["selected"],x=["value"],I={class:"btn-wrap product-card"},C={class:"products-wrap bgColor-primary--border"},B={class:"container"},P=Object(c["createElementVNode"])("div",{class:"cart-title"},[Object(c["createElementVNode"])("span",{class:"h2"},"加購商品")],-1),_={class:"row row-cols-2 row-cols-md-4"};function F(e,t,r,F,T,$){var A=Object(c["resolveComponent"])("loading"),L=Object(c["resolveComponent"])("swiper-slide"),D=Object(c["resolveComponent"])("swiper"),M=Object(c["resolveComponent"])("product",!0);return Object(c["openBlock"])(),Object(c["createElementBlock"])(c["Fragment"],null,[Object(c["createVNode"])(A,{active:T.isLoading},null,8,["active"]),Object(c["createElementVNode"])("div",n,[Object(c["createElementVNode"])("div",o,[Object(c["createElementVNode"])("div",i,[Object(c["createElementVNode"])("div",a,[Object(c["createVNode"])(D,{spaceBetween:10,navigation:!0,thumbs:{swiper:T.thumbsSwiper},modules:T.modules,class:"product-img"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(L,null,{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",s,[Object(c["createElementVNode"])("img",{src:T.product.imageUrl,alt:"商品圖片"},null,8,u)])]})),_:1}),(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(T.product.imagesUrl,(function(e,t){return Object(c["openBlock"])(),Object(c["createBlock"])(L,{key:e},{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",l,[Object(c["createElementVNode"])("img",{src:e,alt:"商品圖片-".concat(t)},null,8,d)])]})),_:2},1024)})),128))]})),_:1},8,["thumbs","modules"]),Object(c["createVNode"])(D,{onSwiper:$.setThumbsSwiper,spaceBetween:10,slidesPerView:4,freeMode:!0,watchSlidesProgress:!0,modules:T.modules,class:"product-thumbnail"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(L,null,{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",f,[Object(c["createElementVNode"])("img",{src:T.product.imageUrl,alt:"商品圖片"},null,8,p)])]})),_:1}),(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(T.product.imagesUrl,(function(e,t){return Object(c["openBlock"])(),Object(c["createBlock"])(L,{key:e},{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",b,[Object(c["createElementVNode"])("img",{src:e,alt:"商品圖片-".concat(t)},null,8,m)])]})),_:2},1024)})),128))]})),_:1},8,["onSwiper","modules"])]),Object(c["createElementVNode"])("div",v,[Object(c["createElementVNode"])("div",h,[Object(c["createElementVNode"])("h1",null,Object(c["toDisplayString"])(T.product.title),1)]),Object(c["createElementVNode"])("div",g,[Object(c["createElementVNode"])("span",O,"NT$ "+Object(c["toDisplayString"])(T.product.price)+" 元",1),Object(c["createElementVNode"])("del",null,"NT$ "+Object(c["toDisplayString"])(T.product.origin_price)+" 元",1)]),Object(c["createElementVNode"])("div",j,[N,Object(c["createElementVNode"])("p",null,Object(c["toDisplayString"])(T.product.description),1)]),Object(c["createElementVNode"])("div",w,[y,Object(c["createElementVNode"])("p",null,Object(c["toDisplayString"])(T.product.content),1)]),Object(c["createElementVNode"])("div",E,[S,Object(c["createElementVNode"])("div",V,[Object(c["withDirectives"])(Object(c["createElementVNode"])("select",{name:"",id:"","onUpdate:modelValue":t[0]||(t[0]=function(e){return T.selectedNum=e}),selected:T.selectedNum},[(Object(c["openBlock"])(),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(20,(function(e){return Object(c["createElementVNode"])("option",{key:e,value:e},Object(c["toDisplayString"])(e),9,x)})),64))],8,k),[[c["vModelSelect"],T.selectedNum]])])]),Object(c["createElementVNode"])("div",I,[Object(c["createElementVNode"])("button",{class:"btn btn-line w-100",type:"button",onClick:t[1]||(t[1]=function(e){return $.updateCart(T.product.id)})}," 加入購物車 ")])])])]),Object(c["createElementVNode"])("div",C,[Object(c["createElementVNode"])("div",B,[P,Object(c["createElementVNode"])("div",_,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(T.products,(function(e){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{class:"col mb-4 color--white",key:e.id},[Object(c["createVNode"])(M,{"product-item":e,onToggleFavorite:$.toggleFavorite,favorite:T.favorite},null,8,["product-item","onToggleFavorite","favorite"])])})),128))])])])])],64)}r("c740"),r("a434"),r("e9c4"),r("99af"),r("fb6a"),r("d3b7"),r("159b"),r("a9e3");var T=r("6be2"),$=r("e915"),A=r("8349"),L=r("4da1"),D=(r("5f67"),r("e192"),r("0939"),r("a8dc"),{components:{product:$["a"],Swiper:A["a"],SwiperSlide:A["b"]},data:function(){return{isLoading:!0,id:"",product:{},products:[],selectedNum:1,carts:[],modules:[L["b"],L["c"],L["e"]],thumbsSwiper:null,favorite:JSON.parse(window.localStorage.getItem("toggle-favorite"))||[]}},watch:{$route:function(e,t){this.getProduct()}},methods:{toggleFavorite:function(e){var t=this.favorite.findIndex((function(t){return t===e}));-1===t?this.favorite.push(e):this.favorite.splice(t,1),window.localStorage.setItem("toggle-favorite",JSON.stringify(this.favorite))},getProducts:function(){var e=this;this.$http.get("".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("himiapi","/products/all")).then((function(t){e.products=t.data.products.slice(0,4)}))},getProduct:function(){var e=this;this.id=this.$route.params.id,this.$http.get("".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("himiapi","/product/").concat(this.id)).then((function(t){e.product=t.data.product}))},getCart:function(){var e=this;this.$http.get("".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("himiapi","/cart")).then((function(t){e.carts=t.data.data.carts}))},updateCart:function(e){var t=this;if(!this.carts===[])this.carts.forEach((function(r){var c={product_id:r.product_id,qty:Number(t.selectedNum)};e===r.product.id&&t.$http.put("".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("himiapi","/cart/").concat(r.id),{data:c}).then((function(){T["a"].emit("get-cart")}))}));else{var r={product_id:e,qty:Number(this.selectedNum)};this.$http.post("".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("himiapi","/cart"),{data:r}).then((function(){T["a"].emit("get-cart")}))}},setThumbsSwiper:function(e){this.thumbsSwiper=e}},mounted:function(){this.getProduct(),this.getProducts(),this.getCart(),this.isLoading=!1},unmounted:function(){}}),M=r("d959"),U=r.n(M);const J=U()(D,[["render",F]]);t["default"]=J},"408a":function(e,t,r){var c=r("e330");e.exports=c(1..valueOf)},"428f":function(e,t,r){var c=r("da84");e.exports=c},"4dae":function(e,t,r){var c=r("da84"),n=r("23cb"),o=r("07fa"),i=r("8418"),a=c.Array,s=Math.max;e.exports=function(e,t,r){for(var c=o(e),u=n(t,c),l=n(void 0===r?c:r,c),d=a(s(l-u,0)),f=0;u<l;u++,f++)i(d,f,e[u]);return d.length=f,d}},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,r){var c=r("e330"),n=r("1d80"),o=r("577e"),i=r("5899"),a=c("".replace),s="["+i+"]",u=RegExp("^"+s+s+"*"),l=RegExp(s+s+"*$"),d=function(e){return function(t){var r=o(n(t));return 1&e&&(r=a(r,u,"")),2&e&&(r=a(r,l,"")),r}};e.exports={start:d(1),end:d(2),trim:d(3)}},7156:function(e,t,r){var c=r("1626"),n=r("861d"),o=r("d2bb");e.exports=function(e,t,r){var i,a;return o&&c(i=t.constructor)&&i!==r&&n(a=i.prototype)&&a!==r.prototype&&o(e,a),e}},"746f":function(e,t,r){var c=r("428f"),n=r("1a2d"),o=r("e538"),i=r("9bf2").f;e.exports=function(e){var t=c.Symbol||(c.Symbol={});n(t,e)||i(t,e,{value:o.f(e)})}},a4d3:function(e,t,r){"use strict";var c=r("23e7"),n=r("da84"),o=r("d066"),i=r("2ba4"),a=r("c65b"),s=r("e330"),u=r("c430"),l=r("83ab"),d=r("4930"),f=r("d039"),p=r("1a2d"),b=r("e8b5"),m=r("1626"),v=r("861d"),h=r("3a9b"),g=r("d9b5"),O=r("825a"),j=r("7b0b"),N=r("fc6a"),w=r("a04b"),y=r("577e"),E=r("5c6c"),S=r("7c73"),V=r("df75"),k=r("241c"),x=r("057f"),I=r("7418"),C=r("06cf"),B=r("9bf2"),P=r("37e8"),_=r("d1e7"),F=r("f36a"),T=r("6eeb"),$=r("5692"),A=r("f772"),L=r("d012"),D=r("90e3"),M=r("b622"),U=r("e538"),J=r("746f"),R=r("d44e"),G=r("69f3"),q=r("b727").forEach,X=A("hidden"),Y="Symbol",Q="prototype",W=M("toPrimitive"),z=G.set,H=G.getterFor(Y),K=Object[Q],Z=n.Symbol,ee=Z&&Z[Q],te=n.TypeError,re=n.QObject,ce=o("JSON","stringify"),ne=C.f,oe=B.f,ie=x.f,ae=_.f,se=s([].push),ue=$("symbols"),le=$("op-symbols"),de=$("string-to-symbol-registry"),fe=$("symbol-to-string-registry"),pe=$("wks"),be=!re||!re[Q]||!re[Q].findChild,me=l&&f((function(){return 7!=S(oe({},"a",{get:function(){return oe(this,"a",{value:7}).a}})).a}))?function(e,t,r){var c=ne(K,t);c&&delete K[t],oe(e,t,r),c&&e!==K&&oe(K,t,c)}:oe,ve=function(e,t){var r=ue[e]=S(ee);return z(r,{type:Y,tag:e,description:t}),l||(r.description=t),r},he=function(e,t,r){e===K&&he(le,t,r),O(e);var c=w(t);return O(r),p(ue,c)?(r.enumerable?(p(e,X)&&e[X][c]&&(e[X][c]=!1),r=S(r,{enumerable:E(0,!1)})):(p(e,X)||oe(e,X,E(1,{})),e[X][c]=!0),me(e,c,r)):oe(e,c,r)},ge=function(e,t){O(e);var r=N(t),c=V(r).concat(ye(r));return q(c,(function(t){l&&!a(je,r,t)||he(e,t,r[t])})),e},Oe=function(e,t){return void 0===t?S(e):ge(S(e),t)},je=function(e){var t=w(e),r=a(ae,this,t);return!(this===K&&p(ue,t)&&!p(le,t))&&(!(r||!p(this,t)||!p(ue,t)||p(this,X)&&this[X][t])||r)},Ne=function(e,t){var r=N(e),c=w(t);if(r!==K||!p(ue,c)||p(le,c)){var n=ne(r,c);return!n||!p(ue,c)||p(r,X)&&r[X][c]||(n.enumerable=!0),n}},we=function(e){var t=ie(N(e)),r=[];return q(t,(function(e){p(ue,e)||p(L,e)||se(r,e)})),r},ye=function(e){var t=e===K,r=ie(t?le:N(e)),c=[];return q(r,(function(e){!p(ue,e)||t&&!p(K,e)||se(c,ue[e])})),c};if(d||(Z=function(){if(h(ee,this))throw te("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?y(arguments[0]):void 0,t=D(e),r=function(e){this===K&&a(r,le,e),p(this,X)&&p(this[X],t)&&(this[X][t]=!1),me(this,t,E(1,e))};return l&&be&&me(K,t,{configurable:!0,set:r}),ve(t,e)},ee=Z[Q],T(ee,"toString",(function(){return H(this).tag})),T(Z,"withoutSetter",(function(e){return ve(D(e),e)})),_.f=je,B.f=he,P.f=ge,C.f=Ne,k.f=x.f=we,I.f=ye,U.f=function(e){return ve(M(e),e)},l&&(oe(ee,"description",{configurable:!0,get:function(){return H(this).description}}),u||T(K,"propertyIsEnumerable",je,{unsafe:!0}))),c({global:!0,wrap:!0,forced:!d,sham:!d},{Symbol:Z}),q(V(pe),(function(e){J(e)})),c({target:Y,stat:!0,forced:!d},{for:function(e){var t=y(e);if(p(de,t))return de[t];var r=Z(t);return de[t]=r,fe[r]=t,r},keyFor:function(e){if(!g(e))throw te(e+" is not a symbol");if(p(fe,e))return fe[e]},useSetter:function(){be=!0},useSimple:function(){be=!1}}),c({target:"Object",stat:!0,forced:!d,sham:!l},{create:Oe,defineProperty:he,defineProperties:ge,getOwnPropertyDescriptor:Ne}),c({target:"Object",stat:!0,forced:!d},{getOwnPropertyNames:we,getOwnPropertySymbols:ye}),c({target:"Object",stat:!0,forced:f((function(){I.f(1)}))},{getOwnPropertySymbols:function(e){return I.f(j(e))}}),ce){var Ee=!d||f((function(){var e=Z();return"[null]"!=ce([e])||"{}"!=ce({a:e})||"{}"!=ce(Object(e))}));c({target:"JSON",stat:!0,forced:Ee},{stringify:function(e,t,r){var c=F(arguments),n=t;if((v(t)||void 0!==e)&&!g(e))return b(t)||(t=function(e,t){if(m(n)&&(t=a(n,this,e,t)),!g(t))return t}),c[1]=t,i(ce,null,c)}})}if(!ee[W]){var Se=ee.valueOf;T(ee,W,(function(e){return a(Se,this)}))}R(Z,Y),L[X]=!0},a8dc:function(e,t,r){},a9e3:function(e,t,r){"use strict";var c=r("83ab"),n=r("da84"),o=r("e330"),i=r("94ca"),a=r("6eeb"),s=r("1a2d"),u=r("7156"),l=r("3a9b"),d=r("d9b5"),f=r("c04e"),p=r("d039"),b=r("241c").f,m=r("06cf").f,v=r("9bf2").f,h=r("408a"),g=r("58a8").trim,O="Number",j=n[O],N=j.prototype,w=n.TypeError,y=o("".slice),E=o("".charCodeAt),S=function(e){var t=f(e,"number");return"bigint"==typeof t?t:V(t)},V=function(e){var t,r,c,n,o,i,a,s,u=f(e,"number");if(d(u))throw w("Cannot convert a Symbol value to a number");if("string"==typeof u&&u.length>2)if(u=g(u),t=E(u,0),43===t||45===t){if(r=E(u,2),88===r||120===r)return NaN}else if(48===t){switch(E(u,1)){case 66:case 98:c=2,n=49;break;case 79:case 111:c=8,n=55;break;default:return+u}for(o=y(u,2),i=o.length,a=0;a<i;a++)if(s=E(o,a),s<48||s>n)return NaN;return parseInt(o,c)}return+u};if(i(O,!j(" 0o1")||!j("0b1")||j("+0x1"))){for(var k,x=function(e){var t=arguments.length<1?0:j(S(e)),r=this;return l(N,r)&&p((function(){h(r)}))?u(Object(t),r,x):t},I=c?b(j):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),C=0;I.length>C;C++)s(j,k=I[C])&&!s(x,k)&&v(x,k,m(j,k));x.prototype=N,N.constructor=x,a(n,O,x)}},e01a:function(e,t,r){"use strict";var c=r("23e7"),n=r("83ab"),o=r("da84"),i=r("e330"),a=r("1a2d"),s=r("1626"),u=r("3a9b"),l=r("577e"),d=r("9bf2").f,f=r("e893"),p=o.Symbol,b=p&&p.prototype;if(n&&s(p)&&(!("description"in b)||void 0!==p().description)){var m={},v=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:l(arguments[0]),t=u(b,this)?new p(e):void 0===e?p():p(e);return""===e&&(m[t]=!0),t};f(v,p),v.prototype=b,b.constructor=v;var h="Symbol(test)"==String(p("test")),g=i(b.toString),O=i(b.valueOf),j=/^Symbol\((.*)\)[^)]+$/,N=i("".replace),w=i("".slice);d(b,"description",{configurable:!0,get:function(){var e=O(this),t=g(e);if(a(m,e))return"";var r=h?w(t,7,-1):N(t,j,"$1");return""===r?void 0:r}}),c({global:!0,forced:!0},{Symbol:v})}},e192:function(e,t,r){},e538:function(e,t,r){var c=r("b622");t.f=c},fb6a:function(e,t,r){"use strict";var c=r("23e7"),n=r("da84"),o=r("e8b5"),i=r("68ee"),a=r("861d"),s=r("23cb"),u=r("07fa"),l=r("fc6a"),d=r("8418"),f=r("b622"),p=r("1dde"),b=r("f36a"),m=p("slice"),v=f("species"),h=n.Array,g=Math.max;c({target:"Array",proto:!0,forced:!m},{slice:function(e,t){var r,c,n,f=l(this),p=u(f),m=s(e,p),O=s(void 0===t?p:t,p);if(o(f)&&(r=f.constructor,i(r)&&(r===h||o(r.prototype))?r=void 0:a(r)&&(r=r[v],null===r&&(r=void 0)),r===h||void 0===r))return b(f,m,O);for(c=new(void 0===r?h:r)(g(O-m,0)),n=0;m<O;m++,n++)m in f&&d(c,n,f[m]);return c.length=n,c}})}}]);
//# sourceMappingURL=chunk-72373291.f7c0f08f.js.map