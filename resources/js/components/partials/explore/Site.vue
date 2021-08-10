<template>
  <div class="mcontainer">
    <SiteHeader />
    <div>
      <Body />
    </div>
    <div class="__footer">
      <Feed />
    </div>
  </div>
</template>

<script>
import Body from "../../Body.vue";
import Feed from "../Feed.vue";
import SiteHeader from "./explore_components/site/SiteHeader.vue";
export default {
  components: {
    Feed,
    Body,
    SiteHeader,
  },
};
</script>

<style>
</style>