<template>
  <div class="mcontainer">
    <div class="__bodyContainer">
      <div class="__productContainer">
        <Product
          v-for="product in products"
          :key="product.color"
          :product="product"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Product from "./partials/Product.vue";
export default {
  components: {
    Product,
  },
  data() {
    return {
      products: [
        {
          title: "Guaranteed Saving",
          color: "green",
          bgtext: "GS",
          image_src: "/images/saving.png",
        },
        {
          title: "Investments",
          color: "blue",
          bgtext: "IN",
          image_src: "/images/investment.png",
        },
        {
          title: "Loans",
          color: "pink",
          bgtext: "LN",
          image_src: "/images/loan.png",
        },
        {
          title: "Insurances",
          color: "orange",
          bgtext: "IN",
          image_src: "/images/insurance.png",
        },
        {
          title: "Other Insurances",
          color: "red",
          bgtext: "OI",
          image_src: "/images/other_insurance.png",
        },
        {
          title: "Rewards",
          color: "mint",
          bgtext: "RE",
          image_src: "/images/reward.png",
        },
      ],
    };
  },
};
</script>

<style>
</style>