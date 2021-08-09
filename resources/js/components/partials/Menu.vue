<template>
  <div class="__menu">
    <a href="" class="__headerMenu">
      <div class="__menuIcon">
        <img
          :src="header_menu.menu_icon"
          v-tooltip="'' + header_menu.tool_tip"
        />
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "header_menu",
  props: ["header_menu"],
};
</script>

<style>
</style>
