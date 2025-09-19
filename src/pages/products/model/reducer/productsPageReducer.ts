import type { Reducer } from 'redux';
import type { ProductsPageStateSchema } from '../types/productsTypes';
import { ProductsPageActionTypes } from '../actionTypes/productsPageActionTypes';

const initialState: ProductsPageStateSchema = {
  selectedCategories: [],
  selectedBrands: [],
  priceFilter: { min: null, max: null },
  query: '',
  sort: null,
};

export const productsPageReducer: Reducer<
  ProductsPageStateSchema,
  ProductsPageActions
> = (state = initialState, action) => {
  switch (action.type) {
    case ProductsPageActionTypes.SET_CATEGORIES:
      return { ...state, selectedCategories: action.payload };

    case ProductsPageActionTypes.SET_BRANDS:
      return { ...state, selectedBrands: action.payload };

    case ProductsPageActionTypes.TOGGLE_CATEGORY: {
      const exists = state.selectedCategories.includes(action.payload);
      return {
        ...state,
        selectedCategories: exists
          ? state.selectedCategories.filter(c => c !== action.payload)
          : [...state.selectedCategories, action.payload],
      };
    }

    case ProductsPageActionTypes.TOGGLE_BRAND: {
      const exists = state.selectedBrands.includes(action.payload);
      return {
        ...state,
        selectedBrands: exists
          ? state.selectedBrands.filter(b => b !== action.payload)
          : [...state.selectedBrands, action.payload],
      };
    }

    case ProductsPageActionTypes.SET_QUERY:
      return { ...state, query: action.payload };

    case ProductsPageActionTypes.SET_PRICE_FILTER:
      return { ...state, priceFilter: action.payload };

    case ProductsPageActionTypes.SET_SORT:
      return { ...state, sort: action.payload };

    case ProductsPageActionTypes.RESET_FILTERS:
      return { ...initialState };

    default:
      return state;
  }
};
