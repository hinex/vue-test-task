<template>
  <b-row>
    <b-col cols="12" md="5">
      <div v-for="tag of tagsFormatted" :key="tag.label" class="mb-2">
        <b-badge variant="warning">{{ tag.label }}</b-badge> - {{tag.version}}
      </div>
    </b-col>
    <b-col cols="12" md="7">
      <ul>
        <li v-for="version of versions" :key="version">{{version}}</li>
      </ul>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'ItemModalVersions',
  props: {
    versions: {
      type: Array,
      default: () => [],
    },
    tags: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    tagsFormatted() {
      return Object.keys(this.tags).map((k) => ({ label: k, version: this.tags[k] }));
    },
  },
};
</script>

<style scoped>

</style>
