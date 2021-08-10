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
    <div class="__footer">
      <Feed />
    </div>
  </div>
</template>

<script>
import Feed from "../Feed.vue";
import ContactBody from "./explore_components/contact/ContactBody.vue";
import ContactHeader from "./explore_components/contact/ContactHeader.vue";
export default {
  components: {
    Feed,
    ContactHeader,
    ContactBody,
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