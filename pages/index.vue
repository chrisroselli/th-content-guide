<template>
  <v-container>
    <v-layout text-center>
      <v-flex xs12>
      <Logo logo-prime-color="#48403e" logo-second-color="#589240" />
      <p class="headline mt-10">Welcome to the Treehouse Content Guide</p>
      <p class="body-2">Here you will find helpful documents for all things contentful.</p>
          </v-flex>
              </v-layout>
              <hr>
              <v-layout justify-center>
            <v-flex xs10>
      <h3>Contribution</h3>
      <p>To contribute to this resource we will need to create a user account for you. Please send your company email address to <a href="mailto:croselli@contractornation.com" target="_blank">croselli@contractornation.com</a>. You will then receive an email invite to create your account. Once complete, you will receive some brief CMS training and be on your way.</p>
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
.v-application p {
    margin-bottom: 5px;
}
</style>
