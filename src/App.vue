<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Note APP</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="logout">
        <span class="mr-2">Logout</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
    name: 'App',

    data() {
        return {
            //
        };
    },
    methods: {
        logout() {
            localStorage.clear();
            this.$router.push('/login');
        }
    }
};
</script>
