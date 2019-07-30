<template>
  <div>
    <v-app id="inspire">
      <v-navigation-drawer v-model="drawer" app clipped>
        <Navigation />
      </v-navigation-drawer>

      <v-app-bar app clipped-left>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Treehoue Content Guide</v-toolbar-title>
      </v-app-bar>

      <v-content>
        <v-container fluid>
          <nuxt />
        </v-container>
      </v-content>

      <v-footer app >
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


