<!-- eslint-disable vue/prop-name-casing -->
<script setup lang="ts">
import { ref } from 'vue'
import { useCartStore } from '../store/cart'

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

const props = defineProps<Props>()

const cartStore = useCartStore()
const quantity = ref(0)

quantity.value = cartStore.getItem(props.id)

function decrement(id: number) {
  quantity.value -= 1

  if (quantity.value > 0)
    cartStore.updateQuantity(id, quantity.value)

  else cartStore.removeItem(id)
}
function addItem(id: number) {
  quantity.value = 1
  cartStore.addItem(id, quantity.value)
}

function increment(id: number) {
  quantity.value += 1
  cartStore.updateQuantity(id, quantity.value)
}
</script>

<template>
  <v-card class="mx-auto">
    <v-img height="200" :src="image" class="text-white" />
    <v-card-subtitle class="text-center">
      {{ title }}
    </v-card-subtitle>
    <v-card-subtitle class="text-center">
      brand: {{ brand }}
    </v-card-subtitle>
    <v-card-subtitle class="text-center">
      price: {{ regular_price.value }} $
    </v-card-subtitle>
    <template v-if="cartStore.getItem(id) === 0">
      <v-btn class="w-100" @click="addItem(id)">
        Buy
      </v-btn>
    </template>
    <template v-else>
      <div class="active-btn">
        <v-btn class="button-minus" @click="decrement(id)">
          -
        </v-btn>
        <span>{{ cartStore.getItem(id) ? cartStore.getItem(id) : quantity }}</span>
        <v-btn class="button-plus" @click="increment(id)">
          +
        </v-btn>
      </div>
    </template>
  </v-card>
</template>

<style scoped>
.v-btn {
  margin-top: 15px;
  width: 100%;
}

.active-btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
}

.button-minus, .button-plus {
  margin: 0;
  width: 25%;
}
</style>
