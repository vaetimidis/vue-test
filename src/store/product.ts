// Utilities
import { defineStore } from 'pinia'
import axios from 'axios'
import type { IBrand } from '@/layouts/default.vue'

export interface IProduct {
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
  products: IProduct[]
  brand: IBrand | null
}

export const useProductStore = defineStore('product', {
  state: (): State => ({
    products: JSON.parse(localStorage.getItem('selectedState') || '[]') as IProduct[],
    brand: JSON.parse(localStorage.getItem('selectedState') || 'null') as IBrand,
  }),
  actions: {
    async fetchProducts() {
      try {
        const response = await axios.get('/public/products.json')
        this.products = response.data
        const localStorageProducts = JSON.parse(localStorage.getItem('selectedState') || '[]') as State
        if (localStorageProducts.products.length > 0)
          this.products = localStorageProducts.products

        else localStorage.setItem('selectedState', JSON.stringify(this.products))
      }
      catch (error) {
        console.error('Error fetching products:', error)
      }
    },
  },
})
