<template>
  <div>
    <v-app>
      <v-navigation-drawer v-model="drawer" app clipped>
        <Navigation />
      </v-navigation-drawer>

      <v-app-bar app clipped-left color="#73aa4a">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-flex pt-3 pl-1>
          <nuxt-link to="/"><Logo logo-prime-color="#fff" logo-second-color="#fff" /></nuxt-link>
        </v-flex>
      </v-app-bar>

      <v-content>
        <v-container fluid>
          <nuxt />
        </v-container>
      </v-content>

      <v-footer app color="#473f3d">
           <v-flex
        text-center
        xs12
        class="white--text caption"
      >
       &copy; {{ new Date().getFullYear() }} - Treehouse Internet Group
      </v-flex>
      </v-footer>
    </v-app>
  </div>
</template>


<script>
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";

export default {
  data: () => ({
    drawer: null
  }),
  components: {
    Navigation,
    Logo
  }
};
</script>
<style scoped>
.v-btn--outlined .v-btn__content .v-icon, .v-btn--round .v-btn__content .v-icon {
    color: #fff;
}
#treehouse-logo {
    width:150px;
}
</style>



