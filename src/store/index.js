import Vue from 'vue';
import Vuex from 'vuex';

import jsdelivr from '@/store/jsdelivr';
import npm from '@/store/npm';

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  modules: {
    npm,
    jsdelivr,
  },
});
