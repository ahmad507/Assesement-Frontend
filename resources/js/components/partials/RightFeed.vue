<template>
  <div id="right">
    <div
      class="__blog"
      v-for="item in items"
      :key="item.blog_code"
      :item="item"
    >
      <img :src="item.blog_image" class="__blogImage" />
      <h1 class="__blogName">{{ item.blog_name }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  name: "item",
  props: ["item"],
  data() {
    return {
      items: [
        {
          blog_code: 1,
          blog_name: "Cherry blossoms in Japan: 2021 guide",
          blog_image: "/images/Blog_1.png",
        },
        {
          blog_code: 2,
          blog_name: "Pet insurance – is it worth it ",
          blog_image: "/images/Blog_2.png",
        },
        {
          blog_code: 3,
          blog_name: "All about CareShield Life",
          blog_image: "/images/Blog_3.png",
        },
      ],
    };
  },
};
</script>

<style>
</style>