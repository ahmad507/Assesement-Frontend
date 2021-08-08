<template>
  <div class="product">
    <div class="product-image-wrap">
      <img :src="product.image_src" class="product-image" />
    </div>
    <div class="product-inner">
      <div class="product-text-wrap">
        <h2 class="bg-text">
          {{ product.title }}
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "product",
  props: ["product"],
};
</script>

<style>
</style>