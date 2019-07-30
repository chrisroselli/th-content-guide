<template>
  <div>
    <v-app>
      <v-navigation-drawer v-model="drawer" app clipped>
        <Navigation />
      </v-navigation-drawer>

      <v-app-bar app clipped-left color="#73aa4a">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Treehouse Content Guide</v-toolbar-title>
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
      >
       &copy; {{ new Date().getFullYear() }} - Treehouse Internet Group
      </v-flex>
      </v-footer>
    </v-app>
  </div>
</template>


<script>
import Navigation from "../components/Navigation";

export default {
  data: () => ({
    drawer: null
  }),
  components: {
    Navigation
  }
};
</script>


