import type { AxiosInstance, AxiosPromise } from 'axios'
import type { IProduct } from '../../store/product'

export function productsApi(instance: AxiosInstance) {
  return {
    async getProducts(path?: string): AxiosPromise<IProduct[]> {
      return instance.get<any[]>('/products.json', { params: { path } })
    },
  }
}
