<template>
  <div id="app">
    <Header />
    <List @open-item="openItem" />
    <ItemModal ref="modal" />
    <Footer />
  </div>
</template>

<script>
import Header from './components/UI/Header.vue';
import List from './components/Packages/List.vue';
import ItemModal from './components/Packages/ItemModal.vue';
import Footer from './components/UI/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    List,
    ItemModal,
    Footer,
  },
  methods: {
    openItem(name) {
      this.$refs.modal.openModal(name);
    },
  },
};
</script>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
