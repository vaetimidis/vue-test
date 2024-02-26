import type { AxiosInstance, AxiosResponse } from 'axios'

export function brandsApi(instance: AxiosInstance) {
  return {
    async getBrands(path?: string): Promise<AxiosResponse<any, any[]>> {
      return instance.get<any[]>('/brands.json', { params: { path } })
    },
  }
}
