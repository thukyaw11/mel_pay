import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "vue-navigation-bar/dist/vue-navigation-bar.css";
import VueNavigationBar from "vue-navigation-bar";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'
import vueScrollTo from 'vue-scrollto';
import VueResource from 'vue-resource'
Vue.use(vueScrollTo);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(Vuesax);
Vue.use(VueResource);

Vue.component("vue-navigation-bar", VueNavigationBar);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
