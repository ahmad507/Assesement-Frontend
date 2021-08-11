<template>
  <div class="mcontainer">
    <SiteHeader />
    <Body />
    <Footer />
  </div>
</template>

<script>
import Body from "../../Body.vue";
import Footer from "../../Footer.vue";
import SiteHeader from "./explore_components/site/SiteHeader.vue";
export default {
  components: {
    SiteHeader,
    Body,
    Footer,
  },
};
</script>

<style>
</style>