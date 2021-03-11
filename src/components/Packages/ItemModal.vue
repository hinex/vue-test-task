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
        <b-tab title="JSDelivr">
          <b-card-text>Tab contents 2</b-card-text>
        </b-tab>
      </b-tabs>
    </b-card>
    <template #modal-footer>
      <div class="d-flex flex-grow-1 align-items-center justify-content-between">
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

export default {
  name: 'ItemModal',
  components: {
    ItemModalDetails,
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
  },
  methods: {
    openModal(npmPackage) {
      this.npmPackage = npmPackage;
      this.$store.dispatch('preloadDelivrData');
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
