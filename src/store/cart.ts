/* eslint-disable no-alert */
import { defineStore } from 'pinia'
import type { IProduct } from './product'
import { api } from '@/utils'

export interface ICartItem {
  id: number
  quantity: number
}

interface State {
  items: ICartItem[]
  products: IProduct[]
}

export const useCartStore = defineStore('cart', {
  state: (): State => ({
    items: JSON.parse(localStorage.getItem('cartItems') || '[]') as ICartItem[],
    products: [],
  }),
  getters: {
    totalPrice(): number {
      return this.items.reduce((total, item) => {
        const product = this.products.find(product => product.id === item.id)
        if (product)
          return Number.parseFloat((total + product.regular_price.value * item.quantity).toFixed(2))

        return Number.parseFloat(total.toFixed(2))
      }, 0)
    },
  },
  actions: {
    addItem(id: number, quantity: number) {
      const existingItem = this.items.find(item => item.id === id)
      if (existingItem)
        existingItem.quantity += quantity
      else
        this.items.push({ id, quantity })

      localStorage.setItem('cartItems', JSON.stringify(this.items))
    },
    removeItem(id: number) {
      this.items = this.items.filter(item => item.id !== id)

      const cartItemIds = this.items.map(item => item.id)
      const cartItems = this.products.filter(product => cartItemIds.includes(product.id))

      this.products = cartItems
      localStorage.setItem('cartItems', JSON.stringify(this.items))
    },
    updateQuantity(id: number, quantity: number) {
      const existingItem = this.items.find(item => item.id === id)
      if (existingItem) {
        existingItem.quantity = quantity
        localStorage.setItem('cartItems', JSON.stringify(this.items))
      }
    },
    async fetchItems() {
      try {
        const response = await api().products.getProducts()
        this.products = response.data

        const cartItemIds = this.items.map(item => item.id)
        const cartItems = this.products.filter(product => cartItemIds.includes(product.id))

        this.products = cartItems
      }
      catch (error) {
        console.error(error)
      }
    },
    getItem(id: number) {
      const existingItem = this.items.find(item => item.id === id)
      return existingItem?.quantity ? existingItem.quantity : 0
    },
    async buyItems() {
      const itemsString = this.items.map((item) => {
        return `{ id: ${item.id}, quantity: ${item.quantity} }`
      })
      alert(itemsString.join(', '))
    },
  },
})
