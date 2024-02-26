<script setup lang="ts">
import { onMounted } from 'vue'
import { useProductStore } from '../store/product'
import { useBrandStore } from '../store/brand'

const productStore = useProductStore()
const brandStore = useBrandStore()

onMounted(() => {
  const savedState = JSON.parse(localStorage.getItem('selectedState') || '{}')
  if (savedState.brand)
    brandStore.selectedState.brand = savedState.brand
})
</script>

<template>
  <v-layout class="rounded rounded-md">
    <v-app>
      <v-app-bar app class="fixed-header" style="position: fixed;">
        <v-app-bar-nav-icon @click="brandStore.drawer = !brandStore.drawer" />
        <v-toolbar-title>Privet</v-toolbar-title>
        <router-link to="/cart" class="icon-link">
          <v-badge :content="productStore.products.length" overlap>
            <v-icon>mdi-cart</v-icon>
          </v-badge>
        </router-link>
      </v-app-bar>
      <v-navigation-drawer v-model="brandStore.drawer" app temporary style="position: fixed; top: 20px; height: 100%;">
        <v-card>
          <v-card-title>Brands</v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item v-for="brand in brandStore.brands" :key="brand.id" :class="{ 'brand-selected': brandStore.isBrandSelected(brand) }" class="brand-item" @click="brandStore.selectBrand(brand)">
                <v-list-item-title>{{ brand.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
            <v-btn color="error" @click="brandStore.resetProducts()">
              Reset
            </v-btn>
          </v-card-text>
        </v-card>
      </v-navigation-drawer>
      <v-main
        class="d-flex align-start justify-start mt-10"
        style="min-height: 300px"
      >
        <slot />
      </v-main>
    </v-app>
  </v-layout>
</template>

<style scoped>
.fixed-header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}

.container {
  max-width: 1400px;
}

.brand-item:hover {
  text-decoration: underline;
}

.brand-selected {
  text-decoration: underline;
}

.icon-link {
  margin-right: 20px;
}

.v-navigation-drawer {
  position: fixed;
  top: 0;
}
</style>
