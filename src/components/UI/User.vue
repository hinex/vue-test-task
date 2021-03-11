<template>
  <div>
    <div v-if="user.name" class="small mb-2">
      <a v-if="user.url" :href="user.url" target="_blank">
        {{user.name}}
      </a>
      <span v-else>{{user.name}}</span>
    </div>

    <div v-if="user.username" class="small mb-2">
      <a :href="`https://www.npmjs.com/~${user.username}`" target="_blank">
        {{user.username}}
      </a>
    </div>

    <div v-if="user.email" class="small">
      Email:<br>
      <a :href="`mailto:${user.email}`">{{user.email}}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'User',
  props: {
    user: {
      type: Object,
      default: () => null,
    },
  },
};
</script>

<style scoped>

</style>
