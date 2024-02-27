import type { AxiosInstance, AxiosPromise } from 'axios'
import type { IProduct } from '../../store/product'

export function productsApi(instance: AxiosInstance) {
  return {
    async getProducts(): AxiosPromise<IProduct[]> {
      return instance.get<any[]>('/products.json')
    },
    async getFilteredProducts(id: number): AxiosPromise<IProduct[]> {
      return instance.get<any[]>('/products.json', { params: { id } })
    },
  }
}
