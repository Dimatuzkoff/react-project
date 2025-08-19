import type { StateSchema } from '@/app/config/store/stateSchema';

export const getProductsState = (state: StateSchema) => state.products;

export const getAllProducts = (state: StateSchema) => state.products.products;

export const getFilteredProducts = (state: StateSchema) =>
  state.products.filteredProducts;

export const getProductFilters = (state: StateSchema) => state.products.filters;

export const getProductSort = (state: StateSchema) => state.products.sort;

export const getFilteredAndSortedProducts = (state: StateSchema) => {
  return state.products.filteredProducts;
};

