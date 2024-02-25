<script lang="ts" setup>
import { useProductStore } from '../store/product'
import Default from '@/layouts/default.vue'
import ProductCard from '@/components/ProductCard.vue'

const productStore = useProductStore()

productStore.fetchProducts()
</script>

<template>
  <Default>
    <v-container class="container">
      <v-row align="start" wrap>
        <v-col v-for="item in productStore.products" :key="item.id" cols="12" sm="6" md="4" lg="3">
          <ProductCard v-bind="item" />
        </v-col>
      </v-row>
    </v-container>
  </Default>
</template>
