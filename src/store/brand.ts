import { defineStore } from 'pinia'
import { useProductStore } from './product'
import { filterProducts } from '@/utils/helpers/filter-products'
import { api } from '@/utils'
import type { IProduct } from '@/types/products'
import type { IBrand } from '@/types/brand'

interface State {
  brands: IBrand[]
  selectedState: ISelectedState
  drawer: boolean
}

interface ISelectedState {
  brand: IBrand | null
  products: IProduct[]
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
      this.drawer = !this.drawer

      const productStore = useProductStore()

      productStore.products = await filterProducts(brand.id)
      this.selectedState.products = await filterProducts(brand.id)
      localStorage.setItem('selectedState', JSON.stringify(this.selectedState))
    },
    async resetProducts() {
      this.selectedState.brand = null
      this.drawer = !this.drawer
      const productStore = useProductStore()

      productStore.products = await filterProducts(0)
      localStorage.removeItem('selectedState')
    },
  },
})
