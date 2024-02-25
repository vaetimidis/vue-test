import axios from 'axios'
import { defineStore } from 'pinia'

interface IBrand {
  id: number
  title: string
  sort: string
  code: string
}

interface State {
  brands: IBrand[]
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
