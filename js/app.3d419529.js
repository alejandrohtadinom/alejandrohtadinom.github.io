(function(t){function a(a){for(var s,n,o=a[0],c=a[1],l=a[2],u=0,d=[];u<o.length;u++)n=o[u],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&d.push(i[n][0]),i[n]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);m&&m(a);while(d.length)d.shift()();return r.push.apply(r,l||[]),e()}function e(){for(var t,a=0;a<r.length;a++){for(var e=r[a],s=!0,n=1;n<e.length;n++){var c=e[n];0!==i[c]&&(s=!1)}s&&(r.splice(a--,1),t=o(o.s=e[0]))}return t}var s={},i={app:0},r=[];function n(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"d40befd0"}[t]+".js"}function o(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.e=function(t){var a=[],e=i[t];if(0!==e)if(e)a.push(e[2]);else{var s=new Promise((function(a,s){e=i[t]=[a,s]}));a.push(e[2]=s);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=n(t);var l=new Error;r=function(a){c.onerror=c.onload=null,clearTimeout(u);var e=i[t];if(0!==e){if(e){var s=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src;l.message="Loading chunk "+t+" failed.\n("+s+": "+r+")",l.name="ChunkLoadError",l.type=s,l.request=r,e[1](l)}i[t]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:c})}),12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(a)},o.m=t,o.c=s,o.d=function(t,a,e){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)o.d(e,s,function(a){return t[a]}.bind(null,s));return e},o.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="/alejandrohtadinom.github.io/",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=a,c=c.slice();for(var u=0;u<c.length;u++)a(c[u]);var m=l;r.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"0281":function(t,a,e){t.exports=e.p+"img/bio-4.63bf4d6c.jpg"},"058c":function(t,a,e){t.exports=e.p+"img/bio-10.dc3265e8.jpg"},"0764":function(t,a,e){t.exports=e.p+"img/card-3.19cb2432.jpg"},"0c73":function(t,a,e){t.exports=e.p+"img/bio-main.ff5a344c.jpg"},"2de2":function(t,a,e){t.exports=e.p+"img/bio-9.450220a8.jpg"},"400e":function(t,a,e){t.exports=e.p+"img/card-4.aa22cca4.jpg"},"567b":function(t,a,e){t.exports=e.p+"img/bio-1.a2d4307b.jpg"},"56d7":function(t,a,e){"use strict";e.r(a);e("cadf"),e("551c"),e("f751"),e("097d");var s=e("2b0e"),i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("baseNavbarComponent"),e("router-view")],1)},r=[],n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"navbar-container"},[e("nav",{staticClass:"navbar"},[e("ul",{staticClass:"nav-content"},[e("li",{staticClass:"nav-item"},[e("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),e("li",{staticClass:"nav-item"},[e("router-link",{attrs:{to:"service"}},[t._v("Servicios")])],1),e("li",{staticClass:"nav-item"},[e("router-link",{attrs:{to:"about"}},[t._v("Sobre mi")])],1),e("li",{staticClass:"nav-item"},[e("router-link",{attrs:{to:"contact"}},[t._v("Contacto")])],1)])])])},o=[],c={name:"navbar"},l=c,u=e("2877"),m=Object(u["a"])(l,n,o,!1,null,null,null),d=m.exports,p={name:"app",components:{baseNavbarComponent:d}},g=p,f=(e("5c0b"),Object(u["a"])(g,i,r,!1,null,null,null)),v=f.exports,b=e("8c4f"),h=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"home"},[t._m(0),e("main",[t._m(1),t._m(2),t._m(3),e("section",{attrs:{id:"contact"}},[e("div",{staticClass:"contact-wrapper"},[t._m(4),e("div",{staticClass:"contact-form"},[e("form",{on:{submit:t.sendForm}},[e("label",{attrs:{for:"full-name"}},[t._v("Full Name")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",name:"name",id:"full-name",placeholder:"Nombre",required:"true"},domProps:{value:t.name},on:{input:function(a){a.target.composing||(t.name=a.target.value)}}}),e("label",{attrs:{for:"email-address"}},[t._v("Correo")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",name:"_replyto",id:"email-address",placeholder:"email@domain.tld",required:"true"},domProps:{value:t.email},on:{input:function(a){a.target.composing||(t.email=a.target.value)}}}),e("label",{attrs:{for:"message"}},[t._v("Mensaje")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],attrs:{rows:"5",name:"message",id:"message",placeholder:"Mensaje",required:"true"},domProps:{value:t.message},on:{input:function(a){a.target.composing||(t.message=a.target.value)}}}),e("input",{attrs:{type:"submit",value:"Submit"}})])])])])])])},C=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("header",{staticClass:"header-container"},[e("div",{staticClass:"header-rect"}),e("div",{staticClass:"header-rect-small header-rect-small-1"}),e("div",{staticClass:"header-rect-small header-rect-small-2"}),e("div",{staticClass:"header-rect-small header-rect-small-3"}),e("div",{staticClass:"header-rect-small header-rect-small-4"}),e("div",{staticClass:"header-sub"},[e("h3",{staticClass:"tag-line"},[t._v("Programmer // Developer // Thinker")]),e("div",{staticClass:"cta-container"},[e("a",{staticClass:"cta",attrs:{href:"/about"}},[t._v("Sobre mi")]),e("a",{staticClass:"cta",attrs:{href:"/contact"}},[t._v("Contacto")])])]),e("div",{staticClass:"header-title"},[e("h1",{staticClass:"page-title"},[t._v("Alejandro H Tadino M")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",{attrs:{id:"products"}},[s("div",{staticClass:"product"},[s("img",{attrs:{src:e("d08a"),alt:""}}),s("h2",[t._v("Posicionamiento web")])]),s("div",{staticClass:"product"},[s("img",{attrs:{src:e("8602"),alt:""}}),s("h2",[t._v("Aplicacioens en linea")])]),s("div",{staticClass:"product"},[s("img",{attrs:{src:e("e65a"),alt:""}}),s("h2",[t._v("Asesorameinto tecnologico")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",{attrs:{id:"services"}},[s("div",{staticClass:"service"},[s("figure",[s("img",{attrs:{src:e("a2ce"),alt:"Photo by Carlos Muza on Unsplash"}}),s("figcaption",[s("h3",{staticClass:"service-tag"},[t._v("Poscionamiento en la Web")]),s("p",[t._v("\n                  Posicione su negocio, producto o servicio en las primeras paginas de los buscadores y destaque entre su competencia.\n              ")])])])]),s("div",{staticClass:"service"},[s("figure",[s("img",{attrs:{src:e("f27a"),alt:""}}),s("figcaption",[s("h3",{staticClass:"service-tag"},[t._v("Diseño de aplicaciones")]),s("p",[t._v("\n                  Diseña tu pagina web a tu manera.\n              ")])])])]),s("div",{staticClass:"service"},[s("figure",[s("img",{attrs:{src:e("0764"),alt:""}}),s("figcaption",[s("h3",{staticClass:"service-tag"},[t._v("Tu blog a tu manera")]),s("p",[t._v("\n                  Inicia tu carrera Blogger con el pie derecho, diseño, asesoramiento e instalacion de Wordpress, Joomla, Drupal, Blogger...\n              ")])])])]),s("div",{staticClass:"service"},[s("figure",[s("img",{attrs:{src:e("400e"),alt:""}}),s("figcaption",[s("h3",{staticClass:"service-tag"},[t._v("Tu propia tienda en linea")]),s("p",[t._v("\n                  Tener tu propio negocio en linea nunca fue tan facil.\n              ")])])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",{attrs:{id:"about"}},[s("div",{staticClass:"bio-img"},[s("div",{staticClass:"about-img about-img about-img-1"},[s("img",{attrs:{alt:"",src:e("567b")}})]),s("div",{staticClass:"about-img about-img-2"},[s("img",{attrs:{alt:"",src:e("66e0")}})]),s("div",{staticClass:"about-img about-img-3"},[s("img",{attrs:{alt:"",src:e("5eb6")}})]),s("div",{staticClass:"about-img about-img-4"},[s("img",{attrs:{alt:"",src:e("0281")}})]),s("div",{staticClass:"about-img about-img-5"},[s("img",{attrs:{alt:"",src:e("95e4")}})]),s("div",{staticClass:"about-img about-img-6"},[s("img",{attrs:{alt:"",src:e("b965")}})]),s("div",{staticClass:"about-img about-img-7"},[s("img",{attrs:{alt:"",src:e("8dcf")}})]),s("div",{staticClass:"about-img about-img-8"},[s("img",{attrs:{alt:"",src:e("56f2")}})]),s("div",{staticClass:"about-img about-img-9"},[s("img",{attrs:{alt:"",src:e("2de2")}})]),s("div",{staticClass:"about-img about-img-10"},[s("img",{attrs:{alt:"",src:e("058c")}})]),s("div",{staticClass:"about-img about-img-11"},[s("img",{attrs:{alt:"",src:e("6b3a")}})])]),s("div",{staticClass:"bio-main"},[s("img",{attrs:{alt:"",src:e("0c73")}}),s("div",{staticClass:"about-text"},[s("h2",[t._v("Alejandro H Tadino M")]),s("p",[t._v("\n                    Hola, mi nombre es alejandro, soy un desarrollador y diseñador de aplicaciones web con mas de 10 años de experiencia en el campo de IT.\n                    "),s("br"),s("br"),t._v("\n                    Me gusta desarrollar ideas y llevar a cabo proyectos para mis clientes que realmente ofrezcan una ventaja para su negocio o empresa en el mundo digital.\n                    "),s("br"),s("br"),t._v("\n                    Para mi, cada proyecto es una alianza de la que podemos aprender nuevas estrategias para alcanzar las metas trazadas.\n                ")])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"contact-sns"},[e("h3",[t._v("Redes")]),e("a",{attrs:{href:"https://twitter.com/Al2xcsz"}},[e("i",{staticClass:"fab fa-twitter"}),t._v(" twitter")]),e("a",{attrs:{href:"https://linkedin.com/in/alejandrohtadinom"}},[e("i",{staticClass:"fab fa-linkedin"}),t._v(" linkedin")]),e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fab fa-facebook-square"}),t._v(" facebook")]),e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fab fa-instagram"}),t._v(" instagram")]),e("a",{attrs:{href:"https://gitlab.com/alejandrohtadinom"}},[e("i",{staticClass:"fab fa-gitlab"}),t._v(" Gitlab")]),e("a",{attrs:{href:"https://github.com/alejandrohtadinom"}},[e("i",{staticClass:"fab fa-github"}),t._v(" github")])])}],_=(e("7f7f"),e("bc3a")),j=e.n(_),x={name:"home",data:function(){return{message:"",email:"",name:""}},methods:{sendForm:function(t){var a=this;t.preventDefault(),j.a.post("https://formspree.io/alejandrohtadinom@gmail.com",{data:{_replyto:this.email,message:this.message,name:this.name,_subject:"Contacto desde alejandrohtadinom.com"}}).then((function(t){console.log(t),a.email="",a.message="",a.name=""})).catch((function(t){console.log(t)}))}}},y=x,w=Object(u["a"])(y,h,C,!1,null,null,null),P=w.exports;s["a"].use(b["a"]);var k=new b["a"]({mode:"history",base:"/alejandrohtadinom.github.io/",routes:[{path:"/",name:"home",component:P},{path:"/about",name:"about",component:function(){return e.e("about").then(e.bind(null,"f820"))}}]});s["a"].config.productionTip=!1,new s["a"]({router:k,render:function(t){return t(v)}}).$mount("#app")},"56f2":function(t,a,e){t.exports=e.p+"img/bio-8.79f8bdb9.jpg"},"5c0b":function(t,a,e){"use strict";var s=e("e332"),i=e.n(s);i.a},"5eb6":function(t,a,e){t.exports=e.p+"img/bio-3.6b9f3860.jpg"},"66e0":function(t,a,e){t.exports=e.p+"img/bio-2.3b967685.jpg"},"6b3a":function(t,a,e){t.exports=e.p+"img/bio-11.c3ed5658.jpg"},8602:function(t,a,e){t.exports=e.p+"img/012-laptop-1.1fe6a794.svg"},"8dcf":function(t,a,e){t.exports=e.p+"img/bio-7.dd78515e.jpg"},"95e4":function(t,a,e){t.exports=e.p+"img/bio-5.ce7f7f91.jpg"},a2ce:function(t,a,e){t.exports=e.p+"img/card-1.328c9fb8.jpg"},b965:function(t,a,e){t.exports=e.p+"img/bio-6.91eb21db.jpg"},d08a:function(t,a,e){t.exports=e.p+"img/004-startup.9bb15c41.svg"},e332:function(t,a,e){},e65a:function(t,a,e){t.exports=e.p+"img/006-user.6328e654.svg"},f27a:function(t,a,e){t.exports=e.p+"img/card-2.1ec20311.jpg"}});
//# sourceMappingURL=app.3d419529.js.map