import type { AxiosInstance, AxiosPromise } from 'axios'
import type { IBrand } from '@/types/brand'

export function brandsApi(instance: AxiosInstance) {
  return {
    async getBrands(path?: string): AxiosPromise<IBrand[]> {
      return instance.get<any[]>('/brands.json', { params: { path } })
    },
  }
}
