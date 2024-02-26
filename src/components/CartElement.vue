<!-- eslint-disable vue/no-mutating-props -->
<!-- eslint-disable vue/prop-name-casing -->
<script setup lang="ts">
import { defineProps } from 'vue'

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

function increaseAmount() {
//   props.amount += 1
}

function decreaseAmount() {
//   if (props.amount > 1)
//     props.amount--
}

function removeItem() {
  // Implement logic to remove item from the cart
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
        <!-- <p>Quantity: {{ amount }}</p> -->
        <button @click="increaseAmount">
          +
        </button>
        <button @click="decreaseAmount">
          -
        </button>
      </div>
      <!-- <p>Total: {{ regular_price.value * amount }} {{ regular_price.currency }}</p> -->
    </div>
    <v-icon class="delete-icon" @click="removeItem">
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
