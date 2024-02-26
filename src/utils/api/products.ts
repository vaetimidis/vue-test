import type { AxiosInstance, AxiosResponse } from 'axios'

export function productsApi(instance: AxiosInstance) {
  return {
    async getProducts(path?: string): Promise<AxiosResponse<any, any[]>> {
      return instance.get<any[]>('/products.json', { params: { path } })
    },
  }
}
