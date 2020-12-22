import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import fastclick from "fastclick";

Vue.config.productionTip = false;

import './common/stylus/index.styl'

// 移动设备上的浏览器默认会在用户点击屏幕大约延迟300毫秒后才会触发点击事件，这是为了检查用户是否在做双击。为了能够立即响应用户的点击事件，才有了FastClick

fastclick.attach(document.body); // 使得点击没有300毫秒延迟

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
