webpackJsonp([6],{1131:function(i,t,e){var s=e(1132);"string"==typeof s&&(s=[[i.i,s,""]]),s.locals&&(i.exports=s.locals);e(590)("ed074462",s,!0)},1132:function(i,t,e){t=i.exports=e(589)(),t.push([i.i,".swiper[data-v-3e3a4c1c]{width:100%;min-width:285px;height:190px;margin:20px auto}.swiper .slide[data-v-3e3a4c1c]{text-align:center;font-size:18px;background:#fff;display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center}.swiper .black[data-v-3e3a4c1c]{background:#000}.scroll-swiper[data-v-3e3a4c1c]{width:100%;height:300px;background:#fff}.scroll-swiper .scroll-slide[data-v-3e3a4c1c]{height:auto;box-sizing:border-box;padding:20px}",""])},1133:function(i,t,e){var s=e(1134);"string"==typeof s&&(s=[[i.i,s,""]]),s.locals&&(i.exports=s.locals);e(590)("ef579eca",s,!0)},1134:function(i,t,e){t=i.exports=e(589)(),t.push([i.i,".slidesPage .swiper-container{outline:1px solid #ddd}.async{background:#fff}.customizedPagination .swiper-pagination-bullet{width:20px;height:20px;text-align:center;line-height:20px;font-size:12px;color:#000;opacity:1;background:rgba(0,0,0,.2)}.customizedPagination .swiper-pagination-bullet-active{color:#fff;background:#007aff}.parallax{height:400px!important;color:#fff}.parallax .parallax-bg{position:absolute;left:0;top:0;width:130%;height:100%;background:url("+e(709)+") no-repeat 50%/cover}.parallax .swiper-slide{background:transparent!important;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.parallax .swiper-slide .title{font-size:41px;font-weight:300}.parallax .swiper-slide .subtitle{font-size:21px}.parallax .swiper-slide .text{font-size:14px;max-width:400px;line-height:1.3}.flipEffect.swiper{width:250px!important;padding:40px!important}.flipEffect.swiper .slide{background-position:50%;background-size:cover}.coverflow .slide{width:50%!important;background:transparent!important}.coverflow .slide .slide-zoom{height:100%}.coverflow .slide .slide-zoom img{height:100%;width:auto}.grabCusor .slide:nth-child(2n){width:250px!important}.grabCusor .slide:nth-child(3n){width:100px!important}",""])},1135:function(i,t,e){"use strict";function s(i){return i&&i.__esModule?i:{default:i}}Object.defineProperty(t,"__esModule",{value:!0});var a=e(710),l=s(a),r=e(711),n=s(r),o=e(709),c=s(o);t.default={name:"name",data:function(){return{asyncIimageList:[],coverflow:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},paginationBulletRender:function(i,t,e){return'<span class="'+e+'">'+(t+1)+"</span>"},breakpoints:{1024:{slidesPerView:4,spaceBetween:40},768:{slidesPerView:3,spaceBetween:30},640:{slidesPerView:2,spaceBetween:20},320:{slidesPerView:1,spaceBetween:10}},dynamicData:["Slide 1","Slide 2","Slide 3"]}},computed:{swiper:function(){return this.$refs.mySwiperA},dynamicSlidesComponent:function(){return this.$refs.dynamicSlides.swiper},defaultSwiperComponent:function(){return this.$refs.defaultSwiper}},methods:{onTransitionEndHandler:function(i){console.log("onTransitionEndHandler swiper instance:"),console.log(i)},loadAsyncImg:function(){this.asyncIimageList=[l.default,n.default,c.default]},addSlide:function(){var i=this,t="Slide "+(this.dynamicData.length+1);this.dynamicData.push(t),this.$nextTick(function(){i.dynamicSlidesComponent.update()})},removeSlide:function(){var i=this;this.dynamicData.pop(),this.$nextTick(function(){i.dynamicSlidesComponent.update(!0)})},onInit:function(i){}},created:function(){},mounted:function(){},activated:function(){}}},1136:function(i,t,e){i.exports={render:function(){var i=this,t=i.$createElement,s=i._self._c||t;return s("Page",[s("Header",[s("Navbar",[s("Title",[i._v("Slides")])],1)],1),i._v(" "),s("Content",{staticClass:"outer-content slidesPage",attrs:{padding:""}},[s("h1",[i._v("Introduction")]),i._v(" "),s("p",[i._v("Slides组件是 "),s("strong",[i._v("Swiper插件")]),i._v("\n           的移植和拓展, Swiper初始化传递的属性对应Vue组件的props, Swiper属性中定义的钩子事件对应Vue组件的事件系统. 两者无缝对接, 使用上没有差异.")]),i._v(" "),s("p",[i._v("\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam consequuntur cumque earum exercitationem, id ipsa laboriosam laudantium magnam mollitia perferendis provident, quia quo recusandae reprehenderit saepe sunt totam vitae!")]),i._v(" "),s("h5",[i._v("Async")]),i._v(" "),s("Slides",{staticClass:"swiper async",on:{onTransitionEnd:i.onTransitionEndHandler}},i._l(i.asyncIimageList,function(i,t){return s("Slide",{key:t,staticClass:"slide"},[s("img",{attrs:{src:i,alt:"asyncImg"}})])})),i._v(" "),s("Grid",{attrs:{"no-padding":""}},[s("Row",{attrs:{"justify-content-center":""}},[s("Button",{attrs:{outline:"",small:""},on:{click:i.loadAsyncImg}},[i._v("Load Img")])],1)],1),i._v(" "),s("h5",[i._v("Default Setup")]),i._v(" "),s("Slides",{ref:"defaultSwiper",staticClass:"swiper"},[s("Slide",{staticClass:"slide"},[i._v("Slide 1")]),i._v(" "),s("Slide",{staticClass:"slide"},[i._v("Slide 2")]),i._v(" "),s("Slide",{staticClass:"slide"},[i._v("Slide 3")])],1),i._v(" "),s("h5",[i._v("Responsive / Fullscreen + Pagination")]),i._v(" "),s("Slides",{staticClass:"swiper",attrs:{pagination:".swiper-pagination",paginationClickable:!0}},[s("Slide",{staticClass:"slide"},[i._v("Slide 1")]),i._v(" "),s("Slide",{staticClass:"slide"},[i._v("Slide 2")]),i._v(" "),s("Slide",{staticClass:"slide"},[i._v("Slide 3")])],1),i._v(" "),s("h5",[i._v("Vertical Slides + Responsive / Fullscreen")]),i._v(" "),s("Slides",{staticClass:"swiper",attrs:{pagination:".swiper-pagination",direction:"vertical",paginationClickable:!0}},[s("Slide",{staticClass:"slide"},[i._v("Slide 1")]),i._v(" "),s("Slide",{staticClass:"slide"},[i._v("Slide 2")]),i._v(" "),s("Slide",{staticClass:"slide"},[i._v("Slide 3")])],1),i._v(" "),s("h5",[i._v("Auto Slides Per View / Carousel Mode")]),i._v(" "),s("Slides",{staticClass:"swiper grabCusor",attrs:{pagination:".swiper-pagination",slidesPerView:"auto",paginationClickable:!0,spaceBetween:10}},[s("Slide",{staticClass:"slide"},[s("span",[i._v("Slide 1")])]),i._v(" "),s("Slide",{staticClass:"slide"},[s("span",[i._v("Slide 2")])]),i._v(" "),s("Slide",{staticClass:"slide"},[s("span",[i._v("Slide 3")])]),i._v(" "),s("Slide",{staticClass:"slide"},[s("span",[i._v("Slide 4")])]),i._v(" "),s("Slide",{staticClass:"slide"},[s("span",[i._v("Slide 5")])]),i._v(" "),s("Slide",{staticClass:"slide"},[s("span",[i._v("Slide 6")])]),i._v(" "),s("Slide",{staticClass:"slide"},[s("span",[i._v("Slide 7")])]),i._v(" "),s("Slide",{staticClass:"slide"},[s("span",[i._v("Slide 8")])]),i._v(" "),s("Slide",{staticClass:"slide"},[s("span",[i._v("Slide 9")])]),i._v(" "),s("Slide",{staticClass:"slide"},[s("span",[i._v("Slide 10")])])],1),i._v(" "),s("h5",[i._v("Centered Slides + Auto Slides Per View")]),i._v(" "),s("Slides",{staticClass:"swiper grabCusor",attrs:{pagination:".swiper-pagination",slidesPerView:"auto",centeredSlides:!0,paginationClickable:!0,spaceBetween:10}},[s("Slide",{staticClass:"slide"},[s("span",[i._v("Slide 1")])]),i._v(" "),s("Slide",{staticClass:"slide"},[s("span",[i._v("Slide 2")])]),i._v(" "),s("Slide",{staticClass:"slide"},[s("span",[i._v("Slide 3")])]),i._v(" "),s("Slide",{staticClass:"slide"},[s("span",[i._v("Slide 4")])]),i._v(" "),s("Slide",{staticClass:"slide"},[s("span",[i._v("Slide 5")])]),i._v(" "),s("Slide",{staticClass:"slide"},[s("span",[i._v("Slide 6")])]),i._v(" "),s("Slide",{staticClass:"slide"},[s("span",[i._v("Slide 7")])]),i._v(" "),s("Slide",{staticClass:"slide"},[s("span",[i._v("Slide 8")])]),i._v(" "),s("Slide",{staticClass:"slide"},[s("span",[i._v("Slide 9")])]),i._v(" "),s("Slide",{staticClass:"slide"},[s("span",[i._v("Slide 10")])])],1),i._v(" "),s("h5",[i._v("Scrollbar")]),i._v(" "),s("Slides",{staticClass:"swiper",attrs:{scrollbar:".swiper-scrollbar",centeredSlides:!0,scrollbarHide:!0,slidesPerView:"auto",spaceBetween:30,grabCursor:!1}},[s("Slide",{staticClass:"slide"},[s("img",{attrs:{src:e(710)}})]),i._v(" "),s("Slide",{staticClass:"slide"},[s("img",{attrs:{src:e(711)}})]),i._v(" "),s("Slide",{staticClass:"slide"},[s("img",{attrs:{src:e(709)}})])],1),i._v(" "),s("h5",[i._v("Loop Mode / Infinite Loop")]),i._v(" "),s("Slides",{staticClass:"swiper",attrs:{nextButton:".swiper-button-next",prevButton:".swiper-button-prev",pagination:".swiper-pagination",paginationClickable:!0,spaceBetween:30,loop:!0}},[s("Slide",{staticClass:"slide"},[s("img",{attrs:{src:e(710)}})]),i._v(" "),s("Slide",{staticClass:"slide"},[s("img",{attrs:{src:e(711)}})]),i._v(" "),s("Slide",{staticClass:"slide"},[s("img",{attrs:{src:e(709)}})])],1),i._v(" "),s("h5",[i._v("3D Cube Effect")]),i._v(" "),s("Slides",{staticClass:"swiper cubeEffect",attrs:{watchSlidesProgress:!0,virtualTranslate:!0,resistanceRatio:0,effect:"cube"},on:{onInit:i.onInit}},[s("Slide",{staticClass:"slide"},[s("img",{attrs:{src:e(710)}})]),i._v(" "),s("Slide",{staticClass:"slide"},[s("img",{attrs:{src:e(711)}})]),i._v(" "),s("Slide",{staticClass:"slide"},[s("img",{attrs:{src:e(709)}})])],1),i._v(" "),s("h5",[i._v("3D Coverflow Effect")]),i._v(" "),s("Slides",{staticClass:"swiper coverflow",attrs:{effect:"coverflow",pagination:".swiper-pagination",centeredSlides:!0,watchSlidesProgress:!0,grabCursor:!1,slidesPerView:"auto",coverflow:i.coverflow}},[s("Slide",{staticClass:"slide"},[s("img",{attrs:{src:e(710)}})]),i._v(" "),s("Slide",{staticClass:"slide"},[s("img",{attrs:{src:e(711)}})]),i._v(" "),s("Slide",{staticClass:"slide"},[s("img",{attrs:{src:e(709)}})])],1),i._v(" "),s("h5",[i._v("Keyboard Control / Mousewheel Control")]),i._v(" "),s("p",[i._v("这部分在移动端不适用")]),i._v(" "),s("h5",[i._v("Autoplay")]),i._v(" "),s("Slides",{staticClass:"swiper",attrs:{nextButton:".swiper-button-next",prevButton:".swiper-button-prev",pagination:".swiper-pagination",paginationClickable:!0,centeredSlides:!0,autoplay:2500,autoplayDisableOnInteraction:!1,spaceBetween:30}},[s("Slide",{staticClass:"slide"},[s("img",{attrs:{src:e(710)}})]),i._v(" "),s("Slide",{staticClass:"slide"},[s("img",{attrs:{src:e(711)}})]),i._v(" "),s("Slide",{staticClass:"slide"},[s("img",{attrs:{src:e(709)}})])],1),i._v(" "),s("h5",[i._v("Dynamic Slides")]),i._v(" "),s("Slides",{ref:"dynamicSlides",staticClass:"swiper",attrs:{nextButton:".swiper-button-next",prevButton:".swiper-button-prev",pagination:".swiper-pagination",paginationClickable:!0}},i._l(i.dynamicData,function(t,e){return s("Slide",{key:e,staticClass:"slide"},[s("span",[i._v(i._s(t))])])})),i._v(" "),s("Grid",{attrs:{"no-padding":""}},[s("Row",{attrs:{"justify-content-center":""}},[s("Button",{attrs:{outline:"",small:""},on:{click:i.addSlide}},[i._v(" 末尾添加slide")]),i._v(" "),s("Button",{attrs:{outline:"",small:""},on:{click:i.removeSlide}},[i._v(" 末尾删除slide")])],1)],1),i._v(" "),s("h5",[i._v("Hash导航")]),i._v(" "),s("p",[i._v("不建议使用, 因为切换hash会导致路由跳转")]),i._v(" "),s("h5",[i._v("RTL Layout")]),i._v(" "),s("Slides",{staticClass:"swiper",attrs:{dir:"rtl",nextButton:".swiper-button-next",prevButton:".swiper-button-prev",pagination:".swiper-pagination",paginationClickable:!0}},[s("Slide",{staticClass:"slide"},[s("img",{attrs:{src:e(710)}})]),i._v(" "),s("Slide",{staticClass:"slide"},[s("img",{attrs:{src:e(711)}})]),i._v(" "),s("Slide",{staticClass:"slide"},[s("img",{attrs:{src:e(709)}})])],1),i._v(" "),s("h5",[i._v("Parallax")]),i._v(" "),s("Slides",{staticClass:"swiper parallax",attrs:{paginationClickable:!0,watchSlidesProgress:!0,parallax:!0,speed:600,nextButton:".swiper-button-next",prevButton:".swiper-button-prev",pagination:".swiper-pagination"}},[s("div",{staticClass:"parallax-bg",attrs:{"data-swiper-parallax":"-23%"},slot:"parallax"}),i._v(" "),s("Slide",{staticClass:"slide"},[s("div",{staticClass:"title",attrs:{"data-swiper-parallax":"-100"}},[i._v("Slide 1")]),i._v(" "),s("div",{staticClass:"subtitle",attrs:{"data-swiper-parallax":"-200"}},[i._v("Subtitle")]),i._v(" "),s("div",{staticClass:"text",attrs:{"data-swiper-parallax":"-300"}},[s("p",[i._v("\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis feugiat.")])])]),i._v(" "),s("Slide",{staticClass:"slide"},[s("div",{staticClass:"title",attrs:{"data-swiper-parallax":"-100"}},[i._v("Slide 2")]),i._v(" "),s("div",{staticClass:"subtitle",attrs:{"data-swiper-parallax":"-200"}},[i._v("Subtitle")]),i._v(" "),s("div",{staticClass:"text",attrs:{"data-swiper-parallax":"-300"}},[s("p",[i._v("\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis feugiat.")])])]),i._v(" "),s("Slide",{staticClass:"slide"},[s("div",{staticClass:"title",attrs:{"data-swiper-parallax":"-100"}},[i._v("Slide 3")]),i._v(" "),s("div",{staticClass:"subtitle",attrs:{"data-swiper-parallax":"-200"}},[i._v("Subtitle")]),i._v(" "),s("div",{staticClass:"text",attrs:{"data-swiper-parallax":"-300"}},[s("p",[i._v("\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis feugiat.")])])])],1),i._v(" "),s("h5",[i._v("Customized Pagination")]),i._v(" "),s("Slides",{staticClass:"swiper customizedPagination ",attrs:{paginationClickable:!0,pagination:".swiper-pagination",paginationBulletRender:i.paginationBulletRender}},[s("Slide",{staticClass:"slide"},[s("img",{attrs:{src:e(710)}})]),i._v(" "),s("Slide",{staticClass:"slide"},[s("img",{attrs:{src:e(711)}})]),i._v(" "),s("Slide",{staticClass:"slide"},[s("img",{attrs:{src:e(709)}})])],1),i._v(" "),s("h5",[i._v("Fraction Pagination")]),i._v(" "),s("Slides",{staticClass:"swiper",attrs:{nextButton:".swiper-button-next",prevButton:".swiper-button-prev",pagination:".swiper-pagination",paginationType:"fraction"}},[s("Slide",{staticClass:"slide"},[s("img",{attrs:{src:e(710)}})]),i._v(" "),s("Slide",{staticClass:"slide"},[s("img",{attrs:{src:e(711)}})]),i._v(" "),s("Slide",{staticClass:"slide"},[s("img",{attrs:{src:e(709)}})])],1),i._v(" "),s("h5",[i._v("Progress Pagination")]),i._v(" "),s("Slides",{staticClass:"swiper",attrs:{nextButton:".swiper-button-next",prevButton:".swiper-button-prev",pagination:".swiper-pagination",paginationType:"progress"}},[s("Slide",{staticClass:"slide"},[s("img",{attrs:{src:e(710)}})]),i._v(" "),s("Slide",{staticClass:"slide"},[s("img",{attrs:{src:e(711)}})]),i._v(" "),s("Slide",{staticClass:"slide"},[s("img",{attrs:{src:e(709)}})])],1),i._v(" "),s("h5",[i._v("Images Lazy Loading")]),i._v(" "),s("Slides",{staticClass:"swiper",attrs:{nextButton:".swiper-button-next",prevButton:".swiper-button-prev",pagination:".swiper-pagination",paginationClickable:!0,lazyLoading:!0,preloadImages:!1}},[s("Slide",{staticClass:"slide black"},[s("img",{staticClass:"swiper-lazy",attrs:{"data-src":"http://lorempixel.com/1600/1200/nature/1"}}),i._v(" "),s("div",{staticClass:"swiper-lazy-preloader swiper-lazy-preloader-white"})]),i._v(" "),s("Slide",{staticClass:"slide black"},[s("img",{staticClass:"swiper-lazy",attrs:{"data-src":"http://lorempixel.com/1600/1200/nature/2"}}),i._v(" "),s("div",{staticClass:"swiper-lazy-preloader swiper-lazy-preloader-white"})]),i._v(" "),s("Slide",{staticClass:"slide black"},[s("img",{staticClass:"swiper-lazy",attrs:{"data-src":"http://lorempixel.com/1600/1200/nature/3"}}),i._v(" "),s("div",{staticClass:"swiper-lazy-preloader swiper-lazy-preloader-white"})]),i._v(" "),s("Slide",{staticClass:"slide black"},[s("img",{staticClass:"swiper-lazy",attrs:{"data-src":"http://lorempixel.com/1600/1200/nature/4"}}),i._v(" "),s("div",{staticClass:"swiper-lazy-preloader swiper-lazy-preloader-white"})]),i._v(" "),s("Slide",{staticClass:"slide black"},[s("img",{staticClass:"swiper-lazy",attrs:{"data-src":"http://lorempixel.com/1600/1200/nature/5"}}),i._v(" "),s("div",{staticClass:"swiper-lazy-preloader swiper-lazy-preloader-white"})])],1),i._v(" "),s("h5",[i._v("Scroll Container")]),i._v(" "),s("Slides",{staticClass:"scroll-swiper",attrs:{scrollbar:".swiper-scrollbar",direction:"vertical",slidesPerView:"auto",freeMode:!0}},[s("Slide",{staticClass:"scroll-slide"},[s("h2",[i._v("Scroll Content")]),i._v(" "),s("p",[i._v("\n                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, excepturi, obcaecati! Accusantium adipisci blanditiis ducimus eos esse excepturi facere, fugit ipsam laborum nobis odit recusandae, rerum ut vel, vitae voluptatum.")]),i._v(" "),s("p",[i._v("\n                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, excepturi, obcaecati! Accusantium adipisci blanditiis ducimus eos esse excepturi facere, fugit ipsam laborum nobis odit recusandae, rerum ut vel, vitae voluptatum.")]),i._v(" "),s("p",[i._v("\n                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, excepturi, obcaecati! Accusantium adipisci blanditiis ducimus eos esse excepturi facere, fugit ipsam laborum nobis odit recusandae, rerum ut vel, vitae voluptatum.")]),i._v(" "),s("p",[i._v("\n                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, excepturi, obcaecati! Accusantium adipisci blanditiis ducimus eos esse excepturi facere, fugit ipsam laborum nobis odit recusandae, rerum ut vel, vitae voluptatum.")]),i._v(" "),s("p",[i._v("\n                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, excepturi, obcaecati! Accusantium adipisci blanditiis ducimus eos esse excepturi facere, fugit ipsam laborum nobis odit recusandae, rerum ut vel, vitae voluptatum.")]),i._v(" "),s("p",[i._v("\n                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, excepturi, obcaecati! Accusantium adipisci blanditiis ducimus eos esse excepturi facere, fugit ipsam laborum nobis odit recusandae, rerum ut vel, vitae voluptatum.")]),i._v(" "),s("p",[i._v("\n                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, excepturi, obcaecati! Accusantium adipisci blanditiis ducimus eos esse excepturi facere, fugit ipsam laborum nobis odit recusandae, rerum ut vel, vitae voluptatum.")]),i._v(" "),s("p",[i._v("\n                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad consequatur deserunt dolore doloremque ducimus eaque eos error facilis iure minima necessitatibus neque, porro praesentium provident quas quibusdam suscipit, voluptates!")])])],1),i._v(" "),s("h5",[i._v("Responsive Breakpoints")]),i._v(" "),s("p",[i._v("Error on slidesPerView and spaceBetween")]),i._v(" "),s("h5",[i._v("Zoom")]),i._v(" "),s("Slides",{staticClass:"swiper",attrs:{zoom:!0}},[s("Slide",{staticClass:"slide"},[s("img",{attrs:{src:e(710)}})]),i._v(" "),s("Slide",{staticClass:"slide"},[s("img",{attrs:{src:e(711)}})]),i._v(" "),s("Slide",{staticClass:"slide"},[s("img",{attrs:{src:e(709)}})])],1)],1)],1)},staticRenderFns:[]}},686:function(i,t,e){e(1131),e(1133);var s=e(0)(e(1135),e(1136),"data-v-3e3a4c1c",null);i.exports=s.exports},709:function(i,t,e){i.exports=e.p+"static/img/scenery_3.e105291.jpg"},710:function(i,t,e){i.exports=e.p+"static/img/scenery_1.0f8f2d2.jpg"},711:function(i,t,e){i.exports=e.p+"static/img/scenery_2.17556a6.jpg"}});