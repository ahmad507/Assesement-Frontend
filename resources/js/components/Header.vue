<template>
  <div class="mcontainer">
    <div class="header">
      <router-link to="/welcome">
        <img
          class="__logo"
          src="https://api.insurediy.com.sg/storage/home/iDIY-3-logos.svg"
          alt="InsureDIY Logo"
      /></router-link>
      <Menu
        v-for="header_menu in menus"
        :key="header_menu.tool_tip"
        :header_menu="header_menu"
      />
      <div class="__logreg">
        <router-link to="/login">
          <a href="" class="__headerLogin">Login</a></router-link
        >
        <router-link to="/register">
          <a href="" class="__headerRegister">Register</a></router-link
        >
      </div>
    </div>
  </div>
</template>
<script>
import Menu from "./partials/Menu.vue";
import About from "./partials/explore/About.vue";
import Blog from "./partials/explore/Blog.vue";
import Contact from "./partials/explore/Contact.vue";
import Site from "./partials/explore/Site.vue";
export default {
  data() {
    return {
      mode: "history",
      components: {
        Menu,
        About,
        Blog,
        Contact,
        Site,
      },
      menus: [
        {
          tool_tip: "Blog",
          menu_icon: "/images/pen.svg",
          path: "/blog",
          name: "blog",
        },
        {
          tool_tip: "Contact Us",
          menu_icon: "/images/email.svg",
          path: "/contact_us",
          name: "contact_us",
        },
        {
          tool_tip: "Site Map",
          menu_icon: "/images/location.svg",
          path: "/site_map",
          name: "site_map",
        },
        {
          tool_tip: "About Us",
          menu_icon: "/images/idea.svg",
          path: "/about_us",
          name: "about_us",
        },
      ],
    };
  },
};
</script>
<style>
</style>