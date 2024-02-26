<script lang="ts" setup>
import { useProductStore } from '../store/product'
import Default from '@/layouts/default.vue'
import ProductCard from '@/components/ProductCard.vue'
import { useBrandStore } from '@/store/brand'

const productStore = useProductStore()
const brandStore = useBrandStore()

productStore.fetchProducts()
brandStore.fetchBrands()
</script>

<template>
  <Default>
    <v-container class="container">
      <v-row v-if="!!productStore.products.length" wrap class="align-top">
        <v-col v-for="item in productStore.products" :key="item.id" cols="12" sm="6" md="4" lg="3">
          <ProductCard v-bind="item" />
        </v-col>
      </v-row>
      <v-row v-else align="center" justify="center">
        <v-col cols="12" class="text-center">
          <p>No items found</p>
        </v-col>
      </v-row>
    </v-container>
  </Default>
</template>
