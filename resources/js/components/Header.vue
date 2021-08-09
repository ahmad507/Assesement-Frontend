<template>
  <div class="mcontainer">
    <div class="header">
      <img
        class="__logo"
        src="https://api.insurediy.com.sg/storage/home/iDIY-3-logos.svg"
        alt="InsureDIY Logo"
      />
      <Menu
        v-for="header_menu in menus"
        :key="header_menu.tool_tip"
        :header_menu="header_menu"
      />
      <div class="__logreg">
        <a href="" class="__headerLogin">Login</a>
        <a href="" class="__headerRegister">Register</a>
      </div>
    </div>
  </div>
</template>
<script>
import Menu from "./partials/Menu.vue";
export default {
  components: {
    Menu,
  },
  data() {
    return {
      menus: [
        {
          tool_tip: "Blog",
          menu_icon: "/images/pen.svg",
        },
        {
          tool_tip: "Contact Us",
          menu_icon: "/images/email.svg",
        },
        {
          tool_tip: "Site Map",
          menu_icon: "/images/location.svg",
        },
        {
          tool_tip: "About Us",
          menu_icon: "/images/idea.svg",
        },
      ],
    };
  },
};
</script>
<style>
</style>