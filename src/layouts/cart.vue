<script lang="ts" setup>

</script>

<template>
  <v-app>
    <v-app-bar app class="centered-header">
      <v-toolbar-title>Privet</v-toolbar-title>
      <v-spacer />
      <router-link to="/" class="home-link">
        Home
      </router-link>
    </v-app-bar>
    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>

<style scoped>
.centered-header {
  display: flex;
  justify-content: center;
  align-items: center;
}

.home-link {
  margin-right: 20px;
}
</style>
