<template>
  <div>
    <b-row>
      <b-col cols="12" md="8">
        <div v-if="item.keywords">
          <strong class="mr-1">Keywords:</strong>
          <b-badge
            v-for="key of item.keywords"
            :key="`keyword-${key}`"
            variant="success"
            class="mr-1"
          >
            {{key}}
          </b-badge>
          <hr>
        </div>
        <div v-if="item.links" class="mb-3">
          <strong class="d-block mb-2">Links:</strong>
          <div v-if="item.links.npm">
            NPM:
            <a :href="item.links.npm" target="_blank">{{item.links.npm}}</a>
          </div>
          <div v-if="item.links.homepage">
            Homepage:
            <a :href="item.links.homepage" target="_blank">{{item.links.homepage}}</a>
          </div>
          <div v-if="item.links.repository">
            Repository:
            <a :href="item.links.repository" target="_blank">{{item.links.repository}}</a>
          </div>
          <div v-if="item.links.bugs">
            Bugs:
            <a :href="item.links.bugs" target="_blank">{{item.links.bugs}}</a>
          </div>
        </div>
      </b-col>
      <b-col cols="12" md="4">
        <div class="mb-3">
          <strong class="mb-2 d-block">Version:</strong>
          {{ item.version }}
        </div>
        <div v-if="item.author" class="mb-3">
          <strong class="mb-2 d-block">Author</strong>
          <User :user="item.author" />
        </div>
        <div v-if="item.publisher" class="mb-3">
          <strong class="mb-2 d-block">Publisher</strong>
          <User :user="item.publisher" />
        </div>
      </b-col>
    </b-row>
    <hr>
    <div v-if="item.maintainers">
      <strong class="d-block">Maintainers</strong>
      <b-row>
        <b-col cols="12" md="4" lg="3"
               v-for="maintainer of item.maintainers"
               :key="maintainer.username">
          <b-card class="mt-2">
            <User :user="maintainer" />
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import User from '../UI/User.vue';

export default {
  name: 'ItemModalDetails',
  components: {
    User,
  },
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style scoped>

</style>
