(function(t){function e(e){for(var r,o,s=e[0],i=e[1],l=e[2],p=0,f=[];p<s.length;p++)o=s[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);u&&u(e);while(f.length)f.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,s=1;s<n.length;s++){var i=n[s];0!==a[i]&&(r=!1)}r&&(c.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},c=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/dist/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=i;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Navbar"),n("DiscsContainer")],1)},c=[],o=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("div",{staticClass:"container"},[n("div",{staticClass:"row row-cols-5 g-4"},[n("div",{staticClass:"col"},[n("div",{staticClass:"card"},[n("img",{staticClass:"card-img-top",attrs:{src:"https://www.onstageweb.com/wp-content/uploads/2018/09/bon-jovi-new-jersey.jpg",alt:"..."}}),n("div",{staticClass:"card-body text-center"},[n("h2",{staticClass:"card-title py-3"},[t._v("TITOLO")]),n("div",{staticClass:"card-text"},[n("h3",{staticClass:"mb-0"},[t._v("Bon Jovi")]),n("h5",{staticClass:"pb-5"},[t._v("1988")])])])])])])])])}],i=n("bc3a"),l=n.n(i),u={name:"DiscsContainer",data:function(){return{discsList:[]}},mounted:function(){var t=this;l.a.get("https://flynn.boolean.careers/exercises/api/array/music").then((function(e){t.discsList=e.data.response}))}},p=u,f=n("2877"),d=Object(f["a"])(p,o,s,!1,null,null,null),v=d.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav")},h=[],m={name:"Navbar"},y=m,w=Object(f["a"])(y,b,h,!1,null,null,null),g=w.exports,_={name:"App",components:{DiscsContainer:v,Navbar:g}},O=_,j=(n("5c0b"),Object(f["a"])(O,a,c,!1,null,null,null)),C=j.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(C)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"9c0c":function(t,e,n){}});
//# sourceMappingURL=app.e19f4864.js.map