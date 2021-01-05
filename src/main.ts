import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { directive as onClickaway } from "vue-clickaway";

Vue.config.productionTip = false;
Vue.directive("onClickaway", onClickaway);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
