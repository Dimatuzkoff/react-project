// entities/product/model/types/productAction.ts
import type { Product } from './product';

export interface SetProductsAction {
  type: 'SET_PRODUCTS';
  payload: Product[];
}

export interface SetFiltersAction {
  type: 'SET_FILTERS';
  payload: { category: string[] };
}

export interface SetSortAction {
  type: 'SET_SORT';
  payload: {
    type: 'price' | 'alpha';
    value: 'asc' | 'desc';
  };
}


export interface ClearFiltersAction {
  type: 'CLEAR_FILTERS';
}

export type ProductActions =
  | SetProductsAction
  | SetFiltersAction
  | SetSortAction
  | ClearFiltersAction;

