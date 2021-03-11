import Vue from 'vue';
import { BootstrapVue, ModalPlugin } from 'bootstrap-vue';
import Trend from 'vuetrend';
import App from './App.vue';
import store from './store';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;

Vue.use(Trend);
Vue.use(BootstrapVue);
Vue.use(ModalPlugin);

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
