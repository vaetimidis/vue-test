<script setup lang="ts">
import { useBrandStore } from '../store/brand'
import { useCartStore } from '../store/cart'
import { paths } from '@/router'

const brandStore = useBrandStore()
const cartStore = useCartStore()
</script>

<template>
  <v-layout class="rounded rounded-md">
    <v-app>
      <v-app-bar app class="fixed-header">
        <v-app-bar-nav-icon @click="brandStore.drawer = !brandStore.drawer" />
        <v-toolbar-title>Privet</v-toolbar-title>
        <router-link :to="paths.cart" class="icon-link">
          <v-badge
            v-if="cartStore.totalQuantity > 0"
            :content="cartStore.totalQuantity" overlap color="red"
          >
            <v-icon>mdi-cart</v-icon>
          </v-badge>
          <v-icon v-else>
            mdi-cart
          </v-icon>
        </router-link>
      </v-app-bar>
      <v-navigation-drawer
        v-model="brandStore.drawer"
        class="burger" app temporary
      >
        <v-card>
          <v-card-title>Brands</v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item
                v-for="brand in brandStore.brands"
                :key="brand.id"
                :class="{ 'brand-selected': brandStore.isBrandSelected(brand) }"
                class="brand-item"
                @click="brandStore.selectBrand(brand)"
              >
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
      >
        <slot />
      </v-main>
    </v-app>
  </v-layout>
</template>

<style scoped lang="scss">
.fixed-header {
  position: fixed !important;
  top: 0;
  width: 100%;
  z-index: 1000;
}

.burger {
  position: fixed !important;
  top: 20px;
  height: 100%;
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

.icon-link {
  text-decoration: none;

  &:hover {
 color: #ff5722;
  cursor: pointer;
  }
}
</style>
