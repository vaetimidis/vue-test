// Utilities
import { defineStore } from 'pinia'
import axios from 'axios'

interface State {
  products: {
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
  }[]
}

export const useProductStore = defineStore('product', {
  state: (): State => ({
    products: [],
  }),
  actions: {
    async fetchProducts() {
      try {
        const response = await axios.get('/public/products.json')
        this.products = response.data
      }
      catch (error) {
        console.error('Error fetching products:', error)
      }
    },
  },
})
