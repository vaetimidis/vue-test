<script lang="ts" setup>
import { paths } from '@/router'
</script>

<template>
  <v-app>
    <v-app-bar app class="centered-header">
      <v-toolbar-title>Privet</v-toolbar-title>
      <v-spacer />
      <router-link :to="paths.home" class="home-link">
        Home
      </router-link>
    </v-app-bar>
    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>

<style scoped lang="scss">
.centered-header {
  display: flex;
  justify-content: center;
  align-items: center;
}

.home-link {
  margin-right: 20px;
  text-decoration: none;

  &:hover {
    color: #ff5722;
    cursor: pointer;
  }
}
</style>
