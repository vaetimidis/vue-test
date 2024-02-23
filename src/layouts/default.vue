<script setup lang="ts">
</script>

<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar title="Application bar" />

    <v-main
      class="d-flex align-center justify-center mt-10"
      style="min-height: 300px"
    >
      <slot />
    </v-main>
  </v-layout>
</template>
