<template>
  <div class="mcontainer">
    <AboutHeader />
    <Footer />
  </div>
</template>

<script>
import Footer from "../../Footer.vue";
import AboutHeader from "./explore_components/about/AboutHeader.vue";
export default {
  components: {
    AboutHeader,
    Footer,
  },
};
</script>

<style>
</style>