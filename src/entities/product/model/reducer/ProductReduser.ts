import type { Reducer } from 'redux';
import type { ProductStateType } from '../types/productTypes';
import type { ProductActions } from '../types/productAction';
import { ProductActionTypes } from '../actionTypes/productActionTypes';

const initialState: ProductStateType = {
  products: [],
  filteredProducts: [],
  filters: { category: [] },
  sort: { price: '', alpha: '' },
};

export const productReducer: Reducer<ProductStateType, ProductActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ProductActionTypes.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        filteredProducts: action.payload,
      };

    case ProductActionTypes.SET_FILTERS: {
      const filtered = state.products.filter(product =>
        state.filters.category.length
          ? state.filters.category.includes(product.category)
          : true
      );
      return { ...state, filters: action.payload, filteredProducts: filtered };
    }

    case ProductActionTypes.SET_SORT: {
      const { type, value } = action.payload;
      const newSort = { ...state.sort, [type]: value };

      let productsToSort = [...state.products];

      // применяем фильтры
      if (state.filters.category.length) {
        productsToSort = productsToSort.filter(p =>
          state.filters.category.includes(p.category)
        );
      }

      // сортировка по цене
      if (newSort.price) {
        productsToSort.sort((a, b) =>
          newSort.price === 'asc' ? a.price - b.price : b.price - a.price
        );
      }

      // сортировка по алфавиту
      if (newSort.alpha) {
        productsToSort.sort((a, b) =>
          newSort.alpha === 'asc'
            ? a.title.localeCompare(b.title)
            : b.title.localeCompare(a.title)
        );
      }

      return { ...state, filteredProducts: productsToSort, sort: newSort };
    }

    case ProductActionTypes.CLEAR_FILTERS:
      return {
        ...state,
        filters: { category: [] },
        filteredProducts: state.products,
        sort: { price: '', alpha: '' },
      };

    default:
      return state;
  }
};
