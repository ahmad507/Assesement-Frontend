<template>
  <div>
    <img class="__blogImage" :src="blog.blog_image" />
    <b
      ><p>{{ blog.title }}</p></b
    >
  </div>
</template>
<script>
export default {
  name: "blog",
  props: ["blog"],
};
</script>
<style>
</style>

