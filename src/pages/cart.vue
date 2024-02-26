<script lang="ts" setup>
import { useCartStore } from '../store/cart'
import Cart from '@/layouts/cart.vue'
import CartElement from '@/components/CartElement.vue'

const cartStore = useCartStore()
</script>

<template>
  <Cart>
    <v-container v-if="cartStore.items.length > 0">
      <v-col v-for="item in cartStore.items" :key="item.id">
        <CartElement v-bind="item" />
      </v-col>
      <v-container class="cart-footer">
        <v-row align="center" justify="end">
          <v-col cols="12">
            <p>Total: </p>
          </v-col>
          <v-col cols="12">
            <v-btn>
              Buy
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
    <v-container v-else class="fill-height">
      <v-row class="fill-height" align="center" justify="center">
        <v-col cols="12" class="text-center">
          <p>No items in cart yet</p>
          <router-link to="/" class="main-page-link">
            Go to Main Page
          </router-link>
        </v-col>
      </v-row>
    </v-container>
  </Cart>
</template>

<style scoped>
.cart-footer {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  padding: 10px;
  background-color: white;
}

.main-page-link {
  margin-top: 10px;
}

@media screen and (max-width: 768px) {
  .cart-footer {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    background-color: white;
    box-shadow: 0 -2px 4px rgba(0,0,0,0.1);
  }
}
</style>
