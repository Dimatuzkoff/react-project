import { ProductsPageActionTypes } from '../actionTypes/productsPageActionTypes';
import type { ProductsPageStateSchema } from '../types/productsTypes';

export const setPriceSortDirection = (
  direction: ProductsPageStateSchema['priceSortDirection']
) => ({
  type: ProductsPageActionTypes.SET_PRICE_SORT_DIRECTION,
  payload: direction,
});

export const setNameSortDirection = (
  direction: ProductsPageStateSchema['nameSortDirection']
) => ({
  type: ProductsPageActionTypes.SET_NAME_SORT_DIRECTION,
  payload: direction,
});

export const setPriceFilter = (payload: ProductsPageStateSchema['priceFilter']) => ({
  type: ProductsPageActionTypes.SET_PRICE_FILTER,
  payload,
});

export const setQuery = (query: ProductsPageStateSchema['query']) => ({
  type: ProductsPageActionTypes.SET_QUERY,
  payload: query,
});

export const toggleCategory = (category: string) => ({
  type: ProductsPageActionTypes.TOGGLE_CATEGORY,
  payload: category,
});

export const toggleBrand = (brand: string) => ({
  type: ProductsPageActionTypes.TOGGLE_BRAND,
  payload: brand,
});

export const setCategories = (categories: string[]) => ({
  type: ProductsPageActionTypes.SET_CATEGORIES,
  payload: categories,
});

export const setBrands = (brands: string[]) => ({
  type: ProductsPageActionTypes.SET_BRANDS,
  payload: brands,
});

export const resetFilters = () => ({
  type: ProductsPageActionTypes.RESET_FILTERS,
});

export const productsPageActionCreators = {
  setPriceSortDirection,
  setNameSortDirection,
  setPriceFilter,
  setQuery,
  toggleCategory,
  toggleBrand,
  resetFilters,
  setCategories,
  setBrands,
};
