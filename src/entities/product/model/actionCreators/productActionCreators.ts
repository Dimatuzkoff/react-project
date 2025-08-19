import { ProductActionTypes } from '../actionTypes/productActionTypes';
import type { ProductActions, SetSortAction } from '../types/productAction';
import type { Product } from '../types/product';

const setProducts = (payload: Product[]): ProductActions => ({
  type: ProductActionTypes.SET_PRODUCTS,
  payload,
});

const setFilters = (payload: { category: string[] }): ProductActions => ({
  type: ProductActionTypes.SET_FILTERS,
  payload,
});

const setSort = (
  type: 'price' | 'alpha',
  value: 'asc' | 'desc'
): SetSortAction => ({
  type: ProductActionTypes.SET_SORT,
  payload: { type, value },
});


const clearFilters = (): ProductActions => ({
  type: ProductActionTypes.CLEAR_FILTERS,
});

export const productActionCreators = {
  setProducts,
  setFilters,
  setSort,
  clearFilters,
};
