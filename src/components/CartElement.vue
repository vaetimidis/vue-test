<!-- eslint-disable vue/no-mutating-props -->
<!-- eslint-disable vue/prop-name-casing -->
<script setup lang="ts">
import { defineProps, ref } from 'vue'
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

function updateQuantity(id: number, target: EventTarget | null): void {
  if (target) {
    const value = (target as HTMLInputElement).value
    quantity.value = +value

    if (quantity.value > 0)
      cartStore.updateQuantity(id, quantity.value)
    else cartStore.removeItem(id)
  }
}

function removeItem(id: number) {
  cartStore.removeItem(id)
}
</script>

<template>
  <div class="cart-item">
    <div class="cart-item__image">
      <img :src="image" alt="Product Image">
    </div>
    <div class="cart-item__details">
      <p>{{ brand }} / {{ title }}</p>
      <p>Price: {{ regular_price.value }} $</p>
      <div class="cart-item__quantity">
        <p>Quantity:</p>
        <div class="quantity-input">
          <input type="number" :value="quantity" @input="updateQuantity(id, $event.target)">
        </div>
      </div>
      <p>Total: {{ (regular_price.value * quantity).toFixed(2) }} {{ regular_price.currency }}</p>
    </div>
    <v-icon class="delete-icon" @click="removeItem(id)">
      mdi-delete
    </v-icon>
  </div>
</template>

<style scoped lang="scss">
.cart-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding: 10px;
  width: 100%;

  &__image {
    flex: 0 0 200px;
    margin-right: 10px;

    img {
        width: 100%;
        height: auto;
    }
  }

  &__details {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }

  &__quantity {
    display: flex;
    align-items: center;
  }
}

.delete-icon {
  cursor: pointer;
}

.cart-item__quantity {
  display: flex;
  align-items: center;
}

.quantity-input {
  display: flex;
  align-items: center;
}

.quantity-input input {
  width: 40px;
  text-align: center;
}

.quantity-input button {
  padding: 5px 10px;
  cursor: pointer;
}

@media (max-width: 768px) {
.cart-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding: 10px;
  width: 100%;

  &__image {
    flex: 0 0 200px;
    margin-right: 10px;

    img {
        width: 100%;
        height: auto;
    }
  }

  &__details {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }

  &__quantity {
    display: flex;
    align-items: center;
  }
}
  };
</style>
