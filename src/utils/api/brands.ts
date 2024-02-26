import type { AxiosInstance, AxiosPromise } from 'axios'
import type { IBrand } from '../../store/brand'

export function brandsApi(instance: AxiosInstance) {
  return {
    async getBrands(path?: string): AxiosPromise<IBrand[]> {
      return instance.get<any[]>('/brands.json', { params: { path } })
    },
  }
}
