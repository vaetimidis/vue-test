import axios from 'axios'
import { brandsApi } from './brands'
import { productsApi } from './products'

export interface ApiReturnType {
  products: ReturnType<typeof productsApi>
  brands: ReturnType<typeof brandsApi>
}

export function api() {
  const instance = axios.create({
    baseURL: '/',
    withCredentials: true,
  })

  const apis = {
    products: productsApi(instance),
    brands: brandsApi(instance),
  }

  return apis
}
