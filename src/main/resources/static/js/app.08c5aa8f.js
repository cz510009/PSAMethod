(function(t){function e(e){for(var i,a,l=e[0],c=e[1],u=e[2],p=0,d=[];p<l.length;p++)a=l[p],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);s&&s(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,l=1;l<n.length;l++){var c=n[l];0!==r[c]&&(i=!1)}i&&(o.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},r={app:0},o=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var s=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("myheader"),n("p",[t._v(t._s(t.msg))]),n("div",{staticClass:"sen-area"},[null!=t.high?n("label",{attrs:{id:"high"},on:{click:function(e){return t.setHigh()}}},[t._v(t._s(t.high))]):t._e(),null!=t.mid?n("label",{attrs:{id:"mid"}},[t._v(t._s(t.mid))]):t._e(),null!=t.low?n("label",{attrs:{id:"low"},on:{click:function(e){return t.setLow()}}},[t._v(t._s(t.low))]):t._e()]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.dpi,expression:"dpi"}],attrs:{type:"text",placeholder:"DPI"},domProps:{value:t.dpi},on:{input:function(e){e.target.composing||(t.dpi=e.target.value)}}}),n("button",{on:{click:function(e){return t.setDpi()}}},[t._v("設定")]),t._m(0),n("p",[t._v("参考動画")]),n("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/9p98yvaqZyM",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"description"},[n("h3",[t._v("使い方")]),n("ol",{staticClass:"process"},[n("li",[t._v("マウスのDPIを入力する")]),n("li",[t._v("設定ボタンをクリックする")]),n("li",[t._v("表示された高い方の感度と低い方の感度をVALORANTで設定して試す")]),n("li",[t._v("操作しやすい感度をクリックする")]),n("li",[t._v("感度をクリックしても数値が変わらなくなるまで３~4を繰り返す")]),n("li",[t._v("変わらなくなったときに真ん中に表示された感度が適切な感度です")])])])}],a=(n("ac1f"),n("00b4"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",[t._v("TenZ式AIM感度調整 for VALORANT")])}),l=[],c=n("2877"),u={},s=Object(c["a"])(u,a,l,!1,null,null,null),p=s.exports,d=n("bc3a"),h=n.n(d),f={components:{myheader:p},data:function(){return{dpi:"",msg:"DPIを入力してください",high:null,mid:null,low:null}},methods:{setDpi:function(){var t=this.dpi,e=this,n=/^[0-9]*$/;n.test(t)?h.a.get("/api/calculate",{params:{dpi:t}}).then((function(t){e.high=t.data["high"],e.mid=t.data["mid"],e.low=t.data["low"],e.msg="好みのゲーム内感度をクリックしてください"})).catch((function(t){console.log(t)})):this.msg="DPIは半角数字で入力してください"},setHigh:function(){var t=this.high,e=this.mid,n=this;h.a.get("/api/calculate/next",{params:{sen:t,mid:e}}).then((function(t){n.high=t.data["high"],n.mid=t.data["mid"],n.low=t.data["low"]})).catch((function(t){console.log(t)}))},setLow:function(){var t=this.low,e=this.mid,n=this;h.a.get("/api/calculate/next",{params:{sen:t,mid:e}}).then((function(t){n.high=t.data["high"],n.mid=t.data["mid"],n.low=t.data["low"]})).catch((function(t){console.log(t)}))}}},m=f,v=(n("034f"),Object(c["a"])(m,r,o,!1,null,null,null)),g=v.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(g)}}).$mount("#app")},"85ec":function(t,e,n){}});
//# sourceMappingURL=app.08c5aa8f.js.map