(function(t){function e(e){for(var i,o,s=e[0],c=e[1],u=e[2],f=0,d=[];f<s.length;f++)o=s[f],a[o]&&d.push(a[o][0]),a[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);l&&l(e);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(i=!1)}i&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},a={app:0},r=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0289":function(t,e,n){},"07bb":function(t,e,n){},"432a":function(t,e,n){"use strict";var i=n("0289"),a=n.n(i);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex-center-container flex-column flex-wrap",attrs:{id:"app"}},[n("HeaderBar"),n("TranscriptionsList",{attrs:{listItems:t.listItems}})],1)},r=[],o=(n("20d6"),n("ac6a"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"flex-center-container"},[n("div",{staticClass:"content flex-space-container"},[n("div",{attrs:{id:"logo"}},[t._v("Transcriptions")]),n("div",{staticClass:"actions"},[n("button",{staticClass:"upload",on:{click:function(e){return e.preventDefault(),t.uploadData(e)}}}),n("button",{staticClass:"fetch",on:{click:function(e){return e.preventDefault(),t.fetchData(e)}}})])])])}),s=[],c=new i["a"],u={name:"HeaderBar",methods:{uploadData:function(){c.$emit("upload-data")},fetchData:function(){c.$emit("fetch-data")}}},l=u,f=(n("c924"),n("2877")),d=Object(f["a"])(l,o,s,!1,null,"2328dadf",null),p=d.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list-container flex-center-container flex-column"},[n("div",{staticClass:"list flex-center-container flex-column"},t._l(t.listItems,function(e){return n("Transcript",t._b({key:e.itemID},"Transcript",e,!1))}),1),n("button",{staticClass:"add",on:{click:function(e){return e.preventDefault(),t.addRow(e)}}})])},m=[],v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item",on:{mouseenter:t.showRemove,mouseleave:t.hideRemove}},[t._m(0),t._m(1),n("div",{staticClass:"container"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"title",attrs:{type:"text",placeholder:"Item Title"},domProps:{value:t.title},on:{change:t.update,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.removeFocus(e)},input:function(e){e.target.composing||(t.title=e.target.value)}}}),n("resizable-textarea",[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],staticClass:"content",attrs:{placeholder:"Item Content here"},domProps:{value:t.content},on:{change:t.update,input:function(e){e.target.composing||(t.content=e.target.value)}}})])],1),n("button",{directives:[{name:"show",rawName:"v-show",value:t.removeVisible,expression:"removeVisible"}],staticClass:"remove",on:{click:function(e){return e.preventDefault(),t.remove(e)}}})])},b=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"check"},[n("label",[n("input",{staticClass:"checkbox",attrs:{type:"checkbox",value:""}}),n("span",{staticClass:"custom-checkbox"})])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"avatar"},[i("img",{attrs:{src:n("9905")}})])}],x={methods:{resizeTextarea:function(t){t.target.style.height="auto",t.target.style.height=t.target.scrollHeight+"px"},windowResize:function(t){this.$el.style.height="auto",this.$el.style.height=this.$el.scrollHeight+"px"}},mounted:function(){var t=this;this.$nextTick(function(){t.$el.setAttribute("style","height:"+t.$el.scrollHeight+"px; overflow-y:hidden;")}),this.$el.addEventListener("input",this.resizeTextarea),window.addEventListener("resize",this.windowResize)},beforeDestroy:function(){this.$el.removeEventListener("input",this.resizeTextarea),window.removeEventListener("resize",this.windowResize)},render:function(){return this.$slots.default[0]}},g={name:"Transcript",components:{ResizableTextarea:x},data:function(){return{removeVisible:!1,title:this.voice,content:this.text}},props:["voice","text","id","itemID"],methods:{showRemove:function(){this.removeVisible=!0},hideRemove:function(){this.removeVisible=!1},remove:function(){c.$emit("remove-data",this.itemID)},update:function(){c.$emit("update-data",this.itemID,this.title,this.content)},removeFocus:function(t){t.target.blur()}}},D=g,w=(n("f5e8"),Object(f["a"])(D,v,b,!1,null,"ba3b2b20",null)),I=w.exports,y={name:"TranscriptionsList",components:{Transcript:I},props:{listItems:{type:Array,required:!0,default:[]}},methods:{addRow:function(){c.$emit("add-data")}}},$=y,_=(n("432a"),Object(f["a"])($,h,m,!1,null,"a4b9bf16",null)),C=_.exports,k=n("bc3a"),O=n.n(k),T="http://www.mocky.io/v2/5ae1c5792d00004d009d7e5c";O.a.defaults.baseURL=T;var E={fetch:function(){return O.a.get("/").then(function(t){return t.data}).catch(function(t){return t})},post:function(t){return O.a.post("/",t).then(function(t){return window.console.log("POST CALL:",t),t.data}).catch(function(t){return window.console.log("POST ERROR:",t),t})}},R={name:"app",data:function(){return{listItems:[],itemID:0}},computed:{transcripts:{get:function(){return this.listItems},set:function(t){this.listItems=t}}},components:{HeaderBar:p,TranscriptionsList:C},methods:{uploadData:function(){var t=JSON.parse(JSON.stringify(this.listItems));t.forEach(function(t){delete t.itemID}),E.post(t).then(function(t){return t}).catch(function(t){return t})},fetchData:function(){var t=this;E.fetch().then(function(e){e.forEach(function(e){e["itemID"]=t.itemID++}),t.listItems=t.listItems.concat(e)})},updateData:function(t,e,n){var i=this._getIndexByItemID(t),a=this.listItems[i].id;this.listItems.splice(i,1,{itemID:t,id:a,voice:e,text:n})},removeData:function(t){var e=this._getIndexByItemID(t);this.listItems.splice(e,1)},addData:function(){this.listItems.push({id:-1,voice:"",text:"",itemID:this.itemID++})},_getIndexByItemID:function(t){return this.listItems.findIndex(function(e){return e.itemID===t})}},mounted:function(){c.$on("remove-data",this.removeData),c.$on("add-data",this.addData),c.$on("update-data",this.updateData),c.$on("upload-data",this.uploadData),c.$on("fetch-data",this.fetchData)},beforeDestroy:function(){c.$off("remove-data",this.removeData),c.$off("add-data",this.addData),c.$off("update-data",this.updateData),c.$off("upload-data",this.uploadData),c.$off("fetch-data",this.fetchData)}},j=R,z=(n("878f"),n("b0a0"),Object(f["a"])(j,a,r,!1,null,null,null)),L=z.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(L)}}).$mount("#app")},"878f":function(t,e,n){"use strict";var i=n("d5ef"),a=n.n(i);a.a},9905:function(t,e,n){t.exports=n.p+"img/person.ac54f1e5.svg"},b0a0:function(t,e,n){"use strict";var i=n("07bb"),a=n.n(i);a.a},c2b9:function(t,e,n){},c924:function(t,e,n){"use strict";var i=n("d775"),a=n.n(i);a.a},d5ef:function(t,e,n){},d775:function(t,e,n){},f5e8:function(t,e,n){"use strict";var i=n("c2b9"),a=n.n(i);a.a}});
//# sourceMappingURL=app.ce38b50e.js.map