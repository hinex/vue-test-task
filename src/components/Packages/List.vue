<template>
  <b-container class="flex-grow-1">
    <b-table
      :items="searchResult"
      :fields="fields"
      :busy="loading"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      :sort-direction="sortDirection"
      :no-provider-paging="true"
      stacked="md"
      show-empty
      small
      striped
    >
      <template #cell(name)="row">
        <div class="mb-2">
          {{row.item.name}}
        </div>

        <b-btn
          variant="info"
          size="sm"
          :disabled="loading"
          @click="$emit('open-item', row.item.name)">
          Show Details
        </b-btn>
      </template>
      <template #cell(author)="row">
        <User v-if="row.item.author" :user="row.item.author" />
      </template>
      <template #cell(publisher)="row">
        <User v-if="row.item.publisher" :user="row.item.publisher" />
      </template>
    </b-table>

    <b-row>
      <b-col sm="5" md="6" class="my-1">
        <b-form-group
          label="Per page"
          label-for="per-page-select"
          label-cols-sm="6"
          label-cols-md="4"
          label-cols-lg="3"
          label-align-sm="right"
          label-size="sm"
          class="mb-0"
        >
          <b-form-select
            id="per-page-select"
            v-model="limit"
            :options="pageOptions"
            size="sm"
          ></b-form-select>
        </b-form-group>
      </b-col>

      <b-col sm="7" md="6" class="my-1">
        <b-pagination
          v-model="page"
          :total-rows="total"
          :per-page="limit"
          align="fill"
          size="sm"
          class="my-0"
        ></b-pagination>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState } from 'vuex';
import User from '../UI/User.vue';

export default {
  name: 'List',
  components: {
    User,
  },
  data() {
    return {
      fields: [
        {
          key: 'name', label: 'Package Name',
        },
        {
          key: 'version', label: 'Version',
        },
        {
          key: 'description', label: 'Description',
        },
        {
          key: 'author', label: 'Author',
        },
        {
          key: 'publisher', label: 'Publisher',
        },
      ],
      pageOptions: [10, 15, { value: 100, text: 'Show a lot' }],
      sortBy: '',
      sortDesc: false,
      sortDirection: 'asc',
    };
  },
  computed: {
    ...mapState({
      search: (state) => state.npm.search,
      searchResult: (state) => state.npm.searchResult,
      total: (state) => state.npm.total,
      loading: (state) => state.npm.loading,
      limit: (state) => state.npm.limit,
    }),
    page: {
      get() {
        return this.$store.state.npm.page;
      },
      set(val) {
        this.$store.dispatch('preloadNpmSearch', {
          page: val,
          search: this.search,
        });
      },
    },
  },
};
</script>
