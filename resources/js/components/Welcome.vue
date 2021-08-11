<template>
  <div class="mcontainer">
    <Header />
    <Body />
    <Footer />
  </div>
</template>
<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import Body from "./Body.vue";
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