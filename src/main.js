import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

//引入fastClick.js解决300ms延迟
import fastClick from 'fastclick'
fastClick.attach(document.body)

//引入css初始化样式
import './assets/css/reset.css'
import './assets/css/iconfont.css'

//移动端适配
import 'amfe-flexible'

//引入vant组件
import { 
    Swipe, SwipeItem,
    Image as VanImage,Lazyload
  } from 'vant';
Vue.use(Swipe).use(SwipeItem)
   .use(VanImage).use(Lazyload)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
