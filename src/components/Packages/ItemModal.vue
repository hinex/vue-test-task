<template>
  <b-modal
    ref="item"
    id="modal-item"
    size="lg"
    :title="title"
    @hidden="closeModal">
    <b-card no-body>
      <b-tabs card>
        <b-tab title="Details" active>
          <b-card-text>
            <ItemModalDetails v-if="item" :item="item" />
          </b-card-text>
        </b-tab>
        <b-tab title="Versions">
          <b-card-text>
            <ItemModalVersions :tags="tags" :versions="versions" />
          </b-card-text>
        </b-tab>
        <b-tab title="Stats">
          <b-card-text>
            <ItemModalStats :stats="stats" />
          </b-card-text>
        </b-tab>
      </b-tabs>
    </b-card>
    <template #modal-footer>
      <div class="d-flex flex-grow-1 align-items-center justify-content-between flex-wrap">
        <span>Published: {{date}}</span>
        <b-button
          variant="danger"
          @click="$bvModal.hide('modal-item')">
          Close
        </b-button>
      </div>
    </template>
  </b-modal>
</template>

<script>
import Dateformat from 'dateformat';
import ItemModalDetails from './ItemModalDetails.vue';
import ItemModalVersions from './ItemModalVersions.vue';
import ItemModalStats from './ItemModalStats.vue';

export default {
  name: 'ItemModal',
  components: {
    ItemModalDetails,
    ItemModalVersions,
    ItemModalStats,
  },
  data() {
    return {
      npmPackage: null,
    };
  },
  computed: {
    title() {
      if (this.npmPackage) {
        return `Package: ${this.npmPackage}`;
      }

      return 'Loading...';
    },
    date() {
      if (this.item) {
        return Dateformat(this.item.date);
      }

      return 'Loading...';
    },
    item() {
      if (!this.npmPackage) {
        return {};
      }

      return this.$store.getters.getNpmPackage(this.npmPackage);
    },
    stats() {
      if (!this.npmPackage) {
        return {};
      }

      return this.$store.state.jsdelivr.stats;
    },
    tags() {
      if (!this.npmPackage) {
        return {};
      }

      return this.$store.state.jsdelivr.tags;
    },
    versions() {
      if (!this.npmPackage) {
        return {};
      }

      return this.$store.state.jsdelivr.versions;
    },
  },
  methods: {
    openModal(npmPackage) {
      this.npmPackage = npmPackage;
      this.$store.dispatch('preloadDelivrData', npmPackage);
      this.$refs.item.show();
    },
    closeModal() {
      this.$store.dispatch('clearDelivr');
    },
  },
};
</script>

<style scoped>

</style>
