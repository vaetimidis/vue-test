<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { IProduct } from '../store/product'
import { sortProducts } from '@/helpers/sort'
import { useBrandStore } from '@/store/brand'
import { useProductStore } from '@/store/product'

export interface IBrand {
  id: number
  title: string
  sort: string
  code: string
}

interface State {
  brand: IBrand | null
  products: IProduct[]
}

const productsStore = useProductStore()
const brandStore = useBrandStore()
brandStore.fetchBrands()

const drawer = ref(false)

const state = ref<State>({
  brand: null,
  products: [],
})

function isBrandSelected(brand: IBrand): boolean {
  if (state.value.brand && state.value.brand.id === brand.id)
    return true

  return false
}

async function selectBrand(brand: IBrand) {
  state.value.brand = brand
  drawer.value = !drawer.value

  const result = await sortProducts(brand.id)

  productsStore.products = result
  state.value.products = result
  localStorage.setItem('selectedState', JSON.stringify(state.value))
}

async function resetProducts() {
  state.value.brand = null
  drawer.value = !drawer.value
  const result = await sortProducts(0)

  productsStore.products = result
  localStorage.removeItem('selectedState')
}

onMounted(() => {
  const savedState = JSON.parse(localStorage.getItem('selectedState') || '{}')
  if (savedState.brand)
    state.value.brand = savedState.brand
})
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
              <v-list-item v-for="brand in brandStore.brands" :key="brand.id" :class="{ 'brand-selected': isBrandSelected(brand) }" class="brand-item" @click="selectBrand(brand)">
                <v-list-item-title>{{ brand.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
            <v-btn color="error" @click="resetProducts">
              Reset
            </v-btn>
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
