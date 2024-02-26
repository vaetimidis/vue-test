// Utilities
import { defineStore } from 'pinia'
import type { IBrand } from './brand'
import { api } from '@/utils'

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
        const response = await api().products.getProducts()
        this.products = response.data

        const localStorageProducts = JSON.parse(localStorage.getItem('selectedState') || '[]') as State
        if (localStorageProducts.products)
          this.products = localStorageProducts.products

        else localStorage.setItem('selectedState', JSON.stringify(this.products))
      }
      catch (error) {
        console.error('Error fetching products:', error)
      }
    },
  },
})
