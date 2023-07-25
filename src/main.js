import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import AppText from "./components/shared-components/AppText";
import "./assets/styles/main.scss";
import "./plugins/media/media-mixin";
import "./plugins/directives/click-outside";
import "./plugins/mixins/mixin";
import api from "./service/apiService";
import VueMask from "v-mask";
import VueAwesomeSwiper from "vue-awesome-swiper";
import { CursorFx } from "@luxdamore/vue-cursor-fx";
import "@luxdamore/vue-cursor-fx/dist/CursorFx.css";
import CoolLightBox from "vue-cool-lightbox";
import "vue-cool-lightbox/dist/vue-cool-lightbox.min.css";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.config.productionTip = false;
Vue.component("AppText", AppText);
Vue.use(VueAwesomeSwiper);
Vue.component(CursorFx.name, CursorFx);
Vue.use(CoolLightBox);
Vue.use(ElementUI);
Vue.use(VueMask);
Vue.use(api);

import i18n from "./locales/i18n";
import Util from "@/plugins/globalMethod";

Vue.prototype.$localeKey = Util.localeKey;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
