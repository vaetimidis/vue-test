<script setup lang="ts">
import { ref } from 'vue'
import { useBrandStore } from '@/store/brand'

interface IBrand {
  id: number
  title: string
  sort: string
  code: string
}

const brandStore = useBrandStore()

brandStore.fetchBrands()
const drawer = ref(false)

const selectedBrand = ref<IBrand>()
function selectBrand(brand: IBrand) {
  selectedBrand.value = brand
  drawer.value = !drawer.value
}
</script>

<template>
  <v-layout class="rounded rounded-md">
    <v-app>
      <v-app-bar app>
        <v-app-bar-nav-icon @click="drawer = !drawer" />
        <v-toolbar-title>Privet</v-toolbar-title>
      </v-app-bar>
      <v-navigation-drawer v-model="drawer" app temporary>
        <v-card>
          <v-card-title>Brands</v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item v-for="brand in brandStore.brands" :key="brand.id" :class="{ 'brand-selected': selectedBrand === brand }" class="brand-item" @click="selectBrand(brand)">
                <v-list-item-title>{{ brand.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-navigation-drawer>
      <v-main
        class="d-flex align-center justify-center mt-10"
        style="min-height: 300px"
      >
        <slot />
      </v-main>
    </v-app>
  </v-layout>
</template>

 <style scoped>
 .container { max-width: 1400px;}
 .brand-item:hover { text-decoration: underline; }
 .brand-selected { text-decoration: underline; }
</style>
