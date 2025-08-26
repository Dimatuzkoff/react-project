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

// payload для price фильтра
export type PriceFilterType = { min: number | null; max: number | null };

// отдельные типы экшенов
export type SetCategoriesActionType = {
  type: typeof SET_CATEGORIES;
  payload: string[];
};

export type SetBrandsActionType = {
  type: typeof SET_BRANDS;
  payload: string[];
};

export type ToggleCategoryActionType = {
  type: typeof TOGGLE_CATEGORY;
  payload: string;
};

export type ToggleBrandActionType = {
  type: typeof TOGGLE_BRAND;
  payload: string;
};

export type SetQueryActionType = {
  type: typeof SET_QUERY;
  payload: string;
};

export type SetPriceFilterActionType = {
  type: typeof SET_PRICE_FILTER;
  payload: PriceFilterType;
};

export type SetPriceSortDirectionActionType = {
  type: typeof SET_PRICE_SORT_DIRECTION;
  payload: 'asc' | 'desc' | null;
};

export type SetNameSortDirectionActionType = {
  type: typeof SET_NAME_SORT_DIRECTION;
  payload: 'asc' | 'desc' | null;
};

export type ResetFiltersActionType = {
  type: typeof RESET_FILTERS;
};

// объединённый тип для всех экшенов
export type ProductsPageActions =
  | SetCategoriesActionType
  | SetBrandsActionType
  | ToggleCategoryActionType
  | ToggleBrandActionType
  | SetQueryActionType
  | SetPriceFilterActionType
  | SetPriceSortDirectionActionType
  | SetNameSortDirectionActionType
  | ResetFiltersActionType;
