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
      <template #cell(author)="row">
        <div v-if="row.item.author && row.item.author.name" class="small mb-2">
          <a v-if="row.item.author.url" :href="row.item.author.url" target="_blank">
            {{row.item.author.name}}
          </a>
          <span v-else>{{row.item.author.name}}</span>
        </div>
        <div v-if="row.item.author && row.item.author.email" class="small">
          Email:<br>
          <a :href="`mailto:${row.item.author.email}`">{{row.item.author.email}}</a>
        </div>
      </template>
      <template #cell(publisher)="row">
        <div v-if="row.item.publisher && row.item.publisher.username" class="small mb-2">
          <a :href="`https://www.npmjs.com/~${row.item.publisher.username}`" target="_blank">
            {{row.item.publisher.username}}
          </a>
        </div>
        <div v-if="row.item.publisher && row.item.publisher.email" class="small">
          Email:<br>
          <a :href="`mailto:${row.item.publisher.email}`">{{row.item.publisher.email}}</a>
        </div>
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

export default {
  name: 'List',
  data() {
    return {
      fields: [
        {
          key: 'name', label: 'Package Name',
        },
        {
          key: 'description', label: 'Description',
        },
        {
          key: 'version', label: 'Version',
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
    ...mapState(['search', 'searchResult', 'total', 'loading', 'limit']),
    page: {
      get() {
        return this.$store.state.page;
      },
      set(val) {
        this.$store.dispatch('preloadSearch', {
          page: val,
          search: this.search,
        });
      },
    },
  },
};
</script>
