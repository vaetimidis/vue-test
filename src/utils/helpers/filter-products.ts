// ! Заглушка для сортировки, моковый бэк не успел бы написать

import type { IProduct } from '../../types/products'
import { api } from '@/utils'

export async function filterProducts(id: number): Promise<IProduct[]> {
  const response = await api().products.getFilteredProducts(id)
  const data = response.data

  let filteredProducts = data.filter((product: IProduct) => product.brand === id)

  if (id === 0)
    filteredProducts = data

  return filteredProducts
}
