<template>
  <div id="app">
    <Header />
    <List />
    <Footer />
  </div>
</template>

<script>
import Header from './components/UI/Header.vue';
import List from './components/Packages/List.vue';
import Footer from './components/UI/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    List,
    Footer,
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
