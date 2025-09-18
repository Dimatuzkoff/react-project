import type { StateSchema } from '@/app/config/store/stateSchema';
import type { Product } from '@/entities/product/model/types/product';

export const getProductsPageState = (state: StateSchema) => state.products;

export const getFilteredProducts = (
  state: StateSchema,
  products: Product[]
): Product[] => {
  const {
    sort,
    priceFilter,
    query,
    selectedCategories,
    selectedBrands,
  } = state.products;

  let filtered = products;

  // поиск по тексту
  if (query) {
    filtered = filtered.filter(p =>
      p.title.toLowerCase().includes(query.toLowerCase())
    );
  }

  // фильтр по цене
  if (priceFilter?.min != null) {
    filtered = filtered.filter(p => p.price >= priceFilter.min!);
  }
  if (priceFilter?.max != null) {
    filtered = filtered.filter(p => p.price <= priceFilter.max!);
  }

  // фильтр по категориям
  if (selectedCategories.length) {
    const catSet = new Set(selectedCategories.map(c => c.toLowerCase().trim()));
    filtered = filtered.filter(
      p => p.category && catSet.has(p.category.toLowerCase().trim())
    );
  }

  // фильтр по брендам
  if (selectedBrands.length) {
    const brandSet = new Set(selectedBrands.map(b => b.toLowerCase().trim()));
    filtered = filtered.filter(
      p => p.brand && brandSet.has(p.brand.toLowerCase().trim())
    );
  }

  // сортировка
  if (sort) {
    filtered = filtered.slice().sort((a, b) => {
      if (sort.type === 'price') {
        return sort.direction === 'asc' ? a.price - b.price : b.price - a.price;
      }
      if (sort.type === 'name') {
        const diff = a.title.localeCompare(b.title);
        return sort.direction === 'asc' ? diff : -diff;
      }
      if (sort.type === 'rating') {
        return sort.direction === 'asc'
          ? a.rating - b.rating
          : b.rating - a.rating;
      }
      return 0;
    });
  }

  return filtered;
};
