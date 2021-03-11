const JSDELIVR = 'https://data.jsdelivr.com/v1/package/npm/';

export default {
  state: {
    tags: {},
    versions: [],
    stats: {},
  },
  mutations: {
    setTags(state, tags) { state.tags = tags; },
    setVersions(state, versions) { state.versions = versions; },
    setStats(state, stats) { state.stats = stats; },
  },
  actions: {
    clearDelivr({ commit }) {
      commit('setTags', {});
      commit('setVersions', []);
      commit('setStats', {});
    },
    async preloadDelivrTagsAndVersions({ commit }, packageName) {
      const result = await fetch(
        `${JSDELIVR}${packageName}`,
        {
          headers: {
            accept: 'application/json',
          },
        },
      )
        .then((r) => r.json());

      commit('setTags', result.tags);
      commit('setVersions', result.versions);
    },
    async preloadDelivrStats({ commit }, packageName) {
      const result = await fetch(
        `${JSDELIVR}${packageName}/stats`,
        {
          headers: {
            accept: 'application/json',
          },
        },
      )
        .then((r) => r.json());

      commit('setStats', result);
    },
    async preloadDelivrData({ dispatch }, packageName) {
      dispatch('preloadDelivrTagsAndVersions', packageName);
      dispatch('preloadDelivrStats', packageName);
    },
  },
};
