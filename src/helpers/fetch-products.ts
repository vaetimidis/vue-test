import type { IProduct } from '@/store/product'

export async function fetchProductsData(): Promise<IProduct[]> {
  const response = await fetch('/products.json')
  const data = await response.json()
  return data
}
