(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-12875e78"],{"2ab6":function(e,t,s){"use strict";s.r(t);var i=s("7a23"),c=s("4a8a"),o=s.n(c),n=s("c366"),a=s.n(n),r=s("3cad"),l=s.n(r),f=s("8b75"),u=s.n(f),m=Object(i["J"])("data-v-a47161b0");Object(i["u"])("data-v-a47161b0");var d={class:"overlay"},g={class:"bar"},h=Object(i["h"])("img",{src:o.a,class:"close"},null,-1),v={ref:"wrap",class:"wrap"},p=Object(i["h"])("img",{class:"icon",src:a.a,alt:"zoom out",draggable:"false"},null,-1),b=Object(i["h"])("img",{class:"icon",src:l.a,alt:"zoom in",draggable:"false"},null,-1),S=Object(i["h"])("img",{src:u.a,class:"loader"},null,-1);Object(i["s"])();var O=m((function(e,t,s,c,o,n){return Object(i["r"])(),Object(i["d"])("div",d,[Object(i["h"])("div",{class:[{loading:o.loading},"window"]},[Object(i["h"])("div",g,[Object(i["h"])("div",{class:"wrap-close",onClick:t[1]||(t[1]=function(){return n.closeBigImage&&n.closeBigImage.apply(n,arguments)})},[h])]),Object(i["h"])("div",v,[Object(i["h"])("div",{class:"wrap-img",onMouseleave:t[5]||(t[5]=function(){o.isDown&&o.isMove&&n.moveOff()})},[Object(i["h"])("img",{ref:"img",class:["img",{move:o.isMove&&o.isDown,zoomed:o.currentScale>1}],draggable:"false",onMousedown:t[2]||(t[2]=function(){return n.getOffset&&n.getOffset.apply(n,arguments)}),onMousemove:t[3]||(t[3]=function(){return n.moveOn&&n.moveOn.apply(n,arguments)}),onMouseup:t[4]||(t[4]=function(){return n.moveOff&&n.moveOff.apply(n,arguments)})},null,34)],32)],512),Object(i["h"])("div",{class:["zoom-widget",{disabled:!o.widget}]},[Object(i["h"])("div",{class:["zoom-out",{disabled:1===o.currentScale}],onClick:t[6]||(t[6]=function(){o.currentScale>1&&n.zoom(-o.stepScale)})},[p],2),Object(i["h"])("div",{class:["zoom-in",{disabled:o.currentScale===o.maxScale}],onClick:t[7]||(t[7]=function(){o.currentScale<o.maxScale&&n.zoom(o.stepScale)})},[b],2)],2),S],2)])})),w={data:function(){return{loading:!0,widget:!1,isDown:!1,isMove:!1,offset:[0,0],maxScale:null,stepScale:null,currentScale:1}},computed:{renderedImg:function(){return document.querySelector(".img")}},mounted:function(){var e=this;this.$nextTick((function(){e.pageScroll(!1);var t=setInterval((function(){e.renderedImg.height&&(clearInterval(t),e.loading=!1,e.widget=!0,e.maxScale=5*e.scale(),e.stepScale=e.maxScale/10)}),200)}))},beforeCreate:function(){var e=this,t=this.$store.getters.getBigImgId;this.axios.get("https://ddicomdemo20210806204758.azurewebsites.net/Entries/photo/".concat(t)).then((function(t){e.$refs.img.setAttribute("src",t.config.url)}))},methods:{getOffset:function(e){this.currentScale>1&&(this.isDown=!0,this.offset[0]=this.$refs.img.offsetLeft-e.clientX,this.offset[1]=this.$refs.img.offsetTop-e.clientY)},moveOn:function(e){this.currentScale>1&&(this.isMove=!0,this.isDown&&(this.$refs.img.style.top=e.clientY+this.offset[1]+"px",this.$refs.img.style.left=e.clientX+this.offset[0]+"px"))},moveOff:function(){this.isMove=!1,this.isDown=!1},resetPosition:function(){this.$refs.img.style.top="auto",this.$refs.img.style.left="auto"},scale:function(){return this.renderedImg.height/parseInt(getComputedStyle(this.$refs.wrap).height,10)-1},zoom:function(e){return this.currentScale+=e,e<0&&this.resetPosition(),this.currentScale+e<1?(this.resetPosition(),this.currentScale=1,void(this.$refs.img.style.transform="scale(1)")):this.currentScale+e>this.maxScale?(this.currentScale=this.maxScale,void(this.$refs.img.style.transform="scale(".concat(this.maxScale,")"))):void(this.$refs.img.style.transform="scale(".concat(this.currentScale+e,")"))},closeBigImage:function(){this.pageScroll(!0),this.$store.commit("hideBigImage")},pageScroll:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];document.body.style.overflow=e?"":"hidden"}}};s("bfc3");w.render=O,w.__scopeId="data-v-a47161b0";t["default"]=w},"3cad":function(e,t,s){e.exports=s.p+"img/zoom_in.2ecb60ca.svg"},"4a8a":function(e,t,s){e.exports=s.p+"img/x.77116870.svg"},"7fcc":function(e,t,s){},"8b75":function(e,t,s){e.exports=s.p+"img/loader_white.db66649c.svg"},bfc3:function(e,t,s){"use strict";s("7fcc")},c366:function(e,t,s){e.exports=s.p+"img/zoom_out.da2543af.svg"}}]);
//# sourceMappingURL=chunk-12875e78.c7452e88.js.map