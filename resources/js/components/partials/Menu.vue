<template>
  <router-link v-bind:to="header_menu.path" tag="a">
    <div class="__menu">
      <a class="__headerMenu"
        ><div class="__menuIcon">
          <img
            :src="header_menu.menu_icon"
            v-tooltip="'' + header_menu.tool_tip"
          /></div
      ></a>
    </div>
  </router-link>
</template>
<script>
export default {
  name: "header_menu",
  props: ["header_menu"],
};
</script>

<style>
</style>
