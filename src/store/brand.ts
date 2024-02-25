import axios from 'axios'
import { defineStore } from 'pinia'

interface State {
  brands: {
    id: number
    title: string
    sort: string
    code: string
  }[]
}

export const useBrandStore = defineStore('brands', {
  state: (): State => ({
    brands: [],
  }),
  actions: {
    async fetchBrands() {
      try {
        const response = await axios.get('/public/brands.json')
        this.brands = response.data
      }
      catch (error) {
        console.error('Error fetching brands: ', error)
      }
    },
  },
})
