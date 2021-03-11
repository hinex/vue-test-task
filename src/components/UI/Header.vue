<template>
  <b-navbar toggleable="lg" type="dark" variant="dark" class="mb-3">
    <b-container>
      <b-navbar-brand href="#">JSDelivery</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="flex-grow-1">
          <b-nav-form class="w-100" form-class="w-100">
            <b-form-input
              v-model.lazy="search"
              size="sm" class="w-100"
              placeholder="Search">
            </b-form-input>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    search: {
      get() {
        return this.$store.state.npm.search;
      },
      set(val) {
        this.$store.dispatch('preloadNpmSearch', {
          search: val,
        });
      },
    },
  },
};
</script>

<style scoped>

</style>
