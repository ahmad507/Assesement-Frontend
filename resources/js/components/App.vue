<template>
  <div class="mcontainer">
    <Header />
    <Body />
    <Footer />
  </div>
</template>

<script>
import Header from "./Header.vue";
import Body from "./Body.vue";
import Footer from "./Footer.vue";
export default {
  components: {
    Header,
    Body,
    Footer,
  },
};
</script>

<style>
</style>