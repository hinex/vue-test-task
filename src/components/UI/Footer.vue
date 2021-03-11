<template>
<div class="footer mt-3">
  <b-container class="my-3">
    <b-row>
      <b-col cols="12" sm="8" class="text-center text-sm-left pb-3 pb-sm-0">
        <div class="author">
          <b-img
            src="https://avatars.githubusercontent.com/u/4774328?s=460&u=7bc4579921cbbfbaff32384464be1c0150055f5c&v=4"
            rounded="circle"
            alt="Author Icon"
            width="35"
            height="35"
            class="mr-2"></b-img>
          Roman Hinex
        </div>
      </b-col>
      <b-col cols="12" sm="4" class="text-center text-sm-right">
        <a href="https://github.com/hinex" target="_blank"><b-img src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" height="35"></b-img></a>
      </b-col>
    </b-row>
  </b-container>
</div>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style lang="scss" scoped>
@import "~bootstrap/scss/functions.scss";
@import "~bootstrap/scss/_variables.scss";

.footer {
  background: $gray-200;
}
</style>
