import { defineStore } from 'pinia'

export interface ICartItem {
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

interface State {
  items: ICartItem[]
}

export const useCartStore = defineStore('cart', {
  state: (): State => ({
    items: JSON.parse(localStorage.getItem('cartItems') || '[]') as ICartItem[],
  }),
  actions: {
    addItem() {
      localStorage.setItem('cartItems', JSON.stringify(this.items))
    },

  },
})
