<template>
  <div class="mcontainer">
    <ContactHeader />
    <div class="__contactBody">
      <ContactBody
        v-for="contact in contacts"
        :key="contact.flag"
        :contact="contact"
      />
    </div>
    <Footer />
  </div>
</template>
<script>
import Footer from "../../Footer.vue";
import ContactBody from "./explore_components/contact/ContactBody.vue";
import ContactHeader from "./explore_components/contact/ContactHeader.vue";
export default {
  components: {
    ContactHeader,
    ContactBody,
    Footer,
  },
  data() {
    return {
      contacts: [
        {
          country: "Singapore",
          flag: "https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Singapore.svg",
        },
        {
          country: "Malaysia",
          flag: "https://upload.wikimedia.org/wikipedia/commons/6/66/Flag_of_Malaysia.svg",
        },
        {
          country: "Hong Kong",
          flag: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Flag_of_Hong_Kong.svg",
        },
      ],
    };
  },
};
</script>

<style>
</style>