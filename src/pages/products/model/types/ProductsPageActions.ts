import { ProductsPageActionTypes } from '../actionTypes/productsPageActionTypes';
import type { ISortType } from '@/shared/model/types/ISortType';

// payload для price фильтра
export type PriceFilterType = { min: number | null; max: number | null };

// отдельные типы экшенов
export type SetCategoriesActionType = {
  type: typeof ProductsPageActionTypes.SET_CATEGORIES;
  payload: string[];
};

export type SetBrandsActionType = {
  type: typeof ProductsPageActionTypes.SET_BRANDS;
  payload: string[];
};

export type ToggleCategoryActionType = {
  type: typeof ProductsPageActionTypes.TOGGLE_CATEGORY;
  payload: string;
};

export type ToggleBrandActionType = {
  type: typeof ProductsPageActionTypes.TOGGLE_BRAND;
  payload: string;
};

export type SetQueryActionType = {
  type: typeof ProductsPageActionTypes.SET_QUERY;
  payload: string;
};

export type SetPriceFilterActionType = {
  type: typeof ProductsPageActionTypes.SET_PRICE_FILTER;
  payload: PriceFilterType;
};

export type SetPriceSortDirectionActionType = {
  type: typeof ProductsPageActionTypes.SET_PRICE_SORT_DIRECTION;
  payload: ISortType['direction'] | null;
};

export type SetNameSortDirectionActionType = {
  type: typeof ProductsPageActionTypes.SET_NAME_SORT_DIRECTION;
  payload: ISortType['direction'] | null;
};

export type ResetFiltersActionType = {
  type: typeof ProductsPageActionTypes.RESET_FILTERS;
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
