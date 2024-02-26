// ! Заглушка для сортировки, моковый бэк не успел бы написать

import { fetchProductsData } from './fetch-products'
import type { IProduct } from '@/store/product'

export async function sortProducts(id: number): Promise<IProduct[]> {
  const productsData: IProduct[] = await fetchProductsData()

  let filteredProducts = productsData.filter((product: IProduct) => product.brand === id)

  if (id === 0)
    filteredProducts = productsData

  return filteredProducts
}
