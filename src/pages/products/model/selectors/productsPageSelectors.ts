import type { StateSchema } from '@/app/config/store/stateSchema';
import type { Product } from '@/entities/product/model/types/product';

export const getProductsPageState = (state: StateSchema) => state.products;

export const getFilteredProducts = (
  state: StateSchema,
  products: Product[]
): Product[] => {
  const {
    priceSortDirection,
    nameSortDirection,
    priceFilter,
    query,
    selectedCategories,
    selectedBrands,
  } = state.products;

  let filtered = products.filter(p => {
    // поиск по тексту
    if (query && !p.title.toLowerCase().includes(query.toLowerCase()))
      return false;

    // фильтр по цене
    if (priceFilter) {
      if (priceFilter.min !== null && p.price < priceFilter.min) return false;
      if (priceFilter.max !== null && p.price > priceFilter.max) return false;
    }

    // фильтр по категориям
    if (
      selectedCategories.length &&
      !selectedCategories
        .map(c => c.toLowerCase().trim())
        .includes(p.category?.toLowerCase().trim() || '')
    )
      return false;

    // фильтр по брендам
    if (
      selectedBrands.length &&
      !selectedBrands
        .map(b => b.toLowerCase().trim())
        .includes(p.brand?.toLowerCase().trim() || '')
    )
      return false;

    return true;
  });

  // сортировка
  if (priceSortDirection === 'asc')
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  if (priceSortDirection === 'desc')
    filtered = [...filtered].sort((a, b) => b.price - a.price);
  if (nameSortDirection === 'asc')
    filtered = [...filtered].sort((a, b) => a.title.localeCompare(b.title));
  if (nameSortDirection === 'desc')
    filtered = [...filtered].sort((a, b) => b.title.localeCompare(a.title));

  return filtered;
};
