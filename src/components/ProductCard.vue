<!-- eslint-disable vue/prop-name-casing -->
<script setup lang="ts">
import { ref } from 'vue'

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

const quantity = ref(0)

function decrement() {
  if (quantity.value > 0)
    quantity.value--
}
function addItem() {
  quantity.value = 1
}

function increment() {
  quantity.value++
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
    <template v-if="quantity === 0">
      <v-btn class="w-100" @click="addItem">
        Buy
      </v-btn>
    </template>
    <template v-else>
      <div class="active-btn">
        <v-btn class="button-minus" @click="decrement">
          -
        </v-btn>
        <span>{{ quantity }}</span>
        <v-btn class="button-plus" @click="increment">
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
