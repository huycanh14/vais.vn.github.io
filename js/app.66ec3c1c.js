(function(t){function e(e){for(var n,s,r=e[0],o=e[1],c=e[2],u=0,d=[];u<r.length;u++)s=r[u],i[s]&&d.push(i[s][0]),i[s]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);v&&v(e);while(d.length)d.shift()();return l.push.apply(l,c||[]),a()}function a(){for(var t,e=0;e<l.length;e++){for(var a=l[e],n=!0,s=1;s<a.length;s++){var r=a[s];0!==i[r]&&(n=!1)}n&&(l.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},s={app:0},i={app:0},l=[];function r(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"b8763119","chunk-14f31a5b":"80bcb848","chunk-2d0d3249":"6f60ad57","chunk-2d0d7880":"1db4a088","chunk-2d0db471":"06f414e8","chunk-2d0df086":"263949c9","chunk-2d2131b4":"3bdf915a","chunk-417eb17d":"b3667a4a"}[t]+".js"}function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(t){var e=[],a={about:1,"chunk-14f31a5b":1,"chunk-417eb17d":1};s[t]?e.push(s[t]):0!==s[t]&&a[t]&&e.push(s[t]=new Promise(function(e,a){for(var n="css/"+({about:"about"}[t]||t)+"."+{about:"5576385e","chunk-14f31a5b":"08c328cf","chunk-2d0d3249":"31d6cfe0","chunk-2d0d7880":"31d6cfe0","chunk-2d0db471":"31d6cfe0","chunk-2d0df086":"31d6cfe0","chunk-2d2131b4":"31d6cfe0","chunk-417eb17d":"988c80cb"}[t]+".css",i=o.p+n,l=document.getElementsByTagName("link"),r=0;r<l.length;r++){var c=l[r],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===n||u===i))return e()}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){c=d[r],u=c.getAttribute("data-href");if(u===n||u===i)return e()}var v=document.createElement("link");v.rel="stylesheet",v.type="text/css",v.onload=e,v.onerror=function(e){var n=e&&e.target&&e.target.src||i,l=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");l.code="CSS_CHUNK_LOAD_FAILED",l.request=n,delete s[t],v.parentNode.removeChild(v),a(l)},v.href=i;var h=document.getElementsByTagName("head")[0];h.appendChild(v)}).then(function(){s[t]=0}));var n=i[t];if(0!==n)if(n)e.push(n[2]);else{var l=new Promise(function(e,a){n=i[t]=[e,a]});e.push(n[2]=l);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=r(t),c=function(e){u.onerror=u.onload=null,clearTimeout(d);var a=i[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src,l=new Error("Loading chunk "+t+" failed.\n("+n+": "+s+")");l.type=n,l.request=s,a[1](l)}i[t]=void 0}};var d=setTimeout(function(){c({type:"timeout",target:u})},12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var v=u;l.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"1af2":function(t,e,a){"use strict";var n=a("6c39"),s=a.n(n);s.a},3820:function(t,e,a){t.exports=a.p+"img/electronic-printed-circuit-detail.e194c1fa.png"},"3f52":function(t,e,a){"use strict";var n=a("d0dd"),s=a.n(n);s.a},"4c0c":function(t,e,a){"use strict";var n=a("c847"),s=a.n(n);s.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Header"),a("div",{attrs:{id:"nav"}}),a("router-view"),a("Footer")],1)},i=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header_area mt-3 mb-3"},[n("div",{staticClass:"main_menu"},[n("nav",{staticClass:"navbar navbar-expand-lg navbar-light"},[n("div",{staticClass:"container box_1620"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-xl-2"},[n("router-link",{attrs:{to:"/"}},[n("img",{staticStyle:{width:"100%"},attrs:{src:a("7c1b")}})])],1),n("div",{staticClass:"col-xl-10"},[n("div",{staticClass:"collapse navbar-collapse offset",attrs:{id:"navbarSupportedContent"}},[n("ul",{staticClass:"nav navbar-nav menu_nav justify-content-center"},[n("li",{staticClass:"nav-item active"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Trang chủ")])],1),n("li",{staticClass:"nav-item submenu dropdown"},[n("router-link",{staticClass:"nav-link dropdown-toggle",attrs:{to:{name:"products"},"data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"}},[t._v("Sản phẩm")]),n("ul",{staticClass:"dropdown-menu"},[n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:{name:"origincore"}}},[t._v("Origin Core")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:{name:"originmedia"}}},[t._v("Origin Media")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:{name:"originmeeting"}}},[t._v("Origin Meeting")])],1)])],1),n("li",{staticClass:"nav-item submenu dropdown"},[n("router-link",{staticClass:"nav-link dropdown-toggle",attrs:{to:{name:"solutions"},"data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"}},[t._v("Giải pháp")]),n("ul",{staticClass:"dropdown-menu"},[n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:{name:"enterprise"}}},[t._v("Chính phủ & Doanh nghiệp")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:{name:"newspapers"}}},[t._v("Báo chí - Truyền hình")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:{name:"consumers"}}},[t._v("Người tiêu dùng")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:{name:"medical"}}},[t._v("Y tế")])],1)])],1),n("li",{staticClass:"nav-item submenu dropdown"},[n("router-link",{staticClass:"nav-link dropdown-toggle",attrs:{to:{name:"about"},"data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"}},[t._v("Về chúng tôi")])],1)])])])])])])])])},r=[],o=a("2877"),c={},u=Object(o["a"])(c,l,r,!1,null,null,null),d=u.exports,v=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},h=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer mt-3 pt-3 pb-3"},[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-xl-1"}),n("div",{staticClass:"col-xl-3"},[n("h6",{staticClass:"text-uppercase font-weight-bold text-info"},[t._v("Sản phẩm")]),n("ul",{staticClass:"list-unstyled quick-links"},[n("li",[n("a",{attrs:{href:"#"}},[n("small",[n("i",{staticClass:"fa fa-angle-double-right"}),t._v(" Công nghệ lõi STT")])])]),n("li",[n("a",{attrs:{href:"#"}},[n("small",[n("i",{staticClass:"fa fa-angle-double-right"}),t._v(" Phần mềm Gỡ Băng Cuộc họp - Origin Meeting")])])])])]),n("div",{staticClass:"col-xl-2"},[n("h6",{staticClass:"text-uppercase font-weight-bold text-info"},[t._v("Giải pháp")]),n("ul",{staticClass:"list-unstyled quick-links"},[n("li",[n("a",{attrs:{href:"#"}},[n("small",[n("i",{staticClass:"fa fa-angle-double-right"}),t._v(" Chính phủ")])])]),n("li",[n("a",{attrs:{href:"#"}},[n("small",[n("i",{staticClass:"fa fa-angle-double-right"}),t._v(" Báo chí - Tuyên truyền")])])]),n("li",[n("a",{attrs:{href:"#"}},[n("small",[n("i",{staticClass:"fa fa-angle-double-right"}),t._v(" Ngân hàng")])])]),n("li",[n("a",{attrs:{href:"#"}},[n("small",[n("i",{staticClass:"fa fa-angle-double-right"}),t._v(" Y tế")])])]),n("li",[n("a",{attrs:{href:"#"}},[n("small",[n("i",{staticClass:"fa fa-angle-double-right"}),t._v(" IoT")])])])])]),n("div",{staticClass:"col-xl-2"},[n("h6",{staticClass:"text-uppercase font-weight-bold text-info"},[t._v("Công ty")]),n("ul",{staticClass:"list-unstyled quick-links"},[n("li",[n("a",{attrs:{href:"#"}},[n("small",[n("i",{staticClass:"fa fa-angle-double-right"}),t._v(" Giới thiệu")])])]),n("li",[n("a",{attrs:{href:"#"}},[n("small",[n("i",{staticClass:"fa fa-angle-double-right"}),t._v(" Blog")])])]),n("li",[n("a",{attrs:{href:"#"}},[n("small",[n("i",{staticClass:"fa fa-angle-double-right"}),t._v(" Báo chí")])])]),n("li",[n("a",{attrs:{href:"#"}},[n("small",[n("i",{staticClass:"fa fa-angle-double-right"}),t._v(" Liên hệ")])])]),n("li",[n("a",{attrs:{href:"#"}},[n("small",[n("i",{staticClass:"fa fa-angle-double-right"}),t._v(" Tuyển dụng")])])])])]),n("div",{staticClass:"col-xl-1 offset-xl-1"},[n("img",{attrs:{src:a("7c1b"),alt:"",width:"100%"}})])])])])}],f=(a("76dc"),{}),p=Object(o["a"])(f,v,h,!1,null,null,null),m=p.exports,g={components:{Header:d,Footer:m}},b=g,_=Object(o["a"])(b,s,i,!1,null,null,null),C=_.exports,w=a("8c4f"),x=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},k=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home",staticStyle:{overflow:"hidden"}},[n("div",{staticClass:"row banner animatedParent animateOnce"},[n("div",{staticClass:"col-xl-8 offset-xl-2 animated fadeInDown delay-1s "},[n("div",{staticClass:"jumbotron-fluid"},[n("div",{staticClass:"display-4 text-xl-center title"},[t._v("\n          Dẫn đầu cuộc cách mạng "),n("br"),t._v("Xử lý và Nhận dạng tiếng nói Tiếng Việt"),n("br"),t._v(" tại Việt Nam\n        ")])])])]),n("div",{staticClass:"row line_section_one mt-5"},[n("div",{staticClass:"col-xl-1 offset-xl-3"},[n("img",{staticStyle:{transform:"scale(0.9) rotate(270deg)"},attrs:{src:a("3820"),alt:"",width:"100%;"}})]),n("div",{staticClass:"col-xl-1"},[n("img",{staticStyle:{transform:"scale(0.9) rotate(90deg)"},attrs:{src:a("3820"),alt:"",width:"100%;"}})]),n("div",{staticClass:"col-xl-1"},[n("img",{staticStyle:{transform:"scale(0.9) rotate(270deg)"},attrs:{src:a("3820"),alt:"",width:"100%;"}})]),n("div",{staticClass:"col-xl-1"},[n("img",{staticStyle:{transform:"scale(0.9) rotate(90deg)"},attrs:{src:a("3820"),alt:"",width:"100%;"}})]),n("div",{staticClass:"col-xl-1"},[n("img",{staticStyle:{transform:"scale(0.9) rotate(270deg)"},attrs:{src:a("3820"),alt:"",width:"100%;"}})]),n("div",{staticClass:"col-xl-1"},[n("img",{staticStyle:{transform:"scale(0.9) rotate(90deg)"},attrs:{src:a("3820"),alt:"",width:"100%;"}})])]),n("div",{staticClass:"section_one pt-5 pb-5 mt-5 mb-5"},[n("div",{staticClass:"row mt-5 mb-5"},[n("div",{staticClass:"col-xl-5 animatedParent align-self-center",attrs:{"data-appear-top-offset":"-300"}},[n("h2",{staticClass:"wow bounceInDown slowest font_section_1",attrs:{"data-id":"1"}},[t._v("Nhận dạng với độ chính xác cao")])])]),n("div",{staticClass:"row mt-5 mb-5"},[n("div",{staticClass:"col-xl-5 offset-xl-3 animatedParent align-self-center",attrs:{"data-appear-top-offset":"-300"}},[n("h2",{staticClass:"wow bounceInDown slowest font_section_1",attrs:{"data-id":"1"}},[t._v("Tối ưu giọng vùng miền")])])]),n("div",{staticClass:"row mt-5 mb-5"},[n("div",{staticClass:"col-xl-5 offset-xl-6 text-xl-right animatedParent align-self-center",attrs:{"data-appear-top-offset":"-300"}},[n("h2",{staticClass:"wow bounceInDown slowest font_section_1",attrs:{"data-id":"1"}},[t._v("Tính tùy chỉnh cao với nhiều lĩnh vực")])])])]),n("div",{staticClass:"row"},[n("div",{staticClass:"col-xl-12 text-xl-center display-4 section"},[t._v("Đối tác")])]),n("div",{staticClass:"section_two"},[n("div",{staticClass:"row mt-2 mb-2"},[n("div",{staticClass:"col-xl-6 text-xl-right wow bounceInLeft slowest _name-section_2 align-self-center"},[t._v("\n        Văn phòng Trung ương Đảng\n      ")]),n("div",{staticClass:"col-xl-3 text-xl-left wow bounceInRight slowest delay-1s"},[n("img",{attrs:{src:a("56db"),alt:"",width:"100%"}})])]),n("div",{staticClass:"row mt-2 mb-2"},[n("div",{staticClass:"col-xl-6 text-xl-right wow bounceInLeft slowest _name-section_2 align-self-center"},[t._v("\n        A đây rồi!\n      ")]),n("div",{staticClass:"col-xl-3 text-xl-left wow bounceInRight slowest delay-1s"},[n("img",{attrs:{src:a("db32"),alt:"",width:"100%"}})])]),n("div",{staticClass:"row mt-2 mb-2"},[n("div",{staticClass:"col-xl-6 text-xl-right wow bounceInLeft slowest _name-section_2 align-self-center"},[t._v("\n        Đề án Hệ tri thức Việt số hóa\n      ")]),n("div",{staticClass:"col-xl-3 text-xl-left wow bounceInRight slowest delay-1s"},[n("img",{attrs:{src:a("747a"),alt:""}})])]),n("div",{staticClass:"row mt-2 mb-2"},[n("div",{staticClass:"col-xl-6 text-xl-right wow bounceInLeft slowest _name-section_2 align-self-center"},[t._v("\n       Trường Đại học Khoa học và Công nghệ Hà Nội\n      ")]),n("div",{staticClass:"col-xl-3 text-xl-left wow bounceInRight slowest delay-1s"},[n("img",{attrs:{src:a("cc38"),alt:"",width:"100%"}})])]),n("div",{staticClass:"row mt-2 mb-2"},[n("div",{staticClass:"col-xl-6 text-xl-right wow bounceInLeft slowest _name-section_2 align-self-center"},[t._v("\n       Giải Pháp Nhà Thông Minh Lumi\n      ")]),n("div",{staticClass:"col-xl-3 text-xl-left wow bounceInRight slowest delay-1s"},[n("img",{attrs:{src:a("caf7"),alt:"",width:"100%"}})])])]),n("div",{staticClass:"row"},[n("div",{staticClass:"col-xl-4 offset-xl-4"},[n("hr")])]),n("div",{staticClass:"section_three"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-xl-12 text-xl-center display-4 section"},[t._v("Tin mới nhất")])])]),n("div",{staticClass:"row"},[n("div",{staticClass:"col-xl-4 offset-xl-4"},[n("hr")])])])}],y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("h1",[t._v(t._s(t.msg))]),t._m(0),a("h3",[t._v("Installed CLI Plugins")]),t._m(1),a("h3",[t._v("Essential Links")]),t._m(2),a("h3",[t._v("Ecosystem")]),t._m(3)])},j=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("\n    For a guide and recipes on how to configure / customize this project,"),a("br"),t._v("\n    check out the\n    "),a("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(".\n  ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[t._v("babel")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[t._v("eslint")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Core Docs")])]),a("li",[a("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Forum")])]),a("li",[a("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Community Chat")])]),a("li",[a("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),a("li",[a("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("News")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-router")])]),a("li",[a("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[t._v("vue-devtools")])]),a("li",[a("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-loader")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v("awesome-vue")])])])}],S={name:"HelloWorld",props:{msg:String}},T=S,E=(a("3f52"),Object(o["a"])(T,y,j,!1,null,"0a39cc74",null)),I=E.exports,O={name:"home",components:{HelloWorld:I}},P=O,N=(a("1af2"),Object(o["a"])(P,x,k,!1,null,"b6ac3002",null)),L=N.exports;a("c091"),a("7be7");n["a"].use(w["a"]);var $=new w["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:L},{path:"/products",name:"products",component:function(){return a.e("chunk-14f31a5b").then(a.bind(null,"4845"))}},{path:"/products/origincore",name:"origincore",component:function(){return Promise.resolve().then(a.bind(null,"c091"))}},{path:"/products/originmedia",name:"originmedia",component:function(){return Promise.resolve().then(a.bind(null,"7be7"))}},{path:"/products/originmeeting",name:"originmeeting",component:function(){return a.e("chunk-2d0db471").then(a.bind(null,"6ed0"))}},{path:"/solutions",name:"solutions",component:function(){return a.e("chunk-417eb17d").then(a.bind(null,"9d9f"))}},{path:"/solutions/consumers",name:"consumers",component:function(){return a.e("chunk-2d0df086").then(a.bind(null,"87d5"))}},{path:"/solutions/enterprise",name:"enterprise",component:function(){return a.e("chunk-2d0d7880").then(a.bind(null,"76e0"))}},{path:"/solutions/newspapers",name:"newspapers",component:function(){return a.e("chunk-2d0d3249").then(a.bind(null,"5c05"))}},{path:"/solutions/medical",name:"medical",component:function(){return a.e("chunk-2d2131b4").then(a.bind(null,"aaec"))}},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}}]}),H=a("2f62");n["a"].use(H["a"]);var D=new H["a"].Store({state:{},mutations:{},actions:{}}),M=a("a925");n["a"].use(M["a"]);var A={vn:{login_title:"Đăng nhập tài khoản",login_submit:"Đăng nhập",login_success:"Đăng nhập thành công",login_error:"Đăng nhập thất bại",login_error_info:"Thông tin đăng nhập chưa đúng",home_title:"Chào mừng đến VAIS"}},B=new M["a"]({locale:"vn",fallbackLocale:"vn",messages:A}),G=B;n["a"].config.productionTip=!1,new n["a"]({router:$,store:D,i18n:G,render:function(t){return t(C)}}).$mount("#app")},"56db":function(t,e,a){t.exports=a.p+"img/VPTW.000beeda.jpg"},"6c39":function(t,e,a){},"747a":function(t,e,a){t.exports=a.p+"img/itrithuc.63a1fe24.png"},"76dc":function(t,e,a){"use strict";var n=a("a7e0"),s=a.n(n);s.a},"7be7":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("\n    origin media\n")])},s=[],i=a("2877"),l={},r=Object(i["a"])(l,n,s,!1,null,null,null);e["default"]=r.exports},"7c1b":function(t,e,a){t.exports=a.p+"img/logo_vais.30051d7b.png"},a7e0:function(t,e,a){},c091:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"origin_core"},[a("div",{staticClass:"header"},[a("div",{staticClass:"banner wow flipInX slowest"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-12 text-xl-center display-2 title"},[t._v("\n                    ORIGIN CORE\n                ")])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-12 text-xl-center content display-4"},[t._v("\n                    Nhận dạng chính xác, tối ưu vùng miền và hơn thế nữa\n                ")])])])]),a("div",{staticClass:"section_one"},[a("div",{staticClass:"title"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-12 text-xl-center display-4 wow slideInLeft slowest"},[t._v(" SỨC MẠNH CÔNG NGHỆ LÕI")])])]),a("div",{staticClass:"content"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-12"})])])])])}],i=(a("4c0c"),a("2877")),l={},r=Object(i["a"])(l,n,s,!1,null,"5fc357f8",null);e["default"]=r.exports},c847:function(t,e,a){},caf7:function(t,e,a){t.exports=a.p+"img/lumi.7c3b0ddc.png"},cc38:function(t,e,a){t.exports=a.p+"img/USTH.48039e0a.png"},d0dd:function(t,e,a){},db32:function(t,e,a){t.exports=a.p+"img/adayroi.77445e5b.png"}});
//# sourceMappingURL=app.66ec3c1c.js.map