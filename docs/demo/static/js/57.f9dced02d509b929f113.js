webpackJsonp([57],{656:function(t,o,n){n(994);var a=n(0)(n(996),n(997),"data-v-272d15c3",null);t.exports=a.exports},994:function(t,o,n){var a=n(995);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(590)("5e1a8396",a,!0)},995:function(t,o,n){o=t.exports=n(589)(),o.push([t.i,".detailBox[data-v-272d15c3]{margin-bottom:5px}.detailBox .detailBox__title[data-v-272d15c3]{color:#000;font-weight:700}.detailBox .detailBox__value[data-v-272d15c3]{color:#333}",""])},996:function(t,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default={name:"name",data:function(){return{}},props:{},watch:{},computed:{},methods:{},created:function(){},mounted:function(){this.$config.get("pageTransition")},activated:function(){},components:{}}},997:function(t,o){t.exports={render:function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("Page",[n("Header",[n("Navbar",[n("Title",[t._v("Nav")])],1)],1),t._v(" "),n("Content",{staticClass:"outer-content",attrs:{padding:""}},[n("h5",[t._v("简介")]),t._v(" "),n("p",[t._v("Nav组件是在Page组件的外层, 用于控制转场动画(animate)/转场的Indicator提示(showIndicatorWhenPageChange)等. 这部分的参数在项目初始化的时候就固定了, 后台不可动态修改. 属性可在组件上传入, 或者在配置中指定. ")]),t._v(" "),n("h5",[t._v("转场动画")]),t._v(" "),n("p",[t._v("\n            转场动画可以是以下几种, 也可以自定义动画:\n            ios-transition/zoom-transition/fade-bottom-transition/fade-right-transition\n        ")]),t._v(" "),n("h5",[t._v("转场提示")]),t._v(" "),n("p",[t._v("这部分使用的是Indicator组件实现, 路由切换前开启Indicator, 路由切换完自动关闭. 一般在异步下载页面数据时用到, 避免长时间的假死等待的情况.")]),t._v(" "),n("h5",[t._v("默认值")]),t._v(" "),n("Grid",[n("Row",[n("Column",{attrs:{"col-4":""}},[n("strong",[t._v("IOS模式:")])]),t._v(" "),n("Column",{attrs:{"col-8":""}},[t._v("fade-right-transition")])],1),t._v(" "),n("Row",[n("Column",{attrs:{"col-4":""}},[n("strong",[t._v("Android模式:")])]),t._v(" "),n("Column",{attrs:{"col-8":""}},[t._v("zoom-transition")])],1)],1),t._v(" "),n("h5",[t._v("当前Nav配置")]),t._v(" "),n("Grid",[n("Row",[n("Column",{attrs:{"col-4":""}},[n("strong",[t._v("转场动画:")])]),t._v(" "),n("Column",{attrs:{"col-8":""}},[t._v(t._s(t.$config.get("pageTransition")))])],1),t._v(" "),n("Row",[n("Column",{attrs:{"col-4":""}},[n("strong",[t._v("开启转场提示:")])]),t._v(" "),n("Column",{attrs:{"col-8":""}},[t._v(t._s(t.$config.get("showIndicatorWhenPageChange")))])],1)],1)],1)],1)},staticRenderFns:[]}}});