<script lang="ts" setup>
import { useProductStore } from '../store/product'
import Default from '@/layouts/default.vue'
import Card from '@/components/Card.vue'

const productStore = useProductStore()

productStore.fetchProducts()
</script>

<template>
  <Default>
    <v-container>
      <v-row align="center" wrap>
        <v-col v-for="item in productStore.products" :key="item.id" cols="3">
          <Card v-bind="item" />
        </v-col>
      </v-row>
    </v-container>
  </Default>
</template>
