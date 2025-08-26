import {
  SET_PRICE_SORT_DIRECTION,
  SET_NAME_SORT_DIRECTION,
  SET_PRICE_FILTER,
  SET_QUERY,
  TOGGLE_CATEGORY,
  TOGGLE_BRAND,
  RESET_FILTERS,
  SET_CATEGORIES,
  SET_BRANDS,
} from '../actionTypes/productsPageTypes';

export const setPriceSortDirection = (direction: 'asc' | 'desc') => ({
  type: SET_PRICE_SORT_DIRECTION,
  payload: direction,
});

export const setNameSortDirection = (direction: 'asc' | 'desc') => ({
  type: SET_NAME_SORT_DIRECTION,
  payload: direction,
});

export const setPriceFilter = (payload: {
  min: number | null;
  max: number | null;
}) => ({
  type: SET_PRICE_FILTER,
  payload,
});

export const setQuery = (query: string) => ({
  type: SET_QUERY,
  payload: query,
});

export const toggleCategory = (category: string) => ({
  type: TOGGLE_CATEGORY,
  payload: category,
});

export const toggleBrand = (brand: string) => ({
  type: TOGGLE_BRAND,
  payload: brand,
});

export const setCategories = (categories: string[]) => ({
  type: SET_CATEGORIES,
  payload: categories,
});

export const setBrands = (brands: string[]) => ({
  type: SET_BRANDS,
  payload: brands,
});

export const resetFilters = () => ({
  type: RESET_FILTERS,
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