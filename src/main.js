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

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
