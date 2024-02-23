<!-- eslint-disable vue/prop-name-casing -->
<script setup lang="ts">
interface Props {
  type: string
  id: number
  sku: string
  title: string
  regular_price: {
    currency: string
    value: number
  }
  image: string
  brand: number
}

defineProps<Props>()
</script>

<template>
  <v-card class="mx-auto">
    <v-img height="200" :src="image" class="text-white" />
    <v-card-subtitle class="text-center">
      {{ title }}
    </v-card-subtitle>
    <v-card-subtitle class="text-center">
      {{ brand }}
    </v-card-subtitle>
    <v-card-subtitle class="text-center">
      {{ regular_price.value }} $
    </v-card-subtitle>
  </v-card>
</template>
