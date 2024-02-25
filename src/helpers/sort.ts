// ! Заглушка для сортировки, моковый бэк не успел бы написать

import type { IProduct } from '@/store/product'

export async function sortProducts(id: number): Promise<IProduct[]> {
  const productsData: IProduct[] = await fetchProductsData()

  let filteredProducts = productsData.filter((product: IProduct) => product.brand === id)

  if (id === 0)
    filteredProducts = productsData

  return filteredProducts
}

export async function fetchProductsData(): Promise<IProduct[]> {
  const response = await fetch('/products.json')
  const data = await response.json()
  return data
}
