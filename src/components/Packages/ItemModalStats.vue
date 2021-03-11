<template>
  <div>
    <div class="mb-2">
      <strong>Rank:</strong> {{stats.rank}}
    </div>
    <div class="mb-2">
      <strong>Total:</strong> {{stats.total}} hits
    </div>
    <div>
      <b-card v-for="version of versions" :key="version.label" class="mt-2">
        <strong>{{version.label}} - {{version.total}} hits</strong>
        <trend
          :data="version.data"
          :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
          auto-draw
          smooth
        />
      </b-card>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ItemModalStats',
  props: {
    stats: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    versions() {
      if (!this.stats || !this.stats.versions) {
        return [];
      }

      return Object.keys(this.stats.versions)
        .map((k) => ({
          label: k,
          total: this.stats.versions[k].total,
          data: Object.keys(this.stats.versions[k].dates)
            .map((d) => this.stats.versions[k].dates[d]),
        })).reverse();
    },
  },
};
</script>

<style scoped>

</style>
