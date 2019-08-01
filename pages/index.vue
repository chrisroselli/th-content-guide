<template>
  <v-container text-center>
    <v-layout>
      <v-flex xs12>
      <Logo logo-prime-color="#48403e" logo-second-color="#589240" />
      <p class="headline mt-10">Welcome to the Treehouse Content Guide</p>
      <p class="body-1"> Here you will find blah blah blah.</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Logo from "../components/Logo";

import { createClient } from "../plugins/contentful";
const contentfulClient = createClient();

export default {
  components: {
    Logo
  }
};
</script>

<style scoped lang="scss">
.container {
  padding: 50px;
  max-width: 1280px;
  margin: 0 auto;
}
.container__content {
  padding: 50px 0;
  text-align: center;
}
#treehouse-logo {
    width:300px;
}
</style>
