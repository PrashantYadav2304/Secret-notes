<template>
  <!-- App.vue -->

  <v-app>
    <v-navigation-drawer 
      app
      temporary 
      v-model="drawer" 
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          active-class="primary--text text--accent"
        >
          <v-list-item @click="this.$router.push({ name: 'Home' })">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-life</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Life</v-list-item-title>
          </v-list-item>

          <v-list-item @click="this.$router.push({ name: 'About' })">
            <v-list-item-icon>
              <v-icon>mdi-about</v-icon>
            </v-list-item-icon>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
      <!-- -->
    </v-navigation-drawer>

    <v-app-bar app
    color="primary"
    >
    <v-app-bar-nav-icon 
    @click="drawer = true"
    class="hidden-md-and-up secondary--text"
    >
    </v-app-bar-nav-icon>
    <div>
      <v-toolbar-title class="white--text">SECRET NOTES</v-toolbar-title>
    </div>
    <v-spacer></v-spacer>
    <div class="mr-8">
      <v-tabs class="mx-auto hidden-sm-and-down">
        <v-tab :to="{ name: 'Home' }">Home</v-tab>
        <v-tab>Life</v-tab>
        <v-tab :to="{ name: 'About' }">About</v-tab>
      </v-tabs>
    </div>
      <!-- -->
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>     
     
      <!-- If using vue-router -->
      <router-view></router-view>
 
    </v-main>

    <v-footer app
    absolute 
    color="accent"
    height="80px">
      <!-- -->
      <p>This is a footer section</p>
    </v-footer>
  </v-app>
</template>

<script>


export default {
  name: 'App',


  data: () => ({
    //
    drawer: false,
  }),
};
</script>

<style>
  

</style>
