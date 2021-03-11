import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const NPM_REGISTRY_SEARCH = 'https://registry.npmjs.com/-/v1/search?text=';

export default new Vuex.Store({
  state: {
    search: '',
    page: 1,
    limit: 10,
    total: 0,
    loading: false,
    searchResult: [],
  },
  mutations: {
    setSearch(state, search) { state.search = search; },
    setSearchResult(state, result) { state.searchResult = result || []; },
    setLoading(state, type) { state.loading = type; },
    setPage(state, page) { state.page = page; },
    setTotal(state, total) { state.total = total || 0; },
  },
  actions: {
    clearSearch({ commit }) {
      commit('setSearch', '');
      commit('setPage', 1);
      commit('setTotal', 0);
      commit('setSearchResult', []);
      commit('setLoading', false);
    },
    async preloadSearch({ state, commit, dispatch }, {
      search,
      page,
    }) {
      if (!search || search.length === 0) {
        console.log('clear');
        dispatch('clearSearch');
        return;
      }

      if (search === state.search && page === state.page) {
        return;
      }

      commit('setLoading', true);
      commit('setPage', page || 1);
      commit('setSearch', search || state.search);

      const from = state.page * state.limit - state.limit;

      const result = await fetch(
        `${NPM_REGISTRY_SEARCH}${encodeURIComponent(search)}&size=${state.limit}&from=${from}`,
        {
          headers: {
            accept: 'application/json',
          },
        },
      )
        .then((r) => r.json());

      commit('setSearchResult', result.objects.map((o) => o.package));
      commit('setTotal', result.total);
      commit('setLoading', false);
    },
  },
  modules: {
  },
});
