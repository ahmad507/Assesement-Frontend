<template>
  <div class="__feed">
    <LeftFeed />
    <RightFeed />
    <img
      class="__logo"
      src="https://api.insurediy.com.sg/storage/home/iDIY-3-logos.svg"
      alt="InsureDIY Logo"
    />
  </div>
</template>

<script>
import RightFeed from "./RightFeed.vue";
import LeftFeed from "./LeftFeed.vue";
export default {
  components: {
    RightFeed,
    LeftFeed,
  },
};
</script>

<style>
</style>