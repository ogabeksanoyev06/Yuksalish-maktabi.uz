import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import AppText from "./components/shared-components/AppText";
import "./assets/styles/main.scss";
import "./plugins/media/media-mixin";
import "./plugins/directives/click-outside";
import "./plugins/mixins/mixin";
import VueAwesomeSwiper from "vue-awesome-swiper";
import { CursorFx } from "@luxdamore/vue-cursor-fx";
import "@luxdamore/vue-cursor-fx/dist/CursorFx.css";
import CoolLightBox from "vue-cool-lightbox";
import "vue-cool-lightbox/dist/vue-cool-lightbox.min.css";

Vue.config.productionTip = false;
Vue.component("AppText", AppText);
Vue.use(VueAwesomeSwiper);
Vue.component(CursorFx.name, CursorFx);
Vue.use(CoolLightBox);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
