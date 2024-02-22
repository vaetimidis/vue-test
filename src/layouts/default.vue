<script lang="ts" setup></script>

<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar title="Application bar" />

    <v-main
      class="d-flex align-center justify-center"
      style="min-height: 300px"
    >
      <slot />
    </v-main>
  </v-layout>
</template>
