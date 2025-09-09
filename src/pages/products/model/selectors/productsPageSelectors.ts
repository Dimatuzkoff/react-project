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
    lastSort,
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
  if (priceSortDirection || nameSortDirection) {
    filtered = filtered.slice().sort((a, b) => {
      const sortByPrice = () => {
        if (!priceSortDirection) return 0;
        return priceSortDirection === 'asc'
          ? a.price - b.price
          : b.price - a.price;
      };

      const sortByName = () => {
        if (!nameSortDirection) return 0;
        const diff = a.title.localeCompare(b.title);
        return nameSortDirection === 'asc' ? diff : -diff;
      };

      if (lastSort === 'price') {
        return sortByPrice() || sortByName();
      }
      if (lastSort === 'name') {
        return sortByName() || sortByPrice();
      }

      return 0;
    });
  }

  return filtered;
};
