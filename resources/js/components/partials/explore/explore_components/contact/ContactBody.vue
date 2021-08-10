<template>
  <div class="__contactus">
    <img class="__flagContainer" :src="contact.flag" alt="" srcset="" />
    <h1 class="__country">{{ contact.country }}</h1>
  </div>
</template>
<script>
export default {
  props: ["contact"],
};
</script>

<style>
</style>