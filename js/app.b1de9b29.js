(function(t){function e(e){for(var r,n,c=e[0],s=e[1],u=e[2],l=0,d=[];l<c.length;l++)n=c[l],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&d.push(i[n][0]),i[n]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);f&&f(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],r=!0,n=1;n<a.length;n++){var c=a[n];0!==i[c]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=a[0]))}return t}var r={},n={app:0},i={app:0},o=[];function c(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-12875e78":"c7452e88","chunk-13fd828c":"6a3cfb07","chunk-28387c86":"39904b5c"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(t){var e=[],a={"chunk-12875e78":1,"chunk-13fd828c":1,"chunk-28387c86":1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=new Promise((function(e,a){for(var r="css/"+({}[t]||t)+"."+{"chunk-12875e78":"537e515e","chunk-13fd828c":"6cc42a69","chunk-28387c86":"4ef9cbc8"}[t]+".css",i=s.p+r,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var u=o[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===i))return e()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===r||l===i)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||i,o=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete n[t],f.parentNode.removeChild(f),a(o)},f.href=i;var b=document.getElementsByTagName("head")[0];b.appendChild(f)})).then((function(){n[t]=0})));var r=i[t];if(0!==r)if(r)e.push(r[2]);else{var o=new Promise((function(e,a){r=i[t]=[e,a]}));e.push(r[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(f);var a=i[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+n+")",d.name="ChunkLoadError",d.type=r,d.request=n,a[1](d)}i[t]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(a,r,function(e){return t[e]}.bind(null,r));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="https://mitichpavel.github.io/h4v/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var f=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},4416:function(t,e,a){},"52e4":function(t,e,a){"use strict";a("5667")},5667:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("7a23");function n(t,e,a,n,i,o){var c=Object(r["z"])("router-view");return Object(r["r"])(),Object(r["d"])(Object(r["A"])(o.layout),null,{default:Object(r["G"])((function(){return[Object(r["h"])(c)]})),_:1})}var i=Object(r["J"])("data-v-f005e1aa");Object(r["u"])("data-v-f005e1aa");var o={class:"home-layout"},c={class:"app-content"},s={class:"app-page"};Object(r["s"])();var u=i((function(t,e,a,n,i,u){var l=Object(r["z"])("Navbar"),d=Object(r["z"])("router-view");return Object(r["r"])(),Object(r["d"])("div",o,[Object(r["h"])(l,{cases:"/cases",login:"/login"}),Object(r["h"])("main",c,[Object(r["h"])("div",s,[Object(r["h"])(d)])])])})),l=a("79c9"),d=a.n(l),f={class:"navbar"},b={class:"wrap-navbar"},h={class:"menu"},m={key:0,class:"user-menu"},p=Object(r["h"])("img",{src:d.a,class:"user-icon",alt:"user icon"},null,-1),g=Object(r["h"])("div",{class:"login"},"Login",-1);function v(t,e,a,n,i,o){var c=Object(r["z"])("router-link");return Object(r["r"])(),Object(r["d"])("nav",f,[Object(r["h"])("div",b,[Object(r["h"])("ul",h,[(Object(r["r"])(!0),Object(r["d"])(r["a"],null,Object(r["x"])(i.links,(function(t){return Object(r["r"])(),Object(r["d"])(c,{to:t.url,key:t.url,custom:""},{default:Object(r["G"])((function(e){var a=e.href,n=e.isActive;return[Object(r["h"])("li",{class:["menu-item",{active:n}]},[Object(r["h"])("a",{href:a,class:"menu-link"},Object(r["C"])(t.title),9,["href"])],2)]})),_:2},1032,["to"])})),128))]),i.isLogin?Object(r["e"])("",!0):(Object(r["r"])(),Object(r["d"])("div",m,[Object(r["h"])(c,{to:"/login",custom:""},{default:Object(r["G"])((function(t){var e=t.href,a=t.isActive;return[Object(r["h"])("div",{class:["item",{active:a}]},[Object(r["h"])("a",{href:e,class:"link"},[p,g],8,["href"])],2)]})),_:1})]))])])}var O={data:function(){return{links:[{title:"Help4vet",url:"/",exact:!0},{title:"Zdjęcia RTG",url:"/cases"}],isLogin:!0}}};a("cd71");O.render=v;var j=O,y={components:{Navbar:j}};a("5f8b");y.render=u,y.__scopeId="data-v-f005e1aa";var w=y,E=Object(r["J"])("data-v-9b8792b2");Object(r["u"])("data-v-9b8792b2");var D={class:"main-layout"},k={class:"app-content"},S={class:"app-page"};Object(r["s"])();var P=E((function(t,e,a,n,i,o){var c=Object(r["z"])("BidImage"),s=Object(r["z"])("Navbar"),u=Object(r["z"])("Sidebar"),l=Object(r["z"])("router-view");return Object(r["r"])(),Object(r["d"])("div",D,[o.visibilityBigImage?(Object(r["r"])(),Object(r["d"])(c,{key:0})):Object(r["e"])("",!0),Object(r["h"])(s),Object(r["h"])("main",k,[Object(r["h"])("div",S,[Object(r["h"])(u),Object(r["h"])(l)])])])})),$=(a("d3b7"),a("3ca3"),a("ddb0"),a("4de4"),Object(r["J"])("data-v-1fc380ad"));Object(r["u"])("data-v-1fc380ad");var x={class:"sidebar"},z=Object(r["h"])("div",{class:"wrap-sidebar-title"},[Object(r["h"])("h2",{class:"sidebar-title"}," Filtry ")],-1),I={class:"filter"},M={class:"wrap-inputs"},L={class:"group-date"},C={class:"wrap-input"},_=Object(r["h"])("span",{class:"label"},[Object(r["g"])(" Data "),Object(r["h"])("b",null,"od")],-1),F={class:"wrap-input"},N=Object(r["h"])("span",{class:"label"},[Object(r["g"])(" Data "),Object(r["h"])("b",null,"do")],-1),B={class:"footer"},T=Object(r["g"])(" Filtruj "),q=Object(r["g"])(" Wyczyść filtry ");Object(r["s"])();var A=$((function(t,e,a,n,i,o){var c=Object(r["z"])("InputBtn");return Object(r["r"])(),Object(r["d"])("div",x,[z,Object(r["h"])("form",I,[Object(r["h"])("div",M,[Object(r["H"])(Object(r["h"])("input",{ref:"searchText","onUpdate:modelValue":e[1]||(e[1]=function(t){return i.filterParams.filter=t}),autocomplete:"off",type:"text",placeholder:"szukaj po wszystkim",maxlength:"80",class:"filter-input input-text"},null,512),[[r["E"],i.filterParams.filter]]),Object(r["h"])("div",L,[Object(r["h"])("label",C,[_,Object(r["H"])(Object(r["h"])("input",{ref:"dateStart","onUpdate:modelValue":e[2]||(e[2]=function(t){return i.filterParams.from=t}),autocomplete:"off",type:"date",class:"filter-input input-date",min:i.dateStart.min,max:i.dateStart.max,onInput:e[3]||(e[3]=function(){return o.setStart&&o.setStart.apply(o,arguments)})},null,40,["min","max"]),[[r["E"],i.filterParams.from]])]),Object(r["h"])("label",F,[N,Object(r["H"])(Object(r["h"])("input",{ref:"dateEnd","onUpdate:modelValue":e[4]||(e[4]=function(t){return i.filterParams.to=t}),autocomplete:"off",type:"date",class:"filter-input input-date",min:i.dateEnd.min,max:i.dateEnd.max,onInput:e[5]||(e[5]=function(){return o.setEnd&&o.setEnd.apply(o,arguments)})},null,40,["min","max"]),[[r["E"],i.filterParams.to]])])])]),Object(r["h"])("div",B,[Object(r["h"])(c,{type:"submit",btnClass:"filter",onClick:Object(r["I"])(o.getFiltredDataFromServer,["prevent"])},{default:$((function(){return[T]})),_:1},8,["onClick"]),Object(r["h"])(c,{type:"reset",btnClass:"clear",onClick:o.clearFilter},{default:$((function(){return[q]})),_:1},8,["onClick"])])])])})),H=a("5530"),J=a("2909"),W=(a("99af"),a("159b"),a("4fad"),a("ac1f"),a("1276"),Object(r["J"])("data-v-031c100a"));Object(r["u"])("data-v-031c100a");var R={class:"input-like-btn"},G={class:"value"};Object(r["s"])();var U=W((function(t,e,a,n,i,o){return Object(r["r"])(),Object(r["d"])("div",R,[Object(r["h"])("label",{class:["wrap",a.btnClass]},[Object(r["h"])("input",{type:a.type,value:a.value},null,8,["type","value"]),Object(r["h"])("span",G,[Object(r["y"])(t.$slots,"default",{},(function(){return[Object(r["g"])(Object(r["C"])(a.type),1)]}),{},!0)])],2)])})),V={props:{type:{type:String,required:!0},value:{type:String,required:!1},btnClass:{type:String,required:!1,default:null}}};a("99f0");V.render=U,V.__scopeId="data-v-031c100a";var K=V,Z={data:function(){return{totalPagesCount:null,page:0,pageSize:20,filterParams:{filter:"",from:"",to:""},url:"https://ddicomdemo20210806204758.azurewebsites.net/Entries?page=".concat(this.page,"&pageSize=").concat(this.pageSize),dateStart:{max:""},dateEnd:{min:"",max:""}}},computed:{numberOfPages:function(){return Math.floor((this.totalPagesCount+this.pageSize-1)/this.pageSize)},loader:function(){return this.$store.getters.loader}},mounted:function(){var t=this;this.$nextTick((function(){t.setDefMaxDate(),t.scrollWatcher()}))},beforeMount:function(){var t=this;this.axios.get("https://ddicomdemo20210806204758.azurewebsites.net/Entries?page=".concat(this.page,"&pageSize=").concat(this.pageSize)).then((function(e){t.totalPagesCount=e.data.count,t.$store.commit("setData",Object(J["a"])(e.data.data))})).catch((function(e){t.$store.commit("showErrorMessage","Wystąpił błąd. Nie udało się pobrać dane."),console.log("Error: ".concat(e))})).finally((function(){t.$store.commit("hideLoader")}))},components:{InputBtn:K},methods:{getDataFromServer:function(){var t=this;this.page=0,this.totalPagesCount=null,this.$store.commit("showLoader"),this.axios.get("https://ddicomdemo20210806204758.azurewebsites.net/Entries?page=".concat(this.page,"&pageSize=").concat(this.pageSize)).then((function(e){t.totalPagesCount=e.data.count,t.$store.commit("setData",Object(J["a"])(e.data.data))})).catch((function(e){t.$store.commit("showErrorMessage","Wystąpił błąd. Nie udało się pobrać dane."),console.log("Error: ".concat(e))})).finally((function(){t.$store.commit("hideLoader")}))},scrollWatcher:function(){var t=this;window.addEventListener("scroll",(function(){var e=document.documentElement.scrollTop+window.innerHeight===document.documentElement.offsetHeight;e&&t.loadMore()}))},getFiltredDataFromServer:function(){var t=this;if(""!==this.filterParams.filter||""!==this.filterParams.from||""!==this.filterParams.to){this.page=0,this.totalPagesCount=null,this.$store.commit("clearFiltredData"),this.$store.commit("clearData"),this.$store.commit("showLoader");var e=this.createRequestPath();if(""!==e){var a="https://ddicomdemo20210806204758.azurewebsites.net/Entries"+e;this.axios.get(a).then((function(e){0!==e.data.count?(t.$store.commit("hideErrorMessage"),t.$store.commit("setFiltredData",Object(J["a"])(e.data.data))):t.$store.commit("showErrorMessage","Nie znaleziono wyników dla Twojego wyszukiwania.")})).catch((function(e){t.$store.commit("showErrorMessage","Wystąpił błąd. Nie udało się pobrać dane."),e.response?(console.log(e.response.data),console.log("Response whith error ".concat(e.response.status)),console.log(e.response.headers)):e.request?console.log(e.request):console.log("Error",e.message)})).finally((function(){t.$store.commit("hideLoader")}))}}},loadMore:function(){var t=this;this.$store.commit("hideErrorMessage"),null===this.$store.getters.getFiltredData&&this.page+1<this.numberOfPages&&!this.$store.getters.loader&&(this.$store.commit("showLoader"),this.page+=1,this.axios.get("https://ddicomdemo20210806204758.azurewebsites.net/Entries?page=".concat(this.page,"&pageSize=").concat(this.pageSize)).then((function(e){t.$store.commit("setData",Object(J["a"])(e.data.data)),t.$store.commit("hideLoader")})).catch((function(e){t.page-=1,t.$store.commit("showErrorMessage","Wystąpił błąd. Nie udało się pobrać dane."),e.response?(console.log(e.response.data),console.log("Response whith error ".concat(e.response.status)),console.log(e.response.headers)):e.request?console.log(e.request):console.log("Error",e.message)})).finally((function(){t.$store.commit("hideLoader")})))},createRequestPath:function(){var t=Object(H["a"])({},this.filterParams),e="?",a="";return""!==t.to&&(t.to=this.incrementDate(t.to)),Object.entries(t).forEach((function(t){""!==t[1]?(a+=e+t[0]+"="+encodeURIComponent(t[1]),e="&"):a+=""})),a},clearFilter:function(){null===this.$store.getters.getFiltredData&&""===this.$store.getters.errorMessage||(this.$store.commit("clearFilter"),this.$store.commit("clearFiltredData"),this.$store.commit("clearData"),this.$store.commit("hideErrorMessage"),this.filterParams.filter="",this.filterParams.from="",this.filterParams.to="",this.clearInputs(),this.getDataFromServer())},setStart:function(){this.dateEnd.min=this.$refs.dateStart.value},setEnd:function(){this.dateStart.max=this.$refs.dateEnd.value},setDefMaxDate:function(){var t=(new Date).toISOString().split("T")[0];this.dateStart.max=t,this.dateEnd.max=t},clearInputs:function(){this.dateEnd.min="",this.setDefMaxDate()},incrementDate:function(t){return new Date(new Date(t).setDate(new Date(t).getDate()+1)).toISOString().split("T")[0]}}};a("52e4"),a("86c4");Z.render=A,Z.__scopeId="data-v-1fc380ad";var Q=Z,X={components:{Sidebar:Q,Navbar:j,BidImage:Object(r["i"])((function(){return a.e("chunk-12875e78").then(a.bind(null,"2ab6"))}))},computed:{visibilityBigImage:function(){return this.$store.getters.visibilityBigImage}}};a("8b9c");X.render=P,X.__scopeId="data-v-9b8792b2";var Y=X,tt=Object(r["J"])("data-v-1adbf23e");Object(r["u"])("data-v-1adbf23e");var et={class:"login-layout"},at={class:"app-content"},rt={class:"app-page"};Object(r["s"])();var nt=tt((function(t,e,a,n,i,o){var c=Object(r["z"])("NavbarLogin"),s=Object(r["z"])("router-view");return Object(r["r"])(),Object(r["d"])("div",et,[Object(r["h"])("main",at,[Object(r["h"])("div",rt,[Object(r["h"])(c),Object(r["h"])(s)])])])})),it={class:"navbar"},ot={class:"wrap-navbar"},ct={class:"menu"};function st(t,e,a,n,i,o){var c=Object(r["z"])("router-link");return Object(r["r"])(),Object(r["d"])("nav",it,[Object(r["h"])("div",ot,[Object(r["h"])("ul",ct,[(Object(r["r"])(!0),Object(r["d"])(r["a"],null,Object(r["x"])(i.links,(function(t){return Object(r["r"])(),Object(r["d"])(c,{to:t.url,key:t.url,custom:""},{default:Object(r["G"])((function(e){var a=e.href,n=e.isActive;return[Object(r["h"])("li",{class:["menu-item",{active:n}]},[Object(r["h"])("a",{href:a,class:"menu-link"},Object(r["C"])(t.title),9,["href"])],2)]})),_:2},1032,["to"])})),128))])])])}var ut={data:function(){return{links:[{title:"Help4vet",url:"/"}]}}};a("a74b");ut.render=st;var lt=ut,dt={components:{NavbarLogin:lt}};dt.render=nt,dt.__scopeId="data-v-1adbf23e";var ft=dt,bt={components:{HomeLayout:w,MainLayout:Y,LoginLayout:ft},computed:{layout:function(){return(this.$route.meta.layout||"home")+"-layout"}}};a("ff3d");bt.render=n;var ht=bt,mt=a("6c02"),pt=[{path:"/",name:"home",meta:{layout:"home"},component:function(){return a.e("chunk-13fd828c").then(a.bind(null,"bb51"))}},{path:"/cases",name:"cases",meta:{layout:"main"},component:function(){return a.e("chunk-28387c86").then(a.bind(null,"25d9"))}}],gt=Object(mt["a"])({history:Object(mt["b"])("https://mitichpavel.github.io/h4v/"),routes:pt,base:"https://mitichpavel.github.io/h4v/"}),vt=gt,Ot=a("5502"),jt=Object(Ot["a"])({state:{data:[],filtredData:null,bigImage:{visibility:!1,id:null},filterParams:{filter:"",from:"",to:""},loader:!1,errorMessage:""},mutations:{setBigImgId:function(t,e){return t.bigImage.id=e},setData:function(t,e){return t.data=[].concat(Object(J["a"])(t.data),Object(J["a"])(e))},clearData:function(t){return t.data=[]},setFiltredData:function(t,e){return t.filtredData=e},clearFiltredData:function(t){return t.filtredData=null},showBigImage:function(t){return t.bigImage.visibility=!0},hideBigImage:function(t){return t.bigImage.visibility=!1},clearFilter:function(t){t.filterParams.filter="",t.filterParams.from="",t.filterParams.to=""},hideLoader:function(t){return t.loader=!1},showLoader:function(t){return t.loader=!0},hideErrorMessage:function(t){return t.errorMessage=""},showErrorMessage:function(t,e){return t.errorMessage=e}},getters:{getBigImgId:function(t){return t.bigImage.id},patientsDataLoader:function(t){return t.patientsDataLoader},getData:function(t){return t.data},getFiltredData:function(t){return t.filtredData},getFilterParams:function(t){return t.filterParams},visibilityBigImage:function(t){return t.bigImage.visibility},loader:function(t){return t.loader},errorMessage:function(t){return t.errorMessage}}}),yt=a("bc3a"),wt=a.n(yt),Et=a("2106"),Dt=a.n(Et);Object(r["c"])(ht).use(jt).use(vt).use(Dt.a,wt.a).mount("#app")},"5f8b":function(t,e,a){"use strict";a("e423")},"6dc5":function(t,e,a){},7075:function(t,e,a){},"79c9":function(t,e,a){t.exports=a.p+"img/user.255c0d47.svg"},"7e28":function(t,e,a){},"86c4":function(t,e,a){"use strict";a("7e28")},"8b9c":function(t,e,a){"use strict";a("d1a3")},"99f0":function(t,e,a){"use strict";a("ca4d")},a74b:function(t,e,a){"use strict";a("6dc5")},ca4d:function(t,e,a){},cd71:function(t,e,a){"use strict";a("7075")},d1a3:function(t,e,a){},e423:function(t,e,a){},ff3d:function(t,e,a){"use strict";a("4416")}});
//# sourceMappingURL=app.b1de9b29.js.map