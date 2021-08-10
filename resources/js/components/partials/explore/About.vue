<template>
  <div class="mcontainer">
    <AboutHeader />
    <div class="__footer">
      <Feed />
    </div>
  </div>
</template>

<script>
import Feed from "../Feed.vue";
import AboutHeader from "./explore_components/about/AboutHeader.vue";
export default {
  components: {
    Feed,
    AboutHeader,
  },
};
</script>

<style>
</style>