import { defineStore } from 'pinia'
import { type IProduct, useProductStore } from './product'
import { sortProducts } from '@/helpers/sort'
import { api } from '@/utils'

interface State {
  brands: IBrand[]
  selectedState: ISelectedState
  drawer: boolean
}

interface ISelectedState {
  brand: IBrand | null
  products: IProduct[]
}

export interface IBrand {
  id: number
  title: string
  sort: string
  code: string
}

export const useBrandStore = defineStore('brands', {
  state: (): State => ({
    brands: [],
    selectedState: {
      brand: null,
      products: [],
    },
    drawer: false,
  }),
  actions: {
    async fetchBrands() {
      try {
        const response = await api().brands.getBrands()
        this.brands = response.data
      }
      catch (error) {
        console.error('Error fetching brands: ', error)
      }
    },
    isBrandSelected(brand: IBrand): boolean {
      if (this.selectedState.brand && this.selectedState.brand.id === brand.id)
        return true
      return false
    },
    async selectBrand(brand: IBrand) {
      if (this.selectedState.brand && this.selectedState.brand.id === brand.id)
        return

      this.selectedState.brand = brand
      const result = await sortProducts(brand.id)
      this.drawer = !this.drawer

      const productStore = useProductStore()

      productStore.products = result
      this.selectedState.products = result
      localStorage.setItem('selectedState', JSON.stringify(this.selectedState))
    },
    async resetProducts() {
      this.selectedState.brand = null
      this.drawer = !this.drawer
      const productStore = useProductStore()

      const result = await sortProducts(0)
      productStore.products = result
      localStorage.removeItem('selectedState')
    },
  },
})
