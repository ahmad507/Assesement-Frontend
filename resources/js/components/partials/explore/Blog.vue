<template>
  <div class="mcontainer">
    <BlogHeader />
    <div class="__blogBody">
      <BlogBody v-for="blog in blogs" :key="blog.blog_image" :blog="blog" />
    </div>
    <div class="__footer">
      <Feed />
    </div>
  </div>
</template>

<script>
import BlogHeader from "./explore_components/blog/BlogHeader.vue";
import BlogBody from "./explore_components/blog/BlogBody.vue";
import Feed from "../Feed.vue";

export default {
  components: {
    BlogHeader,
    BlogBody,
    Feed,
  },
  data() {
    return {
      blogs: [
        {
          title: "Cherry blossoms in Japan: 2021 guide",
          blog_image: "/images/Blog_1.png",
        },
        {
          title: "Pet insurance - is it worth it",
          blog_image: "/images/Blog_2.png",
        },
        {
          title: "All about CareShield Life",
          blog_image: "/images/Blog_3.png",
        },
        {
          title: "China’s Recent Regulatory Actions Causes Concerns",
          blog_image: "/images/Blog_4.png",
        },
        {
          title: "3 Ways Life Protection Can Help Your Loved Ones",
          blog_image: "/images/Blog_5.png",
        },
        {
          title: "How To Get The Best Flight Deals?",
          blog_image: "/images/Blog_6.png",
        },
      ],
    };
  },
};
</script>

<style>
</style>