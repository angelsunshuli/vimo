webpackJsonp([13],{655:function(e,t,i){i(988),i(990);var n=i(0)(i(992),i(993),"data-v-de7f907e",null);e.exports=n.exports},988:function(e,t,i){var n=i(989);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i(590)("6602b0aa",n,!0)},989:function(e,t,i){t=e.exports=i(589)(),t.push([e.i,".hello-vimo-here{text-align:center;color:red;display:none}.hello-vimo .hello-vimo-here{display:block}",""])},990:function(e,t,i){var n=i(991);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i(590)("6622a58d",n,!0)},991:function(e,t,i){t=e.exports=i(589)(),t.push([e.i,".stateBar[data-v-de7f907e]{background:hsla(0,0%,100%,.9);padding:10px 20px}.stateBar p[data-v-de7f907e]{margin:5px 0}",""])},992:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{toggle:!0,isDisabled:!1}},computed:{titleComponent:function(){return this.$refs.title}},methods:{getTime:function(){return(new Date).getHours()+":"+(new Date).getMinutes()+":"+(new Date).getSeconds()},setDocTitle:function(){this.$app.setDocTitle(this.getTime())},setAllTitle:function(){this.setDocTitle(),this.titleComponent.setTitle(this.getTime())}}}},993:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("Page",[i("Header",[i("Navbar",[i("Title",{ref:"title"},[e._v("App")])],1)],1),e._v(" "),i("Content",{staticClass:"outer-content",attrs:{padding:""}},[i("h1",[e._v("App组件")]),e._v(" "),i("p",[e._v("\n            该组件是业务页面的父组件，业务页面挂载、页面状态、弹出层挂载安插等，都是在此组件中完成。\n            组件注册初始化时，会将App组件实例插入到Vue.prototype中，便于业务页面对App组件的操控。\n        ")]),e._v(" "),i("p",[i("strong",[e._v("3秒内页面无法点击滚动")])]),e._v(" "),i("Button",{attrs:{block:""},on:{click:function(t){e.$app.setEnabled(!1,3e3)}}},[e._v("冷冻页面")]),e._v(" "),i("p",[i("strong",[e._v("设置标题")])]),e._v(" "),i("p",[e._v("方法this.$app.setDocTitle(val)只能设置document.title的值, Header中的Title组件请额外处理. 比如下面的按钮.")]),e._v(" "),i("Button",{attrs:{block:""},on:{click:function(t){e.setDocTitle()}}},[e._v("设置 document.title 为当前时间")]),e._v(" "),i("Button",{attrs:{block:""},on:{click:function(t){e.setAllTitle()}}},[e._v("两者同时设置")]),e._v(" "),i("p",[i("strong",[e._v("在根组件添加全局class+='hello-vimo'")])]),e._v(" "),i("Button",{attrs:{block:""},on:{click:function(t){e.$app.setClass("hello-vimo",e.toggle),e.toggle=!e.toggle}}},[e._v("Toggle设置")]),e._v(" "),i("section",{staticClass:"hello-vimo-here",attrs:{padding:""}},[i("strong",[e._v("设置成功")])]),e._v(" "),i("p",[e._v("\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur in rerum saepe sed. Architecto beatae consequuntur ea id, in ipsa maxime perspiciatis, praesentium quae quo repudiandae sit tempora unde ut.")]),e._v(" "),i("p",[e._v("\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur in rerum saepe sed. Architecto beatae consequuntur ea id, in ipsa maxime perspiciatis, praesentium quae quo repudiandae sit tempora unde ut.")]),e._v(" "),i("p",[e._v("\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur in rerum saepe sed. Architecto beatae consequuntur ea id, in ipsa maxime perspiciatis, praesentium quae quo repudiandae sit tempora unde ut.")]),e._v(" "),i("p",[e._v("\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur in rerum saepe sed. Architecto beatae consequuntur ea id, in ipsa maxime perspiciatis, praesentium quae quo repudiandae sit tempora unde ut.")]),e._v(" "),i("p",[e._v("\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur in rerum saepe sed. Architecto beatae consequuntur ea id, in ipsa maxime perspiciatis, praesentium quae quo repudiandae sit tempora unde ut.")]),e._v(" "),i("p",[e._v("\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur in rerum saepe sed. Architecto beatae consequuntur ea id, in ipsa maxime perspiciatis, praesentium quae quo repudiandae sit tempora unde ut.")]),e._v(" "),i("p",[e._v("\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur in rerum saepe sed. Architecto beatae consequuntur ea id, in ipsa maxime perspiciatis, praesentium quae quo repudiandae sit tempora unde ut.")]),e._v(" "),i("p",[e._v("\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur in rerum saepe sed. Architecto beatae consequuntur ea id, in ipsa maxime perspiciatis, praesentium quae quo repudiandae sit tempora unde ut.")]),e._v(" "),i("section",{staticClass:"stateBar",slot:"fixedBottom"},[i("Grid",{attrs:{"no-padding":""}},[i("Row",{attrs:{"no-padding":""}},[i("Column",[i("strong",{attrs:{"text-danger":""}},[e._v("App状态:")]),e._v(" "),i("p",[e._v("isScrolling: "+e._s(e.$app.isScrolling))]),e._v(" "),i("p",[e._v("isEnabled: "+e._s(e.$app.isEnabled))])])],1)],1)],1)],1)],1)},staticRenderFns:[]}}});