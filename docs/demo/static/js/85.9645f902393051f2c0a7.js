webpackJsonp([85],{1018:function(e,t,l){var n=l(1019);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);l(590)("81735942",n,!0)},1019:function(e,t,l){t=e.exports=l(589)(),t.push([e.i,".result[data-v-deb10efc]{border:1px dashed #333;min-height:20px;border-radius:3px;overflow-y:scroll;white-space:pre-line;margin:0 0 20px}.item[data-v-deb10efc]{margin:5px 0}",""])},1020:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l(8),o=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default={name:"Store",data:function(){return{keyValue:"q HelloWorld",setItemResult:"",getKey:"q",getItemResult:"",deleteKey:"q",removeItemResult:"",last:""}},methods:{setItem:function(){var e=this,t=e.keyValue.split(" ");e.$platform.is("dingtalk")?window.dd&&window.dd.util.domainStorage.setItem({name:t[0],value:t[1],onSuccess:function(t){e.setItemResult="onSuccess: "+(0,o.default)(t)},onFail:function(t){e.setItemResult="onFail: "+(0,o.default)(t)}}):e.$platform.is("dtdream")?window.dd&&window.dd.util.localStorage.setItem({key:t[0],value:t[1],onSuccess:function(t){e.setItemResult="onSuccess: "+(0,o.default)(t)},onFail:function(t){e.setItemResult="onFail: "+(0,o.default)(t)}}):e.setItemResult="未找到对应执行方法"},getItem:function(){var e=this;e.$platform.is("dingtalk")?window.dd&&window.dd.util.domainStorage.getItem({name:e.getKey,onSuccess:function(t){e.getItemResult="onSuccess: "+(0,o.default)(t)},onFail:function(t){e.getItemResult="onFail: "+(0,o.default)(t)}}):e.$platform.is("dtdream")?window.dd&&window.dd.util.localStorage.getItem({key:e.getKey,onSuccess:function(t){e.getItemResult="onSuccess: "+(0,o.default)(t)},onFail:function(t){e.getItemResult="onFail: "+(0,o.default)(t)}}):e.getItemResult="未找到对应执行方法"},removeItem:function(){var e=this;e.$platform.is("dingtalk")?window.dd&&window.dd.util.domainStorage.removeItem({name:e.deleteKey,onSuccess:function(t){e.removeItemResult="onSuccess: "+(0,o.default)(t)},onFail:function(t){e.removeItemResult="onFail: "+(0,o.default)(t)}}):e.$platform.is("dtdream")?window.dd&&window.dd.util.localStorage.removeItem({key:e.deleteKey,onSuccess:function(t){e.removeItemResult="onSuccess: "+(0,o.default)(t)},onFail:function(t){e.removeItemResult="onFail: "+(0,o.default)(t)}}):e.removeItemResult="未找到对应执行方法"}}}},1021:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("Page",[l("Header",[l("Navbar",[l("Title",[e._v("存储")])],1)],1),e._v(" "),l("Content",{staticClass:"outer-content",attrs:{padding:""}},[l("h4",[e._v("设备")]),e._v(" "),l("section",[l("strong",[e._v("设置存储信息")]),e._v(" "),l("Item",{staticClass:"item",attrs:{"no-lines":""}},[l("Label",{slot:"item-left"},[e._v("Key/Value: ")]),e._v(" "),l("Input",{attrs:{placeholder:"key/value用空格分割",type:"text",clearInput:""},model:{value:e.keyValue,callback:function(t){e.keyValue=t},expression:"keyValue"}})],1),e._v(" "),l("Button",{attrs:{block:""},on:{click:function(t){e.setItem()}}},[e._v("SetItem")]),e._v(" "),l("strong",[e._v("结果")]),e._v(" "),l("p",{staticClass:"result"},[e._v(e._s(e.setItemResult))])],1),e._v(" "),l("section",[l("strong",[e._v("获取存储信息")]),e._v(" "),l("Item",{staticClass:"item",attrs:{"no-lines":""}},[l("Label",{slot:"item-left"},[e._v("Key: ")]),e._v(" "),l("Input",{attrs:{placeholder:"key",type:"text",clearInput:""},model:{value:e.getKey,callback:function(t){e.getKey=t},expression:"getKey"}})],1),e._v(" "),l("Button",{attrs:{block:""},on:{click:function(t){e.getItem()}}},[e._v("GetItem")]),e._v(" "),l("strong",[e._v("结果")]),e._v(" "),l("p",{staticClass:"result"},[e._v(e._s(e.getItemResult))])],1),e._v(" "),l("section",[l("strong",[e._v("删除相应存储信息")]),e._v(" "),l("Item",{staticClass:"item",attrs:{"no-lines":""}},[l("Label",{slot:"item-left"},[e._v("Key: ")]),e._v(" "),l("Input",{attrs:{placeholder:"key",type:"text",clearInput:""},model:{value:e.deleteKey,callback:function(t){e.deleteKey=t},expression:"deleteKey"}})],1),e._v(" "),l("Button",{attrs:{block:""},on:{click:function(t){e.removeItem()}}},[e._v("RmoveItem")]),e._v(" "),l("strong",[e._v("结果")]),e._v(" "),l("p",{staticClass:"result"},[e._v(e._s(e.removeItemResult))])],1)])],1)},staticRenderFns:[]}},662:function(e,t,l){l(1018);var n=l(0)(l(1020),l(1021),"data-v-deb10efc",null);e.exports=n.exports}});